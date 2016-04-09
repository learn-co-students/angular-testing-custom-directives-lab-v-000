describe('Directive Test', function(){
  browser.get('http://localhost:8080');

  var users = element.all(by.css('.user'));
  var firstUser = users.get(0).getText();

  it('should have name filled in', function(){
    expect(firstUser).toI
    // expect(firstUser.children[1].textContent).toEqual("Name: Bill Gates");
  })

});
