import { GildedRose, Item } from "../app/gilded-rose";
import { expect } from "chai";

/**
 * Testing, for each item type, if values are correct after some iterations
 */
describe("Gilded Rose Update Tests", () => {
    it("check Aged Brie update", () => {
        var originalItems: Array<Item> = [
            {
                name: "Aged Brie",
                quality: 24,
                sellIn: 5,  
            },
        ];

        var gildedRose = new GildedRose(originalItems);

        for (let i = 0; i < 7; i++) {
            gildedRose.updateQuality();
        }

        expect(gildedRose.items[0].quality).to.equal(33);
        expect(gildedRose.items[0].sellIn).to.equal(0);
    });

    it("check Sulfuras update", () => {
        var originalItems: Array<Item> = [
            {
                name: "Sulfuras, Hand of Ragnaros",
                quality: 80,
                sellIn: 0,
            },
        ];

        var gildedRose = new GildedRose(originalItems);

        gildedRose.updateQuality();

        expect(gildedRose.items[0].quality).to.equal(80);
        expect(gildedRose.items[0].sellIn).to.equal(0);
    });

    it("check Backstage update", () => {
        var originalItems: Array<Item> = [
            {
                name: "Backstage passes to a TAFKAL80ETC concert",
                quality: 10,
                sellIn: 14,
            },
        ];

        var gildedRose = new GildedRose(originalItems);

        for (let i = 0; i < 10; i++) {
            gildedRose.updateQuality();
        }

        expect(gildedRose.items[0].quality).to.equal(27);
        expect(gildedRose.items[0].sellIn).to.equal(4);
    });

    it("check Conjured update", () => {
        var originalItems: Array<Item> = [
            {
                name: "Conjured",
                quality: 30,
                sellIn: 3,
            },
        ];

        var gildedRose = new GildedRose(originalItems);

        for (let i = 0; i < 4; i++) {
            gildedRose.updateQuality();
        }

        expect(gildedRose.items[0].quality).to.equal(20);
        expect(gildedRose.items[0].sellIn).to.equal(0);
    });

    it("check regular update", () => {
        var originalItems: Array<Item> = [
            {
                name: "Regular",
                quality: 5,
                sellIn: 2,
            },
        ];

        var gildedRose = new GildedRose(originalItems);

        for (let i = 0; i < 4; i++) {
            gildedRose.updateQuality();
        }

        expect(gildedRose.items[0].quality).to.equal(0);
        expect(gildedRose.items[0].sellIn).to.equal(0);
    });
});
