import { Prisma } from "@prismagen/client";
import * as db from "@lib/db-seed";
import { Classes/* , ClassFeatures */ } from "./index";

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
    //classFeatures: ClassFeatures;
}
export async function seedSubclasses(params: SeedSubclassesParams): Promise<Subclasses> {
    const { classes /*, classFeatures */ } = params;
    return {
        artificer_alchemist: await db.createSubclass({
            id: "subclass-artificer-alchemist",
            name: "Alchemist",
            //slug: "alchemist",
            description: "Masters of magical chemistry who brew potions and elixirs to heal allies and harm enemies.",
            alabastriaContext: "Since The Bringing, alchemists have been essential for survival, creating healing draughts when traditional medicine failed. During the 300-600 cycle expansion, their skills became crucial for trade caravans and military campaigns. The magical academies that arose in Kuriguer during the Magic Surge period particularly benefit from alchemical research, though these practitioners can be found wherever innovation meets necessity.",
            playstyle: "Support-focused healer and utility caster. Perfect for players who want to be the party's medic while contributing unique magical solutions.",
            classId: classes.artificer.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.artificer_alchemist_experimental_elixir.id },
                    //{ id: classFeatures.artificer_alchemist_healing_word.id },
                    //{ id: classFeatures.artificer_alchemist_alchemical_savant.id },
                //]
            //}
        }),
        artificer_armorer: await db.createSubclass({
            id: "subclass-artificer-armorer",
            name: "Armorer",
            //slug: "armorer",
            description: "Creators of magical armor who turn their own body into a walking fortress or stealth suit.",
            alabastriaContext: "The need for protective equipment became critical during the First Continental War (100-300 cycles), when traditional armor proved insufficient against magical threats. Armorers developed their craft through necessity, creating adaptive suits that could protect against both blade and spell. The volcanic regions of Alatman offer ideal conditions for such work, though these artisans serve wherever warriors face danger.",
            playstyle: "Tanky front-line fighter or stealthy infiltrator. Great for players who want to be heavily armored but still have magical utility.",
            classId: classes.artificer.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.artificer_armorer_arcane_armor.id },
                    //{ id: classFeatures.artificer_armorer_armor_model.id },
                    //{ id: classFeatures.artificer_armorer_extra_attack.id },
                //]
            //}
        }),
        artificer_artillerist: await db.createSubclass({
            id: "subclass-artificer-artillerist",
            name: "Artillerist",
            //slug: "artillerist",
            description: "Experts in explosive magic and ranged combat who create magical turrets and enhance projectiles.",
            alabastriaContext: "The Wyvern Wars (300-600 cycles) demonstrated the need for ranged magical weapons that could strike flying threats. Artillerists developed their craft during this era of unprecedented cooperation, creating weapons that combined mechanical precision with arcane power. Their innovations proved invaluable for defending settlements, particularly in regions like Bulsania where fortresses require long-range defensive capabilities.",
            playstyle: "Ranged damage dealer with battlefield control. Ideal for players who enjoy tactical positioning and dealing consistent damage from afar.",
            classId: classes.artificer.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.artificer_artillerist_eldritch_cannons.id },
                    //{ id: classFeatures.artificer_artillerist_arcane_firearm.id },
                    //{ id: classFeatures.artificer_artillerist_explosive_cannon.id },
                //]
            //}
        }),
        artificer_battle_smith: await db.createSubclass({
            id: "subclass-artificer-battle-smith",
            name: "Battle Smith",
            //slug: "battle-smith",
            description: "Warrior-inventors who combine martial prowess with magical constructs, accompanied by a steel defender.",
            alabastriaContext: "The concept of construct companions emerged during the early settlements when resources were scarce and every defender mattered. Battle Smiths perfected their craft during the Kingdom Formation period, creating loyal steel defenders to supplement military forces. Their techniques have spread across continents, finding particular use in Skratonia's city defenses where automated guardians can patrol vast urban areas.",
            playstyle: "Versatile warrior with a loyal companion. Perfect for players who want to fight in melee while having a pet and magical utility.",
            classId: classes.artificer.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.artificer_battle_smith_steel_defender.id },
                    //{ id: classFeatures.artificer_battle_smith_battle_ready.id },
                    //{ id: classFeatures.artificer_battle_smith_extra_attack.id },
                //]
            //}
        }),
        barbarian_path_of_the_ancestral_guardian: await db.createSubclass({
            id: "subclass-barbarian-path-of-the-ancestral-guardian",
            name: "Path Of The Ancestral Guardian",
            //slug: "path-of-the-ancestral-guardian",
            description: "Barbarians who call upon the spirits of their ancestors to protect allies and hinder enemies.",
            alabastriaContext: "In the desperate early days after The Bringing, when families were torn apart and ancestors lost, some warriors learned to commune with the spirits of those who came before. This path emerged from the need to honor those lost during the initial settlements and resource wars. The practice has spread across all continents, finding particular resonance among those who maintain strong tribal traditions.",
            playstyle: "Protective tank who shields allies while dealing damage. Great for players who want to be the party's guardian and protector.",
            classId: classes.barbarian.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.barbarian_path_of_the_ancestral_guardian_ancestral_protectors.id },
                    //{ id: classFeatures.barbarian_path_of_the_ancestral_guardian_spirit_shield.id },
                    //{ id: classFeatures.barbarian_path_of_the_ancestral_guardian_consult_the_spirits.id },
                //]
            //}
        }),
        barbarian_path_of_the_beast: await db.createSubclass({
            id: "subclass-barbarian-path-of-the-beast",
            name: "Path Of The Beast",
            //slug: "path-of-the-beast",
            description: "Barbarians whose rage manifests as bestial transformations, growing claws, fangs, or other natural weapons.",
            alabastriaContext: "The Path of the Beast emerged from those who adapted to Alabastria's wilds during the first 100 cycles, when survival meant embracing one's primal nature. Warriors discovered that their rage could manifest as bestial transformations, growing claws and fangs when civilization's tools failed. This path remains popular among those who live close to untamed wilderness.",
            playstyle: "Versatile melee combatant with animal-like abilities. Perfect for players who want to embody primal savagery and adaptability.",
            classId: classes.barbarian.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.barbarian_path_of_the_beast_form_of_the_beast.id },
                    //{ id: classFeatures.barbarian_path_of_the_beast_bestial_soul.id },
                    //{ id: classFeatures.barbarian_path_of_the_beast_infectious_fury.id },
                //]
            //}
        }),
        barbarian_path_of_the_berserker: await db.createSubclass({
            id: "subclass-barbarian-path-of-the-berserker",
            name: "Path Of The Berserker",
            //slug: "path-of-the-berserker",
            description: "Warriors who abandon all restraint in battle, becoming unstoppable forces of destruction.",
            alabastriaContext: "The berserker tradition arose during the desperate struggles of the first settlements, when warriors had to abandon all restraint to survive against overwhelming odds. During the Plains Rebellion and resource wars, some fighters discovered that complete abandonment of caution could turn the tide. This path appeals to those facing impossible odds, regardless of continent.",
            playstyle: "Maximum damage output with high risk/reward mechanics. Ideal for players who want to be an unstoppable force of destruction.",
            classId: classes.barbarian.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.barbarian_path_of_the_berserker_frenzy.id },
                    //{ id: classFeatures.barbarian_path_of_the_berserker_mindless_rage.id },
                    //{ id: classFeatures.barbarian_path_of_the_berserker_intimidating_presence.id },
                //]
            //}
        }),
        barbarian_path_of_the_storm_herald: await db.createSubclass({
            id: "subclass-barbarian-path-of-the-storm-herald",
            name: "Path Of The Storm Herald",
            //slug: "path-of-the-storm-herald",
            description: "Barbarians who channel elemental forces during their rage, creating auras of destruction around them.",
            alabastriaContext: "Storm Heralds learned to channel elemental forces during the harsh early cycles, when natural disasters threatened settlements as much as enemies did. Warriors who survived mountain storms, coastal tempests, and arctic blizzards discovered they could harness these forces in battle. This path finds particular use in regions with extreme weather, though its practitioners can be found wherever nature's fury is respected.",
            playstyle: "Area-of-effect damage dealer who affects the battlefield around them. Great for players who want elemental powers and battlefield control.",
            classId: classes.barbarian.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.barbarian_path_of_the_storm_herald_storm_aura.id },
                    //{ id: classFeatures.barbarian_path_of_the_storm_herald_storm_soul.id },
                    //{ id: classFeatures.barbarian_path_of_the_storm_herald_shielding_storm.id },
                //]
            //}
        }),
        barbarian_path_of_the_totem_warrior: await db.createSubclass({
            id: "subclass-barbarian-path-of-the-totem-warrior",
            name: "Path Of The Totem Warrior",
            //slug: "path-of-the-totem-warrior",
            description: "Barbarians who form spiritual bonds with animal totems, gaining their traits and wisdom.",
            alabastriaContext: "Totem Warriors formed spiritual bonds with animal spirits during the initial settlements, when understanding local wildlife meant survival. This tradition developed as different groups adapted to their new environments, forming connections with the creatures that shared their lands. The practice has spread across all continents, with each region developing bonds to its native animals.",
            playstyle: "Versatile barbarian with nature-themed abilities. Perfect for players who want spiritual connection to animals and varied utility.",
            classId: classes.barbarian.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.barbarian_path_of_the_totem_warrior_totem_spirit.id },
                    //{ id: classFeatures.barbarian_path_of_the_totem_warrior_aspect_of_the_beast.id },
                    //{ id: classFeatures.barbarian_path_of_the_totem_warrior_totemic_attunement.id },
                //]
            //}
        }),
        barbarian_path_of_wild_magic: await db.createSubclass({
            id: "subclass-barbarian-path-of-wild-magic",
            name: "Path Of Wild Magic",
            //slug: "path-of-wild-magic",
            description: "Barbarians touched by chaotic magic whose rage triggers unpredictable magical effects.",
            alabastriaContext: "The Path of Wild Magic emerged during Kuriguer's Magic Surge (300-600 cycles), when magical anomalies began appearing throughout the forests. Some warriors discovered that their rage could trigger unpredictable magical effects, channeling the chaos that permeated certain regions. This path appeals to those touched by magical forces, regardless of their origin.",
            playstyle: "Unpredictable barbarian with magical effects. Ideal for players who enjoy chaos and want magic mixed with martial combat.",
            classId: classes.barbarian.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.barbarian_path_of_wild_magic_magic_awareness.id },
                    //{ id: classFeatures.barbarian_path_of_wild_magic_wild_surge.id },
                    //{ id: classFeatures.barbarian_path_of_wild_magic_bolstering_magic.id },
                //]
            //}
        }),
        barbarian_path_of_the_zealot: await db.createSubclass({
            id: "subclass-barbarian-path-of-the-zealot",
            name: "Path Of The Zealot",
            //slug: "path-of-the-zealot",
            description: "Divine warriors whose rage is fueled by religious fervor and celestial or infernal power.",
            alabastriaContext: "Zealots emerged during the Kingdom Formation period when religious fervor became a driving force in warfare. Warriors who combined divine faith with primal rage proved devastating on the battlefield, channeling celestial or infernal power through their fury. This path has found followers across all continents, wherever faith and combat intersect.",
            playstyle: "Religious warrior with divine damage and support abilities. Perfect for players who want to combine faith with fury.",
            classId: classes.barbarian.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.barbarian_path_of_the_zealot_divine_fury.id },
                    //{ id: classFeatures.barbarian_path_of_the_zealot_warrior_of_the_gods.id },
                    //{ id: classFeatures.barbarian_path_of_the_zealot_zealous_presence.id },
                //]
            //}
        }),
        barbarian_path_of_the_battlerager: await db.createSubclass({
            id: "subclass-barbarian-path-of-the-battlerager",
            name: "Path Of The Battlerager",
            //slug: "path-of-the-battlerager",
            description: "Dwarven warriors who wear spiked armor and use it as a weapon, becoming whirlwinds of destruction in combat.",
            alabastriaContext: "The Battlerager tradition developed during the First Continental War, when dwarven warriors needed to maximize their combat effectiveness. They learned to turn their armor into weapons, becoming whirlwinds of destruction. This aggressive style proved effective in the harsh conditions of Bulsania's fortresses, though the technique has spread to other militarized regions.",
            playstyle: "Aggressive tank who uses armor as a weapon. Perfect for players who want to be a mobile, damaging tank.",
            classId: classes.barbarian.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.barbarian_path_of_the_battlerager_battlerager_armor.id },
                    //{ id: classFeatures.barbarian_path_of_the_battlerager_reckless_abandon.id },
                    //{ id: classFeatures.barbarian_path_of_the_battlerager_battlerager_charge.id },
                //]
            //}
        }),
        barbarian_path_of_the_giant: await db.createSubclass({
            id: "subclass-barbarian-path-of-the-giant",
            name: "Path Of The Giant",
            //slug: "path-of-the-giant",
            description: "Barbarians who channel the power of giants, growing in size and strength as they rage, becoming towering forces of destruction.",
            alabastriaContext: "The Path of the Giant emerged from legends of ancient giants who may have existed before The Bringing. Some warriors discovered they could channel the power of these primordial beings, growing in size and strength during their rage. This path has found particular resonance in mountainous regions where giant legends persist, though its practitioners can be found across all continents.",
            playstyle: "Size-changing warrior with area control and massive damage. Great for players who want to be a huge, intimidating presence on the battlefield.",
            classId: classes.barbarian.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.barbarian_path_of_the_giant_giants_might.id },
                    //{ id: classFeatures.barbarian_path_of_the_giant_elemental_cleaver.id },
                    //{ id: classFeatures.barbarian_path_of_the_giant_mighty_impel.id },
                //]
            //}
        }),
        bard_college_of_creation: await db.createSubclass({
            id: "subclass-bard-college-of-creation",
            name: "College Of Creation",
            //slug: "college-of-creation",
            description: "Bards who use the Song of Creation to bring objects and creatures into existence through performance.",
            alabastriaContext: "The College of Creation emerged during the Cultural Renaissance (600-800 cycles), when art and performance flourished beyond mere survival needs. Bards discovered they could use the Song of Creation to bring objects and creatures into existence through performance. This art form has found particular appreciation in regions where magical academies encourage creative expression, though its practitioners travel across all continents.",
            playstyle: "Creative support with unique utility options. Great for players who want to solve problems through magical creativity.",
            classId: classes.bard.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.bard_college_of_creation_note_of_potential.id },
                    //{ id: classFeatures.bard_college_of_creation_performance_of_creation.id },
                    //{ id: classFeatures.bard_college_of_creation_animating_performance.id },
                //]
            //}
        }),
        bard_college_of_eloquence: await db.createSubclass({
            id: "subclass-bard-college-of-eloquence",
            name: "College Of Eloquence",
            //slug: "college-of-eloquence",
            description: "Masters of speech and persuasion who can sway minds and guarantee their words have impact.",
            alabastriaContext: "The College of Eloquence became essential during the Kingdom Formation period, when diplomacy was needed to prevent constant warfare. As the Skratonian Alliance developed its council system, masters of speech learned to guarantee their words would have impact. This tradition has proven invaluable in the complex political landscape of modern Alabastria, where words can prevent conflicts.",
            playstyle: "Social manipulation and guaranteed success. Perfect for players who want to excel in roleplay and social encounters.",
            classId: classes.bard.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.bard_college_of_eloquence_silver_tongue.id },
                    //{ id: classFeatures.bard_college_of_eloquence_unsettling_words.id },
                    //{ id: classFeatures.bard_college_of_eloquence_universal_speech.id },
                //]
            //}
        }),
        bard_college_of_glamour: await db.createSubclass({
            id: "subclass-bard-college-of-glamour",
            name: "College Of Glamour",
            //slug: "college-of-glamour",
            description: "Bards touched by fey magic who use supernatural beauty and charm to entrance and command.",
            alabastriaContext: "The College of Glamour developed from encounters with fey magic during Kuriguer's Magic Surge. Bards touched by fey power discovered they could use supernatural beauty and charm to entrance and command. This art form has spread across continents, finding particular use in courts and theaters where enchantment can sway hearts and minds.",
            playstyle: "Enchantment-focused controller with fey magic. Ideal for players who want to charm enemies and inspire allies with supernatural presence.",
            classId: classes.bard.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.bard_college_of_glamour_mantle_of_inspiration.id },
                    //{ id: classFeatures.bard_college_of_glamour_enthralling_performance.id },
                    //{ id: classFeatures.bard_college_of_glamour_mantle_of_majesty.id },
                //]
            //}
        }),
        bard_college_of_lore: await db.createSubclass({
            id: "subclass-bard-college-of-lore",
            name: "College Of Lore",
            //slug: "college-of-lore",
            description: "Scholars and knowledge-seekers who collect secrets and magical techniques from across the world.",
            alabastriaContext: "The College of Lore emerged during the Great Trade Expansion (300-600 cycles), when knowledge from different realms became crucial for survival and prosperity. Bards who collected secrets and magical techniques from across the world became invaluable advisors. Their tradition continues in the modern era, with scholars preserving knowledge from all continents in libraries and academies.",
            playstyle: "Ultimate versatility with access to any spell. Perfect for players who want maximum options and knowledge-based roleplay.",
            classId: classes.bard.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.bard_college_of_lore_cutting_words.id },
                    //{ id: classFeatures.bard_college_of_lore_additional_magical_secrets.id },
                    //{ id: classFeatures.bard_college_of_lore_peerless_skill.id },
                //]
            //}
        }),
        bard_college_of_spirits: await db.createSubclass({
            id: "subclass-bard-college-of-spirits",
            name: "College Of Spirits",
            //slug: "college-of-spirits",
            description: "Bards who commune with spirits and channel their stories for magical effects.",
            alabastriaContext: "The College of Spirits developed from those who learned to commune with the spirits of the departed after The Bringing, when countless souls were lost and their stories needed to be preserved. Bards discovered they could channel these stories for magical effects, keeping memories alive through performance. This tradition has found particular resonance in regions touched by death and loss.",
            playstyle: "Unpredictable support with spiritual themes. Great for players who enjoy ghostly lore and random magical effects.",
            classId: classes.bard.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.bard_college_of_spirits_guiding_whispers.id },
                    //{ id: classFeatures.bard_college_of_spirits_spirit_session.id },
                    //{ id: classFeatures.bard_college_of_spirits_tales_from_beyond.id },
                //]
            //}
        }),
        bard_college_of_swords: await db.createSubclass({
            id: "subclass-bard-college-of-swords",
            name: "College Of Swords",
            //slug: "college-of-swords",
            description: "Warrior-poets who combine bladework with performance, fighting with artistic flair.",
            alabastriaContext: "The College of Swords emerged during the First Continental War, when bards needed to fight alongside warriors while maintaining their artistic expression. These warrior-poets combined bladework with performance, creating a fighting style that was both effective and beautiful. This tradition has spread across all continents, finding particular use in urban centers where entertainment and combat often intersect.",
            playstyle: "Melee-focused bard with combat prowess. Perfect for players who want to fight up close while maintaining bardic versatility.",
            classId: classes.bard.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.bard_college_of_swords_fighting_style.id },
                    //{ id: classFeatures.bard_college_of_swords_blade_flourish.id },
                    //{ id: classFeatures.bard_college_of_swords_extra_attack.id },
                //]
            //}
        }),
        bard_college_of_valor: await db.createSubclass({
            id: "subclass-bard-college-of-valor",
            name: "College Of Valor",
            //slug: "college-of-valor",
            description: "Battle-bards who inspire courage in combat and fight alongside their allies.",
            alabastriaContext: "The College of Valor developed during the early wars, when bards needed to inspire courage in combat and fight alongside their allies. Battle-bards learned to combine performance with martial prowess, leading charges while singing battle hymns. This tradition has proven essential in militarized societies, though its practitioners can be found wherever warriors need inspiration.",
            playstyle: "Balanced combat and support character. Ideal for players who want to fight effectively while inspiring allies.",
            classId: classes.bard.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.bard_college_of_valor_combat_inspiration.id },
                    //{ id: classFeatures.bard_college_of_valor_medium_armor_and_shields.id },
                    //{ id: classFeatures.bard_college_of_valor_extra_attack.id },
                //]
            //}
        }),
        bard_college_of_whispers: await db.createSubclass({
            id: "subclass-bard-college-of-whispers",
            name: "College Of Whispers",
            //slug: "college-of-whispers",
            description: "Spies and manipulators who use secrets and psychic magic to control and deceive.",
            alabastriaContext: "The College of Whispers emerged during the complex political landscape of the Modern Era, when information became as valuable as gold. Bards who specialized in secrets and psychic magic learned to control and deceive through whispered words. This tradition has found particular use in regions with complex politics, where manipulation can determine the fate of kingdoms.",
            playstyle: "Espionage and psychological warfare. Perfect for players who want to be the party's spy and manipulator.",
            classId: classes.bard.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.bard_college_of_whispers_psychic_blades.id },
                    //{ id: classFeatures.bard_college_of_whispers_words_of_terror.id },
                    //{ id: classFeatures.bard_college_of_whispers_mantle_of_whispers.id },
                //]
            //}
        }),
        cleric_forge_domain: await db.createSubclass({
            id: "subclass-cleric-forge-domain",
            name: "Forge Domain",
            //slug: "forge-domain",
            description: "Clerics of smithing gods who bless weapons and armor with divine power.",
            alabastriaContext: "The Forge Domain became essential during the early settlements, when smithing gods were needed to create tools and weapons for survival. As kingdoms formed and warfare developed, clerics learned to bless weapons and armor with divine power. This tradition has found particular use in regions with active forges and mining operations, though its practitioners serve wherever creation and protection are needed.",
            playstyle: "Tanky support focused on equipment enhancement. Perfect for players who want to craft magical items and support through divine smithing.",
            classId: classes.cleric.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.cleric_forge_domain_blessing_of_the_forge.id },
                    //{ id: classFeatures.cleric_forge_domain_channel_divinity_artisans_blessing.id },
                    //{ id: classFeatures.cleric_forge_domain_soul_of_the_forge.id },
                //]
            //}
        }),
        cleric_life_domain: await db.createSubclass({
            id: "subclass-cleric-life-domain",
            name: "Life Domain",
            //slug: "life-domain",
            description: "Healers dedicated to preserving and restoring life, the most traditional clerical role.",
            alabastriaContext: "The Life Domain was perhaps the most crucial during The Bringing, when healers dedicated to preserving life became essential for survival. As settlements stabilized, these clerics established temples and hospitals, becoming beacons of hope. Their tradition continues in the modern era, serving wherever life needs protection and restoration.",
            playstyle: "Ultimate healer focused on keeping everyone alive. Ideal for players who want to be the party's primary source of healing and support.",
            classId: classes.cleric.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.cleric_life_domain_disciple_of_life.id },
                    //{ id: classFeatures.cleric_life_domain_channel_divinity_preserve_life.id },
                    //{ id: classFeatures.cleric_life_domain_blessed_healer.id },
                //]
            //}
        }),
        cleric_war_domain: await db.createSubclass({
            id: "subclass-cleric-war-domain",
            name: "War Domain",
            //slug: "war-domain",
            description: "Battle-clerics who serve gods of war and conflict, blessing warriors and leading charges.",
            alabastriaContext: "The War Domain emerged during the First Continental War, when battle-clerics were needed to bless warriors and lead charges. Clerics who served gods of war and conflict proved essential in military campaigns. This tradition has found particular use in militarized societies, though its practitioners serve wherever conflict requires divine guidance.",
            playstyle: "Combat-focused cleric who fights on the front lines. Great for players who want to be both warrior and priest.",
            classId: classes.cleric.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.cleric_war_domain_war_priest.id },
                    //{ id: classFeatures.cleric_war_domain_channel_divinity_guided_strike.id },
                    //{ id: classFeatures.cleric_war_domain_war_domain_spells.id },
                //]
            //}
        }),
        cleric_tempest_domain: await db.createSubclass({
            id: "subclass-cleric-tempest-domain",
            name: "Tempest Domain",
            //slug: "tempest-domain",
            description: "Storm-callers who channel the power of thunder, lightning, and ocean tempests.",
            alabastriaContext: "The Tempest Domain developed from the need to understand and channel natural disasters during the harsh early cycles. Clerics learned to call upon the power of thunder, lightning, and ocean tempests, turning nature's fury into a weapon. This tradition has found particular resonance in coastal and mountainous regions where storms are common, though its practitioners can be found wherever weather's power is respected.",
            playstyle: "Destructive spellcaster with weather-based powers. Perfect for players who want to call down divine storms and lightning.",
            classId: classes.cleric.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.cleric_tempest_domain_wrath_of_the_storm.id },
                    //{ id: classFeatures.cleric_tempest_domain_channel_divinity_destructive_wrath.id },
                    //{ id: classFeatures.cleric_tempest_domain_thunderbolt_strike.id },
                //]
            //}
        }),
        cleric_light_domain: await db.createSubclass({
            id: "subclass-cleric-light-domain",
            name: "Light Domain",
            //slug: "light-domain",
            description: "Clerics of light and sun gods who wield radiant energy to illuminate darkness and burn away evil.",
            alabastriaContext: "The Light Domain became crucial during the early cycles, when darkness and unknown threats made light a necessity for survival. Clerics of light and sun gods learned to wield radiant energy to illuminate darkness and burn away evil. Their magic has proven particularly effective against undead and fiends, making them valuable members of organizations like the Huntbound Order.",
            playstyle: "Offensive caster with radiant damage and area control. Great for players who want to be a divine blaster with utility.",
            classId: classes.cleric.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.cleric_light_domain_warding_flare.id },
                    //{ id: classFeatures.cleric_light_domain_channel_divinity_radiance_of_the_dawn.id },
                    //{ id: classFeatures.cleric_light_domain_potent_spellcasting.id },
                //]
            //}
        }),
        cleric_nature_domain: await db.createSubclass({
            id: "subclass-cleric-nature-domain",
            name: "Nature Domain",
            //slug: "nature-domain",
            description: "Clerics who serve nature gods, wielding the power of the natural world to protect and nurture life.",
            alabastriaContext: "The Nature Domain emerged during the initial settlements, when understanding and respecting the natural world meant survival. Clerics who served nature gods learned to protect and nurture life while wielding the power of the natural world. This tradition has found particular use in wild regions where civilization meets untamed wilderness, though its practitioners serve wherever nature needs protection.",
            playstyle: "Versatile caster with nature magic and elemental resistance. Perfect for players who want to combine divine power with nature magic.",
            classId: classes.cleric.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.cleric_nature_domain_acolyte_of_nature.id },
                    //{ id: classFeatures.cleric_nature_domain_channel_divinity_charm_animals_and_plants.id },
                    //{ id: classFeatures.cleric_nature_domain_dampen_elements.id },
                //]
            //}
        }),
        cleric_trickery_domain: await db.createSubclass({
            id: "subclass-cleric-trickery-domain",
            name: "Trickery Domain",
            //slug: "trickery-domain",
            description: "Clerics of trickster gods who use deception, illusion, and cunning to outwit enemies and protect their allies.",
            alabastriaContext: "The Trickery Domain developed during the complex political landscape of the Modern Era, when deception and cunning became essential tools. Clerics of trickster gods learned to use illusion and cunning to outwit enemies and protect their allies. This tradition has proven valuable in espionage and dangerous missions, making these clerics sought after by organizations like the Huntbound Order.",
            playstyle: "Stealth-focused caster with illusion magic and deception. Great for players who want to be sneaky and cunning.",
            classId: classes.cleric.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.cleric_trickery_domain_blessing_of_the_trickster.id },
                    //{ id: classFeatures.cleric_trickery_domain_channel_divinity_invoke_duplicity.id },
                    //{ id: classFeatures.cleric_trickery_domain_cloak_of_shadows.id },
                //]
            //}
        }),
        druid_circle_of_the_land: await db.createSubclass({
            id: "subclass-druid-circle-of-the-land",
            name: "Circle Of The Land",
            //slug: "circle-of-the-land",
            description: "Druids connected to specific terrains who draw additional magic from their chosen environment.",
            alabastriaContext: "The Circle of the Land developed during the initial settlements, when druids needed to adapt their magic to specific terrains for survival. As different groups settled in forests, plains, swamps, and mountains, they learned to draw additional magic from their chosen environment. This tradition has spread across all continents, with each region developing connections to its native terrain.",
            playstyle: "Spell-focused druid with terrain specialization. Great for players who want maximum spellcasting power and environmental themes.",
            classId: classes.druid.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.druid_circle_of_the_land_bonus_cantrip.id },
                    //{ id: classFeatures.druid_circle_of_the_land_natural_recovery.id },
                    //{ id: classFeatures.druid_circle_of_the_land_circle_spells.id },
                //]
            //}
        }),
        druid_circle_of_the_moon: await db.createSubclass({
            id: "subclass-druid-circle-of-the-moon",
            name: "Circle Of The Moon",
            //slug: "circle-of-the-moon",
            description: "Druids who excel at shapeshifting, taking more powerful beast forms for combat.",
            alabastriaContext: "The Circle of the Moon emerged during the first 100 cycles, when druids needed to become powerful combatants to protect their communities. Those who excelled at shapeshifting discovered they could take more powerful beast forms for combat. This tradition has found particular use in wild regions where druids must defend against dangerous creatures, though its practitioners can be found wherever nature needs fierce protectors.",
            playstyle: "Melee combatant through shapeshifting. Perfect for players who want to fight as animals and have strong physical presence.",
            classId: classes.druid.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.druid_circle_of_the_moon_combat_wild_shape.id },
                    //{ id: classFeatures.druid_circle_of_the_moon_circle_forms.id },
                    //{ id: classFeatures.druid_circle_of_the_moon_primal_strike.id },
                //]
            //}
        }),
        druid_circle_of_wildfire: await db.createSubclass({
            id: "subclass-druid-circle-of-wildfire",
            name: "Circle Of Wildfire",
            //slug: "circle-of-wildfire",
            description: "Druids who understand that destruction and renewal are part of nature's cycle, wielding cleansing flames.",
            alabastriaContext: "The Circle of Wildfire developed from understanding that destruction and renewal are part of nature's cycle. During the early settlements, druids learned that cleansing flames could clear land for new growth and protect communities. This tradition has found particular use in regions where fire is part of the natural cycle, though its practitioners serve wherever renewal follows destruction.",
            playstyle: "Fire-focused druid with elemental companion. Ideal for players who want to combine destruction and healing themes.",
            classId: classes.druid.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.druid_circle_of_wildfire_summon_wildfire_spirit.id },
                    //{ id: classFeatures.druid_circle_of_wildfire_enhanced_bond.id },
                    //{ id: classFeatures.druid_circle_of_wildfire_circle_spells.id },
                //]
            //}
        }),
        fighter_champion: await db.createSubclass({
            id: "subclass-fighter-champion",
            name: "Champion",
            //slug: "champion",
            description: "Fighters focused on physical excellence and improved critical hits, representing peak athletic ability.",
            alabastriaContext: "The Champion archetype represents fighters who focus on physical excellence and improved critical hits, embodying peak athletic ability. This path emerged during the early wars, when warriors needed to maximize their combat effectiveness through pure determination and training. Champions can be found across all continents, wherever warriors seek to perfect their physical prowess.",
            playstyle: "Simple but effective warrior focused on consistent damage. Perfect for new players or those who want straightforward combat effectiveness.",
            classId: classes.fighter.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.fighter_champion_improved_critical.id },
                    //{ id: classFeatures.fighter_champion_remarkable_athlete.id },
                    //{ id: classFeatures.fighter_champion_additional_fighting_style.id },
                //]
            //}
        }),
        fighter_battle_master: await db.createSubclass({
            id: "subclass-fighter-battle-master",
            name: "Battle Master",
            //slug: "battle-master",
            description: "Tactical fighters who use combat maneuvers to control the battlefield and enhance their attacks.",
            alabastriaContext: "The Battle Master archetype developed during the First Continental War, when tactical fighters were needed to control the battlefield and coordinate troops. Fighters who mastered combat maneuvers learned to enhance their attacks and control enemy movements. This tradition has found particular use in militarized societies, though its practitioners serve wherever tactical thinking can turn the tide of battle.",
            playstyle: "Tactical combatant with versatile options. Great for players who enjoy strategic thinking and battlefield control.",
            classId: classes.fighter.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.fighter_battle_master_combat_superiority.id },
                    //{ id: classFeatures.fighter_battle_master_maneuvers.id },
                    //{ id: classFeatures.fighter_battle_master_know_your_enemy.id },
                //]
            //}
        }),
        fighter_eldritch_knight: await db.createSubclass({
            id: "subclass-fighter-eldritch-knight",
            name: "Eldritch Knight",
            //slug: "eldritch-knight",
            description: "Warrior-mages who combine martial prowess with arcane magic, creating spellswords.",
            alabastriaContext: "The Eldritch Knight archetype emerged during Kuriguer's Magic Surge, when warriors needed to combine martial prowess with arcane magic. These warrior-mages learned to create spellswords who could enhance their combat with magical utility. This tradition has found particular use in regions with magical academies, though its practitioners serve wherever magic and martial skill intersect.",
            playstyle: "Magical warrior with utility spells and combat enhancement. Ideal for players who want both sword and sorcery.",
            classId: classes.fighter.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.fighter_eldritch_knight_spellcasting.id },
                    //{ id: classFeatures.fighter_eldritch_knight_weapon_bond.id },
                    //{ id: classFeatures.fighter_eldritch_knight_war_magic.id },
                //]
            //}
        }),
        monk_way_of_the_open_hand: await db.createSubclass({
            id: "subclass-monk-way-of-the-open-hand",
            name: "Way Of The Open Hand",
            //slug: "way-of-the-open-hand",
            description: "Traditional monks who master unarmed combat and ki manipulation techniques.",
            alabastriaContext: "The Way of the Open Hand represents the traditional monk path, mastering unarmed combat and ki manipulation techniques. This path emerged during the early settlements, when warriors needed to fight without weapons. Monks who perfected classical martial arts established monasteries across all continents, teaching their techniques to those seeking inner peace through physical discipline.",
            playstyle: "Classic monk focused on unarmed combat mastery. Perfect for players who want the traditional monk experience with reliable techniques.",
            classId: classes.monk.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.monk_way_of_the_open_hand_open_hand_technique.id },
                    //{ id: classFeatures.monk_way_of_the_open_hand_wholeness_of_body.id },
                    //{ id: classFeatures.monk_way_of_the_open_hand_tranquility.id },
                //]
            //}
        }),
        monk_way_of_shadow: await db.createSubclass({
            id: "subclass-monk-way-of-shadow",
            name: "Way Of Shadow",
            //slug: "way-of-shadow",
            description: "Ninja-like monks who use stealth, darkness, and illusion magic for infiltration and assassination.",
            alabastriaContext: "The Way of Shadow developed during the complex political landscape of the Modern Era, when monks needed stealth and infiltration skills. These ninja-like monks learned to use darkness and illusion magic for infiltration and assassination. This tradition has found particular use in regions with dangerous political intrigue, though its practitioners serve wherever stealth and shadow are needed.",
            playstyle: "Stealth-focused monk with magical abilities. Great for players who want to be sneaky scouts and assassins.",
            classId: classes.monk.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.monk_way_of_shadow_shadow_arts.id },
                    //{ id: classFeatures.monk_way_of_shadow_shadow_step.id },
                    //{ id: classFeatures.monk_way_of_shadow_cloak_of_shadows.id },
                //]
            //}
        }),
        monk_way_of_the_four_elements: await db.createSubclass({
            id: "subclass-monk-way-of-the-four-elements",
            name: "Way Of The Four Elements",
            //slug: "way-of-the-four-elements",
            description: "Monks who channel elemental forces through their ki, becoming living conduits of elemental power.",
            alabastriaContext: "The Way of the Four Elements emerged during Kuriguer's Magic Surge, when monks discovered they could channel elemental forces through their ki. These living conduits of elemental power learned to manipulate fire, water, earth, and air. This tradition has found particular use in regions with strong elemental magic, though its practitioners serve wherever elemental forces need channeling.",
            playstyle: "Magical monk with elemental powers. Ideal for players who want to blend martial arts with elemental magic.",
            classId: classes.monk.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.monk_way_of_the_four_elements_elemental_disciplines.id },
                    //{ id: classFeatures.monk_way_of_the_four_elements_additional_disciplines.id },
                    //{ id: classFeatures.monk_way_of_the_four_elements_elemental_mastery.id },
                //]
            //}
        }),
        paladin_oath_of_devotion: await db.createSubclass({
            id: "subclass-paladin-oath-of-devotion",
            name: "Oath Of Devotion",
            //slug: "oath-of-devotion",
            description: "Traditional paladins devoted to ideals of virtue, honor, and righteousness.",
            alabastriaContext: "The Oath of Devotion represents traditional paladins devoted to ideals of virtue, honor, and righteousness. This path emerged during the Kingdom Formation period, when exemplars of celestial virtue were needed to inspire others. Paladins who established orders dedicated to justice and protection have spread across all continents, serving wherever virtue needs champions.",
            playstyle: "Classic righteous paladin focused on protection and virtue. Perfect for players who want to be the traditional holy knight.",
            classId: classes.paladin.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.paladin_oath_of_devotion_sacred_weapon.id },
                    //{ id: classFeatures.paladin_oath_of_devotion_turn_the_unholy.id },
                    //{ id: classFeatures.paladin_oath_of_devotion_aura_of_devotion.id },
                //]
            //}
        }),
        paladin_oath_of_the_ancients: await db.createSubclass({
            id: "subclass-paladin-oath-of-the-ancients",
            name: "Oath Of The Ancients",
            //slug: "oath-of-the-ancients",
            description: "Paladins who protect the light, beauty, and life of the world, often serving nature deities.",
            alabastriaContext: "The Oath of the Ancients developed during the initial settlements, when paladins needed to protect the light, beauty, and life of the world. These protectors learned to serve nature deities while maintaining their holy warrior role. This tradition has found particular use in regions where civilization meets untamed wilderness, though its practitioners serve wherever nature needs champions.",
            playstyle: "Nature-focused paladin with protective abilities. Great for players who want to combine holy warrior with nature themes.",
            classId: classes.paladin.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.paladin_oath_of_the_ancients_natures_wrath.id },
                    //{ id: classFeatures.paladin_oath_of_the_ancients_turn_the_faithless.id },
                    //{ id: classFeatures.paladin_oath_of_the_ancients_aura_of_warding.id },
                //]
            //}
        }),
        paladin_oath_of_vengeance: await db.createSubclass({
            id: "subclass-paladin-oath-of-vengeance",
            name: "Oath Of Vengeance",
            //slug: "oath-of-vengeance",
            description: "Paladins dedicated to punishing wrongdoers and pursuing justice through relentless pursuit.",
            alabastriaContext: "The Oath of Vengeance emerged during the early wars, when paladins were needed to punish wrongdoers and pursue justice through relentless pursuit. These dedicated avengers learned to hunt down those who prey on the innocent with savage determination. This tradition has found particular use in frontier regions where law is scarce, though its practitioners serve wherever justice needs relentless champions.",
            playstyle: "Aggressive paladin focused on hunting down evil. Ideal for players who want to be a relentless force of justice.",
            classId: classes.paladin.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.paladin_oath_of_vengeance_abjure_enemy.id },
                    //{ id: classFeatures.paladin_oath_of_vengeance_vow_of_enmity.id },
                    //{ id: classFeatures.paladin_oath_of_vengeance_relentless_avenger.id },
                //]
            //}
        }),
        paladin_oath_of_the_crown: await db.createSubclass({
            id: "subclass-paladin-oath-of-the-crown",
            name: "Oath Of The Crown",
            //slug: "oath-of-the-crown",
            description: "Paladins who serve the law and civilization, defending the social order and protecting the innocent through loyalty to crown and country.",
            alabastriaContext: "The Oath of the Crown developed during the Kingdom Formation period, when paladins were needed to serve the law and civilization. These paladins learned to defend the social order and protect the innocent through loyalty to crown and country. This tradition has found particular use in regions with established kingdoms and legal systems, though its practitioners serve wherever law and civilization need divine champions.",
            playstyle: "Lawful protector focused on defending allies and maintaining order. Perfect for players who want to be a noble guardian of civilization and law.",
            classId: classes.paladin.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.paladin_oath_of_the_crown_channel_divinity_champion_challenge.id },
                    //{ id: classFeatures.paladin_oath_of_the_crown_channel_divinity_turn_the_tide.id },
                    //{ id: classFeatures.paladin_oath_of_the_crown_divine_allegiance.id },
                    //{ id: classFeatures.paladin_oath_of_the_crown_unbreakable_majesty.id },
                //]
            //}
        }),
        ranger_hunter: await db.createSubclass({
            id: "subclass-ranger-hunter",
            name: "Hunter",
            //slug: "hunter",
            description: "Rangers specialized in hunting specific types of prey, masters of taking down dangerous creatures.",
            alabastriaContext: "The Hunter archetype represents rangers specialized in hunting specific types of prey, mastering techniques for taking down dangerous creatures. This path emerged during the initial settlements, when survival depended on understanding and defeating local threats. Hunters have adapted their techniques across all continents, wherever dangerous creatures need to be tracked and eliminated.",
            playstyle: "Versatile combatant effective against many enemy types. Great for players who want reliable combat effectiveness and adaptability.",
            classId: classes.ranger.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.ranger_hunter_hunters_prey.id },
                    //{ id: classFeatures.ranger_hunter_defensive_tactics.id },
                    //{ id: classFeatures.ranger_hunter_multiattack.id },
                //]
            //}
        }),
        ranger_beast_master: await db.createSubclass({
            id: "subclass-ranger-beast-master",
            name: "Beast Master",
            //slug: "beast-master",
            description: "Rangers who form deep bonds with animal companions, fighting alongside loyal beasts.",
            alabastriaContext: "The Beast Master archetype developed during the initial settlements, when rangers needed loyal companions to survive in the wilds. These rangers learned to form deep bonds with animal companions, fighting alongside beasts who became trusted partners. This tradition has spread across all continents, wherever rangers need animal allies for survival and combat.",
            playstyle: "Pet-focused ranger with loyal companion. Perfect for players who want an animal partner and unique tactical options.",
            classId: classes.ranger.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.ranger_beast_master_rangers_companion.id },
                    //{ id: classFeatures.ranger_beast_master_exceptional_training.id },
                    //{ id: classFeatures.ranger_beast_master_bestial_fury.id },
                //]
            //}
        }),
        ranger_gloom_stalker: await db.createSubclass({
            id: "subclass-ranger-gloom-stalker",
            name: "Gloom Stalker",
            //slug: "gloom-stalker",
            description: "Rangers who excel in darkness and underground environments, masters of ambush and stealth.",
            alabastriaContext: "The Gloom Stalker archetype emerged during the early cycles, when rangers needed to excel in darkness and underground environments. These masters of ambush and stealth learned to hunt during the dangerous nights when unknown threats lurked. This tradition has found particular use in regions with extensive underground or shadow-touched areas, though its practitioners serve wherever darkness needs hunters.",
            playstyle: "Stealth-focused ambush specialist. Ideal for players who want to be deadly scouts and first-strike specialists.",
            classId: classes.ranger.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.ranger_gloom_stalker_dread_ambusher.id },
                    //{ id: classFeatures.ranger_gloom_stalker_umbral_sight.id },
                    //{ id: classFeatures.ranger_gloom_stalker_iron_mind.id },
                //]
            //}
        }),
        rogue_thief: await db.createSubclass({
            id: "subclass-rogue-thief",
            name: "Thief",
            //slug: "thief",
            description: "Classic rogues who excel at burglary, climbing, and using magical items.",
            alabastriaContext: "The Thief archetype represents classic rogues who excel at burglary, climbing, and using magical items. This path emerged during the early settlements, when survival often required taking what was needed. Thieves have adapted their techniques across all continents, finding use wherever nimbleness and item mastery are needed.",
            playstyle: "Utility-focused rogue with excellent mobility and item use. Perfect for players who want to be the party's problem solver and infiltrator.",
            classId: classes.rogue.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.rogue_thief_fast_hands.id },
                    //{ id: classFeatures.rogue_thief_second_story_work.id },
                    //{ id: classFeatures.rogue_thief_use_magic_device.id },
                //]
            //}
        }),
        rogue_assassin: await db.createSubclass({
            id: "subclass-rogue-assassin",
            name: "Assassin",
            //slug: "assassin",
            description: "Professional killers who specialize in disguises, poisons, and elimination techniques.",
            alabastriaContext: "The Assassin archetype developed during the complex political landscape of the Modern Era, when professional killers were needed for elimination missions. These specialists learned to use disguises, poisons, and infiltration techniques for silent elimination. This tradition has found particular use in regions with dangerous political intrigue, though its practitioners serve wherever elimination needs professionals.",
            playstyle: "Stealth-focused killer with disguise abilities. Great for players who want to be deadly infiltrators and eliminate key targets.",
            classId: classes.rogue.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.rogue_assassin_bonus_proficiencies.id },
                    //{ id: classFeatures.rogue_assassin_assassinate.id },
                    //{ id: classFeatures.rogue_assassin_infiltration_expertise.id },
                //]
            //}
        }),
        rogue_arcane_trickster: await db.createSubclass({
            id: "subclass-rogue-arcane-trickster",
            name: "Arcane Trickster",
            //slug: "arcane-trickster",
            description: "Rogues who blend thievery with illusion and enchantment magic.",
            alabastriaContext: "The Arcane Trickster archetype emerged during Kuriguer's Magic Surge, when rogues discovered they could blend thievery with illusion and enchantment magic. These magical rogues learned to enhance their stealth and infiltration with arcane utility. This tradition has found particular use in regions with magical academies, though its practitioners serve wherever magic and thievery intersect.",
            playstyle: "Magical rogue with utility spells and enhanced stealth. Ideal for players who want magic mixed with traditional rogue abilities.",
            classId: classes.rogue.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.rogue_arcane_trickster_spellcasting.id },
                    //{ id: classFeatures.rogue_arcane_trickster_mage_hand_legerdemain.id },
                    //{ id: classFeatures.rogue_arcane_trickster_magical_ambush.id },
                //]
            //}
        }),
        sorcerer_draconic_bloodline: await db.createSubclass({
            id: "subclass-sorcerer-draconic-bloodline",
            name: "Draconic Bloodline",
            //slug: "draconic-bloodline",
            description: "Sorcerers with dragon ancestry who gain draconic resilience and elemental power.",
            alabastriaContext: "The Draconic Bloodline emerged from legends of dragons that may have existed before The Bringing. Sorcerers discovered they had dragon ancestry that granted draconic resilience and elemental power. This tradition has found particular use in regions with draconic legends, though its practitioners serve wherever draconic heritage manifests.",
            playstyle: "Durable elemental damage dealer. Perfect for players who want to embody draconic power and specialize in elemental magic.",
            classId: classes.sorcerer.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.sorcerer_draconic_bloodline_dragon_ancestor.id },
                    //{ id: classFeatures.sorcerer_draconic_bloodline_draconic_resilience.id },
                    //{ id: classFeatures.sorcerer_draconic_bloodline_elemental_affinity.id },
                //]
            //}
        }),
        sorcerer_wild_magic: await db.createSubclass({
            id: "subclass-sorcerer-wild-magic",
            name: "Wild Magic",
            //slug: "wild-magic",
            description: "Sorcerers touched by chaotic magic whose spells can trigger unpredictable effects.",
            alabastriaContext: "The Wild Magic origin developed during Kuriguer's Magic Surge, when sorcerers discovered they were touched by chaotic magic. These sorcerers found their spells could trigger unpredictable effects, creating memorable magical moments. This tradition has found particular use in regions with magical anomalies, though its practitioners serve wherever chaos meets magic.",
            playstyle: "Unpredictable spellcaster with chaotic effects. Great for players who enjoy randomness and want to create memorable magical moments.",
            classId: classes.sorcerer.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.sorcerer_wild_magic_wild_magic_surge.id },
                    //{ id: classFeatures.sorcerer_wild_magic_tides_of_chaos.id },
                    //{ id: classFeatures.sorcerer_wild_magic_bend_luck.id },
                //]
            //}
        }),
        sorcerer_divine_soul: await db.createSubclass({
            id: "subclass-sorcerer-divine-soul",
            name: "Divine Soul",
            //slug: "divine-soul",
            description: "Sorcerers blessed by divine power who can access both arcane and divine magic.",
            alabastriaContext: "The Divine Soul origin emerged during the early cycles, when sorcerers discovered they were blessed by divine power. These sorcerers learned they could access both arcane and divine magic, combining the versatility of sorcery with the power of divine spells. This tradition has found particular use in regions with strong religious traditions, though its practitioners serve wherever divine and arcane power intersect.",
            playstyle: "Versatile caster with both arcane and divine magic. Ideal for players who want maximum spell variety and healing capabilities.",
            classId: classes.sorcerer.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.sorcerer_divine_soul_divine_magic.id },
                    //{ id: classFeatures.sorcerer_divine_soul_favored_by_the_gods.id },
                    //{ id: classFeatures.sorcerer_divine_soul_empowered_healing.id },
                //]
            //}
        }),
        warlock_the_fiend: await db.createSubclass({
            id: "subclass-warlock-the-fiend",
            name: "The Fiend",
            //slug: "the-fiend",
            description: "Warlocks who serve demons, devils, or other evil outsiders for infernal power.",
            alabastriaContext: "The Fiend patron emerged during the desperate early cycles, when mortals needed power to survive and were willing to make bargains with demons, devils, or other evil outsiders. These warlocks learned to serve infernal powers for diabolic might. This tradition has found particular use in regions where desperation meets opportunity, though its practitioners serve wherever infernal power is sought.",
            playstyle: "Durable damage dealer with infernal power. Perfect for players who want to play with dark themes and consistent combat effectiveness.",
            classId: classes.warlock.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.warlock_the_fiend_dark_ones_blessing.id },
                    //{ id: classFeatures.warlock_the_fiend_dark_ones_own_luck.id },
                    //{ id: classFeatures.warlock_the_fiend_fiendish_resilience.id },
                //]
            //}
        }),
        warlock_the_archfey: await db.createSubclass({
            id: "subclass-warlock-the-archfey",
            name: "The Archfey",
            //slug: "the-archfey",
            description: "Warlocks bound to powerful fey lords who grant whimsical but potent magic.",
            alabastriaContext: "The Archfey patron developed during Kuriguer's Magic Surge, when warlocks discovered connections to powerful fey lords through magical anomalies. These warlocks learned to serve seasonal courts and gain whimsical but potent magic. This tradition has found particular use in regions touched by fey magic, though its practitioners serve wherever fey power is accessible.",
            playstyle: "Enchantment-focused controller with fey magic. Great for players who want whimsical powers and social manipulation abilities.",
            classId: classes.warlock.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.warlock_the_archfey_fey_presence.id },
                    //{ id: classFeatures.warlock_the_archfey_misty_escape.id },
                    //{ id: classFeatures.warlock_the_archfey_beguiling_defenses.id },
                //]
            //}
        }),
        warlock_the_great_old_one: await db.createSubclass({
            id: "subclass-warlock-the-great-old-one",
            name: "The Great Old One",
            //slug: "the-great-old-one",
            description: "Warlocks who serve ancient, alien entities that exist beyond normal reality.",
            alabastriaContext: "The Great Old One patron emerged during the Modern Era, when warlocks discovered they could serve ancient, alien entities that exist beyond normal reality. These warlocks learned to contact alien minds and gain cosmic powers. This tradition has found particular use in regions touched by cosmic or psionic forces, though its practitioners serve wherever alien power is accessible.",
            playstyle: "Psychic-themed warlock with alien abilities. Ideal for players who enjoy cosmic horror themes and mental manipulation.",
            classId: classes.warlock.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.warlock_the_great_old_one_telepathic_communication.id },
                    //{ id: classFeatures.warlock_the_great_old_one_entropic_ward.id },
                    //{ id: classFeatures.warlock_the_great_old_one_thought_shield.id },
                //]
            //}
        }),
        wizard_school_of_evocation: await db.createSubclass({
            id: "subclass-wizard-school-of-evocation",
            name: "School Of Evocation",
            //slug: "school-of-evocation",
            description: "Wizards who specialize in destructive magic, mastering spells of force and energy.",
            alabastriaContext: "The School of Evocation developed during the First Continental War, when wizards needed to specialize in destructive magic for combat. These wizards learned to master spells of force and energy, becoming primary magical damage dealers. This tradition has found particular use in regions with active warfare, though its practitioners serve wherever destructive magic is needed.",
            playstyle: "Damage-focused wizard with safe area spells. Perfect for players who want to be the party's primary magical damage dealer.",
            classId: classes.wizard.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.wizard_school_of_evocation_sculpt_spells.id },
                    //{ id: classFeatures.wizard_school_of_evocation_potent_cantrip.id },
                    //{ id: classFeatures.wizard_school_of_evocation_empowered_evocation.id },
                //]
            //}
        }),
        wizard_school_of_illusion: await db.createSubclass({
            id: "subclass-wizard-school-of-illusion",
            name: "School Of Illusion",
            //slug: "school-of-illusion",
            description: "Wizards who master deception, misdirection, and reality-bending illusions.",
            alabastriaContext: "The School of Illusion emerged during Kuriguer's Magic Surge, when wizards discovered they could master deception, misdirection, and reality-bending illusions. These wizards learned to use creative problem-solving and battlefield control through illusion. This tradition has found particular use in regions with magical academies, though its practitioners serve wherever deception and control are needed.",
            playstyle: "Deception and control specialist with creative solutions. Great for players who enjoy creative problem-solving and battlefield control.",
            classId: classes.wizard.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.wizard_school_of_illusion_improved_minor_illusion.id },
                    //{ id: classFeatures.wizard_school_of_illusion_malleable_illusions.id },
                    //{ id: classFeatures.wizard_school_of_illusion_illusory_reality.id },
                //]
            //}
        }),
        wizard_school_of_divination: await db.createSubclass({
            id: "subclass-wizard-school-of-divination",
            name: "School Of Divination",
            //slug: "school-of-divination",
            description: "Wizards who peer into the future and uncover hidden knowledge through prophetic magic.",
            alabastriaContext: "The School of Divination developed during the Great Trade Expansion, when wizards needed to peer into the future and uncover hidden knowledge. These wizards learned to use prophetic magic to help parties through foresight and knowledge. This tradition has found particular use in regions with strong scholarly traditions, though its practitioners serve wherever future sight is needed.",
            playstyle: "Support wizard with future sight and information gathering. Ideal for players who want to help the party through foresight and knowledge.",
            classId: classes.wizard.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.wizard_school_of_divination_portent.id },
                    //{ id: classFeatures.wizard_school_of_divination_expert_divination.id },
                    //{ id: classFeatures.wizard_school_of_divination_the_third_eye.id },
                //]
            //}
        }),
        tactician_grandmaster: await db.createSubclass({
            id: "subclass-tactician-grandmaster",
            name: "Grandmaster",
            //slug: "grandmaster",
            description: "Masters of grand strategy who excel at long-term planning and large-scale tactical operations.",
            alabastriaContext: "The Grandmaster specialization developed during the First Continental War, when tacticians were needed to excel at long-term planning and large-scale tactical operations. These masters of grand strategy learned to plan complex military campaigns. This tradition has found particular use in regions with active warfare or large military organizations, though its practitioners serve wherever strategic planning is needed.",
            playstyle: "Long-term strategic planning and battlefield control. Perfect for players who enjoy complex tactical scenarios.",
            classId: classes.tactician.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.tactician_grandmaster_strategic_planning.id },
                    //{ id: classFeatures.tactician_grandmaster_battlefield_survey.id },
                    //{ id: classFeatures.tactician_grandmaster_grand_strategy.id },
                //]
            //}
        }),
        tactician_mentalist: await db.createSubclass({
            id: "subclass-tactician-mentalist",
            name: "Mentalist",
            //slug: "mentalist",
            description: "Tacticians who use psionic abilities and mental powers to read enemy intentions and coordinate allies through telepathic communication.",
            alabastriaContext: "The Mentalist specialization emerged during the Modern Era, when tacticians discovered they could use psionic abilities and mental powers to read enemy intentions and coordinate allies through telepathic communication. These tacticians learned to combine strategy with mental powers. This tradition has found particular use in regions with psionic traditions or intelligence operations, though its practitioners serve wherever mental coordination is needed.",
            playstyle: "Psionic support and battlefield communication. Great for players who want to combine strategy with mental powers.",
            classId: classes.tactician.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.tactician_mentalist_telepathic_link.id },
                    //{ id: classFeatures.tactician_mentalist_mind_reading.id },
                    //{ id: classFeatures.tactician_mentalist_psychic_command.id },
                //]
            //}
        }),
        tactician_scholar: await db.createSubclass({
            id: "subclass-tactician-scholar",
            name: "Scholar",
            //slug: "scholar",
            description: "Academic tacticians who study warfare, history, and enemy tactics to develop innovative strategies and countermeasures.",
            alabastriaContext: "The Scholar specialization developed during the Great Trade Expansion, when academic tacticians were needed to study warfare, history, and enemy tactics. These scholars learned to develop innovative strategies and countermeasures through research. This tradition has found particular use in regions with magical academies or strong scholarly traditions, though its practitioners serve wherever knowledge-based strategy is needed.",
            playstyle: "Knowledge-based strategy and research. Ideal for players who enjoy learning about enemy types and developing counter-strategies.",
            classId: classes.tactician.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.tactician_scholar_tactical_knowledge.id },
                    //{ id: classFeatures.tactician_scholar_research_and_development.id },
                    //{ id: classFeatures.tactician_scholar_master_tactician.id },
                //]
            //}
        }),
        tactician_war_mind: await db.createSubclass({
            id: "subclass-tactician-war-mind",
            name: "War Mind",
            //slug: "war-mind",
            description: "Combat-focused tacticians who combine martial prowess with strategic thinking, leading from the front lines.",
            alabastriaContext: "The War Mind specialization emerged during the First Continental War, when combat-focused tacticians were needed to combine martial prowess with strategic thinking. These field commanders learned to lead from the front lines while maintaining tactical awareness. This tradition has found particular use in regions with active warfare or military organizations, though its practitioners serve wherever combat leadership is needed.",
            playstyle: "Combat-focused strategy and leadership. Perfect for players who want to combine tactical thinking with martial prowess.",
            classId: classes.tactician.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.tactician_war_mind_combat_analysis.id },
                    //{ id: classFeatures.tactician_war_mind_battlefield_presence.id },
                    //{ id: classFeatures.tactician_war_mind_war_leader.id },
                //]
            //}
        }),
        cleric_arcana_domain: await db.createSubclass({
            id: "subclass-cleric-arcana-domain",
            name: "Arcana Domain",
            //slug: "arcana-domain",
            description: "Arcana Domain subclass.",
            alabastriaContext: "The Arcana Domain emerged during Kuriguer's Magic Surge, when clerics needed to bridge divine power with arcane magic. These scholar-clerics guard ancient libraries and arcane knowledge, protecting the secrets of the world. Their tradition has found particular use in regions with magical academies, though their knowledge is valuable wherever magic and divinity intersect.",
            playstyle: "Spellcasting support and utility, focusing on offensive spells and counter-magic to control magical threats.",
            classId: classes.cleric.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.cleric_arcana_domain_arcane_initiate.id },
                    //{ id: classFeatures.cleric_arcana_domain_spell_breaker.id },
                    //{ id: classFeatures.cleric_arcana_domain_arcane_mastery.id }
                //]
            //}
        }),
        cleric_death_domain: await db.createSubclass({
            id: "subclass-cleric-death-domain",
            name: "Death Domain",
            //slug: "death-domain",
            description: "Death Domain subclass.",
            alabastriaContext: "The Death Domain developed from the need to understand and control death after The Bringing, when countless souls were lost and needed guidance. Clerics who serve death gods learned to command the forces of undeath and guide souls to their proper rest. This tradition has found particular use in regions touched by death and undeath, though its practitioners serve wherever the boundary between life and death needs guardianship.",
            playstyle: "Aggressive caster that inflicts necrotic damage, excels at killing and weakening foes with death-related spells.",
            classId: classes.cleric.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.cleric_death_domain_reaper.id },
                    //{ id: classFeatures.cleric_death_domain_touch_of_death.id },
                    //{ id: classFeatures.cleric_death_domain_divinity_of_death.id }
                //]
            //}
        }),
        cleric_grave_domain: await db.createSubclass({
            id: "subclass-cleric-grave-domain",
            name: "Grave Domain",
            //slug: "grave-domain",
            description: "Grave Domain subclass.",
            alabastriaContext: "The Grave Domain emerged from the need to protect the balance between life and death after The Bringing, when the natural order was disrupted. Clerics learned to tend tombs and aid those on the brink of death while preventing unnatural resurrection. This tradition has spread across all continents, serving wherever the balance between life and death needs protection.",
            playstyle: "Balance of offense and defense, able to heal and harm; prevents revivals of fallen allies and seals undead.",
            classId: classes.cleric.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.cleric_grave_domain_circle_of_mortality.id },
                    //{ id: classFeatures.cleric_grave_domain_path_to_the_grave.id },
                    //{ id: classFeatures.cleric_grave_domain_sentinel_at_deaths_door.id }
                //]
            //}
        }),
        cleric_knowledge_domain: await db.createSubclass({
            id: "subclass-cleric-knowledge-domain",
            name: "Knowledge Domain",
            //slug: "knowledge-domain",
            description: "Knowledge Domain subclass.",
            alabastriaContext: "The Knowledge Domain became essential during the Great Trade Expansion, when preserving knowledge from different realms became crucial. Clerics dedicated to knowledge serve as sages and librarians, preserving lore and serving as oracles who advise powerful leaders. This tradition has found particular use in regions with universities and magical academies, though their wisdom is sought wherever knowledge is valued.",
            playstyle: "Versatile caster with additional skill proficiencies; gathers information and uses divination to control the flow of battle.",
            classId: classes.cleric.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.cleric_knowledge_domain_blessings_of_knowledge.id },
                    //{ id: classFeatures.cleric_knowledge_domain_knowledge_of_the_ages.id },
                    //{ id: classFeatures.cleric_knowledge_domain_visions_of_the_past.id }
                //]
            //}
        }),
        cleric_order_domain: await db.createSubclass({
            id: "subclass-cleric-order-domain",
            name: "Order Domain",
            //slug: "order-domain",
            description: "Order Domain subclass.",
            alabastriaContext: "The Order Domain emerged during the Kingdom Formation period, when law and discipline were needed to maintain social order. Clerics who serve gods of law learned to enforce decrees and embody discipline while fighting for justice. This tradition has found particular use in regions with complex legal systems, though its practitioners serve wherever order and justice are needed.",
            playstyle: "Protective front-line cleric; bolsters allies with commanding spells and punishes foes who defy authority.",
            classId: classes.cleric.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.cleric_order_domain_orders_demand.id },
                    //{ id: classFeatures.cleric_order_domain_orders_wrath.id },
                    //{ id: classFeatures.cleric_order_domain_embodiment_of_the_law.id }
                //]
            //}
        }),
        cleric_peace_domain: await db.createSubclass({
            id: "subclass-cleric-peace-domain",
            name: "Peace Domain",
            //slug: "peace-domain",
            description: "Peace Domain subclass.",
            alabastriaContext: "The Peace Domain developed during the ongoing conflicts of the Modern Era, when mediators were needed to prevent violence and unite divided communities. Clerics dedicated to peace learned to invoke holy bonds that unite allies and dampen strife. This tradition has found particular use in regions with ongoing conflicts, though its practitioners serve wherever peace needs to be maintained.",
            playstyle: "Supportive healer and buffer; focuses on teamwork and protecting the party from harm.",
            classId: classes.cleric.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.cleric_peace_domain_emboldening_bond.id },
                    //{ id: classFeatures.cleric_peace_domain_shield_of_serenity.id },
                    //{ id: classFeatures.cleric_peace_domain_protective_bond.id }
                //]
            //}
        }),
        cleric_twilight_domain: await db.createSubclass({
            id: "subclass-cleric-twilight-domain",
            name: "Twilight Domain",
            //slug: "twilight-domain",
            description: "Twilight Domain subclass.",
            alabastriaContext: "The Twilight Domain emerged from the need to protect travelers during the dangerous nights after The Bringing, when darkness held unknown threats. Clerics learned to guard the border between light and darkness, watching over travelers and providing shelter. This tradition has found particular use in regions with long nights or dangerous wilderness, though its practitioners serve wherever twilight needs guardianship.",
            playstyle: "Defensive and vigilant; excels in guarding and vision, providing shelter and guiding allies safely through darkness.",
            classId: classes.cleric.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.cleric_twilight_domain_vigilant_blessing.id },
                    //{ id: classFeatures.cleric_twilight_domain_twilight_sanctuary.id },
                    //{ id: classFeatures.cleric_twilight_domain_divinity_of_twilight.id }
                //]
            //}
        }),
        druid_circle_of_dreams: await db.createSubclass({
            id: "subclass-druid-circle-of-dreams",
            name: "Circle of Dreams",
            //slug: "circle-of-dreams",
            description: "Circle of Dreams subclass.",
            alabastriaContext: "The Circle of Dreams emerged during Kuriguer's Magic Surge, when druids discovered connections to the feywild through magical anomalies. These druids learned to commune with fey realms and nurture the land with gentle restoration magic. This tradition has found particular use in regions touched by fey magic, though its practitioners serve wherever gentle healing and restoration are needed.",
            playstyle: "Healer and protector; empowers allies with fey magic and uses nature's vitality to keep comrades healthy.",
            classId: classes.druid.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.druid_circle_of_dreams_balm_of_the_summer_court.id },
                    //{ id: classFeatures.druid_circle_of_dreams_hearth_of_moonlight.id },
                    //{ id: classFeatures.druid_circle_of_dreams_hidden_paths.id }
                //]
            //}
        }),
        druid_circle_of_the_shepherd: await db.createSubclass({
            id: "subclass-druid-circle-of-the-shepherd",
            name: "Circle of the Shepherd",
            //slug: "circle-of-the-shepherd",
            description: "Circle of the Shepherd subclass.",
            alabastriaContext: "The Circle of the Shepherd developed during the initial settlements, when druids needed to protect animal spirits and lead summoned creatures in battle. These guardians of the wild learned to care for nature's herds while commanding spiritual beasts. This tradition has found particular use in regions with large animal populations, though its practitioners serve wherever nature's creatures need protection.",
            playstyle: "Summoner and support; calls spiritual beasts to fight and heals both companions and summoned allies.",
            classId: classes.druid.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.druid_circle_of_the_shepherd_speech_of_the_woods.id },
                    //{ id: classFeatures.druid_circle_of_the_shepherd_spirit_totem.id },
                    //{ id: classFeatures.druid_circle_of_the_shepherd_faithful_summons.id }
                //]
            //}
        }),
        druid_circle_of_spores: await db.createSubclass({
            id: "subclass-druid-circle-of-spores",
            name: "Circle of Spores",
            //slug: "circle-of-spores",
            description: "Circle of Spores subclass.",
            alabastriaContext: "The Circle of Spores emerged from understanding that decay is part of the life cycle. Druids who studied fungal magic discovered they could use spores to both heal and harm, finding beauty in rot and renewal. This tradition has found particular use in regions with extensive underground caverns or swamps, though its practitioners serve wherever the cycle of life and death needs understanding.",
            playstyle: "Offensive caster with necrotic focus; specializes in area control and using spores to damage enemies.",
            classId: classes.druid.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.druid_circle_of_spores_halo_of_spores.id },
                    //{ id: classFeatures.druid_circle_of_spores_symbiotic_entity.id },
                    //{ id: classFeatures.druid_circle_of_spores_fungal_infestation.id }
                //]
            //}
        }),
        druid_circle_of_stars: await db.createSubclass({
            id: "subclass-druid-circle-of-stars",
            name: "Circle of the Stars",
            //slug: "circle-of-stars",
            description: "Circle of the Stars subclass.",
            alabastriaContext: "The Circle of the Stars developed during the early cycles, when druids needed to navigate by the stars and interpret celestial signs for guidance. These druids learned to chart the cosmos and use starlight to guide and bless their allies. This tradition has found particular use in regions with clear night skies, though its practitioners serve wherever celestial guidance is needed.",
            playstyle: "Balanced caster; uses star-themed abilities for support and celestial-themed damage.",
            classId: classes.druid.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.druid_circle_of_stars_starry_form.id },
                    //{ id: classFeatures.druid_circle_of_stars_cosmic_omen.id },
                    //{ id: classFeatures.druid_circle_of_stars_full_of_stars.id }
                //]
            //}
        }),
        fighter_arcane_archer: await db.createSubclass({
            id: "subclass-fighter-arcane-archer",
            name: "Arcane Archer",
            //slug: "arcane-archer",
            description: "Arcane Archer subclass.",
            alabastriaContext: "The Arcane Archer archetype developed during Kuriguer's Magic Surge, when rangers needed to combine martial skill with magic to hunt magical creatures. These fighters learned to enchant their arrows with arcane power, creating magical shots that could strike from distance. This tradition has found particular use in regions where magical threats require enchanted weapons, though its practitioners serve wherever ranged combat meets magic.",
            playstyle: "Ranged fighter with magical shots; good at staying at distance and debuffing enemies.",
            classId: classes.fighter.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.fighter_arcane_archer_arcane_archer_lore.id },
                    //{ id: classFeatures.fighter_arcane_archer_arcane_shot.id },
                    //{ id: classFeatures.fighter_arcane_archer_magic_arrow.id }
                //]
            //}
        }),
        fighter_cavalier: await db.createSubclass({
            id: "subclass-fighter-cavalier",
            name: "Cavalier",
            //slug: "cavalier",
            description: "Cavalier subclass.",
            alabastriaContext: "The Cavalier archetype emerged during the Kingdom Formation period, when mounted warriors were needed to protect lords and lead cavalry charges. These stalwart defenders learned to excel at mounted combat and protecting allies. This tradition has found particular use in regions with extensive plains suitable for cavalry, though its practitioners serve wherever mounted combat is valued.",
            playstyle: "Tanky frontline with control; excels at protecting allies and charging into the fray.",
            classId: classes.fighter.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.fighter_cavalier_born_to_the_saddle.id },
                    //{ id: classFeatures.fighter_cavalier_unwavering_mark.id },
                    //{ id: classFeatures.fighter_cavalier_hold_the_line.id }
                //]
            //}
        }),
        fighter_echo_knight: await db.createSubclass({
            id: "subclass-fighter-echo-knight",
            name: "Echo Knight",
            //slug: "echo-knight",
            description: "Echo Knight subclass.",
            alabastriaContext: "The Echo Knight archetype developed from encounters with temporal magic during Kuriguer's Magic Surge. Warriors discovered they could harness echoing strands of time to create spectral duplicates in battle, striking from multiple positions. This tradition has found particular use in regions touched by temporal anomalies, though its practitioners serve wherever time and combat intersect.",
            playstyle: "Versatile melee fighter; uses time echoes to attack unpredictably and control the battlefield.",
            classId: classes.fighter.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.fighter_echo_knight_manifest_echo.id },
                    //{ id: classFeatures.fighter_echo_knight_unleash_incarnation.id },
                    //{ id: classFeatures.fighter_echo_knight_echo_avatar.id }
                //]
            //}
        }),
        fighter_psi_warrior: await db.createSubclass({
            id: "subclass-fighter-psi-warrior",
            name: "Psi Warrior",
            //slug: "psi-warrior",
            description: "Psi Warrior subclass.",
            alabastriaContext: "The Psi Warrior archetype emerged during the Modern Era, when fighters discovered they could empower their strikes with psychic energy. These disciplined soldiers learned to use mind over matter powers to enhance their combat effectiveness. This tradition has found particular use in regions with psionic traditions, though its practitioners serve wherever mental discipline meets martial prowess.",
            playstyle: "Fighter with psionics; uses mental energy to enhance attacks and defend against foes.",
            classId: classes.fighter.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.fighter_psi_warrior_psi_energy_blade.id },
                    //{ id: classFeatures.fighter_psi_warrior_psychic_shove.id },
                    //{ id: classFeatures.fighter_psi_warrior_telekinetic_strike.id }
                //]
            //}
        }),
        fighter_rune_knight: await db.createSubclass({
            id: "subclass-fighter-rune-knight",
            name: "Rune Knight",
            //slug: "rune-knight",
            description: "Rune Knight subclass.",
            alabastriaContext: "The Rune Knight archetype developed during the early settlements, when fighters needed to enhance their equipment with magical power. These warriors learned to etch magical runes into their armor and weapons, tapping into giant power and earth magic. This tradition has found particular use in regions with active forges and runic traditions, though its practitioners serve wherever magical enhancement meets combat.",
            playstyle: "Brawler with magic enhancements; specializes in empowered strikes and battlefield strength.",
            classId: classes.fighter.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.fighter_rune_knight_rune_carver.id },
                    //{ id: classFeatures.fighter_rune_knight_giants_might.id },
                    //{ id: classFeatures.fighter_rune_knight_runic_shield.id }
                //]
            //}
        }),
        fighter_samurai: await db.createSubclass({
            id: "subclass-fighter-samurai",
            name: "Samurai",
            //slug: "samurai",
            description: "Samurai subclass.",
            alabastriaContext: "The Samurai archetype emerged during the Kingdom Formation period, when warriors of honor were needed to serve lords with unyielding spirit. These legendary fighters learned to focus their will to endure and attack fiercely, combining discipline with combat effectiveness. This tradition has found particular use in militarized societies, though its practitioners serve wherever honor and combat intersect.",
            playstyle: "Offensive fighter; combines strong melee strikes with self-focus for enhanced combat effectiveness.",
            classId: classes.fighter.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.fighter_samurai_fighting_spirit.id },
                    //{ id: classFeatures.fighter_samurai_elegant_courtier.id },
                    //{ id: classFeatures.fighter_samurai_rapid_strike.id }
                //]
            //}
        }),
        monk_way_of_the_astral_self: await db.createSubclass({
            id: "subclass-monk-way-of-the-astral-self",
            name: "Way of the Astral Self",
            //slug: "way-of-the-astral-self",
            description: "Way of the Astral Self subclass.",
            alabastriaContext: "The Way of the Astral Self developed during the Modern Era, when monks discovered they could commune with their inner spirits and the astral plane. These monks learned to manifest astral arms for extra reach and control. This tradition has found particular use in regions with strong spiritual traditions, though its practitioners serve wherever inner strength meets outer expression.",
            playstyle: "Melee fighter with reach; can manifest astral arms for extra reach and control.",
            classId: classes.monk.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.monk_way_of_the_astral_self_arms_of_the_astral_self.id },
                    //{ id: classFeatures.monk_way_of_the_astral_self_visage_of_the_astral_self.id },
                    //{ id: classFeatures.monk_way_of_the_astral_self_body_of_the_astral_self.id }
                //]
            //}
        }),
        monk_way_of_the_ascendant_dragon: await db.createSubclass({
            id: "subclass-monk-way-of-the-ascendant-dragon",
            name: "Way of the Ascendant Dragon",
            //slug: "way-of-the-ascendant-dragon",
            description: "Way of the Ascendant Dragon subclass.",
            alabastriaContext: "The Way of the Ascendant Dragon emerged from legends of draconic power that may have existed before The Bringing. Monks who studied these legends learned to channel draconic might into their strikes, augmenting attacks with dragon breaths and scales. This tradition has found particular use in regions with draconic legends, though its practitioners serve wherever draconic power needs channeling.",
            playstyle: "Melee with elemental damage; augments strikes with dragon breaths and scales.",
            classId: classes.monk.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.monk_way_of_the_ascendant_dragon_dragons_breath.id },
                    //{ id: classFeatures.monk_way_of_the_ascendant_dragon_draconic_presence.id },
                    //{ id: classFeatures.monk_way_of_the_ascendant_dragon_breath_of_the_dragon.id }
                //]
            //}
        }),
        monk_way_of_the_drunken_master: await db.createSubclass({
            id: "subclass-monk-way-of-the-drunken-master",
            name: "Way of the Drunken Master",
            //slug: "way-of-the-drunken-master",
            description: "Way of the Drunken Master subclass.",
            alabastriaContext: "The Way of the Drunken Master developed during the Cultural Renaissance, when monks discovered that unpredictable movements could confound foes. These light-footed fighters learned to dodge and strike unpredictably, using agility and chaos. This tradition has found particular use in urban centers where taverns and festivals provide training grounds, though its practitioners serve wherever unpredictability meets martial skill.",
            playstyle: "Chaotic fighter with mobility; dodges and strikes unpredictably, using agility and unpredictability.",
            classId: classes.monk.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.monk_way_of_the_drunken_master_drunken_technique.id },
                    //{ id: classFeatures.monk_way_of_the_drunken_master_tipsy_sway.id },
                    //{ id: classFeatures.monk_way_of_the_drunken_master_intoxicated_frenzy.id }
                //]
            //}
        }),
        monk_way_of_the_kensei: await db.createSubclass({
            id: "subclass-monk-way-of-the-kensei",
            name: "Way of the Kensei",
            //slug: "way-of-the-kensei",
            description: "Way of the Kensei subclass.",
            alabastriaContext: "The Way of the Kensei emerged during the Kingdom Formation period, when monks needed to perfect weapon arts alongside unarmed combat. These disciplined fighters learned to combine monk martial arts with weapon mastery. This tradition has found particular use in regions with strong martial traditions, though its practitioners serve wherever weapon and fist need to work together.",
            playstyle: "Balanced fighter; proficient with chosen weapons, combining monk martial arts and weapon mastery.",
            classId: classes.monk.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.monk_way_of_the_kensei_path_of_the_kensei.id },
                    //{ id: classFeatures.monk_way_of_the_kensei_agile_parry.id },
                    //{ id: classFeatures.monk_way_of_the_kensei_one_with_the_blade.id }
                //]
            //}
        }),
        monk_way_of_the_long_death: await db.createSubclass({
            id: "subclass-monk-way-of-the-long-death",
            name: "Way of the Long Death",
            //slug: "way-of-the-long-death",
            description: "Way of the Long Death subclass.",
            alabastriaContext: "The Way of the Long Death developed from the need to understand mortality after The Bringing, when death was ever-present. Monks who meditated on mortality learned to channel death energy and frighten foes with terror. This tradition has found particular use in regions touched by death and loss, though its practitioners serve wherever mortality needs understanding.",
            playstyle: "Fear-based martial; can gain lifesteal and frighten enemies with terror.",
            classId: classes.monk.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.monk_way_of_the_long_death_touch_of_death.id },
                    //{ id: classFeatures.monk_way_of_the_long_death_hour_of_reaping.id },
                    //{ id: classFeatures.monk_way_of_the_long_death_mastery_of_death.id }
                //]
            //}
        }),
        monk_way_of_mercy: await db.createSubclass({
            id: "subclass-monk-way-of-mercy",
            name: "Way of Mercy",
            //slug: "way-of-mercy",
            description: "Way of Mercy subclass.",
            alabastriaContext: "The Way of Mercy emerged during the early settlements, when healers were needed but also had to defend themselves. These traveling healers learned to mix healing touch with lethal strikes, dealing pain or mending wounds as needed. This tradition has found particular use in dangerous regions where healers must also fight, though its practitioners serve wherever mercy and combat intersect.",
            playstyle: "Healer and fighter; mixes healing touch with lethal strikes to deal pain or mend wounds.",
            classId: classes.monk.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.monk_way_of_mercy_hand_of_healing.id },
                    //{ id: classFeatures.monk_way_of_mercy_physicians_touch.id },
                    //{ id: classFeatures.monk_way_of_mercy_hand_of_ultimate_mercy.id }
                //]
            //}
        }),
        monk_way_of_the_sun_soul: await db.createSubclass({
            id: "subclass-monk-way-of-the-sun-soul",
            name: "Way of the Sun Soul",
            //slug: "way-of-the-sun-soul",
            description: "Way of the Sun Soul subclass.",
            alabastriaContext: "The Way of the Sun Soul developed during the early cycles, when monks discovered they could channel radiance into energy. These illuminated fighters learned to strike with beams of light in addition to melee attacks. This tradition has found particular use in regions with strong solar or celestial traditions, though its practitioners serve wherever radiance meets martial skill.",
            playstyle: "Ranged radiant fighter; throws bolts of light in addition to melee strikes.",
            classId: classes.monk.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.monk_way_of_the_sun_soul_radiant_sun_bolt.id },
                    //{ id: classFeatures.monk_way_of_the_sun_soul_searing_arc_strike.id },
                    //{ id: classFeatures.monk_way_of_the_sun_soul_searing_sunburst.id }
                //]
            //}
        }),
        paladin_oath_of_conquest: await db.createSubclass({
            id: "subclass-paladin-oath-of-conquest",
            name: "Oath of Conquest",
            //slug: "oath-of-conquest",
            description: "Oath of Conquest subclass.",
            alabastriaContext: "The Oath of Conquest emerged during the First Continental War, when paladins were needed to impose order through strength and fear. These paladins learned to serve conquerors and tyrants, controlling the battlefield with fear effects and punishing blows. This tradition has found particular use in militarized societies, though its practitioners serve wherever conquest needs divine champions.",
            playstyle: "Offensive tank; controls the battlefield with fear effects and punishing blows.",
            classId: classes.paladin.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.paladin_oath_of_conquest_conquering_presence.id },
                    //{ id: classFeatures.paladin_oath_of_conquest_guided_strike.id },
                    //{ id: classFeatures.paladin_oath_of_conquest_scornful_rebuke.id }
                //]
            //}
        }),
        paladin_oath_of_glory: await db.createSubclass({
            id: "subclass-paladin-oath-of-glory",
            name: "Oath of Glory",
            //slug: "oath-of-glory",
            description: "Oath of Glory subclass.",
            alabastriaContext: "The Oath of Glory developed during the Cultural Renaissance, when paladins were inspired by heroic tales to strive for legendary feats. These champions learned to inspire allies with courage while fighting on the front lines. This tradition has found particular use in regions where heroism is celebrated, though its practitioners serve wherever glory needs champions.",
            playstyle: "Mobile damage-dealer; boosts allies and fights like a champion on the front lines.",
            classId: classes.paladin.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.paladin_oath_of_glory_inspiring_smite.id },
                    //{ id: classFeatures.paladin_oath_of_glory_peerless_athlete.id },
                    //{ id: classFeatures.paladin_oath_of_glory_glorious_defense.id }
                //]
            //}
        }),
        paladin_oath_of_redemption: await db.createSubclass({
            id: "subclass-paladin-oath-of-redemption",
            name: "Oath of Redemption",
            //slug: "oath-of-redemption",
            description: "Oath of Redemption subclass.",
            alabastriaContext: "The Oath of Redemption emerged during the Modern Era, when paladins sought to prevent violence through redemption rather than destruction. These pacifists learned to convert enemies away from violence and prevent damage through protective means. This tradition has found particular use in regions with ongoing conflicts, though its practitioners serve wherever peace needs champions.",
            playstyle: "Defensive support; focuses on preventing damage and converting enemies away from violence.",
            classId: classes.paladin.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.paladin_oath_of_redemption_emissary_of_peace.id },
                    //{ id: classFeatures.paladin_oath_of_redemption_rebuke_the_violent.id },
                    //{ id: classFeatures.paladin_oath_of_redemption_protective_spirit.id }
                //]
            //}
        }),
        paladin_oath_of_the_watchers: await db.createSubclass({
            id: "subclass-paladin-oath-of-the-watchers",
            name: "Oath of the Watchers",
            //slug: "oath-of-the-watchers",
            description: "Oath of the Watchers subclass.",
            alabastriaContext: "The Oath of the Watchers developed during the Modern Era, when extraplanar threats began appearing more frequently. These guardians learned to protect borders from otherworldly invasion, becoming vigilant defenders against supernatural enemies. This tradition has found particular use in regions with planar rifts or magical anomalies, though its practitioners serve wherever extraplanar threats need guardians.",
            playstyle: "Anti-magic specialist; vigilant defender against supernatural and extraplanar enemies.",
            classId: classes.paladin.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.paladin_oath_of_the_watchers_watchers_will.id },
                    //{ id: classFeatures.paladin_oath_of_the_watchers_vigilant_rebuke.id },
                    //{ id: classFeatures.paladin_oath_of_the_watchers_aura_of_the_sentinel.id }
                //]
            //}
        }),
        ranger_drakewarden: await db.createSubclass({
            id: "subclass-ranger-drakewarden",
            name: "Drakewarden",
            //slug: "drakewarden",
            description: "Drakewarden subclass.",
            alabastriaContext: "The Drakewarden archetype developed from legends of draconic bonds that may have existed before The Bringing. Rangers discovered they could form bonds with draconic companions and channel draconic energy to empower their arrows. This tradition has found particular use in regions with draconic legends or high peaks, though its practitioners serve wherever draconic power needs rangers.",
            playstyle: "Ranged fighter; gains a drake companion and delivers fiery attacks.",
            classId: classes.ranger.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.ranger_drakewarden_drake_companion.id },
                    //{ id: classFeatures.ranger_drakewarden_draconic_might.id },
                    //{ id: classFeatures.ranger_drakewarden_draconic_crescent.id }
                //]
            //}
        }),
        ranger_fey_wanderer: await db.createSubclass({
            id: "subclass-ranger-fey-wanderer",
            name: "Fey Wanderer",
            //slug: "fey-wanderer",
            description: "Fey Wanderer subclass.",
            alabastriaContext: "The Fey Wanderer archetype emerged during Kuriguer's Magic Surge, when rangers discovered connections to the feywild through magical anomalies. These enchanted rangers learned to gain fey abilities and use illusions to charm enemies. This tradition has found particular use in regions touched by fey magic, though its practitioners serve wherever fey power needs rangers.",
            playstyle: "Support and control; uses illusions and charm on enemies, blending wilderness survival.",
            classId: classes.ranger.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.ranger_fey_wanderer_additional_march.id },
                    //{ id: classFeatures.ranger_fey_wanderer_dreadful_glare.id },
                    //{ id: classFeatures.ranger_fey_wanderer_beguiling_twist.id }
                //]
            //}
        }),
        ranger_horizon_walker: await db.createSubclass({
            id: "subclass-ranger-horizon-walker",
            name: "Horizon Walker",
            //slug: "horizon-walker",
            description: "Horizon Walker subclass.",
            alabastriaContext: "The Horizon Walker archetype developed during the Modern Era, when planar rifts began appearing more frequently. These masters of the Astral Plane learned to patrol world borders and step between planes, hunting extraplanar threats. This tradition has found particular use in regions with planar anomalies, though its practitioners serve wherever extraplanar threats need hunters.",
            playstyle: "Teleporting ranger; moves between planes and strikes magically to hunt extraplanar threats.",
            classId: classes.ranger.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.ranger_horizon_walker_detect_portal.id },
                    //{ id: classFeatures.ranger_horizon_walker_ethereal_step.id },
                    //{ id: classFeatures.ranger_horizon_walker_step_the_planes.id }
                //]
            //}
        }),
        ranger_monster_slayer: await db.createSubclass({
            id: "subclass-ranger-monster-slayer",
            name: "Monster Slayer",
            //slug: "monster-slayer",
            description: "Monster Slayer subclass.",
            alabastriaContext: "The Monster Slayer archetype emerged during the early cycles, when rangers needed supernatural senses to track and overcome monstrous foes. These hunters of creatures learned to specialize in single-target damage against supernatural enemies. This tradition has found particular use in regions with dangerous monsters, though its practitioners serve wherever monstrous threats need hunters.",
            playstyle: "Focused damage; excels at single-target damage against supernatural creatures.",
            classId: classes.ranger.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.ranger_monster_slayer_slayers_eye.id },
                    //{ id: classFeatures.ranger_monster_slayer_slayers_prey.id },
                    //{ id: classFeatures.ranger_monster_slayer_supernatural_defense.id }
                //]
            //}
        }),
        ranger_swarmkeeper: await db.createSubclass({
            id: "subclass-ranger-swarmkeeper",
            name: "Swarmkeeper",
            //slug: "swarmkeeper",
            description: "Swarmkeeper subclass.",
            alabastriaContext: "The Swarmkeeper archetype developed during the initial settlements, when rangers discovered they could form connections with swarms of nature. These rangers learned to command insects or vermin to harass enemies while moving. This tradition has found particular use in regions with extensive insect or vermin populations, though its practitioners serve wherever nature's swarms need rangers.",
            playstyle: "Control ranger; uses summoned swarms to hinder and damage enemies while moving.",
            classId: classes.ranger.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.ranger_swarmkeeper_gathered_swarm.id },
                    //{ id: classFeatures.ranger_swarmkeeper_writhing_tide.id },
                    //{ id: classFeatures.ranger_swarmkeeper_swarmkeepers_fury.id }
                //]
            //}
        }),
        rogue_inquisitive: await db.createSubclass({
            id: "subclass-rogue-inquisitive",
            name: "Inquisitive",
            //slug: "inquisitive",
            description: "Inquisitive subclass.",
            alabastriaContext: "The Inquisitive archetype developed during the Modern Era, when detectives and spies were needed to uncover secrets in complex political landscapes. These rogues learned to seek out secrets and track lies with acute perception. This tradition has found particular use in regions with complex politics or legal systems, though its practitioners serve wherever secrets need uncovering.",
            playstyle: "Detective rogue; excels at noticing hidden things and countering deception.",
            classId: classes.rogue.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.rogue_inquisitive_ear_for_deceit.id },
                    //{ id: classFeatures.rogue_inquisitive_eye_for_detail.id },
                    //{ id: classFeatures.rogue_inquisitive_unerring_eye.id }
                //]
            //}
        }),
        rogue_mastermind: await db.createSubclass({
            id: "subclass-rogue-mastermind",
            name: "Mastermind",
            //slug: "mastermind",
            description: "Mastermind subclass.",
            alabastriaContext: "The Mastermind archetype emerged during the complex political landscape of the Modern Era, when criminal strategists were needed to manipulate others and understand tactics. These rogues learned to focus on allies with cunning action, support, and manipulation. This tradition has found particular use in regions with complex politics or criminal organizations, though its practitioners serve wherever strategy and manipulation are needed.",
            playstyle: "Leader rogue; focuses on allies with cunning action, support, and manipulation.",
            classId: classes.rogue.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.rogue_mastermind_master_of_intrigue.id },
                    //{ id: classFeatures.rogue_mastermind_master_of_tactics.id },
                    //{ id: classFeatures.rogue_mastermind_soul_of_deceit.id }
                //]
            //}
        }),
        rogue_phantom: await db.createSubclass({
            id: "subclass-rogue-phantom",
            name: "Phantom",
            //slug: "phantom",
            description: "Phantom subclass.",
            alabastriaContext: "The Phantom archetype developed from the need to understand death after The Bringing, when countless souls were lost. Rogues discovered they could blur the lines between life and death, channeling spirits to deceive and terrify. This tradition has found particular use in regions touched by death and loss, though its practitioners serve wherever spirits need channeling.",
            playstyle: "Stealthy dread; siphons off damage and uses ghostly powers to confuse enemies.",
            classId: classes.rogue.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.rogue_phantom_wails_from_the_grave.id },
                    //{ id: classFeatures.rogue_phantom_tokens_of_the_departed.id },
                    //{ id: classFeatures.rogue_phantom_ghost_walk.id }
                //]
            //}
        }),
        rogue_scout: await db.createSubclass({
            id: "subclass-rogue-scout",
            name: "Scout",
            //slug: "scout",
            description: "Scout subclass.",
            alabastriaContext: "The Scout archetype emerged during the initial settlements, when rogues needed wilderness expertise to survive in untamed lands. These patrollers learned to dodge effortlessly and strike quickly from cover, using hit-and-run tactics. This tradition has found particular use in wild regions, though its practitioners serve wherever wilderness expertise meets roguish skills.",
            playstyle: "Mobile skirmisher; uses hit-and-run tactics and quick strikes.",
            classId: classes.rogue.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.rogue_scout_skirmisher.id },
                    //{ id: classFeatures.rogue_scout_survivalist.id },
                    //{ id: classFeatures.rogue_scout_sudden_strike.id }
                //]
            //}
        }),
        rogue_soulknife: await db.createSubclass({
            id: "subclass-rogue-soulknife",
            name: "Soulknife",
            //slug: "soulknife",
            description: "Soulknife subclass.",
            alabastriaContext: "The Soulknife archetype developed during the Modern Era, when rogues discovered they could create blades of pure mind through psychic energy. These mystic assassins learned to use telepathic blades and psychic skills for silent kills. This tradition has found particular use in regions with psionic traditions, though its practitioners serve wherever psychic power meets assassination.",
            playstyle: "Psionic fighter; uses telepathic blades and psychic skills for silent kills.",
            classId: classes.rogue.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.rogue_soulknife_psychic_blades.id },
                    //{ id: classFeatures.rogue_soulknife_psychic_whispers.id },
                    //{ id: classFeatures.rogue_soulknife_soul_knife.id }
                //]
            //}
        }),
        rogue_swashbuckler: await db.createSubclass({
            id: "subclass-rogue-swashbuckler",
            name: "Swashbuckler",
            //slug: "swashbuckler",
            description: "Swashbuckler subclass.",
            alabastriaContext: "The Swashbuckler archetype emerged during the Great Trade Expansion, when charismatic duelists were needed to protect trade ships and coastal settlements. These rogues learned to blend panache with swordplay, charming allies and foes alike while focusing on single combat. This tradition has found particular use in coastal regions, though its practitioners serve wherever charisma meets swordplay.",
            playstyle: "Agile front rogue; focuses on single combat with flair and mobility.",
            classId: classes.rogue.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.rogue_swashbuckler_fancy_footwork.id },
                    //{ id: classFeatures.rogue_swashbuckler_rakish_audacity.id },
                    //{ id: classFeatures.rogue_swashbuckler_panache.id }
                //]
            //}
        }),
        sorcerer_aberrant_mind: await db.createSubclass({
            id: "subclass-sorcerer-aberrant-mind",
            name: "Aberrant Mind",
            //slug: "aberrant-mind",
            description: "Aberrant Mind subclass.",
            alabastriaContext: "The Aberrant Mind origin developed during the Modern Era, when sorcerers discovered they were haunted by psionic powers from strange cosmic energies. These sorcerers learned to blend sorcery with mind-bending powers to confuse foes. This tradition has found particular use in regions touched by cosmic or psionic forces, though its practitioners serve wherever aberrant power manifests.",
            playstyle: "Psionic caster; blends sorcery with mind-bending powers to confuse foes.",
            classId: classes.sorcerer.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.sorcerer_aberrant_mind_psionic_spells.id },
                    //{ id: classFeatures.sorcerer_aberrant_mind_mind_thrust.id },
                    //{ id: classFeatures.sorcerer_aberrant_mind_bend_mind.id }
                //]
            //}
        }),
        sorcerer_clockwork_soul: await db.createSubclass({
            id: "subclass-sorcerer-clockwork-soul",
            name: "Clockwork Soul",
            //slug: "clockwork-soul",
            description: "Clockwork Soul subclass.",
            alabastriaContext: "The Clockwork Soul origin emerged during the Modern Era, when sorcerers discovered they embodied cosmic order. These sorcerers learned to draw upon mechanical precision and cosmic balance, granting stability to allies. This tradition has found particular use in regions with strong traditions of order and precision, though its practitioners serve wherever cosmic balance needs champions.",
            playstyle: "Support mage; grants stability to allies and offense through order-infused spells.",
            classId: classes.sorcerer.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.sorcerer_clockwork_soul_clockwork_magic.id },
                    //{ id: classFeatures.sorcerer_clockwork_soul_restore_balance.id },
                    //{ id: classFeatures.sorcerer_clockwork_soul_trance_of_order.id }
                //]
            //}
        }),
        sorcerer_lunar_sorcery: await db.createSubclass({
            id: "subclass-sorcerer-lunar-sorcery",
            name: "Lunar Sorcery",
            //slug: "lunar-sorcery",
            description: "Lunar Sorcery subclass.",
            alabastriaContext: "The Lunar Sorcery origin developed during the early cycles, when sorcerers discovered they were attuned to the moon. These sorcerers learned to call forth moonlight to empower their magic, boosting spells by harnessing lunar phases. This tradition has found particular use in regions with strong lunar traditions, though its practitioners serve wherever lunar power manifests.",
            playstyle: "Mystical caster; boosts spells by harnessing lunar phases.",
            classId: classes.sorcerer.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.sorcerer_lunar_sorcery_moonfire.id },
                    //{ id: classFeatures.sorcerer_lunar_sorcery_lunar_magic.id },
                    //{ id: classFeatures.sorcerer_lunar_sorcery_diffusing_evasion.id }
                //]
            //}
        }),
        sorcerer_shadow_magic: await db.createSubclass({
            id: "subclass-sorcerer-shadow-magic",
            name: "Shadow Magic",
            //slug: "shadow-magic",
            description: "Shadow Magic subclass.",
            alabastriaContext: "The Shadow Magic origin emerged during the early cycles, when sorcerers discovered they were born under darkness. These sorcerers learned to wield shadows as their power source, using darkness and necrotic spells for control. This tradition has found particular use in regions touched by shadow or darkness, though its practitioners serve wherever shadow power manifests.",
            playstyle: "Stealth caster; uses darkness and necrotic spells for control.",
            classId: classes.sorcerer.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.sorcerer_shadow_magic_eyes_of_the_dark.id },
                    //{ id: classFeatures.sorcerer_shadow_magic_strength_of_the_grave.id },
                    //{ id: classFeatures.sorcerer_shadow_magic_shadow_walk.id }
                //]
            //}
        }),
        sorcerer_storm_sorcery: await db.createSubclass({
            id: "subclass-sorcerer-storm-sorcery",
            name: "Storm Sorcery",
            //slug: "storm-sorcery",
            description: "Storm Sorcery subclass.",
            alabastriaContext: "The Storm Sorcery origin developed during the harsh early cycles, when sorcerers discovered echoes of the elemental planes within them. These sorcerers learned to draw on storm and sky to cast thunderous spells, specializing in lightning and thunder magic. This tradition has found particular use in regions with strong storms or high peaks, though its practitioners serve wherever storm power manifests.",
            playstyle: "Elemental caster; specializes in lightning and thunder magic.",
            classId: classes.sorcerer.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.sorcerer_storm_sorcery_tempestuous_magic.id },
                    //{ id: classFeatures.sorcerer_storm_sorcery_heart_of_the_storm.id },
                    //{ id: classFeatures.sorcerer_storm_sorcery_storms_fury.id }
                //]
            //}
        }),
        warlock_the_celestial: await db.createSubclass({
            id: "subclass-warlock-the-celestial",
            name: "The Celestial",
            //slug: "the-celestial",
            description: "The Celestial subclass.",
            alabastriaContext: "The Celestial patron developed during the early cycles, when warlocks discovered they could serve patrons from the Upper Planes. These warlocks learned to gain healing and light magic, using healing light to aid allies while dealing radiant damage. This tradition has found particular use in regions with strong celestial traditions, though its practitioners serve wherever celestial power is accessible.",
            playstyle: "Healer-support caster; uses healing light to aid allies while also dealing radiant damage.",
            classId: classes.warlock.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.warlock_the_celestial_bonus_cantrips.id },
                    //{ id: classFeatures.warlock_the_celestial_healing_light.id },
                    //{ id: classFeatures.warlock_the_celestial_radiant_soul.id }
                //]
            //}
        }),
        warlock_the_fathomless: await db.createSubclass({
            id: "subclass-warlock-the-fathomless",
            name: "The Fathomless",
            //slug: "the-fathomless",
            description: "The Fathomless subclass.",
            alabastriaContext: "The Fathomless patron emerged during the early settlements, when warlocks discovered entities of the deep seas or underground oceans. These warlocks learned to gain mysterious sea powers, manipulating water and tentacles to bind enemies. This tradition has found particular use in coastal or underground regions, though its practitioners serve wherever sea power is accessible.",
            playstyle: "Control caster; manipulates water and tentacles to bind enemies.",
            classId: classes.warlock.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.warlock_the_fathomless_tentacle_of_the_deeps.id },
                    //{ id: classFeatures.warlock_the_fathomless_gift_of_the_sea.id },
                    //{ id: classFeatures.warlock_the_fathomless_guardian_coil.id }
                //]
            //}
        }),
        warlock_the_genie: await db.createSubclass({
            id: "subclass-warlock-the-genie",
            name: "The Genie",
            //slug: "the-genie",
            description: "The Genie subclass.",
            alabastriaContext: "The Genie patron developed during the early cycles, when warlocks discovered genie patrons from the Elemental Planes. These warlocks learned to gain elemental might and plane-travel abilities. This tradition has found particular use in regions with strong elemental connections, though its practitioners serve wherever genie power is accessible.",
            playstyle: "Versatile caster; gains elemental spells and plane-travel abilities.",
            classId: classes.warlock.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.warlock_the_genie_genies_vessel.id },
                    //{ id: classFeatures.warlock_the_genie_elemental_gift.id },
                    //{ id: classFeatures.warlock_the_genie_protective_benefaction.id }
                //]
            //}
        }),
        warlock_the_hexblade: await db.createSubclass({
            id: "subclass-warlock-the-hexblade",
            name: "The Hexblade",
            //slug: "the-hexblade",
            description: "The Hexblade subclass.",
            alabastriaContext: "The Hexblade patron emerged during the Modern Era, when warlocks discovered they could be bound to sentient weapons or curses. These warlocks learned to blend martial and magic by cursing their foes, striking with cursed weapons. This tradition has found particular use in regions with ancient ruins or cursed artifacts, though its practitioners serve wherever hexblade power is accessible.",
            playstyle: "Hybrid fighter; strikes with cursed weapons and debuffs enemies.",
            classId: classes.warlock.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.warlock_the_hexblade_hex_warrior.id },
                    //{ id: classFeatures.warlock_the_hexblade_hexblades_curse.id },
                    //{ id: classFeatures.warlock_the_hexblade_accursed_specter.id }
                //]
            //}
        }),
        warlock_the_undead: await db.createSubclass({
            id: "subclass-warlock-the-undead",
            name: "The Undead",
            //slug: "the-undead",
            description: "The Undead subclass.",
            alabastriaContext: "The Undead patron developed during the early cycles, when warlocks discovered they could make dark pacts with necromantic powers. These warlocks learned to gain control over deathly energies, raising undead and draining life with spells. This tradition has found particular use in regions touched by undeath, though its practitioners serve wherever necromantic power is accessible.",
            playstyle: "Necromantic caster; raises undead and drains life with spells.",
            classId: classes.warlock.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.warlock_the_undead_form_of_dread.id },
                    //{ id: classFeatures.warlock_the_undead_ghostly_gaze.id },
                    //{ id: classFeatures.warlock_the_undead_defy_death.id }
                //]
            //}
        }),
        warlock_the_undying: await db.createSubclass({
            id: "subclass-warlock-the-undying",
            name: "The Undying",
            //slug: "the-undying",
            description: "The Undying subclass.",
            alabastriaContext: "The Undying patron emerged during the Modern Era, when warlocks discovered they could serve ageless beings who sought the secrets of immortality. These warlocks learned to resist death effects and sustain life through arcane means. This tradition has found particular use in regions with ancient traditions or elven communities, though its practitioners serve wherever immortality is sought.",
            playstyle: "Durable caster; resists death effects and sustains life through arcane means.",
            classId: classes.warlock.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.warlock_the_undying_among_the_dead.id },
                    //{ id: classFeatures.warlock_the_undying_defy_death.id },
                    //{ id: classFeatures.warlock_the_undying_undying_nature.id }
                //]
            //}
        }),
        wizard_school_of_abjuration: await db.createSubclass({
            id: "subclass-wizard-school-of-abjuration",
            name: "School of Abjuration",
            //slug: "school-of-abjuration",
            description: "School of Abjuration subclass.",
            alabastriaContext: "The School of Abjuration emerged during the First Continental War, when wizards needed to specialize in protective magic. These wizards learned to excel at shields, protective wards, and dispelling enemy magic, acting as magical guardians. This tradition has found particular use in regions with active warfare or valuable artifacts, though its practitioners serve wherever protection is needed.",
            playstyle: "Defensive caster; excels at shields, protective wards, and dispelling enemy magic.",
            classId: classes.wizard.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.wizard_school_of_abjuration_arcane_ward.id },
                    //{ id: classFeatures.wizard_school_of_abjuration_projected_ward.id },
                    //{ id: classFeatures.wizard_school_of_abjuration_improved_abjuration.id }
                //]
            //}
        }),
        wizard_school_of_bladesinging: await db.createSubclass({
            id: "subclass-wizard-school-of-bladesinging",
            name: "School of Bladesinging",
            //slug: "school-of-bladesinging",
            description: "School of Bladesinging subclass.",
            alabastriaContext: "The School of Bladesinging developed during Kuriguer's Magic Surge, when elven wizards discovered they could blend swordplay with spells. These wizards learned to perform martial dance with arcane precision, combining agility and sword spells. This tradition has found particular use in regions with strong elven traditions, though its practitioners serve wherever swordplay and magic intersect.",
            playstyle: "Melee caster; combines agility and sword spells for versatile combat.",
            classId: classes.wizard.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.wizard_school_of_bladesinging_training_in_war_and_song.id },
                    //{ id: classFeatures.wizard_school_of_bladesinging_bladesong.id },
                    //{ id: classFeatures.wizard_school_of_bladesinging_extra_attack.id }
                //]
            //}
        }),
        wizard_school_of_chronurgy: await db.createSubclass({
            id: "subclass-wizard-school-of-chronurgy",
            name: "School of Chronurgy",
            //slug: "school-of-chronurgy",
            description: "School of Chronurgy subclass.",
            alabastriaContext: "The School of Chronurgy emerged during the Modern Era, when wizards discovered they could master time itself. These wizards learned to study the flow of time and bend it to their will, manipulating outcomes in battle. This tradition has found particular use in regions with temporal anomalies, though its practitioners serve wherever time manipulation is needed.",
            playstyle: "Control caster; alters fate and manipulates time in battles.",
            classId: classes.wizard.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.wizard_school_of_chronurgy_chronal_shift.id },
                    //{ id: classFeatures.wizard_school_of_chronurgy_momentary_stasis.id },
                    //{ id: classFeatures.wizard_school_of_chronurgy_convergent_future.id }
                //]
            //}
        }),
        wizard_school_of_conjuration: await db.createSubclass({
            id: "subclass-wizard-school-of-conjuration",
            name: "School of Conjuration",
            //slug: "school-of-conjuration",
            description: "School of Conjuration subclass.",
            alabastriaContext: "The School of Conjuration developed during the Great Trade Expansion, when wizards needed to summon creatures and objects for quick solutions. These wizards learned to act as portals through the multiverse, adapting to situations through summoning. This tradition has found particular use in regions with active trade or exploration, though its practitioners serve wherever versatility through summoning is needed.",
            playstyle: "Versatile caster; summons allies or objects to adapt to situations.",
            classId: classes.wizard.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.wizard_school_of_conjuration_minor_conjuration.id },
                    //{ id: classFeatures.wizard_school_of_conjuration_benign_transposition.id },
                    //{ id: classFeatures.wizard_school_of_conjuration_focused_conjuration.id }
                //]
            //}
        }),
        wizard_school_of_enchantment: await db.createSubclass({
            id: "subclass-wizard-school-of-enchantment",
            name: "School of Enchantment",
            //slug: "school-of-enchantment",
            description: "School of Enchantment subclass.",
            alabastriaContext: "The School of Enchantment emerged during the complex political landscape of the Modern Era, when wizards needed to weave charm and illusion into their spells. These wizards learned to sway minds and hearts, excelling at charming enemies and controlling crowds. This tradition has found particular use in regions with complex politics, though its practitioners serve wherever mind control is needed.",
            playstyle: "Subterfuge caster; excels at charming enemies and controlling crowds.",
            classId: classes.wizard.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.wizard_school_of_enchantment_hypnotic_gaze.id },
                    //{ id: classFeatures.wizard_school_of_enchantment_instinctive_charm.id },
                    //{ id: classFeatures.wizard_school_of_enchantment_split_enchantment.id }
                //]
            //}
        }),
        wizard_school_of_graviturgy: await db.createSubclass({
            id: "subclass-wizard-school-of-graviturgy",
            name: "School of Graviturgy",
            //slug: "school-of-graviturgy",
            description: "School of Graviturgy subclass.",
            alabastriaContext: "The School of Graviturgy developed during the Modern Era, when wizards discovered they could manipulate gravity itself. These wizards learned to make objects heavy or weightless, manipulating the battlefield by warping gravity. This tradition has found particular use in regions with strong magical institutions, though its practitioners serve wherever gravity manipulation is needed.",
            playstyle: "Control caster; manipulates battlefield by warping gravity.",
            classId: classes.wizard.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.wizard_school_of_graviturgy_adjust_density.id },
                    //{ id: classFeatures.wizard_school_of_graviturgy_gravity_well.id },
                    //{ id: classFeatures.wizard_school_of_graviturgy_mighty_leap.id }
                //]
            //}
        }),
        wizard_school_of_necromancy: await db.createSubclass({
            id: "subclass-wizard-school-of-necromancy",
            name: "School of Necromancy",
            //slug: "school-of-necromancy",
            description: "School of Necromancy subclass.",
            alabastriaContext: "The School of Necromancy emerged during the early cycles, when wizards needed to understand death after The Bringing. These wizards learned to commune with death, commanding undead or sapping life. This tradition has found particular use in regions touched by death and undeath, though its practitioners serve wherever necromantic power is needed, often working in secret due to its taboo nature.",
            playstyle: "Offensive caster; raises undead, drains life, and endures undeath.",
            classId: classes.wizard.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.wizard_school_of_necromancy_grim_harvest.id },
                    //{ id: classFeatures.wizard_school_of_necromancy_undead_thralls.id },
                    //{ id: classFeatures.wizard_school_of_necromancy_inured_to_undeath.id }
                //]
            //}
        }),
        wizard_order_of_scribes: await db.createSubclass({
            id: "subclass-wizard-order-of-scribes",
            name: "Order of Scribes",
            //slug: "order-of-scribes",
            description: "Order of Scribes subclass.",
            alabastriaContext: "The Order of Scribes developed during the Great Trade Expansion, when wizards needed to preserve and organize knowledge from different realms. These scholars learned to inscribe spells into sentient spellbooks that guide them through magic. This tradition has found particular use in regions with grand libraries or magical academies, though its practitioners serve wherever knowledge organization is needed.",
            playstyle: "Flexible caster; any prepared spell can be their focus, adapting easily.",
            classId: classes.wizard.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.wizard_order_of_scribes_wizardly_quill.id },
                    //{ id: classFeatures.wizard_order_of_scribes_awakened_spellbook.id },
                    //{ id: classFeatures.wizard_order_of_scribes_manifest_mind.id }
                //]
            //}
        }),
        wizard_school_of_transmutation: await db.createSubclass({
            id: "subclass-wizard-school-of-transmutation",
            name: "School of Transmutation",
            //slug: "school-of-transmutation",
            description: "School of Transmutation subclass.",
            alabastriaContext: "The School of Transmutation developed during the early settlements, when wizards needed to alter matter itself for survival and construction. These wizards learned to turn stone to mud or man to bird, changing the properties of matter. This tradition has found particular use in regions with active mining or alchemy, though its practitioners serve wherever matter alteration is needed.",
            playstyle: "Utility caster; changes the properties of matter and improves allies.",
            classId: classes.wizard.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.wizard_school_of_transmutation_minor_alchemy.id },
                    //{ id: classFeatures.wizard_school_of_transmutation_transmuters_stone.id },
                    //{ id: classFeatures.wizard_school_of_transmutation_shapechanger.id }
                //]
            //}
        }),
        wizard_war_magic: await db.createSubclass({
            id: "subclass-wizard-war-magic",
            name: "School of War Magic",
            //slug: "war-magic",
            description: "School of War Magic subclass.",
            alabastriaContext: "The School of War Magic emerged during the First Continental War, when wizards needed to blend spellcasting with martial prowess. These soldiers learned to guard arcane battlefields with lethal spells while defending against enemy attacks. This tradition has found particular use in regions with active warfare, though its practitioners serve wherever combat magic is needed.",
            playstyle: "Balanced combat mage; good at offense while defending against enemy attacks.",
            classId: classes.wizard.id,
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.wizard_war_magic_arcane_deflection.id },
                    //{ id: classFeatures.wizard_war_magic_tactical_wit.id },
                    //{ id: classFeatures.wizard_war_magic_power_surge.id }
                //]
            //}
        })
    }
}