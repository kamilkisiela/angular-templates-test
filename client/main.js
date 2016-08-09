import angular from 'angular';
import angularMeteor from 'angular-meteor';

import '../imports/one.html';
import '../imports/nested/two.html';

angular.module('app', [
  angularMeteor
])
  .component('app', {
    template: `
      <!-- imports/one.html -->
      <h2>imports/one.html</h2>
      <div ng-include="'imports/one.html'"></div>
      <h2>/imports/one.html</h2>
      <div ng-include="'/imports/one.html'"></div>

      <!-- imports/nested/two.html -->
      <h2>imports/nested/two.html</h2>
      <div ng-include="'imports/nested/two.html'"></div>
      <h2>/imports/nested/two.html</h2>
      <div ng-include="'/imports/nested/two.html'"></div>

      <!-- imports/nested/two.html -->
      <h2>client/one.html</h2>
      <div ng-include="'client/one.html'"></div>
      <h2>/client/one.html</h2>
      <div ng-include="'/client/one.html'"></div>

      <!-- imports/nested/two.html -->
      <h2>client/nested/two.html</h2>
      <div ng-include="'client/nested/two.html'"></div>
      <h2>/client/nested/two.html</h2>
      <div ng-include="'/client/nested/two.html'"></div>

      <!-- imports/nested/two.html -->
      <h2>packages/mys:foo/bar.html</h2>
      <div ng-include="'packages/mys:foo/bar.html'"></div>

      <h2>/packages/mys:foo/bar.html</h2>
      <div ng-include="'/packages/mys:foo/bar.html'"></div>
    `
  });

angular.element(document).ready(() => {
  angular.bootstrap(document.body, ['app']);
});
