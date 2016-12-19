describe('Directive Test', function() {
    browser.get('http://localhost:8080');

    var directive = element.all(by.css('user-profile'));

    it('should correctly display a name', function() {
      expect(directive.get(0).getText()).toContain('Name:');
      expect(directive.get(1).getText()).toContain('Tim Cook');
    });

    it('should correctly display a position', function() {
      expect(directive.get(0).getText()).toContain('Position:');
      expect(directive.get(1).getText()).toContain('CEO');
    });

    it('should correctly display a description', function() {
      expect(directive.get(0).getText()).toContain('Description:');
    });
})
