var { ConjuredItem } = require("../src/js/conjured.js");

describe("Conjured items", function () {
	it("Prefixe to add Conjured", function () {
		var conjured = new ConjuredItem("Mana", 11, 20);
		conjured.updateQuality();
		expect(conjured.name).toBe("Conjured Mana");
	});
});

// describe("Conjured items", function () {
// 	it("La qualité dégrade de 2 points avant la date de péremption", function () {
// 		var conjured = new ConjuredItem("Mana", 11, 20);
// 		conjured.updateQuality();
// 		expect(conjured.quality).toBe("18");
// 	});
// });

describe("Conjured items", function () {
	it("La qualité n'a jamais plus de 50 points", function () {
		var conjured = new ConjuredItem("Mana", 11, 52);
		conjured.updateQuality();
		expect(conjured.quality).toBe("50");
	});
});
