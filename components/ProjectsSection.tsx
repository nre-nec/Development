
import React from 'react';
import type { Project } from '../types';
import { useOnScreen } from '../hooks/useOnScreen';

interface ProjectsProps {
  content: { title: string };
  projectsData: Project[];
}

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [ref, isVisible] = useOnScreen<HTMLDivElement>({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`bg-ncn-medium-blue p-6 rounded-lg shadow-xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col animated-section ${isVisible ? 'is-visible' : ''}`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="text-4xl mb-4">{project.icon}</div>
      <h3 className="text-xl font-bold text-ncn-white mb-2">{project.name}</h3>
      <p className="text-ncn-light-gray/80 flex-grow mb-4">{project.description}</p>
      <a
        href={project.link}
        className="mt-auto self-start bg-ncn-dark-blue text-ncn-light-gray font-semibold py-2 px-5 rounded-full hover:bg-ncn-white hover:text-ncn-dark-blue transition-colors duration-300"
      >
        {project.buttonText}
      </a>
    </div>
  );
};

export const ProjectsSection: React.FC<ProjectsProps> = ({ content, projectsData }) => {
    const [titleRef, isTitleVisible] = useOnScreen<HTMLHeadingElement>({ threshold: 0.5 });
  return (
    <section id="projects" className="py-20 bg-ncn-dark-blue">
      <div className="container mx-auto px-6">
        <h2 ref={titleRef} className={`text-3xl md:text-4xl font-bold text-ncn-white text-center mb-12 animated-section ${isTitleVisible ? 'is-visible' : ''}`}>
          {content.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
