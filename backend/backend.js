const express = require('express'); //framework
const cors = require('cors'); //cross-domain requests
const bodyParser = require('body-parser'); //for getting body
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(cors());

const persons = [
	{
		login: 'ilya',
		password: '1234',
	},
	{
		login: 'babich',
		password: '4321',
	}
];

app.get('/persons', function (require, res) {
	res.send(persons);
});

app.post ('/persons', function (req, res) {
	persons.push({
		login: req.body.login,
		password: req.body.password

	});
	res.send(200);

});

const server = app.listen(3005, function() {
	console.log('server is working')
});
