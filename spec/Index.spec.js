describe('Directive Test', function() {
  browser.get('http://localhost:8080');
  var name = element.all(by.css('.name'));
  var position = element.all(by.css('.position'));
  var description = element.all(by.css('.description'));

  it('should cotain the user name', function() {
    expect(name.get(0).getText()).toContain('Bill Gates');
  });
  it('should cotain the user position', function() {
    expect(position.get(1).getText()).toContain('CEO, Apple');
  });
  it('should cotain the user description', function() {
    expect(description.get(1).getText()).toContain('Chief Operating Officer');
  });
})
