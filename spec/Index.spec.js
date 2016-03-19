describe('User Profile directive test', function() {
  browser.get('http://localhost:8080');
  var userDiv = element(by.css('.user'));
  var name = element(by.css('.name'));
  var position = element(by.css('.position'));
  var description = element(by.css('.description'));

  it("should display user's name", function() {
    expect(name.getInnerHtml()).toContain('Bill Gates');
  });
  it("should display user's position", function() {
    expect(position.getInnerHtml()).toContain('Chairman, Microsoft');
  });
  it("should display a description about user", function() {
    expect(description.getInnerHtml()).toContain('William Henry "Bill" Gates III (born October 28, 1955)');
  });
});

// it('should display the correct info', function(){
//   var directive = element.all(by.css('user-profile'));
//   expect(directive.get(0).getText()).toContain('Name:');
//   expect(directive.get(0).getText()).toContain('Position:');
//   expect(directive.get(0).getText()).toContain('Description:');
// });
