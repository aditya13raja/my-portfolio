import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";

export const HERO_CONTENT = `A final-year student and aspiring web developer, passionate about creating user-friendly interfaces and
progressing toward full-stack development.`;

export const ABOUT_TEXT = `Currently in my final year of Bachelor of Technology in Computer Science and Engineering at Lovely Professional University, I am Aditya Raj, an aspiring and dedicated web developer with a focus on full-stack development. My academic journey is complemented by hands-on experience in building dynamic web applications, leveraging modern technologies like the MERN stack. I have a strong foundation in frontend development using ReactJS, TailwindCSS, and Redux-toolkit, coupled with backend expertise in Node.js, Express, and MongoDB.

Driven by a passion for innovation and problem-solving, I have successfully developed and deployed projects like a full-stack Real Estate Marketplace and a Netflix Clone. These projects allowed me to implement advanced features such as user authentication, real-time CRUD operations, and responsive interfaces, showcasing my ability to create seamless user experiences.

Beyond academics, I am committed to continuous learning, holding multiple certifications in React and Node.js to refine my skills further. My participation in workshops and bootcamps has deepened my understanding of data structures, algorithms, and web technologies. As an aspiring professional, I am eager to apply my knowledge and creativity to real-world challenges, contributing to impactful and innovative projects in the tech industry.`;


export const PROJECTS = [
    {
        title: "Real Estate Marketplace",
        image: project1,
        description:
        "A full-stack real estate marketplace using the MERN stack. Features include user authentication (JWT, Firebase, Google OAuth), real-time CRUD operations, property listing management, image uploads, and a responsive interface for an enhanced user experience.",
        technologies: ["ReactJs", "TailwindCSS", "Firebase", "Redux-toolkit", "MongoDB", "Node.js", "Express", "JWT"],
    },
    {
        title: "Netflix-Clone",
        image: project2,
        description:
        "A front-end Netflix clone built with ReactJs to enhance skills in front-end development. Features include Firebase authentication, Redux-toolkit for state management, and TailwindCSS for styling. Implements user data and movie data storage using a Redux store.",
        technologies: ["React", "TailwindCSS", "Firebase", "Redux-toolkit", "MongoDB"],
    },
]

export const CONTACT = {
    address: "Phagwara, Punjab, India",
    phoneNo: "+91 7070694389",
    email: "aditya13raja@gmail.com"
};
