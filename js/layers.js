addLayer("p", {
    name: "grow Red Pikmin", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "RP", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0), // Starting amount
    }},
    color: "#4BDC13",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Red Pikmin", // Name of prestige currency
    baseResource: "pellets", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('x', 11)) mult = mult.times(2)
        if (hasUpgrade('x', 12)) mult = mult.times(3)
        if (hasUpgrade('x', 13)) mult = mult.times(4)
        if (hasUpgrade('x', 14)) mult = mult.times(upgradeEffect('x', 14))
        if (hasUpgrade('x', 15)) mult = mult.times(2)
        if (hasUpgrade('x', 16)) mult = mult.times(upgradeEffect('x', 16))
        if (player.x.unlocked) mult = mult.times(tmp.x.effect.cat)
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
                return player[this.layer].points.add(4).pow(0.1)
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
                return player[this.layer].points.add(4).pow(0.1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x*2" }
        }
    }
})
addLayer("q", {
    name: "grow Red Onions", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "0", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0), // Starting amount
    }},
    color: "#4BDCFF",
    requires: new Decimal(400), // Can be a function that takes requirement increases into account
    resource: "Red Onion", // Name of prestige currency
    baseResource: "red pikmin", // Name of resource prestige is based on
    baseAmount() {return player.p.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    canBuyMax: true,
    exponent: 1, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "o", description: "P: Lose everyone to find new onions", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        11: {
            title: "first tribute",
            description: "Double your pellet gain.",
            cost: new Decimal(1)
        },
        12: {
            title: "Systematic overworking",
            description: "Double your pellet gain.",
            cost: new Decimal(2)
        },
        13: {
            title: "Conquer dangerous places.",
            description: "Guess what, double your pellet gain.",
            cost: new Decimal(4)
        },
        14: {
            title: "Examine fruit.",
            description: "This is different, but still boosts your pellet gain.",
            cost: new Decimal(9),
            effect() {
                return player[this.layer].points.add(2).pow(0.25)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }
        },
        15: {
            title: "Avoid the water.",
            description: "This will triple your pellet gain.",
            cost: new Decimal(50)
        },
        16: {
            title: "Supremacy.",
            description: "Simply worth trying.",
            cost: new Decimal(200),
            effect() {
                return player[this.layer].points.add(2).pow(0.25)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x*2" }
        }
    }
})

addLayer("x", {
    name: "grow Buds", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "B", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0), // Starting amount
    }},
    color: "#FFDCFF",
    requires: new Decimal(315), // Can be a function that takes requirement increases into account
    resource: "Red Buds", // Name of prestige currency
    baseResource: "red pikmin", // Name of resource prestige is based on
    baseAmount() {return player.p.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1.25, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(.5)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "o", description: "P: Lose you pellets to grow red pikmin", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    effect() {
        return {  cat: player[this.layer].points.add(1).pow(0.33)
    }},
    effectDescription() { // Optional text to describe the effects
        eff = this.effect();
        return "which are boosting red pikmin by "+format(eff.cat)
    },
    upgrades: {
        11: {
            title: "budding pikmin",
            description: "",
            cost: new Decimal(1)
        },
        12: {
            title: "proper pollination",
            description: "",
            cost: new Decimal(2)
        },
        13: {
            title: "budding religion.",
            description: "Opens blind hope.",
            cost: new Decimal(4)
        },
        14: {
            title: "Study buds.",
            description: ".",
            cost: new Decimal(9),
            effect() {
                return player[this.layer].points.add(1).pow(0.33)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }
        },
        15: {
            title: "worship 101",
            description: "This will triple your pellet gain... and maybe your IQ.",
            cost: new Decimal(100)
        },
        16: {
            title: "Advanced scacrifice",
            description: "",
            cost: new Decimal(200),
            effect() {
                return player[this.layer].points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x*2" }
        }
    }
})

    addLayer("w", {
        name: "worship", // This is optional, only used in a few places, If absent it just uses the layer id.
        symbol: "W", // This appears on the layer's node. Default is the id with the first letter capitalized
        position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
        startData() { return {
            unlocked: true,
            points: new Decimal(0), // Starting amount
        }},
        unlocked() { if (hasUpgrade("x", 13)) return true},
        layerShown() {return hasUpgrade("x", 13)},
        color: "#FFDCFF",
        requires: new Decimal(315), // Can be a function that takes requirement increases into account
        resource: "Red Buds", // Name of prestige currency
        baseResource: "red pikmin", // Name of resource prestige is based on
        baseAmount() {return player.points}, // Get the current amount of baseResource
        type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
        exponent: 1.25, // Prestige currency exponent
        gainMult() { // Calculate the multiplier for main currency from bonuses
            mult = new Decimal(1)
            return mult
        },
        gainExp() { // Calculate the exponent on main currency from bonuses
            return new Decimal(.5)
        },
        row: 0, // Row the layer is in on the tree (0 is the first row)
        hotkeys: [
            {key: "o", description: "P: Lose you pellets to grow red pikmin", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
        ],
        layerShown(){return true},
        effect() {
            return {  cat: player[this.layer].points.add(1).pow(0.33)
        }},
        effectDescription() { // Optional text to describe the effects
            eff = this.effect();
            return "which are boosting red pikmin by "+format(eff.cat)
        },
        upgrades: {
            11: {
                title: "budding pikmin",
                description: "",
                cost: new Decimal(1)
            },
            12: {
                title: "proper pollination",
                description: "",
                cost: new Decimal(2)
            },
            13: {
                title: "budding religion.",
                description: "Opens blind hope.",
                cost: new Decimal(4)
            },
            14: {
                title: "Study buds.",
                description: ".",
                cost: new Decimal(9),
                effect() {
                    return player[this.layer].points.add(1).pow(0.33)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }
            },
            15: {
                title: "worship 101",
                description: "This will triple your pellet gain... and maybe your IQ.",
                cost: new Decimal(100)
            },
            16: {
                title: "Advanced scacrifice",
                description: "",
                cost: new Decimal(200),
                effect() {
                    return player[this.layer].points.add(1).pow(0.5)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x*2" }
            }
        }
    
})
