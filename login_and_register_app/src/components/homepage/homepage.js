// import React from "react";
// import { useNavigate } from 'react-router-dom';
// import "./homepage.css";


// const Homepage = () => {
//     const history = useNavigate();

//     const handleStartQuiz = () => {
//         history("/Quiz");
//     };

//     const handleLogout = () => {
//         // Perform logout action here
//         console.log("Logout clicked");
//     };

//     return (
//         <div className="homepage">
//             <h1>Hello Homepage</h1>
//             <div className="button" onClick={handleStartQuiz}>Start Quiz</div>
//             <div className="button" onClick={handleLogout}>Logout</div>
//         </div>
//     )
// }

// export default Homepage;

// homepage.js
import React from "react";
import Layout from "../../layout"; // Adjust the relative path as needed
import { useNavigate } from 'react-router-dom';
import './homepage.css';

const Homepage = () => {
    const navigate = useNavigate();

    const handleStartQuiz = () => {
        navigate("/Quiz"); // Navigate to the Quiz page
    };

    return (
        <Layout>
            <div className="homepage">
                {/* <h1>Homepage</h1> */}
                <button><div className="button" onClick={handleStartQuiz}>Start Quiz</div></button>
            </div>
        </Layout>
    );
};

export default Homepage;

