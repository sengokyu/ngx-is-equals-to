/** 
 * (C) 2014
 * 
 * 
 * 
 */
(function (angular) {
    'use strict';

    /**
     * AngularJS validator.
     * Validates the field has same value of another field.
     *
     */
    angular.module('ngxIsEqualsTo', []).directive('ngxIsEqualsTo', [
        '$parse',
        function ($parse) {

            var linkFn = function (scope, element, attrs, ctrl) {

                ctrl.$validators.ngxIsEqualsTo = function (modelValue, viewValue) {
                    if (ctrl.$isEmpty(modelValue)) {
                        return true;
                    }

                    var another = $parse(attrs.ngxIsEqualsTo)(scope);

                    return viewValue == another.$viewValue;
                };

                scope.$watch(attrs.ngxIsEqualsTo + '.$modelValue', function () {
                    ctrl.$validate();
                });
            };

            return {
                restrict: 'A',
                require: 'ngModel',
                link: linkFn
            };
        }
    ]);
})(window.angular);

