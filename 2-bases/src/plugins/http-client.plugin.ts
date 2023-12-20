//const axios = require('axios');

import axios from 'axios';

export const httpClientPlugin = {
    get: async(url:string) =>{
        const {data} = await axios.get(url);
        console.log(data);
        return data;
        
    },
    post: async(url:string, body: any) => {
        throw new Error('No implementado aún')
    },
    put: async(url:string, body: any) => {
        throw new Error('No implementado aún')
    },
    delete: async(url:string) => {
        throw new Error('No implementado aún')
    },

};

