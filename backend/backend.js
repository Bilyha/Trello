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
    cards: [  {
        id: 1,
        description: 'Fix some bugs',
        list_id: 1 //list's id in listFactory.lists
      },

      {
        id: 2,
        description: 'Fix some2 bugs',
        list_id: 2
      },
      {
        id: 3,
        description: 'Fix some3 bugs',
        list_id: 3
      } ],
    lists:  [
      {
        id: 1,
        listName: 'Todo'
      },
      {
        id: 2,
        listName: 'Doing'
      },
      {
        id: 3,
        listName: 'Done'
      }
    ]
	},
	{
		login: 'babich',
		password: '4321',
    cards: [],
    lists: []
	}
];

app.get('/persons', function (require, res) {
	res.send(persons);
});

app.post ('/persons', function (req, res) {
  if (req.body.flag) {
    persons.push({
      login: req.body.login,
      password: req.body.password,
      cards: req.body.cards,
      lists: req.body.list

    })
  }
  else {
    persons.push({
      login: req.body.log,
      password: req.body.pass,
      cards: req.body.car,
      lists: req.body.li})
  }

	res.send(200);

});

const server = app.listen(3005, function() {
	console.log('server is working')
});
