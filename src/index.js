const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb+srv://semana:semana@cluster0-afeeq.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser : true,
    useUnifiedTopology:true,
});

app.use(express.json());

app.get('/', (request, response) => {
    return response.json({'message': "hello world"});
});

//query Params:  request.query (Filtros, ordenação, paginação).
// route params: request.params (identificar recurso para alteração ou deleção)
//body :  request.body (criação ou alteração de um registro)
app.get('/users', (request, response) => {
    console.log(request.query);
    return response.json({'message': "hello world"});
});

app.delete('/users/:id', (request, response) => {
    console.log(request.params);
    return response.json({'message': "hello world"});
});

app.post('/users/', (request, response) => {
    console.log(request.body);
    return response.json({'message': "hello world"});
});
app.listen(3333);