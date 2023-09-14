import {
    mobile,
    backend,
    creator,
    web,
    degree,
    wlu_logo,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    circ,
    laurier,
    carrent,
    jobit,
    tripguide,
    threejs,
    python,
    c,
    java,
    jen,
    angular,
    linux,
    sql,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];


const services = [
    {
        title: "School",
        icon: wlu_logo,
        text: "Wilfrid Laurier University",
    },
    {
        title: "Degree",
        icon: degree,
        text: "Honours Bachelor of Computer Science",
    },
    {
        title: "Degree",
        icon: degree,
        text: "Honours Bachelor of Business Administration",
    },
];

const technologies = [
    {
        name: "Python",
        icon: python,
    },
    {
        name: "Java",
        icon: java,
    },
    {
        name: "C#",
        icon: c,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "SQL",
        icon: sql,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },

    {
        name: "Linux",
        icon: linux,
    },
    {
        name: "docker",
        icon: docker,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "Jenkins",
        icon: jen,
    },
    {
        name: "Angular",
        icon: angular,
    },

];

const experiences = [
    {
        title: "Technical Support Specialist",
        company_name: "Modatek Systems ",
        icon: circ,
        iconBg: "#000000",
        date: "May 2019 - August 2019",
        points: [
            "Worked efficiently with high tech machinery to create automotive parts for companies such as Ford, Chevrolet, and Tesla.",
            "Diagnosed faults and malfunctions and confirmed findings with supervisor to determine whether to repair or replace unit.",
            "Tested and adjusted units to specifications for proper performance.",
            "Completed reports to record problems and the work performed",
            "Provided exceptional customer service support to clients and guidance to team members on a broad range of escalated issues.",
            "Verified the quality of problem resolution, changes, and enhancements, and monitored trends.",
        ],
    },

    {
        title: "Software Engineer",
        company_name: "TechZenik",
        icon: circ,
        iconBg: "#000000",
        date: "January 2021 - August 2021",
        points: [
            "Developed and integrated Unity WebGL game and used UPDATE(Patch) and READ(Get) actions, to update and track player progress and score.",
            "Performed weekly assessments of software to look for potential problems and crashes.",
            "Maintained and made necessary updates to the company website with HTML.",
            "Participated in daily meetings with web developers within the organization and collaborated effectively to resolve critical service issues.",
            "Coordinated problem resolution and implemented changes in line with established change processes.",
            "Provided basic research, maintenance, and application support.",
        ],
    },

];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },

];

export { services, technologies, experiences, testimonials, projects };