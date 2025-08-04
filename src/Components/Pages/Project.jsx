import React from 'react';
import './ProjectSection.css';
import Health from "../Images/Health.png";
import Cnt from "../Images/Cnt.png";
import Krite from "../Images/Krite.png";
import Client from "../Images/Client.png";
import Footer from './Footer';

const projects = [
  {
    title: "Healthicious Web App",
    image: Health,
    description: "Healthicious is a comprehensive web application designed to help users make informed dietary choices and track their health metrics.",
    keyPoints: [
      "BMI Calculator: Allows users to measure their BMI and receive personalized food recommendations for protein-rich diets.",
      "Ingredient Feature: Provides detailed information on various ingredients to help users make healthy choices.",
      "Trending Foods: Displays a list of currently trending foods to keep users updated on popular dietary trends.",
      "Contact Form: Enables users to easily contact the admin with any issues or questions. Admins can view and respond to messages, and update client information.",
      "Technologies Used: React.js, Redux, Node.js, Express, MongoDB."
    ],
    link: "https://get-recipes-murex.vercel.app/"
  },
  {
    title: "LinkedIn Clone Web App",
    image: "https://reactjsexample.com/content/images/2021/11/linkedin.jpg",
    description: "Architected and developed a LinkedIn clone web application, focusing on aesthetics, data management, and user authentication.",
    keyPoints: [
      "Technologies: React.js, Firebase, Redux.",
      "Implemented user registration and authentication.",
      "Integrated YouTube API for video playback.",
      "Achieved a 75% improvement in user registration and a 58% increase in user interaction.",
      "Emphasized on clean, responsive UI/UX design."
    ],
    link: "http://linkdin-clone-green.vercel.app"
  },
  {
    title: "Ecommerce App",
    image: "https://pixabay.com/photos/bookkeeper-accountant-office-coffee-1016299/",
    description: "Developed a comprehensive ecommerce web application designed to enhance the online shopping experience. This project involved creating a user-friendly interface, integrating secure payment options, and ensuring efficient product search functionality.",
    keyPoints: [
      "Designed and implemented a responsive user interface using React.js, ensuring a seamless experience across all devices.",
      "Developed backend services using Node.js and Express.js to handle product listings, user authentication, and order processing.",
      "Integrated MongoDB for database management, ensuring efficient storage and retrieval of product and user data.",
      "Implemented secure payment gateways to facilitate safe and reliable transactions.",
      "Developed features such as a shopping cart, user accounts, order tracking, and search functionality.",
      "Ensured cross-browser compatibility and optimized the application for performance."
    ],
    link: "http://e-commerce-website-weld.vercel.app"
  },
  {
    title: "Client Dashboard",
    image: Client,
    description: "This project involves the creation of a Client Dashboard, designed to provide users with an intuitive, secure, and data-driven interface to manage and monitor their personalized information.",
    keyPoints: [
      "Customizable widgets and interactive visualizations such as charts and graphs to help users gain insights into key metrics",
      "The dashboard offers real-time data updates",
      "Ensuring fast load times and a smooth user experience",
      "The dashboard is optimized for performance",
    ],
    link: "https://internship-sandy.vercel.app/"
  },
  {
    title: "K-Rite Product Dashboard",
    image: Krite,
    description: "Keenly Redefining Innovation (K_Rite) that embodies innovation and functionality. From crafting captivating interfaces to implementing seamless interactions, every detail has been meticulously designed.",
    keyPoints: [
      "Technologies: HTML, CSS, and Javascript",
      "From crafting captivating interfaces to implementing seamless interactions",
      "Grateful for the opportunity to contribute to cutting-edge projects and collaborate with forward-thinking minds.",
      "Brought forth a solution that embodies innovation and functionality.",
      "Emphasized on clean, responsive UI/UX design."
    ],
    link: "https://k-rite-ui-design.vercel.app/"
  },
  {
    title: "Contact Management System Project",
    image: Cnt,
    description: "Developed a comprehensive Contact Management System to streamline the storage, retrieval, and management of contact information.",
    keyPoints: [
      "Designed and developed a responsive web application using HTML, CSS, and JavaScript.",
      "Implemented user authentication and authorization with JWT.",
      "Utilized MongoDB for efficient data storage and retrieval.",
      "Developed RESTful APIs using Node.js and Express.js.",
      "Integrated search functionality to quickly locate contacts.",
      "Focused on user experience and interface design."
    ],
    link: "https://deploy-mern-frontend-kh85j85ik-md-tauseefs-projects.vercel.app/"
  },
];

function ProjectSection() {
  return (
    <>
    <div className="project-section">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul>
              {project.keyPoints.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default ProjectSection;
