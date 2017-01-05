describe('Directive Test', function() {
	browser.get('http://localhost:8080');

	var profile = element(by.css('user-profile'));

	it('should put name in the correct place', function () {
		expect(profile.getText()).toContain('Name:');
    expect(profile.getText()).toContain('Bill Gates');
	});

	it('should put position in the correct place', function () {
		expect(profile.getText()).toContain('Position:');
    expect(profile.getText()).toContain('Chairman');
	});

	it('should put description in the correct place', function () {
		expect(profile.getText()).toContain('Description:');
    expect(profile.getText()).toContain('William Henry');
  });
});
