import React, { useEffect } from 'react';
import { FaSearch, FaLightbulb, FaCode, FaCheck, FaRocket, FaSync, FaBullhorn, FaChartLine } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const steps = [
    { icon: FaSearch, title: 'Research and Planning', description: ['Identify goals', 'Requirements analysis', 'Market research', 'Identify user targets'] },
    { icon: FaLightbulb, title: 'Design', description: ['Brainstorming', 'UI/UX Design', 'Wireframing', 'Prototyping', 'User Interface (UI) Design'] },
    { icon: FaCode, title: 'Development', description: ['Select technology and tools', 'Front-end development', 'Back-end development', 'Database integration'] },
    { icon: FaCheck, title: 'Testing', description: ['Unit Testing', 'Integration Testing', 'System Testing', 'User Acceptance Testing (UAT)'] },
    { icon: FaRocket, title: 'Deployment', description: ['Prepare deployment environment', 'Application deployment', 'Domain Setup'] },
    { icon: FaSync, title: 'Maintenance and Updates', description: ['Monitoring and maintenance', 'Updates and upgrades'] },
    { icon: FaBullhorn, title: 'Marketing and Promotion', description: ['Marketing strategy', 'Advertising and SEO'] },
    { icon: FaChartLine, title: 'Analysis and Optimization', description: ['Data collection', 'Data analysis', 'Optimization'] },

];

const colors = [
    'bg-red-200 text-red-900', 
    'bg-emerald-200 text-green-900', 
    'bg-cyan-200 text-blue-900', 
    'bg-yellow-100 text-yellow-900', 
    'bg-purple-200 text-purple-900', 
    'bg-teal-100 text-teal-900', 
    'bg-pink-200 text-pink-900', 
    'bg-indigo-200 text-indigo-900'
];
const WorkingProcess = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="relative flex flex-col items-center">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 "></div>
      {steps.map((step, index) => (
        <div
          key={index}
          className={`relative flex items-center mb-10 w-full ${step.description.length > 0 ? colors[index] : ''} p-4 rounded-lg shadow-md`}
          data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
        >
          <div className={`flex ${index % 2 === 0 ? 'flex-row-reverse' : ''} items-center w-full`}>
            <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full z-10">
              <step.icon className={`text-lg ${step.description.length > 0 ? colors[index].split(' ')[1] : ''}`} />
            </div>
            <div className={`flex flex-col ${index % 2 === 0 ? 'text-right' : 'text-left'} w-1/2 p-4`}>
              <h3 className="text-2xl font-bold mb-2">Step {index + 1}: {step.title}</h3>
              <ul className="mt-4 ml-6 text-lg">
                {step.description.map((desc, i) => (
                  <li key={i} className="mb-1">{desc}</li>
                ))}
              </ul>
            </div>
          </div>
          {/* {index < steps.length - 1 && (
            <div className="absolute left-1/2 transform -translate-x-1/2 h-10 w-1 bg-gray-300"></div>
          )} */}
        </div>
      ))}
    </div>
  );
};
export default WorkingProcess;
