describe('Directive Test', function() {
	browser.get('http://localhost:8080');

  it('should display the lables correctly', function() {
  		var directive = element.all(by.css('user-profile'));

  		expect(directive.get(0).getText()).toContain('Name');
  		expect(directive.get(0).getText()).toContain('Position');
  		expect(directive.get(0).getText()).toContain('Description');
  		expect(directive.get(0).getText()).toContain('Bill Gates');
  	})
});

// our test should verify that name, position
 // and description are all rendered above the correct elements.
