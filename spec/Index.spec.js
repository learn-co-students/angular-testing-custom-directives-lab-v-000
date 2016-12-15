describe('Directive Test', function() {
  browser.get('http://localhost:8080');

  var user_info = element.all(by.css('user-profile'));

  it('should display the user information', function() {
    expect(user_info.get(0).getText()).toContain('Name');
    expect(user_info.get(0).getText()).toContain('Position');
    expect(user_info.get(0).getText()).toContain('Description');
    expect(user_info.get(0).getText()).toContain('Bill Gates');
  })
});