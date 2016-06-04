describe('Directive Test', function() {
	browser.get('http://localhost:8080');

  var name = element(by.css('user-profile:first-child h4'));
  var position = element(by.css('user-profile:first-child h6'));
  var description = element(by.css('user-profile:first-child p'));

  it('should be a name', function() {
    expect(name.getInnerHtml()).toEqual('Bill Gates');
  });

  it('should be a position', function() {
    expect(position.getInnerHtml()).toEqual('Chairman, Microsoft');
  });

  it('should be a description', function() {
    expect(description.getInnerHtml()).toContain('William Henry');
  });
});
