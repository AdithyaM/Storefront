app.controller("prodDetails", function ($scope, prodService) {
    $scope.Products = prodService.prdlist();
    $scope.ProductView = prodService.prdView();
    $scope.count = prodService.prdTotal().totalQty;
    document.getElementById('cartCount').textContent = 'MY CART (' + $scope.count + ')';
   $scope.addSingleqty = function(eve) {
     var domAccess = eve.currentTarget.parentNode.parentNode.parentNode;
     prodService.addSingle(false, eve, domAccess);
     //prodService.addSingle(eve)
   }
   $scope.removeSingleqty = function(eve) {
     var domAccess = eve.currentTarget.parentNode.parentNode.parentNode;
     prodService.removeSingle(false, eve, domAccess);
     //prodService.adjustQty(eve, -1)
   }
   $scope.proAddtoCart = function(eve) {
         var qtyValue = eve.currentTarget.parentNode.parentNode;
         $scope.quantity = qtyValue.getElementsByClassName("prd-deatils-qty")[0].value;
         var prdQty = $scope.quantity;
         if ($scope.Products.length > 0) {
            $scope.quantity = parseInt($scope.count) + parseInt($scope.quantity);
         } else {
            $scope.quantity = parseInt($scope.quantity);
         }
         $scope.count = $scope.quantity;
         document.getElementById('cartCount').textContent = 'MY CART (' + $scope.count + ')';
         var domAccess = eve.currentTarget.parentNode.parentNode.parentNode.parentNode;
         var title = domAccess.getElementsByClassName('prd-title')[0].getAttribute("data-title");
         var brand = domAccess.getElementsByClassName('prd-brand')[0].getAttribute("data-brand");
         var price = domAccess.getElementsByClassName('prd-price')[0].getAttribute("data-price");
         var image = domAccess.getElementsByClassName('prd-image')[0].getAttribute("src");
         prodService.save($scope.quantity, title, brand, price, image, prdQty);
    }

});
