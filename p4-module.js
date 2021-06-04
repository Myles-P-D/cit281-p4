const { data } = require ('./p4-data.js');


//returns an array of strings where each array element is a question
const getQuestions = () => data.map(items = (item) => item.question);

const getAnswers = () => data.map(items = (item) => item.answer);

const getQuestionsAnswers = () => cloneArray = [...data];

//next up is to create a function that routes an object containing questions and answers etc.
const getQuestion = (num) =>
{
    o = { question: ' ', number: num, error: ' ' };
    if (num == undefined)
    {
        o.error = 'Question number must be an integer';
        o.question = ' ';
        o.number = ' ';
    }
    else if (num == 0 )
    {
        o.error = 'Question number must be >= 1';
        o.question = ' ';
    }
    else if (num > data.length)
    {
        o.error = `Question number must be less than the number of questions (${data.length})`;
        o.question = ' ';
    }
    else if (num >= 0 && num <= data.length)
    {
        o.error = ' ';
        o.question = data[num - 1].question;
    }
    return o;
}
const getAnswer = (num) => 
{
  o = { answer: ' ', number: num, error: ' ' };
  if (num == undefined)
    {
        o.error = 'Answer number must be an integer';
        o.answer = ' ';
        o.number = ' ';
    }
  else if (num == 0 )
  {
      o.error = 'Answer number must be >= 1';
      o.answer = ' ';
  }
  else if (num > data.length)
  {
      o.error = `Answer number must be less than the number of answers (${data.length})`;
      o.answer = ' ';
  }
  else if (num >= 0 && num <= data.length)
  {
      o.error = ' ';
      o.answer = data[num - 1].answer;
  }
  return o;
};
const getQuestionAnswer = (num) => 
{
  o = { question: ' ', answer: ' ', number: num, error: ' ' };
  if (num == undefined)
    {
        o.error = 'Question number must be an integer';
        o.question = ' ';
        o.answer = ' ';
        o.number = ' ';
    }
    else if (num == 0 )
    {
        o.error = 'Question number must be >= 1';
        o.question = ' ';
        o.answer = ' ';
    }
    else if (num > data.length)
    {
        o.error = `Question number must be less than the number of questions (${data.length})`;
        o.question = ' ';
        o.answer = ' ';
    }
    else if (num >= 0 && num <= data.length)
    {
        o.error = ' ';
        o.question = data[num - 1].question;
        o.answer = data[num - 1].answer;
    }
    return o;
  };

/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
  }
  //true
  //false
  // Set a constant to true to test the appropriate function
  const testGetQs = false;
  const testGetAs = false;
  const testGetQsAs = false;
  const testGetQ = false;
  const testGetA = false;
  const testGetQA = false;
  const testAdd = false;      // Extra credit
  const testUpdate = false;   // Extra credit
  const testDelete = false;   // Extra credit

  // getQuestions()
if (testGetQs) {
    testing("getQuestions", { d: "()", f: getQuestions() });
  }
  
  // getAnswers()
  if (testGetAs) {
    testing("getAnswers", { d: "()", f: getAnswers() });
  }
  
  // getQuestionsAnswers()
  if (testGetQsAs) {
    testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
  }
  
  // getQuestion()
  if (testGetQ) {
    testing(
      "getQuestion",
      { d: "()", f: getQuestion() },      // Extra credit: +1
      { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
      { d: "(1)", f: getQuestion(1) },
      { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
    );
  }
  
  // getAnswer()
  if (testGetA) {
    testing(
      "getAnswer",
      { d: "()", f: getAnswer() },        // Extra credit: +1
      { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
      { d: "(1)", f: getAnswer(1) },
      { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
    );
  }
  
  // getQuestionAnswer()
  if (testGetQA) {
    testing(
      "getQuestionAnswer",
      { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
      { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
      { d: "(1)", f: getQuestionAnswer(1) },
      { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
    );
  }







  module.exports =
  {
    getQuestion,
    getAnswer,
    getQuestionAnswer,
    getQuestions,
    getAnswers,
    getQuestionsAnswers
  };
  