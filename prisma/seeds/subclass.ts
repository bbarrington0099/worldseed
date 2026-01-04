import { Prisma } from "@prismagen/client";
import * as db from "@lib/db-seed";
import { Classes, ClassFeatures } from "./index";

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
    druid_circle_of_the_land: SubclassPayload;
    druid_circle_of_the_moon: SubclassPayload;
    druid_circle_of_wildfire: SubclassPayload;
    fighter_champion: SubclassPayload;
    fighter_battle_master: SubclassPayload;
    fighter_eldritch_knight: SubclassPayload;
    monk_way_of_the_open_hand: SubclassPayload;
    monk_way_of_shadow: SubclassPayload;
    monk_way_of_the_four_elements: SubclassPayload;
    paladin_oath_of_devotion: SubclassPayload;
    paladin_oath_of_the_ancients: SubclassPayload;
    paladin_oath_of_vengeance: SubclassPayload;
    paladin_oath_of_the_crown: SubclassPayload;
    ranger_hunter: SubclassPayload;
    ranger_beast_master: SubclassPayload;
    ranger_gloom_stalker: SubclassPayload;
    rogue_thief: SubclassPayload;
    rogue_assassin: SubclassPayload;
    rogue_arcane_trickster: SubclassPayload;
    sorcerer_draconic_bloodline: SubclassPayload;
    sorcerer_wild_magic: SubclassPayload;
    sorcerer_divine_soul: SubclassPayload;
    warlock_the_fiend: SubclassPayload;
    warlock_the_archfey: SubclassPayload;
    warlock_the_great_old_one: SubclassPayload;
    wizard_school_of_evocation: SubclassPayload;
    wizard_school_of_illusion: SubclassPayload;
    wizard_school_of_divination: SubclassPayload;
    tactician_grandmaster: SubclassPayload;
    tactician_mentalist: SubclassPayload;
    tactician_scholar: SubclassPayload;
    tactician_war_mind: SubclassPayload;
}

interface SeedSubclassesParams {
    classes: Classes;
    classFeatures: ClassFeatures;
}
export async function seedSubclasses(params: SeedSubclassesParams): Promise<Subclasses> {
    const { classes, classFeatures } = params;
    return {
        artificer_alchemist: await db.createSubclass({
            id: "subclass-artificer-alchemist",
            name: "Alchemist",
            slug: "alchemist",
            description: "Masters of magical chemistry who brew potions and elixirs to heal allies and harm enemies.",
            alabastriaContext: "In Kuriguer's coastal towns, Gnome Alchemists work alongside Deep Gnomes from Maltman's underground laboratories, creating miraculous healing draughts and explosive compounds. Their workshops fill the air with colorful smoke and the promise of magical discovery.",
            playstyle: "Support-focused healer and utility caster. Perfect for players who want to be the party's medic while contributing unique magical solutions.",
            classId: classes.artificer.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.artificer_alchemist_experimental_elixir.id },
                    { id: classFeatures.artificer_alchemist_healing_word.id },
                    { id: classFeatures.artificer_alchemist_alchemical_savant.id },
                ]
            }
        }),
        artificer_armorer: await db.createSubclass({
            id: "subclass-artificer-armorer",
            name: "Armorer",
            slug: "armorer",
            description: "Creators of magical armor who turn their own body into a walking fortress or stealth suit.",
            alabastriaContext: "Warforged Armorers in Alatman's volcanic forges create living armor that adapts to any situation. Dwarven Armorers in Maltman craft traditional but magically enhanced suits, while Hobgoblin Armorers in Bulsania focus on military applications.",
            playstyle: "Tanky front-line fighter or stealthy infiltrator. Great for players who want to be heavily armored but still have magical utility.",
            classId: classes.artificer.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.artificer_armorer_arcane_armor.id },
                    { id: classFeatures.artificer_armorer_armor_model.id },
                    { id: classFeatures.artificer_armorer_extra_attack.id },
                ]
            }
        }),
        artificer_artillerist: await db.createSubclass({
            id: "subclass-artificer-artillerist",
            name: "Artillerist",
            slug: "artillerist",
            description: "Experts in explosive magic and ranged combat who create magical turrets and enhance projectiles.",
            alabastriaContext: "Rock Gnome Artillerists in Kuriguer's innovative coastal cities develop siege weapons that blend magic with mechanical precision. In Bulsania's icy fortresses, Hobgoblin Artillerists create devastating weapons to defend against the harsh frontier.",
            playstyle: "Ranged damage dealer with battlefield control. Ideal for players who enjoy tactical positioning and dealing consistent damage from afar.",
            classId: classes.artificer.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.artificer_artillerist_eldritch_cannons.id },
                    { id: classFeatures.artificer_artillerist_arcane_firearm.id },
                    { id: classFeatures.artificer_artillerist_explosive_cannon.id },
                ]
            }
        }),
        artificer_battle_smith: await db.createSubclass({
            id: "subclass-artificer-battle-smith",
            name: "Battle Smith",
            slug: "battle-smith",
            description: "Warrior-inventors who combine martial prowess with magical constructs, accompanied by a steel defender.",
            alabastriaContext: "Warforged Battle Smiths in Alatman understand construct creation intimately, crafting loyal steel defenders. Gnome Battle Smiths in Kuriguer combine inventive genius with combat necessity, while Human Battle Smiths in Skratonia adapt these techniques for city defense.",
            playstyle: "Versatile warrior with a loyal companion. Perfect for players who want to fight in melee while having a pet and magical utility.",
            classId: classes.artificer.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.artificer_battle_smith_steel_defender.id },
                    { id: classFeatures.artificer_battle_smith_battle_ready.id },
                    { id: classFeatures.artificer_battle_smith_extra_attack.id },
                ]
            }
        }),
        barbarian_path_of_the_ancestral_guardian: await db.createSubclass({
            id: "subclass-barbarian-path-of-the-ancestral-guardian",
            name: "Path Of The Ancestral Guardian",
            slug: "path-of-the-ancestral-guardian",
            description: "Barbarians who call upon the spirits of their ancestors to protect allies and hinder enemies.",
            alabastriaContext: "In Bulsania's mountain tribes, Goliath Ancestral Guardians commune with the spirits of their giant-kin ancestors. Orc tribes in Katman's swamps honor their fallen warriors, while Lizardfolk draw upon ancient reptilian memories.",
            playstyle: "Protective tank who shields allies while dealing damage. Great for players who want to be the party's guardian and protector.",
            classId: classes.barbarian.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.barbarian_path_of_the_ancestral_guardian_ancestral_protectors.id },
                    { id: classFeatures.barbarian_path_of_the_ancestral_guardian_spirit_shield.id },
                    { id: classFeatures.barbarian_path_of_the_ancestral_guardian_consult_the_spirits.id },
                ]
            }
        }),
        barbarian_path_of_the_beast: await db.createSubclass({
            id: "subclass-barbarian-path-of-the-beast",
            name: "Path Of The Beast",
            slug: "path-of-the-beast",
            description: "Barbarians whose rage manifests as bestial transformations, growing claws, fangs, or other natural weapons.",
            alabastriaContext: "Shifters in Kuriguer's wild woods naturally gravitate toward this path, their lycanthropic heritage manifesting in battle. Tabaxi on Skratonia's plains embrace their feline nature, while Beasthide Shifters become living weapons.",
            playstyle: "Versatile melee combatant with animal-like abilities. Perfect for players who want to embody primal savagery and adaptability.",
            classId: classes.barbarian.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.barbarian_path_of_the_beast_form_of_the_beast.id },
                    { id: classFeatures.barbarian_path_of_the_beast_bestial_soul.id },
                    { id: classFeatures.barbarian_path_of_the_beast_infectious_fury.id },
                ]
            }
        }),
        barbarian_path_of_the_berserker: await db.createSubclass({
            id: "subclass-barbarian-path-of-the-berserker",
            name: "Path Of The Berserker",
            slug: "path-of-the-berserker",
            description: "Warriors who abandon all restraint in battle, becoming unstoppable forces of destruction.",
            alabastriaContext: "Orc warriors in Katman's tribal strongholds embrace the berserker's path, their natural fury enhanced by swamp warfare. Goliaths in Bulsania's harsh mountains use relentless rage to survive, while Dragonborn channel draconic wrath.",
            playstyle: "Maximum damage output with high risk/reward mechanics. Ideal for players who want to be an unstoppable force of destruction.",
            classId: classes.barbarian.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.barbarian_path_of_the_berserker_frenzy.id },
                    { id: classFeatures.barbarian_path_of_the_berserker_mindless_rage.id },
                    { id: classFeatures.barbarian_path_of_the_berserker_intimidating_presence.id },
                ]
            }
        }),
        barbarian_path_of_the_storm_herald: await db.createSubclass({
            id: "subclass-barbarian-path-of-the-storm-herald",
            name: "Path Of The Storm Herald",
            slug: "path-of-the-storm-herald",
            description: "Barbarians who channel elemental forces during their rage, creating auras of destruction around them.",
            alabastriaContext: "Aarakocra Storm Heralds in Bulsania's peaks channel mountain storms and arctic winds. Air Genasi in Kuriguer embrace coastal tempests, while Goliaths manifest the fury of blizzards and avalanches.",
            playstyle: "Area-of-effect damage dealer who affects the battlefield around them. Great for players who want elemental powers and battlefield control.",
            classId: classes.barbarian.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.barbarian_path_of_the_storm_herald_storm_aura.id },
                    { id: classFeatures.barbarian_path_of_the_storm_herald_storm_soul.id },
                    { id: classFeatures.barbarian_path_of_the_storm_herald_shielding_storm.id },
                ]
            }
        }),
        barbarian_path_of_the_totem_warrior: await db.createSubclass({
            id: "subclass-barbarian-path-of-the-totem-warrior",
            name: "Path Of The Totem Warrior",
            slug: "path-of-the-totem-warrior",
            description: "Barbarians who form spiritual bonds with animal totems, gaining their traits and wisdom.",
            alabastriaContext: "Goliath tribes in Bulsania bond with mountain spirits and giant eagles. Shifters in Kuriguer connect with forest predators, while Centaurs on Skratonia's plains honor horse spirits and plains animals.",
            playstyle: "Versatile barbarian with nature-themed abilities. Perfect for players who want spiritual connection to animals and varied utility.",
            classId: classes.barbarian.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.barbarian_path_of_the_totem_warrior_totem_spirit.id },
                    { id: classFeatures.barbarian_path_of_the_totem_warrior_aspect_of_the_beast.id },
                    { id: classFeatures.barbarian_path_of_the_totem_warrior_totemic_attunement.id },
                ]
            }
        }),
        barbarian_path_of_wild_magic: await db.createSubclass({
            id: "subclass-barbarian-path-of-wild-magic",
            name: "Path Of Wild Magic",
            slug: "path-of-wild-magic",
            description: "Barbarians touched by chaotic magic whose rage triggers unpredictable magical effects.",
            alabastriaContext: "Genasi in Kuriguer's magical forests experience wild surges from elemental chaos. Tieflings across Skratonia manifest infernal unpredictability, while Halflings discover their luck interacts strangely with magical forces.",
            playstyle: "Unpredictable barbarian with magical effects. Ideal for players who enjoy chaos and want magic mixed with martial combat.",
            classId: classes.barbarian.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.barbarian_path_of_wild_magic_magic_awareness.id },
                    { id: classFeatures.barbarian_path_of_wild_magic_wild_surge.id },
                    { id: classFeatures.barbarian_path_of_wild_magic_bolstering_magic.id },
                ]
            }
        }),
        barbarian_path_of_the_zealot: await db.createSubclass({
            id: "subclass-barbarian-path-of-the-zealot",
            name: "Path Of The Zealot",
            slug: "path-of-the-zealot",
            description: "Divine warriors whose rage is fueled by religious fervor and celestial or infernal power.",
            alabastriaContext: "Aarakocra Zealots in Bulsania serve sky gods with divine fury. Aasimar across Skratonia channel celestial rage for righteous causes, while Dragonborn embrace draconic religious fervor in their militarized society.",
            playstyle: "Religious warrior with divine damage and support abilities. Perfect for players who want to combine faith with fury.",
            classId: classes.barbarian.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.barbarian_path_of_the_zealot_divine_fury.id },
                    { id: classFeatures.barbarian_path_of_the_zealot_warrior_of_the_gods.id },
                    { id: classFeatures.barbarian_path_of_the_zealot_zealous_presence.id },
                ]
            }
        }),
        barbarian_path_of_the_battlerager: await db.createSubclass({
            id: "subclass-barbarian-path-of-the-battlerager",
            name: "Path Of The Battlerager",
            slug: "path-of-the-battlerager",
            description: "Dwarven warriors who wear spiked armor and use it as a weapon, becoming whirlwinds of destruction in combat.",
            alabastriaContext: "Battleragers in Alabastria are primarily found among the dwarven strongholds of Bulsania, where their aggressive fighting style is both feared and respected. They often serve as elite shock troops in the Icebound Confederacy.",
            playstyle: "Aggressive tank who uses armor as a weapon. Perfect for players who want to be a mobile, damaging tank.",
            classId: classes.barbarian.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.barbarian_path_of_the_battlerager_battlerager_armor.id },
                    { id: classFeatures.barbarian_path_of_the_battlerager_reckless_abandon.id },
                    { id: classFeatures.barbarian_path_of_the_battlerager_battlerager_charge.id },
                ]
            }
        }),
        barbarian_path_of_the_giant: await db.createSubclass({
            id: "subclass-barbarian-path-of-the-giant",
            name: "Path Of The Giant",
            slug: "path-of-the-giant",
            description: "Barbarians who channel the power of giants, growing in size and strength as they rage, becoming towering forces of destruction.",
            alabastriaContext: "Giant barbarians in Alabastria often trace their lineage to the ancient giants who once roamed the mountains of Bulsania and the peaks of Kamalatman. Their connection to these primordial beings gives them incredible strength and size.",
            playstyle: "Size-changing warrior with area control and massive damage. Great for players who want to be a huge, intimidating presence on the battlefield.",
            classId: classes.barbarian.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.barbarian_path_of_the_giant_giants_might.id },
                    { id: classFeatures.barbarian_path_of_the_giant_elemental_cleaver.id },
                    { id: classFeatures.barbarian_path_of_the_giant_mighty_impel.id },
                ]
            }
        }),
        bard_college_of_creation: await db.createSubclass({
            id: "subclass-bard-college-of-creation",
            name: "College Of Creation",
            slug: "college-of-creation",
            description: "Bards who use the Song of Creation to bring objects and creatures into existence through performance.",
            alabastriaContext: "Satyr Bards in Kuriguer's fey glades channel creation magic through revelry and song. Half-Elf Bards in Skratonia use their versatile nature to bridge different artistic traditions, while Fairy Bards create wonder through miniature performances.",
            playstyle: "Creative support with unique utility options. Great for players who want to solve problems through magical creativity.",
            classId: classes.bard.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.bard_college_of_creation_note_of_potential.id },
                    { id: classFeatures.bard_college_of_creation_performance_of_creation.id },
                    { id: classFeatures.bard_college_of_creation_animating_performance.id },
                ]
            }
        }),
        bard_college_of_eloquence: await db.createSubclass({
            id: "subclass-bard-college-of-eloquence",
            name: "College Of Eloquence",
            slug: "college-of-eloquence",
            description: "Masters of speech and persuasion who can sway minds and guarantee their words have impact.",
            alabastriaContext: "Half-Elf diplomats in Skratonia's council chambers master eloquence to bridge cultural divides. Aasimar speakers inspire through celestial wisdom, while Human politicians navigate complex city-state relationships.",
            playstyle: "Social manipulation and guaranteed success. Perfect for players who want to excel in roleplay and social encounters.",
            classId: classes.bard.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.bard_college_of_eloquence_silver_tongue.id },
                    { id: classFeatures.bard_college_of_eloquence_unsettling_words.id },
                    { id: classFeatures.bard_college_of_eloquence_universal_speech.id },
                ]
            }
        }),
        bard_college_of_glamour: await db.createSubclass({
            id: "subclass-bard-college-of-glamour",
            name: "College Of Glamour",
            slug: "college-of-glamour",
            description: "Bards touched by fey magic who use supernatural beauty and charm to entrance and command.",
            alabastriaContext: "Eladrin Bards in Kuriguer's magic groves embody seasonal glamour and fey beauty. Satyr performers captivate audiences with supernatural charisma, while Tiefling Bards use infernal allure for darker purposes.",
            playstyle: "Enchantment-focused controller with fey magic. Ideal for players who want to charm enemies and inspire allies with supernatural presence.",
            classId: classes.bard.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.bard_college_of_glamour_mantle_of_inspiration.id },
                    { id: classFeatures.bard_college_of_glamour_enthralling_performance.id },
                    { id: classFeatures.bard_college_of_glamour_mantle_of_majesty.id },
                ]
            }
        }),
        bard_college_of_lore: await db.createSubclass({
            id: "subclass-bard-college-of-lore",
            name: "College Of Lore",
            slug: "college-of-lore",
            description: "Scholars and knowledge-seekers who collect secrets and magical techniques from across the world.",
            alabastriaContext: "Human scholars in Skratonia's libraries preserve knowledge from all continents. Half-Elf researchers bridge different cultural traditions, while Vedalken academics approach lore with systematic precision.",
            playstyle: "Ultimate versatility with access to any spell. Perfect for players who want maximum options and knowledge-based roleplay.",
            classId: classes.bard.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.bard_college_of_lore_cutting_words.id },
                    { id: classFeatures.bard_college_of_lore_additional_magical_secrets.id },
                    { id: classFeatures.bard_college_of_lore_peerless_skill.id },
                ]
            }
        }),
        bard_college_of_spirits: await db.createSubclass({
            id: "subclass-bard-college-of-spirits",
            name: "College Of Spirits",
            slug: "college-of-spirits",
            description: "Bards who commune with spirits and channel their stories for magical effects.",
            alabastriaContext: "Shadar-kai Bards in Kuriguer's dangerous woods commune with shadow spirits. Reborn individuals in Skratonia channel memories of past lives, while Hexblood Bards speak with spirits touched by hag magic.",
            playstyle: "Unpredictable support with spiritual themes. Great for players who enjoy ghostly lore and random magical effects.",
            classId: classes.bard.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.bard_college_of_spirits_guiding_whispers.id },
                    { id: classFeatures.bard_college_of_spirits_spirit_session.id },
                    { id: classFeatures.bard_college_of_spirits_tales_from_beyond.id },
                ]
            }
        }),
        bard_college_of_swords: await db.createSubclass({
            id: "subclass-bard-college-of-swords",
            name: "College Of Swords",
            slug: "college-of-swords",
            description: "Warrior-poets who combine bladework with performance, fighting with artistic flair.",
            alabastriaContext: "Half-Elf duelists in Skratonia's urban centers blend combat with performance art. Tabaxi blade dancers on the plains combine feline grace with swordplay, while Human sword-singers adapt techniques from multiple traditions.",
            playstyle: "Melee-focused bard with combat prowess. Perfect for players who want to fight up close while maintaining bardic versatility.",
            classId: classes.bard.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.bard_college_of_swords_fighting_style.id },
                    { id: classFeatures.bard_college_of_swords_blade_flourish.id },
                    { id: classFeatures.bard_college_of_swords_extra_attack.id },
                ]
            }
        }),
        bard_college_of_valor: await db.createSubclass({
            id: "subclass-bard-college-of-valor",
            name: "College Of Valor",
            slug: "college-of-valor",
            description: "Battle-bards who inspire courage in combat and fight alongside their allies.",
            alabastriaContext: "Dragonborn war-singers in Bulsania's militarized society inspire troops with draconic battle hymns. Human valor bards lead Skratonia's city militias, while Leonin pride-singers rally their warrior communities.",
            playstyle: "Balanced combat and support character. Ideal for players who want to fight effectively while inspiring allies.",
            classId: classes.bard.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.bard_college_of_valor_combat_inspiration.id },
                    { id: classFeatures.bard_college_of_valor_medium_armor_and_shields.id },
                    { id: classFeatures.bard_college_of_valor_extra_attack.id },
                ]
            }
        }),
        bard_college_of_whispers: await db.createSubclass({
            id: "subclass-bard-college-of-whispers",
            name: "College Of Whispers",
            slug: "college-of-whispers",
            description: "Spies and manipulators who use secrets and psychic magic to control and deceive.",
            alabastriaContext: "Changeling spies in Kuriguer's diverse ports use their shapeshifting with whispered secrets. Kenku information brokers excel at gathering and trading secrets, while Tiefling manipulators work in Skratonia's political shadows.",
            playstyle: "Espionage and psychological warfare. Perfect for players who want to be the party's spy and manipulator.",
            classId: classes.bard.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.bard_college_of_whispers_psychic_blades.id },
                    { id: classFeatures.bard_college_of_whispers_words_of_terror.id },
                    { id: classFeatures.bard_college_of_whispers_mantle_of_whispers.id },
                ]
            }
        }),
        cleric_forge_domain: await db.createSubclass({
            id: "subclass-cleric-forge-domain",
            name: "Forge Domain",
            slug: "forge-domain",
            description: "Clerics of smithing gods who bless weapons and armor with divine power.",
            alabastriaContext: "Dwarven Forge Clerics in Maltman's mountain strongholds serve the god of smiths and creation. Warforged clerics in Alatman understand the divine spark within constructed beings, while Duergar forge-priests work in the deepest underground workshops.",
            playstyle: "Tanky support focused on equipment enhancement. Perfect for players who want to craft magical items and support through divine smithing.",
            classId: classes.cleric.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.cleric_forge_domain_blessing_of_the_forge.id },
                    { id: classFeatures.cleric_forge_domain_channel_divinity_artisans_blessing.id },
                    { id: classFeatures.cleric_forge_domain_soul_of_the_forge.id },
                ]
            }
        }),
        cleric_life_domain: await db.createSubclass({
            id: "subclass-cleric-life-domain",
            name: "Life Domain",
            slug: "life-domain",
            description: "Healers dedicated to preserving and restoring life, the most traditional clerical role.",
            alabastriaContext: "Aasimar Life Clerics in Skratonia's cities serve as beacons of hope and healing. Human clerics establish temples and hospitals, while Halfling healers tend to rural communities and traveling caravans.",
            playstyle: "Ultimate healer focused on keeping everyone alive. Ideal for players who want to be the party's primary source of healing and support.",
            classId: classes.cleric.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.cleric_life_domain_disciple_of_life.id },
                    { id: classFeatures.cleric_life_domain_channel_divinity_preserve_life.id },
                    { id: classFeatures.cleric_life_domain_blessed_healer.id },
                ]
            }
        }),
        cleric_war_domain: await db.createSubclass({
            id: "subclass-cleric-war-domain",
            name: "War Domain",
            slug: "war-domain",
            description: "Battle-clerics who serve gods of war and conflict, blessing warriors and leading charges.",
            alabastriaContext: "Leonin War Clerics like Tharos Raggenthraw serve Tempus across Skratonia's warrior prides. Dragonborn battle-priests lead Bulsania's militarized forces, while Orc war-shamans rally tribal warriors in Katman's swamps.",
            playstyle: "Combat-focused cleric who fights on the front lines. Great for players who want to be both warrior and priest.",
            classId: classes.cleric.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.cleric_war_domain_war_priest.id },
                    { id: classFeatures.cleric_war_domain_channel_divinity_guided_strike.id },
                    { id: classFeatures.cleric_war_domain_war_domain_spells.id },
                ]
            }
        }),
        cleric_tempest_domain: await db.createSubclass({
            id: "subclass-cleric-tempest-domain",
            name: "Tempest Domain",
            slug: "tempest-domain",
            description: "Storm-callers who channel the power of thunder, lightning, and ocean tempests.",
            alabastriaContext: "Aarakocra Tempest Clerics in Bulsania's peaks command mountain storms and arctic winds. Triton storm-callers along Kuriguer's coasts control oceanic tempests, while Air Genasi channel coastal winds and lightning.",
            playstyle: "Destructive spellcaster with weather-based powers. Perfect for players who want to call down divine storms and lightning.",
            classId: classes.cleric.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.cleric_tempest_domain_wrath_of_the_storm.id },
                    { id: classFeatures.cleric_tempest_domain_channel_divinity_destructive_wrath.id },
                    { id: classFeatures.cleric_tempest_domain_thunderbolt_strike.id },
                ]
            }
        }),
        cleric_light_domain: await db.createSubclass({
            id: "subclass-cleric-light-domain",
            name: "Light Domain",
            slug: "light-domain",
            description: "Clerics of light and sun gods who wield radiant energy to illuminate darkness and burn away evil.",
            alabastriaContext: "Light Clerics in Alabastria serve as beacons of hope in dark times, their radiant magic particularly effective against the undead and fiends that plague the world. They are common in Skratonia's cities and the Huntbound Order.",
            playstyle: "Offensive caster with radiant damage and area control. Great for players who want to be a divine blaster with utility.",
            classId: classes.cleric.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.cleric_light_domain_warding_flare.id },
                    { id: classFeatures.cleric_light_domain_channel_divinity_radiance_of_the_dawn.id },
                    { id: classFeatures.cleric_light_domain_potent_spellcasting.id },
                ]
            }
        }),
        cleric_nature_domain: await db.createSubclass({
            id: "subclass-cleric-nature-domain",
            name: "Nature Domain",
            slug: "nature-domain",
            description: "Clerics who serve nature gods, wielding the power of the natural world to protect and nurture life.",
            alabastriaContext: "Nature Clerics in Alabastria are found in the wild regions of Kuriguer and the untamed areas of Kamalatman. They serve as protectors of the natural world and guides for those who venture into dangerous wilderness.",
            playstyle: "Versatile caster with nature magic and elemental resistance. Perfect for players who want to combine divine power with nature magic.",
            classId: classes.cleric.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.cleric_nature_domain_acolyte_of_nature.id },
                    { id: classFeatures.cleric_nature_domain_channel_divinity_charm_animals_and_plants.id },
                    { id: classFeatures.cleric_nature_domain_dampen_elements.id },
                ]
            }
        }),
        cleric_trickery_domain: await db.createSubclass({
            id: "subclass-cleric-trickery-domain",
            name: "Trickery Domain",
            slug: "trickery-domain",
            description: "Clerics of trickster gods who use deception, illusion, and cunning to outwit enemies and protect their allies.",
            alabastriaContext: "Trickery Clerics in Alabastria often serve as spies, scouts, and information gatherers. Their deceptive abilities make them valuable in the complex political landscape and dangerous missions of the Huntbound Order.",
            playstyle: "Stealth-focused caster with illusion magic and deception. Great for players who want to be sneaky and cunning.",
            classId: classes.cleric.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.cleric_trickery_domain_blessing_of_the_trickster.id },
                    { id: classFeatures.cleric_trickery_domain_channel_divinity_invoke_duplicity.id },
                    { id: classFeatures.cleric_trickery_domain_cloak_of_shadows.id },
                ]
            }
        }),
        druid_circle_of_the_land: await db.createSubclass({
            id: "subclass-druid-circle-of-the-land",
            name: "Circle Of The Land",
            slug: "circle-of-the-land",
            description: "Druids connected to specific terrains who draw additional magic from their chosen environment.",
            alabastriaContext: "Wood Elf Land Druids in Kuriguer's forests specialize in woodland magic. Centaurs on Skratonia's plains master grassland spells, while Lizardfolk in Katman's swamps command wetland magic.",
            playstyle: "Spell-focused druid with terrain specialization. Great for players who want maximum spellcasting power and environmental themes.",
            classId: classes.druid.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.druid_circle_of_the_land_bonus_cantrip.id },
                    { id: classFeatures.druid_circle_of_the_land_natural_recovery.id },
                    { id: classFeatures.druid_circle_of_the_land_circle_spells.id },
                ]
            }
        }),
        druid_circle_of_the_moon: await db.createSubclass({
            id: "subclass-druid-circle-of-the-moon",
            name: "Circle Of The Moon",
            slug: "circle-of-the-moon",
            description: "Druids who excel at shapeshifting, taking more powerful beast forms for combat.",
            alabastriaContext: "Shifters in Kuriguer's wild woods naturally gravitate toward moon magic, their lycanthropic heritage enhanced by druidic power. Firbolg moon druids become massive forest guardians, while Wood Elves master the forms of woodland predators.",
            playstyle: "Melee combatant through shapeshifting. Perfect for players who want to fight as animals and have strong physical presence.",
            classId: classes.druid.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.druid_circle_of_the_moon_combat_wild_shape.id },
                    { id: classFeatures.druid_circle_of_the_moon_circle_forms.id },
                    { id: classFeatures.druid_circle_of_the_moon_primal_strike.id },
                ]
            }
        }),
        druid_circle_of_wildfire: await db.createSubclass({
            id: "subclass-druid-circle-of-wildfire",
            name: "Circle Of Wildfire",
            slug: "circle-of-wildfire",
            description: "Druids who understand that destruction and renewal are part of nature's cycle, wielding cleansing flames.",
            alabastriaContext: "Fire Genasi in Kuriguer's magical hotspots channel elemental fire for renewal. Tiefling druids across Skratonia use infernal heritage for natural cleansing, while Dragonborn embrace draconic flame as part of nature's cycle.",
            playstyle: "Fire-focused druid with elemental companion. Ideal for players who want to combine destruction and healing themes.",
            classId: classes.druid.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.druid_circle_of_wildfire_summon_wildfire_spirit.id },
                    { id: classFeatures.druid_circle_of_wildfire_enhanced_bond.id },
                    { id: classFeatures.druid_circle_of_wildfire_circle_spells.id },
                ]
            }
        }),
        fighter_champion: await db.createSubclass({
            id: "subclass-fighter-champion",
            name: "Champion",
            slug: "champion",
            description: "Fighters focused on physical excellence and improved critical hits, representing peak athletic ability.",
            alabastriaContext: "Human Champions in Skratonia's cities excel through pure determination and training. Goliath Champions in Bulsania's mountains embody natural athletic superiority, while Orc Champions in Katman's swamps demonstrate raw physical power.",
            playstyle: "Simple but effective warrior focused on consistent damage. Perfect for new players or those who want straightforward combat effectiveness.",
            classId: classes.fighter.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.fighter_champion_improved_critical.id },
                    { id: classFeatures.fighter_champion_remarkable_athlete.id },
                    { id: classFeatures.fighter_champion_additional_fighting_style.id },
                ]
            }
        }),
        fighter_battle_master: await db.createSubclass({
            id: "subclass-fighter-battle-master",
            name: "Battle Master",
            slug: "battle-master",
            description: "Tactical fighters who use combat maneuvers to control the battlefield and enhance their attacks.",
            alabastriaContext: "Hobgoblin Battle Masters in Bulsania's fortresses combine military discipline with tactical expertise. Human officers in Skratonia's armies use maneuvers to coordinate troops, while Dwarf veterans in Maltman employ mountain warfare tactics.",
            playstyle: "Tactical combatant with versatile options. Great for players who enjoy strategic thinking and battlefield control.",
            classId: classes.fighter.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.fighter_battle_master_combat_superiority.id },
                    { id: classFeatures.fighter_battle_master_maneuvers.id },
                    { id: classFeatures.fighter_battle_master_know_your_enemy.id },
                ]
            }
        }),
        fighter_eldritch_knight: await db.createSubclass({
            id: "subclass-fighter-eldritch-knight",
            name: "Eldritch Knight",
            slug: "eldritch-knight",
            description: "Warrior-mages who combine martial prowess with arcane magic, creating spellswords.",
            alabastriaContext: "High Elf Eldritch Knights in Kuriguer's magical forests blend ancient spellsword traditions with modern techniques. Githyanki warriors adapt planar magic for combat, while Half-Elf knights bridge martial and magical traditions.",
            playstyle: "Magical warrior with utility spells and combat enhancement. Ideal for players who want both sword and sorcery.",
            classId: classes.fighter.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.fighter_eldritch_knight_spellcasting.id },
                    { id: classFeatures.fighter_eldritch_knight_weapon_bond.id },
                    { id: classFeatures.fighter_eldritch_knight_war_magic.id },
                ]
            }
        }),
        monk_way_of_the_open_hand: await db.createSubclass({
            id: "subclass-monk-way-of-the-open-hand",
            name: "Way Of The Open Hand",
            slug: "way-of-the-open-hand",
            description: "Traditional monks who master unarmed combat and ki manipulation techniques.",
            alabastriaContext: "Human Open Hand Monks in Skratonia's urban monasteries teach classical martial arts. Aarakocra monks in Bulsania's peaks combine aerial techniques with traditional forms, while High Elf monks in Kuriguer blend ancient elven martial traditions.",
            playstyle: "Classic monk focused on unarmed combat mastery. Perfect for players who want the traditional monk experience with reliable techniques.",
            classId: classes.monk.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.monk_way_of_the_open_hand_open_hand_technique.id },
                    { id: classFeatures.monk_way_of_the_open_hand_wholeness_of_body.id },
                    { id: classFeatures.monk_way_of_the_open_hand_tranquility.id },
                ]
            }
        }),
        monk_way_of_shadow: await db.createSubclass({
            id: "subclass-monk-way-of-shadow",
            name: "Way Of Shadow",
            slug: "way-of-shadow",
            description: "Ninja-like monks who use stealth, darkness, and illusion magic for infiltration and assassination.",
            alabastriaContext: "Shadar-kai Shadow Monks in Kuriguer's dangerous woods master shadow magic and stealth. Kenku monks use their mimicry for infiltration, while Tabaxi shadow dancers combine feline stealth with monastic training.",
            playstyle: "Stealth-focused monk with magical abilities. Great for players who want to be sneaky scouts and assassins.",
            classId: classes.monk.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.monk_way_of_shadow_shadow_arts.id },
                    { id: classFeatures.monk_way_of_shadow_shadow_step.id },
                    { id: classFeatures.monk_way_of_shadow_cloak_of_shadows.id },
                ]
            }
        }),
        monk_way_of_the_four_elements: await db.createSubclass({
            id: "subclass-monk-way-of-the-four-elements",
            name: "Way Of The Four Elements",
            slug: "way-of-the-four-elements",
            description: "Monks who channel elemental forces through their ki, becoming living conduits of elemental power.",
            alabastriaContext: "Genasi Four Elements Monks in Kuriguer's elemental nodes master their inherited powers. Air Genasi control wind and storm, Fire Genasi channel flame and heat, while Earth and Water Genasi manipulate stone and tide.",
            playstyle: "Magical monk with elemental powers. Ideal for players who want to blend martial arts with elemental magic.",
            classId: classes.monk.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.monk_way_of_the_four_elements_elemental_disciplines.id },
                    { id: classFeatures.monk_way_of_the_four_elements_additional_disciplines.id },
                    { id: classFeatures.monk_way_of_the_four_elements_elemental_mastery.id },
                ]
            }
        }),
        paladin_oath_of_devotion: await db.createSubclass({
            id: "subclass-paladin-oath-of-devotion",
            name: "Oath Of Devotion",
            slug: "oath-of-devotion",
            description: "Traditional paladins devoted to ideals of virtue, honor, and righteousness.",
            alabastriaContext: "Aasimar Devotion Paladins in Skratonia's cities serve as exemplars of celestial virtue. Human paladins establish orders dedicated to justice and protection, while Dragonborn honor-knights uphold draconic codes of conduct.",
            playstyle: "Classic righteous paladin focused on protection and virtue. Perfect for players who want to be the traditional holy knight.",
            classId: classes.paladin.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.paladin_oath_of_devotion_sacred_weapon.id },
                    { id: classFeatures.paladin_oath_of_devotion_turn_the_unholy.id },
                    { id: classFeatures.paladin_oath_of_devotion_aura_of_devotion.id },
                ]
            }
        }),
        paladin_oath_of_the_ancients: await db.createSubclass({
            id: "subclass-paladin-oath-of-the-ancients",
            name: "Oath Of The Ancients",
            slug: "oath-of-the-ancients",
            description: "Paladins who protect the light, beauty, and life of the world, often serving nature deities.",
            alabastriaContext: "Wood Elf Ancients Paladins in Kuriguer's forests protect sacred groves and ancient mysteries. Firbolg guardians serve as champions of the natural world, while Centaurs on Skratonia's plains defend the harmony between civilization and nature.",
            playstyle: "Nature-focused paladin with protective abilities. Great for players who want to combine holy warrior with nature themes.",
            classId: classes.paladin.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.paladin_oath_of_the_ancients_natures_wrath.id },
                    { id: classFeatures.paladin_oath_of_the_ancients_turn_the_faithless.id },
                    { id: classFeatures.paladin_oath_of_the_ancients_aura_of_warding.id },
                ]
            }
        }),
        paladin_oath_of_vengeance: await db.createSubclass({
            id: "subclass-paladin-oath-of-vengeance",
            name: "Oath Of Vengeance",
            slug: "oath-of-vengeance",
            description: "Paladins dedicated to punishing wrongdoers and pursuing justice through relentless pursuit.",
            alabastriaContext: "Half-Orc Vengeance Paladins in Katman's frontier pursue justice with savage determination. Tiefling paladins seek to overcome their infernal heritage through righteous action, while Human avengers hunt down those who prey on the innocent.",
            playstyle: "Aggressive paladin focused on hunting down evil. Ideal for players who want to be a relentless force of justice.",
            classId: classes.paladin.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.paladin_oath_of_vengeance_abjure_enemy.id },
                    { id: classFeatures.paladin_oath_of_vengeance_vow_of_enmity.id },
                    { id: classFeatures.paladin_oath_of_vengeance_relentless_avenger.id },
                ]
            }
        }),
        paladin_oath_of_the_crown: await db.createSubclass({
            id: "subclass-paladin-oath-of-the-crown",
            name: "Oath Of The Crown",
            slug: "oath-of-the-crown",
            description: "Paladins who serve the law and civilization, defending the social order and protecting the innocent through loyalty to crown and country.",
            alabastriaContext: "Human Crown Paladins in Skratonia's city-states serve as royal guards and civic protectors, upholding the law and defending the democratic councils. Dragonborn Crown Paladins in Bulsania's militarized society embody draconic honor and loyalty to the Icebound Confederacy. Dwarven Crown Paladins in Maltman serve as elite royal guards for Queen Bronwyn, while Orc Crown Paladins in Katman defend High King Gorak's unified kingdom. These paladins often serve as diplomats, judges, and elite military officers, bridging the gap between divine righteousness and civic duty.",
            playstyle: "Lawful protector focused on defending allies and maintaining order. Perfect for players who want to be a noble guardian of civilization and law.",
            classId: classes.paladin.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.paladin_oath_of_the_crown_channel_divinity_champion_challenge.id },
                    { id: classFeatures.paladin_oath_of_the_crown_channel_divinity_turn_the_tide.id },
                    { id: classFeatures.paladin_oath_of_the_crown_divine_allegiance.id },
                    { id: classFeatures.paladin_oath_of_the_crown_unbreakable_majesty.id },
                ]
            }
        }),
        ranger_hunter: await db.createSubclass({
            id: "subclass-ranger-hunter",
            name: "Hunter",
            slug: "hunter",
            description: "Rangers specialized in hunting specific types of prey, masters of taking down dangerous creatures.",
            alabastriaContext: "Human Hunters in Skratonia's diverse lands adapt their techniques for various threats. Wood Elf hunters in Kuriguer specialize in forest predators, while Tabaxi hunters on the plains track dangerous beasts with feline instincts.",
            playstyle: "Versatile combatant effective against many enemy types. Great for players who want reliable combat effectiveness and adaptability.",
            classId: classes.ranger.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.ranger_hunter_hunters_prey.id },
                    { id: classFeatures.ranger_hunter_defensive_tactics.id },
                    { id: classFeatures.ranger_hunter_multiattack.id },
                ]
            }
        }),
        ranger_beast_master: await db.createSubclass({
            id: "subclass-ranger-beast-master",
            name: "Beast Master",
            slug: "beast-master",
            description: "Rangers who form deep bonds with animal companions, fighting alongside loyal beasts.",
            alabastriaContext: "Aarakocra Beast Masters in Bulsania's peaks bond with eagles and mountain cats. Shifters in Kuriguer form natural connections with forest creatures, while Halfling rangers partner with loyal dogs and ponies for caravan protection.",
            playstyle: "Pet-focused ranger with loyal companion. Perfect for players who want an animal partner and unique tactical options.",
            classId: classes.ranger.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.ranger_beast_master_rangers_companion.id },
                    { id: classFeatures.ranger_beast_master_exceptional_training.id },
                    { id: classFeatures.ranger_beast_master_bestial_fury.id },
                ]
            }
        }),
        ranger_gloom_stalker: await db.createSubclass({
            id: "subclass-ranger-gloom-stalker",
            name: "Gloom Stalker",
            slug: "gloom-stalker",
            description: "Rangers who excel in darkness and underground environments, masters of ambush and stealth.",
            alabastriaContext: "Shadar-kai Gloom Stalkers in Kuriguer's shadow-touched woods master darkness and stealth. Drow rangers in Maltman's underground caverns excel at subterranean warfare, while Tabaxi night-hunters use feline senses for nocturnal tracking.",
            playstyle: "Stealth-focused ambush specialist. Ideal for players who want to be deadly scouts and first-strike specialists.",
            classId: classes.ranger.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.ranger_gloom_stalker_dread_ambusher.id },
                    { id: classFeatures.ranger_gloom_stalker_umbral_sight.id },
                    { id: classFeatures.ranger_gloom_stalker_iron_mind.id },
                ]
            }
        }),
        rogue_thief: await db.createSubclass({
            id: "subclass-rogue-thief",
            name: "Thief",
            slug: "thief",
            description: "Classic rogues who excel at burglary, climbing, and using magical items.",
            alabastriaContext: "Halfling Thieves in Skratonia's cities use their natural nimbleness for both legitimate and questionable pursuits. Goblin scavengers on the plains excel at finding and using discarded items, while Human thieves adapt techniques from multiple traditions.",
            playstyle: "Utility-focused rogue with excellent mobility and item use. Perfect for players who want to be the party's problem solver and infiltrator.",
            classId: classes.rogue.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.rogue_thief_fast_hands.id },
                    { id: classFeatures.rogue_thief_second_story_work.id },
                    { id: classFeatures.rogue_thief_use_magic_device.id },
                ]
            }
        }),
        rogue_assassin: await db.createSubclass({
            id: "subclass-rogue-assassin",
            name: "Assassin",
            slug: "assassin",
            description: "Professional killers who specialize in disguises, poisons, and elimination techniques.",
            alabastriaContext: "Kenku Assassins in Kuriguer's ports use their mimicry for perfect infiltration. Shadar-kai killers employ shadow magic for silent elimination, while Changeling assassins become anyone they need to be for their missions.",
            playstyle: "Stealth-focused killer with disguise abilities. Great for players who want to be deadly infiltrators and eliminate key targets.",
            classId: classes.rogue.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.rogue_assassin_bonus_proficiencies.id },
                    { id: classFeatures.rogue_assassin_assassinate.id },
                    { id: classFeatures.rogue_assassin_infiltration_expertise.id },
                ]
            }
        }),
        rogue_arcane_trickster: await db.createSubclass({
            id: "subclass-rogue-arcane-trickster",
            name: "Arcane Trickster",
            slug: "arcane-trickster",
            description: "Rogues who blend thievery with illusion and enchantment magic.",
            alabastriaContext: "High Elf Arcane Tricksters in Kuriguer combine natural magic with roguish skills. Gnome tricksters use illusion magic for elaborate heists, while Half-Elf rogues bridge magical and mundane techniques.",
            playstyle: "Magical rogue with utility spells and enhanced stealth. Ideal for players who want magic mixed with traditional rogue abilities.",
            classId: classes.rogue.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.rogue_arcane_trickster_spellcasting.id },
                    { id: classFeatures.rogue_arcane_trickster_mage_hand_legerdemain.id },
                    { id: classFeatures.rogue_arcane_trickster_magical_ambush.id },
                ]
            }
        }),
        sorcerer_draconic_bloodline: await db.createSubclass({
            id: "subclass-sorcerer-draconic-bloodline",
            name: "Draconic Bloodline",
            slug: "draconic-bloodline",
            description: "Sorcerers with dragon ancestry who gain draconic resilience and elemental power.",
            alabastriaContext: "Dragonborn Sorcerers in Bulsania manifest their draconic heritage through raw magical power. Kobolds in Maltman's mines channel their dragon worship into sorcerous abilities, while Half-Elves across Skratonia discover draconic ancestors in their mixed bloodlines.",
            playstyle: "Durable elemental damage dealer. Perfect for players who want to embody draconic power and specialize in elemental magic.",
            classId: classes.sorcerer.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.sorcerer_draconic_bloodline_dragon_ancestor.id },
                    { id: classFeatures.sorcerer_draconic_bloodline_draconic_resilience.id },
                    { id: classFeatures.sorcerer_draconic_bloodline_elemental_affinity.id },
                ]
            }
        }),
        sorcerer_wild_magic: await db.createSubclass({
            id: "subclass-sorcerer-wild-magic",
            name: "Wild Magic",
            slug: "wild-magic",
            description: "Sorcerers touched by chaotic magic whose spells can trigger unpredictable effects.",
            alabastriaContext: "Genasi Wild Sorcerers in Kuriguer's magical forests experience surges from elemental chaos. Tiefling sorcerers across Skratonia manifest infernal unpredictability, while Halfling magic-users find their luck creates unexpected magical results.",
            playstyle: "Unpredictable spellcaster with chaotic effects. Great for players who enjoy randomness and want to create memorable magical moments.",
            classId: classes.sorcerer.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.sorcerer_wild_magic_wild_magic_surge.id },
                    { id: classFeatures.sorcerer_wild_magic_tides_of_chaos.id },
                    { id: classFeatures.sorcerer_wild_magic_bend_luck.id },
                ]
            }
        }),
        sorcerer_divine_soul: await db.createSubclass({
            id: "subclass-sorcerer-divine-soul",
            name: "Divine Soul",
            slug: "divine-soul",
            description: "Sorcerers blessed by divine power who can access both arcane and divine magic.",
            alabastriaContext: "Aasimar Divine Soul Sorcerers in Skratonia channel celestial power through their bloodline. Protector Aasimar focus on healing and protection, while Dragonborn divine sorcerers in Bulsania combine draconic heritage with divine blessing.",
            playstyle: "Versatile caster with both arcane and divine magic. Ideal for players who want maximum spell variety and healing capabilities.",
            classId: classes.sorcerer.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.sorcerer_divine_soul_divine_magic.id },
                    { id: classFeatures.sorcerer_divine_soul_favored_by_the_gods.id },
                    { id: classFeatures.sorcerer_divine_soul_empowered_healing.id },
                ]
            }
        }),
        warlock_the_fiend: await db.createSubclass({
            id: "subclass-warlock-the-fiend",
            name: "The Fiend",
            slug: "the-fiend",
            description: "Warlocks who serve demons, devils, or other evil outsiders for infernal power.",
            alabastriaContext: "Tiefling Fiend Warlocks in Skratonia embrace their infernal heritage through diabolic pacts. Human desperate souls make bargains for power, while Half-Orc warlocks in Katman's swamps trade with savage fiendish entities.",
            playstyle: "Durable damage dealer with infernal power. Perfect for players who want to play with dark themes and consistent combat effectiveness.",
            classId: classes.warlock.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.warlock_the_fiend_dark_ones_blessing.id },
                    { id: classFeatures.warlock_the_fiend_dark_ones_own_luck.id },
                    { id: classFeatures.warlock_the_fiend_fiendish_resilience.id },
                ]
            }
        }),
        warlock_the_archfey: await db.createSubclass({
            id: "subclass-warlock-the-archfey",
            name: "The Archfey",
            slug: "the-archfey",
            description: "Warlocks bound to powerful fey lords who grant whimsical but potent magic.",
            alabastriaContext: "Eladrin Archfey Warlocks in Kuriguer's magic groves serve seasonal courts with natural connections. Satyr warlocks revel with fey lords in eternal parties, while Half-Elf warlocks bridge mortal and fey worlds through their pacts.",
            playstyle: "Enchantment-focused controller with fey magic. Great for players who want whimsical powers and social manipulation abilities.",
            classId: classes.warlock.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.warlock_the_archfey_fey_presence.id },
                    { id: classFeatures.warlock_the_archfey_misty_escape.id },
                    { id: classFeatures.warlock_the_archfey_beguiling_defenses.id },
                ]
            }
        }),
        warlock_the_great_old_one: await db.createSubclass({
            id: "subclass-warlock-the-great-old-one",
            name: "The Great Old One",
            slug: "the-great-old-one",
            description: "Warlocks who serve ancient, alien entities that exist beyond normal reality.",
            alabastriaContext: "Kalashtar Great Old One Warlocks in Skratonia accidentally contact alien minds through their psychic abilities. Human scholars uncover forbidden knowledge, while Githyanki warlocks encounter cosmic entities during planar travels.",
            playstyle: "Psychic-themed warlock with alien abilities. Ideal for players who enjoy cosmic horror themes and mental manipulation.",
            classId: classes.warlock.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.warlock_the_great_old_one_telepathic_communication.id },
                    { id: classFeatures.warlock_the_great_old_one_entropic_ward.id },
                    { id: classFeatures.warlock_the_great_old_one_thought_shield.id },
                ]
            }
        }),
        wizard_school_of_evocation: await db.createSubclass({
            id: "subclass-wizard-school-of-evocation",
            name: "School Of Evocation",
            slug: "school-of-evocation",
            description: "Wizards who specialize in destructive magic, mastering spells of force and energy.",
            alabastriaContext: "Dragonborn Evocation Wizards in Bulsania combine draconic heritage with destructive magic research. Fire Genasi wizards in Kuriguer master elemental destruction, while High Elf battle-mages refine combat spellcasting techniques.",
            playstyle: "Damage-focused wizard with safe area spells. Perfect for players who want to be the party's primary magical damage dealer.",
            classId: classes.wizard.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.wizard_school_of_evocation_sculpt_spells.id },
                    { id: classFeatures.wizard_school_of_evocation_potent_cantrip.id },
                    { id: classFeatures.wizard_school_of_evocation_empowered_evocation.id },
                ]
            }
        }),
        wizard_school_of_illusion: await db.createSubclass({
            id: "subclass-wizard-school-of-illusion",
            name: "School Of Illusion",
            slug: "school-of-illusion",
            description: "Wizards who master deception, misdirection, and reality-bending illusions.",
            alabastriaContext: "Gnome Illusion Wizards in Kuriguer's coastal towns combine natural illusion magic with scholarly study. Changeling wizards use their shapeshifting to enhance deceptive magic, while Kenku illusionists perfect mimicry through magical means.",
            playstyle: "Deception and control specialist with creative solutions. Great for players who enjoy creative problem-solving and battlefield control.",
            classId: classes.wizard.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.wizard_school_of_illusion_improved_minor_illusion.id },
                    { id: classFeatures.wizard_school_of_illusion_malleable_illusions.id },
                    { id: classFeatures.wizard_school_of_illusion_illusory_reality.id },
                ]
            }
        }),
        wizard_school_of_divination: await db.createSubclass({
            id: "subclass-wizard-school-of-divination",
            name: "School Of Divination",
            slug: "school-of-divination",
            description: "Wizards who peer into the future and uncover hidden knowledge through prophetic magic.",
            alabastriaContext: "High Elf Divination Wizards in Kuriguer use their long lives to study prophetic magic. Kalashtar wizards in Skratonia combine dream-plane visions with scholarly divination, while Human oracles interpret divine and arcane portents.",
            playstyle: "Support wizard with future sight and information gathering. Ideal for players who want to help the party through foresight and knowledge.",
            classId: classes.wizard.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.wizard_school_of_divination_portent.id },
                    { id: classFeatures.wizard_school_of_divination_expert_divination.id },
                    { id: classFeatures.wizard_school_of_divination_the_third_eye.id },
                ]
            }
        }),
        tactician_grandmaster: await db.createSubclass({
            id: "subclass-tactician-grandmaster",
            name: "Grandmaster",
            slug: "grandmaster",
            description: "Masters of grand strategy who excel at long-term planning and large-scale tactical operations.",
            alabastriaContext: "Grandmasters in Alabastria often serve as military advisors to kingdoms and guild leaders. Their strategic minds are crucial for planning large-scale operations against the most dangerous threats.",
            playstyle: "Long-term strategic planning and battlefield control. Perfect for players who enjoy complex tactical scenarios.",
            classId: classes.tactician.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.tactician_grandmaster_strategic_planning.id },
                    { id: classFeatures.tactician_grandmaster_battlefield_survey.id },
                    { id: classFeatures.tactician_grandmaster_grand_strategy.id },
                ]
            }
        }),
        tactician_mentalist: await db.createSubclass({
            id: "subclass-tactician-mentalist",
            name: "Mentalist",
            slug: "mentalist",
            description: "Tacticians who use psionic abilities and mental powers to read enemy intentions and coordinate allies through telepathic communication.",
            alabastriaContext: "Mentalists in Alabastria often work with the Huntbound Order's intelligence operations, using their psionic abilities to gather information and coordinate covert missions.",
            playstyle: "Psionic support and battlefield communication. Great for players who want to combine strategy with mental powers.",
            classId: classes.tactician.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.tactician_mentalist_telepathic_link.id },
                    { id: classFeatures.tactician_mentalist_mind_reading.id },
                    { id: classFeatures.tactician_mentalist_psychic_command.id },
                ]
            }
        }),
        tactician_scholar: await db.createSubclass({
            id: "subclass-tactician-scholar",
            name: "Scholar",
            slug: "scholar",
            description: "Academic tacticians who study warfare, history, and enemy tactics to develop innovative strategies and countermeasures.",
            alabastriaContext: "Scholars in Alabastria often work in the magical academies of Kuriguer, studying ancient warfare and developing new tactics for modern threats.",
            playstyle: "Knowledge-based strategy and research. Ideal for players who enjoy learning about enemy types and developing counter-strategies.",
            classId: classes.tactician.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.tactician_scholar_tactical_knowledge.id },
                    { id: classFeatures.tactician_scholar_research_and_development.id },
                    { id: classFeatures.tactician_scholar_master_tactician.id },
                ]
            }
        }),
        tactician_war_mind: await db.createSubclass({
            id: "subclass-tactician-war-mind",
            name: "War Mind",
            slug: "war-mind",
            description: "Combat-focused tacticians who combine martial prowess with strategic thinking, leading from the front lines.",
            alabastriaContext: "War Minds in Alabastria often serve as field commanders in the Huntbound Order, leading dangerous missions and inspiring their fellow hunters to greatness.",
            playstyle: "Combat-focused strategy and leadership. Perfect for players who want to combine tactical thinking with martial prowess.",
            classId: classes.tactician.id,
            keyFeatures: {
                connect: [
                    { id: classFeatures.tactician_war_mind_combat_analysis.id },
                    { id: classFeatures.tactician_war_mind_battlefield_presence.id },
                    { id: classFeatures.tactician_war_mind_war_leader.id },
                ]
            }
        }),
    }
}