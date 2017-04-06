describe('Directive Test', function() {
  browser.get('http://localhost:8080');

it('should have correct content', function() {
    var directive = element.all(by.css('user-profile'));

    expect(directive.get(0).getText()).toContain('Name');
    expect(directive.get(0).getText()).toContain('Position');
    expect(directive.get(0).getText()).toContain('Description');
  })
  

});