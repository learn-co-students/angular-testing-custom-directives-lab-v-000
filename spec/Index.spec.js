describe('Directive Test', function(){
  browser.get('http://localhost:8080');

  var firstUser = element(by.css('.user'));
  // console.log(firstUser);
  // browser.pause();
  it('should have name filled in', function(){
    expect(firstUser.children[1].textContent).toEqual("Name: Bill Gates");
  })

});
