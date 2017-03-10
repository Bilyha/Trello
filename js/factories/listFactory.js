angular.module('app').factory('listFactory', function () {
  const service = {};

  const lists = [
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
  ];

  service.getLists = function () {
    return lists;
  };

  service.addList = function (listName) {
    if (listName) {
    
    lists.push({
      id: _.uniqueId('list_'),   //lodash function for adding uniq. id for list
      listName: listName
    });
  }
  else alert ('Please, enter name of list');
  };



  return service;
});