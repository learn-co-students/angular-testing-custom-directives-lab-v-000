describe('Directive Test', function(){
  browser.get("http://localhost:8080");

  var directive = element.all(by.css('user-profile'));

  it('should display name heading', function () {
    expect(directive.get(0).getText()).toContain('Name:');
  });

  it('should display postion heading', function () {
    expect(directive.get(0).getText()).toContain('Position:');
  });

  it('should display description heading', function () {
   expect(directive.get(0).getText()).toContain('Description:');
  });

});