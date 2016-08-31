describe('User Profile Directive', function(){
	browser.get('http://localhost:8080');

	var userProfile = element.all(by.css('user-profile'));

	it('should render the correct user info', function(){
		expect(userProfile.get(0).getText()).toContain('Name');
		expect(userProfile.get(0).getText()).toContain('Position');
		expect(userProfile.get(0).getText()).toContain('Description');
		expect(userProfile.get(0).getText()).toContain('Bill Gates');
	});
})