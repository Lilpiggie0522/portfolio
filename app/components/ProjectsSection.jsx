import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
    {
        id: 1,
        title: "React Portfolio Website",
        description: "Personal Website",
        image: "/images/portfolio.JPG",
        tag: ["All", "Web"]
    },
    {
        id: 2,
        title: "Amazon Clone",
        description: "A Clone of Amazon page built using React.js",
        image: "/images/amazon_clone.JPG",
        tag: ["All", "Web"]
    },
    {
        id: 3,
        title: "To Do List",
        image: "/images/todo_list.JPG",
        description: "A simple To-Do list coded using React.js",
        tag: ["All", "Web"]
    },
    {
        id: 4,
        title: "Robo Friends",
        image: "/images/robo_friends.JPG",
        description: "A webpage built in React.js that aims to better help understand React Components",
        tag: ["All", "Web"]
    }
]

const ProjectsSection = () => {
  return (
    <div id='projects'>
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>My Projects</h2>
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {projectsData.map((project) => 
            <ProjectCard key={project.id} 
            title = {project.title} 
            description = {project.description} 
            imgUrl = {project.image}
            tags = {project}
            />
        )}
        </div>
    </div>
  )
}

export default ProjectsSection