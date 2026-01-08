/* import { Prisma } from "@prismagen/client";
import * as db from "@lib/db-seed";

type ClassFeaturePayload = Prisma.ClassFeatureGetPayload<{}>;
export interface ClassFeatures {
    artificer_magical_tinkering: ClassFeaturePayload;
    artificer_infuse_item: ClassFeaturePayload;
    artificer_spellcasting: ClassFeaturePayload;
    artificer_tool_expertise: ClassFeaturePayload;
    artificer_alchemist_experimental_elixir: ClassFeaturePayload;
    artificer_alchemist_healing_word: ClassFeaturePayload;
    artificer_alchemist_alchemical_savant: ClassFeaturePayload;
    artificer_armorer_arcane_armor: ClassFeaturePayload;
    artificer_armorer_armor_model: ClassFeaturePayload;
    artificer_armorer_extra_attack: ClassFeaturePayload;
    artificer_artillerist_eldritch_cannons: ClassFeaturePayload;
    artificer_artillerist_arcane_firearm: ClassFeaturePayload;
    artificer_artillerist_explosive_cannon: ClassFeaturePayload;
    artificer_battle_smith_steel_defender: ClassFeaturePayload;
    artificer_battle_smith_battle_ready: ClassFeaturePayload;
    artificer_battle_smith_extra_attack: ClassFeaturePayload;
    barbarian_rage: ClassFeaturePayload;
    barbarian_unarmored_defense: ClassFeaturePayload;
    barbarian_reckless_attack: ClassFeaturePayload;
    barbarian_extra_attack: ClassFeaturePayload;
    barbarian_path_of_the_ancestral_guardian_ancestral_protectors: ClassFeaturePayload;
    barbarian_path_of_the_ancestral_guardian_spirit_shield: ClassFeaturePayload;
    barbarian_path_of_the_ancestral_guardian_consult_the_spirits: ClassFeaturePayload;
    barbarian_path_of_the_beast_form_of_the_beast: ClassFeaturePayload;
    barbarian_path_of_the_beast_bestial_soul: ClassFeaturePayload;
    barbarian_path_of_the_beast_infectious_fury: ClassFeaturePayload;
    barbarian_path_of_the_berserker_frenzy: ClassFeaturePayload;
    barbarian_path_of_the_berserker_mindless_rage: ClassFeaturePayload;
    barbarian_path_of_the_berserker_intimidating_presence: ClassFeaturePayload;
    barbarian_path_of_the_storm_herald_storm_aura: ClassFeaturePayload;
    barbarian_path_of_the_storm_herald_storm_soul: ClassFeaturePayload;
    barbarian_path_of_the_storm_herald_shielding_storm: ClassFeaturePayload;
    barbarian_path_of_the_totem_warrior_totem_spirit: ClassFeaturePayload;
    barbarian_path_of_the_totem_warrior_aspect_of_the_beast: ClassFeaturePayload;
    barbarian_path_of_the_totem_warrior_totemic_attunement: ClassFeaturePayload;
    barbarian_path_of_the_zealot_divine_fury: ClassFeaturePayload;
    barbarian_path_of_the_zealot_warrior_of_the_gods: ClassFeaturePayload;
    barbarian_path_of_the_zealot_zealous_presence: ClassFeaturePayload;
    barbarian_path_of_the_battlerager_battlerager_armor: ClassFeaturePayload;
    barbarian_path_of_the_battlerager_reckless_abandon: ClassFeaturePayload;
    barbarian_path_of_the_battlerager_battlerager_charge: ClassFeaturePayload;
    barbarian_path_of_the_giant_giants_might: ClassFeaturePayload;
    barbarian_path_of_the_giant_elemental_cleaver: ClassFeaturePayload;
    barbarian_path_of_the_giant_mighty_impel: ClassFeaturePayload;
    barbarian_path_of_wild_magic_magic_awareness: ClassFeaturePayload;
    barbarian_path_of_wild_magic_wild_surge: ClassFeaturePayload;
    barbarian_path_of_wild_magic_bolstering_magic: ClassFeaturePayload;
    bard_spellcasting: ClassFeaturePayload;
    bard_bardic_inspiration: ClassFeaturePayload;
    bard_jack_of_all_trades: ClassFeaturePayload;
    bard_expertise: ClassFeaturePayload;
    bard_college_of_creation_note_of_potential: ClassFeaturePayload;
    bard_college_of_creation_performance_of_creation: ClassFeaturePayload;
    bard_college_of_creation_animating_performance: ClassFeaturePayload;
    bard_college_of_eloquence_silver_tongue: ClassFeaturePayload;
    bard_college_of_eloquence_unsettling_words: ClassFeaturePayload;
    bard_college_of_eloquence_universal_speech: ClassFeaturePayload;
    bard_college_of_glamour_mantle_of_inspiration: ClassFeaturePayload;
    bard_college_of_glamour_enthralling_performance: ClassFeaturePayload;
    bard_college_of_glamour_mantle_of_majesty: ClassFeaturePayload;
    bard_college_of_lore_cutting_words: ClassFeaturePayload;
    bard_college_of_lore_additional_magical_secrets: ClassFeaturePayload;
    bard_college_of_lore_peerless_skill: ClassFeaturePayload;
    bard_college_of_spirits_guiding_whispers: ClassFeaturePayload;
    bard_college_of_spirits_spirit_session: ClassFeaturePayload;
    bard_college_of_spirits_tales_from_beyond: ClassFeaturePayload;
    bard_college_of_swords_fighting_style: ClassFeaturePayload;
    bard_college_of_swords_blade_flourish: ClassFeaturePayload;
    bard_college_of_swords_extra_attack: ClassFeaturePayload;
    bard_college_of_valor_combat_inspiration: ClassFeaturePayload;
    bard_college_of_valor_medium_armor_and_shields: ClassFeaturePayload;
    bard_college_of_valor_extra_attack: ClassFeaturePayload;
    bard_college_of_whispers_psychic_blades: ClassFeaturePayload;
    bard_college_of_whispers_words_of_terror: ClassFeaturePayload;
    bard_college_of_whispers_mantle_of_whispers: ClassFeaturePayload;
    cleric_spellcasting: ClassFeaturePayload;
    cleric_divine_domain: ClassFeaturePayload;
    cleric_channel_divinity: ClassFeaturePayload;
    cleric_destroy_undead: ClassFeaturePayload;
    cleric_forge_domain_blessing_of_the_forge: ClassFeaturePayload;
    cleric_forge_domain_channel_divinity_artisans_blessing: ClassFeaturePayload;
    cleric_forge_domain_soul_of_the_forge: ClassFeaturePayload;
    cleric_life_domain_disciple_of_life: ClassFeaturePayload;
    cleric_life_domain_channel_divinity_preserve_life: ClassFeaturePayload;
    cleric_life_domain_blessed_healer: ClassFeaturePayload;
    cleric_war_domain_war_priest: ClassFeaturePayload;
    cleric_war_domain_channel_divinity_guided_strike: ClassFeaturePayload;
    cleric_war_domain_war_domain_spells: ClassFeaturePayload;
    cleric_tempest_domain_wrath_of_the_storm: ClassFeaturePayload;
    cleric_tempest_domain_channel_divinity_destructive_wrath: ClassFeaturePayload;
    cleric_tempest_domain_thunderbolt_strike: ClassFeaturePayload;
    cleric_light_domain_warding_flare: ClassFeaturePayload;
    cleric_light_domain_channel_divinity_radiance_of_the_dawn: ClassFeaturePayload;
    cleric_light_domain_potent_spellcasting: ClassFeaturePayload;
    cleric_nature_domain_acolyte_of_nature: ClassFeaturePayload;
    cleric_nature_domain_channel_divinity_charm_animals_and_plants: ClassFeaturePayload;
    cleric_nature_domain_dampen_elements: ClassFeaturePayload;
    cleric_trickery_domain_blessing_of_the_trickster: ClassFeaturePayload;
    cleric_trickery_domain_channel_divinity_invoke_duplicity: ClassFeaturePayload;
    cleric_trickery_domain_cloak_of_shadows: ClassFeaturePayload;
    druid_druidcraft: ClassFeaturePayload;
    druid_spellcasting: ClassFeaturePayload;
    druid_wild_shape: ClassFeaturePayload;
    druid_druid_circle: ClassFeaturePayload;
    druid_circle_of_the_land_bonus_cantrip: ClassFeaturePayload;
    druid_circle_of_the_land_natural_recovery: ClassFeaturePayload;
    druid_circle_of_the_land_circle_spells: ClassFeaturePayload;
    druid_circle_of_the_moon_combat_wild_shape: ClassFeaturePayload;
    druid_circle_of_the_moon_circle_forms: ClassFeaturePayload;
    druid_circle_of_the_moon_primal_strike: ClassFeaturePayload;
    druid_circle_of_wildfire_summon_wildfire_spirit: ClassFeaturePayload;
    druid_circle_of_wildfire_enhanced_bond: ClassFeaturePayload;
    druid_circle_of_wildfire_circle_spells: ClassFeaturePayload;
    fighter_fighting_style: ClassFeaturePayload;
    fighter_second_wind: ClassFeaturePayload;
    fighter_action_surge: ClassFeaturePayload;
    fighter_extra_attack: ClassFeaturePayload;
    fighter_champion_improved_critical: ClassFeaturePayload;
    fighter_champion_remarkable_athlete: ClassFeaturePayload;
    fighter_champion_additional_fighting_style: ClassFeaturePayload;
    fighter_battle_master_combat_superiority: ClassFeaturePayload;
    fighter_battle_master_maneuvers: ClassFeaturePayload;
    fighter_battle_master_know_your_enemy: ClassFeaturePayload;
    fighter_eldritch_knight_spellcasting: ClassFeaturePayload;
    fighter_eldritch_knight_weapon_bond: ClassFeaturePayload;
    fighter_eldritch_knight_war_magic: ClassFeaturePayload;
    monk_unarmored_defense: ClassFeaturePayload;
    monk_martial_arts: ClassFeaturePayload;
    monk_ki: ClassFeaturePayload;
    monk_unarmored_movement: ClassFeaturePayload;
    monk_way_of_the_open_hand_open_hand_technique: ClassFeaturePayload;
    monk_way_of_the_open_hand_wholeness_of_body: ClassFeaturePayload;
    monk_way_of_the_open_hand_tranquility: ClassFeaturePayload;
    monk_way_of_shadow_shadow_arts: ClassFeaturePayload;
    monk_way_of_shadow_shadow_step: ClassFeaturePayload;
    monk_way_of_shadow_cloak_of_shadows: ClassFeaturePayload;
    monk_way_of_the_four_elements_elemental_disciplines: ClassFeaturePayload;
    monk_way_of_the_four_elements_additional_disciplines: ClassFeaturePayload;
    monk_way_of_the_four_elements_elemental_mastery: ClassFeaturePayload;
    paladin_divine_sense: ClassFeaturePayload;
    paladin_lay_on_hands: ClassFeaturePayload;
    paladin_divine_smite: ClassFeaturePayload;
    paladin_sacred_oath: ClassFeaturePayload;
    paladin_oath_of_devotion_sacred_weapon: ClassFeaturePayload;
    paladin_oath_of_devotion_turn_the_unholy: ClassFeaturePayload;
    paladin_oath_of_devotion_aura_of_devotion: ClassFeaturePayload;
    paladin_oath_of_the_ancients_natures_wrath: ClassFeaturePayload;
    paladin_oath_of_the_ancients_turn_the_faithless: ClassFeaturePayload;
    paladin_oath_of_the_ancients_aura_of_warding: ClassFeaturePayload;
    paladin_oath_of_vengeance_abjure_enemy: ClassFeaturePayload;
    paladin_oath_of_vengeance_vow_of_enmity: ClassFeaturePayload;
    paladin_oath_of_vengeance_relentless_avenger: ClassFeaturePayload;
    paladin_oath_of_the_crown_channel_divinity_champion_challenge: ClassFeaturePayload;
    paladin_oath_of_the_crown_channel_divinity_turn_the_tide: ClassFeaturePayload;
    paladin_oath_of_the_crown_divine_allegiance: ClassFeaturePayload;
    paladin_oath_of_the_crown_unbreakable_majesty: ClassFeaturePayload;
    ranger_favored_enemy: ClassFeaturePayload;
    ranger_natural_explorer: ClassFeaturePayload;
    ranger_spellcasting: ClassFeaturePayload;
    ranger_ranger_archetype: ClassFeaturePayload;
    ranger_hunter_hunters_prey: ClassFeaturePayload;
    ranger_hunter_defensive_tactics: ClassFeaturePayload;
    ranger_hunter_multiattack: ClassFeaturePayload;
    ranger_beast_master_rangers_companion: ClassFeaturePayload;
    ranger_beast_master_exceptional_training: ClassFeaturePayload;
    ranger_beast_master_bestial_fury: ClassFeaturePayload;
    ranger_gloom_stalker_dread_ambusher: ClassFeaturePayload;
    ranger_gloom_stalker_umbral_sight: ClassFeaturePayload;
    ranger_gloom_stalker_iron_mind: ClassFeaturePayload;
    rogue_expertise: ClassFeaturePayload;
    rogue_sneak_attack: ClassFeaturePayload;
    rogue_thieves_cant: ClassFeaturePayload;
    rogue_cunning_action: ClassFeaturePayload;
    rogue_thief_fast_hands: ClassFeaturePayload;
    rogue_thief_second_story_work: ClassFeaturePayload;
    rogue_thief_use_magic_device: ClassFeaturePayload;
    rogue_assassin_bonus_proficiencies: ClassFeaturePayload;
    rogue_assassin_assassinate: ClassFeaturePayload;
    rogue_assassin_infiltration_expertise: ClassFeaturePayload;
    rogue_arcane_trickster_spellcasting: ClassFeaturePayload;
    rogue_arcane_trickster_mage_hand_legerdemain: ClassFeaturePayload;
    rogue_arcane_trickster_magical_ambush: ClassFeaturePayload;
    sorcerer_spellcasting: ClassFeaturePayload;
    sorcerer_sorcerous_origin: ClassFeaturePayload;
    sorcerer_font_of_magic: ClassFeaturePayload;
    sorcerer_metamagic: ClassFeaturePayload;
    sorcerer_draconic_bloodline_dragon_ancestor: ClassFeaturePayload;
    sorcerer_draconic_bloodline_draconic_resilience: ClassFeaturePayload;
    sorcerer_draconic_bloodline_elemental_affinity: ClassFeaturePayload;
    sorcerer_wild_magic_wild_magic_surge: ClassFeaturePayload;
    sorcerer_wild_magic_tides_of_chaos: ClassFeaturePayload;
    sorcerer_wild_magic_bend_luck: ClassFeaturePayload;
    sorcerer_divine_soul_divine_magic: ClassFeaturePayload;
    sorcerer_divine_soul_favored_by_the_gods: ClassFeaturePayload;
    sorcerer_divine_soul_empowered_healing: ClassFeaturePayload;
    warlock_otherworldly_patron: ClassFeaturePayload;
    warlock_pact_magic: ClassFeaturePayload;
    warlock_eldritch_invocations: ClassFeaturePayload;
    warlock_pact_boon: ClassFeaturePayload;
    warlock_the_fiend_dark_ones_blessing: ClassFeaturePayload;
    warlock_the_fiend_dark_ones_own_luck: ClassFeaturePayload;
    warlock_the_fiend_fiendish_resilience: ClassFeaturePayload;
    warlock_the_archfey_fey_presence: ClassFeaturePayload;
    warlock_the_archfey_misty_escape: ClassFeaturePayload;
    warlock_the_archfey_beguiling_defenses: ClassFeaturePayload;
    warlock_the_great_old_one_telepathic_communication: ClassFeaturePayload;
    warlock_the_great_old_one_entropic_ward: ClassFeaturePayload;
    warlock_the_great_old_one_thought_shield: ClassFeaturePayload;
    wizard_spellcasting: ClassFeaturePayload;
    wizard_arcane_recovery: ClassFeaturePayload;
    wizard_arcane_tradition: ClassFeaturePayload;
    wizard_spell_mastery: ClassFeaturePayload;
    wizard_school_of_evocation_sculpt_spells: ClassFeaturePayload;
    wizard_school_of_evocation_potent_cantrip: ClassFeaturePayload;
    wizard_school_of_evocation_empowered_evocation: ClassFeaturePayload;
    wizard_school_of_illusion_improved_minor_illusion: ClassFeaturePayload;
    wizard_school_of_illusion_malleable_illusions: ClassFeaturePayload;
    wizard_school_of_illusion_illusory_reality: ClassFeaturePayload;
    wizard_school_of_divination_portent: ClassFeaturePayload;
    wizard_school_of_divination_expert_divination: ClassFeaturePayload;
    wizard_school_of_divination_the_third_eye: ClassFeaturePayload;
    tactician_perfect_plan: ClassFeaturePayload;
    tactician_intelligent_defense: ClassFeaturePayload;
    tactician_analyze: ClassFeaturePayload;
    tactician_strategic_focus: ClassFeaturePayload;
    tactician_tactical_command: ClassFeaturePayload;
    tactician_battlefield_control: ClassFeaturePayload;
    tactician_grandmaster_strategic_planning: ClassFeaturePayload;
    tactician_grandmaster_battlefield_survey: ClassFeaturePayload;
    tactician_grandmaster_grand_strategy: ClassFeaturePayload;
    tactician_mentalist_telepathic_link: ClassFeaturePayload;
    tactician_mentalist_mind_reading: ClassFeaturePayload;
    tactician_mentalist_psychic_command: ClassFeaturePayload;
    tactician_scholar_tactical_knowledge: ClassFeaturePayload;
    tactician_scholar_research_and_development: ClassFeaturePayload;
    tactician_scholar_master_tactician: ClassFeaturePayload;
    tactician_war_mind_combat_analysis: ClassFeaturePayload;
    tactician_war_mind_battlefield_presence: ClassFeaturePayload;
    tactician_war_mind_war_leader: ClassFeaturePayload;
    cleric_arcana_domain_arcane_initiate: ClassFeaturePayload;
    cleric_arcana_domain_spell_breaker: ClassFeaturePayload;
    cleric_arcana_domain_arcane_mastery: ClassFeaturePayload;
    cleric_death_domain_reaper: ClassFeaturePayload;
    cleric_death_domain_touch_of_death: ClassFeaturePayload;
    cleric_death_domain_divinity_of_death: ClassFeaturePayload;
    cleric_grave_domain_circle_of_mortality: ClassFeaturePayload;
    cleric_grave_domain_path_to_the_grave: ClassFeaturePayload;
    cleric_grave_domain_sentinel_at_deaths_door: ClassFeaturePayload;
    cleric_knowledge_domain_blessings_of_knowledge: ClassFeaturePayload;
    cleric_knowledge_domain_knowledge_of_the_ages: ClassFeaturePayload;
    cleric_knowledge_domain_visions_of_the_past: ClassFeaturePayload;
    cleric_order_domain_orders_demand: ClassFeaturePayload;
    cleric_order_domain_orders_wrath: ClassFeaturePayload;
    cleric_order_domain_embodiment_of_the_law: ClassFeaturePayload;
    cleric_peace_domain_emboldening_bond: ClassFeaturePayload;
    cleric_peace_domain_shield_of_serenity: ClassFeaturePayload;
    cleric_peace_domain_protective_bond: ClassFeaturePayload;
    cleric_twilight_domain_vigilant_blessing: ClassFeaturePayload;
    cleric_twilight_domain_twilight_sanctuary: ClassFeaturePayload;
    cleric_twilight_domain_divinity_of_twilight: ClassFeaturePayload;
    druid_circle_of_dreams_balm_of_the_summer_court: ClassFeaturePayload;
    druid_circle_of_dreams_hearth_of_moonlight: ClassFeaturePayload;
    druid_circle_of_dreams_hidden_paths: ClassFeaturePayload;
    druid_circle_of_the_shepherd_speech_of_the_woods: ClassFeaturePayload;
    druid_circle_of_the_shepherd_spirit_totem: ClassFeaturePayload;
    druid_circle_of_the_shepherd_faithful_summons: ClassFeaturePayload;
    druid_circle_of_spores_halo_of_spores: ClassFeaturePayload;
    druid_circle_of_spores_symbiotic_entity: ClassFeaturePayload;
    druid_circle_of_spores_fungal_infestation: ClassFeaturePayload;
    druid_circle_of_stars_starry_form: ClassFeaturePayload;
    druid_circle_of_stars_cosmic_omen: ClassFeaturePayload;
    druid_circle_of_stars_full_of_stars: ClassFeaturePayload;
    fighter_arcane_archer_arcane_archer_lore: ClassFeaturePayload;
    fighter_arcane_archer_arcane_shot: ClassFeaturePayload;
    fighter_arcane_archer_magic_arrow: ClassFeaturePayload;
    fighter_cavalier_born_to_the_saddle: ClassFeaturePayload;
    fighter_cavalier_unwavering_mark: ClassFeaturePayload;
    fighter_cavalier_hold_the_line: ClassFeaturePayload;
    fighter_echo_knight_manifest_echo: ClassFeaturePayload;
    fighter_echo_knight_unleash_incarnation: ClassFeaturePayload;
    fighter_echo_knight_echo_avatar: ClassFeaturePayload;
    fighter_psi_warrior_psi_energy_blade: ClassFeaturePayload;
    fighter_psi_warrior_psychic_shove: ClassFeaturePayload;
    fighter_psi_warrior_telekinetic_strike: ClassFeaturePayload;
    fighter_rune_knight_rune_carver: ClassFeaturePayload;
    fighter_rune_knight_giants_might: ClassFeaturePayload;
    fighter_rune_knight_runic_shield: ClassFeaturePayload;
    fighter_samurai_fighting_spirit: ClassFeaturePayload;
    fighter_samurai_elegant_courtier: ClassFeaturePayload;
    fighter_samurai_rapid_strike: ClassFeaturePayload;
    monk_way_of_the_astral_self_arms_of_the_astral_self: ClassFeaturePayload;
    monk_way_of_the_astral_self_visage_of_the_astral_self: ClassFeaturePayload;
    monk_way_of_the_astral_self_body_of_the_astral_self: ClassFeaturePayload;
    monk_way_of_the_ascendant_dragon_dragons_breath: ClassFeaturePayload;
    monk_way_of_the_ascendant_dragon_draconic_presence: ClassFeaturePayload;
    monk_way_of_the_ascendant_dragon_breath_of_the_dragon: ClassFeaturePayload;
    monk_way_of_the_drunken_master_drunken_technique: ClassFeaturePayload;
    monk_way_of_the_drunken_master_tipsy_sway: ClassFeaturePayload;
    monk_way_of_the_drunken_master_intoxicated_frenzy: ClassFeaturePayload;
    monk_way_of_the_kensei_path_of_the_kensei: ClassFeaturePayload;
    monk_way_of_the_kensei_agile_parry: ClassFeaturePayload;
    monk_way_of_the_kensei_one_with_the_blade: ClassFeaturePayload;
    monk_way_of_the_long_death_touch_of_death: ClassFeaturePayload;
    monk_way_of_the_long_death_hour_of_reaping: ClassFeaturePayload;
    monk_way_of_the_long_death_mastery_of_death: ClassFeaturePayload;
    monk_way_of_mercy_hand_of_healing: ClassFeaturePayload;
    monk_way_of_mercy_physicians_touch: ClassFeaturePayload;
    monk_way_of_mercy_hand_of_ultimate_mercy: ClassFeaturePayload;
    monk_way_of_the_sun_soul_radiant_sun_bolt: ClassFeaturePayload;
    monk_way_of_the_sun_soul_searing_arc_strike: ClassFeaturePayload;
    monk_way_of_the_sun_soul_searing_sunburst: ClassFeaturePayload;
    paladin_oath_of_conquest_conquering_presence: ClassFeaturePayload;
    paladin_oath_of_conquest_guided_strike: ClassFeaturePayload;
    paladin_oath_of_conquest_scornful_rebuke: ClassFeaturePayload;
    paladin_oath_of_glory_inspiring_smite: ClassFeaturePayload;
    paladin_oath_of_glory_peerless_athlete: ClassFeaturePayload;
    paladin_oath_of_glory_glorious_defense: ClassFeaturePayload;
    paladin_oath_of_redemption_emissary_of_peace: ClassFeaturePayload;
    paladin_oath_of_redemption_rebuke_the_violent: ClassFeaturePayload;
    paladin_oath_of_redemption_protective_spirit: ClassFeaturePayload;
    paladin_oath_of_the_watchers_watchers_will: ClassFeaturePayload;
    paladin_oath_of_the_watchers_vigilant_rebuke: ClassFeaturePayload;
    paladin_oath_of_the_watchers_aura_of_the_sentinel: ClassFeaturePayload;
    ranger_drakewarden_drake_companion: ClassFeaturePayload;
    ranger_drakewarden_draconic_might: ClassFeaturePayload;
    ranger_drakewarden_draconic_crescent: ClassFeaturePayload;
    ranger_fey_wanderer_additional_march: ClassFeaturePayload;
    ranger_fey_wanderer_dreadful_glare: ClassFeaturePayload;
    ranger_fey_wanderer_beguiling_twist: ClassFeaturePayload;
    ranger_horizon_walker_detect_portal: ClassFeaturePayload;
    ranger_horizon_walker_ethereal_step: ClassFeaturePayload;
    ranger_horizon_walker_step_the_planes: ClassFeaturePayload;
    ranger_monster_slayer_slayers_eye: ClassFeaturePayload;
    ranger_monster_slayer_slayers_prey: ClassFeaturePayload;
    ranger_monster_slayer_supernatural_defense: ClassFeaturePayload;
    ranger_swarmkeeper_gathered_swarm: ClassFeaturePayload;
    ranger_swarmkeeper_writhing_tide: ClassFeaturePayload;
    ranger_swarmkeeper_swarmkeepers_fury: ClassFeaturePayload;
    rogue_inquisitive_ear_for_deceit: ClassFeaturePayload;
    rogue_inquisitive_eye_for_detail: ClassFeaturePayload;
    rogue_inquisitive_unerring_eye: ClassFeaturePayload;
    rogue_mastermind_master_of_intrigue: ClassFeaturePayload;
    rogue_mastermind_master_of_tactics: ClassFeaturePayload;
    rogue_mastermind_soul_of_deceit: ClassFeaturePayload;
    rogue_phantom_wails_from_the_grave: ClassFeaturePayload;
    rogue_phantom_tokens_of_the_departed: ClassFeaturePayload;
    rogue_phantom_ghost_walk: ClassFeaturePayload;
    rogue_scout_skirmisher: ClassFeaturePayload;
    rogue_scout_survivalist: ClassFeaturePayload;
    rogue_scout_sudden_strike: ClassFeaturePayload;
    rogue_soulknife_psychic_blades: ClassFeaturePayload;
    rogue_soulknife_psychic_whispers: ClassFeaturePayload;
    rogue_soulknife_soul_knife: ClassFeaturePayload;
    rogue_swashbuckler_fancy_footwork: ClassFeaturePayload;
    rogue_swashbuckler_rakish_audacity: ClassFeaturePayload;
    rogue_swashbuckler_panache: ClassFeaturePayload;
    sorcerer_aberrant_mind_psionic_spells: ClassFeaturePayload;
    sorcerer_aberrant_mind_mind_thrust: ClassFeaturePayload;
    sorcerer_aberrant_mind_bend_mind: ClassFeaturePayload;
    sorcerer_clockwork_soul_clockwork_magic: ClassFeaturePayload;
    sorcerer_clockwork_soul_restore_balance: ClassFeaturePayload;
    sorcerer_clockwork_soul_trance_of_order: ClassFeaturePayload;
    sorcerer_lunar_sorcery_moonfire: ClassFeaturePayload;
    sorcerer_lunar_sorcery_lunar_magic: ClassFeaturePayload;
    sorcerer_lunar_sorcery_diffusing_evasion: ClassFeaturePayload;
    sorcerer_shadow_magic_eyes_of_the_dark: ClassFeaturePayload;
    sorcerer_shadow_magic_strength_of_the_grave: ClassFeaturePayload;
    sorcerer_shadow_magic_shadow_walk: ClassFeaturePayload;
    sorcerer_storm_sorcery_tempestuous_magic: ClassFeaturePayload;
    sorcerer_storm_sorcery_heart_of_the_storm: ClassFeaturePayload;
    sorcerer_storm_sorcery_storms_fury: ClassFeaturePayload;
    warlock_the_celestial_bonus_cantrips: ClassFeaturePayload;
    warlock_the_celestial_healing_light: ClassFeaturePayload;
    warlock_the_celestial_radiant_soul: ClassFeaturePayload;
    warlock_the_fathomless_tentacle_of_the_deeps: ClassFeaturePayload;
    warlock_the_fathomless_gift_of_the_sea: ClassFeaturePayload;
    warlock_the_fathomless_guardian_coil: ClassFeaturePayload;
    warlock_the_genie_genies_vessel: ClassFeaturePayload;
    warlock_the_genie_elemental_gift: ClassFeaturePayload;
    warlock_the_genie_protective_benefaction: ClassFeaturePayload;
    warlock_the_hexblade_hex_warrior: ClassFeaturePayload;
    warlock_the_hexblade_hexblades_curse: ClassFeaturePayload;
    warlock_the_hexblade_accursed_specter: ClassFeaturePayload;
    warlock_the_undead_form_of_dread: ClassFeaturePayload;
    warlock_the_undead_ghostly_gaze: ClassFeaturePayload;
    warlock_the_undead_defy_death: ClassFeaturePayload;
    warlock_the_undying_among_the_dead: ClassFeaturePayload;
    warlock_the_undying_defy_death: ClassFeaturePayload;
    warlock_the_undying_undying_nature: ClassFeaturePayload;
    wizard_school_of_abjuration_arcane_ward: ClassFeaturePayload;
    wizard_school_of_abjuration_projected_ward: ClassFeaturePayload;
    wizard_school_of_abjuration_improved_abjuration: ClassFeaturePayload;
    wizard_school_of_bladesinging_training_in_war_and_song: ClassFeaturePayload;
    wizard_school_of_bladesinging_bladesong: ClassFeaturePayload;
    wizard_school_of_bladesinging_extra_attack: ClassFeaturePayload;
    wizard_school_of_chronurgy_chronal_shift: ClassFeaturePayload;
    wizard_school_of_chronurgy_momentary_stasis: ClassFeaturePayload;
    wizard_school_of_chronurgy_convergent_future: ClassFeaturePayload;
    wizard_school_of_conjuration_minor_conjuration: ClassFeaturePayload;
    wizard_school_of_conjuration_benign_transposition: ClassFeaturePayload;
    wizard_school_of_conjuration_focused_conjuration: ClassFeaturePayload;
    wizard_school_of_enchantment_hypnotic_gaze: ClassFeaturePayload;
    wizard_school_of_enchantment_instinctive_charm: ClassFeaturePayload;
    wizard_school_of_enchantment_split_enchantment: ClassFeaturePayload;
    wizard_school_of_graviturgy_adjust_density: ClassFeaturePayload;
    wizard_school_of_graviturgy_gravity_well: ClassFeaturePayload;
    wizard_school_of_graviturgy_mighty_leap: ClassFeaturePayload;
    wizard_school_of_necromancy_grim_harvest: ClassFeaturePayload;
    wizard_school_of_necromancy_undead_thralls: ClassFeaturePayload;
    wizard_school_of_necromancy_inured_to_undeath: ClassFeaturePayload;
    wizard_order_of_scribes_wizardly_quill: ClassFeaturePayload;
    wizard_order_of_scribes_awakened_spellbook: ClassFeaturePayload;
    wizard_order_of_scribes_manifest_mind: ClassFeaturePayload;
    wizard_school_of_transmutation_minor_alchemy: ClassFeaturePayload;
    wizard_school_of_transmutation_transmuters_stone: ClassFeaturePayload;
    wizard_school_of_transmutation_shapechanger: ClassFeaturePayload;
    wizard_war_magic_arcane_deflection: ClassFeaturePayload;
    wizard_war_magic_tactical_wit: ClassFeaturePayload;
    wizard_war_magic_power_surge: ClassFeaturePayload;
}

export async function seedClassFeatures(): Promise<ClassFeatures> {
    return {
        artificer_magical_tinkering: await db.createClassFeature({
            id: "class-feature-artificer-magical-tinkering",
            name: "Magical Tinkering",
            level: 1,
            description: "Create tiny magical objects that produce minor effects",
        }),
        artificer_infuse_item: await db.createClassFeature({
            id: "class-feature-artificer-infuse-item",
            name: "Infuse Item",
            level: 2,
            description: "Imbue mundane items with magical properties",
        }),
        artificer_spellcasting: await db.createClassFeature({
            id: "class-feature-artificer-spellcasting",
            name: "Spellcasting",
            level: 1,
            description: "Half-caster using tools as spellcasting focus",
        }),
        artificer_tool_expertise: await db.createClassFeature({
            id: "class-feature-artificer-tool-expertise",
            name: "Tool Expertise",
            level: 6,
            description: "Double proficiency bonus with tool checks",
        }),
        artificer_alchemist_experimental_elixir: await db.createClassFeature({
            id: "class-feature-artificer-alchemist-experimental-elixir",
            name: "Experimental Elixir",
            level: 3,
            description: "Create random beneficial potions each day",
        }),
        artificer_alchemist_healing_word: await db.createClassFeature({
            id: "class-feature-artificer-alchemist-healing-word",
            name: "Healing Word",
            level: 3,
            description: "Always prepared spell for emergency healing",
        }),
        artificer_alchemist_alchemical_savant: await db.createClassFeature({
            id: "class-feature-artificer-alchemist-alchemical-savant",
            name: "Alchemical Savant",
            level: 5,
            description: "Add INT modifier to spell damage and healing",
        }),
        artificer_armorer_arcane_armor: await db.createClassFeature({
            id: "class-feature-artificer-armorer-arcane-armor",
            name: "Arcane Armor",
            level: 3,
            description: "Transform armor into magical suit with special properties",
        }),
        artificer_armorer_armor_model: await db.createClassFeature({
            id: "class-feature-artificer-armorer-armor-model",
            name: "Armor Model",
            level: 3,
            description: "Choose between Guardian (tank) or Infiltrator (stealth) modes",
        }),
        artificer_armorer_extra_attack: await db.createClassFeature({
            id: "class-feature-artificer-armorer-extra-attack",
            name: "Extra Attack",
            level: 5,
            description: "Make two attacks when you take the Attack action",
        }),
        artificer_artillerist_eldritch_cannons: await db.createClassFeature({
            id: "class-feature-artificer-artillerist-eldritch-cannons",
            name: "Eldritch Cannons",
            level: 3,
            description: "Create magical turrets for offense, defense, or support",
        }),
        artificer_artillerist_arcane_firearm: await db.createClassFeature({
            id: "class-feature-artificer-artillerist-arcane-firearm",
            name: "Arcane Firearm",
            level: 5,
            description: "Enhanced damage with artificer spells using wands or rods",
        }),
        artificer_artillerist_explosive_cannon: await db.createClassFeature({
            id: "class-feature-artificer-artillerist-explosive-cannon",
            name: "Explosive Cannon",
            level: 9,
            description: "Sacrifice cannons for explosive damage",
        }),
        artificer_battle_smith_steel_defender: await db.createClassFeature({
            id: "class-feature-artificer-battle-smith-steel-defender",
            name: "Steel Defender",
            level: 3,
            description: "Mechanical companion that fights alongside you",
        }),
        artificer_battle_smith_battle_ready: await db.createClassFeature({
            id: "class-feature-artificer-battle-smith-battle-ready",
            name: "Battle Ready",
            level: 3,
            description: "Use INT for weapon attacks and gain martial weapon proficiency",
        }),
        artificer_battle_smith_extra_attack: await db.createClassFeature({
            id: "class-feature-artificer-battle-smith-extra-attack",
            name: "Extra Attack",
            level: 5,
            description: "Make two attacks when you take the Attack action",
        }),
        barbarian_rage: await db.createClassFeature({
            id: "class-feature-barbarian-rage",
            name: "Rage",
            level: 1,
            description: "Enter a battle fury for damage bonus and damage resistance",
        }),
        barbarian_unarmored_defense: await db.createClassFeature({
            id: "class-feature-barbarian-unarmored-defense",
            name: "Unarmored Defense",
            level: 1,
            description: "AC equals 10 + Dex modifier + Con modifier while unarmored",
        }),
        barbarian_reckless_attack: await db.createClassFeature({
            id: "class-feature-barbarian-reckless-attack",
            name: "Reckless Attack",
            level: 2,
            description: "Gain advantage on attacks but enemies have advantage against you",
        }),
        barbarian_extra_attack: await db.createClassFeature({
            id: "class-feature-barbarian-extra-attack",
            name: "Extra Attack",
            level: 5,
            description: "Make two attacks when you take the Attack action",
        }),
        barbarian_path_of_the_ancestral_guardian_ancestral_protectors: await db.createClassFeature({
            id: "class-feature-barbarian-path-of-the-ancestral-guardian-ancestral-protectors",
            name: "Ancestral Protectors",
            level: 3,
            description: "Ancestors reduce damage to allies and hinder your targets",
        }),
        barbarian_path_of_the_ancestral_guardian_spirit_shield: await db.createClassFeature({
            id: "class-feature-barbarian-path-of-the-ancestral-guardian-spirit-shield",
            name: "Spirit Shield",
            level: 6,
            description: "Use reaction to reduce damage to nearby allies",
        }),
        barbarian_path_of_the_ancestral_guardian_consult_the_spirits: await db.createClassFeature({
            id: "class-feature-barbarian-path-of-the-ancestral-guardian-consult-the-spirits",
            name: "Consult The Spirits",
            level: 10,
            description: "Cast augury or clairvoyance as rituals",
        }),
        barbarian_path_of_the_beast_form_of_the_beast: await db.createClassFeature({
            id: "class-feature-barbarian-path-of-the-beast-form-of-the-beast",
            name: "Form Of The Beast",
            level: 3,
            description: "Grow natural weapons when you rage: bite, claws, or tail",
        }),
        barbarian_path_of_the_beast_bestial_soul: await db.createClassFeature({
            id: "class-feature-barbarian-path-of-the-beast-bestial-soul",
            name: "Bestial Soul",
            level: 6,
            description: "Gain climbing, swimming speed or enhanced jumping",
        }),
        barbarian_path_of_the_beast_infectious_fury: await db.createClassFeature({
            id: "class-feature-barbarian-path-of-the-beast-infectious-fury",
            name: "Infectious Fury",
            level: 10,
            description: "Spread your bestial rage to allies",
        }),
        barbarian_path_of_the_berserker_frenzy: await db.createClassFeature({
            id: "class-feature-barbarian-path-of-the-berserker-frenzy",
            name: "Frenzy",
            level: 3,
            description: "Make additional attacks during rage but gain exhaustion",
        }),
        barbarian_path_of_the_berserker_mindless_rage: await db.createClassFeature({
            id: "class-feature-barbarian-path-of-the-berserker-mindless-rage",
            name: "Mindless Rage",
            level: 6,
            description: "Immunity to charm and fear while raging",
        }),
        barbarian_path_of_the_berserker_intimidating_presence: await db.createClassFeature({
            id: "class-feature-barbarian-path-of-the-berserker-intimidating-presence",
            name: "Intimidating Presence",
            level: 10,
            description: "Frighten enemies with your ferocity",
        }),
        barbarian_path_of_the_storm_herald_storm_aura: await db.createClassFeature({
            id: "class-feature-barbarian-path-of-the-storm-herald-storm-aura",
            name: "Storm Aura",
            level: 3,
            description: "Choose desert (fire), sea (lightning), or tundra (cold) aura effects",
        }),
        barbarian_path_of_the_storm_herald_storm_soul: await db.createClassFeature({
            id: "class-feature-barbarian-path-of-the-storm-herald-storm-soul",
            name: "Storm Soul",
            level: 6,
            description: "Gain resistance and additional benefits based on your aura",
        }),
        barbarian_path_of_the_storm_herald_shielding_storm: await db.createClassFeature({
            id: "class-feature-barbarian-path-of-the-storm-herald-shielding-storm",
            name: "Shielding Storm",
            level: 10,
            description: "Grant resistance to allies within your aura",
        }),
        barbarian_path_of_the_totem_warrior_totem_spirit: await db.createClassFeature({
            id: "class-feature-barbarian-path-of-the-totem-warrior-totem-spirit",
            name: "Totem Spirit",
            level: 3,
            description: "Choose bear (resistance), eagle (perception), or wolf (pack tactics) totems",
        }),
        barbarian_path_of_the_totem_warrior_aspect_of_the_beast: await db.createClassFeature({
            id: "class-feature-barbarian-path-of-the-totem-warrior-aspect-of-the-beast",
            name: "Aspect Of The Beast",
            level: 6,
            description: "Gain additional totem animal benefits outside of rage",
        }),
        barbarian_path_of_the_totem_warrior_totemic_attunement: await db.createClassFeature({
            id: "class-feature-barbarian-path-of-the-totem-warrior-totemic-attunement",
            name: "Totemic Attunement",
            level: 14,
            description: "Powerful totem abilities that affect combat and exploration",
        }),
        barbarian_path_of_the_zealot_divine_fury: await db.createClassFeature({
            id: "class-feature-barbarian-path-of-the-zealot-divine-fury",
            name: "Divine Fury",
            level: 3,
            description: "Deal extra radiant or necrotic damage while raging",
        }),
        barbarian_path_of_the_zealot_warrior_of_the_gods: await db.createClassFeature({
            id: "class-feature-barbarian-path-of-the-zealot-warrior-of-the-gods",
            name: "Warrior Of The Gods",
            level: 3,
            description: "Spells that restore you to life require no material components",
        }),
        barbarian_path_of_the_zealot_zealous_presence: await db.createClassFeature({
            id: "class-feature-barbarian-path-of-the-zealot-zealous-presence",
            name: "Zealous Presence",
            level: 10,
            description: "Grant allies advantage on attacks and saving throws",
        }),
        barbarian_path_of_the_battlerager_battlerager_armor: await db.createClassFeature({
            id: "class-feature-barbarian-path-of-the-battlerager-battlerager-armor",
            name: "Battlerager Armor",
            level: 3,
            description: "Gain proficiency with spiked armor and can use it as a weapon",
        }),
        barbarian_path_of_the_battlerager_reckless_abandon: await db.createClassFeature({
            id: "class-feature-barbarian-path-of-the-battlerager-reckless-abandon",
            name: "Reckless Abandon",
            level: 3,
            description: "Gain temporary hit points when you use Reckless Attack",
        }),
        barbarian_path_of_the_battlerager_battlerager_charge: await db.createClassFeature({
            id: "class-feature-barbarian-path-of-the-battlerager-battlerager-charge",
            name: "Battlerager Charge",
            level: 6,
            description: "Charge into battle, dealing damage and knocking enemies prone",
        }),
        barbarian_path_of_the_giant_giants_might: await db.createClassFeature({
            id: "class-feature-barbarian-path-of-the-giant-giants-might",
            name: "Giants Might",
            level: 3,
            description: "Grow to Large size when you rage, gaining reach and damage bonuses",
        }),
        barbarian_path_of_the_giant_elemental_cleaver: await db.createClassFeature({
            id: "class-feature-barbarian-path-of-the-giant-elemental-cleaver",
            name: "Elemental Cleaver",
            level: 6,
            description: "Infuse your attacks with elemental damage based on your chosen giant type",
        }),
        barbarian_path_of_the_giant_mighty_impel: await db.createClassFeature({
            id: "class-feature-barbarian-path-of-the-giant-mighty-impel",
            name: "Mighty Impel",
            level: 10,
            description: "Throw enemies or objects with incredible force, dealing damage and knocking them back",
        }),
        barbarian_path_of_wild_magic_magic_awareness: await db.createClassFeature({
            id: "class-feature-barbarian-path-of-wild-magic-magic-awareness",
            name: "Magic Awareness",
            level: 3,
            description: "Sense magic around you as a bonus action and gain advantage on saving throws against spells",
        }),
        barbarian_path_of_wild_magic_wild_surge: await db.createClassFeature({
            id: "class-feature-barbarian-path-of-wild-magic-wild-surge",
            name: "Wild Surge",
            level: 3,
            description: "Trigger random magical effects when you rage, from beneficial to dangerous",
        }),
        barbarian_path_of_wild_magic_bolstering_magic: await db.createClassFeature({
            id: "class-feature-barbarian-path-of-wild-magic-bolstering-magic",
            name: "Bolstering Magic",
            level: 6,
            description: "Grant spell slots or enhance ability checks for allies through your wild magic",
        }),
        bard_spellcasting: await db.createClassFeature({
            id: "class-feature-bard-spellcasting",
            name: "Spellcasting",
            level: 1,
            description: "Full caster with access to spells from any class",
        }),
        bard_bardic_inspiration: await db.createClassFeature({
            id: "class-feature-bard-bardic-inspiration",
            name: "Bardic Inspiration",
            level: 1,
            description: "Grant allies bonus dice to add to their rolls",
        }),
        bard_jack_of_all_trades: await db.createClassFeature({
            id: "class-feature-bard-jack-of-all-trades",
            name: "Jack Of All Trades",
            level: 2,
            description: "Add half proficiency bonus to non-proficient ability checks",
        }),
        bard_expertise: await db.createClassFeature({
            id: "class-feature-bard-expertise",
            name: "Expertise",
            level: 3,
            description: "Double proficiency bonus for chosen skills",
        }),
        bard_college_of_creation_note_of_potential: await db.createClassFeature({
            id: "class-feature-bard-college-of-creation-note-of-potential",
            name: "Note Of Potential",
            level: 3,
            description: "Bardic Inspiration dice can trigger additional effects",
        }),
        bard_college_of_creation_performance_of_creation: await db.createClassFeature({
            id: "class-feature-bard-college-of-creation-performance-of-creation",
            name: "Performance Of Creation",
            level: 3,
            description: "Create nonmagical items through performance",
        }),
        bard_college_of_creation_animating_performance: await db.createClassFeature({
            id: "class-feature-bard-college-of-creation-animating-performance",
            name: "Animating Performance",
            level: 6,
            description: "Bring objects to life as dancing companions",
        }),
        bard_college_of_eloquence_silver_tongue: await db.createClassFeature({
            id: "class-feature-bard-college-of-eloquence-silver-tongue",
            name: "Silver Tongue",
            level: 3,
            description: "Treat low rolls on Deception and Persuasion as 10s",
        }),
        bard_college_of_eloquence_unsettling_words: await db.createClassFeature({
            id: "class-feature-bard-college-of-eloquence-unsettling-words",
            name: "Unsettling Words",
            level: 3,
            description: "Use Bardic Inspiration to reduce enemy saving throws",
        }),
        bard_college_of_eloquence_universal_speech: await db.createClassFeature({
            id: "class-feature-bard-college-of-eloquence-universal-speech",
            name: "Universal Speech",
            level: 6,
            description: "Make any creature understand your speech",
        }),
        bard_college_of_glamour_mantle_of_inspiration: await db.createClassFeature({
            id: "class-feature-bard-college-of-glamour-mantle-of-inspiration",
            name: "Mantle Of Inspiration",
            level: 3,
            description: "Grant allies temporary hit points and movement",
        }),
        bard_college_of_glamour_enthralling_performance: await db.createClassFeature({
            id: "class-feature-bard-college-of-glamour-enthralling-performance",
            name: "Enthralling Performance",
            level: 3,
            description: "Charm creatures through extended performance",
        }),
        bard_college_of_glamour_mantle_of_majesty: await db.createClassFeature({
            id: "class-feature-bard-college-of-glamour-mantle-of-majesty",
            name: "Mantle Of Majesty",
            level: 6,
            description: "Cast command as a bonus action while concentrating on enchantment",
        }),
        bard_college_of_lore_cutting_words: await db.createClassFeature({
            id: "class-feature-bard-college-of-lore-cutting-words",
            name: "Cutting Words",
            level: 3,
            description: "Use Bardic Inspiration to reduce enemy attack, ability, and damage rolls",
        }),
        bard_college_of_lore_additional_magical_secrets: await db.createClassFeature({
            id: "class-feature-bard-college-of-lore-additional-magical-secrets",
            name: "Additional Magical Secrets",
            level: 6,
            description: "Learn spells from any class earlier than other bards",
        }),
        bard_college_of_lore_peerless_skill: await db.createClassFeature({
            id: "class-feature-bard-college-of-lore-peerless-skill",
            name: "Peerless Skill",
            level: 14,
            description: "Add half your proficiency bonus to Bardic Inspiration",
        }),
        bard_college_of_spirits_guiding_whispers: await db.createClassFeature({
            id: "class-feature-bard-college-of-spirits-guiding-whispers",
            name: "Guiding Whispers",
            level: 3,
            description: "Bardic Inspiration can be used on Wisdom or Charisma checks",
        }),
        bard_college_of_spirits_spirit_session: await db.createClassFeature({
            id: "class-feature-bard-college-of-spirits-spirit-session",
            name: "Spirit Session",
            level: 3,
            description: "Channel spirits for random magical effects",
        }),
        bard_college_of_spirits_tales_from_beyond: await db.createClassFeature({
            id: "class-feature-bard-college-of-spirits-tales-from-beyond",
            name: "Tales From Beyond",
            level: 6,
            description: "Use Bardic Inspiration to trigger specific spirit effects",
        }),
        bard_college_of_swords_fighting_style: await db.createClassFeature({
            id: "class-feature-bard-college-of-swords-fighting-style",
            name: "Fighting Style",
            level: 3,
            description: "Choose Dueling or Two-Weapon Fighting",
        }),
        bard_college_of_swords_blade_flourish: await db.createClassFeature({
            id: "class-feature-bard-college-of-swords-blade-flourish",
            name: "Blade Flourish",
            level: 3,
            description: "Use Bardic Inspiration for special attack effects",
        }),
        bard_college_of_swords_extra_attack: await db.createClassFeature({
            id: "class-feature-bard-college-of-swords-extra-attack",
            name: "Extra Attack",
            level: 6,
            description: "Make two attacks when you take the Attack action",
        }),
        bard_college_of_valor_combat_inspiration: await db.createClassFeature({
            id: "class-feature-bard-college-of-valor-combat-inspiration",
            name: "Combat Inspiration",
            level: 3,
            description: "Bardic Inspiration can add to weapon damage or AC",
        }),
        bard_college_of_valor_medium_armor_and_shields: await db.createClassFeature({
            id: "class-feature-bard-college-of-valor-medium-armor-and-shields",
            name: "Medium Armor And Shields",
            level: 3,
            description: "Proficiency with medium armor, shields, and martial weapons",
        }),
        bard_college_of_valor_extra_attack: await db.createClassFeature({
            id: "class-feature-bard-college-of-valor-extra-attack",
            name: "Extra Attack",
            level: 6,
            description: "Make two attacks when you take the Attack action",
        }),
        bard_college_of_whispers_psychic_blades: await db.createClassFeature({
            id: "class-feature-bard-college-of-whispers-psychic-blades",
            name: "Psychic Blades",
            level: 3,
            description: "Use Bardic Inspiration to deal psychic damage",
        }),
        bard_college_of_whispers_words_of_terror: await db.createClassFeature({
            id: "class-feature-bard-college-of-whispers-words-of-terror",
            name: "Words Of Terror",
            level: 3,
            description: "Frighten creatures through whispered secrets",
        }),
        bard_college_of_whispers_mantle_of_whispers: await db.createClassFeature({
            id: "class-feature-bard-college-of-whispers-mantle-of-whispers",
            name: "Mantle Of Whispers",
            level: 6,
            description: "Capture and use the shadows of humanoids",
        }),
        cleric_spellcasting: await db.createClassFeature({
            id: "class-feature-cleric-spellcasting",
            name: "Spellcasting",
            level: 1,
            description: "Full caster with access to entire cleric spell list",
        }),
        cleric_divine_domain: await db.createClassFeature({
            id: "class-feature-cleric-divine-domain",
            name: "Divine Domain",
            level: 1,
            description: "Choose a domain that grants additional spells and abilities",
        }),
        cleric_channel_divinity: await db.createClassFeature({
            id: "class-feature-cleric-channel-divinity",
            name: "Channel Divinity",
            level: 2,
            description: "Channel divine energy for powerful effects",
        }),
        cleric_destroy_undead: await db.createClassFeature({
            id: "class-feature-cleric-destroy-undead",
            name: "Destroy Undead",
            level: 5,
            description: "Automatically destroy low-CR undead with Channel Divinity",
        }),
        cleric_forge_domain_blessing_of_the_forge: await db.createClassFeature({
            id: "class-feature-cleric-forge-domain-blessing-of-the-forge",
            name: "Blessing Of The Forge",
            level: 1,
            description: "Enhance weapons or armor with +1 bonus",
        }),
        cleric_forge_domain_channel_divinity_artisans_blessing: await db.createClassFeature({
            id: "class-feature-cleric-forge-domain-channel-divinity-artisans-blessing",
            name: "Channel Divinity Artisans Blessing",
            level: 2,
            description: "Create simple metal items through divine power",
        }),
        cleric_forge_domain_soul_of_the_forge: await db.createClassFeature({
            id: "class-feature-cleric-forge-domain-soul-of-the-forge",
            name: "Soul Of The Forge",
            level: 6,
            description: "Resistance to fire damage and +1 AC while wearing heavy armor",
        }),
        cleric_life_domain_disciple_of_life: await db.createClassFeature({
            id: "class-feature-cleric-life-domain-disciple-of-life",
            name: "Disciple Of Life",
            level: 1,
            description: "Healing spells restore additional hit points",
        }),
        cleric_life_domain_channel_divinity_preserve_life: await db.createClassFeature({
            id: "class-feature-cleric-life-domain-channel-divinity-preserve-life",
            name: "Channel Divinity Preserve Life",
            level: 2,
            description: "Heal multiple allies simultaneously",
        }),
        cleric_life_domain_blessed_healer: await db.createClassFeature({
            id: "class-feature-cleric-life-domain-blessed-healer",
            name: "Blessed Healer",
            level: 6,
            description: "Heal yourself when you heal others with spells",
        }),
        cleric_war_domain_war_priest: await db.createClassFeature({
            id: "class-feature-cleric-war-domain-war-priest",
            name: "War Priest",
            level: 1,
            description: "Make bonus action weapon attacks when casting spells",
        }),
        cleric_war_domain_channel_divinity_guided_strike: await db.createClassFeature({
            id: "class-feature-cleric-war-domain-channel-divinity-guided-strike",
            name: "Channel Divinity Guided Strike",
            level: 2,
            description: "Gain +10 bonus to attack rolls",
        }),
        cleric_war_domain_war_domain_spells: await db.createClassFeature({
            id: "class-feature-cleric-war-domain-war-domain-spells",
            name: "War Domain Spells",
            level: 1,
            description: "Always know spells like shield, spiritual weapon, and crusader's mantle",
        }),
        cleric_tempest_domain_wrath_of_the_storm: await db.createClassFeature({
            id: "class-feature-cleric-tempest-domain-wrath-of-the-storm",
            name: "Wrath Of The Storm",
            level: 1,
            description: "Deal thunder or lightning damage to attackers",
        }),
        cleric_tempest_domain_channel_divinity_destructive_wrath: await db.createClassFeature({
            id: "class-feature-cleric-tempest-domain-channel-divinity-destructive-wrath",
            name: "Channel Divinity Destructive Wrath",
            level: 2,
            description: "Maximize thunder or lightning damage",
        }),
        cleric_tempest_domain_thunderbolt_strike: await db.createClassFeature({
            id: "class-feature-cleric-tempest-domain-thunderbolt-strike",
            name: "Thunderbolt Strike",
            level: 6,
            description: "Push enemies when dealing lightning damage",
        }),
        cleric_light_domain_warding_flare: await db.createClassFeature({
            id: "class-feature-cleric-light-domain-warding-flare",
            name: "Warding Flare",
            level: 1,
            description: "Impose disadvantage on enemy attacks as a reaction",
        }),
        cleric_light_domain_channel_divinity_radiance_of_the_dawn: await db.createClassFeature({
            id: "class-feature-cleric-light-domain-channel-divinity-radiance-of-the-dawn",
            name: "Channel Divinity Radiance Of The Dawn",
            level: 2,
            description: "Create a burst of radiant light that damages undead and fiends",
        }),
        cleric_light_domain_potent_spellcasting: await db.createClassFeature({
            id: "class-feature-cleric-light-domain-potent-spellcasting",
            name: "Potent Spellcasting",
            level: 8,
            description: "Add Wisdom modifier to cantrip damage",
        }),
        cleric_nature_domain_acolyte_of_nature: await db.createClassFeature({
            id: "class-feature-cleric-nature-domain-acolyte-of-nature",
            name: "Acolyte Of Nature",
            level: 1,
            description: "Learn a druid cantrip and gain proficiency with heavy armor",
        }),
        cleric_nature_domain_channel_divinity_charm_animals_and_plants: await db.createClassFeature({
            id: "class-feature-cleric-nature-domain-channel-divinity-charm-animals-and-plants",
            name: "Channel Divinity Charm Animals And Plants",
            level: 2,
            description: "Charm beasts and plants to aid you",
        }),
        cleric_nature_domain_dampen_elements: await db.createClassFeature({
            id: "class-feature-cleric-nature-domain-dampen-elements",
            name: "Dampen Elements",
            level: 6,
            description: "Grant resistance to elemental damage to allies",
        }),
        cleric_trickery_domain_blessing_of_the_trickster: await db.createClassFeature({
            id: "class-feature-cleric-trickery-domain-blessing-of-the-trickster",
            name: "Blessing Of The Trickster",
            level: 1,
            description: "Grant advantage on Stealth checks to allies",
        }),
        cleric_trickery_domain_channel_divinity_invoke_duplicity: await db.createClassFeature({
            id: "class-feature-cleric-trickery-domain-channel-divinity-invoke-duplicity",
            name: "Channel Divinity Invoke Duplicity",
            level: 2,
            description: "Create an illusory duplicate of yourself",
        }),
        cleric_trickery_domain_cloak_of_shadows: await db.createClassFeature({
            id: "class-feature-cleric-trickery-domain-cloak-of-shadows",
            name: "Cloak Of Shadows",
            level: 6,
            description: "Turn invisible as an action",
        }),
        druid_druidcraft: await db.createClassFeature({
            id: "class-feature-druid-druidcraft",
            name: "Druidcraft",
            level: 1,
            description: "Minor nature-based magical effects",
        }),
        druid_spellcasting: await db.createClassFeature({
            id: "class-feature-druid-spellcasting",
            name: "Spellcasting",
            level: 1,
            description: "Full caster with nature and elemental spells",
        }),
        druid_wild_shape: await db.createClassFeature({
            id: "class-feature-druid-wild-shape",
            name: "Wild Shape",
            level: 2,
            description: "Transform into beasts for combat and utility",
        }),
        druid_druid_circle: await db.createClassFeature({
            id: "class-feature-druid-druid-circle",
            name: "Druid Circle",
            level: 2,
            description: "Choose a circle that defines your druidic focus",
        }),
        druid_circle_of_the_land_bonus_cantrip: await db.createClassFeature({
            id: "class-feature-druid-circle-of-the-land-bonus-cantrip",
            name: "Bonus Cantrip",
            level: 2,
            description: "Learn an additional druid cantrip",
        }),
        druid_circle_of_the_land_natural_recovery: await db.createClassFeature({
            id: "class-feature-druid-circle-of-the-land-natural-recovery",
            name: "Natural Recovery",
            level: 2,
            description: "Recover spell slots during short rests",
        }),
        druid_circle_of_the_land_circle_spells: await db.createClassFeature({
            id: "class-feature-druid-circle-of-the-land-circle-spells",
            name: "Circle Spells",
            level: 3,
            description: "Additional spells based on chosen land type",
        }),
        druid_circle_of_the_moon_combat_wild_shape: await db.createClassFeature({
            id: "class-feature-druid-circle-of-the-moon-combat-wild-shape",
            name: "Combat Wild Shape",
            level: 2,
            description: "Use Wild Shape as a bonus action and while in beast form",
        }),
        druid_circle_of_the_moon_circle_forms: await db.createClassFeature({
            id: "class-feature-druid-circle-of-the-moon-circle-forms",
            name: "Circle Forms",
            level: 2,
            description: "Transform into more powerful beasts, including CR 1 creatures",
        }),
        druid_circle_of_the_moon_primal_strike: await db.createClassFeature({
            id: "class-feature-druid-circle-of-the-moon-primal-strike",
            name: "Primal Strike",
            level: 6,
            description: "Beast form attacks count as magical",
        }),
        druid_circle_of_wildfire_summon_wildfire_spirit: await db.createClassFeature({
            id: "class-feature-druid-circle-of-wildfire-summon-wildfire-spirit",
            name: "Summon Wildfire Spirit",
            level: 2,
            description: "Summon a fire elemental companion",
        }),
        druid_circle_of_wildfire_enhanced_bond: await db.createClassFeature({
            id: "class-feature-druid-circle-of-wildfire-enhanced-bond",
            name: "Enhanced Bond",
            level: 6,
            description: "Gain benefits when your wildfire spirit is active",
        }),
        druid_circle_of_wildfire_circle_spells: await db.createClassFeature({
            id: "class-feature-druid-circle-of-wildfire-circle-spells",
            name: "Circle Spells",
            level: 2,
            description: "Additional fire and healing spells",
        }),
        fighter_fighting_style: await db.createClassFeature({
            id: "class-feature-fighter-fighting-style",
            name: "Fighting Style",
            level: 1,
            description: "Choose a specialized combat technique",
        }),
        fighter_second_wind: await db.createClassFeature({
            id: "class-feature-fighter-second-wind",
            name: "Second Wind",
            level: 1,
            description: "Recover hit points as a bonus action",
        }),
        fighter_action_surge: await db.createClassFeature({
            id: "class-feature-fighter-action-surge",
            name: "Action Surge",
            level: 2,
            description: "Take an additional action on your turn",
        }),
        fighter_extra_attack: await db.createClassFeature({
            id: "class-feature-fighter-extra-attack",
            name: "Extra Attack",
            level: 5,
            description: "Make multiple attacks when you take the Attack action",
        }),
        fighter_champion_improved_critical: await db.createClassFeature({
            id: "class-feature-fighter-champion-improved-critical",
            name: "Improved Critical",
            level: 3,
            description: "Score critical hits on 19-20",
        }),
        fighter_champion_remarkable_athlete: await db.createClassFeature({
            id: "class-feature-fighter-champion-remarkable-athlete",
            name: "Remarkable Athlete",
            level: 7,
            description: "Add half proficiency to Strength, Dexterity, and Constitution checks",
        }),
        fighter_champion_additional_fighting_style: await db.createClassFeature({
            id: "class-feature-fighter-champion-additional-fighting-style",
            name: "Additional Fighting Style",
            level: 10,
            description: "Choose a second fighting style",
        }),
        fighter_battle_master_combat_superiority: await db.createClassFeature({
            id: "class-feature-fighter-battle-master-combat-superiority",
            name: "Combat Superiority",
            level: 3,
            description: "Superiority dice to fuel special maneuvers",
        }),
        fighter_battle_master_maneuvers: await db.createClassFeature({
            id: "class-feature-fighter-battle-master-maneuvers",
            name: "Maneuvers",
            level: 3,
            description: "Learn tactical combat techniques like Trip Attack and Riposte",
        }),
        fighter_battle_master_know_your_enemy: await db.createClassFeature({
            id: "class-feature-fighter-battle-master-know-your-enemy",
            name: "Know Your Enemy",
            level: 7,
            description: "Learn information about enemy capabilities",
        }),
        fighter_eldritch_knight_spellcasting: await db.createClassFeature({
            id: "class-feature-fighter-eldritch-knight-spellcasting",
            name: "Spellcasting",
            level: 3,
            description: "One-third caster focusing on abjuration and evocation",
        }),
        fighter_eldritch_knight_weapon_bond: await db.createClassFeature({
            id: "class-feature-fighter-eldritch-knight-weapon-bond",
            name: "Weapon Bond",
            level: 3,
            description: "Bond with weapons to summon them and enhance attacks",
        }),
        fighter_eldritch_knight_war_magic: await db.createClassFeature({
            id: "class-feature-fighter-eldritch-knight-war-magic",
            name: "War Magic",
            level: 7,
            description: "Make weapon attacks after casting cantrips",
        }),
        monk_unarmored_defense: await db.createClassFeature({
            id: "class-feature-monk-unarmored-defense",
            name: "Unarmored Defense",
            level: 1,
            description: "AC equals 10 + Dex modifier + Wis modifier while unarmored",
        }),
        monk_martial_arts: await db.createClassFeature({
            id: "class-feature-monk-martial-arts",
            name: "Martial Arts",
            level: 1,
            description: "Enhanced unarmed strikes and bonus action attacks",
        }),
        monk_ki: await db.createClassFeature({
            id: "class-feature-monk-ki",
            name: "Ki",
            level: 2,
            description: "Spend ki points for special techniques and abilities",
        }),
        monk_unarmored_movement: await db.createClassFeature({
            id: "class-feature-monk-unarmored-movement",
            name: "Unarmored Movement",
            level: 2,
            description: "Increased speed while unarmored",
        }),
        monk_way_of_the_open_hand_open_hand_technique: await db.createClassFeature({
            id: "class-feature-monk-way-of-the-open-hand-open-hand-technique",
            name: "Open Hand Technique",
            level: 3,
            description: "Add effects to Flurry of Blows attacks: knock prone, push, or prevent reactions",
        }),
        monk_way_of_the_open_hand_wholeness_of_body: await db.createClassFeature({
            id: "class-feature-monk-way-of-the-open-hand-wholeness-of-body",
            name: "Wholeness Of Body",
            level: 6,
            description: "Heal yourself using ki",
        }),
        monk_way_of_the_open_hand_tranquility: await db.createClassFeature({
            id: "class-feature-monk-way-of-the-open-hand-tranquility",
            name: "Tranquility",
            level: 11,
            description: "End enchantments on yourself and gain sanctuary-like protection",
        }),
        monk_way_of_shadow_shadow_arts: await db.createClassFeature({
            id: "class-feature-monk-way-of-shadow-shadow-arts",
            name: "Shadow Arts",
            level: 3,
            description: "Cast darkness, darkvision, pass without trace, and silence using ki",
        }),
        monk_way_of_shadow_shadow_step: await db.createClassFeature({
            id: "class-feature-monk-way-of-shadow-shadow-step",
            name: "Shadow Step",
            level: 6,
            description: "Teleport between shadows and gain advantage on attacks",
        }),
        monk_way_of_shadow_cloak_of_shadows: await db.createClassFeature({
            id: "class-feature-monk-way-of-shadow-cloak-of-shadows",
            name: "Cloak Of Shadows",
            level: 11,
            description: "Become invisible as an action",
        }),
        monk_way_of_the_four_elements_elemental_disciplines: await db.createClassFeature({
            id: "class-feature-monk-way-of-the-four-elements-elemental-disciplines",
            name: "Elemental Disciplines",
            level: 3,
            description: "Learn to cast elemental spells using ki points",
        }),
        monk_way_of_the_four_elements_additional_disciplines: await db.createClassFeature({
            id: "class-feature-monk-way-of-the-four-elements-additional-disciplines",
            name: "Additional Disciplines",
            level: 6,
            description: "Learn more powerful elemental techniques",
        }),
        monk_way_of_the_four_elements_elemental_mastery: await db.createClassFeature({
            id: "class-feature-monk-way-of-the-four-elements-elemental-mastery",
            name: "Elemental Mastery",
            level: 11,
            description: "Access to high-level elemental spells",
        }),
        paladin_divine_sense: await db.createClassFeature({
            id: "class-feature-paladin-divine-sense",
            name: "Divine Sense",
            level: 1,
            description: "Detect celestials, fiends, and undead",
        }),
        paladin_lay_on_hands: await db.createClassFeature({
            id: "class-feature-paladin-lay-on-hands",
            name: "Lay On Hands",
            level: 1,
            description: "Heal others through touch",
        }),
        paladin_divine_smite: await db.createClassFeature({
            id: "class-feature-paladin-divine-smite",
            name: "Divine Smite",
            level: 2,
            description: "Expend spell slots for extra radiant damage",
        }),
        paladin_sacred_oath: await db.createClassFeature({
            id: "class-feature-paladin-sacred-oath",
            name: "Sacred Oath",
            level: 3,
            description: "Choose an oath that defines your paladin's mission",
        }),
        paladin_oath_of_devotion_sacred_weapon: await db.createClassFeature({
            id: "class-feature-paladin-oath-of-devotion-sacred-weapon",
            name: "Sacred Weapon",
            level: 3,
            description: "Channel Divinity to make weapon magical and shed bright light",
        }),
        paladin_oath_of_devotion_turn_the_unholy: await db.createClassFeature({
            id: "class-feature-paladin-oath-of-devotion-turn-the-unholy",
            name: "Turn The Unholy",
            level: 3,
            description: "Channel Divinity to turn fiends and undead",
        }),
        paladin_oath_of_devotion_aura_of_devotion: await db.createClassFeature({
            id: "class-feature-paladin-oath-of-devotion-aura-of-devotion",
            name: "Aura Of Devotion",
            level: 7,
            description: "Grant charm immunity to nearby allies",
        }),
        paladin_oath_of_the_ancients_natures_wrath: await db.createClassFeature({
            id: "class-feature-paladin-oath-of-the-ancients-natures-wrath",
            name: "Natures Wrath",
            level: 3,
            description: "Channel Divinity to restrain enemies with spectral vines",
        }),
        paladin_oath_of_the_ancients_turn_the_faithless: await db.createClassFeature({
            id: "class-feature-paladin-oath-of-the-ancients-turn-the-faithless",
            name: "Turn The Faithless",
            level: 3,
            description: "Channel Divinity to turn fey and fiends",
        }),
        paladin_oath_of_the_ancients_aura_of_warding: await db.createClassFeature({
            id: "class-feature-paladin-oath-of-the-ancients-aura-of-warding",
            name: "Aura Of Warding",
            level: 7,
            description: "Grant spell damage resistance to nearby allies",
        }),
        paladin_oath_of_vengeance_abjure_enemy: await db.createClassFeature({
            id: "class-feature-paladin-oath-of-vengeance-abjure-enemy",
            name: "Abjure Enemy",
            level: 3,
            description: "Channel Divinity to frighten and slow a target",
        }),
        paladin_oath_of_vengeance_vow_of_enmity: await db.createClassFeature({
            id: "class-feature-paladin-oath-of-vengeance-vow-of-enmity",
            name: "Vow Of Enmity",
            level: 3,
            description: "Channel Divinity to gain advantage against one enemy",
        }),
        paladin_oath_of_vengeance_relentless_avenger: await db.createClassFeature({
            id: "class-feature-paladin-oath-of-vengeance-relentless-avenger",
            name: "Relentless Avenger",
            level: 7,
            description: "Move without provoking opportunity attacks after hitting with opportunity attack",
        }),
        paladin_oath_of_the_crown_channel_divinity_champion_challenge: await db.createClassFeature({
            id: "class-feature-paladin-oath-of-the-crown-channel-divinity-champion-challenge",
            name: "Channel Divinity Champion Challenge",
            level: 3,
            description: "Challenge a creature to fight you, imposing disadvantage on attacks against others",
        }),
        paladin_oath_of_the_crown_channel_divinity_turn_the_tide: await db.createClassFeature({
            id: "class-feature-paladin-oath-of-the-crown-channel-divinity-turn-the-tide",
            name: "Channel Divinity Turn The Tide",
            level: 3,
            description: "Use reaction to heal and rally nearby allies when they're reduced to 0 hit points",
        }),
        paladin_oath_of_the_crown_divine_allegiance: await db.createClassFeature({
            id: "class-feature-paladin-oath-of-the-crown-divine-allegiance",
            name: "Divine Allegiance",
            level: 7,
            description: "Use reaction to take damage meant for an ally within 5 feet",
        }),
        paladin_oath_of_the_crown_unbreakable_majesty: await db.createClassFeature({
            id: "class-feature-paladin-oath-of-the-crown-unbreakable-majesty",
            name: "Unbreakable Majesty",
            level: 15,
            description: "Cast compulsion as a bonus action and gain immunity to being charmed or frightened",
        }),
        ranger_favored_enemy: await db.createClassFeature({
            id: "class-feature-ranger-favored-enemy",
            name: "Favored Enemy",
            level: 1,
            description: "Choose creature types to gain bonuses against",
        }),
        ranger_natural_explorer: await db.createClassFeature({
            id: "class-feature-ranger-natural-explorer",
            name: "Natural Explorer",
            level: 1,
            description: "Choose favored terrain for exploration benefits",
        }),
        ranger_spellcasting: await db.createClassFeature({
            id: "class-feature-ranger-spellcasting",
            name: "Spellcasting",
            level: 2,
            description: "Half-caster with nature and utility spells",
        }),
        ranger_ranger_archetype: await db.createClassFeature({
            id: "class-feature-ranger-ranger-archetype",
            name: "Ranger Archetype",
            level: 3,
            description: "Choose a specialization that defines your ranger's focus",
        }),
        ranger_hunter_hunters_prey: await db.createClassFeature({
            id: "class-feature-ranger-hunter-hunters-prey",
            name: "Hunters Prey",
            level: 3,
            description: "Choose Colossus Slayer, Giant Killer, or Horde Breaker",
        }),
        ranger_hunter_defensive_tactics: await db.createClassFeature({
            id: "class-feature-ranger-hunter-defensive-tactics",
            name: "Defensive Tactics",
            level: 7,
            description: "Choose Escape the Horde, Multiattack Defense, or Steel Will",
        }),
        ranger_hunter_multiattack: await db.createClassFeature({
            id: "class-feature-ranger-hunter-multiattack",
            name: "Multiattack",
            level: 11,
            description: "Choose Volley or Whirlwind Attack for fighting groups",
        }),
        ranger_beast_master_rangers_companion: await db.createClassFeature({
            id: "class-feature-ranger-beast-master-rangers-companion",
            name: "Rangers Companion",
            level: 3,
            description: "Gain a loyal animal companion that fights with you",
        }),
        ranger_beast_master_exceptional_training: await db.createClassFeature({
            id: "class-feature-ranger-beast-master-exceptional-training",
            name: "Exceptional Training",
            level: 7,
            description: "Your companion can take the Dash, Disengage, or Help action",
        }),
        ranger_beast_master_bestial_fury: await db.createClassFeature({
            id: "class-feature-ranger-beast-master-bestial-fury",
            name: "Bestial Fury",
            level: 11,
            description: "Your companion can make two attacks",
        }),
        ranger_gloom_stalker_dread_ambusher: await db.createClassFeature({
            id: "class-feature-ranger-gloom-stalker-dread-ambusher",
            name: "Dread Ambusher",
            level: 3,
            description: "Extra attack and damage on first turn of combat",
        }),
        ranger_gloom_stalker_umbral_sight: await db.createClassFeature({
            id: "class-feature-ranger-gloom-stalker-umbral-sight",
            name: "Umbral Sight",
            level: 3,
            description: "Darkvision and invisibility to darkvision while in darkness",
        }),
        ranger_gloom_stalker_iron_mind: await db.createClassFeature({
            id: "class-feature-ranger-gloom-stalker-iron-mind",
            name: "Iron Mind",
            level: 7,
            description: "Proficiency in Wisdom saving throws",
        }),
        rogue_expertise: await db.createClassFeature({
            id: "class-feature-rogue-expertise",
            name: "Expertise",
            level: 1,
            description: "Double proficiency bonus for chosen skills",
        }),
        rogue_sneak_attack: await db.createClassFeature({
            id: "class-feature-rogue-sneak-attack",
            name: "Sneak Attack",
            level: 1,
            description: "Deal extra damage when you have advantage or an ally nearby",
        }),
        rogue_thieves_cant: await db.createClassFeature({
            id: "class-feature-rogue-thieves-cant",
            name: "Thieves Cant",
            level: 1,
            description: "Secret language and signs used by rogues",
        }),
        rogue_cunning_action: await db.createClassFeature({
            id: "class-feature-rogue-cunning-action",
            name: "Cunning Action",
            level: 2,
            description: "Dash, Disengage, or Hide as bonus actions",
        }),
        rogue_thief_fast_hands: await db.createClassFeature({
            id: "class-feature-rogue-thief-fast-hands",
            name: "Fast Hands",
            level: 3,
            description: "Use objects, pick locks, or disarm traps as bonus actions",
        }),
        rogue_thief_second_story_work: await db.createClassFeature({
            id: "class-feature-rogue-thief-second-story-work",
            name: "Second Story Work",
            level: 3,
            description: "Enhanced climbing and jumping abilities",
        }),
        rogue_thief_use_magic_device: await db.createClassFeature({
            id: "class-feature-rogue-thief-use-magic-device",
            name: "Use Magic Device",
            level: 13,
            description: "Use any magic item regardless of restrictions",
        }),
        rogue_assassin_bonus_proficiencies: await db.createClassFeature({
            id: "class-feature-rogue-assassin-bonus-proficiencies",
            name: "Bonus Proficiencies",
            level: 3,
            description: "Proficiency with disguise kit and poisoner's kit",
        }),
        rogue_assassin_assassinate: await db.createClassFeature({
            id: "class-feature-rogue-assassin-assassinate",
            name: "Assassinate",
            level: 3,
            description: "Advantage and automatic crits against surprised creatures",
        }),
        rogue_assassin_infiltration_expertise: await db.createClassFeature({
            id: "class-feature-rogue-assassin-infiltration-expertise",
            name: "Infiltration Expertise",
            level: 9,
            description: "Create false identities and blend into society",
        }),
        rogue_arcane_trickster_spellcasting: await db.createClassFeature({
            id: "class-feature-rogue-arcane-trickster-spellcasting",
            name: "Spellcasting",
            level: 3,
            description: "One-third caster focusing on illusion and enchantment",
        }),
        rogue_arcane_trickster_mage_hand_legerdemain: await db.createClassFeature({
            id: "class-feature-rogue-arcane-trickster-mage-hand-legerdemain",
            name: "Mage Hand Legerdemain",
            level: 3,
            description: "Enhanced mage hand for thievery and stealth",
        }),
        rogue_arcane_trickster_magical_ambush: await db.createClassFeature({
            id: "class-feature-rogue-arcane-trickster-magical-ambush",
            name: "Magical Ambush",
            level: 9,
            description: "Impose disadvantage on saves against spells cast while hidden",
        }),
        sorcerer_spellcasting: await db.createClassFeature({
            id: "class-feature-sorcerer-spellcasting",
            name: "Spellcasting",
            level: 1,
            description: "Full caster with limited spells known but flexible casting",
        }),
        sorcerer_sorcerous_origin: await db.createClassFeature({
            id: "class-feature-sorcerer-sorcerous-origin",
            name: "Sorcerous Origin",
            level: 1,
            description: "Source of your magic that grants additional abilities",
        }),
        sorcerer_font_of_magic: await db.createClassFeature({
            id: "class-feature-sorcerer-font-of-magic",
            name: "Font Of Magic",
            level: 2,
            description: "Convert spell slots to sorcery points and vice versa",
        }),
        sorcerer_metamagic: await db.createClassFeature({
            id: "class-feature-sorcerer-metamagic",
            name: "Metamagic",
            level: 3,
            description: "Modify spells with sorcery points for enhanced effects",
        }),
        sorcerer_draconic_bloodline_dragon_ancestor: await db.createClassFeature({
            id: "class-feature-sorcerer-draconic-bloodline-dragon-ancestor",
            name: "Dragon Ancestor",
            level: 1,
            description: "Choose a dragon type for damage resistance and extra spells",
        }),
        sorcerer_draconic_bloodline_draconic_resilience: await db.createClassFeature({
            id: "class-feature-sorcerer-draconic-bloodline-draconic-resilience",
            name: "Draconic Resilience",
            level: 1,
            description: "Extra hit points and natural armor",
        }),
        sorcerer_draconic_bloodline_elemental_affinity: await db.createClassFeature({
            id: "class-feature-sorcerer-draconic-bloodline-elemental-affinity",
            name: "Elemental Affinity",
            level: 6,
            description: "Add Charisma modifier to damage of chosen type",
        }),
        sorcerer_wild_magic_wild_magic_surge: await db.createClassFeature({
            id: "class-feature-sorcerer-wild-magic-wild-magic-surge",
            name: "Wild Magic Surge",
            level: 1,
            description: "Chance to trigger random magical effects when casting spells",
        }),
        sorcerer_wild_magic_tides_of_chaos: await db.createClassFeature({
            id: "class-feature-sorcerer-wild-magic-tides-of-chaos",
            name: "Tides Of Chaos",
            level: 1,
            description: "Gain advantage on rolls but increase surge chance",
        }),
        sorcerer_wild_magic_bend_luck: await db.createClassFeature({
            id: "class-feature-sorcerer-wild-magic-bend-luck",
            name: "Bend Luck",
            level: 6,
            description: "Spend sorcery points to alter d20 rolls",
        }),
        sorcerer_divine_soul_divine_magic: await db.createClassFeature({
            id: "class-feature-sorcerer-divine-soul-divine-magic",
            name: "Divine Magic",
            level: 1,
            description: "Learn spells from cleric spell list in addition to sorcerer",
        }),
        sorcerer_divine_soul_favored_by_the_gods: await db.createClassFeature({
            id: "class-feature-sorcerer-divine-soul-favored-by-the-gods",
            name: "Favored By The Gods",
            level: 1,
            description: "Add 2d4 to failed saving throws",
        }),
        sorcerer_divine_soul_empowered_healing: await db.createClassFeature({
            id: "class-feature-sorcerer-divine-soul-empowered-healing",
            name: "Empowered Healing",
            level: 6,
            description: "Spend sorcery points to maximize healing spells",
        }),
        warlock_otherworldly_patron: await db.createClassFeature({
            id: "class-feature-warlock-otherworldly-patron",
            name: "Otherworldly Patron",
            level: 1,
            description: "Choose a powerful entity that grants you magic",
        }),
        warlock_pact_magic: await db.createClassFeature({
            id: "class-feature-warlock-pact-magic",
            name: "Pact Magic",
            level: 1,
            description: "Short rest spell slot recovery with limited but powerful slots",
        }),
        warlock_eldritch_invocations: await db.createClassFeature({
            id: "class-feature-warlock-eldritch-invocations",
            name: "Eldritch Invocations",
            level: 2,
            description: "Customize your abilities with invocation choices",
        }),
        warlock_pact_boon: await db.createClassFeature({
            id: "class-feature-warlock-pact-boon",
            name: "Pact Boon",
            level: 3,
            description: "Choose Blade, Chain, or Tome for additional abilities",
        }),
        warlock_the_fiend_dark_ones_blessing: await db.createClassFeature({
            id: "class-feature-warlock-the-fiend-dark-ones-blessing",
            name: "Dark Ones Blessing",
            level: 1,
            description: "Gain temporary hit points when you reduce enemies to 0 HP",
        }),
        warlock_the_fiend_dark_ones_own_luck: await db.createClassFeature({
            id: "class-feature-warlock-the-fiend-dark-ones-own-luck",
            name: "Dark Ones Own Luck",
            level: 6,
            description: "Add d10 to ability checks or saves",
        }),
        warlock_the_fiend_fiendish_resilience: await db.createClassFeature({
            id: "class-feature-warlock-the-fiend-fiendish-resilience",
            name: "Fiendish Resilience",
            level: 10,
            description: "Choose damage type to resist each short rest",
        }),
        warlock_the_archfey_fey_presence: await db.createClassFeature({
            id: "class-feature-warlock-the-archfey-fey-presence",
            name: "Fey Presence",
            level: 1,
            description: "Cause enemies to be charmed or frightened",
        }),
        warlock_the_archfey_misty_escape: await db.createClassFeature({
            id: "class-feature-warlock-the-archfey-misty-escape",
            name: "Misty Escape",
            level: 6,
            description: "Turn invisible and teleport when taking damage",
        }),
        warlock_the_archfey_beguiling_defenses: await db.createClassFeature({
            id: "class-feature-warlock-the-archfey-beguiling-defenses",
            name: "Beguiling Defenses",
            level: 10,
            description: "Immunity to charm and reflect charm effects",
        }),
        warlock_the_great_old_one_telepathic_communication: await db.createClassFeature({
            id: "class-feature-warlock-the-great-old-one-telepathic-communication",
            name: "Telepathic Communication",
            level: 1,
            description: "Communicate telepathically with creatures",
        }),
        warlock_the_great_old_one_entropic_ward: await db.createClassFeature({
            id: "class-feature-warlock-the-great-old-one-entropic-ward",
            name: "Entropic Ward",
            level: 6,
            description: "Impose disadvantage on attacks and gain advantage on next attack",
        }),
        warlock_the_great_old_one_thought_shield: await db.createClassFeature({
            id: "class-feature-warlock-the-great-old-one-thought-shield",
            name: "Thought Shield",
            level: 10,
            description: "Resistance to psychic damage and reflect psychic damage",
        }),
        wizard_spellcasting: await db.createClassFeature({
            id: "class-feature-wizard-spellcasting",
            name: "Spellcasting",
            level: 1,
            description: "Full caster with spellbook containing all known spells",
        }),
        wizard_arcane_recovery: await db.createClassFeature({
            id: "class-feature-wizard-arcane-recovery",
            name: "Arcane Recovery",
            level: 1,
            description: "Recover some spell slots during short rests",
        }),
        wizard_arcane_tradition: await db.createClassFeature({
            id: "class-feature-wizard-arcane-tradition",
            name: "Arcane Tradition",
            level: 2,
            description: "Choose a school of magic specialization",
        }),
        wizard_spell_mastery: await db.createClassFeature({
            id: "class-feature-wizard-spell-mastery",
            name: "Spell Mastery",
            level: 18,
            description: "Cast certain spells without using spell slots",
        }),
        wizard_school_of_evocation_sculpt_spells: await db.createClassFeature({
            id: "class-feature-wizard-school-of-evocation-sculpt-spells",
            name: "Sculpt Spells",
            level: 2,
            description: "Protect allies from your area spells",
        }),
        wizard_school_of_evocation_potent_cantrip: await db.createClassFeature({
            id: "class-feature-wizard-school-of-evocation-potent-cantrip",
            name: "Potent Cantrip",
            level: 6,
            description: "Cantrips deal half damage on successful saves",
        }),
        wizard_school_of_evocation_empowered_evocation: await db.createClassFeature({
            id: "class-feature-wizard-school-of-evocation-empowered-evocation",
            name: "Empowered Evocation",
            level: 10,
            description: "Add Intelligence modifier to evocation spell damage",
        }),
        wizard_school_of_illusion_improved_minor_illusion: await db.createClassFeature({
            id: "class-feature-wizard-school-of-illusion-improved-minor-illusion",
            name: "Improved Minor Illusion",
            level: 2,
            description: "Create both sound and image with minor illusion",
        }),
        wizard_school_of_illusion_malleable_illusions: await db.createClassFeature({
            id: "class-feature-wizard-school-of-illusion-malleable-illusions",
            name: "Malleable Illusions",
            level: 6,
            description: "Change illusion spell details as an action",
        }),
        wizard_school_of_illusion_illusory_reality: await db.createClassFeature({
            id: "class-feature-wizard-school-of-illusion-illusory-reality",
            name: "Illusory Reality",
            level: 14,
            description: "Make one object from illusion spells temporarily real",
        }),
        wizard_school_of_divination_portent: await db.createClassFeature({
            id: "class-feature-wizard-school-of-divination-portent",
            name: "Portent",
            level: 2,
            description: "Roll dice each day to replace d20 rolls later",
        }),
        wizard_school_of_divination_expert_divination: await db.createClassFeature({
            id: "class-feature-wizard-school-of-divination-expert-divination",
            name: "Expert Divination",
            level: 6,
            description: "Recover spell slots when casting divination spells",
        }),
        wizard_school_of_divination_the_third_eye: await db.createClassFeature({
            id: "class-feature-wizard-school-of-divination-the-third-eye",
            name: "The Third Eye",
            level: 10,
            description: "Choose from various enhanced sight abilities",
        }),
        tactician_perfect_plan: await db.createClassFeature({
            id: "class-feature-tactician-perfect-plan",
            name: "Perfect Plan",
            level: 1,
            description: "Gain Perfect Plan dice that can be used to enhance your own or allies' rolls",
        }),
        tactician_intelligent_defense: await db.createClassFeature({
            id: "class-feature-tactician-intelligent-defense",
            name: "Intelligent Defense",
            level: 1,
            description: "Use Intelligence modifier instead of Dexterity for AC calculation",
        }),
        tactician_analyze: await db.createClassFeature({
            id: "class-feature-tactician-analyze",
            name: "Analyze",
            level: 2,
            description: "As a bonus action, analyze a creature within 60 feet for tactical advantages",
        }),
        tactician_strategic_focus: await db.createClassFeature({
            id: "class-feature-tactician-strategic-focus",
            name: "Strategic Focus",
            level: 3,
            description: "Choose a strategic focus that grants additional features and maneuvers",
        }),
        tactician_tactical_command: await db.createClassFeature({
            id: "class-feature-tactician-tactical-command",
            name: "Tactical Command",
            level: 5,
            description: "Grant allies additional actions or movement through strategic commands",
        }),
        tactician_battlefield_control: await db.createClassFeature({
            id: "class-feature-tactician-battlefield-control",
            name: "Battlefield Control",
            level: 7,
            description: "Manipulate the battlefield to your advantage through superior positioning",
        }),
        tactician_grandmaster_strategic_planning: await db.createClassFeature({
            id: "class-feature-tactician-grandmaster-strategic-planning",
            name: "Strategic Planning",
            level: 3,
            description: "Spend time planning to gain significant advantages in upcoming encounters",
        }),
        tactician_grandmaster_battlefield_survey: await db.createClassFeature({
            id: "class-feature-tactician-grandmaster-battlefield-survey",
            name: "Battlefield Survey",
            level: 6,
            description: "Analyze terrain and enemy positions to predict and counter enemy tactics",
        }),
        tactician_grandmaster_grand_strategy: await db.createClassFeature({
            id: "class-feature-tactician-grandmaster-grand-strategy",
            name: "Grand Strategy",
            level: 10,
            description: "Coordinate multiple allies with complex tactical maneuvers",
        }),
        tactician_mentalist_telepathic_link: await db.createClassFeature({
            id: "class-feature-tactician-mentalist-telepathic-link",
            name: "Telepathic Link",
            level: 3,
            description: "Create mental connections with allies for silent communication and coordination",
        }),
        tactician_mentalist_mind_reading: await db.createClassFeature({
            id: "class-feature-tactician-mentalist-mind-reading",
            name: "Mind Reading",
            level: 6,
            description: "Read enemy surface thoughts to predict their actions and counter their tactics",
        }),
        tactician_mentalist_psychic_command: await db.createClassFeature({
            id: "class-feature-tactician-mentalist-psychic-command",
            name: "Psychic Command",
            level: 10,
            description: "Issue mental commands that enhance ally performance and disrupt enemy coordination",
        }),
        tactician_scholar_tactical_knowledge: await db.createClassFeature({
            id: "class-feature-tactician-scholar-tactical-knowledge",
            name: "Tactical Knowledge",
            level: 3,
            description: "Gain extensive knowledge of enemy tactics and weaknesses",
        }),
        tactician_scholar_research_and_development: await db.createClassFeature({
            id: "class-feature-tactician-scholar-research-and-development",
            name: "Research And Development",
            level: 6,
            description: "Develop new tactics and strategies based on historical study and analysis",
        }),
        tactician_scholar_master_tactician: await db.createClassFeature({
            id: "class-feature-tactician-scholar-master-tactician",
            name: "Master Tactician",
            level: 10,
            description: "Apply advanced tactical knowledge to gain significant advantages in combat",
        }),
        tactician_war_mind_combat_analysis: await db.createClassFeature({
            id: "class-feature-tactician-war-mind-combat-analysis",
            name: "Combat Analysis",
            level: 3,
            description: "Analyze combat situations in real-time to gain tactical advantages",
        }),
        tactician_war_mind_battlefield_presence: await db.createClassFeature({
            id: "class-feature-tactician-war-mind-battlefield-presence",
            name: "Battlefield Presence",
            level: 6,
            description: "Your mere presence on the battlefield inspires and coordinates allies",
        }),
        tactician_war_mind_war_leader: await db.createClassFeature({
            id: "class-feature-tactician-war-mind-war-leader",
            name: "War Leader",
            level: 10,
            description: "Lead by example, gaining powerful combat abilities when fighting alongside allies",
        }),
        cleric_arcana_domain_arcane_initiate: await db.createClassFeature({
            id: "class-feature-cleric-arcana-domain-arcane-initiate",
            name: "Arcane Initiate",
            level: 3,
            description: "Arcane Initiate description."
        }),
        cleric_arcana_domain_spell_breaker: await db.createClassFeature({
            id: "class-feature-cleric-arcana-domain-spell-breaker",
            name: "Spell Breaker",
            level: 3,
            description: "Spell Breaker description."
        }),
        cleric_arcana_domain_arcane_mastery: await db.createClassFeature({
            id: "class-feature-cleric-arcana-domain-arcane-mastery",
            name: "Arcane Mastery",
            level: 3,
            description: "Arcane Mastery description."
        }),
        cleric_death_domain_reaper: await db.createClassFeature({
            id: "class-feature-cleric-death-domain-reaper",
            name: "Reaper",
            level: 3,
            description: "Reaper description."
        }),
        cleric_death_domain_touch_of_death: await db.createClassFeature({
            id: "class-feature-cleric-death-domain-touch-of-death",
            name: "Touch of Death",
            level: 3,
            description: "Touch of Death description."
        }),
        cleric_death_domain_divinity_of_death: await db.createClassFeature({
            id: "class-feature-cleric-death-domain-divinity-of-death",
            name: "Divinity of Death",
            level: 3,
            description: "Divinity of Death description."
        }),
        cleric_grave_domain_circle_of_mortality: await db.createClassFeature({
            id: "class-feature-cleric-grave-domain-circle-of-mortality",
            name: "Circle of Mortality",
            level: 3,
            description: "Circle of Mortality description."
        }),
        cleric_grave_domain_path_to_the_grave: await db.createClassFeature({
            id: "class-feature-cleric-grave-domain-path-to-the-grave",
            name: "Path to the Grave",
            level: 3,
            description: "Path to the Grave description."
        }),
        cleric_grave_domain_sentinel_at_deaths_door: await db.createClassFeature({
            id: "class-feature-cleric-grave-domain-sentinel-at-deaths-door",
            name: "Sentinel at Death's Door",
            level: 3,
            description: "Sentinel at Death's Door description."
        }),
        cleric_knowledge_domain_blessings_of_knowledge: await db.createClassFeature({
            id: "class-feature-cleric-knowledge-domain-blessings-of-knowledge",
            name: "Blessings of Knowledge",
            level: 3,
            description: "Blessings of Knowledge description."
        }),
        cleric_knowledge_domain_knowledge_of_the_ages: await db.createClassFeature({
            id: "class-feature-cleric-knowledge-domain-knowledge-of-the-ages",
            name: "Knowledge of the Ages",
            level: 3,
            description: "Knowledge of the Ages description."
        }),
        cleric_knowledge_domain_visions_of_the_past: await db.createClassFeature({
            id: "class-feature-cleric-knowledge-domain-visions-of-the-past",
            name: "Visions of the Past",
            level: 3,
            description: "Visions of the Past description."
        }),
        cleric_order_domain_orders_demand: await db.createClassFeature({
            id: "class-feature-cleric-order-domain-orders-demand",
            name: "Order's Demand",
            level: 3,
            description: "Order's Demand description."
        }),
        cleric_order_domain_orders_wrath: await db.createClassFeature({
            id: "class-feature-cleric-order-domain-orders-wrath",
            name: "Order's Wrath",
            level: 3,
            description: "Order's Wrath description."
        }),
        cleric_order_domain_embodiment_of_the_law: await db.createClassFeature({
            id: "class-feature-cleric-order-domain-embodiment-of-the-law",
            name: "Embodiment of the Law",
            level: 3,
            description: "Embodiment of the Law description."
        }),
        cleric_peace_domain_emboldening_bond: await db.createClassFeature({
            id: "class-feature-cleric-peace-domain-emboldening-bond",
            name: "Emboldening Bond",
            level: 3,
            description: "Emboldening Bond description."
        }),
        cleric_peace_domain_shield_of_serenity: await db.createClassFeature({
            id: "class-feature-cleric-peace-domain-shield-of-serenity",
            name: "Shield of Serenity",
            level: 3,
            description: "Shield of Serenity description."
        }),
        cleric_peace_domain_protective_bond: await db.createClassFeature({
            id: "class-feature-cleric-peace-domain-protective-bond",
            name: "Protective Bond",
            level: 3,
            description: "Protective Bond description."
        }),
        cleric_twilight_domain_vigilant_blessing: await db.createClassFeature({
            id: "class-feature-cleric-twilight-domain-vigilant-blessing",
            name: "Vigilant Blessing",
            level: 3,
            description: "Vigilant Blessing description."
        }),
        cleric_twilight_domain_twilight_sanctuary: await db.createClassFeature({
            id: "class-feature-cleric-twilight-domain-twilight-sanctuary",
            name: "Twilight Sanctuary",
            level: 3,
            description: "Twilight Sanctuary description."
        }),
        cleric_twilight_domain_divinity_of_twilight: await db.createClassFeature({
            id: "class-feature-cleric-twilight-domain-divinity-of-twilight",
            name: "Divinity of Twilight",
            level: 3,
            description: "Divinity of Twilight description."
        }),
        druid_circle_of_dreams_balm_of_the_summer_court: await db.createClassFeature({
            id: "class-feature-druid-circle-of-dreams-balm-of-the-summer-court",
            name: "Balm of the Summer Court",
            level: 3,
            description: "Balm of the Summer Court description."
        }),
        druid_circle_of_dreams_hearth_of_moonlight: await db.createClassFeature({
            id: "class-feature-druid-circle-of-dreams-hearth-of-moonlight",
            name: "Hearth of Moonlight",
            level: 3,
            description: "Hearth of Moonlight description."
        }),
        druid_circle_of_dreams_hidden_paths: await db.createClassFeature({
            id: "class-feature-druid-circle-of-dreams-hidden-paths",
            name: "Hidden Paths",
            level: 3,
            description: "Hidden Paths description."
        }),
        druid_circle_of_the_shepherd_speech_of_the_woods: await db.createClassFeature({
            id: "class-feature-druid-circle-of-the-shepherd-speech-of-the-woods",
            name: "Speech of the Woods",
            level: 3,
            description: "Speech of the Woods description."
        }),
        druid_circle_of_the_shepherd_spirit_totem: await db.createClassFeature({
            id: "class-feature-druid-circle-of-the-shepherd-spirit-totem",
            name: "Spirit Totem",
            level: 3,
            description: "Spirit Totem description."
        }),
        druid_circle_of_the_shepherd_faithful_summons: await db.createClassFeature({
            id: "class-feature-druid-circle-of-the-shepherd-faithful-summons",
            name: "Faithful Summons",
            level: 3,
            description: "Faithful Summons description."
        }),
        druid_circle_of_spores_halo_of_spores: await db.createClassFeature({
            id: "class-feature-druid-circle-of-spores-halo-of-spores",
            name: "Halo of Spores",
            level: 3,
            description: "Halo of Spores description."
        }),
        druid_circle_of_spores_symbiotic_entity: await db.createClassFeature({
            id: "class-feature-druid-circle-of-spores-symbiotic-entity",
            name: "Symbiotic Entity",
            level: 3,
            description: "Symbiotic Entity description."
        }),
        druid_circle_of_spores_fungal_infestation: await db.createClassFeature({
            id: "class-feature-druid-circle-of-spores-fungal-infestation",
            name: "Fungal Infestation",
            level: 3,
            description: "Fungal Infestation description."
        }),
        druid_circle_of_stars_starry_form: await db.createClassFeature({
            id: "class-feature-druid-circle-of-stars-starry-form",
            name: "Starry Form",
            level: 3,
            description: "Starry Form description."
        }),
        druid_circle_of_stars_cosmic_omen: await db.createClassFeature({
            id: "class-feature-druid-circle-of-stars-cosmic-omen",
            name: "Cosmic Omen",
            level: 3,
            description: "Cosmic Omen description."
        }),
        druid_circle_of_stars_full_of_stars: await db.createClassFeature({
            id: "class-feature-druid-circle-of-stars-full-of-stars",
            name: "Full of Stars",
            level: 3,
            description: "Full of Stars description."
        }),
        fighter_arcane_archer_arcane_archer_lore: await db.createClassFeature({
            id: "class-feature-fighter-arcane-archer-arcane-archer-lore",
            name: "Arcane Archer Lore",
            level: 3,
            description: "Arcane Archer Lore description."
        }),
        fighter_arcane_archer_arcane_shot: await db.createClassFeature({
            id: "class-feature-fighter-arcane-archer-arcane-shot",
            name: "Arcane Shot",
            level: 3,
            description: "Arcane Shot description."
        }),
        fighter_arcane_archer_magic_arrow: await db.createClassFeature({
            id: "class-feature-fighter-arcane-archer-magic-arrow",
            name: "Magic Arrow",
            level: 3,
            description: "Magic Arrow description."
        }),
        fighter_cavalier_born_to_the_saddle: await db.createClassFeature({
            id: "class-feature-fighter-cavalier-born-to-the-saddle",
            name: "Born to the Saddle",
            level: 3,
            description: "Born to the Saddle description."
        }),
        fighter_cavalier_unwavering_mark: await db.createClassFeature({
            id: "class-feature-fighter-cavalier-unwavering-mark",
            name: "Unwavering Mark",
            level: 3,
            description: "Unwavering Mark description."
        }),
        fighter_cavalier_hold_the_line: await db.createClassFeature({
            id: "class-feature-fighter-cavalier-hold-the-line",
            name: "Hold the Line",
            level: 3,
            description: "Hold the Line description."
        }),
        fighter_echo_knight_manifest_echo: await db.createClassFeature({
            id: "class-feature-fighter-echo-knight-manifest-echo",
            name: "Manifest Echo",
            level: 3,
            description: "Manifest Echo description."
        }),
        fighter_echo_knight_unleash_incarnation: await db.createClassFeature({
            id: "class-feature-fighter-echo-knight-unleash-incarnation",
            name: "Unleash Incarnation",
            level: 3,
            description: "Unleash Incarnation description."
        }),
        fighter_echo_knight_echo_avatar: await db.createClassFeature({
            id: "class-feature-fighter-echo-knight-echo-avatar",
            name: "Echo Avatar",
            level: 3,
            description: "Echo Avatar description."
        }),
        fighter_psi_warrior_psi_energy_blade: await db.createClassFeature({
            id: "class-feature-fighter-psi-warrior-psi-energy-blade",
            name: "Psi Energy Blade",
            level: 3,
            description: "Psi Energy Blade description."
        }),
        fighter_psi_warrior_psychic_shove: await db.createClassFeature({
            id: "class-feature-fighter-psi-warrior-psychic-shove",
            name: "Psychic Shove",
            level: 3,
            description: "Psychic Shove description."
        }),
        fighter_psi_warrior_telekinetic_strike: await db.createClassFeature({
            id: "class-feature-fighter-psi-warrior-telekinetic-strike",
            name: "Telekinetic Strike",
            level: 3,
            description: "Telekinetic Strike description."
        }),
        fighter_rune_knight_rune_carver: await db.createClassFeature({
            id: "class-feature-fighter-rune-knight-rune-carver",
            name: "Rune Carver",
            level: 3,
            description: "Rune Carver description."
        }),
        fighter_rune_knight_giants_might: await db.createClassFeature({
            id: "class-feature-fighter-rune-knight-giants-might",
            name: "Giant's Might",
            level: 3,
            description: "Giant's Might description."
        }),
        fighter_rune_knight_runic_shield: await db.createClassFeature({
            id: "class-feature-fighter-rune-knight-runic-shield",
            name: "Runic Shield",
            level: 3,
            description: "Runic Shield description."
        }),
        fighter_samurai_fighting_spirit: await db.createClassFeature({
            id: "class-feature-fighter-samurai-fighting-spirit",
            name: "Fighting Spirit",
            level: 3,
            description: "Fighting Spirit description."
        }),
        fighter_samurai_elegant_courtier: await db.createClassFeature({
            id: "class-feature-fighter-samurai-elegant-courtier",
            name: "Elegant Courtier",
            level: 3,
            description: "Elegant Courtier description."
        }),
        fighter_samurai_rapid_strike: await db.createClassFeature({
            id: "class-feature-fighter-samurai-rapid-strike",
            name: "Rapid Strike",
            level: 3,
            description: "Rapid Strike description."
        }),
        monk_way_of_the_astral_self_arms_of_the_astral_self: await db.createClassFeature({
            id: "class-feature-monk-way-of-the-astral-self-arms-of-the-astral-self",
            name: "Arms of the Astral Self",
            level: 3,
            description: "Arms of the Astral Self description."
        }),
        monk_way_of_the_astral_self_visage_of_the_astral_self: await db.createClassFeature({
            id: "class-feature-monk-way-of-the-astral-self-visage-of-the-astral-self",
            name: "Visage of the Astral Self",
            level: 3,
            description: "Visage of the Astral Self description."
        }),
        monk_way_of_the_astral_self_body_of_the_astral_self: await db.createClassFeature({
            id: "class-feature-monk-way-of-the-astral-self-body-of-the-astral-self",
            name: "Body of the Astral Self",
            level: 3,
            description: "Body of the Astral Self description."
        }),
        monk_way_of_the_ascendant_dragon_dragons_breath: await db.createClassFeature({
            id: "class-feature-monk-way-of-the-ascendant-dragon-dragons-breath",
            name: "Dragon's Breath",
            level: 3,
            description: "Dragon's Breath description."
        }),
        monk_way_of_the_ascendant_dragon_draconic_presence: await db.createClassFeature({
            id: "class-feature-monk-way-of-the-ascendant-dragon-draconic-presence",
            name: "Draconic Presence",
            level: 3,
            description: "Draconic Presence description."
        }),
        monk_way_of_the_ascendant_dragon_breath_of_the_dragon: await db.createClassFeature({
            id: "class-feature-monk-way-of-the-ascendant-dragon-breath-of-the-dragon",
            name: "Breath of the Dragon",
            level: 3,
            description: "Breath of the Dragon description."
        }),
        monk_way_of_the_drunken_master_drunken_technique: await db.createClassFeature({
            id: "class-feature-monk-way-of-the-drunken-master-drunken-technique",
            name: "Drunken Technique",
            level: 3,
            description: "Drunken Technique description."
        }),
        monk_way_of_the_drunken_master_tipsy_sway: await db.createClassFeature({
            id: "class-feature-monk-way-of-the-drunken-master-tipsy-sway",
            name: "Tipsy Sway",
            level: 3,
            description: "Tipsy Sway description."
        }),
        monk_way_of_the_drunken_master_intoxicated_frenzy: await db.createClassFeature({
            id: "class-feature-monk-way-of-the-drunken-master-intoxicated-frenzy",
            name: "Intoxicated Frenzy",
            level: 3,
            description: "Intoxicated Frenzy description."
        }),
        monk_way_of_the_kensei_path_of_the_kensei: await db.createClassFeature({
            id: "class-feature-monk-way-of-the-kensei-path-of-the-kensei",
            name: "Path of the Kensei",
            level: 3,
            description: "Path of the Kensei description."
        }),
        monk_way_of_the_kensei_agile_parry: await db.createClassFeature({
            id: "class-feature-monk-way-of-the-kensei-agile-parry",
            name: "Agile Parry",
            level: 3,
            description: "Agile Parry description."
        }),
        monk_way_of_the_kensei_one_with_the_blade: await db.createClassFeature({
            id: "class-feature-monk-way-of-the-kensei-one-with-the-blade",
            name: "One with the Blade",
            level: 3,
            description: "One with the Blade description."
        }),
        monk_way_of_the_long_death_touch_of_death: await db.createClassFeature({
            id: "class-feature-monk-way-of-the-long-death-touch-of-death",
            name: "Touch of Death",
            level: 3,
            description: "Touch of Death description."
        }),
        monk_way_of_the_long_death_hour_of_reaping: await db.createClassFeature({
            id: "class-feature-monk-way-of-the-long-death-hour-of-reaping",
            name: "Hour of Reaping",
            level: 3,
            description: "Hour of Reaping description."
        }),
        monk_way_of_the_long_death_mastery_of_death: await db.createClassFeature({
            id: "class-feature-monk-way-of-the-long-death-mastery-of-death",
            name: "Mastery of Death",
            level: 3,
            description: "Mastery of Death description."
        }),
        monk_way_of_mercy_hand_of_healing: await db.createClassFeature({
            id: "class-feature-monk-way-of-mercy-hand-of-healing",
            name: "Hand of Healing",
            level: 3,
            description: "Hand of Healing description."
        }),
        monk_way_of_mercy_physicians_touch: await db.createClassFeature({
            id: "class-feature-monk-way-of-mercy-physicians-touch",
            name: "Physician's Touch",
            level: 3,
            description: "Physician's Touch description."
        }),
        monk_way_of_mercy_hand_of_ultimate_mercy: await db.createClassFeature({
            id: "class-feature-monk-way-of-mercy-hand-of-ultimate-mercy",
            name: "Hand of Ultimate Mercy",
            level: 3,
            description: "Hand of Ultimate Mercy description."
        }),
        monk_way_of_the_sun_soul_radiant_sun_bolt: await db.createClassFeature({
            id: "class-feature-monk-way-of-the-sun-soul-radiant-sun-bolt",
            name: "Radiant Sun Bolt",
            level: 3,
            description: "Radiant Sun Bolt description."
        }),
        monk_way_of_the_sun_soul_searing_arc_strike: await db.createClassFeature({
            id: "class-feature-monk-way-of-the-sun-soul-searing-arc-strike",
            name: "Searing Arc Strike",
            level: 3,
            description: "Searing Arc Strike description."
        }),
        monk_way_of_the_sun_soul_searing_sunburst: await db.createClassFeature({
            id: "class-feature-monk-way-of-the-sun-soul-searing-sunburst",
            name: "Searing Sunburst",
            level: 3,
            description: "Searing Sunburst description."
        }),
        paladin_oath_of_conquest_conquering_presence: await db.createClassFeature({
            id: "class-feature-paladin-oath-of-conquest-conquering-presence",
            name: "Conquering Presence",
            level: 3,
            description: "Conquering Presence description."
        }),
        paladin_oath_of_conquest_guided_strike: await db.createClassFeature({
            id: "class-feature-paladin-oath-of-conquest-guided-strike",
            name: "Guided Strike",
            level: 3,
            description: "Guided Strike description."
        }),
        paladin_oath_of_conquest_scornful_rebuke: await db.createClassFeature({
            id: "class-feature-paladin-oath-of-conquest-scornful-rebuke",
            name: "Scornful Rebuke",
            level: 3,
            description: "Scornful Rebuke description."
        }),
        paladin_oath_of_glory_inspiring_smite: await db.createClassFeature({
            id: "class-feature-paladin-oath-of-glory-inspiring-smite",
            name: "Inspiring Smite",
            level: 3,
            description: "Inspiring Smite description."
        }),
        paladin_oath_of_glory_peerless_athlete: await db.createClassFeature({
            id: "class-feature-paladin-oath-of-glory-peerless-athlete",
            name: "Peerless Athlete",
            level: 3,
            description: "Peerless Athlete description."
        }),
        paladin_oath_of_glory_glorious_defense: await db.createClassFeature({
            id: "class-feature-paladin-oath-of-glory-glorious-defense",
            name: "Glorious Defense",
            level: 3,
            description: "Glorious Defense description."
        }),
        paladin_oath_of_redemption_emissary_of_peace: await db.createClassFeature({
            id: "class-feature-paladin-oath-of-redemption-emissary-of-peace",
            name: "Emissary of Peace",
            level: 3,
            description: "Emissary of Peace description."
        }),
        paladin_oath_of_redemption_rebuke_the_violent: await db.createClassFeature({
            id: "class-feature-paladin-oath-of-redemption-rebuke-the-violent",
            name: "Rebuke the Violent",
            level: 3,
            description: "Rebuke the Violent description."
        }),
        paladin_oath_of_redemption_protective_spirit: await db.createClassFeature({
            id: "class-feature-paladin-oath-of-redemption-protective-spirit",
            name: "Protective Spirit",
            level: 3,
            description: "Protective Spirit description."
        }),
        paladin_oath_of_the_watchers_watchers_will: await db.createClassFeature({
            id: "class-feature-paladin-oath-of-the-watchers-watchers-will",
            name: "Watcher's Will",
            level: 3,
            description: "Watcher's Will description."
        }),
        paladin_oath_of_the_watchers_vigilant_rebuke: await db.createClassFeature({
            id: "class-feature-paladin-oath-of-the-watchers-vigilant-rebuke",
            name: "Vigilant Rebuke",
            level: 3,
            description: "Vigilant Rebuke description."
        }),
        paladin_oath_of_the_watchers_aura_of_the_sentinel: await db.createClassFeature({
            id: "class-feature-paladin-oath-of-the-watchers-aura-of-the-sentinel",
            name: "Aura of the Sentinel",
            level: 3,
            description: "Aura of the Sentinel description."
        }),
        ranger_drakewarden_drake_companion: await db.createClassFeature({
            id: "class-feature-ranger-drakewarden-drake-companion",
            name: "Drake Companion",
            level: 3,
            description: "Drake Companion description."
        }),
        ranger_drakewarden_draconic_might: await db.createClassFeature({
            id: "class-feature-ranger-drakewarden-draconic-might",
            name: "Draconic Might",
            level: 3,
            description: "Draconic Might description."
        }),
        ranger_drakewarden_draconic_crescent: await db.createClassFeature({
            id: "class-feature-ranger-drakewarden-draconic-crescent",
            name: "Draconic Crescent",
            level: 3,
            description: "Draconic Crescent description."
        }),
        ranger_fey_wanderer_additional_march: await db.createClassFeature({
            id: "class-feature-ranger-fey-wanderer-additional-march",
            name: "Additional March",
            level: 3,
            description: "Additional March description."
        }),
        ranger_fey_wanderer_dreadful_glare: await db.createClassFeature({
            id: "class-feature-ranger-fey-wanderer-dreadful-glare",
            name: "Dreadful Glare",
            level: 3,
            description: "Dreadful Glare description."
        }),
        ranger_fey_wanderer_beguiling_twist: await db.createClassFeature({
            id: "class-feature-ranger-fey-wanderer-beguiling-twist",
            name: "Beguiling Twist",
            level: 3,
            description: "Beguiling Twist description."
        }),
        ranger_horizon_walker_detect_portal: await db.createClassFeature({
            id: "class-feature-ranger-horizon-walker-detect-portal",
            name: "Detect Portal",
            level: 3,
            description: "Detect Portal description."
        }),
        ranger_horizon_walker_ethereal_step: await db.createClassFeature({
            id: "class-feature-ranger-horizon-walker-ethereal-step",
            name: "Ethereal Step",
            level: 3,
            description: "Ethereal Step description."
        }),
        ranger_horizon_walker_step_the_planes: await db.createClassFeature({
            id: "class-feature-ranger-horizon-walker-step-the-planes",
            name: "Step the Planes",
            level: 3,
            description: "Step the Planes description."
        }),
        ranger_monster_slayer_slayers_eye: await db.createClassFeature({
            id: "class-feature-ranger-monster-slayer-slayers-eye",
            name: "Slayer's Eye",
            level: 3,
            description: "Slayer's Eye description."
        }),
        ranger_monster_slayer_slayers_prey: await db.createClassFeature({
            id: "class-feature-ranger-monster-slayer-slayers-prey",
            name: "Slayer's Prey",
            level: 3,
            description: "Slayer's Prey description."
        }),
        ranger_monster_slayer_supernatural_defense: await db.createClassFeature({
            id: "class-feature-ranger-monster-slayer-supernatural-defense",
            name: "Supernatural Defense",
            level: 3,
            description: "Supernatural Defense description."
        }),
        ranger_swarmkeeper_gathered_swarm: await db.createClassFeature({
            id: "class-feature-ranger-swarmkeeper-gathered-swarm",
            name: "Gathered Swarm",
            level: 3,
            description: "Gathered Swarm description."
        }),
        ranger_swarmkeeper_writhing_tide: await db.createClassFeature({
            id: "class-feature-ranger-swarmkeeper-writhing-tide",
            name: "Writhing Tide",
            level: 3,
            description: "Writhing Tide description."
        }),
        ranger_swarmkeeper_swarmkeepers_fury: await db.createClassFeature({
            id: "class-feature-ranger-swarmkeeper-swarmkeepers-fury",
            name: "Swarmkeeper's Fury",
            level: 3,
            description: "Swarmkeeper's Fury description."
        }),
        rogue_inquisitive_ear_for_deceit: await db.createClassFeature({
            id: "class-feature-rogue-inquisitive-ear-for-deceit",
            name: "Ear for Deceit",
            level: 3,
            description: "Ear for Deceit description."
        }),
        rogue_inquisitive_eye_for_detail: await db.createClassFeature({
            id: "class-feature-rogue-inquisitive-eye-for-detail",
            name: "Eye for Detail",
            level: 3,
            description: "Eye for Detail description."
        }),
        rogue_inquisitive_unerring_eye: await db.createClassFeature({
            id: "class-feature-rogue-inquisitive-unerring-eye",
            name: "Unerring Eye",
            level: 3,
            description: "Unerring Eye description."
        }),
        rogue_mastermind_master_of_intrigue: await db.createClassFeature({
            id: "class-feature-rogue-mastermind-master-of-intrigue",
            name: "Master of Intrigue",
            level: 3,
            description: "Master of Intrigue description."
        }),
        rogue_mastermind_master_of_tactics: await db.createClassFeature({
            id: "class-feature-rogue-mastermind-master-of-tactics",
            name: "Master of Tactics",
            level: 3,
            description: "Master of Tactics description."
        }),
        rogue_mastermind_soul_of_deceit: await db.createClassFeature({
            id: "class-feature-rogue-mastermind-soul-of-deceit",
            name: "Soul of Deceit",
            level: 3,
            description: "Soul of Deceit description."
        }),
        rogue_phantom_wails_from_the_grave: await db.createClassFeature({
            id: "class-feature-rogue-phantom-wails-from-the-grave",
            name: "Wails from the Grave",
            level: 3,
            description: "Wails from the Grave description."
        }),
        rogue_phantom_tokens_of_the_departed: await db.createClassFeature({
            id: "class-feature-rogue-phantom-tokens-of-the-departed",
            name: "Tokens of the Departed",
            level: 3,
            description: "Tokens of the Departed description."
        }),
        rogue_phantom_ghost_walk: await db.createClassFeature({
            id: "class-feature-rogue-phantom-ghost-walk",
            name: "Ghost Walk",
            level: 3,
            description: "Ghost Walk description."
        }),
        rogue_scout_skirmisher: await db.createClassFeature({
            id: "class-feature-rogue-scout-skirmisher",
            name: "Skirmisher",
            level: 3,
            description: "Skirmisher description."
        }),
        rogue_scout_survivalist: await db.createClassFeature({
            id: "class-feature-rogue-scout-survivalist",
            name: "Survivalist",
            level: 3,
            description: "Survivalist description."
        }),
        rogue_scout_sudden_strike: await db.createClassFeature({
            id: "class-feature-rogue-scout-sudden-strike",
            name: "Sudden Strike",
            level: 3,
            description: "Sudden Strike description."
        }),
        rogue_soulknife_psychic_blades: await db.createClassFeature({
            id: "class-feature-rogue-soulknife-psychic-blades",
            name: "Psychic Blades",
            level: 3,
            description: "Psychic Blades description."
        }),
        rogue_soulknife_psychic_whispers: await db.createClassFeature({
            id: "class-feature-rogue-soulknife-psychic-whispers",
            name: "Psychic Whispers",
            level: 3,
            description: "Psychic Whispers description."
        }),
        rogue_soulknife_soul_knife: await db.createClassFeature({
            id: "class-feature-rogue-soulknife-soul-knife",
            name: "Soul Knife",
            level: 3,
            description: "Soul Knife description."
        }),
        rogue_swashbuckler_fancy_footwork: await db.createClassFeature({
            id: "class-feature-rogue-swashbuckler-fancy-footwork",
            name: "Fancy Footwork",
            level: 3,
            description: "Fancy Footwork description."
        }),
        rogue_swashbuckler_rakish_audacity: await db.createClassFeature({
            id: "class-feature-rogue-swashbuckler-rakish-audacity",
            name: "Rakish Audacity",
            level: 3,
            description: "Rakish Audacity description."
        }),
        rogue_swashbuckler_panache: await db.createClassFeature({
            id: "class-feature-rogue-swashbuckler-panache",
            name: "Panache",
            level: 3,
            description: "Panache description."
        }),
        sorcerer_aberrant_mind_psionic_spells: await db.createClassFeature({
            id: "class-feature-sorcerer-aberrant-mind-psionic-spells",
            name: "Psionic Spells",
            level: 3,
            description: "Psionic Spells description."
        }),
        sorcerer_aberrant_mind_mind_thrust: await db.createClassFeature({
            id: "class-feature-sorcerer-aberrant-mind-mind-thrust",
            name: "Mind Thrust",
            level: 3,
            description: "Mind Thrust description."
        }),
        sorcerer_aberrant_mind_bend_mind: await db.createClassFeature({
            id: "class-feature-sorcerer-aberrant-mind-bend-mind",
            name: "Bend Mind",
            level: 3,
            description: "Bend Mind description."
        }),
        sorcerer_clockwork_soul_clockwork_magic: await db.createClassFeature({
            id: "class-feature-sorcerer-clockwork-soul-clockwork-magic",
            name: "Clockwork Magic",
            level: 3,
            description: "Clockwork Magic description."
        }),
        sorcerer_clockwork_soul_restore_balance: await db.createClassFeature({
            id: "class-feature-sorcerer-clockwork-soul-restore-balance",
            name: "Restore Balance",
            level: 3,
            description: "Restore Balance description."
        }),
        sorcerer_clockwork_soul_trance_of_order: await db.createClassFeature({
            id: "class-feature-sorcerer-clockwork-soul-trance-of-order",
            name: "Trance of Order",
            level: 3,
            description: "Trance of Order description."
        }),
        sorcerer_lunar_sorcery_moonfire: await db.createClassFeature({
            id: "class-feature-sorcerer-lunar-sorcery-moonfire",
            name: "Moonfire",
            level: 3,
            description: "Moonfire description."
        }),
        sorcerer_lunar_sorcery_lunar_magic: await db.createClassFeature({
            id: "class-feature-sorcerer-lunar-sorcery-lunar-magic",
            name: "Lunar Magic",
            level: 3,
            description: "Lunar Magic description."
        }),
        sorcerer_lunar_sorcery_diffusing_evasion: await db.createClassFeature({
            id: "class-feature-sorcerer-lunar-sorcery-diffusing-evasion",
            name: "Diffusing Evasion",
            level: 3,
            description: "Diffusing Evasion description."
        }),
        sorcerer_shadow_magic_eyes_of_the_dark: await db.createClassFeature({
            id: "class-feature-sorcerer-shadow-magic-eyes-of-the-dark",
            name: "Eyes of the Dark",
            level: 3,
            description: "Eyes of the Dark description."
        }),
        sorcerer_shadow_magic_strength_of_the_grave: await db.createClassFeature({
            id: "class-feature-sorcerer-shadow-magic-strength-of-the-grave",
            name: "Strength of the Grave",
            level: 3,
            description: "Strength of the Grave description."
        }),
        sorcerer_shadow_magic_shadow_walk: await db.createClassFeature({
            id: "class-feature-sorcerer-shadow-magic-shadow-walk",
            name: "Shadow Walk",
            level: 3,
            description: "Shadow Walk description."
        }),
        sorcerer_storm_sorcery_tempestuous_magic: await db.createClassFeature({
            id: "class-feature-sorcerer-storm-sorcery-tempestuous-magic",
            name: "Tempestuous Magic",
            level: 3,
            description: "Tempestuous Magic description."
        }),
        sorcerer_storm_sorcery_heart_of_the_storm: await db.createClassFeature({
            id: "class-feature-sorcerer-storm-sorcery-heart-of-the-storm",
            name: "Heart of the Storm",
            level: 3,
            description: "Heart of the Storm description."
        }),
        sorcerer_storm_sorcery_storms_fury: await db.createClassFeature({
            id: "class-feature-sorcerer-storm-sorcery-storms-fury",
            name: "Storm's Fury",
            level: 3,
            description: "Storm's Fury description."
        }),
        warlock_the_celestial_bonus_cantrips: await db.createClassFeature({
            id: "class-feature-warlock-the-celestial-bonus-cantrips",
            name: "Bonus Cantrips",
            level: 3,
            description: "Bonus Cantrips description."
        }),
        warlock_the_celestial_healing_light: await db.createClassFeature({
            id: "class-feature-warlock-the-celestial-healing-light",
            name: "Healing Light",
            level: 3,
            description: "Healing Light description."
        }),
        warlock_the_celestial_radiant_soul: await db.createClassFeature({
            id: "class-feature-warlock-the-celestial-radiant-soul",
            name: "Radiant Soul",
            level: 3,
            description: "Radiant Soul description."
        }),
        warlock_the_fathomless_tentacle_of_the_deeps: await db.createClassFeature({
            id: "class-feature-warlock-the-fathomless-tentacle-of-the-deeps",
            name: "Tentacle of the Deeps",
            level: 3,
            description: "Tentacle of the Deeps description."
        }),
        warlock_the_fathomless_gift_of_the_sea: await db.createClassFeature({
            id: "class-feature-warlock-the-fathomless-gift-of-the-sea",
            name: "Gift of the Sea",
            level: 3,
            description: "Gift of the Sea description."
        }),
        warlock_the_fathomless_guardian_coil: await db.createClassFeature({
            id: "class-feature-warlock-the-fathomless-guardian-coil",
            name: "Guardian Coil",
            level: 3,
            description: "Guardian Coil description."
        }),
        warlock_the_genie_genies_vessel: await db.createClassFeature({
            id: "class-feature-warlock-the-genie-genies-vessel",
            name: "Genie's Vessel",
            level: 3,
            description: "Genie's Vessel description."
        }),
        warlock_the_genie_elemental_gift: await db.createClassFeature({
            id: "class-feature-warlock-the-genie-elemental-gift",
            name: "Elemental Gift",
            level: 3,
            description: "Elemental Gift description."
        }),
        warlock_the_genie_protective_benefaction: await db.createClassFeature({
            id: "class-feature-warlock-the-genie-protective-benefaction",
            name: "Protective Benefaction",
            level: 3,
            description: "Protective Benefaction description."
        }),
        warlock_the_hexblade_hex_warrior: await db.createClassFeature({
            id: "class-feature-warlock-the-hexblade-hex-warrior",
            name: "Hex Warrior",
            level: 3,
            description: "Hex Warrior description."
        }),
        warlock_the_hexblade_hexblades_curse: await db.createClassFeature({
            id: "class-feature-warlock-the-hexblade-hexblades-curse",
            name: "Hexblade's Curse",
            level: 3,
            description: "Hexblade's Curse description."
        }),
        warlock_the_hexblade_accursed_specter: await db.createClassFeature({
            id: "class-feature-warlock-the-hexblade-accursed-specter",
            name: "Accursed Specter",
            level: 3,
            description: "Accursed Specter description."
        }),
        warlock_the_undead_form_of_dread: await db.createClassFeature({
            id: "class-feature-warlock-the-undead-form-of-dread",
            name: "Form of Dread",
            level: 3,
            description: "Form of Dread description."
        }),
        warlock_the_undead_ghostly_gaze: await db.createClassFeature({
            id: "class-feature-warlock-the-undead-ghostly-gaze",
            name: "Ghostly Gaze",
            level: 3,
            description: "Ghostly Gaze description."
        }),
        warlock_the_undead_defy_death: await db.createClassFeature({
            id: "class-feature-warlock-the-undead-defy-death",
            name: "Defy Death",
            level: 3,
            description: "Defy Death description."
        }),
        warlock_the_undying_among_the_dead: await db.createClassFeature({
            id: "class-feature-warlock-the-undying-among-the-dead",
            name: "Among the Dead",
            level: 3,
            description: "Among the Dead description."
        }),
        warlock_the_undying_defy_death: await db.createClassFeature({
            id: "class-feature-warlock-the-undying-defy-death",
            name: "Defy Death",
            level: 3,
            description: "Defy Death description."
        }),
        warlock_the_undying_undying_nature: await db.createClassFeature({
            id: "class-feature-warlock-the-undying-undying-nature",
            name: "Undying Nature",
            level: 3,
            description: "Undying Nature description."
        }),
        wizard_school_of_abjuration_arcane_ward: await db.createClassFeature({
            id: "class-feature-wizard-school-of-abjuration-arcane-ward",
            name: "Arcane Ward",
            level: 3,
            description: "Arcane Ward description."
        }),
        wizard_school_of_abjuration_projected_ward: await db.createClassFeature({
            id: "class-feature-wizard-school-of-abjuration-projected-ward",
            name: "Projected Ward",
            level: 3,
            description: "Projected Ward description."
        }),
        wizard_school_of_abjuration_improved_abjuration: await db.createClassFeature({
            id: "class-feature-wizard-school-of-abjuration-improved-abjuration",
            name: "Improved Abjuration",
            level: 3,
            description: "Improved Abjuration description."
        }),
        wizard_school_of_bladesinging_training_in_war_and_song: await db.createClassFeature({
            id: "class-feature-wizard-school-of-bladesinging-training-in-war-and-song",
            name: "Training in War and Song",
            level: 3,
            description: "Training in War and Song description."
        }),
        wizard_school_of_bladesinging_bladesong: await db.createClassFeature({
            id: "class-feature-wizard-school-of-bladesinging-bladesong",
            name: "Bladesong",
            level: 3,
            description: "Bladesong description."
        }),
        wizard_school_of_bladesinging_extra_attack: await db.createClassFeature({
            id: "class-feature-wizard-school-of-bladesinging-extra-attack",
            name: "Extra Attack",
            level: 3,
            description: "Extra Attack description."
        }),
        wizard_school_of_chronurgy_chronal_shift: await db.createClassFeature({
            id: "class-feature-wizard-school-of-chronurgy-chronal-shift",
            name: "Chronal Shift",
            level: 3,
            description: "Chronal Shift description."
        }),
        wizard_school_of_chronurgy_momentary_stasis: await db.createClassFeature({
            id: "class-feature-wizard-school-of-chronurgy-momentary-stasis",
            name: "Momentary Stasis",
            level: 3,
            description: "Momentary Stasis description."
        }),
        wizard_school_of_chronurgy_convergent_future: await db.createClassFeature({
            id: "class-feature-wizard-school-of-chronurgy-convergent-future",
            name: "Convergent Future",
            level: 3,
            description: "Convergent Future description."
        }),
        wizard_school_of_conjuration_minor_conjuration: await db.createClassFeature({
            id: "class-feature-wizard-school-of-conjuration-minor-conjuration",
            name: "Minor Conjuration",
            level: 3,
            description: "Minor Conjuration description."
        }),
        wizard_school_of_conjuration_benign_transposition: await db.createClassFeature({
            id: "class-feature-wizard-school-of-conjuration-benign-transposition",
            name: "Benign Transposition",
            level: 3,
            description: "Benign Transposition description."
        }),
        wizard_school_of_conjuration_focused_conjuration: await db.createClassFeature({
            id: "class-feature-wizard-school-of-conjuration-focused-conjuration",
            name: "Focused Conjuration",
            level: 3,
            description: "Focused Conjuration description."
        }),
        wizard_school_of_enchantment_hypnotic_gaze: await db.createClassFeature({
            id: "class-feature-wizard-school-of-enchantment-hypnotic-gaze",
            name: "Hypnotic Gaze",
            level: 3,
            description: "Hypnotic Gaze description."
        }),
        wizard_school_of_enchantment_instinctive_charm: await db.createClassFeature({
            id: "class-feature-wizard-school-of-enchantment-instinctive-charm",
            name: "Instinctive Charm",
            level: 3,
            description: "Instinctive Charm description."
        }),
        wizard_school_of_enchantment_split_enchantment: await db.createClassFeature({
            id: "class-feature-wizard-school-of-enchantment-split-enchantment",
            name: "Split Enchantment",
            level: 3,
            description: "Split Enchantment description."
        }),
        wizard_school_of_graviturgy_adjust_density: await db.createClassFeature({
            id: "class-feature-wizard-school-of-graviturgy-adjust-density",
            name: "Adjust Density",
            level: 3,
            description: "Adjust Density description."
        }),
        wizard_school_of_graviturgy_gravity_well: await db.createClassFeature({
            id: "class-feature-wizard-school-of-graviturgy-gravity-well",
            name: "Gravity Well",
            level: 3,
            description: "Gravity Well description."
        }),
        wizard_school_of_graviturgy_mighty_leap: await db.createClassFeature({
            id: "class-feature-wizard-school-of-graviturgy-mighty-leap",
            name: "Mighty Leap",
            level: 3,
            description: "Mighty Leap description."
        }),
        wizard_school_of_necromancy_grim_harvest: await db.createClassFeature({
            id: "class-feature-wizard-school-of-necromancy-grim-harvest",
            name: "Grim Harvest",
            level: 3,
            description: "Grim Harvest description."
        }),
        wizard_school_of_necromancy_undead_thralls: await db.createClassFeature({
            id: "class-feature-wizard-school-of-necromancy-undead-thralls",
            name: "Undead Thralls",
            level: 3,
            description: "Undead Thralls description."
        }),
        wizard_school_of_necromancy_inured_to_undeath: await db.createClassFeature({
            id: "class-feature-wizard-school-of-necromancy-inured-to-undeath",
            name: "Inured to Undeath",
            level: 3,
            description: "Inured to Undeath description."
        }),
        wizard_order_of_scribes_wizardly_quill: await db.createClassFeature({
            id: "class-feature-wizard-order-of-scribes-wizardly-quill",
            name: "Wizardly Quill",
            level: 3,
            description: "Wizardly Quill description."
        }),
        wizard_order_of_scribes_awakened_spellbook: await db.createClassFeature({
            id: "class-feature-wizard-order-of-scribes-awakened-spellbook",
            name: "Awakened Spellbook",
            level: 3,
            description: "Awakened Spellbook description."
        }),
        wizard_order_of_scribes_manifest_mind: await db.createClassFeature({
            id: "class-feature-wizard-order-of-scribes-manifest-mind",
            name: "Manifest Mind",
            level: 3,
            description: "Manifest Mind description."
        }),
        wizard_school_of_transmutation_minor_alchemy: await db.createClassFeature({
            id: "class-feature-wizard-school-of-transmutation-minor-alchemy",
            name: "Minor Alchemy",
            level: 3,
            description: "Minor Alchemy description."
        }),
        wizard_school_of_transmutation_transmuters_stone: await db.createClassFeature({
            id: "class-feature-wizard-school-of-transmutation-transmuters-stone",
            name: "Transmuter's Stone",
            level: 3,
            description: "Transmuter's Stone description."
        }),
        wizard_school_of_transmutation_shapechanger: await db.createClassFeature({
            id: "class-feature-wizard-school-of-transmutation-shapechanger",
            name: "Shapechanger",
            level: 3,
            description: "Shapechanger description."
        }),
        wizard_war_magic_arcane_deflection: await db.createClassFeature({
            id: "class-feature-wizard-war-magic-arcane-deflection",
            name: "Arcane Deflection",
            level: 3,
            description: "Arcane Deflection description."
        }),
        wizard_war_magic_tactical_wit: await db.createClassFeature({
            id: "class-feature-wizard-war-magic-tactical-wit",
            name: "Tactical Wit",
            level: 3,
            description: "Tactical Wit description."
        }),
        wizard_war_magic_power_surge: await db.createClassFeature({
            id: "class-feature-wizard-war-magic-power-surge",
            name: "Power Surge",
            level: 3,
            description: "Power Surge description."
        })
    }
} */