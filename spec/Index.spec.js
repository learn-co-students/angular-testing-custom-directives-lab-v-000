describe('Directive Test', function() {
    browser.get('http://localhost:8080');
 
    var name = element(by.css('#name'));
    var position = element(by.css('#position'));
    var description = element(by.css('#desc'));
    
    var longText = "William Henry 'Bill' Gates III (born October 28, 1955) is an American business magnate, philanthropist, investor, and computer programmer. In 1975, Gates and Paul Allen co-founded Microsoft, which became the world's largest PC software company. During his career at Microsoft, Gates held the positions of chairman, CEO and chief software architect, and was the largest individual shareholder until May 2014. Gates has authored and co-authored several books."
    it('it should render name, position and description correctly', function () {
        expect(name.getText()).toEqual('Name:\nBill Gates');
        expect(position.getText()).toEqual('Position:\nChairman, Microsoft');
        expect(description.getText()).toEqual('Description:\n' + longText);
    });
 
});

// Inside this repo, we have a user profile which is transcluded to have labels above the necessary fields. 
// This time, our directive is functioning properly - 
// it's your job to add the tests!
// Write a protractor test to make sure that the correct content is put into the correct place. 
// Your test should verify that name, position and description are all rendered above the correct elements.