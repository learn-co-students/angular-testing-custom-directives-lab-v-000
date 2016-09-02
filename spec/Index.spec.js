describe('UserProfile Directive Test', function() {
  browser.get('http://localhost:8080');

  var directive = element.all(by.css('user-profile'))
  it('should render the directive', function() {
    expect(directive.getInnerHtml()).not.toEqual('');
  });
  
  it('should contain the "Name:" label', function() {
    expect(directive.get(0).getText()).toContain('Name:');
  });
  it('should contain the right name', function() {
    //expect(directive.get(0).getText()).toContain('Bill Gates');
    expect(directive.get(0).element(by.css('h4')).getInnerHtml()).toContain('Bill Gates');
  });

  it('should contain the "Position:" label', function() {
    expect(directive.get(0).getText()).toContain('Position');
  });
  it('should contain the right position', function() {
    expect(directive.get(0).element(by.css('h6')).getInnerHtml()).toContain('Chairman, Microsoft');
  });

  it('should contain the "Description: " label', function() {
    expect(directive.get(0).getText()).toContain('Description:');
  });
  it('should contain the right description', function() {
    expect(directive.get(0).element(by.css('p')).getInnerHtml()).toContain('William Henry \"Bill\" Gates III \(born October 28, 1955\) is an American business magnate');
  });


});



      // '<div class="user">',
      //   '<h2>User Profile</h2>',
      //   '<div>Name: <span ng-transclude="name"></span></div>',
      //   '<div>Position: <span ng-transclude="position">No position</span></div>',
      //   '<div>Description: <span ng-transclude="description">No description</span></div>',
      // '</div>'