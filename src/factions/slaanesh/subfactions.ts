import BeastsOfChaosUnits from 'factions/beasts_of_chaos/units'
import { IItemDescription } from 'factions/factionTypes'
import { keyOmitter, keyPicker, pickEffects } from 'factions/metatagger'
import SlavesToDarknessUnits from 'factions/slaves_to_darkness/units'
import Artifacts from './artifacts'
import BattleTraits from './battle_traits'
import CommandAbilities from './command_abilities'
import CommandTraits from './command_traits'
import EndlessSpells from './endless_spells'
import Flavors from './flavors'
import Scenery from './scenery'
import Spells from './spells'
import Units from './units'

const baseSubfaction: IItemDescription = {
  effects: [],
  available: {
    artifacts: [Artifacts],
    battalions: [],
    command_abilities: [CommandAbilities],
    command_traits: [CommandTraits],
    endless_spells: [EndlessSpells],
    scenery: [Scenery],
    spells: [Spells],
    units: [
      Units,
      keyOmitter(SlavesToDarknessUnits, [
        'Gaunt Summoner on Disc of Tzeentch',
        'Theddra Skull-Scryer',
        'Godsworn Hunt',
        'Darkoath Warqueen',
        'Darkoath Chieftain',
        'Furies',
        'Raptoryx',
        'Splintered Fang',
        'Corvus Cabal',
        'The Unmade',
        'Cypher Lords',
        'Iron Golems',
        'Untamed Beasts',
        'Spire Tyrants',
        'Scions of the Flame',
        "Be'Lakor",
        'Mutalith Vortex Beast',
        'Fomoroid Crusher',
        'Mindstealer Sphiranx',
      ]),
      keyPicker(BeastsOfChaosUnits, [
        'Beastlord',
        'Bestigors',
        'Bullgors',
        'Centigors',
        'Cygor',
        'Doombull',
        'Dragon Ogor Shaggoth',
        'Dragon Ogors',
        'Ghorgon',
        'Gors',
        'Great Bray-Shaman',
        'Tuskgor Chariots',
        'Ungor Raiders',
        'Ungors',
      ]),
    ],
  },
}

const subFactions = {
  'Invaders Host': {
    effects: pickEffects(BattleTraits, ["The Despoiler's Art"]),
    available: {
      ...baseSubfaction.available,
      flavors: [keyPicker(Flavors, ['The Lurid Haze'])],
      command_traits: [
        keyPicker(CommandTraits, [
          'Best of the Best',
          'Glory Hog',
          'Hurler of Obscenities',
          'Territorial',
          'Skin-taker',
          'Delusions of Infallibility',
        ]),
      ],
      artifacts: [
        keyPicker(Artifacts, [
          'The Rod of Misrule',
          'Rapier of Ecstatic Conquest',
          'Whip of Subversion',
          'Icon of Infinite Excess',
          'Fallacious Gift',
          'The Beguiling Gem',
        ]),
      ],
    },
  },

  'Pretenders Host': {
    effects: pickEffects(BattleTraits, ['Magnificence Made Flesh']),
    available: {
      ...baseSubfaction.available,
      flavors: [keyPicker(Flavors, ['Faultless Blades'])],
      command_traits: [
        keyPicker(CommandTraits, [
          'Strength of Godhood',
          'Monarch of Lies',
          'Craving Stare',
          'Strongest Alone',
          'Hunter of Godbeasts',
          'Inspirer',
        ]),
      ],
      artifacts: [
        keyPicker(Artifacts, [
          'The Crown of Dark Secrets',
          'Pendant of Slaanesh',
          'Sliverslash',
          'Sceptre of Domination',
          'Breathtaker',
          'Mask of Spiteful Beauty',
        ]),
      ],
    },
  },

  'Godseekers Host': {
    effects: pickEffects(BattleTraits, ['Blessings of the Gleeful Chase']),
    available: {
      ...baseSubfaction.available,
      flavors: [keyPicker(Flavors, ['Scarlet Cavalcade'])],
      command_traits: [
        keyPicker(CommandTraits, [
          'Hunter Supreme',
          'Sweeping Slash',
          'Into the Fray',
          'Trail-sniffer',
          'Symphoniac',
          'Speed-chaser',
        ]),
      ],
      artifacts: [
        keyPicker(Artifacts, [
          'Cameo of the Dark Prince',
          'Girdle of the Realm-racer',
          'Threnody Voicebox',
          'Lash of Despair',
          'Enrapturing Circlet',
          'Bindings of Slaanesh',
        ]),
      ],
    },
  },

  "Syll'Esskan Host": {
    effects: pickEffects(BattleTraits, ['Vengeance Unleashed']),
    available: {
      ...baseSubfaction.available,
    },
  },
}

export default subFactions
