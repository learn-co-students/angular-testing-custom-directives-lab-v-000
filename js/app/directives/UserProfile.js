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
				'<div>Name: <span ng-transclude="name"></span></div>',
				'<div>Position: <span ng-transclude="position">No position</span></div>',
				'<div>Description: <span ng-transclude="description">No description</span></div>',
			'</div>'
		].join('')
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);