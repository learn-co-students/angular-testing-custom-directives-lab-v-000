describe('Directive Test', function() {
  browser.get('http://localhost:8080');

  it('should display the info correctly', function() {
    var directive = element.all(by.css('user-profile'));

    expect(directive.get(1).getText()).toContain('Name');
    expect(directive.get(1).getText()).toContain('Position');
    expect(directive.get(1).getText()).toContain('Description');
    expect(directive.get(1).getText()).toContain('Tim Cook');
  })
});
