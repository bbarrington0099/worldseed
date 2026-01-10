import { Prisma } from '@prismagen/client';
import * as db from '@lib/db-seed';
import { Races } from './index';

type SubracePayload = Prisma.SubraceGetPayload<{}>;
export interface Subraces {
	aasimar_protector_aasimar: SubracePayload;
	aasimar_scourge_aasimar: SubracePayload;
	aasimar_fallen_aasimar: SubracePayload;
	dragonborn_chromatic_dragonborn: SubracePayload;
	dragonborn_metallic_dragonborn: SubracePayload;
	dragonborn_gem_dragonborn: SubracePayload;
	dwarf_hill_dwarf: SubracePayload;
	dwarf_mountain_dwarf: SubracePayload;
	dwarf_duergar: SubracePayload;
	elf_high_elf: SubracePayload;
	elf_wood_elf: SubracePayload;
	elf_dark_elf_drow: SubracePayload;
	elf_sea_elf: SubracePayload;
	elf_eladrin: SubracePayload;
	elf_shadar_kai: SubracePayload;
	elf_pallid_elf: SubracePayload;
	genasi_air_genasi: SubracePayload;
	genasi_earth_genasi: SubracePayload;
	genasi_fire_genasi: SubracePayload;
	genasi_water_genasi: SubracePayload;
	gnome_forest_gnome: SubracePayload;
	gnome_rock_gnome: SubracePayload;
	gnome_svirfneblin: SubracePayload;
	half_elf_aquatic_half_elf: SubracePayload;
	half_elf_drow_half_elf: SubracePayload;
	half_elf_high_half_elf: SubracePayload;
	half_elf_wood_half_elf: SubracePayload;
	halfling_lightfoot_halfling: SubracePayload;
	halfling_stout_halfling: SubracePayload;
	halfling_ghostwise_halfling: SubracePayload;
	human_variant_human: SubracePayload;
	human_mark_of_finding_human: SubracePayload;
	human_mark_of_handling_human: SubracePayload;
	human_mark_of_making_human: SubracePayload;
	human_mark_of_passage_human: SubracePayload;
	human_mark_of_sentinel_human: SubracePayload;
	shifter_beasthide_shifter: SubracePayload;
	shifter_longtooth_shifter: SubracePayload;
	shifter_swiftstride_shifter: SubracePayload;
	shifter_wildhunt_shifter: SubracePayload;
	tiefling_asmodeus_tiefling: SubracePayload;
	tiefling_baalzebul_tiefling: SubracePayload;
	tiefling_dispater_tiefling: SubracePayload;
	tiefling_fierna_tiefling: SubracePayload;
	tiefling_glasya_tiefling: SubracePayload;
	tiefling_levistus_tiefling: SubracePayload;
	tiefling_mammon_tiefling: SubracePayload;
	tiefling_mephistopheles_tiefling: SubracePayload;
	tiefling_zariel_tiefling: SubracePayload;
	yuan_ti_pureblood_yuan_ti: SubracePayload;
	gith_githyanki: SubracePayload;
	gith_githzerai: SubracePayload;
}

interface SeedSubracesParams {
	races: Races;
}
export async function seedSubraces(
	params: SeedSubracesParams
): Promise<Subraces> {
	const { races } = params;
	return {
		aasimar_protector_aasimar: await db.createSubrace({
			id: 'subrace-aasimar-protector-aasimar',
			name: 'Protector Aasimar',
			description:
				'Protector aasimar are charged by the powers of good to guard the weak, to seek out evil, and to stand vigilant against the darkness.',
			playstyle:
				'Defensive support with healing and radiant damage. Perfect for players who want to protect allies while dealing divine damage.',
			additionalProperties: {
				alabastriaContext:
					"Protector Aasimar in Skratonia's temples serve as divine guardians, their radiant wings inspiring hope in the faithful. They often work alongside Tharos Raggenthraw's Huntbound Order, bringing celestial light to the darkest corners of Alabastria.",
				abilityScoreIncreases: ['+1 Wis'],
				traits: [
					"Radiant Soul: As an action, you can unleash the divine energy within yourself, causing your eyes to glimmer and two luminous, incorporeal wings to sprout from your back. Your transformation lasts for 1 minute or until you end it as a bonus action. During it, you have a flying speed of 30 feet, and once on each of your turns, you can deal extra radiant damage to one target when you deal damage to it with an attack or a spell. The extra radiant damage equals your level. Once you use this trait, you can't use it again until you finish a long rest.",
				],
			},
			raceId: races.aasimar.id,
		}),
		gith_githyanki: await db.createSubrace({
			id: 'subrace-gith-githyanki',
			name: 'Githyanki',
			description:
				'Githyanki are fierce warriors who dwell in the Astral Plane, raiding across the multiverse aboard their astral ships. They are militant and aggressive, believing that strength and discipline will prevent them from ever being enslaved again.',
			playstyle:
				'Aggressive martial warriors with psionic mobility and weapon proficiency. Perfect for players who want disciplined soldiers with teleportation and silver sword mastery.',
			additionalProperties: {
				alabastriaContext:
					"Githyanki who appear in Alabastria are typically planar raiders or exiles seeking power and conquest. Some serve as mercenaries in Kamalatman's military forces, where their martial prowess and silver swords are highly valued. Their astral knowledge makes them dangerous opponents and valuable allies.",
				abilityScoreIncreases: ['+2 Str'],
				traits: [
					'Decadent Mastery: You gain proficiency in two skills or one skill and one tool of your choice.',
					'Martial Prodigy: You are proficient with light and medium armor and with the shortsword, longsword, and greatsword.',
					'Githyanki Psionics: You can cast the Mage Hand cantrip. When you reach 3rd level, you can cast the Jump spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the Misty Step spell once with this trait and regain the ability to do so when you finish a long rest. Intelligence is your spellcasting ability for these spells.',
				],
			},
			raceId: races.gith.id,
		}),
		gith_githzerai: await db.createSubrace({
			id: 'subrace-gith-githzerai',
			name: 'Githzerai',
			description:
				'Githzerai are disciplined monks who dwell in the ever-shifting chaos of Limbo, using their mental focus to impose order on their surroundings. They pursue lives of contemplation and self-perfection, channeling their psionic power through rigorous mental discipline.',
			playstyle:
				'Defensive monks with psionic shields and mental fortitude. Perfect for players who want philosophical warriors focused on self-mastery and psychic defense.',
			additionalProperties: {
				alabastriaContext:
					'Githzerai rarely leave their monasteries, but those who visit Alabastria often seek the mountain temples of Skratonia or the quiet libraries of scholarly cities. They share wisdom about mental discipline and planar travel, and sometimes hunt mind flayers that threaten the Material Plane.',
				abilityScoreIncreases: ['+2 Wis'],
				traits: [
					'Mental Discipline: You have advantage on saving throws against being charmed and frightened.',
					'Githzerai Psionics: You can cast the Mage Hand cantrip. When you reach 3rd level, you can cast the Shield spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the Detect Thoughts spell once with this trait and regain the ability to do so when you finish a long rest. Intelligence is your spellcasting ability for these spells.',
				],
			},
			raceId: races.gith.id,
		}),
		aasimar_scourge_aasimar: await db.createSubrace({
			id: 'subrace-aasimar-scourge-aasimar',
			name: 'Scourge Aasimar',
			description:
				'Scourge aasimar are imbued with a divine energy that blazes intensely within them. It feeds a powerful desire to destroy evil—a desire that is, at its best, unflinching and, at its worst, all-consuming.',
			playstyle:
				'Offensive support with area damage and self-sacrifice. Great for players who want to deal damage while supporting allies.',
			additionalProperties: {
				alabastriaContext:
					"Scourge Aasimar in Alabastria's frontier regions channel their burning divine fury against the forces of evil. Their intense light and self-sacrificing nature make them formidable allies in the Huntbound Order's most dangerous missions.",
				abilityScoreIncreases: ['+1 Con'],
				traits: [
					"Radiant Consumption: As an action, you can unleash the divine energy within yourself, causing a searing light to radiate from you, pour out of your eyes and mouth, and threaten to char you. Your transformation lasts for 1 minute or until you end it as a bonus action. During it, you shed bright light in a 10-foot radius and dim light for an additional 10 feet, and at the end of each of your turns, you and each creature within 10 feet of you take radiant damage equal to half your level (rounded up). In addition, once on each of your turns, you can deal extra radiant damage to one target when you deal damage to it with an attack or a spell. The extra radiant damage equals your level. Once you use this trait, you can't use it again until you finish a long rest.",
				],
			},
			raceId: races.aasimar.id,
		}),
		aasimar_fallen_aasimar: await db.createSubrace({
			id: 'subrace-aasimar-fallen-aasimar',
			name: 'Fallen Aasimar',
			description:
				'An aasimar who was touched by dark powers, or who chose to dabble in them, is an aasimar whose original celestial nature has been warped by evil.',
			playstyle:
				'Dark support with necrotic damage and intimidation. Ideal for players who want to play morally complex characters with dark powers.',
			additionalProperties: {
				alabastriaContext:
					"Fallen Aasimar in Alabastria's shadowed corners struggle with their corrupted divine nature. Some seek redemption through the Huntbound Order, while others embrace their dark power to fight evil with evil.",
				abilityScoreIncreases: ['+1 Str'],
				traits: [
					"Necrotic Shroud: As an action, you can unleash the divine energy within yourself, causing your eyes to turn black and two skeletal, ghostly, flightless wings to sprout from your back. Your transformation lasts for 1 minute or until you end it as a bonus action. During it, you have a flying speed of 30 feet, and once on each of your turns, you can deal extra necrotic damage to one target when you deal damage to it with an attack or a spell. The extra necrotic damage equals your level. Once you use this trait, you can't use it again until you finish a long rest.",
				],
			},
			raceId: races.aasimar.id,
		}),
		dragonborn_chromatic_dragonborn: await db.createSubrace({
			id: 'subrace-dragonborn-chromatic-dragonborn',
			name: 'Chromatic Dragonborn',
			description:
				"Chromatic dragonborn are descended from evil dragons and often inherit their ancestors' destructive tendencies.",
			playstyle:
				'Offensive warriors with destructive elemental powers. Great for players who want to deal elemental damage and intimidate enemies.',
			raceId: races.dragonborn.id,
			additionalProperties: {
				alabastriaContext:
					"Chromatic Dragonborn in Bulsania's military often serve as shock troops, their destructive breath weapons making them feared on the battlefield. Some seek redemption through the Huntbound Order, channeling their destructive power against true evil.",
				traits: [
					'Chromatic Ancestry: You have draconic ancestry of your chosen color, which determines your resistance and breathe weapon type.\n\tBlack: Acid (5 by 30ft line)\n\tBlue: Lightning (5 by 30ft line)\n\tGreen: Poison (15ft cone)\n\tRed: Fire (15ft cone)\n\tWhite: Cold (15ft cone)',
				],
			},
		}),
		dragonborn_metallic_dragonborn: await db.createSubrace({
			id: 'subrace-dragonborn-metallic-dragonborn',
			name: 'Metallic Dragonborn',
			description:
				"Metallic dragonborn are descended from good dragons and often inherit their ancestors' protective nature.",
			playstyle:
				'Defensive warriors with protective elemental powers. Perfect for players who want to be noble protectors with draconic abilities.',
			raceId: races.dragonborn.id,
			additionalProperties: {
				alabastriaContext:
					"Metallic Dragonborn in Alabastria's temples and noble houses serve as protectors and leaders. Their noble heritage and protective abilities make them natural leaders in the Huntbound Order's quest to protect the innocent.",
				traits: [
					'Metallic Ancestry: You have draconic ancestry of your chosen metal, which determines your resistance and breathe weapon type.\n\tBrass: Fire (5 by 30ft line)\n\tBronze: Lightning (5 by 30ft line)\n\tCopper: Acid (5 by 30ft line)\n\tGold: Fire (15ft cone)\n\tSilver: Cold (15ft cone)',
				],
			},
		}),
		dragonborn_gem_dragonborn: await db.createSubrace({
			id: 'subrace-dragonborn-gem-dragonborn',
			name: 'Gem Dragonborn',
			description:
				"Gem dragonborn are descended from psionic dragons and often inherit their ancestors' mental abilities.",
			playstyle:
				'Intellectual warriors with psionic abilities. Ideal for players who want to combine martial prowess with mental powers.',
			raceId: races.dragonborn.id,
			additionalProperties: {
				alabastriaContext:
					"Gem Dragonborn in Kuriguer's magical academies and Skratonia's scholarly institutions study the mysteries of the mind. Their psionic heritage and intellectual abilities make them valuable researchers and strategists in the Huntbound Order.",
				traits: [
					'Gem Ancestry: You have draconic ancestry of your chosen gem, which determines your resistance and breathe weapon type.\n\tAmethyst: Force (15ft cone)\n\tCrystal: Radiant (5 by 30ft line)\n\tEmerald: Psychic (15ft cone)\n\tSapphire: Thunder (5 by 30ft line)\n\tTopaz: Necrotic (5 by 30ft line)',
				],
			},
		}),
		dwarf_hill_dwarf: await db.createSubrace({
			id: 'subrace-dwarf-hill-dwarf',
			name: 'Hill Dwarf',
			description:
				'Hill dwarves are more social and less reclusive than mountain dwarves, often found in human settlements.',
			playstyle:
				'Durable support characters with extra hit points. Great for players who want to be tough healers or community leaders.',
			additionalProperties: {
				alabastriaContext:
					"Hill Dwarves in Skratonia's cities and Kuriguer's coastal towns serve as merchants and craftsmen. Their social nature and extra durability make them excellent community leaders and healers in the Huntbound Order.",
				abilityScoreIncreases: ['+1 Wis'],
				traits: [
					'Dwarven Toughness: Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.',
				],
			},
			raceId: races.dwarf.id,
		}),
		dwarf_mountain_dwarf: await db.createSubrace({
			id: 'subrace-dwarf-mountain-dwarf',
			name: 'Mountain Dwarf',
			description:
				'Mountain dwarves are more traditional and reclusive, often found in their mountain strongholds.',
			playstyle:
				'Heavily armored warriors with martial training. Perfect for players who want to be heavily armored fighters with crafting abilities.',
			additionalProperties: {
				alabastriaContext:
					"Mountain Dwarves in Maltman's strongholds and Bulsania's peaks serve as elite warriors and miners. Their martial training and strength make them formidable fighters in the Huntbound Order's most dangerous missions.",
				abilityScoreIncreases: ['+2 Str'],
				traits: [
					'Dwarven Armor Training: You have proficiency with light and medium armor.',
				],
			},
			heightRangeLowOverride: 4.0,
			heightRangeHighOverride: 4.8,
			weightRangeLowOverride: 130,
			weightRangeHighOverride: 178,
			raceId: races.dwarf.id,
		}),
		dwarf_duergar: await db.createSubrace({
			id: 'subrace-dwarf-duergar',
			name: 'Duergar',
			description:
				'Duergar are dark dwarves who live in the Underdark and have developed psionic abilities.',
			playstyle:
				'Psionic craftsmen with stealth abilities. Great for players who want to be magical craftsmen with unique abilities.',
			additionalProperties: {
				alabastriaContext:
					"Duergar in Maltman's deepest mines and Alatman's underground workshops serve as specialized craftsmen and spies. Their psionic abilities and Underdark knowledge make them valuable assets in the Huntbound Order's covert operations.",
				abilityScoreIncreases: ['+1 Str'],
				traits: [
					'Duergar Magic: You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the enlarge/reduce spell on yourself once with this trait, without requiring a material component. When you reach 5th level, you can cast the invisibility spell on yourself once with this trait, without requiring a material component. You regain the ability to cast these spells with this trait when you finish a long rest. Intelligence is your spellcasting ability for these spells.',
					'Duergar Resilience: You have advantage on saving throws against illusions and against being charmed or paralyzed.',
					'Sunlight Sensitivity: You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight.',
				],
			},
			raceId: races.dwarf.id,
		}),
		elf_high_elf: await db.createSubrace({
			id: 'subrace-elf-high-elf',
			name: 'High Elf',
			description:
				'High elves are the most traditional and magical of the elven subraces, often found in magical academies and ancient libraries.',
			playstyle:
				'Intellectual spellcasters with martial training. Great for players who want to be magical warriors with extra languages.',
			additionalProperties: {
				alabastriaContext:
					"High Elves in Kuriguer's magical academies and Skratonia's scholarly institutions serve as wizards and researchers. Their intellectual nature and magical abilities make them valuable strategists and spellcasters in the Huntbound Order.",
				abilityScoreIncreases: ['+1 Int'],
				traits: [
					'Elf Weapon Training: You have proficiency with the longsword, shortsword, shortbow, and longbow.',
					'Cantrip: You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.',
					'Extra Language: You can speak, read, and write one extra language of your choice.',
				],
			},
			raceId: races.elf.id,
		}),
		elf_wood_elf: await db.createSubrace({
			id: 'subrace-elf-wood-elf',
			name: 'Wood Elf',
			description:
				'Wood elves are swift and stealthy, with a deep bond to the forests and natural world.',
			playstyle:
				'Swift and stealthy nature guardians. Perfect for players who want to be fast, sneaky characters with nature abilities.',
			additionalProperties: {
				alabastriaContext:
					"Wood Elves in Kuriguer's magical forests and Skratonia's ancient groves serve as rangers and druids. Their natural stealth and speed make them excellent scouts and trackers in the Huntbound Order's wilderness operations.",
				abilityScoreIncreases: ['+1 Wis'],
				traits: [
					'Elf Weapon Training: You have proficiency with the longsword, shortsword, shortbow, and longbow.',
					'Fleet of Foot: Your base walking speed increases to 35 feet.',
					'Mask of the Wild: You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.',
				],
			},
			weightRangeLowOverride: 100,
			weightRangeHighOverride: 140,
			raceId: races.elf.id,
		}),
		elf_pallid_elf: await db.createSubrace({
			id: 'subrace-elf-pallid-elf',
			name: 'Pallid Elf',
			description:
				'Pallid elves are mysterious denizens of the Underdark who have adapted to lightless depths. Their pale skin and innate psychic abilities set them apart from other elves, and they possess unique mental powers granted by their subterranean existence.',
			playstyle:
				'Psychic elves with mental powers and Underdark adaptation. Perfect for players who want mysterious elves with unique psionic abilities and stealth.',
			additionalProperties: {
				alabastriaContext:
					'Pallid Elves are rare in Alabastria, dwelling in the deepest caverns beneath Kamalatman or in isolated underground sanctuaries. Those who emerge into the surface world often serve as spies, scholars of forbidden lore, or seekers of ancient knowledge. Their psychic abilities make them valuable to organizations that deal with aberrations and planar threats.',
				abilityScoreIncreases: ['+1 Wis'],
				traits: [
					'Incisive Sense: You have proficiency in the Insight skill.',
					'Blessing of the Moon Weaver: You can cast the Faerie Fire spell once with this trait and regain the ability to do so when you finish a long rest. Wisdom is your spellcasting ability for this spell.',
				],
			},
			raceId: races.elf.id,
		}),
		elf_dark_elf_drow: await db.createSubrace({
			id: 'subrace-elf-dark-elf-drow',
			name: 'Dark Elf (Drow)',
			description:
				'Dark elves, or drow, are elves who live in the Underdark and have adapted to its harsh environment.',
			playstyle:
				'Magical scouts with Underdark abilities. Great for players who want to be stealthy spellcasters with unique challenges.',
			additionalProperties: {
				alabastriaContext:
					"Drow in Maltman's deepest caverns and Alatman's underground regions serve as scouts and spies. Their Underdark knowledge and magical abilities make them valuable assets in the Huntbound Order's covert operations.",
				abilityScoreIncreases: ['+1 Cha'],
				traits: [
					'Superior Darkvision: Your darkvision has a radius of 120 feet.',
					'Sunlight Sensitivity: You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight.',
					'Drow Magic: You know the dancing lights cantrip. When you reach 3rd level, you can cast the faerie fire spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.',
					'Drow Weapon Training: You have proficiency with rapiers, shortswords, and hand crossbows.',
				],
			},
			heightRangeLowOverride: 4.5,
			heightRangeHighOverride: 5.7,
			weightRangeLowOverride: 75,
			weightRangeHighOverride: 105,
			raceId: races.elf.id,
		}),
		elf_sea_elf: await db.createSubrace({
			id: 'subrace-elf-sea-elf',
			name: 'Sea Elf',
			description:
				'Sea elves are elves who have adapted to life underwater and have a deep connection to the ocean.',
			playstyle:
				'Aquatic scouts with ocean abilities. Perfect for players who want to be water-based characters with unique movement options.',
			additionalProperties: {
				alabastriaContext:
					"Sea Elves in Kuriguer's coastal waters and along Alabastria's shores serve as maritime scouts and protectors. Their aquatic abilities and ocean knowledge make them valuable allies in the Huntbound Order's coastal operations.",
				abilityScoreIncreases: ['+1 Con'],
				traits: [
					'Sea Elf Training: You have proficiency with the spear, trident, light crossbow, and net.',
					'Child of the Sea: You have a swimming speed of 30 feet, and you can breathe air and water.',
					'Friend of the Sea: Using gestures and sounds, you can communicate simple ideas with any beast that has an innate swimming speed.',
				],
			},
			raceId: races.elf.id,
		}),
		elf_eladrin: await db.createSubrace({
			id: 'subrace-elf-eladrin',
			name: 'Eladrin',
			description:
				'Eladrin are elves who live in the Feywild and have a deep connection to the seasons and natural cycles.',
			playstyle:
				'Seasonal magic users with teleportation. Great for players who want to be magical characters with unique seasonal abilities.',
			additionalProperties: {
				alabastriaContext:
					"Eladrin in Kuriguer's magical forests and fey-touched areas serve as guardians of the natural world. Their seasonal magic and fey connection make them powerful allies in the Huntbound Order's efforts to protect Alabastria's magical balance.",
				abilityScoreIncreases: ['+1 Int'],
				traits: [
					"Fey Step: As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. Once you use this trait, you can't do so again until you finish a short or long rest. When you reach 3rd level, your Fey Step gains an additional effect based on your season. The effect lasts until the end of your next turn.",
					"Trance: You don't need to sleep, and magic can't put you to sleep. You can finish a long rest in 4 hours if you spend those hours in a trancelike meditation, during which you remain conscious.",
				],
			},
			raceId: races.elf.id,
		}),
		elf_shadar_kai: await db.createSubrace({
			id: 'subrace-elf-shadar-kai',
			name: 'Shadar-kai',
			description:
				'Shadar-kai are elves who live in the Shadowfell and have a deep connection to death and shadow magic.',
			playstyle:
				'Shadow magic users with death resistance. Perfect for players who want to be dark magical characters with unique abilities.',
			additionalProperties: {
				alabastriaContext:
					"Shadar-kai in Kuriguer's shadow-touched woods and Alabastria's darker regions serve as specialists against undead threats. Their shadow magic and death resistance make them valuable assets in the Huntbound Order's most dangerous missions.",
				abilityScoreIncreases: ['+1 Con'],
				traits: [
					"Blessing of the Raven Queen: As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. Once you use this trait, you can't do so again until you finish a long rest. Starting at 3rd level, you also gain resistance to all damage when you teleport using this trait. The resistance lasts until the start of your next turn. During that time, you appear ghostly and translucent.",
					'Necrotic Resistance: You have resistance to necrotic damage.',
					"Trance: You don't need to sleep, and magic can't put you to sleep. You can finish a long rest in 4 hours if you spend those hours in a trancelike meditation, during which you remain conscious.",
				],
			},
			raceId: races.elf.id,
		}),
		genasi_air_genasi: await db.createSubrace({
			id: 'subrace-genasi-air-genasi',
			name: 'Air Genasi',
			description:
				'Air genasi are connected to the element of air and wind, often found in high places and open spaces.',
			playstyle:
				'Wind magic users with teleportation abilities. Great for players who want to be mobile magical characters with air themes.',
			additionalProperties: {
				alabastriaContext:
					"Air Genasi in Kuriguer's coastal regions and Bulsania's mountain peaks serve as scouts and messengers. Their wind magic and aerial abilities make them excellent for reconnaissance and communication in the Huntbound Order.",
				abilityScoreIncreases: ['+1 Dex'],
				traits: [
					'Air Resistance: You have resistance to lightning damage.',
					"Air Magic: You know the shocking grasp cantrip. At 3rd level, you can cast feather fall with this trait. At 5th level, you can cast levitate with this trait. Once you cast feather fall or levitate with this trait, you can't cast that spell with it again until you finish a long rest.",
					"Unending Breath: You can hold your breath indefinitely while you're not incapacitated.",
					"Mingle with the Wind: As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. Once you use this trait, you can't do so again until you finish a short or long rest.",
				],
			},
			raceId: races.genasi.id,
		}),
		genasi_earth_genasi: await db.createSubrace({
			id: 'subrace-genasi-earth-genasi',
			name: 'Earth Genasi',
			description:
				'Earth genasi are connected to the element of earth and stone, often found in mountains and underground areas.',
			playstyle:
				'Earth magic users with terrain abilities. Perfect for players who want to be sturdy magical characters with earth themes.',
			additionalProperties: {
				alabastriaContext:
					"Earth Genasi in Maltman's mountain strongholds and Alatman's volcanic regions serve as miners and craftsmen. Their earth magic and stone abilities make them valuable for construction and excavation in the Huntbound Order.",
				abilityScoreIncreases: ['+1 Str'],
				traits: [
					'Earth Resistance: You have resistance to acid damage.',
					"Earth Magic: You know the blade ward cantrip. At 3rd level, you can cast earth tremor with this trait. At 5th level, you can cast passwall with this trait. Once you cast earth tremor or passwall with this trait, you can't cast that spell with it again until you finish a long rest.",
					'Earth Walk: You can move across difficult terrain made of earth or stone without spending extra movement.',
				],
			},
			raceId: races.genasi.id,
		}),
		genasi_fire_genasi: await db.createSubrace({
			id: 'subrace-genasi-fire-genasi',
			name: 'Fire Genasi',
			description:
				'Fire genasi are connected to the element of fire and heat, often found in volcanic areas and hot climates.',
			playstyle:
				'Fire magic users with teleportation abilities. Great for players who want to be destructive magical characters with fire themes.',
			additionalProperties: {
				alabastriaContext:
					"Fire Genasi in Alatman's volcanic forges and Kuriguer's magical hotspots serve as smiths and magical researchers. Their fire magic and heat resistance make them excellent for crafting and magical experimentation in the Huntbound Order.",
				abilityScoreIncreases: ['+1 Int'],
				traits: [
					'Fire Resistance: You have resistance to fire damage.',
					"Fire Magic: You know the produce flame cantrip. At 3rd level, you can cast burning hands with this trait. At 5th level, you can cast flame blade with this trait. Once you cast burning hands or flame blade with this trait, you can't cast that spell with it again until you finish a long rest.",
					"Reach to the Blaze: As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. Once you use this trait, you can't do so again until you finish a short or long rest.",
				],
			},
			raceId: races.genasi.id,
		}),
		genasi_water_genasi: await db.createSubrace({
			id: 'subrace-genasi-water-genasi',
			name: 'Water Genasi',
			description:
				'Water genasi are connected to the element of water and ice, often found near bodies of water and in cold climates.',
			playstyle:
				'Water magic users with aquatic abilities. Perfect for players who want to be water-based magical characters with unique movement options.',
			additionalProperties: {
				alabastriaContext:
					"Water Genasi in Kuriguer's coastal waters and along Alabastria's shores serve as maritime specialists and water guardians. Their water magic and aquatic abilities make them excellent for coastal operations and water-based missions in the Huntbound Order.",
				abilityScoreIncreases: ['+1 Wis'],
				traits: [
					'Water Resistance: You have resistance to acid damage.',
					"Water Magic: You know the shape water cantrip. At 3rd level, you can cast create or destroy water with this trait. At 5th level, you can cast wall of water with this trait. Once you cast create or destroy water or wall of water with this trait, you can't cast that spell with it again until you finish a long rest.",
					'Amphibious: You can breathe air and water.',
					'Swim: You have a swimming speed of 30 feet.',
				],
			},
			raceId: races.genasi.id,
		}),
		gnome_forest_gnome: await db.createSubrace({
			id: 'subrace-gnome-forest-gnome',
			name: 'Forest Gnome',
			description:
				'Forest gnomes are reclusive and shy, living in hidden communities deep in the woods.',
			playstyle:
				'Stealthy and nature-focused gnomes who excel at illusion magic and communication with animals.',
			additionalProperties: {
				alabastriaContext:
					'Forest Gnomes in Alabastria are found in the magical forests of Kuriguer, where they serve as guardians of nature and guides for those who venture into the dangerous woods.',
				abilityScoreIncreases: ['+1 Dex'],
				traits: [
					'Natural Illusionist: You know the minor illusion cantrip. Intelligence is your spellcasting ability for it.',
					'Speak with Small Beasts: Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts.',
				],
			},
			raceId: races.gnome.id,
		}),
		gnome_rock_gnome: await db.createSubrace({
			id: 'subrace-gnome-rock-gnome',
			name: 'Rock Gnome',
			description:
				'Rock gnomes are the most common gnomes, known for their engineering skills and love of tinkering.',
			playstyle:
				'Engineering-focused gnomes who excel at creating devices and understanding technology.',
			additionalProperties: {
				alabastriaContext:
					'Rock Gnomes in Alabastria are found in the workshops and forges of Kamalatman, where their engineering skills are highly valued. They often work alongside Dwarves and Artificers to create mechanical devices and magical items.',
				abilityScoreIncreases: ['+1 Con'],
				traits: [
					"Artificer's Lore: Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.",
					"Tinker: You have proficiency with artisan's tools (tinker's tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp).",
				],
			},
			raceId: races.gnome.id,
		}),
		gnome_svirfneblin: await db.createSubrace({
			id: 'subrace-gnome-svirfneblin',
			name: 'Svirfneblin',
			description:
				'Svirfneblin, or deep gnomes, are gnomes who live in the Underdark and have adapted to its harsh environment.',
			playstyle:
				'Stealthy and magical gnomes who excel at surviving in the Underdark and using illusion magic.',
			additionalProperties: {
				alabastriaContext:
					'Svirfneblin in Alabastria are found in the Underdark regions of Maltman and Alatman, where their stealth and magical abilities make them excellent spies and scouts in the dangerous underground world.',
				abilityScoreIncreases: ['+1 Dex'],
				traits: [
					"Darkvision: Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
					'Stone Camouflage: You have advantage on Dexterity (Stealth) checks made to hide in rocky terrain.',
				],
			},
			raceId: races.gnome.id,
		}),
		half_elf_aquatic_half_elf: await db.createSubrace({
			id: 'subrace-half-elf-aquatic-half-elf',
			name: 'Aquatic Half-Elf',
			description:
				'Half-elves with aquatic heritage who can breathe underwater and swim with ease.',
			playstyle:
				'Water-based characters who excel at aquatic adventures and coastal missions.',
			additionalProperties: {
				alabastriaContext:
					'Aquatic Half-Elves in Alabastria are found along the coasts of Kuriguer and in the waterways of Kamalatman, where their aquatic abilities make them excellent for maritime operations.',
				traits: [
					'Aquatic: You can breathe air and water, and you have a swimming speed of 30 feet.',
				],
			},
			raceId: races.half_elf.id,
		}),
		half_elf_drow_half_elf: await db.createSubrace({
			id: 'subrace-half-elf-drow-half-elf',
			name: 'Drow Half-Elf',
			description:
				"Half-elves with drow heritage who have some of the dark elves' abilities.",
			playstyle:
				'Dark magic users with unique spellcasting abilities and darkvision.',
			additionalProperties: {
				alabastriaContext:
					"Drow Half-Elves in Alabastria are rare but found in the darker regions of Kuriguer's forests, where they often serve as scouts and guides in dangerous areas.",
				traits: [
					'Drow Magic: You know the dancing lights cantrip. When you reach 3rd level, you can cast the faerie fire spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.',
				],
			},
			raceId: races.half_elf.id,
		}),
		half_elf_high_half_elf: await db.createSubrace({
			id: 'subrace-half-elf-high-half-elf',
			name: 'High Half-Elf',
			description:
				'Half-elves with high elf heritage who have some magical abilities.',
			playstyle:
				'Magical characters with weapon proficiency and cantrip abilities.',
			additionalProperties: {
				alabastriaContext:
					'High Half-Elves in Alabastria are found in the magical academies of Kuriguer and the cities of Skratonia, where their magical heritage makes them excellent scholars and diplomats.',
				traits: [
					'Elf Weapon Training: You have proficiency with the longsword, shortsword, shortbow, and longbow.',
					'Cantrip: You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.',
				],
			},
			raceId: races.half_elf.id,
		}),
		half_elf_wood_half_elf: await db.createSubrace({
			id: 'subrace-half-elf-wood-half-elf',
			name: 'Wood Half-Elf',
			description:
				'Half-elves with wood elf heritage who have enhanced speed and stealth abilities.',
			playstyle:
				'Fast and stealthy characters who excel at wilderness survival and ranged combat.',
			additionalProperties: {
				alabastriaContext:
					'Wood Half-Elves in Alabastria are found in the forests of Kuriguer and the wilderness of Kamalatman, where their natural abilities make them excellent rangers and scouts.',
				traits: [
					'Elf Weapon Training: You have proficiency with the longsword, shortsword, shortbow, and longbow.',
					'Fleet of Foot: Your base walking speed increases to 35 feet.',
					'Mask of the Wild: You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.',
				],
			},
			raceId: races.half_elf.id,
		}),
		halfling_lightfoot_halfling: await db.createSubrace({
			id: 'subrace-halfling-lightfoot-halfling',
			name: 'Lightfoot Halfling',
			description:
				'Lightfoot halflings are stealthy and social, able to hide behind larger creatures.',
			playstyle:
				'Social and stealthy halflings who excel at hiding and social interaction.',
			additionalProperties: {
				alabastriaContext:
					'Lightfoot Halflings in Alabastria are found in the cities of Skratonia, where their social skills and stealth make them excellent merchants and diplomats.',
				abilityScoreIncreases: ['+1 Cha'],
				traits: [
					'Naturally Stealthy: You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.',
				],
			},
			raceId: races.halfling.id,
		}),
		halfling_stout_halfling: await db.createSubrace({
			id: 'subrace-halfling-stout-halfling',
			name: 'Stout Halfling',
			description:
				'Stout halflings are hardier and more resistant to poison than other halflings.',
			playstyle:
				'Hardy and resilient halflings who excel at surviving in difficult conditions.',
			additionalProperties: {
				alabastriaContext:
					'Stout Halflings in Alabastria are found in the agricultural regions of Skratonia, where their hardiness makes them excellent farmers and workers in harsh conditions.',
				abilityScoreIncreases: ['+1 Con'],
				traits: [
					'Stout Resilience: You have advantage on saving throws against poison, and you have resistance against poison damage.',
				],
			},
			raceId: races.halfling.id,
		}),
		halfling_ghostwise_halfling: await db.createSubrace({
			id: 'subrace-halfling-ghostwise-halfling',
			name: 'Ghostwise Halfling',
			description:
				'Ghostwise halflings are reclusive and have telepathic abilities.',
			playstyle:
				'Telepathic halflings who excel at silent communication and wilderness survival.',
			additionalProperties: {
				alabastriaContext:
					"Ghostwise Halflings in Alabastria are found in the remote regions of Kuriguer's forests, where their telepathic abilities make them excellent scouts and guides.",
				abilityScoreIncreases: ['+1 Wis'],
				traits: [
					'Silent Speech: You can speak telepathically to any creature within 30 feet of you. The creature understands you only if the two of you share a language. You can speak telepathically in this way to one creature at a time.',
				],
			},
			raceId: races.halfling.id,
		}),
		human_variant_human: await db.createSubrace({
			id: 'subrace-human-variant-human',
			name: 'Variant Human',
			description:
				'Humans with a particular talent or focus, represented by a feat.',
			playstyle:
				'Specialized humans with unique abilities and focused expertise.',
			additionalProperties: {
				alabastriaContext:
					'Variant Humans in Alabastria are found throughout all continents, often as specialists and experts in their chosen fields. Their focused abilities make them valuable in the Huntbound Order and other organizations.',
				traits: [
					'Feat: You gain one feat of your choice.',
					'Skill: You gain proficiency in one skill of your choice.',
				],
			},
			raceId: races.human.id,
		}),
		human_mark_of_finding_human: await db.createSubrace({
			id: 'subrace-human-mark-of-finding-human',
			name: 'Mark of Finding Human',
			description:
				'Humans with the Mark of Finding, a dragonmark that grants tracking and divination abilities.',
			playstyle:
				'Tracking specialists with divination magic and enhanced perception.',
			additionalProperties: {
				alabastriaContext:
					'Mark of Finding Humans in Alabastria are found primarily in the Huntbound Order, where their tracking abilities make them invaluable for finding monsters and lost people.',
				traits: [
					"Hunter's Intuition: When you make a Wisdom (Perception) or Wisdom (Survival) check, you can roll a d4 and add the number rolled to the ability check.",
					"Finder's Magic: You can cast the hunter's mark spell with this trait. Starting at 3rd level, you can also cast the locate object spell with it. Starting at 5th level, you can also cast the locate creature spell with it. Once you cast a spell with this trait, you can't do so again until you finish a long rest. Wisdom is your spellcasting ability for these spells.",
				],
			},
			raceId: races.human.id,
		}),
		human_mark_of_handling_human: await db.createSubrace({
			id: 'subrace-human-mark-of-handling-human',
			name: 'Mark of Handling Human',
			description:
				'Humans with the Mark of Handling, a dragonmark that grants animal handling and beast mastery abilities.',
			playstyle:
				'Animal specialists with nature magic and beast communication abilities.',
			additionalProperties: {
				alabastriaContext:
					'Mark of Handling Humans in Alabastria are found in the wilderness regions of Kuriguer and Kamalatman, where their animal handling abilities make them excellent rangers and beast masters.',
				traits: [
					'Wild Intuition: When you make a Wisdom (Animal Handling) or Intelligence (Nature) check, you can roll a d4 and add the number rolled to the ability check.',
					"Primal Connection: You can cast the speak with animals spell with this trait. Starting at 3rd level, you can also cast the animal friendship spell with it. Starting at 5th level, you can also cast the beast sense spell with it. Once you cast a spell with this trait, you can't do so again until you finish a long rest. Wisdom is your spellcasting ability for these spells.",
				],
			},
			raceId: races.human.id,
		}),
		human_mark_of_making_human: await db.createSubrace({
			id: 'subrace-human-mark-of-making-human',
			name: 'Mark of Making Human',
			description:
				'Humans with the Mark of Making, a dragonmark that grants crafting and creation abilities.',
			playstyle:
				'Crafting specialists with creation magic and enhanced intelligence.',
			additionalProperties: {
				alabastriaContext:
					'Mark of Making Humans in Alabastria are found in the workshops and forges of Kamalatman, where their crafting abilities make them excellent artificers and smiths.',
				traits: [
					"Artisan's Intuition: When you make an Intelligence (Arcana) or Intelligence (History) check, you can roll a d4 and add the number rolled to the ability check.",
					"Maker's Magic: You can cast the mending cantrip with this trait. Starting at 3rd level, you can also cast the magic weapon spell with it. Starting at 5th level, you can also cast the fabricate spell with it. Once you cast a spell with this trait, you can't do so again until you finish a long rest. Intelligence is your spellcasting ability for these spells.",
				],
			},
			raceId: races.human.id,
		}),
		human_mark_of_passage_human: await db.createSubrace({
			id: 'subrace-human-mark-of-passage-human',
			name: 'Mark of Passage Human',
			description:
				'Humans with the Mark of Passage, a dragonmark that grants movement and transportation abilities.',
			playstyle:
				'Movement specialists with teleportation magic and enhanced mobility.',
			additionalProperties: {
				alabastriaContext:
					'Mark of Passage Humans in Alabastria are found throughout all continents as couriers and messengers, where their movement abilities make them excellent for transportation and communication.',
				traits: [
					'Intuitive Motion: When you make a Dexterity (Acrobatics) or Strength (Athletics) check, you can roll a d4 and add the number rolled to the ability check.',
					"Passage Magic: You can cast the longstrider spell with this trait. Starting at 3rd level, you can also cast the misty step spell with it. Starting at 5th level, you can also cast the passwall spell with it. Once you cast a spell with this trait, you can't do so again until you finish a long rest. Intelligence is your spellcasting ability for these spells.",
				],
			},
			raceId: races.human.id,
		}),
		human_mark_of_sentinel_human: await db.createSubrace({
			id: 'subrace-human-mark-of-sentinel-human',
			name: 'Mark of Sentinel Human',
			description:
				'Humans with the Mark of Sentinel, a dragonmark that grants protection and defense abilities.',
			playstyle:
				'Protection specialists with defensive magic and enhanced awareness.',
			additionalProperties: {
				alabastriaContext:
					'Mark of Sentinel Humans in Alabastria are found in the Huntbound Order and other protective organizations, where their defensive abilities make them excellent guards and protectors.',
				traits: [
					'Vigilant Guardian: When you make a Wisdom (Insight) or Wisdom (Perception) check, you can roll a d4 and add the number rolled to the ability check.',
					"Sentinel's Magic: You can cast the shield spell with this trait. Starting at 3rd level, you can also cast the warding bond spell with it. Starting at 5th level, you can also cast the death ward spell with it. Once you cast a spell with this trait, you can't do so again until you finish a long rest. Wisdom is your spellcasting ability for these spells.",
				],
			},
			raceId: races.human.id,
		}),
		shifter_beasthide_shifter: await db.createSubrace({
			id: 'subrace-shifter-beasthide-shifter',
			name: 'Beasthide Shifter',
			description:
				'Beasthide shifters are tough and resilient, with enhanced durability and strength.',
			playstyle:
				'Tough and resilient shifters who excel at survival and combat.',
			additionalProperties: {
				alabastriaContext:
					'Beasthide Shifters in Alabastria are found in the harsh regions of Bulsania and Kamalatman, where their toughness makes them excellent survivalists and warriors.',
				abilityScoreIncreases: ['+1 Con'],
				traits: [
					'Shifting Feature: While shifting, you gain 1d6 temporary hit points at the start of each of your turns. You also gain a +1 bonus to AC while shifting.',
				],
			},
			raceId: races.shifter.id,
		}),
		shifter_longtooth_shifter: await db.createSubrace({
			id: 'subrace-shifter-longtooth-shifter',
			name: 'Longtooth Shifter',
			description:
				'Longtooth shifters are fierce and aggressive, with enhanced combat abilities.',
			playstyle:
				'Fierce and aggressive shifters who excel at combat and intimidation.',
			additionalProperties: {
				alabastriaContext:
					'Longtooth Shifters in Alabastria are found in the frontier regions of Kamalatman and Skratonia, where their ferocity makes them excellent warriors and guards.',
				abilityScoreIncreases: ['+1 Str'],
				traits: [
					'Shifting Feature: While shifting, you can use your fangs to make an unarmed strike as a bonus action. If you hit, you deal piercing damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.',
				],
			},
			raceId: races.shifter.id,
		}),
		shifter_swiftstride_shifter: await db.createSubrace({
			id: 'subrace-shifter-swiftstride-shifter',
			name: 'Swiftstride Shifter',
			description:
				'Swiftstride shifters are fast and agile, with enhanced mobility and reflexes.',
			playstyle:
				'Fast and agile shifters who excel at mobility and stealth.',
			additionalProperties: {
				alabastriaContext:
					'Swiftstride Shifters in Alabastria are found throughout all continents, often serving as messengers and scouts due to their speed and agility.',
				abilityScoreIncreases: ['+1 Dex'],
				traits: [
					'Shifting Feature: While shifting, your walking speed increases by 10 feet. You also gain a +1 bonus to AC while shifting.',
				],
			},
			raceId: races.shifter.id,
		}),
		shifter_wildhunt_shifter: await db.createSubrace({
			id: 'subrace-shifter-wildhunt-shifter',
			name: 'Wildhunt Shifter',
			description:
				'Wildhunt shifters are wise and perceptive, with enhanced senses and tracking abilities.',
			playstyle:
				'Wise and perceptive shifters who excel at tracking and wilderness survival.',
			additionalProperties: {
				alabastriaContext:
					'Wildhunt Shifters in Alabastria are found in the wilderness regions of Kuriguer and Kamalatman, where their enhanced senses make them excellent trackers and guides.',
				abilityScoreIncreases: ['+1 Wis'],
				traits: [
					"Shifting Feature: While shifting, you have advantage on Wisdom checks, and no creature within 30 feet of you can make an attack roll with advantage against you, unless you're incapacitated.",
				],
			},
			raceId: races.shifter.id,
		}),
		tiefling_asmodeus_tiefling: await db.createSubrace({
			id: 'subrace-tiefling-asmodeus-tiefling',
			name: 'Asmodeus Tiefling',
			description:
				'Tieflings with the bloodline of Asmodeus, the Lord of the Nine Hells.',
			playstyle:
				'Magical tieflings with infernal heritage and unique abilities.',
			additionalProperties: {
				alabastriaContext:
					'Asmodeus Tieflings in Alabastria are found throughout all continents, often serving as advisors and spellcasters due to their infernal heritage and magical abilities.',
				traits: [
					'Infernal Legacy: You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the hellish rebuke spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.',
				],
			},
			raceId: races.tiefling.id,
		}),
		tiefling_baalzebul_tiefling: await db.createSubrace({
			id: 'subrace-tiefling-baalzebul-tiefling',
			name: 'Baalzebul Tiefling',
			description:
				'Tieflings with the bloodline of Baalzebul, the Lord of Flies.',
			playstyle:
				'Magical tieflings with infernal heritage and unique abilities.',
			additionalProperties: {
				alabastriaContext:
					'Baalzebul Tieflings in Alabastria are found throughout all continents, often serving as advisors and spellcasters due to their infernal heritage and magical abilities.',
				traits: [
					'Infernal Legacy: You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the suggestion spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the stinking cloud spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.',
				],
			},
			raceId: races.tiefling.id,
		}),
		tiefling_dispater_tiefling: await db.createSubrace({
			id: 'subrace-tiefling-dispater-tiefling',
			name: 'Dispater Tiefling',
			description:
				'Tieflings with the bloodline of Dispater, the Iron Duke.',
			playstyle:
				'Magical tieflings with infernal heritage and unique abilities.',
			additionalProperties: {
				alabastriaContext:
					'Dispater Tieflings in Alabastria are found throughout all continents, often serving as advisors and spellcasters due to their infernal heritage and magical abilities.',
				traits: [
					'Infernal Legacy: You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the command spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the detect magic spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.',
				],
			},
			raceId: races.tiefling.id,
		}),
		tiefling_fierna_tiefling: await db.createSubrace({
			id: 'subrace-tiefling-fierna-tiefling',
			name: 'Fierna Tiefling',
			description:
				'Tieflings with the bloodline of Fierna, the Lady of the Fourth.',
			playstyle:
				'Magical tieflings with infernal heritage and unique abilities.',
			additionalProperties: {
				alabastriaContext:
					'Fierna Tieflings in Alabastria are found throughout all continents, often serving as advisors and spellcasters due to their infernal heritage and magical abilities.',
				traits: [
					'Infernal Legacy: You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the charm person spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the suggestion spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.',
				],
			},
			raceId: races.tiefling.id,
		}),
		tiefling_glasya_tiefling: await db.createSubrace({
			id: 'subrace-tiefling-glasya-tiefling',
			name: 'Glasya Tiefling',
			description:
				'Tieflings with the bloodline of Glasya, the Daughter of Asmodeus.',
			playstyle:
				'Magical tieflings with infernal heritage and unique abilities.',
			additionalProperties: {
				alabastriaContext:
					'Glasya Tieflings in Alabastria are found throughout all continents, often serving as advisors and spellcasters due to their infernal heritage and magical abilities.',
				traits: [
					'Infernal Legacy: You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the minor illusion spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the disguise self spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.',
				],
			},
			raceId: races.tiefling.id,
		}),
		tiefling_levistus_tiefling: await db.createSubrace({
			id: 'subrace-tiefling-levistus-tiefling',
			name: 'Levistus Tiefling',
			description:
				'Tieflings with the bloodline of Levistus, the Lord of the Fifth.',
			playstyle:
				'Magical tieflings with infernal heritage and unique abilities.',
			additionalProperties: {
				alabastriaContext:
					'Levistus Tieflings in Alabastria are found throughout all continents, often serving as advisors and spellcasters due to their infernal heritage and magical abilities.',
				traits: [
					'Infernal Legacy: You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the ray of frost spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the armor of Agathys spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.',
				],
			},
			raceId: races.tiefling.id,
		}),
		tiefling_mammon_tiefling: await db.createSubrace({
			id: 'subrace-tiefling-mammon-tiefling',
			name: 'Mammon Tiefling',
			description:
				'Tieflings with the bloodline of Mammon, the Lord of the Third.',
			playstyle:
				'Magical tieflings with infernal heritage and unique abilities.',
			additionalProperties: {
				alabastriaContext:
					'Mammon Tieflings in Alabastria are found throughout all continents, often serving as advisors and spellcasters due to their infernal heritage and magical abilities.',
				traits: [
					"Infernal Legacy: You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the Tenser's floating disk spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the arcane lock spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.",
				],
			},
			raceId: races.tiefling.id,
		}),
		tiefling_mephistopheles_tiefling: await db.createSubrace({
			id: 'subrace-tiefling-mephistopheles-tiefling',
			name: 'Mephistopheles Tiefling',
			description:
				'Tieflings with the bloodline of Mephistopheles, the Lord of the Eighth.',
			playstyle:
				'Magical tieflings with infernal heritage and unique abilities.',
			additionalProperties: {
				alabastriaContext:
					'Mephistopheles Tieflings in Alabastria are found throughout all continents, often serving as advisors and spellcasters due to their infernal heritage and magical abilities.',
				traits: [
					'Infernal Legacy: You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the burning hands spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the flame blade spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.',
				],
			},
			raceId: races.tiefling.id,
		}),
		tiefling_zariel_tiefling: await db.createSubrace({
			id: 'subrace-tiefling-zariel-tiefling',
			name: 'Zariel Tiefling',
			description:
				'Tieflings with the bloodline of Zariel, the Fallen Angel.',
			playstyle:
				'Magical tieflings with infernal heritage and unique abilities.',
			additionalProperties: {
				alabastriaContext:
					'Zariel Tieflings in Alabastria are found throughout all continents, often serving as advisors and spellcasters due to their infernal heritage and magical abilities.',
				traits: [
					'Infernal Legacy: You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the searing smite spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the branding smite spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.',
				],
			},
			raceId: races.tiefling.id,
		}),
		yuan_ti_pureblood_yuan_ti: await db.createSubrace({
			id: 'subrace-yuan-ti-pureblood-yuan-ti',
			name: 'Pureblood Yuan-ti',
			description:
				'Yuan-ti with the most human-like appearance, often able to pass as human.',
			playstyle:
				'Human-like yuan-ti with magical abilities and infiltration skills.',
			additionalProperties: {
				alabastriaContext:
					'Pureblood Yuan-ti in Alabastria are found throughout all continents, often serving as spies and infiltrators due to their human-like appearance and magical abilities.',
				traits: [
					'Innate Spellcasting: You know the poison spray cantrip. When you reach 3rd level, you can cast the suggestion spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the animal friendship spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.',
				],
			},
			raceId: races.yuan_ti.id,
		}),
	};
}
