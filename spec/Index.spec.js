var path = require('path');

describe('Directive Test', function() {
    browser.get('http://localhost:8080');
    var name = element.all(by.css('user-profile'));

    it('should have the name Bill Gates', function(){
      expect(name.get(0).getText()).toContain('Bill Gates');  
      expect(name.get(0).getText()).toContain('Name:'); 
    });

    it('should have the name Tim Cook', function(){
      expect(name.get(1).getText()).toContain('Tim Cook');
    });
});