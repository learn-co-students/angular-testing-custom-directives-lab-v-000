describe('Directive Test', function() {
    browser.get('http://localhost:8080');
 
    var name = element(by.css('h4'));
 
    it('should match name', function () {
        expect(name.getInnerHtml()).toEqual('Bill Gates');
    });
 
});