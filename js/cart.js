app.controller("cartCtrl", function ($scope, prodService) {
    $scope.Products = prodService.prdlist();
    $scope.count = prodService.prdTotal().totalQty;
    document.getElementById('cartCount').textContent = 'MY CART (' + $scope.count + ')';
    $scope.subTotal = prodService.prdTotal().subTotal;
    $scope.addSingleqty = function(eve) {
      var domAccess = eve.currentTarget.parentNode.parentNode.parentNode;
      $scope.count++;
      document.getElementById('cartCount').textContent = 'MY CART (' + $scope.count + ')';
      prodService.addSingle($scope.count, eve, domAccess);
      $scope.subTotal = prodService.prdTotal().subTotal;

    }
    $scope.removeSingleqty = function(eve) {
      var domAccess = eve.currentTarget.parentNode.parentNode.parentNode;
      var prdQty = domAccess.getElementsByClassName("prd-deatils-qty")[0].value;
      if (prdQty > 1) {
         $scope.count--;
         document.getElementById('cartCount').textContent = 'MY CART (' + $scope.count + ')';
      }
      console.log('product quantity ' + prdQty)

      prodService.removeSingle($scope.count, eve, domAccess);
      if(prdQty > 0) {
          $scope.subTotal = prodService.prdTotal().subTotal;
      }
    }
    $scope.removeCartItem = function (eve) {
      var domAccess = eve.currentTarget.parentNode;
      prodService.remove(domAccess);
      $scope.subTotal = prodService.prdTotal().subTotal;
      $scope.count = prodService.prdTotal().totalQty;
      document.getElementById('cartCount').textContent = 'MY CART (' + $scope.count + ')';
    }
});
