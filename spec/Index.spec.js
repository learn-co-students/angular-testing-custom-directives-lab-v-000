describe('UserProfile Directive', function () {
  browser.get('http://localhost:8080');

  it('should properly format name, position, and description for Bill Gates', function () {
    expect(element(by.css('[ng-transclude="name"]')).getInnerHtml()).toContain('Bill Gates');
    expect(element(by.css('[ng-transclude="position"]')).getInnerHtml()).toContain('Chairman, Microsoft');
    expect(element(by.css('[ng-transclude="description"]')).getInnerHtml()).toContain('William Henry "Bill" Gates III');
  });

  it('should properly format name, position, and description for Tim Cook', function () {
    expect(element(by.css('user-profile:nth-child(2) [ng-transclude="name"]')).getInnerHtml()).toContain('Tim Cook');
    expect(element(by.css('user-profile:nth-child(2) [ng-transclude="position"]')).getInnerHtml()).toContain('CEO, Apple');
    expect(element(by.css('user-profile:nth-child(2) [ng-transclude="description"]')).getInnerHtml()).toContain('(born November 1, 1960)');
  });

});
