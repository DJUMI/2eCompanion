export default {
    details: {
        name: 'Moggy',
        image: 'https://firebasestorage.googleapis.com/v0/b/ecompanion-fda17.appspot.com/o/moggy.jpg?alt=media&token=3fb5cc4e-fdf9-420c-9b02-55d2dcb3c6ea',
        level: 3,
        ancestry: 'Goblin',
        heritage: 'Razortooth',
        class: 'Rogue Thief',
        background: 'Street Urchin',
        size: 'Small',
        alignment: 'CN',
        deity: 'Cayden Cailean',
        ethnicity: '',
        nationality: 'Korvosan',
        birthplace: 'Bloodsworn Vale',
        age: 14,
        gender: 'Male',
        height: '3\'2"',
        weight: '42 lbs',
        appearance: '',
        attitude: '',
        beliefs: '',
        likes: 'aromatic female armpits, shiny stuff, anything remotely edible, boozohol, qat, feyleaf (in moderation)',
        dislikes: 'mistrusts pretty people',
        catchphrases: '"Moggy could use a bite and a drink - something to eat too!"',
        notes: []
    },
    inventory: {
        bulk: { current: 5, max: 10 },
        money: {
            cp: 5,
            sp: 0,
            gp: 59,
            pp: 0,
        },
        other: [
            { title: 'Harrow Card', bulk: 0, qty: 1 },
            { title: 'Candle', bulk: 0, qty: 10 },
            { title: 'Chalk', bulk: 0, qty: 10 },
            { title: 'Climbing Kit', bulk: 0, qty: 1 },
            { title: 'Crowbar', bulk: 0, qty: 1 },
            { title: 'Flint & Steel', bulk: 0, qty: 1 },
            { title: 'Rations', bulk: 0, qty: 2 },
            { title: 'Replacement Picks', bulk: 0, qty: 3 },
            { title: 'Torch', bulk: 0, qty: 5 },
            { title: 'Vial', bulk: 0, qty: 4 },
            { title: 'Waterskin', bulk: 0.1, qty: 1 },
            { title: 'Ring', bulk: 0, qty: 1 },
            { title: 'Ladder (10ft)', bulk: 3, qty: 1 },
        ],
        readied: [
            { title: 'Thieve\'s Tools', bulk: 0.1, qty: 1 },
            { title: 'Minor Healing Potion', bulk: 0.1, qty: 5 },
            { title: 'Caltrops', bulk: 0.1, qty: 1 },
            { title: 'Oil Pint', bulk: 0, qty: 2 },
        ],
        worn: [
            { title: 'Backpack', bulk: 0, qty: 1 },
            { title: 'Belt Pouch', bulk: 0, qty: 4 },
            { title: 'Bandolier', bulk: 0, qty: 1 },
            { title: 'Bag of Holding', bulk: 1, qty: 1 },
            { title: 'Wooden Shield', bulk: 0.1, qty: 1 },
            { title: 'Pocket Scarf', bulk: 0.1, qty: 1 },
        ]
    },
    spells: {
        tradition: 'Arcane',
        casterType: '',
        key: { 
            title: 'CHA',
            value: 3,
        },
        prof: {
            title: 'T',
            value: 5,
        },
        slots: [],
        innate: [],
        focus: {
            points: {current: 0, max: 0},
            spells: []
        },
        cantrips: [
            {
                title: 'Acid Splash',
                level: '1',
                action: '2-Actions',
                attack: { dmg: { die: { type: 'Acid', value: 6 }, additional: { type: 'Splash Acid', value: 1 } }},
                traits: ['ACID', 'ATTACK', 'CANTRIP', 'EVOCATION'],
                cast: ['Somatic', 'Verbal'],
                range: { title: 'Range', info: '30 feet' },
                target: { title: 'Targets', info: '1 creature or object' },
                save: null,
                duration: null,
                description: 'You splash a glob of acid that splatters creatures and objects alike. Make a spell attack. If you hit, you deal 1d6 acid damage plus 1 splash acid damage. On a critical success, the target also takes 1 persistent acid damage.',
                castDescription: [],
                heightened: [
                    { title: 'Heightened (3rd) ', info: 'The initial damage increases to 1d6 + your spellcasting ability modifier, and the persistent damage increases to 2.' },
                    { title: 'Heightened (5th) ', info: 'The initial damage increases to 2d6 + your spellcasting ability modifier, and the persistent damage increases to 3, and the splash damage increases to 2.' },
                    { title: 'Heightened (7th) ', info: 'The initial damage increases to 3d6 + your spellcasting ability modifier, and the persistent damage increases to 4, and the splash damage increases to 3.' },
                    { title: 'Heightened (9th) ', info: 'The initial damage increases to 4d6 + your spellcasting ability modifier, and the persistent damage increases to 5, and the splash damage increases to 4.' },
                ]
            },
            {
                title: 'Mage Hand',
                level: '1',
                action: '2-Actions',
                attack: null,
                traits: ['ARCANE', 'OCCULT'],
                cast: ['Somatic', 'Verbal'],
                range: { title: 'Range', info: '30 feet' },
                target: { title: 'Targets', info: '1 unattended object' },
                save: null,
                duration: 'Sustained',
                description: 'You create a single magical hand, either invisible or ghostlike, that grasps the target object and moves it slowly up to 20 feet. Because you’re levitating the object, you can move it in any direction. When you Sustain the Spell, you can move the object an additional 20 feet. If the object is in the air when the spell ends, the object falls',
                castDescription: [],
                heightened: []
            }
        ],
        spells: [],
        item: []
    },
    feats: {
        ancestry: [
            {
                name: 'Subtle Theft',
                type: 'Special',
                level: '',
                traits: [],
                trigger: 'Successfully steal',
                action: '',
                description: 'When you successfully Steal something, observers (creatures other than the creature you stole from) take a –2 circumstance penalty to their Perception DCs to detect your theft. Additionally, if you first Create a Diversion using Deception, taking a single Palm an Object or Steal action doesn’t end your undetected condition'
            },
            {
                name: 'Razortooth Goblin',
                type: 'Heritage',
                level: '',
                traits: ['FINESSE, UNARMED'],
                trigger: 'Feelin Bitey',
                action: '',
                description: '1D6 piercing damage'
            },
            {
                name: 'Very Sneaky',
                type: 'Ancestry',
                level: '',
                traits: [],
                trigger: '',
                action: '',
                description: 'Taller folk rarely pay attention to the shadows at their feet, and you take full advantage of this. You can move 5 feet farther when you take the Sneak action, up to your Speed. In addition, as long as you continue to use Sneak actions and succeed at your Stealth check, you don’t become observed if you don’t have cover or greater cover and aren’t concealed at the end of the Sneak action, as long as you have cover or greater cover or are concealed at the end of your turn.'
            },
        ],
        class: [
            {
                name: 'Sneak Attack',
                type: 'Class Feature',
                level: '',
                traits: [],
                trigger: '',
                requirements: 'flat-footed enemy',
                action: '',
                description: 'When your enemy can’t properly defend itself, you take advantage to deal extra damage. If you Strike a creature that has the flat-footed condition with an agile or finesse melee weapon, an agile or finesse unarmed attack, or a ranged weapon attack, you deal an extra 1d6 precision damage. For a ranged attack with a thrown melee weapon, that weapon must also be agile or finesse. As your rogue level increases, so does the number of damage dice for your sneak attack. Increase the number of dice by one at 5th, 11th, and 17th levels.'
            },
            {
                name: 'Surprise Attack',
                type: 'Class Feature',
                level: '',
                traits: [],
                trigger: '',
                requirements: 'roll deception or stealth for initiative',
                action: '',
                description: 'You spring into combat faster than foes can react. On the first round of combat, if you roll Deception or Stealth for initiative, creatures that haven’t acted are flat-footed to you.'
            },
            {
                name: 'Nimble Dodge',
                type: 'Class',
                level: '1st',
                traits: [],
                trigger: 'Attacked by creature I can see',
                action: 'Reaction',
                description: 'You deftly dodge out of the way, gaining a +2 circumstance bonus to AC against the triggering attack.'
            },
            {
                name: 'Minor Magic',
                type: 'Feat',
                level: '2nd',
                traits: [],
                trigger: '',
                action: '',
                description: 'You’ve dabbled in a variety of tricks, gaining minor magical abilities from a particular tradition. Choose arcane, divine, occult, or primal magic, and gain two cantrips from the common cantrips available to that tradition.'
            },
            {
                name: 'Deny Advantage',
                type: 'Class Feature',
                level: '3rd',
                traits: [],
                trigger: '',
                action: '',
                description: 'As someone who takes advantage of others’ defenses, you are careful not to leave such openings yourself. You aren’t flat-footed to hidden, undetected, or flanking creatures of your level or lower, or creatures of your level or lower using surprise attack. However, they can still help their allies flank.'
            },
        ],
        general: [
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
                name: 'Pickpocket',
                type: 'Thievery',
                level: '1st',
                traits: [],
                trigger: '',
                action: '',
                description: 'You can Steal or Palm an Object that’s closely guarded, such as in a pocket, without taking the –5 penalty. You can’t steal objects that would be extremely noticeable or time consuming to remove (like worn shoes or armor or actively wielded objects). If you’re a master in Thievery, you can attempt to Steal from a creature in combat or otherwise on guard. When doing so, Stealing requires 2 manipulate actions instead of 1, and you take a –5 penalty.'
            },
            {
                name: 'Quiet Allies',
                type: 'Stealth',
                level: '2nd',
                traits: [],
                trigger: '',
                action: '',
                description: 'You’re skilled at moving with a group. When you are Avoiding Notice and your allies Follow the Expert, you and those allies can roll a single Stealth check, using the lowest modifier, instead of rolling separately. This doesn’t apply for initiative rolls.'
            },
            {
                name: 'Charming Liar',
                type: 'Deception',
                level: '1st',
                traits: [],
                trigger: '',
                action: '',
                description: 'Your charm allows you to win over those you lie to. When you get a critical success using the Lie action, the target’s attitude toward you improves by one step, as though you’d succeeded at using Diplomacy to Make an Impression. This works only once per conversation, and if you critically succeed against multiple targets using the same result, you choose one creature’s attitude to improve. You must be lying to impart seemingly important information, inflate your status, or ingratiate yourself, which trivial or irrelevant lies can’t achieve.'
            },
        ],
    },
    skills: [
        { title: 'Acrobatics', mod: { title: 'DEX', value: 4 }, prof: { title: 'T', value: 5 }, item: 0, temp: 0, total: 4 },
        { title: 'Arcana', mod: { title: 'INT', value: 1 }, prof: { title: '', value: 0 }, item: 0, temp: 0, total: 0 },
        { title: 'Athletics', mod: { title: 'STR', value: 0 }, prof: { title: 'T', value: 5 }, item: 0, temp: 0, total: 6 },
        { title: 'Crafting', mod: { title: 'INT', value: 1 }, prof: { title: 'T', value: 5 }, item: 0, temp: 0, total: 0 },
        { title: 'Deception', mod: { title: 'CHA', value: 3 }, prof: { title: 'T', value: 5 }, item: 0, temp: 0, total: 1 },
        { title: 'Diplomacy', mod: { title: 'CHA', value: 3 }, prof: { title: 'T', value: 5 }, item: 0, temp: 0, total: 1 },
        { title: 'Intimidation', mod: { title: 'CHA', value: 3 }, prof: { title: 'T', value: 5 }, item: 0, temp: 0, total: 8 },
        { title: 'Medicine', mod: { title: 'WIS', value: 0 }, prof: { title: '', value: 0 }, item: 0, temp: 0, total: 1 },
        { title: 'Nature', mod: { title: 'WIS', value: 0 }, prof: { title: '', value: 0 }, item: 0, temp: 0, total: 1 },
        { title: 'Occultism', mod: { title: 'INT', value: 1 }, prof: { title: '', value: 0 }, item: 0, temp: 0, total: 0 },
        { title: 'Performance', mod: { title: 'CHA', value: 3 }, prof: { title: '', value: 0 }, item: 0, temp: 0, total: 1 },
        { title: 'Religion', mod: { title: 'WIS', value: 0 }, prof: { title: '', value: 0 }, item: 0, temp: 0, total: 6 },
        { title: 'Society', mod: { title: 'INT', value: 1 }, prof: { title: 'T', value: 5 }, item: 0, temp: 0, total: 0 },
        { title: 'Stealth', mod: { title: 'DEX', value: 4 }, prof: { title: 'E', value: 7 }, item: 0, temp: 0, total: 4 },
        { title: 'Survival', mod: { title: 'WIS', value: 0 }, prof: { title: '', value: 0 }, item: 0, temp: 0, total: 6 },
        { title: 'Thievery', mod: { title: 'DEX', value: 4 }, prof: { title: 'E', value: 7 }, item: 0, temp: 0, total: 9 },
        { title: 'Korvosa Lore', mod: { title: 'INT', value: 1 }, prof: { title: 'T', value: 5 }, item: 0, temp: 0, total: 5 },
        { title: 'Underworld Lore', mod: { title: 'INT', value: 1 }, prof: { title: 'T', value: 5 }, item: 0, temp: 0, total: 5 },
    ],
    character: {
        hp: {current: 33, max: 33},
        xp: 160,
        conditions: [],
        dying: 0,
        wounded: 0,
        abilityScores: [
            { title: 'STR', value: 10 },
            { title: 'DEX', value: 18 },
            { title: 'CON', value: 12 },
            { title: 'INT', value: 12 },
            { title: 'WIS', value: 10 },
            { title: 'CHA', value: 16 }
        ],
        classDC: {
            mod: { title: 'DEX', value: 4 },
            prof: { title: 'T', value: 5 },
            item: 0,
            temp: 0
        },
        movement: {
            speed: 25,
            types: [],
        },
        armor: {
            mod: { title: 'DEX', value: 3 },
            prof: { title: 'T', value: 5 },
            item: 0,
            temp: 0
        },
        shield: {
            bonus: 0,
            temp: 0,
            hardness: 3,
            bt: 3,
            hp: {current: 6, max: 6}
        },
        saves: [
            {
                title: 'Fortitude',
                prof: 'T',
                value: 6
            },
            {
                title: 'Reflex',
                prof: 'E',
                value: 11
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
            senses: ['Darkvision']
        },
        melee:[
            {
                name: 'Rapier',
                mod: { title: 'DEX', value: 4 },
                prof: { title: 'T', value: 5 },
                item: 0,
                temp: 0,
                dmg: '1d6+4',
                dmgType: ['Piercing'],
                traits: ['Deadly D8', 'Disarm', 'Finesse'],
            },
            {
                name: 'Dagger',
                mod: { title: 'DEX', value: 4 },
                prof: { title: 'T', value: 5 },
                item: 1,
                temp: 0,
                dmg: '1d6+1',
                dmgType: ['Piercing','Slashing'],
                traits: ['Agile', 'Finesse', 'Thrown 10ft'],
                notes: 'x4 1 of them is a masterwork dagger with a strange blade shaped almost like a key bearing the inscription: “For an inspiration of a father” used by the Key Lock Killer'
            },
            {
                name: 'Razorteeth',
                mod: { title: 'DEX', value: 4 },
                prof: { title: 'T', value: 5 },
                item: 0,
                temp: 0,
                dmg: '1d6+4',
                dmgType: ['Bludgeoning'],
                traits: ['Agile', 'Finesse', 'Nonlethal'],
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
                name: 'Shortbow',
                mod: { title: 'DEX', value: 4 },
                prof: { title: 'T', value: 5 },
                item: 0,
                temp: 0,
                dmg: '1d6',
                dmgType: ['Piercing'],
                traits: ['60 ft range', 'Deadly D10'],
                ammo: 30,
            },
            {
                name: 'Sling',
                mod: { title: 'DEX', value: 4 },
                prof: { title: '', value: 0 },
                item: 0,
                temp: 0,
                dmg: '1d4',
                dmgType: ['Bludgeoning'],
                traits: ['50 ft range', 'Propulsive'],
                ammo: 10,
            },
        ],
        weaponProf: {
            simple: 'Trained',
            martial: 'Untrained',    
            other: [],
            unarmed: 'Trained'
        } 
    }
}