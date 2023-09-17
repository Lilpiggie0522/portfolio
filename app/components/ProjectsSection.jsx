"use client"
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectsData = [
    {
        id: 1,
        title: "React Portfolio Website",
        description: "Personal Website",
        image: "/images/portfolio.JPG",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Lilpiggie0522/portfolio",
        previewUrl: "https://github.com/Lilpiggie0522/portfolio"
    },
    {
        id: 2,
        title: "Amazon Clone",
        description: "A Clone of Amazon page built using React.js",
        image: "/images/amazon_clone.JPG",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Lilpiggie0522/amazon_clone",
        previewUrl: "https://clone-25fa5.web.app/"
    },
    {
        id: 3,
        title: "To Do List",
        image: "/images/todo_list.JPG",
        description: "A simple To-Do list coded using React.js",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Lilpiggie0522/todo_list",
        previewUrl: "https://piggie-todolist.netlify.app/"
    },
    {
        id: 4,
        title: "Robo Friends",
        image: "/images/robo_friends.JPG",
        description: "A webpage built in React.js that aims to better help understand React Components",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Lilpiggie0522/Robofriends",
        previewUrl: "https://piggie-robofriends.netlify.app/"
    }
]

const ProjectsSection = () => {
const [tag, setTag] = useState("All")
const handleTagChange = (newTag) => {
    setTag(newTag)
}
  return (
    <div id='projects'>
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>My Projects</h2>
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
            <ProjectTag onClick={handleTagChange} tag="All" isSelected={tag === "All"}/>
        </div>
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {projectsData.map((project) => 
            <ProjectCard key={project.id} 
            title = {project.title} 
            description = {project.description} 
            imgUrl = {project.image}
            tags = {project}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
            />
        )}
        </div>
    </div>
  )
}

export default ProjectsSection