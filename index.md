## CIT 281 p4

## Outcome:
     
This project we created a REST API that worked with a data code module.    
The REST API returns an object containing any errors as well as the specfied question or answer or both.   
Most of the code was written inside a module that was exported to the server as well as data stored in a library titled *data* exported to the webserver. 
   
**[p4 Repo](https://github.com/Myles-P-D/cit281-p4)**
## Code:
   
Here are links to all of the project code:     
**[Data](https://github.com/Myles-P-D/cit281-p4/blob/main/p4-data.js)**    
**[Module](https://github.com/Myles-P-D/cit281-p4/blob/main/p4-module.js)**    
**[Server](https://github.com/Myles-P-D/cit281-p4/blob/main/p4-server.js)**  
    
Here is an excerpt of the code from the exported module.    
```javascript
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
```
   
Here is an excerpt of the code for the REST API.    
```javascript
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
```

## Images:   
    
Question route image.   
![question route](https://github.com/Myles-P-D/cit281-p4/blob/main/questionRoute.png?raw=true)    
   
Question 2 route image.    
![question 2 route](https://github.com/Myles-P-D/cit281-p4/blob/main/question2.png?raw=true)    
   
Question and Answer 3 route image.    
![question answer 3 route](https://github.com/Myles-P-D/cit281-p4/blob/main/questionAnswer3.png?raw=true)    

