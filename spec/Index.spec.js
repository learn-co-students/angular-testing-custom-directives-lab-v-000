describe('Directive Test', function() {
	browser.get('http://localhost:8080');

  it('should display the user profile information properly',  function() {
  var userprofile = element.all(by.css('user-profile'));

   expect(userprofile.get(0).getText()).toContain('Name');
   expect(userprofile.get(0).getText()).toContain('Position');
   expect(userprofile.get(0).getText()).toContain('Description');
   expect(userprofile.get(0).getText()).toContain('Bill Gates');
 });

});
