describe('Directive Test', function() {
    browser.get('http://localhost:8080');

    var UserProfile = element(by.css('user-profile'));


    it('display user profile correctly', function () {
        expect(UserProfile.getText()).toContain('Name:');
        expect(UserProfile.getText()).toContain('Position:');
        expect(UserProfile.getText()).toContain('Description:');
        expect(UserProfile.getText()).toContain('Bill Gates');
    });
});