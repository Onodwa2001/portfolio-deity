"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "Project 1",
            description: "Description of Project 1 with a futuristic touch. Innovate beyond the edge!",
            image: "https://plus.unsplash.com/premium_photo-1676637000058-96549206fe71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 2,
            title: "Project 2",
            description: "Description of Project 2 with a futuristic touch. Innovate beyond the edge!",
            image: "https://plus.unsplash.com/premium_photo-1676637000058-96549206fe71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 3,
            title: "Project 3",
            description: "Description of Project 3 with a futuristic touch. Innovate beyond the edge!",
            image: "https://plus.unsplash.com/premium_photo-1676637000058-96549206fe71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 4,
            title: "Project 4",
            description: "Description of Project 4 with a futuristic touch. Innovate beyond the edge!",
            image: "https://plus.unsplash.com/premium_photo-1676637000058-96549206fe71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        // Add more projects as needed
    ];

    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    return (
        <section id="projects" className="py-20 bg-darkGray text-white overflow-hidden">
            <h2 className="text-6xl font-extrabold text-center mb-12 text-gradient">Projects</h2>
            <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className="relative bg-darkGray border border-neon rounded-xl shadow-neon hover:shadow-deepBlue transition-shadow overflow-hidden group"
                        initial="hidden"
                        animate={controls}
                        variants={{
                            visible: { opacity: 1, translateY: 0, transition: { duration: 0.6, delay: index * 0.2 } },
                            hidden: { opacity: 0, translateY: 50 },
                        }}
                    >
                        <div className="absolute inset-0 border-2 border-neon rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-t-xl transition-transform duration-300 ease-in-out group-hover:scale-110" />
                        <div className="p-4">
                            <h3 className="text-3xl font-bold text-neon mb-2">{project.title}</h3>
                            <p className="text-lg">{project.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
