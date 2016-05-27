describe('UserProfile', function() {
  browser.get('http://localhost:8080');

  var user = element.all(by.css('.user'))
  
  

  it('should display the proper labels and transcluded info', function(){
    expect(user.get(0).getInnerHtml()).toBe('<h2>User Profile</h2><div>Name: <span ng-transclude="name"><h4 class="ng-scope">Bill Gates</h4></span></div><div>Position: <span ng-transclude="position"><h6 class="ng-scope">Chairman, Microsoft</h6></span></div><div>Description: <span ng-transclude="description"><p class="ng-scope">William Henry "Bill" Gates III (born October 28, 1955) is an American business magnate, philanthropist, investor, and computer programmer. In 1975, Gates and Paul Allen co-founded Microsoft, which became the world\'s largest PC software company. During his career at Microsoft, Gates held the positions of chairman, CEO and chief software architect, and was the largest individual shareholder until May 2014. Gates has authored and co-authored several books.</p></span></div>')
  })


});



