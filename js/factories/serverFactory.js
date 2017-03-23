angular.module('app').factory('serverFactory', function ($http) {
  const service = {};


    service.getPersons = () =>
    {
      const persons = $http.get('http://localhost:3005/persons')
    .then(function(result) {
      return result;
    });
    return persons;
}
    service.postPersons = ( login, password) => {
      console.log(login, password);
      $http.post('http://localhost:3005/persons', {login, password})
        .then(function (result) {
          console.log("ok");
        })
        
    }
return service;

});
