describe('Directive Test', function() {
  browser.get('http://locahost:8000');

  var directive = element.all(by.css('user-profile'))

  it('should correctly display a name', function() {
    expect(directive.get(0).getText()).toContain('Name:');
    expect(directive.get(1).getText()).toContain('Tim Cook');
  });
})
