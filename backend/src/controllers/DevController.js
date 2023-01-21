const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

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
        }           
    
        return response.json(dev);
    }
};