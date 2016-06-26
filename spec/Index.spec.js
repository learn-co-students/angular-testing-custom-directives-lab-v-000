describe('UserProfile Test', function() {
    browser.get('http://localhost:8080');

    var name = element(by.css('.user h4'));
    var position = element(by.css('.user h6'));
    var description = element(by.css('.user p'));

    it('should properly display name', function () {
        expect(name.getInnerHtml()).toEqual('Name: Bill Gates');
    });

    it('should properly display position', function () {
        expect(position.getInnerHtml()).toEqual('Position: Chairman, Microsoft');
    });

    it('should properly display position', function () {
        expect(description.getInnerHtml()).toEqual('Description: William Henry "Bill" Gates III (born October 28, 1955) is an American business magnate, philanthropist, investor, and computer programmer. In 1975, Gates and Paul Allen co-founded Microsoft, which became the world\'s largest PC software company. During his career at Microsoft, Gates held the positions of chairman, CEO and chief software architect, and was the largest individual shareholder until May 2014. Gates has authored and co-authored several books.');
    });

});
