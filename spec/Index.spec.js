describe('UserProfile Test', function() {
  browser.get('http://localhost:8080');

  var elements = element.all(by.css('user-profile'));
  

  it('should contain name, position, description', function() {
    expect(elements.get(0).getText()).toContain('Name');
    expect(elements.get(0).getText()).toContain('Position');
    expect(elements.get(0).getText()).toContain('Description');
  })
});