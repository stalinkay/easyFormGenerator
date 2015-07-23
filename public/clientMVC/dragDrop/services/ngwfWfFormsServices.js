///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  form API : suppose you have your RESTful backend 
//
//  module = "service"  for view "wfEdit"
//  ------------------------------------------------------
//      Syntax (convention) :
//          "ngwfApp" = application
//          "ngwfApp.services.serviceNAME" = container services module
//
//  This module is a service -> it must be injected in services container
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
angular
	.module('ngwfApp.services.ngwfWfFormsServices', ['ngResource'])
	.factory('wfFormsByIdServices', ['$resource', function($resource){
    return $resource('/api/wfedit/:id', {id: '@id'}, {

    });
  }]);

