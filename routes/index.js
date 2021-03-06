// Load Module Dependencies
var express = require('express');


var userRouter       = require('./user');
var jobcategoryRouter       = require('./jobcategory');
var customerRouter   = require('./customer');
var vacancyRouter       = require('./vacancy');
//var playerRouter     = require('./player');
var profileRouter    = require('./profile');
var staffRouter      = require('./staff');

// Export Router Initializater
module.exports = function initRouter(app) {

  // Users Endpoint
  app.use('/users', userRouter);
 
  // Jobcategory Endpoint
   app.use('/jobcategories', jobcategoryRouter);
    
  // Customers Endpoint
   app.use('/customers', customerRouter);

  // Vacancies Endpoint
   app.use('/vacancies', vacancyRouter);

  //Profile  Endpoint
   app.use('/profiles', profileRouter);

  // Staff Endpoint
   app.use('/staffs', staffRouter);
};
