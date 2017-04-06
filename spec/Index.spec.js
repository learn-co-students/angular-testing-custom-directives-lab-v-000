describe('Directive test', function () {
  browser.get('http://localhost:8080');

  var user_profiles = element.all(by.css('user-profile'));

  it('should use tranclude to render user info', function () {
    expect(user_profiles.get(0).getText()).toContain('Name');
    expect(user_profiles.get(0).getText()).toContain('Position');
    expect(user_profiles.get(0).getText()).toContain('Description');
    expect(user_profiles.get(0).getText()).toContain('Bill Gate');
  });

});
