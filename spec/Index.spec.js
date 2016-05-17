describe("UserProfile directive", function() {
	browser.get("http://localhost:8080");

	var profiles = element.all(by.css('.user'));

	it('make sure information is displayed correctly', function() {
		expect(profiles.get(0).getText()).toContain("Name:");
		expect(profiles.get(0).getText()).toContain("Position:");
		expect(profiles.get(0).getText()).toContain("Description:");
	});
})