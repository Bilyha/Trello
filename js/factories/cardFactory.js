angular.module('app').factory('cardFactory', function () {
  const service = {};

  const cards = [
    {
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
    }
  ];

  service.getCards = function (list) {
    return _.filter(cards, {list_id: list.id}); //lodash function, returning ab array of predicate returns truthy for list_id = list.id
  }
  return service;
})
