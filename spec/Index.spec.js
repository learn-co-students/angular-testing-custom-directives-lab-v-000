describe('UserProfile Test', function(){
  browser.get('http://localhost:8080');

  var userProfiles = element.all(by.css('user-profile'));

  it('should display the userProfile', function(){
    expect(userProfiles.get(0))
  });

  it('should display the name in the directive', function(){
    expect(userProfiles.get(0).getText()).toContain('Name:')
    expect(userProfiles.get(1).getText()).toContain('Tim Cook')
  });

  it('should display the position in the directive', function(){
    expect(userProfiles.get(0).getText()).toContain('Position:')
    expect(userProfiles.get(1).getText()).toContain('CEO')
  });

  it('should display the description in the directive', function(){
    expect(userProfiles.get(0).getText()).toContain('Description:')
    expect(userProfiles.get(1).getText()).toContain("Timothy Donald \"Tim\" Cook (born November 1, 1960) is an American business executive, and is the Chief Executive Officer of Apple Inc., previously serving as Chief Operating Officer. Cook joined Apple in March 1998 as senior vice president of worldwide operations and then served as Executive Vice President of worldwide sales and operations. He was made Chief Executive on August 24, 2011, succeeding Steve Jobs. He had previously been named acting chief after Jobs began medical leave in January 2011. In early 2012, he was awarded compensation of one million shares, vesting in 2016 and 2021, by Apple's board of directors.")
  });


})