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

module.exports = {formatSentenceData}