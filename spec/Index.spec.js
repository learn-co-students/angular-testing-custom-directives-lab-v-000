describe('Directive Test', function() {
	browser.get('http://localhost:8080');

	var name = element(by.css('#name'));
  var position = element(by.css('#position'));
  var description = element(by.css('#description'));


	it('should display the correct name', function () {
		expect(name.getInnerHtml()).toContain('Bill Gates');
	});

  it('should display the correct position', function() {
    expect(position.getInnerHtml()).toContain('Chairman, Microsoft');
  });

  it('should display the correct description', function() {
    expect(description.getInnerHtml()).toContain('William Henry "Bill" Gates III (born October 28, 1955) is an American business');
  });

	});
