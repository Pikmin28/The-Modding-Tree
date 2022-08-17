addLayer("p", {
    name: "grow red pikmin", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "RP", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0), // Starting amount
    }},
    color: "#4BDC13",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "red pikmin", // Name of prestige currency
    baseResource: "pellets", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Lose you pellets to grow red pikmin", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        11: {
            title: "Send your red pikmin to collect pellets",
            description: "Double your pellet gain.",
            cost: new Decimal(1)
        },
        12: {
            title: "Pikmin overworking",
            description: "Double your pellet gain again.",
            cost: new Decimal(2)
        },
        13: {
            title: "Send your pikmin to dangerous places.",
            description: "Guess what, double your pellet gain.",
            cost: new Decimal(4)
        },
        14: {
            title: "Send your red pikmin to the fire zone.",
            description: "This is different, but still boosts your pellet gain.",
            cost: new Decimal(9),
            effect() {
                return player[this.layer].points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }
        },
        15: {
            title: "Send your red pikmin to the pellets actual location.",
            description: "This will triple your pellet gain... and maybe your IQ.",
            cost: new Decimal(19)
        },
        16: {
            title: "Send yourself to the fire zone.",
            description: "This is worth trying, but it's slightly more worrisome.",
            cost: new Decimal(200),
            effect() {
                return player[this.layer].points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x*2" }
        }
    }
})
addLayer("q", {
    name: "grow red Onions", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "0", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0), // Starting amount
    }},
    color: "#4BDCFF",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "red Onion", // Name of prestige currency
    baseResource: "red pikmin", // Name of resource prestige is based on
    baseAmount() {return player.p.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: .4, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "o", description: "P: Lose you pellets to grow red pikmin", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        20: {
            title: "Send your red pikmin to collect pellets",
            description: "Double your pellet gain.",
            cost: new Decimal(1)
        },
        21: {
            title: "Pikmin overworking",
            description: "Double your pellet gain again.",
            cost: new Decimal(2)
        },
        22: {
            title: "Send your pikmin to dangerous places.",
            description: "Guess what, double your pellet gain.",
            cost: new Decimal(4)
        },
        23: {
            title: "Send your red pikmin to the fire zone.",
            description: "This is different, but still boosts your pellet gain.",
            cost: new Decimal(9),
            effect() {
                return player[this.layer].points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }
        },
        24: {
            title: "Send your red pikmin to the pellets actual location.",
            description: "This will triple your pellet gain... and maybe your IQ.",
            cost: new Decimal(19)
        },
        25: {
            title: "Send yourself to the fire zone.",
            description: "This is worth trying, but it's slightly more worrisome.",
            cost: new Decimal(200),
            effect() {
                return player[this.layer].points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x*2" }
        }
    }
})

addLayer("x", {
    name: "grow buds", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "b", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0), // Starting amount
    }},
    color: "#FFDCFF",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "red Onion", // Name of prestige currency
    baseResource: "red pikmin", // Name of resource prestige is based on
    baseAmount() {return player.p.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: .4, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "o", description: "P: Lose you pellets to grow red pikmin", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        30: {
            title: "Send your red pikmin to collect pellets",
            description: "Double your pellet gain.",
            cost: new Decimal(1)
        },
        31: {
            title: "Pikmin overworking",
            description: "Double your pellet gain again.",
            cost: new Decimal(2)
        },
        32: {
            title: "Send your pikmin to dangerous places.",
            description: "Guess what, double your pellet gain.",
            cost: new Decimal(4)
        },
        33: {
            title: "Send your red pikmin to the fire zone.",
            description: "This is different, but still boosts your pellet gain.",
            cost: new Decimal(9),
            effect() {
                return player[this.layer].points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }
        },
        34: {
            title: "Send your red pikmin to the pellets actual location.",
            description: "This will triple your pellet gain... and maybe your IQ.",
            cost: new Decimal(19)
        },
        35: {
            title: "Send yourself to the fire zone.",
            description: "This is worth trying, but it's slightly more worrisome.",
            cost: new Decimal(200),
            effect() {
                return player[this.layer].points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x*2" }
        }
    }
})
