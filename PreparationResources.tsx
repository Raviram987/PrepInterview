import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, Youtube, Code, Brain, BookOpen } from 'lucide-react';

const resources = {
  'software-engineer': {
    videos: [
      { title: 'Google System Design Interview Guide', url: 'https://www.youtube.com/watch?v=q0KGYwNbf-0' },
      { title: 'Data Structures and Algorithms in Google', url: 'https://www.youtube.com/watch?v=XKu_SEDAykw' },
      { title: 'Google Interview Experience', url: 'https://www.youtube.com/watch?v=wwIysnVmAUg' }
    ],
    technical: [
      'Explain how garbage collection works in different programming languages',
      'What are the differences between process and thread?',
      'Describe the CAP theorem and its implications',
      'How would you design a distributed cache?',
      'Explain the concept of eventual consistency'
    ],
    dsa: [
      'Implement a LRU Cache with O(1) operations',
      'Design a system to detect cycles in a directed graph',
      'Implement a thread-safe singleton pattern',
      'Write an algorithm for consistent hashing',
      'Design a rate limiter'
    ],
    leetcode: [
      { title: 'Two Sum', difficulty: 'Easy', url: 'https://leetcode.com/problems/two-sum/' },
      { title: 'LRU Cache', difficulty: 'Medium', url: 'https://leetcode.com/problems/lru-cache/' },
      { title: 'Merge K Sorted Lists', difficulty: 'Hard', url: 'https://leetcode.com/problems/merge-k-sorted-lists/' }
    ]
  },
  'data-scientist': {
    videos: [
      { title: 'Machine Learning Interview Preparation', url: 'https://www.youtube.com/watch?v=_9WiB2PDO7k' },
      { title: 'Statistics for Data Science', url: 'https://www.youtube.com/watch?v=Vfo5le26IhY' },
      { title: 'SQL for Data Scientists', url: 'https://www.youtube.com/watch?v=HXV3zeQKqGY' }
    ],
    technical: [
      'Explain the difference between L1 and L2 regularization',
      'How does Random Forest work?',
      'What is the curse of dimensionality?',
      'Explain cross-validation and its importance',
      'What are different types of sampling methods?'
    ],
    dsa: [
      'Implement K-means clustering from scratch',
      'Write code for gradient descent optimization',
      'Implement a decision tree algorithm',
      'Code a simple neural network',
      'Build a recommendation system'
    ],
    leetcode: [
      { title: 'Maximum Subarray', difficulty: 'Easy', url: 'https://leetcode.com/problems/maximum-subarray/' },
      { title: 'K Closest Points', difficulty: 'Medium', url: 'https://leetcode.com/problems/k-closest-points-to-origin/' },
      { title: 'Median of Data Stream', difficulty: 'Hard', url: 'https://leetcode.com/problems/find-median-from-data-stream/' }
    ]
  },
  'full-stack-developer': {
    videos: [
      { title: 'Full Stack Development Overview', url: 'https://www.youtube.com/watch?v=7CqJlxBYj-M' },
      { title: 'System Design for Full Stack', url: 'https://www.youtube.com/watch?v=F5vxBJj3Kpk' },
      { title: 'React and Node.js Interview Questions', url: 'https://www.youtube.com/watch?v=Oe421EPjeBE' }
    ],
    technical: [
      'Explain how React\'s Virtual DOM works',
      'What are microservices and their advantages?',
      'Describe the OAuth 2.0 authentication flow',
      'How does server-side rendering work?',
      'Explain CORS and how to handle it'
    ],
    dsa: [
      'Implement a real-time chat system',
      'Design a URL shortener service',
      'Create a task scheduler',
      'Build a caching middleware',
      'Implement JWT authentication'
    ],
    leetcode: [
      { title: 'Valid Parentheses', difficulty: 'Easy', url: 'https://leetcode.com/problems/valid-parentheses/' },
      { title: 'Design Twitter', difficulty: 'Medium', url: 'https://leetcode.com/problems/design-twitter/' },
      { title: 'Design Search Autocomplete', difficulty: 'Hard', url: 'https://leetcode.com/problems/design-search-autocomplete-system/' }
    ]
  },
  'ios-developer': {
    videos: [
      { title: 'iOS Interview Preparation Guide', url: 'https://www.youtube.com/watch?v=iOSqYKgR7Hs' },
      { title: 'Swift Programming Deep Dive', url: 'https://www.youtube.com/watch?v=comQ1-x2a1Q' },
      { title: 'iOS Architecture Patterns', url: 'https://www.youtube.com/watch?v=FV-8qxzEz5c' }
    ],
    technical: [
      'Explain the difference between Struct and Class in Swift',
      'What is ARC and how does it work?',
      'Describe the app lifecycle in iOS',
      'How do you handle memory management in iOS?',
      'Explain protocol-oriented programming'
    ],
    dsa: [
      'Implement a custom collection view layout',
      'Create a thread-safe singleton in Swift',
      'Build a responsive UI with Auto Layout',
      'Design a caching system for images',
      'Implement pull-to-refresh functionality'
    ],
    leetcode: [
      { title: 'Reverse String', difficulty: 'Easy', url: 'https://leetcode.com/problems/reverse-string/' },
      { title: 'Group Anagrams', difficulty: 'Medium', url: 'https://leetcode.com/problems/group-anagrams/' },
      { title: 'LFU Cache', difficulty: 'Hard', url: 'https://leetcode.com/problems/lfu-cache/' }
    ]
  },
  'embedded-systems-engineer': {
    videos: [
      { title: 'Embedded Systems Fundamentals', url: 'https://www.youtube.com/watch?v=3V9eqvkMzHA' },
      { title: 'Real-Time Operating Systems', url: 'https://www.youtube.com/watch?v=F321087yYy4' },
      { title: 'Embedded C Programming', url: 'https://www.youtube.com/watch?v=LW8Rfh6TzGg' }
    ],
    technical: [
      'Explain the difference between microprocessors and microcontrollers',
      'What is a watchdog timer and its importance?',
      'How do you handle interrupt priorities?',
      'Explain the boot sequence in embedded systems',
      'What are different types of memory in embedded systems?'
    ],
    dsa: [
      'Implement a circular buffer',
      'Create a task scheduler for RTOS',
      'Design a state machine',
      'Build a memory-efficient linked list',
      'Implement a hardware driver'
    ],
    leetcode: [
      { title: 'Number of 1 Bits', difficulty: 'Easy', url: 'https://leetcode.com/problems/number-of-1-bits/' },
      { title: 'Task Scheduler', difficulty: 'Medium', url: 'https://leetcode.com/problems/task-scheduler/' },
      { title: 'Basic Calculator', difficulty: 'Hard', url: 'https://leetcode.com/problems/basic-calculator/' }
    ]
  }
};

// Helper function to get default resources if specific position not found
const getDefaultResources = (position: string) => ({
  videos: [
    { title: 'Technical Interview Preparation', url: 'https://www.youtube.com/watch?v=znk0tJpuYHY' },
    { title: 'System Design Fundamentals', url: 'https://www.youtube.com/watch?v=Y-Gl4HEyeUQ' },
    { title: 'Data Structures Overview', url: 'https://www.youtube.com/watch?v=RBSGKlAvoiM' }
  ],
  technical: [
    'Explain your most challenging project',
    'How do you handle technical debt?',
    'Describe your debugging process',
    'How do you ensure code quality?',
    'What\'s your approach to testing?'
  ],
  dsa: [
    'Implement a basic sorting algorithm',
    'Create a simple cache mechanism',
    'Design a basic API',
    'Build error handling system',
    'Implement logging functionality'
  ],
  leetcode: [
    { title: 'Valid Palindrome', difficulty: 'Easy', url: 'https://leetcode.com/problems/valid-palindrome/' },
    { title: 'Container With Most Water', difficulty: 'Medium', url: 'https://leetcode.com/problems/container-with-most-water/' },
    { title: 'Trapping Rain Water', difficulty: 'Hard', url: 'https://leetcode.com/problems/trapping-rain-water/' }
  ]
});

export function PreparationResources() {
  const navigate = useNavigate();
  const { company, position } = useParams();
  const positionKey = position?.toLowerCase() || '';
  const positionResources = resources[positionKey as keyof typeof resources] || getDefaultResources(positionKey);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate(`/jobs/${company}`)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 group"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Positions
        </button>

        <h1 className="text-4xl font-bold text-gray-900 mb-8 capitalize">
          {position?.replace(/-/g, ' ')} Preparation
        </h1>

        <div className="space-y-8">
          {/* Reference Videos Section */}
          <section className="bg-white rounded-xl p-6 shadow-md animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <Youtube className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl font-semibold text-gray-900">Reference Videos</h2>
            </div>
            <div className="space-y-3">
              {positionResources.videos.map((video) => (
                <a
                  key={video.title}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {video.title}
                </a>
              ))}
            </div>
          </section>

          {/* Technical Questions Section */}
          <section className="bg-white rounded-xl p-6 shadow-md animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <Code className="w-6 h-6 text-blue-500" />
              <h2 className="text-2xl font-semibold text-gray-900">Technical Questions</h2>
            </div>
            <ul className="space-y-3 list-disc list-inside text-gray-700">
              {positionResources.technical.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>
          </section>

          {/* DSA Questions Section */}
          <section className="bg-white rounded-xl p-6 shadow-md animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="w-6 h-6 text-purple-500" />
              <h2 className="text-2xl font-semibold text-gray-900">DSA Questions</h2>
            </div>
            <ul className="space-y-3 list-disc list-inside text-gray-700">
              {positionResources.dsa.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>
          </section>

          {/* LeetCode Problems Section */}
          <section className="bg-white rounded-xl p-6 shadow-md animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-6 h-6 text-green-500" />
              <h2 className="text-2xl font-semibold text-gray-900">LeetCode Problems</h2>
            </div>
            <div className="space-y-3">
              {positionResources.leetcode.map((problem) => (
                <a
                  key={problem.title}
                  href={problem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <span>{problem.title}</span>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    problem.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                    problem.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {problem.difficulty}
                  </span>
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}