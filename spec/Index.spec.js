describe('Directive Test', function() {
  browser.get('http://localhost:8080');

  it('should have a name', function(){
    expect(element.all(by.css('user-profile')).get(0).getText()).toContain('Name');
  })

  it('should have a position', function(){
    expect(element.all(by.css('user-profile')).get(0).getText()).toContain('Position');
  })

  it('should have a description', function(){
    expect(element.all(by.css('user-profile')).get(0).getText()).toContain('Description');
  })

  })