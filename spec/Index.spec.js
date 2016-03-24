describe('Directive Test', function() {
  browser.get('http://localhost:8080');

  it('should transclude to correct location', function(){
    var profiles = element.all(by.css('user-profile'));

    expect(profiles.get(0).getText()).toContain('Name:');
    expect(profiles.get(0).getText()).toContain('Position:');
    expect(profiles.get(0).getText()).toContain('Description:');
    expect(profiles.get(1).getText()).toContain('Tim Cook');
  })


})