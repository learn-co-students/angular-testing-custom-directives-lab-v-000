describe('User Profile Directive', function (){
  browser.get('http://localhost:8080');

  it('should display user profiles', function (){
    var userProfile = element.all(by.css('user-profile'));

    expect(userProfile.get(0).getText()).toContain('Name');
    expect(userProfile.get(0).getText()).toContain('Position');
    expect(userProfile.get(0).getText()).toContain('Description');
    expect(userProfile.get(0).getText()).toContain('Bill Gates');
  })
})
