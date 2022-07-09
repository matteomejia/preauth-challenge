import {
    RegularItem,
    AgedBrieItem,
    SulfurasItem,
    BackstagePassItem,
    ConjuredItem,
} from "../app/item-library";
import { GildedRose } from "../app/gilded-rose";
import { expect } from "chai";

/**
 * Testing, for each item type, if values are correct after some iterations
 */
describe("Gilded Rose Update Tests", () => {
    it("check Aged Brie update", () => {
        var agedBrieItem = new AgedBrieItem("Aged Brie", 5, 24);

        var gildedRose = new GildedRose([agedBrieItem]);

        for (let i = 0; i < 7; i++) {
            gildedRose.updateQuality();
        }

        expect(gildedRose.items[0].quality).to.equal(33);
        expect(gildedRose.items[0].sellIn).to.equal(0);
    });

    it("check Sulfuras update", () => {
        var sulfurasItem = new SulfurasItem(
            "Sulfuras, Hand of Ragnaros",
            0,
            80
        );

        var gildedRose = new GildedRose([sulfurasItem]);

        gildedRose.updateQuality();

        expect(gildedRose.items[0].quality).to.equal(80);
        expect(gildedRose.items[0].sellIn).to.equal(0);
    });

    it("check Backstage update", () => {
        var backstagePassItem = new BackstagePassItem(
            "Backstage passes to a TAFKAL80ETC concert",
            14,
            10
        );

        var gildedRose = new GildedRose([backstagePassItem]);

        for (let i = 0; i < 10; i++) {
            gildedRose.updateQuality();
        }

        expect(gildedRose.items[0].quality).to.equal(27);
        expect(gildedRose.items[0].sellIn).to.equal(4);
    });

    it("check Conjured update", () => {
        var conjuredItem = new ConjuredItem("Conjured", 3, 30);

        var gildedRose = new GildedRose([conjuredItem]);

        for (let i = 0; i < 4; i++) {
            gildedRose.updateQuality();
        }

        expect(gildedRose.items[0].quality).to.equal(20);
        expect(gildedRose.items[0].sellIn).to.equal(0);
    });

    it("check regular update", () => {
        var regularItem = new RegularItem("Regular", 2, 5);

        var gildedRose = new GildedRose([regularItem]);

        for (let i = 0; i < 4; i++) {
            gildedRose.updateQuality();
        }

        expect(gildedRose.items[0].quality).to.equal(0);
        expect(gildedRose.items[0].sellIn).to.equal(0);
    });
});
