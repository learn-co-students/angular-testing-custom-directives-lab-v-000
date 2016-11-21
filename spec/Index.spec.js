describe('Custom directive test', function () {
  browser.get('http://localhost:8080');

  var directive = element.all(by.css('user-profile'));

  it('should display the info correctly', function() {
		expect(directive.get(0).getText()).toContain('Name');
    expect(directive.get(0).getText()).toContain('Position');
		expect(directive.get(0).getText()).toContain('Description');
		expect(directive.last().getText()).toContain('Tim Cook');
  });

});
