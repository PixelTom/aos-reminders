import { tagAs } from 'factions/metatagger'
import { HERO_PHASE, WOUND_ALLOCATION_PHASE } from 'types/phases'
import rule_sources from './rule_sources'

const DrainVitalityEffect = {
  name: `Drain Vitality`,
  desc: `Casting value of 6. Pick 1 enemy unit within 18" of the caster and visible to them. Until your next hero phase, reroll unmodified hit rolls of 6 for attacks made by that unit, and reroll unmodified save rolls of 6 for attacks that target that unit.`,
  when: [HERO_PHASE],
  shared: true,
}

const ReinforceBattleShieldsEffects = [
  {
    name: `Reinforce Battle-shields`,
    desc: `Reinforce Battle-shields has a casting value of 6. Pick 1 friendly OSSIARCH BONEREAPERS unit armed wit Shields or Nadirite Battle-shields that is wholly within 24" of the caster and visible to them. Until the start of your next hero phase, roll a D6 each time you allocate a mortal wound to that unit. On a 5+ that wound is negated.`,
    when: [HERO_PHASE],
    shared: true,
  },
  {
    name: `Reinforce Battle-shields`,
    desc: `If active, roll a D6 each time you allocate a mortal wound to that unit. On a 5+ that wound is negated.`,
    when: [WOUND_ALLOCATION_PHASE],
    shared: true,
  },
]

const ArcaneCommandEffect = {
  name: `Arcane Command`,
  desc: `Casting value of 5. You receive D3 relentless discipline points.`,
  when: [HERO_PHASE],
  shared: true,
}

const EmpowerNadiriteWeaponsEffect = {
  name: `Empower Nadirite Weapons`,
  desc: `Casting value of 5. Pick 1 friendly OSSIARCH BONEREAPERS unit with the Nadirite Weapons ability that is wholly within 24" of the caster and visible to them. Until the start of your next hero phase, that unit's Nadirite's Weapons ability causes 2 hits to be scored on an unmodified hit roll of 5+ instead of 6, or 4+ instead of 6 for a charging KAVALOS DEATHRIDERS unit attacking with Nadirite Spears.`,
  when: [HERO_PHASE],
  shared: true,
}

const ProtectionOfNagashEffect = {
  name: `Protection of Nagash`,
  desc: `Casting value of 6. Roll a D6 each time a wound or mortal wounds is allocated to the caster. On a 5+, that wound or mortal wound is negated. If any wounds or mortal wounds are allocated to the caster and not negated, and the caster is not slain, remove them from the battlefield after all wounds or mortal wounds have been allocated. Then, set them up anywhere on the battlefield more than 9" from any enemy units. After setting up the model, or if the model cannot be removed from or set up on the battlefield, this spell is unbound.`,
  when: [HERO_PHASE],
  rule_sources: [rule_sources.BATTLETOME_OSSIARCH_BONEREAPERS, rule_sources.ERRATA_OCTOBER_2022],
  shared: true,
}

const MortalContractEffect = {
  name: `Mortal Contract`,
  desc: `Casting value of 7. Pick 1 enemy unit within 18" of the caster and visible to them. For the rest of the battle, roll a D6 at the end of each phase during which any attacks made by that unit inflicted any damage on a friendly OSSIARCH BONEREAPERS unit. On a 3+, that enemy unit suffers D3 mortal wounds. You cannot pick the same unit to be the target of this spell more than once per battle.`,
  when: [HERO_PHASE],
  rule_sources: [rule_sources.BATTLETOME_OSSIARCH_BONEREAPERS, rule_sources.ERRATA_JULY_2021],
  shared: true,
}

const Spells = {
  'Arcane Command': {
    effects: [ArcaneCommandEffect],
  },
  'Empower Nadirite Weapons': {
    effects: [EmpowerNadiriteWeaponsEffect],
  },
  'Protection of Nagash': {
    effects: [ProtectionOfNagashEffect],
  },
  'Reinforce Battle-shields': {
    effects: [...ReinforceBattleShieldsEffects],
  },
  'Drain Vitality': {
    effects: [DrainVitalityEffect],
  },
  'Mortal Contract ': {
    effects: [MortalContractEffect],
  },
  //Vokmortian spell
  'Mortal Touch': {
    effects: [
      {
        name: `Mortal Touch`,
        desc: `Casting value of 8. Pick 1 enemy model within 1" of the caster that is visible to them and roll a D6. On a 5+, that model is slain. The range of this spell cannot be modified.`,
        when: [HERO_PHASE],
      },
    ],
  },
  //Soulmason spell
  'Soul-guide': {
    effects: [
      {
        name: `Soul-guide`,
        desc: `Casting value of 6. Pick 1 friendly OSSIARCH BONEREAPERS unit wholly within 24" of the caster that is visible to them. You can reroll hit rolls of 1 for attacks made by that unit until your next hero phase.`,
        when: [HERO_PHASE],
      },
    ],
  },
  //Soulreaper spell
  'Soul-blast': {
    effects: [
      {
        name: `Soul-blast`,
        desc: `Casting value of 7. You can either roll 1 dice for each enemy unit within 3" of the caster or roll 1 dice for 1 enemy unit within 18" of the caster that is visible to them. On a 1, nothing happens. On a 2-3, that unit suffers 1 mortal wound. On a 4+, that unit suffers D3 mortal wounds.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Lore of the Mortisans': {
    effects: [
      ...ReinforceBattleShieldsEffects,
      ArcaneCommandEffect,
      DrainVitalityEffect,
      EmpowerNadiriteWeaponsEffect,
      MortalContractEffect,
      ProtectionOfNagashEffect,
    ],
  },
  'Shard-storm': {
    effects: [
      {
        name: `Shard-storm`,
        desc: `Casting value of 5. Pick 1 enemy unit and roll 1 dice for each model from that unit that is within 18" of the caster and visible to them. For each 6, that unit suffers 1 mortal wound.`,
        when: [HERO_PHASE],
      },
    ],
  },
}

export default tagAs(Spells, 'spell')
