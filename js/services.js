var app = angular.module('bigComApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'homeId',
    controller  : 'prodCategory'
  })

  .when('/productDetails', {
    templateUrl : 'productDetailsId',
    controller  : 'prodDetails'
  })

  .when('/cart', {
    templateUrl : 'cartId',
    controller  : 'cartCtrl'
  })

  .otherwise({redirectTo: '/'});
});

app.service('prodService', function () {

    var productList = [];
    var productDetails =[];
    var productCount= [];
    productCount[0] = {totalQty:0,subTotal:0}

    this.save = function(count, title, brand, price, image, qty) {
            productCount[0].totalQty = count;
            var flag = true;
            for(var i = 0; i < productList.length; i++) {
                if (productList[i].title === title) {
                   var prdqty = parseInt(productList[i].qty) + parseInt(qty);
                   var total = prdqty * parseFloat(price);
                   if (qty > 0) {
                      productCount[0].subTotal += parseInt(qty) * parseFloat(productList[i].price);
                   }else {
                      productCount[0].subTotal -= parseFloat(productList[i].price);
                   }
                   productList[i] = {title:title, brand:brand, price:price, image:image, qty:prdqty, total:total};
                   flag = false;
                }
             }
            if (flag) {
              if (qty > 1){
                productCount[0].subTotal += (parseInt(qty) * parseFloat(price));
                var totalPrice = (parseInt(qty) * parseFloat(price));
                productList.push({title:title, brand:brand, price:price, image:image, qty:qty, total:totalPrice});
              } else {
                productCount[0].subTotal += parseFloat(price);
                productList.push({title:title, brand:brand, price:price, image:image, qty:qty, total:price});
              }
            }

    }
    this.view = function (title, brand, price, image, desc){
      productDetails[0] = {title:title, brand:brand, price:price, image:image, desc:desc};
    }
    this.remove = function (domAccess){
      var quantity  = domAccess.getElementsByClassName("prd-deatils-qty")[0].value;
      var title  = domAccess.getElementsByClassName("prd-title")[0].getAttribute("data-title");
      var total = domAccess.getElementsByClassName('prd-price')[0].getAttribute("data-price");
      for(var i = 0; i < productList.length; i++) {
          if (productList[i].title === title) {
            productList.splice(i,1);
            productCount[0].subTotal -= (parseInt(quantity) * parseFloat(total));
            productCount[0].totalQty -= parseInt(quantity);
          }
      }
    }
    this.addSingle = function(count, eve, domAccess) {
      this.adjustQty(count, eve, domAccess, 1)
    }
    this.removeSingle = function(count, eve, domAccess) {
      this.adjustQty(count, eve, domAccess, -1)
    }
    this.adjustQty = function (count, eve, domAccess, incr) {
      var quantity  = domAccess.getElementsByClassName("prd-deatils-qty")[0].value;
      var increment = 1;
      var qty = quantity;
      if(incr > 0 || qty > increment) {
          qty = parseInt(qty) + (1*incr);
          quantity = qty;
          domAccess.getElementsByClassName("prd-deatils-qty")[0].value = qty;
          if(count) {
                var title = domAccess.getElementsByClassName('prd-title')[0].getAttribute("data-title");
                var brand = domAccess.getElementsByClassName('prd-brand')[0].getAttribute("data-brand");
                var price = domAccess.getElementsByClassName('prd-price')[0].getAttribute("data-price");
                var image = domAccess.getElementsByClassName('prd-image')[0].getAttribute("src");
                if (quantity > 1 || qty > 0) {
                  this.save(count, title, brand , price, image, incr);
                }
           }
       }
     }
    this.prdlist = function (){
      return productList;
    }
    this.prdView = function (){
      return productDetails;
    }
    this.prdTotal = function (){
      return productCount[0];
    }
});
