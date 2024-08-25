import React, { FC } from 'react';

interface ProjectCardProps {
    imgurl: string;
    title: string;
    description: string;
}

const ProjectCard: FC<ProjectCardProps> = ({ imgurl, title, description }) => {
    return (
        <div className="relative w-full sm:w-1/2 md:w-1/3 p-3 mt-10">
            {/* Image Container */}
            <div className="relative group">
                <div
                    className="h-52 md:h-72 rounded-t-xl"
                    style={{
                        background: `url(${imgurl})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",  // Other options: "repeat", "repeat-x", "repeat-y"
                    }}

                >
                    <div className="absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 group-hover:bg-opacity-80 transition-opacity duration-500"></div>
                </div>
            </div>

            {/* Text Content */}
            <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4 mt-3">
                <h5 className="text-xl font-semibold mb-2">{title}</h5>
                <p className="text-gray-400">{description}</p>
            </div>
        </div>

    );
}

export default ProjectCard