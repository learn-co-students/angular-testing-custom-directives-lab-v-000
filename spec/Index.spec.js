describe('Directive Test', function() {
	// grab the page
	browser.get('http://localhost:8080');
	var directive = element.all(by.css('user-profile'));

	it('should display Bill Gates name, position and description', function () {
		expect(directive.get(0).getText()).toContain('Name');
		expect(directive.get(0).getText()).toContain('Position');
		expect(directive.get(0).getText()).toContain('Description');
		expect(directive.get(0).getText()).toContain('Bill Gates');
	});

	it('should display Tim Cooks name, position and description', function () {
		expect(directive.get(1).getText()).toContain('Name');
		expect(directive.get(1).getText()).toContain('Position');
		expect(directive.get(1).getText()).toContain('Description');
		expect(directive.get(1).getText()).toContain('Tim Cook');
	});

});