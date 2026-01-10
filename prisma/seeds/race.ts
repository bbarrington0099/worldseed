import { Prisma } from '@prismagen/client';
import * as db from '@lib/db-seed';
import { CreatureSizes, Languages, RaceNames } from './index';

type RacePayload = Prisma.RaceGetPayload<{}>;
export interface Races {
	aarakocra: RacePayload;
	aasimar: RacePayload;
	autognome: RacePayload;
	bugbear: RacePayload;
	centaur: RacePayload;
	changeling: RacePayload;
	dhampir: RacePayload;
	dragonborn: RacePayload;
	dwarf: RacePayload;
	elf: RacePayload;
	gnome: RacePayload;
	goblin: RacePayload;
	goliath: RacePayload;
	halfling: RacePayload;
	hobgoblin: RacePayload;
	human: RacePayload;
	kenku: RacePayload;
	kobold: RacePayload;
	lizardfolk: RacePayload;
	orc: RacePayload;
	tabaxi: RacePayload;
	tiefling: RacePayload;
	tortle: RacePayload;
	triton: RacePayload;
	fairy: RacePayload;
	firbolg: RacePayload;
	genasi: RacePayload;
	giff: RacePayload;
	harengon: RacePayload;
	kalashtar: RacePayload;
	kender: RacePayload;
	loxodon: RacePayload;
	shifter: RacePayload;
	vedalken: RacePayload;
	warforged: RacePayload;
	yuan_ti: RacePayload;
	hadozee: RacePayload;
	hexblood: RacePayload;
	half_elf: RacePayload;
	half_orc: RacePayload;
	leonin: RacePayload;
	minotaur: RacePayload;
	owlin: RacePayload;
	plasmoid: RacePayload;
	reborn: RacePayload;
	satyr: RacePayload;
	simic_hybrid: RacePayload;
	thri_kreen: RacePayload;
	gith: RacePayload;
}

interface SeedRacesParams {
	creatureSizes: CreatureSizes;
	languages: Languages;
	raceNames: RaceNames;
}
export async function seedRaces(params: SeedRacesParams): Promise<Races> {
	const { creatureSizes, languages, raceNames } = params;
	return {
		aarakocra: await db.createRace({
			id: 'race-aarakocra',
			name: 'Aarakocra',
			description:
				'Birdfolk from the Elemental Plane of Air, Aarakocra are often travelers, expats, refugees, or adventurers. Resembling humanoids in their stature and bipedal movements, they also gain the benefits of a flying speed, slashing talons, and an understanding of the Aarakocra as well as the Auran tongue and writ.',
			ageAdulthood: 3,
			ageLifespan: 30,
			heightRangeLow: 5.0,
			heightRangeHigh: 6.4,
			weightRangeLow: 90,
			weightRangeHigh: 130,
			alabastriaLore:
			"In Bulsania's mountain peaks and Kuriguer's coastal cliffs, Aarakocra serve as messengers and scouts, their aerial perspective providing crucial intelligence about the harsh landscapes below. These birdfolk often work with the Huntbound Order, using their flight to track dangerous creatures across difficult terrain.",
			playstyle:
			'Excellent mobility and ranged combat specialists. Perfect for players who want aerial superiority and unique movement options.',
			defaultCreatureSizeId: creatureSizes.medium.id,
			languages: {
				connect: [
					{ id: languages.common.id },
					{ id: languages.aarakocra.id },
					{ id: languages.auran.id },
				],
			},
			additionalProperties: {
				alignment:
					'Most aarakocra are good and rarely choose sides when it comes to law and chaos. Leaders are sometimes lawful good.',
				abilityScoreIncreases: ['+2 Dex', '+1 Wis'],
				speed: '25 feet walking, 50 feet flying',
				traits: [
					"Flight: You have a flying speed of 50 feet. To use this speed, you can't be wearing medium or heavy armor.",
					'Talons: You are proficient with your unarmed strikes, which deal 1d4 slashing damage on a hit.',
				],
			},
			namesId: raceNames.aarakocra.id,
		}),
		aasimar: await db.createRace({
			id: 'race-aasimar',
			name: 'Aasimar',
			description:
				'Aasimar are descended from humans and often celestials, reflecting the light and pure good of the divine realm. This goodness is often signified by a celestial mark on their bodies and their undeniable beauty.',
			ageAdulthood: 18,
			ageLifespan: 160,
			heightRangeLow: 5.4,
			heightRangeHigh: 7.0,
			weightRangeLow: 110,
			weightRangeHigh: 190,
			alabastriaLore:
			"Across Skratonia's cities and temples, Aasimar serve as beacons of hope and divine guidance. These celestial-touched individuals often work with clerics and paladins, their healing abilities and divine resistance making them natural leaders in the fight against darkness.",
			playstyle:
			"Divine support and healing specialists. Great for players who want to be the party's moral compass and primary healer.",
			defaultCreatureSizeId: creatureSizes.medium.id,
			languages: {
				connect: [
					{ id: languages.common.id },
					{ id: languages.celestial.id },
				],
			},
			additionalProperties: {
				abilityScoreIncreases: ['+2 Cha'],
				alignment:
					'Aasimar are inclined toward good alignments. Not all aasimar are of good alignment, but very few are evil.',
				speed: '30 feet',
				traits: [
					"Darkvision: You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
					'Celestial Resistance: You have resistance to necrotic damage and radiant damage.',
					"Healing Hands: As an action, you can touch a creature and cause it to regain a number of hit points equal to your level. Once you use this trait, you can't use it again until you finish a long rest.",
				],
			},
			namesId: raceNames.aasimar.id,
		}),
		autognome: await db.createRace({
			id: 'race-autognome',
			name: 'Autognome',
			description:
				'Autognomes are small constructs built by gnomes to serve as assistants and companions. They are imbued with a spark of life and sentience, making them more than mere machines.',
			ageAdulthood: 0,
			ageLifespan: 0,
			heightRangeLow: 2.8,
			heightRangeHigh: 3.4,
			weightRangeLow: 45,
			weightRangeHigh: 49,
			alabastriaLore:
			"In Alatman's volcanic forges and Maltman's mountain workshops, Autognomes serve as tireless assistants to their gnomish creators. These mechanical beings represent the pinnacle of gnomish engineering, combining magical and technological innovation in Alabastria's most advanced settlements.",
			playstyle:
			'Durable utility specialists with unique construct abilities. Perfect for players who want to be immune to many common threats and have unique roleplay opportunities.',
			defaultCreatureSizeId: creatureSizes.small.id,
			languages: {
				connect: [
					{ id: languages.common.id },
					{ id: languages.gnomish.id },
				],
			},
			additionalProperties: {
				abilityScoreIncreases: ['+2 Int', '+1 Con'],
				alignment:
					'Most autognomes are lawful, following the instructions of their creators or their own internal programming.',
				speed: '30 feet',
				traits: [
					"Constructed Resilience: You were created to have remarkable fortitude, represented by the following benefits: You have advantage on saving throws against being poisoned, and you have resistance to poison damage. You don't need to eat, drink, or breathe. You are immune to disease. You don't need to sleep, and magic can't put you to sleep.",
					"Mechanical Nature: Your creature type is construct, rather than humanoid. Spells and other effects that target humanoids don't affect you.",
					"Sentry's Rest: When you take a long rest, you must spend at least 6 hours in an inactive, motionless state, rather than sleeping. In this state, you appear inert, but it doesn't render you unconscious, and you can see and hear as normal.",
					'True Life: You are a living creature. You can be affected by healing magic, and you can be targeted by spells that target humanoids. You can be raised from the dead.',
				],
			},
			namesId: raceNames.autognome.id,
		}),
		bugbear: await db.createRace({
			id: 'race-bugbear',
			name: 'Bugbear',
			description:
				'Bugbears are large, hairy goblinoids with a talent for stealth and surprise attacks. Despite their intimidating appearance, they can be surprisingly cunning and strategic.',
			ageAdulthood: 16,
			ageLifespan: 80,
			heightRangeLow: 6.0,
			heightRangeHigh: 7.4,
			weightRangeLow: 200,
			weightRangeHigh: 272,
			alabastriaLore:
			"In Katman's swamplands and the darker corners of Alabastria, Bugbears serve as scouts and infiltrators for various factions. Their natural stealth and surprise attack abilities make them valuable assets in the Huntbound Order's more covert operations.",
			playstyle:
			'Stealthy melee combatants with surprise tactics. Great for players who want to be sneaky fighters with extended reach.',
			defaultCreatureSizeId: creatureSizes.medium.id,
			languages: {
				connect: [
					{ id: languages.common.id },
					{ id: languages.goblin.id },
				],
			},
			additionalProperties: {
				abilityScoreIncreases: ['+2 Str', '+1 Dex'],
				alignment:
					'Bugbears are chaotic evil in the wild, but some can be trained to be lawful evil.',
				speed: '30 feet',
				traits: [
					"Darkvision: You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
					'Long-Limbed: When you make a melee attack on your turn, your reach for it is 5 feet greater than normal.',
					'Powerful Build: You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.',
					'Sneaky: You are proficient in the Stealth skill.',
					'Surprise Attack: If you surprise a creature and hit it with an attack on your first turn in combat, the target takes an extra 2d6 damage from the attack.',
				],
			},
			namesId: raceNames.bugbear.id,
		}),
		centaur: await db.createRace({
			id: 'race-centaur',
			name: 'Centaur',
			description:
				'Centaurs are humanoid creatures with the upper body of a human and the lower body of a horse. They are known for their speed, strength, and connection to nature.',
			ageAdulthood: 18,
			ageLifespan: 100,
			heightRangeLow: 6.2,
			heightRangeHigh: 7.1,
			weightRangeLow: 200,
			weightRangeHigh: 272,
			alabastriaLore:
			"On Skratonia's vast plains and in Kuriguer's magical forests, Centaurs serve as messengers, scouts, and guardians of nature. Their speed and connection to the land make them invaluable allies in the Huntbound Order's efforts to protect Alabastria's wilderness.",
			playstyle:
			'Mobile melee combatants with nature connection. Perfect for players who want speed, strength, and natural abilities.',
			defaultCreatureSizeId: creatureSizes.medium.id,
			languages: {
				connect: [
					{ id: languages.common.id },
					{ id: languages.sylvan.id },
				],
			},
			additionalProperties: {
				abilityScoreIncreases: ['+2 Str', '+1 Wis'],
				alignment:
					'Centaurs are typically chaotic good, valuing freedom and nature.',
				speed: '40 feet',
				traits: [
					'Charge: If you move at least 30 feet straight toward a target and then hit it with a melee weapon attack on the same turn, you can immediately follow that attack with a bonus action, making one attack against the target with your hooves.',
					'Hooves: Your hooves are natural melee weapons, which you can use to make unarmed strikes. If you hit with them, you deal bludgeoning damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.',
					'Equine Build: You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift. In addition, any climb that requires hands and feet is especially difficult for you because of your equine legs. When you make such a climb, each foot of movement costs you 4 extra feet, instead of the normal 1 extra foot.',
					'Survivor: You have proficiency in one of the following skills of your choice: Animal Handling, Medicine, Nature, or Survival.',
				],
			},
			namesId: raceNames.centaur.id,
		}),
		changeling: await db.createRace({
			id: 'race-changeling',
			name: 'Changeling',
			description:
				'Changelings are shapeshifters who can alter their appearance at will. They are often found in urban environments where their abilities allow them to blend in and gather information.',
			ageAdulthood: 18,
			ageLifespan: 200,
			heightRangeLow: 5.4,
			heightRangeHigh: 7.0,
			weightRangeLow: 110,
			weightRangeHigh: 190,
			alabastriaLore:
			"In Skratonia's diverse cities and Kuriguer's cosmopolitan ports, Changelings serve as spies, diplomats, and information brokers. Their shapeshifting abilities make them invaluable assets to the Huntbound Order's intelligence operations.",
			playstyle:
			'Versatile social specialists with infiltration abilities. Perfect for players who want to be masters of disguise and social manipulation.',
			defaultCreatureSizeId: creatureSizes.medium.id,
			languages: {
				connect: [
					{ id: languages.common.id },
					{ id: languages.any_two.id },
				],
			},
			additionalProperties: {
				abilityScoreIncreases: ['+2 Cha', '+1 Dex'],
				alignment:
					'Changelings are typically chaotic, as they value personal freedom and adaptability.',
				speed: '30 feet',
				traits: [
					"Shapechanger: As an action, you can change your appearance and your voice. You determine the specifics of the changes, including your coloration, hair length, and sex. You can also adjust your height and weight, but not so much that your size changes. You can make yourself appear as a member of another race, though none of your game statistics change. You can't duplicate the appearance of a creature you've never seen, and you must adopt a form that has the same basic arrangement of limbs that you have. Your clothing and equipment aren't changed by this trait. You stay in the new form until you use an action to revert to your true form or until you die.",
					'Changeling Instincts: You gain proficiency with two of the following skills of your choice: Deception, Insight, Intimidation, and Persuasion.',
					'Divergent Persona: You gain proficiency with one tool of your choice. You also choose two personality traits, one ideal, one bond, and one flaw. While you are in the form of this persona, the chosen personality traits, ideal, bond, and flaw replace those of your background.',
				],
			},
			namesId: raceNames.changeling.id,
		}),
		dhampir: await db.createRace({
			id: 'race-dhampir',
			name: 'Dhampir',
			description:
				"Dhampirs are the offspring of vampires and mortals, inheriting some of their undead parent's abilities while maintaining their humanity. They walk between the worlds of the living and the dead.",
			ageAdulthood: 18,
			ageLifespan: -750,
			heightRangeLow: 5.4,
			heightRangeHigh: 7.0,
			weightRangeLow: 110,
			weightRangeHigh: 190,
			alabastriaLore:
			"In Alabastria's shadowed corners and among the undead-haunted regions, Dhampirs walk a dangerous path between life and death. Some serve the Huntbound Order as specialists against undead threats, while others struggle with their dark heritage in the world's more accepting communities.",
			playstyle:
			'Mobile combatants with unique feeding mechanics. Great for players who want to play morally complex characters with undead abilities.',
			defaultCreatureSizeId: creatureSizes.medium.id,
			languages: {
				connect: [
					{ id: languages.common.id },
					{ id: languages.any_one.id },
				],
			},
			additionalProperties: {
				abilityScoreIncreases: ['+2 Cha', '+1 Dex'],
				alignment:
					'Dhampirs can be of any alignment, though many struggle with their dark heritage.',
				speed: '35 feet',
				traits: [
					"Darkvision: You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
					'Spider Climb: You have a climbing speed equal to your walking speed. In addition, you can move up, down, and across vertical surfaces and upside down along ceilings, while leaving your hands free.',
					"Vampiric Bite: Your fanged bite is a natural weapon, which counts as a simple melee weapon with which you are proficient. You add your Constitution modifier, instead of your Strength modifier, to the attack and damage rolls when you attack with this bite. It deals 1d4 piercing damage on a hit. While you are missing half or more of your hit points, you have advantage on attack rolls you make with this bite. When you attack with this bite and hit a creature that doesn't have all its hit points, you can empower yourself in one of the following ways: You regain hit points equal to the damage dealt by the bite. You gain a bonus to the next ability check or attack roll you make; the bonus equals the damage dealt by the bite (minimum of +1). Either choice requires no action. You can empower yourself with this bite a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
					"Deathless Nature: You don't need to breathe.",
				],
			},
			namesId: raceNames.dhampir.id,
		}),
		dragonborn: await db.createRace({
			id: 'race-dragonborn',
			name: 'Dragonborn',
			description:
				'Dragonborn are humanoid dragons, created by dragons or born from dragon eggs. They are proud, honorable, and often seek to prove their worth through great deeds.',
			ageAdulthood: 15,
			ageLifespan: 80,
			heightRangeLow: 5.6,
			heightRangeHigh: 7.2,
			weightRangeLow: 175,
			weightRangeHigh: 247,
			alabastriaLore:
			"In Bulsania's militarized society and across Alabastria's dragon-worshipping regions, Dragonborn serve as elite warriors and leaders. Their draconic heritage and martial prowess make them natural commanders in the Huntbound Order's most dangerous missions.",
			playstyle:
			'Martial combatants with elemental abilities. Perfect for players who want to be proud warriors with draconic powers.',
			defaultCreatureSizeId: creatureSizes.medium.id,
			languages: {
				connect: [
					{ id: languages.common.id },
					{ id: languages.draconic.id },
				],
			},
			additionalProperties: {
				abilityScoreIncreases: ['+2 Str', '+1 Cha'],
				alignment:
					'Dragonborn tend to extremes, making a conscious choice for one side or the other in the cosmic war between good and evil.',
				speed: '30 feet',
				traits: [
					'Draconic Ancestry: You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.',
					"Breath Weapon: You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can't use it again until you complete a short or long rest.",
					'Damage Resistance: You have resistance to the damage type associated with your draconic ancestry.',
				],
			},
			namesId: raceNames.dragonborn.id,
		}),
		dwarf: await db.createRace({
			id: 'race-dwarf',
			name: 'Dwarf',
			description:
				'Dwarves are a stoic but stern race, ensconced in cities carved from the hearts of mountains and fiercely determined to repel the hardships of the outside world.',
			ageAdulthood: 50,
			ageLifespan: 350,
			heightRangeLow: 3.8,
			heightRangeHigh: 4.0,
			weightRangeLow: 115,
			weightRangeHigh: 163,
			alabastriaLore:
			"In Maltman's mountain strongholds and Alatman's volcanic forges, Dwarves serve as master craftsmen and miners. Their expertise in metalwork and stone construction makes them invaluable allies in the Huntbound Order's efforts to fortify settlements against monstrous threats.",
			playstyle:
			'Durable craftsmen and warriors with resistance to common threats. Perfect for players who want to be tough, practical characters with crafting abilities.',
			defaultCreatureSizeId: creatureSizes.medium.id,
			languages: {
				connect: [
					{ id: languages.common.id },
					{ id: languages.dwarvish.id },
				],
			},
			additionalProperties: {
				abilityScoreIncreases: ['+2 Con'],
				alignment:
					'Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.',
				speed: '25 feet',
				traits: [
					"Darkvision: You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
					'Dwarven Resilience: You have advantage on saving throws against poison, and you have resistance against poison damage.',
					'Stonecunning: Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.',
				],
			},
			namesId: raceNames.dwarf.id,
		}),
		elf: await db.createRace({
			id: 'race-elf',
			name: 'Elf',
			description:
				'Elves are a magical people of otherworldly grace, living in the world but not entirely part of it. They live in places of ethereal beauty, in the midst of ancient forests or in silvery spires glittering with faerie light.',
			ageAdulthood: 100,
			ageLifespan: 750,
			heightRangeLow: 4.6,
			heightRangeHigh: 6.4,
			weightRangeLow: 90,
			weightRangeHigh: 130,
			alabastriaLore:
			"In Kuriguer's magical forests and Skratonia's ancient groves, Elves serve as guardians of nature and keepers of ancient wisdom. Their long lives and magical heritage make them natural leaders in the Huntbound Order's efforts to protect Alabastria's natural beauty and magical secrets.",
			playstyle:
			'Graceful and perceptive characters with magical resistance. Perfect for players who want to be agile, wise, and resistant to common magical effects.',
			defaultCreatureSizeId: creatureSizes.medium.id,
			languages: {
				connect: [
					{ id: languages.common.id },
					{ id: languages.elvish.id },
				],
			},
			additionalProperties: {
				alignment:
					"Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others' freedom as well as their own.",
				abilityScoreIncreases: ['+2 Dex'],
				speed: '30 feet',
			},
			namesId: raceNames.elf.id,
		}),
		fairy: await db.createRace({
			id: 'race-fairy',
			name: 'Fairy',
			description:
				'Fairies are small, magical humanoids with a deep connection to the Feywild. They are known for their mischievous nature and powerful magic.',
			ageAdulthood: 18,
			ageLifespan: -500,
			heightRangeLow: 2.6,
			heightRangeHigh: 3.2,
			weightRangeLow: 30,
			weightRangeHigh: 34,
			alabastriaLore:
			"In Kuriguer's magical forests and fey-touched areas, Fairies serve as messengers and guardians of the natural world. Their small size and magical abilities make them excellent scouts and spies in the Huntbound Order's operations.",
			playstyle:
			'Tiny magical scouts with flight abilities. Perfect for players who want to be small, magical characters with unique movement options.',
			defaultCreatureSizeId: creatureSizes.small.id,
			languages: {
				connect: [
					{ id: languages.common.id },
					{ id: languages.sylvan.id },
				],
			},
			additionalProperties: {
				abilityScoreIncreases: ['+2 Cha', '+1 Dex'],
				alignment:
					'Fairies are typically chaotic, as they value personal freedom and creativity.',
				speed: '30 feet',
			},
			namesId: raceNames.fairy.id,
		}),
		firbolg: await db.createRace({
			id: 'race-firbolg',
			name: 'Firbolg',
			description:
				'Firbolgs are gentle giants who live in the deepest forests and serve as guardians of nature. They are known for their wisdom, strength, and connection to the natural world.',
			ageAdulthood: 30,
			ageLifespan: 500,
			heightRangeLow: 7.0,
			heightRangeHigh: 8.8,
			weightRangeLow: 250,
			weightRangeHigh: 322,
			alabastriaLore:
			"In Kuriguer's deepest forests and Skratonia's ancient groves, Firbolgs serve as guardians of nature and protectors of the innocent. Their gentle strength and natural magic make them powerful allies in the Huntbound Order's efforts to protect Alabastria's wilderness.",
			playstyle:
			'Gentle giants with nature magic and stealth abilities. Perfect for players who want to be strong, wise characters with unique magical abilities.',
			defaultCreatureSizeId: creatureSizes.medium.id,
			languages: {
				connect: [
					{ id: languages.common.id },
					{ id: languages.giant.id },
					{ id: languages.elvish.id },
				],
			},
			additionalProperties: {
				alignment:
					'Firbolgs are typically neutral good, valuing nature and protecting the innocent.',
				abilityScoreIncreases: ['+2 Wis', '+1 Str'],
				speed: '30 feet',
				traits: [
					"Firbolg Magic: You can cast detect magic and disguise self with this trait, using Wisdom as your spellcasting ability. Once you cast either spell with this trait, you can't cast that spell with it again until you finish a short or long rest. You can also cast these spells using any spell slots you have of the appropriate level.",
					"Hidden Step: As a bonus action, you can magically turn invisible until the start of your next turn or until you attack, make a damage roll, or force someone to make a saving throw. Once you use this trait, you can't do so again until you finish a short or long rest.",
					'Powerful Build: You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.',
					'Speech of Beast and Leaf: You have the ability to communicate in a limited manner with beasts and plants. They can understand the meaning of your words, though you have no special ability to understand them in return. You have advantage on all Charisma checks you make to influence them.',
				],
			},
			namesId: raceNames.firbolg.id,
		}),
		genasi: await db.createRace({
			id: 'race-genasi',
			name: 'Genasi',
			description:
				'Genasi are humanoids with a deep connection to elemental forces. They are born when mortals and elementals interbreed, resulting in beings with elemental powers.',
			ageAdulthood: 18,
			ageLifespan: 120,
			heightRangeLow: 5.4,
			heightRangeHigh: 7.0,
			weightRangeLow: 110,
			weightRangeHigh: 190,
			alabastriaLore:
			"In Kuriguer's elemental hotspots and Alatman's volcanic regions, Genasi serve as elemental specialists and magical researchers. Their elemental heritage and magical abilities make them valuable assets in the Huntbound Order's efforts to understand and control Alabastria's magical phenomena.",
			playstyle:
			'Elemental magic users with unique resistances. Perfect for players who want to be magical characters with elemental themes.',
			defaultCreatureSizeId: creatureSizes.medium.id,
			languages: {
				connect: [
					{ id: languages.common.id },
					{ id: languages.primordial.id },
				],
			},
			additionalProperties: {
				abilityScoreIncreases: ['+2 Con'],
				alignment:
					'Genasi can be of any alignment, though they often reflect the nature of their elemental heritage.',
				speed: '30 feet',
				traits: [
					'Elemental Resistance: You have resistance to one damage type based on your elemental heritage.',
					"Elemental Magic: You know one cantrip based on your elemental heritage. At 3rd level, you can cast a 1st-level spell based on your elemental heritage. At 5th level, you can cast a 2nd-level spell based on your elemental heritage. Once you cast a spell with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast these spells using any spell slots you have of the appropriate level. Constitution is your spellcasting ability for these spells.",
				],
			},
			namesId: raceNames.genasi.id,
		}),
		gnome: await db.createRace({
			id: 'race-gnome',
			name: 'Gnome',
			description:
				'Small, curious folk with a natural affinity for magic and invention. Gnomes are known for their intelligence, curiosity, and love of knowledge.',
			ageAdulthood: 40,
			ageLifespan: 500,
			heightRangeLow: 3.0,
			heightRangeHigh: 3.6,
			weightRangeLow: 35,
			weightRangeHigh: 45,
			alabastriaLore:
			'Gnomes in Alabastria are found primarily in the magical academies of Kuriguer, where their natural curiosity and magical aptitude make them excellent researchers and inventors. They often work alongside Artificers to create magical devices and study the strange phenomena of the world.',
			playstyle:
			'Intelligent spellcasters and inventors who excel at problem-solving and magical research. Perfect for players who enjoy creative solutions and magical experimentation.',
			defaultCreatureSizeId: creatureSizes.small.id,
			languages: {
				connect: [
					{ id: languages.common.id },
					{ id: languages.gnomish.id },
					{ id: languages.common_sign_language.id },
					{ id: languages.undercommon.id },
				],
			},
			additionalProperties: {
				alignment:
					'Gnomes are most often good. Those who tend toward law are sages, engineers, researchers, scholars, investigators, or inventors. Those who tend toward chaos are minstrels, tricksters, wanderers, or fanciful jewelers.',
				abilityScoreIncreases: ['+2 Int'],
				speed: '25 feet',
				traits: [
					"Darkvision: You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
					'Gnome Cunning: You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.',
				],
			},
			namesId: raceNames.gnome.id,
		}),
		giff: await db.createRace({
			id: 'race-giff',
			name: 'Giff',
			description:
				'Hippopotamus-like humanoids known for their strength, honor, and love of firearms and explosives. Giff are disciplined warriors with a strong sense of duty.',
			ageAdulthood: 18,
			ageLifespan: 80,
			heightRangeLow: 6.0,
			heightRangeHigh: 7.0,
			weightRangeLow: 280,
			weightRangeHigh: 340,
			alabastriaLore:
			'Giff in Alabastria are found primarily in the militarized regions of Bulsania, where their disciplined nature and combat prowess make them excellent soldiers and guards. They often serve in the Huntbound Order as elite warriors.',
			playstyle:
			'Strong warriors who excel at ranged combat with firearms and heavy weapons. Perfect for players who want to be disciplined soldiers with advanced weaponry.',
			defaultCreatureSizeId: creatureSizes.medium.id,
			languages: {
				connect: [
					{ id: languages.common.id },
					{ id: languages.giff.id },
				],
			},
			additionalProperties: {
				abilityScoreIncreases: ['+2 Str', '+1 Con'],
				alignment:
					'Giff are typically lawful, tending toward good. They value honor, discipline, and order.',
				speed: '30 feet',
			},
			namesId: raceNames.giff.id,
		}),
		goblin: await db.createRace({
			id: 'race-goblin',
			name: 'Goblin',
			description:
				'Small, cunning humanoids known for their stealth, speed, and opportunistic nature. Goblins are survivors who excel at hit-and-run tactics.',
			ageAdulthood: 8,
			ageLifespan: 60,
			heightRangeLow: 3.0,
			heightRangeHigh: 3.6,
			weightRangeLow: 35,
			weightRangeHigh: 45,
			alabastriaLore:
			'Goblins in Alabastria are found in the swamps and wilderness of Kamalatman, where they form small tribes and communities. They are often viewed with suspicion by other races, but some have proven themselves as valuable allies and members of the Huntbound Order.',
			playstyle:
			'Fast and stealthy characters who excel at hit-and-run tactics and survival. Perfect for players who want to be quick and cunning.',
			defaultCreatureSizeId: creatureSizes.small.id,
			languages: {
				connect: [
					{ id: languages.common.id },
					{ id: languages.goblin.id },
				],
			},
			additionalProperties: {
				abilityScoreIncreases: ['+2 Dex', '+1 Con'],
				alignment:
					'Goblins are typically neutral evil, as they care only for their own needs. A few goblins might rise above their origins, however, proving to be heroes worthy of legend.',
				speed: '30 feet',
				traits: [
					"Darkvision: You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
					"Fury of the Small: When you damage a creature with an attack or a spell and the creature's size is larger than yours, you can cause the attack or spell to deal extra damage to the creature. The extra damage equals your level. Once you use this trait, you can't use it again until you finish a short or long rest.",
					'Nimble Escape: You can take the Disengage or Hide action as a bonus action on each of your turns.',
				],
			},
			namesId: raceNames.goblin.id,
		}),
		goliath: await db.createRace({
			id: 'race-goliath',
			name: 'Goliath',
			description:
				'Tall, muscular humanoids with gray skin and a natural resistance to cold. Goliaths are competitive and value strength and endurance.',
			ageAdulthood: 18,
			ageLifespan: 90,
			heightRangeLow: 7.0,
			heightRangeHigh: 8.0,
			weightRangeLow: 280,
			weightRangeHigh: 340,
			alabastriaLore:
			'Goliaths in Alabastria are found primarily in the mountain regions of Bulsania and Kamalatman, where their strength and endurance make them excellent climbers and warriors. They often serve as guides and protectors in the harsh mountain terrain.',
			playstyle:
			'Strong and tough characters who excel at physical challenges and combat. Perfect for players who want to be powerful warriors with natural resilience.',
			defaultCreatureSizeId: creatureSizes.medium.id,
			languages: {
				connect: [
					{ id: languages.common.id },
					{ id: languages.giant.id },
					{ id: languages.common_sign_language.id },
				],
			},
			additionalProperties: {
				alignment:
					'Goliaths tend toward neutral alignments. They value individual freedom and self-reliance.',
				abilityScoreIncreases: ['+2 Str', '+1 Con'],
				speed: '30 feet',
			},
			namesId: raceNames.goliath.id,
		}),
		hadozee: await db.createRace({
			id: 'race-hadozee',
			name: 'Hadozee',
			description:
				'Simian humanoids with patagial skin flaps between their arms and legs, Hadozee are natural climbers, sailors, and gliders. They are often called “deck apes,” moving with agility through ships’ rigging or across rugged terrain. Their prehensile feet grant extra dexterity, and in the air they can glide to safety from falls. In Skratonia, they are known for navigating between open plains and sky-scoured plateaus, often serving as scouts, sailors, or wanderers between towns.',
			ageAdulthood: 18,
			ageLifespan: 90,
			heightRangeLow: 5.0,
			heightRangeHigh: 6.0,
			weightRangeLow: 150,
			weightRangeHigh: 200,
			alabastriaLore:
			'In the plains and sky-scrub plateaus of Skratonia, Hadozee make their homes near cliff-edged oases and rigged lookout towers, gliding from heights to scout the terrain below. Their prehensile feet let them navigate planks, ropes, and the rigging of ships or nomadic caravans with ease. Many join the wind-flecked trading fleets of Skratonia, serving aboard sail-ships or sky-vessels, guiding them along trade routes between major towns carved across open plains.',
			playstyle:
			'Mobile scouts and utility characters. Good for players who like vertical movement (glide), creative positioning, and surviving falls. Excellent with classes that benefit from mobility, dexterity, or reactions.',
			defaultCreatureSizeId: creatureSizes.medium.id,
			languages: {
				connect: [
					{ id: languages.common.id },
					{ id: languages.hadozee.id },
				],
			},
			additionalProperties: {
				abilityScoreIncreases: ['+2 Dex', '+1 Of Your Choice'],
				alignment:
					'Tending toward neutrality, often mercenary or wanderlust-driven. Exceptions lean more chaotic than lawful and more often good than evil.',
				speed: '30 feet walking; climbing speed equal to walking speed',
				traits: [
					'Dexterous Feet: As a bonus action, you can use your feet to manipulate an object, open or close a door or container, or pick up or set down a Tiny object.',
					'Glide: When you fall at least 10 feet, you can use your reaction to extend your skin membranes to glide horizontally a number of feet equal to your walking speed, and you take no damage from the fall. You choose the direction of the glide.',
					'Hadozee Dodge: When you take damage, you can use your reaction to roll a d6 and add your proficiency bonus; reduce the damage by that total (minimum 0). You can use this trait a number of times equal to your proficiency bonus, and regain all uses after a long rest.',
				],
			},
			namesId: raceNames.hadozee.id,
		}),
		half_elf: await db.createRace({
			id: 'race-half-elf',
			name: 'Half-Elf',
			description:
				'The offspring of humans and elves, combining the best traits of both races. Half-elves are versatile and charismatic, often serving as diplomats and mediators.',
			ageAdulthood: 20,
			ageLifespan: 180,
			heightRangeLow: 5.0,
			heightRangeHigh: 6.0,
			weightRangeLow: 110,
			weightRangeHigh: 180,
			alabastriaLore:
			'Half-Elves in Alabastria are found throughout all continents, often serving as diplomats and mediators between different races. Their mixed heritage makes them valuable in the complex political landscape of the world.',
			playstyle:
			'Versatile characters who excel at social interaction and can adapt to many different situations. Perfect for players who want flexibility and charisma.',
			defaultCreatureSizeId: creatureSizes.medium.id,
			languages: {
				connect: [
					{ id: languages.common.id },
					{ id: languages.elvish.id },
					{ id: languages.any_one.id },
				],
			},
			additionalProperties: {
				alignment:
					'Half-elves share the chaotic bent of their elven heritage. They value both personal freedom and creative expression, demonstrating neither love of leaders nor desire for followers.',
				abilityScoreIncreases: ['+2 Cha', '+1 Of Your Choice'],
				speed: '30 feet',
				traits: [
					"Darkvision: You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
					"Fey Ancestry: You have advantage on saving throws against being charmed, and magic can't put you to sleep.",
					'Skill Versatility: You gain proficiency in two skills of your choice.',
				],
			},
			namesId: raceNames.half_elf.id,
		}),
		half_orc: await db.createRace({
			id: 'race-half-orc',
			name: 'Half-Orc',
			description:
				'The offspring of humans and orcs, combining human versatility with orcish strength and endurance. Half-orcs are often found on the fringes of society.',
			ageAdulthood: 14,
			ageLifespan: 75,
			heightRangeLow: 5.6,
			heightRangeHigh: 6.6,
			weightRangeLow: 150,
			weightRangeHigh: 220,
			alabastriaLore:
			'Half-Orcs in Alabastria are found primarily in the frontier regions of Kamalatman and the borderlands of Skratonia, where their strength and endurance make them valuable as guards and warriors. They often face discrimination but have proven themselves as capable members of the Huntbound Order.',
			playstyle:
			'Strong and tough characters who excel at combat and survival. Perfect for players who want to be powerful warriors with natural resilience.',
			defaultCreatureSizeId: creatureSizes.medium.id,
			languages: {
				connect: [
					{ id: languages.common.id },
					{ id: languages.orcish.id },
				],
			},
			additionalProperties: {
				abilityScoreIncreases: ['+2 Str', '+1 Con'],
				alignment:
					'Half-orcs inherit a tendency toward chaos from their orc parents and are not strongly inclined toward good. Half-orcs raised among orcs and willing to live out their lives among them are usually evil.',
				speed: '30 feet',
				traits: [
					"Darkvision: You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
					"Relentless Endurance: When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can't use this feature again until you finish a long rest.",
					"Savage Attacks: When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit.",
				],
			},
			namesId: raceNames.half_orc.id,
		}),
		halfling: await db.createRace({
			id: 'race-halfling',
			name: 'Halfling',
			description:
				'Small, cheerful folk known for their luck, courage, and love of comfort. Halflings are optimistic and resourceful, making the best of any situation.',
			ageAdulthood: 20,
			ageLifespan: 150,
			heightRangeLow: 2.7,
			heightRangeHigh: 3.3,
			weightRangeLow: 30,
			weightRangeHigh: 40,
			alabastriaLore:
			"Halflings in Alabastria are found primarily in the fertile plains of Skratonia, where their agricultural skills and community values make them excellent farmers and merchants. They often serve as the backbone of the region's economy and are known for their hospitality.",
			playstyle:
			'Lucky and brave characters who excel at avoiding danger and supporting their communities. Perfect for players who want to be optimistic and resourceful.',
			defaultCreatureSizeId: creatureSizes.small.id,
			languages: {
				connect: [
					{ id: languages.common.id },
					{ id: languages.halfling.id },
				],
			},
			additionalProperties: {
				abilityScoreIncreases: ['+2 Dex'],
				alignment:
					'Most halflings are lawful good. As a rule, they are good-hearted and kind, hate to see others in pain, and have no tolerance for oppression. They are also very orderly and traditional, leaning heavily on the support of their community and the comfort of their old ways.',
				speed: '25 feet',
				traits: [
					'Lucky: When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.',
					'Brave: You have advantage on saving throws against being frightened.',
					'Halfling Nimbleness: You can move through the space of any creature that is of a size larger than yours.',
				],
			},
			namesId: raceNames.halfling.id,
		}),
		harengon: await db.createRace({
			id: 'race-harengon',
			name: 'Harengon',
			description:
				'Rabbit-like humanoids known for their agility, luck, and connection to the Feywild. Harengon are quick, nimble, and often have a mischievous streak.',
			ageAdulthood: 18,
			ageLifespan: 80,
			heightRangeLow: 3.0,
			heightRangeHigh: 5.0,
			weightRangeLow: 35,
			weightRangeHigh: 85,
			alabastriaLore:
			'Harengon in Alabastria are found primarily in the magical forests of Kuriguer, where their fey heritage and agility make them excellent scouts and messengers. They often serve as couriers for the Huntbound Order and guides through dangerous terrain.',
			playstyle:
			'Agile and lucky characters who excel at movement and avoiding danger. Perfect for players who want to be quick and nimble.',
			defaultCreatureSizeId: creatureSizes.small.id,
			languages: {
				connect: [
					{ id: languages.common.id },
					{ id: languages.sylvan.id },
				],
			},
			additionalProperties: {
				abilityScoreIncreases: ['+2 Dex', '+1 Of Your Choice'],
				alignment:
					'Harengon are typically chaotic, tending toward good. They value freedom and personal expression.',
				speed: '30 feet',
			},
			namesId: raceNames.harengon.id,
		}),
		hexblood: await db.createRace({
			id: 'race-hexblood',
			name: 'Hexblood',
			description:
				"Humanoids touched by hag magic, bearing the mark of a hag's influence. Hexbloods are often outcasts but possess unique magical abilities.",
			ageAdulthood: 18,
			ageLifespan: 200,
			heightRangeLow: 5.0,
			heightRangeHigh: 6.0,
			weightRangeLow: 110,
			weightRangeHigh: 180,
			alabastriaLore:
			"Hexbloods in Alabastria are found in the darker regions of Kuriguer's forests and the swamps of Kamalatman, where their hag-touched nature makes them both feared and sought after for their unique magical abilities. They often serve as scouts and information gatherers for the Huntbound Order.",
			playstyle:
			'Magical characters with unique abilities and outsider status. Perfect for players who want to be mysterious and magical.',
			defaultCreatureSizeId: creatureSizes.medium.id,
			languages: {
				connect: [
					{ id: languages.common.id },
					{ id: languages.any_one.id },
				],
			},
			additionalProperties: {
				abilityScoreIncreases: ['+1 Of Your Choice'],
				alignment:
					'Hexbloods can be of any alignment, but many lean toward chaotic due to their outsider status.',
				speed: '30 feet',
			},
			namesId: raceNames.hexblood.id,
		}),

		hobgoblin: await db.createRace({
			id: 'race-hobgoblin',
			name: 'Hobgoblin',
			description:
				'Larger, more disciplined cousins of goblins known for their military prowess and strict codes of honor. Hobgoblins are organized warriors who value discipline and order.',
			ageAdulthood: 18,
			ageLifespan: 80,
			heightRangeLow: 5.6,
			heightRangeHigh: 6.6,
			weightRangeLow: 150,
			weightRangeHigh: 220,
			alabastriaLore:
			'Hobgoblins in Alabastria are found in the militarized regions of Bulsania and the organized settlements of Kamalatman, where their disciplined nature and military training make them excellent soldiers and guards. Some have proven themselves as valuable members of the Huntbound Order.',
			playstyle:
			'Disciplined warriors who excel at organized combat and teamwork. Perfect for players who want to be military-focused characters.',
			defaultCreatureSizeId: creatureSizes.medium.id,
			languages: {
				connect: [
					{ id: languages.common.id },
					{ id: languages.goblin.id },
				],
			},
			additionalProperties: {
				abilityScoreIncreases: ['+2 Con', '+1 Int'],
				alignment:
					'Hobgoblins are typically lawful evil, as they care only for their own needs and are willing to use any means to achieve their goals.',
				speed: '30 feet',
				traits: [
					"Darkvision: You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
					'Martial Training: You are proficient with two martial weapons of your choice and with light armor.',
					"Saving Face: If you miss with an attack roll or fail an ability check, you can gain a bonus to the roll equal to the number of allies you can see within 30 feet of you (maximum bonus of +5). Once you use this trait, you can't use it again until you finish a short or long rest.",
				],
			},
			namesId: raceNames.hobgoblin.id,
		}),
		human: await db.createRace({
			id: 'race-human',
			name: 'Human',
			description:
				'The most adaptable and ambitious of the common races, humans are known for their versatility and drive to achieve greatness. They are found in every corner of the world.',
			ageAdulthood: 18,
			ageLifespan: 80,
			heightRangeLow: 5.0,
			heightRangeHigh: 6.0,
			weightRangeLow: 110,
			weightRangeHigh: 180,
			alabastriaLore:
			'Humans in Alabastria are found throughout all continents, serving as the backbone of most civilizations. Their adaptability and ambition have made them leaders in politics, trade, and the Huntbound Order. They are known for their ability to work with other races and their drive to achieve greatness.',
			playstyle:
			'Versatile characters who can excel at any role. Perfect for players who want maximum flexibility and adaptability.',
			defaultCreatureSizeId: creatureSizes.medium.id,
			languages: {
				connect: [
					{ id: languages.common.id },
					{ id: languages.any_one.id },
				],
			},
			additionalProperties: {
				abilityScoreIncreases: ['+1 Of Your Choice'],
				alignment:
					'Humans tend toward no particular alignment. The best and the worst are found among them.',
				speed: '30 feet',
			},
			namesId: raceNames.human.id,
		}),
		kalashtar: await db.createRace({
			id: 'race-kalashtar',
			name: 'Kalashtar',
			description:
				'Humanoids with a unique connection to the dream plane, sharing their consciousness with quori spirits. Kalashtar are wise, empathetic, and possess psionic abilities.',
			ageAdulthood: 18,
			ageLifespan: 80,
			heightRangeLow: 5.0,
			heightRangeHigh: 6.0,
			weightRangeLow: 110,
			weightRangeHigh: 180,
			alabastriaLore:
			'Kalashtar in Alabastria are found primarily in the magical regions of Kuriguer, where their psionic abilities and connection to the dream plane make them excellent scholars and spiritual guides. They often serve as advisors to the Huntbound Order and other organizations.',
			playstyle:
			'Psionic characters with telepathic abilities and spiritual wisdom. Perfect for players who want to be wise and empathetic with unique mental powers.',
			defaultCreatureSizeId: creatureSizes.medium.id,
			languages: {
				connect: [
					{ id: languages.common.id },
					{ id: languages.quori.id },
				],
			},
			additionalProperties: {
				abilityScoreIncreases: ['+2 Wis', '+1 Of Your Choice'],
				alignment:
					'Kalashtar are typically lawful good, as they are guided by the wisdom of their quori spirits.',
				speed: '30 feet',
				traits: [
					'Dual Mind: You have advantage on all Wisdom saving throws.',
					'Mental Discipline: You have resistance to psychic damage.',
					'Mind Link: You can speak telepathically to any creature you can see within 30 feet of you. The creature understands you only if the two of you share a language. You can speak telepathically in this way to one creature at a time.',
					"Severed from Dreams: You don't sleep, and magic can't put you to sleep. You can finish a long rest in 4 hours if you spend those hours in a trancelike meditation, during which you retain consciousness.",
				],
			},
			namesId: raceNames.kalashtar.id,
		}),
		kender: await db.createRace({
			id: 'race-kender',
			name: 'Kender',
			description:
				"Small, curious humanoids known for their fearlessness, curiosity, and tendency to 'borrow' things. Kender are brave, optimistic, and often find themselves in trouble.",
			ageAdulthood: 20,
			ageLifespan: 150,
			heightRangeLow: 3.0,
			heightRangeHigh: 3.6,
			weightRangeLow: 35,
			weightRangeHigh: 45,
			alabastriaLore:
			"Kender in Alabastria are found throughout all continents, often serving as scouts and adventurers. Their fearlessness and curiosity make them excellent for dangerous missions, though their tendency to 'borrow' things can cause problems.",
			playstyle:
			'Fearless and curious characters who excel at exploration and social interaction. Perfect for players who want to be brave and optimistic.',
			defaultCreatureSizeId: creatureSizes.small.id,
			languages: {
				connect: [
					{ id: languages.common.id },
					{ id: languages.kenderspeak.id },
				],
			},
			additionalProperties: {
				abilityScoreIncreases: ['+2 Dex', '+1 Cha'],
				alignment:
					'Kender are typically chaotic good, as they value freedom and helping others.',
				speed: '25 feet',
				traits: [
					'Fearless: You are immune to the frightened condition.',
					'Kender Curiosity: You have advantage on all Intelligence (Investigation) checks.',
					'Taunt: As a bonus action, you can unleash a string of provoking words at a creature within 30 feet of you that can hear you. The target must succeed on a Wisdom saving throw (DC 8 + your proficiency bonus + your Charisma modifier) or be taunted by you until the start of your next turn. A taunted target has disadvantage on attack rolls against targets other than you.',
				],
			},
			namesId: raceNames.kender.id,
		}),
		kenku: await db.createRace({
			id: 'race-kenku',
			name: 'Kenku',
			description:
				'Raven-like humanoids cursed to mimic sounds and voices rather than speak original thoughts. Kenku are clever, stealthy, and excellent at imitation.',
			ageAdulthood: 12,
			ageLifespan: 60,
			heightRangeLow: 5.0,
			heightRangeHigh: 5.6,
			weightRangeLow: 90,
			weightRangeHigh: 120,
			alabastriaLore:
			"Kenku in Alabastria are found in the cities and wilderness of all continents, often serving as spies, messengers, and information gatherers. Their mimicry abilities make them valuable for the Huntbound Order's intelligence operations.",
			playstyle:
			'Stealthy and clever characters who excel at imitation and information gathering. Perfect for players who want to be sneaky and resourceful.',
			defaultCreatureSizeId: creatureSizes.medium.id,
			languages: {
				connect: [
					{ id: languages.common.id },
					{ id: languages.auran.id },
					{ id: languages.common_sign_language.id },
				],
			},
			additionalProperties: {
				alignment:
					'Kenku are typically chaotic neutral, as they are driven by their own desires and instincts.',
				abilityScoreIncreases: ['+2 Dex', '+1 Wis'],
				speed: '30 feet',
			},
			namesId: raceNames.kenku.id,
		}),
		kobold: await db.createRace({
			id: 'race-kobold',
			name: 'Kobold',
			description:
				'Small, reptilian humanoids known for their cowardice, cunning, and pack tactics. Kobolds are weak individually but dangerous in groups.',
			ageAdulthood: 6,
			ageLifespan: 120,
			heightRangeLow: 2.0,
			heightRangeHigh: 2.6,
			weightRangeLow: 25,
			weightRangeHigh: 35,
			alabastriaLore:
			'Kobolds in Alabastria are found in the underground regions of Kamalatman and the mountain caves of Bulsania, where they form small communities and serve as scouts and miners. Some have proven themselves as valuable members of the Huntbound Order.',
			playstyle:
			'Small and cunning characters who excel at teamwork and survival. Perfect for players who want to be clever and resourceful.',
			defaultCreatureSizeId: creatureSizes.small.id,
			languages: {
				connect: [
					{ id: languages.common.id },
					{ id: languages.draconic.id },
				],
			},
			additionalProperties: {
				abilityScoreIncreases: ['+2 Dex'],
				alignment:
					'Kobolds are typically lawful evil, as they care only for their own needs and are willing to use any means to achieve their goals.',
				speed: '30 feet',
			},
			namesId: raceNames.kobold.id,
		}),
		leonin: await db.createRace({
			id: 'race-leonin',
			name: 'Leonin',
			description:
				'Lion-like humanoids known for their strength, courage, and regal bearing. Leonin are proud warriors who value honor and strength.',
			ageAdulthood: 18,
			ageLifespan: 80,
			heightRangeLow: 5.6,
			heightRangeHigh: 6.6,
			weightRangeLow: 150,
			weightRangeHigh: 220,
			alabastriaLore:
			'Leonin in Alabastria are found primarily in the plains of Skratonia and the mountain regions of Bulsania, where their strength and courage make them excellent warriors and leaders. They often serve as commanders in the Huntbound Order and other military organizations.',
			playstyle:
			'Strong and courageous characters who excel at combat and leadership. Perfect for players who want to be powerful warriors with regal bearing.',
			defaultCreatureSizeId: creatureSizes.medium.id,
			languages: {
				connect: [
					{ id: languages.common.id },
					{ id: languages.leonin.id },
				],
			},
			additionalProperties: {
				abilityScoreIncreases: ['+2 Str', '+1 Con'],
				alignment:
					'Leonin are typically lawful good, as they value honor, justice, and protecting the weak.',
				speed: '35 feet',
				traits: [
					"Darkvision: You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
					'Claws: Your claws are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.',
					"Hunter's Instincts: You have proficiency in one of the following skills of your choice: Athletics, Intimidation, Perception, or Survival.",
					"Daunting Roar: As a bonus action, you can let out a menacing roar. Creatures of your choice within 10 feet of you that can hear you must succeed on a Wisdom saving throw (DC 8 + your proficiency bonus + your Charisma modifier) or be frightened of you until the end of your next turn. Once you use this trait, you can't use it again until you finish a short or long rest.",
				],
			},
			namesId: raceNames.leonin.id,
		}),
		lizardfolk: await db.createRace({
			id: 'race-lizardfolk',
			name: 'Lizardfolk',
			description:
				'Reptilian humanoids known for their natural armor, swimming abilities, and practical nature. Lizardfolk are survivalists who value efficiency and strength.',
			ageAdulthood: 14,
			ageLifespan: 60,
			heightRangeLow: 5.6,
			heightRangeHigh: 6.6,
			weightRangeLow: 150,
			weightRangeHigh: 220,
			alabastriaLore:
			'Lizardfolk in Alabastria are found primarily in the swamps and wetlands of Kamalatman, where their natural abilities make them excellent hunters and survivalists. They often serve as guides and scouts for the Huntbound Order in difficult terrain.',
			playstyle:
			'Survivalist characters who excel at combat and wilderness survival. Perfect for players who want to be practical and efficient.',
			defaultCreatureSizeId: creatureSizes.medium.id,
			languages: {
				connect: [
					{ id: languages.common.id },
					{ id: languages.draconic.id },
				],
			},
			additionalProperties: {
				abilityScoreIncreases: ['+2 Con', '+1 Wis'],
				alignment:
					'Lizardfolk are typically neutral, as they care only for their own survival and the survival of their tribe.',
				speed: '30 feet',
				traits: [
					'Bite: Your fanged maw is a natural weapon, which you can use to make unarmed strikes. If you hit with it, you deal piercing damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.',
					"Cunning Artisan: As part of a short rest, you can harvest bone and hide from a slain beast, construct, dragon, monstrosity, or plant creature of size Small or larger to create one of the following items: a shield, a club, a javelin, or 1d4 darts or blowgun needles. To use this trait, you need a blade, such as a dagger, or appropriate artisan's tools, such as leatherworker's tools.",
					'Hold Breath: You can hold your breath for up to 15 minutes at a time.',
					"Natural Armor: You have tough, scaly skin. When you aren't wearing armor, your AC is 13 + your Dexterity modifier. You can use your natural armor to determine your AC if the armor you wear would leave you with a lower AC. A shield's benefits apply as normal while you use your natural armor.",
					"Hungry Jaws: In battle, you can throw yourself into a vicious feeding frenzy. As a bonus action, you can make a special attack with your bite. If the attack hits, it deals its normal damage, and you gain temporary hit points (minimum of 1) equal to your Constitution modifier, and you can't use this trait again until you finish a short or long rest.",
				],
			},
			namesId: raceNames.lizardfolk.id,
		}),
		loxodon: await db.createRace({
			id: 'race-loxodon',
			name: 'Loxodon',
			description:
				'Elephant-like humanoids known for their strength, wisdom, and natural armor. Loxodon are patient, wise, and have excellent memories.',
			ageAdulthood: 18,
			ageLifespan: 80,
			heightRangeLow: 6.0,
			heightRangeHigh: 7.0,
			weightRangeLow: 280,
			weightRangeHigh: 340,
			alabastriaLore:
			'Loxodon in Alabastria are found primarily in the plains of Skratonia and the mountain regions of Bulsania, where their strength and wisdom make them excellent leaders and protectors. They often serve as advisors and commanders in the Huntbound Order.',
			playstyle:
			'Strong and wise characters who excel at leadership and protection. Perfect for players who want to be patient and powerful.',
			defaultCreatureSizeId: creatureSizes.medium.id,
			languages: {
				connect: [
					{ id: languages.common.id },
					{ id: languages.loxodon.id },
				],
			},
			additionalProperties: {
				abilityScoreIncreases: ['+2 Con', '+1 Wis'],
				alignment:
					'Loxodon are typically lawful good, as they value order, justice, and protecting others.',
				speed: '30 feet',
				traits: [
					"Natural Armor: You have thick, leathery skin. When you aren't wearing armor, your AC is 12 + your Constitution modifier. You can use your natural armor to determine your AC if the armor you wear would leave you with a lower AC. A shield's benefits apply as normal while you use your natural armor.",
					'Powerful Build: You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.',
					"Trunk: You can grasp things with your trunk, and you can use it as a snorkel. It has a reach of 5 feet, and it can lift a number of pounds equal to five times your Strength score. You can use it to do the following simple tasks: lift, drop, hold, push, or pull an object or a creature; open or close a door or a container; grapple someone; or make an unarmed strike. Your DM might allow other simple tasks to be added to that list of options. It can't wield weapons or shields or do anything that requires manual precision, such as using tools or magic items or performing the somatic components of a spell.",
					'Keen Smell: Thanks to your sensitive trunk, you have advantage on Wisdom (Perception) checks that involve smell.',
				],
			},
			namesId: raceNames.loxodon.id,
		}),
		minotaur: await db.createRace({
			id: 'race-minotaur',
			name: 'Minotaur',
			description:
				'Bull-like humanoids known for their strength, horns, and connection to labyrinths. Minotaurs are powerful warriors with a natural sense of direction.',
			ageAdulthood: 18,
			ageLifespan: 80,
			heightRangeLow: 6.0,
			heightRangeHigh: 7.0,
			weightRangeLow: 200,
			weightRangeHigh: 280,
			alabastriaLore:
			'Minotaurs in Alabastria are found primarily in the mountain regions of Bulsania and the underground areas of Kamalatman, where their strength and sense of direction make them excellent guides and warriors. They often serve as protectors and scouts for the Huntbound Order.',
			playstyle:
			'Strong and powerful characters who excel at combat and navigation. Perfect for players who want to be powerful warriors with unique abilities.',
			defaultCreatureSizeId: creatureSizes.medium.id,
			languages: {
				connect: [
					{ id: languages.common.id },
					{ id: languages.minotaur.id },
				],
			},
			additionalProperties: {
				abilityScoreIncreases: ['+2 Str', '+1 Con'],
				alignment:
					'Minotaurs are typically chaotic neutral, as they value freedom and personal strength.',
				speed: '30 feet',
				traits: [
					'Horns: Your horns are natural melee weapons, which you can use to make unarmed strikes. If you hit with them, you deal piercing damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.',
					'Goring Rush: When you take the Dash action on your turn, you can make one melee attack with your horns as a bonus action.',
					'Hammering Horns: When you use the Attack action during your turn to make a melee attack, you can attempt to shove a creature with your horns as a bonus action. You cannot use this shove attempt to knock a creature prone.',
					'Labyrinthine Recall: You can perfectly recall any path you have traveled.',
				],
			},
			namesId: raceNames.minotaur.id,
		}),
		orc: await db.createRace({
			id: 'race-orc',
			name: 'Orc',
			description:
				'Strong, aggressive humanoids known for their physical prowess and tribal culture. Orcs are fierce warriors who value strength and honor.',
			ageAdulthood: 14,
			ageLifespan: 75,
			heightRangeLow: 5.6,
			heightRangeHigh: 6.6,
			weightRangeLow: 150,
			weightRangeHigh: 220,
			alabastriaLore:
			'Orcs in Alabastria are found primarily in the frontier regions of Kamalatman and the borderlands of Skratonia, where their strength and aggression make them valuable as warriors and guards. Some have proven themselves as capable members of the Huntbound Order.',
			playstyle:
			'Strong and aggressive characters who excel at combat and physical challenges. Perfect for players who want to be powerful warriors.',
			defaultCreatureSizeId: creatureSizes.medium.id,
			languages: {
				connect: [
					{ id: languages.common.id },
					{ id: languages.orcish.id },
				],
			},
			additionalProperties: {
				abilityScoreIncreases: ['+2 Str', '+1 Con'],
				alignment:
					'Orcs are typically chaotic evil, as they care only for their own needs and are willing to use any means to achieve their goals.',
				speed: '30 feet',
				traits: [
					"Darkvision: You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
					'Aggressive: As a bonus action, you can move up to your speed toward an enemy of your choice that you can see or hear. You must end this move closer to the enemy than you started.',
					'Powerful Build: You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.',
				],
			},
			namesId: raceNames.orc.id,
		}),
		owlin: await db.createRace({
			id: 'race-owlin',
			name: 'Owlin',
			description:
				'Owl-like humanoids known for their flight, stealth, and keen senses. Owlin are wise, stealthy, and have excellent night vision.',
			ageAdulthood: 18,
			ageLifespan: 80,
			heightRangeLow: 3.0,
			heightRangeHigh: 5.0,
			weightRangeLow: 35,
			weightRangeHigh: 85,
			alabastriaLore:
			'Owlin in Alabastria are found primarily in the forests of Kuriguer and the mountain regions of Bulsania, where their flight and stealth abilities make them excellent scouts and messengers. They often serve as aerial reconnaissance for the Huntbound Order.',
			playstyle:
			'Flying and stealthy characters who excel at reconnaissance and night operations. Perfect for players who want to be wise and mobile.',
			defaultCreatureSizeId: creatureSizes.small.id,
			languages: {
				connect: [
					{ id: languages.common.id },
					{ id: languages.owlin.id },
				],
			},
			additionalProperties: {
				abilityScoreIncreases: ['+2 Dex', '+1 Wis'],
				alignment:
					'Owlin are typically neutral good, as they value wisdom and helping others.',
				speed: '30 feet',
				traits: [
					"Darkvision: You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
					"Flight: You have a flying speed equal to your walking speed. You can't use this flying speed if you're wearing medium or heavy armor.",
					'Keen Senses: You have proficiency in the Perception skill.',
					'Silent Feathers: You have proficiency in the Stealth skill.',
				],
			},
			namesId: raceNames.owlin.id,
		}),
		plasmoid: await db.createRace({
			id: 'race-plasmoid',
			name: 'Plasmoid',
			description:
				'Amorphous humanoids made of living ooze, capable of changing their shape and squeezing through tight spaces. Plasmoids are adaptable and resilient.',
			ageAdulthood: 18,
			ageLifespan: 80,
			heightRangeLow: 5.0,
			heightRangeHigh: 6.0,
			weightRangeLow: 110,
			weightRangeHigh: 180,
			alabastriaLore:
			'Plasmoids in Alabastria are found in the swamps and underground regions of Kamalatman, where their amorphous nature makes them excellent infiltrators and scouts. They often serve as spies and information gatherers for the Huntbound Order.',
			playstyle:
			'Adaptable and resilient characters who excel at infiltration and survival. Perfect for players who want to be flexible and unique.',
			defaultCreatureSizeId: creatureSizes.medium.id,
			languages: {
				connect: [
					{ id: languages.common.id },
					{ id: languages.any_one.id },
				],
			},
			additionalProperties: {
				abilityScoreIncreases: ['+2 Con', '+1 Of Your Choice'],
				alignment:
					'Plasmoids can be of any alignment, as they are highly adaptable to their environment.',
				speed: '30 feet',
				traits: [
					'Amorphous: You can squeeze through a space as narrow as 1 inch wide without squeezing.',
					"Darkvision: You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
					'Hold Breath: You can hold your breath for 1 hour.',
					'Natural Reach: When you make a melee attack on your turn, your reach for it is 5 feet greater than normal.',
					"Shape Self: As a bonus action, you can reshape your body to give yourself a head, one or two arms, one or two legs, and makeshift hands and feet, or you can revert to a limbless blob. While you have a humanlike shape, you can wear clothing and armor made for a Humanoid of your size. As a bonus action, you can extrude a pseudopod that is up to 6 inches wide and 10 feet long, or reabsorb it into your body. You can use this pseudopod to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial. You can't attack with the pseudopod or use it to carry more than 10 pounds.",
				],
			},
			namesId: raceNames.plasmoid.id,
		}),
		reborn: await db.createRace({
			id: 'race-reborn',
			name: 'Reborn',
			description:
				'Humanoids who have died and returned to life, bearing the marks of their death and possessing unique abilities. Reborn are often outcasts but have unique perspectives on life and death.',
			ageAdulthood: 18,
			ageLifespan: 80,
			heightRangeLow: 5.0,
			heightRangeHigh: 6.0,
			weightRangeLow: 110,
			weightRangeHigh: 180,
			alabastriaLore:
			'Reborn in Alabastria are found throughout all continents, often serving as advisors and guides due to their unique perspective on life and death. They often work with the Huntbound Order as spiritual advisors and those who understand the nature of mortality.',
			playstyle:
			'Unique characters with death-defying abilities and unique perspectives. Perfect for players who want to be mysterious and otherworldly.',
			defaultCreatureSizeId: creatureSizes.medium.id,
			languages: {
				connect: [
					{ id: languages.common.id },
					{ id: languages.any_one.id },
				],
			},
			additionalProperties: {
				abilityScoreIncreases: ['+1 Of Your Choice'],
				alignment:
					'Reborn can be of any alignment, as their death and rebirth often changes their perspective on life.',
				speed: '30 feet',
				traits: [
					'Ancestral Legacy: You gain the benefits of your choice of one of the following options: (a) Darkvision with a range of 60 feet, (b) Proficiency in two skills of your choice, or (c) Proficiency with one tool of your choice.',
					"Deathless Nature: You don't need to eat, drink, or breathe. You don't need to sleep, and magic can't put you to sleep. You can finish a long rest in 4 hours if you spend those hours in an inactive, motionless state, during which you remain semiconscious.",
					'Knowledge from a Past Life: When you make an ability check that uses a skill, you can roll a d6 and add the number rolled to the check. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.',
					"Soul's Gift: You have resistance to necrotic damage and radiant damage.",
				],
			},
			namesId: raceNames.reborn.id,
		}),
		satyr: await db.createRace({
			id: 'race-satyr',
			name: 'Satyr',
			description:
				'Fey humanoids with goat-like features known for their revelry, music, and connection to nature. Satyrs are joyful, musical, and have a strong connection to the Feywild.',
			ageAdulthood: 18,
			ageLifespan: 200,
			heightRangeLow: 5.0,
			heightRangeHigh: 6.0,
			weightRangeLow: 110,
			weightRangeHigh: 180,
			alabastriaLore:
			'Satyrs in Alabastria are found primarily in the magical forests of Kuriguer, where their fey nature and musical abilities make them excellent entertainers and guides. They often serve as bards and entertainers for the Huntbound Order.',
			playstyle:
			'Joyful and musical characters who excel at entertainment and social interaction. Perfect for players who want to be charismatic and fun-loving.',
			defaultCreatureSizeId: creatureSizes.medium.id,
			languages: {
				connect: [
					{ id: languages.common.id },
					{ id: languages.sylvan.id },
				],
			},
			additionalProperties: {
				abilityScoreIncreases: ['+2 Dex', '+1 Cha'],
				alignment:
					'Satyrs are typically chaotic good, as they value freedom and joy.',
				speed: '35 feet',
				traits: [
					'Fey: Your creature type is fey, rather than humanoid.',
					'Ram: You can use your head and horns to make unarmed strikes. If you hit with them, you deal bludgeoning damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.',
					'Magic Resistance: You have advantage on saving throws against spells and other magical effects.',
					'Mirthful Leaps: Whenever you make a long or high jump, you can roll a d8 and add the number rolled to the number of feet you cover, even when making a standing jump. This extra distance costs movement as normal.',
					'Reveler: You have proficiency in the Performance and Persuasion skills, and you have proficiency with one musical instrument of your choice.',
				],
			},
			namesId: raceNames.satyr.id,
		}),
		shifter: await db.createRace({
			id: 'race-shifter',
			name: 'Shifter',
			description:
				'Humanoids with the ability to partially transform into their animal totems. Shifters are connected to nature and have enhanced senses and abilities.',
			ageAdulthood: 18,
			ageLifespan: 80,
			heightRangeLow: 5.0,
			heightRangeHigh: 6.0,
			weightRangeLow: 110,
			weightRangeHigh: 180,
			alabastriaLore:
			'Shifters in Alabastria are found throughout all continents, often serving as scouts and rangers due to their animal-like abilities. They often work with the Huntbound Order as trackers and wilderness guides.',
			playstyle:
			'Nature-connected characters with animal-like abilities and enhanced senses. Perfect for players who want to be wild and instinctive.',
			defaultCreatureSizeId: creatureSizes.medium.id,
			languages: {
				connect: [
					{ id: languages.common.id },
					{ id: languages.any_one.id },
				],
			},
			additionalProperties: {
				abilityScoreIncreases: ['+2 Dex', '+1 Of Your Choice'],
				alignment:
					'Shifters are typically neutral, as they are driven by their animal instincts and personal desires.',
				speed: '30 feet',
				traits: [
					"Darkvision: You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
					"Shifting: As a bonus action, you can assume a more bestial appearance. This transformation lasts for 1 minute, until you die, or until you revert to your normal appearance as a bonus action. When you shift, you gain temporary hit points equal to your level + your Constitution modifier (minimum of 1). You also gain additional benefits that depend on your shifter type, as detailed below. Once you shift, you can't do so again until you finish a short or long rest.",
				],
			},
			namesId: raceNames.shifter.id,
		}),
		simic_hybrid: await db.createRace({
			id: 'race-simic-hybrid',
			name: 'Simic Hybrid',
			description:
				'Humanoids who have been enhanced with animal traits through magical experimentation. Simic Hybrids are unique individuals with both human and animal characteristics.',
			ageAdulthood: 18,
			ageLifespan: 80,
			heightRangeLow: 5.0,
			heightRangeHigh: 6.0,
			weightRangeLow: 110,
			weightRangeHigh: 180,
			alabastriaLore:
			'Simic Hybrids in Alabastria are found primarily in the magical academies of Kuriguer, where their unique enhancements make them valuable for research and experimentation. They often serve as test subjects and researchers for the Huntbound Order.',
			playstyle:
			'Enhanced characters with unique animal traits and abilities. Perfect for players who want to be unique and experimental.',
			defaultCreatureSizeId: creatureSizes.medium.id,
			languages: {
				connect: [
					{ id: languages.common.id },
					{ id: languages.any_one.id },
				],
			},
			additionalProperties: {
				alignment:
					"Simic Hybrids can be of any alignment, as their enhancements don't determine their moral outlook.",
				abilityScoreIncreases: ['+2 Con', '+1 Of Your Choice'],
				speed: '30 feet',
				traits: [
					'Animal Enhancement: You gain one of the following enhancements of your choice: (a) Manta Glide: You have a flying speed equal to your walking speed, but you must end your turn on solid ground or fall. (b) Nimble Climber: You have a climbing speed equal to your walking speed. (c) Underwater Adaptation: You can breathe air and water, and you have a swimming speed equal to your walking speed.',
					"Darkvision: You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
				],
			},
			namesId: raceNames.simic_hybrid.id,
		}),
		tabaxi: await db.createRace({
			id: 'race-tabaxi',
			name: 'Tabaxi',
			description:
				'Cat-like humanoids known for their agility, curiosity, and love of shiny objects. Tabaxi are graceful, stealthy, and have excellent reflexes.',
			ageAdulthood: 18,
			ageLifespan: 80,
			heightRangeLow: 5.0,
			heightRangeHigh: 6.0,
			weightRangeLow: 110,
			weightRangeHigh: 180,
			alabastriaLore:
			'Tabaxi in Alabastria are found throughout all continents, often serving as scouts and messengers due to their agility and curiosity. They often work with the Huntbound Order as trackers and information gatherers.',
			playstyle:
			'Agile and curious characters who excel at stealth and exploration. Perfect for players who want to be graceful and inquisitive.',
			defaultCreatureSizeId: creatureSizes.medium.id,
			languages: {
				connect: [
					{ id: languages.common.id },
					{ id: languages.tabaxi.id },
				],
			},
			additionalProperties: {
				abilityScoreIncreases: ['+2 Dex', '+1 Cha'],
				alignment:
					'Tabaxi are typically chaotic good, as they value freedom and helping others.',
				speed: '30 feet',
				traits: [
					"Darkvision: You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
					"Feline Agility: Your reflexes and agility allow you to move with a burst of speed. When you move on your turn in combat, you can double your speed until the end of the turn. Once you use this trait, you can't use it again until you move 0 feet on one of your turns.",
					"Cat's Claws: Because of your claws, you have a climbing speed of 20 feet. In addition, your claws are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.",
					"Cat's Talent: You have proficiency in the Perception and Stealth skills.",
				],
			},
			namesId: raceNames.tabaxi.id,
		}),
		thri_kreen: await db.createRace({
			id: 'race-thri-kreen',
			name: 'Thri-kreen',
			description:
				'Insectoid humanoids with four arms and a chitinous exoskeleton. Thri-kreen are fast, agile, and have unique physical abilities.',
			ageAdulthood: 18,
			ageLifespan: 80,
			heightRangeLow: 5.0,
			heightRangeHigh: 6.0,
			weightRangeLow: 110,
			weightRangeHigh: 180,
			alabastriaLore:
			'Thri-kreen in Alabastria are found primarily in the desert regions of Kamalatman and the mountain regions of Bulsania, where their unique abilities make them excellent scouts and warriors. They often serve as elite operatives for the Huntbound Order.',
			playstyle:
			'Unique insectoid characters with multiple arms and special abilities. Perfect for players who want to be alien and efficient.',
			defaultCreatureSizeId: creatureSizes.medium.id,
			languages: {
				connect: [
					{ id: languages.common.id },
					{ id: languages.thri_kreen.id },
				],
			},
			additionalProperties: {
				abilityScoreIncreases: ['+2 Dex', '+1 Wis'],
				alignment:
					'Thri-kreen are typically lawful neutral, as they value order and efficiency.',
				speed: '30 feet',
				traits: [
					'Chameleon Carapace: As a bonus action, you can change the color of your carapace to match the color and texture of your surroundings, giving you advantage on Dexterity (Stealth) checks made to hide.',
					"Darkvision: You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
					'Extra Arms: You have two extra arms below your main pair of arms. The extra arms can manipulate an object, open or close a door or container, pick up or set down a Tiny object, or wield a weapon that has the light property.',
					"Sleepless: You don't need to sleep, and magic can't put you to sleep. You can finish a long rest in 4 hours if you spend those hours in a trancelike meditation, during which you remain semiconscious.",
					'Thri-kreen Weapon Training: You are proficient with the gythka and the chatkcha.',
				],
			},
			namesId: raceNames.thri_kreen.id,
		}),
		tiefling: await db.createRace({
			id: 'race-tiefling',
			name: 'Tiefling',
			description:
				'Humanoids with infernal heritage, bearing the mark of their fiendish ancestors. Tieflings are often outcasts but possess unique magical abilities.',
			ageAdulthood: 18,
			ageLifespan: 120,
			heightRangeLow: 5.0,
			heightRangeHigh: 6.0,
			weightRangeLow: 110,
			weightRangeHigh: 180,
			alabastriaLore:
			'Tieflings in Alabastria are found throughout all continents, often serving as advisors and spellcasters due to their infernal heritage and magical abilities. They often work with the Huntbound Order as magical specialists and those who understand the nature of fiends.',
			playstyle:
			'Magical characters with infernal heritage and unique abilities. Perfect for players who want to be mysterious and magical.',
			defaultCreatureSizeId: creatureSizes.medium.id,
			languages: {
				connect: [
					{ id: languages.common.id },
					{ id: languages.infernal.id },
				],
			},
			additionalProperties: {
				abilityScoreIncreases: ['+2 Cha', '+1 Int'],
				alignment:
					'Tieflings are typically chaotic neutral, as they are driven by their own desires and instincts.',
				speed: '30 feet',
				traits: [
					"Darkvision: You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
					'Hellish Resistance: You have resistance to fire damage.',
					'Infernal Legacy: You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the hellish rebuke spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.',
				],
			},
			namesId: raceNames.tiefling.id,
		}),
		tortle: await db.createRace({
			id: 'race-tortle',
			name: 'Tortle',
			description:
				'Turtle-like humanoids known for their natural armor and connection to water. Tortles are wise, patient, and have excellent defensive abilities.',
			ageAdulthood: 15,
			ageLifespan: 50,
			heightRangeLow: 5.0,
			heightRangeHigh: 6.0,
			weightRangeLow: 200,
			weightRangeHigh: 280,
			alabastriaLore:
			'Tortles in Alabastria are found primarily in the coastal regions of Kuriguer and the waterways of Kamalatman, where their natural abilities make them excellent swimmers and protectors. They often serve as guardians and healers for the Huntbound Order.',
			playstyle:
			'Defensive and wise characters who excel at protection and healing. Perfect for players who want to be patient and protective.',
			defaultCreatureSizeId: creatureSizes.medium.id,
			languages: {
				connect: [
					{ id: languages.common.id },
					{ id: languages.aquan.id },
				],
			},
			additionalProperties: {
				abilityScoreIncreases: ['+2 Str', '+1 Wis'],
				alignment:
					'Tortles are typically lawful good, as they value order, justice, and protecting others.',
				speed: '30 feet',
				traits: [
					'Claws: Your claws are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.',
					'Hold Breath: You can hold your breath for up to 1 hour.',
					"Natural Armor: Due to your shell, you have a +2 bonus to AC while you aren't wearing armor.",
					"Shell Defense: You can withdraw into your shell as an action. Until you emerge, you gain a +4 bonus to AC, and you have advantage on Strength and Constitution saving throws. While in your shell, you are prone, your speed is 0 and can't increase, you have disadvantage on Dexterity saving throws, you can't take reactions, and the only action you can take is a bonus action to emerge from your shell.",
					'Survival Instinct: You gain proficiency in the Survival skill. Your shell gives you advantage on all checks made to stabilize a dying creature and on all checks made to provide first aid.',
				],
			},
			namesId: raceNames.tortle.id,
		}),
		triton: await db.createRace({
			id: 'race-triton',
			name: 'Triton',
			description:
				'Aquatic humanoids with a strong connection to the sea and water magic. Tritons are noble, proud, and have excellent swimming abilities.',
			ageAdulthood: 15,
			ageLifespan: 200,
			heightRangeLow: 5.0,
			heightRangeHigh: 6.0,
			weightRangeLow: 110,
			weightRangeHigh: 180,
			alabastriaLore:
			'Tritons in Alabastria are found primarily in the coastal regions of Kuriguer and the waterways of Kamalatman, where their aquatic abilities make them excellent sailors and water guardians. They often serve as maritime specialists for the Huntbound Order.',
			playstyle:
			'Aquatic characters with water magic and swimming abilities. Perfect for players who want to be noble and water-focused.',
			defaultCreatureSizeId: creatureSizes.medium.id,
			languages: {
				connect: [
					{ id: languages.common.id },
					{ id: languages.primordial.id },
				],
			},
			additionalProperties: {
				abilityScoreIncreases: ['+1 Str', '+1 Con', '+1 Cha'],
				alignment:
					'Tritons are typically lawful good, as they value order, justice, and protecting others.',
				speed: '30 feet',
				traits: [
					'Amphibious: You can breathe air and water.',
					"Control Air and Water: You can cast fog cloud with this trait. Starting at 3rd level, you can cast gust of wind with it, and starting at 5th level, you can also cast wall of water with it. Once you cast a spell with this trait, you can't do so again until you finish a long rest. Charisma is your spellcasting ability for these spells.",
					'Emissary of the Sea: Aquatic beasts have an extraordinary affinity with your people. You can communicate simple ideas to any beast that can breathe water. They can understand the meaning of your words, though you have no special ability to understand them in return.',
					'Guardians of the Depths: Adapted to even the most extreme ocean depths, you have resistance to cold damage, and you ignore any of the drawbacks caused by a deep, underwater environment.',
					'Swimming Speed: You have a swimming speed of 30 feet.',
				],
			},
			namesId: raceNames.triton.id,
		}),
		vedalken: await db.createRace({
			id: 'race-vedalken',
			name: 'Vedalken',
			description:
				'Blue-skinned humanoids known for their intelligence, precision, and connection to knowledge. Vedalken are analytical, methodical, and have excellent problem-solving abilities.',
			ageAdulthood: 18,
			ageLifespan: 80,
			heightRangeLow: 5.0,
			heightRangeHigh: 6.0,
			weightRangeLow: 110,
			weightRangeHigh: 180,
			alabastriaLore:
			'Vedalken in Alabastria are found primarily in the magical academies of Kuriguer and the research facilities of Kamalatman, where their analytical abilities make them excellent scholars and researchers. They often serve as advisors and researchers for the Huntbound Order.',
			playstyle:
			'Intelligent and analytical characters who excel at problem-solving and research. Perfect for players who want to be methodical and precise.',
			defaultCreatureSizeId: creatureSizes.medium.id,
			languages: {
				connect: [
					{ id: languages.common.id },
					{ id: languages.vedalken.id },
				],
			},
			additionalProperties: {
				abilityScoreIncreases: ['+2 Int', '+1 Wis'],
				alignment:
					'Vedalken are typically lawful neutral, as they value order, logic, and efficiency.',
				speed: '30 feet',
				traits: [
					"Darkvision: You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
					'Vedalken Dispassion: You have advantage on all Intelligence, Wisdom, and Charisma saving throws.',
					'Partially Amphibious: You can breathe air and water, but you need to be submerged at least once every 4 hours to avoid suffocating.',
					'Tireless Precision: You are proficient with one of the following skills of your choice: Arcana, History, Investigation, Medicine, Performance, or Sleight of Hand. You are also proficient with one tool of your choice. When you make an ability check with the chosen skill or tool, you can roll a d4 and add the number rolled to the check.',
				],
			},
			namesId: raceNames.vedalken.id,
		}),
		warforged: await db.createRace({
			id: 'race-warforged',
			name: 'Warforged',
			description:
				'Constructed humanoids created for war but now seeking their own purpose. Warforged are durable, adaptable, and have unique mechanical abilities.',
			ageAdulthood: 0,
			ageLifespan: 0,
			heightRangeLow: 5.0,
			heightRangeHigh: 6.0,
			weightRangeLow: 110,
			weightRangeHigh: 180,
			alabastriaLore:
			'Warforged in Alabastria are found throughout all continents, often serving as guards and warriors due to their constructed nature and durability. They often work with the Huntbound Order as elite operatives and those who understand the nature of constructs.',
			playstyle:
			'Constructed characters with unique mechanical abilities and durability. Perfect for players who want to be artificial and adaptable.',
			defaultCreatureSizeId: creatureSizes.medium.id,
			languages: {
				connect: [
					{ id: languages.common.id },
					{ id: languages.any_one.id },
				],
			},
			additionalProperties: {
				abilityScoreIncreases: ['+2 Con', '+1 Of Your Choice'],
				alignment:
					'Warforged can be of any alignment, as they are driven by their own choices and experiences.',
				speed: '30 feet',
				traits: [
					"Constructed Resilience: You were created to have remarkable fortitude, represented by the following benefits: You have advantage on saving throws against being poisoned, and you have resistance to poison damage. You don't need to eat, drink, or breathe. You are immune to disease. You don't need to sleep, and magic can't put you to sleep.",
					"Sentry's Rest: When you take a long rest, you must spend at least 6 hours in an inactive, motionless state, rather than sleeping. In this state, you appear inert, but it doesn't render you unconscious, and you can see and hear as normal.",
					"Integrated Protection: Your body has built-in defensive layers, which can be enhanced with armor: You gain a +1 bonus to Armor Class. You can don only armor with which you have proficiency. To don armor other than a shield, you must incorporate it into your body over the course of 1 hour, during which you must remain in contact with the armor. To doff armor, you must spend 1 hour removing it. You can rest while donning or doffing armor in this way. While you live, the armor incorporated into your body can't be removed against your will.",
					'Specialized Design: You gain one skill proficiency of your choice, one tool proficiency of your choice, and fluency in one language of your choice.',
				],
			},
			namesId: raceNames.warforged.id,
		}),
		yuan_ti: await db.createRace({
			id: 'race-yuan-ti',
			name: 'Yuan-ti',
			description:
				'Snake-like humanoids with serpentine features and magical abilities. Yuan-ti are often outcasts but possess unique magical powers and resistance to magic.',
			ageAdulthood: 18,
			ageLifespan: 120,
			heightRangeLow: 5.0,
			heightRangeHigh: 6.0,
			weightRangeLow: 110,
			weightRangeHigh: 180,
			alabastriaLore:
			'Yuan-ti in Alabastria are found primarily in the swamps and underground regions of Kamalatman, where their serpentine nature makes them excellent infiltrators and spellcasters. They often serve as spies and magical specialists for the Huntbound Order.',
			playstyle:
			'Magical characters with serpentine heritage and unique abilities. Perfect for players who want to be mysterious and magical.',
			defaultCreatureSizeId: creatureSizes.medium.id,
			languages: {
				connect: [
					{ id: languages.common.id },
					{ id: languages.abyssal.id },
					{ id: languages.draconic.id },
				],
			},
			additionalProperties: {
				alignment:
					'Yuan-ti are typically chaotic evil, as they care only for their own needs and are willing to use any means to achieve their goals.',
				abilityScoreIncreases: ['+2 Cha', '+1 Int'],
				speed: '30 feet',
				traits: [
					"Darkvision: You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
					'Magic Resistance: You have advantage on saving throws against spells and other magical effects.',
					'Poison Immunity: You are immune to poison damage and the poisoned condition.',
					'Serpentine Magic: You know the poison spray cantrip. When you reach 3rd level, you can cast the suggestion spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the animal friendship spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.',
				],
			},
			namesId: raceNames.yuan_ti.id,
		}),
		gith: await db.createRace({
			id: 'race-gith',
			name: 'Gith',
			description:
				'Ancient warriors who freed themselves from mind flayer slavery through sheer will and martial prowess. The gith are a proud people divided into two distinct cultures, each following their own path to ensure they never fall into bondage again.',
			ageAdulthood: 18,
			ageLifespan: 100,
			heightRangeLow: 5.5,
			heightRangeHigh: 6.5,
			weightRangeLow: 120,
			weightRangeHigh: 180,
			alabastriaLore:
			'Gith are rare in Alabastria, as most reside in the Astral Plane or remote monasteries across the planes. Those who do appear are often planar travelers, seeking ancient knowledge or hunting mind flayers. Some serve as mercenaries or advisors to those who understand the value of their combat expertise and psionic abilities.',
			playstyle:
			'Warrior-philosophers with psionic powers and a martial heritage. Perfect for players who want disciplined combatants with a mysterious planar origin and innate mental abilities.',
			defaultCreatureSizeId: creatureSizes.medium.id,
			languages: {
				connect: [
					{ id: languages.common.id },
					{ id: languages.gith.id },
				],
			},
			additionalProperties: {
				abilityScoreIncreases: ['+1 Int'],
				alignment:
					'Gith alignment varies by culture. Githyanki tend toward lawful evil, while githzerai lean toward lawful neutral. Individual gith may be of any alignment.',
				speed: '30 feet',
				traits: [
					'Gith Psionics: You can cast the Mage Hand cantrip. When you reach 3rd level, you can cast the Jump spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the Misty Step spell once with this trait and regain the ability to do so when you finish a long rest. Intelligence is your spellcasting ability for these spells.',
					'Mental Discipline: You have advantage on saving throws against being charmed and frightened.',
					'Planar Knowledge: You have proficiency in the Arcana skill.',
				],
			},
			namesId: raceNames.gith.id,
		}),
	};
}
