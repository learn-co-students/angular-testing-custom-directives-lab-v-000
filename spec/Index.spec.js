describe('User Profile Directive Test', function() {
  browser.get('http://localhost:8080');

  it ('displays correct name', function() {
    var name = element(by.css('h4'));
    expect(name.getText()).toContain('Bill');
  });

  it ('', function() {
    var position = element(by.css('h6'));
    expect(position.getText()).toContain('Microsoft');
  });

  it ('', function() {
    var description = element(by.css('p'));
    expect(description.getText()).toContain('William');
  });

})