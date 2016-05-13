var path = require('path');

describe('Directive Test', function (){
  browser.get('http://localhost:8080');

  var directive = element.all(by.css('user-profile div'));

  it('should display the name, position and description for user profile', function(){
    expect(directive.get(0).getText()).toContain('Name:');
    expect(directive.get(0).getText()).toContain('Position:');
    expect(directive.get(0).getText()).toContain('Description:');
  });

  it('should display the correct information about the user', function(){
    var billGatesInfo = {
      name: 'Bill Gates',
      position: 'Chairman, Microsoft',
      description: 'William Henry "Bill" Gates III (born October 28, 1955) is an American business magnate, philanthropist, investor, and computer programmer. In 1975, Gates and Paul Allen co-founded Microsoft, which became the world\'s largest PC software company. During his career at Microsoft, Gates held the positions of chairman, CEO and chief software architect, and was the largest individual shareholder until May 2014. Gates has authored and co-authored several books.'
    };

    var billGatesProfile = directive.get(0).all(by.css('div'));

    expect(billGatesProfile.get(0).getInnerHtml()).toContain('<h4 class="ng-scope">Bill Gates</h4>');
    expect(billGatesProfile.get(1).getInnerHtml()).toContain('<h6 class="ng-scope">Chairman, Microsoft</h6>');
    expect(billGatesProfile.get(2).getInnerHtml()).toContain('<p class="ng-scope">William Henry "Bill" Gates III (born October 28, 1955) is an American business magnate, philanthropist, investor, and computer programmer. In 1975, Gates and Paul Allen co-founded Microsoft, which became the world\'s largest PC software company. During his career at Microsoft, Gates held the positions of chairman, CEO and chief software architect, and was the largest individual shareholder until May 2014. Gates has authored and co-authored several books.</p>');
  });

});