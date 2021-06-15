
def returnHardcoded(request):

    hardCodedShortenings = """
    let hardCodedShortenings = {
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
    }; """
    hardCodedPartialReplacements = """
    let hardCodedPartialReplacements = [
                ["(Haemolyzed)", "lyzed"],
                [" (H)","*"],
                [" (L)","*"],

            ];
    """
    return {'hardCodedShortenings': hardCodedShortenings,
    "hardCodedPartialReplacements":hardCodedPartialReplacements,
    }