var { NormalItem } = require("../src/js/normalitem.js");
describe("Normal item", function () {
	it("Augementer de 1 la qualité et sellIn d'item normaux", function () {
		var coco = new NormalItem("Mana", 10, 20);

		expect(upgradeQuality(coco)).toBe("Mana", 11, 22);
	});
});
