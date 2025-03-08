export default function handler(req, res) {
    const jsonData = {
    "diabetes": {
        "name": "Diabetes",
        "description": "A chronic disease that affects how your body turns food into energy by impacting insulin production or use.",
        "symptoms": ["Increased thirst", "Frequent urination", "Extreme hunger", "Unexplained weight loss", "Fatigue",
                     "Blurred vision"],
                     "risk_factors": ["Family history", "Obesity", "Physical inactivity", "Age", "High blood pressure"],
                     "prevention": ["Healthy diet", "Regular exercise", "Weight management", "Blood glucose monitoring"],
                     "treatment": ["Insulin therapy", "Oral medications", "Lifestyle changes", "Regular monitoring",
                      "Diabetes education"]
                    },
    "hypertension": {
        "name": "Hypertension (High Blood Pressure)",
        "description": "A common condition where the long-term force of the blood against artery walls is high enough to potentially cause health problems.",
        "symptoms": ["Usually no symptoms", "Headaches (in severe cases)", "Shortness of breath", "Nosebleeds"],
        "risk_factors": ["Age", "Family history", "Obesity", "Sedentary lifestyle", "Smoking", "High sodium diet",
                         "Stress"],
                         "prevention": ["Regular exercise", "Healthy diet", "Reducing sodium intake", "Limiting alcohol", "Not smoking",
                       "Stress management"],
                       "treatment": ["Blood pressure medications", "Lifestyle changes", "Regular monitoring",
                      "Stress reduction techniques"]
                    },
    "asthma": {
        "name": "Asthma",
        "description": "A condition in which airways narrow and swell and produce extra mucus, causing breathing difficulty.",
        "symptoms": ["Shortness of breath", "Chest tightness or pain", "Wheezing", "Trouble sleeping due to coughing",
                     "Coughing attacks"],
        "risk_factors": ["Family history", "Allergies", "Obesity", "Smoking", "Air pollution",
                         "Occupational exposures"],
                         "prevention": ["Avoiding triggers", "Maintaining good overall health",
                       "Getting vaccinated for influenza and pneumonia", "Regular check-ups"],
                       "treatment": ["Inhaled corticosteroids", "Long-acting beta agonists", "Quick-relief medications",
                      "Asthma action plan", "Allergy medications"]
                    },
    "alzheimers": {
        "name": "Alzheimer's Disease",
        "description": "A progressive disorder that causes brain cells to degenerate and die, leading to memory loss and cognitive decline.",
        "symptoms": ["Memory loss", "Confusion", "Difficulty organizing thoughts", "Impaired judgment",
                     "Changes in behavior", "Difficulty speaking or swallowing"],
                     "risk_factors": ["Age", "Family history", "Genetics", "Down syndrome", "Mild cognitive impairment",
                         "Lifestyle factors"],
                         "prevention": ["Mental stimulation", "Physical activity", "Social engagement", "Healthy diet",
                       "Cardiovascular health management"],
                       "treatment": ["Cholinesterase inhibitors", "Memantine", "Supportive care", "Clinical trials",
                      "Behavioral management"]
                    },
    "arthritis": {
        "name": "Arthritis",
        "description": "Inflammation of one or more joints, causing pain and stiffness that can worsen with age.",
        "symptoms": ["Joint pain", "Stiffness", "Swelling", "Redness", "Decreased range of motion"],
        "risk_factors": ["Age", "Gender (more common in women)", "Family history", "Previous joint injury", "Obesity"],
        "prevention": ["Maintain healthy weight", "Regular exercise", "Protect joints", "Good posture",
                       "Balanced diet"],
                       "treatment": ["Medications for pain and inflammation", "Physical therapy", "Occupational therapy",
                      "Joint surgery", "Lifestyle modifications"]
                    },
    "cancer": {
        "name": "Cancer",
        "description": "A group of diseases involving abnormal cell growth with the potential to invade or spread to other parts of the body.",
        "symptoms": ["Fatigue", "Weight changes", "Skin changes", "Pain", "Unusual bleeding", "Persistent cough",
                     "Lumps or tissue masses"],
                     "risk_factors": ["Age", "Family history", "Tobacco use", "Alcohol consumption", "Sun exposure",
                         "Radiation exposure", "Certain infections", "Obesity"],
                         "prevention": ["Regular screenings", "Avoiding tobacco", "Limiting alcohol", "Sun protection", "Healthy diet",
                       "Regular exercise", "Vaccinations"],
                       "treatment": ["Surgery", "Chemotherapy", "Radiation therapy", "Immunotherapy", "Hormone therapy",
                      "Targeted drug therapy", "Palliative care"]
                    },
    "depression": {
        "name": "Depression",
        "description": "A mental health disorder characterized by persistently depressed mood and loss of interest in activities.",
        "symptoms": ["Persistent sad mood", "Loss of interest in activities", "Changes in appetite",
                     "Sleep disturbances", "Fatigue", "Feelings of worthlessness", "Difficulty concentrating",
                     "Thoughts of death or suicide"],
                     "risk_factors": ["Family history", "Trauma or stress", "Physical illness", "Medications", "Personal problems",
                        "Substance abuse"],
                        "prevention": ["Stress management", "Social connections", "Regular exercise", "Healthy sleep habits",
                            "Seeking help early"],
                            "treatment": ["Psychotherapy", "Antidepressant medications", "Lifestyle changes", "Support groups",
                                "Alternative therapies"]
                            },
                            "heart_disease": {
                                "name": "Heart Disease",
                                "description": "A range of conditions that affect the heart, including coronary artery disease, heart rhythm problems, and heart defects.",
                                "symptoms": ["Chest pain", "Shortness of breath", "Pain in neck, jaw, throat, or back",
                                    "Numbness in extremities", "Fatigue", "Irregular heartbeat"],
                                    "risk_factors": ["Age", "Family history", "Smoking", "High blood pressure", "High cholesterol", "Diabetes",
                                        "Obesity", "Stress", "Poor diet", "Physical inactivity"],
                                        "prevention": ["Regular exercise", "Healthy diet", "Not smoking", "Limiting alcohol",
                                            "Maintaining healthy weight", "Regular check-ups", "Stress management"],
                                            "treatment": ["Medications", "Surgery", "Cardiac rehabilitation", "Lifestyle changes", "Implanted devices"]
                                        },
                                        "hepatitis": {
                                            "name": "Hepatitis",
                                            "description": "Inflammation of the liver, commonly caused by a viral infection but can also result from other causes.",
                                            "symptoms": ["Fatigue", "Flu-like symptoms", "Dark urine", "Pale stool", "Abdominal pain", "Loss of appetite",
                                                "Jaundice", "Joint pain"],
                                                "risk_factors": ["Unprotected sex", "Sharing needles", "Blood transfusions", "Tattoos and piercings",
                                                    "Close contact with infected persons", "Drinking contaminated water"],
                                                    "prevention": ["Vaccination (for types A and B)", "Hand hygiene", "Safe sex practices",
                                                        "Avoiding needle sharing", "Food and water safety"],
                                                        "treatment": ["Antiviral medications", "Liver transplant (severe cases)", "Supportive care",
                                                            "Lifestyle modifications", "Regular monitoring"]
                                                        },
                                                        "hiv_aids": {
                                                            "name": "HIV/AIDS",
                                                            "description": "HIV is a virus that attacks the immune system, and AIDS is the most advanced stage of HIV infection.",
                                                            "symptoms": ["Flu-like symptoms in early stage", "Fatigue", "Swollen lymph nodes", "Weight loss", "Fever",
                                                                "Night sweats", "Opportunistic infections in later stages"],
                                                                "risk_factors": ["Unprotected sex", "Sharing needles", "Blood transfusions", "Mother-to-child transmission",
                                                                    "Occupational exposure"],
                                                                    "prevention": ["Safe sex practices", "Pre-exposure prophylaxis (PrEP)", "Post-exposure prophylaxis (PEP)",
                                                                        "Not sharing needles", "Testing and treatment"],
                                                                        "treatment": ["Antiretroviral therapy (ART)", "Treatment of opportunistic infections", "Regular monitoring",
                                                                            "Supportive care", "Preventive measures"]
                                                                        }
                                                                    }
                                                                    
                                                                    res.status(200).json(jsonData); // Send JSON response
                                                                  }