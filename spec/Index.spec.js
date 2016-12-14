describe('Directive Test', function() {
    browser.get('http://localhost:8080');


	it('should display the info correctly', function() {
		var directive = element.all(by.css('user-profile'));

		expect(directive.get(0).getText()).toContain('Name');
		expect(directive.get(0).getText()).toContain('Position');
		expect(directive.get(0).getText()).toContain('Description');
		expect(directive.get(0).getText()).toContain('Bill Gates');
		expect(directive.get(0).getText()).toContain('Chairman, Microsoft');
		expect(directive.get(0).getText()).toContain('William Henry "Bill" Gates III (born October 28, 1955)');

		expect(directive.get(1).getText()).toContain('Name');
		expect(directive.get(1).getText()).toContain('Position');
		expect(directive.get(1).getText()).toContain('Description');
		expect(directive.get(1).getText()).toContain('Tim Cook');
		expect(directive.get(1).getText()).toContain('CEO, Apple');
		expect(directive.get(1).getText()).toContain('Timothy Donald "Tim" Cook (born November 1, 1960)');
	});

});