import { Prisma, /* AbilityScores, ArmorProficiency, ToolProficiency, WeaponProficiency */ } from "@prismagen/client";
import * as db from "@lib/db-seed";
import { ClassRoles/* , ClassFeatures */ } from "./index";

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
    //classFeatures: ClassFeatures;
}
export async function seedClasses(params: SeedClassesParams): Promise<Classes> {
    const { classRoles /*, classFeatures */ } = params;
    return {
        artificer: await db.createClass({
            id: "class-artificer",
            name: "Artificer",
            //slug: "artificer",
            description: "Innovative crafters who blend magic and technology to create magical items and devices. Masters of invention who infuse mundane objects with arcane power.",
            roles: { connect: [{ id: classRoles.support.id }, { id: classRoles.utility.id }] },
            //primaryAbility: [AbilityScores.INTELLIGENCE],
            //hitDie: "d8",
            //savingThrows: [AbilityScores.CONSTITUTION, AbilityScores.INTELLIGENCE],
            //armorProficiency: [ArmorProficiency.LIGHT_ARMOR, ArmorProficiency.MEDIUM_ARMOR, ArmorProficiency.SHIELDS],
            //weaponProficiency: [WeaponProficiency.SIMPLE_WEAPONS, WeaponProficiency.FIREARMS, WeaponProficiency.LIGHT_CROSSBOWS, WeaponProficiency.HEAVY_CROSSBOWS],
            //toolProficiency: [ToolProficiency.THIEVES_TOOLS, ToolProficiency.ARTISANS_TINKERS_TOOLS, ToolProficiency.ARTISANS_CHOOSE_ONE],
            alabastriaLore: "In the volcanic forges of Alatman and the mountain workshops of Maltman, Artificers represent the pinnacle of magical engineering. These innovative creators bridge the gap between ancient magic and emerging technology, crafting wonders that aid adventurers and defend settlements across Kamalatman.",
            playstyle: "Versatile support character who excels at problem-solving through magical items and utility spells. Best for players who enjoy creative solutions and helping the party with magical gadgets.",
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.artificer_magical_tinkering.id },
                    //{ id: classFeatures.artificer_infuse_item.id },
                    //{ id: classFeatures.artificer_spellcasting.id },
                    //{ id: classFeatures.artificer_tool_expertise.id },
                //]
            //}
        }),
        barbarian: await db.createClass({
            id: "class-barbarian",
            name: "Barbarian",
            //slug: "barbarian",
            description: "Fierce warriors who harness primal fury and instinct to become devastating forces in battle. They draw strength from rage and their connection to the wild.",
            roles: { connect: [ { id: classRoles.tank.id }, { id: classRoles.damage_dealer.id } ] },
            //primaryAbility: [AbilityScores.STRENGTH],
            //hitDie: "d12",
            //savingThrows: [AbilityScores.STRENGTH, AbilityScores.CONSTITUTION],
            //armorProficiency: [ArmorProficiency.LIGHT_ARMOR, ArmorProficiency.MEDIUM_ARMOR, ArmorProficiency.SHIELDS],
            //weaponProficiency: [WeaponProficiency.SIMPLE_WEAPONS, WeaponProficiency.MARTIAL_WEAPONS],
            //toolProficiency: [],
            alabastriaLore: "From the frozen peaks of Bulsania to the swampy strongholds of Katman, Barbarians embody the untamed spirit of Alabastria's wildest places. These warriors reject civilization's constraints, drawing power from ancestral spirits, primal totems, and the raw fury of the natural world.",
            playstyle: "High-damage, high-durability front-line fighter. Best for players who want to charge into battle and deal massive damage while shrugging off enemy attacks.",
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.barbarian_rage.id },
                    //{ id: classFeatures.barbarian_unarmored_defense.id },
                    //{ id: classFeatures.barbarian_reckless_attack.id },
                    //{ id: classFeatures.barbarian_extra_attack.id },
                //]
            //}
        }),
        bard: await db.createClass({
            id: "class-bard",
            name: "Bard",
            //slug: "bard",
            description: "Versatile performers who weave magic through music, stories, and performance. Masters of inspiration who support allies and control the battlefield through charm and wit.",
            roles: { connect: [ { id: classRoles.support.id }, { id: classRoles.utility.id } ] },
            //primaryAbility: [AbilityScores.CHARISMA],
            //hitDie: "d8",
            //savingThrows: [AbilityScores.DEXTERITY, AbilityScores.CHARISMA],
            //armorProficiency: [ArmorProficiency.LIGHT_ARMOR],
            //weaponProficiency: [WeaponProficiency.SIMPLE_WEAPONS, WeaponProficiency.HAND_CROSSBOWS, WeaponProficiency.LONGSWORDS, WeaponProficiency.RAPIERS, WeaponProficiency.SHORTSWORDS],
            //toolProficiency: [ToolProficiency.MUSICAL_INSTRUMENT_CHOOSE_THREE],
            alabastriaLore: "In Skratonia's diverse city-states and Kuriguer's magical courts, Bards serve as diplomats, entertainers, and keepers of lore. Their songs preserve the history of The Bringing, weave magic through performance, and inspire heroes across all continents of Alabastria.",
            playstyle: "Ultimate support character with unmatched versatility. Best for players who enjoy helping others succeed and having options for every situation.",
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.bard_spellcasting.id },
                    //{ id: classFeatures.bard_bardic_inspiration.id },
                    //{ id: classFeatures.bard_jack_of_all_trades.id },
                    //{ id: classFeatures.bard_expertise.id },
                //]
            //}
        }),
        cleric: await db.createClass({
            id: "class-cleric",
            name: "Cleric",
            //slug: "cleric",
            description: "Divine agents who channel the power of their deities to heal, protect, and smite enemies. Servants of gods who wield holy magic to aid allies and punish the wicked.",
            roles: { connect: [ { id: classRoles.support.id }, { id: classRoles.healer.id } ] },
            //primaryAbility: [AbilityScores.WISDOM],
            //hitDie: "d8",
            //savingThrows: [AbilityScores.WISDOM, AbilityScores.CHARISMA],
            //armorProficiency: [ArmorProficiency.LIGHT_ARMOR, ArmorProficiency.MEDIUM_ARMOR, ArmorProficiency.SHIELDS],
            //weaponProficiency: [WeaponProficiency.SIMPLE_WEAPONS],
            //toolProficiency: [],
            alabastriaLore: "Across Alabastria's diverse continents, Clerics serve as the primary connection between mortals and the divine. From Tempus-worshipping War Clerics like Tharos Raggenthraw to forge-priests in Maltman's workshops, these holy servants adapt their faith to serve their communities' needs.",
            playstyle: "Primary healer and support with strong defensive capabilities. Best for players who want to keep the party alive while contributing meaningful combat support.",
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.cleric_spellcasting.id },
                    //{ id: classFeatures.cleric_divine_domain.id },
                    //{ id: classFeatures.cleric_channel_divinity.id },
                    //{ id: classFeatures.cleric_destroy_undead.id },
                //]
            //}
        }),
        druid: await db.createClass({
            id: "class-druid",
            name: "Druid",
            //slug: "druid",
            description: "Guardians of nature who wield primal magic and can transform into animals. Protectors of the natural world who draw power from the land itself.",
            roles: { connect: [ { id: classRoles.blaster.id }, { id: classRoles.shapeshifter.id } ] },
            //primaryAbility: [AbilityScores.WISDOM],
            //hitDie: "d8",
            //savingThrows: [AbilityScores.INTELLIGENCE, AbilityScores.WISDOM],
            //armorProficiency: [ArmorProficiency.LIGHT_ARMOR, ArmorProficiency.MEDIUM_ARMOR, ArmorProficiency.SHIELDS_NON_METAL_ONLY],
            //weaponProficiency: [WeaponProficiency.CLUBS, WeaponProficiency.DAGGERS, WeaponProficiency.DARTS, WeaponProficiency.JAVELINS, WeaponProficiency.MACES, WeaponProficiency.QUARTERSTAFFS, WeaponProficiency.SCIMITARS, WeaponProficiency.SICKLES, WeaponProficiency.SLINGS, WeaponProficiency.SPEARS],
            //toolProficiency: [ToolProficiency.HERBALISM_KIT],
            alabastriaLore: "In Kuriguer's magical forests and Skratonia's fertile plains, Druids maintain the balance between civilization and wilderness. These primal spellcasters guard ancient groves, tend to wounded lands, and serve as bridges between the natural and civilized worlds.",
            playstyle: "Versatile nature-based caster with shapeshifting abilities. Best for players who want to embody nature's power and have unique utility options.",
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.druid_druidcraft.id },
                    //{ id: classFeatures.druid_spellcasting.id },
                    //{ id: classFeatures.druid_wild_shape.id },
                    //{ id: classFeatures.druid_druid_circle.id },
                //]
            //}
        }),
        fighter: await db.createClass({
            id: "class-fighter",
            name: "Fighter",
            //slug: "fighter",
            description: "Masters of martial combat skilled with a variety of weapons and tactics. Versatile warriors who excel in physical combat through training and technique.",
            roles: { connect: [ { id: classRoles.tank.id }, { id: classRoles.damage_dealer.id } ] },
            //primaryAbility: [AbilityScores.STRENGTH, AbilityScores.DEXTERITY],
            //hitDie: "d10",
            //savingThrows: [AbilityScores.STRENGTH, AbilityScores.CONSTITUTION],
            //armorProficiency: [ArmorProficiency.LIGHT_ARMOR, ArmorProficiency.MEDIUM_ARMOR, ArmorProficiency.HEAVY_ARMOR, ArmorProficiency.SHIELDS],
            //weaponProficiency: [WeaponProficiency.SIMPLE_WEAPONS, WeaponProficiency.MARTIAL_WEAPONS],
            //toolProficiency: [],
            alabastriaLore: "From Skratonia's diverse city militias to Bulsania's elite dragon-riders, Fighters represent the pinnacle of martial training. These versatile warriors adapt their techniques to serve as guards, soldiers, duelists, and champions across all of Alabastria's continents.",
            playstyle: "Reliable physical combatant with excellent survivability. Best for players who want consistent performance in combat with tactical options.",
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.fighter_fighting_style.id },
                    //{ id: classFeatures.fighter_second_wind.id },
                    //{ id: classFeatures.fighter_action_surge.id },
                    //{ id: classFeatures.fighter_extra_attack.id },
                //]
            //}
        }),
        monk: await db.createClass({
            id: "class-monk",
            name: "Monk",
            //slug: "monk",
            description: "Disciplined martial artists who harness their inner energy (ki) for extraordinary abilities. Masters of unarmed combat who achieve supernatural feats through meditation and training.",
            roles: { connect: [ { id: classRoles.striker.id }, { id: classRoles.utility.id } ] },
            //primaryAbility: [AbilityScores.DEXTERITY, AbilityScores.WISDOM],
            //hitDie: "d8",
            //savingThrows: [AbilityScores.STRENGTH, AbilityScores.DEXTERITY],
            //armorProficiency: [],
            //weaponProficiency: [WeaponProficiency.SIMPLE_WEAPONS, WeaponProficiency.SHORTSWORDS],
            //toolProficiency: [ToolProficiency.ARTISANS_CHOOSE_ONE_OR_MUSICAL_INSTRUMENT_CHOOSE_ONE],
            alabastriaLore: "In hidden monasteries across Alabastria's mountains and secluded valleys, Monks pursue physical and spiritual perfection. These disciplined warriors combine ancient martial techniques with mystical ki manipulation, serving as guardians, seekers, and enlightened warriors.",
            playstyle: "Mobile striker with unique abilities and excellent utility. Best for players who want to be agile, versatile, and different from traditional warriors.",
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.monk_unarmored_defense.id },
                    //{ id: classFeatures.monk_martial_arts.id },
                    //{ id: classFeatures.monk_ki.id },
                    //{ id: classFeatures.monk_unarmored_movement.id },
                //]
            //}
        }),
        paladin: await db.createClass({
            id: "class-paladin",
            name: "Paladin",
            //slug: "paladin",
            description: "Holy warriors bound by sacred oaths to uphold justice and righteousness. Divine champions who combine martial prowess with holy magic to protect the innocent.",
            roles: { connect: [ { id: classRoles.tank.id }, { id: classRoles.support.id } ] },
            //primaryAbility: [AbilityScores.STRENGTH, AbilityScores.CHARISMA],
            //hitDie: "d10",
            //savingThrows: [AbilityScores.WISDOM, AbilityScores.CHARISMA],
            //armorProficiency: [ArmorProficiency.LIGHT_ARMOR, ArmorProficiency.MEDIUM_ARMOR, ArmorProficiency.HEAVY_ARMOR, ArmorProficiency.SHIELDS],
            //weaponProficiency: [WeaponProficiency.SIMPLE_WEAPONS, WeaponProficiency.MARTIAL_WEAPONS],
            //toolProficiency: [],
            alabastriaLore: "Across Alabastria's realms, Paladins stand as beacons of hope and justice. These oath-bound warriors serve various causes, from protecting ancient forests to conquering evil, their divine magic powered by unwavering conviction and righteous purpose.",
            playstyle: "Durable front-line fighter with healing and support abilities. Best for players who want to be the party's moral compass and protector.",
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.paladin_divine_sense.id },
                    //{ id: classFeatures.paladin_lay_on_hands.id },
                    //{ id: classFeatures.paladin_divine_smite.id },
                    //{ id: classFeatures.paladin_sacred_oath.id },
                //]
            //}
        }),
        ranger: await db.createClass({
            id: "class-ranger",
            name: "Ranger",
            //slug: "ranger",
            description: "Skilled hunters and trackers who thrive in the wilderness. Masters of survival who protect civilization's borders and guide others through dangerous lands.",
            roles: { connect: [ { id: classRoles.striker.id }, { id: classRoles.scout.id } ] },
            //primaryAbility: [AbilityScores.DEXTERITY, AbilityScores.WISDOM],
            //hitDie: "d10",
            //savingThrows: [AbilityScores.STRENGTH, AbilityScores.DEXTERITY],
            //armorProficiency: [ArmorProficiency.LIGHT_ARMOR, ArmorProficiency.MEDIUM_ARMOR, ArmorProficiency.SHIELDS],
            //weaponProficiency: [WeaponProficiency.SIMPLE_WEAPONS, WeaponProficiency.MARTIAL_WEAPONS],
            //toolProficiency: [],
            alabastriaLore: "From Kuriguer's magical forests to Bulsania's frozen peaks, Rangers serve as guardians of the wild places. These skilled trackers and hunters protect travelers, hunt dangerous beasts, and maintain the balance between civilization and wilderness.",
            playstyle: "Versatile scout and ranged combatant with survival expertise. Best for players who want to excel in exploration and outdoor adventures.",
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.ranger_favored_enemy.id },
                    //{ id: classFeatures.ranger_natural_explorer.id },
                    //{ id: classFeatures.ranger_spellcasting.id },
                    //{ id: classFeatures.ranger_ranger_archetype.id },
                //]
            //}
        }),
        rogue: await db.createClass({
            id: "class-rogue",
            name: "Rogue",
            //slug: "rogue",
            description: "Cunning and agile characters who excel in stealth, thievery, and precision strikes. Masters of skills and subterfuge who strike from the shadows.",
            roles: { connect: [ { id: classRoles.striker.id }, { id: classRoles.utility.id } ] },
            //primaryAbility: [AbilityScores.DEXTERITY],
            //hitDie: "d8",
            //savingThrows: [AbilityScores.DEXTERITY, AbilityScores.INTELLIGENCE],
            //armorProficiency: [ArmorProficiency.LIGHT_ARMOR],
            //weaponProficiency: [WeaponProficiency.SIMPLE_WEAPONS, WeaponProficiency.HAND_CROSSBOWS, WeaponProficiency.LONGSWORDS, WeaponProficiency.RAPIERS, WeaponProficiency.SHORTSWORDS],
            //toolProficiency: [ToolProficiency.THIEVES_TOOLS],
            alabastriaLore: "In Skratonia's bustling cities and Kuriguer's diverse ports, Rogues operate in the shadows of society. These skilled individuals serve as spies, thieves, investigators, and scouts, using cunning and agility to accomplish what others cannot through force.",
            playstyle: "High-damage striker with excellent utility and mobility. Best for players who enjoy stealth, problem-solving, and precise strikes.",
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.rogue_expertise.id },
                    //{ id: classFeatures.rogue_sneak_attack.id },
                    //{ id: classFeatures.rogue_thieves_cant.id },
                    //{ id: classFeatures.rogue_cunning_action.id },
                //]
            //}
        }),
        sorcerer: await db.createClass({
            id: "class-sorcerer",
            name: "Sorcerer",
            //slug: "sorcerer",
            description: "Innate spellcasters whose magic comes from their bloodline or a mysterious source within. Raw magical power channeled through force of personality.",
            roles: { connect: [ { id: classRoles.damage_dealer.id }, { id: classRoles.controller.id } ] },
            //primaryAbility: [AbilityScores.CHARISMA],
            //hitDie: "d6",
            //savingThrows: [AbilityScores.CONSTITUTION, AbilityScores.CHARISMA],
            //armorProficiency: [],
            //weaponProficiency: [WeaponProficiency.DAGGERS, WeaponProficiency.DARTS, WeaponProficiency.SLINGS, WeaponProficiency.QUARTERSTAFFS, WeaponProficiency.LIGHT_CROSSBOWS],
            //toolProficiency: [],
            alabastriaLore: "Across Alabastria, Sorcerers represent the raw power of magic made manifest. From Dragonborn with draconic heritage in Bulsania to Tieflings channeling infernal chaos in Skratonia, these spellcasters wield power that flows from their very being.",
            playstyle: "Flexible spellcaster with powerful magical effects. Best for players who want to specialize in magic and customize their spells.",
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.sorcerer_spellcasting.id },
                    //{ id: classFeatures.sorcerer_sorcerous_origin.id },
                    //{ id: classFeatures.sorcerer_font_of_magic.id },
                    //{ id: classFeatures.sorcerer_metamagic.id },
                //]
            //}
        }),
        warlock: await db.createClass({
            id: "class-warlock",
            name: "Warlock",
            //slug: "warlock",
            description: "Spellcasters who derive their magic from pacts with powerful entities. Wielders of eldritch power gained through otherworldly bargains.",
            roles: { connect: [ { id: classRoles.damage_dealer.id }, { id: classRoles.utility.id } ] },
            //primaryAbility: [AbilityScores.CHARISMA],
            //hitDie: "d8",
            //savingThrows: [AbilityScores.WISDOM, AbilityScores.CHARISMA],
            //armorProficiency: [ArmorProficiency.LIGHT_ARMOR],
            //weaponProficiency: [WeaponProficiency.SIMPLE_WEAPONS],
            //toolProficiency: [],
            alabastriaLore: "In Alabastria's shadowed corners and desperate places, Warlocks forge pacts with beings beyond mortal understanding. From Tieflings embracing their fiendish heritage to Humans seeking forbidden power, these spellcasters trade pieces of their souls for eldritch might.",
            playstyle: "Customizable spellcaster with consistent power. Best for players who want unique abilities and don't mind role-playing otherworldly obligations.",
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.warlock_otherworldly_patron.id },
                    //{ id: classFeatures.warlock_pact_magic.id },
                    //{ id: classFeatures.warlock_eldritch_invocations.id },
                    //{ id: classFeatures.warlock_pact_boon.id },
                //]
            //}
        }),
        wizard: await db.createClass({
            id: "class-wizard",
            name: "Wizard",
            //slug: "wizard",
            description: "Scholarly spellcasters who master arcane magic through rigorous study and research. The ultimate magical generalists with access to the largest spell selection.",
            roles: { connect: [ { id: classRoles.controller.id }, { id: classRoles.utility.id } ] },
            //primaryAbility: [AbilityScores.INTELLIGENCE],
            //hitDie: "d6",
            //savingThrows: [AbilityScores.INTELLIGENCE, AbilityScores.WISDOM],
            //armorProficiency: [],
            //weaponProficiency: [WeaponProficiency.DAGGERS, WeaponProficiency.DARTS, WeaponProficiency.SLINGS, WeaponProficiency.QUARTERSTAFFS, WeaponProficiency.LIGHT_CROSSBOWS],
            //toolProficiency: [],
            alabastriaLore: "In Kuriguer's magical academies and Skratonia's scholarly institutions, Wizards represent the pinnacle of magical learning. These dedicated researchers unlock the secrets of arcane power through study, experimentation, and careful documentation of magical phenomena.",
            playstyle: "Ultimate magical versatility with preparation-based casting. Best for players who enjoy strategic planning and having the right spell for every situation.",
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.wizard_spellcasting.id },
                    //{ id: classFeatures.wizard_arcane_recovery.id },
                    //{ id: classFeatures.wizard_arcane_tradition.id },
                    //{ id: classFeatures.wizard_spell_mastery.id },
                //]
            //}
        }),
        tactician: await db.createClass({
            id: "class-tactician",
            name: "Tactician",
            //slug: "tactician",
            description: "Masters of strategy and battlefield control who use intelligence and planning to outmaneuver enemies and coordinate allies. These brilliant commanders excel at analyzing situations and turning the tide of battle through superior tactics.",
            roles: { connect: [ { id: classRoles.support.id }, { id: classRoles.controller.id } ] },
            //primaryAbility: [AbilityScores.INTELLIGENCE],
            //hitDie: "d8",
            //savingThrows: [AbilityScores.INTELLIGENCE, AbilityScores.WISDOM],
            //armorProficiency: [ArmorProficiency.LIGHT_ARMOR, ArmorProficiency.MEDIUM_ARMOR, ArmorProficiency.SHIELDS],
            //weaponProficiency: [WeaponProficiency.SIMPLE_WEAPONS, WeaponProficiency.HAND_CROSSBOWS, WeaponProficiency.LONGSWORDS, WeaponProficiency.RAPIERS, WeaponProficiency.SHORTSWORDS],
            //toolProficiency: [ToolProficiency.GAMING_SET_CHOOSE_ONE, ToolProficiency.MUSICAL_INSTRUMENT_CHOOSE_ONE],
            alabastriaLore: "In the complex political landscape of Alabastria, Tacticians serve as military advisors, guild strategists, and battlefield commanders. Their analytical minds and strategic thinking make them invaluable in the Huntbound Order's most dangerous missions, where proper planning can mean the difference between victory and disaster.",
            playstyle: "Support character who excels at battlefield control and enhancing allies through strategic planning. Best for players who enjoy tactical thinking and coordinating team efforts.",
            //keyFeatures: {
                //connect: [
                    //{ id: classFeatures.tactician_perfect_plan.id },
                    //{ id: classFeatures.tactician_intelligent_defense.id },
                    //{ id: classFeatures.tactician_analyze.id },
                    //{ id: classFeatures.tactician_strategic_focus.id },
                    //{ id: classFeatures.tactician_tactical_command.id },
                    //{ id: classFeatures.tactician_battlefield_control.id },
                //]
            //}
        }),
    }
}