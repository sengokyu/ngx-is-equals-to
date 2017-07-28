# ngx-is-equals-to - AngularJS 1.x form validation directive


## Usage

~~~
<form name="myForm">
  <div>Password: <input type="password" name="password"
      ng-model="dummy1" /></div>
  <div>Confirm password: <input type="password" name="passwordConfirm"
      ng-model="dummy2"
      ngx-is-equals-to="myForm.password" /></div>
  <div style="color:crimson" ng-show="myForm.passwordConfirm.$error.ngxIsEqualsTo">Password does not match.</div>
</form>
~~~


## Description

This is a validation directive for AngularJS 1.x.

When the fields'value is not matched to another filed, this validator set invalid state.


