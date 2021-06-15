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
    "Chloride.": " "
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
    "FBE": ["Haemoglobin.", "Platelets.", "White Cell Count."],
    "CRP":["C-Reactive Protein."],
    "CMP":["Corrected Calcium.", "Magnesium.", "Phosphate."],
    "TSH":["Thyroid Stimulating Hormone."],
    "T3/4":["Tri....."],
    "UECs":["Sodium.","Potassium.","Chloride.","eGFR."],

};