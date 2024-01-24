export const json = {
   "logoPosition": "right",
   "pages": [
    {
     "name": "page2",
     "elements": [
      {
         "type": "radiogroup",
         "name": "question1",
         "title": "Are you in favour of the regulation of ecstasy?",
         "isRequired": true,
         "choices": [
          {
           "value": "Yes",
           "text": "Yes",
           "img": '<img src="/images/blank.png" />'
          },
          {
           "value": "No",
           "text": "No",
           "img": '<img src="/images/blank.png" />'
          },
          {
           "value": "Maybe",
           "text": "I am in doubt",
           "img": '<img src="/images/blank.png" />'
          }
         ]
        },
      {
       "type": "text",
       "name": "question2",
       "title": "What do you think the minimum age should be to buy ecstasy?",
       "isRequired": true,
       "validators": [
                           { "type": "numeric", "text": "Value must be a number" }
                        ]
      },
      {
       "type": "boolean",
       "name": "question3",
       "title": "If someone wants to buy ecstasy, should they be required to show their ID?",
       "isRequired": true,
       "imgTrue": '<img src="/images/id.png"/>',
       "imgFalse": '<img src="/images/noid.png"/>',
      },
      {
       "type": "boolean",
       "name": "question4",
       "title": "Should you be able to buy ecstasy under the influence of alcohol or another substance?",
       "isRequired": true,
       "imgTrue": '<img src="/images/alc.png"/>',
       "imgFalse": '<img src="/images/noalc.png"/>',
      },
      {
       "type": "radiogroup",
       "name": "question5",
       "title": "Should ecstasy sales end after a certain hour?",
       "isRequired": true,
       "choices": [
        {
         "value": "Afternoon",
         "text": "Yes - limit their sale to the afternoon. (Up to ~17:00)",
         "img": '<img src="/images/afternoon.png" />'
        },
        {
         "value": "Evening",
         "text": "Yes - limit their sale to the evening (Up to ~00:00)",
         "img": '<img src="/images/evening.png" />'
        },
        {
         "value": "Always",
         "text": "No",
         "img": '<img src="/images/247.png" />'
        }
       ]
      }
     ]
    },
    {
     "name": "page3",
     "elements": [
      {
         "type": "radiogroup",
         "name": "question6",
         "title": "Where should you be allowed to buy ecstasy?",
         "isRequired": true,
         "choices": [
          {
           "value": "ClubBar",
           "text": "Club or Bar",
           "img": '<img src="/images/barbase.png" />'
          },
          {
           "value": "Smartshop",
           "text": "Smartshop",
           "img": '<img src="/images/shopbase.png" />'
          },
          {
           "value": "Pharmacy",
           "text": "Pharmacy",
           "img": '<img src="/images/pharmacybase.png" />'
          },
          {
            "value": "Other",
            "text": "Other",
            "img": '<img src="/images/otherbase.png" />'
           },
         ],
        },
      {
       "type": "boolean",
       "name": "question7",
       "title": "Should the sale of ecstasy be allowed to be advertised?",
       "isRequired": true,
       "imgTrue": '<img src="/images/ads.png"/>',
       "imgFalse": '<img src="/images/"/>',
      },
      {
       "type": "checkbox",
       "name": "question8",
       "title": "Which forms do you think ecstasy could be sold in?",
       "isRequired": true,
       "choices": [
        {
         "value": "Pills",
         "text": "Pills or capsules",
         "img": '<img src="/images/capsules.png" />'
        },
        {
         "value": "Shots",
         "text": "Drinkable shots",
         "img": '<img src="/images/shots.png" />'
        },
        {
         "value": "Candies",
         "text": "Candies or baked goods",
         "img": '<img src="/images/lollies.png" />'
        },
        {
         "value": "Tinctures",
         "text": "Tinctures or essences",
         "img": '<img src="/images/tincture.png" />'
        },
        {
         "value": "Item 5",
         "text": "None",
         "img": '<img src="/images/blank.png" />'
        }
       ]
      }
     ]
    },
    {
     "name": "page4",
     "elements": [
      {
       "type": "radiogroup",
       "name": "question9",
       "title": "How a product is presented and packaged can influence how people perceive it (fun/serious, healthy/unhealthy, etc.). Packaging can also serve as advertising, influencing purchases. Considering that, how would you like to see ecstasy packaged?",
       "isRequired": true,
       "choices": [
        {
         "value": "Fun",
         "text": "Fun and appealing",
         "img": '<img src="/images/clubpack.png" />'
        },
        {
         "value": "Holistic",
         "text": "Down-to-earth and holistic",
         "img": '<img src="/images/holisticpack.png" />'
        },
        {
         "value": "Neutral",
         "text": "Neutral and medicinal",
         "img": '<img src="/images/pharmapack.png" />'
        },
       ]
      },
      {
       "type": "radiogroup",
       "name": "question10",
       "title": "The current illegal status of ecstasy is causing many unintended harmful effects on society (health, education, crime, etc.). If ecstasy were to be regulated, would you as the consumer, be willing to pay extra to help balance these effects?",
       "isRequired": true,
       "choices": [
        {
         "value": "NoExtra",
         "text": "I would not like to pay extra",
         "img": '<img src="/images/blank.png" />'
        },
        {
         "value": "EnvironmentalTax",
         "text": "I would like to pay extra for sustainable and environmentally friendly produced pills",
         "img": '<img src="/images/envtax.png" />'
        },
        {
         "value": "HealthTax",
         "text": "I would like to pay extra to contribute to drug and health education",
         "img": '<img src="/images/healthtax.png" />'
        },
        {
         "value": "CrimeTax",
         "text": "I would like to pay extra to contribute to fighting crime",
         "img": '<img src="/images/crimetax.png" />'
        },
        {
         "value": "OtherTax",
         "text": "I would like to pay extra for another reason",
         "img": '<img src="/images/mysterytax.png" />'
        }
       ]
      },
      {
       "type": "boolean",
       "name": "question11",
       "title": "Should there be a maximum amount of pills one person can buy at a time?",
       "isRequired": true,
       "imgTrue": '<img src="/images/maxpills.png"/>',
       "imgFalse": '<img src="/images/"/>',
      },
      {
       "type": "radiogroup",
       "name": "question12",
       "title": "Ecstasy interacts with some medications, including certain antidepressants, and may affect its desired effects. Are you willing to provide personal medical information before you purchase ecstasy?",
       "isRequired": true,
       "choices": [
        {
         "value": "NoMedRecords",
         "text": "No",
         "img": '<img src="/images/medform.png" />'
        },
        {
         "value": "YesMedRecords",
         "text": "Yes, I would share all my medical records",
         "img": '<img src="/images/blank.png" />'
        },
        {
         "value": "InteractionRecords",
         "text": "Yes, but only a list of medications that can potentially interact with ecstasy",
         "img": '<img src="/images/interactions.png" />'
        }
       ]
      }
     ]
    },
    {
     "name": "page5",
     "elements": [
      {
       "type": "radiogroup",
       "name": "question13",
       "title": "Under the conditions you chose in this survey, are you in favour of the regulation of ecstasy?",
       "isRequired": true,
       "choices": [
        {
         "value": "Yes",
         "text": "Yes",
         "img":'<img src="/images/blank.png" />'
        },
        {
         "value": "No",
         "text": "No",
         "img": '<img src="/images/blank.png" />'
        },
        {
         "value": "Maybe",
         "text": "I am in doubt",
         "img": '<img src="/images/blank.png" />'
        }
       ]
      },
      {
       "type": "dropdown",
       "name": "question14",
       "title": "Please select the category that includes your age",
       "choices": [
        {
         "value": "Under18",
         "text": "Under 18",
        },
        {
         "value": "18to24",
         "text": "18 - 24"
        },
        {
         "value": "25to34",
         "text": "25 - 34"
        },
        {
         "value": "35to44",
         "text": "35 - 44"
        },
        {
         "value": "45to54",
         "text": "45 - 54"
        },
        {
         "value": "55to64",
         "text": "55 - 64"
        },
        {
         "value": "64Up",
         "text": "65+"
        }
       ]
      },
      {
                    "type": "dropdown",
                    "name": "question15",
                    "title": "What nationality are you?",
                    "choices": [
                     "Afghan",
                     "Albanian",
                     "Algerian",
                     "American",
                     "Andorran",
                     "Angolan",
                     "Antiguans",
                     "Argentinean",
                     "Armenian",
                     "Australian",
                     "Austrian",
                     "Azerbaijani",
                     "Bahamian",
                     "Bahraini",
                     "Bangladeshi",
                     "Barbadian",
                     "Barbudans",
                     "Batswana",
                     "Belarusian",
                     "Belgian",
                     "Belizean",
                     "Beninese",
                     "Bhutanese",
                     "Bolivian",
                     "Bosnian",
                     "Brazilian",
                     "British",
                     "Bruneian",
                     "Bulgarian",
                     "Burkinabe",
                     "Burmese",
                     "Burundian",
                     "Cambodian",
                     "Cameroonian",
                     "Canadian",
                     "Cape Verdean",
                     "Central African",
                     "Chadian",
                     "Chilean",
                     "Chinese",
                     "Colombian",
                     "Comoran",
                     "Congolese",
                     "Costa Rican",
                     "Croatian",
                     "Cuban",
                     "Cypriot",
                     "Czech",
                     "Danish",
                     "Djibouti",
                     "Dominican",
                     "Dutch",
                     "East Timorese",
                     "Ecuadorean",
                     "Egyptian",
                     "Emirian",
                     "Equatorial Guinean",
                     "Eritrean",
                     "Estonian",
                     "Ethiopian",
                     "Fijian",
                     "Filipino",
                     "Finnish",
                     "French",
                     "Gabonese",
                     "Gambian",
                     "Georgian",
                     "German",
                     "Ghanaian",
                     "Greek",
                     "Grenadian",
                     "Guatemalan",
                     "Guinea-Bissauan",
                     "Guinean",
                     "Guyanese",
                     "Haitian",
                     "Herzegovinian",
                     "Honduran",
                     "Hungarian",
                     "I-Kiribati",
                     "Icelander",
                     "Indian",
                     "Indonesian",
                     "Iranian",
                     "Iraqi",
                     "Irish",
                     "Israeli",
                     "Italian",
                     "Ivorian",
                     "Jamaican",
                     "Japanese",
                     "Jordanian",
                     "Kazakhstani",
                     "Kenyan",
                     "Kittian and Nevisian",
                     "Kuwaiti",
                     "Kyrgyz",
                     "Laotian",
                     "Latvian",
                     "Lebanese",
                     "Liberian",
                     "Libyan",
                     "Liechtensteiner",
                     "Lithuanian",
                     "Luxembourger",
                     "Macedonian",
                     "Malagasy",
                     "Malawian",
                     "Malaysian",
                     "Maldivan",
                     "Malian",
                     "Maltese",
                     "Marshallese",
                     "Mauritanian",
                     "Mauritian",
                     "Mexican",
                     "Micronesian",
                     "Moldovan",
                     "Monacan",
                     "Mongolian",
                     "Moroccan",
                     "Mosotho",
                     "Motswana",
                     "Mozambican",
                     "Namibian",
                     "Nauruan",
                     "Nepalese",
                     "New Zealander",
                     "Nicaraguan",
                     "Nigerian",
                     "Nigerien",
                     "North Korean",
                     "Northern Irish",
                     "Norwegian",
                     "Omani",
                     "Pakistani",
                     "Palauan",
                     "Palestinian",
                     "Panamanian",
                     "Papua New Guinean",
                     "Paraguayan",
                     "Peruvian",
                     "Polish",
                     "Portuguese",
                     "Qatari",
                     "Romanian",
                     "Russian",
                     "Rwandan",
                     "Saint Lucian",
                     "Salvadoran",
                     "Samoan",
                     "San Marinese",
                     "Sao Tomean",
                     "Saudi",
                     "Scottish",
                     "Senegalese",
                     "Serbian",
                     "Seychellois",
                     "Sierra Leonean",
                     "Singaporean",
                     "Slovakian",
                     "Slovenian",
                     "Solomon Islander",
                     "Somali",
                     "South African",
                     "South Korean",
                     "Spanish",
                     "Sri Lankan",
                     "Sudanese",
                     "Surinamer",
                     "Swazi",
                     "Swedish",
                     "Swiss",
                     "Syrian",
                     "Taiwanese",
                     "Tajik",
                     "Tanzanian",
                     "Thai",
                     "Togolese",
                     "Tongan",
                     "Trinidadian or Tobagonian",
                     "Tunisian",
                     "Turkish",
                     "Tuvaluan",
                     "Ugandan",
                     "Ukrainian",
                     "Uruguayan",
                     "Uzbekistani",
                     "Venezuelan",
                     "Vietnamese",
                     "Welsh",
                     "Yemenite",
                     "Zambian",
                     "Zimbabwean"
                  ]
                   },
      {
       "type": "rating",
       "name": "question16",
       "title": "On a scale from one to ten where would you place yourself in terms of socio-economic views?",
       "autoGenerate": false,
       "rateCount": 10,
       "rateValues": [
        {
         "value": 1,
         "text": "Right"
        },
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        {
         "value": 10,
         "text": "Left"
        }
       ],
       "rateMax": 10
      },
      {
       "type": "rating",
       "name": "question17",
       "title": "On a scale from one to ten, where would you place yourself in terms of cultural/ethical views?",
       "autoGenerate": false,
       "rateCount": 10,
       "rateValues": [
        {
         "value": 1,
         "text": "Conservative"
        },
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        {
         "value": 10,
         "text": "Progressive"
        }
       ],
       "rateMax": 10
      }
     ],
     "description": "Thank you for completing the survey! The following includes a short series of demographic questions that will help us with our research."
    }
   ],
   "headerView": "advanced"
  }