import {
  BEASTS_OF_CHAOS,
  BIG_WAAAGH,
  BONESPLITTERZ,
  CHAOS_GRAND_ALLIANCE,
  CITIES_OF_SIGMAR,
  DAUGHTERS_OF_KHAINE,
  DEATH_GRAND_ALLIANCE,
  DESTRUCTION_GRAND_ALLIANCE,
  EVERCHOSEN,
  FLESH_EATER_COURTS,
  FYRESLAYERS,
  GLOOMSPITE_GITZ,
  GRAND_HOST_OF_NAGASH,
  IDONETH_DEEPKIN,
  IRONJAWZ,
  KHARADRON_OVERLORDS,
  KHORNE,
  LEGION_OF_BLOOD,
  LEGION_OF_NIGHT,
  LEGION_OF_SACRAMENT,
  LEGIONS_OF_AZGORH,
  LEGIONS_OF_GRIEF,
  LETHISIAN_DEFENDERS,
  MERCENARY_COMPANIES,
  NIGHTHAUNT,
  NURGLE,
  OGOR_MAWTRIBES,
  ORDER_GRAND_ALLIANCE,
  OSSIARCH_BONEREAPERS,
  SERAPHON,
  SKAVEN,
  SLAANESH,
  SLAVES_TO_DARKNESS,
  SOULBLIGHT,
  STORMCAST_ETERNALS,
  SYLVANETH,
  TAMURKHANS_HORDE,
  TOMB_KINGS,
  TZEENTCH,
  WANDERERS,
} from 'meta/factions'
import { TImportParsers, WARSCROLL_BUILDER, AZYR, BATTLESCRIBE, UNKNOWN } from 'types/import'

// Add common typos here
// Warscroll Builder on the left - AoS Reminders on the right
const warscrollTypoMap: TNameMap = {
  'Aetherspheric Endrinds': 'Aetherspheric Endrins',
  'Anointed of Asuryan on Flamespyre Phoenix': 'Anointed on Flamespyre Phoenix',
  'Anointed of Asuryan on Frostheart Phoenix': 'Anointed on Frostheart Phoenix',
  'Arch Sorcerer': 'Arch-Sorcerer',
  'Armor of Silvered Sigmarite': 'Armour of Silvered Sigmarite',
  'Blade of All Frost': 'Blade of All-Frost',
  'Blade of the All-Frost': 'Blade of All-Frost',
  'Bursting with Power': "Burstin' with Power",
  'Dark Wizardy': 'Dark Wizardry (Royalty)',
  'Devoted Desciples': 'Devoted Disciples',
  'Evocators on Dracolines': 'Evocators on Celestial Dracolines',
  'Exalted Deathbringer with Impaling Spear': 'Exalted Deathbringer',
  'Explosize Charge': 'Explosive Charge',
  'Great Bray Shaman of Slaanesh': 'Great Bray-Shaman',
  'Great Bray Shaman': 'Great Bray-Shaman',
  'Great-Bray Shaman': 'Great Bray-Shaman',
  'Gristlegore Royal Terrorgheist': 'Royal Terrorgheist',
  'Gristlegore Royal Zombie Dragon': 'Royal Zombie Dragon',
  'Grot Scraplauncher': 'Gnoblar Scraplauncher',
  'Guardian of Souls with Nightmare Lantern': 'Guardian of Souls',
  'Hammers of Aurgury': 'Hammers of Augury',
  'Hellstriders with Claw-spears': 'Hellstriders',
  'Hellstriders with Hellscourges': 'Hellstriders',
  'Horn of Consort': 'Horn of the Consort',
  'Horrible Resilient': 'Horribly Resilient',
  'Katakros, Mortarch of the Necropolis': 'Katakros',
  'Khorghos Khul': 'Korghos Khul',
  'Lighntning Blast': 'Lightning Blast',
  'Lunestone Talisman': 'Loonstone Talisman',
  'Lynus Ghalmorian on Gryph-Charger': 'Lynus Ghalmorian on Gryph Charger',
  'Magestic Horror': 'Majestic Horror (Royalty)',
  'Mannfred Mortarch of Night': 'Mannfred, Mortarch of Night',
  'Orruk Gore Gruntas': 'Orruk Gore-gruntas',
  'Terrorghiest Mantle': 'Terrorgheist Mantle',
  'The Blade of Endless Bloodshed': 'Blade of Endless Bloodshed',
  'The Grand Fyrd of Furious Peak': 'The Grand Fyrd of Furios Peak',
  'Tzaangor Enlightened on Disc': 'Tzaangor Enlightened',
  'Vokmortian, Master of the Bone-tithe': 'Vokmortian',
  'Vulturnos, High King of the Deep': 'Volturnos, High King of the Deep',
  'Warrior Indomniate': 'Warrior Indominate',
  'Windshief Charm': 'Windthief Charm',
  "Anraheir's Claw": "Anraheirs's Claw",
  "Mastro Vivetti's Maginificent Macroscope": "Mastro Vivetti's Magnificent Macroscope (Greywater Fastness)",
  Ogors: 'Ogor Gluttons',
}

// Azyr on the left - AoS Reminders on the right
const azyrTypoMap: TNameMap = {
  'Bursting with Power': "Burstin' with Power",
  'Druid of the Everspring Circle': 'Druid of the Everspring (Living City)',
  'Greywater Artillery Battery': 'Greywater Artillery Company',
  'Hellstriders with Claw-spears': 'Hellstriders',
  'Hellstriders with Hellscourges': 'Hellstriders',
  'Keen Clawed': 'Keen-clawed',
  'Madcap Shamans': 'Madcap Shaman',
  'Ogors Gluttons': 'Ogor Gluttons',
  'The Blood-forged Armour': 'Blood-forged Armour',
  'The Brazen Rune': 'Brazen Rune',
}

// Battlescribe on the left - AoS Reminders on the right
const battlescribeTypoMap: TNameMap = {
  'Abhorrant Ghoul King on Terrorgheist': 'Abhorrant Ghoul King on Royal Terrorgheist',
  'Atherquartz Brooch': 'Aetherquartz Brooch',
  'Aventis Firestrike, Magister of Hammerhal': 'Aventis Firestrike',
  'Bladebringer on Hellflayer': 'Bladebringer, Herald on Hellflayer',
  'Blood River Chalice': 'Blood-river Chalice',
  'Boingrot Bounders': 'Boingrot Bounderz',
  'Celestant-Prime, Hammer of Sigmar': 'Celestant-Prime',
  'Chronomatic Cogs': 'Chronomantic Cogs',
  'Cloying Sea Mists': 'Cloying Seas Mists',
  'Corpse Cart with Unholy Lodestone': 'Corpse Cart w/ Unholy Lodestone',
  'DHOM-HAIN': 'Dhom Hain (Enclave)',
  'Epicurean Raiders': 'Epicurean Revellers',
  'Geminids of Uhl-Gyish': 'Geminids of Uhl-Gysh',
  'Guardian of Souls with Mortality Glass': 'Guardian of Souls w/ Mortality Glass',
  'Guardian of Souls with Nightmare Lantern': 'Guardian of Souls',
  'Helblaster Volly Gun': 'Helblaster Volley Gun',
  'Hellflayers of Slaanesh': 'Hellflayer',
  'Helm of Obsidian': 'Helm of Obsidia',
  'Incandescent Rectices': 'Incandescent Rectrices',
  'Light of Dracothian': 'Light of Dracothion',
  'Mazrall the Butcher, Daemon Prince of Khorne': 'Mazarall the Butcher',
  'Mazrall the Butcher': 'Mazarall the Butcher',
  'Prosecutor with Celestial Hammers': 'Prosecutors with Celestial Hammers',
  'Prosecutor with Stormcall Javelins': 'Prosecutors with Stormcall Javelins',
  'Reiknor the Grimhailer': 'Reikenor the Grimhailer',
  'Savage Orruks Arrowboys': 'Savage Orruk Arrowboys',
  'Shasdow Warrior': 'Shadow Warriors',
  'Sneaky Shufflers': 'Sneaky Snufflers',
  'Staff of Occular Optimisation': 'Staff of Ocular Optimisation',
  'The Beguilling Gem': 'Beguiling Gem (Chaos)',
  'Tzaangor Enlightened on Discs of Tzeentch': 'Tzaangor Enlightened',
  'Vanguard-Raptor with Hurricane Crossbow': 'Vanguard-Raptors with Hurricane Crossbows',
  'Vanguard-Raptor with Longstrike Crossbow': 'Vanguard-Raptors with Longstrike Crossbows',
  'Vulkite Bezerkers': 'Vulkite Berzerkers',
  'Warp Lighting Storm': 'Warp Lightning Storm',
  'Warrgog Prophet': 'Wurrgog Prophet',
  'Zharrgron Flame Splitter': 'Zharrgron Flame-spitter',
  "Anraheir's Claw": "Anraheirs's Claw",
  "Dracothian's Tail": "Dracothion's Tail",
  "Gattleson's Endless Repeater": "Gattlesson's Endless Repeater (AETHERMATIC WEAPON)",
  "Ironskull'z Boyz": "Ironskull's Boyz",
  "Might 'Eadbutt": "Mighty 'Eadbutt",
  BRIOMIDAR: 'Briomdar (Enclave)',
  Protector: 'Protectors',
  Voxaxe: 'Vosaxe',
}

// Azyr helper
export const factionToAllegianceMap = {
  'Clans Eshin': 'Masters of Murder (Eshin)',
  'Clans Moulder': 'Prized Creations (Moulder)',
  'Clans Pestilens': 'Echoes of the Great Plagues (Pestilens)',
  'Clans Skryre': 'Warpstone Sparks (Skryre)',
  'Clans Verminus': 'Mighty Warlords (Verminus)',
}

// If a certain trait maps to a specific unit type, put it here
export const importUnitOptionMap = {
  'Ark of Sotek': 'Bastiladon w/ Ark of Sotek',
  'Balefire Brazier': 'Corpse Cart w/ Balefire Brazier',
  'Celestial Hammer(s)': 'Prosecutors with Celestial Hammers',
  'Cloak of Feathers': 'Skink Priest w/ Cloak of Feathers',
  'Living Whip': 'Keeper of Secrets w/ Living Whip',
  'Priestly Trappings': 'Skink Priest w/ Priestly Trappings',
  'Ritual Knife': 'Keeper of Secrets w/ Ritual Knife',
  'Shining Aegis': 'Keeper of Secrets w/ Shining Aegis',
  'Sinistrous Hand': 'Keeper of Secrets w/ Sinistrous Hand',
  'Skystreak Bow': 'Stegadon w/ Skystreak Bow',
  'Solar Engine': 'Bastiladon w/ Solar Engine',
  'Stormcall Javelins': 'Prosecutors with Stormcall Javelins',
  'Sunfire Throwers': 'Stegadon w/ Sunfire Throwers',
  'Unholy Lodestone': 'Corpse Cart w/ Unholy Lodestone',
}

export const importFactionNameMap = {
  'Beastclaw Raiders': OGOR_MAWTRIBES,
  'Beasts of Chaos': BEASTS_OF_CHAOS,
  'Big Waaagh!': BIG_WAAAGH,
  'Blades of Khorne': KHORNE,
  'Cities of Sigmar': CITIES_OF_SIGMAR,
  'Clans Eshin': SKAVEN,
  'Clans Moulder': SKAVEN,
  'Clans Pestilens': SKAVEN,
  'Clans Skryre': SKAVEN,
  'Clans Verminus': SKAVEN,
  'Daughters of Khaine': DAUGHTERS_OF_KHAINE,
  'Disciples of Tzeentch': TZEENTCH,
  'Flesh Eater Courts': FLESH_EATER_COURTS,
  'Flesh-eater Courts': FLESH_EATER_COURTS,
  'Gitmob Grots': GLOOMSPITE_GITZ,
  'Gloomspite Gitz': GLOOMSPITE_GITZ,
  'Grand Host of Nagash': GRAND_HOST_OF_NAGASH,
  'Greyfyrd Lodge': MERCENARY_COMPANIES,
  'Grugg Brothers': MERCENARY_COMPANIES,
  Gutbusters: OGOR_MAWTRIBES,
  'Hedonites of Slaanesh': SLAANESH,
  'Idoneth Deepkin': IDONETH_DEEPKIN,
  'Kharadron Overlords': KHARADRON_OVERLORDS,
  'Legion of Azgorh': LEGIONS_OF_AZGORH,
  'Legion of Blood': LEGION_OF_BLOOD,
  'Legion of Grief': LEGIONS_OF_GRIEF,
  'Legion of Night': LEGION_OF_NIGHT,
  'Legion of Sacrament': LEGION_OF_SACRAMENT,
  'Lethisian Defenders': LETHISIAN_DEFENDERS,
  'Maggotkin of Nurgle': NURGLE,
  'Mercenaries: Greyfyrd Lodge': MERCENARY_COMPANIES,
  'Mercenaries: Grugg Brothers': MERCENARY_COMPANIES,
  'Mercenaries: Order of the Blood-Drenched Rose': MERCENARY_COMPANIES,
  'Mercenaries: Rampagers': MERCENARY_COMPANIES,
  'Mercenaries: Sons of the Lichemaster': MERCENARY_COMPANIES,
  'Mercenaries: Tenebrous Court': MERCENARY_COMPANIES,
  'Mercenaries: The Blacksmoke Battery': MERCENARY_COMPANIES,
  'Mercenaries: The Gutstuffers': MERCENARY_COMPANIES,
  'Moonclan Grots': GLOOMSPITE_GITZ,
  'Ogor Mawtribes': OGOR_MAWTRIBES,
  'Order of the Blood-Drenched Rose': MERCENARY_COMPANIES,
  'Orruk Warclans': BIG_WAAAGH,
  'Ossiarch Bonereapers': OSSIARCH_BONEREAPERS,
  'Slaves to Darkness': SLAVES_TO_DARKNESS,
  'Sons of the Lichemaster': MERCENARY_COMPANIES,
  'Spiderfang Grots': GLOOMSPITE_GITZ,
  'Stormcast Eternals': STORMCAST_ETERNALS,
  'Tenebrous Court': MERCENARY_COMPANIES,
  'The Blacksmoke Battery': MERCENARY_COMPANIES,
  'The Gutstuffers': MERCENARY_COMPANIES,
  'Tomb Kings (Compendium)': TOMB_KINGS,
  'Tomb Kings': TOMB_KINGS,
  "Mercenaries: Nimyard's Rough-Riders": MERCENARY_COMPANIES,
  "Mercenaries: Skroug's Menagerie": MERCENARY_COMPANIES,
  "Nimyard's Rough-Riders": MERCENARY_COMPANIES,
  "Skroug's Menagerie": MERCENARY_COMPANIES,
  "Tamurkhan's Horde": TAMURKHANS_HORDE,
  Bonesplitterz: BONESPLITTERZ,
  Brayherd: BEASTS_OF_CHAOS,
  Chaos: CHAOS_GRAND_ALLIANCE,
  Death: DEATH_GRAND_ALLIANCE,
  Destruction: DESTRUCTION_GRAND_ALLIANCE,
  Everchosen: EVERCHOSEN,
  Fyreslayers: FYRESLAYERS,
  Ironjawz: IRONJAWZ,
  Khorne: KHORNE,
  Lethisian: LETHISIAN_DEFENDERS,
  Nighthaunt: NIGHTHAUNT,
  Nurgle: NURGLE,
  Order: ORDER_GRAND_ALLIANCE,
  Rampagers: MERCENARY_COMPANIES,
  Seraphon: SERAPHON,
  Skaventide: SKAVEN,
  Slaanesh: SLAANESH,
  Soulblight: SOULBLIGHT,
  Sylvaneth: SYLVANETH,
  Thunderscorn: BEASTS_OF_CHAOS,
  Tzeentch: TZEENTCH,
  Wanderers: WANDERERS,
  Warherds: BEASTS_OF_CHAOS,
}

export type TNameMap = { [key: string]: string }

// A map to help the user when Azyr uses the same name for multiple warscrolls
// eg 'Lord-Arcanum on Celestial Dracoline' is one of a number of units just called 'Lord-Arcanum'
// AoS Reminders on the left - Azyr on the right
// Note that the AoS Reminders version is what it *does* import as. This can be the same as
// the Azyr string, which just means there is a unit exactly called what Azyr lists multiple
// units as, or it can be different, meaning multiple units from Azyr map to one in AoS Reminders
// by a partial match.
export const azyrAmbiguousNamesMap = {
  'Abhorrant Ghoul King': 'Abhorrant Ghoul King',
  'Arachnarok Spider with Flinger': 'Arachnarok Spider',
  'Auric Runefather': 'Auric Runefather',
  'Auric Runesmiter': 'Auric Runesmiter',
  'Auric Runeson': 'Auric Runeson',
  'Bladebringer, Herald on Exalted Chariot': 'Bladebringer',
  'Bloodthirster of Insensate Rage': 'Bloodthirster',
  'Corpse Cart w/ Balefire Brazier': 'Corpse Cart',
  'Eidolon of Mathlann, Aspect of the Sea': 'Eidolon of Mathlann',
  'Grey Seer': 'Grey Seer',
  'Herald of Tzeentch': 'Herald of Tzeentch',
  'Knight of Shrouds': 'Knight of Shrouds',
  'Lord-Arcanum': 'Lord-Arcanum',
  'Lord-Celestant': 'Lord-Celestant',
  'Plague Priest': 'Plague Priest',
  'Prosecutors with Stormcall Javelins': 'Prosecutors',
  'Vanguard-Raptors with Hurricane Crossbows': 'Vanguard-Raptors',
  'Wight King with Baleful Tomb Blade': 'Wight King',
  Evocators: 'Evocators',
  Loonboss: 'Loonboss',
}

type TParserOptions = {
  [key in TImportParsers]: {
    ambiguousNamesMap: TNameMap
    checkPoorSpacing: boolean
    fileReadError: string
    typoMap: TNameMap
  }
}

export const parserOptions: TParserOptions = {
  [WARSCROLL_BUILDER]: {
    ambiguousNamesMap: {},
    checkPoorSpacing: false,
    fileReadError: `There was a problem reading this file. Please try re-downloading it from ${WARSCROLL_BUILDER}.`,
    typoMap: warscrollTypoMap,
  },
  [AZYR]: {
    ambiguousNamesMap: azyrAmbiguousNamesMap,
    checkPoorSpacing: true,
    fileReadError: `There was a problem reading this file.`,
    typoMap: azyrTypoMap,
  },
  [BATTLESCRIBE]: {
    ambiguousNamesMap: {},
    checkPoorSpacing: false,
    fileReadError: `There was a problem reading this file.`,
    typoMap: battlescribeTypoMap,
  },
  [UNKNOWN]: {
    ambiguousNamesMap: {},
    checkPoorSpacing: false,
    fileReadError: `This file format is not recognized.`,
    typoMap: {},
  },
}
