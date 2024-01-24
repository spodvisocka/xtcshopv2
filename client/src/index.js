// // import React from 'react';
// // import {createRoot} from 'react-dom/client';
// // import './index.css';
// // import reportWebVitals from './reportWebVitals';
// // import SurveyComponent from "./SurveyComponent";
// // import DisplayComponent from "./DisplayComponent";

// // const rootSurvey = createRoot(document.getElementById("surveyElement"));
// // rootSurvey.render(
// //   <React.StrictMode>
// //     <SurveyComponent onSurveyComplete={(data) => console.log(data)}/>
// //   </React.StrictMode>,
// // );

// // const rootDisplay = createRoot(document.getElementById("displayElement"));
// // rootDisplay.render(
// //   <React.StrictMode>
// //     <DisplayComponent answers={{}} />
// //   </React.StrictMode>,
// // );
// // reportWebVitals();

// import React, { useState } from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import reportWebVitals from './reportWebVitals';
// import SurveyComponent from './SurveyComponent';
// import DisplayComponent from './DisplayComponent';

// function App() {
//   const [answers, setAnswers] = useState({});

//   const handleSurveyUpdate = (sender) => {
//     const currentPage = sender.currentPage;
//     const questions = currentPage ? currentPage.questions : [];

//     // Extracting and updating answers dynamically
//     const updatedAnswers = {};
//     questions.forEach((question) => {
//       updatedAnswers[question.name] = sender.data[question.name];
//     });

//     setAnswers(updatedAnswers);
//   };

//   return (
//     <div>
//       <div className="gameScreen">
//         <div id="displayElement" style={{ position: 'relative' }}>
//           <DisplayComponent answers={answers} />
//         </div>
//       </div>
//       <div className="survey">
//         <div id="root">
//           <SurveyComponent onSurveyUpdate={handleSurveyUpdate} />
//         </div>
//       </div>
//     </div>
//   );
// }

// const root = createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// reportWebVitals();


// App.jsx

import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import SurveyComponent from './SurveyComponent';
import DisplayComponent from './DisplayComponent';

function App() {
  const [answers, setAnswers] = useState({});

  const handleSurveyUpdate = (questionName, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionName]: answer,
    }));
  };

  return (
    <div>
 
        <div id="root">
          <SurveyComponent onSurveyUpdate={handleSurveyUpdate} />

      </div>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
