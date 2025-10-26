import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

type Certificate = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  credential: string;
  image: string;
};

const certificationsData: Certificate[] = [
  {
    id: 1,
    title: 'Full Stack Web Development',
    issuer: 'Udemy',
    date: 'December 2022',
    description: 'Comprehensive course covering modern web development technologies including HTML, CSS, JavaScript, React, Node.js, and MongoDB.',
    credential: 'https://example.com/credential/123',
    image: 'https://images.pexels.com/photos/2228562/pexels-photo-2228562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    title: 'Machine Learning Specialization',
    issuer: 'Coursera',
    date: 'June 2022',
    description: 'In-depth study of machine learning algorithms, neural networks, and practical applications of AI in various domains.',
    credential: 'https://example.com/credential/456',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'March 2023',
    description: 'Professional certification validating expertise in designing distributed systems on AWS, including deployment, management, and security.',
    credential: 'https://example.com/credential/789',
    image: 'https://images.pexels.com/photos/1181216/pexels-photo-1181216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 4,
    title: 'Advanced React Patterns',
    issuer: 'Frontend Masters',
    date: 'September 2022',
    description: 'Advanced course covering React design patterns, performance optimization, and state management techniques.',
    credential: 'https://example.com/credential/101',
    image: 'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>
        
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-blue-100">
          {certificationsData.map(cert => (
            <div key={cert.id} className="min-w-[260px] max-w-xs bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex-shrink-0">
              <div className="flex flex-col items-center p-4">
                {/* Certificate Image */}
                <div className="w-16 h-16 mb-2 overflow-hidden flex items-center justify-center">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                </div>
                {/* Certificate Info */}
                <div className="w-full text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Award size={16} className="text-blue-600 dark:text-blue-400 mr-1" />
                    <h3 className="text-base font-bold text-gray-800 dark:text-white truncate">{cert.title}</h3>
                  </div>
                  <div className="mb-1">
                    <p className="text-blue-600 dark:text-blue-400 font-medium text-xs">{cert.issuer}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-xs">{cert.date}</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-2 text-xs line-clamp-3">{cert.description}</p>
                  <a 
                    href={cert.credential} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium text-xs"
                  >
                    View Credential <ExternalLink size={12} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;