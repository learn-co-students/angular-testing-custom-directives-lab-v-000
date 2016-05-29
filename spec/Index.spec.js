describe('Directive Test', function(){
  browser.get('http://localhost:8080');

  var userInfo = element.all(by.css('user-profile'));
  it('should display the Name heading', function(){
    expect(userInfo.get(0).getText()).toContain('Name');
  });
  it('should display the Position heading', function(){
    expect(userInfo.get(0).getText()).toContain('Position');
  });
  it('should display the Description heading', function(){
    expect(userInfo.get(0).getText()).toContain('Description');
  });
  it('should display the users name', function(){
    expect(userInfo.get(0).getText()).toContain('Bill Gates');
  });

});
