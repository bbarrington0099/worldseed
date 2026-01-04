import { Prisma } from "@prismagen/client";
import * as db from "@lib/db-seed";
import { Deities } from "./index";

type DeityHolyDayPayload = Prisma.DeityHolyDayGetPayload<{}>;
export interface DeityHolyDays {
    cyric_the_black_sun: DeityHolyDayPayload;
    cyric_night_of_shattered_truths: DeityHolyDayPayload;
    tempus_battles_dawn: DeityHolyDayPayload;
    tempus_victorys_end: DeityHolyDayPayload;
    mystra_weaves_awakening: DeityHolyDayPayload;
    mystra_mystras_blessing: DeityHolyDayPayload;
    lathander_dawns_blessing: DeityHolyDayPayload;
    lathander_springs_awakening: DeityHolyDayPayload;
    selune_moons_blessing: DeityHolyDayPayload;
    selune_stars_guidance: DeityHolyDayPayload;
    shar_nights_embrace: DeityHolyDayPayload;
    shar_shadows_blessing: DeityHolyDayPayload;
    oghma_the_day_of_unbound_pages: DeityHolyDayPayload;
    oghma_festival_of_first_words: DeityHolyDayPayload;
    deneir_the_first_inscription: DeityHolyDayPayload;
    deneir_inkbound_vigil: DeityHolyDayPayload;
    mask_the_long_shadow: DeityHolyDayPayload;
    mask_night_of_vanishing_coin: DeityHolyDayPayload;
    helm_the_vigil: DeityHolyDayPayload;
    helm_day_of_the_watchtower: DeityHolyDayPayload;
    tyr_day_of_the_scales: DeityHolyDayPayload;
    tyr_judgment_s_dawn: DeityHolyDayPayload;
    chauntea_planting_day: DeityHolyDayPayload;
    chauntea_harvest_home: DeityHolyDayPayload;
    ilmater_day_of_tears: DeityHolyDayPayload;
    ilmater_night_of_quiet_vigil: DeityHolyDayPayload;
    talona_the_weeping_blight: DeityHolyDayPayload;
    talona_night_of_bitter_breath: DeityHolyDayPayload;
    tymora_lucks_blessing: DeityHolyDayPayload;
    tymora_adventures_call: DeityHolyDayPayload;
    beshaba_dooms_call: DeityHolyDayPayload;
    beshaba_misfortunes_blessing: DeityHolyDayPayload;
    kelemvor_deaths_judgment: DeityHolyDayPayload;
    kelemvor_justices_call: DeityHolyDayPayload;
    bane_tyrannys_call: DeityHolyDayPayload;
    bane_conquests_blessing: DeityHolyDayPayload;
    myrkul_undeaths_call: DeityHolyDayPayload;
    myrkul_necromancys_blessing: DeityHolyDayPayload;
    jergal_records_blessing: DeityHolyDayPayload;
    jergal_fates_call: DeityHolyDayPayload;
    moradin_forges_blessing: DeityHolyDayPayload;
    moradin_creations_call: DeityHolyDayPayload;
    berronar_truesilver_hearths_blessing: DeityHolyDayPayload;
    berronar_truesilver_familys_call: DeityHolyDayPayload;
    clangeddin_silverbeard_battles_call: DeityHolyDayPayload;
    clangeddin_silverbeard_honors_blessing: DeityHolyDayPayload;
    dugmaren_brightmantle_discoverys_call: DeityHolyDayPayload;
    dugmaren_brightmantle_innovations_blessing: DeityHolyDayPayload;
    vergadain_trades_blessing: DeityHolyDayPayload;
    vergadain_wealths_call: DeityHolyDayPayload;
    corellon_larethian_arts_blessing: DeityHolyDayPayload;
    corellon_larethian_creations_call: DeityHolyDayPayload;
    sehanine_moonbow_dreams_blessing: DeityHolyDayPayload;
    sehanine_moonbow_journeys_call: DeityHolyDayPayload;
    hanali_celanil_loves_blessing: DeityHolyDayPayload;
    hanali_celanil_beautys_call: DeityHolyDayPayload;
    labelas_enoreth_times_blessing: DeityHolyDayPayload;
    labelas_enoreth_wisdoms_call: DeityHolyDayPayload;
    solonor_thelandira_archerys_blessing: DeityHolyDayPayload;
    solonor_thelandira_hunts_call: DeityHolyDayPayload;
    lolth_spiders_blessing: DeityHolyDayPayload;
    lolth_deceptions_call: DeityHolyDayPayload;
    vhaeraun_shadows_blessing: DeityHolyDayPayload;
    vhaeraun_rebellions_call: DeityHolyDayPayload;
    eilistraee_songs_blessing: DeityHolyDayPayload;
    eilistraee_redemptions_call: DeityHolyDayPayload;
    gruumsh_one_eye_blood_moon: DeityHolyDayPayload;
    gruumsh_one_eye_conquest_day: DeityHolyDayPayload;
    luthic_birth_festival: DeityHolyDayPayload;
    luthic_cave_blessing: DeityHolyDayPayload;
    ilneval_strategy_day: DeityHolyDayPayload;
    ilneval_victory_feast: DeityHolyDayPayload;
    bahgtru_strength_day: DeityHolyDayPayload;
    bahgtru_loyalty_feast: DeityHolyDayPayload;
    shargaas_night_of_shadows: DeityHolyDayPayload;
    shargaas_stealth_festival: DeityHolyDayPayload;
    bahamut_day_of_justice: DeityHolyDayPayload;
    bahamut_protection_festival: DeityHolyDayPayload;
    tiamat_day_of_conquest: DeityHolyDayPayload;
    tiamat_greed_festival: DeityHolyDayPayload;
    akadi_wind_festival: DeityHolyDayPayload;
    akadi_change_day: DeityHolyDayPayload;
    grumbar_earth_day: DeityHolyDayPayload;
    grumbar_harvest_festival: DeityHolyDayPayload;
    kossuth_fire_festival: DeityHolyDayPayload;
    kossuth_renewal_day: DeityHolyDayPayload;
    istishia_water_festival: DeityHolyDayPayload;
    istishia_flow_day: DeityHolyDayPayload;
    the_raven_queen_day_of_remembrance: DeityHolyDayPayload;
    the_raven_queen_shadow_festival: DeityHolyDayPayload;
    asmodeus_day_of_binding: DeityHolyDayPayload;
    asmodeus_infernal_solstice: DeityHolyDayPayload;
    yondalla_harvest_festival: DeityHolyDayPayload;
    yondalla_family_day: DeityHolyDayPayload;
    arvoreen_defense_day: DeityHolyDayPayload;
    arvoreen_vigilance_night: DeityHolyDayPayload;
    cyrrollalee_friendship_day: DeityHolyDayPayload;
    cyrrollalee_hearth_festival: DeityHolyDayPayload;
    urogalan_earth_day: DeityHolyDayPayload;
    urogalan_burial_festival: DeityHolyDayPayload;
    garl_glittergold_joke_day: DeityHolyDayPayload;
    garl_glittergold_luck_festival: DeityHolyDayPayload;
    baervan_wildwanderer_forest_day: DeityHolyDayPayload;
    baervan_wildwanderer_travel_festival: DeityHolyDayPayload;
    baravar_cloakshadow_trick_day: DeityHolyDayPayload;
    baravar_cloakshadow_shadow_festival: DeityHolyDayPayload;
    segojan_earthcaller_earth_day: DeityHolyDayPayload;
    segojan_earthcaller_burrow_festival: DeityHolyDayPayload;
    maglubiyet_conquest_day: DeityHolyDayPayload;
    maglubiyet_supremacy_festival: DeityHolyDayPayload;
    khurgorbaeyag_slavery_day: DeityHolyDayPayload;
    khurgorbaeyag_tyranny_festival: DeityHolyDayPayload;
    bargrivyek_unity_day: DeityHolyDayPayload;
    bargrivyek_peace_festival: DeityHolyDayPayload;
    nomog_geaya_authority_day: DeityHolyDayPayload;
    nomog_geaya_war_festival: DeityHolyDayPayload;
    kurtulmak_trap_day: DeityHolyDayPayload;
    kurtulmak_tunnel_festival: DeityHolyDayPayload;
    gith_liberation_day: DeityHolyDayPayload;
    gith_freedom_festival: DeityHolyDayPayload;
    vlaakith_tyranny_day: DeityHolyDayPayload;
    vlaakith_undeath_festival: DeityHolyDayPayload;
    sseth_ambition_day: DeityHolyDayPayload;
    sseth_secrecy_festival: DeityHolyDayPayload;
    merrshaulk_decadence_day: DeityHolyDayPayload;
    merrshaulk_slumber_festival: DeityHolyDayPayload;
    umberlee_storm_day: DeityHolyDayPayload;
    umberlee_sea_festival: DeityHolyDayPayload;
    valkur_sailors_day: DeityHolyDayPayload;
    valkur_fair_seas_festival: DeityHolyDayPayload;
    deep_sashelas_creativity_day: DeityHolyDayPayload;
    deep_sashelas_knowledge_festival: DeityHolyDayPayload;
    sekolah_predation_day: DeityHolyDayPayload;
    sekolah_shark_festival: DeityHolyDayPayload;
}
interface SeedDeityHolyDaysParams {
    deities: Deities;
}
export async function seedDeityHolyDays(params: SeedDeityHolyDaysParams): Promise<DeityHolyDays> {
    const { deities } = params;
    return {
        cyric_the_black_sun: await db.createDeityHolyDay({
            id: "cyric-the-black-sun",
            name: "The Black Sun",
            deityId: deities.cyric.id,
        }),
        cyric_night_of_shattered_truths: await db.createDeityHolyDay({
            id: "cyric-night-of-shattered-truths",
            name: "Night of Shattered Truths",
            deityId: deities.cyric.id,
        }),
        tempus_battles_dawn: await db.createDeityHolyDay({
            id: "tempus-battles-dawn",
            name: "Battle's Dawn",
            deityId: deities.tempus.id,
        }),
        tempus_victorys_end: await db.createDeityHolyDay({
            id: "tempus-victorys-end",
            name: "Victory's End",
            deityId: deities.tempus.id,
        }),
        mystra_weaves_awakening: await db.createDeityHolyDay({
            id: "mystra-weaves-awakening",
            name: "Weave's Awakening",
            deityId: deities.mystra.id,
        }),
        mystra_mystras_blessing: await db.createDeityHolyDay({
            id: "mystra-mystras-blessing",
            name: "Mystra's Blessing",
            deityId: deities.mystra.id,
        }),
        lathander_dawns_blessing: await db.createDeityHolyDay({
            id: "lathander-dawns-blessing",
            name: "Dawn's Blessing",
            deityId: deities.lathander.id,
        }),
        lathander_springs_awakening: await db.createDeityHolyDay({
            id: "lathander-springs-awakening",
            name: "Spring's Awakening",
            deityId: deities.lathander.id,
        }),
        selune_moons_blessing: await db.createDeityHolyDay({
            id: "selune-moons-blessing",
            name: "Moon's Blessing",
            deityId: deities.selune.id,
        }),
        selune_stars_guidance: await db.createDeityHolyDay({
            id: "selune-stars-guidance",
            name: "Star's Guidance",
            deityId: deities.selune.id,
        }),
        shar_nights_embrace: await db.createDeityHolyDay({
            id: "shar-nights-embrace",
            name: "Night's Embrace",
            deityId: deities.shar.id,
        }),
        shar_shadows_blessing: await db.createDeityHolyDay({
            id: "shar-shadows-blessing",
            name: "Shadow's Blessing",
            deityId: deities.shar.id,
        }),
        oghma_the_day_of_unbound_pages: await db.createDeityHolyDay({
            id: "oghma-the-day-of-unbound-pages",
            name: "The Day of Unbound Pages",
            deityId: deities.oghma.id,
        }),
        oghma_festival_of_first_words: await db.createDeityHolyDay({
            id: "oghma-festival-of-first-words",
            name: "Festival of First Words",
            deityId: deities.oghma.id,
        }),
        deneir_the_first_inscription: await db.createDeityHolyDay({
            id: "deneir-the-first-inscription",
            name: "The First Inscription",
            deityId: deities.deneir.id,
        }),
        deneir_inkbound_vigil: await db.createDeityHolyDay({
            id: "deneir-inkbound-vigil",
            name: "Inkbound Vigil",
            deityId: deities.deneir.id,
        }),
        mask_the_long_shadow: await db.createDeityHolyDay({
            id: "mask-the-long-shadow",
            name: "The Long Shadow",
            deityId: deities.mask.id,
        }),
        mask_night_of_vanishing_coin: await db.createDeityHolyDay({
            id: "mask-night-of-vanishing-coin",
            name: "Night of Vanishing Coin",
            deityId: deities.mask.id,
        }),
        helm_the_vigil: await db.createDeityHolyDay({
            id: "helm-the-vigil",
            name: "The Vigil",
            deityId: deities.helm.id,
        }),
        helm_day_of_the_watchtower: await db.createDeityHolyDay({
            id: "helm-day-of-the-watchtower",
            name: "Day of the Watchtower",
            deityId: deities.helm.id,
        }),
        tyr_day_of_the_scales: await db.createDeityHolyDay({
            id: "tyr-day-of-the-scales",
            name: "Day of the Scales",
            deityId: deities.tyr.id,
        }),
        tyr_judgment_s_dawn: await db.createDeityHolyDay({
            id: "tyr-judgment-s-dawn",
            name: "Judgment’s Dawn",
            deityId: deities.tyr.id,
        }),
        chauntea_planting_day: await db.createDeityHolyDay({
            id: "chauntea-planting-day",
            name: "Planting Day",
            deityId: deities.chauntea.id,
        }),
        chauntea_harvest_home: await db.createDeityHolyDay({
            id: "chauntea-harvest-home",
            name: "Harvest Home",
            deityId: deities.chauntea.id,
        }),
        ilmater_day_of_tears: await db.createDeityHolyDay({
            id: "ilmater-day-of-tears",
            name: "Day of Tears",
            deityId: deities.ilmater.id,
        }),
        ilmater_night_of_quiet_vigil: await db.createDeityHolyDay({
            id: "ilmater-night-of-quiet-vigil",
            name: "Night of Quiet Vigil",
            deityId: deities.ilmater.id,
        }),
        talona_the_weeping_blight: await db.createDeityHolyDay({
            id: "talona-the-weeping-blight",
            name: "The Weeping Blight",
            deityId: deities.talona.id,
        }),
        talona_night_of_bitter_breath: await db.createDeityHolyDay({
            id: "talona-night-of-bitter-breath",
            name: "Night of Bitter Breath",
            deityId: deities.talona.id,
        }),
        tymora_lucks_blessing: await db.createDeityHolyDay({
            id: "tymora-lucks-blessing",
            name: "Luck's Blessing",
            deityId: deities.tymora.id,
        }),
        tymora_adventures_call: await db.createDeityHolyDay({
            id: "tymora-adventures-call",
            name: "Adventure's Call",
            deityId: deities.tymora.id,
        }),
        beshaba_dooms_call: await db.createDeityHolyDay({
            id: "beshaba-dooms-call",
            name: "Doom's Call",
            deityId: deities.beshaba.id,
        }),
        beshaba_misfortunes_blessing: await db.createDeityHolyDay({
            id: "beshaba-misfortunes-blessing",
            name: "Misfortune's Blessing",
            deityId: deities.beshaba.id,
        }),
        kelemvor_deaths_judgment: await db.createDeityHolyDay({
            id: "kelemvor-deaths-judgment",
            name: "Death's Judgment",
            deityId: deities.kelemvor.id,
        }),
        kelemvor_justices_call: await db.createDeityHolyDay({
            id: "kelemvor-justices-call",
            name: "Justice's Call",
            deityId: deities.kelemvor.id,
        }),
        bane_tyrannys_call: await db.createDeityHolyDay({
            id: "bane-tyrannys-call",
            name: "Tyranny's Call",
            deityId: deities.bane.id,
        }),
        bane_conquests_blessing: await db.createDeityHolyDay({
            id: "bane-conquests-blessing",
            name: "Conquest's Blessing",
            deityId: deities.bane.id,
        }),
        myrkul_undeaths_call: await db.createDeityHolyDay({
            id: "myrkul-undeaths-call",
            name: "Undeath's Call",
            deityId: deities.myrkul.id,
        }),
        myrkul_necromancys_blessing: await db.createDeityHolyDay({
            id: "myrkul-necromancys-blessing",
            name: "Necromancy's Blessing",
            deityId: deities.myrkul.id,
        }),
        jergal_records_blessing: await db.createDeityHolyDay({
            id: "jergal-records-blessing",
            name: "Record's Blessing",
            deityId: deities.jergal.id,
        }),
        jergal_fates_call: await db.createDeityHolyDay({
            id: "jergal-fates-call",
            name: "Fate's Call",
            deityId: deities.jergal.id,
        }),
        moradin_forges_blessing: await db.createDeityHolyDay({
            id: "moradin-forges-blessing",
            name: "Forge's Blessing",
            deityId: deities.moradin.id,
        }),
        moradin_creations_call: await db.createDeityHolyDay({
            id: "moradin-creations-call",
            name: "Creation's Call",
            deityId: deities.moradin.id,
        }),
        berronar_truesilver_hearths_blessing: await db.createDeityHolyDay({
            id: "berronar-truesilver-hearths-blessing",
            name: "Hearth's Blessing",
            deityId: deities.berronar_truesilver.id,
        }),
        berronar_truesilver_familys_call: await db.createDeityHolyDay({
            id: "berronar-truesilver-familys-call",
            name: "Family's Call",
            deityId: deities.berronar_truesilver.id,
        }),
        clangeddin_silverbeard_battles_call: await db.createDeityHolyDay({
            id: "clangeddin-silverbeard-battles-call",
            name: "Battle's Call",
            deityId: deities.clangeddin_silverbeard.id,
        }),
        clangeddin_silverbeard_honors_blessing: await db.createDeityHolyDay({
            id: "clangeddin-silverbeard-honors-blessing",
            name: "Honor's Blessing",
            deityId: deities.clangeddin_silverbeard.id,
        }),
        dugmaren_brightmantle_discoverys_call: await db.createDeityHolyDay({
            id: "dugmaren-brightmantle-discoverys-call",
            name: "Discovery's Call",
            deityId: deities.dugmaren_brightmantle.id,
        }),
        dugmaren_brightmantle_innovations_blessing: await db.createDeityHolyDay({
            id: "dugmaren-brightmantle-innovations-blessing",
            name: "Innovation's Blessing",
            deityId: deities.dugmaren_brightmantle.id,
        }),
        vergadain_trades_blessing: await db.createDeityHolyDay({
            id: "vergadain-trades-blessing",
            name: "Trade's Blessing",
            deityId: deities.vergadain.id,
        }),
        vergadain_wealths_call: await db.createDeityHolyDay({
            id: "vergadain-wealths-call",
            name: "Wealth's Call",
            deityId: deities.vergadain.id,
        }),
        corellon_larethian_arts_blessing: await db.createDeityHolyDay({
            id: "corellon-larethian-arts-blessing",
            name: "Art's Blessing",
            deityId: deities.corellon_larethian.id,
        }),
        corellon_larethian_creations_call: await db.createDeityHolyDay({
            id: "corellon-larethian-creations-call",
            name: "Creation's Call",
            deityId: deities.corellon_larethian.id,
        }),
        sehanine_moonbow_dreams_blessing: await db.createDeityHolyDay({
            id: "sehanine-moonbow-dreams-blessing",
            name: "Dream's Blessing",
            deityId: deities.sehanine_moonbow.id,
        }),
        sehanine_moonbow_journeys_call: await db.createDeityHolyDay({
            id: "sehanine-moonbow-journeys-call",
            name: "Journey's Call",
            deityId: deities.sehanine_moonbow.id,
        }),
        hanali_celanil_loves_blessing: await db.createDeityHolyDay({
            id: "hanali-celanil-loves-blessing",
            name: "Love's Blessing",
            deityId: deities.hanali_celanil.id,
        }),
        hanali_celanil_beautys_call: await db.createDeityHolyDay({
            id: "hanali-celanil-beautys-call",
            name: "Beauty's Call",
            deityId: deities.hanali_celanil.id,
        }),
        labelas_enoreth_times_blessing: await db.createDeityHolyDay({
            id: "labelas-enoreth-times-blessing",
            name: "Time's Blessing",
            deityId: deities.labelas_enoreth.id,
        }),
        labelas_enoreth_wisdoms_call: await db.createDeityHolyDay({
            id: "labelas-enoreth-wisdoms-call",
            name: "Wisdom's Call",
            deityId: deities.labelas_enoreth.id,
        }),
        solonor_thelandira_archerys_blessing: await db.createDeityHolyDay({
            id: "solonor-thelandira-archerys-blessing",
            name: "Archery's Blessing",
            deityId: deities.solonor_thelandira.id,
        }),
        solonor_thelandira_hunts_call: await db.createDeityHolyDay({
            id: "solonor-thelandira-hunts-call",
            name: "Hunt's Call",
            deityId: deities.solonor_thelandira.id,
        }),
        lolth_spiders_blessing: await db.createDeityHolyDay({
            id: "lolth-spiders-blessing",
            name: "Spider's Blessing",
            deityId: deities.lolth.id,
        }),
        lolth_deceptions_call: await db.createDeityHolyDay({
            id: "lolth-deceptions-call",
            name: "Deception's Call",
            deityId: deities.lolth.id,
        }),
        vhaeraun_shadows_blessing: await db.createDeityHolyDay({
            id: "vhaeraun-shadows-blessing",
            name: "Shadow's Blessing",
            deityId: deities.vhaeraun.id,
        }),
        vhaeraun_rebellions_call: await db.createDeityHolyDay({
            id: "vhaeraun-rebellions-call",
            name: "Rebellion's Call",
            deityId: deities.vhaeraun.id,
        }),
        eilistraee_songs_blessing: await db.createDeityHolyDay({
            id: "eilistraee-songs-blessing",
            name: "Song's Blessing",
            deityId: deities.eilistraee.id,
        }),
        eilistraee_redemptions_call: await db.createDeityHolyDay({
            id: "eilistraee-redemptions-call",
            name: "Redemption's Call",
            deityId: deities.eilistraee.id,
        }),
        gruumsh_one_eye_blood_moon: await db.createDeityHolyDay({
            id: "gruumsh-one-eye-blood-moon",
            name: "Blood Moon",
            deityId: deities.gruumsh_one_eye.id,
        }),
        gruumsh_one_eye_conquest_day: await db.createDeityHolyDay({
            id: "gruumsh-one-eye-conquest-day",
            name: "Conquest Day",
            deityId: deities.gruumsh_one_eye.id,
        }),
        luthic_birth_festival: await db.createDeityHolyDay({
            id: "luthic-birth-festival",
            name: "Birth Festival",
            deityId: deities.luthic.id,
        }),
        luthic_cave_blessing: await db.createDeityHolyDay({
            id: "luthic-cave-blessing",
            name: "Cave Blessing",
            deityId: deities.luthic.id,
        }),
        ilneval_strategy_day: await db.createDeityHolyDay({
            id: "ilneval-strategy-day",
            name: "Strategy Day",
            deityId: deities.ilneval.id,
        }),
        ilneval_victory_feast: await db.createDeityHolyDay({
            id: "ilneval-victory-feast",
            name: "Victory Feast",
            deityId: deities.ilneval.id,
        }),
        bahgtru_strength_day: await db.createDeityHolyDay({
            id: "bahgtru-strength-day",
            name: "Strength Day",
            deityId: deities.bahgtru.id,
        }),
        bahgtru_loyalty_feast: await db.createDeityHolyDay({
            id: "bahgtru-loyalty-feast",
            name: "Loyalty Feast",
            deityId: deities.bahgtru.id,
        }),
        shargaas_night_of_shadows: await db.createDeityHolyDay({
            id: "shargaas-night-of-shadows",
            name: "Night of Shadows",
            deityId: deities.shargaas.id,
        }),
        shargaas_stealth_festival: await db.createDeityHolyDay({
            id: "shargaas-stealth-festival",
            name: "Stealth Festival",
            deityId: deities.shargaas.id,
        }),
        bahamut_day_of_justice: await db.createDeityHolyDay({
            id: "bahamut-day-of-justice",
            name: "Day of Justice",
            deityId: deities.bahamut.id,
        }),
        bahamut_protection_festival: await db.createDeityHolyDay({
            id: "bahamut-protection-festival",
            name: "Protection Festival",
            deityId: deities.bahamut.id,
        }),
        tiamat_day_of_conquest: await db.createDeityHolyDay({
            id: "tiamat-day-of-conquest",
            name: "Day of Conquest",
            deityId: deities.tiamat.id,
        }),
        tiamat_greed_festival: await db.createDeityHolyDay({
            id: "tiamat-greed-festival",
            name: "Greed Festival",
            deityId: deities.tiamat.id,
        }),
        akadi_wind_festival: await db.createDeityHolyDay({
            id: "akadi-wind-festival",
            name: "Wind Festival",
            deityId: deities.akadi.id,
        }),
        akadi_change_day: await db.createDeityHolyDay({
            id: "akadi-change-day",
            name: "Change Day",
            deityId: deities.akadi.id,
        }),
        grumbar_earth_day: await db.createDeityHolyDay({
            id: "grumbar-earth-day",
            name: "Earth Day",
            deityId: deities.grumbar.id,
        }),
        grumbar_harvest_festival: await db.createDeityHolyDay({
            id: "grumbar-harvest-festival",
            name: "Harvest Festival",
            deityId: deities.grumbar.id,
        }),
        kossuth_fire_festival: await db.createDeityHolyDay({
            id: "kossuth-fire-festival",
            name: "Fire Festival",
            deityId: deities.kossuth.id,
        }),
        kossuth_renewal_day: await db.createDeityHolyDay({
            id: "kossuth-renewal-day",
            name: "Renewal Day",
            deityId: deities.kossuth.id,
        }),
        istishia_water_festival: await db.createDeityHolyDay({
            id: "istishia-water-festival",
            name: "Water Festival",
            deityId: deities.istishia.id,
        }),
        istishia_flow_day: await db.createDeityHolyDay({
            id: "istishia-flow-day",
            name: "Flow Day",
            deityId: deities.istishia.id,
        }),
        the_raven_queen_day_of_remembrance: await db.createDeityHolyDay({
            id: "the-raven-queen-day-of-remembrance",
            name: "Day of Remembrance",
            deityId: deities.the_raven_queen.id,
        }),
        the_raven_queen_shadow_festival: await db.createDeityHolyDay({
            id: "the-raven-queen-shadow-festival",
            name: "Shadow Festival",
            deityId: deities.the_raven_queen.id,
        }),
        asmodeus_day_of_binding: await db.createDeityHolyDay({
            id: "asmodeus-day-of-binding",
            name: "Day of Binding",
            deityId: deities.asmodeus.id,
        }),
        asmodeus_infernal_solstice: await db.createDeityHolyDay({
            id: "asmodeus-infernal-solstice",
            name: "Infernal Solstice",
            deityId: deities.asmodeus.id,
        }),
        yondalla_harvest_festival: await db.createDeityHolyDay({
            id: "yondalla-harvest-festival",
            name: "Harvest Festival",
            deityId: deities.yondalla.id,
        }),
        yondalla_family_day: await db.createDeityHolyDay({
            id: "yondalla-family-day",
            name: "Family Day",
            deityId: deities.yondalla.id,
        }),
        arvoreen_defense_day: await db.createDeityHolyDay({
            id: "arvoreen-defense-day",
            name: "Defense Day",
            deityId: deities.arvoreen.id,
        }),
        arvoreen_vigilance_night: await db.createDeityHolyDay({
            id: "arvoreen-vigilance-night",
            name: "Vigilance Night",
            deityId: deities.arvoreen.id,
        }),
        cyrrollalee_friendship_day: await db.createDeityHolyDay({
            id: "cyrrollalee-friendship-day",
            name: "Friendship Day",
            deityId: deities.cyrrollalee.id,
        }),
        cyrrollalee_hearth_festival: await db.createDeityHolyDay({
            id: "cyrrollalee-hearth-festival",
            name: "Hearth Festival",
            deityId: deities.cyrrollalee.id,
        }),
        urogalan_earth_day: await db.createDeityHolyDay({
            id: "urogalan-earth-day",
            name: "Earth Day",
            deityId: deities.urogalan.id,
        }),
        urogalan_burial_festival: await db.createDeityHolyDay({
            id: "urogalan-burial-festival",
            name: "Burial Festival",
            deityId: deities.urogalan.id,
        }),
        garl_glittergold_joke_day: await db.createDeityHolyDay({
            id: "garl-glittergold-joke-day",
            name: "Joke Day",
            deityId: deities.garl_glittergold.id,
        }),
        garl_glittergold_luck_festival: await db.createDeityHolyDay({
            id: "garl-glittergold-luck-festival",
            name: "Luck Festival",
            deityId: deities.garl_glittergold.id,
        }),
        baervan_wildwanderer_forest_day: await db.createDeityHolyDay({
            id: "baervan-wildwanderer-forest-day",
            name: "Forest Day",
            deityId: deities.baervan_wildwanderer.id,
        }),
        baervan_wildwanderer_travel_festival: await db.createDeityHolyDay({
            id: "baervan-wildwanderer-travel-festival",
            name: "Travel Festival",
            deityId: deities.baervan_wildwanderer.id,
        }),
        baravar_cloakshadow_trick_day: await db.createDeityHolyDay({
            id: "baravar-cloakshadow-trick-day",
            name: "Trick Day",
            deityId: deities.baravar_cloakshadow.id,
        }),
        baravar_cloakshadow_shadow_festival: await db.createDeityHolyDay({
            id: "baravar-cloakshadow-shadow-festival",
            name: "Shadow Festival",
            deityId: deities.baravar_cloakshadow.id,
        }),
        segojan_earthcaller_earth_day: await db.createDeityHolyDay({
            id: "segojan-earthcaller-earth-day",
            name: "Earth Day",
            deityId: deities.segojan_earthcaller.id,
        }),
        segojan_earthcaller_burrow_festival: await db.createDeityHolyDay({
            id: "segojan-earthcaller-burrow-festival",
            name: "Burrow Festival",
            deityId: deities.segojan_earthcaller.id,
        }),
        maglubiyet_conquest_day: await db.createDeityHolyDay({
            id: "maglubiyet-conquest-day",
            name: "Conquest Day",
            deityId: deities.maglubiyet.id,
        }),
        maglubiyet_supremacy_festival: await db.createDeityHolyDay({
            id: "maglubiyet-supremacy-festival",
            name: "Supremacy Festival",
            deityId: deities.maglubiyet.id,
        }),
        khurgorbaeyag_slavery_day: await db.createDeityHolyDay({
            id: "khurgorbaeyag-slavery-day",
            name: "Slavery Day",
            deityId: deities.khurgorbaeyag.id,
        }),
        khurgorbaeyag_tyranny_festival: await db.createDeityHolyDay({
            id: "khurgorbaeyag-tyranny-festival",
            name: "Tyranny Festival",
            deityId: deities.khurgorbaeyag.id,
        }),
        bargrivyek_unity_day: await db.createDeityHolyDay({
            id: "bargrivyek-unity-day",
            name: "Unity Day",
            deityId: deities.bargrivyek.id,
        }),
        bargrivyek_peace_festival: await db.createDeityHolyDay({
            id: "bargrivyek-peace-festival",
            name: "Peace Festival",
            deityId: deities.bargrivyek.id,
        }),
        nomog_geaya_authority_day: await db.createDeityHolyDay({
            id: "nomog-geaya-authority-day",
            name: "Authority Day",
            deityId: deities.nomog_geaya.id,
        }),
        nomog_geaya_war_festival: await db.createDeityHolyDay({
            id: "nomog-geaya-war-festival",
            name: "War Festival",
            deityId: deities.nomog_geaya.id,
        }),
        kurtulmak_trap_day: await db.createDeityHolyDay({
            id: "kurtulmak-trap-day",
            name: "Trap Day",
            deityId: deities.kurtulmak.id,
        }),
        kurtulmak_tunnel_festival: await db.createDeityHolyDay({
            id: "kurtulmak-tunnel-festival",
            name: "Tunnel Festival",
            deityId: deities.kurtulmak.id,
        }),
        gith_liberation_day: await db.createDeityHolyDay({
            id: "gith-liberation-day",
            name: "Liberation Day",
            deityId: deities.gith.id,
        }),
        gith_freedom_festival: await db.createDeityHolyDay({
            id: "gith-freedom-festival",
            name: "Freedom Festival",
            deityId: deities.gith.id,
        }),
        vlaakith_tyranny_day: await db.createDeityHolyDay({
            id: "vlaakith-tyranny-day",
            name: "Tyranny Day",
            deityId: deities.vlaakith.id,
        }),
        vlaakith_undeath_festival: await db.createDeityHolyDay({
            id: "vlaakith-undeath-festival",
            name: "Undeath Festival",
            deityId: deities.vlaakith.id,
        }),
        sseth_ambition_day: await db.createDeityHolyDay({
            id: "sseth-ambition-day",
            name: "Ambition Day",
            deityId: deities.sseth.id,
        }),
        sseth_secrecy_festival: await db.createDeityHolyDay({
            id: "sseth-secrecy-festival",
            name: "Secrecy Festival",
            deityId: deities.sseth.id,
        }),
        merrshaulk_decadence_day: await db.createDeityHolyDay({
            id: "merrshaulk-decadence-day",
            name: "Decadence Day",
            deityId: deities.merrshaulk.id,
        }),
        merrshaulk_slumber_festival: await db.createDeityHolyDay({
            id: "merrshaulk-slumber-festival",
            name: "Slumber Festival",
            deityId: deities.merrshaulk.id,
        }),
        umberlee_storm_day: await db.createDeityHolyDay({
            id: "umberlee-storm-day",
            name: "Storm Day",
            deityId: deities.umberlee.id,
        }),
        umberlee_sea_festival: await db.createDeityHolyDay({
            id: "umberlee-sea-festival",
            name: "Sea Festival",
            deityId: deities.umberlee.id,
        }),
        valkur_sailors_day: await db.createDeityHolyDay({
            id: "valkur-sailors-day",
            name: "Sailor's Day",
            deityId: deities.valkur.id,
        }),
        valkur_fair_seas_festival: await db.createDeityHolyDay({
            id: "valkur-fair-seas-festival",
            name: "Fair Seas Festival",
            deityId: deities.valkur.id,
        }),
        deep_sashelas_creativity_day: await db.createDeityHolyDay({
            id: "deep-sashelas-creativity-day",
            name: "Creativity Day",
            deityId: deities.deep_sashelas.id,
        }),
        deep_sashelas_knowledge_festival: await db.createDeityHolyDay({
            id: "deep-sashelas-knowledge-festival",
            name: "Knowledge Festival",
            deityId: deities.deep_sashelas.id,
        }),
        sekolah_predation_day: await db.createDeityHolyDay({
            id: "sekolah-predation-day",
            name: "Predation Day",
            deityId: deities.sekolah.id,
        }),
        sekolah_shark_festival: await db.createDeityHolyDay({
            id: "sekolah-shark-festival",
            name: "Shark Festival",
            deityId: deities.sekolah.id,
        }),
    }
}