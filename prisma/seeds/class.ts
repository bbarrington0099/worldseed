import { Prisma } from '@prismagen/client';
import * as db from '@lib/db-seed';
import { ClassRoles } from './index';

type ClassPayload = Prisma.ClassGetPayload<{}>;
export interface Classes {
	artificer: ClassPayload;
	barbarian: ClassPayload;
	bard: ClassPayload;
	cleric: ClassPayload;
	druid: ClassPayload;
	fighter: ClassPayload;
	monk: ClassPayload;
	paladin: ClassPayload;
	ranger: ClassPayload;
	rogue: ClassPayload;
	sorcerer: ClassPayload;
	warlock: ClassPayload;
	wizard: ClassPayload;
	tactician: ClassPayload;
}

interface SeedClassesParams {
	classRoles: ClassRoles;
}
export async function seedClasses(params: SeedClassesParams): Promise<Classes> {
	const { classRoles } = params;
	return {
		artificer: await db.createClass({
			id: 'class-artificer',
			name: 'Artificer',
			description:
				'Innovative crafters who blend magic and technology to create magical items and devices. Masters of invention who infuse mundane objects with arcane power.',
			roles: {
				connect: [
					{ id: classRoles.support.id },
					{ id: classRoles.utility.id },
				],
			},
			alabastriaLore:
				'In the volcanic forges of Alatman and the mountain workshops of Maltman, Artificers represent the pinnacle of magical engineering. These innovative creators bridge the gap between ancient magic and emerging technology, crafting wonders that aid adventurers and defend settlements across Kamalatman.',
			playstyle:
				'Versatile support character who excels at problem-solving through magical items and utility spells. Best for players who enjoy creative solutions and helping the party with magical gadgets.',
			additionalProperties: {
				primaryAbility: 'Int',
				hitDie: 'd8',
				savingThrows: ['Con', 'Int'],
				armorProficiency: ['Light Armor', 'Medium Armor', 'Shields'],
				weaponProficiency: [
					'Simple Weapons',
					'Firearms',
					'Light Crossbows',
					'Heavy Crossbows',
				],
				toolProficiency: [
					"Thieves' Tools",
					"Tinker's Tools",
					"Choose one Artisan's Tools",
				],
				keyFeatures: [
					'Level 1 Magical Tinkering: Create tiny magical objects that produce minor effects',
					'Level 2 Infuse Item: Imbue mundane items with magical properties',
					'Level 1 Spellcasting: Half-caster using tools as spellcasting focus',
					'Level 6 Tool Expertise: Double proficiency bonus with tool checks',
				],
			},
		}),
		barbarian: await db.createClass({
			id: 'class-barbarian',
			name: 'Barbarian',
			description:
				'Fierce warriors who harness primal fury and instinct to become devastating forces in battle. They draw strength from rage and their connection to the wild.',
			roles: {
				connect: [
					{ id: classRoles.tank.id },
					{ id: classRoles.damage_dealer.id },
				],
			},
			alabastriaLore:
				"From the frozen peaks of Bulsania to the swampy strongholds of Katman, Barbarians embody the untamed spirit of Alabastria's wildest places. These warriors reject civilization's constraints, drawing power from ancestral spirits, primal totems, and the raw fury of the natural world.",
			playstyle:
				'High-damage, high-durability front-line fighter. Best for players who want to charge into battle and deal massive damage while shrugging off enemy attacks.',
			additionalProperties: {
				primaryAbility: 'Str',
				hitDie: 'd12',
				savingThrows: ['Str', 'Con'],
				armorProficiency: ['Light Armor', 'Medium Armor', 'Shields'],
				weaponProficiency: ['Simple Weapons', 'Martial Weapons'],
				keyFeatures: [
					'Level 1 Rage: Enter a battle fury for damage bonus and damage resistance',
					'Level 1 Unarmored Defense: AC equals 10 + Dex modifier + Con modifier while unarmored',
					'Level 2 Reckless Attack: Gain advantage on attacks but enemies have advantage against you',
					'Level 5 Extra Attack: Make two attacks when you take the Attack action',
				],
			},
		}),
		bard: await db.createClass({
			id: 'class-bard',
			name: 'Bard',
			description:
				'Versatile performers who weave magic through music, stories, and performance. Masters of inspiration who support allies and control the battlefield through charm and wit.',
			roles: {
				connect: [
					{ id: classRoles.support.id },
					{ id: classRoles.utility.id },
				],
			},
			alabastriaLore:
				"In Skratonia's diverse city-states and Kuriguer's magical courts, Bards serve as diplomats, entertainers, and keepers of lore. Their songs preserve the history of The Bringing, weave magic through performance, and inspire heroes across all continents of Alabastria.",
			playstyle:
				'Ultimate support character with unmatched versatility. Best for players who enjoy helping others succeed and having options for every situation.',
			additionalProperties: {
				primaryAbility: 'Cha',
				hitDie: 'd8',
				savingThrows: ['Dex', 'Cha'],
				armorProficiency: ['Light Armor'],
				weaponProficiency: [
					'Simple Weapons',
					'Hand Crossbows',
					'Longswords',
					'Rapiers',
					'Shortswords',
				],
				toolProficiency: ['Choose three Musical Instruments'],
				keyFeatures: [
					'Level 1 Spellcasting: Full caster with access to spells from any class',
					'Level 1 Bardic Inspiration: Grant allies bonus dice to add to their rolls',
					'Level 2 Jack Of All Trades: Add half proficiency bonus to non-proficient ability checks',
					'Level 3 Expertise: Double proficiency bonus for chosen skills',
				],
			},
		}),
		cleric: await db.createClass({
			id: 'class-cleric',
			name: 'Cleric',
			description:
				'Divine agents who channel the power of their deities to heal, protect, and smite enemies. Servants of gods who wield holy magic to aid allies and punish the wicked.',
			roles: {
				connect: [
					{ id: classRoles.support.id },
					{ id: classRoles.healer.id },
				],
			},
			alabastriaLore:
				"Across Alabastria's diverse continents, Clerics serve as the primary connection between mortals and the divine. From Tempus-worshipping War Clerics like Tharos Raggenthraw to forge-priests in Maltman's workshops, these holy servants adapt their faith to serve their communities' needs.",
			playstyle:
				'Primary healer and support with strong defensive capabilities. Best for players who want to keep the party alive while contributing meaningful combat support.',
			additionalProperties: {
				primaryAbility: 'Wis',
				hitDie: 'd8',
				savingThrows: ['Wis', 'Cha'],
				armorProficiency: ['Light Armor', 'Medium Armor', 'Shields'],
				weaponProficiency: ['Simple Weapons'],
				keyFeatures: [
					'Level 1 Spellcasting: Full caster with access to entire cleric spell list',
					'Level 1 Divine Domain: Choose a domain that grants additional spells and abilities',
					'Level 2 Channel Divinity: Channel divine energy for powerful effects',
					'Level 5 Destroy Undead: Automatically destroy low-CR undead with Channel Divinity',
				],
			},
		}),
		druid: await db.createClass({
			id: 'class-druid',
			name: 'Druid',
			description:
				'Guardians of nature who wield primal magic and can transform into animals. Protectors of the natural world who draw power from the land itself.',
			roles: {
				connect: [
					{ id: classRoles.blaster.id },
					{ id: classRoles.shapeshifter.id },
				],
			},
			alabastriaLore:
				"In Kuriguer's magical forests and Skratonia's fertile plains, Druids maintain the balance between civilization and wilderness. These primal spellcasters guard ancient groves, tend to wounded lands, and serve as bridges between the natural and civilized worlds.",
			playstyle:
				"Versatile nature-based caster with shapeshifting abilities. Best for players who want to embody nature's power and have unique utility options.",
			additionalProperties: {
				primaryAbility: 'Wis',
				hitDie: 'd8',
				savingThrows: ['Int', 'Wis'],
				armorProficiency: [
					'Light Armor',
					'Medium Armor',
					'Shields (Non-Metal Only)',
				],
				weaponProficiency: [
					'Clubs',
					'Daggers',
					'Darts',
					'Javelins',
					'Maces',
					'Quarterstaffs',
					'Scimitars',
					'Sickles',
					'Slings',
					'Spears',
				],
				toolProficiency: ['Herbalism Kit'],
				keyFeatures: [
					'Level 1 Druidcraft: Minor nature-based magical effects',
					'Level 1 Spellcasting: Full caster with nature and elemental spells',
					'Level 2 Wild Shape: Transform into beasts for combat and utility',
					'Level 2 Druid Circle: Choose a circle that defines your druidic focus',
				],
			},
		}),
		fighter: await db.createClass({
			id: 'class-fighter',
			name: 'Fighter',
			description:
				'Masters of martial combat skilled with a variety of weapons and tactics. Versatile warriors who excel in physical combat through training and technique.',
			roles: {
				connect: [
					{ id: classRoles.tank.id },
					{ id: classRoles.damage_dealer.id },
				],
			},
			alabastriaLore:
				"From Skratonia's diverse city militias to Bulsania's elite dragon-riders, Fighters represent the pinnacle of martial training. These versatile warriors adapt their techniques to serve as guards, soldiers, duelists, and champions across all of Alabastria's continents.",
			playstyle:
				'Reliable physical combatant with excellent survivability. Best for players who want consistent performance in combat with tactical options.',
			additionalProperties: {
				primaryAbility: ['Str', 'Dex'],
				hitDie: 'd10',
				savingThrows: ['Str', 'Con'],
				armorProficiency: [
					'Light Armor',
					'Medium Armor',
					'Heavy Armor',
					'Shields',
				],
				weaponProficiency: ['Simple Weapons', 'Martial Weapons'],
				keyFeatures: [
					'Level 1 Fighting Style: Choose a specialized combat technique',
					'Level 1 Second Wind: Recover hit points as a bonus action',
					'Level 2 Action Surge: Take an additional action on your turn',
					'Level 5 Extra Attack: Make multiple attacks when you take the Attack action',
				],
			},
		}),
		monk: await db.createClass({
			id: 'class-monk',
			name: 'Monk',
			description:
				'Disciplined martial artists who harness their inner energy (ki) for extraordinary abilities. Masters of unarmed combat who achieve supernatural feats through meditation and training.',
			roles: {
				connect: [
					{ id: classRoles.striker.id },
					{ id: classRoles.utility.id },
				],
			},
			alabastriaLore:
				"In hidden monasteries across Alabastria's mountains and secluded valleys, Monks pursue physical and spiritual perfection. These disciplined warriors combine ancient martial techniques with mystical ki manipulation, serving as guardians, seekers, and enlightened warriors.",
			playstyle:
				'Mobile striker with unique abilities and excellent utility. Best for players who want to be agile, versatile, and different from traditional warriors.',
			additionalProperties: {
				primaryAbility: ['Dex', 'Wis'],
				hitDie: 'd8',
				savingThrows: ['Str', 'Dex'],
				weaponProficiency: ['Simple Weapons', 'Shortswords'],
				toolProficiency: [
					"Choose one Artisan's Tools or one Musical Instrument",
				],
				keyFeatures: [
					'Level 1 Unarmored Defense: AC equals 10 + Dex modifier + Wis modifier while unarmored',
					'Level 1 Martial Arts: Enhanced unarmed strikes and bonus action attacks',
					'Level 2 Ki: Spend ki points for special techniques and abilities',
					'Level 2 Unarmored Movement: Increased speed while unarmored',
				],
			},
		}),
		paladin: await db.createClass({
			id: 'class-paladin',
			name: 'Paladin',
			description:
				'Holy warriors bound by sacred oaths to uphold justice and righteousness. Divine champions who combine martial prowess with holy magic to protect the innocent.',
			roles: {
				connect: [
					{ id: classRoles.tank.id },
					{ id: classRoles.support.id },
				],
			},
			alabastriaLore:
				"Across Alabastria's realms, Paladins stand as beacons of hope and justice. These oath-bound warriors serve various causes, from protecting ancient forests to conquering evil, their divine magic powered by unwavering conviction and righteous purpose.",
			playstyle:
				"Durable front-line fighter with healing and support abilities. Best for players who want to be the party's moral compass and protector.",
			additionalProperties: {
				primaryAbility: ['Str', 'Cha'],
				hitDie: 'd10',
				savingThrows: ['Wis', 'Cha'],
				armorProficiency: [
					'Light Armor',
					'Medium Armor',
					'Heavy Armor',
					'Shields',
				],
				weaponProficiency: ['Simple Weapons', 'Martial Weapons'],
				keyFeatures: [
					'Level 1 Divine Sense: Detect celestials, fiends, and undead',
					'Level 1 Lay On Hands: Heal others through touch',
					'Level 2 Divine Smite: Expend spell slots for extra radiant damage',
					"Level 3 Sacred Oath: Choose an oath that defines your paladin's mission",
				],
			},
		}),
		ranger: await db.createClass({
			id: 'class-ranger',
			name: 'Ranger',
			description:
				"Skilled hunters and trackers who thrive in the wilderness. Masters of survival who protect civilization's borders and guide others through dangerous lands.",
			roles: {
				connect: [
					{ id: classRoles.striker.id },
					{ id: classRoles.scout.id },
				],
			},
			alabastriaLore:
				"From Kuriguer's magical forests to Bulsania's frozen peaks, Rangers serve as guardians of the wild places. These skilled trackers and hunters protect travelers, hunt dangerous beasts, and maintain the balance between civilization and wilderness.",
			playstyle:
				'Versatile scout and ranged combatant with survival expertise. Best for players who want to excel in exploration and outdoor adventures.',
			additionalProperties: {
				primaryAbility: ['Dex', 'Wis'],
				hitDie: 'd10',
				savingThrows: ['Str', 'Dex'],
				armorProficiency: ['Light Armor', 'Medium Armor', 'Shields'],
				weaponProficiency: ['Simple Weapons', 'Martial Weapons'],
				keyFeatures: [
					'Level 1 Favored Enemy: Choose creature types to gain bonuses against',
					'Level 1 Natural Explorer: Choose favored terrain for exploration benefits',
					'Level 2 Spellcasting: Half-caster with nature and utility spells',
					"Level 3 Ranger Archetype: Choose a specialization that defines your ranger's focus",
				],
			},
		}),
		rogue: await db.createClass({
			id: 'class-rogue',
			name: 'Rogue',
			description:
				'Cunning and agile characters who excel in stealth, thievery, and precision strikes. Masters of skills and subterfuge who strike from the shadows.',
			roles: {
				connect: [
					{ id: classRoles.striker.id },
					{ id: classRoles.utility.id },
				],
			},
			alabastriaLore:
				"In Skratonia's bustling cities and Kuriguer's diverse ports, Rogues operate in the shadows of society. These skilled individuals serve as spies, thieves, investigators, and scouts, using cunning and agility to accomplish what others cannot through force.",
			playstyle:
				'High-damage striker with excellent utility and mobility. Best for players who enjoy stealth, problem-solving, and precise strikes.',
			additionalProperties: {
				primaryAbility: 'Dex',
				hitDie: 'd8',
				savingThrows: ['Dex', 'Int'],
				armorProficiency: ['Light Armor'],
				weaponProficiency: [
					'Simple Weapons',
					'Hand Crossbows',
					'Longswords',
					'Rapiers',
					'Shortswords',
				],
				toolProficiency: ["Thieves' Tools"],
				keyFeatures: [
					'Level 1 Expertise: Double proficiency bonus for chosen skills',
					'Level 1 Sneak Attack: Deal extra damage when you have advantage or an ally nearby',
					'Level 1 Thieves Cant: Secret language and signs used by rogues',
					'Level 2 Cunning Action: Dash, Disengage, or Hide as bonus actions',
				],
			},
		}),
		sorcerer: await db.createClass({
			id: 'class-sorcerer',
			name: 'Sorcerer',
			description:
				'Innate spellcasters whose magic comes from their bloodline or a mysterious source within. Raw magical power channeled through force of personality.',
			roles: {
				connect: [
					{ id: classRoles.damage_dealer.id },
					{ id: classRoles.controller.id },
				],
			},
			alabastriaLore:
				'Across Alabastria, Sorcerers represent the raw power of magic made manifest. From Dragonborn with draconic heritage in Bulsania to Tieflings channeling infernal chaos in Skratonia, these spellcasters wield power that flows from their very being.',
			playstyle:
				'Flexible spellcaster with powerful magical effects. Best for players who want to specialize in magic and customize their spells.',
			additionalProperties: {
				primaryAbility: 'Cha',
				hitDie: 'd6',
				savingThrows: ['Con', 'Cha'],
				weaponProficiency: [
					'Daggers',
					'Darts',
					'Slings',
					'Quarterstaffs',
					'Light Crossbows',
				],
				keyFeatures: [
					'Level 1 Spellcasting: Full caster with limited spells known but flexible casting',
					'Level 1 Sorcerous Origin: Source of your magic that grants additional abilities',
					'Level 2 Font Of Magic: Convert spell slots to sorcery points and vice versa',
					'Level 3 Metamagic: Modify spells with sorcery points for enhanced effects',
				],
			},
		}),
		warlock: await db.createClass({
			id: 'class-warlock',
			name: 'Warlock',
			description:
				'Spellcasters who derive their magic from pacts with powerful entities. Wielders of eldritch power gained through otherworldly bargains.',
			roles: {
				connect: [
					{ id: classRoles.damage_dealer.id },
					{ id: classRoles.utility.id },
				],
			},
			alabastriaLore:
				"In Alabastria's shadowed corners and desperate places, Warlocks forge pacts with beings beyond mortal understanding. From Tieflings embracing their fiendish heritage to Humans seeking forbidden power, these spellcasters trade pieces of their souls for eldritch might.",
			playstyle:
				"Customizable spellcaster with consistent power. Best for players who want unique abilities and don't mind role-playing otherworldly obligations.",
			additionalProperties: {
				primaryAbility: 'Cha',
				hitDie: 'd8',
				savingThrows: ['Wis', 'Cha'],
				armorProficiency: ['Light Armor'],
				weaponProficiency: ['Simple Weapons'],
				keyFeatures: [
					'Level 1 Otherworldly Patron: Choose a powerful entity that grants you magic',
					'Level 1 Pact Magic: Short rest spell slot recovery with limited but powerful slots',
					'Level 2 Eldritch Invocations: Customize your abilities with invocation choices',
					'Level 3 Pact Boon: Choose Blade, Chain, or Tome for additional abilities',
				],
			},
		}),
		wizard: await db.createClass({
			id: 'class-wizard',
			name: 'Wizard',
			description:
				'Scholarly spellcasters who master arcane magic through rigorous study and research. The ultimate magical generalists with access to the largest spell selection.',
			roles: {
				connect: [
					{ id: classRoles.controller.id },
					{ id: classRoles.utility.id },
				],
			},
			alabastriaLore:
				"In Kuriguer's magical academies and Skratonia's scholarly institutions, Wizards represent the pinnacle of magical learning. These dedicated researchers unlock the secrets of arcane power through study, experimentation, and careful documentation of magical phenomena.",
			playstyle:
				'Ultimate magical versatility with preparation-based casting. Best for players who enjoy strategic planning and having the right spell for every situation.',
			additionalProperties: {
				primaryAbility: 'Int',
				hitDie: 'd6',
				savingThrows: ['Int', 'Wis'],
				weaponProficiency: [
					'Daggers',
					'Darts',
					'Slings',
					'Quarterstaffs',
					'Light Crossbows',
				],
				keyFeatures: [
					'Level 1 Spellcasting: Full caster with spellbook containing all known spells',
					'Level 1 Arcane Recovery: Recover some spell slots during short rests',
					'Level 2 Arcane Tradition: Choose a school of magic specialization',
					'Level 18 Spell Mastery: Cast certain spells without using spell slots',
				],
			},
		}),
		tactician: await db.createClass({
			id: 'class-tactician',
			name: 'Tactician',
			description:
				'Masters of strategy and battlefield control who use intelligence and planning to outmaneuver enemies and coordinate allies. These brilliant commanders excel at analyzing situations and turning the tide of battle through superior tactics.',
			roles: {
				connect: [
					{ id: classRoles.support.id },
					{ id: classRoles.controller.id },
				],
			},
			alabastriaLore:
				"In the complex political landscape of Alabastria, Tacticians serve as military advisors, guild strategists, and battlefield commanders. Their analytical minds and strategic thinking make them invaluable in the Huntbound Order's most dangerous missions, where proper planning can mean the difference between victory and disaster.",
			playstyle:
				'Support character who excels at battlefield control and enhancing allies through strategic planning. Best for players who enjoy tactical thinking and coordinating team efforts.',
			additionalProperties: {
				primaryAbility: 'Int',
				hitDie: 'd8',
				savingThrows: ['Int', 'Wis'],
				armorProficiency: ['Light Armor', 'Medium Armor', 'Shields'],
				weaponProficiency: [
					'Simple Weapons',
					'Hand Crossbows',
					'Longswords',
					'Rapiers',
					'Shortswords',
				],
				toolProficiency: [
					'Choose one Gaming Set',
					'Choose one Musical Instrument',
				],
				keyFeatures: [
					"Level 1 Perfect Plan: Gain Perfect Plan dice that can be used to enhance your own or allies' rolls",
					'Level 1 Intelligent Defense: Use Intelligence modifier instead of Dexterity for AC calculation',
					'Level 2 Analyze: As a bonus action, analyze a creature within 60 feet of you for tactical advantages',
					'Level 3 Strategic Focus: Choose a strategic focus that grants additional features and maneuvers',
					'Level 5 Tactical Command: Grant allies additional actions or movement through strategic commands',
					'Level 7 Battlefield Control: Manipulate the battlefield to your advantage through superior positioning',
				],
			},
		}),
	};
}
