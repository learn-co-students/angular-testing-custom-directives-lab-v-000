describe('Directive Test', function() {
	browser.get('http://localhost:8080');

	var user = element(by.css('.user'));


	it('should have Name Position and Description ', function () {
		expect(user.getInnerHtml()).toContain('Name');
    expect(user.getInnerHtml()).toContain('Position');
    expect(user.getInnerHtml()).toContain('Description');
	});



});
