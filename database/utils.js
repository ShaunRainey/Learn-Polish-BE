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

module.exports = { formatSentenceData, generateImperfectiveVerbData, formatImperfectiveVerbData, generatePerfectiveVerbData, formatPerfectiveVerbData }