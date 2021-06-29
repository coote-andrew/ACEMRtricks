var hardCodedShortenings = {
    "Haemoglobin.":"Hb",
    "Sodium (Blood Gas).":"Na",
    "Potassium (Blood Gas).":"K",
    "Chloride (Blood Gas).":"Cl",
    "Lactate (Blood Gas).": "Lactate",
    "POC Ketones": " ",
    "POC Pregnancy - HCG": " ",
    "UA - LEUKOCYTES": "leuks",
    "UA - ERYTHROCYTES/HAEMOGLOBIN": "RBCs",
    "Aspartate aminotransferase.":"AST", 
    "Alanine aminotransferase.":"ALT",
    "Alkaline phosphatase.":"ALP",
    "Gamma glutamyl transferase.":"GGT",
    "Bilirubin.":"bili",
    "Albumin.":"alb",
    "Platelets.":" ",
    "White Cell Count.":" ",
    "C-Reactive Protein.":" ",
    "Corrected Calcium.": " ",
    "Magnesium.":" ",
    "Phosphate.":" ",
    "Lipase.": " ",
    "Thyroid Stimulating Hormone.":" ",
    "eGFR.":"eGFR",
    "Sodium.": " ",
    "Potassium.": " ",
    "Chloride.": " ",
    "Troponin I.":" "
};

let hardCodedPartialReplacements = [
    ["(Haemolyzed)", "lyzed"],
    [" (H)","*"],
    [" (L)","*"],

];

let hardCodedShorteningsNeg = {
    "NEG.":"neg",
    "Neg": "neg",
    "NEG (0)":"neg",
    "negative":"neg",
    "Unavail":"N/A"
};

let hardCodedCompletedResults = [
    ["BG Sample type. Venous/","VBG "],
    ["BG Sample type. Arterial/", "ABG "],
    ["FBE Hb", "FBE"]
];

const hardCodedLabs = {
    "BG":["Sample type.","Haemoglobin.","Lactate (Blood Gas)."],
    "Ketones":["POC Ketones"],
    "Pregnancy": ["POC Pregnancy - HCG"],
    "Urine": ["UA - ERYTHROCYTES/HAEMOGLOBIN", "UA - LEUKOCYTES"],
    "LFTs": ["Aspartate aminotransferase.", "Alanine aminotransferase.","Alkaline phosphatase.","Gamma glutamyl transferase.","Bilirubin.", "Albumin."],
    "Lipase":["Lipase."],
    "FBE": ["Haemoglobin.", "White Cell Count.", "Platelets."],
    "CRP":["C-Reactive Protein."],
    "CMP":["Corrected Calcium.", "Magnesium.", "Phosphate."],
    "TSH":["Thyroid Stimulating Hormone."],
    "T3/4":["Tri....."],
    "UECs":["Sodium.","Potassium.","Chloride.","eGFR."],
    "trop":["Troponin I."],

};


const testData = `Results for TEST, TEST  (MRN 12345678) as of 15/06/2021 21:07

15/06/2021 14:41
Sodium.: 137
Potassium.: 3.9
Chloride.: 100
Bicarbonate.: 26
Urea.: 5.2
Creatinine.: 57
eGFR.: > 90
Bilirubin.: 11
Aspartate aminotransferase.: 47 (H)
Alanine aminotransferase.: 47 (H)
Alkaline phosphatase.: 91
Gamma glutamyl transferase.: 25
Total Protein.: 75
Albumin.: 35
Globulin.: 40
C-Reactive Protein.: 1.9
Lipase.: 6 (L)
Troponin I.: 4
Z-score: Unavail
eGFR comment.: eGFR calculated using CKD-EPI, units: ml/min/1.73m2.
Fixed comment.: Z score is calculated for Troponin I samples collected less than 24 hours apart. Z score >= 2 sug...
Beta hCG.: <     1.2
HCG RI Comment.: Pregnancy testing...
Haemoglobin.: 145
Hct.: 0.44
RCC.: 5.21 (H)
MCV.: 85
MCH.: 27.8
MCHC.: 327
RDW.: 14.7 (H)
Platelets.: 365
Mean Platelet Volume.: 9.9
White Cell Count.: 6.1
Neutrophils.: 3.9
Lymphocytes.: 1.4
Monocytes.: 0.8
Eosinophils.: 0.0
Basophils.: 0.0
Diff reported.: Automated differential reported.

15/06/2021 14:43
Sample type.: Venous
FiO2 (Blood Gas).: 21
Temperature (Blood Gas).: 37.0
pH (Blood Gas).: 7.37
pCO2 (Blood Gas).: 52 (H)
pO2 (Blood Gas).: 32 (L)
Std Bicarbonate.: 26
Base Excess (Blood Gas).: 4.9 (H)
O2 Saturation (Blood Gas).: 53 (L)
Haemoglobin.: 146
Oxyhaemoglobin (Blood Gas).: 52.2 (L)
Reduced Hb (Blood Gas).: 46.2 (H)
Carboxyhaemoglobin (Blood Gas).: 0.8
Met Hb (Blood Gas).: 0.8
Sodium (Blood Gas).: 139
Potassium (Blood Gas).: 3.9
Chloride (Blood Gas).: 99
Calcium Ionised (Blood Gas).: 1.16
Glucose (Blood Gas).: 8.0 (H)
Lactate (Blood Gas).: 2.9 (H)
Fixed comment.: Carboxyhaemoglobi...

15/06/2021 14:43
ECG TRACE ONLY: Rpt

15/06/2021 17:21
CT ABDOMEN/PELVIS: Rpt

15/06/2021 20:14
Sample type.: Venous
FiO2 (Blood Gas).: 21
Temperature (Blood Gas).: 37.0
pH (Blood Gas).: 7.39
pCO2 (Blood Gas).: 48 (H)
pO2 (Blood Gas).: 33 (L)
Std Bicarbonate.: 26
Base Excess (Blood Gas).: 4.0 (H)
O2 Saturation (Blood Gas).: 57 (L)
Haemoglobin.: 133
Oxyhaemoglobin (Blood Gas).: 55.9 (L)
Reduced Hb (Blood Gas).: 42.2 (H)
Carboxyhaemoglobin (Blood Gas).: 0.9
Met Hb (Blood Gas).: 1.0
Sodium (Blood Gas).: 140
Potassium (Blood Gas).: 3.8
Chloride (Blood Gas).: 103
Calcium Ionised (Blood Gas).: 1.11 (L)
Glucose (Blood Gas).: 5.7
Lactate (Blood Gas).: 1.2
Fixed comment.: Carboxyhaemoglobi...

15/06/2021 20:44
XR CHEST: Rpt (Detected)

14/06/2021 05:50
Sodium.: 136
Potassium.: 3.7
Chloride.: 11*
Bicarbonate.: 26
Urea.: 5.2
Creatinine.: 57
eGFR.: > 90
Bilirubin.: 11
Aspartate aminotransferase.: 47 (H)
Alanine aminotransferase.: 47 (H)
Alkaline phosphatase.: 91
Gamma glutamyl transferase.: 25
Total Protein.: 75
Albumin.: 35
Globulin.: 40
C-Reactive Protein.: 1.9
Lipase.: 6 (L)
Troponin I.: 4
Z-score: Unavail
eGFR comment.: eGFR calculated using CKD-EPI, units: ml/min/1.73m2.
Fixed comment.: Z score is calculated for Troponin I samples collected less than 24 hours apart. Z score >= 2 sug...
Beta hCG.: <     1.2
HCG RI Comment.: Pregnancy testing...
Haemoglobin.: 145
Hct.: 0.44
RCC.: 5.21 (H)
MCV.: 85
MCH.: 27.8
MCHC.: 327
RDW.: 14.7 (H)
Platelets.: 365
Mean Platelet Volume.: 9.9
White Cell Count.: 6.1
Neutrophils.: 3.9
Lymphocytes.: 1.4
Monocytes.: 0.8
Eosinophils.: 0.0
Basophils.: 0.0
`;