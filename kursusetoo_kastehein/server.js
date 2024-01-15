const express = require('express');
const app = express();

const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
});

app.get('/about', (req, res) => {
	res.sendFile(__dirname + '/public/about.html');
});

app.get('/contact', (req, res) => {
	res.sendFile(__dirname + '/contact/index.html');
});

app.get('/profile', (req, res) => {
	res.sendFile(__dirname + '/profile/about.html');
});

app.listen(port, () => {
	console.log(`Server kuulab pordil ${port}. Külasta http://localhost:${port}`);
});