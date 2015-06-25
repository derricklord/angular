(function () {
    'use strict';

    angular
        .module('app')
        .directive('blogs', blogs);

    /* @ngInject */
    function  blogs() {
        var directive = {
            bindToController: true,
            controller: blogController,
            controllerAs: 'blog',
            templateUrl: '/js/views/blogs.html',
            link: link,
            restrict: 'EA',
            scope: {
              data: '='
            }
        };
        return directive;

        function link(scope, element, attrs, controller) {
            
        }
    }

    blogController.$inject = [];

    /* @ngInject */
    function blogController() {
        var vm = this;
        vm.header = 'All Articles';
    }
})();