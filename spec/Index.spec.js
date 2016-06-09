describe('Directive Test', function() {
  browser.get('http://localhost:8080');

  it('should display information in correct position', function() {
    var userProfile = element.all(by.css('user-profile'));

    expect(userProfile.get(0).getText()).toContain('Name');
    expect(userProfile.get(0).getText()).toContain('Bill Gates');
    expect(userProfile.get(0).getText()).toContain('Position');
    expect(userProfile.get(0).getText()).toContain('Chairman, Microsoft');
    expect(userProfile.get(0).getText()).toContain('Description');
    expect(userProfile.get(0).getText()).toContain('October 28, 1955');
  });
})
