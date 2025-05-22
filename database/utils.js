const {
  Verbs_ImperfectiveData,
  Verbs_PerfectiveData,
  AdjectivesData,
  AdverbsData,
  NounsData,
  SentencesData,
  ConjunctionsData,
  PrepositionsData,
  DeterminersData,
  MiscData,
  ParticlesData,
  PronounsData,
  App_functionsData,
  ImperativeData,
  Nominative_MianownikData,
  Instrumental_NarzędnikData,
  Accusative_BiernikData,
  Genitive_DopełniaczData,
  Locative_MiejscownikData,
} = require("./data/index");

function formatSentenceData(input) {

  const formattedSentenceData = input.map((sentence) => {
    if (!sentence.Unit || !sentence.Topic || !sentence.Polish || !sentence.English) {
      throw new Error('Invalid data: all fields must be present');
    }
    return [sentence.Unit, sentence.Topic, sentence.Polish, sentence.English];
  });

  return formattedSentenceData;
}

function generateImperfectiveVerbData(input) {
  let verbArray = [];

  for (let i = 0; i < input.length; i += 3){
    verbArray.push(input.slice(i, i + 3));
  }

  let pastTenseVerbs = [];
  let presentTenseVerbs = [];
  let conditionalTenseVerbs = [];

  verbArray.forEach((verb) => {
    pastTenseVerbs.push({
      "Unit": verb[0]["Unit"],
      "Topic": verb[0]["Topic"],
      "Verb": verb[0]["Verb"],
      "Meaning": verb[0]["Meaning"],
      "Conjugation": verb[0]["Conjugation"],
      "Ja": verb[1]["Ja"],
      "Ty": verb[1]["Ty"],
      "On/Ona": verb[1]["On/Ona"],
      "My": verb[1]["My"],
      "Wy": verb[1]["Wy"],
      "Oni/One": verb[1]["Oni/One"],
    })
    presentTenseVerbs.push({
      "Unit": verb[0]["Unit"],
      "Topic": verb[0]["Topic"],
      "Verb": verb[0]["Verb"],
      "Meaning": verb[0]["Meaning"],
      "Conjugation": verb[0]["Conjugation"],
      "Ja": verb[0]["Ja"],
      "Ty": verb[0]["Ty"],
      "On/Ona": verb[0]["On/Ona"],
      "My": verb[0]["My"],
      "Wy": verb[0]["Wy"],
      "Oni/One": verb[0]["Oni/One"],
    })
    conditionalTenseVerbs.push({
      "Unit": verb[0]["Unit"],
      "Topic": verb[0]["Topic"],
      "Verb": verb[0]["Verb"],
      "Meaning": verb[0]["Meaning"],
      "Conjugation": verb[0]["Conjugation"],
      "Ja": verb[2]["Ja"],
      "Ty": verb[2]["Ty"],
      "On/Ona": verb[2]["On/Ona"],
      "My": verb[2]["My"],
      "Wy": verb[2]["Wy"],
      "Oni/One": verb[2]["Oni/One"],
    })
  })

  return {presentTenseVerbs, pastTenseVerbs, conditionalTenseVerbs}
}

function formatImperfectiveVerbData() {
  const verbObject = generateImperfectiveVerbData(Verbs_ImperfectiveData);
  const formattedPastVerbs = verbObject.pastTenseVerbs.map((verb) => {
    return [verb.Unit, verb.Topic, verb.Verb, verb.Meaning, verb.Conjugation, verb.Ja, verb.Ty, verb["On/Ona"], verb.My, verb.Wy, verb["Oni/One"]]
  })
  const formattedPresentVerbs = verbObject.presentTenseVerbs.map((verb) => {
    return [verb.Unit, verb.Topic, verb.Verb, verb.Meaning, verb.Conjugation, verb.Ja, verb.Ty, verb["On/Ona"], verb.My, verb.Wy, verb["Oni/One"]]
    })
  const formattedConditionalVerbs = verbObject.conditionalTenseVerbs.map((verb) => {
    return [verb.Unit, verb.Topic, verb.Verb, verb.Meaning, verb.Conjugation, verb.Ja, verb.Ty, verb["On/Ona"], verb.My, verb.Wy, verb["Oni/One"]]
  })

  return {formattedPastVerbs, formattedPresentVerbs, formattedConditionalVerbs}
  
}

function generatePerfectiveVerbData(input) {
  let verbArray = [];

  for (let i = 0; i < input.length; i += 3){
    verbArray.push(input.slice(i, i + 3));
  }

  let pastTenseVerbs = [];
  let futureTenseVerbs = [];
  let conditionalTenseVerbs = [];

  verbArray.forEach((verb) => { 
    futureTenseVerbs.push({
      "Unit": verb[0]["Unit"],
      "Topic": verb[0]["Topic"],
      "Verb": verb[0]["Verb"],
      "Meaning": verb[0]["Meaning"],
      "Conjugation": verb[0]["Conjugation"],
      "Ja": verb[0]["Ja"],
      "Ty": verb[0]["Ty"],
      "On/Ona": verb[0]["On/Ona"],
      "My": verb[0]["My"],
      "Wy": verb[0]["Wy"],
      "Oni/One": verb[0]["Oni/One"],
    })
    conditionalTenseVerbs.push({
      "Unit": verb[2]["Unit"],
      "Topic": verb[2]["Topic"],
      "Verb": verb[2]["Verb"],
      "Meaning": verb[2]["Meaning"],
      "Conjugation": verb[2]["Conjugation"],
      "Ja": verb[2]["Ja"],
      "Ty": verb[2]["Ty"],
      "On/Ona": verb[2]["On/Ona"],
      "My": verb[2]["My"],
      "Wy": verb[2]["Wy"],
      "Oni/One": verb[2]["Oni/One"],
    })
    pastTenseVerbs.push({
      "Unit": verb[1]["Unit"],
      "Topic": verb[1]["Topic"],
      "Verb": verb[1]["Verb"],
      "Meaning": verb[1]["Meaning"],
      "Conjugation": verb[1]["Conjugation"],
      "Ja": verb[1]["Ja"],
      "Ty": verb[1]["Ty"],
      "On/Ona": verb[1]["On/Ona"],
      "My": verb[1]["My"],
      "Wy": verb[1]["Wy"],
      "Oni/One": verb[1]["Oni/One"],
    })
  })
  return {pastTenseVerbs, conditionalTenseVerbs, futureTenseVerbs }
}

function formatPerfectiveVerbData() {
  const verbObject = generatePerfectiveVerbData(Verbs_PerfectiveData);
  const formattedPastVerbs = verbObject.pastTenseVerbs.map((verb) => {
    return [verb.Unit, verb.Topic, verb.Verb, verb.Meaning, verb.Conjugation, verb.Ja, verb.Ty, verb["On/Ona"], verb.My, verb.Wy, verb["Oni/One"]]
  })
  const formattedFutureVerbs = verbObject.futureTenseVerbs.map((verb) => {
    return [verb.Unit, verb.Topic, verb.Verb, verb.Meaning, verb.Conjugation, verb.Ja, verb.Ty, verb["On/Ona"], verb.My, verb.Wy, verb["Oni/One"]]
    })
  const formattedConditionalVerbs = verbObject.conditionalTenseVerbs.map((verb) => {
    return [verb.Unit, verb.Topic, verb.Verb, verb.Meaning, verb.Conjugation, verb.Ja, verb.Ty, verb["On/Ona"], verb.My, verb.Wy, verb["Oni/One"]]
  })

  return {formattedPastVerbs, formattedFutureVerbs, formattedConditionalVerbs}
  
}

function formatPronounData(input) { 
  const formattedPronouns = input.map((pronoun) => {
    return [pronoun.Category, pronoun.Noun, pronoun.Gender, pronoun["Singular / Plural"], pronoun.Meaning, pronoun.Nom, pronoun.Acc, pronoun.Ins, pronoun.Gen, pronoun.Loc, pronoun.Dat]
  })
  return formattedPronouns;
}

function formatPrepositionData(input) {
  const formattedPrepositions = input.map((preposition) => {
    return [
      preposition.Case,
      preposition.Preposition,
      preposition.Meaning,
      preposition.Examples,
      preposition.Notes === undefined ? null : preposition.Notesc];
  })
  return formattedPrepositions;
}

function capitaliseFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function validateSentenceUnit(unit) {
  const acceptableUnits = [
  1.01, 1.02, 1.10, 1.11, 1.12, 1.13, 1.14, 1.15, 1.16,
  2.01, 2.02, 2.03, 2.04, 2.05, 2.06, 2.07, 2.08, 2.09,
  2.10, 2.11, 2.12, 2.13, 2.14, 2.15, 2.16, 2.17, 2.18,
  2.19, 2.20, 2.21, 2.22, 2.23, 2.24, 2.25, 2.26, 2.27,
  2.28, 2.29, 2.30, 2.31, 2.32, 2.33, 2.34, 2.35, 2.36,
  2.37, 2.38, 2.39, 3.01, 3.02, 3.03, 3.04, 3.05, 3.06,
  3.07, 3.08, 3.09, 3.10, 3.11
  ];
    
  if (!unit) { return true; }  // skip validation if unit is not provided
  return acceptableUnits.includes(Number(unit));
}

function validateImpVerbUnit(unit) {
  const acceptableUnits = [
    1.01, 1.15, 2.03, 2.06, 2.07, 2.15, 2.16, 2.18, 2.19, 2.20,
    2.24, 2.25, 2.27, 2.28, 2.32, 2.34, 2.35, 2.37, 3.01, 3.03,
    3.07, 3.09, 3.10
  ];
    
  if (!unit) { return true; }
  return acceptableUnits.includes(Number(unit));
}

function validatePerVerbUnit(unit) {
  const acceptableUnits = [
    2.23, 2.24, 2.27, 2.37, 3.01, 3.02, 3.03, 3.04, 3.05, 3.09
  ];
    
  if (!unit) { return true; }
  return acceptableUnits.includes(Number(unit));
}

module.exports = { formatSentenceData, generateImperfectiveVerbData, formatImperfectiveVerbData, generatePerfectiveVerbData, formatPerfectiveVerbData, formatPronounData, formatPrepositionData, capitaliseFirst, validateSentenceUnit, validateImpVerbUnit, validatePerVerbUnit }