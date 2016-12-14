describe('UserProfile', function() {
  browser.get('http://localhost:8080')

  it('uses slot transclusion for name, position, and description', function(){
    var users = element.all(by.css('user-profile'));
    expect(users.get(0).getText()).toContain('Name:\nBill');
    expect(users.get(1).getText()).toContain('Name:\nTim');
    expect(users.get(0).getText()).toContain('Position:\nChairman');
    expect(users.get(1).getText()).toContain('Description:\nTimothy Donald');
  });
})
