describe('UserProfile Directive Test', function() {
  browser.get('http://localhost:8080');

  var directive = element.all(by.css('user-profile'))
  //test for content, generally, in a directive
  it('should render the directive', function() {
    expect(directive.getInnerHtml()).not.toEqual('');
  });
  
  //test for first directive (i.e., index 0) label and value
  it('should contain the "Name:" label', function() {
    expect(directive.get(0).getText()).toContain('Name:');
  });
  it('should contain the right name', function() {
    expect(directive.get(0).element(by.css('h4')).getInnerHtml()).toContain('Bill Gates');
  });

   //test for first directive (i.e., index 0) label and value
  it('should contain the "Position:" label', function() {
    expect(directive.get(0).getText()).toContain('Position');
  });
  it('should contain the right position', function() {
    expect(directive.get(0).element(by.css('h6')).getInnerHtml()).toContain('Chairman, Microsoft');
  });

   //test for first directive (i.e., index 0) label and value
  it('should contain the "Description: " label', function() {
    expect(directive.get(0).getText()).toContain('Description:');
  });
  it('should contain the right description', function() {
    expect(directive.get(0).element(by.css('p')).getInnerHtml()).toContain('William Henry \"Bill\" Gates III \(born October 28, 1955\) is an American business magnate');
  });

});