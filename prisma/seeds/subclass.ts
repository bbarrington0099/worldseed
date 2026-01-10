import { Prisma } from '@prismagen/client';
import * as db from '@lib/db-seed';
import { Classes /* , ClassFeatures */ } from './index';

type SubclassPayload = Prisma.SubclassGetPayload<{}>;
export interface Subclasses {
	artificer_alchemist: SubclassPayload;
	artificer_armorer: SubclassPayload;
	artificer_artillerist: SubclassPayload;
	artificer_battle_smith: SubclassPayload;
	barbarian_path_of_the_ancestral_guardian: SubclassPayload;
	barbarian_path_of_the_beast: SubclassPayload;
	barbarian_path_of_the_berserker: SubclassPayload;
	barbarian_path_of_the_storm_herald: SubclassPayload;
	barbarian_path_of_the_totem_warrior: SubclassPayload;
	barbarian_path_of_wild_magic: SubclassPayload;
	barbarian_path_of_the_zealot: SubclassPayload;
	barbarian_path_of_the_battlerager: SubclassPayload;
	barbarian_path_of_the_giant: SubclassPayload;
	bard_college_of_creation: SubclassPayload;
	bard_college_of_eloquence: SubclassPayload;
	bard_college_of_glamour: SubclassPayload;
	bard_college_of_lore: SubclassPayload;
	bard_college_of_spirits: SubclassPayload;
	bard_college_of_swords: SubclassPayload;
	bard_college_of_valor: SubclassPayload;
	bard_college_of_whispers: SubclassPayload;
	cleric_forge_domain: SubclassPayload;
	cleric_life_domain: SubclassPayload;
	cleric_war_domain: SubclassPayload;
	cleric_tempest_domain: SubclassPayload;
	cleric_light_domain: SubclassPayload;
	cleric_nature_domain: SubclassPayload;
	cleric_trickery_domain: SubclassPayload;
	cleric_arcana_domain: SubclassPayload;
	cleric_death_domain: SubclassPayload;
	cleric_grave_domain: SubclassPayload;
	cleric_knowledge_domain: SubclassPayload;
	cleric_order_domain: SubclassPayload;
	cleric_peace_domain: SubclassPayload;
	cleric_twilight_domain: SubclassPayload;
	druid_circle_of_the_land: SubclassPayload;
	druid_circle_of_the_moon: SubclassPayload;
	druid_circle_of_wildfire: SubclassPayload;
	druid_circle_of_dreams: SubclassPayload;
	druid_circle_of_the_shepherd: SubclassPayload;
	druid_circle_of_spores: SubclassPayload;
	druid_circle_of_stars: SubclassPayload;
	fighter_champion: SubclassPayload;
	fighter_battle_master: SubclassPayload;
	fighter_eldritch_knight: SubclassPayload;
	fighter_arcane_archer: SubclassPayload;
	fighter_cavalier: SubclassPayload;
	fighter_echo_knight: SubclassPayload;
	fighter_psi_warrior: SubclassPayload;
	fighter_rune_knight: SubclassPayload;
	fighter_samurai: SubclassPayload;
	monk_way_of_the_open_hand: SubclassPayload;
	monk_way_of_shadow: SubclassPayload;
	monk_way_of_the_four_elements: SubclassPayload;
	monk_way_of_the_astral_self: SubclassPayload;
	monk_way_of_the_ascendant_dragon: SubclassPayload;
	monk_way_of_the_drunken_master: SubclassPayload;
	monk_way_of_the_kensei: SubclassPayload;
	monk_way_of_the_long_death: SubclassPayload;
	monk_way_of_mercy: SubclassPayload;
	monk_way_of_the_sun_soul: SubclassPayload;
	paladin_oath_of_devotion: SubclassPayload;
	paladin_oath_of_the_ancients: SubclassPayload;
	paladin_oath_of_vengeance: SubclassPayload;
	paladin_oath_of_the_crown: SubclassPayload;
	paladin_oath_of_conquest: SubclassPayload;
	paladin_oath_of_glory: SubclassPayload;
	paladin_oath_of_redemption: SubclassPayload;
	paladin_oath_of_the_watchers: SubclassPayload;
	ranger_hunter: SubclassPayload;
	ranger_beast_master: SubclassPayload;
	ranger_gloom_stalker: SubclassPayload;
	ranger_drakewarden: SubclassPayload;
	ranger_fey_wanderer: SubclassPayload;
	ranger_horizon_walker: SubclassPayload;
	ranger_monster_slayer: SubclassPayload;
	ranger_swarmkeeper: SubclassPayload;
	rogue_thief: SubclassPayload;
	rogue_assassin: SubclassPayload;
	rogue_arcane_trickster: SubclassPayload;
	rogue_inquisitive: SubclassPayload;
	rogue_mastermind: SubclassPayload;
	rogue_phantom: SubclassPayload;
	rogue_scout: SubclassPayload;
	rogue_soulknife: SubclassPayload;
	rogue_swashbuckler: SubclassPayload;
	sorcerer_draconic_bloodline: SubclassPayload;
	sorcerer_wild_magic: SubclassPayload;
	sorcerer_divine_soul: SubclassPayload;
	sorcerer_aberrant_mind: SubclassPayload;
	sorcerer_clockwork_soul: SubclassPayload;
	sorcerer_lunar_sorcery: SubclassPayload;
	sorcerer_shadow_magic: SubclassPayload;
	sorcerer_storm_sorcery: SubclassPayload;
	warlock_the_fiend: SubclassPayload;
	warlock_the_archfey: SubclassPayload;
	warlock_the_great_old_one: SubclassPayload;
	warlock_the_celestial: SubclassPayload;
	warlock_the_fathomless: SubclassPayload;
	warlock_the_genie: SubclassPayload;
	warlock_the_hexblade: SubclassPayload;
	warlock_the_undead: SubclassPayload;
	warlock_the_undying: SubclassPayload;
	wizard_school_of_evocation: SubclassPayload;
	wizard_school_of_illusion: SubclassPayload;
	wizard_school_of_divination: SubclassPayload;
	wizard_school_of_abjuration: SubclassPayload;
	wizard_school_of_bladesinging: SubclassPayload;
	wizard_school_of_chronurgy: SubclassPayload;
	wizard_school_of_conjuration: SubclassPayload;
	wizard_school_of_enchantment: SubclassPayload;
	wizard_school_of_graviturgy: SubclassPayload;
	wizard_school_of_necromancy: SubclassPayload;
	wizard_order_of_scribes: SubclassPayload;
	wizard_school_of_transmutation: SubclassPayload;
	wizard_war_magic: SubclassPayload;
	tactician_grandmaster: SubclassPayload;
	tactician_mentalist: SubclassPayload;
	tactician_scholar: SubclassPayload;
	tactician_war_mind: SubclassPayload;
}

interface SeedSubclassesParams {
	classes: Classes;
}
export async function seedSubclasses(
	params: SeedSubclassesParams
): Promise<Subclasses> {
	const { classes } = params;
	return {
		artificer_alchemist: await db.createSubclass({
			id: 'subclass-artificer-alchemist',
			name: 'Alchemist',
			description:
				'Masters of magical chemistry who brew potions and elixirs to heal allies and harm enemies.',
                playstyle:
				"Support-focused healer and utility caster. Perfect for players who want to be the party's medic while contributing unique magical solutions.",
                classId: classes.artificer.id,
                additionalProperties: {
                alabastriaContext:
                    'Since The Bringing, alchemists have been essential for survival, creating healing draughts when traditional medicine failed. During the 300-600 cycle expansion, their skills became crucial for trade caravans and military campaigns. The magical academies that arose in Kuriguer during the Magic Surge period particularly benefit from alchemical research, though these practitioners can be found wherever innovation meets necessity.',
				keyFeatures: [
					'Level 3 Experimental Elixir: Create random beneficial potions each day',
					'Level 3 Healing Word: Always prepared spell for emergency healing',
					'Level 5 Alchemical Savant: Add INT modifier to spell damage and healing',
				],
			},
		}),
		artificer_armorer: await db.createSubclass({
			id: 'subclass-artificer-armorer',
			name: 'Armorer',
			description:
				'Creators of magical armor who turn their own body into a walking fortress or stealth suit.',
                playstyle:
				'Tanky front-line fighter or stealthy infiltrator. Great for players who want to be heavily armored but still have magical utility.',
                classId: classes.artificer.id,
                additionalProperties: {
                alabastriaContext:
                    'The need for protective equipment became critical during the First Continental War (100-300 cycles), when traditional armor proved insufficient against magical threats. Armorers developed their craft through necessity, creating adaptive suits that could protect against both blade and spell. The volcanic regions of Alatman offer ideal conditions for such work, though these artisans serve wherever warriors face danger.',
				keyFeatures: [
					'Level 3 Arcane Armor: Transform armor into magical suit with special properties',
					'Level 3 Armor Model: Choose between Guardian (tank) or Infiltrator (stealth) modes',
					'Level 5 Extra Attack: Make two attacks when you take the Attack action',
				],
			},
		}),
		artificer_artillerist: await db.createSubclass({
			id: 'subclass-artificer-artillerist',
			name: 'Artillerist',
			description:
				'Experts in explosive magic and ranged combat who create magical turrets and enhance projectiles.',
                playstyle:
				'Ranged damage dealer with battlefield control. Ideal for players who enjoy tactical positioning and dealing consistent damage from afar.',
                classId: classes.artificer.id,
                additionalProperties: {
                alabastriaContext:
                    'The Wyvern Wars (300-600 cycles) demonstrated the need for ranged magical weapons that could strike flying threats. Artillerists developed their craft during this era of unprecedented cooperation, creating weapons that combined mechanical precision with arcane power. Their innovations proved invaluable for defending settlements, particularly in regions like Bulsania where fortresses require long-range defensive capabilities.',
				keyFeatures: [
					'Level 3 Eldritch Cannons: Create magical turrets for offense, defense, or support',
					'Level 5 Arcane Firearm: Enhanced damage with artificer spells using wands or rods',
					'Level 9 Explosive Cannon: Sacrifice cannons for explosive damage',
				],
			},
		}),
		artificer_battle_smith: await db.createSubclass({
			id: 'subclass-artificer-battle-smith',
			name: 'Battle Smith',
			description:
				'Warrior-inventors who combine martial prowess with magical constructs, accompanied by a steel defender.',
                playstyle:
				'Versatile warrior with a loyal companion. Perfect for players who want to fight in melee while having a pet and magical utility.',
                classId: classes.artificer.id,
                additionalProperties: {
                alabastriaContext:
                    "The concept of construct companions emerged during the early settlements when resources were scarce and every defender mattered. Battle Smiths perfected their craft during the Kingdom Formation period, creating loyal steel defenders to supplement military forces. Their techniques have spread across continents, finding particular use in Skratonia's city defenses where automated guardians can patrol vast urban areas.",
				keyFeatures: [
					'Level 3 Steel Defender: Mechanical companion that fights alongside you',
					'Level 3 Battle Ready: Use INT for weapon attacks and gain martial weapon proficiency',
					'Level 5 Extra Attack: Make two attacks when you take the Attack action',
				],
			},
		}),
		barbarian_path_of_the_ancestral_guardian: await db.createSubclass({
			id: 'subclass-barbarian-path-of-the-ancestral-guardian',
			name: 'Path Of The Ancestral Guardian',
			description:
				'Barbarians who call upon the spirits of their ancestors to protect allies and hinder enemies.',
                playstyle:
				"Protective tank who shields allies while dealing damage. Great for players who want to be the party's guardian and protector.",
                classId: classes.barbarian.id,
                additionalProperties: {
                alabastriaContext:
                    'In the desperate early days after The Bringing, when families were torn apart and ancestors lost, some warriors learned to commune with the spirits of those who came before. This path emerged from the need to honor those lost during the initial settlements and resource wars. The practice has spread across all continents, finding particular resonance among those who maintain strong tribal traditions.',
				keyFeatures: [
					'Level 3 Ancestral Protectors: Ancestors reduce damage to allies and hinder your targets',
					'Level 6 Spirit Shield: Use reaction to reduce damage to nearby allies',
					'Level 10 Consult The Spirits: Cast augury or clairvoyance as rituals',
				],
			},
		}),
		barbarian_path_of_the_beast: await db.createSubclass({
			id: 'subclass-barbarian-path-of-the-beast',
			name: 'Path Of The Beast',
			description:
				'Barbarians whose rage manifests as bestial transformations, growing claws, fangs, or other natural weapons.',
                playstyle:
				'Versatile melee combatant with animal-like abilities. Perfect for players who want to embody primal savagery and adaptability.',
                classId: classes.barbarian.id,
                additionalProperties: {
                alabastriaContext:
                    "The Path of the Beast emerged from those who adapted to Alabastria's wilds during the first 100 cycles, when survival meant embracing one's primal nature. Warriors discovered that their rage could manifest as bestial transformations, growing claws and fangs when civilization's tools failed. This path remains popular among those who live close to untamed wilderness.",
				keyFeatures: [
					'Level 3 Form Of The Beast: Grow natural weapons when you rage: bite, claws, or tail',
					'Level 6 Bestial Soul: Gain climbing, swimming speed or enhanced jumping',
					'Level 10 Infectious Fury: Spread your bestial rage to allies',
				],
			},
		}),
		barbarian_path_of_the_berserker: await db.createSubclass({
			id: 'subclass-barbarian-path-of-the-berserker',
			name: 'Path Of The Berserker',
			description:
				'Warriors who abandon all restraint in battle, becoming unstoppable forces of destruction.',
                playstyle:
				'Maximum damage output with high risk/reward mechanics. Ideal for players who want to be an unstoppable force of destruction.',
                classId: classes.barbarian.id,
                additionalProperties: {
                alabastriaContext:
                    'The berserker tradition arose during the desperate struggles of the first settlements, when warriors had to abandon all restraint to survive against overwhelming odds. During the Plains Rebellion and resource wars, some fighters discovered that complete abandonment of caution could turn the tide. This path appeals to those facing impossible odds, regardless of continent.',
				keyFeatures: [
					'Level 3 Frenzy: Make additional attacks during rage but gain exhaustion',
					'Level 6 Mindless Rage: Immunity to charm and fear while raging',
					'Level 10 Intimidating Presence: Frighten enemies with your ferocity',
				],
			},
		}),
		barbarian_path_of_the_storm_herald: await db.createSubclass({
			id: 'subclass-barbarian-path-of-the-storm-herald',
			name: 'Path Of The Storm Herald',
			description:
				'Barbarians who channel elemental forces during their rage, creating auras of destruction around them.',
                playstyle:
				'Area-of-effect damage dealer who affects the battlefield around them. Great for players who want elemental powers and battlefield control.',
                classId: classes.barbarian.id,
                additionalProperties: {
                alabastriaContext:
                    "Storm Heralds learned to channel elemental forces during the harsh early cycles, when natural disasters threatened settlements as much as enemies did. Warriors who survived mountain storms, coastal tempests, and arctic blizzards discovered they could harness these forces in battle. This path finds particular use in regions with extreme weather, though its practitioners can be found wherever nature's fury is respected.",
				keyFeatures: [
					'Level 3 Storm Aura: Choose desert (fire), sea (lightning), or tundra (cold) aura effects',
					'Level 6 Storm Soul: Gain resistance and additional benefits based on your aura',
					'Level 10 Shielding Storm: Grant resistance to allies within your aura',
				],
			},
		}),
		barbarian_path_of_the_totem_warrior: await db.createSubclass({
			id: 'subclass-barbarian-path-of-the-totem-warrior',
			name: 'Path Of The Totem Warrior',
			description:
				'Barbarians who form spiritual bonds with animal totems, gaining their traits and wisdom.',
                playstyle:
				'Versatile barbarian with nature-themed abilities. Perfect for players who want spiritual connection to animals and varied utility.',
                classId: classes.barbarian.id,
                additionalProperties: {
                alabastriaContext:
                    'Totem Warriors formed spiritual bonds with animal spirits during the initial settlements, when understanding local wildlife meant survival. This tradition developed as different groups adapted to their new environments, forming connections with the creatures that shared their lands. The practice has spread across all continents, with each region developing bonds to its native animals.',
				keyFeatures: [
					'Level 3 Totem Spirit: Choose bear (resistance), eagle (perception), or wolf (pack tactics) totems',
					'Level 6 Aspect Of The Beast: Gain additional totem animal benefits outside of rage',
					'Level 14 Totemic Attunement: Powerful totem abilities that affect combat and exploration',
				],
			},
		}),
		barbarian_path_of_wild_magic: await db.createSubclass({
			id: 'subclass-barbarian-path-of-wild-magic',
			name: 'Path Of Wild Magic',
			description:
				'Barbarians touched by chaotic magic whose rage triggers unpredictable magical effects.',
                playstyle:
				'Unpredictable barbarian with magical effects. Ideal for players who enjoy chaos and want magic mixed with martial combat.',
                classId: classes.barbarian.id,
                additionalProperties: {
                alabastriaContext:
                    "The Path of Wild Magic emerged during Kuriguer's Magic Surge (300-600 cycles), when magical anomalies began appearing throughout the forests. Some warriors discovered that their rage could trigger unpredictable magical effects, channeling the chaos that permeated certain regions. This path appeals to those touched by magical forces, regardless of their origin.",
				keyFeatures: [
					'Level 3 Magic Awareness: Sense magic around you as a bonus action and gain advantage on saving throws against spells',
					'Level 3 Wild Surge: Trigger random magical effects when you rage, from beneficial to dangerous',
					'Level 6 Bolstering Magic: Grant spell slots or enhance ability checks for allies through your wild magic',
				],
			},
		}),
		barbarian_path_of_the_zealot: await db.createSubclass({
			id: 'subclass-barbarian-path-of-the-zealot',
			name: 'Path Of The Zealot',
			description:
				'Divine warriors whose rage is fueled by religious fervor and celestial or infernal power.',
                playstyle:
				'Religious warrior with divine damage and support abilities. Perfect for players who want to combine faith with fury.',
                classId: classes.barbarian.id,
                additionalProperties: {
                alabastriaContext:
                    'Zealots emerged during the Kingdom Formation period when religious fervor became a driving force in warfare. Warriors who combined divine faith with primal rage proved devastating on the battlefield, channeling celestial or infernal power through their fury. This path has found followers across all continents, wherever faith and combat intersect.',
				keyFeatures: [
					'Level 3 Divine Fury: Deal extra radiant or necrotic damage while raging',
					'Level 3 Warrior Of The Gods: Spells that restore you to life require no material components',
					'Level 10 Zealous Presence: Grant allies advantage on attacks and saving throws',
				],
			},
		}),
		barbarian_path_of_the_battlerager: await db.createSubclass({
			id: 'subclass-barbarian-path-of-the-battlerager',
			name: 'Path Of The Battlerager',
			description:
				'Dwarven warriors who wear spiked armor and use it as a weapon, becoming whirlwinds of destruction in combat.',
                playstyle:
				'Aggressive tank who uses armor as a weapon. Perfect for players who want to be a mobile, damaging tank.',
                classId: classes.barbarian.id,
                additionalProperties: {
                alabastriaContext:
                    "The Battlerager tradition developed during the First Continental War, when dwarven warriors needed to maximize their combat effectiveness. They learned to turn their armor into weapons, becoming whirlwinds of destruction. This aggressive style proved effective in the harsh conditions of Bulsania's fortresses, though the technique has spread to other militarized regions.",
				keyFeatures: [
					'Level 3 Battlerager Armor: Gain proficiency with spiked armor and can use it as a weapon',
					'Level 3 Reckless Abandon: Gain temporary hit points when you use Reckless Attack',
					'Level 6 Battlerager Charge: Charge into battle, dealing damage and knocking enemies prone',
				],
			},
		}),
		barbarian_path_of_the_giant: await db.createSubclass({
			id: 'subclass-barbarian-path-of-the-giant',
			name: 'Path Of The Giant',
			description:
				'Barbarians who channel the power of giants, growing in size and strength as they rage, becoming towering forces of destruction.',
                playstyle:
				'Size-changing warrior with area control and massive damage. Great for players who want to be a huge, intimidating presence on the battlefield.',
                classId: classes.barbarian.id,
                additionalProperties: {
                alabastriaContext:
                    'The Path of the Giant emerged from legends of ancient giants who may have existed before The Bringing. Some warriors discovered they could channel the power of these primordial beings, growing in size and strength during their rage. This path has found particular resonance in mountainous regions where giant legends persist, though its practitioners can be found across all continents.',
				keyFeatures: [
					'Level 3 Giants Might: Grow to Large size when you rage, gaining reach and damage bonuses',
					'Level 6 Elemental Cleaver: Infuse your attacks with elemental damage based on your chosen giant type',
					'Level 10 Mighty Impel: Throw enemies or objects with incredible force, dealing damage and knocking them back',
				],
			},
		}),
		bard_college_of_creation: await db.createSubclass({
			id: 'subclass-bard-college-of-creation',
			name: 'College Of Creation',
			description:
				'Bards who use the Song of Creation to bring objects and creatures into existence through performance.',
                playstyle:
				'Creative support with unique utility options. Great for players who want to solve problems through magical creativity.',
                classId: classes.bard.id,
                additionalProperties: {
                alabastriaContext:
                    'The College of Creation emerged during the Cultural Renaissance (600-800 cycles), when art and performance flourished beyond mere survival needs. Bards discovered they could use the Song of Creation to bring objects and creatures into existence through performance. This art form has found particular appreciation in regions where magical academies encourage creative expression, though its practitioners travel across all continents.',
				keyFeatures: [
					'Level 3 Note Of Potential: Bardic Inspiration dice can trigger additional effects',
					'Level 3 Performance Of Creation: Create nonmagical items through performance',
					'Level 6 Animating Performance: Bring objects to life as dancing companions',
				],
			},
		}),
		bard_college_of_eloquence: await db.createSubclass({
			id: 'subclass-bard-college-of-eloquence',
			name: 'College Of Eloquence',
			description:
				'Masters of speech and persuasion who can sway minds and guarantee their words have impact.',
                playstyle:
				'Social manipulation and guaranteed success. Perfect for players who want to excel in roleplay and social encounters.',
                classId: classes.bard.id,
                additionalProperties: {
                alabastriaContext:
                    'The College of Eloquence became essential during the Kingdom Formation period, when diplomacy was needed to prevent constant warfare. As the Skratonian Alliance developed its council system, masters of speech learned to guarantee their words would have impact. This tradition has proven invaluable in the complex political landscape of modern Alabastria, where words can prevent conflicts.',
				keyFeatures: [
					'Level 3 Silver Tongue: Treat low rolls on Deception and Persuasion as 10s',
					'Level 3 Unsettling Words: Use Bardic Inspiration to reduce enemy saving throws',
					'Level 6 Universal Speech: Make any creature understand your speech',
				],
			},
		}),
		bard_college_of_glamour: await db.createSubclass({
			id: 'subclass-bard-college-of-glamour',
			name: 'College Of Glamour',
			description:
				'Bards touched by fey magic who use supernatural beauty and charm to entrance and command.',
                playstyle:
				'Enchantment-focused controller with fey magic. Ideal for players who want to charm enemies and inspire allies with supernatural presence.',
                classId: classes.bard.id,
                additionalProperties: {
                alabastriaContext:
                    "The College of Glamour developed from encounters with fey magic during Kuriguer's Magic Surge. Bards touched by fey power discovered they could use supernatural beauty and charm to entrance and command. This art form has spread across continents, finding particular use in courts and theaters where enchantment can sway hearts and minds.",
				keyFeatures: [
					'Level 3 Mantle Of Inspiration: Grant allies temporary hit points and movement',
					'Level 3 Enthralling Performance: Charm creatures through extended performance',
					'Level 6 Mantle Of Majesty: Cast command as a bonus action while concentrating on enchantment',
				],
			},
		}),
		bard_college_of_lore: await db.createSubclass({
			id: 'subclass-bard-college-of-lore',
			name: 'College Of Lore',
			description:
				'Scholars and knowledge-seekers who collect secrets and magical techniques from across the world.',
                playstyle:
				'Ultimate versatility with access to any spell. Perfect for players who want maximum options and knowledge-based roleplay.',
                classId: classes.bard.id,
                additionalProperties: {
                alabastriaContext:
                    'The College of Lore emerged during the Great Trade Expansion (300-600 cycles), when knowledge from different realms became crucial for survival and prosperity. Bards who collected secrets and magical techniques from across the world became invaluable advisors. Their tradition continues in the modern era, with scholars preserving knowledge from all continents in libraries and academies.',
				keyFeatures: [
					'Level 3 Cutting Words: Use Bardic Inspiration to reduce enemy attack, ability, and damage rolls',
					'Level 6 Additional Magical Secrets: Learn spells from any class earlier than other bards',
					'Level 14 Peerless Skill: Add half your proficiency bonus to Bardic Inspiration',
				],
			},
		}),
		bard_college_of_spirits: await db.createSubclass({
			id: 'subclass-bard-college-of-spirits',
			name: 'College Of Spirits',
			description:
				'Bards who commune with spirits and channel their stories for magical effects.',
                playstyle:
				'Unpredictable support with spiritual themes. Great for players who enjoy ghostly lore and random magical effects.',
                classId: classes.bard.id,
                additionalProperties: {
                alabastriaContext:
                    'The College of Spirits developed from those who learned to commune with the spirits of the departed after The Bringing, when countless souls were lost and their stories needed to be preserved. Bards discovered they could channel these stories for magical effects, keeping memories alive through performance. This tradition has found particular resonance in regions touched by death and loss.',
				keyFeatures: [
					'Level 3 Guiding Whispers: Bardic Inspiration can be used on Wisdom or Charisma checks',
					'Level 3 Spirit Session: Channel spirits for random magical effects',
					'Level 6 Tales From Beyond: Use Bardic Inspiration to trigger specific spirit effects',
				],
			},
		}),
		bard_college_of_swords: await db.createSubclass({
			id: 'subclass-bard-college-of-swords',
			name: 'College Of Swords',
			description:
				'Warrior-poets who combine bladework with performance, fighting with artistic flair.',
                playstyle:
				'Melee-focused bard with combat prowess. Perfect for players who want to fight up close while maintaining bardic versatility.',
                classId: classes.bard.id,
                additionalProperties: {
                alabastriaContext:
                    'The College of Swords emerged during the First Continental War, when bards needed to fight alongside warriors while maintaining their artistic expression. These warrior-poets combined bladework with performance, creating a fighting style that was both effective and beautiful. This tradition has spread across all continents, finding particular use in urban centers where entertainment and combat often intersect.',
				keyFeatures: [
					'Level 3 Fighting Style: Choose Dueling or Two-Weapon Fighting',
					'Level 3 Blade Flourish: Use Bardic Inspiration for special attack effects',
					'Level 6 Extra Attack: Make two attacks when you take the Attack action',
				],
			},
		}),
		bard_college_of_valor: await db.createSubclass({
			id: 'subclass-bard-college-of-valor',
			name: 'College Of Valor',
			description:
				'Battle-bards who inspire courage in combat and fight alongside their allies.',
                playstyle:
				'Balanced combat and support character. Ideal for players who want to fight effectively while inspiring allies.',
                classId: classes.bard.id,
                additionalProperties: {
                alabastriaContext:
                    'The College of Valor developed during the early wars, when bards needed to inspire courage in combat and fight alongside their allies. Battle-bards learned to combine performance with martial prowess, leading charges while singing battle hymns. This tradition has proven essential in militarized societies, though its practitioners can be found wherever warriors need inspiration.',
				keyFeatures: [
					'Level 3 Combat Inspiration: Bardic Inspiration can add to weapon damage or AC',
					'Level 3 Medium Armor And Shields: Proficiency with medium armor, shields, and martial weapons',
					'Level 6 Extra Attack: Make two attacks when you take the Attack action',
				],
			},
		}),
		bard_college_of_whispers: await db.createSubclass({
			id: 'subclass-bard-college-of-whispers',
			name: 'College Of Whispers',
			description:
				'Spies and manipulators who use secrets and psychic magic to control and deceive.',
                playstyle:
				"Espionage and psychological warfare. Perfect for players who want to be the party's spy and manipulator.",
                classId: classes.bard.id,
                additionalProperties: {
                alabastriaContext:
                    'The College of Whispers emerged during the complex political landscape of the Modern Era, when information became as valuable as gold. Bards who specialized in secrets and psychic magic learned to control and deceive through whispered words. This tradition has found particular use in regions with complex politics, where manipulation can determine the fate of kingdoms.',
				keyFeatures: [
					'Level 3 Psychic Blades: Use Bardic Inspiration to deal psychic damage',
					'Level 3 Words Of Terror: Frighten creatures through whispered secrets',
					'Level 6 Mantle Of Whispers: Capture and use the shadows of humanoids',
				],
			},
		}),
		cleric_forge_domain: await db.createSubclass({
			id: 'subclass-cleric-forge-domain',
			name: 'Forge Domain',
			description:
				'Clerics of smithing gods who bless weapons and armor with divine power.',
                playstyle:
				'Tanky support focused on equipment enhancement. Perfect for players who want to craft magical items and support through divine smithing.',
                classId: classes.cleric.id,
                additionalProperties: {
                alabastriaContext:
                    'The Forge Domain became essential during the early settlements, when smithing gods were needed to create tools and weapons for survival. As kingdoms formed and warfare developed, clerics learned to bless weapons and armor with divine power. This tradition has found particular use in regions with active forges and mining operations, though its practitioners serve wherever creation and protection are needed.',
				keyFeatures: [
					'Level 1 Blessing Of The Forge: Enhance weapons or armor with +1 bonus',
					'Level 2 Channel Divinity Artisans Blessing: Create simple metal items through divine power',
					'Level 6 Soul Of The Forge: Resistance to fire damage and +1 AC while wearing heavy armor',
				],
			},
		}),
		cleric_life_domain: await db.createSubclass({
			id: 'subclass-cleric-life-domain',
			name: 'Life Domain',
			description:
				'Healers dedicated to preserving and restoring life, the most traditional clerical role.',
                playstyle:
				"Ultimate healer focused on keeping everyone alive. Ideal for players who want to be the party's primary source of healing and support.",
                classId: classes.cleric.id,
                additionalProperties: {
                alabastriaContext:
                    'The Life Domain was perhaps the most crucial during The Bringing, when healers dedicated to preserving life became essential for survival. As settlements stabilized, these clerics established temples and hospitals, becoming beacons of hope. Their tradition continues in the modern era, serving wherever life needs protection and restoration.',
				keyFeatures: [
					'Level 1 Disciple Of Life: Healing spells restore additional hit points',
					'Level 2 Channel Divinity Preserve Life: Heal multiple allies simultaneously',
					'Level 6 Blessed Healer: Heal yourself when you heal others with spells',
				],
			},
		}),
		cleric_war_domain: await db.createSubclass({
			id: 'subclass-cleric-war-domain',
			name: 'War Domain',
			description:
				'Battle-clerics who serve gods of war and conflict, blessing warriors and leading charges.',
                playstyle:
				'Combat-focused cleric who fights on the front lines. Great for players who want to be both warrior and priest.',
                classId: classes.cleric.id,
                additionalProperties: {
                alabastriaContext:
                    'The War Domain emerged during the First Continental War, when battle-clerics were needed to bless warriors and lead charges. Clerics who served gods of war and conflict proved essential in military campaigns. This tradition has found particular use in militarized societies, though its practitioners serve wherever conflict requires divine guidance.',
				keyFeatures: [
					'Level 1 War Priest: Make bonus action weapon attacks when casting spells',
					'Level 2 Channel Divinity Guided Strike: Gain +10 bonus to attack rolls',
					"Level 1 War Domain Spells: Always know spells like shield, spiritual weapon, and crusader's mantle",
				],
			},
		}),
		cleric_tempest_domain: await db.createSubclass({
			id: 'subclass-cleric-tempest-domain',
			name: 'Tempest Domain',
			description:
				'Storm-callers who channel the power of thunder, lightning, and ocean tempests.',
                playstyle:
				'Destructive spellcaster with weather-based powers. Perfect for players who want to call down divine storms and lightning.',
                classId: classes.cleric.id,
                additionalProperties: {
                alabastriaContext:
                    "The Tempest Domain developed from the need to understand and channel natural disasters during the harsh early cycles. Clerics learned to call upon the power of thunder, lightning, and ocean tempests, turning nature's fury into a weapon. This tradition has found particular resonance in coastal and mountainous regions where storms are common, though its practitioners can be found wherever weather's power is respected.",
				keyFeatures: [
					'Level 1 Wrath Of The Storm: Deal thunder or lightning damage to attackers',
					'Level 2 Channel Divinity Destructive Wrath: Maximize thunder or lightning damage',
					'Level 6 Thunderbolt Strike: Push enemies when dealing lightning damage',
				],
			},
		}),
		cleric_light_domain: await db.createSubclass({
			id: 'subclass-cleric-light-domain',
			name: 'Light Domain',
			description:
				'Clerics of light and sun gods who wield radiant energy to illuminate darkness and burn away evil.',
                playstyle:
				'Offensive caster with radiant damage and area control. Great for players who want to be a divine blaster with utility.',
                classId: classes.cleric.id,
                additionalProperties: {
                alabastriaContext:
                    'The Light Domain became crucial during the early cycles, when darkness and unknown threats made light a necessity for survival. Clerics of light and sun gods learned to wield radiant energy to illuminate darkness and burn away evil. Their magic has proven particularly effective against undead and fiends, making them valuable members of organizations like the Huntbound Order.',
				keyFeatures: [
					'Level 1 Warding Flare: Impose disadvantage on enemy attacks as a reaction',
					'Level 2 Channel Divinity Radiance Of The Dawn: Create a burst of radiant light that damages undead and fiends',
					'Level 8 Potent Spellcasting: Add Wisdom modifier to cantrip damage',
				],
			},
		}),
		cleric_nature_domain: await db.createSubclass({
			id: 'subclass-cleric-nature-domain',
			name: 'Nature Domain',
			description:
				'Clerics who serve nature gods, wielding the power of the natural world to protect and nurture life.',
                playstyle:
				'Versatile caster with nature magic and elemental resistance. Perfect for players who want to combine divine power with nature magic.',
                classId: classes.cleric.id,
                additionalProperties: {
                alabastriaContext:
                    'The Nature Domain emerged during the initial settlements, when understanding and respecting the natural world meant survival. Clerics who served nature gods learned to protect and nurture life while wielding the power of the natural world. This tradition has found particular use in wild regions where civilization meets untamed wilderness, though its practitioners serve wherever nature needs protection.',
				keyFeatures: [
					'Level 1 Acolyte Of Nature: Learn a druid cantrip and gain proficiency with heavy armor',
					'Level 2 Channel Divinity Charm Animals And Plants: Charm beasts and plants to aid you',
					'Level 6 Dampen Elements: Grant resistance to elemental damage to allies',
				],
			},
		}),
		cleric_trickery_domain: await db.createSubclass({
			id: 'subclass-cleric-trickery-domain',
			name: 'Trickery Domain',
			description:
				'Clerics of trickster gods who use deception, illusion, and cunning to outwit enemies and protect their allies.',
                playstyle:
				'Stealth-focused caster with illusion magic and deception. Great for players who want to be sneaky and cunning.',
                classId: classes.cleric.id,
                additionalProperties: {
                alabastriaContext:
                    'The Trickery Domain developed during the complex political landscape of the Modern Era, when deception and cunning became essential tools. Clerics of trickster gods learned to use illusion and cunning to outwit enemies and protect their allies. This tradition has proven valuable in espionage and dangerous missions, making these clerics sought after by organizations like the Huntbound Order.',
				keyFeatures: [
					'Level 1 Blessing Of The Trickster: Grant advantage on Stealth checks to allies',
					'Level 2 Channel Divinity Invoke Duplicity: Create an illusory duplicate of yourself',
					'Level 6 Cloak Of Shadows: Turn invisible as an action',
				],
			},
		}),
		druid_circle_of_the_land: await db.createSubclass({
			id: 'subclass-druid-circle-of-the-land',
			name: 'Circle Of The Land',
			description:
				'Druids connected to specific terrains who draw additional magic from their chosen environment.',
                playstyle:
				'Spell-focused druid with terrain specialization. Great for players who want maximum spellcasting power and environmental themes.',
                classId: classes.druid.id,
                additionalProperties: {
                alabastriaContext:
                    'The Circle of the Land developed during the initial settlements, when druids needed to adapt their magic to specific terrains for survival. As different groups settled in forests, plains, swamps, and mountains, they learned to draw additional magic from their chosen environment. This tradition has spread across all continents, with each region developing connections to its native terrain.',
				keyFeatures: [
					'Level 2 Bonus Cantrip: Learn an additional druid cantrip',
					'Level 2 Natural Recovery: Recover spell slots during short rests',
					'Level 3 Circle Spells: Additional spells based on chosen land type',
				],
			},
		}),
		druid_circle_of_the_moon: await db.createSubclass({
			id: 'subclass-druid-circle-of-the-moon',
			name: 'Circle Of The Moon',
			description:
				'Druids who excel at shapeshifting, taking more powerful beast forms for combat.',
                playstyle:
				'Melee combatant through shapeshifting. Perfect for players who want to fight as animals and have strong physical presence.',
                classId: classes.druid.id,
                additionalProperties: {
                alabastriaContext:
                    'The Circle of the Moon emerged during the first 100 cycles, when druids needed to become powerful combatants to protect their communities. Those who excelled at shapeshifting discovered they could take more powerful beast forms for combat. This tradition has found particular use in wild regions where druids must defend against dangerous creatures, though its practitioners can be found wherever nature needs fierce protectors.',
				keyFeatures: [
					'Level 2 Combat Wild Shape: Use Wild Shape as a bonus action and while in beast form',
					'Level 2 Circle Forms: Transform into more powerful beasts, including CR 1 creatures',
					'Level 6 Primal Strike: Beast form attacks count as magical',
				],
			},
		}),
		druid_circle_of_wildfire: await db.createSubclass({
			id: 'subclass-druid-circle-of-wildfire',
			name: 'Circle Of Wildfire',
			description:
				"Druids who understand that destruction and renewal are part of nature's cycle, wielding cleansing flames.",
                playstyle:
				'Fire-focused druid with elemental companion. Ideal for players who want to combine destruction and healing themes.',
                classId: classes.druid.id,
                additionalProperties: {
                alabastriaContext:
                    "The Circle of Wildfire developed from understanding that destruction and renewal are part of nature's cycle. During the early settlements, druids learned that cleansing flames could clear land for new growth and protect communities. This tradition has found particular use in regions where fire is part of the natural cycle, though its practitioners serve wherever renewal follows destruction.",
				keyFeatures: [
					'Level 2 Summon Wildfire Spirit: Summon a fire elemental companion',
					'Level 6 Enhanced Bond: Gain benefits when your wildfire spirit is active',
					'Level 2 Circle Spells: Additional fire and healing spells',
				],
			},
		}),
		fighter_champion: await db.createSubclass({
			id: 'subclass-fighter-champion',
			name: 'Champion',
			description:
				'Fighters focused on physical excellence and improved critical hits, representing peak athletic ability.',
                playstyle:
				'Simple but effective warrior focused on consistent damage. Perfect for new players or those who want straightforward combat effectiveness.',
                classId: classes.fighter.id,
                additionalProperties: {
                alabastriaContext:
                    'The Champion archetype represents fighters who focus on physical excellence and improved critical hits, embodying peak athletic ability. This path emerged during the early wars, when warriors needed to maximize their combat effectiveness through pure determination and training. Champions can be found across all continents, wherever warriors seek to perfect their physical prowess.',
				keyFeatures: [
					'Level 3 Improved Critical: Score critical hits on 19-20',
					'Level 7 Remarkable Athlete: Add half proficiency to Strength, Dexterity, and Constitution checks',
					'Level 10 Additional Fighting Style: Choose a second fighting style',
				],
			},
		}),
		fighter_battle_master: await db.createSubclass({
			id: 'subclass-fighter-battle-master',
			name: 'Battle Master',
			description:
				'Tactical fighters who use combat maneuvers to control the battlefield and enhance their attacks.',
                playstyle:
				'Tactical combatant with versatile options. Great for players who enjoy strategic thinking and battlefield control.',
                classId: classes.fighter.id,
                additionalProperties: {
                alabastriaContext:
                    'The Battle Master archetype developed during the First Continental War, when tactical fighters were needed to control the battlefield and coordinate troops. Fighters who mastered combat maneuvers learned to enhance their attacks and control enemy movements. This tradition has found particular use in militarized societies, though its practitioners serve wherever tactical thinking can turn the tide of battle.',
				keyFeatures: [
					'Level 3 Combat Superiority: Superiority dice to fuel special maneuvers',
					'Level 3 Maneuvers: Learn tactical combat techniques like Trip Attack and Riposte',
					'Level 7 Know Your Enemy: Learn information about enemy capabilities',
				],
			},
		}),
		fighter_eldritch_knight: await db.createSubclass({
			id: 'subclass-fighter-eldritch-knight',
			name: 'Eldritch Knight',
			description:
				'Warrior-mages who combine martial prowess with arcane magic, creating spellswords.',
                playstyle:
				'Magical warrior with utility spells and combat enhancement. Ideal for players who want both sword and sorcery.',
                classId: classes.fighter.id,
                additionalProperties: {
                alabastriaContext:
                    "The Eldritch Knight archetype emerged during Kuriguer's Magic Surge, when warriors needed to combine martial prowess with arcane magic. These warrior-mages learned to create spellswords who could enhance their combat with magical utility. This tradition has found particular use in regions with magical academies, though its practitioners serve wherever magic and martial skill intersect.",
				keyFeatures: [
					'Level 3 Spellcasting: One-third caster focusing on abjuration and evocation',
					'Level 3 Weapon Bond: Bond with weapons to summon them and enhance attacks',
					'Level 7 War Magic: Make weapon attacks after casting cantrips',
				],
			},
		}),
		monk_way_of_the_open_hand: await db.createSubclass({
			id: 'subclass-monk-way-of-the-open-hand',
			name: 'Way Of The Open Hand',
			description:
				'Traditional monks who master unarmed combat and ki manipulation techniques.',
                playstyle:
				'Classic monk focused on unarmed combat mastery. Perfect for players who want the traditional monk experience with reliable techniques.',
                classId: classes.monk.id,
                additionalProperties: {
                alabastriaContext:
                    'The Way of the Open Hand represents the traditional monk path, mastering unarmed combat and ki manipulation techniques. This path emerged during the early settlements, when warriors needed to fight without weapons. Monks who perfected classical martial arts established monasteries across all continents, teaching their techniques to those seeking inner peace through physical discipline.',
				keyFeatures: [
					'Level 3 Open Hand Technique: Add effects to Flurry of Blows attacks: knock prone, push, or prevent reactions',
					'Level 6 Wholeness Of Body: Heal yourself using ki',
					'Level 11 Tranquility: End enchantments on yourself and gain sanctuary-like protection',
				],
			},
		}),
		monk_way_of_shadow: await db.createSubclass({
			id: 'subclass-monk-way-of-shadow',
			name: 'Way Of Shadow',
			description:
				'Ninja-like monks who use stealth, darkness, and illusion magic for infiltration and assassination.',
                playstyle:
				'Stealth-focused monk with magical abilities. Great for players who want to be sneaky scouts and assassins.',
                classId: classes.monk.id,
                additionalProperties: {
                alabastriaContext:
                    'The Way of Shadow developed during the complex political landscape of the Modern Era, when monks needed stealth and infiltration skills. These ninja-like monks learned to use darkness and illusion magic for infiltration and assassination. This tradition has found particular use in regions with dangerous political intrigue, though its practitioners serve wherever stealth and shadow are needed.',
				keyFeatures: [
					'Level 3 Shadow Arts: Cast darkness, darkvision, pass without trace, and silence using ki',
					'Level 6 Shadow Step: Teleport between shadows and gain advantage on attacks',
					'Level 11 Cloak Of Shadows: Become invisible as an action',
				],
			},
		}),
		monk_way_of_the_four_elements: await db.createSubclass({
			id: 'subclass-monk-way-of-the-four-elements',
			name: 'Way Of The Four Elements',
			description:
				'Monks who channel elemental forces through their ki, becoming living conduits of elemental power.',
                playstyle:
				'Magical monk with elemental powers. Ideal for players who want to blend martial arts with elemental magic.',
                classId: classes.monk.id,
                additionalProperties: {
                alabastriaContext:
                    "The Way of the Four Elements emerged during Kuriguer's Magic Surge, when monks discovered they could channel elemental forces through their ki. These living conduits of elemental power learned to manipulate fire, water, earth, and air. This tradition has found particular use in regions with strong elemental magic, though its practitioners serve wherever elemental forces need channeling.",
				keyFeatures: [
					'Level 3 Elemental Disciplines: Learn to cast elemental spells using ki points',
					'Level 6 Additional Disciplines: Learn more powerful elemental techniques',
					'Level 11 Elemental Mastery: Access to high-level elemental spells',
				],
			},
		}),
		paladin_oath_of_devotion: await db.createSubclass({
			id: 'subclass-paladin-oath-of-devotion',
			name: 'Oath Of Devotion',
			description:
				'Traditional paladins devoted to ideals of virtue, honor, and righteousness.',
                playstyle:
				'Classic righteous paladin focused on protection and virtue. Perfect for players who want to be the traditional holy knight.',
                classId: classes.paladin.id,
                additionalProperties: {
                alabastriaContext:
                    'The Oath of Devotion represents traditional paladins devoted to ideals of virtue, honor, and righteousness. This path emerged during the Kingdom Formation period, when exemplars of celestial virtue were needed to inspire others. Paladins who established orders dedicated to justice and protection have spread across all continents, serving wherever virtue needs champions.',
				keyFeatures: [
					'Level 3 Sacred Weapon: Channel Divinity to make weapon magical and shed bright light',
					'Level 3 Turn The Unholy: Channel Divinity to turn fiends and undead',
					'Level 7 Aura Of Devotion: Grant charm immunity to nearby allies',
				],
			},
		}),
		paladin_oath_of_the_ancients: await db.createSubclass({
			id: 'subclass-paladin-oath-of-the-ancients',
			name: 'Oath Of The Ancients',
			description:
				'Paladins who protect the light, beauty, and life of the world, often serving nature deities.',
                playstyle:
				'Nature-focused paladin with protective abilities. Great for players who want to combine holy warrior with nature themes.',
                classId: classes.paladin.id,
                additionalProperties: {
                alabastriaContext:
                    'The Oath of the Ancients developed during the initial settlements, when paladins needed to protect the light, beauty, and life of the world. These protectors learned to serve nature deities while maintaining their holy warrior role. This tradition has found particular use in regions where civilization meets untamed wilderness, though its practitioners serve wherever nature needs champions.',
				keyFeatures: [
					'Level 3 Natures Wrath: Channel Divinity to restrain enemies with spectral vines',
					'Level 3 Turn The Faithless: Channel Divinity to turn fey and fiends',
					'Level 7 Aura Of Warding: Grant spell damage resistance to nearby allies',
				],
			},
		}),
		paladin_oath_of_vengeance: await db.createSubclass({
			id: 'subclass-paladin-oath-of-vengeance',
			name: 'Oath Of Vengeance',
			description:
				'Paladins dedicated to punishing wrongdoers and pursuing justice through relentless pursuit.',
                playstyle:
				'Aggressive paladin focused on hunting down evil. Ideal for players who want to be a relentless force of justice.',
                classId: classes.paladin.id,
                additionalProperties: {
                alabastriaContext:
                    'The Oath of Vengeance emerged during the early wars, when paladins were needed to punish wrongdoers and pursue justice through relentless pursuit. These dedicated avengers learned to hunt down those who prey on the innocent with savage determination. This tradition has found particular use in frontier regions where law is scarce, though its practitioners serve wherever justice needs relentless champions.',
				keyFeatures: [
					'Level 3 Abjure Enemy: Channel Divinity to frighten and slow a target',
					'Level 3 Vow Of Enmity: Channel Divinity to gain advantage against one enemy',
					'Level 7 Relentless Avenger: Move without provoking opportunity attacks after hitting with opportunity attack',
				],
			},
		}),
		paladin_oath_of_the_crown: await db.createSubclass({
			id: 'subclass-paladin-oath-of-the-crown',
			name: 'Oath Of The Crown',
			description:
				'Paladins who serve the law and civilization, defending the social order and protecting the innocent through loyalty to crown and country.',
                playstyle:
				'Lawful protector focused on defending allies and maintaining order. Perfect for players who want to be a noble guardian of civilization and law.',
                classId: classes.paladin.id,
                additionalProperties: {
                alabastriaContext:
                    'The Oath of the Crown developed during the Kingdom Formation period, when paladins were needed to serve the law and civilization. These paladins learned to defend the social order and protect the innocent through loyalty to crown and country. This tradition has found particular use in regions with established kingdoms and legal systems, though its practitioners serve wherever law and civilization need divine champions.',
				keyFeatures: [
					'Level 3 Channel Divinity Champion Challenge: Challenge a creature to fight you, imposing disadvantage on attacks against others',
					"Level 3 Channel Divinity Turn The Tide: Use reaction to heal and rally nearby allies when they're reduced to 0 hit points",
					'Level 7 Divine Allegiance: Use reaction to take damage meant for an ally within 5 feet',
					'Level 15 Unbreakable Majesty: Cast compulsion as a bonus action and gain immunity to being charmed or frightened',
				],
			},
		}),
		ranger_hunter: await db.createSubclass({
			id: 'subclass-ranger-hunter',
			name: 'Hunter',
			description:
				'Rangers specialized in hunting specific types of prey, masters of taking down dangerous creatures.',
                playstyle:
				'Versatile combatant effective against many enemy types. Great for players who want reliable combat effectiveness and adaptability.',
                classId: classes.ranger.id,
                additionalProperties: {
                alabastriaContext:
                    'The Hunter archetype represents rangers specialized in hunting specific types of prey, mastering techniques for taking down dangerous creatures. This path emerged during the initial settlements, when survival depended on understanding and defeating local threats. Hunters have adapted their techniques across all continents, wherever dangerous creatures need to be tracked and eliminated.',
				keyFeatures: [
					'Level 3 Hunters Prey: Choose Colossus Slayer, Giant Killer, or Horde Breaker',
					'Level 7 Defensive Tactics: Choose Escape the Horde, Multiattack Defense, or Steel Will',
					'Level 11 Multiattack: Choose Volley or Whirlwind Attack for fighting groups',
				],
			},
		}),
		ranger_beast_master: await db.createSubclass({
			id: 'subclass-ranger-beast-master',
			name: 'Beast Master',
			description:
				'Rangers who form deep bonds with animal companions, fighting alongside loyal beasts.',
                playstyle:
				'Pet-focused ranger with loyal companion. Perfect for players who want an animal partner and unique tactical options.',
                classId: classes.ranger.id,
                additionalProperties: {
                alabastriaContext:
                    'The Beast Master archetype developed during the initial settlements, when rangers needed loyal companions to survive in the wilds. These rangers learned to form deep bonds with animal companions, fighting alongside beasts who became trusted partners. This tradition has spread across all continents, wherever rangers need animal allies for survival and combat.',
				keyFeatures: [
					'Level 3 Rangers Companion: Gain a loyal animal companion that fights with you',
					'Level 7 Exceptional Training: Your companion can take the Dash, Disengage, or Help action',
					'Level 11 Bestial Fury: Your companion can make two attacks',
				],
			},
		}),
		ranger_gloom_stalker: await db.createSubclass({
			id: 'subclass-ranger-gloom-stalker',
			name: 'Gloom Stalker',
			description:
				'Rangers who excel in darkness and underground environments, masters of ambush and stealth.',
                playstyle:
				'Stealth-focused ambush specialist. Ideal for players who want to be deadly scouts and first-strike specialists.',
                classId: classes.ranger.id,
                additionalProperties: {
                alabastriaContext:
                    'The Gloom Stalker archetype emerged during the early cycles, when rangers needed to excel in darkness and underground environments. These masters of ambush and stealth learned to hunt during the dangerous nights when unknown threats lurked. This tradition has found particular use in regions with extensive underground or shadow-touched areas, though its practitioners serve wherever darkness needs hunters.',
				keyFeatures: [
					'Level 3 Dread Ambusher: Extra attack and damage on first turn of combat',
					'Level 3 Umbral Sight: Darkvision and invisibility to darkvision while in darkness',
					'Level 7 Iron Mind: Proficiency in Wisdom saving throws',
				],
			},
		}),
		rogue_thief: await db.createSubclass({
			id: 'subclass-rogue-thief',
			name: 'Thief',
			description:
				'Classic rogues who excel at burglary, climbing, and using magical items.',
                playstyle:
				"Utility-focused rogue with excellent mobility and item use. Perfect for players who want to be the party's problem solver and infiltrator.",
                classId: classes.rogue.id,
                additionalProperties: {
                alabastriaContext:
                    'The Thief archetype represents classic rogues who excel at burglary, climbing, and using magical items. This path emerged during the early settlements, when survival often required taking what was needed. Thieves have adapted their techniques across all continents, finding use wherever nimbleness and item mastery are needed.',
				keyFeatures: [
					'Level 3 Fast Hands: Use objects, pick locks, or disarm traps as bonus actions',
					'Level 3 Second Story Work: Enhanced climbing and jumping abilities',
					'Level 13 Use Magic Device: Use any magic item regardless of restrictions',
				],
			},
		}),
		rogue_assassin: await db.createSubclass({
			id: 'subclass-rogue-assassin',
			name: 'Assassin',
			description:
				'Professional killers who specialize in disguises, poisons, and elimination techniques.',
                playstyle:
				'Stealth-focused killer with disguise abilities. Great for players who want to be deadly infiltrators and eliminate key targets.',
                classId: classes.rogue.id,
                additionalProperties: {
                alabastriaContext:
                    'The Assassin archetype developed during the complex political landscape of the Modern Era, when professional killers were needed for elimination missions. These specialists learned to use disguises, poisons, and infiltration techniques for silent elimination. This tradition has found particular use in regions with dangerous political intrigue, though its practitioners serve wherever elimination needs professionals.',
				keyFeatures: [
					"Level 3 Bonus Proficiencies: Proficiency with disguise kit and poisoner's kit",
					'Level 3 Assassinate: Advantage and automatic crits against surprised creatures',
					'Level 9 Infiltration Expertise: Create false identities and blend into society',
				],
			},
		}),
		rogue_arcane_trickster: await db.createSubclass({
			id: 'subclass-rogue-arcane-trickster',
			name: 'Arcane Trickster',
			description:
				'Rogues who blend thievery with illusion and enchantment magic.',
                playstyle:
				'Magical rogue with utility spells and enhanced stealth. Ideal for players who want magic mixed with traditional rogue abilities.',
                classId: classes.rogue.id,
                additionalProperties: {
                alabastriaContext:
                    "The Arcane Trickster archetype emerged during Kuriguer's Magic Surge, when rogues discovered they could blend thievery with illusion and enchantment magic. These magical rogues learned to enhance their stealth and infiltration with arcane utility. This tradition has found particular use in regions with magical academies, though its practitioners serve wherever magic and thievery intersect.",
				keyFeatures: [
					'Level 3 Spellcasting: One-third caster focusing on illusion and enchantment',
					'Level 3 Mage Hand Legerdemain: Enhanced mage hand for thievery and stealth',
					'Level 9 Magical Ambush: Impose disadvantage on saves against spells cast while hidden',
				],
			},
		}),
		sorcerer_draconic_bloodline: await db.createSubclass({
			id: 'subclass-sorcerer-draconic-bloodline',
			name: 'Draconic Bloodline',
			description:
				'Sorcerers with dragon ancestry who gain draconic resilience and elemental power.',
                playstyle:
				'Durable elemental damage dealer. Perfect for players who want to embody draconic power and specialize in elemental magic.',
                classId: classes.sorcerer.id,
                additionalProperties: {
                alabastriaContext:
                    'The Draconic Bloodline emerged from legends of dragons that may have existed before The Bringing. Sorcerers discovered they had dragon ancestry that granted draconic resilience and elemental power. This tradition has found particular use in regions with draconic legends, though its practitioners serve wherever draconic heritage manifests.',
				keyFeatures: [
					'Level 1 Dragon Ancestor: Choose a dragon type for damage resistance and extra spells',
					'Level 1 Draconic Resilience: Extra hit points and natural armor',
					'Level 6 Elemental Affinity: Add Charisma modifier to damage of chosen type',
				],
			},
		}),
		sorcerer_wild_magic: await db.createSubclass({
			id: 'subclass-sorcerer-wild-magic',
			name: 'Wild Magic',
			description:
				'Sorcerers touched by chaotic magic whose spells can trigger unpredictable effects.',
                playstyle:
				'Unpredictable spellcaster with chaotic effects. Great for players who enjoy randomness and want to create memorable magical moments.',
                classId: classes.sorcerer.id,
                additionalProperties: {
                alabastriaContext:
                    "The Wild Magic origin developed during Kuriguer's Magic Surge, when sorcerers discovered they were touched by chaotic magic. These sorcerers found their spells could trigger unpredictable effects, creating memorable magical moments. This tradition has found particular use in regions with magical anomalies, though its practitioners serve wherever chaos meets magic.",
				keyFeatures: [
					'Level 1 Wild Magic Surge: Chance to trigger random magical effects when casting spells',
					'Level 1 Tides Of Chaos: Gain advantage on rolls but increase surge chance',
					'Level 6 Bend Luck: Spend sorcery points to alter d20 rolls',
				],
			},
		}),
		sorcerer_divine_soul: await db.createSubclass({
			id: 'subclass-sorcerer-divine-soul',
			name: 'Divine Soul',
			description:
				'Sorcerers blessed by divine power who can access both arcane and divine magic.',
                playstyle:
				'Versatile caster with both arcane and divine magic. Ideal for players who want maximum spell variety and healing capabilities.',
                classId: classes.sorcerer.id,
                additionalProperties: {
                alabastriaContext:
                    'The Divine Soul origin emerged during the early cycles, when sorcerers discovered they were blessed by divine power. These sorcerers learned they could access both arcane and divine magic, combining the versatility of sorcery with the power of divine spells. This tradition has found particular use in regions with strong religious traditions, though its practitioners serve wherever divine and arcane power intersect.',
				keyFeatures: [
					'Level 1 Divine Magic: Learn spells from cleric spell list in addition to sorcerer',
					'Level 1 Favored By The Gods: Add 2d4 to failed saving throws',
					'Level 6 Empowered Healing: Spend sorcery points to maximize healing spells',
				],
			},
		}),
		warlock_the_fiend: await db.createSubclass({
			id: 'subclass-warlock-the-fiend',
			name: 'The Fiend',
			description:
				'Warlocks who serve demons, devils, or other evil outsiders for infernal power.',
                playstyle:
				'Durable damage dealer with infernal power. Perfect for players who want to play with dark themes and consistent combat effectiveness.',
                classId: classes.warlock.id,
                additionalProperties: {
                alabastriaContext:
                    'The Fiend patron emerged during the desperate early cycles, when mortals needed power to survive and were willing to make bargains with demons, devils, or other evil outsiders. These warlocks learned to serve infernal powers for diabolic might. This tradition has found particular use in regions where desperation meets opportunity, though its practitioners serve wherever infernal power is sought.',
				keyFeatures: [
					'Level 1 Dark Ones Blessing: Gain temporary hit points when you reduce enemies to 0 HP',
					'Level 6 Dark Ones Own Luck: Add d10 to ability checks or saves',
					'Level 10 Fiendish Resilience: Choose damage type to resist each short rest',
				],
			},
		}),
		warlock_the_archfey: await db.createSubclass({
			id: 'subclass-warlock-the-archfey',
			name: 'The Archfey',
			description:
				'Warlocks bound to powerful fey lords who grant whimsical but potent magic.',
                playstyle:
				'Enchantment-focused controller with fey magic. Great for players who want whimsical powers and social manipulation abilities.',
                classId: classes.warlock.id,
                additionalProperties: {
                alabastriaContext:
                    "The Archfey patron developed during Kuriguer's Magic Surge, when warlocks discovered connections to powerful fey lords through magical anomalies. These warlocks learned to serve seasonal courts and gain whimsical but potent magic. This tradition has found particular use in regions touched by fey magic, though its practitioners serve wherever fey power is accessible.",
				keyFeatures: [
					'Level 1 Fey Presence: Cause enemies to be charmed or frightened',
					'Level 6 Misty Escape: Turn invisible and teleport when taking damage',
					'Level 10 Beguiling Defenses: Immunity to charm and reflect charm effects',
				],
			},
		}),
		warlock_the_great_old_one: await db.createSubclass({
			id: 'subclass-warlock-the-great-old-one',
			name: 'The Great Old One',
			description:
				'Warlocks who serve ancient, alien entities that exist beyond normal reality.',
                playstyle:
				'Psychic-themed warlock with alien abilities. Ideal for players who enjoy cosmic horror themes and mental manipulation.',
                classId: classes.warlock.id,
                additionalProperties: {
                alabastriaContext:
                    'The Great Old One patron emerged during the Modern Era, when warlocks discovered they could serve ancient, alien entities that exist beyond normal reality. These warlocks learned to contact alien minds and gain cosmic powers. This tradition has found particular use in regions touched by cosmic or psionic forces, though its practitioners serve wherever alien power is accessible.',
				keyFeatures: [
					'Level 1 Telepathic Communication: Communicate telepathically with creatures',
					'Level 6 Entropic Ward: Impose disadvantage on attacks and gain advantage on next attack',
					'Level 10 Thought Shield: Resistance to psychic damage and reflect psychic damage',
				],
			},
		}),
		wizard_school_of_evocation: await db.createSubclass({
			id: 'subclass-wizard-school-of-evocation',
			name: 'School Of Evocation',
			description:
				'Wizards who specialize in destructive magic, mastering spells of force and energy.',
                playstyle:
				"Damage-focused wizard with safe area spells. Perfect for players who want to be the party's primary magical damage dealer.",
                classId: classes.wizard.id,
                additionalProperties: {
                alabastriaContext:
                    'The School of Evocation developed during the First Continental War, when wizards needed to specialize in destructive magic for combat. These wizards learned to master spells of force and energy, becoming primary magical damage dealers. This tradition has found particular use in regions with active warfare, though its practitioners serve wherever destructive magic is needed.',
				keyFeatures: [
					'Level 2 Sculpt Spells: Protect allies from your area spells',
					'Level 6 Potent Cantrip: Cantrips deal half damage on successful saves',
					'Level 10 Empowered Evocation: Add Intelligence modifier to evocation spell damage',
				],
			},
		}),
		wizard_school_of_illusion: await db.createSubclass({
			id: 'subclass-wizard-school-of-illusion',
			name: 'School Of Illusion',
			description:
				'Wizards who master deception, misdirection, and reality-bending illusions.',
                playstyle:
				'Deception and control specialist with creative solutions. Great for players who enjoy creative problem-solving and battlefield control.',
                classId: classes.wizard.id,
                additionalProperties: {
                alabastriaContext:
                    "The School of Illusion emerged during Kuriguer's Magic Surge, when wizards discovered they could master deception, misdirection, and reality-bending illusions. These wizards learned to use creative problem-solving and battlefield control through illusion. This tradition has found particular use in regions with magical academies, though its practitioners serve wherever deception and control are needed.",
				keyFeatures: [
					'Level 2 Improved Minor Illusion: Create both sound and image with minor illusion',
					'Level 6 Malleable Illusions: Change illusion spell details as an action',
					'Level 14 Illusory Reality: Make one object from illusion spells temporarily real',
				],
			},
		}),
		wizard_school_of_divination: await db.createSubclass({
			id: 'subclass-wizard-school-of-divination',
			name: 'School Of Divination',
			description:
				'Wizards who peer into the future and uncover hidden knowledge through prophetic magic.',
                playstyle:
				'Support wizard with future sight and information gathering. Ideal for players who want to help the party through foresight and knowledge.',
                classId: classes.wizard.id,
                additionalProperties: {
                alabastriaContext:
                    'The School of Divination developed during the Great Trade Expansion, when wizards needed to peer into the future and uncover hidden knowledge. These wizards learned to use prophetic magic to help parties through foresight and knowledge. This tradition has found particular use in regions with strong scholarly traditions, though its practitioners serve wherever future sight is needed.',
				keyFeatures: [
					'Level 2 Portent: Roll dice each day to replace d20 rolls later',
					'Level 6 Expert Divination: Recover spell slots when casting divination spells',
					'Level 10 The Third Eye: Choose from various enhanced sight abilities',
				],
			},
		}),
		tactician_grandmaster: await db.createSubclass({
			id: 'subclass-tactician-grandmaster',
			name: 'Grandmaster',
			description:
				'Masters of grand strategy who excel at long-term planning and large-scale tactical operations.',
                playstyle:
				'Long-term strategic planning and battlefield control. Perfect for players who enjoy complex tactical scenarios.',
                classId: classes.tactician.id,
                additionalProperties: {
                alabastriaContext:
                    'The Grandmaster specialization developed during the First Continental War, when tacticians were needed to excel at long-term planning and large-scale tactical operations. These masters of grand strategy learned to plan complex military campaigns. This tradition has found particular use in regions with active warfare or large military organizations, though its practitioners serve wherever strategic planning is needed.',
				keyFeatures: [
					'Level 3 Strategic Planning: Spend time planning to gain significant advantages in upcoming encounters',
					'Level 6 Battlefield Survey: Analyze terrain and enemy positions to predict and counter enemy tactics',
					'Level 10 Grand Strategy: Coordinate multiple allies with complex tactical maneuvers',
				],
			},
		}),
		tactician_mentalist: await db.createSubclass({
			id: 'subclass-tactician-mentalist',
			name: 'Mentalist',
			description:
				'Tacticians who use psionic abilities and mental powers to read enemy intentions and coordinate allies through telepathic communication.',
                playstyle:
				'Psionic support and battlefield communication. Great for players who want to combine strategy with mental powers.',
                classId: classes.tactician.id,
                additionalProperties: {
                alabastriaContext:
                    'The Mentalist specialization emerged during the Modern Era, when tacticians discovered they could use psionic abilities and mental powers to read enemy intentions and coordinate allies through telepathic communication. These tacticians learned to combine strategy with mental powers. This tradition has found particular use in regions with psionic traditions or intelligence operations, though its practitioners serve wherever mental coordination is needed.',
				keyFeatures: [
					'Level 3 Telepathic Link: Create mental connections with allies for silent communication and coordination',
					'Level 6 Mind Reading: Read enemy surface thoughts to predict their actions and counter their tactics',
					'Level 10 Psychic Command: Issue mental commands that enhance ally performance and disrupt enemy coordination',
				],
			},
		}),
		tactician_scholar: await db.createSubclass({
			id: 'subclass-tactician-scholar',
			name: 'Scholar',
			description:
				'Academic tacticians who study warfare, history, and enemy tactics to develop innovative strategies and countermeasures.',
                playstyle:
				'Knowledge-based strategy and research. Ideal for players who enjoy learning about enemy types and developing counter-strategies.',
                classId: classes.tactician.id,
                additionalProperties: {
                alabastriaContext:
                    'The Scholar specialization developed during the Great Trade Expansion, when academic tacticians were needed to study warfare, history, and enemy tactics. These scholars learned to develop innovative strategies and countermeasures through research. This tradition has found particular use in regions with magical academies or strong scholarly traditions, though its practitioners serve wherever knowledge-based strategy is needed.',
				keyFeatures: [
					'Level 3 Tactical Knowledge: Gain extensive knowledge of enemy tactics and weaknesses',
					'Level 6 Research And Development: Develop new tactics and strategies based on historical study and analysis',
					'Level 10 Master Tactician: Apply advanced tactical knowledge to gain significant advantages in combat',
				],
			},
		}),
		tactician_war_mind: await db.createSubclass({
			id: 'subclass-tactician-war-mind',
			name: 'War Mind',
			description:
				'Combat-focused tacticians who combine martial prowess with strategic thinking, leading from the front lines.',
                playstyle:
				'Combat-focused strategy and leadership. Perfect for players who want to combine tactical thinking with martial prowess.',
                classId: classes.tactician.id,
                additionalProperties: {
                alabastriaContext:
                    'The War Mind specialization emerged during the First Continental War, when combat-focused tacticians were needed to combine martial prowess with strategic thinking. These field commanders learned to lead from the front lines while maintaining tactical awareness. This tradition has found particular use in regions with active warfare or military organizations, though its practitioners serve wherever combat leadership is needed.',
				keyFeatures: [
					'Level 3 Combat Analysis: Analyze combat situations in real-time to gain tactical advantages',
					'Level 6 Battlefield Presence: Your mere presence on the battlefield inspires and coordinates allies',
					'Level 10 War Leader: Lead by example, gaining powerful combat abilities when fighting alongside allies',
				],
			},
		}),
		cleric_arcana_domain: await db.createSubclass({
			id: 'subclass-cleric-arcana-domain',
			name: 'Arcana Domain',
			description: 'Arcana Domain subclass.',
			playstyle:
            'Spellcasting support and utility, focusing on offensive spells and counter-magic to control magical threats.',
			classId: classes.cleric.id,
			additionalProperties: {
                alabastriaContext:
                    "The Arcana Domain emerged during Kuriguer's Magic Surge, when clerics needed to bridge divine power with arcane magic. These scholar-clerics guard ancient libraries and arcane knowledge, protecting the secrets of the world. Their tradition has found particular use in regions with magical academies, though their knowledge is valuable wherever magic and divinity intersect.",
				keyFeatures: [
					'Level 3 Arcane Initiate: You learn two cantrips of your choice from the wizard spell list',
					'Level 3 Spell Breaker: When you restore hit points to a creature, you can end one spell of your choice on that creature',
					'Level 3 Arcane Mastery: You gain the ability to learn a wizard spell and prepare it as a cleric spell',
				],
			},
		}),
		cleric_death_domain: await db.createSubclass({
			id: 'subclass-cleric-death-domain',
			name: 'Death Domain',
			description: 'Death Domain subclass.',
			playstyle:
            'Aggressive caster that inflicts necrotic damage, excels at killing and weakening foes with death-related spells.',
			classId: classes.cleric.id,
			additionalProperties: {
                alabastriaContext:
                    'The Death Domain developed from the need to understand and control death after The Bringing, when countless souls were lost and needed guidance. Clerics who serve death gods learned to command the forces of undeath and guide souls to their proper rest. This tradition has found particular use in regions touched by death and undeath, though its practitioners serve wherever the boundary between life and death needs guardianship.',
				keyFeatures: [
					'Level 3 Reaper: You learn one necromancy cantrip that can target two creatures within 5 feet of each other',
					'Level 3 Touch of Death: You gain the ability to infuse necrotic energy into your attacks',
					'Level 3 Divinity of Death: You can channel divinity to destroy undead or animate dead',
				],
			},
		}),
		cleric_grave_domain: await db.createSubclass({
			id: 'subclass-cleric-grave-domain',
			name: 'Grave Domain',
			description: 'Grave Domain subclass.',
			playstyle:
            'Balance of offense and defense, able to heal and harm; prevents revivals of fallen allies and seals undead.',
			classId: classes.cleric.id,
			additionalProperties: {
                alabastriaContext:
                    'The Grave Domain emerged from the need to protect the balance between life and death after The Bringing, when the natural order was disrupted. Clerics learned to tend tombs and aid those on the brink of death while preventing unnatural resurrection. This tradition has spread across all continents, serving wherever the balance between life and death needs protection.',
				keyFeatures: [
					'Level 3 Circle of Mortality: You gain enhanced healing for creatures at 0 hit points and spare the dying as a bonus action',
					'Level 3 Path to the Grave: You can curse a creature to be vulnerable to the next attack against it',
					"Level 3 Sentinel at Death's Door: You can force an attack that would critically hit to become a normal hit",
				],
			},
		}),
		cleric_knowledge_domain: await db.createSubclass({
			id: 'subclass-cleric-knowledge-domain',
			name: 'Knowledge Domain',
			description: 'Knowledge Domain subclass.',
			playstyle:
            'Versatile caster with additional skill proficiencies; gathers information and uses divination to control the flow of battle.',
			classId: classes.cleric.id,
			additionalProperties: {
                alabastriaContext:
                    'The Knowledge Domain became essential during the Great Trade Expansion, when preserving knowledge from different realms became crucial. Clerics dedicated to knowledge serve as sages and librarians, preserving lore and serving as oracles who advise powerful leaders. This tradition has found particular use in regions with universities and magical academies, though their wisdom is sought wherever knowledge is valued.',
				keyFeatures: [
					'Level 3 Blessings of Knowledge: You gain proficiency in two skills from a list and can read all writing',
					'Level 3 Knowledge of the Ages: You can channel divinity to gain proficiency with a tool or skill temporarily',
					'Level 3 Visions of the Past: You can gain visions about the history of an object or location',
				],
			},
		}),
		cleric_order_domain: await db.createSubclass({
			id: 'subclass-cleric-order-domain',
			name: 'Order Domain',
			description: 'Order Domain subclass.',
			playstyle:
            'Protective front-line cleric; bolsters allies with commanding spells and punishes foes who defy authority.',
			classId: classes.cleric.id,
			additionalProperties: {
                alabastriaContext:
                    'The Order Domain emerged during the Kingdom Formation period, when law and discipline were needed to maintain social order. Clerics who serve gods of law learned to enforce decrees and embody discipline while fighting for justice. This tradition has found particular use in regions with complex legal systems, though its practitioners serve wherever order and justice are needed.',
				keyFeatures: [
					"Level 3 Order's Demand: When you cast an enchantment spell, an ally can make a weapon attack as a reaction",
					"Level 3 Order's Wrath: When you deal your Divine Strike damage, another enemy takes the same damage",
					'Level 3 Embodiment of the Law: You can cast enchantment spells as a bonus action and have advantage on saving throws against them',
				],
			},
		}),
		cleric_peace_domain: await db.createSubclass({
			id: 'subclass-cleric-peace-domain',
			name: 'Peace Domain',
			description: 'Peace Domain subclass.',
			playstyle:
            'Supportive healer and buffer; focuses on teamwork and protecting the party from harm.',
			classId: classes.cleric.id,
			additionalProperties: {
                alabastriaContext:
                    'The Peace Domain developed during the ongoing conflicts of the Modern Era, when mediators were needed to prevent violence and unite divided communities. Clerics dedicated to peace learned to invoke holy bonds that unite allies and dampen strife. This tradition has found particular use in regions with ongoing conflicts, though its practitioners serve wherever peace needs to be maintained.',
				keyFeatures: [
					'Level 3 Emboldening Bond: You can create a magical bond between creatures that grants a d4 bonus to attacks and saves',
					'Level 3 Shield of Serenity: You can protect a creature from being charmed or frightened and heal them',
					'Level 3 Protective Bond: Bonded creatures can teleport to each other when one takes damage',
				],
			},
		}),
		cleric_twilight_domain: await db.createSubclass({
			id: 'subclass-cleric-twilight-domain',
			name: 'Twilight Domain',
			description: 'Twilight Domain subclass.',
			playstyle:
            'Defensive and vigilant; excels in guarding and vision, providing shelter and guiding allies safely through darkness.',
			classId: classes.cleric.id,
			additionalProperties: {
                alabastriaContext:
                    'The Twilight Domain emerged from the need to protect travelers during the dangerous nights after The Bringing, when darkness held unknown threats. Clerics learned to guard the border between light and darkness, watching over travelers and providing shelter. This tradition has found particular use in regions with long nights or dangerous wilderness, though its practitioners serve wherever twilight needs guardianship.',
				keyFeatures: [
					'Level 3 Vigilant Blessing: You grant advantage on the next initiative roll to a creature you touch',
					'Level 3 Twilight Sanctuary: You can channel divinity to create an aura that grants temporary hit points and ends fear or charm',
					'Level 3 Divinity of Twilight: You can share your darkvision and gain flight in dim light or darkness',
				],
			},
		}),
		druid_circle_of_dreams: await db.createSubclass({
			id: 'subclass-druid-circle-of-dreams',
			name: 'Circle of Dreams',
			description: 'Circle of Dreams subclass.',
			playstyle:
            "Healer and protector; empowers allies with fey magic and uses nature's vitality to keep comrades healthy.",
			classId: classes.druid.id,
			additionalProperties: {
                alabastriaContext:
                    "The Circle of Dreams emerged during Kuriguer's Magic Surge, when druids discovered connections to the feywild through magical anomalies. These druids learned to commune with fey realms and nurture the land with gentle restoration magic. This tradition has found particular use in regions touched by fey magic, though its practitioners serve wherever gentle healing and restoration are needed.",
				keyFeatures: [
					'Level 3 Balm of the Summer Court: You can heal creatures as a bonus action using special pool of d6s',
					'Level 3 Hearth of Moonlight: You can create a protective shelter that hides and protects those within',
					'Level 3 Hidden Paths: You can teleport yourself or an ally to an unoccupied space you can see',
				],
			},
		}),
		druid_circle_of_the_shepherd: await db.createSubclass({
			id: 'subclass-druid-circle-of-the-shepherd',
			name: 'Circle of the Shepherd',
			description: 'Circle of the Shepherd subclass.',
			playstyle:
            'Summoner and support; calls spiritual beasts to fight and heals both companions and summoned allies.',
			classId: classes.druid.id,
			additionalProperties: {
                alabastriaContext:
                    "The Circle of the Shepherd developed during the initial settlements, when druids needed to protect animal spirits and lead summoned creatures in battle. These guardians of the wild learned to care for nature's herds while commanding spiritual beasts. This tradition has found particular use in regions with large animal populations, though its practitioners serve wherever nature's creatures need protection.",
				keyFeatures: [
					'Level 3 Speech of the Woods: You can communicate with beasts and they understand your speech',
					'Level 3 Spirit Totem: You can summon a spirit that provides benefits like healing or protection',
					'Level 3 Faithful Summons: If you are reduced to 0 hit points, summoned beasts appear to protect you',
				],
			},
		}),
		druid_circle_of_spores: await db.createSubclass({
			id: 'subclass-druid-circle-of-spores',
			name: 'Circle of Spores',
			description: 'Circle of Spores subclass.',
			playstyle:
            'Offensive caster with necrotic focus; specializes in area control and using spores to damage enemies.',
			classId: classes.druid.id,
			additionalProperties: {
                alabastriaContext:
                    'The Circle of Spores emerged from understanding that decay is part of the life cycle. Druids who studied fungal magic discovered they could use spores to both heal and harm, finding beauty in rot and renewal. This tradition has found particular use in regions with extensive underground caverns or swamps, though its practitioners serve wherever the cycle of life and death needs understanding.',
				keyFeatures: [
					'Level 3 Halo of Spores: You can use your reaction to deal necrotic damage to a creature near you',
					'Level 3 Symbiotic Entity: You gain temporary hit points and your melee attacks deal extra poison damage',
					'Level 3 Fungal Infestation: When a beast or humanoid dies near you, you can reanimate it as a zombie',
				],
			},
		}),
		druid_circle_of_stars: await db.createSubclass({
			id: 'subclass-druid-circle-of-stars',
			name: 'Circle of the Stars',
			description: 'Circle of the Stars subclass.',
			playstyle:
            'Balanced caster; uses star-themed abilities for support and celestial-themed damage.',
			classId: classes.druid.id,
			additionalProperties: {
                alabastriaContext:
                    'The Circle of the Stars developed during the early cycles, when druids needed to navigate by the stars and interpret celestial signs for guidance. These druids learned to chart the cosmos and use starlight to guide and bless their allies. This tradition has found particular use in regions with clear night skies, though its practitioners serve wherever celestial guidance is needed.',
				keyFeatures: [
					'Level 3 Starry Form: You gain a starry form that provides benefits like guided bolts or enhanced healing',
					'Level 3 Cosmic Omen: You can roll a die to grant a bonus or penalty to another creature’s d20 roll',
					'Level 3 Full of Stars: You take reduced damage and have advantage on Concentration checks while in Starry Form',
				],
			},
		}),
		fighter_arcane_archer: await db.createSubclass({
			id: 'subclass-fighter-arcane-archer',
			name: 'Arcane Archer',
			description: 'Arcane Archer subclass.',
			playstyle:
            'Ranged fighter with magical shots; good at staying at distance and debuffing enemies.',
			classId: classes.fighter.id,
			additionalProperties: {
                alabastriaContext:
                    "The Arcane Archer archetype developed during Kuriguer's Magic Surge, when rangers needed to combine martial skill with magic to hunt magical creatures. These fighters learned to enchant their arrows with arcane power, creating magical shots that could strike from distance. This tradition has found particular use in regions where magical threats require enchanted weapons, though its practitioners serve wherever ranged combat meets magic.",
				keyFeatures: [
					'Level 3 Arcane Archer Lore: You learn a cantrip and gain proficiency in either Arcana or Nature',
					'Level 3 Arcane Shot: You learn two Arcane Shot options that add magical effects to your arrow attacks',
					'Level 3 Magic Arrow: Your nonmagical arrows count as magical for overcoming resistance',
				],
			},
		}),
		fighter_cavalier: await db.createSubclass({
			id: 'subclass-fighter-cavalier',
			name: 'Cavalier',
			description: 'Cavalier subclass.',
			playstyle:
            'Tanky frontline with control; excels at protecting allies and charging into the fray.',
			classId: classes.fighter.id,
			additionalProperties: {
                alabastriaContext:
                    'The Cavalier archetype emerged during the Kingdom Formation period, when mounted warriors were needed to protect lords and lead cavalry charges. These stalwart defenders learned to excel at mounted combat and protecting allies. This tradition has found particular use in regions with extensive plains suitable for cavalry, though its practitioners serve wherever mounted combat is valued.',
				keyFeatures: [
					'Level 3 Born to the Saddle: You have advantage on saves to avoid falling off your mount and can mount or dismount as a bonus action',
					'Level 3 Unwavering Mark: When you hit a creature with a melee attack, it has disadvantage attacking anyone but you',
					'Level 3 Hold the Line: Creatures provoke opportunity attacks when they move within your reach',
				],
			},
		}),
		fighter_echo_knight: await db.createSubclass({
			id: 'subclass-fighter-echo-knight',
			name: 'Echo Knight',
			description: 'Echo Knight subclass.',
			playstyle:
            'Versatile melee fighter; uses time echoes to attack unpredictably and control the battlefield.',
			classId: classes.fighter.id,
			additionalProperties: {
                alabastriaContext:
                    "The Echo Knight archetype developed from encounters with temporal magic during Kuriguer's Magic Surge. Warriors discovered they could harness echoing strands of time to create spectral duplicates in battle, striking from multiple positions. This tradition has found particular use in regions touched by temporal anomalies, though its practitioners serve wherever time and combat intersect.",
				keyFeatures: [
					'Level 3 Manifest Echo: You can create an echo of yourself in an unoccupied space that you can attack from',
					'Level 3 Unleash Incarnation: You can make an additional attack from your echo’s position',
					'Level 3 Echo Avatar: You can see through your echo’s eyes and hear through its ears',
				],
			},
		}),
		fighter_psi_warrior: await db.createSubclass({
			id: 'subclass-fighter-psi-warrior',
			name: 'Psi Warrior',
			description: 'Psi Warrior subclass.',
			playstyle:
            'Fighter with psionics; uses mental energy to enhance attacks and defend against foes.',
			classId: classes.fighter.id,
			additionalProperties: {
                alabastriaContext:
                    'The Psi Warrior archetype emerged during the Modern Era, when fighters discovered they could empower their strikes with psychic energy. These disciplined soldiers learned to use mind over matter powers to enhance their combat effectiveness. This tradition has found particular use in regions with psionic traditions, though its practitioners serve wherever mental discipline meets martial prowess.',
				keyFeatures: [
					'Level 3 Psi Energy Blade: You can channel psychic energy to deal force damage with your attacks',
					'Level 3 Psychic Shove: You can push a creature or knock it prone using psychic energy',
					'Level 3 Telekinetic Strike: You can infuse your attacks with psychic power to deal extra force damage',
				],
			},
		}),
		fighter_rune_knight: await db.createSubclass({
			id: 'subclass-fighter-rune-knight',
			name: 'Rune Knight',
			description: 'Rune Knight subclass.',
			playstyle:
            'Brawler with magic enhancements; specializes in empowered strikes and battlefield strength.',
			classId: classes.fighter.id,
			additionalProperties: {
                alabastriaContext:
                    'The Rune Knight archetype developed during the early settlements, when fighters needed to enhance their equipment with magical power. These warriors learned to etch magical runes into their armor and weapons, tapping into giant power and earth magic. This tradition has found particular use in regions with active forges and runic traditions, though its practitioners serve wherever magical enhancement meets combat.',
				keyFeatures: [
					'Level 3 Rune Carver: You learn to inscribe runes on your gear that grant magical powers',
					"Level 3 Giant's Might: You can magically grow in size, gaining advantage on Strength checks and extra damage",
					'Level 3 Runic Shield: You can use your reaction to impose disadvantage on an attack roll against you or an ally',
				],
			},
		}),
		fighter_samurai: await db.createSubclass({
			id: 'subclass-fighter-samurai',
			name: 'Samurai',
			description: 'Samurai subclass.',
			playstyle:
            'Offensive fighter; combines strong melee strikes with self-focus for enhanced combat effectiveness.',
			classId: classes.fighter.id,
			additionalProperties: {
                alabastriaContext:
                    'The Samurai archetype emerged during the Kingdom Formation period, when warriors of honor were needed to serve lords with unyielding spirit. These legendary fighters learned to focus their will to endure and attack fiercely, combining discipline with combat effectiveness. This tradition has found particular use in militarized societies, though its practitioners serve wherever honor and combat intersect.',
				keyFeatures: [
					'Level 3 Fighting Spirit: You gain temporary hit points and advantage on all attack rolls until the end of the turn',
					'Level 3 Elegant Courtier: You gain proficiency in Wisdom saving throws and add your Wisdom modifier to Persuasion checks',
					'Level 3 Rapid Strike: When you take the Attack action, you can forgo advantage to make an additional attack',
				],
			},
		}),
		monk_way_of_the_astral_self: await db.createSubclass({
			id: 'subclass-monk-way-of-the-astral-self',
			name: 'Way of the Astral Self',
			description: 'Way of the Astral Self subclass.',
			playstyle:
            'Melee fighter with reach; can manifest astral arms for extra reach and control.',
			classId: classes.monk.id,
			additionalProperties: {
                alabastriaContext:
                    'The Way of the Astral Self developed during the Modern Era, when monks discovered they could commune with their inner spirits and the astral plane. These monks learned to manifest astral arms for extra reach and control. This tradition has found particular use in regions with strong spiritual traditions, though its practitioners serve wherever inner strength meets outer expression.',
				keyFeatures: [
					'Level 3 Arms of the Astral Self: You can summon spectral arms that extend your reach and deal force damage',
					'Level 3 Visage of the Astral Self: You can summon an astral visage that gives you advantage on Intimidation and Insight checks',
					'Level 3 Body of the Astral Self: Your entire body becomes astral, granting additional AC and other benefits',
				],
			},
		}),
		monk_way_of_the_ascendant_dragon: await db.createSubclass({
			id: 'subclass-monk-way-of-the-ascendant-dragon',
			name: 'Way of the Ascendant Dragon',
			description: 'Way of the Ascendant Dragon subclass.',
			playstyle:
            'Melee with elemental damage; augments strikes with dragon breaths and scales.',
			classId: classes.monk.id,
			additionalProperties: {
                alabastriaContext:
                    'The Way of the Ascendant Dragon emerged from legends of draconic power that may have existed before The Bringing. Monks who studied these legends learned to channel draconic might into their strikes, augmenting attacks with dragon breaths and scales. This tradition has found particular use in regions with draconic legends, though its practitioners serve wherever draconic power needs channeling.',
				keyFeatures: [
					"Level 3 Dragon's Breath: You can channel elemental energy into your unarmed strikes and breathe destructive energy",
					'Level 3 Draconic Presence: You can channel draconic energy to frighten or awe creatures around you',
					'Level 3 Breath of the Dragon: Your unarmed strikes can deal elemental damage of your chosen type',
				],
			},
		}),
		monk_way_of_the_drunken_master: await db.createSubclass({
			id: 'subclass-monk-way-of-the-drunken-master',
			name: 'Way of the Drunken Master',
			description: 'Way of the Drunken Master subclass.',
			playstyle:
            'Chaotic fighter with mobility; dodges and strikes unpredictably, using agility and unpredictability.',
			classId: classes.monk.id,
			additionalProperties: {
                alabastriaContext:
                    'The Way of the Drunken Master developed during the Cultural Renaissance, when monks discovered that unpredictable movements could confound foes. These light-footed fighters learned to dodge and strike unpredictably, using agility and chaos. This tradition has found particular use in urban centers where taverns and festivals provide training grounds, though its practitioners serve wherever unpredictability meets martial skill.',
				keyFeatures: [
					'Level 3 Drunken Technique: You gain the ability to move between attacks without provoking opportunity attacks',
					'Level 3 Tipsy Sway: You can redirect missed attacks against you to another creature',
					'Level 3 Intoxicated Frenzy: When you use Flurry of Blows, you can make an additional attack for 1 ki point',
				],
			},
		}),
		monk_way_of_the_kensei: await db.createSubclass({
			id: 'subclass-monk-way-of-the-kensei',
			name: 'Way of the Kensei',
			description: 'Way of the Kensei subclass.',
			playstyle:
            'Balanced fighter; proficient with chosen weapons, combining monk martial arts and weapon mastery.',
			classId: classes.monk.id,
			additionalProperties: {
                alabastriaContext:
                    'The Way of the Kensei emerged during the Kingdom Formation period, when monks needed to perfect weapon arts alongside unarmed combat. These disciplined fighters learned to combine monk martial arts with weapon mastery. This tradition has found particular use in regions with strong martial traditions, though its practitioners serve wherever weapon and fist need to work together.',
				keyFeatures: [
					'Level 3 Path of the Kensei: You gain proficiency with chosen weapons which become monk weapons',
					'Level 3 Agile Parry: When you make an unarmed strike while holding a kensei weapon, you gain a bonus to AC',
					'Level 3 One with the Blade: You can spend ki points to empower your kensei weapon attacks',
				],
			},
		}),
		monk_way_of_the_long_death: await db.createSubclass({
			id: 'subclass-monk-way-of-the-long-death',
			name: 'Way of the Long Death',
			description: 'Way of the Long Death subclass.',
			playstyle:
            'Fear-based martial; can gain lifesteal and frighten enemies with terror.',
			classId: classes.monk.id,
			additionalProperties: {
                alabastriaContext:
                    'The Way of the Long Death developed from the need to understand mortality after The Bringing, when death was ever-present. Monks who meditated on mortality learned to channel death energy and frighten foes with terror. This tradition has found particular use in regions touched by death and loss, though its practitioners serve wherever mortality needs understanding.',
				keyFeatures: [
					'Level 3 Touch of Death: You gain temporary hit points when you reduce a creature within 5 feet to 0 hit points',
					'Level 3 Hour of Reaping: You can project an aura of terror that frightens creatures around you',
					'Level 3 Mastery of Death: You can spend ki points to avoid falling to 0 hit points',
				],
			},
		}),
		monk_way_of_mercy: await db.createSubclass({
			id: 'subclass-monk-way-of-mercy',
			name: 'Way of Mercy',
			description: 'Way of Mercy subclass.',
			playstyle:
            'Healer and fighter; mixes healing touch with lethal strikes to deal pain or mend wounds.',
			classId: classes.monk.id,
			additionalProperties: {
                alabastriaContext:
                    'The Way of Mercy emerged during the early settlements, when healers were needed but also had to defend themselves. These traveling healers learned to mix healing touch with lethal strikes, dealing pain or mending wounds as needed. This tradition has found particular use in dangerous regions where healers must also fight, though its practitioners serve wherever mercy and combat intersect.',
				keyFeatures: [
					'Level 3 Hand of Healing: You can heal a creature by spending ki points when you hit with an unarmed strike',
					"Level 3 Physician's Touch: Your unarmed strikes can inflict the poisoned condition or deal necrotic damage",
					'Level 3 Hand of Ultimate Mercy: You can revive a dead creature by spending ki points and taking a penalty',
				],
			},
		}),
		monk_way_of_the_sun_soul: await db.createSubclass({
			id: 'subclass-monk-way-of-the-sun-soul',
			name: 'Way of the Sun Soul',
			description: 'Way of the Sun Soul subclass.',
			playstyle:
            'Ranged radiant fighter; throws bolts of light in addition to melee strikes.',
			classId: classes.monk.id,
			additionalProperties: {
                alabastriaContext:
                    'The Way of the Sun Soul developed during the early cycles, when monks discovered they could channel radiance into energy. These illuminated fighters learned to strike with beams of light in addition to melee attacks. This tradition has found particular use in regions with strong solar or celestial traditions, though its practitioners serve wherever radiance meets martial skill.',
				keyFeatures: [
					'Level 3 Radiant Sun Bolt: You can hurl bolts of radiant energy as ranged spell attacks',
					'Level 3 Searing Arc Strike: You can spend ki points to make your radiant sun bolts explode on impact',
					'Level 3 Searing Sunburst: You can create an explosion of radiant energy that blinds creatures',
				],
			},
		}),
		paladin_oath_of_conquest: await db.createSubclass({
			id: 'subclass-paladin-oath-of-conquest',
			name: 'Oath of Conquest',
			description: 'Oath of Conquest subclass.',
			playstyle:
            'Offensive tank; controls the battlefield with fear effects and punishing blows.',
			classId: classes.paladin.id,
			additionalProperties: {
                alabastriaContext:
                    'The Oath of Conquest emerged during the First Continental War, when paladins were needed to impose order through strength and fear. These paladins learned to serve conquerors and tyrants, controlling the battlefield with fear effects and punishing blows. This tradition has found particular use in militarized societies, though its practitioners serve wherever conquest needs divine champions.',
				keyFeatures: [
					'Level 3 Conquering Presence: You can channel divinity to frighten creatures of your choice within 30 feet',
					'Level 3 Guided Strike: You can channel divinity to add +10 to an attack roll',
					'Level 3 Scornful Rebuke: When you take damage, the attacker takes psychic damage if they can see you',
				],
			},
		}),
		paladin_oath_of_glory: await db.createSubclass({
			id: 'subclass-paladin-oath-of-glory',
			name: 'Oath of Glory',
			description: 'Oath of Glory subclass.',
			playstyle:
            'Mobile damage-dealer; boosts allies and fights like a champion on the front lines.',
			classId: classes.paladin.id,
			additionalProperties: {
                alabastriaContext:
                    'The Oath of Glory developed during the Cultural Renaissance, when paladins were inspired by heroic tales to strive for legendary feats. These champions learned to inspire allies with courage while fighting on the front lines. This tradition has found particular use in regions where heroism is celebrated, though its practitioners serve wherever glory needs champions.',
				keyFeatures: [
					'Level 3 Inspiring Smite: When you use Divine Smite, you can grant temporary hit points to allies',
					'Level 3 Peerless Athlete: You can channel divinity to gain advantage on Strength and Dexterity checks',
					'Level 3 Glorious Defense: When you are hit by an attack, you can add +5 to your AC as a reaction',
				],
			},
		}),
		paladin_oath_of_redemption: await db.createSubclass({
			id: 'subclass-paladin-oath-of-redemption',
			name: 'Oath of Redemption',
			description: 'Oath of Redemption subclass.',
			playstyle:
            'Defensive support; focuses on preventing damage and converting enemies away from violence.',
			classId: classes.paladin.id,
			additionalProperties: {
                alabastriaContext:
                    'The Oath of Redemption emerged during the Modern Era, when paladins sought to prevent violence through redemption rather than destruction. These pacifists learned to convert enemies away from violence and prevent damage through protective means. This tradition has found particular use in regions with ongoing conflicts, though its practitioners serve wherever peace needs champions.',
				keyFeatures: [
					'Level 3 Emissary of Peace: You can channel divinity to gain a +5 bonus to Persuasion checks',
					'Level 3 Rebuke the Violent: You can channel divinity to make an attacking creature take radiant damage',
					'Level 3 Protective Spirit: You regain hit points at the start of your turn if you have less than half your maximum',
				],
			},
		}),
		paladin_oath_of_the_watchers: await db.createSubclass({
			id: 'subclass-paladin-oath-of-the-watchers',
			name: 'Oath of the Watchers',
			description: 'Oath of the Watchers subclass.',
			playstyle:
            'Anti-magic specialist; vigilant defender against supernatural and extraplanar enemies.',
			classId: classes.paladin.id,
			additionalProperties: {
                alabastriaContext:
                    'The Oath of the Watchers developed during the Modern Era, when extraplanar threats began appearing more frequently. These guardians learned to protect borders from otherworldly invasion, becoming vigilant defenders against supernatural enemies. This tradition has found particular use in regions with planar rifts or magical anomalies, though its practitioners serve wherever extraplanar threats need guardians.',
				keyFeatures: [
					"Level 3 Watcher's Will: You can channel divinity to give allies advantage on mental saving throws",
					'Level 3 Vigilant Rebuke: When a creature you can see fails a saving throw, you can use your reaction to deal psychic damage',
					'Level 3 Aura of the Sentinel: You and allies within 10 feet gain a bonus to initiative',
				],
			},
		}),
		ranger_drakewarden: await db.createSubclass({
			id: 'subclass-ranger-drakewarden',
			name: 'Drakewarden',
			description: 'Drakewarden subclass.',
			playstyle:
            'Ranged fighter; gains a drake companion and delivers fiery attacks.',
			classId: classes.ranger.id,
			additionalProperties: {
                alabastriaContext:
                    'The Drakewarden archetype developed from legends of draconic bonds that may have existed before The Bringing. Rangers discovered they could form bonds with draconic companions and channel draconic energy to empower their arrows. This tradition has found particular use in regions with draconic legends or high peaks, though its practitioners serve wherever draconic power needs rangers.',
				keyFeatures: [
					'Level 3 Drake Companion: You magically summon a drake that fights alongside you',
					'Level 3 Draconic Might: Your drake companion gains abilities based on its elemental type',
					'Level 3 Draconic Crescent: When you cast a spell that deals damage, you can change its damage type to match your drake’s',
				],
			},
		}),
		ranger_fey_wanderer: await db.createSubclass({
			id: 'subclass-ranger-fey-wanderer',
			name: 'Fey Wanderer',
			description: 'Fey Wanderer subclass.',
			playstyle:
            'Support and control; uses illusions and charm on enemies, blending wilderness survival.',
			classId: classes.ranger.id,
			additionalProperties: {
                alabastriaContext:
                    "The Fey Wanderer archetype emerged during Kuriguer's Magic Surge, when rangers discovered connections to the feywild through magical anomalies. These enchanted rangers learned to gain fey abilities and use illusions to charm enemies. This tradition has found particular use in regions touched by fey magic, though its practitioners serve wherever fey power needs rangers.",
				keyFeatures: [
					'Level 3 Additional March: You learn the Misty Step spell and can cast it without a spell slot once per long rest',
					'Level 3 Dreadful Glare: You can frighten a creature when you deal damage to it with a weapon attack',
					'Level 3 Beguiling Twist: When a creature succeeds on a saving throw against being charmed or frightened, you can target a different creature',
				],
			},
		}),
		ranger_horizon_walker: await db.createSubclass({
			id: 'subclass-ranger-horizon-walker',
			name: 'Horizon Walker',
			description: 'Horizon Walker subclass.',
			playstyle:
            'Teleporting ranger; moves between planes and strikes magically to hunt extraplanar threats.',
			classId: classes.ranger.id,
			additionalProperties: {
                alabastriaContext:
                    'The Horizon Walker archetype developed during the Modern Era, when planar rifts began appearing more frequently. These masters of the Astral Plane learned to patrol world borders and step between planes, hunting extraplanar threats. This tradition has found particular use in regions with planar anomalies, though its practitioners serve wherever extraplanar threats need hunters.',
				keyFeatures: [
					'Level 3 Detect Portal: You can detect the location of planar portals within 1 mile',
					'Level 3 Ethereal Step: You can cast Etherealness once per short rest without using a spell slot',
					'Level 3 Step the Planes: You can teleport up to 10 feet before making an attack',
				],
			},
		}),
		ranger_monster_slayer: await db.createSubclass({
			id: 'subclass-ranger-monster-slayer',
			name: 'Monster Slayer',
			description: 'Monster Slayer subclass.',
			playstyle:
            'Focused damage; excels at single-target damage against supernatural creatures.',
			classId: classes.ranger.id,
			additionalProperties: {
                alabastriaContext:
                    'The Monster Slayer archetype emerged during the early cycles, when rangers needed supernatural senses to track and overcome monstrous foes. These hunters of creatures learned to specialize in single-target damage against supernatural enemies. This tradition has found particular use in regions with dangerous monsters, though its practitioners serve wherever monstrous threats need hunters.',
				keyFeatures: [
					"Level 3 Slayer's Eye: When you hit a creature with a weapon attack, you can mark it for extra damage",
					"Level 3 Slayer's Prey: You can focus on a creature, gaining bonus damage and tracking abilities against it",
					'Level 3 Supernatural Defense: You gain advantage on saving throws against the marked creature’s abilities',
				],
			},
		}),
		ranger_swarmkeeper: await db.createSubclass({
			id: 'subclass-ranger-swarmkeeper',
			name: 'Swarmkeeper',
			description: 'Swarmkeeper subclass.',
			playstyle:
            'Control ranger; uses summoned swarms to hinder and damage enemies while moving.',
			classId: classes.ranger.id,
			additionalProperties: {
                alabastriaContext:
                    "The Swarmkeeper archetype developed during the initial settlements, when rangers discovered they could form connections with swarms of nature. These rangers learned to command insects or vermin to harass enemies while moving. This tradition has found particular use in regions with extensive insect or vermin populations, though its practitioners serve wherever nature's swarms need rangers.",
				keyFeatures: [
					'Level 3 Gathered Swarm: A swarm of fey spirits surrounds you and can damage foes or move them when you hit',
					'Level 3 Writhing Tide: You can use the swarm to move yourself without provoking opportunity attacks',
					"Level 3 Swarmkeeper's Fury: When you miss with an attack, your swarm can still deal damage",
				],
			},
		}),
		rogue_inquisitive: await db.createSubclass({
			id: 'subclass-rogue-inquisitive',
			name: 'Inquisitive',
			description: 'Inquisitive subclass.',
			playstyle:
            'Detective rogue; excels at noticing hidden things and countering deception.',
			classId: classes.rogue.id,
			additionalProperties: {
                alabastriaContext:
                    'The Inquisitive archetype developed during the Modern Era, when detectives and spies were needed to uncover secrets in complex political landscapes. These rogues learned to seek out secrets and track lies with acute perception. This tradition has found particular use in regions with complex politics or legal systems, though its practitioners serve wherever secrets need uncovering.',
				keyFeatures: [
					'Level 3 Ear for Deceit: You can add your Wisdom modifier to Insight checks and have a minimum roll of 8',
					'Level 3 Eye for Detail: You can use a bonus action to make a Perception or Investigation check',
					'Level 3 Unerring Eye: You can use an action to sense illusions and shapeshifters within 30 feet',
				],
			},
		}),
		rogue_mastermind: await db.createSubclass({
			id: 'subclass-rogue-mastermind',
			name: 'Mastermind',
			description: 'Mastermind subclass.',
			playstyle:
            'Leader rogue; focuses on allies with cunning action, support, and manipulation.',
			classId: classes.rogue.id,
			additionalProperties: {
                alabastriaContext:
                    'The Mastermind archetype emerged during the complex political landscape of the Modern Era, when criminal strategists were needed to manipulate others and understand tactics. These rogues learned to focus on allies with cunning action, support, and manipulation. This tradition has found particular use in regions with complex politics or criminal organizations, though its practitioners serve wherever strategy and manipulation are needed.',
				keyFeatures: [
					'Level 3 Master of Intrigue: You gain proficiency with disguise and forgery kits and can mimic speech patterns',
					'Level 3 Master of Tactics: You can use the Help action as a bonus action and at a range of 30 feet',
					'Level 3 Soul of Deceit: Your thoughts can’t be read and you can present false thoughts to mind readers',
				],
			},
		}),
		rogue_phantom: await db.createSubclass({
			id: 'subclass-rogue-phantom',
			name: 'Phantom',
			description: 'Phantom subclass.',
			playstyle:
            'Stealthy dread; siphons off damage and uses ghostly powers to confuse enemies.',
			classId: classes.rogue.id,
			additionalProperties: {
                alabastriaContext:
                    'The Phantom archetype developed from the need to understand death after The Bringing, when countless souls were lost. Rogues discovered they could blur the lines between life and death, channeling spirits to deceive and terrify. This tradition has found particular use in regions touched by death and loss, though its practitioners serve wherever spirits need channeling.',
				keyFeatures: [
					'Level 3 Wails from the Grave: When you use Sneak Attack, you can deal half the damage to another creature within 30 feet',
					'Level 3 Tokens of the Departed: You can collect tokens from the dead to gain benefits like advantage on death saving throws',
					'Level 3 Ghost Walk: You can become partially ethereal, gaining flight and the ability to move through creatures',
				],
			},
		}),
		rogue_scout: await db.createSubclass({
			id: 'subclass-rogue-scout',
			name: 'Scout',
			description: 'Scout subclass.',
			playstyle:
            'Mobile skirmisher; uses hit-and-run tactics and quick strikes.',
			classId: classes.rogue.id,
			additionalProperties: {
                alabastriaContext:
                    'The Scout archetype emerged during the initial settlements, when rogues needed wilderness expertise to survive in untamed lands. These patrollers learned to dodge effortlessly and strike quickly from cover, using hit-and-run tactics. This tradition has found particular use in wild regions, though its practitioners serve wherever wilderness expertise meets roguish skills.',
				keyFeatures: [
					'Level 3 Skirmisher: When an enemy ends their turn within 5 feet, you can move half your speed without provoking opportunity attacks',
					'Level 3 Survivalist: You gain proficiency in Nature and Survival, and expertise if already proficient',
					'Level 3 Sudden Strike: You can make an additional attack as a bonus action if you haven’t used your bonus action to attack',
				],
			},
		}),
		rogue_soulknife: await db.createSubclass({
			id: 'subclass-rogue-soulknife',
			name: 'Soulknife',
			description: 'Soulknife subclass.',
			playstyle:
            'Psionic fighter; uses telepathic blades and psychic skills for silent kills.',
			classId: classes.rogue.id,
			additionalProperties: {
                alabastriaContext:
                    'The Soulknife archetype developed during the Modern Era, when rogues discovered they could create blades of pure mind through psychic energy. These mystic assassins learned to use telepathic blades and psychic skills for silent kills. This tradition has found particular use in regions with psionic traditions, though its practitioners serve wherever psychic power meets assassination.',
				keyFeatures: [
					'Level 3 Psychic Blades: You can manifest psychic blades that deal psychic damage and leave no trace',
					'Level 3 Psychic Whispers: You can telepathically communicate with creatures you can see within a distance',
					'Level 3 Soul Knife: Your psychic blades gain additional properties and can be thrown with a bonus action attack',
				],
			},
		}),
		rogue_swashbuckler: await db.createSubclass({
			id: 'subclass-rogue-swashbuckler',
			name: 'Swashbuckler',
			description: 'Swashbuckler subclass.',
			playstyle:
            'Agile front rogue; focuses on single combat with flair and mobility.',
			classId: classes.rogue.id,
			additionalProperties: {
                alabastriaContext:
                    'The Swashbuckler archetype emerged during the Great Trade Expansion, when charismatic duelists were needed to protect trade ships and coastal settlements. These rogues learned to blend panache with swordplay, charming allies and foes alike while focusing on single combat. This tradition has found particular use in coastal regions, though its practitioners serve wherever charisma meets swordplay.',
				keyFeatures: [
					'Level 3 Fancy Footwork: You don’t provoke opportunity attacks from creatures you have made a melee attack against',
					'Level 3 Rakish Audacity: You can add your Charisma modifier to your initiative and use Sneak Attack in one-on-one combat',
					'Level 3 Panache: You can charm or taunt a creature into dueling you with a Persuasion or Deception check',
				],
			},
		}),
		sorcerer_aberrant_mind: await db.createSubclass({
			id: 'subclass-sorcerer-aberrant-mind',
			name: 'Aberrant Mind',
			description: 'Aberrant Mind subclass.',
			playstyle:
            'Psionic caster; blends sorcery with mind-bending powers to confuse foes.',
			classId: classes.sorcerer.id,
			additionalProperties: {
                alabastriaContext:
                    'The Aberrant Mind origin developed during the Modern Era, when sorcerers discovered they were haunted by psionic powers from strange cosmic energies. These sorcerers learned to blend sorcery with mind-bending powers to confuse foes. This tradition has found particular use in regions touched by cosmic or psionic forces, though its practitioners serve wherever aberrant power manifests.',
				keyFeatures: [
					'Level 3 Psionic Spells: You learn additional spells that can be cast with sorcery points instead of spell slots',
					'Level 3 Mind Thrust: You can deal psychic damage to a creature and possibly stun it',
					'Level 3 Bend Mind: You can cast spells with subtle metamagic without spending sorcery points',
				],
			},
		}),
		sorcerer_clockwork_soul: await db.createSubclass({
			id: 'subclass-sorcerer-clockwork-soul',
			name: 'Clockwork Soul',
			description: 'Clockwork Soul subclass.',
			playstyle:
            'Support mage; grants stability to allies and offense through order-infused spells.',
			classId: classes.sorcerer.id,
			additionalProperties: {
                alabastriaContext:
                    'The Clockwork Soul origin emerged during the Modern Era, when sorcerers discovered they embodied cosmic order. These sorcerers learned to draw upon mechanical precision and cosmic balance, granting stability to allies. This tradition has found particular use in regions with strong traditions of order and precision, though its practitioners serve wherever cosmic balance needs champions.',
				keyFeatures: [
					'Level 3 Clockwork Magic: You learn additional spells from the clockwork spell list that can be swapped',
					'Level 3 Restore Balance: You can negate advantage or disadvantage on a creature’s roll within 60 feet',
					'Level 3 Trance of Order: You can enter a state where attack rolls against you can’t be advantaged and you treat d20 rolls of 9 or lower as 10',
				],
			},
		}),
		sorcerer_lunar_sorcery: await db.createSubclass({
			id: 'subclass-sorcerer-lunar-sorcery',
			name: 'Lunar Sorcery',
			description: 'Lunar Sorcery subclass.',
			playstyle:
            'Mystical caster; boosts spells by harnessing lunar phases.',
			classId: classes.sorcerer.id,
			additionalProperties: {
                alabastriaContext:
                    'The Lunar Sorcery origin developed during the early cycles, when sorcerers discovered they were attuned to the moon. These sorcerers learned to call forth moonlight to empower their magic, boosting spells by harnessing lunar phases. This tradition has found particular use in regions with strong lunar traditions, though its practitioners serve wherever lunar power manifests.',
				keyFeatures: [
					'Level 3 Moonfire: You can cast a guiding bolt-like spell that deals radiant damage and grants advantage',
					'Level 3 Lunar Magic: You gain additional spells based on the moon phase you choose each day',
					'Level 3 Diffusing Evasion: When you take damage, you can use your reaction to reduce it and teleport',
				],
			},
		}),
		sorcerer_shadow_magic: await db.createSubclass({
			id: 'subclass-sorcerer-shadow-magic',
			name: 'Shadow Magic',
			description: 'Shadow Magic subclass.',
			playstyle:
            'Stealth caster; uses darkness and necrotic spells for control.',
			classId: classes.sorcerer.id,
			additionalProperties: {
                alabastriaContext:
                    'The Shadow Magic origin emerged during the early cycles, when sorcerers discovered they were born under darkness. These sorcerers learned to wield shadows as their power source, using darkness and necrotic spells for control. This tradition has found particular use in regions touched by shadow or darkness, though its practitioners serve wherever shadow power manifests.',
				keyFeatures: [
					'Level 3 Eyes of the Dark: You can see in magical darkness and create darkness that you can see through',
					'Level 3 Strength of the Grave: When reduced to 0 hit points, you can make a Charisma save to drop to 1 instead',
					'Level 3 Shadow Walk: You can step into shadows and teleport to another shadow within 120 feet',
				],
			},
		}),
		sorcerer_storm_sorcery: await db.createSubclass({
			id: 'subclass-sorcerer-storm-sorcery',
			name: 'Storm Sorcery',
			description: 'Storm Sorcery subclass.',
			playstyle:
            'Elemental caster; specializes in lightning and thunder magic.',
			classId: classes.sorcerer.id,
			additionalProperties: {
                alabastriaContext:
                    'The Storm Sorcery origin developed during the harsh early cycles, when sorcerers discovered echoes of the elemental planes within them. These sorcerers learned to draw on storm and sky to cast thunderous spells, specializing in lightning and thunder magic. This tradition has found particular use in regions with strong storms or high peaks, though its practitioners serve wherever storm power manifests.',
				keyFeatures: [
					'Level 3 Tempestuous Magic: When you cast a spell of 1st level or higher, you can fly 10 feet without provoking opportunity attacks',
					'Level 3 Heart of the Storm: You gain resistance to lightning and thunder damage, and deal damage of that type when you cast spells',
					"Level 3 Storm's Fury: When you are hit by a melee attack, you can use your reaction to deal lightning damage and push the attacker",
				],
			},
		}),
		warlock_the_celestial: await db.createSubclass({
			id: 'subclass-warlock-the-celestial',
			name: 'The Celestial',
			description: 'The Celestial subclass.',
			playstyle:
            'Healer-support caster; uses healing light to aid allies while also dealing radiant damage.',
			classId: classes.warlock.id,
			additionalProperties: {
                alabastriaContext:
                    'The Celestial patron developed during the early cycles, when warlocks discovered they could serve patrons from the Upper Planes. These warlocks learned to gain healing and light magic, using healing light to aid allies while dealing radiant damage. This tradition has found particular use in regions with strong celestial traditions, though its practitioners serve wherever celestial power is accessible.',
				keyFeatures: [
					'Level 3 Bonus Cantrips: You learn the Light and Sacred Flame cantrips',
					'Level 3 Healing Light: You gain a pool of d6s to heal creatures as a bonus action',
					'Level 3 Radiant Soul: You gain resistance to radiant damage and add your Charisma modifier to radiant or fire damage spells',
				],
			},
		}),
		warlock_the_fathomless: await db.createSubclass({
			id: 'subclass-warlock-the-fathomless',
			name: 'The Fathomless',
			description: 'The Fathomless subclass.',
			playstyle:
            'Control caster; manipulates water and tentacles to bind enemies.',
			classId: classes.warlock.id,
			additionalProperties: {
                alabastriaContext:
                    'The Fathomless patron emerged during the early settlements, when warlocks discovered entities of the deep seas or underground oceans. These warlocks learned to gain mysterious sea powers, manipulating water and tentacles to bind enemies. This tradition has found particular use in coastal or underground regions, though its practitioners serve wherever sea power is accessible.',
				keyFeatures: [
					'Level 3 Tentacle of the Deeps: You can summon a spectral tentacle that damages and reduces speed of a creature',
					'Level 3 Gift of the Sea: You gain a swimming speed, can breathe underwater, and have resistance to cold damage',
					'Level 3 Guardian Coil: Your tentacle can reduce damage dealt to you or an ally',
				],
			},
		}),
		warlock_the_genie: await db.createSubclass({
			id: 'subclass-warlock-the-genie',
			name: 'The Genie',
			description: 'The Genie subclass.',
			playstyle:
            'Versatile caster; gains elemental spells and plane-travel abilities.',
			classId: classes.warlock.id,
			additionalProperties: {
                alabastriaContext:
                    'The Genie patron developed during the early cycles, when warlocks discovered genie patrons from the Elemental Planes. These warlocks learned to gain elemental might and plane-travel abilities. This tradition has found particular use in regions with strong elemental connections, though its practitioners serve wherever genie power is accessible.',
				keyFeatures: [
					"Level 3 Genie's Vessel: You gain a vessel that can be used as a safe resting place and eventually for limited wishes",
					'Level 3 Elemental Gift: You gain resistance to a damage type based on your patron and can grant yourself a flying speed',
					'Level 3 Protective Benefaction: When you take damage, you can use your reaction to reduce it and teleport',
				],
			},
		}),
		warlock_the_hexblade: await db.createSubclass({
			id: 'subclass-warlock-the-hexblade',
			name: 'The Hexblade',
			description: 'The Hexblade subclass.',
			playstyle:
            'Hybrid fighter; strikes with cursed weapons and debuffs enemies.',
			classId: classes.warlock.id,
			additionalProperties: {
                alabastriaContext:
                    'The Hexblade patron emerged during the Modern Era, when warlocks discovered they could be bound to sentient weapons or curses. These warlocks learned to blend martial and magic by cursing their foes, striking with cursed weapons. This tradition has found particular use in regions with ancient ruins or cursed artifacts, though its practitioners serve wherever hexblade power is accessible.',
				keyFeatures: [
					'Level 3 Hex Warrior: You can use Charisma for attack and damage with one weapon, and that weapon becomes a pact weapon',
					"Level 3 Hexblade's Curse: You curse a creature to take extra damage, score critical hits on 19-20, and regain hit points when it dies",
					'Level 3 Accursed Specter: When you slay a humanoid, you can raise its spirit as a specter that fights for you',
				],
			},
		}),
		warlock_the_undead: await db.createSubclass({
			id: 'subclass-warlock-the-undead',
			name: 'The Undead',
			description: 'The Undead subclass.',
			playstyle:
            'Necromantic caster; raises undead and drains life with spells.',
			classId: classes.warlock.id,
			additionalProperties: {
                alabastriaContext:
                    'The Undead patron developed during the early cycles, when warlocks discovered they could make dark pacts with necromantic powers. These warlocks learned to gain control over deathly energies, raising undead and draining life with spells. This tradition has found particular use in regions touched by undeath, though its practitioners serve wherever necromantic power is accessible.',
				keyFeatures: [
					'Level 3 Form of Dread: You transform, gaining temporary hit points and the ability to frighten creatures you hit',
					'Level 3 Ghostly Gaze: You can see through solid objects within 30 feet for a short time',
					'Level 3 Defy Death: When you kill a creature, you regain hit points equal to your warlock level + Charisma modifier',
				],
			},
		}),
		warlock_the_undying: await db.createSubclass({
			id: 'subclass-warlock-the-undying',
			name: 'The Undying',
			description: 'The Undying subclass.',
			playstyle:
            'Durable caster; resists death effects and sustains life through arcane means.',
			classId: classes.warlock.id,
			additionalProperties: {
                alabastriaContext:
                    'The Undying patron emerged during the Modern Era, when warlocks discovered they could serve ageless beings who sought the secrets of immortality. These warlocks learned to resist death effects and sustain life through arcane means. This tradition has found particular use in regions with ancient traditions or elven communities, though its practitioners serve wherever immortality is sought.',
				keyFeatures: [
					'Level 3 Among the Dead: You have advantage on saving throws against disease and can stabilize a dying creature by touching them',
					'Level 3 Defy Death: When you succeed on a death saving throw, you regain 1 hit point',
					'Level 3 Undying Nature: You no longer need to eat, drink, or breathe, and you age slowly',
				],
			},
		}),
		wizard_school_of_abjuration: await db.createSubclass({
			id: 'subclass-wizard-school-of-abjuration',
			name: 'School of Abjuration',
			description: 'School of Abjuration subclass.',
			playstyle:
            'Defensive caster; excels at shields, protective wards, and dispelling enemy magic.',
			classId: classes.wizard.id,
			additionalProperties: {
                alabastriaContext:
                    'The School of Abjuration emerged during the First Continental War, when wizards needed to specialize in protective magic. These wizards learned to excel at shields, protective wards, and dispelling enemy magic, acting as magical guardians. This tradition has found particular use in regions with active warfare or valuable artifacts, though its practitioners serve wherever protection is needed.',
				keyFeatures: [
					'Level 3 Arcane Ward: You can create a ward of magic that absorbs damage for you',
					'Level 3 Projected Ward: You can use your Arcane Ward to absorb damage for creatures within 30 feet',
					'Level 3 Improved Abjuration: You have advantage on saving throws against spells when concentrating on an abjuration spell',
				],
			},
		}),
		wizard_school_of_bladesinging: await db.createSubclass({
			id: 'subclass-wizard-school-of-bladesinging',
			name: 'School of Bladesinging',
			description: 'School of Bladesinging subclass.',
			playstyle:
            'Melee caster; combines agility and sword spells for versatile combat.',
			classId: classes.wizard.id,
			additionalProperties: {
                alabastriaContext:
                    "The School of Bladesinging developed during Kuriguer's Magic Surge, when elven wizards discovered they could blend swordplay with spells. These wizards learned to perform martial dance with arcane precision, combining agility and sword spells. This tradition has found particular use in regions with strong elven traditions, though its practitioners serve wherever swordplay and magic intersect.",
				keyFeatures: [
					'Level 3 Training in War and Song: You gain proficiency with light armor and one melee weapon, and can perform a Bladesong',
					'Level 3 Bladesong: You enter a state that grants bonus to AC, walking speed, and advantage on Acrobatics checks',
					'Level 3 Extra Attack: You can attack twice when you take the Attack action',
				],
			},
		}),
		wizard_school_of_chronurgy: await db.createSubclass({
			id: 'subclass-wizard-school-of-chronurgy',
			name: 'School of Chronurgy',
			description: 'School of Chronurgy subclass.',
			playstyle:
            'Control caster; alters fate and manipulates time in battles.',
			classId: classes.wizard.id,
			additionalProperties: {
                alabastriaContext:
                    'The School of Chronurgy emerged during the Modern Era, when wizards discovered they could master time itself. These wizards learned to study the flow of time and bend it to their will, manipulating outcomes in battle. This tradition has found particular use in regions with temporal anomalies, though its practitioners serve wherever time manipulation is needed.',
				keyFeatures: [
					'Level 3 Chronal Shift: When you or a creature you see makes an attack roll, ability check, or saving throw, you can force a reroll',
					'Level 3 Momentary Stasis: You can target a creature to force a Constitution saving throw or be incapacitated until the end of your next turn',
					'Level 3 Convergent Future: You can choose to succeed on a failed saving throw or force an attack to hit, but gain exhaustion',
				],
			},
		}),
		wizard_school_of_conjuration: await db.createSubclass({
			id: 'subclass-wizard-school-of-conjuration',
			name: 'School of Conjuration',
			description: 'School of Conjuration subclass.',
			playstyle:
            'Versatile caster; summons allies or objects to adapt to situations.',
			classId: classes.wizard.id,
			additionalProperties: {
                alabastriaContext:
                    'The School of Conjuration developed during the Great Trade Expansion, when wizards needed to summon creatures and objects for quick solutions. These wizards learned to act as portals through the multiverse, adapting to situations through summoning. This tradition has found particular use in regions with active trade or exploration, though its practitioners serve wherever versatility through summoning is needed.',
				keyFeatures: [
					'Level 3 Minor Conjuration: You can create a nonmagical object in your hand that lasts for an hour',
					'Level 3 Benign Transposition: You can teleport yourself to an unoccupied space or swap places with a summoned creature',
					'Level 3 Focused Conjuration: Your concentration can’t be broken when you are concentrating on a conjuration spell',
				],
			},
		}),
		wizard_school_of_enchantment: await db.createSubclass({
			id: 'subclass-wizard-school-of-enchantment',
			name: 'School of Enchantment',
			description: 'School of Enchantment subclass.',
			playstyle:
            'Subterfuge caster; excels at charming enemies and controlling crowds.',
			classId: classes.wizard.id,
			additionalProperties: {
                alabastriaContext:
                    'The School of Enchantment emerged during the complex political landscape of the Modern Era, when wizards needed to weave charm and illusion into their spells. These wizards learned to sway minds and hearts, excelling at charming enemies and controlling crowds. This tradition has found particular use in regions with complex politics, though its practitioners serve wherever mind control is needed.',
				keyFeatures: [
					'Level 3 Hypnotic Gaze: You can hypnotize a creature within 5 feet, incapacitating and speed reducing to 0',
					'Level 3 Instinctive Charm: When a creature attacks you, you can use your reaction to make them attack another creature',
					'Level 3 Split Enchantment: When you cast an enchantment spell that targets only one creature, you can target a second creature',
				],
			},
		}),
		wizard_school_of_graviturgy: await db.createSubclass({
			id: 'subclass-wizard-school-of-graviturgy',
			name: 'School of Graviturgy',
			description: 'School of Graviturgy subclass.',
			playstyle:
            'Control caster; manipulates battlefield by warping gravity.',
			classId: classes.wizard.id,
			additionalProperties: {
                alabastriaContext:
                    'The School of Graviturgy developed during the Modern Era, when wizards discovered they could manipulate gravity itself. These wizards learned to make objects heavy or weightless, manipulating the battlefield by warping gravity. This tradition has found particular use in regions with strong magical institutions, though its practitioners serve wherever gravity manipulation is needed.',
				keyFeatures: [
					'Level 3 Adjust Density: You can change the weight of an object or creature, making it heavier or lighter',
					'Level 3 Gravity Well: When you cast a spell on a creature, you can move them 5 feet in any direction',
					'Level 3 Mighty Leap: You can cast jump on yourself at will and triple the distance',
				],
			},
		}),
		wizard_school_of_necromancy: await db.createSubclass({
			id: 'subclass-wizard-school-of-necromancy',
			name: 'School of Necromancy',
			description: 'School of Necromancy subclass.',
			playstyle:
            'Offensive caster; raises undead, drains life, and endures undeath.',
			classId: classes.wizard.id,
			additionalProperties: {
                alabastriaContext:
                    'The School of Necromancy emerged during the early cycles, when wizards needed to understand death after The Bringing. These wizards learned to commune with death, commanding undead or sapping life. This tradition has found particular use in regions touched by death and undeath, though its practitioners serve wherever necromantic power is needed, often working in secret due to its taboo nature.',
				keyFeatures: [
					'Level 3 Grim Harvest: When you kill a creature with a spell, you regain hit points equal to the spell’s level',
					'Level 3 Undead Thralls: Your undead creations gain additional hit points and bonus damage',
					'Level 3 Inured to Undeath: You gain resistance to necrotic damage and your hit point maximum can’t be reduced',
				],
			},
		}),
		wizard_order_of_scribes: await db.createSubclass({
			id: 'subclass-wizard-order-of-scribes',
			name: 'Order of Scribes',
			description: 'Order of Scribes subclass.',
			playstyle:
            'Flexible caster; any prepared spell can be their focus, adapting easily.',
			classId: classes.wizard.id,
			additionalProperties: {
                alabastriaContext:
                    'The Order of Scribes developed during the Great Trade Expansion, when wizards needed to preserve and organize knowledge from different realms. These scholars learned to inscribe spells into sentient spellbooks that guide them through magic. This tradition has found particular use in regions with grand libraries or magical academies, though its practitioners serve wherever knowledge organization is needed.',
				keyFeatures: [
					'Level 3 Wizardly Quill: You can magically create a quill that writes quickly and can erase magic writing',
					'Level 3 Awakened Spellbook: Your spellbook is sentient and can change the damage type of your spells',
					'Level 3 Manifest Mind: You can summon your spellbook’s mind as a Tiny spectral object that can cast spells for you',
				],
			},
		}),
		wizard_school_of_transmutation: await db.createSubclass({
			id: 'subclass-wizard-school-of-transmutation',
			name: 'School of Transmutation',
			description: 'School of Transmutation subclass.',
			playstyle:
            'Utility caster; changes the properties of matter and improves allies.',
			classId: classes.wizard.id,
			additionalProperties: {
                alabastriaContext:
                    'The School of Transmutation developed during the early settlements, when wizards needed to alter matter itself for survival and construction. These wizards learned to turn stone to mud or man to bird, changing the properties of matter. This tradition has found particular use in regions with active mining or alchemy, though its practitioners serve wherever matter alteration is needed.',
				keyFeatures: [
					'Level 3 Minor Alchemy: You can temporarily transform one material into another',
					"Level 3 Transmuter's Stone: You create a stone that can grant darkvision, speed, resistance, or other benefits",
					'Level 3 Shapechanger: You can cast polymorph on yourself once without using a spell slot',
				],
			},
		}),
		wizard_war_magic: await db.createSubclass({
			id: 'subclass-wizard-war-magic',
			name: 'School of War Magic',
			description: 'School of War Magic subclass.',
			playstyle:
            'Balanced combat mage; good at offense while defending against enemy attacks.',
			classId: classes.wizard.id,
			additionalProperties: {
                alabastriaContext:
                    'The School of War Magic emerged during the First Continental War, when wizards needed to blend spellcasting with martial prowess. These soldiers learned to guard arcane battlefields with lethal spells while defending against enemy attacks. This tradition has found particular use in regions with active warfare, though its practitioners serve wherever combat magic is needed.',
				keyFeatures: [
					'Level 3 Arcane Deflection: When you are hit by an attack or fail a saving throw, you can use your reaction to gain +2 AC or +4 to the save',
					'Level 3 Tactical Wit: You add your Intelligence modifier to your initiative',
					'Level 3 Power Surge: When you dispel magic or counter a spell, you gain a bonus to damage on your next spell',
				],
			},
		}),
	};
}