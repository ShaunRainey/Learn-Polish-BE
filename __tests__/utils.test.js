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
const { formatSentenceData, generateImperfectiveVerbData, formatImperfectiveVerbData, generatePerfectiveVerbData, formatPerfectiveVerbData, formatPronounData } = require("../database/utils");

/* The tests here will be kept fairly minimal as I'm the only user for this section. They exist mostly to highlight if I accidentally mess up
the code functionality at some point, leading to the tests failing.
*/

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

describe("test suite for verb functions", () => {
  test("generateImperfectiveVerbData, does it produce the correct data", () => {
    const input = Verbs_ImperfectiveData;
    const output = generateImperfectiveVerbData(Verbs_ImperfectiveData);
    expect(Object.keys(output)).toEqual(['presentTenseVerbs', 'pastTenseVerbs', 'conditionalTenseVerbs'])
    for (let key in output) {
      output[key].forEach((verb) => {
        expect(verb).toEqual({
          Unit: expect.any(Number),
          Topic: expect.any(String),
          Verb: expect.any(String),
          Meaning: expect.any(String),
          Conjugation: expect.any(String),
          Ja: expect.any(String),
          Ty: expect.any(String),
          "On/Ona": expect.any(String),
          My: expect.any(String),
          Wy: expect.any(String),
          "Oni/One": expect.any(String),
        })
      })
    }
  })
  test("generatePerfectiveVerbData, does it produce the correct data", () => {
    const input = Verbs_PerfectiveData;
    const output = generatePerfectiveVerbData(Verbs_PerfectiveData);
    expect(Object.keys(output)).toEqual(['pastTenseVerbs', 'conditionalTenseVerbs', 'futureTenseVerbs'])
    for (let key in output) {
      output[key].forEach((verb) => {
        expect(verb).toEqual({
          Unit: expect.any(Number),
          Topic: expect.any(String),
          Verb: expect.any(String),
          Meaning: expect.any(String),
          Conjugation: expect.any(String),
          Ja: expect.any(String),
          Ty: expect.any(String),
          "On/Ona": expect.any(String),
          My: expect.any(String),
          Wy: expect.any(String),
          "Oni/One": expect.any(String),
        })
      })
    }
  })
  test("formatImperfectiveVerbData, does it produce the correct data", () => {
    const output = formatImperfectiveVerbData();
    expect(Object.keys(output)).toEqual(['formattedPastVerbs', 'formattedPresentVerbs', 'formattedConditionalVerbs'])
    for (let key in output) {
      output[key].forEach((entry) => {
        expect(typeof (entry[0])).toBe("number"),
          expect(typeof (entry[1])).toBe("string"),
          expect(typeof (entry[2])).toBe("string"),
          expect(typeof (entry[3])).toBe("string"),
          expect(typeof (entry[4])).toBe("string"),
          expect(typeof (entry[5])).toBe("string"),
          expect(typeof (entry[6])).toBe("string"),
          expect(typeof (entry[7])).toBe("string"),
          expect(typeof (entry[8])).toBe("string"),
          expect(typeof (entry[9])).toBe("string"),
          expect(typeof (entry[10])).toBe("string")
      })
    }
  })
  test("formatPerfectiveVerbData, does it produce the correct output", () => {
    const output = formatPerfectiveVerbData();
    expect(Object.keys(output)).toEqual(['formattedPastVerbs', 'formattedFutureVerbs', 'formattedConditionalVerbs'])
    for (let key in output) {
      output[key].forEach((entry) => {
        expect(typeof (entry[0])).toBe("number"),
          expect(typeof (entry[1])).toBe("string"),
          expect(typeof (entry[2])).toBe("string"),
          expect(typeof (entry[3])).toBe("string"),
          expect(typeof (entry[4])).toBe("string"),
          expect(typeof (entry[5])).toBe("string"),
          expect(typeof (entry[6])).toBe("string"),
          expect(typeof (entry[7])).toBe("string"),
          expect(typeof (entry[8])).toBe("string"),
          expect(typeof (entry[9])).toBe("string"),
          expect(typeof (entry[10])).toBe("string")
      })
    }
  })
  test("", () => {
    
  })
})

describe("test suite for pronouns", () => {
  test("format pronoun data", () => {
    const input = PronounsData;
    const output = formatPronounData(input);
    expect(Array.isArray(output)).toBe(true)
    output.forEach((row) => {
      expect(row.length).toBe(11);
      expect(typeof (row[0])).toBe("string");
      expect(typeof (row[1])).toBe("string");
      expect(typeof (row[2])).toBe("string");
      expect(typeof (row[3])).toBe("string");
      expect(["Singular", "Plural", "N/a"]).toContain(row[3])
      expect(typeof (row[4])).toBe("string");
      expect(typeof (row[5])).toBe("string");
      expect(typeof (row[6])).toBe("string");
      expect(typeof (row[7])).toBe("string");
      expect(typeof (row[8])).toBe("string");
      expect(typeof (row[9])).toBe("string");
      expect(typeof (row[10])).toBe("string");
    })
  })
})
