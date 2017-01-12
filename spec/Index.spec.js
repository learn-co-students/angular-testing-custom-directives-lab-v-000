describe('Directive Test', function() {
  browser.get('http://localhost:8080');

  var name = element(by.css('.name'));
  var position = element(by.css('.position'));
  var description = element(by.css('.description'));

  it('should have a Name label', function() {
    expect(name.getInnerHtml()).toEqual('Name: ');
  });

  it('should have a Position label', function() {
    expect(position.getInnerHtml()).toEqual('Position: ');
  });

  it('should have a Description label', function() {
    expect(description.getInnerHtml()).toEqual('Description: ');
  });
});
