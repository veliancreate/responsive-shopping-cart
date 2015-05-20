cart.service('cartService', ['$http', function($http){
  var inCart = [];
  return {  
    products: function() {
      var promise = $http.get('/json').then(function (response) {
        return response.data;
      });
      return promise;
    },
    addProduct: function(product) {
      inCart.push(product);
    },
    removeProduct: function(product) {
      for(var i = 0; i < inCart.length; i++){
        if(inCart[i].name === product.name) {
          inCart.splice(i, 1);
          break;
        }
      }
    },
    currentCart: function() {
      return inCart;
    },
    numberInCart: function() {
      return inCart.length;
    },
    total: function() {
      var total = 0;
      for(var i = 0; i < inCart.length; i++){
        total += inCart[i].price;
      }
      return total;
    } 
  };  
}]);