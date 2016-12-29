describe('UserProfile Test', function() {
  browser.get('http://localhost:8080');

  var name = $$('.user h4').first(); //shortcut for element.all(by.css('.user h4').first())
  var position = $$('.user h6').first();
  var description = $$('.user p').first();

  it('should display the information correctly', function() {
    var directive = $$('user-profile').first();

    expect(directive.getText()).toContain('Name');
    expect(directive.getText()).toContain('Position');
    expect(directive.getText()).toContain('Description');
  });

  it('should have "Bill Gates" as name', function () {
    expect(name.getInnerHtml()).toBe('Bill Gates');
  });

  it('should have "Chairman, Microsoft" as position', function () {
    expect(position.getInnerHtml()).toBe('Chairman, Microsoft');
  });

  it('should have text "philanthropist" in description', function() {
    expect(description.getInnerHtml()).toContain('philanthropist');
  })
});
