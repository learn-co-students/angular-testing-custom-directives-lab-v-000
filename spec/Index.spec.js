describe('Directive Test', function() {
    browser.get('http://localhost:8080');
 
    var users = element(by.css('.user'));
 
    it('should have the correct name', function () {
        expect(users.getInnerHtml()).toContain('Bill Gates');
    });

 
});