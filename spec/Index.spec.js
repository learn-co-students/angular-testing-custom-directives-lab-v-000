describe('Directive Test', function() {
	browser.get('http://localhost:8080');

	var userProfile = element(by.css('.user'));


	it('Should contain Name, Position, and Description in the User Profile', function () {
		expect(userProfile.getInnerHtml()).toContain('Name');
    expect(userProfile.getInnerHtml()).toContain('Position');
    expect(userProfile.getInnerHtml()).toContain('Description');
	});



});
