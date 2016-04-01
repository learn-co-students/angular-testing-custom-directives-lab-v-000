describe('Directive Test', function() {
  browser.get('http://localhost:8080');

  it('should display the info correctly', function() {
    var profiles = element.all(by.css('.user'));

    expect(profiles.get(0).getText()).toContain('Name');
    expect(profiles.get(0).getText()).toContain('Position');
    expect(profiles.get(0).getText()).toContain('Description');
    expect(profiles.get(0).getText()).toContain('Bill Gates');
    expect(profiles.get(1).getText()).toContain('Tim Cook');
  })
});