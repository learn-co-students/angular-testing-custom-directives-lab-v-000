describe('UserProfile Directive Test', function() {
  browser.get('http://localhost:8080');

  it('should have the correct content', function() {
    var profile = element.all(by.css('user-profile'));

    expect(profile.get(0).getText()).toContain('Name');
    expect(profile.get(0).getText()).toContain('Position');
    expect(profile.get(0).getText()).toContain('Description');
    expect(profile.get(0).getText()).toContain('Bill Gates');
  });
});
