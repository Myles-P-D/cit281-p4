const http = require('http');
const fs = require('fs'); 
const 
{
    getQuestion,
    getAnswer,
    getQuestionAnswer,
    getQuestions,
    getAnswers,
    getQuestionsAnswers
} = require('./p4-module.js');

const fastify = require("fastify")();

fastify.get("/cit/question", (request, response) => 
{
    let o = { "error": ' ',  "statusCode": ' ', "questions": ' '};
    o.error = ' ';
    o.statusCode = '200'
    o.questions = getQuestions();
    response.code(200)
    response.header("Constent-Type", "application/json; charset=utf-8")
    response.send(o);
});
fastify.get("/cit/answer", (request, response) => 
{
    let o = { "error": ' ',  "statusCode": ' ', "answers": ' '};
    o.error = ' ';
    o.statusCode = '200'
    o.answers = getAnswers();
    response.code(200)
    response.header("Constent-Type", "application/json; charset=utf-8")
    response.send(o);
});
fastify.get("/cit/questionanswer", (request, response) => 
{
    let o = { "error": ' ',  "statusCode": ' ', "questions_answers": ' '};
    o.error = ' ';
    o.statusCode = '200'
    o.questions_answers = getQuestionsAnswers();
    response.code(200)
    response.header("Constent-Type", "application/json; charset=utf-8")
    response.send(o);
});


fastify.get("/cit/question/:number", (request, response) => 
{
    let numberInput = request.params.number; 
    let o = { "error": ' ',  "statusCode": ' ', "question": ' ', "number": ' '};
    o.error = getQuestion(numberInput).error;
    o.statusCode = '200';
    o.question = getQuestion(numberInput).question;
    o.number = getQuestion(numberInput).number;
    response.code(200)
    response.header("Constent-Type", "application/json; charset=utf-8")
    response.send(o);
});
fastify.get("/cit/answer/:number", (request, response) => 
{
    let numberInput = request.params.number; 
    let o = { "error": ' ',  "statusCode": ' ', "answer": ' ', "number": ' '};
    o.error = getAnswer(numberInput).error;
    o.statusCode = '200'
    o.answer = getAnswer(numberInput).answer;
    o.number = getAnswer(numberInput).number;
    response.code(200)
    response.header("Constent-Type", "application/json; charset=utf-8")
    response.send(o);
});
fastify.get("/cit/questionanswer/:number", (request, response) => 
{
    let numberInput = request.params.number; 
    let o = { "error": ' ',  "statusCode": ' ', "question": ' ', "answer": ' ', "number": ' '};
    o.error = getQuestionAnswer(numberInput).error;
    o.statusCode = '200'
    o.question = getQuestionAnswer(numberInput).question;
    o.answer = getQuestionAnswer(numberInput).answer;
    o.number = getQuestionAnswer(numberInput).number;
    response.code(200)
    response.header("Constent-Type", "application/json; charset=utf-8")
    response.send(o); 
});

fastify.get( "*", (request, response) => 
{
    let o = { "error": ' ',  "statusCode": ' '};
    o.error = "route not found";
    o.statusCode = '404'
    response.code(404)
    response.header("Constent-Type", "application/json; charset=utf-8")
    response.send(o);
});

const listenIP = "localhost";
const listenPort = 8080;

fastify.listen(listenPort, listenIP, (err,address) => 
{
    if (err) 
    {
        console.log(err);
        process.exit(1);
    }
    console.log(`server listening on ${address}`);
    console.log(listenIP);
    console.log(listenPort);
});