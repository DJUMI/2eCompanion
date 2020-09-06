export default {
    details: {
        name: 'Kelayos Drake',
        image: 'https://firebasestorage.googleapis.com/v0/b/ecompanion-fda17.appspot.com/o/kel.png?alt=media&token=1425de6f-0233-4016-bb40-0192bc0a9498',
        level: 3,
        ancestry: 'Human',
        heritage: 'Half-elf',
        class: 'Bard',
        background: 'Entertainer',
        size: 'Medium',
        alignment: 'CN',
        deity: 'Calistria',
        ethnicity: '',
        nationality: '',
        birthplace: 'Korvosa',
        age: 27,
        gender: 'Female',
        height: '5\'9"',
        weight: '130 lbs',
        appearance: '',
        attitude: 'Know-it-all, compulsive, independent, proud',
        beliefs: 'superstitious, Maestro Muse - Lyrakien',
        likes: 'ghost hunting, funny hats, pirates',
        dislikes: 'babies, the sound of people chewing, undercooked food',
        catchphrases: '',
        notes: [],
    },
    inventory: {
        bulk: { current: 3, max: 10 },
        money: {
            cp: 4,
            sp: 3,
            gp: 22,
            pp: 0,
        },
        other: [
            { title: 'Waterskin', bulk: 0.1, qty: 1 },
            { title: 'Torch', bulk: 0.1, qty: 2 },
            { title: '50 ft Rope', bulk: 0.1, qty: 1 },
            { title: 'Chalk', bulk: 0.1, qty: 1 },
            { title: 'Flint & Steel', bulk: 0.1, qty: 1 },
        ],
        readied: [
            {
                title: 'Trumpet - Maestro\'s Instrument',
                bulk: 1,
                qty: 1,
                description: 'A maestro’s instrument can be crafted in the form of any variety of handheld musical instrument. A maestro’s instrument grants you a +1 item bonus to Performance checks while playing music with the instrument. Activate [two-actions] Interact; Frequency once per day; Effect You can play the instrument to produce the effects of a charm spell. Type lesser; Level 3; Price 60 gp'
            },
            {
                title: 'Healer\'s Tools',
                bulk: 1,
                qty: 1,
                description: 'This kit of bandages, herbs, and suturing tools is necessary for Medicine checks to Administer First Aid, Treat Disease, Treat Poison, or Treat Wounds. Expanded healer’s tools provide a +1 item bonus to such checks. When you carry the tools from place to place, you keep many of the components handy on your person, in pockets or bandoliers.'
            },
            { title: 'Sling Bullets', bulk: 0.1, qty: 10 },
        ],
        worn: [
            { title: 'Padded Armor', bulk: 0.1 },
            { title: 'Backpack', bulk: -2 },
            { title: 'Bandolier', bulk: 0 },
            { title: 'Bandolier', bulk: 0 },
            { title: 'Belt Pouch', bulk: 0 },
            { title: 'Sheath', bulk: 0 },
            { title: 'Sheath', bulk: 0 },
            { title: 'Sheath', bulk: 0 },
            { title: 'Whip', bulk: 1 },
            { title: 'Rapier', bulk: 1 },
            { title: 'Sling', bulk: 0.1 },
        ]
    },
    spells: {
        tradition: 'Occult',
        casterType: 'Spontaneous',
        key: {
            title: 'CHA',
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
                title: 'Electric Arc',
                level: '1',
                action: '2-Actions',
                traits: ['ELECTRICITY', 'CANTRIP'],
                cast: ['Somatic', 'Verbal'],
                range: { title: 'Range', info: '30 feet' },
                target: { title: 'Targets', info: '1 or 2 creatures' },
                save: { title: 'Saving Throw', info: 'basic Reflex' },
                duration: null,
                description: 'An arc of lightning leaps from one target to another. You deal electricity damage equal to 1d4 plus your spellcasting ability modifier.',
                castDescription: [
                    { title: 'Critical Success ', info: 'No damage' },
                    { title: 'Success ', info: 'Half-damage rounded down' },
                    { title: 'Failure ', info: 'Full damage' },
                    { title: 'Critical Failure ', info: 'Double damage' }
                ],
                heightened: [{ title: 'Heightened (+1) ', info: 'The damage increases by 1d4' }]
            },
        ],
        focus: {
            points: { current: 2, max: 2 },
            spells: [
                {
                    title: 'Lingering Composition',
                    level: '1',
                    action: 'Free Action',
                    casts: '2',
                    traits: ['UNCOMMON', 'BARD'],
                    cast: ['Verbal'],
                    range: { title: 'Range', info: '' },
                    target: null,
                    save: null,
                    duration: null,
                    description: 'You add a flourish to your composition to extend its benefits. If your next action is to cast a cantrip composition with aduration of 1 round, attempt a Performance check. The DC is usually a standard-difficulty DC of a level equal to the highest‑level target of your composition, but the GM can assign a different DC based on the circumstances. The effect depends on the result of your check.',
                    castDescription: [
                        { title: 'Critical Success ', info: 'The composition lasts 4 rounds.' },
                        { title: 'Success ', info: 'The composition lasts 3 rounds.' },
                        { title: 'Failure ', info: 'The composition lasts 1 round, but you don’t spend the Focus Point for casting this spell.' },
                    ],
                    heightened: []
                },
                {
                    title: 'Counter Performance',
                    level: '1',
                    action: 'Free Action',
                    casts: '2',
                    traits: ['UNCOMMON', 'BARD', 'COMPOSITION', 'FORTUNE', 'MENTAL'],
                    cast: ['Somatic', 'Verbal'],
                    range: { title: 'Area', info: '60 ft Emanation' },
                    target: null,
                    save: null,
                    duration: null,
                    description: 'Your performance protects you and your allies. Roll a Performance check for a type you know: an auditory performance if the trigger was auditory, or a visual one for a visual trigger. You and allies in the area can use the better result between your Performance check and the saving throw.',
                    castDescription: [],
                    heightened: []
                },
            ]
        },
        cantrips: [
            {
                title: 'Inspire Courage',
                level: '1',
                action: '1-Action',
                traits: ['COMPOSITION', 'UNCOMMON', 'MENTAL', 'EMOTION'],
                cast: ['Verbal'],
                range: { title: 'Area', info: '60 ft Emanation' },
                target: null,
                save: null,
                duration: null,
                description: 'You inspire your allies with words or tunes of encouragement. You and all allies in the area gain a +1 status bonus to attack rolls, damage rolls, and saves against fear effects.',
                castDescription: [],
                heightened: []
            },
            {
                title: 'Daze',
                level: '1',
                action: '2-Actions',
                traits: [],
                cast: ['Somatic', 'Verbal'],
                range: { title: 'Range', info: '60 feet' },
                target: { title: 'Targets', info: '1 creature' },
                save: { title: 'Saving Throw', info: 'basic Will' },
                duration: { title: 'Duration', info: '1 round' },
                description: 'You cloud the target’s mind and daze it with a mental jolt. The jolt deals mental damage equal to your spellcasting ability modifier; the target must attempt a basic Will save. If the target critically fails the save, it is also stunned 1.',
                castDescription: [
                    { title: 'Failure ', info: 'The jolt deals mental damage equal to your spellcasting ability modifier.' },
                    { title: 'Critical Failure', info: 'If the target critically fails the save, it is also stunned 1.' }
                ],
                heightened: [
                    { title: 'Heightened (+2) ', info: 'The damage increases by 1d6' }
                ]
            },
            {
                title: 'Forbidding Ward',
                level: '1',
                action: '2-Actions',
                traits: ['CANTRIP'],
                cast: ['Somatic', 'Verbal'],
                range: { title: 'Range', info: '30 ft' },
                target: { title: 'Targets', info: '1 ally and 1 enemy' },
                save: null,
                duration: { title: 'Duration', info: 'Sustained up to 1 minute' },
                description: 'You ward an ally against the attacks and hostile spells from the target enemy. The target ally gains a +1 status bonus to Armor Class and saving throws against the target enemy\'s attacks, spells, and other effects.',
                castDescription: [],
                heightened: [
                    { title: 'Heightened (6th) ', info: 'The stat bonus increases to +2' },
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
                title: 'Telekinetic Projectile',
                level: '1',
                action: '2-Actions',
                attack: { dmg: { die: { type: '', value: 6 } } },
                traits: ['ATTACK', 'CANTRIP', 'EVOCATION'],
                cast: ['Somatic', 'Verbal'],
                range: { title: 'Range', info: '30 feet' },
                target: { title: 'Targets', info: '1 creature' },
                save: null,
                duration: null,
                description: 'You hurl a loose, unattended object that is within range and that has 1 Bulk or less at the target. Make a spell attack against the target. If you hit, you deal bludgeoning, piercing, or slashing damage—as appropriate for the object you hurled—equal to 1d6 plus your spellcasting ability modifier. No specific traits or magic properties of the hurled item affect the attack or the damage.',
                castDescription: [
                    { title: 'Critical Success ', info: 'You deal double damage' },
                    { title: 'Success ', info: 'You deal full damage.' },
                ],
                heightened: [
                    { title: 'Heightened (+1) ', info: 'The damage increases by 1d6' }
                ]
            },
            {
                title: 'Prestidigitation',
                level: '1',
                action: '2-Actions',
                traits: ['CANTRIP', 'EVOCATION'],
                cast: ['Somatic', 'Verbal'],
                range: { title: 'Range', info: '10 feet' },
                target: { title: 'Targets', info: '1 object' },
                save: null,
                duration: { title: 'Duration', info: 'Sustained' },
                description: 'The simplest magic does your bidding. You can perform simple magical effects for as long as you Sustain the Spell. Each time you Sustain the Spell, you can choose one of four options. Cook: Cool, warm, or flavor 1 pound of nonliving material. Lift: Slowly lift an unattended object of light Bulk or less 1 foot off the ground. Make: Create a temporary object of negligible Bulk, made of congealed magical substance. The object looks crude and artificial and is extremely fragile—it can\'t be used as a tool, weapon, or spell component. Tidy: Color, clean, or soil an object of light Bulk or less. You can affect an object of 1 Bulk with 10 rounds of concentration, and a larger object a 1 minute per Bulk. Prestidigitation can\'t deal damage or cause adverse conditions. Any actual change to an object (beyond what is noted above) persists only as long as you Sustain the Spell.',
                castDescription: [],
                heightened: []
            },
        ],
        spells: [
            {
                level: '2',
                spells: [
                    {
                        name: 'Invisibility',
                        level: '2',
                        action: '2-Actions',
                        casts: '',
                        traits: ['HEALING', 'MENTAL'],
                        cast: ['Material', 'Somatic'],
                        range: { title: 'Range', info: 'Touch' },
                        target: { title: 'Targets', info: '1 creature' },
                        save: null,
                        duration: { title: 'Duration', info: '10 minutes' },
                        description: 'Target becomes invisible. This makes the target undetected to all creatures, though the creatures acan attempt to find the target, making it hidden to them instead (page466).  If the target uses a hostile action , the spell ends after that hostile action is completed.',
                        castDescription: [],
                        heightened: [{ title: 'Heightened (4th) ', info: 'The spell lasts 1 minute, but it doesn\'t end if the target uses a hostile action.' }]
                    },
                    {
                        name: 'Sound Burst',
                        level: '2',
                        action: '2-Actions',
                        casts: '',
                        traits: ['EVOCATION','SONIC'],
                        cast: ['Somatic', 'Verbal'],
                        range: { title: 'Range', info: '30 ft' },
                        target: { title: 'Targets', info: '10-foot burst' },
                        save: { title: 'Saving Throw', info: 'basic Fortitude' },
                        duration: null,
                        description: 'A cacophonous noise blasts out, dealing 2d10 sonic damage. Each creature must attempt a Fortitude save.',
                        castDescription: [
                            { title: 'Critical Success', info: 'The creature is unaffected' },
                            { title: 'Success', info: 'The creature takes half damage' },
                            { title: 'Failure', info: 'The creature takes full damage and is deafened for 1 round.' },
                            { title: 'Critical Failure', info: 'The creature takes double damage and is deafened for 1 minute, and stunned 1.' },
                   
                        ],
                        heightened: [{ title: 'Heightened (+1) ', info: 'The damage is increased by 1d10' }]
                    },
                ]
            },
            {
                level: '1',
                spells: [
                    {
                        name: 'Soothe',
                        level: '1',
                        action: '2-Actions',
                        casts: '',
                        traits: ['HEALING', 'MENTAL'],
                        cast: ['Somatic', 'Verbal'],
                        range: { title: 'Range', info: '30 ft' },
                        target: { title: 'Targets', info: '1 willing living creature' },
                        save: null,
                        duration: { title: 'Duration', info: '1 minute' },
                        description: 'You grace the target\'s mind, boosting its mental defenses and healing its wounds. The target regains 1d10+4 Hit Points when you Cast the Spell and gains a +2 status bonus to saves against mental effects for the duration.',
                        castDescription: [],
                        heightened: [{ title: 'Heightened (+1) ', info: 'The amount of healing increases by 1d10+4.' }]
                    },
                    {
                        name: 'Command',
                        level: '1',
                        action: '2-Actions',
                        casts: '',
                        traits: ['LINGUISTIC', 'MENTAL'],
                        cast: [],
                        range: { title: 'Range', info: '30 ft' },
                        target: { title: 'Targets', info: '1 creature' },
                        save: { title: 'Saving Throw', info: 'basic Will' },
                        duration: { title: 'Duration', info: 'until the end of the target\'s next turn' },
                        description: 'You shout a command that\'s hard to ignore. You can command the target to approach you, run away (as if it had the fleeing condition), release what it\'s holding, drop prone, or stand in place. It can\'t Delay or take any reactions until it has obeyed your command. The effects depend on the target\'s Will save.',
                        castDescription: [
                            { title: 'Success', info: 'The creature is unaffected' },
                            { title: 'Failure', info: 'For the first action on its next turn, the creature must use a single action to do as you command.' },
                            { title: 'Critical Failure', info: 'The target must use all its actions on its next turn to obey your command.' },
                        ],
                        heightened: [
                            { title: 'Heightened (5th) ', info: 'You can target up to 10 creatures.' }
                        ]
                    },
                    {
                        name: 'Charm',
                        level: '1',
                        action: '2-Actions',
                        casts: '',
                        traits: ['Incapacitation', 'MENTAL'],
                        cast: ['Somatic', 'Verbal'],
                        range: { title: 'Range', info: '30 ft' },
                        target: { title: 'Targets', info: '1 creature' },
                        save: { title: 'Saving Throw', info: 'basic Will' },
                        duration: { title: 'Duration', info: '1 hour' },
                        description: 'From Trumpet. To the target, your words are honey and your visage seems bathed in a dreamy haze. It must attempt a Will save, with a +4 circumstance bonus if you or your allies recently threatened it or used hostile actions against it. You can Dismiss the spell. If you use hostile actions against the target, the spell ends. When the spell ends, the target doesn\'t necessarily realize it was charmed unless its friendship with you or the actions you convinced it to take clash with its expectations, meaning you could potentially convince the target to continue being your friend via mundane means.',
                        castDescription: [
                            { title: 'Critical Success', info: 'The target is unaffected and aware you tried to charm it.' },
                            { title: 'Success', info: 'The target is unaffected but thinks your spell was something harmless instead of charm, unless it identifies the spell (see Identifying Magic).' },
                            { title: 'Failure', info: 'The target\'s attitude becomes friendly toward you. If it was friendly, it becomes helpful. It can\'t use hostile actions against you.' },
                            { title: 'Critical Failure', info: 'The target\'s attitude becomes helpful toward you, and it can\'t use hostile actions against you.' },
                        ],
                        heightened: [
                            { title: 'Heightened (4th) ', info: 'The duration lasts until the next time you make daily preparations.' },
                            { title: 'Heightened (8th) ', info: 'The duration lasts until the next time you make daily preparations, and you can target up to 10 creatures.' },
                        ]
                    },
                    {
                        name: 'Illusory Disguise',
                        level: '1',
                        action: '2-Actions',
                        casts: '',
                        traits: ['ILLUSION', 'VISUAL'],
                        cast: ['Somatic', 'Verbal'],
                        range: null,
                        target: { title: 'Targets', info: 'Self' },
                        save: null,
                        duration: { title: 'Duration', info: '1 hour' },
                        description: 'You create an illusion that causes you to appear as another creature of the same body shape, and with roughly similar height (within 6 inches) and weight (within 50 pounds), as yourself. The disguise is typically good enough to hide your identity, but not to impersonate a specific individual. The spell doesn\'t change your voice, scent, or mannerisms. You can change the appearance of your clothing and worn items, such as making your armor look like a dress. Held items are unaffected, and any worn item you remove returns to its true appearance.',
                        castDescription: [],
                        heightened: [
                            { title: 'Heightened (2nd) ', info: 'The spell also disguises your voice and scent, and it gains the auditory trait.' },
                            { title: 'Heightened (3rd) ', info: 'You can appear as any creature of the same size, even a specific individual. You must have seen an individual to take on their appearance. The spell also disguises your voice and scent, and it gains the auditory trait.' }
                        ]
                    },
                    {
                        name: 'Unseen Servant',
                        level: '1',
                        action: '3-Actions',
                        casts: '2',
                        traits: ['CONJURATION'],
                        cast: ['Material', 'Somatic', 'Verbal'],
                        range: { title: 'Range', info: '60 ft' },
                        target: { title: 'Targets', info: '1 willing living creature or 1 undead creature' },
                        save: null,
                        duration: { title: 'Duration', info: 'sustained' },
                        description: 'You summon an unseen servant, which you can command as part of Sustaining the Spell. It serves you until its Hit Points are reduced to 0, at which point the spell ends, or until you stop Sustaining the Spell. The unseen servant gains the summoned trait.',
                        castDescription: [],
                        heightened: []
                    }
                ]
            },
        ],
        item: [],
    },
    feats: {
        ancestry: [
            {
                name: 'Otherworldly Magic - Electric Arc',
                type: 'Ancestry',
                level: '1st',
                traits: [],
                trigger: '',
                action: '',
                description: 'Choose one cantrip from the arcane spell list (page 307). You can cast this cantrip as an arcane innate spell at will. A cantrip is heightened to a spell level equal to half your level rounded up.'
            },
        ],
        class: [
            {
                name: 'Lingering Composition',
                type: 'Class Feature',
                level: '',
                traits: ['BARD'],
                trigger: '',
                action: '',
                description: 'By adding a flourish, you make your compositions last longer. You learn the lingering composition focus spell. Increase the number of Focus Points in your focus pool by 1. Maestro Muse - Lyrakien'
            },
            {
                name: 'Multifarious Muse - Enigma',
                type: 'Class Feature',
                level: '',
                traits: [],
                trigger: '',
                action: '',
                description: 'Choose a type of muse other than that of yourown. You gain a 1st-level feat that requires that muse, and your muse is now also a muse ofthat type, allowing you to take feats with the other muse as a prerequisite. You don’t gain any of the other effects of the muse you chose.'
            },
            {
                name: 'Bardic Lore',
                type: 'Class',
                level: '1st',
                traits: [],
                trigger: '',
                action: '',
                description: 'Your studies make you informed on every subject. You are trained in Bardic Lore, a special Lore skill that can be used only to Recall Knowledge, but on any topic. If you have legendary proficiency in Occultism, you gain expert proficiency in Bardic Lore, but you can’t increase your proficiency rank in Bardic Lore by any other means.'
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
                name: 'Fascinating Performance',
                type: 'Performance',
                level: '1st',
                traits: [],
                trigger: '',
                action: '1-Action',
                description: 'When you Perform, compare your result to the Will DC of one observer. If you succeed, the target is fascinated by you for 1 round. If the observer is in a situation that demands immediate attention, such as combat, you must critically succeed to fascinate it and the Perform action gains the incapacitation trait. You must choose which creature you’re trying to fascinate before you roll your check, and the target is then temporarily immune for 1 hour. If you’re an expert in Performance, you can fascinate up to four observers; if you’re a master, you can fascinate up to 10 observers; and if you’re legendary, you can fascinate any number of observers at the same time. (from background) Fascinated: You are compelled to focus your attention on something, distracting you from whatever else is going on around you. You take a –2 status penalty to Perception and skill checks, and you can’t use actions with the concentrate trait unless they or their intended consequences are related to the subject of your fascination (as determined by the GM). For instance, you might be able to Seek and Recall Knowledge about the subject, but you likely couldn’t cast a spell targeting a different creature. This condition ends if a creature uses hostile actions against you or any of your allies.'
            },
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
        { title: 'Acrobatics', mod: { title: 'DEX', value: 2 }, prof: { title: 'T', value: 5 }, item: 0, temp: 0, total: 1 },
        { title: 'Arcana', mod: { title: 'INT', value: 0 }, prof: { title: '', value: 0 }, item: 0, temp: 0, total: 1 },
        { title: 'Athletics', mod: { title: 'STR', value: 0 }, prof: { title: 'T', value: 5 }, item: 0, temp: 0, total: 5 },
        { title: 'Crafting', mod: { title: 'INT', value: 0 }, prof: { title: '', value: 0 }, item: 0, temp: 0, total: 1 },
        { title: 'Deception', mod: { title: 'CHA', value: 4 }, prof: { title: 'T', value: 5 }, item: 0, temp: 0, total: 7 },
        { title: 'Diplomacy', mod: { title: 'CHA', value: 4 }, prof: { title: 'T', value: 5 }, item: 0, temp: 0, total: 7 },
        { title: 'Intimidation', mod: { title: 'CHA', value: 4 }, prof: { title: '', value: 0 }, item: 0, temp: 0, total: 2 },
        { title: 'Medicine', mod: { title: 'WIS', value: 2 }, prof: { title: 'T', value: 5 }, item: 0, temp: 0, total: 11 },
        { title: 'Nature', mod: { title: 'WIS', value: 2 }, prof: { title: '', value: 0 }, item: 0, temp: 0, total: 9 },
        { title: 'Occultism', mod: { title: 'INT', value: 0 }, prof: { title: 'T', value: 5 }, item: 0, temp: 0, total: 6 },
        { title: 'Performance', mod: { title: 'CHA', value: 4 }, prof: { title: 'E', value: 7 }, item: 0, temp: 0, total: 2 },
        { title: 'Religion', mod: { title: 'WIS', value: 2 }, prof: { title: '', value: 0 }, item: 0, temp: 0, total: 4 },
        { title: 'Society', mod: { title: 'INT', value: 0 }, prof: { title: '', value: 0 }, item: 0, temp: 0, total: 1 },
        { title: 'Stealth', mod: { title: 'DEX', value: 2 }, prof: { title: '', value: 0 }, item: 0, temp: 0, total: 1 },
        { title: 'Survival', mod: { title: 'WIS', value: 2 }, prof: { title: '', value: 0 }, item: 0, temp: 0, total: 4 },
        { title: 'Thievery', mod: { title: 'DEX', value: 2 }, prof: { title: '', value: 0 }, item: 0, temp: 0, total: 1 },
        { title: 'Theater Lore', mod: { title: 'INT', value: 0 }, prof: { title: 'T', value: 5 }, item: 0, temp: 0, total: 6 },
    ],
    character: {
        hp: { current: 35, max: 35 },
        xp: 150,
        conditions: [],
        dying: 0,
        wounded: 0,
        abilityScores: [
            { title: 'STR', value: 10 },
            { title: 'DEX', value: 14 },
            { title: 'CON', value: 12 },
            { title: 'INT', value: 10 },
            { title: 'WIS', value: 14 },
            { title: 'CHA', value: 18 }
        ],
        classDC: {
            mod: { title: 'CHA', value: 4 },
            prof: { title: 'T', value: 5 },
            item: 0,
            temp: 0
        },
        movement: {
            speed: 25,
            types: [],
        },
        armor: {
            mod: { title: 'DEX', value: 2 },
            prof: { title: 'T', value: 5 },
            item: 1,
            temp: 0
        },
        shield: {
            bonus: 0,
            temp: 0,
            hardness: 0,
            bt: 3,
            hp: { current: 0, max: 6 }
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
                value: 9
            },
            {
                title: 'Will',
                prof: 'E',
                value: 9
            }
        ],
        perception: {
            mod: { title: 'WIS', value: 2 },
            prof: { title: 'E', value: 7 },
            item: 0,
            temp: 0,
            initiativeBonus: 2,
            senses: ['Low-light vision']
        },
        melee: [
            {
                name: 'Whip',
                mod: { title: 'STR', value: 0 },
                prof: { title: 'T', value: 5 },
                item: 0,
                temp: 0,
                dmg: '1d4',
                dmgType: ['Piercing'],
                traits: ['Disarm', 'Finesse', 'Nonlethal', 'Reach', 'Trip'],
                notes: 'You can use this weapon to Trip with the Athletics skill even if you don’t have a free hand. This uses the weapon’s reach (if different from your own) and adds the weapon’s item bonus to attack rolls as an item bonus to the Athletics check. If you critically fail a check to Trip using the weapon, you can drop the weapon to take the effects of a failure instead of a critical failure.'
            },
            {
                name: 'Rapier',
                mod: { title: 'STR', value: 0 },
                prof: { title: 'T', value: 5 },
                item: 0,
                temp: 0,
                dmg: '1d4',
                dmgType: ['Piercing'],
                traits: ['Deadly d8', 'Disarm', 'Finesse']
            },
            {
                name: 'Unarmed',
                mod: { title: 'STR', value: 0 },
                prof: { title: 'T', value: 5 },
                item: 0,
                temp: 0,
                dmg: '1d4+',
                dmgType: ['Bludgeoning'],
                traits: ['Agile', 'Finesse', 'Nonlethal', 'Unarmed']
            }
        ],
        ranged: [
            {
                name: 'Sling',
                mod: { title: 'DEX', value: 2 },
                prof: { title: 'T', value: 5 },
                item: 0,
                temp: 0,
                dmg: '1d6',
                dmgType: ['Bludgeoning'],
                traits: ['50 ft range', 'Propulsive'],
                ammo: 10,
            }
        ],
        weaponProf: {
            simple: 'Trained',
            martial: 'Untrained',
            unarmed: 'Trained',
            other: []
        }
    }
}