describe('Directive Test', function(){
  browser.get('http://localhost:8080');

  var name = element(by.css('.user_name'));
  var position = element(by.css('.user_position'));
  var description = element(by.css('.user_description'));

  it('should have a name', function(){
    expect(name.getInnerHtml()).toContain('Name:');
  });

  it('should have a position', function(){
    expect(position.getInnerHtml()).toContain('Position:');
  });

  it('should have a description', function(){
    expect(description.getInnerHtml()).toContain('Description:');
  });
})