angular.module('app').factory('serverFactory', function ($http) {
  const service = {};
  let flag = new Boolean();

    service.getPersons = () =>
    {
      const persons = $http.get('http://localhost:3005/persons')
    .then(function(result) {
      console.log(result);
      return result;
    });
    return persons;
  }
    service.postPersons = ( login, password) => {
      const cards = [];
      const list = [];
      flag = true;
      console.log(login, password);
      $http.post('http://localhost:3005/persons', {login, password, cards, list, flag})
        .then(function (result) {
          console.log("ok");
        })
    }

    service.postAndExit = (li, car, pass, log) => {
      flag = false;
      $http.post('http://localhost:3005/persons', {li, car, pass, log, flag})
        .then(function (result) {
          console.log('ok');
        })
    }

return service;

});
