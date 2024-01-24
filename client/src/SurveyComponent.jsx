

import React, { useState, useEffect } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import "./index.css";
import { themeJson } from "./theme";
import { json } from "./json";
import parse from 'html-react-parser';

function SurveyComponent() {
  const [pictures, setPictures] = useState("");
  const [surveyInstance, setSurveyInstance] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState("");
  const [proceed, setProceed] = useState(true);
  const [showReload, setShowReload] = useState(false);


  useEffect(() => {
    const survey = new Model(json);
    survey.applyTheme(themeJson);
    setBackgroundImage('<img src="/images/scene1.png" className="backgroundImage"/>');

    survey.currentPageNo = 0;


    function handleBool(question) {
      var questionObject = json.pages.flatMap(page => page.elements).find(element => element.name === question);
      var imgString = survey.data[question] ? questionObject.imgTrue : questionObject.imgFalse;
      setPictures(prevPictures => ({ ...prevPictures, [question]: imgString }));
    }

    function handleRadioGroup(question, value) {
      var questionObject = json.pages.flatMap(page => page.elements).find(element => element.name === question);
      var imgString = questionObject.choices.find(choice => choice.value === value).img;

      if (question === "question6") {
        setBackgroundImage(imgString)
      } else {
        setPictures(prevPictures => ({ ...prevPictures, [question]: imgString }));
      }
    }

    const handleValueChanged = (sender, options) => {
      console.log(survey.currentPageNo)

      let questionObject = json.pages.flatMap(page => page.elements).find(element => element.name === options.name);

      if (questionObject && questionObject.type === 'boolean') {
        const imgString = options.value ? questionObject.imgTrue : questionObject.imgFalse;
        setPictures(prevPictures => ({ ...prevPictures, [options.name]: imgString }));
      } else if (questionObject && questionObject.type === 'radiogroup') {
        handleRadioGroup(options.name, options.value)
      } else if (questionObject && questionObject.type === 'checkbox') {

        let imgString = "";
        options.value.forEach(item => {

          var questionObject = json.pages.flatMap(page => page.elements).find(element => element.name === options.name);
          imgString = imgString + questionObject.choices.find(choice => choice.value === item).img;
        });

        setPictures(prevPictures => ({ ...prevPictures, [options.name]: imgString }));
      }
    };

    const handlePageChanged = () => {

      console.log(survey.currentPageNo)
      const surveyContainer = document.getElementById('surveyContainer');

      // Scroll to the top of the survey container
      surveyContainer.scrollIntoView({ behavior: 'smooth' });

      setPictures({});

      if (survey.currentPageNo === 0) {
        setBackgroundImage('<img src="/images/scene1.png" className="backgroundImage"/>');

        //if any of the image questions is answered all are as they are required to change pages
        if (survey.data.hasOwnProperty("question1")) {
          handleBool("question3");
          handleBool("question4");
          handleRadioGroup("question5", survey.data["question5"])
        }

      } else if (survey.currentPageNo === 1) {

        if (survey.data.hasOwnProperty("question7")) {
          //when it's question 5 in handleRadioGroup it will change the background
          handleRadioGroup("question6", survey.data["question6"])
          handleBool("question7");

          let imgString = "";
          survey.data["question8"].forEach(item => {

            var questionObject = json.pages.flatMap(page => page.elements).find(element => element.name === "question8");
            imgString = imgString + questionObject.choices.find(choice => choice.value === item).img;

          });

          setPictures(prevPictures => ({ ...prevPictures, [survey.data["question8"]]: imgString }));

        } else {
          setBackgroundImage('<img src="/images/scene2.png" className="backgroundImage"/>');
        }

      } else if (survey.currentPageNo === 2) {

        setBackgroundImage('<img src="/images/scene3.png" className="backgroundImage"/>');

        if (survey.data.hasOwnProperty("question9")) {
          handleRadioGroup("question9", survey.data["question9"])
          handleRadioGroup("question10", survey.data["question10"])
          handleBool("question11")
          handleRadioGroup("question12", survey.data["question12"])


        }
      } else if (survey.currentPageNo === 3) {
        setBackgroundImage('<img src="/images/scene4.png" className="backgroundImage"/>');

      }
    };

    const handleComplete = (sender, options) => {
      const surveyData = JSON.stringify(sender.data);

      console.log(surveyData);

      // Send data to the server
      fetch('https://poppi-server.azurewebsites.net/saveSurvey', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ surveyData }),
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));

        setShowReload(true);
    };

    const handleValidation = (sender, options) => {
      if (options.name === 'question2') {
        if (options.value < 0 || options.value > 100) {
          options.error = "Come on be reasonable"
        }
      }

      if (options.name === 'question8') {
        console.log(options.value.includes('Item 5'))
        if (options.value.length > 1 && options.value.includes('Item 5')) {
          options.error = "If you pick 'None' you can't pick any others"
        }
      }
    };

    //we add the even listeners
    survey.onValueChanged.add(handleValueChanged);
    survey.onCurrentPageChanged.add(handlePageChanged);
    survey.onComplete.add(handleComplete);
    survey.onValidateQuestion.add(handleValidation);


    setSurveyInstance(survey);

    return () => {
      //we delete event listeners when component unmounts
      survey.onValueChanged.remove(handleValueChanged);
      survey.onCurrentPageChanged.remove(handlePageChanged);
      survey.onComplete.remove(handleComplete);
      survey.onValidateQuestion.remove(handleValidation);

    };
  }, []);

  const handleConsentButtonClick = () => {
    setProceed(false);
  };

  const handlePlayAgain = () => {
    window.location.reload()
  }

  const expandButton = document.getElementById('expand');

  if (expandButton && proceed === true) {
    expandButton.style.display = 'none';
  } else if (expandButton && proceed === false) {
    expandButton.style.display = '';
  }


  return (
    <div className="main">
      {proceed && (
        <div className="consentmain">
        <div className="consentpage">

          <h1>Welcome to the XTC Shop</h1>
          <h3> ...where we ask, what if policy makers decide to regulate ecstasy? What would a point of sale or outlet look like? Who should be able to buy or access legalised ecstasy? And under what conditions?
          </h3>

          <iframe src="https://player.vimeo.com/video/906077942?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="500" height="281"  frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="introvidpoppi"></iframe><script src="https://player.vimeo.com/api/player.js"></script>


          <div className="instructions">
          <h3>If playing on a tablet or mobile device, please turn the screen horizontally for the best experience.</h3>

          <h3>Navigate the survey by scrolling through the questions on the left.</h3>
          </div>
          <h3>During this interactive survey we will ask several questions about the regulation of ecstasy. No personal data will be requested and we will not store any information to track your identity.
          </h3>
          <h3>
            The data will be used for research purposes and to feed the public debate about drug policy and the regulation of drugs like ecstasy.
            </h3>
            <h3>
            By agreeing I grant permission:
            </h3>
            <button id="consentbutton" onClick={handleConsentButtonClick}><h3>Yes, I agree</h3></button>
          
 

        </div>
        </div>
      )}
      {!proceed && (
        <div className="gameScreen">
          {parse(backgroundImage)}
          {Object.values(pictures).map((imgString, index) => (
            <div key={index}>{parse(imgString)}</div>
          ))}
        </div>
      )}
      {!proceed && (
        <div className="survey" id="surveyContainer">
          {surveyInstance && <Survey model={surveyInstance} />}
          {showReload && (<button id="consentbutton" onClick={handlePlayAgain} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}><h3>Play again</h3></button>)}
        </div>
      )}
    </div>
  );
}

export default SurveyComponent;