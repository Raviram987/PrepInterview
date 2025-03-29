import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Briefcase, ChevronLeft } from 'lucide-react';

const jobPositions = {
  google: [
    { title: 'Software Engineer', description: 'Build and optimize Google\'s core products and services.' },
    { title: 'Data Scientist', description: 'Apply advanced analytics to solve complex business problems.' },
    { title: 'Machine Learning Engineer', description: 'Develop AI and ML solutions at scale.' },
    { title: 'Cloud Engineer', description: 'Design and maintain Google Cloud infrastructure.' }
  ],
  microsoft: [
    { title: 'Software Developer', description: 'Create innovative solutions using Microsoft technologies.' },
    { title: 'DevOps Engineer', description: 'Streamline development and deployment processes.' },
    { title: 'Cybersecurity Analyst', description: 'Protect Microsoft\'s systems and user data.' },
    { title: 'Product Manager', description: 'Lead product development and strategy.' }
  ],
  amazon: [
    { title: 'Backend Engineer', description: 'Build scalable services powering Amazon\'s platform.' },
    { title: 'Frontend Developer', description: 'Create engaging user experiences for millions of customers.' },
    { title: 'Solutions Architect', description: 'Design and implement AWS cloud solutions.' },
    { title: 'Data Engineer', description: 'Build data pipelines and analytics infrastructure.' }
  ],
  meta: [
    { title: 'Full Stack Developer', description: 'Build end-to-end solutions for Meta\'s social platforms.' },
    { title: 'AI Research Scientist', description: 'Advance the state of AI and machine learning.' },
    { title: 'UX/UI Designer', description: 'Shape the future of social media interactions.' },
    { title: 'Network Engineer', description: 'Scale and optimize Meta\'s global infrastructure.' }
  ],
  apple: [
    { title: 'iOS Developer', description: 'Create innovative apps for Apple\'s mobile ecosystem.' },
    { title: 'Hardware Engineer', description: 'Design next-generation Apple devices.' },
    { title: 'Software QA Engineer', description: 'Ensure excellence in Apple\'s software quality.' },
    { title: 'Security Engineer', description: 'Protect Apple\'s systems and user privacy.' }
  ],
  tesla: [
    { title: 'Embedded Systems Engineer', description: 'Develop software for Tesla\'s vehicle systems.' },
    { title: 'Robotics Engineer', description: 'Automate manufacturing processes and systems.' },
    { title: 'AI/ML Engineer', description: 'Advance Tesla\'s autonomous driving capabilities.' },
    { title: 'Energy Solutions Engineer', description: 'Innovate in sustainable energy technologies.' }
  ]
};

export function JobPositions() {
  const navigate = useNavigate();
  const { company } = useParams();
  const positions = company ? jobPositions[company as keyof typeof jobPositions] || [] : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate('/companies')}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 group"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Companies
        </button>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-8 capitalize">
          {company} Positions
        </h1>
        
        <div className="space-y-4">
          {positions.map((position, index) => (
            <div
              key={position.title}
              onClick={() => navigate(`/resources/${company}/${position.title.toLowerCase().replace(/\s+/g, '-')}`)}
              className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {position.title}
                  </h3>
                  <p className="text-gray-600">
                    {position.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}