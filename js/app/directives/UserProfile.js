function UserProfile() {
  return {
    transclude: {
      name: 'h4',
      position: '?h6',
      biography: '?p'
    },
    template: [
      '<div class="user">',
      '<h2>User Profile</h2>',
      '<div>Name: <span ng-transclude="name"></span></div>',
      '<div>Position: <span ng-transclude="position">No position</span></div>',
      '<div>Biography: <span ng-transclude="biography">No biography</span></div>',
      '</div>'
    ].join('')
  }
}

angular
.module('app')
.directive('userProfile', UserProfile);
