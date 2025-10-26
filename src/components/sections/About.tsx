import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-blue-600 dark:bg-blue-400 rounded-lg transform rotate-6"></div>
              <img 
                src="jithendra2.jpg" 
                alt="Jithendra Gudidha" 
                className="absolute inset-0 object-cover w-full h-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          
          {/* Bio */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              Full Stack Developer & Problem Solver
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            I'm Jithendra — a driven and curious full stack developer currently pursuing my studies, with hands-on
            experience in building AI-powered applications, intelligent agents, and real-world problem-solving tools.
            I specialize in combining frontend and backend technologies to create smart, efficient systems.
            Passionate about AI, cybersecurity, and innovation, I'm eager to contribute to impactful projects and grow with forward-thinking teams.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I’m constantly exploring new technologies, refining my skills through practical projects, and seeking
              opportunities where I can learn, contribute, and make a difference through code.
            </p>
            
            {/* <div className="pt-4">
              <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Fun Fact</h4>
              <p className="text-gray-600 dark:text-gray-300 italic">
                When I'm not coding, you can find me hiking in the mountains or experimenting 
                with new recipes in the kitchen!
              </p>
            </div> */}
            
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="bg-white dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                <span className="block text-sm text-gray-500 dark:text-gray-400">Location</span>
                <span className="font-medium">Hyderabad, India</span>
              </div>
              
              {/* <div className="bg-white dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                <span className="block text-sm text-gray-500 dark:text-gray-400">Experience</span>
                <span className="font-medium">5+ Years</span>
              </div> */}
              
              <div className="bg-white dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                <span className="block text-sm text-gray-500 dark:text-gray-400">Availability</span>
                <span className="font-medium">Open to Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;