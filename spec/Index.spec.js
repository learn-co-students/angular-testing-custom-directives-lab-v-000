describe('UserProfile test', function(){
	browser.get('http://localhost:8080');

	var directive = element.all(by.css('.user')).get(0);

	it('should display the right info', function(){
		expect(directive.getText()).toContain('Name');
		expect(directive.getText()).toContain('Position');
		expect(directive.getText()).toContain('Description');
		expect(directive.getText()).toContain('Bill Gates');
	})
})