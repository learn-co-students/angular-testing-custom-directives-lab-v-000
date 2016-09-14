describe('Directive Test', function() {

browser.get('http://localhost:8000')

var user = element.all(by.css('[ng-transclude]'))


it('should get the users and their professions and job descriptions', function () {
  expect(user.get(0).getText()).toContain('Bill Gates')
  expect(user.get(1).getText()).toContain('Chairman, Microsoft')

})

it('should have proper values for elements', function() {

  var h4 = element.all(by.css('h4'))
  var h6 = element.all(by.css('h6'))
  expect(h4.get(1).getText()).toContain('Tim Cook')
  expect(h6.get(1).getText()).toContain('CEO')

})





})