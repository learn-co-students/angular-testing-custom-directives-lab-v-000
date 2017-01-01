describe('UserProfile', function() {
  browser.get('http://localhost:8080');

  var name = $$('.user h4').first();
  var position = $$('.user h6').first();
  var description = $$('.user p').first();

  it('should list labels for data', function() {
    var directive = $$('user-profile').first();

    expect(directive.getText()).toContain('Name');
    expect(directive.getText()).toContain('Position');
    expect(directive.getText()).toContain('Description');
  });

  it('should have "Chairman, Microsoft" as position', function() {
    expect(position.getInnerHtml()).toBe('Chairman, Microsoft');
  });

  it('should have the text "computer programmer" in description', function() {
    expect(description.getInnerHtml()).toContain('computer programmer');
  });
});
