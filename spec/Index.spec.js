describe('Directive Test', function() {
    browser.get('http://localhost:8080');

    var user = element(by.css('.user'));

    it('should display info in correct places', function () {
        expect(user.getAttribute('innerHTML')).toContain('Name:');
        expect(user.getAttribute('innerHTML')).toContain('Bill Gates');
        expect(user.getAttribute('innerHTML')).toContain('Position:');
        expect(user.getAttribute('innerHTML')).toContain('Description:');
    });

});
