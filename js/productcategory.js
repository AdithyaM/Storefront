app.controller("prodCategory", function ($scope, $http, prodService) {
    $http.get("http://localhost:3000/products").then(function onSuccess(response) {
    // Handle success
        $scope.productsData = response.data;
    }).catch(function onError(response) {
     // Handle error
        console.log('Please install node and run server.js file from this directory');
  });
    $scope.count = prodService.prdTotal().totalQty;
    console.log($scope.count)
    document.getElementById('cartCount').textContent = 'MY CART (' + $scope.count + ')';
    $scope.addToCart = function(eve) {
      $scope.count++;
      document.getElementById('cartCount').textContent = 'MY CART (' + $scope.count + ')';
      var domAccess = eve.currentTarget.parentNode.parentNode;
      var title = domAccess.getElementsByTagName('h5')[0].getAttribute("data-title");
      var brand = domAccess.getElementsByClassName('prd-brand')[0].getAttribute("data-brand");
      var price = domAccess.getElementsByClassName('prd-price')[0].getAttribute("data-price");
      var image = domAccess.getElementsByClassName('prd-image')[0].getAttribute("src");
      prodService.save($scope.count, title, brand , price, image, 1);
    }
    $scope.viewPrdDetails = function(eve){
      var domAccess = eve.currentTarget.parentNode.parentNode;
      var title = domAccess.getElementsByTagName('h5')[0].getAttribute("data-title");
      var desc = domAccess.getElementsByTagName('h5')[0].getAttribute("data-desc");
      var brand = domAccess.getElementsByClassName('prd-brand')[0].getAttribute("data-brand");
      var price = domAccess.getElementsByClassName('prd-price')[0].getAttribute("data-price");
      var image = domAccess.getElementsByClassName('prd-image')[0].getAttribute("src");
      prodService.view(title, brand , price, image, desc);
    }
});
