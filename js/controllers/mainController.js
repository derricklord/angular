(function() {
    'use strict';

    angular
        .module('app')
        .controller('mainController', mainController);

    /* @ngInject */
    function mainController(){
        var vm = this;
        vm.title ="Main Controller";
        vm.message = 'Hello World';
        vm.blogs = [
            {
              title: 'Article One',
              body: 'Some Random Text'
            },
             {
              title: 'Article Two',
              body: 'Some Random Text'
            },
            {
              title: 'Article Three',
              body: 'Some Random Text'
            }          
        ];
        
        

        activate();

        ////////////////

        function activate() {
        }
    }
})();