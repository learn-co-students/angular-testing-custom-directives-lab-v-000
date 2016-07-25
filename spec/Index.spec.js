describe('Directive Test', function() {
  browser.get('http://localhost:8080');

  var info = element.all(by.css('user-profile'));
  // var count = element(by.css('.counter__count'));
  it('should display the correct info', function () {
 
    expect(info.get(0).getText()).toContain('Name');
    expect(info.get(0).getText()).toContain('Position');
    expect(info.get(0).getText()).toContain('Description');
    expect(info.get(0).getText()).toContain('Bill Gates');
  });

});