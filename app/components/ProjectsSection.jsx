"use client"
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectsData = [
    {
        id: 1,
        title: "Amazon Clone",
        description: "A Clone of Amazon page built using React.js",
        image: "/images/amazon_clone.JPG",
        tag: ["All", "React.Js"],
        gitUrl: "https://github.com/Lilpiggie0522/amazon_clone",
        previewUrl: "https://clone-25fa5.web.app/"
    },
    {
        id: 2,
        title: "To Do List",
        image: "/images/todo_list.JPG",
        description: "A simple To-Do list coded using React.js",
        tag: ["All", "Vanilla Js"],
        gitUrl: "https://github.com/Lilpiggie0522/todo_list",
        previewUrl: "https://piggie-todolist.netlify.app/"
    },
    {
        id: 3,
        title: "Robo Friends",
        image: "/images/robo_friends.JPG",
        description: "A webpage built in React.js that aims to better help understand React Components",
        tag: ["All", "Vanilla Js"],
        gitUrl: "https://github.com/Lilpiggie0522/Robofriends",
        previewUrl: "https://piggie-robofriends.netlify.app/"
    }
]

const ProjectsSection = () => {
const [tag, setTag] = useState("All")
const handleTagChange = (newTag) => {
    setTag(newTag)
}
const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
)
  return (
    <div id='projects'>
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>My Projects</h2>
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
            <ProjectTag 
                onClick={handleTagChange} 
                name="All" 
                isSelected={tag === "All"}
            />

            <ProjectTag 
                onClick={handleTagChange} 
                name="React.Js" 
                isSelected={tag === "React.Js"}
            />

            <ProjectTag 
                onClick={handleTagChange} 
                name="Vanilla Js" 
                isSelected={tag === "Vanilla Js"}
            />
        </div>
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project) => 
            <ProjectCard key={project.id} 
                title = {project.title} 
                description = {project.description} 
                imgUrl = {project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
            />
        )}
        </div>
    </div>
  )
}

export default ProjectsSection