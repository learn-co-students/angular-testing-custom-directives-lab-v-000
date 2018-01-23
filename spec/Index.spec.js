describe('Directive Test', function() {
  browser.get('http://localhost:8080');

  it('should put the elements in the correct location', function() {
    var elements = element.all(by.css('user-profile'));

    expect(elements.get(0).getInnerHtml()).toContain('Name');
    expect(elements.get(0).getInnerHtml()).toContain('Position');
    expect(elements.get(0).getInnerHtml()).toContain('Description');
    expect(elements.get(0).getInnerHtml()).toContain('Bill Gates');
  });
});
