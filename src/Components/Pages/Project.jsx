import React from 'react';
import './ProjectSection.css';
import Health from "../Images/Health.png";
import Cnt from "../Images/Cnt.png";
import Footer from './Footer';

const projects = [
  {
    title: "Ecommerce App",
    image: "https://ecommerce-admin.com/assets/images/screenshots/products.webp",
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
    link: "http://linkdin-clone-green.vercel.app"
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
  }
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
