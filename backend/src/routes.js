const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');


const routes = Router();

// routes.get('/users', (request, response) => {
//     console.log(request.query);
//     return response.json({ message: 'Ola Mundo' });
// })

// routes.delete('/users/:id', async (request, response)=>{
//     console.log(request.params);
//     return response.json({message: 'ola mozart'});
// })

routes.post('/devs', DevController.store);

routes.get('/devs', DevController.index);

routes.get('/search', SearchController.index);

module.exports = routes;