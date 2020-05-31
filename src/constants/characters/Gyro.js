export default {
    details: {
        name: 'Gyro',
        image: '',
        level: 3,
        ancestry: 'Halfling',
        heritage: 'Nomadic',
        class: 'Fighter',
        background: 'Unhappy Childhood',
        size: 'Small',
        alignment: 'CG',
        deity: 'Cayden Cailean',
        ethnicity: '',
        nationality: '',
        birthplace: '',
        age: 27,
        gender: 'Male',
        height: '34"',
        weight: '44 lb',
        appearance: 'Old for his age, nose a bit crooked, dark circles, pretty ripped for a halfling',
        attitude: 'Positive, hospitable, friendly, jovial, but also can be brooding and dark',
        beliefs: 'Freedom, Cayden Cailean',
        likes: 'Ale, Wine, Brandy',
        dislikes: 'Slavery, beatings, greed',
        catchphrases: 'String',
        notes: []
    },
    inventory: {
        bulk: { current: 6, max: 11 },
        money: {
            cp: 0,
            sp: 4,
            gp: 11,
            pp: 0,
        },
        other: [
            { title: 'Sling Bullets', bulk: 0.1, qty: 20 },
            { title: 'Mugs', bulk: 0, qty: 5 },
            { title: 'Bedroll', bulk: 0.1, qty: 1 },
            { title: 'Rations', bulk: 0.1, qty: 1 },
            { title: 'Soap', bulk: 0, qty: 1 },
            { title: 'Torches', bulk: 0.5, qty: 5 },
            { title: 'Waterskin', bulk: 0.1, qty: 1 },
            { title: 'Silver Dagger', bulk: 0.1, qty: 1 },
            { title: 'Gaedren\s Ledger', bulk: 0, qty: 1 },
            { title: 'Composite Longbow', bulk: 2, qty: 1 },
            { title: '50 ft rope', bulk: 0, qty: 1 },
        ],
        readied: [
            { title: 'Signal Whistle', bulk: 0, qty: 1 },
            { title: 'Thieve\'s Tools', bulk: 0.1, qty: 1 },
            { title: 'Sling Bullets', bulk: 0.1, qty: 24 },
            { title: 'Lesser Healing Potion', bulk: 0.1, qty: 1 },
            { title: 'Minor Healing Potion', bulk: 0.1, qty: 1 },
            { title: 'Arrows', bulk: 0, qty: 30 },
            { title: 'Masterwork Shuriken', bulk: 0, qty: 3 },
            { title: 'Chalk', bulk: 0, qty: 10 },
            { title: 'Flint & Steel', bulk: 0, qty: 1 },
        ],
        worn: [
            { title: 'Studded Leather', bulk: 1, qty: 1 },
            { title: 'Steel Shield', bulk: 1, qty: 1 },
            { title: 'Sheath (Sword)', bulk: 0, qty: 1 },
            { title: 'Sheath (Fork)', bulk: 0, qty: 1 },
            { title: 'Backpack', bulk: 0, qty: 1 },
            { title: 'Belt Pouch', bulk: 0, qty: 1 },
            { title: 'Belt Pouch', bulk: 0, qty: 1 },
            { title: 'Short Sword', bulk: 1, qty: 1 },
            { title: 'Fighter\'s Fork', bulk: 1, qty: 1 },
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
        slots: [
            {current: 0, max: 0}
        ],
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
                name: 'Keen Eyes',
                type: 'Special',
                level: '',
                traits: [],
                trigger: '',
                action: '',
                description: 'Your eyes are sharp, allowing you to make out small details about concealed or even invisible creatures that others might miss. You gain a +2 circumstance bonus when using the Seek action to find hidden or undetected creatures within 30 feet of you. When you target an opponent that is concealed from you or hidden from you, reduce the DC of the flat check to 3 for a concealed target or 9 for a hidden one.'
            },
            {
                name: 'Nomadic Halfling',
                type: 'Heritage',
                level: '',
                traits: [],
                trigger: '',
                action: '',
                description: 'Your ancestors have traveled from place to place for generations, never content to settle down. You gain two additional languages of your choice, chosen from among the common and uncommon languages available to you, and every time you take the Multilingual feat, you gain another new language.'
            },
            {
                name: 'Titan Slinger',
                type: 'Ancestry',
                level: '',
                traits: [],
                trigger: '',
                action: '',
                description: 'You have learned how to use your sling to fell enormous creatures. When you hit on an attack with a sling against a Large or larger creature, increase the size of the weapon damage die by one step.'
            },
        ],
        class: [
            {
                name: 'Attack of Opportunity',
                type: 'Class Feature',
                level: '',
                traits: [],
                trigger: 'A creature within your reach uses a manipulate action or a move action, makes a ranged attack, or leaves a square during a move action it’s using.',
                action: 'Reaction',
                description: 'You lash out at a foe that leaves an opening. Make a melee Strike against the triggering creature. If your attack is a critical hit and the trigger was a manipulate action, you disrupt that action. This Strike doesn’t count toward your multiple attack penalty, and your multiple attack penalty doesn’t apply to this Strike.'
            },
            {
                name: 'Shield Block',
                type: 'Class Feature',
                level: '',
                traits: [],
                trigger: 'While you have your shield raised, you would take damage from a physical attack.',
                action: 'Reaction',
                description: 'You snap your shield in place to ward off a blow. Your shield prevents you from taking an amount of damage up to the shield’s Hardness. You and the shield each take any remaining damage, possibly breaking or destroying the shield.'
            },
            {
                name: 'Double Slice',
                type: 'Class',
                level: '1st',
                traits: [],
                trigger: '',
                requirements: 'You are wielding two melee weapons, each in a different hand.',
                action: '2-action',
                description: 'You lash out at your foe with both weapons. Make two Strikes, one with each of your two melee weapons, each using your current multiple attack penalty. Both Strikes must have the same target. If the second Strike is made with a weapon that doesn’t have the agile trait, it takes a –2 penalty. If both attacks hit, combine their damage, and then add any other applicable effects from both weapons. You add any precision damage only once, to the attack of your choice. Combine the damage from both Strikes and apply resistances and weaknesses only once. This counts as two attacks when calculating your multiple attack penalty.'
            },
            {
                name: 'Lunge',
                type: 'Feat',
                level: '2nd',
                traits: ['Fighter'],
                trigger: '',
                requirements: 'You are wielding a melee weapon.',
                action: '1-action',
                description: 'Extending your body to its limits, you attack an enemy that would normally be beyond your reach. Make a Strike with a melee weapon, increasing your reach by 5 feet for that Strike. If the weapon has the disarm, shove, or trip trait, you can use the corresponding action instead of a Strike.'
            },
            {
                name: 'Bravery',
                type: 'Class Feature',
                level: '3rd',
                traits: [],
                trigger: '',
                action: '',
                description: 'When you roll a success at a Will save against a fear effect, you get a critical success instead. In addition, anytime you gain the frightened condition, reduce its value by 1.'
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
        ],
        skill: [
            {
                name: 'Titan Wrestler',
                type: 'Athletics',
                level: '1st',
                traits: ['General', 'Skill'],
                trigger: '',
                action: '',
                description: 'You can attempt to Disarm, Grapple, Shove, or Trip creatures up to two sizes larger than you, or up to three sizes larger than you if you’re legendary in Athletics.'
            },
            {
                name: 'Group Coercion',
                type: 'Intimidation',
                level: '1st',
                traits: ['General', 'Skill'],
                trigger: '',
                action: '',
                description: 'When you Coerce, you can compare your Intimidation check result to the Will DCs of two targets instead of one. It’s possible to get a different degree of success for each target. The number of targets you can Coerce in a single action increases to four if you’re an expert, 10 if you’re a master, and 25 if you’re legendary.'
            },
        ],
    },
    skills: [
        { title: 'Acrobatics', mod: { title: 'DEX', value: 4 }, prof: { title: '', value: 0 }, item: 0, temp: 0, total: 4 },
        { title: 'Arcana', mod: { title: 'INT', value: 0 }, prof: { title: '', value: 0 }, item: 0, temp: 0, total: 0 },
        { title: 'Athletics', mod: { title: 'STR', value: 1 }, prof: { title: 'T', value: 5 }, item: 0, temp: 0, total: 6 },
        { title: 'Crafting', mod: { title: 'INT', value: 0 }, prof: { title: '', value: 0 }, item: 0, temp: 0, total: 0 },
        { title: 'Deception', mod: { title: 'CHA', value: 1 }, prof: { title: '', value: 0 }, item: 0, temp: 0, total: 1 },
        { title: 'Diplomacy', mod: { title: 'CHA', value: 1 }, prof: { title: '', value: 0 }, item: 0, temp: 0, total: 1 },
        { title: 'Intimidation', mod: { title: 'CHA', value: 1 }, prof: { title: 'E', value: 7 }, item: 0, temp: 0, total: 8 },
        { title: 'Medicine', mod: { title: 'WIS', value: 1 }, prof: { title: '', value: 0 }, item: 0, temp: 0, total: 1 },
        { title: 'Nature', mod: { title: 'WIS', value: 1 }, prof: { title: '', value: 0 }, item: 0, temp: 0, total: 1 },
        { title: 'Occultism', mod: { title: 'INT', value: 0 }, prof: { title: '', value: 0 }, item: 0, temp: 0, total: 0 },
        { title: 'Performance', mod: { title: 'CHA', value: 1 }, prof: { title: '', value: 0 }, item: 0, temp: 0, total: 1 },
        { title: 'Religion', mod: { title: 'WIS', value: 1 }, prof: { title: 'T', value: 5 }, item: 0, temp: 0, total: 6 },
        { title: 'Society', mod: { title: 'INT', value: 0 }, prof: { title: '', value: 0 }, item: 0, temp: 0, total: 0 },
        { title: 'Stealth', mod: { title: 'DEX', value: 4 }, prof: { title: '', value: 0 }, item: 0, temp: 0, total: 4 },
        { title: 'Survival', mod: { title: 'WIS', value: 1 }, prof: { title: 'T', value: 5 }, item: 0, temp: 0, total: 6 },
        { title: 'Thievery', mod: { title: 'DEX', value: 4 }, prof: { title: 'T', value: 5 }, item: 0, temp: 0, total: 9 },
        { title: 'Midland District Lore', mod: { title: 'INT', value: 0 }, prof: { title: 'T', value: 5 }, item: 0, temp: 0, total: 5 },
    ],
    character: {
        hp: {current: 28, max: 42},
        conditions: [],
        dying: 0,
        wounded: 0,
        abilityScores: [
            { title: 'STR', value: 1 },
            { title: 'DEX', value: 4 },
            { title: 'CON', value: 2 },
            { title: 'INT', value: 0 },
            { title: 'WIS', value: 1 },
            { title: 'CHA', value: 1 }
        ],
        armor: {
            mod: { title: 'DEX', value: 3 },
            prof: { title: 'T', value: 5 },
            item: 2,
            temp: 0
        },
        shield: {
            bonus: 2,
            temp: 0,
            hardness: 5,
            bt: 10,
            hp: {current: 20, max: 20}
        },
        saves: [
            {
                title: 'Fortitude',
                prof: 'E',
                value: 9
            },
            {
                title: 'Reflex',
                prof: 'E',
                value: 11
            },
            {
                title: 'Will',
                prof: 'E',
                value: 8
            }
        ],
        perception: {
            mod: { title: 'WIS', value: 1 },
            prof: { title: 'E', value: 7 },
            item: 0,
            temp: 0,
            initiativeBonus: 0,
            senses: []
        },
        melee:[
            {
                name: 'Fighter\s Fork',
                mod: { title: 'STR', value: 1 },
                prof: { title: 'E', value: 7 },
                item: 1,
                temp: 0,
                dmg: '1d8+1',
                dmgType: ['Piercing'],
                traits: ['Thrown \'20', 'Reach*'],
                notes: 'Activate Single Action Interact; Effect You extend or shorten the trident’s haft. When extended, the trident requires two hands to wield and gains the reach trait, but loses the trident’s normal thrown trait.'
            },
            {
                name: 'Short Sword',
                mod: { title: 'DEX', value: 4 },
                prof: { title: 'E', value: 7 },
                item: 0,
                temp: 0,
                dmg: '1d6+1',
                dmgType: ['Piercing','Slashing'],
                traits: ['Agile', 'Finesse', 'Versatile S'],
            },
            {
                name: 'Unarmed',
                mod: { title: 'DEX', value: 4 },
                prof: { title: 'E', value: 7 },
                item: 0,
                temp: 0,
                dmg: '1d4+1',
                dmgType: ['Bludgeoning'],
                traits: ['Agile', 'Finesse', 'Nonlethal'],
            },
        ],
        ranged: [
            {
                name: 'Sling',
                mod: { title: 'DEX', value: 4 },
                prof: { title: 'E', value: 7 },
                item: 0,
                temp: 0,
                dmg: '1d4',
                dmgType: ['Bludgeoning'],
                traits: ['50 ft range', 'Propulsive'],
            },
            {
                name: 'Masterwork Shuriken',
                mod: { title: 'DEX', value: 4 },
                prof: { title: 'E', value: 7 },
                item: 1,
                temp: 0,
                dmg: '1d4',
                dmgType: ['Piercing'],
                traits: ['20 ft range', 'Agile', 'Monk', 'Thrown'],
            },
        ],
        weaponProf: {
            simple: 'E',
            martial: 'E',    
            other: { title: 'Advanced', value: 'T' },
            unarmed: 'E'
        } 
    }
}