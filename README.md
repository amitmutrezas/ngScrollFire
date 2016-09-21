# ngScrollFire - Do more when scroll reaches bottom
======

An AngularJS simple directive that binds scroll to an element and fires a callback when the bottom of the element is reached.

## Dependencies
* angular.js (of course!), any version starting with 1.2
* angular-mocks.js, any version starting with 1.2


## How to get it ?

#### Manual Download
Download the from [here](https://github.com/amitmutrezas/ngScrollFire/releases)

#### Bower
```
bower install ngScrollFire
```

## Usage
1. Add ng-csv.min.js to your main file (index.html).

2. Set `ngScrollFire` as a dependency in your module
  ```javascript
  var myapp = angular.module('myapp', ['ngScrollFire'])
  ```

3. Add ng-csv directive to the wanted element, example:
  ```html
  <div class="card" ng-scroll-fire="showMore()">New Card</divn>
  ```


