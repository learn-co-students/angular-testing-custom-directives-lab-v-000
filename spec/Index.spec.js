describe ('Directive Test', function() {
  browser.get('http://localhost:8080');

  it('should have a name of Tim Cook', function(){
    expect(element.all(by.css('h4')).get(1).getInnerHtml()).toEqual('Tim Cook');
  });

  it('should have a position of CEO, Apple', function(){
    expect(element.all(by.css('h6')).get(1).getInnerHtml()).toEqual('CEO, Apple');
  });

  it('should have a position of CEO, Apple', function(){
    expect(element.all(by.css('p')).get(1).getInnerHtml()).toEqual('Timothy Donald "Tim" Cook (born November 1, 1960) is an American business executive, and is the Chief Executive Officer of Apple Inc., previously serving as Chief Operating Officer. Cook joined Apple in March 1998 as senior vice president of worldwide operations and then served as Executive Vice President of worldwide sales and operations. He was made Chief Executive on August 24, 2011, succeeding Steve Jobs. He had previously been named acting chief after Jobs began medical leave in January 2011. In early 2012, he was awarded compensation of one million shares, vesting in 2016 and 2021, by Apple\'s board of directors.');
  });


});
