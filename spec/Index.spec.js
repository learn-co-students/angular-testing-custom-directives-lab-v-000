describe('UserProfile directive', function() {
  browser.get('http://localhost:8080');

  var sections = element.all(by.css('user-profile'));
  var names = element.all(by.css('h4'));
  var positions = element.all(by.css('h6'));
  var descriptions = element.all(by.css('p'));

  it('should include headers', function() {
    expect(sections.get(0).getText()).toContain('Name:');
    expect(sections.get(0).getText()).toContain('Position:');
    expect(sections.get(0).getText()).toContain('Description:');
  });

  it('should include a name', function() {
    expect(names.get(0).getText()).toContain('Gates');
    expect(names.get(1).getText()).toContain('Cook');
  });

  it('should include a position', function() {
    expect(positions.get(0).getText()).toContain('Microsoft');
    expect(positions.get(1).getText()).toContain('Apple');
  });

  it('should include a description', function() {
    expect(descriptions.get(0).getText()).toContain('William Henry');
    expect(descriptions.get(1).getText()).toContain('Timothy Donald');
  });

});
