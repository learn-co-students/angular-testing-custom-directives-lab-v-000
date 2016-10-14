describe('Directive Test', function() {
  browser.get('http://localhost:8080');
  // getting the first element found for the css selectors
  var nameElement        = element.all(by.css('h4')).get(0);
  var positionElement    = element.all(by.css('h6')).get(0);
  var descriptionElement = element.all(by.css('p')).get(0);

  it('should have the right name', function () {
    expect(nameElement.getInnerHtml()).toEqual('Bill Gates');
  });

  it('should have the right position', function () {
    expect(positionElement.getInnerHtml()).toEqual('Chairman, Microsoft');
  });

  it('should have the right decription', function () {
    var description = 'William Henry "Bill" Gates III (born October 28, 1955) is an American business magnate, philanthropist, investor, and computer programmer. In 1975, Gates and Paul Allen co-founded Microsoft, which became the world'+"'"+'s largest PC software company. During his career at Microsoft, Gates held the positions of chairman, CEO and chief software architect, and was the largest individual shareholder until May 2014. Gates has authored and co-authored several books.';
    expect(descriptionElement.getInnerHtml()).toEqual(description);
  });


})