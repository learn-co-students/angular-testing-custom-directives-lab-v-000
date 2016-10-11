describe('UserProfile', function() {
  browser.get('http://localhost:8080');

  var user = element(by.css('.user'));

  it('should have a "Name:" header followed by a name', function () {
    expect(user.getText()).toContain('Name:');
    expect(user.getText()).toContain('Bill Gates');
  });

  it('should have a "Position:" header', function () {
    expect(user.getText()).toContain('Position:');
  });

  it('should have a "Description:" header', function () {
    expect(user.getText()).toContain('Description:');
  });
});
