import React from 'react';
import AccessibleButton from './AccessibleButton';
import OptimizedImage from './OptimizedImage';

/**
 * A card component to display a single project.
 *
 * @param {object} props
 * @param {object} props.project - The project data object.
 * @param {string} props.project.title - The project title.
 * @param {string} props.project.description - The project description.
 * @param {string} props.project.imageUrl - The URL for the project image.
 * @param {number} props.project.imageWidth - The width of the project image.
 * @param {number} props.project.imageHeight - The height of the project image.
 * @param {string[]} props.project.technologies - An array of technologies used.
 * @param {string} props.project.liveUrl - The URL to the live demo.
 */
const ProjectCard = ({ project }) => {
  const { title, description, imageUrl, imageWidth, imageHeight, technologies, liveUrl } = project;

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm flex flex-col h-full">
      <OptimizedImage
        src={imageUrl}
        alt={`Screenshot of ${title}`}
        width={imageWidth}
        height={imageHeight}
        className="rounded-md object-cover aspect-video w-full"
      />
      
      <div className="mt-4 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300 flex-grow">{description}</p>
        
        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech) => (
            <span 
              key={tech} 
              className="
                inline-block px-3 py-1 
                text-xs font-medium 
                bg-violet-100 text-violet-800 
                dark:bg-violet-900/50 dark:text-violet-300 
                rounded-full
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6">
          <AccessibleButton onClick={() => window.open(liveUrl, '_blank')}>
              View Live Demo
          </AccessibleButton>
      </div>
    </div>
  );
};

export default ProjectCard;