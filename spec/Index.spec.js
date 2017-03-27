describe('Directive Test', function() {
	browser.get('http://localhost:8080');

	nameDiv = element(by.css('span[ng-transclude="name"]')).element(by.xpath(".."))
	positionDiv = element(by.css('span[ng-transclude="position"]')).element(by.xpath(".."))
	descriptionDiv = element(by.css('span[ng-transclude="description"]')).element(by.xpath(".."))

	it('Displays name label', function(){
		expect(nameDiv.getText()).toContain('Name:')
	})

	it('Displays position label', function(){
		expect(positionDiv.getText()).toContain('Position:')
	})

	it('Displays position label', function(){
		expect(descriptionDiv.getText()).toContain('Description:')
	})

});
