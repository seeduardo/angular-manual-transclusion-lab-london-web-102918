function UserProfile() {
	return {
		transclude: true,
		template: [
			'<div>',
				'<h3>User Profile</h3>',
				'<span></span>',
			'</div>'
		].join(''),
		link: (s, e, a, c, t) => {
			e.find('span').after(t())
		}
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);
