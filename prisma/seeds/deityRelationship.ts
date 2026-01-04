import { Prisma, DeityRelationshipCategory } from "@prismagen/client";
import * as db from "@lib/db-seed";
import { Deities } from "./index";

type DeityRelationshipPayload = Prisma.DeityRelationshipGetPayload<{}>;
export interface DeityRelationships {
    cyric_ally_shar: DeityRelationshipPayload;
    cyric_ally_talona: DeityRelationshipPayload;
    cyric_conflict_mystra: DeityRelationshipPayload;
    cyric_conflict_kelemvor: DeityRelationshipPayload;
    cyric_conflict_tempus: DeityRelationshipPayload;
    cyric_conflict_lathander: DeityRelationshipPayload;
    tempus_ally_tymora: DeityRelationshipPayload;
    tempus_ally_lathander: DeityRelationshipPayload;
    tempus_ally_mystra: DeityRelationshipPayload;
    tempus_conflict_bane: DeityRelationshipPayload;
    tempus_conflict_talona: DeityRelationshipPayload;
    mystra_ally_corellon_larethian: DeityRelationshipPayload;
    mystra_ally_oghma: DeityRelationshipPayload;
    mystra_ally_lathander: DeityRelationshipPayload;
    mystra_conflict_bane: DeityRelationshipPayload;
    mystra_conflict_shar: DeityRelationshipPayload;
    lathander_ally_tymora: DeityRelationshipPayload;
    lathander_ally_selune: DeityRelationshipPayload;
    lathander_conflict_shar: DeityRelationshipPayload;
    lathander_conflict_bane: DeityRelationshipPayload;
    selune_ally_tymora: DeityRelationshipPayload;
    selune_ally_corellon_larethian: DeityRelationshipPayload;
    selune_conflict_shar: DeityRelationshipPayload;
    selune_conflict_cyric: DeityRelationshipPayload;
    selune_conflict_bane: DeityRelationshipPayload;
    shar_ally_bane: DeityRelationshipPayload;
    shar_ally_talona: DeityRelationshipPayload;
    oghma_ally_deneir: DeityRelationshipPayload;
    oghma_ally_lathander: DeityRelationshipPayload;
    oghma_conflict_cyric: DeityRelationshipPayload;
    oghma_conflict_shar: DeityRelationshipPayload;
    oghma_conflict_talona: DeityRelationshipPayload;
    deneir_ally_mystra: DeityRelationshipPayload;
    deneir_ally_lathander: DeityRelationshipPayload;
    deneir_conflict_cyric: DeityRelationshipPayload;
    deneir_conflict_shar: DeityRelationshipPayload;
    deneir_conflict_mask: DeityRelationshipPayload;
    mask_ally_cyric: DeityRelationshipPayload;
    mask_ally_shar: DeityRelationshipPayload;
    mask_conflict_tyr: DeityRelationshipPayload;
    mask_conflict_helm: DeityRelationshipPayload;
    helm_ally_tyr: DeityRelationshipPayload;
    helm_ally_lathander: DeityRelationshipPayload;
    helm_ally_oghma: DeityRelationshipPayload;
    helm_conflict_cyric: DeityRelationshipPayload;
    helm_conflict_talona: DeityRelationshipPayload;
    tyr_ally_lathander: DeityRelationshipPayload;
    tyr_ally_oghma: DeityRelationshipPayload;
    tyr_conflict_cyric: DeityRelationshipPayload;
    tyr_conflict_talona: DeityRelationshipPayload;
    chauntea_ally_lathander: DeityRelationshipPayload;
    chauntea_ally_tyr: DeityRelationshipPayload;
    chauntea_ally_oghma: DeityRelationshipPayload;
    chauntea_conflict_talona: DeityRelationshipPayload;
    chauntea_conflict_cyric: DeityRelationshipPayload;
    chauntea_conflict_bane: DeityRelationshipPayload;
    ilmater_ally_lathander: DeityRelationshipPayload;
    ilmater_ally_tyr: DeityRelationshipPayload;
    ilmater_ally_chauntea: DeityRelationshipPayload;
    ilmater_conflict_talona: DeityRelationshipPayload;
    ilmater_conflict_bane: DeityRelationshipPayload;
    ilmater_conflict_cyric: DeityRelationshipPayload;
    talona_conflict_lathander: DeityRelationshipPayload;
    tymora_conflict_bane: DeityRelationshipPayload;
    tymora_conflict_cyric: DeityRelationshipPayload;
    tymora_conflict_talona: DeityRelationshipPayload;
    kelemvor_ally_lathander: DeityRelationshipPayload;
    kelemvor_ally_mystra: DeityRelationshipPayload;
    kelemvor_ally_tymora: DeityRelationshipPayload;
    kelemvor_conflict_bane: DeityRelationshipPayload;
    kelemvor_conflict_talona: DeityRelationshipPayload;
    bane_ally_cyric: DeityRelationshipPayload;
    bane_ally_talona: DeityRelationshipPayload;
    moradin_ally_lathander: DeityRelationshipPayload;
    moradin_ally_mystra: DeityRelationshipPayload;
    moradin_ally_tymora: DeityRelationshipPayload;
    moradin_conflict_bane: DeityRelationshipPayload;
    moradin_conflict_cyric: DeityRelationshipPayload;
    moradin_conflict_talona: DeityRelationshipPayload;
    berronar_truesilver_ally_moradin: DeityRelationshipPayload;
    berronar_truesilver_ally_lathander: DeityRelationshipPayload;
    berronar_truesilver_ally_tymora: DeityRelationshipPayload;
    berronar_truesilver_conflict_bane: DeityRelationshipPayload;
    berronar_truesilver_conflict_cyric: DeityRelationshipPayload;
    berronar_truesilver_conflict_talona: DeityRelationshipPayload;
    clangeddin_silverbeard_ally_moradin: DeityRelationshipPayload;
    clangeddin_silverbeard_ally_lathander: DeityRelationshipPayload;
    clangeddin_silverbeard_ally_tymora: DeityRelationshipPayload;
    clangeddin_silverbeard_conflict_bane: DeityRelationshipPayload;
    clangeddin_silverbeard_conflict_cyric: DeityRelationshipPayload;
    clangeddin_silverbeard_conflict_talona: DeityRelationshipPayload;
    dugmaren_brightmantle_ally_garl_glittergold: DeityRelationshipPayload;
    dugmaren_brightmantle_ally_lathander: DeityRelationshipPayload;
    dugmaren_brightmantle_ally_mystra: DeityRelationshipPayload;
    dugmaren_brightmantle_conflict_bane: DeityRelationshipPayload;
    dugmaren_brightmantle_conflict_cyric: DeityRelationshipPayload;
    dugmaren_brightmantle_conflict_talona: DeityRelationshipPayload;
    corellon_larethian_ally_lathander: DeityRelationshipPayload;
    corellon_larethian_conflict_lolth: DeityRelationshipPayload;
    corellon_larethian_conflict_bane: DeityRelationshipPayload;
    corellon_larethian_conflict_cyric: DeityRelationshipPayload;
    lolth_ally_bane: DeityRelationshipPayload;
    lolth_ally_cyric: DeityRelationshipPayload;
    lolth_ally_shar: DeityRelationshipPayload;
    lolth_conflict_lathander: DeityRelationshipPayload;
    lolth_conflict_mystra: DeityRelationshipPayload;
    bahamut_ally_lathander: DeityRelationshipPayload;
    bahamut_ally_mystra: DeityRelationshipPayload;
    bahamut_ally_tymora: DeityRelationshipPayload;
    bahamut_conflict_tiamat: DeityRelationshipPayload;
    bahamut_conflict_bane: DeityRelationshipPayload;
    bahamut_conflict_cyric: DeityRelationshipPayload;
    tiamat_ally_bane: DeityRelationshipPayload;
    tiamat_ally_cyric: DeityRelationshipPayload;
    tiamat_ally_shar: DeityRelationshipPayload;
    tiamat_conflict_lathander: DeityRelationshipPayload;
    tiamat_conflict_mystra: DeityRelationshipPayload;
    the_raven_queen_ally_kelemvor: DeityRelationshipPayload;
    the_raven_queen_ally_lathander: DeityRelationshipPayload;
    the_raven_queen_ally_mystra: DeityRelationshipPayload;
    the_raven_queen_conflict_bane: DeityRelationshipPayload;
    the_raven_queen_conflict_cyric: DeityRelationshipPayload;
    the_raven_queen_conflict_talona: DeityRelationshipPayload;
    asmodeus_ally_bane: DeityRelationshipPayload;
    asmodeus_ally_cyric: DeityRelationshipPayload;
    asmodeus_ally_shar: DeityRelationshipPayload;
    asmodeus_conflict_lathander: DeityRelationshipPayload;
    asmodeus_conflict_mystra: DeityRelationshipPayload;
    asmodeus_conflict_tymora: DeityRelationshipPayload;
    yondalla_ally_lathander: DeityRelationshipPayload;
    yondalla_ally_tymora: DeityRelationshipPayload;
    yondalla_ally_mystra: DeityRelationshipPayload;
    yondalla_conflict_bane: DeityRelationshipPayload;
    yondalla_conflict_cyric: DeityRelationshipPayload;
    yondalla_conflict_talona: DeityRelationshipPayload;
    arvoreen_ally_lathander: DeityRelationshipPayload;
    arvoreen_ally_tymora: DeityRelationshipPayload;
    arvoreen_ally_yondalla: DeityRelationshipPayload;
    arvoreen_conflict_bane: DeityRelationshipPayload;
    arvoreen_conflict_cyric: DeityRelationshipPayload;
    arvoreen_conflict_talona: DeityRelationshipPayload;
    cyrrollalee_ally_yondalla: DeityRelationshipPayload;
    cyrrollalee_ally_lathander: DeityRelationshipPayload;
    cyrrollalee_ally_tymora: DeityRelationshipPayload;
    cyrrollalee_conflict_bane: DeityRelationshipPayload;
    cyrrollalee_conflict_cyric: DeityRelationshipPayload;
    cyrrollalee_conflict_talona: DeityRelationshipPayload;
    urogalan_ally_kelemvor: DeityRelationshipPayload;
    urogalan_ally_lathander: DeityRelationshipPayload;
    urogalan_ally_mystra: DeityRelationshipPayload;
    urogalan_conflict_bane: DeityRelationshipPayload;
    urogalan_conflict_cyric: DeityRelationshipPayload;
    urogalan_conflict_talona: DeityRelationshipPayload;
    garl_glittergold_ally_tymora: DeityRelationshipPayload;
    garl_glittergold_ally_lathander: DeityRelationshipPayload;
    garl_glittergold_ally_mystra: DeityRelationshipPayload;
    garl_glittergold_conflict_bane: DeityRelationshipPayload;
    garl_glittergold_conflict_cyric: DeityRelationshipPayload;
    garl_glittergold_conflict_talona: DeityRelationshipPayload;
    baervan_wildwanderer_ally_garl_glittergold: DeityRelationshipPayload;
    baervan_wildwanderer_ally_lathander: DeityRelationshipPayload;
    baervan_wildwanderer_ally_tymora: DeityRelationshipPayload;
    baervan_wildwanderer_conflict_bane: DeityRelationshipPayload;
    baervan_wildwanderer_conflict_cyric: DeityRelationshipPayload;
    baervan_wildwanderer_conflict_talona: DeityRelationshipPayload;
    baravar_cloakshadow_ally_garl_glittergold: DeityRelationshipPayload;
    baravar_cloakshadow_ally_tymora: DeityRelationshipPayload;
    baravar_cloakshadow_ally_lathander: DeityRelationshipPayload;
    baravar_cloakshadow_conflict_bane: DeityRelationshipPayload;
    baravar_cloakshadow_conflict_cyric: DeityRelationshipPayload;
    baravar_cloakshadow_conflict_talona: DeityRelationshipPayload;
    segojan_earthcaller_ally_garl_glittergold: DeityRelationshipPayload;
    segojan_earthcaller_ally_moradin: DeityRelationshipPayload;
    segojan_earthcaller_ally_lathander: DeityRelationshipPayload;
    segojan_earthcaller_conflict_bane: DeityRelationshipPayload;
    segojan_earthcaller_conflict_cyric: DeityRelationshipPayload;
    segojan_earthcaller_conflict_talona: DeityRelationshipPayload;
    maglubiyet_ally_bane: DeityRelationshipPayload;
    maglubiyet_ally_cyric: DeityRelationshipPayload;
    maglubiyet_ally_talona: DeityRelationshipPayload;
    maglubiyet_conflict_lathander: DeityRelationshipPayload;
    maglubiyet_conflict_mystra: DeityRelationshipPayload;
    maglubiyet_conflict_tymora: DeityRelationshipPayload;
    khurgorbaeyag_ally_maglubiyet: DeityRelationshipPayload;
    khurgorbaeyag_ally_bane: DeityRelationshipPayload;
    khurgorbaeyag_ally_cyric: DeityRelationshipPayload;
    khurgorbaeyag_conflict_lathander: DeityRelationshipPayload;
    khurgorbaeyag_conflict_mystra: DeityRelationshipPayload;
    khurgorbaeyag_conflict_tymora: DeityRelationshipPayload;
    bargrivyek_ally_maglubiyet: DeityRelationshipPayload;
    bargrivyek_ally_lathander: DeityRelationshipPayload;
    bargrivyek_ally_tymora: DeityRelationshipPayload;
    bargrivyek_conflict_bane: DeityRelationshipPayload;
    bargrivyek_conflict_cyric: DeityRelationshipPayload;
    bargrivyek_conflict_talona: DeityRelationshipPayload;
    nomog_geaya_ally_maglubiyet: DeityRelationshipPayload;
    nomog_geaya_ally_bane: DeityRelationshipPayload;
    nomog_geaya_ally_cyric: DeityRelationshipPayload;
    nomog_geaya_conflict_lathander: DeityRelationshipPayload;
    nomog_geaya_conflict_mystra: DeityRelationshipPayload;
    nomog_geaya_conflict_tymora: DeityRelationshipPayload;
    kurtulmak_ally_maglubiyet: DeityRelationshipPayload;
    kurtulmak_ally_bane: DeityRelationshipPayload;
    kurtulmak_ally_cyric: DeityRelationshipPayload;
    kurtulmak_conflict_lathander: DeityRelationshipPayload;
    kurtulmak_conflict_mystra: DeityRelationshipPayload;
    kurtulmak_conflict_tymora: DeityRelationshipPayload;
    gith_ally_lathander: DeityRelationshipPayload;
    gith_ally_mystra: DeityRelationshipPayload;
    gith_ally_tymora: DeityRelationshipPayload;
    gith_conflict_vlaakith: DeityRelationshipPayload;
    gith_conflict_bane: DeityRelationshipPayload;
    gith_conflict_cyric: DeityRelationshipPayload;
    vlaakith_ally_bane: DeityRelationshipPayload;
    vlaakith_ally_cyric: DeityRelationshipPayload;
    vlaakith_ally_shar: DeityRelationshipPayload;
    vlaakith_conflict_lathander: DeityRelationshipPayload;
    vlaakith_conflict_mystra: DeityRelationshipPayload;
    sseth_ally_merrshaulk: DeityRelationshipPayload;
    sseth_ally_bane: DeityRelationshipPayload;
    sseth_ally_cyric: DeityRelationshipPayload;
    sseth_conflict_lathander: DeityRelationshipPayload;
    sseth_conflict_mystra: DeityRelationshipPayload;
    sseth_conflict_tymora: DeityRelationshipPayload;
    merrshaulk_ally_bane: DeityRelationshipPayload;
    merrshaulk_ally_cyric: DeityRelationshipPayload;
    merrshaulk_conflict_lathander: DeityRelationshipPayload;
    merrshaulk_conflict_mystra: DeityRelationshipPayload;
    merrshaulk_conflict_tymora: DeityRelationshipPayload;
    umberlee_ally_sekolah: DeityRelationshipPayload;
    umberlee_ally_bane: DeityRelationshipPayload;
    umberlee_ally_cyric: DeityRelationshipPayload;
    umberlee_conflict_valkur: DeityRelationshipPayload;
    umberlee_conflict_lathander: DeityRelationshipPayload;
    umberlee_conflict_mystra: DeityRelationshipPayload;
    valkur_ally_deep_sashelas: DeityRelationshipPayload;
    valkur_ally_lathander: DeityRelationshipPayload;
    valkur_ally_tymora: DeityRelationshipPayload;
    valkur_conflict_sekolah: DeityRelationshipPayload;
    valkur_conflict_bane: DeityRelationshipPayload;
    deep_sashelas_ally_lathander: DeityRelationshipPayload;
    deep_sashelas_ally_mystra: DeityRelationshipPayload;
    deep_sashelas_conflict_sekolah: DeityRelationshipPayload;
    deep_sashelas_conflict_bane: DeityRelationshipPayload;
    deep_sashelas_conflict_cyric: DeityRelationshipPayload;
    sekolah_ally_bane: DeityRelationshipPayload;
    sekolah_ally_cyric: DeityRelationshipPayload;
    sekolah_conflict_lathander: DeityRelationshipPayload;
}

interface SeedDeityRelationshipsParams {
    deities: Deities;
}
export async function seedDeityRelationships(params: SeedDeityRelationshipsParams): Promise<DeityRelationships> {
    const { deities } = params;
    return {
        cyric_ally_shar: await db.createDeityRelationship({
            id: "cyric-ally-shar",
            deityId: deities.cyric.id,
            relatedDeityId: deities.shar.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        cyric_ally_talona: await db.createDeityRelationship({
            id: "cyric-ally-talona",
            deityId: deities.cyric.id,
            relatedDeityId: deities.talona.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        cyric_conflict_mystra: await db.createDeityRelationship({
            id: "cyric-conflict-mystra",
            deityId: deities.cyric.id,
            relatedDeityId: deities.mystra.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        cyric_conflict_kelemvor: await db.createDeityRelationship({
            id: "cyric-conflict-kelemvor",
            deityId: deities.cyric.id,
            relatedDeityId: deities.kelemvor.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        cyric_conflict_tempus: await db.createDeityRelationship({
            id: "cyric-conflict-tempus",
            deityId: deities.cyric.id,
            relatedDeityId: deities.tempus.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        cyric_conflict_lathander: await db.createDeityRelationship({
            id: "cyric-conflict-lathander",
            deityId: deities.cyric.id,
            relatedDeityId: deities.lathander.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        tempus_ally_tymora: await db.createDeityRelationship({
            id: "tempus-ally-tymora",
            deityId: deities.tempus.id,
            relatedDeityId: deities.tymora.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        tempus_ally_lathander: await db.createDeityRelationship({
            id: "tempus-ally-lathander",
            deityId: deities.tempus.id,
            relatedDeityId: deities.lathander.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        tempus_ally_mystra: await db.createDeityRelationship({
            id: "tempus-ally-mystra",
            deityId: deities.tempus.id,
            relatedDeityId: deities.mystra.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        tempus_conflict_bane: await db.createDeityRelationship({
            id: "tempus-conflict-bane",
            deityId: deities.tempus.id,
            relatedDeityId: deities.bane.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        tempus_conflict_talona: await db.createDeityRelationship({
            id: "tempus-conflict-talona",
            deityId: deities.tempus.id,
            relatedDeityId: deities.talona.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        mystra_ally_corellon_larethian: await db.createDeityRelationship({
            id: "mystra-ally-corellon-larethian",
            deityId: deities.mystra.id,
            relatedDeityId: deities.corellon_larethian.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        mystra_ally_oghma: await db.createDeityRelationship({
            id: "mystra-ally-oghma",
            deityId: deities.mystra.id,
            relatedDeityId: deities.oghma.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        mystra_ally_lathander: await db.createDeityRelationship({
            id: "mystra-ally-lathander",
            deityId: deities.mystra.id,
            relatedDeityId: deities.lathander.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        mystra_conflict_bane: await db.createDeityRelationship({
            id: "mystra-conflict-bane",
            deityId: deities.mystra.id,
            relatedDeityId: deities.bane.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        mystra_conflict_shar: await db.createDeityRelationship({
            id: "mystra-conflict-shar",
            deityId: deities.mystra.id,
            relatedDeityId: deities.shar.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        lathander_ally_tymora: await db.createDeityRelationship({
            id: "lathander-ally-tymora",
            deityId: deities.lathander.id,
            relatedDeityId: deities.tymora.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        lathander_ally_selune: await db.createDeityRelationship({
            id: "lathander-ally-selune",
            deityId: deities.lathander.id,
            relatedDeityId: deities.selune.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        lathander_conflict_shar: await db.createDeityRelationship({
            id: "lathander-conflict-shar",
            deityId: deities.lathander.id,
            relatedDeityId: deities.shar.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        lathander_conflict_bane: await db.createDeityRelationship({
            id: "lathander-conflict-bane",
            deityId: deities.lathander.id,
            relatedDeityId: deities.bane.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        selune_ally_tymora: await db.createDeityRelationship({
            id: "selune-ally-tymora",
            deityId: deities.selune.id,
            relatedDeityId: deities.tymora.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        selune_ally_corellon_larethian: await db.createDeityRelationship({
            id: "selune-ally-corellon-larethian",
            deityId: deities.selune.id,
            relatedDeityId: deities.corellon_larethian.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        selune_conflict_shar: await db.createDeityRelationship({
            id: "selune-conflict-shar",
            deityId: deities.selune.id,
            relatedDeityId: deities.shar.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        selune_conflict_cyric: await db.createDeityRelationship({
            id: "selune-conflict-cyric",
            deityId: deities.selune.id,
            relatedDeityId: deities.cyric.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        selune_conflict_bane: await db.createDeityRelationship({
            id: "selune-conflict-bane",
            deityId: deities.selune.id,
            relatedDeityId: deities.bane.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        shar_ally_bane: await db.createDeityRelationship({
            id: "shar-ally-bane",
            deityId: deities.shar.id,
            relatedDeityId: deities.bane.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        shar_ally_talona: await db.createDeityRelationship({
            id: "shar-ally-talona",
            deityId: deities.shar.id,
            relatedDeityId: deities.talona.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        oghma_ally_deneir: await db.createDeityRelationship({
            id: "oghma-ally-deneir",
            deityId: deities.oghma.id,
            relatedDeityId: deities.deneir.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        oghma_ally_lathander: await db.createDeityRelationship({
            id: "oghma-ally-lathander",
            deityId: deities.oghma.id,
            relatedDeityId: deities.lathander.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        oghma_conflict_cyric: await db.createDeityRelationship({
            id: "oghma-conflict-cyric",
            deityId: deities.oghma.id,
            relatedDeityId: deities.cyric.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        oghma_conflict_shar: await db.createDeityRelationship({
            id: "oghma-conflict-shar",
            deityId: deities.oghma.id,
            relatedDeityId: deities.shar.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        oghma_conflict_talona: await db.createDeityRelationship({
            id: "oghma-conflict-talona",
            deityId: deities.oghma.id,
            relatedDeityId: deities.talona.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        deneir_ally_mystra: await db.createDeityRelationship({
            id: "deneir-ally-mystra",
            deityId: deities.deneir.id,
            relatedDeityId: deities.mystra.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        deneir_ally_lathander: await db.createDeityRelationship({
            id: "deneir-ally-lathander",
            deityId: deities.deneir.id,
            relatedDeityId: deities.lathander.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        deneir_conflict_cyric: await db.createDeityRelationship({
            id: "deneir-conflict-cyric",
            deityId: deities.deneir.id,
            relatedDeityId: deities.cyric.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        deneir_conflict_shar: await db.createDeityRelationship({
            id: "deneir-conflict-shar",
            deityId: deities.deneir.id,
            relatedDeityId: deities.shar.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        deneir_conflict_mask: await db.createDeityRelationship({
            id: "deneir-conflict-mask",
            deityId: deities.deneir.id,
            relatedDeityId: deities.mask.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        mask_ally_cyric: await db.createDeityRelationship({
            id: "mask-ally-cyric",
            deityId: deities.mask.id,
            relatedDeityId: deities.cyric.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        mask_ally_shar: await db.createDeityRelationship({
            id: "mask-ally-shar",
            deityId: deities.mask.id,
            relatedDeityId: deities.shar.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        mask_conflict_tyr: await db.createDeityRelationship({
            id: "mask-conflict-tyr",
            deityId: deities.mask.id,
            relatedDeityId: deities.tyr.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        mask_conflict_helm: await db.createDeityRelationship({
            id: "mask-conflict-helm",
            deityId: deities.mask.id,
            relatedDeityId: deities.helm.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        helm_ally_tyr: await db.createDeityRelationship({
            id: "helm-ally-tyr",
            deityId: deities.helm.id,
            relatedDeityId: deities.tyr.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        helm_ally_lathander: await db.createDeityRelationship({
            id: "helm-ally-lathander",
            deityId: deities.helm.id,
            relatedDeityId: deities.lathander.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        helm_ally_oghma: await db.createDeityRelationship({
            id: "helm-ally-oghma",
            deityId: deities.helm.id,
            relatedDeityId: deities.oghma.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        helm_conflict_cyric: await db.createDeityRelationship({
            id: "helm-conflict-cyric",
            deityId: deities.helm.id,
            relatedDeityId: deities.cyric.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        helm_conflict_talona: await db.createDeityRelationship({
            id: "helm-conflict-talona",
            deityId: deities.helm.id,
            relatedDeityId: deities.talona.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        tyr_ally_lathander: await db.createDeityRelationship({
            id: "tyr-ally-lathander",
            deityId: deities.tyr.id,
            relatedDeityId: deities.lathander.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        tyr_ally_oghma: await db.createDeityRelationship({
            id: "tyr-ally-oghma",
            deityId: deities.tyr.id,
            relatedDeityId: deities.oghma.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        tyr_conflict_cyric: await db.createDeityRelationship({
            id: "tyr-conflict-cyric",
            deityId: deities.tyr.id,
            relatedDeityId: deities.cyric.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        tyr_conflict_talona: await db.createDeityRelationship({
            id: "tyr-conflict-talona",
            deityId: deities.tyr.id,
            relatedDeityId: deities.talona.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        chauntea_ally_lathander: await db.createDeityRelationship({
            id: "chauntea-ally-lathander",
            deityId: deities.chauntea.id,
            relatedDeityId: deities.lathander.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        chauntea_ally_tyr: await db.createDeityRelationship({
            id: "chauntea-ally-tyr",
            deityId: deities.chauntea.id,
            relatedDeityId: deities.tyr.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        chauntea_ally_oghma: await db.createDeityRelationship({
            id: "chauntea-ally-oghma",
            deityId: deities.chauntea.id,
            relatedDeityId: deities.oghma.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        chauntea_conflict_talona: await db.createDeityRelationship({
            id: "chauntea-conflict-talona",
            deityId: deities.chauntea.id,
            relatedDeityId: deities.talona.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        chauntea_conflict_cyric: await db.createDeityRelationship({
            id: "chauntea-conflict-cyric",
            deityId: deities.chauntea.id,
            relatedDeityId: deities.cyric.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        chauntea_conflict_bane: await db.createDeityRelationship({
            id: "chauntea-conflict-bane",
            deityId: deities.chauntea.id,
            relatedDeityId: deities.bane.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        ilmater_ally_lathander: await db.createDeityRelationship({
            id: "ilmater-ally-lathander",
            deityId: deities.ilmater.id,
            relatedDeityId: deities.lathander.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        ilmater_ally_tyr: await db.createDeityRelationship({
            id: "ilmater-ally-tyr",
            deityId: deities.ilmater.id,
            relatedDeityId: deities.tyr.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        ilmater_ally_chauntea: await db.createDeityRelationship({
            id: "ilmater-ally-chauntea",
            deityId: deities.ilmater.id,
            relatedDeityId: deities.chauntea.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        ilmater_conflict_talona: await db.createDeityRelationship({
            id: "ilmater-conflict-talona",
            deityId: deities.ilmater.id,
            relatedDeityId: deities.talona.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        ilmater_conflict_bane: await db.createDeityRelationship({
            id: "ilmater-conflict-bane",
            deityId: deities.ilmater.id,
            relatedDeityId: deities.bane.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        ilmater_conflict_cyric: await db.createDeityRelationship({
            id: "ilmater-conflict-cyric",
            deityId: deities.ilmater.id,
            relatedDeityId: deities.cyric.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        talona_conflict_lathander: await db.createDeityRelationship({
            id: "talona-conflict-lathander",
            deityId: deities.talona.id,
            relatedDeityId: deities.lathander.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        tymora_conflict_bane: await db.createDeityRelationship({
            id: "tymora-conflict-bane",
            deityId: deities.tymora.id,
            relatedDeityId: deities.bane.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        tymora_conflict_cyric: await db.createDeityRelationship({
            id: "tymora-conflict-cyric",
            deityId: deities.tymora.id,
            relatedDeityId: deities.cyric.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        tymora_conflict_talona: await db.createDeityRelationship({
            id: "tymora-conflict-talona",
            deityId: deities.tymora.id,
            relatedDeityId: deities.talona.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        kelemvor_ally_lathander: await db.createDeityRelationship({
            id: "kelemvor-ally-lathander",
            deityId: deities.kelemvor.id,
            relatedDeityId: deities.lathander.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        kelemvor_ally_mystra: await db.createDeityRelationship({
            id: "kelemvor-ally-mystra",
            deityId: deities.kelemvor.id,
            relatedDeityId: deities.mystra.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        kelemvor_ally_tymora: await db.createDeityRelationship({
            id: "kelemvor-ally-tymora",
            deityId: deities.kelemvor.id,
            relatedDeityId: deities.tymora.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        kelemvor_conflict_bane: await db.createDeityRelationship({
            id: "kelemvor-conflict-bane",
            deityId: deities.kelemvor.id,
            relatedDeityId: deities.bane.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        kelemvor_conflict_talona: await db.createDeityRelationship({
            id: "kelemvor-conflict-talona",
            deityId: deities.kelemvor.id,
            relatedDeityId: deities.talona.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        bane_ally_cyric: await db.createDeityRelationship({
            id: "bane-ally-cyric",
            deityId: deities.bane.id,
            relatedDeityId: deities.cyric.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        bane_ally_talona: await db.createDeityRelationship({
            id: "bane-ally-talona",
            deityId: deities.bane.id,
            relatedDeityId: deities.talona.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        moradin_ally_lathander: await db.createDeityRelationship({
            id: "moradin-ally-lathander",
            deityId: deities.moradin.id,
            relatedDeityId: deities.lathander.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        moradin_ally_mystra: await db.createDeityRelationship({
            id: "moradin-ally-mystra",
            deityId: deities.moradin.id,
            relatedDeityId: deities.mystra.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        moradin_ally_tymora: await db.createDeityRelationship({
            id: "moradin-ally-tymora",
            deityId: deities.moradin.id,
            relatedDeityId: deities.tymora.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        moradin_conflict_bane: await db.createDeityRelationship({
            id: "moradin-conflict-bane",
            deityId: deities.moradin.id,
            relatedDeityId: deities.bane.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        moradin_conflict_cyric: await db.createDeityRelationship({
            id: "moradin-conflict-cyric",
            deityId: deities.moradin.id,
            relatedDeityId: deities.cyric.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        moradin_conflict_talona: await db.createDeityRelationship({
            id: "moradin-conflict-talona",
            deityId: deities.moradin.id,
            relatedDeityId: deities.talona.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        berronar_truesilver_ally_moradin: await db.createDeityRelationship({
            id: "berronar-truesilver-ally-moradin",
            deityId: deities.berronar_truesilver.id,
            relatedDeityId: deities.moradin.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        berronar_truesilver_ally_lathander: await db.createDeityRelationship({
            id: "berronar-truesilver-ally-lathander",
            deityId: deities.berronar_truesilver.id,
            relatedDeityId: deities.lathander.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        berronar_truesilver_ally_tymora: await db.createDeityRelationship({
            id: "berronar-truesilver-ally-tymora",
            deityId: deities.berronar_truesilver.id,
            relatedDeityId: deities.tymora.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        berronar_truesilver_conflict_bane: await db.createDeityRelationship({
            id: "berronar-truesilver-conflict-bane",
            deityId: deities.berronar_truesilver.id,
            relatedDeityId: deities.bane.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        berronar_truesilver_conflict_cyric: await db.createDeityRelationship({
            id: "berronar-truesilver-conflict-cyric",
            deityId: deities.berronar_truesilver.id,
            relatedDeityId: deities.cyric.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        berronar_truesilver_conflict_talona: await db.createDeityRelationship({
            id: "berronar-truesilver-conflict-talona",
            deityId: deities.berronar_truesilver.id,
            relatedDeityId: deities.talona.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        clangeddin_silverbeard_ally_moradin: await db.createDeityRelationship({
            id: "clangeddin-silverbeard-ally-moradin",
            deityId: deities.clangeddin_silverbeard.id,
            relatedDeityId: deities.moradin.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        clangeddin_silverbeard_ally_lathander: await db.createDeityRelationship({
            id: "clangeddin-silverbeard-ally-lathander",
            deityId: deities.clangeddin_silverbeard.id,
            relatedDeityId: deities.lathander.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        clangeddin_silverbeard_ally_tymora: await db.createDeityRelationship({
            id: "clangeddin-silverbeard-ally-tymora",
            deityId: deities.clangeddin_silverbeard.id,
            relatedDeityId: deities.tymora.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        clangeddin_silverbeard_conflict_bane: await db.createDeityRelationship({
            id: "clangeddin-silverbeard-conflict-bane",
            deityId: deities.clangeddin_silverbeard.id,
            relatedDeityId: deities.bane.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        clangeddin_silverbeard_conflict_cyric: await db.createDeityRelationship({
            id: "clangeddin-silverbeard-conflict-cyric",
            deityId: deities.clangeddin_silverbeard.id,
            relatedDeityId: deities.cyric.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        clangeddin_silverbeard_conflict_talona: await db.createDeityRelationship({
            id: "clangeddin-silverbeard-conflict-talona",
            deityId: deities.clangeddin_silverbeard.id,
            relatedDeityId: deities.talona.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        dugmaren_brightmantle_ally_garl_glittergold: await db.createDeityRelationship({
            id: "dugmaren-brightmantle-ally-garl-glittergold",
            deityId: deities.dugmaren_brightmantle.id,
            relatedDeityId: deities.garl_glittergold.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        dugmaren_brightmantle_ally_lathander: await db.createDeityRelationship({
            id: "dugmaren-brightmantle-ally-lathander",
            deityId: deities.dugmaren_brightmantle.id,
            relatedDeityId: deities.lathander.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        dugmaren_brightmantle_ally_mystra: await db.createDeityRelationship({
            id: "dugmaren-brightmantle-ally-mystra",
            deityId: deities.dugmaren_brightmantle.id,
            relatedDeityId: deities.mystra.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        dugmaren_brightmantle_conflict_bane: await db.createDeityRelationship({
            id: "dugmaren-brightmantle-conflict-bane",
            deityId: deities.dugmaren_brightmantle.id,
            relatedDeityId: deities.bane.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        dugmaren_brightmantle_conflict_cyric: await db.createDeityRelationship({
            id: "dugmaren-brightmantle-conflict-cyric",
            deityId: deities.dugmaren_brightmantle.id,
            relatedDeityId: deities.cyric.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        dugmaren_brightmantle_conflict_talona: await db.createDeityRelationship({
            id: "dugmaren-brightmantle-conflict-talona",
            deityId: deities.dugmaren_brightmantle.id,
            relatedDeityId: deities.talona.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        corellon_larethian_ally_lathander: await db.createDeityRelationship({
            id: "corellon-larethian-ally-lathander",
            deityId: deities.corellon_larethian.id,
            relatedDeityId: deities.lathander.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        corellon_larethian_conflict_lolth: await db.createDeityRelationship({
            id: "corellon-larethian-conflict-lolth",
            deityId: deities.corellon_larethian.id,
            relatedDeityId: deities.lolth.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        corellon_larethian_conflict_bane: await db.createDeityRelationship({
            id: "corellon-larethian-conflict-bane",
            deityId: deities.corellon_larethian.id,
            relatedDeityId: deities.bane.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        corellon_larethian_conflict_cyric: await db.createDeityRelationship({
            id: "corellon-larethian-conflict-cyric",
            deityId: deities.corellon_larethian.id,
            relatedDeityId: deities.cyric.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        lolth_ally_bane: await db.createDeityRelationship({
            id: "lolth-ally-bane",
            deityId: deities.lolth.id,
            relatedDeityId: deities.bane.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        lolth_ally_cyric: await db.createDeityRelationship({
            id: "lolth-ally-cyric",
            deityId: deities.lolth.id,
            relatedDeityId: deities.cyric.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        lolth_ally_shar: await db.createDeityRelationship({
            id: "lolth-ally-shar",
            deityId: deities.lolth.id,
            relatedDeityId: deities.shar.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        lolth_conflict_lathander: await db.createDeityRelationship({
            id: "lolth-conflict-lathander",
            deityId: deities.lolth.id,
            relatedDeityId: deities.lathander.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        lolth_conflict_mystra: await db.createDeityRelationship({
            id: "lolth-conflict-mystra",
            deityId: deities.lolth.id,
            relatedDeityId: deities.mystra.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        bahamut_ally_lathander: await db.createDeityRelationship({
            id: "bahamut-ally-lathander",
            deityId: deities.bahamut.id,
            relatedDeityId: deities.lathander.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        bahamut_ally_mystra: await db.createDeityRelationship({
            id: "bahamut-ally-mystra",
            deityId: deities.bahamut.id,
            relatedDeityId: deities.mystra.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        bahamut_ally_tymora: await db.createDeityRelationship({
            id: "bahamut-ally-tymora",
            deityId: deities.bahamut.id,
            relatedDeityId: deities.tymora.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        bahamut_conflict_tiamat: await db.createDeityRelationship({
            id: "bahamut-conflict-tiamat",
            deityId: deities.bahamut.id,
            relatedDeityId: deities.tiamat.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        bahamut_conflict_bane: await db.createDeityRelationship({
            id: "bahamut-conflict-bane",
            deityId: deities.bahamut.id,
            relatedDeityId: deities.bane.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        bahamut_conflict_cyric: await db.createDeityRelationship({
            id: "bahamut-conflict-cyric",
            deityId: deities.bahamut.id,
            relatedDeityId: deities.cyric.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        tiamat_ally_bane: await db.createDeityRelationship({
            id: "tiamat-ally-bane",
            deityId: deities.tiamat.id,
            relatedDeityId: deities.bane.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        tiamat_ally_cyric: await db.createDeityRelationship({
            id: "tiamat-ally-cyric",
            deityId: deities.tiamat.id,
            relatedDeityId: deities.cyric.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        tiamat_ally_shar: await db.createDeityRelationship({
            id: "tiamat-ally-shar",
            deityId: deities.tiamat.id,
            relatedDeityId: deities.shar.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        tiamat_conflict_lathander: await db.createDeityRelationship({
            id: "tiamat-conflict-lathander",
            deityId: deities.tiamat.id,
            relatedDeityId: deities.lathander.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        tiamat_conflict_mystra: await db.createDeityRelationship({
            id: "tiamat-conflict-mystra",
            deityId: deities.tiamat.id,
            relatedDeityId: deities.mystra.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        the_raven_queen_ally_kelemvor: await db.createDeityRelationship({
            id: "the-raven-queen-ally-kelemvor",
            deityId: deities.the_raven_queen.id,
            relatedDeityId: deities.kelemvor.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        the_raven_queen_ally_lathander: await db.createDeityRelationship({
            id: "the-raven-queen-ally-lathander",
            deityId: deities.the_raven_queen.id,
            relatedDeityId: deities.lathander.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        the_raven_queen_ally_mystra: await db.createDeityRelationship({
            id: "the-raven-queen-ally-mystra",
            deityId: deities.the_raven_queen.id,
            relatedDeityId: deities.mystra.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        the_raven_queen_conflict_bane: await db.createDeityRelationship({
            id: "the-raven-queen-conflict-bane",
            deityId: deities.the_raven_queen.id,
            relatedDeityId: deities.bane.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        the_raven_queen_conflict_cyric: await db.createDeityRelationship({
            id: "the-raven-queen-conflict-cyric",
            deityId: deities.the_raven_queen.id,
            relatedDeityId: deities.cyric.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        the_raven_queen_conflict_talona: await db.createDeityRelationship({
            id: "the-raven-queen-conflict-talona",
            deityId: deities.the_raven_queen.id,
            relatedDeityId: deities.talona.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        asmodeus_ally_bane: await db.createDeityRelationship({
            id: "asmodeus-ally-bane",
            deityId: deities.asmodeus.id,
            relatedDeityId: deities.bane.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        asmodeus_ally_cyric: await db.createDeityRelationship({
            id: "asmodeus-ally-cyric",
            deityId: deities.asmodeus.id,
            relatedDeityId: deities.cyric.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        asmodeus_ally_shar: await db.createDeityRelationship({
            id: "asmodeus-ally-shar",
            deityId: deities.asmodeus.id,
            relatedDeityId: deities.shar.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        asmodeus_conflict_lathander: await db.createDeityRelationship({
            id: "asmodeus-conflict-lathander",
            deityId: deities.asmodeus.id,
            relatedDeityId: deities.lathander.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        asmodeus_conflict_mystra: await db.createDeityRelationship({
            id: "asmodeus-conflict-mystra",
            deityId: deities.asmodeus.id,
            relatedDeityId: deities.mystra.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        asmodeus_conflict_tymora: await db.createDeityRelationship({
            id: "asmodeus-conflict-tymora",
            deityId: deities.asmodeus.id,
            relatedDeityId: deities.tymora.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        yondalla_ally_lathander: await db.createDeityRelationship({
            id: "yondalla-ally-lathander",
            deityId: deities.yondalla.id,
            relatedDeityId: deities.lathander.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        yondalla_ally_tymora: await db.createDeityRelationship({
            id: "yondalla-ally-tymora",
            deityId: deities.yondalla.id,
            relatedDeityId: deities.tymora.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        yondalla_ally_mystra: await db.createDeityRelationship({
            id: "yondalla-ally-mystra",
            deityId: deities.yondalla.id,
            relatedDeityId: deities.mystra.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        yondalla_conflict_bane: await db.createDeityRelationship({
            id: "yondalla-conflict-bane",
            deityId: deities.yondalla.id,
            relatedDeityId: deities.bane.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        yondalla_conflict_cyric: await db.createDeityRelationship({
            id: "yondalla-conflict-cyric",
            deityId: deities.yondalla.id,
            relatedDeityId: deities.cyric.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        yondalla_conflict_talona: await db.createDeityRelationship({
            id: "yondalla-conflict-talona",
            deityId: deities.yondalla.id,
            relatedDeityId: deities.talona.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        arvoreen_ally_lathander: await db.createDeityRelationship({
            id: "arvoreen-ally-lathander",
            deityId: deities.arvoreen.id,
            relatedDeityId: deities.lathander.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        arvoreen_ally_tymora: await db.createDeityRelationship({
            id: "arvoreen-ally-tymora",
            deityId: deities.arvoreen.id,
            relatedDeityId: deities.tymora.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        arvoreen_ally_yondalla: await db.createDeityRelationship({
            id: "arvoreen-ally-yondalla",
            deityId: deities.arvoreen.id,
            relatedDeityId: deities.yondalla.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        arvoreen_conflict_bane: await db.createDeityRelationship({
            id: "arvoreen-conflict-bane",
            deityId: deities.arvoreen.id,
            relatedDeityId: deities.bane.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        arvoreen_conflict_cyric: await db.createDeityRelationship({
            id: "arvoreen-conflict-cyric",
            deityId: deities.arvoreen.id,
            relatedDeityId: deities.cyric.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        arvoreen_conflict_talona: await db.createDeityRelationship({
            id: "arvoreen-conflict-talona",
            deityId: deities.arvoreen.id,
            relatedDeityId: deities.talona.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        cyrrollalee_ally_yondalla: await db.createDeityRelationship({
            id: "cyrrollalee-ally-yondalla",
            deityId: deities.cyrrollalee.id,
            relatedDeityId: deities.yondalla.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        cyrrollalee_ally_lathander: await db.createDeityRelationship({
            id: "cyrrollalee-ally-lathander",
            deityId: deities.cyrrollalee.id,
            relatedDeityId: deities.lathander.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        cyrrollalee_ally_tymora: await db.createDeityRelationship({
            id: "cyrrollalee-ally-tymora",
            deityId: deities.cyrrollalee.id,
            relatedDeityId: deities.tymora.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        cyrrollalee_conflict_bane: await db.createDeityRelationship({
            id: "cyrrollalee-conflict-bane",
            deityId: deities.cyrrollalee.id,
            relatedDeityId: deities.bane.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        cyrrollalee_conflict_cyric: await db.createDeityRelationship({
            id: "cyrrollalee-conflict-cyric",
            deityId: deities.cyrrollalee.id,
            relatedDeityId: deities.cyric.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        cyrrollalee_conflict_talona: await db.createDeityRelationship({
            id: "cyrrollalee-conflict-talona",
            deityId: deities.cyrrollalee.id,
            relatedDeityId: deities.talona.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        urogalan_ally_kelemvor: await db.createDeityRelationship({
            id: "urogalan-ally-kelemvor",
            deityId: deities.urogalan.id,
            relatedDeityId: deities.kelemvor.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        urogalan_ally_lathander: await db.createDeityRelationship({
            id: "urogalan-ally-lathander",
            deityId: deities.urogalan.id,
            relatedDeityId: deities.lathander.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        urogalan_ally_mystra: await db.createDeityRelationship({
            id: "urogalan-ally-mystra",
            deityId: deities.urogalan.id,
            relatedDeityId: deities.mystra.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        urogalan_conflict_bane: await db.createDeityRelationship({
            id: "urogalan-conflict-bane",
            deityId: deities.urogalan.id,
            relatedDeityId: deities.bane.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        urogalan_conflict_cyric: await db.createDeityRelationship({
            id: "urogalan-conflict-cyric",
            deityId: deities.urogalan.id,
            relatedDeityId: deities.cyric.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        urogalan_conflict_talona: await db.createDeityRelationship({
            id: "urogalan-conflict-talona",
            deityId: deities.urogalan.id,
            relatedDeityId: deities.talona.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        garl_glittergold_ally_tymora: await db.createDeityRelationship({
            id: "garl-glittergold-ally-tymora",
            deityId: deities.garl_glittergold.id,
            relatedDeityId: deities.tymora.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        garl_glittergold_ally_lathander: await db.createDeityRelationship({
            id: "garl-glittergold-ally-lathander",
            deityId: deities.garl_glittergold.id,
            relatedDeityId: deities.lathander.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        garl_glittergold_ally_mystra: await db.createDeityRelationship({
            id: "garl-glittergold-ally-mystra",
            deityId: deities.garl_glittergold.id,
            relatedDeityId: deities.mystra.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        garl_glittergold_conflict_bane: await db.createDeityRelationship({
            id: "garl-glittergold-conflict-bane",
            deityId: deities.garl_glittergold.id,
            relatedDeityId: deities.bane.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        garl_glittergold_conflict_cyric: await db.createDeityRelationship({
            id: "garl-glittergold-conflict-cyric",
            deityId: deities.garl_glittergold.id,
            relatedDeityId: deities.cyric.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        garl_glittergold_conflict_talona: await db.createDeityRelationship({
            id: "garl-glittergold-conflict-talona",
            deityId: deities.garl_glittergold.id,
            relatedDeityId: deities.talona.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        baervan_wildwanderer_ally_garl_glittergold: await db.createDeityRelationship({
            id: "baervan-wildwanderer-ally-garl-glittergold",
            deityId: deities.baervan_wildwanderer.id,
            relatedDeityId: deities.garl_glittergold.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        baervan_wildwanderer_ally_lathander: await db.createDeityRelationship({
            id: "baervan-wildwanderer-ally-lathander",
            deityId: deities.baervan_wildwanderer.id,
            relatedDeityId: deities.lathander.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        baervan_wildwanderer_ally_tymora: await db.createDeityRelationship({
            id: "baervan-wildwanderer-ally-tymora",
            deityId: deities.baervan_wildwanderer.id,
            relatedDeityId: deities.tymora.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        baervan_wildwanderer_conflict_bane: await db.createDeityRelationship({
            id: "baervan-wildwanderer-conflict-bane",
            deityId: deities.baervan_wildwanderer.id,
            relatedDeityId: deities.bane.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        baervan_wildwanderer_conflict_cyric: await db.createDeityRelationship({
            id: "baervan-wildwanderer-conflict-cyric",
            deityId: deities.baervan_wildwanderer.id,
            relatedDeityId: deities.cyric.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        baervan_wildwanderer_conflict_talona: await db.createDeityRelationship({
            id: "baervan-wildwanderer-conflict-talona",
            deityId: deities.baervan_wildwanderer.id,
            relatedDeityId: deities.talona.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        baravar_cloakshadow_ally_garl_glittergold: await db.createDeityRelationship({
            id: "baravar-cloakshadow-ally-garl-glittergold",
            deityId: deities.baravar_cloakshadow.id,
            relatedDeityId: deities.garl_glittergold.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        baravar_cloakshadow_ally_tymora: await db.createDeityRelationship({
            id: "baravar-cloakshadow-ally-tymora",
            deityId: deities.baravar_cloakshadow.id,
            relatedDeityId: deities.tymora.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        baravar_cloakshadow_ally_lathander: await db.createDeityRelationship({
            id: "baravar-cloakshadow-ally-lathander",
            deityId: deities.baravar_cloakshadow.id,
            relatedDeityId: deities.lathander.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        baravar_cloakshadow_conflict_bane: await db.createDeityRelationship({
            id: "baravar-cloakshadow-conflict-bane",
            deityId: deities.baravar_cloakshadow.id,
            relatedDeityId: deities.bane.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        baravar_cloakshadow_conflict_cyric: await db.createDeityRelationship({
            id: "baravar-cloakshadow-conflict-cyric",
            deityId: deities.baravar_cloakshadow.id,
            relatedDeityId: deities.cyric.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        baravar_cloakshadow_conflict_talona: await db.createDeityRelationship({
            id: "baravar-cloakshadow-conflict-talona",
            deityId: deities.baravar_cloakshadow.id,
            relatedDeityId: deities.talona.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        segojan_earthcaller_ally_garl_glittergold: await db.createDeityRelationship({
            id: "segojan-earthcaller-ally-garl-glittergold",
            deityId: deities.segojan_earthcaller.id,
            relatedDeityId: deities.garl_glittergold.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        segojan_earthcaller_ally_moradin: await db.createDeityRelationship({
            id: "segojan-earthcaller-ally-moradin",
            deityId: deities.segojan_earthcaller.id,
            relatedDeityId: deities.moradin.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        segojan_earthcaller_ally_lathander: await db.createDeityRelationship({
            id: "segojan-earthcaller-ally-lathander",
            deityId: deities.segojan_earthcaller.id,
            relatedDeityId: deities.lathander.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        segojan_earthcaller_conflict_bane: await db.createDeityRelationship({
            id: "segojan-earthcaller-conflict-bane",
            deityId: deities.segojan_earthcaller.id,
            relatedDeityId: deities.bane.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        segojan_earthcaller_conflict_cyric: await db.createDeityRelationship({
            id: "segojan-earthcaller-conflict-cyric",
            deityId: deities.segojan_earthcaller.id,
            relatedDeityId: deities.cyric.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        segojan_earthcaller_conflict_talona: await db.createDeityRelationship({
            id: "segojan-earthcaller-conflict-talona",
            deityId: deities.segojan_earthcaller.id,
            relatedDeityId: deities.talona.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        maglubiyet_ally_bane: await db.createDeityRelationship({
            id: "maglubiyet-ally-bane",
            deityId: deities.maglubiyet.id,
            relatedDeityId: deities.bane.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        maglubiyet_ally_cyric: await db.createDeityRelationship({
            id: "maglubiyet-ally-cyric",
            deityId: deities.maglubiyet.id,
            relatedDeityId: deities.cyric.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        maglubiyet_ally_talona: await db.createDeityRelationship({
            id: "maglubiyet-ally-talona",
            deityId: deities.maglubiyet.id,
            relatedDeityId: deities.talona.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        maglubiyet_conflict_lathander: await db.createDeityRelationship({
            id: "maglubiyet-conflict-lathander",
            deityId: deities.maglubiyet.id,
            relatedDeityId: deities.lathander.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        maglubiyet_conflict_mystra: await db.createDeityRelationship({
            id: "maglubiyet-conflict-mystra",
            deityId: deities.maglubiyet.id,
            relatedDeityId: deities.mystra.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        maglubiyet_conflict_tymora: await db.createDeityRelationship({
            id: "maglubiyet-conflict-tymora",
            deityId: deities.maglubiyet.id,
            relatedDeityId: deities.tymora.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        khurgorbaeyag_ally_maglubiyet: await db.createDeityRelationship({
            id: "khurgorbaeyag-ally-maglubiyet",
            deityId: deities.khurgorbaeyag.id,
            relatedDeityId: deities.maglubiyet.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        khurgorbaeyag_ally_bane: await db.createDeityRelationship({
            id: "khurgorbaeyag-ally-bane",
            deityId: deities.khurgorbaeyag.id,
            relatedDeityId: deities.bane.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        khurgorbaeyag_ally_cyric: await db.createDeityRelationship({
            id: "khurgorbaeyag-ally-cyric",
            deityId: deities.khurgorbaeyag.id,
            relatedDeityId: deities.cyric.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        khurgorbaeyag_conflict_lathander: await db.createDeityRelationship({
            id: "khurgorbaeyag-conflict-lathander",
            deityId: deities.khurgorbaeyag.id,
            relatedDeityId: deities.lathander.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        khurgorbaeyag_conflict_mystra: await db.createDeityRelationship({
            id: "khurgorbaeyag-conflict-mystra",
            deityId: deities.khurgorbaeyag.id,
            relatedDeityId: deities.mystra.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        khurgorbaeyag_conflict_tymora: await db.createDeityRelationship({
            id: "khurgorbaeyag-conflict-tymora",
            deityId: deities.khurgorbaeyag.id,
            relatedDeityId: deities.tymora.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        bargrivyek_ally_maglubiyet: await db.createDeityRelationship({
            id: "bargrivyek-ally-maglubiyet",
            deityId: deities.bargrivyek.id,
            relatedDeityId: deities.maglubiyet.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        bargrivyek_ally_lathander: await db.createDeityRelationship({
            id: "bargrivyek-ally-lathander",
            deityId: deities.bargrivyek.id,
            relatedDeityId: deities.lathander.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        bargrivyek_ally_tymora: await db.createDeityRelationship({
            id: "bargrivyek-ally-tymora",
            deityId: deities.bargrivyek.id,
            relatedDeityId: deities.tymora.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        bargrivyek_conflict_bane: await db.createDeityRelationship({
            id: "bargrivyek-conflict-bane",
            deityId: deities.bargrivyek.id,
            relatedDeityId: deities.bane.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        bargrivyek_conflict_cyric: await db.createDeityRelationship({
            id: "bargrivyek-conflict-cyric",
            deityId: deities.bargrivyek.id,
            relatedDeityId: deities.cyric.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        bargrivyek_conflict_talona: await db.createDeityRelationship({
            id: "bargrivyek-conflict-talona",
            deityId: deities.bargrivyek.id,
            relatedDeityId: deities.talona.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        nomog_geaya_ally_maglubiyet: await db.createDeityRelationship({
            id: "nomog-geaya-ally-maglubiyet",
            deityId: deities.nomog_geaya.id,
            relatedDeityId: deities.maglubiyet.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        nomog_geaya_ally_bane: await db.createDeityRelationship({
            id: "nomog-geaya-ally-bane",
            deityId: deities.nomog_geaya.id,
            relatedDeityId: deities.bane.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        nomog_geaya_ally_cyric: await db.createDeityRelationship({
            id: "nomog-geaya-ally-cyric",
            deityId: deities.nomog_geaya.id,
            relatedDeityId: deities.cyric.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        nomog_geaya_conflict_lathander: await db.createDeityRelationship({
            id: "nomog-geaya-conflict-lathander",
            deityId: deities.nomog_geaya.id,
            relatedDeityId: deities.lathander.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        nomog_geaya_conflict_mystra: await db.createDeityRelationship({
            id: "nomog-geaya-conflict-mystra",
            deityId: deities.nomog_geaya.id,
            relatedDeityId: deities.mystra.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        nomog_geaya_conflict_tymora: await db.createDeityRelationship({
            id: "nomog-geaya-conflict-tymora",
            deityId: deities.nomog_geaya.id,
            relatedDeityId: deities.tymora.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        kurtulmak_ally_maglubiyet: await db.createDeityRelationship({
            id: "kurtulmak-ally-maglubiyet",
            deityId: deities.kurtulmak.id,
            relatedDeityId: deities.maglubiyet.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        kurtulmak_ally_bane: await db.createDeityRelationship({
            id: "kurtulmak-ally-bane",
            deityId: deities.kurtulmak.id,
            relatedDeityId: deities.bane.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        kurtulmak_ally_cyric: await db.createDeityRelationship({
            id: "kurtulmak-ally-cyric",
            deityId: deities.kurtulmak.id,
            relatedDeityId: deities.cyric.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        kurtulmak_conflict_lathander: await db.createDeityRelationship({
            id: "kurtulmak-conflict-lathander",
            deityId: deities.kurtulmak.id,
            relatedDeityId: deities.lathander.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        kurtulmak_conflict_mystra: await db.createDeityRelationship({
            id: "kurtulmak-conflict-mystra",
            deityId: deities.kurtulmak.id,
            relatedDeityId: deities.mystra.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        kurtulmak_conflict_tymora: await db.createDeityRelationship({
            id: "kurtulmak-conflict-tymora",
            deityId: deities.kurtulmak.id,
            relatedDeityId: deities.tymora.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        gith_ally_lathander: await db.createDeityRelationship({
            id: "gith-ally-lathander",
            deityId: deities.gith.id,
            relatedDeityId: deities.lathander.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        gith_ally_mystra: await db.createDeityRelationship({
            id: "gith-ally-mystra",
            deityId: deities.gith.id,
            relatedDeityId: deities.mystra.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        gith_ally_tymora: await db.createDeityRelationship({
            id: "gith-ally-tymora",
            deityId: deities.gith.id,
            relatedDeityId: deities.tymora.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        gith_conflict_vlaakith: await db.createDeityRelationship({
            id: "gith-conflict-vlaakith",
            deityId: deities.gith.id,
            relatedDeityId: deities.vlaakith.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        gith_conflict_bane: await db.createDeityRelationship({
            id: "gith-conflict-bane",
            deityId: deities.gith.id,
            relatedDeityId: deities.bane.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        gith_conflict_cyric: await db.createDeityRelationship({
            id: "gith-conflict-cyric",
            deityId: deities.gith.id,
            relatedDeityId: deities.cyric.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        vlaakith_ally_bane: await db.createDeityRelationship({
            id: "vlaakith-ally-bane",
            deityId: deities.vlaakith.id,
            relatedDeityId: deities.bane.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        vlaakith_ally_cyric: await db.createDeityRelationship({
            id: "vlaakith-ally-cyric",
            deityId: deities.vlaakith.id,
            relatedDeityId: deities.cyric.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        vlaakith_ally_shar: await db.createDeityRelationship({
            id: "vlaakith-ally-shar",
            deityId: deities.vlaakith.id,
            relatedDeityId: deities.shar.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        vlaakith_conflict_lathander: await db.createDeityRelationship({
            id: "vlaakith-conflict-lathander",
            deityId: deities.vlaakith.id,
            relatedDeityId: deities.lathander.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        vlaakith_conflict_mystra: await db.createDeityRelationship({
            id: "vlaakith-conflict-mystra",
            deityId: deities.vlaakith.id,
            relatedDeityId: deities.mystra.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        sseth_ally_merrshaulk: await db.createDeityRelationship({
            id: "sseth-ally-merrshaulk",
            deityId: deities.sseth.id,
            relatedDeityId: deities.merrshaulk.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        sseth_ally_bane: await db.createDeityRelationship({
            id: "sseth-ally-bane",
            deityId: deities.sseth.id,
            relatedDeityId: deities.bane.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        sseth_ally_cyric: await db.createDeityRelationship({
            id: "sseth-ally-cyric",
            deityId: deities.sseth.id,
            relatedDeityId: deities.cyric.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        sseth_conflict_lathander: await db.createDeityRelationship({
            id: "sseth-conflict-lathander",
            deityId: deities.sseth.id,
            relatedDeityId: deities.lathander.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        sseth_conflict_mystra: await db.createDeityRelationship({
            id: "sseth-conflict-mystra",
            deityId: deities.sseth.id,
            relatedDeityId: deities.mystra.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        sseth_conflict_tymora: await db.createDeityRelationship({
            id: "sseth-conflict-tymora",
            deityId: deities.sseth.id,
            relatedDeityId: deities.tymora.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        merrshaulk_ally_bane: await db.createDeityRelationship({
            id: "merrshaulk-ally-bane",
            deityId: deities.merrshaulk.id,
            relatedDeityId: deities.bane.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        merrshaulk_ally_cyric: await db.createDeityRelationship({
            id: "merrshaulk-ally-cyric",
            deityId: deities.merrshaulk.id,
            relatedDeityId: deities.cyric.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        merrshaulk_conflict_lathander: await db.createDeityRelationship({
            id: "merrshaulk-conflict-lathander",
            deityId: deities.merrshaulk.id,
            relatedDeityId: deities.lathander.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        merrshaulk_conflict_mystra: await db.createDeityRelationship({
            id: "merrshaulk-conflict-mystra",
            deityId: deities.merrshaulk.id,
            relatedDeityId: deities.mystra.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        merrshaulk_conflict_tymora: await db.createDeityRelationship({
            id: "merrshaulk-conflict-tymora",
            deityId: deities.merrshaulk.id,
            relatedDeityId: deities.tymora.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        umberlee_ally_sekolah: await db.createDeityRelationship({
            id: "umberlee-ally-sekolah",
            deityId: deities.umberlee.id,
            relatedDeityId: deities.sekolah.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        umberlee_ally_bane: await db.createDeityRelationship({
            id: "umberlee-ally-bane",
            deityId: deities.umberlee.id,
            relatedDeityId: deities.bane.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        umberlee_ally_cyric: await db.createDeityRelationship({
            id: "umberlee-ally-cyric",
            deityId: deities.umberlee.id,
            relatedDeityId: deities.cyric.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        umberlee_conflict_valkur: await db.createDeityRelationship({
            id: "umberlee-conflict-valkur",
            deityId: deities.umberlee.id,
            relatedDeityId: deities.valkur.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        umberlee_conflict_lathander: await db.createDeityRelationship({
            id: "umberlee-conflict-lathander",
            deityId: deities.umberlee.id,
            relatedDeityId: deities.lathander.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        umberlee_conflict_mystra: await db.createDeityRelationship({
            id: "umberlee-conflict-mystra",
            deityId: deities.umberlee.id,
            relatedDeityId: deities.mystra.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        valkur_ally_deep_sashelas: await db.createDeityRelationship({
            id: "valkur-ally-deep-sashelas",
            deityId: deities.valkur.id,
            relatedDeityId: deities.deep_sashelas.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        valkur_ally_lathander: await db.createDeityRelationship({
            id: "valkur-ally-lathander",
            deityId: deities.valkur.id,
            relatedDeityId: deities.lathander.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        valkur_ally_tymora: await db.createDeityRelationship({
            id: "valkur-ally-tymora",
            deityId: deities.valkur.id,
            relatedDeityId: deities.tymora.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        valkur_conflict_sekolah: await db.createDeityRelationship({
            id: "valkur-conflict-sekolah",
            deityId: deities.valkur.id,
            relatedDeityId: deities.sekolah.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        valkur_conflict_bane: await db.createDeityRelationship({
            id: "valkur-conflict-bane",
            deityId: deities.valkur.id,
            relatedDeityId: deities.bane.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        deep_sashelas_ally_lathander: await db.createDeityRelationship({
            id: "deep-sashelas-ally-lathander",
            deityId: deities.deep_sashelas.id,
            relatedDeityId: deities.lathander.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        deep_sashelas_ally_mystra: await db.createDeityRelationship({
            id: "deep-sashelas-ally-mystra",
            deityId: deities.deep_sashelas.id,
            relatedDeityId: deities.mystra.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        deep_sashelas_conflict_sekolah: await db.createDeityRelationship({
            id: "deep-sashelas-conflict-sekolah",
            deityId: deities.deep_sashelas.id,
            relatedDeityId: deities.sekolah.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        deep_sashelas_conflict_bane: await db.createDeityRelationship({
            id: "deep-sashelas-conflict-bane",
            deityId: deities.deep_sashelas.id,
            relatedDeityId: deities.bane.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        deep_sashelas_conflict_cyric: await db.createDeityRelationship({
            id: "deep-sashelas-conflict-cyric",
            deityId: deities.deep_sashelas.id,
            relatedDeityId: deities.cyric.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
        sekolah_ally_bane: await db.createDeityRelationship({
            id: "sekolah-ally-bane",
            deityId: deities.sekolah.id,
            relatedDeityId: deities.bane.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        sekolah_ally_cyric: await db.createDeityRelationship({
            id: "sekolah-ally-cyric",
            deityId: deities.sekolah.id,
            relatedDeityId: deities.cyric.id,
            type: DeityRelationshipCategory.ALLY,
        }),
        sekolah_conflict_lathander: await db.createDeityRelationship({
            id: "sekolah-conflict-lathander",
            deityId: deities.sekolah.id,
            relatedDeityId: deities.lathander.id,
            type: DeityRelationshipCategory.CONFLICT,
        }),
    }
}