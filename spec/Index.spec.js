var path = require('path');

describe('Directive Test', function() {
  browser.get('http://localhost:8080');

  it('should have all information in the correct places', function () {
    var userProfile = element.all(by.css('user-profile'))

    expect(userProfile.get(0).getText()).toContain('Name');
    expect(userProfile.get(0).getText()).toContain('Position');
    expect(userProfile.get(0).getText()).toContain('Description');
    expect(userProfile.get(0).getText()).toContain('Bill Gates');

  });

});

// verify that name, position and description are all rendered above the correct elements
