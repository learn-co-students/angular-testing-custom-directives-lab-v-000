describe("Directive Test", function () {
  browser.get('http://localhost:8080');

  var allUsers =  element.all(by.css('.user'));

  it('should display user profile correctly', function () {
    expect(allUsers.get(0).getText()).toContain("Bill Gates")
    expect(allUsers.get(0).getText()).toContain("Name")
    expect(allUsers.get(0).getText()).toContain("Position")
    expect(allUsers.get(0).getText()).toContain("Description")
  });
})