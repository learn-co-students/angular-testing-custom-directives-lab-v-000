describe('Directive Test', function() {
  browser.get('http://localhost:8080');


  it('should display the info correctly', function() {

    element.all(by.css('.user div')).then(function(items) {
      expect(items.length).toBe(6);
      expect(items[0].getText()).toBe('Name:\nBill Gates');
      expect(items[1].getText()).toBe('Position:\nChairman, Microsoft');
      expect(items[2].getText()).toContain('Description:\nWilliam');

    });

  });

});