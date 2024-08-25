import React from 'react'
import ProjectCard from './projectcard'
import { title } from 'process'


const projectsData = [
    {
        id: 1,
        title: "Zauto web copy",
        description: "",
        image: "/images/blog.jpg",
    },
    {
        id: 2,
        title: "Vertex Layer web copy",
        description: "",
        image: "/images/blog2.jpg",
    },

];


const Projectsection = () => {
    return (
        <div className="flex flex-wrap justify-center">
            {projectsData.map(project => (
                <ProjectCard
                    key={project.id}
                    imgurl={project.image}
                    title={project.title}
                    description={project.description}
                />
            ))}
        </div>
    )
}

export default Projectsection
