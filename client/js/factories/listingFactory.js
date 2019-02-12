//confirm syntax
angular.module('listings', []).factory('Listings', function($http) {
    var methods = {
    getAll: function () {
      // return $http.get('http://localhost:8080/api/listings');
      return $http.get('/api/listings');
    },

    create: function (listing) {
      //return $http.post('http://localhost:8080/api/listings', listing);
      return $http.post('/api/listings', listing);
    },

    read: function (id) {
      //  return $http.get('http://localhost:8080/api/listings/' + id);
      return $http.get('/api/listings/' + id);
    },


    update: function (id, listing) {
      // return $http.put('http://localhost:8080/api/listings/' + id, listing);
        return $http.put('/api/listings/' + id, listing);
    },

    delete: function (id) {
      /**TODO return result of HTTP delete method -- ok**/
      // return $http.delete('http://localhost:8080/api/listings/' + id);
      return $http.delete('/api/listings/' + id);
    }
  };
    return methods;
});
