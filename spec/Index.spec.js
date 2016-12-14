describe('UserProfile', function(){
  browser.get('http://localhost:8080')

  it('transcludes name, position, and description while prepending with category title', function(){
    var user_prof = element.all(by.css('user-profile'));
    expect(user_prof.get(0).getText()).toContain('Name:\nBill');
    expect(user_prof.get(1).getText()).toContain('Name:\nTim');
    expect(user_prof.get(0).getText()).toContain('Position:\nChairman');
    expect(user_prof.get(1).getText()).toContain('Description:\nTimothy Donald');
  });
});