import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2 } from 'lucide-react';

const companies = [
  {
    name: 'Google',
    description: 'An American multinational company specializing in internet services and AI.',
    logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Microsoft',
    description: 'A leading technology company known for Windows, Azure, and software solutions.',
    logo: 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/RWCZER-Legal-IP-Trademarks-CP-MS-logo-740x417-1?wid=406&hei=230&fit=crop',
  },
  {
    name: 'Amazon',
    description: 'A global e-commerce and cloud computing leader transforming how we shop and build.',
    logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Meta',
    description: 'Pioneering the future of social connection and virtual reality technologies.',
    logo: 'https://www.citypng.com/public/uploads/preview/hd-facebook-meta-logo-png-701751694777707v6bil7t1yh.png',
  },
  {
    name: 'Apple',
    description: 'Innovating at the intersection of technology and design with premium products.',
    logo: 'https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png',
  },
  {
    name: 'Tesla',
    description: 'Accelerating the world\'s transition to sustainable energy through innovation.',
    logo: 'https://images.unsplash.com/photo-1617704548623-340376564e68?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  }
];

export function CompanySelection() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Select a Company
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company) => (
            <div
              key={company.name}
              onClick={() => navigate(`/jobs/${company.name.toLowerCase()}`)}
              className="group bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="w-5 h-5 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    {company.name}
                  </h3>
                </div>
                <p className="text-gray-600">{company.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}