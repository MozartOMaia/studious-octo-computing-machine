const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
const { findConnections, sendMessage } = require('../websocket');

//TODO: metodos update e delete

module.exports = {
    async index(request, response) {
        const devs = await Dev.find();

        return response.json(devs);
    },

    async store(request, response) {
        const { username, techs, latitude, longitude  } = request.body;

        let dev = await Dev.findOne({ username });

        if (!dev){
            const apiResponse = await axios.get(`https://api.github.com/users/${username}`);
    
            const { name = login, avatar_url, bio } = apiResponse.data;
            
            const techArray =  parseStringAsArray(techs);
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };
        
            dev = await Dev.create({
                name,
                username,
                bio,
                avatar: avatar_url,
                techs: techArray,
                location,
            });
            
            //Filtrar conexões que estão há 10km de distancia
            //e que o dev tenha pelo menos uma das tecnologias filtradas
            const sendSocketMessageTo = findConnections(
                {latitude, longitude},
                techArray,
            )

            sendMessage(sendSocketMessageTo, 'new-dev', dev);
        }           
    
        return response.json(dev);
    }
};