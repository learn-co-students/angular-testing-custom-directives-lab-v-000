describe('Testing the Directive', function() {
  browser.get('http://localhost:8080');

  var name = element(by.css('[ng-transclude="name"]'));
  var position = element(by.css('[ng-transclude="position"]'));
  var desc = element(by.css('[ng-transclude="description"]'));

  it('should have user info in the correct place', function() {
    expect(name.getText()).toEqual('Bill Gates');
    expect(position.getText()).toEqual('Chairman, Microsoft');
    expect(desc.getText()).toContain('William Henry "Bill" Gates III');
  });
});
