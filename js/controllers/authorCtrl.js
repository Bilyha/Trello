angular.module('app').controller('authorCtrl', function ($http, serverFactory, $scope ) {
  // serverFactory.getPersons().then((result) => console.log(result.data))
let persns;
let loginMass = [];
    serverFactory.getPersons().then((result) => {
      for ( let i = 0; i < result.data.length; i++)
      {
        loginMass.push(result.data[i].login);
      }

      this.LogIn = ( login, password) => {
        let flag = [];

        for (let i = 0; i < result.data.length; i++)
          {
            if (login === result.data[i].login && password === result.data[i].password)
              flag.push(true);
            else
            {
              flag.push(false);
            }
          }
          console.log(flag);
          if ( flag.some(elem => elem === true))
      			{
              alert('Authentication OK');
              document.getElementById("forAuth").style.display="block";
              document.getElementById('LogSig').style.display="none";
              document.getElementById('login').style.display="inline-flex";
            }
          else
      			alert(' Wrong password or login \nIf you do not have an account \nPlease, Sign UP');
      };

      this.SignUp = function ( login, password) {
        console.log('post', login, password);
        if (loginMass.some(elem => elem === login)) {
          alert('This login already exist \n Please, enter another login')
          $scope.login = null;
          $scope.password = null;
        }
        else {
          document.getElementById("forAuth").style.display="block";
          serverFactory.postPersons( login, password);

        }
      }

    })

});
