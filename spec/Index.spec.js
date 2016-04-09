describe('Directive Test', function(){
  browser.get('http://localhost:8080');

  var users = element.all(by.css('.user'));
  var firstUser = users.get(0).getText();

  it('should have name filled in', function(){
    expect(firstUser).toContain('Name:\nBill Gates')
  })

	it('should have position filled in', function(){
		expect(firstUser).toContain('Position:\nChairman, Microsoft')
  })

});
