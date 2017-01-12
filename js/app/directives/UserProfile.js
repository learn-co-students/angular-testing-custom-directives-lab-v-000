function UserProfile() {
	return {
		transclude: {
			name: 'h4',
			position: '?h6',
			description: '?p'
		},
		template: [
			'<div class="user">',
				'<h2>User Profile</h2>',
				'<div class="name">Name: </div>',
				'<span ng-transclude="name"></span>',
				'<div class="position">Position: </div>',
				'<span ng-transclude="position">No position</span>',
				'<div class="description">Description: </div>',
				'<span ng-transclude="description">No description</span>',
			'</div>'
		].join('')
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);
