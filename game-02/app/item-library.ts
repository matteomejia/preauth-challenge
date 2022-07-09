// This file contains the classes for every item recognized by the system
// The update method is defined in every class to allow per-item logic
// If the name string is fixed for every or some items, it could be
// added as a default value, but it would make the behaviours unequal.

abstract class Item {
    name: string;
    sellIn: number; // number of days we have to sell the item
    quality: number; // how valuable the item is

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

    abstract update(): void;
}

class RegularItem extends Item {
    constructor(name, sellIn, quality) {
        super(name, sellIn, quality);
    }

    update(): void {
        var factor: number = this.sellIn === 0 ? 2 : 1;
        this.quality = Math.max(0, this.quality - factor);
        this.sellIn = Math.max(0, this.sellIn - 1);
    }
}

class AgedBrieItem extends Item {
    constructor(name, sellIn, quality) {
        super(name, sellIn, quality);
    }

    update(): void {
        var factor: number = this.sellIn === 0 ? 2 : 1;
        this.quality = Math.min(50, this.quality + factor);
        this.sellIn = Math.max(0, this.sellIn - 1);
    }
}

class SulfurasItem extends Item {
    constructor(name, sellIn, quality) {
        super(name, sellIn, quality);
    }

    update(): void {}
}

class BackstagePassItem extends Item {
    constructor(name, sellIn, quality) {
        super(name, sellIn, quality);
    }

    update(): void {
        if (this.sellIn === 0) {
            return;
        }

        var factor: number = 1;

        if (this.sellIn <= 10) factor = 2;
        if (this.sellIn <= 5) factor = 3;

        this.quality = Math.min(50, this.quality + factor);
        this.sellIn = Math.max(0, this.sellIn - 1);

        if (this.sellIn === 0) {
            this.quality = 0;
        }
    }
}

class ConjuredItem extends Item {
    constructor(name, sellIn, quality) {
        super(name, sellIn, quality);
    }

    update(): void {
        var factor: number = this.sellIn === 0 ? 4 : 2;
        this.quality = Math.max(0, this.quality - factor);
        this.sellIn = Math.max(0, this.sellIn - 1);
    }
}

export {
    Item,
    RegularItem,
    AgedBrieItem,
    SulfurasItem,
    BackstagePassItem,
    ConjuredItem,
};
