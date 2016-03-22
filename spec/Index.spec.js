describe('UserProfile Directive', function () {
  browser.get('http://localhost:8080');

  it('should insert Name: before each name', function () {
    expect(element(by.css('[ng-transclude="name"]')).getInnerHtml()).toContain('Bill Gates');
  })

});
