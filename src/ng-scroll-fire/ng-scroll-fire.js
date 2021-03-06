angular.module('ngScrollFire').directive('ngScrollFire', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      var raw;
      raw = element[0];
      console.log('loading directive');
      element.bind('scroll', function() {
        console.log('in scroll');
        console.log(raw.scrollTop + raw.offsetHeight);
        console.log(raw.scrollHeight);
        if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
          console.log('I am at the bottom');
          scope.$apply(attrs.ngScrollFire);
        }
      });
    }
  };
});
