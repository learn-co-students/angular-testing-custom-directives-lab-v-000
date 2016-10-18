describe('Profile Test', function() {
  browser.get('http://localhost:8080');

  var directive = element.all(by.css('user-profile'));

  it('should correctly display a users name', function () {
    expect(directive.get(0).getText()).toContain('Name');
  });

  it('should correctly display a users position', function () {
    expect(directive.get(0).getText()).toContain('Position');
  });

  it('should correctly display a users description', function () {
    expect(directive.get(0).getText()).toContain('Description');
  });

});
