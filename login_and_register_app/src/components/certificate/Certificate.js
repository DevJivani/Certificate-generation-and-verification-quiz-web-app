// import React from 'react';
// import './Certificate.css'; // Import the CSS file

// const Certificate = ({ score, totalQuestions }) => {
//   return (
//     <div className="certificate">
//       <h1>Congratulations!</h1>
//       <p>You have completed the quiz.</p>
//       <p className="score">Your score: {score} out of {totalQuestions}</p>
//     </div>
//   );
// };

// export default Certificate;

// import React, { useRef } from 'react';
// import './Certificate.css';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';

// const Certificate = ({ score, totalQuestions, photoUrl }) => {
//   const certificateRef = useRef(null);

//   const handleDownload = () => {
//     if (!certificateRef.current) return;

//     html2canvas(certificateRef.current).then(canvas => {
//       const imgData = canvas.toDataURL('image/png');
//       const pdf = new jsPDF('p', 'mm', 'a4');
//       const imgWidth = 210;
//       const imgHeight = (canvas.height * imgWidth) / canvas.width;

//       pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
//       pdf.save('Certificate.pdf');
//     });
//   };

//   return (
//     <div className="certificate" ref={certificateRef}>
//       <h1>Congratulations!</h1>
//       <p>You have completed the quiz.</p>
//       <p className="score">Your score: {score} out of {totalQuestions}</p>

//       {/* Certificate content with photo */}
//       <div className="certificate-content">
//         <img src={photoUrl} alt="Certificate Holder" />
//         <h2>Certificate of Completion</h2>
//         <p>Congratulations! You have completed the quiz and scored {score} out of {totalQuestions}.</p>
//         <p>This certificate is proof of your achievement.</p>
//         <p>Date: {new Date().toLocaleDateString()}</p>
//       </div>

//       <a href="/certificate">Go to Certificate</a>
//       <button onClick={handleDownload}>Download Certificate (PDF)</button>
//     </div>
//   );
// };

// export default Certificate;

// import React, { useRef, useState, useEffect } from 'react';
// import './Certificate.css';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';

// const Certificate = ({ score, totalQuestions, photoUrl }) => {
//   const certificateRef = useRef(null);
//   const [showDownloadButton, setShowDownloadButton] = useState(true);

//   useEffect(() => {
//     const handleDownload = () => {
//       if (!certificateRef.current) return;

//       setShowDownloadButton(false); // Hide the download button
//       html2canvas(certificateRef.current).then(canvas => {
//         const imgData = canvas.toDataURL('image/png');
//         const pdf = new jsPDF('p', 'mm', 'a4');
//         const imgWidth = 210;
//         const imgHeight = (canvas.height * imgWidth) / canvas.width;

//         pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
//         pdf.save('Certificate.pdf');
//       });
//     };

//     if (!showDownloadButton) {
//       handleDownload(); // Trigger download when download button is hidden
//     }
//   }, [showDownloadButton]);

//   return (
//     <div className="certificate" ref={certificateRef}>
//       <h1>Congratulations!</h1>
//       <p>You have completed the quiz.</p>
//       <p className="score">Your score: {score} out of {totalQuestions}</p>

//       {/* Certificate content with photo */}
//       <div className="certificate-content">
//         <img src={photoUrl} alt="Certificate Holder" />
//         <h2>Certificate of Completion</h2>
//         <p>Congratulations! You have completed the quiz and scored {score} out of {totalQuestions}.</p>
//         <p>This certificate is proof of your achievement.</p>
//         <p>Date: {new Date().toLocaleDateString()}</p>
//       </div>

//       {/* Show the download button conditionally */}
//       {showDownloadButton && (
//         <button onClick={() => setShowDownloadButton(false)}>Download Certificate (PDF)</button>
//       )}
//     </div>
//   );
// };

// export default Certificate;

// import React, { useRef, useState, useEffect } from 'react';
// import './Certificate.css';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';
// import { useParams, useLocation } from 'react-router-dom';
// import axios from 'axios';

// const Certificate = () => {
//   const location = useLocation();
//   const link = window.location.href;
//   const { score } = location.state || { score: 0 }; // Default score to 0 if not provided
//   const [totalQuestions, setTotalQuestions] = useState(10); // Assuming a static total number of questions
//   const authstring = localStorage.getItem('user');
//   const auth = JSON.parse(authstring);
//   const certificateRef = useRef(null);
//   const { email } = useParams();
//   const [showDownloadButton, setShowDownloadButton] = useState(true);

//   useEffect(() => {
//     const init = async () => {
//       const res = await axios.get(`http://localhost:9002/info?email=${email}`, {
//         headers: {
//           email,
//         },
//       });
//       if (!res.data.valid) {
//         // Set the total questions only if it's valid (not an error)
//         setTotalQuestions(res.data.totalQuestions);
//       }
//     };
//     init();

//     const handleDownload = () => {
//       if (!certificateRef.current) return;

//       setShowDownloadButton(false); // Hide the download button
//       html2canvas(certificateRef.current).then(canvas => {
//         const imgData = canvas.toDataURL('image/png');
//         const pdf = new jsPDF('p', 'mm', 'a4');
//         const imgWidth = 210;
//         const imgHeight = (canvas.height * imgWidth) / canvas.width;

//         pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
//         pdf.save('Certificate.pdf');

//         // Open the downloaded certificate in a new tab after a short delay
//         setTimeout(() => {
//           const url = '/Certificate.pdf'; // Relative path to your downloaded PDF
//           window.open(url, '_blank');
//         }, 1); // Adjust the delay as needed
//       });
//     };

//     if (!showDownloadButton) {
//       handleDownload(); // Trigger download when download button is hidden
//     }
//   }, [showDownloadButton]);

//   console.log("name", auth.uname);

//   return (
//     <div className="certificate" ref={certificateRef}>
//       <h1>Congratulations!</h1>
//       <h1>{auth.uname}</h1>
//       <p>You have completed the quiz.</p>
//       <p className="score">Your score: {score} out of {totalQuestions}</p>

//       {/* Certificate content with photo */}
//       <div className="certificate-content">
//         {/* <img src={photoUrl} alt="Certificate Holder" /> */}
//         <h2>Certificate of Completion</h2>
//         <p>Congratulations! You have completed the quiz and scored {score} out of {totalQuestions}.</p>
//         <p>This certificate is proof of your achievement.</p>
//         <p>Date: {new Date().toLocaleDateString()}</p>
//       </div>

//       {/* Show the download button conditionally */}
//       {showDownloadButton && (
//         <button onClick={() => setShowDownloadButton(false)}>Download Certificate (PDF)</button>
//       )}
//       {link}
//     </div>
//   );
// };

// export default Certificate;

import React, { useRef, useState, useEffect } from 'react';
import './Certificate.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Certificate = () => {
  const link = window.location.href;
  const [score,setScore] = useState(0);
  const [totalQuestions,setTotal] = useState(10);
  const authstring=localStorage.getItem('user');
  const auth = JSON.parse(authstring);
  const certificateRef = useRef(null);
  const {email}=useParams();
  const [showDownloadButton, setShowDownloadButton] = useState(true);

  useEffect(() => {
    const init=async()=>{
        const res=await axios.get("http://localhost:9002/info",{
          headers:{
            email
          }
      })
    
        console.log(res.data.valid);
        if(!res.data.valid)
        {
          setScore(res.data.score)
        }
       }
       init();
    const handleDownload = () => {
      if (!certificateRef.current) return;

      setShowDownloadButton(false); // Hide the download button
      html2canvas(certificateRef.current).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save('Certificate.pdf');

        // Open the downloaded certificate in a new tab after a short delay
        setTimeout(() => {
          const url = '/Certificate.pdf'; // Relative path to your downloaded PDF
          window.open(url, '_blank');
        }, 1); // Adjust the delay as needed
      });
    };

    if (!showDownloadButton) {
      handleDownload(); // Trigger download when download button is hidden
    }
  }, [showDownloadButton]);

  console.log("name",auth.uname);

  return (
   
    <div className="certificate" ref={certificateRef}>
      <h1>Congratulations!</h1>
      <h1>{auth.uname}</h1>
      <p>You have completed the quiz.</p>
      <p className="score">Your score: {score} out of {totalQuestions}</p>

      {/* Certificate content with photo */}
      <div className="certificate-content">
        {/* <img src={photoUrl} alt="Certificate Holder" /> */}
        <h2>Certificate of Completion</h2>
        <p>Congratulations! You have completed the quiz and scored {score} out of {totalQuestions}.</p>
        <p>This certificate is proof of your achievement.</p>
        <p>Date: {new Date().toLocaleDateString()}</p>
      </div>

      {/* Show the download button conditionally */}
      {showDownloadButton && (
        <button onClick={() => setShowDownloadButton(false)}>Download Certificate (PDF)</button>
      )}
      {link}
    </div>
  );
};

export default Certificate;