const axios = require('axios');

const host = '0.0.0.0';
const port = ':8080/api';

function triggerApi(url) {
    axios.get(url, {headers: {'Content-Type': 'application/json'}}).then((response) => {
        console.log(response.data);
        return response.data;
    }).catch(((e) => {
        console.log(e);
    }));
}

export function getStuff() {
    let url = host + port + '/stuff';
    console.log(url);
    return triggerApi();
}