describe('Directive test', function(){
	browser.get('http://localhost:8080');
	var directive = element.all(by.css('user-profile'))

	it('should display proper info prefaced by label', function(){
		var text = directive.get(0).getText()
		expect(text).toContain('Name');
		expect(text).toContain('Position');
		expect(text).toContain('Description');
		expect(text).toContain('Chairman, Microsoft');
	});

})