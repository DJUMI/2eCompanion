export default {
    FOCUS: [
        { 
            name: 'Goodberry', 
            level: '1',
            action: '2-Actions', 
            casts: '2', 
            traits: ['UNCOMMON', 'DRUID', 'HEALING', 'NECROMANCY'],
            cast: ['Somatic', 'Verbal'],
            range: { title: 'Range', info: 'touch'},
            target: { title: 'Targets', info: '1 ripe berry'},
            save: null,
            duration: { title: 'Duration', info: '10 minutes'},
            description: 'You imbue the target berry with the bounty of nature, turning it into a goodberry that can heal and sustain far beyond its normal capacity. A creature can eat the goodberry with an Interact action to regain 1d6+4 Hit Points. A berry not consumed during the duration withers away. Every six goodberries consumed gives as much nourishment as one square meal for a typical human.',
            castDescription: [],
            heightened: [{ title: 'Heightened (+1) ', info: 'You can target an additional berry. A creature can consume any number of goodberries from the same casting with a single Interact action.'}]
        },
    ],
    INNATE: [
        { 
            name: 'Forbidding Ward', 
            level: '1',
            action: '2-Actions', 
            traits: ['ABJURATION', 'CANTRIP'],
            cast: ['Somatic', 'Verbal'],
            range: { title: 'Range', info: '30 feet'},
            target: { title: 'Targets', info: '1 ally and 1 enemy'},
            save: null,
            duration: { title: 'Duration', info: 'sustained up to 1 minute'},
            description: 'You ward an ally against the attacks and hostile spells from the target enemy. The target ally gains a +1 status bonus to Armor Class and saving throws against the target enemy’s attacks, spells, and other effects.',
            castDescription: [],
            heightened: [{ title: 'Heightened (6th) ', info: 'The status bonus increases to +2'}]
        },
    ],
    CANTRIPS: [
        {
            name: 'Acid Splash', 
            level: '1',
            action: '2-Actions', 
            traits: ['ACID', 'ATTACK', 'CANTRIP', 'EVOCATION'],
            cast: ['Somatic', 'Verbal'],
            range: { title: 'Range', info: '30 feet'},
            target: { title: 'Targets', info: '1 creature or object'},
            save: null,
            duration: null,
            description: 'You splash a glob of acid that splatters creatures and objects alike. Make a spell attack. If you hit, you deal 1d6 acid damage plus 1 splash acid damage. On a critical success, the target also takes 1 persistent acid damage.',
            castDescription: [],
            heightened: [
                { title: 'Heightened (3rd) ', info: 'The initial damage increases to 1d6 + your spellcasting ability modifier, and the persistent damage increases to 2.'},
                { title: 'Heightened (5th) ', info: 'The initial damage increases to 2d6 + your spellcasting ability modifier, and the persistent damage increases to 3, and the splash damage increases to 2.'},
                { title: 'Heightened (7th) ', info: 'The initial damage increases to 3d6 + your spellcasting ability modifier, and the persistent damage increases to 4, and the splash damage increases to 3.'},
                { title: 'Heightened (9th) ', info: 'The initial damage increases to 4d6 + your spellcasting ability modifier, and the persistent damage increases to 5, and the splash damage increases to 4.'},
            ]
        },
        {
            name: 'Detect Magic', 
            level: '1',
            action: '2-Actions', 
            traits: ['CANTRIP', 'DETECTION', 'DIVINATION'],
            cast: ['Somatic', 'Verbal'],
            range: { title: 'Area', info: '30-foot emanation'},
            target: null,
            save: null,
            duration: null,
            description: 'You send out a pulse that registers the presence of magic. You receive no information beyond the presence or absence of magic. You can choose to ignore magic you’re fully aware of, such as the magic items and ongoing spells of you and your allies. You detect illusion magic only if that magic’s effect has a lower level than the level of your detect magic spell. However, items that have an illusion aura but aren’t deceptive in appearance (such as an invisibility potion) typically are detected normally.',
            castDescription: [],
            heightened: [
                { title: 'Heightened (3rd) ', info: 'You learn the school of magic for the highestlevel effect within range that the spell detects. If multiple effects are equally strong, the GM determines which you learn.'},
                { title: 'Heightened (4th) ', info: 'As 3rd level, but you also pinpoint the source of the highest-level magic. Like for an imprecise sense, you don’t learn the exact location, but can narrow down the source to within a 5-foot cube (or the nearest if larger than that).'}
            ]
        },
        {
            name: 'Guidance', 
            level: '1',
            action: '1-Action', 
            traits: ['CANTRIP', 'DIVINATION'],
            cast: ['Somatic', 'Verbal'],
            range: { title: 'Range', info: '30 feet'},
            target: { title: 'Targets', info: '1 creature'},
            save: null,
            duration: { title: 'Duration', info: 'until the start of your next turn'},
            description: 'You ask for divine guidance, granting the target a +1 status bonus to one attack roll, Perception check, saving throw, or skill check the target attempts before the duration ends. The target chooses which roll to use the bonus on before rolling. If the target uses the bonus, the spell ends. Either way, the target is then temporarily immune for 1 hour.',
            castDescription: [],
            heightened: []
        },
        {
            name: 'Stabilize', 
            level: '1',
            action: '2-Actions', 
            traits: ['CANTRIP','HEALING', 'NECROMANCY', 'POSITIVE'],
            cast: ['Somatic', 'Verbal'],
            range: { title: 'Range', info: '30 feet'},
            target: { title: 'Targets', info: '1 dying creature'},
            save: null,
            duration: null,
            description: 'Positive energy shuts death’s door. The target loses the dying condition, though it remains unconscious at 0 Hit Points.',
            castDescription: [],
            heightened: []
        },
        {
            name: 'Tanglefoot', 
            level: '1',
            action: '2-Actions', 
            traits: ['CANTRIP', 'CONJURATION', 'PLANT'],
            cast: ['Somatic', 'Verbal'],
            range: { title: 'Range', info: '30 feet'},
            target: { title: 'Targets', info: '1 creature'},
            save: null,
            duration: null,
            description: 'A vine covered in sticky sap appears from thin air, flicking from your hand and lashing itself to the target. Attempt a spell attack against the target.',
            castDescription: [
                { title: 'Critical Success ', info: 'The target gains the immobilized condition and takes a –10-foot circumstance penalty to its Speeds for 1 round. It can attempt to Escape against your spell DC to remove the penalty and the immobilized condition.' },
                { title: 'Critical Success ', info: 'The target takes a –10-foot circumstance penalty to its Speeds for 1 round. It can attempt to Escape against your spell DC to remove the penalty.' },
                { title: 'Failure ', info: 'The target is unaffected' }
            ],
            heightened: [
                { title: 'Heightened (2nd) ', info: 'The effects lasts for 2 rounds.'},
                { title: 'Heightened (4th) ', info: 'The effects lasts for 1 minute.'}
            ]
        },
    ],
    SPELLS: [
        {
            level: '2',
            spells: [
                { 
                    name: 'Burning Hands', 
                    level: '1',
                    action: '2-Actions', 
                    casts: '1', 
                    traits: ['EVOCATION', 'FIRE'],
                    cast: ['Somatic', 'Verbal'],
                    range: { title: 'Area', info: '15-foot cone'},
                    target: null,
                    save: { title: 'Saving Throw', info: 'basic Reflex' },
                    duration: null,
                    description: 'Gouts of flame rush from your hands. You deal 2d6 fire damage to creatures in the area.',
                    castDescription: [],
                    heightened: [{ title: 'Heightened (+1) ', info: 'The damage increases by 2d6.'}]
                },
                { 
                    name: 'Heal', 
                    level: '1',
                    action: '2-Actions', 
                    casts: '1', 
                    traits: ['HEALING', 'NECROMANCY', 'POSITIVE'],
                    cast: [],
                    range: { title: 'Range', info: 'varies'},
                    target: { title: 'Targets', info: '1 willing living creature or 1 undead creature' },
                    save: null,
                    duration: null,
                    description: 'You channel positive energy to heal the living or damage the undead. If the target is a willing living creature, you restore 1d8 Hit Points. If the target is undead, you deal that amount of positive damage to it, and it gets a basic Fortitude save. The number of actions you spend when Casting this Spell determines its targets, range, area, and other parameters.',
                    castDescription: [
                        { title: '1-Action (somatic) ', info: 'The spell has a range of touch.'},
                        { title: '2-Action (verbal, somatic) ', info: 'The spell has a range of 30 feet. If you’re healing a living creature, increase the Hit Points restored by 8.' },
                        { title: '3-Action (material, somatic, verbal) ', info: 'You disperse positive energy in a 30-foot emanation. This targets all living and undead creatures in the burst.' }
                    ],
                    heightened: [
                        { title: 'Heightened (+1) ', info: 'The amount of healing or damage increases by 1d8, and the extra healing for the 2-action version increases by 8.'}
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
                    casts: '1', 
                    traits: ['EVOCATION', 'FIRE'],
                    cast: ['Somatic', 'Verbal'],
                    range: { title: 'Area', info: '15-foot cone'},
                    target: null,
                    save: { title: 'Saving Throw', info: 'basic Reflex' },
                    duration: null,
                    description: 'Gouts of flame rush from your hands. You deal 2d6 fire damage to creatures in the area.',
                    castDescription: [],
                    heightened: [{ title: 'Heightened (+1) ', info: 'The damage increases by 2d6.'}]
                },
                { 
                    name: 'Heal', 
                    level: '1',
                    action: '2-Actions', 
                    casts: '2', 
                    traits: ['HEALING', 'NECROMANCY', 'POSITIVE'],
                    cast: [],
                    range: { title: 'Range', info: 'varies'},
                    target: { title: 'Targets', info: '1 willing living creature or 1 undead creature' },
                    save: null,
                    duration: null,
                    description: 'You channel positive energy to heal the living or damage the undead. If the target is a willing living creature, you restore 1d8 Hit Points. If the target is undead, you deal that amount of positive damage to it, and it gets a basic Fortitude save. The number of actions you spend when Casting this Spell determines its targets, range, area, and other parameters.',
                    castDescription: [
                        { title: '1-Action (somatic) ', info: 'The spell has a range of touch.'},
                        { title: '2-Action (verbal, somatic) ', info: 'The spell has a range of 30 feet. If you’re healing a living creature, increase the Hit Points restored by 8.' },
                        { title: '3-Action (material, somatic, verbal) ', info: 'You disperse positive energy in a 30-foot emanation. This targets all living and undead creatures in the burst.' }
                    ],
                    heightened: [
                        { title: 'Heightened (+1) ', info: 'The amount of healing or damage increases by 1d8, and the extra healing for the 2-action version increases by 8.'}
                    ]
                 }
            ]
        },
    ],
}