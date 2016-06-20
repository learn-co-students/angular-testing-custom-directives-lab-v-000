


describe('Index Test', function() {
    browser.get('http://localhost:8080');

    var userProfile = element.all(by.css('user-profile'));

    it('check name', function () {
        expect(userProfile.get(0).getText()).toContain('Name');
    });

    it('check position', function () {
        expect(userProfile.get(0).getText()).toContain('Position');
    });

    it('check description', function () {
        expect(userProfile.get(0).getText()).toContain('Description');
    });
});