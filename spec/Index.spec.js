describe('User Profile', function(){
  browser.get('http://localhost:8080');
  
  var users = element.all(by.css('user-profile'));
    
  var bill = users.get(0);
  var steve = users.get(1);
  
  it('should display info correctly for Bill', function(){
    
    expect(bill.getText()).toContain('Name:');
    expect(bill.getText()).toContain('Bill Gates');
    expect(bill.getText()).toContain('Position:');
    expect(bill.getText()).toContain('Chairman, Microsoft');
    expect(bill.getText()).toContain('Description:');
    expect(bill.getText()).toContain('William Henry "Bill" Gates III (born October 28, 1955) is an American business magnate, philanthropist, investor, and computer programmer. In 1975, Gates and Paul Allen co-founded Microsoft, which became the world\'s largest PC software company. During his career at Microsoft, Gates held the positions of chairman, CEO and chief software architect, and was the largest individual shareholder until May 2014. Gates has authored and co-authored several books.');
  });
  
  it('should display info correctly for Tim', function(){
    expect(steve.getText()).toContain('Name:');
    expect(steve.getText()).toContain('Tim Cook');
    expect(steve.getText()).toContain('Position:');
    expect(steve.getText()).toContain('CEO, Apple');
    expect(steve.getText()).toContain('Description');
    expect(steve.getText()).toContain("Timothy Donald \"Tim\" Cook (born November 1, 1960) is an American business executive, and is the Chief Executive Officer of Apple Inc., previously serving as Chief Operating Officer. Cook joined Apple in March 1998 as senior vice president of worldwide operations and then served as Executive Vice President of worldwide sales and operations. He was made Chief Executive on August 24, 2011, succeeding Steve Jobs. He had previously been named acting chief after Jobs began medical leave in January 2011. In early 2012, he was awarded compensation of one million shares, vesting in 2016 and 2021, by Apple's board of directors.");
  });
})