describe('UserProfile Directive Test', function() {
  browser.get('http://localhost:8080');

  var name = $('h4').getInnerHtml()
  var position = $('h6').getInnerHtml()
  var description = $('p').getInnerHtml()

  it('should contain name in a h4 tag', function() {
    expect(name).toEqual('Bill Gates')
  });

  it('should contain position in a h6 tag', function() {
    expect(position).toEqual('Chairman, Microsoft')
  });

  it('should contain a description in a p tag', function() {
    expect(description).toContain('William Henry')
  });
})
