angular.module('app').controller('authorCtrl', function ($http, serverFactory, $scope, cardFactory, listFactory ) {

    serverFactory.getPersons().then((result) => {
      let trueIndex;
      let loginMass = []; //for cheking exist's logins
      for ( let i = 0; i < result.data.length; i++)
      {
        loginMass.push(result.data[i].login);
      }

      this.LogIn = ( login, password) => {
        let flag = [];

        for (let i = 0; i < result.data.length; i++)
          {
            if (login === result.data[i].login && password === result.data[i].password)
              {
                flag.push(true);
                trueIndex = i; //index of flag's element that have true
              }
            else
            {
              flag.push(false);
            }
          }
          const cardsFromServer = result.data[trueIndex].cards;
          const listsFromServer = result.data[trueIndex].lists;

          listFactory.addListsFromServer(listsFromServer);
          cardFactory.addCardsFromServer(cardsFromServer);


          console.log(flag);
          if ( flag.some(elem => elem === true))
      			{
              alert('Authentication OK');
              document.getElementById("forAuth").style.display="block";
              document.getElementById('LogSig').style.display="none";
              document.getElementById('login').style.display="inline-flex";
              document.getElementById('SaveAndExit').style.display="inline-flex";
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

          const cardsFromServer = [];
          const listsFromServer = [];

          listFactory.addListsFromServer(listsFromServer);
          cardFactory.addCardsFromServer(cardsFromServer);
          //document.getElementById("forAuth").style.display="block";
          serverFactory.postPersons( login, password);
          location.reload(false);
          alert('RegistrationOK, please LogIN')

        }
      }

      this.SaveAndExit = () =>  {
        this.lists = listFactory.getLists();
        this.cards = cardFactory.getListofCards();

        const li = this.lists;
        const car = this.cards;
        const pass = result.data[trueIndex].password;
        const log = result.data[trueIndex].login;
        console.log(`lists: ${li} Cards: ${car}  Login:${result.data[trueIndex].login} Password:${result.data[trueIndex].password}`)

        serverFactory.postAndExit(li, car, pass, log);
        location.reload(false);
      }
    })

});
