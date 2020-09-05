export default {
    details: {
        name: 'Chauncey',
        image: 'https://firebasestorage.googleapis.com/v0/b/ecompanion-fda17.appspot.com/o/chauncey.png?alt=media&token=4acd6e73-cfcd-4e07-9adf-84ca4abdd646',
        level: 3,
        ancestry: 'Human',
        heritage: 'Skilled',
        class: 'Champion',
        background: 'Guard',
        size: 'Medium',
        alignment: 'LG',
        deity: 'Torag',
        ethnicity: '',
        nationality: '',
        birthplace: '',
        age: 0,
        gender: 'Male',
        height: '',
        weight: '',
        appearance: '',
        attitude: '',
        beliefs: '',
        likes: '',
        dislikes: '',
        catchphrases: '',
        notes: []
    },
    inventory: {
        bulk: { current: 8, max: 14 },
        money: {
            cp: 6,
            sp: 25,
            gp: 32,
            pp: 0,
        },
        other: [
            { title: 'Harrow Card', bulk: 0, qty: 1 },
            { title: 'Repair Kit', bulk: 1, qty: 1 },
            { title: 'Mugs', bulk: 0, qty: 5 },
            { title: 'Explorer\'s Clothes', bulk: 0, qty: 1 },
            { title: 'Silver Sheen', bulk: 0.1, qty: 1 },
            { title: 'Gold Ring', bulk: 0, qty: 1 },
            { title: 'Ladder (10ft)', bulk: 3, qty: 1 },
            { title: 'Adamantine Arrowhead', bulk: 0, qty: 1 },
        ],
        readied: [],
        worn: [
            { title: 'Breastplate', bulk: 2, qty: 1 },
            { title: 'Steel Shield', bulk: 1, qty: 1 },
            { title: 'Warhammer', bulk: 1, qty: 1 },
        ]
    },
    spells: {
        tradition: '',
        casterType: '',
        key: { 
            title: '',
            value: 0,
        },
        prof: {
            title: '',
            value: 0,
        },
        slots: [],
        innate: [],
        focus: {
            points: {current: 0, max: 0},
            spells: []
        },
        cantrips: [],
        spells: [],
        item: []
    },
    feats: {
        ancestry: [
            {
                name: 'General Training',
                type: 'Ancestry',
                level: '',
                traits: [],
                trigger: '',
                action: '',
                description: 'You gain a 1st-level general feat.'
            },
        ],
        class: [
            {
                name: 'Deific Weapon',
                type: 'Class Feature',
                level: '',
                traits: [],
                trigger: '',
                action: '',
                description: 'Gain access to warhammers.'
            },
            {
                name: 'Deity\'s Domain',
                type: 'Class',
                level: '',
                traits: [],
                trigger: '',
                action: '',
                description: 'You embody an aspect of your deity. Choose one of your deity’s domains from those listed on page 441. You gain the domain’s initial domain spell as a devotion spell.'
            },
            {
                name: 'Vengeful Oath',
                type: 'Class',
                level: '2nd',
                traits: ['Champion', 'Oath'],
                trigger: '',
                requirements: '',
                action: '',
                description: 'You’ve sworn an oath to hunt down wicked evildoers and bring them to judgment. Add the following tenet to your code after the others: “You must hunt down and exterminate evil creatures that have committed heinous atrocities as long as you have a reasonable chance of success and aren’t engaged in a mission that would prevent your doing so.” You can use lay on hands to damage a creature you witness harming an innocent or a good ally as if it were undead; in this case, lay on hands deals good damage instead of positive damage and gains the good trait. This good damage can affect non-evil creatures. This doesn’t prevent you from healing such a creature with lay on hands; you choose whether to heal or harm.'
            },
            {
                name: 'Divine Ally',
                type: 'Class Feature',
                level: '1st',
                traits: [''],
                trigger: '',
                requirements: '',
                action: '',
                description: 'Shield Ally: A spirit of protection dwells within your shield. In your hands, the shield\'s Hardness increases by 2 and its HP and BT increase by half.'
            },
        ],
        general: [
            {
                name: 'Canny Acumen',
                type: '1st',
                level: '',
                traits: ['General'],
                trigger: '',
                action: '',
                description: 'Your avoidance or observation is beyond the ken of most in your profession. Choose Fortitude saves, Reflex saves, Will saves, or Perception. You become an expert in your choice  (WILL). At 17th level, you become a master in your choice.'
            },
            {
                name: 'Incredible Initiative',
                type: '1st',
                level: '',
                traits: ['General'],
                trigger: '',
                action: '',
                description: 'You react more quickly than others can. You gain a +2 circumstance bonus to initiative rolls.'
            },
        ],
        skill: [
            {
                name: 'Intimidating Glare',
                type: 'Intimidation',
                level: '1st',
                traits: ['General', 'Skill'],
                trigger: '',
                action: '',
                description: 'You can Demoralize with a mere glare. When you do, Demoralize loses the auditory trait and gains the visual trait, and you don’t take a penalty if the creature doesn’t understand your language.'
            },
        ],
    },
    skills: [
        { title: 'Acrobatics', mod: { title: 'DEX', value: 1 }, prof: { title: '', value: 0 }, item: 0, temp: 0, total: 4 },
        { title: 'Arcana', mod: { title: 'INT', value: 0 }, prof: { title: '', value: 0 }, item: 0, temp: 0, total: 0 },
        { title: 'Athletics', mod: { title: 'STR', value: 4 }, prof: { title: 'T', value: 5 }, item: 0, temp: 0, total: 6 },
        { title: 'Crafting', mod: { title: 'INT', value: 0 }, prof: { title: 'E', value: 7 }, item: 0, temp: 0, total: 0 },
        { title: 'Deception', mod: { title: 'CHA', value: 3 }, prof: { title: '', value: 0 }, item: 0, temp: 0, total: 1 },
        { title: 'Diplomacy', mod: { title: 'CHA', value: 3 }, prof: { title: 'T', value: 5 }, item: 0, temp: 0, total: 1 },
        { title: 'Intimidation', mod: { title: 'CHA', value: 3 }, prof: { title: 'T', value: 5 }, item: 0, temp: 0, total: 8 },
        { title: 'Medicine', mod: { title: 'WIS', value: 0 }, prof: { title: '', value: 0 }, item: 0, temp: 0, total: 1 },
        { title: 'Nature', mod: { title: 'WIS', value: 0 }, prof: { title: '', value: 0 }, item: 0, temp: 0, total: 1 },
        { title: 'Occultism', mod: { title: 'INT', value: 0 }, prof: { title: '', value: 0 }, item: 0, temp: 0, total: 0 },
        { title: 'Performance', mod: { title: 'CHA', value: 3 }, prof: { title: '', value: 0 }, item: 0, temp: 0, total: 1 },
        { title: 'Religion', mod: { title: 'WIS', value: 0 }, prof: { title: 'T', value: 5 }, item: 0, temp: 0, total: 6 },
        { title: 'Society', mod: { title: 'INT', value: 0 }, prof: { title: '', value: 0 }, item: 0, temp: 0, total: 0 },
        { title: 'Stealth', mod: { title: 'DEX', value: 1 }, prof: { title: '', value: 0 }, item: 0, temp: 0, total: 4 },
        { title: 'Survival', mod: { title: 'WIS', value: 0 }, prof: { title: '', value: 0 }, item: 0, temp: 0, total: 6 },
        { title: 'Thievery', mod: { title: 'DEX', value: 1 }, prof: { title: '', value: 0 }, item: 0, temp: 0, total: 9 },
        { title: 'Legal Lore', mod: { title: 'INT', value: 0 }, prof: { title: 'T', value: 5 }, item: 0, temp: 0, total: 5 },
    ],
    character: {
        hp: {current: 41, max: 41},
        xp: 150,
        conditions: [],
        dying: 0,
        wounded: 0,
        abilityScores: [
            { title: 'STR', value: 18 },
            { title: 'DEX', value: 12 },
            { title: 'CON', value: 12 },
            { title: 'INT', value: 10 },
            { title: 'WIS', value: 10 },
            { title: 'CHA', value: 16 }
        ],
        classDC: {
            mod: { title: 'STR', value: 4 },
            prof: { title: 'T', value: 5 },
            item: 0,
            temp: 0
        },
        movement: {
            speed: 30,
            types: [],
        },
        armor: {
            mod: { title: 'DEX', value: 1 },
            prof: { title: 'T', value: 5 },
            item: 4,
            temp: 0
        },
        shield: {
            bonus: 0,
            temp: 0,
            hardness: 7,
            bt: 15,
            hp: {current: 30, max: 30}
        },
        saves: [
            {
                title: 'Fortitude',
                prof: 'E',
                value: 8
            },
            {
                title: 'Reflex',
                prof: 'T',
                value: 6
            },
            {
                title: 'Will',
                prof: 'E',
                value: 7
            }
        ],
        perception: {
            mod: { title: 'WIS', value: 0 },
            prof: { title: 'E', value: 7 },
            item: 0,
            temp: 0,
            initiativeBonus: 2,
            senses: []
        },
        melee:[
            {
                name: 'Warhammer',
                mod: { title: 'STR', value: 4 },
                prof: { title: 'T', value: 5 },
                item: 0,
                temp: 0,
                dmg: '1d8+4',
                dmgType: ['Bludgeoning'],
                traits: ['Shove'],
            },
            {
                name: 'Unarmed',
                mod: { title: 'STR', value: 4 },
                prof: { title: 'T', value: 5 },
                item: 0,
                temp: 0,
                dmg: '1d4+4',
                dmgType: ['Bludgeoning'],
                traits: ['Agile', 'Finesse', 'Nonlethal'],
            },
        ],
        ranged: [
            {
                name: 'Dar',
                mod: { title: 'DEX', value: 1 },
                prof: { title: 'T', value: 5 },
                item: 0,
                temp: 0,
                dmg: '1d4',
                dmgType: ['Piercing'],
                traits: ['100 ft range'],
            },
        ],
        weaponProf: {
            simple: 'Trained',
            martial: 'Trained',    
            other: [],
            unarmed: 'Trained'
        } 
    }
}