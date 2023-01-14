
// Importing express module
const express = require('express');
const app = express();

app.use(express.static("./"));

app.get('/', (req, res) => {

    res.sendFile(__dirname + '/index.html');
});

const axios = require('axios');

async function getData() {
    let data = await fetch("https://api.blockchainfue.com/api/asset", { headers })
    let moreData = await data.json();
    return moreData

}

app.get('/hola', async (req, res) => {
    let data = await getData()
    res.send(
        data
    )

})

app.listen(3000, () => {
    console.log('Our express server is up on port 3000');
});

const fetch = require('node-fetch');

const headers = {
    "X-App-Id": "63c1bd89f8de51e98302070a",
    "X-App-Key": "61d54019fe71d8c1509379eb7ac36f34ce3536e7b77b4c3abfe7e23746cf4465",
    "Content-Type": "application/json",
    "Accept": "application/json",
}



function postData(username) {

    fetch('https://api.blockchainfue.com/api/asset', {
        method: 'POST',
        body: JSON.stringify(user),
        headers
    })
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.log(err))

}




