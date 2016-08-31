describe('Directive Test', function () {
  browser.get('http://localhost:8080');

  var profileElem = element(by.css('.user-profile)'));
  var userName = element(by.css('user-profile div:nth-child(2n)'))
  var uPosition = element(by.css('user-profile div:nth-child(3n)'))
  var uDesc = element(by.css('user-profile div:nth-child(4n)'))

  it('should be in the right order', function () {
    console.log(userName.getInnerHtml())
    expect(userName.getInnerHtml()).toContain('Name:')
    expect(uPosition.getInnerHtml()).toContain('Position:')
    expect(uDesc.getInnerHtml()).toContain('Description:')
  })
});
