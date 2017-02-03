describe('Directive Test', function() {
    browser.get('http://localhost:8080');

    var e = element(by.css('user-profile'))

    it('should put the labels in the right place', function () {
        expect(e.getText()).toContain("Name");
    });
});
