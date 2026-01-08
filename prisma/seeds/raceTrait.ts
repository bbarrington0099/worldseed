/* import { Prisma } from "@prismagen/client";
import * as db from "@lib/db-seed";

type RaceTraitPayload = Prisma.RaceTraitGetPayload<{}>;
export interface RaceTraits {
    flight_aarakocra: RaceTraitPayload;
    talons_aarakocra: RaceTraitPayload;
    darkvision_aasimar: RaceTraitPayload;
    celestial_resistance_aasimar: RaceTraitPayload;
    healing_hands_aasimar: RaceTraitPayload;
    radiant_soul_aasimar_protector_aasimar: RaceTraitPayload;
    radiant_consumption_aasimar_scourge_aasimar: RaceTraitPayload;
    necrotic_shroud_aasimar_fallen_aasimar: RaceTraitPayload;
    constructed_resilience_autognome: RaceTraitPayload;
    mechanical_nature_autognome: RaceTraitPayload;
    sentrys_rest_autognome: RaceTraitPayload;
    true_life_autognome: RaceTraitPayload;
    darkvision_bugbear: RaceTraitPayload;
    long_limbed_bugbear: RaceTraitPayload;
    powerful_build_bugbear: RaceTraitPayload;
    sneaky_bugbear: RaceTraitPayload;
    surprise_attack_bugbear: RaceTraitPayload;
    charge_centaur: RaceTraitPayload;
    hooves_centaur: RaceTraitPayload;
    equine_build_centaur: RaceTraitPayload;
    survivor_centaur: RaceTraitPayload;
    shapechanger_changeling: RaceTraitPayload;
    changeling_instincts_changeling: RaceTraitPayload;
    divergent_persona_changeling: RaceTraitPayload;
    darkvision_dhampir: RaceTraitPayload;
    spider_climb_dhampir: RaceTraitPayload;
    vampiric_bite_dhampir: RaceTraitPayload;
    deathless_nature_dhampir: RaceTraitPayload;
    draconic_ancestry_dragonborn: RaceTraitPayload;
    breath_weapon_dragonborn: RaceTraitPayload;
    damage_resistance_dragonborn: RaceTraitPayload;
    darkvision_dwarf: RaceTraitPayload;
    dwarven_resilience_dwarf: RaceTraitPayload;
    stonecunning_dwarf: RaceTraitPayload;
    dwarven_toughness_dwarf_hill_dwarf: RaceTraitPayload;
    dwarven_armor_training_dwarf_mountain_dwarf: RaceTraitPayload;
    duergar_magic_dwarf_duergar: RaceTraitPayload;
    duergar_resilience_dwarf_duergar: RaceTraitPayload;
    sunlight_sensitivity_dwarf_duergar: RaceTraitPayload;
    darkvision_elf: RaceTraitPayload;
    keen_senses_elf: RaceTraitPayload;
    fey_ancestry_elf: RaceTraitPayload;
    trance_elf: RaceTraitPayload;
    elf_weapon_training_elf_high_elf: RaceTraitPayload;
    cantrip_elf_high_elf: RaceTraitPayload;
    extra_language_elf_high_elf: RaceTraitPayload;
    elf_weapon_training_elf_wood_elf: RaceTraitPayload;
    fleet_of_foot_elf_wood_elf: RaceTraitPayload;
    mask_of_the_wild_elf_wood_elf: RaceTraitPayload;
    superior_darkvision_elf_dark_elf_drow: RaceTraitPayload;
    sunlight_sensitivity_elf_dark_elf_drow: RaceTraitPayload;
    drow_magic_elf_dark_elf_drow: RaceTraitPayload;
    drow_weapon_training_elf_dark_elf_drow: RaceTraitPayload;
    sea_elf_training_elf_sea_elf: RaceTraitPayload;
    child_of_the_sea_elf_sea_elf: RaceTraitPayload;
    friend_of_the_sea_elf_sea_elf: RaceTraitPayload;
    fey_step_elf_eladrin: RaceTraitPayload;
    trance_elf_eladrin: RaceTraitPayload;
    blessing_of_the_raven_queen_elf_shadar_kai: RaceTraitPayload;
    necrotic_resistance_elf_shadar_kai: RaceTraitPayload;
    trance_elf_shadar_kai: RaceTraitPayload;
    fairy_magic_fairy: RaceTraitPayload;
    flight_fairy: RaceTraitPayload;
    fey_passage_fairy: RaceTraitPayload;
    firbolg_magic_firbolg: RaceTraitPayload;
    hidden_step_firbolg: RaceTraitPayload;
    powerful_build_firbolg: RaceTraitPayload;
    speech_of_beast_and_leaf_firbolg: RaceTraitPayload;
    elemental_resistance_genasi: RaceTraitPayload;
    elemental_magic_genasi: RaceTraitPayload;
    air_resistance_genasi_air_genasi: RaceTraitPayload;
    air_magic_genasi_air_genasi: RaceTraitPayload;
    unending_breath_genasi_air_genasi: RaceTraitPayload;
    mingle_with_the_wind_genasi_air_genasi: RaceTraitPayload;
    earth_resistance_genasi_earth_genasi: RaceTraitPayload;
    earth_magic_genasi_earth_genasi: RaceTraitPayload;
    earth_walk_genasi_earth_genasi: RaceTraitPayload;
    fire_resistance_genasi_fire_genasi: RaceTraitPayload;
    fire_magic_genasi_fire_genasi: RaceTraitPayload;
    reach_to_the_blaze_genasi_fire_genasi: RaceTraitPayload;
    water_resistance_genasi_water_genasi: RaceTraitPayload;
    water_magic_genasi_water_genasi: RaceTraitPayload;
    amphibious_genasi_water_genasi: RaceTraitPayload;
    swim_genasi_water_genasi: RaceTraitPayload;
    darkvision_gnome: RaceTraitPayload;
    gnome_cunning_gnome: RaceTraitPayload;
    natural_illusionist_gnome_forest_gnome: RaceTraitPayload;
    speak_with_small_beasts_gnome_forest_gnome: RaceTraitPayload;
    artificers_lore_gnome_rock_gnome: RaceTraitPayload;
    tinker_gnome_rock_gnome: RaceTraitPayload;
    firearms_mastery_giff: RaceTraitPayload;
    hippo_build_giff: RaceTraitPayload;
    natural_armor_giff: RaceTraitPayload;
    darkvision_goblin: RaceTraitPayload;
    fury_of_the_small_goblin: RaceTraitPayload;
    nimble_escape_goblin: RaceTraitPayload;
    natural_athlete_goliath: RaceTraitPayload;
    stones_endurance_goliath: RaceTraitPayload;
    powerful_build_goliath: RaceTraitPayload;
    mountain_born_goliath: RaceTraitPayload;
    dexterous_feet_hadozee: RaceTraitPayload;
    glide_hadozee: RaceTraitPayload;
    hadozee_dodge_hadozee: RaceTraitPayload;
    darkvision_half_elf: RaceTraitPayload;
    fey_ancestry_half_elf: RaceTraitPayload;
    skill_versatility_half_elf: RaceTraitPayload;
    aquatic_half_elf_aquatic_half_elf: RaceTraitPayload;
    drow_magic_half_elf_drow_half_elf: RaceTraitPayload;
    elf_weapon_training_half_elf_high_half_elf: RaceTraitPayload;
    cantrip_half_elf_high_half_elf: RaceTraitPayload;
    elf_weapon_training_half_elf_wood_half_elf: RaceTraitPayload;
    fleet_of_foot_half_elf_wood_half_elf: RaceTraitPayload;
    mask_of_the_wild_half_elf_wood_half_elf: RaceTraitPayload;
    darkvision_half_orc: RaceTraitPayload;
    relentless_endurance_half_orc: RaceTraitPayload;
    savage_attacks_half_orc: RaceTraitPayload;
    lucky_halfling: RaceTraitPayload;
    brave_halfling: RaceTraitPayload;
    halfling_nimbleness_halfling: RaceTraitPayload;
    naturally_stealthy_halfling_lightfoot_halfling: RaceTraitPayload;
    stout_resilience_halfling_stout_halfling: RaceTraitPayload;
    silent_speech_halfling_ghostwise_halfling: RaceTraitPayload;
    hare_trigger_harengon: RaceTraitPayload;
    leporine_senses_harengon: RaceTraitPayload;
    lucky_footwork_harengon: RaceTraitPayload;
    rabbit_hop_harengon: RaceTraitPayload;
    darkvision_hexblood: RaceTraitPayload;
    hex_magic_hexblood: RaceTraitPayload;
    eerie_token_hexblood: RaceTraitPayload;
    darkvision_hobgoblin: RaceTraitPayload;
    martial_training_hobgoblin: RaceTraitPayload;
    saving_face_hobgoblin: RaceTraitPayload;
    extra_language_human: RaceTraitPayload;
    feat_human_variant_human: RaceTraitPayload;
    skill_human_variant_human: RaceTraitPayload;
    hunters_intuition_human_mark_of_finding_human: RaceTraitPayload;
    finders_magic_human_mark_of_finding_human: RaceTraitPayload;
    wild_intuition_human_mark_of_handling_human: RaceTraitPayload;
    primal_connection_human_mark_of_handling_human: RaceTraitPayload;
    artisans_intuition_human_mark_of_making_human: RaceTraitPayload;
    makers_magic_human_mark_of_making_human: RaceTraitPayload;
    intuitive_motion_human_mark_of_passage_human: RaceTraitPayload;
    passage_magic_human_mark_of_passage_human: RaceTraitPayload;
    vigilant_guardian_human_mark_of_sentinel_human: RaceTraitPayload;
    sentinels_magic_human_mark_of_sentinel_human: RaceTraitPayload;
    dual_mind_kalashtar: RaceTraitPayload;
    mental_discipline_kalashtar: RaceTraitPayload;
    mind_link_kalashtar: RaceTraitPayload;
    severed_from_dreams_kalashtar: RaceTraitPayload;
    fearless_kender: RaceTraitPayload;
    kender_curiosity_kender: RaceTraitPayload;
    taunt_kender: RaceTraitPayload;
    expert_forgery_kenku: RaceTraitPayload;
    kenku_training_kenku: RaceTraitPayload;
    mimicry_kenku: RaceTraitPayload;
    darkvision_kobold: RaceTraitPayload;
    grovel_cower_and_beg_kobold: RaceTraitPayload;
    pack_tactics_kobold: RaceTraitPayload;
    darkvision_leonin: RaceTraitPayload;
    claws_leonin: RaceTraitPayload;
    hunters_instincts_leonin: RaceTraitPayload;
    daunting_roar_leonin: RaceTraitPayload;
    bite_lizardfolk: RaceTraitPayload;
    cunning_artisan_lizardfolk: RaceTraitPayload;
    hold_breath_lizardfolk: RaceTraitPayload;
    natural_armor_lizardfolk: RaceTraitPayload;
    hungry_jaws_lizardfolk: RaceTraitPayload;
    natural_armor_loxodon: RaceTraitPayload;
    powerful_build_loxodon: RaceTraitPayload;
    trunk_loxodon: RaceTraitPayload;
    keen_smell_loxodon: RaceTraitPayload;
    horns_minotaur: RaceTraitPayload;
    goring_rush_minotaur: RaceTraitPayload;
    hammering_horns_minotaur: RaceTraitPayload;
    labyrinthine_recall_minotaur: RaceTraitPayload;
    darkvision_orc: RaceTraitPayload;
    aggressive_orc: RaceTraitPayload;
    powerful_build_orc: RaceTraitPayload;
    darkvision_owlin: RaceTraitPayload;
    flight_owlin: RaceTraitPayload;
    keen_senses_owlin: RaceTraitPayload;
    silent_feathers_owlin: RaceTraitPayload;
    amorphous_plasmoid: RaceTraitPayload;
    darkvision_plasmoid: RaceTraitPayload;
    hold_breath_plasmoid: RaceTraitPayload;
    natural_reach_plasmoid: RaceTraitPayload;
    shape_self_plasmoid: RaceTraitPayload;
    ancestral_legacy_reborn: RaceTraitPayload;
    deathless_nature_reborn: RaceTraitPayload;
    knowledge_from_a_past_life_reborn: RaceTraitPayload;
    souls_gift_reborn: RaceTraitPayload;
    fey_satyr: RaceTraitPayload;
    ram_satyr: RaceTraitPayload;
    magic_resistance_satyr: RaceTraitPayload;
    mirthful_leaps_satyr: RaceTraitPayload;
    reveler_satyr: RaceTraitPayload;
    darkvision_shifter: RaceTraitPayload;
    shifting_shifter: RaceTraitPayload;
    shifting_feature_shifter_beasthide_shifter: RaceTraitPayload;
    shifting_feature_shifter_longtooth_shifter: RaceTraitPayload;
    shifting_feature_shifter_swiftstride_shifter: RaceTraitPayload;
    shifting_feature_shifter_wildhunt_shifter: RaceTraitPayload;
    animal_enhancement_simic_hybrid: RaceTraitPayload;
    darkvision_simic_hybrid: RaceTraitPayload;
    darkvision_tabaxi: RaceTraitPayload;
    feline_agility_tabaxi: RaceTraitPayload;
    cats_claws_tabaxi: RaceTraitPayload;
    cats_talent_tabaxi: RaceTraitPayload;
    chameleon_carapace_thri_kreen: RaceTraitPayload;
    darkvision_thri_kreen: RaceTraitPayload;
    extra_arms_thri_kreen: RaceTraitPayload;
    sleepless_thri_kreen: RaceTraitPayload;
    thri_kreen_weapon_training_thri_kreen: RaceTraitPayload;
    darkvision_tiefling: RaceTraitPayload;
    hellish_resistance_tiefling: RaceTraitPayload;
    infernal_legacy_tiefling: RaceTraitPayload;
    infernal_legacy_tiefling_asmodeus_tiefling: RaceTraitPayload;
    infernal_legacy_tiefling_baalzebul_tiefling: RaceTraitPayload;
    infernal_legacy_tiefling_dispater_tiefling: RaceTraitPayload;
    infernal_legacy_tiefling_fierna_tiefling: RaceTraitPayload;
    infernal_legacy_tiefling_glasya_tiefling: RaceTraitPayload;
    infernal_legacy_tiefling_levistus_tiefling: RaceTraitPayload;
    infernal_legacy_tiefling_mammon_tiefling: RaceTraitPayload;
    infernal_legacy_tiefling_mephistopheles_tiefling: RaceTraitPayload;
    infernal_legacy_tiefling_zariel_tiefling: RaceTraitPayload;
    claws_tortle: RaceTraitPayload;
    hold_breath_tortle: RaceTraitPayload;
    natural_armor_tortle: RaceTraitPayload;
    shell_defense_tortle: RaceTraitPayload;
    survival_instinct_tortle: RaceTraitPayload;
    amphibious_triton: RaceTraitPayload;
    control_air_and_water_triton: RaceTraitPayload;
    emissary_of_the_sea_triton: RaceTraitPayload;
    guardians_of_the_depths_triton: RaceTraitPayload;
    swimming_speed_triton: RaceTraitPayload;
    darkvision_vedalken: RaceTraitPayload;
    vedalken_dispassion_vedalken: RaceTraitPayload;
    partially_amphibious_vedalken: RaceTraitPayload;
    tireless_precision_vedalken: RaceTraitPayload;
    constructed_resilience_warforged: RaceTraitPayload;
    sentrys_rest_warforged: RaceTraitPayload;
    integrated_protection_warforged: RaceTraitPayload;
    specialized_design_warforged: RaceTraitPayload;
    darkvision_yuan_ti: RaceTraitPayload;
    magic_resistance_yuan_ti: RaceTraitPayload;
    poison_immunity_yuan_ti: RaceTraitPayload;
    serpentine_magic_yuan_ti: RaceTraitPayload;
    innate_spellcasting_yuan_ti_pureblood_yuan_ti: RaceTraitPayload;
    chromatic_ancestry_dragonborn: RaceTraitPayload;
    metallic_ancestry_dragonborn: RaceTraitPayload;
    gem_ancestry_dragonborn: RaceTraitPayload;
    gith_psionics: RaceTraitPayload;
    mental_discipline: RaceTraitPayload;
    planar_knowledge: RaceTraitPayload;
    darkvision_gnome_svirfneblin: RaceTraitPayload;
    stone_camouflage_gnome_svirfneblin: RaceTraitPayload;
    decadent_mastery_githyanki: RaceTraitPayload;
    martial_prodigy_githyanki: RaceTraitPayload;
    githyanki_psionics: RaceTraitPayload;
    mental_discipline_githzerai: RaceTraitPayload;
    githzerai_psionics: RaceTraitPayload;
    incisive_sense_elf_pallid_elf: RaceTraitPayload;
    blessing_of_the_moon_weaver_elf_pallid_elf: RaceTraitPayload;
}

export async function seedRaceTraits(): Promise<RaceTraits> {
    return {
        incisive_sense_elf_pallid_elf: await db.createRaceTrait({
            id: "race-trait-incisive-sense-elf-pallid-elf",
            name: "Incisive Sense",
            description: "You have proficiency in the Insight skill.",
        }),
        blessing_of_the_moon_weaver_elf_pallid_elf: await db.createRaceTrait({
            id: "race-trait-blessing-of-the-moon-weaver-elf-pallid-elf",
            name: "Blessing of the Moon Weaver",
            description: "You can cast the Faerie Fire spell once with this trait and regain the ability to do so when you finish a long rest. Wisdom is your spellcasting ability for this spell.",
        }),
        decadent_mastery_githyanki: await db.createRaceTrait({
            id: "race-trait-decadent-mastery-githyanki",
            name: "Decadent Mastery",
            description: "You gain proficiency in two skills or one skill and one tool of your choice.",
        }),
        martial_prodigy_githyanki: await db.createRaceTrait({
            id: "race-trait-martial-prodigy-githyanki",
            name: "Martial Prodigy",
            description: "You are proficient with light and medium armor and with the shortsword, longsword, and greatsword.",
        }),
        githyanki_psionics: await db.createRaceTrait({
            id: "race-trait-githyanki-psionics",
            name: "Githyanki Psionics",
            description: "You can cast the Mage Hand cantrip. When you reach 3rd level, you can cast the Jump spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the Misty Step spell once with this trait and regain the ability to do so when you finish a long rest. Intelligence is your spellcasting ability for these spells.",
        }),
        mental_discipline_githzerai: await db.createRaceTrait({
            id: "race-trait-mental-discipline-githzerai",
            name: "Mental Discipline",
            description: "You have advantage on saving throws against being charmed and frightened.",
        }),
        githzerai_psionics: await db.createRaceTrait({
            id: "race-trait-githzerai-psionics",
            name: "Githzerai Psionics",
            description: "You can cast the Mage Hand cantrip. When you reach 3rd level, you can cast the Shield spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the Detect Thoughts spell once with this trait and regain the ability to do so when you finish a long rest. Intelligence is your spellcasting ability for these spells.",
        }),
        darkvision_gnome_svirfneblin: await db.createRaceTrait({
            id: "race-trait-darkvision-gnome-svirfneblin",
            name: "Darkvision",
            description: "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        }),
        stone_camouflage_gnome_svirfneblin: await db.createRaceTrait({
            id: "race-trait-stone-camouflage-gnome-svirfneblin",
            name: "Stone Camouflage",
            description: "You have advantage on Dexterity (Stealth) checks made to hide in rocky terrain.",
        }),
        flight_aarakocra: await db.createRaceTrait({
            id: "race-trait-flight-aarakocra",
            name: "Flight",
            description: "You have a flying speed of 50 feet. To use this speed, you can't be wearing medium or heavy armor.",
        }),
        talons_aarakocra: await db.createRaceTrait({
            id: "race-trait-talons-aarakocra",
            name: "Talons",
            description: "You are proficient with your unarmed strikes, which deal 1d4 slashing damage on a hit.",
        }),
        darkvision_aasimar: await db.createRaceTrait({
            id: "race-trait-darkvision-aasimar",
            name: "Darkvision",
            description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        }),
        celestial_resistance_aasimar: await db.createRaceTrait({
            id: "race-trait-celestial-resistance-aasimar",
            name: "Celestial Resistance",
            description: "You have resistance to necrotic damage and radiant damage.",
        }),
        healing_hands_aasimar: await db.createRaceTrait({
            id: "race-trait-healing-hands-aasimar",
            name: "Healing Hands",
            description: "As an action, you can touch a creature and cause it to regain a number of hit points equal to your level. Once you use this trait, you can't use it again until you finish a long rest.",
        }),
        radiant_soul_aasimar_protector_aasimar: await db.createRaceTrait({
            id: "race-trait-radiant-soul-aasimar_protector_aasimar",
            name: "Radiant Soul",
            description: "As an action, you can unleash the divine energy within yourself, causing your eyes to glimmer and two luminous, incorporeal wings to sprout from your back. Your transformation lasts for 1 minute or until you end it as a bonus action. During it, you have a flying speed of 30 feet, and once on each of your turns, you can deal extra radiant damage to one target when you deal damage to it with an attack or a spell. The extra radiant damage equals your level. Once you use this trait, you can't use it again until you finish a long rest.",
        }),
        radiant_consumption_aasimar_scourge_aasimar: await db.createRaceTrait({
            id: "race-trait-radiant-consumption-aasimar_scourge_aasimar",
            name: "Radiant Consumption",
            description: "As an action, you can unleash the divine energy within yourself, causing a searing light to radiate from you, pour out of your eyes and mouth, and threaten to char you. Your transformation lasts for 1 minute or until you end it as a bonus action. During it, you shed bright light in a 10-foot radius and dim light for an additional 10 feet, and at the end of each of your turns, you and each creature within 10 feet of you take radiant damage equal to half your level (rounded up). In addition, once on each of your turns, you can deal extra radiant damage to one target when you deal damage to it with an attack or a spell. The extra radiant damage equals your level. Once you use this trait, you can't use it again until you finish a long rest.",
        }),
        necrotic_shroud_aasimar_fallen_aasimar: await db.createRaceTrait({
            id: "race-trait-necrotic-shroud-aasimar_fallen_aasimar",
            name: "Necrotic Shroud",
            description: "As an action, you can unleash the divine energy within yourself, causing your eyes to turn black and two skeletal, ghostly, flightless wings to sprout from your back. Your transformation lasts for 1 minute or until you end it as a bonus action. During it, you have a flying speed of 30 feet, and once on each of your turns, you can deal extra necrotic damage to one target when you deal damage to it with an attack or a spell. The extra necrotic damage equals your level. Once you use this trait, you can't use it again until you finish a long rest.",
        }),
        constructed_resilience_autognome: await db.createRaceTrait({
            id: "race-trait-constructed-resilience-autognome",
            name: "Constructed Resilience",
            description: "You were created to have remarkable fortitude, represented by the following benefits: You have advantage on saving throws against being poisoned, and you have resistance to poison damage. You don't need to eat, drink, or breathe. You are immune to disease. You don't need to sleep, and magic can't put you to sleep.",
        }),
        mechanical_nature_autognome: await db.createRaceTrait({
            id: "race-trait-mechanical-nature-autognome",
            name: "Mechanical Nature",
            description: "Your creature type is construct, rather than humanoid. Spells and other effects that target humanoids don't affect you.",
        }),
        sentrys_rest_autognome: await db.createRaceTrait({
            id: "race-trait-sentrys-rest-autognome",
            name: "Sentry's Rest",
            description: "When you take a long rest, you must spend at least 6 hours in an inactive, motionless state, rather than sleeping. In this state, you appear inert, but it doesn't render you unconscious, and you can see and hear as normal.",
        }),
        true_life_autognome: await db.createRaceTrait({
            id: "race-trait-true-life-autognome",
            name: "True Life",
            description: "You are a living creature. You can be affected by healing magic, and you can be targeted by spells that target humanoids. You can be raised from the dead.",
        }),
        darkvision_bugbear: await db.createRaceTrait({
            id: "race-trait-darkvision-bugbear",
            name: "Darkvision",
            description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        }),
        gith_psionics: await db.createRaceTrait({
            id: "race-trait-gith-psionics",
            name: "Gith Psionics",
            description: "You can cast the Mage Hand cantrip. When you reach 3rd level, you can cast the Jump spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the Misty Step spell once with this trait and regain the ability to do so when you finish a long rest. Intelligence is your spellcasting ability for these spells.",
        }),
        mental_discipline: await db.createRaceTrait({
            id: "race-trait-mental-discipline",
            name: "Mental Discipline",
            description: "You have advantage on saving throws against being charmed and frightened.",
        }),
        planar_knowledge: await db.createRaceTrait({
            id: "race-trait-planar-knowledge",
            name: "Planar Knowledge",
            description: "You have proficiency in the Arcana skill.",
        }),
        long_limbed_bugbear: await db.createRaceTrait({
            id: "race-trait-long-limbed-bugbear",
            name: "Long-Limbed",
            description: "When you make a melee attack on your turn, your reach for it is 5 feet greater than normal.",
        }),
        powerful_build_bugbear: await db.createRaceTrait({
            id: "race-trait-powerful-build-bugbear",
            name: "Powerful Build",
            description: "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.",
        }),
        sneaky_bugbear: await db.createRaceTrait({
            id: "race-trait-sneaky-bugbear",
            name: "Sneaky",
            description: "You are proficient in the Stealth skill.",
        }),
        surprise_attack_bugbear: await db.createRaceTrait({
            id: "race-trait-surprise-attack-bugbear",
            name: "Surprise Attack",
            description: "If you surprise a creature and hit it with an attack on your first turn in combat, the target takes an extra 2d6 damage from the attack.",
        }),
        charge_centaur: await db.createRaceTrait({
            id: "race-trait-charge-centaur",
            name: "Charge",
            description: "If you move at least 30 feet straight toward a target and then hit it with a melee weapon attack on the same turn, you can immediately follow that attack with a bonus action, making one attack against the target with your hooves.",
        }),
        hooves_centaur: await db.createRaceTrait({
            id: "race-trait-hooves-centaur",
            name: "Hooves",
            description: "Your hooves are natural melee weapons, which you can use to make unarmed strikes. If you hit with them, you deal bludgeoning damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.",
        }),
        equine_build_centaur: await db.createRaceTrait({
            id: "race-trait-equine-build-centaur",
            name: "Equine Build",
            description: "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift. In addition, any climb that requires hands and feet is especially difficult for you because of your equine legs. When you make such a climb, each foot of movement costs you 4 extra feet, instead of the normal 1 extra foot.",
        }),
        survivor_centaur: await db.createRaceTrait({
            id: "race-trait-survivor-centaur",
            name: "Survivor",
            description: "You have proficiency in one of the following skills of your choice: Animal Handling, Medicine, Nature, or Survival.",
        }),
        shapechanger_changeling: await db.createRaceTrait({
            id: "race-trait-shapechanger-changeling",
            name: "Shapechanger",
            description: "As an action, you can change your appearance and your voice. You determine the specifics of the changes, including your coloration, hair length, and sex. You can also adjust your height and weight, but not so much that your size changes. You can make yourself appear as a member of another race, though none of your game statistics change. You can't duplicate the appearance of a creature you've never seen, and you must adopt a form that has the same basic arrangement of limbs that you have. Your clothing and equipment aren't changed by this trait. You stay in the new form until you use an action to revert to your true form or until you die.",
        }),
        changeling_instincts_changeling: await db.createRaceTrait({
            id: "race-trait-changeling-instincts-changeling",
            name: "Changeling Instincts",
            description: "You gain proficiency with two of the following skills of your choice: Deception, Insight, Intimidation, and Persuasion.",
        }),
        divergent_persona_changeling: await db.createRaceTrait({
            id: "race-trait-divergent-persona-changeling",
            name: "Divergent Persona",
            description: "You gain proficiency with one tool of your choice. You also choose two personality traits, one ideal, one bond, and one flaw. While you are in the form of this persona, the chosen personality traits, ideal, bond, and flaw replace those of your background.",
        }),
        darkvision_dhampir: await db.createRaceTrait({
            id: "race-trait-darkvision-dhampir",
            name: "Darkvision",
            description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        }),
        spider_climb_dhampir: await db.createRaceTrait({
            id: "race-trait-spider-climb-dhampir",
            name: "Spider Climb",
            description: "You have a climbing speed equal to your walking speed. In addition, you can move up, down, and across vertical surfaces and upside down along ceilings, while leaving your hands free.",
        }),
        vampiric_bite_dhampir: await db.createRaceTrait({
            id: "race-trait-vampiric-bite-dhampir",
            name: "Vampiric Bite",
            description: "Your fanged bite is a natural weapon, which counts as a simple melee weapon with which you are proficient. You add your Constitution modifier, instead of your Strength modifier, to the attack and damage rolls when you attack with this bite. It deals 1d4 piercing damage on a hit. While you are missing half or more of your hit points, you have advantage on attack rolls you make with this bite. When you attack with this bite and hit a creature that doesn't have all its hit points, you can empower yourself in one of the following ways: You regain hit points equal to the damage dealt by the bite. You gain a bonus to the next ability check or attack roll you make; the bonus equals the damage dealt by the bite (minimum of +1). Either choice requires no action. You can empower yourself with this bite a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
        }),
        deathless_nature_dhampir: await db.createRaceTrait({
            id: "race-trait-deathless-nature-dhampir",
            name: "Deathless Nature",
            description: "You don't need to breathe.",
        }),
        draconic_ancestry_dragonborn: await db.createRaceTrait({
            id: "race-trait-draconic-ancestry-dragonborn",
            name: "Draconic Ancestry",
            description: "You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.",
        }),
        breath_weapon_dragonborn: await db.createRaceTrait({
            id: "race-trait-breath-weapon-dragonborn",
            name: "Breath Weapon",
            description: "You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can't use it again until you complete a short or long rest.",
        }),
        damage_resistance_dragonborn: await db.createRaceTrait({
            id: "race-trait-damage-resistance-dragonborn",
            name: "Damage Resistance",
            description: "You have resistance to the damage type associated with your draconic ancestry.",
        }),
        darkvision_dwarf: await db.createRaceTrait({
            id: "race-trait-darkvision-dwarf",
            name: "Darkvision",
            description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        }),
        dwarven_resilience_dwarf: await db.createRaceTrait({
            id: "race-trait-dwarven-resilience-dwarf",
            name: "Dwarven Resilience",
            description: "You have advantage on saving throws against poison, and you have resistance against poison damage.",
        }),
        stonecunning_dwarf: await db.createRaceTrait({
            id: "race-trait-stonecunning-dwarf",
            name: "Stonecunning",
            description: "Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.",
        }),
        dwarven_toughness_dwarf_hill_dwarf: await db.createRaceTrait({
            id: "race-trait-dwarven-toughness-dwarf_hill_dwarf",
            name: "Dwarven Toughness",
            description: "Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.",
        }),
        dwarven_armor_training_dwarf_mountain_dwarf: await db.createRaceTrait({
            id: "race-trait-dwarven-armor-training-dwarf_mountain_dwarf",
            name: "Dwarven Armor Training",
            description: "You have proficiency with light and medium armor.",
        }),
        duergar_magic_dwarf_duergar: await db.createRaceTrait({
            id: "race-trait-duergar-magic-dwarf_duergar",
            name: "Duergar Magic",
            description: "You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the enlarge/reduce spell on yourself once with this trait, without requiring a material component. When you reach 5th level, you can cast the invisibility spell on yourself once with this trait, without requiring a material component. You regain the ability to cast these spells with this trait when you finish a long rest. Intelligence is your spellcasting ability for these spells.",
        }),
        duergar_resilience_dwarf_duergar: await db.createRaceTrait({
            id: "race-trait-duergar-resilience-dwarf_duergar",
            name: "Duergar Resilience",
            description: "You have advantage on saving throws against illusions and against being charmed or paralyzed.",
        }),
        sunlight_sensitivity_dwarf_duergar: await db.createRaceTrait({
            id: "race-trait-sunlight-sensitivity-dwarf_duergar",
            name: "Sunlight Sensitivity",
            description: "You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight.",
        }),
        darkvision_elf: await db.createRaceTrait({
            id: "race-trait-darkvision-elf",
            name: "Darkvision",
            description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        }),
        keen_senses_elf: await db.createRaceTrait({
            id: "race-trait-keen-senses-elf",
            name: "Keen Senses",
            description: "You have proficiency in the Perception skill.",
        }),
        fey_ancestry_elf: await db.createRaceTrait({
            id: "race-trait-fey-ancestry-elf",
            name: "Fey Ancestry",
            description: "You have advantage on saving throws against being charmed, and magic can't put you to sleep.",
        }),
        trance_elf: await db.createRaceTrait({
            id: "race-trait-trance-elf",
            name: "Trance",
            description: "Elves don't need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is \"trance.\") While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.",
        }),
        elf_weapon_training_elf_high_elf: await db.createRaceTrait({
            id: "race-trait-elf-weapon-training-elf_high_elf",
            name: "Elf Weapon Training",
            description: "You have proficiency with the longsword, shortsword, shortbow, and longbow.",
        }),
        cantrip_elf_high_elf: await db.createRaceTrait({
            id: "race-trait-cantrip-elf_high_elf",
            name: "Cantrip",
            description: "You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.",
        }),
        extra_language_elf_high_elf: await db.createRaceTrait({
            id: "race-trait-extra-language-elf_high_elf",
            name: "Extra Language",
            description: "You can speak, read, and write one extra language of your choice.",
        }),
        elf_weapon_training_elf_wood_elf: await db.createRaceTrait({
            id: "race-trait-elf-weapon-training-elf_wood_elf",
            name: "Elf Weapon Training",
            description: "You have proficiency with the longsword, shortsword, shortbow, and longbow.",
        }),
        fleet_of_foot_elf_wood_elf: await db.createRaceTrait({
            id: "race-trait-fleet-of-foot-elf_wood_elf",
            name: "Fleet of Foot",
            description: "Your base walking speed increases to 35 feet.",
        }),
        mask_of_the_wild_elf_wood_elf: await db.createRaceTrait({
            id: "race-trait-mask-of-the-wild-elf_wood_elf",
            name: "Mask of the Wild",
            description: "You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.",
        }),
        superior_darkvision_elf_dark_elf_drow: await db.createRaceTrait({
            id: "race-trait-superior-darkvision-elf_dark_elf_drow",
            name: "Superior Darkvision",
            description: "Your darkvision has a radius of 120 feet.",
        }),
        sunlight_sensitivity_elf_dark_elf_drow: await db.createRaceTrait({
            id: "race-trait-sunlight-sensitivity-elf_dark_elf_drow",
            name: "Sunlight Sensitivity",
            description: "You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight.",
        }),
        drow_magic_elf_dark_elf_drow: await db.createRaceTrait({
            id: "race-trait-drow-magic-elf_dark_elf_drow",
            name: "Drow Magic",
            description: "You know the dancing lights cantrip. When you reach 3rd level, you can cast the faerie fire spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.",
        }),
        drow_weapon_training_elf_dark_elf_drow: await db.createRaceTrait({
            id: "race-trait-drow-weapon-training-elf_dark_elf_drow",
            name: "Drow Weapon Training",
            description: "You have proficiency with rapiers, shortswords, and hand crossbows.",
        }),
        sea_elf_training_elf_sea_elf: await db.createRaceTrait({
            id: "race-trait-sea-elf-training-elf_sea_elf",
            name: "Sea Elf Training",
            description: "You have proficiency with the spear, trident, light crossbow, and net.",
        }),
        child_of_the_sea_elf_sea_elf: await db.createRaceTrait({
            id: "race-trait-child-of-the-sea-elf_sea_elf",
            name: "Child of the Sea",
            description: "You have a swimming speed of 30 feet, and you can breathe air and water.",
        }),
        friend_of_the_sea_elf_sea_elf: await db.createRaceTrait({
            id: "race-trait-friend-of-the-sea-elf_sea_elf",
            name: "Friend of the Sea",
            description: "Using gestures and sounds, you can communicate simple ideas with any beast that has an innate swimming speed.",
        }),
        fey_step_elf_eladrin: await db.createRaceTrait({
            id: "race-trait-fey-step-elf_eladrin",
            name: "Fey Step",
            description: "As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. Once you use this trait, you can't do so again until you finish a short or long rest. When you reach 3rd level, your Fey Step gains an additional effect based on your season. The effect lasts until the end of your next turn.",
        }),
        trance_elf_eladrin: await db.createRaceTrait({
            id: "race-trait-trance-elf_eladrin",
            name: "Trance",
            description: "You don't need to sleep, and magic can't put you to sleep. You can finish a long rest in 4 hours if you spend those hours in a trancelike meditation, during which you remain conscious.",
        }),
        blessing_of_the_raven_queen_elf_shadar_kai: await db.createRaceTrait({
            id: "race-trait-blessing-of-the-raven-queen-elf_shadar_kai",
            name: "Blessing of the Raven Queen",
            description: "As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. Once you use this trait, you can't do so again until you finish a long rest. Starting at 3rd level, you also gain resistance to all damage when you teleport using this trait. The resistance lasts until the start of your next turn. During that time, you appear ghostly and translucent.",
        }),
        necrotic_resistance_elf_shadar_kai: await db.createRaceTrait({
            id: "race-trait-necrotic-resistance-elf_shadar_kai",
            name: "Necrotic Resistance",
            description: "You have resistance to necrotic damage.",
        }),
        trance_elf_shadar_kai: await db.createRaceTrait({
            id: "race-trait-trance-elf_shadar_kai",
            name: "Trance",
            description: "You don't need to sleep, and magic can't put you to sleep. You can finish a long rest in 4 hours if you spend those hours in a trancelike meditation, during which you remain conscious.",
        }),
        fairy_magic_fairy: await db.createRaceTrait({
            id: "race-trait-fairy-magic-fairy",
            name: "Fairy Magic",
            description: "You know the druidcraft cantrip. Starting at 3rd level, you can cast the faerie fire spell with this trait. Starting at 5th level, you can also cast the enlarge/reduce spell with this trait. Once you cast faerie fire or enlarge/reduce with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast either of those spells using any spell slots you have of the appropriate level. Charisma is your spellcasting ability for these spells.",
        }),
        flight_fairy: await db.createRaceTrait({
            id: "race-trait-flight-fairy",
            name: "Flight",
            description: "You have a flying speed equal to your walking speed. You can hover.",
        }),
        fey_passage_fairy: await db.createRaceTrait({
            id: "race-trait-fey-passage-fairy",
            name: "Fey Passage",
            description: "You can squeeze through a space as narrow as 1 inch wide without squeezing.",
        }),
        firbolg_magic_firbolg: await db.createRaceTrait({
            id: "race-trait-firbolg-magic-firbolg",
            name: "Firbolg Magic",
            description: "You can cast detect magic and disguise self with this trait, using Wisdom as your spellcasting ability. Once you cast either spell with this trait, you can't cast that spell with it again until you finish a short or long rest. You can also cast these spells using any spell slots you have of the appropriate level.",
        }),
        hidden_step_firbolg: await db.createRaceTrait({
            id: "race-trait-hidden-step-firbolg",
            name: "Hidden Step",
            description: "As a bonus action, you can magically turn invisible until the start of your next turn or until you attack, make a damage roll, or force someone to make a saving throw. Once you use this trait, you can't do so again until you finish a short or long rest.",
        }),
        powerful_build_firbolg: await db.createRaceTrait({
            id: "race-trait-powerful-build-firbolg",
            name: "Powerful Build",
            description: "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.",
        }),
        speech_of_beast_and_leaf_firbolg: await db.createRaceTrait({
            id: "race-trait-speech-of-beast-and-leaf-firbolg",
            name: "Speech of Beast and Leaf",
            description: "You have the ability to communicate in a limited manner with beasts and plants. They can understand the meaning of your words, though you have no special ability to understand them in return. You have advantage on all Charisma checks you make to influence them.",
        }),
        elemental_resistance_genasi: await db.createRaceTrait({
            id: "race-trait-elemental-resistance-genasi",
            name: "Elemental Resistance",
            description: "You have resistance to one damage type based on your elemental heritage.",
        }),
        elemental_magic_genasi: await db.createRaceTrait({
            id: "race-trait-elemental-magic-genasi",
            name: "Elemental Magic",
            description: "You know one cantrip based on your elemental heritage. At 3rd level, you can cast a 1st-level spell based on your elemental heritage. At 5th level, you can cast a 2nd-level spell based on your elemental heritage. Once you cast a spell with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast these spells using any spell slots you have of the appropriate level. Constitution is your spellcasting ability for these spells.",
        }),
        air_resistance_genasi_air_genasi: await db.createRaceTrait({
            id: "race-trait-air-resistance-genasi_air_genasi",
            name: "Air Resistance",
            description: "You have resistance to lightning damage.",
        }),
        air_magic_genasi_air_genasi: await db.createRaceTrait({
            id: "race-trait-air-magic-genasi_air_genasi",
            name: "Air Magic",
            description: "You know the shocking grasp cantrip. At 3rd level, you can cast feather fall with this trait. At 5th level, you can cast levitate with this trait. Once you cast feather fall or levitate with this trait, you can't cast that spell with it again until you finish a long rest.",
        }),
        unending_breath_genasi_air_genasi: await db.createRaceTrait({
            id: "race-trait-unending-breath-genasi_air_genasi",
            name: "Unending Breath",
            description: "You can hold your breath indefinitely while you're not incapacitated.",
        }),
        mingle_with_the_wind_genasi_air_genasi: await db.createRaceTrait({
            id: "race-trait-mingle-with-the-wind-genasi_air_genasi",
            name: "Mingle with the Wind",
            description: "As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. Once you use this trait, you can't do so again until you finish a short or long rest.",
        }),
        earth_resistance_genasi_earth_genasi: await db.createRaceTrait({
            id: "race-trait-earth-resistance-genasi_earth_genasi",
            name: "Earth Resistance",
            description: "You have resistance to acid damage.",
        }),
        earth_magic_genasi_earth_genasi: await db.createRaceTrait({
            id: "race-trait-earth-magic-genasi_earth_genasi",
            name: "Earth Magic",
            description: "You know the blade ward cantrip. At 3rd level, you can cast earth tremor with this trait. At 5th level, you can cast passwall with this trait. Once you cast earth tremor or passwall with this trait, you can't cast that spell with it again until you finish a long rest.",
        }),
        earth_walk_genasi_earth_genasi: await db.createRaceTrait({
            id: "race-trait-earth-walk-genasi_earth_genasi",
            name: "Earth Walk",
            description: "You can move across difficult terrain made of earth or stone without spending extra movement.",
        }),
        fire_resistance_genasi_fire_genasi: await db.createRaceTrait({
            id: "race-trait-fire-resistance-genasi_fire_genasi",
            name: "Fire Resistance",
            description: "You have resistance to fire damage.",
        }),
        fire_magic_genasi_fire_genasi: await db.createRaceTrait({
            id: "race-trait-fire-magic-genasi_fire_genasi",
            name: "Fire Magic",
            description: "You know the produce flame cantrip. At 3rd level, you can cast burning hands with this trait. At 5th level, you can cast flame blade with this trait. Once you cast burning hands or flame blade with this trait, you can't cast that spell with it again until you finish a long rest.",
        }),
        reach_to_the_blaze_genasi_fire_genasi: await db.createRaceTrait({
            id: "race-trait-reach-to-the-blaze-genasi_fire_genasi",
            name: "Reach to the Blaze",
            description: "As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. Once you use this trait, you can't do so again until you finish a short or long rest.",
        }),
        water_resistance_genasi_water_genasi: await db.createRaceTrait({
            id: "race-trait-water-resistance-genasi_water_genasi",
            name: "Water Resistance",
            description: "You have resistance to acid damage.",
        }),
        water_magic_genasi_water_genasi: await db.createRaceTrait({
            id: "race-trait-water-magic-genasi_water_genasi",
            name: "Water Magic",
            description: "You know the shape water cantrip. At 3rd level, you can cast create or destroy water with this trait. At 5th level, you can cast wall of water with this trait. Once you cast create or destroy water or wall of water with this trait, you can't cast that spell with it again until you finish a long rest.",
        }),
        amphibious_genasi_water_genasi: await db.createRaceTrait({
            id: "race-trait-amphibious-genasi_water_genasi",
            name: "Amphibious",
            description: "You can breathe air and water.",
        }),
        swim_genasi_water_genasi: await db.createRaceTrait({
            id: "race-trait-swim-genasi_water_genasi",
            name: "Swim",
            description: "You have a swimming speed of 30 feet.",
        }),
        darkvision_gnome: await db.createRaceTrait({
            id: "race-trait-darkvision-gnome",
            name: "Darkvision",
            description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        }),
        gnome_cunning_gnome: await db.createRaceTrait({
            id: "race-trait-gnome-cunning-gnome",
            name: "Gnome Cunning",
            description: "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.",
        }),
        natural_illusionist_gnome_forest_gnome: await db.createRaceTrait({
            id: "race-trait-natural-illusionist-gnome_forest_gnome",
            name: "Natural Illusionist",
            description: "You know the minor illusion cantrip. Intelligence is your spellcasting ability for it.",
        }),
        speak_with_small_beasts_gnome_forest_gnome: await db.createRaceTrait({
            id: "race-trait-speak-with-small-beasts-gnome_forest_gnome",
            name: "Speak with Small Beasts",
            description: "Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts.",
        }),
        artificers_lore_gnome_rock_gnome: await db.createRaceTrait({
            id: "race-trait-artificers-lore-gnome_rock_gnome",
            name: "Artificer's Lore",
            description: "Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.",
        }),
        tinker_gnome_rock_gnome: await db.createRaceTrait({
            id: "race-trait-tinker-gnome_rock_gnome",
            name: "Tinker",
            description: "You have proficiency with artisan's tools (tinker's tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp).",
        }),
        firearms_mastery_giff: await db.createRaceTrait({
            id: "race-trait-firearms-mastery-giff",
            name: "Firearms Mastery",
            description: "You have proficiency with firearms and ignore the loading property of firearms. You can use a bonus action to reload a firearm you are holding.",
        }),
        hippo_build_giff: await db.createRaceTrait({
            id: "race-trait-hippo-build-giff",
            name: "Hippo Build",
            description: "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.",
        }),
        natural_armor_giff: await db.createRaceTrait({
            id: "race-trait-natural-armor-giff",
            name: "Natural Armor",
            description: "Your thick hide provides you with a +1 bonus to AC when you aren't wearing armor.",
        }),
        darkvision_goblin: await db.createRaceTrait({
            id: "race-trait-darkvision-goblin",
            name: "Darkvision",
            description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        }),
        fury_of_the_small_goblin: await db.createRaceTrait({
            id: "race-trait-fury-of-the-small-goblin",
            name: "Fury of the Small",
            description: "When you damage a creature with an attack or a spell and the creature's size is larger than yours, you can cause the attack or spell to deal extra damage to the creature. The extra damage equals your level. Once you use this trait, you can't use it again until you finish a short or long rest.",
        }),
        nimble_escape_goblin: await db.createRaceTrait({
            id: "race-trait-nimble-escape-goblin",
            name: "Nimble Escape",
            description: "You can take the Disengage or Hide action as a bonus action on each of your turns.",
        }),
        natural_athlete_goliath: await db.createRaceTrait({
            id: "race-trait-natural-athlete-goliath",
            name: "Natural Athlete",
            description: "You have proficiency in the Athletics skill.",
        }),
        stones_endurance_goliath: await db.createRaceTrait({
            id: "race-trait-stones-endurance-goliath",
            name: "Stone's Endurance",
            description: "You can focus yourself to occasionally shrug off injury. When you take damage, you can use your reaction to roll a d12. Add your Constitution modifier to the number rolled, and reduce the damage by that total. After you use this trait, you can't use it again until you finish a short or long rest.",
        }),
        powerful_build_goliath: await db.createRaceTrait({
            id: "race-trait-powerful-build-goliath",
            name: "Powerful Build",
            description: "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.",
        }),
        mountain_born_goliath: await db.createRaceTrait({
            id: "race-trait-mountain-born-goliath",
            name: "Mountain Born",
            description: "You're acclimated to high altitude, including elevations above 20,000 feet. You're also naturally adapted to cold climates.",
        }),
        dexterous_feet_hadozee: await db.createRaceTrait({
            id: "race-trait-dexterous-feet-hadozee",
            name: "Dexterous Feet",
            description: "As a bonus action, you can use your feet to manipulate an object, open or close a door or container, or pick up or set down a Tiny object.",
        }),
        glide_hadozee: await db.createRaceTrait({
            id: "race-trait-glide-hadozee",
            name: "Glide",
            description: "When you fall at least 10 feet, you can use your reaction to extend your skin membranes to glide horizontally a number of feet equal to your walking speed, and you take no damage from the fall. You choose the direction of the glide.",
        }),
        hadozee_dodge_hadozee: await db.createRaceTrait({
            id: "race-trait-hadozee-dodge-hadozee",
            name: "Hadozee Dodge",
            description: "When you take damage, you can use your reaction to roll a d6 and add your proficiency bonus; reduce the damage by that total (minimum 0). You can use this trait a number of times equal to your proficiency bonus, and regain all uses after a long rest.",
        }),
        darkvision_half_elf: await db.createRaceTrait({
            id: "race-trait-darkvision-half_elf",
            name: "Darkvision",
            description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        }),
        fey_ancestry_half_elf: await db.createRaceTrait({
            id: "race-trait-fey-ancestry-half_elf",
            name: "Fey Ancestry",
            description: "You have advantage on saving throws against being charmed, and magic can't put you to sleep.",
        }),
        skill_versatility_half_elf: await db.createRaceTrait({
            id: "race-trait-skill-versatility-half_elf",
            name: "Skill Versatility",
            description: "You gain proficiency in two skills of your choice.",
        }),
        aquatic_half_elf_aquatic_half_elf: await db.createRaceTrait({
            id: "race-trait-aquatic-half_elf_aquatic_half_elf",
            name: "Aquatic",
            description: "You can breathe air and water, and you have a swimming speed of 30 feet.",
        }),
        drow_magic_half_elf_drow_half_elf: await db.createRaceTrait({
            id: "race-trait-drow-magic-half_elf_drow_half_elf",
            name: "Drow Magic",
            description: "You know the dancing lights cantrip. When you reach 3rd level, you can cast the faerie fire spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.",
        }),
        elf_weapon_training_half_elf_high_half_elf: await db.createRaceTrait({
            id: "race-trait-elf-weapon-training-half_elf_high_half_elf",
            name: "Elf Weapon Training",
            description: "You have proficiency with the longsword, shortsword, shortbow, and longbow.",
        }),
        cantrip_half_elf_high_half_elf: await db.createRaceTrait({
            id: "race-trait-cantrip-half_elf_high_half_elf",
            name: "Cantrip",
            description: "You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.",
        }),
        elf_weapon_training_half_elf_wood_half_elf: await db.createRaceTrait({
            id: "race-trait-elf-weapon-training-half_elf_wood_half_elf",
            name: "Elf Weapon Training",
            description: "You have proficiency with the longsword, shortsword, shortbow, and longbow.",
        }),
        fleet_of_foot_half_elf_wood_half_elf: await db.createRaceTrait({
            id: "race-trait-fleet-of-foot-half_elf_wood_half_elf",
            name: "Fleet of Foot",
            description: "Your base walking speed increases to 35 feet.",
        }),
        mask_of_the_wild_half_elf_wood_half_elf: await db.createRaceTrait({
            id: "race-trait-mask-of-the-wild-half_elf_wood_half_elf",
            name: "Mask of the Wild",
            description: "You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.",
        }),
        darkvision_half_orc: await db.createRaceTrait({
            id: "race-trait-darkvision-half_orc",
            name: "Darkvision",
            description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        }),
        relentless_endurance_half_orc: await db.createRaceTrait({
            id: "race-trait-relentless-endurance-half_orc",
            name: "Relentless Endurance",
            description: "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can't use this feature again until you finish a long rest.",
        }),
        savage_attacks_half_orc: await db.createRaceTrait({
            id: "race-trait-savage-attacks-half_orc",
            name: "Savage Attacks",
            description: "When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit.",
        }),
        lucky_halfling: await db.createRaceTrait({
            id: "race-trait-lucky-halfling",
            name: "Lucky",
            description: "When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.",
        }),
        brave_halfling: await db.createRaceTrait({
            id: "race-trait-brave-halfling",
            name: "Brave",
            description: "You have advantage on saving throws against being frightened.",
        }),
        halfling_nimbleness_halfling: await db.createRaceTrait({
            id: "race-trait-halfling-nimbleness-halfling",
            name: "Halfling Nimbleness",
            description: "You can move through the space of any creature that is of a size larger than yours.",
        }),
        naturally_stealthy_halfling_lightfoot_halfling: await db.createRaceTrait({
            id: "race-trait-naturally-stealthy-halfling_lightfoot_halfling",
            name: "Naturally Stealthy",
            description: "You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.",
        }),
        stout_resilience_halfling_stout_halfling: await db.createRaceTrait({
            id: "race-trait-stout-resilience-halfling_stout_halfling",
            name: "Stout Resilience",
            description: "You have advantage on saving throws against poison, and you have resistance against poison damage.",
        }),
        silent_speech_halfling_ghostwise_halfling: await db.createRaceTrait({
            id: "race-trait-silent-speech-halfling_ghostwise_halfling",
            name: "Silent Speech",
            description: "You can speak telepathically to any creature within 30 feet of you. The creature understands you only if the two of you share a language. You can speak telepathically in this way to one creature at a time.",
        }),
        hare_trigger_harengon: await db.createRaceTrait({
            id: "race-trait-hare-trigger-harengon",
            name: "Hare-Trigger",
            description: "You can add your proficiency bonus to your initiative rolls.",
        }),
        leporine_senses_harengon: await db.createRaceTrait({
            id: "race-trait-leporine-senses-harengon",
            name: "Leporine Senses",
            description: "You have proficiency in the Perception skill.",
        }),
        lucky_footwork_harengon: await db.createRaceTrait({
            id: "race-trait-lucky-footwork-harengon",
            name: "Lucky Footwork",
            description: "When you fail a Dexterity saving throw, you can use your reaction to reroll the die, and you must use the new roll.",
        }),
        rabbit_hop_harengon: await db.createRaceTrait({
            id: "race-trait-rabbit-hop-harengon",
            name: "Rabbit Hop",
            description: "As a bonus action, you can jump a number of feet equal to 5 × your proficiency bonus, without provoking opportunity attacks. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
        }),
        darkvision_hexblood: await db.createRaceTrait({
            id: "race-trait-darkvision-hexblood",
            name: "Darkvision",
            description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        }),
        hex_magic_hexblood: await db.createRaceTrait({
            id: "race-trait-hex-magic-hexblood",
            name: "Hex Magic",
            description: "You know the minor illusion cantrip. When you reach 3rd level, you can cast the hex spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can also cast the disguise self spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.",
        }),
        eerie_token_hexblood: await db.createRaceTrait({
            id: "race-trait-eerie-token-hexblood",
            name: "Eerie Token",
            description: "As an action, you can harmlessly remove a lock of your hair, a bit of your nail, or one of your teeth. This token is imbued with magic until you finish a long rest. While the token is imbued in this way, you can use an action to send a telepathic message to the creature holding or carrying the token, as long as you are on the same plane of existence. The message can contain up to twenty-five words.",
        }),
        darkvision_hobgoblin: await db.createRaceTrait({
            id: "race-trait-darkvision-hobgoblin",
            name: "Darkvision",
            description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        }),
        martial_training_hobgoblin: await db.createRaceTrait({
            id: "race-trait-martial-training-hobgoblin",
            name: "Martial Training",
            description: "You are proficient with two martial weapons of your choice and with light armor.",
        }),
        saving_face_hobgoblin: await db.createRaceTrait({
            id: "race-trait-saving-face-hobgoblin",
            name: "Saving Face",
            description: "If you miss with an attack roll or fail an ability check, you can gain a bonus to the roll equal to the number of allies you can see within 30 feet of you (maximum bonus of +5). Once you use this trait, you can't use it again until you finish a short or long rest.",
        }),
        extra_language_human: await db.createRaceTrait({
            id: "race-trait-extra-language-human",
            name: "Extra Language",
            description: "You can speak, read, and write one extra language of your choice.",
        }),
        feat_human_variant_human: await db.createRaceTrait({
            id: "race-trait-feat-human_variant_human",
            name: "Feat",
            description: "You gain one feat of your choice.",
        }),
        skill_human_variant_human: await db.createRaceTrait({
            id: "race-trait-skill-human_variant_human",
            name: "Skill",
            description: "You gain proficiency in one skill of your choice.",
        }),
        hunters_intuition_human_mark_of_finding_human: await db.createRaceTrait({
            id: "race-trait-hunters-intuition-human_mark_of_finding_human",
            name: "Hunter's Intuition",
            description: "When you make a Wisdom (Perception) or Wisdom (Survival) check, you can roll a d4 and add the number rolled to the ability check.",
        }),
        finders_magic_human_mark_of_finding_human: await db.createRaceTrait({
            id: "race-trait-finders-magic-human_mark_of_finding_human",
            name: "Finder's Magic",
            description: "You can cast the hunter's mark spell with this trait. Starting at 3rd level, you can also cast the locate object spell with it. Starting at 5th level, you can also cast the locate creature spell with it. Once you cast a spell with this trait, you can't do so again until you finish a long rest. Wisdom is your spellcasting ability for these spells.",
        }),
        wild_intuition_human_mark_of_handling_human: await db.createRaceTrait({
            id: "race-trait-wild-intuition-human_mark_of_handling_human",
            name: "Wild Intuition",
            description: "When you make a Wisdom (Animal Handling) or Intelligence (Nature) check, you can roll a d4 and add the number rolled to the ability check.",
        }),
        primal_connection_human_mark_of_handling_human: await db.createRaceTrait({
            id: "race-trait-primal-connection-human_mark_of_handling_human",
            name: "Primal Connection",
            description: "You can cast the speak with animals spell with this trait. Starting at 3rd level, you can also cast the animal friendship spell with it. Starting at 5th level, you can also cast the beast sense spell with it. Once you cast a spell with this trait, you can't do so again until you finish a long rest. Wisdom is your spellcasting ability for these spells.",
        }),
        artisans_intuition_human_mark_of_making_human: await db.createRaceTrait({
            id: "race-trait-artisans-intuition-human_mark_of_making_human",
            name: "Artisan's Intuition",
            description: "When you make an Intelligence (Arcana) or Intelligence (History) check, you can roll a d4 and add the number rolled to the ability check.",
        }),
        makers_magic_human_mark_of_making_human: await db.createRaceTrait({
            id: "race-trait-makers-magic-human_mark_of_making_human",
            name: "Maker's Magic",
            description: "You can cast the mending cantrip with this trait. Starting at 3rd level, you can also cast the magic weapon spell with it. Starting at 5th level, you can also cast the fabricate spell with it. Once you cast a spell with this trait, you can't do so again until you finish a long rest. Intelligence is your spellcasting ability for these spells.",
        }),
        intuitive_motion_human_mark_of_passage_human: await db.createRaceTrait({
            id: "race-trait-intuitive-motion-human_mark_of_passage_human",
            name: "Intuitive Motion",
            description: "When you make a Dexterity (Acrobatics) or Strength (Athletics) check, you can roll a d4 and add the number rolled to the ability check.",
        }),
        passage_magic_human_mark_of_passage_human: await db.createRaceTrait({
            id: "race-trait-passage-magic-human_mark_of_passage_human",
            name: "Passage Magic",
            description: "You can cast the longstrider spell with this trait. Starting at 3rd level, you can also cast the misty step spell with it. Starting at 5th level, you can also cast the passwall spell with it. Once you cast a spell with this trait, you can't do so again until you finish a long rest. Intelligence is your spellcasting ability for these spells.",
        }),
        vigilant_guardian_human_mark_of_sentinel_human: await db.createRaceTrait({
            id: "race-trait-vigilant-guardian-human_mark_of_sentinel_human",
            name: "Vigilant Guardian",
            description: "When you make a Wisdom (Insight) or Wisdom (Perception) check, you can roll a d4 and add the number rolled to the ability check.",
        }),
        sentinels_magic_human_mark_of_sentinel_human: await db.createRaceTrait({
            id: "race-trait-sentinels-magic-human_mark_of_sentinel_human",
            name: "Sentinel's Magic",
            description: "You can cast the shield spell with this trait. Starting at 3rd level, you can also cast the warding bond spell with it. Starting at 5th level, you can also cast the death ward spell with it. Once you cast a spell with this trait, you can't do so again until you finish a long rest. Wisdom is your spellcasting ability for these spells.",
        }),
        dual_mind_kalashtar: await db.createRaceTrait({
            id: "race-trait-dual-mind-kalashtar",
            name: "Dual Mind",
            description: "You have advantage on all Wisdom saving throws.",
        }),
        mental_discipline_kalashtar: await db.createRaceTrait({
            id: "race-trait-mental-discipline-kalashtar",
            name: "Mental Discipline",
            description: "You have resistance to psychic damage.",
        }),
        mind_link_kalashtar: await db.createRaceTrait({
            id: "race-trait-mind-link-kalashtar",
            name: "Mind Link",
            description: "You can speak telepathically to any creature you can see within 30 feet of you. The creature understands you only if the two of you share a language. You can speak telepathically in this way to one creature at a time.",
        }),
        severed_from_dreams_kalashtar: await db.createRaceTrait({
            id: "race-trait-severed-from-dreams-kalashtar",
            name: "Severed from Dreams",
            description: "You don't sleep, and magic can't put you to sleep. You can finish a long rest in 4 hours if you spend those hours in a trancelike meditation, during which you retain consciousness.",
        }),
        fearless_kender: await db.createRaceTrait({
            id: "race-trait-fearless-kender",
            name: "Fearless",
            description: "You are immune to the frightened condition.",
        }),
        kender_curiosity_kender: await db.createRaceTrait({
            id: "race-trait-kender-curiosity-kender",
            name: "Kender Curiosity",
            description: "You have advantage on all Intelligence (Investigation) checks.",
        }),
        taunt_kender: await db.createRaceTrait({
            id: "race-trait-taunt-kender",
            name: "Taunt",
            description: "As a bonus action, you can unleash a string of provoking words at a creature within 30 feet of you that can hear you. The target must succeed on a Wisdom saving throw (DC 8 + your proficiency bonus + your Charisma modifier) or be taunted by you until the start of your next turn. A taunted target has disadvantage on attack rolls against targets other than you.",
        }),
        expert_forgery_kenku: await db.createRaceTrait({
            id: "race-trait-expert-forgery-kenku",
            name: "Expert Forgery",
            description: "You can duplicate other creatures' handwriting and craftwork. You have advantage on all checks made to produce forgeries or duplicates of existing objects.",
        }),
        kenku_training_kenku: await db.createRaceTrait({
            id: "race-trait-kenku-training-kenku",
            name: "Kenku Training",
            description: "You are proficient in your choice of two of the following skills: Acrobatics, Deception, Stealth, and Sleight of Hand.",
        }),
        mimicry_kenku: await db.createRaceTrait({
            id: "race-trait-mimicry-kenku",
            name: "Mimicry",
            description: "You can mimic sounds you have heard, including voices. A creature that hears the sounds you make can tell they are imitations with a successful Wisdom (Insight) check opposed by your Charisma (Deception) check.",
        }),
        darkvision_kobold: await db.createRaceTrait({
            id: "race-trait-darkvision-kobold",
            name: "Darkvision",
            description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        }),
        grovel_cower_and_beg_kobold: await db.createRaceTrait({
            id: "race-trait-grovel-cower-and-beg-kobold",
            name: "Grovel, Cower, and Beg",
            description: "As an action on your turn, you can cower pathetically to distract nearby foes. Until the end of your next turn, your allies gain advantage on attack rolls against creatures within 10 feet of you that can see you. Once you use this trait, you can't use it again until you finish a short or long rest.",
        }),
        pack_tactics_kobold: await db.createRaceTrait({
            id: "race-trait-pack-tactics-kobold",
            name: "Pack Tactics",
            description: "You have advantage on an attack roll against a creature if at least one of your allies is within 5 feet of the creature and the ally isn't incapacitated.",
        }),
        darkvision_leonin: await db.createRaceTrait({
            id: "race-trait-darkvision-leonin",
            name: "Darkvision",
            description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        }),
        claws_leonin: await db.createRaceTrait({
            id: "race-trait-claws-leonin",
            name: "Claws",
            description: "Your claws are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.",
        }),
        hunters_instincts_leonin: await db.createRaceTrait({
            id: "race-trait-hunters-instincts-leonin",
            name: "Hunter's Instincts",
            description: "You have proficiency in one of the following skills of your choice: Athletics, Intimidation, Perception, or Survival.",
        }),
        daunting_roar_leonin: await db.createRaceTrait({
            id: "race-trait-daunting-roar-leonin",
            name: "Daunting Roar",
            description: "As a bonus action, you can let out a menacing roar. Creatures of your choice within 10 feet of you that can hear you must succeed on a Wisdom saving throw (DC 8 + your proficiency bonus + your Charisma modifier) or be frightened of you until the end of your next turn. Once you use this trait, you can't use it again until you finish a short or long rest.",
        }),
        bite_lizardfolk: await db.createRaceTrait({
            id: "race-trait-bite-lizardfolk",
            name: "Bite",
            description: "Your fanged maw is a natural weapon, which you can use to make unarmed strikes. If you hit with it, you deal piercing damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.",
        }),
        cunning_artisan_lizardfolk: await db.createRaceTrait({
            id: "race-trait-cunning-artisan-lizardfolk",
            name: "Cunning Artisan",
            description: "As part of a short rest, you can harvest bone and hide from a slain beast, construct, dragon, monstrosity, or plant creature of size Small or larger to create one of the following items: a shield, a club, a javelin, or 1d4 darts or blowgun needles. To use this trait, you need a blade, such as a dagger, or appropriate artisan's tools, such as leatherworker's tools.",
        }),
        hold_breath_lizardfolk: await db.createRaceTrait({
            id: "race-trait-hold-breath-lizardfolk",
            name: "Hold Breath",
            description: "You can hold your breath for up to 15 minutes at a time.",
        }),
        natural_armor_lizardfolk: await db.createRaceTrait({
            id: "race-trait-natural-armor-lizardfolk",
            name: "Natural Armor",
            description: "You have tough, scaly skin. When you aren't wearing armor, your AC is 13 + your Dexterity modifier. You can use your natural armor to determine your AC if the armor you wear would leave you with a lower AC. A shield's benefits apply as normal while you use your natural armor.",
        }),
        hungry_jaws_lizardfolk: await db.createRaceTrait({
            id: "race-trait-hungry-jaws-lizardfolk",
            name: "Hungry Jaws",
            description: "In battle, you can throw yourself into a vicious feeding frenzy. As a bonus action, you can make a special attack with your bite. If the attack hits, it deals its normal damage, and you gain temporary hit points (minimum of 1) equal to your Constitution modifier, and you can't use this trait again until you finish a short or long rest.",
        }),
        natural_armor_loxodon: await db.createRaceTrait({
            id: "race-trait-natural-armor-loxodon",
            name: "Natural Armor",
            description: "You have thick, leathery skin. When you aren't wearing armor, your AC is 12 + your Constitution modifier. You can use your natural armor to determine your AC if the armor you wear would leave you with a lower AC. A shield's benefits apply as normal while you use your natural armor.",
        }),
        powerful_build_loxodon: await db.createRaceTrait({
            id: "race-trait-powerful-build-loxodon",
            name: "Powerful Build",
            description: "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.",
        }),
        trunk_loxodon: await db.createRaceTrait({
            id: "race-trait-trunk-loxodon",
            name: "Trunk",
            description: "You can grasp things with your trunk, and you can use it as a snorkel. It has a reach of 5 feet, and it can lift a number of pounds equal to five times your Strength score. You can use it to do the following simple tasks: lift, drop, hold, push, or pull an object or a creature; open or close a door or a container; grapple someone; or make an unarmed strike. Your DM might allow other simple tasks to be added to that list of options. It can't wield weapons or shields or do anything that requires manual precision, such as using tools or magic items or performing the somatic components of a spell.",
        }),
        keen_smell_loxodon: await db.createRaceTrait({
            id: "race-trait-keen-smell-loxodon",
            name: "Keen Smell",
            description: "Thanks to your sensitive trunk, you have advantage on Wisdom (Perception) checks that involve smell.",
        }),
        horns_minotaur: await db.createRaceTrait({
            id: "race-trait-horns-minotaur",
            name: "Horns",
            description: "Your horns are natural melee weapons, which you can use to make unarmed strikes. If you hit with them, you deal piercing damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.",
        }),
        goring_rush_minotaur: await db.createRaceTrait({
            id: "race-trait-goring-rush-minotaur",
            name: "Goring Rush",
            description: "When you take the Dash action on your turn, you can make one melee attack with your horns as a bonus action.",
        }),
        hammering_horns_minotaur: await db.createRaceTrait({
            id: "race-trait-hammering-horns-minotaur",
            name: "Hammering Horns",
            description: "When you use the Attack action during your turn to make a melee attack, you can attempt to shove a creature with your horns as a bonus action. You cannot use this shove attempt to knock a creature prone.",
        }),
        labyrinthine_recall_minotaur: await db.createRaceTrait({
            id: "race-trait-labyrinthine-recall-minotaur",
            name: "Labyrinthine Recall",
            description: "You can perfectly recall any path you have traveled.",
        }),
        darkvision_orc: await db.createRaceTrait({
            id: "race-trait-darkvision-orc",
            name: "Darkvision",
            description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        }),
        aggressive_orc: await db.createRaceTrait({
            id: "race-trait-aggressive-orc",
            name: "Aggressive",
            description: "As a bonus action, you can move up to your speed toward an enemy of your choice that you can see or hear. You must end this move closer to the enemy than you started.",
        }),
        powerful_build_orc: await db.createRaceTrait({
            id: "race-trait-powerful-build-orc",
            name: "Powerful Build",
            description: "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.",
        }),
        darkvision_owlin: await db.createRaceTrait({
            id: "race-trait-darkvision-owlin",
            name: "Darkvision",
            description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        }),
        flight_owlin: await db.createRaceTrait({
            id: "race-trait-flight-owlin",
            name: "Flight",
            description: "You have a flying speed equal to your walking speed. You can't use this flying speed if you're wearing medium or heavy armor.",
        }),
        keen_senses_owlin: await db.createRaceTrait({
            id: "race-trait-keen-senses-owlin",
            name: "Keen Senses",
            description: "You have proficiency in the Perception skill.",
        }),
        silent_feathers_owlin: await db.createRaceTrait({
            id: "race-trait-silent-feathers-owlin",
            name: "Silent Feathers",
            description: "You have proficiency in the Stealth skill.",
        }),
        amorphous_plasmoid: await db.createRaceTrait({
            id: "race-trait-amorphous-plasmoid",
            name: "Amorphous",
            description: "You can squeeze through a space as narrow as 1 inch wide without squeezing.",
        }),
        darkvision_plasmoid: await db.createRaceTrait({
            id: "race-trait-darkvision-plasmoid",
            name: "Darkvision",
            description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        }),
        hold_breath_plasmoid: await db.createRaceTrait({
            id: "race-trait-hold-breath-plasmoid",
            name: "Hold Breath",
            description: "You can hold your breath for 1 hour.",
        }),
        natural_reach_plasmoid: await db.createRaceTrait({
            id: "race-trait-natural-reach-plasmoid",
            name: "Natural Reach",
            description: "When you make a melee attack on your turn, your reach for it is 5 feet greater than normal.",
        }),
        shape_self_plasmoid: await db.createRaceTrait({
            id: "race-trait-shape-self-plasmoid",
            name: "Shape Self",
            description: "As a bonus action, you can reshape your body to give yourself a head, one or two arms, one or two legs, and makeshift hands and feet, or you can revert to a limbless blob. While you have a humanlike shape, you can wear clothing and armor made for a Humanoid of your size. As a bonus action, you can extrude a pseudopod that is up to 6 inches wide and 10 feet long, or reabsorb it into your body. You can use this pseudopod to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial. You can't attack with the pseudopod or use it to carry more than 10 pounds.",
        }),
        ancestral_legacy_reborn: await db.createRaceTrait({
            id: "race-trait-ancestral-legacy-reborn",
            name: "Ancestral Legacy",
            description: "You gain the benefits of your choice of one of the following options: (a) Darkvision with a range of 60 feet, (b) Proficiency in two skills of your choice, or (c) Proficiency with one tool of your choice.",
        }),
        deathless_nature_reborn: await db.createRaceTrait({
            id: "race-trait-deathless-nature-reborn",
            name: "Deathless Nature",
            description: "You don't need to eat, drink, or breathe. You don't need to sleep, and magic can't put you to sleep. You can finish a long rest in 4 hours if you spend those hours in an inactive, motionless state, during which you remain semiconscious.",
        }),
        knowledge_from_a_past_life_reborn: await db.createRaceTrait({
            id: "race-trait-knowledge-from-a-past-life-reborn",
            name: "Knowledge from a Past Life",
            description: "When you make an ability check that uses a skill, you can roll a d6 and add the number rolled to the check. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
        }),
        souls_gift_reborn: await db.createRaceTrait({
            id: "race-trait-souls-gift-reborn",
            name: "Soul's Gift",
            description: "You have resistance to necrotic damage and radiant damage.",
        }),
        fey_satyr: await db.createRaceTrait({
            id: "race-trait-fey-satyr",
            name: "Fey",
            description: "Your creature type is fey, rather than humanoid.",
        }),
        ram_satyr: await db.createRaceTrait({
            id: "race-trait-ram-satyr",
            name: "Ram",
            description: "You can use your head and horns to make unarmed strikes. If you hit with them, you deal bludgeoning damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.",
        }),
        magic_resistance_satyr: await db.createRaceTrait({
            id: "race-trait-magic-resistance-satyr",
            name: "Magic Resistance",
            description: "You have advantage on saving throws against spells and other magical effects.",
        }),
        mirthful_leaps_satyr: await db.createRaceTrait({
            id: "race-trait-mirthful-leaps-satyr",
            name: "Mirthful Leaps",
            description: "Whenever you make a long or high jump, you can roll a d8 and add the number rolled to the number of feet you cover, even when making a standing jump. This extra distance costs movement as normal.",
        }),
        reveler_satyr: await db.createRaceTrait({
            id: "race-trait-reveler-satyr",
            name: "Reveler",
            description: "You have proficiency in the Performance and Persuasion skills, and you have proficiency with one musical instrument of your choice.",
        }),
        darkvision_shifter: await db.createRaceTrait({
            id: "race-trait-darkvision-shifter",
            name: "Darkvision",
            description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        }),
        shifting_shifter: await db.createRaceTrait({
            id: "race-trait-shifting-shifter",
            name: "Shifting",
            description: "As a bonus action, you can assume a more bestial appearance. This transformation lasts for 1 minute, until you die, or until you revert to your normal appearance as a bonus action. When you shift, you gain temporary hit points equal to your level + your Constitution modifier (minimum of 1). You also gain additional benefits that depend on your shifter type, as detailed below. Once you shift, you can't do so again until you finish a short or long rest.",
        }),
        shifting_feature_shifter_beasthide_shifter: await db.createRaceTrait({
            id: "race-trait-shifting-feature-shifter_beasthide_shifter",
            name: "Shifting Feature",
            description: "While shifting, you gain 1d6 temporary hit points at the start of each of your turns. You also gain a +1 bonus to AC while shifting.",
        }),
        shifting_feature_shifter_longtooth_shifter: await db.createRaceTrait({
            id: "race-trait-shifting-feature-shifter_longtooth_shifter",
            name: "Shifting Feature",
            description: "While shifting, you can use your fangs to make an unarmed strike as a bonus action. If you hit, you deal piercing damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.",
        }),
        shifting_feature_shifter_swiftstride_shifter: await db.createRaceTrait({
            id: "race-trait-shifting-feature-shifter_swiftstride_shifter",
            name: "Shifting Feature",
            description: "While shifting, your walking speed increases by 10 feet. You also gain a +1 bonus to AC while shifting.",
        }),
        shifting_feature_shifter_wildhunt_shifter: await db.createRaceTrait({
            id: "race-trait-shifting-feature-shifter_wildhunt_shifter",
            name: "Shifting Feature",
            description: "While shifting, you have advantage on Wisdom checks, and no creature within 30 feet of you can make an attack roll with advantage against you, unless you're incapacitated.",
        }),
        animal_enhancement_simic_hybrid: await db.createRaceTrait({
            id: "race-trait-animal-enhancement-simic_hybrid",
            name: "Animal Enhancement",
            description: "You gain one of the following enhancements of your choice: (a) Manta Glide: You have a flying speed equal to your walking speed, but you must end your turn on solid ground or fall. (b) Nimble Climber: You have a climbing speed equal to your walking speed. (c) Underwater Adaptation: You can breathe air and water, and you have a swimming speed equal to your walking speed.",
        }),
        darkvision_simic_hybrid: await db.createRaceTrait({
            id: "race-trait-darkvision-simic_hybrid",
            name: "Darkvision",
            description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        }),
        darkvision_tabaxi: await db.createRaceTrait({
            id: "race-trait-darkvision-tabaxi",
            name: "Darkvision",
            description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        }),
        feline_agility_tabaxi: await db.createRaceTrait({
            id: "race-trait-feline-agility-tabaxi",
            name: "Feline Agility",
            description: "Your reflexes and agility allow you to move with a burst of speed. When you move on your turn in combat, you can double your speed until the end of the turn. Once you use this trait, you can't use it again until you move 0 feet on one of your turns.",
        }),
        cats_claws_tabaxi: await db.createRaceTrait({
            id: "race-trait-cats-claws-tabaxi",
            name: "Cat's Claws",
            description: "Because of your claws, you have a climbing speed of 20 feet. In addition, your claws are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.",
        }),
        cats_talent_tabaxi: await db.createRaceTrait({
            id: "race-trait-cats-talent-tabaxi",
            name: "Cat's Talent",
            description: "You have proficiency in the Perception and Stealth skills.",
        }),
        chameleon_carapace_thri_kreen: await db.createRaceTrait({
            id: "race-trait-chameleon-carapace-thri_kreen",
            name: "Chameleon Carapace",
            description: "As a bonus action, you can change the color of your carapace to match the color and texture of your surroundings, giving you advantage on Dexterity (Stealth) checks made to hide.",
        }),
        darkvision_thri_kreen: await db.createRaceTrait({
            id: "race-trait-darkvision-thri_kreen",
            name: "Darkvision",
            description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        }),
        extra_arms_thri_kreen: await db.createRaceTrait({
            id: "race-trait-extra-arms-thri_kreen",
            name: "Extra Arms",
            description: "You have two extra arms below your main pair of arms. The extra arms can manipulate an object, open or close a door or container, pick up or set down a Tiny object, or wield a weapon that has the light property.",
        }),
        sleepless_thri_kreen: await db.createRaceTrait({
            id: "race-trait-sleepless-thri_kreen",
            name: "Sleepless",
            description: "You don't need to sleep, and magic can't put you to sleep. You can finish a long rest in 4 hours if you spend those hours in a trancelike meditation, during which you remain semiconscious.",
        }),
        thri_kreen_weapon_training_thri_kreen: await db.createRaceTrait({
            id: "race-trait-thri-kreen-weapon-training-thri_kreen",
            name: "Thri-kreen Weapon Training",
            description: "You are proficient with the gythka and the chatkcha.",
        }),
        darkvision_tiefling: await db.createRaceTrait({
            id: "race-trait-darkvision-tiefling",
            name: "Darkvision",
            description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        }),
        hellish_resistance_tiefling: await db.createRaceTrait({
            id: "race-trait-hellish-resistance-tiefling",
            name: "Hellish Resistance",
            description: "You have resistance to fire damage.",
        }),
        infernal_legacy_tiefling: await db.createRaceTrait({
            id: "race-trait-infernal-legacy-tiefling",
            name: "Infernal Legacy",
            description: "You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the hellish rebuke spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.",
        }),
        infernal_legacy_tiefling_asmodeus_tiefling: await db.createRaceTrait({
            id: "race-trait-infernal-legacy-tiefling_asmodeus_tiefling",
            name: "Infernal Legacy",
            description: "You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the hellish rebuke spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.",
        }),
        infernal_legacy_tiefling_baalzebul_tiefling: await db.createRaceTrait({
            id: "race-trait-infernal-legacy-tiefling_baalzebul_tiefling",
            name: "Infernal Legacy",
            description: "You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the suggestion spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the stinking cloud spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.",
        }),
        infernal_legacy_tiefling_dispater_tiefling: await db.createRaceTrait({
            id: "race-trait-infernal-legacy-tiefling_dispater_tiefling",
            name: "Infernal Legacy",
            description: "You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the command spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the detect magic spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.",
        }),
        infernal_legacy_tiefling_fierna_tiefling: await db.createRaceTrait({
            id: "race-trait-infernal-legacy-tiefling_fierna_tiefling",
            name: "Infernal Legacy",
            description: "You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the charm person spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the suggestion spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.",
        }),
        infernal_legacy_tiefling_glasya_tiefling: await db.createRaceTrait({
            id: "race-trait-infernal-legacy-tiefling_glasya_tiefling",
            name: "Infernal Legacy",
            description: "You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the minor illusion spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the disguise self spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.",
        }),
        infernal_legacy_tiefling_levistus_tiefling: await db.createRaceTrait({
            id: "race-trait-infernal-legacy-tiefling_levistus_tiefling",
            name: "Infernal Legacy",
            description: "You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the ray of frost spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the armor of Agathys spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.",
        }),
        infernal_legacy_tiefling_mammon_tiefling: await db.createRaceTrait({
            id: "race-trait-infernal-legacy-tiefling_mammon_tiefling",
            name: "Infernal Legacy",
            description: "You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the Tenser's floating disk spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the arcane lock spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.",
        }),
        infernal_legacy_tiefling_mephistopheles_tiefling: await db.createRaceTrait({
            id: "race-trait-infernal-legacy-tiefling_mephistopheles_tiefling",
            name: "Infernal Legacy",
            description: "You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the burning hands spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the flame blade spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.",
        }),
        infernal_legacy_tiefling_zariel_tiefling: await db.createRaceTrait({
            id: "race-trait-infernal-legacy-tiefling_zariel_tiefling",
            name: "Infernal Legacy",
            description: "You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the searing smite spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the branding smite spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.",
        }),
        claws_tortle: await db.createRaceTrait({
            id: "race-trait-claws-tortle",
            name: "Claws",
            description: "Your claws are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.",
        }),
        hold_breath_tortle: await db.createRaceTrait({
            id: "race-trait-hold-breath-tortle",
            name: "Hold Breath",
            description: "You can hold your breath for up to 1 hour.",
        }),
        natural_armor_tortle: await db.createRaceTrait({
            id: "race-trait-natural-armor-tortle",
            name: "Natural Armor",
            description: "Due to your shell, you have a +2 bonus to AC while you aren't wearing armor.",
        }),
        shell_defense_tortle: await db.createRaceTrait({
            id: "race-trait-shell-defense-tortle",
            name: "Shell Defense",
            description: "You can withdraw into your shell as an action. Until you emerge, you gain a +4 bonus to AC, and you have advantage on Strength and Constitution saving throws. While in your shell, you are prone, your speed is 0 and can't increase, you have disadvantage on Dexterity saving throws, you can't take reactions, and the only action you can take is a bonus action to emerge from your shell.",
        }),
        survival_instinct_tortle: await db.createRaceTrait({
            id: "race-trait-survival-instinct-tortle",
            name: "Survival Instinct",
            description: "You gain proficiency in the Survival skill. Your shell gives you advantage on all checks made to stabilize a dying creature and on all checks made to provide first aid.",
        }),
        amphibious_triton: await db.createRaceTrait({
            id: "race-trait-amphibious-triton",
            name: "Amphibious",
            description: "You can breathe air and water.",
        }),
        control_air_and_water_triton: await db.createRaceTrait({
            id: "race-trait-control-air-and-water-triton",
            name: "Control Air and Water",
            description: "You can cast fog cloud with this trait. Starting at 3rd level, you can cast gust of wind with it, and starting at 5th level, you can also cast wall of water with it. Once you cast a spell with this trait, you can't do so again until you finish a long rest. Charisma is your spellcasting ability for these spells.",
        }),
        emissary_of_the_sea_triton: await db.createRaceTrait({
            id: "race-trait-emissary-of-the-sea-triton",
            name: "Emissary of the Sea",
            description: "Aquatic beasts have an extraordinary affinity with your people. You can communicate simple ideas to any beast that can breathe water. They can understand the meaning of your words, though you have no special ability to understand them in return.",
        }),
        guardians_of_the_depths_triton: await db.createRaceTrait({
            id: "race-trait-guardians-of-the-depths-triton",
            name: "Guardians of the Depths",
            description: "Adapted to even the most extreme ocean depths, you have resistance to cold damage, and you ignore any of the drawbacks caused by a deep, underwater environment.",
        }),
        swimming_speed_triton: await db.createRaceTrait({
            id: "race-trait-swimming-speed-triton",
            name: "Swimming Speed",
            description: "You have a swimming speed of 30 feet.",
        }),
        darkvision_vedalken: await db.createRaceTrait({
            id: "race-trait-darkvision-vedalken",
            name: "Darkvision",
            description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        }),
        vedalken_dispassion_vedalken: await db.createRaceTrait({
            id: "race-trait-vedalken-dispassion-vedalken",
            name: "Vedalken Dispassion",
            description: "You have advantage on all Intelligence, Wisdom, and Charisma saving throws.",
        }),
        partially_amphibious_vedalken: await db.createRaceTrait({
            id: "race-trait-partially-amphibious-vedalken",
            name: "Partially Amphibious",
            description: "You can breathe air and water, but you need to be submerged at least once every 4 hours to avoid suffocating.",
        }),
        tireless_precision_vedalken: await db.createRaceTrait({
            id: "race-trait-tireless-precision-vedalken",
            name: "Tireless Precision",
            description: "You are proficient with one of the following skills of your choice: Arcana, History, Investigation, Medicine, Performance, or Sleight of Hand. You are also proficient with one tool of your choice. When you make an ability check with the chosen skill or tool, you can roll a d4 and add the number rolled to the check.",
        }),
        constructed_resilience_warforged: await db.createRaceTrait({
            id: "race-trait-constructed-resilience-warforged",
            name: "Constructed Resilience",
            description: "You were created to have remarkable fortitude, represented by the following benefits: You have advantage on saving throws against being poisoned, and you have resistance to poison damage. You don't need to eat, drink, or breathe. You are immune to disease. You don't need to sleep, and magic can't put you to sleep.",
        }),
        sentrys_rest_warforged: await db.createRaceTrait({
            id: "race-trait-sentrys-rest-warforged",
            name: "Sentry's Rest",
            description: "When you take a long rest, you must spend at least 6 hours in an inactive, motionless state, rather than sleeping. In this state, you appear inert, but it doesn't render you unconscious, and you can see and hear as normal.",
        }),
        integrated_protection_warforged: await db.createRaceTrait({
            id: "race-trait-integrated-protection-warforged",
            name: "Integrated Protection",
            description: "Your body has built-in defensive layers, which can be enhanced with armor: You gain a +1 bonus to Armor Class. You can don only armor with which you have proficiency. To don armor other than a shield, you must incorporate it into your body over the course of 1 hour, during which you must remain in contact with the armor. To doff armor, you must spend 1 hour removing it. You can rest while donning or doffing armor in this way. While you live, the armor incorporated into your body can't be removed against your will.",
        }),
        specialized_design_warforged: await db.createRaceTrait({
            id: "race-trait-specialized-design-warforged",
            name: "Specialized Design",
            description: "You gain one skill proficiency of your choice, one tool proficiency of your choice, and fluency in one language of your choice.",
        }),
        darkvision_yuan_ti: await db.createRaceTrait({
            id: "race-trait-darkvision-yuan_ti",
            name: "Darkvision",
            description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        }),
        magic_resistance_yuan_ti: await db.createRaceTrait({
            id: "race-trait-magic-resistance-yuan_ti",
            name: "Magic Resistance",
            description: "You have advantage on saving throws against spells and other magical effects.",
        }),
        poison_immunity_yuan_ti: await db.createRaceTrait({
            id: "race-trait-poison-immunity-yuan_ti",
            name: "Poison Immunity",
            description: "You are immune to poison damage and the poisoned condition.",
        }),
        serpentine_magic_yuan_ti: await db.createRaceTrait({
            id: "race-trait-serpentine-magic-yuan_ti",
            name: "Serpentine Magic",
            description: "You know the poison spray cantrip. When you reach 3rd level, you can cast the suggestion spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the animal friendship spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.",
        }),
        innate_spellcasting_yuan_ti_pureblood_yuan_ti: await db.createRaceTrait({
            id: "race-trait-innate-spellcasting-yuan_ti_pureblood_yuan_ti",
            name: "Innate Spellcasting",
            description: "You know the poison spray cantrip. When you reach 3rd level, you can cast the suggestion spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the animal friendship spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.",
        }),
        chromatic_ancestry_dragonborn: await db.createRaceTrait({
            id: "race-trait-chromatic-ancestry-dragonborn",
            name: "Chromatic Ancestry",
            description: "You have draconic ancestry of your chosen color, which determines your resistance and breathe weapon type.\n\tBlack: Acid (5 by 30ft line)\n\tBlue: Lightning (5 by 30ft line)\n\tGreen: Poison (15ft cone)\n\tRed: Fire (15ft cone)\n\tWhite: Cold (15ft cone)",
        }),
        metallic_ancestry_dragonborn: await db.createRaceTrait({
            id: "race-trait-metallic-ancestry-dragonborn",
            name: "Metallic Ancestry",
            description: "You have draconic ancestry of your chosen metal, which determines your resistance and breathe weapon type.\n\tBrass: Fire (5 by 30ft line)\n\tBronze: Lightning (5 by 30ft line)\n\tCopper: Acid (5 by 30ft line)\n\tGold: Fire (15ft cone)\n\tSilver: Cold (15ft cone)",
        }),
        gem_ancestry_dragonborn: await db.createRaceTrait({
            id: "race-trait-gem-ancestry-dragonborn",
            name: "Gem Ancestry",
            description: "You have draconic ancestry of your chosen gem, which determines your resistance and breathe weapon type.\n\tAmethyst: Force (15ft cone)\n\tCrystal: Radiant (5 by 30ft line)\n\tEmerald: Psychic (15ft cone)\n\tSapphire: Thunder (5 by 30ft line)\n\tTopaz: Necrotic (5 by 30ft line)",
        })
    }
} */