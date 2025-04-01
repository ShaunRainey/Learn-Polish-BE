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
} = require("../database/data/index");
const { formatSentenceData } = require("../database/utils");

describe("formatSentenceData", () => {
    test("returns an array when given input data", () => {
        const input1 = SentencesData;
        const output1 = formatSentenceData(input1)
        expect(Array.isArray(output1)).toBe(true)
    })
    test("output should not contain null values",() => {
      const input = [
        {
          Unit: 1.01,
          Topic: "Basics",
          Polish: "On jest chłopcem",
          English: "He is a boy",
        },
        {
          Unit: 1.01,
          Topic: "Basics",
          Polish: "Kobieta je chleb",
          English: "The woman eats bread",
        },
      ];
      const output = formatSentenceData(input);

      output.forEach((row) => {
        expect(row.length).toBe(4);
        row.forEach((value) => {
          expect(value).not.toBeNull();
          expect(value).not.toBeUndefined();
        });
      });
      const badInput = [
        { Topic: "Basics", Polish: "On jest chłopcem", English: "He is a boy" },
        { Unit: 1.01, Topic: "Basics", Polish: "Kobieta je chleb" },
      ];

      expect(() => {
        formatSentenceData(badInput).toThrowError("Invalid data: all fields must be present");
      });

      //When you're testing for errors, Jest needs to execute the function to see if it throws the expected error. If you call formatSentenceData(badInput) directly inside the expect() function, Jest won’t have a chance to catch the error and check if it was thrown. This is because the error will be thrown immediately during the execution of the function, and expect() would not be able to track it properly.
    })
    test("output has the expected values", () => {
        const input = [
            { Unit: 1.01, Topic: 'Basics', Polish: 'On jest chłopcem', English: 'He is a boy' },
            { Unit: 1.01, Topic: 'Basics', Polish: 'Kobieta je chleb', English: 'The woman eats bread' }
        ]
        const output = formatSentenceData(input) 
        expect(output).toEqual([
          [1.01, "Basics", "On jest chłopcem", "He is a boy"],
          [1.01, "Basics", "Kobieta je chleb", "The woman eats bread"]
        ]);
    })
})