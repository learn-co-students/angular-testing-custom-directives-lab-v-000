describe("Directive Testing", function() {
  browser.get('http://localhost:8080');

  var user =  element.all(by.css('user-profile'));

  it('should render content with a name header', function () {
    expect(user.get(0).getText()).toContain('Name');
  });

  it('should render content with a position title', function () {
    expect(user.get(0).getText()).toContain('Position:');
  });

  it('should render content with a description title', function () {
    expect(user.get(0).getText()).toContain('Description:');
  });

})