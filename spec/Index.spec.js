describe('Directive Test', function(){
  browser.get('http://localhost:8080');

  var users = element.all(by.css('user-profile'));
  var text = users.get(0).getText()

  it('should have a name', function () {
		expect(text).toContain('Name');
	});
  it('should have a position', function () {
		expect(text).toContain('Position');
	});
  it('should have a description', function () {
		expect(text).toContain('Description');
	});
});
