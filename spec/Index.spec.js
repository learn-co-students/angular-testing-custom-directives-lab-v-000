describe('Directive Test', function() {
	browser.get('http://localhost:8080');

	var name = element(by.css('h4'));
	var position = element(by.css('h6'));
  var description = element(by.css("p"))

	it('should have name', function () {
		expect(name.getInnerHtml()).toEqual('Bill Gates');
	});

	it('should have position and description', function () {
		expect(position.getInnerHtml()).toEqual('Chairman, Microsoft');
    expect(description.getInnerHtml()).toEqual('William Henry "Bill" Gates III (born October 28, 1955) is an American business magnate, philanthropist, investor, and computer programmer. In 1975, Gates and Paul Allen co-founded Microsoft, which became the world\'s largest PC software company. During his career at Microsoft, Gates held the positions of chairman, CEO and chief software architect, and was the largest individual shareholder until May 2014. Gates has authored and co-authored several books.');
	});

});
