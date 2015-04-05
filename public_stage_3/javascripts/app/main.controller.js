(function () {

    angular
        .module('app')
        .controller('mainController', mainController);

    mainController.$inject = ['$state'];
    function mainController($state) {

        var vm = this;
        vm.navigateTo = function (state) {
            $state.go(state);
        }
    }

})();