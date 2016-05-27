describe('User Profile', function(){
  browser.get('http://localhost:8080');

  it('should display the Name label correctly', function(){
    var directive = element.all(by.css('user-profile'));

    expect(directive.get(0).getText()).toContain('Name');
  });

  it('should display the Position label correctly', function(){
    var directive = element.all(by.css('user-profile'));

    expect(directive.get(0).getText()).toContain('Position');
  });

  it('should display the Description label correctly', function(){
    var directive = element.all(by.css('user-profile'));

    expect(directive.get(0).getText()).toContain('Description');
  });

  it('should display the name properly', function(){
    var directive = element.all(by.css('user-profile'));

    expect(directive.get(0).getText()).toContain('Bill Gates');
  });
});
