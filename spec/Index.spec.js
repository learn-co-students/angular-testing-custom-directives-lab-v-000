describe('userProfile', function() {
  browser.get('http://localhost:8080');

  it('should display the correct information', function () {
    expect(element.all(by.css('user-profile')).get(0).getText()).toContain('Name');
    expect(element.all(by.css('user-profile')).get(0).getText()).toContain('Position');
    expect(element.all(by.css('user-profile')).get(0).getText()).toContain('Description');
  });
});
