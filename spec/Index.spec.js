describe('Directive Test', function(){
  browser.get('http://localhost:8080');

  var directive = element.all(by.css('user-profile'));

  it('should render a name heading above the name', function(){
    expect(directive.get(0).getText()).toContain('Name');
  });

  it('should render a position heading above the position', function(){
    expect(directive.get(0).getText()).toContain('Position');
  });

  it('should render a description heading above the description', function(){
    expect(directive.get(0).getText()).toContain('Description');
  });
});