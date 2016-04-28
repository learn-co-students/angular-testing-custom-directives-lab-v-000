describe('Directive Test', function() {
    browser.get('http://localhost:8080');

    var ele= element.all(by.css('h4.ng-scope'));
    var position = element.all(by.css('h6.ng-scope'));
    var description = element.all(by.css('p.ng-scope'));

    it('should have a name', function () {
        expect(ele.get(0).getText()).toEqual('Bill Gates');
        expect(ele.get(1).getText()).toEqual('Tim Cook');
    });

    it('should have a position', function () {
        expect(position.get(0).getText()).toEqual('Chairman, Microsoft');
        expect(position.get(1).getText()).toEqual('CEO, Apple');
    });

    it('should have a description', function () {
        expect(description.get(0).getText()).toEqual('William Henry "Bill" Gates III (born October 28, 1955) is an American business magnate, philanthropist, investor, and computer programmer. In 1975, Gates and Paul Allen co-founded Microsoft, which became the world\'s largest PC software company. During his career at Microsoft, Gates held the positions of chairman, CEO and chief software architect, and was the largest individual shareholder until May 2014. Gates has authored and co-authored several books.');
    });



});
