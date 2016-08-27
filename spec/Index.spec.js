describe('Directive Test', function() {
	browser.get('http://localhost:8080');

	it('should render the user/s name in the appropriate location', function () {
    var nameElement = element(by.css('h4'));
    var positionElement = element(by.css('h6'));
    var descriptionElement = element(by.css('p'));

		expect(nameElement.getText()).toEqual('Bill Gates');
    expect(positionElement.getText()).toEqual('Chairman, Microsoft');
    expect(descriptionElement.getText()).toEqual('William Henry "Bill" Gates III (born October 28, 1955) is an American business magnate, philanthropist, investor, and computer programmer. In 1975, Gates and Paul Allen co-founded Microsoft, which became the world\'s largest PC software company. During his career at Microsoft, Gates held the positions of chairman, CEO and chief software architect, and was the largest individual shareholder until May 2014. Gates has authored and co-authored several books.');

	});


});
