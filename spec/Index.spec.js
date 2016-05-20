var path = require('path');

describe('Directive Test', function(){
  browser.get('http://localhost:8080');

  it('should use multi-transclusion', function(){
    var directive = element.all(by.css('[ng-transclude]'));

    expect(directive.get(0).getText()).toContain('Bill Gates');
    expect(directive.get(3).getText()).toContain('Tim Cook');
  })
  it('should have the correct information in the correct place', function(){
    var hFourTag = element.all(by.css('h4'));
    var hSixTag = element.all(by.css('h6'));
    var pTag = element.all(by.css('p'));

    expect(hFourTag.get(0).getText()).toContain('Bill Gates');
    expect(hFourTag.get(1).getText()).toContain('Tim Cook');
    expect(hSixTag.get(0).getText()).toContain('Chairman, Microsoft');
    expect(hSixTag.get(1).getText()).toContain('CEO, Apple');
    expect(pTag.get(0).getText()).toMatch('William Henry "Bill" Gates');
    expect(pTag.get(1).getText()).toMatch('Timothy Donald "Tim" Cook');
  
  })

});