var { Sulfuras } = require("../src/js/sulfuras.js");

describe("Sulfuras items", function () {
	it("Sulfuras a toujours 80 points de qualité", function () {
		var sulfuras = new Sulfuras("Aged Brie", 11, 50);
		sulfuras.updateQuality();
		expect(sulfuras.quality).toBe(80);
	});
});

describe("Sulfuras items", function () {
	it("Sulfuras n'as pas de date de peremption", function () {
		var sulfuras = new Sulfuras("Aged Brie", 30, 50);
		sulfuras.updateQuality();
		expect(sulfuras.sellin).toBe(undefined);
	});
});
