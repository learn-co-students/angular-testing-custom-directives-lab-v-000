describe("Directive Test", function() {
    browser.get('http://localhost:8080');
    var name = element(by.css('h4.ng-scope'));
    var position = element(by.css('h6.ng-scope'))
    var description = element(by.css('p.ng-scope'))

    it('should have user info in the correct place', function() {
        expect(name.getText()).toEqual("Bill Gates");
        expect(position.getText()).toEqual('Chairman, Microsoft');
        expect(description.getText()).toContain('William Henry "Bill" Gates III');
    });

});
