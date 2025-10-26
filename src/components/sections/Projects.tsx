import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  category: string[];
  githubLink: string;
  liveLink: string;
};

const projectsData: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product management, cart functionality, user authentication, and payment processing.',
    image: 'https://images.pexels.com/photos/6169/woman-hand-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
    category: ['frontend', 'backend', 'fullstack'],
    githubLink: 'https://github.com',
    liveLink: 'https://example.com'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity app for managing tasks, setting deadlines, and collaborating with team members. Features include drag-and-drop functionality and real-time updates.',
    image: 'https://images.pexels.com/photos/1226398/pexels-photo-1226398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    techStack: ['React', 'Redux', 'Firebase', 'Material UI'],
    category: ['frontend', 'fullstack'],
    githubLink: 'https://github.com',
    liveLink: 'https://example.com'
  },
  {
    id: 3,
    title: 'Weather Forecast App',
    description: 'A weather application that displays current weather conditions and 5-day forecasts for any location. Uses geolocation and weather APIs.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    techStack: ['JavaScript', 'HTML', 'CSS', 'OpenWeather API'],
    category: ['frontend'],
    githubLink: 'https://github.com',
    liveLink: 'https://example.com'
  },
  {
    id: 4,
    title: 'Social Media API',
    description: 'A RESTful API for a social media platform, handling user profiles, posts, comments, and authentication with JWT.',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    techStack: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    category: ['backend', 'api'],
    githubLink: 'https://github.com',
    liveLink: 'https://example.com'
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'A responsive portfolio website to showcase skills, projects, and professional information.',
    image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    techStack: ['React', 'TailwindCSS', 'Framer Motion'],
    category: ['frontend', 'design'],
    githubLink: 'https://github.com',
    liveLink: 'https://example.com'
  },
  {
    id: 6,
    title: 'Blog Platform',
    description: 'A full-stack blog platform with features for creating, editing, and publishing articles, user comments, and analytics.',
    image: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    techStack: ['Next.js', 'PostgreSQL', 'GraphQL', 'AWS S3'],
    category: ['frontend', 'backend', 'fullstack'],
    githubLink: 'https://github.com',
    liveLink: 'https://example.com'
  }
];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', label: 'All' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'api', label: 'API' },
    { id: 'design', label: 'Design' }
  ];
  
  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter(project => project.category.includes(activeCategory));

  return (
    <section id="projects" className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Project Image */}
              <div className="relative h-52 overflow-hidden group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full flex justify-between">
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-400 transition-colors"
                      aria-label="View GitHub repository"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-400 transition-colors"
                      aria-label="View live demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;