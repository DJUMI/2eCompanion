export default {
    details: {
        name: 'Besh',
        image: 'https://firebasestorage.googleapis.com/v0/b/ecompanion-fda17.appspot.com/o/Besh.png?alt=media&token=ffc6fe0d-f9d6-42ac-908c-32d53faed346',
        level: 3,
        ancestry: 'Gnome',
        heritage: 'Wellspring',
        class: 'Druid',
        background: 'Battle Medic',
        size: 'small',
        alignment: 'CG',
        deity: 'Desna',
        ethnicity: '',
        nationality: '',
        birthplace: '',
        age: 113,
        gender: 'female',
        height: '',
        weight: '',
        appearance: '',
        attitude: '',
        beliefs: '',
        likes: '',
        dislikes: '',
        catchphrases: '',
        notes: ['I Love you', 'Besh is the best'],
    },
    inventory: {
        bulk: { current: 5, max: 10 },
        money: {
            cp: 5,
            sp: 4,
            gp: 17,
            pp: 0,
        },
        other: [
            { 
                title: 'Adventurer\'s Pack', 
                bulk: '1', 
                qty: 1, 
                description: 'This item is the starter kit for an adventurer, containing the essential items for exploration and survival. The Bulk value is for the entire pack together, but see the descriptions of individual items as necessary. The pack contains the following items: backpack (containing the other goods), bedroll, two belt pouches, 10 pieces of chalk, flint and steel, 50 feet of rope, 2 weeks’ rations, soap, 5 torches, and a waterskin.' 
            },
        ],
        readied: [
            { 
                title: 'Holly and Mistletoe',
                bulk: 0,
                qty: 1,
                description: 'Plants of supernatural significance provide a primal focus for primal spellcasters, such as druids, when using certain abilities and casting some spells. A bundle of holly and mistletoe must be held in one hand to use it. Other primal foci exist for druids focused on other aspects of nature.' 
            },
            { 
                title: 'Healer\'s Tools',
                bulk: 1,
                qty: 1,
                description: 'This kit of bandages, herbs, and suturing tools is necessary for Medicine checks to Administer First Aid, Treat Disease, Treat Poison, or Treat Wounds. Expanded healer’s tools provide a +1 item bonus to such checks. When you carry the tools from place to place, you keep many of the components handy on your person, in pockets or bandoliers.' 
            },
        ],
        worn: [
            { 
                title: 'Backpack', 
                bulk: 0, 
                description: 'A backpack holds up to 4 Bulk of items. If you’re carrying or stowing the pack rather than wearing it on your back, its bulk is light instead of negligible. The first 2 Bulk of items in your backpack don’t count against your Bulk limits.' 
            },
            { 
                title: 'Bandolier', 
                bulk: 0, 
                description: 'A bandolier holds up to eight items of light Bulk within easy reach and is usually used for alchemical items or potions. If you are carrying or stowing a bandolier rather than wearing it around your chest, it has light Bulk instead of negligible. A bandolier can be dedicated to a full set of tools, such as healer’s tools, allowing you to draw the tools as part of the action that requires them.' 
            },
            { 
                title: 'Leather Armor', 
                bulk: 1, 
                description: 'A mix of flexible and molded boiled leather, a suit of this type of armor provides some protection with maximum flexibility.' 
            },
            { 
                title: 'Belt Pouch', 
                bulk: 0, 
                description: 'A belt pouch holds up to four items of light Bulk.' 
            },
            { 
                title: 'Belt Pouch', 
                bulk: 0, 
                description: 'A belt pouch holds up to four items of light Bulk.' 
            },
            { 
                title: 'Wooden Shield', 
                bulk: 1, 
                description: 'Though they come in a variety of shapes and sizes, the protection offered by wooden shields comes from the stoutness of their materials. While wooden shields are less expensive than steel shields, they break more easily' 
            },
        ]
    },
    spells: {
        tradition: 'Primal',
        casterType: 'Prepared',
        key: {
            title: 'WIS',
            value: 4,
        },
        prof: {
            title: 'T',
            value: 5,
        },
        slots: [
            { current: 3, max: 3 },
            { current: 2, max: 2 },
        ],
        innate: [
            {
                title: 'Forbidding Ward',
                level: '1',
                action: '2-Actions',
                traits: ['ABJURATION', 'CANTRIP'],
                cast: ['Somatic', 'Verbal'],
                range: { title: 'Range', info: '30 feet' },
                target: { title: 'Targets', info: '1 ally and 1 enemy' },
                save: null,
                duration: { title: 'Duration', info: 'sustained up to 1 minute' },
                description: 'You ward an ally against the attacks and hostile spells from the target enemy. The target ally gains a +1 status bonus to Armor Class and saving throws against the target enemy’s attacks, spells, and other effects.',
                castDescription: [],
                heightened: [{ title: 'Heightened (6th) ', info: 'The status bonus increases to +2' }]
            },
        ],
        focus: {
            points: { current: 2, max: 2 },
            spells: [
                {
                    title: 'Goodberry',
                    level: '1',
                    action: '2-Actions',
                    casts: '2',
                    traits: ['UNCOMMON', 'DRUID', 'HEALING', 'NECROMANCY'],
                    cast: ['Somatic', 'Verbal'],
                    range: { title: 'Range', info: 'touch' },
                    target: { title: 'Targets', info: '1 ripe berry' },
                    save: null,
                    duration: { title: 'Duration', info: '10 minutes' },
                    description: 'You imbue the target berry with the bounty of nature, turning it into a goodberry that can heal and sustain far beyond its normal capacity. A creature can eat the goodberry with an Interact action to regain 1d6+4 Hit Points. A berry not consumed during the duration withers away. Every six goodberries consumed gives as much nourishment as one square meal for a typical human.',
                    castDescription: [],
                    heightened: [{ title: 'Heightened (+1) ', info: 'You can target an additional berry. A creature can consume any number of goodberries from the same casting with a single Interact action.' }]
                },
            ]
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
                title: 'Detect Magic',
                level: '1',
                action: '2-Actions',
                attack: null,
                traits: ['CANTRIP', 'DETECTION', 'DIVINATION'],
                cast: ['Somatic', 'Verbal'],
                range: { title: 'Area', info: '30-foot emanation' },
                target: null,
                save: null,
                duration: null,
                description: 'You send out a pulse that registers the presence of magic. You receive no information beyond the presence or absence of magic. You can choose to ignore magic you’re fully aware of, such as the magic items and ongoing spells of you and your allies. You detect illusion magic only if that magic’s effect has a lower level than the level of your detect magic spell. However, items that have an illusion aura but aren’t deceptive in appearance (such as an invisibility potion) typically are detected normally.',
                castDescription: [],
                heightened: [
                    { title: 'Heightened (3rd) ', info: 'You learn the school of magic for the highestlevel effect within range that the spell detects. If multiple effects are equally strong, the GM determines which you learn.' },
                    { title: 'Heightened (4th) ', info: 'As 3rd level, but you also pinpoint the source of the highest-level magic. Like for an imprecise sense, you don’t learn the exact location, but can narrow down the source to within a 5-foot cube (or the nearest if larger than that).' }
                ]
            },
            {
                title: 'Guidance',
                level: '1',
                action: '1-Action',
                attack: null,
                traits: ['CANTRIP', 'DIVINATION'],
                cast: ['Somatic', 'Verbal'],
                range: { title: 'Range', info: '30 feet' },
                target: { title: 'Targets', info: '1 creature' },
                save: null,
                duration: { title: 'Duration', info: 'until the start of your next turn' },
                description: 'You ask for divine guidance, granting the target a +1 status bonus to one attack roll, Perception check, saving throw, or skill check the target attempts before the duration ends. The target chooses which roll to use the bonus on before rolling. If the target uses the bonus, the spell ends. Either way, the target is then temporarily immune for 1 hour.',
                castDescription: [],
                heightened: []
            },
            {
                title: 'Stabilize',
                level: '1',
                action: '2-Actions',
                attack: null,
                traits: ['CANTRIP', 'HEALING', 'NECROMANCY', 'POSITIVE'],
                cast: ['Somatic', 'Verbal'],
                range: { title: 'Range', info: '30 feet' },
                target: { title: 'Targets', info: '1 dying creature' },
                save: null,
                duration: null,
                description: 'Positive energy shuts death’s door. The target loses the dying condition, though it remains unconscious at 0 Hit Points.',
                castDescription: [],
                heightened: []
            },
            {
                title: 'Tanglefoot',
                level: '1',
                action: '2-Actions',
                attack: { dmg: null },
                traits: ['CANTRIP', 'CONJURATION', 'PLANT'],
                cast: ['Somatic', 'Verbal'],
                range: { title: 'Range', info: '30 feet' },
                target: { title: 'Targets', info: '1 creature' },
                save: null,
                duration: null,
                description: 'A vine covered in sticky sap appears from thin air, flicking from your hand and lashing itself to the target. Attempt a spell attack against the target.',
                castDescription: [
                    { title: 'Critical Success ', info: 'The target gains the immobilized condition and takes a –10-foot circumstance penalty to its Speeds for 1 round. It can attempt to Escape against your spell DC to remove the penalty and the immobilized condition.' },
                    { title: 'Critical Success ', info: 'The target takes a –10-foot circumstance penalty to its Speeds for 1 round. It can attempt to Escape against your spell DC to remove the penalty.' },
                    { title: 'Failure ', info: 'The target is unaffected' }
                ],
                heightened: [
                    { title: 'Heightened (2nd) ', info: 'The effects lasts for 2 rounds.' },
                    { title: 'Heightened (4th) ', info: 'The effects lasts for 1 minute.' }
                ]
            },
        ],
        spells: [
            {
                level: '2',
                spells: [
                    {
                        name: 'Burning Hands',
                        level: '1',
                        action: '2-Actions',
                        attack: { dmg: { die: { type: 'Fire', value: 6, amount: 2 } } },
                        casts: '1',
                        traits: ['EVOCATION', 'FIRE'],
                        cast: ['Somatic', 'Verbal'],
                        range: { title: 'Area', info: '15-foot cone' },
                        target: null,
                        save: { title: 'Saving Throw', info: 'basic Reflex' },
                        duration: null,
                        description: 'Gouts of flame rush from your hands. You deal 2d6 fire damage to creatures in the area.',
                        castDescription: [],
                        heightened: [{ title: 'Heightened (+1) ', info: 'The damage increases by 2d6.' }]
                    },
                    {
                        name: 'Heal',
                        level: '1',
                        action: '2-Actions',
                        casts: '1',
                        traits: ['HEALING', 'NECROMANCY', 'POSITIVE'],
                        cast: [],
                        range: { title: 'Range', info: 'varies' },
                        target: { title: 'Targets', info: '1 willing living creature or 1 undead creature' },
                        save: null,
                        duration: null,
                        description: 'You channel positive energy to heal the living or damage the undead. If the target is a willing living creature, you restore 1d8 Hit Points. If the target is undead, you deal that amount of positive damage to it, and it gets a basic Fortitude save. The number of actions you spend when Casting this Spell determines its targets, range, area, and other parameters.',
                        castDescription: [
                            { title: '1-Action (somatic) ', info: 'The spell has a range of touch.' },
                            { title: '2-Action (verbal, somatic) ', info: 'The spell has a range of 30 feet. If you’re healing a living creature, increase the Hit Points restored by 8.' },
                            { title: '3-Action (material, somatic, verbal) ', info: 'You disperse positive energy in a 30-foot emanation. This targets all living and undead creatures in the burst.' }
                        ],
                        heightened: [
                            { title: 'Heightened (+1) ', info: 'The amount of healing or damage increases by 1d8, and the extra healing for the 2-action version increases by 8.' }
                        ]
                    }
                ]
            },
            {
                level: '1',
                spells: [
                    {
                        name: 'Burning Hands',
                        level: '1',
                        action: '2-Actions',
                        attack: { dmg: { die: { type: 'Fire', value: 6, amount: 2 } } },
                        casts: '1',
                        traits: ['EVOCATION', 'FIRE'],
                        cast: ['Somatic', 'Verbal'],
                        range: { title: 'Area', info: '15-foot cone' },
                        target: null,
                        save: { title: 'Saving Throw', info: 'basic Reflex' },
                        duration: null,
                        description: 'Gouts of flame rush from your hands. You deal 2d6 fire damage to creatures in the area.',
                        castDescription: [],
                        heightened: [{ title: 'Heightened (+1) ', info: 'The damage increases by 2d6.' }]
                    },
                    {
                        name: 'Heal',
                        level: '1',
                        action: '2-Actions',
                        casts: '2',
                        traits: ['HEALING', 'NECROMANCY', 'POSITIVE'],
                        cast: [],
                        range: { title: 'Range', info: 'varies' },
                        target: { title: 'Targets', info: '1 willing living creature or 1 undead creature' },
                        save: null,
                        duration: null,
                        description: 'You channel positive energy to heal the living or damage the undead. If the target is a willing living creature, you restore 1d8 Hit Points. If the target is undead, you deal that amount of positive damage to it, and it gets a basic Fortitude save. The number of actions you spend when Casting this Spell determines its targets, range, area, and other parameters.',
                        castDescription: [
                            { title: '1-Action (somatic) ', info: 'The spell has a range of touch.' },
                            { title: '2-Action (verbal, somatic) ', info: 'The spell has a range of 30 feet. If you’re healing a living creature, increase the Hit Points restored by 8.' },
                            { title: '3-Action (material, somatic, verbal) ', info: 'You disperse positive energy in a 30-foot emanation. This targets all living and undead creatures in the burst.' }
                        ],
                        heightened: [
                            { title: 'Heightened (+1) ', info: 'The amount of healing or damage increases by 1d8, and the extra healing for the 2-action version increases by 8.' }
                        ]
                    }
                ]
            },
        ],
        item: [],
    },
    feats: {
        ancestry: [
            {
                name: 'Illusion Sense',
                type: 'Ancestry',
                level: '1st',
                traits: ['Gnome'],
                trigger: '',
                action: '',
                description: 'Your ancestors spent their days cloaked and cradled in illusions, and as a result, sensing illusion magic is second nature to you. You gain a +1 circumstance bonus to both Perception checks and Will saves against illusions. When you come within 10 feet of an illusion that can be disbelieved, the GM rolls a secret check for you to disbelieve it, even if you didn’t spend an action to Interact with the illusion.'
            },
        ],
        class: [
            {
                name: 'Shield Block',
                type: 'Class Feature',
                level: '',
                traits: ['General'],
                trigger: 'While you have your shield raised, you would take damage from a physical attack.',
                action: 'Reaction',
                description: 'You snap your shield in place to ward off a blow. Your shield prevents you from taking an amount of damage up to the shield’s Hardness. You and the shield each take any remaining damage, possibly breaking or destroying the shield.'
            },
            {
                name: 'Wild Empathy',
                type: 'Class Feature',
                level: '',
                traits: ['Ranger'],
                trigger: '',
                action: '',
                description: 'You have a connection to the creatures of the natural world that allows you to communicate with them on a rudimentary level. You can use Diplomacy to Make an Impression on animals and to make very simple Requests of them. In most cases, wild animals will give you time to make your case.'
            },
            {
                name: 'Leshy Familiar',
                type: 'Class',
                level: '1st',
                traits: ['Druid'],
                trigger: '',
                action: '',
                description: 'You gain a leshy familiar, a Tiny plant that embodies one of the many spirits of nature. Other than taking the form of a plant instead of an animal, this familiar uses all the same rules as other familiars, which are detailed in the core rulebook on page 217.'
            },
            {
                name: 'Reach Spell',
                type: 'Class',
                level: '1st',
                traits: ['Concentrate', 'Druid', 'Metamagic'],
                trigger: '',
                action: '1-Action',
                description: 'You can extend the range of your spells. If the next action you use is to Cast a Spell that has a range, increase that spell\'s range by 30 feet. As is standard for increasing spell range, if the spell normally has a range of touch, you extend its range to 30 feet.'
            }
        ],
        general: [
            {
                name: 'Fleet',
                type: '',
                level: '1st',
                traits: ['General'],
                trigger: '',
                action: '',
                description: 'You move more quickly on foot. Your Speed increases by 5 feet.'
            },
        ],
        skill: [
            {
                name: 'Battle Medicine',
                type: 'Medicine',
                level: '1st',
                traits: ['General', 'Healing', 'Manipulate', 'Skill'],
                trigger: '',
                action: '1-Action',
                description: 'You can patch up yourself or an adjacent ally, even in combat. Attempt a Medicine check with the same DC as for Treat Wounds, and restore a corresponding amount of Hit Points; this does not remove the wounded condition. As with Treat Wounds, you can attempt checks against higher DCs if you have the minimum proficiency rank. The target is then temporarily immune to your Battle Medicine for 1 day.'
            },
        ],
    },
    skills: [
        { title: 'Acrobatics', mod: { title: 'DEX', value: 1 }, prof: { title: '', value: 0 }, item: 0, temp: 0, total: 1 },
        { title: 'Arcana', mod: { title: 'INT', value: 1 }, prof: { title: '', value: 0 }, item: 0, temp: 0, total: 1 },
        { title: 'Athletics', mod: { title: 'STR', value: 0 }, prof: { title: 'T', value: 5 }, item: 0, temp: 0, total: 5 },
        { title: 'Crafting', mod: { title: 'INT', value: 1 }, prof: { title: '', value: 0 }, item: 0, temp: 0, total: 1 },
        { title: 'Deception', mod: { title: 'CHA', value: 2 }, prof: { title: 'T', value: 5 }, item: 0, temp: 0, total: 7 },
        { title: 'Diplomacy', mod: { title: 'CHA', value: 2 }, prof: { title: 'T', value: 5 }, item: 0, temp: 0, total: 7 },
        { title: 'Intimidation', mod: { title: 'CHA', value: 2 }, prof: { title: '', value: 0 }, item: 0, temp: 0, total: 2 },
        { title: 'Medicine', mod: { title: 'WIS', value: 4 }, prof: { title: 'E', value: 7 }, item: 0, temp: 0, total: 11 },
        { title: 'Nature', mod: { title: 'WIS', value: 4 }, prof: { title: 'T', value: 5 }, item: 0, temp: 0, total: 9 },
        { title: 'Occultism', mod: { title: 'INT', value: 1 }, prof: { title: 'T', value: 5 }, item: 0, temp: 0, total: 6 },
        { title: 'Performance', mod: { title: 'CHA', value: 2 }, prof: { title: '', value: 0 }, item: 0, temp: 0, total: 2 },
        { title: 'Religion', mod: { title: 'WIS', value: 4 }, prof: { title: '', value: 0 }, item: 0, temp: 0, total: 4 },
        { title: 'Society', mod: { title: 'INT', value: 1 }, prof: { title: '', value: 0 }, item: 0, temp: 0, total: 1 },
        { title: 'Stealth', mod: { title: 'DEX', value: 1 }, prof: { title: '', value: 0 }, item: 0, temp: 0, total: 1 },
        { title: 'Survival', mod: { title: 'WIS', value: 4 }, prof: { title: '', value: 0 }, item: 0, temp: 0, total: 4 },
        { title: 'Thievery', mod: { title: 'DEX', value: 1 }, prof: { title: '', value: 0 }, item: 0, temp: 0, total: 1 },
        { title: 'Warfare Lore', mod: { title: 'INT', value: 1 }, prof: { title: 'T', value: 5 }, item: 0, temp: 0, total: 6 },
    ],
    character: {
        hp: { current: 35, max: 35 },
        xp: 150,
        conditions: [
            { title: 'Poisoned', level: 1, description: 'take 1d6 dmg' },
            { title: 'Enfeebled', level: 1, description: 'You’re physically weakened. Enfeebled always includes a value. When you are enfeebled, you take a status penalty equal to the condition value to Strength-based rolls and DCs, including Strength-based melee attack rolls, Strength-based damage rolls, and Athletics checks.' },
        ],
        dying: 0,
        wounded: 0,
        abilityScores: [
            { title: 'STR', value: 0 },
            { title: 'DEX', value: 1 },
            { title: 'CON', value: 1 },
            { title: 'INT', value: 1 },
            { title: 'WIS', value: 4 },
            { title: 'CHA', value: 2 }
        ],
        classDC: {
            mod: { title: 'WIS', value: 4 },
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
            item: 1,
            temp: 0
        },
        shield: {
            bonus: 2,
            temp: 0,
            hardness: 3,
            bt: 6,
            hp: { current: 12, max: 12 }
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
                value: 11
            }
        ],
        perception: {
            mod: { title: 'WIS', value: 4 },
            prof: { title: 'E', value: 7 },
            item: 0,
            temp: 0,
            initiativeBonus: 0,
            senses: ['Low-light vision']
        },
        melee: [
            {
                name: 'Staff',
                mod: { title: 'STR', value: 0 },
                prof: { title: 'T', value: 5 },
                item: 0,
                temp: 0,
                dmg: '1d4',
                dmgType: ['Bludgeoning'],
                traits: ['Two-hand d8']
            },
            {
                mod: { title: 'STR', value: 0 },
                prof: { title: 'T', value: 5 },
                item: 0,
                temp: 0,
                name: 'Unarmed',
                dmg: '1d4+',
                dmgType:['Bludgeoning'],
                traits: ['Agile', 'Finesse', 'Nonlethal', 'Unarmed']
            }
        ],
        ranged: [],
        weaponProf: {
            simple: 'Trained',
            martial: 'Untrained',    
            unarmed: 'Trained',
            other: []
        }
    }
}