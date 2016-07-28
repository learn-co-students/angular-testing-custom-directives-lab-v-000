describe('Directive Tests', function(){
  browser.get('http://localhost:8000')

  var directive = element.all(by.css('user-profile'))
  it('should render the directive', function(){
    expect(directive.get(0))
  })
  it('Inside the the directive it should contain the names', function(){
    expect(directive.get(0).getText()).toContain('Name:')
    expect(directive.get(1).getText()).toContain('Tim Cook')
  })
  it('Inside the the directive it should contain the position', function(){
    expect(directive.get(0).getText()).toContain('Position:')
    expect(directive.get(1).getText()).toContain('CEO')
  })
  it('Inside the the directive it should contain the Description', function(){
    expect(directive.get(0).getText()).toContain('Description:')
    expect(directive.get(1).getText()).toContain("Timothy Donald \"Tim\" Cook (born November 1, 1960) is an American business executive, and is the Chief Executive Officer of Apple Inc., previously serving as Chief Operating Officer. Cook joined Apple in March 1998 as senior vice president of worldwide operations and then served as Executive Vice President of worldwide sales and operations. He was made Chief Executive on August 24, 2011, succeeding Steve Jobs. He had previously been named acting chief after Jobs began medical leave in January 2011. In early 2012, he was awarded compensation of one million shares, vesting in 2016 and 2021, by Apple's board of directors.")
  })
})
