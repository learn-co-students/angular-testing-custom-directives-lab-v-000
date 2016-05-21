describe('Directive Test', function() {
  browser.get('http://localhost:8080');

  it('should render "Name:" above the name', function () {
    var name = element.all(by.css('div .user div')).get(0);
    var name_span = element.all(by.css('div .user div')).get(0).element(by.tagName('span'));

    expect(name.getText()).toContain('Name:');
    expect(name_span.getText()).toContain('Bill Gates');
  });

  it('should render "Position:" above position', function () {
    var pos = element.all(by.css('div .user div')).get(1);
    var pos_span = element.all(by.css('div .user div')).get(1).element(by.tagName('span'));

    expect(pos.getText()).toContain('Position:');
    expect(pos_span.getText()).toContain('Chairman, Microsoft');
  });

  it('should render "Biography:" above the biography', function () {
    var bio = element.all(by.css('div .user div')).get(2);
    var bio_span = element.all(by.css('div .user div')).get(2).element(by.tagName('span'));

    expect(bio.getText()).toContain('Biography:');
    expect(bio_span.getText()).toContain('born October 28, 1955');
  });

});
