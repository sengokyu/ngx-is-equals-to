/**
 *
 */
'use strict';

describe('NgxIsEqualsTo directive', function() {
  var $rootScope;
  var $compile;
  var html = '<form name="myForm"><div>Password: <input type="password" name="password" ng-model="dummy1" />{{myForm.password.$viewValue}}</div><div>Confirm password: <input type="password" name="passwordConfirm" ng-model="dummy2" ngx-is-equals-to="myForm.password" />{{myForm.passwordConfirm.$viewValue}}</div><div style="color:crimson" ng-show="myForm.passwordConfirm.$error.ngxIsEqualsTo">Password does not match.</div></form>';

  beforeEach(module('ngxIsEqualsTo'));

  beforeEach(inject(function($injector) {
      $rootScope = $injector.get('$rootScope');
      $compile = $injector.get('$compile');
  }));

  it('says two fields does not match', function() {
    var compiled = $compile(html)($rootScope);
    
    expect($rootScope.myForm.passwordConfirm.$invalid).toBe(false);

    // Set the view value
    $rootScope.myForm.password.$viewValue = 'abc';
    $rootScope.myForm.passwordConfirm.$viewValue = 'def';
    $rootScope.myForm.$commitViewValue();

    expect($rootScope.myForm.passwordConfirm.$invalid).toBe(true);

    $rootScope.myForm.passwordConfirm.$viewValue = 'abc';
    $rootScope.myForm.$commitViewValue();

    expect($rootScope.myForm.passwordConfirm.$invalid).toBe(false);

  });
  
  it('says two fields are same', function() {
    var compiled = $compile(html)($rootScope);
    
    // Set the view value
    $rootScope.myForm.password.$viewValue = 'hoge';
    $rootScope.myForm.passwordConfirm.$viewValue = 'hoge';
    $rootScope.myForm.$commitViewValue();

    expect($rootScope.myForm.passwordConfirm.$invalid).toBe(false);

  });

  it('says invalid, when only first field is entered', function() {
    var compiled = $compile(html)($rootScope);
    
    // Set the view value
    $rootScope.myForm.password.$viewValue = 'hoge';
    $rootScope.myForm.$commitViewValue();

    expect($rootScope.myForm.passwordConfirm.$invalid).toBe(true);
  });

});