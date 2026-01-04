import { Prisma } from "@prismagen/client";
import * as db from "@lib/db-seed";
import { Races, RaceTraits, RaceAbilityScores } from "./index";

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
    genasi_air_genasi: SubracePayload;
    genasi_earth_genasi: SubracePayload;
    genasi_fire_genasi: SubracePayload;
    genasi_water_genasi: SubracePayload;
    gnome_forest_gnome: SubracePayload;
    gnome_rock_gnome: SubracePayload;
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
}

interface SeedSubracesParams {
    races: Races;
    raceTraits: RaceTraits;
    raceAbilityScores: RaceAbilityScores;
}
export async function seedSubraces(params: SeedSubracesParams): Promise<Subraces> {
    const { races, raceTraits, raceAbilityScores } = params;
    return {
        aasimar_protector_aasimar: await db.createSubrace({
            id: "subrace-aasimar-protector-aasimar",
            name: "Protector Aasimar",
            slug: "protector-aasimar",
            description: "Protector aasimar are charged by the powers of good to guard the weak, to seek out evil, and to stand vigilant against the darkness.",
            alabastriaContext: "Protector Aasimar in Skratonia's temples serve as divine guardians, their radiant wings inspiring hope in the faithful. They often work alongside Tharos Raggenthraw's Huntbound Order, bringing celestial light to the darkest corners of Alabastria.",
            playstyle: "Defensive support with healing and radiant damage. Perfect for players who want to protect allies while dealing divine damage.",
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.wis_one.id },
                ]
            },
            traits: {
                connect: [
                    { id: raceTraits.radiant_soul_aasimar_protector_aasimar.id },
                ]
            },
            raceId: races.aasimar.id
        }),
        aasimar_scourge_aasimar: await db.createSubrace({
            id: "subrace-aasimar-scourge-aasimar",
            name: "Scourge Aasimar",
            slug: "scourge-aasimar",
            description: "Scourge aasimar are imbued with a divine energy that blazes intensely within them. It feeds a powerful desire to destroy evil—a desire that is, at its best, unflinching and, at its worst, all-consuming.",
            alabastriaContext: "Scourge Aasimar in Alabastria's frontier regions channel their burning divine fury against the forces of evil. Their intense light and self-sacrificing nature make them formidable allies in the Huntbound Order's most dangerous missions.",
            playstyle: "Offensive support with area damage and self-sacrifice. Great for players who want to deal damage while supporting allies.",
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.con_one.id },
                ]
            },
            traits: {
                connect: [
                    { id: raceTraits.radiant_consumption_aasimar_scourge_aasimar.id },
                ]
            },
            raceId: races.aasimar.id
        }),
        aasimar_fallen_aasimar: await db.createSubrace({
            id: "subrace-aasimar-fallen-aasimar",
            name: "Fallen Aasimar",
            slug: "fallen-aasimar",
            description: "An aasimar who was touched by dark powers, or who chose to dabble in them, is an aasimar whose original celestial nature has been warped by evil.",
            alabastriaContext: "Fallen Aasimar in Alabastria's shadowed corners struggle with their corrupted divine nature. Some seek redemption through the Huntbound Order, while others embrace their dark power to fight evil with evil.",
            playstyle: "Dark support with necrotic damage and intimidation. Ideal for players who want to play morally complex characters with dark powers.",
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.str_one.id },
                ]
            },
            traits: {
                connect: [
                    { id: raceTraits.necrotic_shroud_aasimar_fallen_aasimar.id },
                ]
            },
            raceId: races.aasimar.id
        }),
        dragonborn_chromatic_dragonborn: await db.createSubrace({
            id: "subrace-dragonborn-chromatic-dragonborn",
            name: "Chromatic Dragonborn",
            slug: "chromatic-dragonborn",
            description: "Chromatic dragonborn are descended from evil dragons and often inherit their ancestors' destructive tendencies.",
            alabastriaContext: "Chromatic Dragonborn in Bulsania's military often serve as shock troops, their destructive breath weapons making them feared on the battlefield. Some seek redemption through the Huntbound Order, channeling their destructive power against true evil.",
            playstyle: "Offensive warriors with destructive elemental powers. Great for players who want to deal elemental damage and intimidate enemies.",
            raceId: races.dragonborn.id,
            traits: {
                connect: [
                    { id: raceTraits.chromatic_ancestry_dragonborn.id },
                ]
            }
        }),
        dragonborn_metallic_dragonborn: await db.createSubrace({
            id: "subrace-dragonborn-metallic-dragonborn",
            name: "Metallic Dragonborn",
            slug: "metallic-dragonborn",
            description: "Metallic dragonborn are descended from good dragons and often inherit their ancestors' protective nature.",
            alabastriaContext: "Metallic Dragonborn in Alabastria's temples and noble houses serve as protectors and leaders. Their noble heritage and protective abilities make them natural leaders in the Huntbound Order's quest to protect the innocent.",
            playstyle: "Defensive warriors with protective elemental powers. Perfect for players who want to be noble protectors with draconic abilities.",
            raceId: races.dragonborn.id,
            traits: {
                connect: [
                    { id: raceTraits.metallic_ancestry_dragonborn.id },
                ]
            }
        }),
        dragonborn_gem_dragonborn: await db.createSubrace({
            id: "subrace-dragonborn-gem-dragonborn",
            name: "Gem Dragonborn",
            slug: "gem-dragonborn",
            description: "Gem dragonborn are descended from psionic dragons and often inherit their ancestors' mental abilities.",
            alabastriaContext: "Gem Dragonborn in Kuriguer's magical academies and Skratonia's scholarly institutions study the mysteries of the mind. Their psionic heritage and intellectual abilities make them valuable researchers and strategists in the Huntbound Order.",
            playstyle: "Intellectual warriors with psionic abilities. Ideal for players who want to combine martial prowess with mental powers.",
            raceId: races.dragonborn.id,
            traits: {
                connect: [
                    { id: raceTraits.gem_ancestry_dragonborn.id },
                ]
            }
        }),
        dwarf_hill_dwarf: await db.createSubrace({
            id: "subrace-dwarf-hill-dwarf",
            name: "Hill Dwarf",
            slug: "hill-dwarf",
            description: "Hill dwarves are more social and less reclusive than mountain dwarves, often found in human settlements.",
            alabastriaContext: "Hill Dwarves in Skratonia's cities and Kuriguer's coastal towns serve as merchants and craftsmen. Their social nature and extra durability make them excellent community leaders and healers in the Huntbound Order.",
            playstyle: "Durable support characters with extra hit points. Great for players who want to be tough healers or community leaders.",
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.wis_one.id },
                ]
            },
            traits: {
                connect: [
                    { id: raceTraits.dwarven_toughness_dwarf_hill_dwarf.id },
                ]
            },
            raceId: races.dwarf.id
        }),
        dwarf_mountain_dwarf: await db.createSubrace({
            id: "subrace-dwarf-mountain-dwarf",
            name: "Mountain Dwarf",
            slug: "mountain-dwarf",
            description: "Mountain dwarves are more traditional and reclusive, often found in their mountain strongholds.",
            alabastriaContext: "Mountain Dwarves in Maltman's strongholds and Bulsania's peaks serve as elite warriors and miners. Their martial training and strength make them formidable fighters in the Huntbound Order's most dangerous missions.",
            playstyle: "Heavily armored warriors with martial training. Perfect for players who want to be heavily armored fighters with crafting abilities.",
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.str_two.id },
                ]
            },
            traits: {
                connect: [
                    { id: raceTraits.dwarven_armor_training_dwarf_mountain_dwarf.id },
                ]
            },
            heightRangeOverride: "4'0\" to 4'8\"",
            weightRangeOverride: "130 to 178 lbs",
            raceId: races.dwarf.id
        }),
        dwarf_duergar: await db.createSubrace({
            id: "subrace-dwarf-duergar",
            name: "Duergar",
            slug: "duergar",
            description: "Duergar are dark dwarves who live in the Underdark and have developed psionic abilities.",
            alabastriaContext: "Duergar in Maltman's deepest mines and Alatman's underground workshops serve as specialized craftsmen and spies. Their psionic abilities and Underdark knowledge make them valuable assets in the Huntbound Order's covert operations.",
            playstyle: "Psionic craftsmen with stealth abilities. Great for players who want to be magical craftsmen with unique abilities.",
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.str_one.id },
                ]
            },
            traits: {
                connect: [
                    { id: raceTraits.duergar_magic_dwarf_duergar.id },
                    { id: raceTraits.duergar_resilience_dwarf_duergar.id },
                    { id: raceTraits.sunlight_sensitivity_dwarf_duergar.id },
                ]
            },
            raceId: races.dwarf.id
        }),
        elf_high_elf: await db.createSubrace({
            id: "subrace-elf-high-elf",
            name: "High Elf",
            slug: "high-elf",
            description: "High elves are the most traditional and magical of the elven subraces, often found in magical academies and ancient libraries.",
            alabastriaContext: "High Elves in Kuriguer's magical academies and Skratonia's scholarly institutions serve as wizards and researchers. Their intellectual nature and magical abilities make them valuable strategists and spellcasters in the Huntbound Order.",
            playstyle: "Intellectual spellcasters with martial training. Great for players who want to be magical warriors with extra languages.",
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.int_one.id },
                ]
            },
            traits: {
                connect: [
                    { id: raceTraits.elf_weapon_training_elf_high_elf.id },
                    { id: raceTraits.cantrip_elf_high_elf.id },
                    { id: raceTraits.extra_language_elf_high_elf.id },
                ]
            },
            raceId: races.elf.id
        }),
        elf_wood_elf: await db.createSubrace({
            id: "subrace-elf-wood-elf",
            name: "Wood Elf",
            slug: "wood-elf",
            description: "Wood elves are swift and stealthy, with a deep bond to the forests and natural world.",
            alabastriaContext: "Wood Elves in Kuriguer's magical forests and Skratonia's ancient groves serve as rangers and druids. Their natural stealth and speed make them excellent scouts and trackers in the Huntbound Order's wilderness operations.",
            playstyle: "Swift and stealthy nature guardians. Perfect for players who want to be fast, sneaky characters with nature abilities.",
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.wis_one.id },
                ]
            },
            traits: {
                connect: [
                    { id: raceTraits.elf_weapon_training_elf_wood_elf.id },
                    { id: raceTraits.fleet_of_foot_elf_wood_elf.id },
                    { id: raceTraits.mask_of_the_wild_elf_wood_elf.id },
                ]
            },
            weightRangeOverride: "100 to 140 lbs",
            raceId: races.elf.id
        }),
        elf_dark_elf_drow: await db.createSubrace({
            id: "subrace-elf-dark-elf-drow",
            name: "Dark Elf (Drow)",
            slug: "dark-elf-drow",
            description: "Dark elves, or drow, are elves who live in the Underdark and have adapted to its harsh environment.",
            alabastriaContext: "Drow in Maltman's deepest caverns and Alatman's underground regions serve as scouts and spies. Their Underdark knowledge and magical abilities make them valuable assets in the Huntbound Order's covert operations.",
            playstyle: "Magical scouts with Underdark abilities. Great for players who want to be stealthy spellcasters with unique challenges.",
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.cha_one.id },
                ]
            },
            traits: {
                connect: [
                    { id: raceTraits.superior_darkvision_elf_dark_elf_drow.id },
                    { id: raceTraits.sunlight_sensitivity_elf_dark_elf_drow.id },
                    { id: raceTraits.drow_magic_elf_dark_elf_drow.id },
                    { id: raceTraits.drow_weapon_training_elf_dark_elf_drow.id },
                ]
            },
            heightRangeOverride: "4'5\" to 5'7\"",
            weightRangeOverride: "75 to 105 lbs",
            raceId: races.elf.id
        }),
        elf_sea_elf: await db.createSubrace({
            id: "subrace-elf-sea-elf",
            name: "Sea Elf",
            slug: "sea-elf",
            description: "Sea elves are elves who have adapted to life underwater and have a deep connection to the ocean.",
            alabastriaContext: "Sea Elves in Kuriguer's coastal waters and along Alabastria's shores serve as maritime scouts and protectors. Their aquatic abilities and ocean knowledge make them valuable allies in the Huntbound Order's coastal operations.",
            playstyle: "Aquatic scouts with ocean abilities. Perfect for players who want to be water-based characters with unique movement options.",
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.con_one.id },
                ]
            },
            traits: {
                connect: [
                    { id: raceTraits.sea_elf_training_elf_sea_elf.id },
                    { id: raceTraits.child_of_the_sea_elf_sea_elf.id },
                    { id: raceTraits.friend_of_the_sea_elf_sea_elf.id },
                ]
            },
            raceId: races.elf.id
        }),
        elf_eladrin: await db.createSubrace({
            id: "subrace-elf-eladrin",
            name: "Eladrin",
            slug: "eladrin",
            description: "Eladrin are elves who live in the Feywild and have a deep connection to the seasons and natural cycles.",
            alabastriaContext: "Eladrin in Kuriguer's magical forests and fey-touched areas serve as guardians of the natural world. Their seasonal magic and fey connection make them powerful allies in the Huntbound Order's efforts to protect Alabastria's magical balance.",
            playstyle: "Seasonal magic users with teleportation. Great for players who want to be magical characters with unique seasonal abilities.",
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.int_one.id },
                ]
            },
            traits: {
                connect: [
                    { id: raceTraits.fey_step_elf_eladrin.id },
                    { id: raceTraits.trance_elf_eladrin.id },
                ]
            },
            raceId: races.elf.id
        }),
        elf_shadar_kai: await db.createSubrace({
            id: "subrace-elf-shadar-kai",
            name: "Shadar-kai",
            slug: "shadar-kai",
            description: "Shadar-kai are elves who live in the Shadowfell and have a deep connection to death and shadow magic.",
            alabastriaContext: "Shadar-kai in Kuriguer's shadow-touched woods and Alabastria's darker regions serve as specialists against undead threats. Their shadow magic and death resistance make them valuable assets in the Huntbound Order's most dangerous missions.",
            playstyle: "Shadow magic users with death resistance. Perfect for players who want to be dark magical characters with unique abilities.",
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.con_one.id },
                ]
            },
            traits: {
                connect: [
                    { id: raceTraits.blessing_of_the_raven_queen_elf_shadar_kai.id },
                    { id: raceTraits.necrotic_resistance_elf_shadar_kai.id },
                    { id: raceTraits.trance_elf_shadar_kai.id },
                ]
            },
            raceId: races.elf.id
        }),
        genasi_air_genasi: await db.createSubrace({
            id: "subrace-genasi-air-genasi",
            name: "Air Genasi",
            slug: "air-genasi",
            description: "Air genasi are connected to the element of air and wind, often found in high places and open spaces.",
            alabastriaContext: "Air Genasi in Kuriguer's coastal regions and Bulsania's mountain peaks serve as scouts and messengers. Their wind magic and aerial abilities make them excellent for reconnaissance and communication in the Huntbound Order.",
            playstyle: "Wind magic users with teleportation abilities. Great for players who want to be mobile magical characters with air themes.",
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.dex_one.id },
                ]
            },
            traits: {
                connect: [
                    { id: raceTraits.air_resistance_genasi_air_genasi.id },
                    { id: raceTraits.air_magic_genasi_air_genasi.id },
                    { id: raceTraits.unending_breath_genasi_air_genasi.id },
                    { id: raceTraits.mingle_with_the_wind_genasi_air_genasi.id },
                ]
            },
            raceId: races.genasi.id
        }),
        genasi_earth_genasi: await db.createSubrace({
            id: "subrace-genasi-earth-genasi",
            name: "Earth Genasi",
            slug: "earth-genasi",
            description: "Earth genasi are connected to the element of earth and stone, often found in mountains and underground areas.",
            alabastriaContext: "Earth Genasi in Maltman's mountain strongholds and Alatman's volcanic regions serve as miners and craftsmen. Their earth magic and stone abilities make them valuable for construction and excavation in the Huntbound Order.",
            playstyle: "Earth magic users with terrain abilities. Perfect for players who want to be sturdy magical characters with earth themes.",
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.str_one.id },
                ]
            },
            traits: {
                connect: [
                    { id: raceTraits.earth_resistance_genasi_earth_genasi.id },
                    { id: raceTraits.earth_magic_genasi_earth_genasi.id },
                    { id: raceTraits.earth_walk_genasi_earth_genasi.id },
                ]
            },
            raceId: races.genasi.id
        }),
        genasi_fire_genasi: await db.createSubrace({
            id: "subrace-genasi-fire-genasi",
            name: "Fire Genasi",
            slug: "fire-genasi",
            description: "Fire genasi are connected to the element of fire and heat, often found in volcanic areas and hot climates.",
            alabastriaContext: "Fire Genasi in Alatman's volcanic forges and Kuriguer's magical hotspots serve as smiths and magical researchers. Their fire magic and heat resistance make them excellent for crafting and magical experimentation in the Huntbound Order.",
            playstyle: "Fire magic users with teleportation abilities. Great for players who want to be destructive magical characters with fire themes.",
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.int_one.id },
                ]
            },
            traits: {
                connect: [
                    { id: raceTraits.fire_resistance_genasi_fire_genasi.id },
                    { id: raceTraits.fire_magic_genasi_fire_genasi.id },
                    { id: raceTraits.reach_to_the_blaze_genasi_fire_genasi.id },
                ]
            },
            raceId: races.genasi.id
        }),
        genasi_water_genasi: await db.createSubrace({
            id: "subrace-genasi-water-genasi",
            name: "Water Genasi",
            slug: "water-genasi",
            description: "Water genasi are connected to the element of water and ice, often found near bodies of water and in cold climates.",
            alabastriaContext: "Water Genasi in Kuriguer's coastal waters and along Alabastria's shores serve as maritime specialists and water guardians. Their water magic and aquatic abilities make them excellent for coastal operations and water-based missions in the Huntbound Order.",
            playstyle: "Water magic users with aquatic abilities. Perfect for players who want to be water-based magical characters with unique movement options.",
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.wis_one.id },
                ]
            },
            traits: {
                connect: [
                    { id: raceTraits.water_resistance_genasi_water_genasi.id },
                    { id: raceTraits.water_magic_genasi_water_genasi.id },
                    { id: raceTraits.amphibious_genasi_water_genasi.id },
                    { id: raceTraits.swim_genasi_water_genasi.id },
                ]
            },
            raceId: races.genasi.id
        }),
        gnome_forest_gnome: await db.createSubrace({
            id: "subrace-gnome-forest-gnome",
            name: "Forest Gnome",
            slug: "forest-gnome",
            description: "Forest gnomes are reclusive and shy, living in hidden communities deep in the woods.",
            alabastriaContext: "Forest Gnomes in Alabastria are found in the magical forests of Kuriguer, where they serve as guardians of nature and guides for those who venture into the dangerous woods.",
            playstyle: "Stealthy and nature-focused gnomes who excel at illusion magic and communication with animals.",
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.dex_one.id },
                ]
            },
            traits: {
                connect: [
                    { id: raceTraits.natural_illusionist_gnome_forest_gnome.id },
                    { id: raceTraits.speak_with_small_beasts_gnome_forest_gnome.id },
                ]
            },
            raceId: races.gnome.id
        }),
        gnome_rock_gnome: await db.createSubrace({
            id: "subrace-gnome-rock-gnome",
            name: "Rock Gnome",
            slug: "rock-gnome",
            description: "Rock gnomes are the most common gnomes, known for their engineering skills and love of tinkering.",
            alabastriaContext: "Rock Gnomes in Alabastria are found in the workshops and forges of Kamalatman, where their engineering skills are highly valued. They often work alongside Dwarves and Artificers to create mechanical devices and magical items.",
            playstyle: "Engineering-focused gnomes who excel at creating devices and understanding technology.",
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.con_one.id },
                ]
            },
            traits: {
                connect: [
                    { id: raceTraits.artificers_lore_gnome_rock_gnome.id },
                    { id: raceTraits.tinker_gnome_rock_gnome.id },
                ]
            },
            raceId: races.gnome.id
        }),
        half_elf_aquatic_half_elf: await db.createSubrace({
            id: "subrace-half-elf-aquatic-half-elf",
            name: "Aquatic Half-Elf",
            slug: "aquatic-half-elf",
            description: "Half-elves with aquatic heritage who can breathe underwater and swim with ease.",
            alabastriaContext: "Aquatic Half-Elves in Alabastria are found along the coasts of Kuriguer and in the waterways of Kamalatman, where their aquatic abilities make them excellent for maritime operations.",
            playstyle: "Water-based characters who excel at aquatic adventures and coastal missions.",
            traits: {
                connect: [
                    { id: raceTraits.aquatic_half_elf_aquatic_half_elf.id },
                ]
            },
            raceId: races.half_elf.id
        }),
        half_elf_drow_half_elf: await db.createSubrace({
            id: "subrace-half-elf-drow-half-elf",
            name: "Drow Half-Elf",
            slug: "drow-half-elf",
            description: "Half-elves with drow heritage who have some of the dark elves' abilities.",
            alabastriaContext: "Drow Half-Elves in Alabastria are rare but found in the darker regions of Kuriguer's forests, where they often serve as scouts and guides in dangerous areas.",
            playstyle: "Dark magic users with unique spellcasting abilities and darkvision.",
            traits: {
                connect: [
                    { id: raceTraits.drow_magic_half_elf_drow_half_elf.id },
                ]
            },
            raceId: races.half_elf.id
        }),
        half_elf_high_half_elf: await db.createSubrace({
            id: "subrace-half-elf-high-half-elf",
            name: "High Half-Elf",
            slug: "high-half-elf",
            description: "Half-elves with high elf heritage who have some magical abilities.",
            alabastriaContext: "High Half-Elves in Alabastria are found in the magical academies of Kuriguer and the cities of Skratonia, where their magical heritage makes them excellent scholars and diplomats.",
            playstyle: "Magical characters with weapon proficiency and cantrip abilities.",
            traits: {
                connect: [
                    { id: raceTraits.elf_weapon_training_half_elf_high_half_elf.id },
                    { id: raceTraits.cantrip_half_elf_high_half_elf.id },
                ]
            },
            raceId: races.half_elf.id
        }),
        half_elf_wood_half_elf: await db.createSubrace({
            id: "subrace-half-elf-wood-half-elf",
            name: "Wood Half-Elf",
            slug: "wood-half-elf",
            description: "Half-elves with wood elf heritage who have enhanced speed and stealth abilities.",
            alabastriaContext: "Wood Half-Elves in Alabastria are found in the forests of Kuriguer and the wilderness of Kamalatman, where their natural abilities make them excellent rangers and scouts.",
            playstyle: "Fast and stealthy characters who excel at wilderness survival and ranged combat.",
            traits: {
                connect: [
                    { id: raceTraits.elf_weapon_training_half_elf_wood_half_elf.id },
                    { id: raceTraits.fleet_of_foot_half_elf_wood_half_elf.id },
                    { id: raceTraits.mask_of_the_wild_half_elf_wood_half_elf.id },
                ]
            },
            raceId: races.half_elf.id
        }),
        halfling_lightfoot_halfling: await db.createSubrace({
            id: "subrace-halfling-lightfoot-halfling",
            name: "Lightfoot Halfling",
            slug: "lightfoot-halfling",
            description: "Lightfoot halflings are stealthy and social, able to hide behind larger creatures.",
            alabastriaContext: "Lightfoot Halflings in Alabastria are found in the cities of Skratonia, where their social skills and stealth make them excellent merchants and diplomats.",
            playstyle: "Social and stealthy halflings who excel at hiding and social interaction.",
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.cha_one.id },
                ]
            },
            traits: {
                connect: [
                    { id: raceTraits.naturally_stealthy_halfling_lightfoot_halfling.id },
                ]
            },
            raceId: races.halfling.id
        }),
        halfling_stout_halfling: await db.createSubrace({
            id: "subrace-halfling-stout-halfling",
            name: "Stout Halfling",
            slug: "stout-halfling",
            description: "Stout halflings are hardier and more resistant to poison than other halflings.",
            alabastriaContext: "Stout Halflings in Alabastria are found in the agricultural regions of Skratonia, where their hardiness makes them excellent farmers and workers in harsh conditions.",
            playstyle: "Hardy and resilient halflings who excel at surviving in difficult conditions.",
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.con_one.id },
                ]
            },
            traits: {
                connect: [
                    { id: raceTraits.stout_resilience_halfling_stout_halfling.id },
                ]
            },
            raceId: races.halfling.id
        }),
        halfling_ghostwise_halfling: await db.createSubrace({
            id: "subrace-halfling-ghostwise-halfling",
            name: "Ghostwise Halfling",
            slug: "ghostwise-halfling",
            description: "Ghostwise halflings are reclusive and have telepathic abilities.",
            alabastriaContext: "Ghostwise Halflings in Alabastria are found in the remote regions of Kuriguer's forests, where their telepathic abilities make them excellent scouts and guides.",
            playstyle: "Telepathic halflings who excel at silent communication and wilderness survival.",
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.wis_one.id },
                ]
            },
            traits: {
                connect: [
                    { id: raceTraits.silent_speech_halfling_ghostwise_halfling.id },
                ]
            },
            raceId: races.halfling.id
        }),
        human_variant_human: await db.createSubrace({
            id: "subrace-human-variant-human",
            name: "Variant Human",
            slug: "variant-human",
            description: "Humans with a particular talent or focus, represented by a feat.",
            alabastriaContext: "Variant Humans in Alabastria are found throughout all continents, often as specialists and experts in their chosen fields. Their focused abilities make them valuable in the Huntbound Order and other organizations.",
            playstyle: "Specialized humans with unique abilities and focused expertise.",
            traits: {
                connect: [
                    { id: raceTraits.feat_human_variant_human.id },
                    { id: raceTraits.skill_human_variant_human.id },
                ]
            },
            raceId: races.human.id
        }),
        human_mark_of_finding_human: await db.createSubrace({
            id: "subrace-human-mark-of-finding-human",
            name: "Mark of Finding Human",
            slug: "mark-of-finding-human",
            description: "Humans with the Mark of Finding, a dragonmark that grants tracking and divination abilities.",
            alabastriaContext: "Mark of Finding Humans in Alabastria are found primarily in the Huntbound Order, where their tracking abilities make them invaluable for finding monsters and lost people.",
            playstyle: "Tracking specialists with divination magic and enhanced perception.",
            traits: {
                connect: [
                    { id: raceTraits.hunters_intuition_human_mark_of_finding_human.id },
                    { id: raceTraits.finders_magic_human_mark_of_finding_human.id },
                ]
            },
            raceId: races.human.id
        }),
        human_mark_of_handling_human: await db.createSubrace({
            id: "subrace-human-mark-of-handling-human",
            name: "Mark of Handling Human",
            slug: "mark-of-handling-human",
            description: "Humans with the Mark of Handling, a dragonmark that grants animal handling and beast mastery abilities.",
            alabastriaContext: "Mark of Handling Humans in Alabastria are found in the wilderness regions of Kuriguer and Kamalatman, where their animal handling abilities make them excellent rangers and beast masters.",
            playstyle: "Animal specialists with nature magic and beast communication abilities.",
            traits: {
                connect: [
                    { id: raceTraits.wild_intuition_human_mark_of_handling_human.id },
                    { id: raceTraits.primal_connection_human_mark_of_handling_human.id },
                ]
            },
            raceId: races.human.id
        }),
        human_mark_of_making_human: await db.createSubrace({
            id: "subrace-human-mark-of-making-human",
            name: "Mark of Making Human",
            slug: "mark-of-making-human",
            description: "Humans with the Mark of Making, a dragonmark that grants crafting and creation abilities.",
            alabastriaContext: "Mark of Making Humans in Alabastria are found in the workshops and forges of Kamalatman, where their crafting abilities make them excellent artificers and smiths.",
            playstyle: "Crafting specialists with creation magic and enhanced intelligence.",
            traits: {
                connect: [
                    { id: raceTraits.artisans_intuition_human_mark_of_making_human.id },
                    { id: raceTraits.makers_magic_human_mark_of_making_human.id },
                ]
            },
            raceId: races.human.id
        }),
        human_mark_of_passage_human: await db.createSubrace({
            id: "subrace-human-mark-of-passage-human",
            name: "Mark of Passage Human",
            slug: "mark-of-passage-human",
            description: "Humans with the Mark of Passage, a dragonmark that grants movement and transportation abilities.",
            alabastriaContext: "Mark of Passage Humans in Alabastria are found throughout all continents as couriers and messengers, where their movement abilities make them excellent for transportation and communication.",
            playstyle: "Movement specialists with teleportation magic and enhanced mobility.",
            traits: {
                connect: [
                    { id: raceTraits.intuitive_motion_human_mark_of_passage_human.id },
                    { id: raceTraits.passage_magic_human_mark_of_passage_human.id },
                ]
            },
            raceId: races.human.id
        }),
        human_mark_of_sentinel_human: await db.createSubrace({
            id: "subrace-human-mark-of-sentinel-human",
            name: "Mark of Sentinel Human",
            slug: "mark-of-sentinel-human",
            description: "Humans with the Mark of Sentinel, a dragonmark that grants protection and defense abilities.",
            alabastriaContext: "Mark of Sentinel Humans in Alabastria are found in the Huntbound Order and other protective organizations, where their defensive abilities make them excellent guards and protectors.",
            playstyle: "Protection specialists with defensive magic and enhanced awareness.",
            traits: {
                connect: [
                    { id: raceTraits.vigilant_guardian_human_mark_of_sentinel_human.id },
                    { id: raceTraits.sentinels_magic_human_mark_of_sentinel_human.id },
                ]
            },
            raceId: races.human.id
        }),
        shifter_beasthide_shifter: await db.createSubrace({
            id: "subrace-shifter-beasthide-shifter",
            name: "Beasthide Shifter",
            slug: "beasthide-shifter",
            description: "Beasthide shifters are tough and resilient, with enhanced durability and strength.",
            alabastriaContext: "Beasthide Shifters in Alabastria are found in the harsh regions of Bulsania and Kamalatman, where their toughness makes them excellent survivalists and warriors.",
            playstyle: "Tough and resilient shifters who excel at survival and combat.",
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.con_one.id },
                ]
            },
            traits: {
                connect: [
                    { id: raceTraits.shifting_feature_shifter_beasthide_shifter.id },
                ]
            },
            raceId: races.shifter.id
        }),
        shifter_longtooth_shifter: await db.createSubrace({
            id: "subrace-shifter-longtooth-shifter",
            name: "Longtooth Shifter",
            slug: "longtooth-shifter",
            description: "Longtooth shifters are fierce and aggressive, with enhanced combat abilities.",
            alabastriaContext: "Longtooth Shifters in Alabastria are found in the frontier regions of Kamalatman and Skratonia, where their ferocity makes them excellent warriors and guards.",
            playstyle: "Fierce and aggressive shifters who excel at combat and intimidation.",
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.str_one.id },
                ]
            },
            traits: {
                connect: [
                    { id: raceTraits.shifting_feature_shifter_longtooth_shifter.id },
                ]
            },
            raceId: races.shifter.id
        }),
        shifter_swiftstride_shifter: await db.createSubrace({
            id: "subrace-shifter-swiftstride-shifter",
            name: "Swiftstride Shifter",
            slug: "swiftstride-shifter",
            description: "Swiftstride shifters are fast and agile, with enhanced mobility and reflexes.",
            alabastriaContext: "Swiftstride Shifters in Alabastria are found throughout all continents, often serving as messengers and scouts due to their speed and agility.",
            playstyle: "Fast and agile shifters who excel at mobility and stealth.",
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.dex_one.id },
                ]
            },
            traits: {
                connect: [
                    { id: raceTraits.shifting_feature_shifter_swiftstride_shifter.id },
                ]
            },
            raceId: races.shifter.id
        }),
        shifter_wildhunt_shifter: await db.createSubrace({
            id: "subrace-shifter-wildhunt-shifter",
            name: "Wildhunt Shifter",
            slug: "wildhunt-shifter",
            description: "Wildhunt shifters are wise and perceptive, with enhanced senses and tracking abilities.",
            alabastriaContext: "Wildhunt Shifters in Alabastria are found in the wilderness regions of Kuriguer and Kamalatman, where their enhanced senses make them excellent trackers and guides.",
            playstyle: "Wise and perceptive shifters who excel at tracking and wilderness survival.",
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.wis_one.id },
                ]
            },
            traits: {
                connect: [
                    { id: raceTraits.shifting_feature_shifter_wildhunt_shifter.id },
                ]
            },
            raceId: races.shifter.id
        }),
        tiefling_asmodeus_tiefling: await db.createSubrace({
            id: "subrace-tiefling-asmodeus-tiefling",
            name: "Asmodeus Tiefling",
            slug: "asmodeus-tiefling",
            description: "Tieflings with the bloodline of Asmodeus, the Lord of the Nine Hells.",
            alabastriaContext: "Asmodeus Tieflings in Alabastria are found throughout all continents, often serving as advisors and spellcasters due to their infernal heritage and magical abilities.",
            playstyle: "Magical tieflings with infernal heritage and unique abilities.",
            traits: {
                connect: [
                    { id: raceTraits.infernal_legacy_tiefling_asmodeus_tiefling.id },
                ]
            },
            raceId: races.tiefling.id
        }),
        tiefling_baalzebul_tiefling: await db.createSubrace({
            id: "subrace-tiefling-baalzebul-tiefling",
            name: "Baalzebul Tiefling",
            slug: "baalzebul-tiefling",
            description: "Tieflings with the bloodline of Baalzebul, the Lord of Flies.",
            alabastriaContext: "Baalzebul Tieflings in Alabastria are found throughout all continents, often serving as advisors and spellcasters due to their infernal heritage and magical abilities.",
            playstyle: "Magical tieflings with infernal heritage and unique abilities.",
            traits: {
                connect: [
                    { id: raceTraits.infernal_legacy_tiefling_baalzebul_tiefling.id },
                ]
            },
            raceId: races.tiefling.id
        }),
        tiefling_dispater_tiefling: await db.createSubrace({
            id: "subrace-tiefling-dispater-tiefling",
            name: "Dispater Tiefling",
            slug: "dispater-tiefling",
            description: "Tieflings with the bloodline of Dispater, the Iron Duke.",
            alabastriaContext: "Dispater Tieflings in Alabastria are found throughout all continents, often serving as advisors and spellcasters due to their infernal heritage and magical abilities.",
            playstyle: "Magical tieflings with infernal heritage and unique abilities.",
            traits: {
                connect: [
                    { id: raceTraits.infernal_legacy_tiefling_dispater_tiefling.id },
                ]
            },
            raceId: races.tiefling.id
        }),
        tiefling_fierna_tiefling: await db.createSubrace({
            id: "subrace-tiefling-fierna-tiefling",
            name: "Fierna Tiefling",
            slug: "fierna-tiefling",
            description: "Tieflings with the bloodline of Fierna, the Lady of the Fourth.",
            alabastriaContext: "Fierna Tieflings in Alabastria are found throughout all continents, often serving as advisors and spellcasters due to their infernal heritage and magical abilities.",
            playstyle: "Magical tieflings with infernal heritage and unique abilities.",
            traits: {
                connect: [
                    { id: raceTraits.infernal_legacy_tiefling_fierna_tiefling.id },
                ]
            },
            raceId: races.tiefling.id
        }),
        tiefling_glasya_tiefling: await db.createSubrace({
            id: "subrace-tiefling-glasya-tiefling",
            name: "Glasya Tiefling",
            slug: "glasya-tiefling",
            description: "Tieflings with the bloodline of Glasya, the Daughter of Asmodeus.",
            alabastriaContext: "Glasya Tieflings in Alabastria are found throughout all continents, often serving as advisors and spellcasters due to their infernal heritage and magical abilities.",
            playstyle: "Magical tieflings with infernal heritage and unique abilities.",
            traits: {
                connect: [
                    { id: raceTraits.infernal_legacy_tiefling_glasya_tiefling.id },
                ]
            },
            raceId: races.tiefling.id
        }),
        tiefling_levistus_tiefling: await db.createSubrace({
            id: "subrace-tiefling-levistus-tiefling",
            name: "Levistus Tiefling",
            slug: "levistus-tiefling",
            description: "Tieflings with the bloodline of Levistus, the Lord of the Fifth.",
            alabastriaContext: "Levistus Tieflings in Alabastria are found throughout all continents, often serving as advisors and spellcasters due to their infernal heritage and magical abilities.",
            playstyle: "Magical tieflings with infernal heritage and unique abilities.",
            traits: {
                connect: [
                    { id: raceTraits.infernal_legacy_tiefling_levistus_tiefling.id },
                ]
            },
            raceId: races.tiefling.id
        }),
        tiefling_mammon_tiefling: await db.createSubrace({
            id: "subrace-tiefling-mammon-tiefling",
            name: "Mammon Tiefling",
            slug: "mammon-tiefling",
            description: "Tieflings with the bloodline of Mammon, the Lord of the Third.",
            alabastriaContext: "Mammon Tieflings in Alabastria are found throughout all continents, often serving as advisors and spellcasters due to their infernal heritage and magical abilities.",
            playstyle: "Magical tieflings with infernal heritage and unique abilities.",
            traits: {
                connect: [
                    { id: raceTraits.infernal_legacy_tiefling_mammon_tiefling.id },
                ]
            },
            raceId: races.tiefling.id
        }),
        tiefling_mephistopheles_tiefling: await db.createSubrace({
            id: "subrace-tiefling-mephistopheles-tiefling",
            name: "Mephistopheles Tiefling",
            slug: "mephistopheles-tiefling",
            description: "Tieflings with the bloodline of Mephistopheles, the Lord of the Eighth.",
            alabastriaContext: "Mephistopheles Tieflings in Alabastria are found throughout all continents, often serving as advisors and spellcasters due to their infernal heritage and magical abilities.",
            playstyle: "Magical tieflings with infernal heritage and unique abilities.",
            traits: {
                connect: [
                    { id: raceTraits.infernal_legacy_tiefling_mephistopheles_tiefling.id },
                ]
            },
            raceId: races.tiefling.id
        }),
        tiefling_zariel_tiefling: await db.createSubrace({
            id: "subrace-tiefling-zariel-tiefling",
            name: "Zariel Tiefling",
            slug: "zariel-tiefling",
            description: "Tieflings with the bloodline of Zariel, the Fallen Angel.",
            alabastriaContext: "Zariel Tieflings in Alabastria are found throughout all continents, often serving as advisors and spellcasters due to their infernal heritage and magical abilities.",
            playstyle: "Magical tieflings with infernal heritage and unique abilities.",
            traits: {
                connect: [
                    { id: raceTraits.infernal_legacy_tiefling_zariel_tiefling.id },
                ]
            },
            raceId: races.tiefling.id
        }),
        yuan_ti_pureblood_yuan_ti: await db.createSubrace({
            id: "subrace-yuan-ti-pureblood-yuan-ti",
            name: "Pureblood Yuan-ti",
            slug: "pureblood-yuan-ti",
            description: "Yuan-ti with the most human-like appearance, often able to pass as human.",
            alabastriaContext: "Pureblood Yuan-ti in Alabastria are found throughout all continents, often serving as spies and infiltrators due to their human-like appearance and magical abilities.",
            playstyle: "Human-like yuan-ti with magical abilities and infiltration skills.",
            traits: {
                connect: [
                    { id: raceTraits.innate_spellcasting_yuan_ti_pureblood_yuan_ti.id },
                ]
            },
            raceId: races.yuan_ti.id
        }),
    }
}