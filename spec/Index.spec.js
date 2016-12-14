let path = require('path');

describe('Test Directives', function() {
	browser.get('http://localhost:8080');

	it('should correctly display user profiles', function() {
		let directives = element.all(by.css('user-profile'));

		expect(directives.get(0).getText()).toContain('Name');
		expect(directives.get(0).getText()).toContain('Position');
		expect(directives.get(0).getText()).toContain('Description');
	})
});
