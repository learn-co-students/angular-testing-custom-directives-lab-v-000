describe('Directive Test', function(){
  browser.get('http://localhost:8080');

  var elem = element(by.css('.user'));
  var elems = element.all(by.css('user-profile'));

  it('insert the Heading', function(){
    expect(elem.getInnerHtml()).toContain('User Profile');
  });

  it('preface name with "Name:"', function(){
    expect(elem.getText()).toContain('Name:');
    expect(elem.getText()).toContain('Bill Gates');
  });

  it('should test the second element as well', function(){
    expect(elems.get(1).getText()).toContain('Tim Cook');
  });

});

