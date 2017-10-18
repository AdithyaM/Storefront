# Storefront SPA
Storefront created by consuming JSON data with Angular JS

## Technologies: JavaScript, AngularJS , Angular Route

## Steps to launch application
* Checkout the repository and moved to the storefront directory.
* Install node  if not installed and install express using command `$ npm install express`
* run command `node server.js`  and products json are hosted in `http://localhost:3000/products` make sure it is running to perform storefront application test.
* launch index.html to see products and hover on them to add cart or view details
* click on My Cart to see products addedd to cart.

## Javascript Framework used : Had two choice BackboneJS and AngularJS, Not bias but keeping in mind which works well, I have used Angular JS 1.6.6 because
* It is a Javascriprt MVC frameworks, helps for faster app development of Single page Application
* It provides both Templating and framework as compared to other MVVM like Backbone which provide set of tools to create our own MVC but for template need to depend on underscore js or Handlebars js etc.
* It provides Two way data binding compared to other frameworks where Listners or pubSub has to use.
* In built directives helps for faster coding , however Angular2 has more libraries.
* Helps in  modular development.
* Built in services helps to get data from server like $http etc.

BackboneJs also has many advantages like creating your own MVC and doesnot glue to HTML . It doesn't depend on stuffing application logic into your HTML. There's no embedded JavaScript, template logic, or binding hookup code in data- or ng- attributes, and no need to invent your own HTML tags. Scales well for larger application.

## Initially I thought of completing the application by both backbonejs and angularjs and provide differences of it.
## Due to Rain Floods in Bangalore which affected the daily life , I could not complete below topics on time.
* MyCart pop up window.
* Automated Test cases.

## However I have completed other functinalities using framework and vanila JS and tried to make it responsive app with minimal CSS, less code , having services with common methods that can share on many controllers. 


