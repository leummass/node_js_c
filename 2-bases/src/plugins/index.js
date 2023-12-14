const {uuidv4} = require('../plugins/get-id');
const { getAge } = require('../plugins/get-age');
const { http } = require('../plugins/http-client.plugin')

module.exports = {
    uuidv4,
    getAge,
    http,
}