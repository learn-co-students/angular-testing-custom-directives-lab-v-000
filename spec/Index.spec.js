describe('Directive Test', function() {
  browser.get('http://localhost:8080');

  var userProfile = element.all(by.css('user-profile'));

  it('should have a name', function () {
        expect(userProfile.get(0).getText()).toContain('Name');
    });

    it('should have a position', function () {
        expect(userProfile.get(0).getText()).toContain('Position');
    });

    it('should have a description', function () {
        expect(userProfile.get(0).getText()).toContain('Description');
    });
});