describe('Directive Test', function() {
  browser.get('http://localhost:8080');

  var directive = element.all(by.css('user-profile'));

  it('should display the Name header', function() {
    expect(directive.get(0).getText()).toContain('Name');
  });

  it('should display the Position header', function() {
    expect(directive.get(0).getText()).toContain('Position');
  });

  it('should display the Description header', function() {
    expect(directive.get(0).getText()).toContain('Description');
  });

  it('should display the name of the user', function() {
    expect(directive.get(0).getText()).toContain('Bill Gates');
  });
});
