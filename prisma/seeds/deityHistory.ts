import { Prisma } from "@prismagen/client";
import * as db from "@lib/db-seed";
import { Deities } from "./index";

type DeityHistoryPayload = Prisma.DeityHistoryGetPayload<{}>;
export interface DeityHistories {
    cyric_0_100_cycles_history: DeityHistoryPayload;
    cyric_100_300_cycles_history: DeityHistoryPayload;
    cyric_300_600_cycles_history: DeityHistoryPayload;
    cyric_600_800_cycles_history: DeityHistoryPayload;
    tempus_0_100_cycles_history: DeityHistoryPayload;
    tempus_100_300_cycles_history: DeityHistoryPayload;
    tempus_300_600_cycles_history: DeityHistoryPayload;
    tempus_600_800_cycles_history: DeityHistoryPayload;
    mystra_0_100_cycles_history: DeityHistoryPayload;
    mystra_100_300_cycles_history: DeityHistoryPayload;
    mystra_300_600_cycles_history: DeityHistoryPayload;
    mystra_600_800_cycles_history: DeityHistoryPayload;
    lathander_0_100_cycles_history: DeityHistoryPayload;
    lathander_100_300_cycles_history: DeityHistoryPayload;
    lathander_300_600_cycles_history: DeityHistoryPayload;
    lathander_600_800_cycles_history: DeityHistoryPayload;
    selune_0_100_cycles_history: DeityHistoryPayload;
    selune_100_300_cycles_history: DeityHistoryPayload;
    selune_300_600_cycles_history: DeityHistoryPayload;
    selune_600_800_cycles_history: DeityHistoryPayload;
    shar_0_100_cycles_history: DeityHistoryPayload;
    shar_100_300_cycles_history: DeityHistoryPayload;
    shar_300_600_cycles_history: DeityHistoryPayload;
    shar_600_800_cycles_history: DeityHistoryPayload;
    oghma_0_100_cycles_history: DeityHistoryPayload;
    oghma_100_300_cycles_history: DeityHistoryPayload;
    oghma_300_600_cycles_history: DeityHistoryPayload;
    oghma_600_800_cycles_history: DeityHistoryPayload;
    deneir_0_100_cycles_history: DeityHistoryPayload;
    deneir_100_300_cycles_history: DeityHistoryPayload;
    deneir_300_600_cycles_history: DeityHistoryPayload;
    deneir_600_800_cycles_history: DeityHistoryPayload;
    mask_0_100_cycles_history: DeityHistoryPayload;
    mask_100_300_cycles_history: DeityHistoryPayload;
    mask_300_600_cycles_history: DeityHistoryPayload;
    mask_600_800_cycles_history: DeityHistoryPayload;
    helm_0_100_cycles_history: DeityHistoryPayload;
    helm_100_300_cycles_history: DeityHistoryPayload;
    helm_300_600_cycles_history: DeityHistoryPayload;
    helm_600_800_cycles_history: DeityHistoryPayload;
    tyr_0_100_cycles_history: DeityHistoryPayload;
    tyr_100_300_cycles_history: DeityHistoryPayload;
    tyr_300_600_cycles_history: DeityHistoryPayload;
    tyr_600_800_cycles_history: DeityHistoryPayload;
    chauntea_0_100_cycles_history: DeityHistoryPayload;
    chauntea_100_300_cycles_history: DeityHistoryPayload;
    chauntea_300_600_cycles_history: DeityHistoryPayload;
    chauntea_600_800_cycles_history: DeityHistoryPayload;
    ilmater_0_100_cycles_history: DeityHistoryPayload;
    ilmater_100_300_cycles_history: DeityHistoryPayload;
    ilmater_300_600_cycles_history: DeityHistoryPayload;
    ilmater_600_800_cycles_history: DeityHistoryPayload;
    talona_0_100_cycles_history: DeityHistoryPayload;
    talona_100_300_cycles_history: DeityHistoryPayload;
    talona_300_600_cycles_history: DeityHistoryPayload;
    talona_600_800_cycles_history: DeityHistoryPayload;
    tymora_0_100_cycles_history: DeityHistoryPayload;
    tymora_100_300_cycles_history: DeityHistoryPayload;
    tymora_300_600_cycles_history: DeityHistoryPayload;
    tymora_600_800_cycles_history: DeityHistoryPayload;
    beshaba_0_100_cycles_history: DeityHistoryPayload;
    beshaba_100_300_cycles_history: DeityHistoryPayload;
    beshaba_300_600_cycles_history: DeityHistoryPayload;
    beshaba_600_800_cycles_history: DeityHistoryPayload;
    kelemvor_0_100_cycles_history: DeityHistoryPayload;
    kelemvor_100_300_cycles_history: DeityHistoryPayload;
    kelemvor_300_600_cycles_history: DeityHistoryPayload;
    kelemvor_600_800_cycles_history: DeityHistoryPayload;
    bane_0_100_cycles_history: DeityHistoryPayload;
    bane_100_300_cycles_history: DeityHistoryPayload;
    bane_300_600_cycles_history: DeityHistoryPayload;
    bane_600_800_cycles_history: DeityHistoryPayload;
    myrkul_0_100_cycles_history: DeityHistoryPayload;
    myrkul_100_300_cycles_history: DeityHistoryPayload;
    myrkul_300_600_cycles_history: DeityHistoryPayload;
    myrkul_600_800_cycles_history: DeityHistoryPayload;
    jergal_0_100_cycles_history: DeityHistoryPayload;
    jergal_100_300_cycles_history: DeityHistoryPayload;
    jergal_300_600_cycles_history: DeityHistoryPayload;
    jergal_600_800_cycles_history: DeityHistoryPayload;
    moradin_0_100_cycles_history: DeityHistoryPayload;
    moradin_100_300_cycles_history: DeityHistoryPayload;
    moradin_300_600_cycles_history: DeityHistoryPayload;
    moradin_600_800_cycles_history: DeityHistoryPayload;
    berronar_truesilver_0_100_cycles_history: DeityHistoryPayload;
    berronar_truesilver_100_300_cycles_history: DeityHistoryPayload;
    berronar_truesilver_300_600_cycles_history: DeityHistoryPayload;
    berronar_truesilver_600_800_cycles_history: DeityHistoryPayload;
    clangeddin_silverbeard_0_100_cycles_history: DeityHistoryPayload;
    clangeddin_silverbeard_100_300_cycles_history: DeityHistoryPayload;
    clangeddin_silverbeard_300_600_cycles_history: DeityHistoryPayload;
    clangeddin_silverbeard_600_800_cycles_history: DeityHistoryPayload;
    dugmaren_brightmantle_0_100_cycles_history: DeityHistoryPayload;
    dugmaren_brightmantle_100_300_cycles_history: DeityHistoryPayload;
    dugmaren_brightmantle_300_600_cycles_history: DeityHistoryPayload;
    dugmaren_brightmantle_600_800_cycles_history: DeityHistoryPayload;
    vergadain_0_100_cycles_history: DeityHistoryPayload;
    vergadain_100_300_cycles_history: DeityHistoryPayload;
    vergadain_300_600_cycles_history: DeityHistoryPayload;
    vergadain_600_800_cycles_history: DeityHistoryPayload;
    corellon_larethian_0_100_cycles_history: DeityHistoryPayload;
    corellon_larethian_100_300_cycles_history: DeityHistoryPayload;
    corellon_larethian_300_600_cycles_history: DeityHistoryPayload;
    corellon_larethian_600_800_cycles_history: DeityHistoryPayload;
    sehanine_moonbow_0_100_cycles_history: DeityHistoryPayload;
    sehanine_moonbow_100_300_cycles_history: DeityHistoryPayload;
    sehanine_moonbow_300_600_cycles_history: DeityHistoryPayload;
    sehanine_moonbow_600_800_cycles_history: DeityHistoryPayload;
    hanali_celanil_0_100_cycles_history: DeityHistoryPayload;
    hanali_celanil_100_300_cycles_history: DeityHistoryPayload;
    hanali_celanil_300_600_cycles_history: DeityHistoryPayload;
    hanali_celanil_600_800_cycles_history: DeityHistoryPayload;
    labelas_enoreth_0_100_cycles_history: DeityHistoryPayload;
    labelas_enoreth_100_300_cycles_history: DeityHistoryPayload;
    labelas_enoreth_300_600_cycles_history: DeityHistoryPayload;
    labelas_enoreth_600_800_cycles_history: DeityHistoryPayload;
    solonor_thelandira_0_100_cycles_history: DeityHistoryPayload;
    solonor_thelandira_100_300_cycles_history: DeityHistoryPayload;
    solonor_thelandira_300_600_cycles_history: DeityHistoryPayload;
    solonor_thelandira_600_800_cycles_history: DeityHistoryPayload;
    lolth_0_100_cycles_history: DeityHistoryPayload;
    lolth_100_300_cycles_history: DeityHistoryPayload;
    lolth_300_600_cycles_history: DeityHistoryPayload;
    lolth_600_800_cycles_history: DeityHistoryPayload;
    vhaeraun_0_100_cycles_history: DeityHistoryPayload;
    vhaeraun_100_300_cycles_history: DeityHistoryPayload;
    vhaeraun_300_600_cycles_history: DeityHistoryPayload;
    vhaeraun_600_800_cycles_history: DeityHistoryPayload;
    eilistraee_0_100_cycles_history: DeityHistoryPayload;
    eilistraee_100_300_cycles_history: DeityHistoryPayload;
    eilistraee_300_600_cycles_history: DeityHistoryPayload;
    eilistraee_600_800_cycles_history: DeityHistoryPayload;
    gruumsh_one_eye_0_100_cycles_history: DeityHistoryPayload;
    gruumsh_one_eye_100_300_cycles_history: DeityHistoryPayload;
    gruumsh_one_eye_300_600_cycles_history: DeityHistoryPayload;
    gruumsh_one_eye_600_800_cycles_history: DeityHistoryPayload;
    luthic_0_100_cycles_history: DeityHistoryPayload;
    luthic_100_300_cycles_history: DeityHistoryPayload;
    luthic_300_600_cycles_history: DeityHistoryPayload;
    luthic_600_800_cycles_history: DeityHistoryPayload;
    ilneval_0_100_cycles_history: DeityHistoryPayload;
    ilneval_100_300_cycles_history: DeityHistoryPayload;
    ilneval_300_600_cycles_history: DeityHistoryPayload;
    ilneval_600_800_cycles_history: DeityHistoryPayload;
    bahgtru_0_100_cycles_history: DeityHistoryPayload;
    bahgtru_100_300_cycles_history: DeityHistoryPayload;
    bahgtru_300_600_cycles_history: DeityHistoryPayload;
    bahgtru_600_800_cycles_history: DeityHistoryPayload;
    shargaas_0_100_cycles_history: DeityHistoryPayload;
    shargaas_100_300_cycles_history: DeityHistoryPayload;
    shargaas_300_600_cycles_history: DeityHistoryPayload;
    shargaas_600_800_cycles_history: DeityHistoryPayload;
    bahamut_0_100_cycles_history: DeityHistoryPayload;
    bahamut_100_300_cycles_history: DeityHistoryPayload;
    bahamut_300_600_cycles_history: DeityHistoryPayload;
    bahamut_600_800_cycles_history: DeityHistoryPayload;
    tiamat_0_100_cycles_history: DeityHistoryPayload;
    tiamat_100_300_cycles_history: DeityHistoryPayload;
    tiamat_300_600_cycles_history: DeityHistoryPayload;
    tiamat_600_800_cycles_history: DeityHistoryPayload;
    akadi_0_100_cycles_history: DeityHistoryPayload;
    akadi_100_300_cycles_history: DeityHistoryPayload;
    akadi_300_600_cycles_history: DeityHistoryPayload;
    akadi_600_800_cycles_history: DeityHistoryPayload;
    grumbar_0_100_cycles_history: DeityHistoryPayload;
    grumbar_100_300_cycles_history: DeityHistoryPayload;
    grumbar_300_600_cycles_history: DeityHistoryPayload;
    grumbar_600_800_cycles_history: DeityHistoryPayload;
    kossuth_0_100_cycles_history: DeityHistoryPayload;
    kossuth_100_300_cycles_history: DeityHistoryPayload;
    kossuth_300_600_cycles_history: DeityHistoryPayload;
    kossuth_600_800_cycles_history: DeityHistoryPayload;
    istishia_0_100_cycles_history: DeityHistoryPayload;
    istishia_100_300_cycles_history: DeityHistoryPayload;
    istishia_300_600_cycles_history: DeityHistoryPayload;
    istishia_600_800_cycles_history: DeityHistoryPayload;
    the_raven_queen_0_100_cycles_history: DeityHistoryPayload;
    the_raven_queen_100_300_cycles_history: DeityHistoryPayload;
    the_raven_queen_300_600_cycles_history: DeityHistoryPayload;
    the_raven_queen_600_800_cycles_history: DeityHistoryPayload;
    asmodeus_0_100_cycles_history: DeityHistoryPayload;
    asmodeus_100_300_cycles_history: DeityHistoryPayload;
    asmodeus_300_600_cycles_history: DeityHistoryPayload;
    asmodeus_600_800_cycles_history: DeityHistoryPayload;
    yondalla_0_100_cycles_history: DeityHistoryPayload;
    yondalla_100_300_cycles_history: DeityHistoryPayload;
    yondalla_300_600_cycles_history: DeityHistoryPayload;
    yondalla_600_800_cycles_history: DeityHistoryPayload;
    arvoreen_0_100_cycles_history: DeityHistoryPayload;
    arvoreen_100_300_cycles_history: DeityHistoryPayload;
    arvoreen_300_600_cycles_history: DeityHistoryPayload;
    arvoreen_600_800_cycles_history: DeityHistoryPayload;
    cyrrollalee_0_100_cycles_history: DeityHistoryPayload;
    cyrrollalee_100_300_cycles_history: DeityHistoryPayload;
    cyrrollalee_300_600_cycles_history: DeityHistoryPayload;
    cyrrollalee_600_800_cycles_history: DeityHistoryPayload;
    urogalan_0_100_cycles_history: DeityHistoryPayload;
    urogalan_100_300_cycles_history: DeityHistoryPayload;
    urogalan_300_600_cycles_history: DeityHistoryPayload;
    urogalan_600_800_cycles_history: DeityHistoryPayload;
    garl_glittergold_0_100_cycles_history: DeityHistoryPayload;
    garl_glittergold_100_300_cycles_history: DeityHistoryPayload;
    garl_glittergold_300_600_cycles_history: DeityHistoryPayload;
    garl_glittergold_600_800_cycles_history: DeityHistoryPayload;
    baervan_wildwanderer_0_100_cycles_history: DeityHistoryPayload;
    baervan_wildwanderer_100_300_cycles_history: DeityHistoryPayload;
    baervan_wildwanderer_300_600_cycles_history: DeityHistoryPayload;
    baervan_wildwanderer_600_800_cycles_history: DeityHistoryPayload;
    baravar_cloakshadow_0_100_cycles_history: DeityHistoryPayload;
    baravar_cloakshadow_100_300_cycles_history: DeityHistoryPayload;
    baravar_cloakshadow_300_600_cycles_history: DeityHistoryPayload;
    baravar_cloakshadow_600_800_cycles_history: DeityHistoryPayload;
    segojan_earthcaller_0_100_cycles_history: DeityHistoryPayload;
    segojan_earthcaller_100_300_cycles_history: DeityHistoryPayload;
    segojan_earthcaller_300_600_cycles_history: DeityHistoryPayload;
    segojan_earthcaller_600_800_cycles_history: DeityHistoryPayload;
    maglubiyet_0_100_cycles_history: DeityHistoryPayload;
    maglubiyet_100_300_cycles_history: DeityHistoryPayload;
    maglubiyet_300_600_cycles_history: DeityHistoryPayload;
    maglubiyet_600_800_cycles_history: DeityHistoryPayload;
    khurgorbaeyag_0_100_cycles_history: DeityHistoryPayload;
    khurgorbaeyag_100_300_cycles_history: DeityHistoryPayload;
    khurgorbaeyag_300_600_cycles_history: DeityHistoryPayload;
    khurgorbaeyag_600_800_cycles_history: DeityHistoryPayload;
    bargrivyek_0_100_cycles_history: DeityHistoryPayload;
    bargrivyek_100_300_cycles_history: DeityHistoryPayload;
    bargrivyek_300_600_cycles_history: DeityHistoryPayload;
    bargrivyek_600_800_cycles_history: DeityHistoryPayload;
    nomog_geaya_0_100_cycles_history: DeityHistoryPayload;
    nomog_geaya_100_300_cycles_history: DeityHistoryPayload;
    nomog_geaya_300_600_cycles_history: DeityHistoryPayload;
    nomog_geaya_600_800_cycles_history: DeityHistoryPayload;
    kurtulmak_0_100_cycles_history: DeityHistoryPayload;
    kurtulmak_100_300_cycles_history: DeityHistoryPayload;
    kurtulmak_300_600_cycles_history: DeityHistoryPayload;
    kurtulmak_600_800_cycles_history: DeityHistoryPayload;
    gith_0_100_cycles_history: DeityHistoryPayload;
    gith_100_300_cycles_history: DeityHistoryPayload;
    gith_300_600_cycles_history: DeityHistoryPayload;
    gith_600_800_cycles_history: DeityHistoryPayload;
    vlaakith_0_100_cycles_history: DeityHistoryPayload;
    vlaakith_100_300_cycles_history: DeityHistoryPayload;
    vlaakith_300_600_cycles_history: DeityHistoryPayload;
    vlaakith_600_800_cycles_history: DeityHistoryPayload;
    sseth_0_100_cycles_history: DeityHistoryPayload;
    sseth_100_300_cycles_history: DeityHistoryPayload;
    sseth_300_600_cycles_history: DeityHistoryPayload;
    sseth_600_800_cycles_history: DeityHistoryPayload;
    merrshaulk_0_100_cycles_history: DeityHistoryPayload;
    merrshaulk_100_300_cycles_history: DeityHistoryPayload;
    merrshaulk_300_600_cycles_history: DeityHistoryPayload;
    merrshaulk_600_800_cycles_history: DeityHistoryPayload;
    umberlee_0_100_cycles_history: DeityHistoryPayload;
    umberlee_100_300_cycles_history: DeityHistoryPayload;
    umberlee_300_600_cycles_history: DeityHistoryPayload;
    umberlee_600_800_cycles_history: DeityHistoryPayload;
    valkur_0_100_cycles_history: DeityHistoryPayload;
    valkur_100_300_cycles_history: DeityHistoryPayload;
    valkur_300_600_cycles_history: DeityHistoryPayload;
    valkur_600_800_cycles_history: DeityHistoryPayload;
    deep_sashelas_0_100_cycles_history: DeityHistoryPayload;
    deep_sashelas_100_300_cycles_history: DeityHistoryPayload;
    deep_sashelas_300_600_cycles_history: DeityHistoryPayload;
    deep_sashelas_600_800_cycles_history: DeityHistoryPayload;
    sekolah_0_100_cycles_history: DeityHistoryPayload;
    sekolah_100_300_cycles_history: DeityHistoryPayload;
    sekolah_300_600_cycles_history: DeityHistoryPayload;
    sekolah_600_800_cycles_history: DeityHistoryPayload;
}

interface SeedDeityHistoriesParams {
    deities: Deities;
}
export async function seedDeityHistories(params: SeedDeityHistoriesParams): Promise<DeityHistories> {
    const { deities } = params;
    return {
        cyric_0_100_cycles_history: await db.createDeityHistory({
            id: "cyric-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.cyric.id,
            description: "The Bringing weakened Cyric’s divine coherence, amplifying his madness. His early cults splintered, many turning violently on one another as conflicting visions spread.",
        }),
        cyric_100_300_cycles_history: await db.createDeityHistory({
            id: "cyric-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.cyric.id,
            description: "Cyricite sects began infiltrating courts and guilds, engineering assassinations and civil unrest. Several short-lived theocracies collapsed due to internal betrayal.",
        }),
        cyric_300_600_cycles_history: await db.createDeityHistory({
            id: "cyric-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.cyric.id,
            description: "A period known as the Fractured Dogma saw Cyric’s followers war against each other over contradictory revelations. Despite this, his influence grew through fear and chaos rather than devotion.",
        }),
        cyric_600_800_cycles_history: await db.createDeityHistory({
            id: "cyric-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.cyric.id,
            description: "In the current age, Cyric is worshiped primarily in secret. His cults are blamed for several major political collapses and the rise of the Veiled Knives, an infamous assassin network operating across continents.",
        }),
        tempus_0_100_cycles_history: await db.createDeityHistory({
            id: "tempus-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.tempus.id,
            description: "Initially confused by The Bringing, Tempus's followers struggled to maintain their faith in a new world. Many turned to him for guidance during the early conflicts and resource wars.",
        }),
        tempus_100_300_cycles_history: await db.createDeityHistory({
            id: "tempus-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.tempus.id,
            description: "Gained prominence during the First Continental War, with his temples becoming centers of military training and strategy. The Huntbound Order's founding in 755 cycles marked a major resurgence of his influence.",
        }),
        tempus_300_600_cycles_history: await db.createDeityHistory({
            id: "tempus-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.tempus.id,
            description: "Became the patron deity of the Huntbound Order, with Tharos Raggenthraw being a devoted follower. His influence spread across all continents as the guild expanded.",
        }),
        tempus_600_800_cycles_history: await db.createDeityHistory({
            id: "tempus-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.tempus.id,
            description: "Currently at the height of his power in Alabastria, with the Huntbound Order serving as his primary religious organization. His temples are found in every major city.",
        }),
        mystra_0_100_cycles_history: await db.createDeityHistory({
            id: "mystra-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.mystra.id,
            description: "Her followers were among the first to adapt to Alabastria's unique magical properties, establishing the first magical research centers.",
        }),
        mystra_100_300_cycles_history: await db.createDeityHistory({
            id: "mystra-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.mystra.id,
            description: "Gained significant influence during Kuriguer's Magic Surge, with her temples becoming centers of magical learning and research.",
        }),
        mystra_300_600_cycles_history: await db.createDeityHistory({
            id: "mystra-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.mystra.id,
            description: "Established the first magical academies in Kuriguer, becoming the primary patron of magical education and research across Alabastria.",
        }),
        mystra_600_800_cycles_history: await db.createDeityHistory({
            id: "mystra-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.mystra.id,
            description: "Currently maintains the most prestigious magical institutions in Alabastria, with her followers being the primary researchers of the continent's magical anomalies.",
        }),
        lathander_0_100_cycles_history: await db.createDeityHistory({
            id: "lathander-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.lathander.id,
            description: "Provided hope and healing during the chaotic early years of The Bringing, with his temples becoming sanctuaries for the displaced.",
        }),
        lathander_100_300_cycles_history: await db.createDeityHistory({
            id: "lathander-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.lathander.id,
            description: "Gained prominence as a patron of agriculture and renewal, with his followers helping establish the first successful farming communities in Skratonia.",
        }),
        lathander_300_600_cycles_history: await db.createDeityHistory({
            id: "lathander-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.lathander.id,
            description: "Became the primary patron of healing and renewal across all continents, with his temples serving as centers of medical knowledge and agricultural innovation.",
        }),
        lathander_600_800_cycles_history: await db.createDeityHistory({
            id: "lathander-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.lathander.id,
            description: "Currently maintains the most extensive healing network in Alabastria, with his followers being the primary healers and agricultural advisors across all continents.",
        }),
        selune_0_100_cycles_history: await db.createDeityHistory({
            id: "selune-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.selune.id,
            description: "Guided the first explorers and settlers as they navigated the new world, with her temples serving as navigation aids and safe havens.",
        }),
        selune_100_300_cycles_history: await db.createDeityHistory({
            id: "selune-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.selune.id,
            description: "Gained prominence as a patron of exploration and trade, with her followers establishing the first trade routes and navigation systems.",
        }),
        selune_300_600_cycles_history: await db.createDeityHistory({
            id: "selune-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.selune.id,
            description: "Became the primary patron of maritime trade and exploration, with her temples serving as lighthouses and navigation centers along all coastlines.",
        }),
        selune_600_800_cycles_history: await db.createDeityHistory({
            id: "selune-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.selune.id,
            description: "Currently maintains the most extensive navigation network in Alabastria, with her followers being the primary guides for all maritime and overland travel.",
        }),
        shar_0_100_cycles_history: await db.createDeityHistory({
            id: "shar-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.shar.id,
            description: "Gained followers among those who lost everything in The Bringing, with her temples serving as places of mourning and secret gathering.",
        }),
        shar_100_300_cycles_history: await db.createDeityHistory({
            id: "shar-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.shar.id,
            description: "Established a network of hidden shrines and secret societies, with her followers becoming the primary information brokers and spies across all continents.",
        }),
        shar_300_600_cycles_history: await db.createDeityHistory({
            id: "shar-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.shar.id,
            description: "Became the patron of the shadow economy and underground networks, with her followers controlling much of the information flow between continents.",
        }),
        shar_600_800_cycles_history: await db.createDeityHistory({
            id: "shar-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.shar.id,
            description: "Currently maintains the most extensive information network in Alabastria, with her followers being the primary spies and information brokers across all continents.",
        }),
        oghma_0_100_cycles_history: await db.createDeityHistory({
            id: "oghma-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.oghma.id,
            description: "In the aftermath of The Bringing, Oghma’s faithful focused on salvaging texts, oral histories, and lost languages. Many risked their lives to preserve fragments of the old world’s knowledge.",
        }),
        oghma_100_300_cycles_history: await db.createDeityHistory({
            id: "oghma-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.oghma.id,
            description: "Oghman libraries became centers of learning and diplomacy. The first Great Concord of Scholars was signed under his auspices, standardizing languages and historical records.",
        }),
        oghma_300_600_cycles_history: await db.createDeityHistory({
            id: "oghma-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.oghma.id,
            description: "A golden age of invention and exploration emerged, driven by Oghma’s clergy encouraging experimentation and free exchange of ideas across continents.",
        }),
        oghma_600_800_cycles_history: await db.createDeityHistory({
            id: "oghma-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.oghma.id,
            description: "In the present age, Oghma’s temples stand as neutral sanctuaries. His followers are instrumental in educating the masses and safeguarding truth against manipulation and deliberate falsehoods.",
        }),
        deneir_0_100_cycles_history: await db.createDeityHistory({
            id: "deneir-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.deneir.id,
            description: "Following The Bringing, Deneir’s clergy raced to document events as they unfolded, believing that accurate records would prevent future chaos born of forgotten truth.",
        }),
        deneir_100_300_cycles_history: await db.createDeityHistory({
            id: "deneir-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.deneir.id,
            description: "Deneirite monasteries became centers of law and record-keeping. Many early Alabastrian legal codes were penned under his guidance.",
        }),
        deneir_300_600_cycles_history: await db.createDeityHistory({
            id: "deneir-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.deneir.id,
            description: "A surge in rune magic and glyph-based spellcraft elevated Deneir’s status among mages and artificers, solidifying his role as guardian of written magic.",
        }),
        deneir_600_800_cycles_history: await db.createDeityHistory({
            id: "deneir-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.deneir.id,
            description: "In the current age, Deneir’s followers act as trusted neutral recorders of treaties, histories, and magical research, often serving as arbiters when truth is disputed.",
        }),
        mask_0_100_cycles_history: await db.createDeityHistory({
            id: "mask-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.mask.id,
            description: "In the uncertain days after The Bringing, Mask’s faithful became essential scouts, smugglers, and information gatherers. Many cities quietly relied on them despite public condemnation.",
        }),
        mask_100_300_cycles_history: await db.createDeityHistory({
            id: "mask-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.mask.id,
            description: "Thieves’ guilds formally organized under Mask’s loose patronage, creating networks that spanned continents and traded in secrets as readily as coin.",
        }),
        mask_300_600_cycles_history: await db.createDeityHistory({
            id: "mask-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.mask.id,
            description: "A golden age of espionage elevated Mask’s influence. Shadow wars between rival states were often decided by Maskan agents before armies ever marched.",
        }),
        mask_600_800_cycles_history: await db.createDeityHistory({
            id: "mask-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.mask.id,
            description: "In the present era, Mask is regarded with wary tolerance. His worship persists wherever laws are rigid, borders are tight, and secrets are valuable.",
        }),
        helm_0_100_cycles_history: await db.createDeityHistory({
            id: "helm-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.helm.id,
            description: "After The Bringing, Helm’s followers focused on restoring order amidst widespread chaos. His priests advised leaders on maintaining law and discipline in vulnerable cities.",
        }),
        helm_100_300_cycles_history: await db.createDeityHistory({
            id: "helm-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.helm.id,
            description: "Helm’s influence expanded with the rise of city-states and organized militias. Watchtowers and fortified temples were constructed to safeguard urban centers.",
        }),
        helm_300_600_cycles_history: await db.createDeityHistory({
            id: "helm-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.helm.id,
            description: "Helm’s clergy became a respected force in law enforcement, mediating disputes and training guards. Many paladins and knights pledged service to him during regional conflicts.",
        }),
        helm_600_800_cycles_history: await db.createDeityHistory({
            id: "helm-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.helm.id,
            description: "In the present age, Helm’s faithful continue to safeguard Alabastria. His temples act as centers of civic defense, and his doctrines of vigilance and duty guide soldiers, guards, and lawkeepers across the land.",
        }),
        tyr_0_100_cycles_history: await db.createDeityHistory({
            id: "tyr-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.tyr.id,
            description: "Following The Bringing, Tyr’s faithful worked to stabilize cities and regions, establishing courts and promoting impartial justice in a chaotic world.",
        }),
        tyr_100_300_cycles_history: await db.createDeityHistory({
            id: "tyr-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.tyr.id,
            description: "Tyr’s influence expanded as legal codes were formalized across Alabastria. Paladins of Tyr acted as judges, mediators, and protectors of law.",
        }),
        tyr_300_600_cycles_history: await db.createDeityHistory({
            id: "tyr-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.tyr.id,
            description: "Tyr’s clergy gained recognition as moral arbiters, intervening in disputes between rulers and kingdoms. His doctrines of fairness became a cornerstone of governance.",
        }),
        tyr_600_800_cycles_history: await db.createDeityHistory({
            id: "tyr-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.tyr.id,
            description: "In the current era, Tyr’s temples serve as centers of law and justice. His followers continue to uphold fairness, mediate conflicts, and punish wrongdoing, ensuring that Tyr’s ideals remain a guiding light in Alabastria.",
        }),
        chauntea_0_100_cycles_history: await db.createDeityHistory({
            id: "chauntea-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.chauntea.id,
            description: "After The Bringing, Chauntea’s clergy focused on restoring agricultural systems disrupted by chaos. Seeds were planted anew, and knowledge of irrigation and crop rotation was shared widely.",
        }),
        chauntea_100_300_cycles_history: await db.createDeityHistory({
            id: "chauntea-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.chauntea.id,
            description: "Rural communities grew in size and stability under her guidance. Festivals celebrating planting and harvest became widespread, reinforcing social cohesion.",
        }),
        chauntea_300_600_cycles_history: await db.createDeityHistory({
            id: "chauntea-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.chauntea.id,
            description: "Her influence extended into urban centers as granaries, gardens, and public farms were established to feed growing populations. Druidic orders allied with her for land stewardship.",
        }),
        chauntea_600_800_cycles_history: await db.createDeityHistory({
            id: "chauntea-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.chauntea.id,
            description: "In the present era, Chauntea’s followers continue to ensure food security, protect farmland, and celebrate the cycles of growth and harvest. Her teachings influence both peasants and rulers who value the prosperity of the land.",
        }),
        ilmater_0_100_cycles_history: await db.createDeityHistory({
            id: "ilmater-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.ilmater.id,
            description: "After The Bringing, Ilmater’s followers focused on aiding those devastated by upheaval. Temples acted as emergency relief centers for the displaced and wounded.",
        }),
        ilmater_100_300_cycles_history: await db.createDeityHistory({
            id: "ilmater-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.ilmater.id,
            description: "Ilmaterite charities and hospitals were formalized, and orders of compassionate monks and clerics spread throughout Alabastria.",
        }),
        ilmater_300_600_cycles_history: await db.createDeityHistory({
            id: "ilmater-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.ilmater.id,
            description: "His clergy became mediators and healers in war-torn regions. Pilgrimages to sites of past tragedies grew as acts of penance and service.",
        }),
        ilmater_600_800_cycles_history: await db.createDeityHistory({
            id: "ilmater-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.ilmater.id,
            description: "In the present era, Ilmater’s temples are vital centers for social welfare. His followers continue to alleviate suffering, provide refuge, and advocate for endurance, patience, and hope in the face of adversity.",
        }),
        talona_0_100_cycles_history: await db.createDeityHistory({
            id: "talona-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.talona.id,
            description: "In the chaos following The Bringing, Talona’s influence spread rapidly through uncontrolled disease and spoiled food supplies. Early cultists flourished among refugees and the dying.",
        }),
        talona_100_300_cycles_history: await db.createDeityHistory({
            id: "talona-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.talona.id,
            description: "Several devastating plagues were attributed to Talona’s favor or wrath. Her worship became deeply feared, and many cities outlawed even speaking her name.",
        }),
        talona_300_600_cycles_history: await db.createDeityHistory({
            id: "talona-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.talona.id,
            description: "Talona’s followers refined poisons and diseases into weapons, selling their services to criminals and rival states. Her cults became more organized and secretive.",
        }),
        talona_600_800_cycles_history: await db.createDeityHistory({
            id: "talona-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.talona.id,
            description: "In the current era, Talona is placated through forbidden rites rather than openly praised. Her cults are blamed for recent outbreaks collectively known as the Ashen Cough and the Black Bloom.",
        }),
        tymora_0_100_cycles_history: await db.createDeityHistory({
            id: "tymora-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.tymora.id,
            description: "Gained followers among those who took risks to survive in the new world, with her temples serving as centers of hope and luck.",
        }),
        tymora_100_300_cycles_history: await db.createDeityHistory({
            id: "tymora-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.tymora.id,
            description: "Became the patron of early adventurers and explorers, with her temples serving as gathering places for those seeking fortune and adventure.",
        }),
        tymora_300_600_cycles_history: await db.createDeityHistory({
            id: "tymora-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.tymora.id,
            description: "Gained significant influence among the Huntbound Order and other adventuring groups, with her temples becoming centers of luck and fortune.",
        }),
        tymora_600_800_cycles_history: await db.createDeityHistory({
            id: "tymora-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.tymora.id,
            description: "Currently maintains the most extensive network of luck and fortune in Alabastria, with her followers being the primary patrons of adventurers and risk takers.",
        }),
        beshaba_0_100_cycles_history: await db.createDeityHistory({
            id: "beshaba-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.beshaba.id,
            description: "Gained followers among those who suffered the most from The Bringing, with her temples serving as places of mourning and curse work.",
        }),
        beshaba_100_300_cycles_history: await db.createDeityHistory({
            id: "beshaba-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.beshaba.id,
            description: "Established a network of cursed shrines and accident sites, with her followers becoming the primary curse workers and hex specialists across all continents.",
        }),
        beshaba_300_600_cycles_history: await db.createDeityHistory({
            id: "beshaba-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.beshaba.id,
            description: "Became the patron of the cursed and wronged, with her temples serving as centers of curse work and misfortune magic.",
        }),
        beshaba_600_800_cycles_history: await db.createDeityHistory({
            id: "beshaba-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.beshaba.id,
            description: "Currently maintains the most extensive network of curse work and misfortune in Alabastria, with her followers being the primary curse workers and hex specialists.",
        }),
        kelemvor_0_100_cycles_history: await db.createDeityHistory({
            id: "kelemvor-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.kelemvor.id,
            description: "Gained followers among those who dealt with the many deaths caused by The Bringing, with his temples serving as centers of death and judgment.",
        }),
        kelemvor_100_300_cycles_history: await db.createDeityHistory({
            id: "kelemvor-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.kelemvor.id,
            description: "Became the primary patron of death and judgment across all continents, with his temples serving as centers of justice and the dead.",
        }),
        kelemvor_300_600_cycles_history: await db.createDeityHistory({
            id: "kelemvor-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.kelemvor.id,
            description: "Established the most extensive network of death and judgment in Alabastria, with his followers being the primary judges and undertakers across all continents.",
        }),
        kelemvor_600_800_cycles_history: await db.createDeityHistory({
            id: "kelemvor-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.kelemvor.id,
            description: "Currently maintains the most extensive network of death and judgment in Alabastria, with his followers being the primary judges and undertakers across all continents.",
        }),
        bane_0_100_cycles_history: await db.createDeityHistory({
            id: "bane-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.bane.id,
            description: "Gained followers among those who sought to control the chaos of The Bringing, with his temples serving as centers of tyranny and conquest.",
        }),
        bane_100_300_cycles_history: await db.createDeityHistory({
            id: "bane-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.bane.id,
            description: "Became the patron of many ruling classes and military leaders, with his temples serving as centers of power and control across all continents.",
        }),
        bane_300_600_cycles_history: await db.createDeityHistory({
            id: "bane-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.bane.id,
            description: "Established a network of tyrannical rule and military conquest, with his followers being the primary tyrants and conquerors across all continents.",
        }),
        bane_600_800_cycles_history: await db.createDeityHistory({
            id: "bane-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.bane.id,
            description: "Currently maintains the most extensive network of tyranny and conquest in Alabastria, with his followers being the primary tyrants and conquerors across all continents.",
        }),
        myrkul_0_100_cycles_history: await db.createDeityHistory({
            id: "myrkul-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.myrkul.id,
            description: "Gained followers among those who sought to cheat death in the new world, with his temples serving as centers of necromancy and undeath.",
        }),
        myrkul_100_300_cycles_history: await db.createDeityHistory({
            id: "myrkul-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.myrkul.id,
            description: "Became the patron of necromancers and undead across all continents, with his temples serving as centers of death magic and undeath.",
        }),
        myrkul_300_600_cycles_history: await db.createDeityHistory({
            id: "myrkul-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.myrkul.id,
            description: "Established a network of necromancy and undeath across all continents, with his followers being the primary necromancers and undead across all continents.",
        }),
        myrkul_600_800_cycles_history: await db.createDeityHistory({
            id: "myrkul-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.myrkul.id,
            description: "Currently maintains the most extensive network of necromancy and undeath in Alabastria, with his followers being the primary necromancers and undead across all continents.",
        }),
        jergal_0_100_cycles_history: await db.createDeityHistory({
            id: "jergal-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.jergal.id,
            description: "Gained followers among those who sought to record the history of The Bringing, with his temples serving as centers of record keeping and knowledge.",
        }),
        jergal_100_300_cycles_history: await db.createDeityHistory({
            id: "jergal-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.jergal.id,
            description: "Became the patron of scribes and historians across all continents, with his temples serving as centers of record keeping and knowledge.",
        }),
        jergal_300_600_cycles_history: await db.createDeityHistory({
            id: "jergal-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.jergal.id,
            description: "Established the most extensive network of record keeping and knowledge in Alabastria, with his followers being the primary scribes and historians across all continents.",
        }),
        jergal_600_800_cycles_history: await db.createDeityHistory({
            id: "jergal-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.jergal.id,
            description: "Currently maintains the most extensive network of record keeping and knowledge in Alabastria, with his followers being the primary scribes and historians across all continents.",
        }),
        moradin_0_100_cycles_history: await db.createDeityHistory({
            id: "moradin-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.moradin.id,
            description: "Gained followers among dwarven settlers who sought to establish their craft in the new world, with his temples serving as centers of craftsmanship and creation.",
        }),
        moradin_100_300_cycles_history: await db.createDeityHistory({
            id: "moradin-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.moradin.id,
            description: "Became the patron of dwarven communities across all continents, with his temples serving as centers of craftsmanship and creation.",
        }),
        moradin_300_600_cycles_history: await db.createDeityHistory({
            id: "moradin-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.moradin.id,
            description: "Established the most extensive network of craftsmanship and creation in Alabastria, with his followers being the primary craftsmen and creators across all continents.",
        }),
        moradin_600_800_cycles_history: await db.createDeityHistory({
            id: "moradin-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.moradin.id,
            description: "Currently maintains the most extensive network of craftsmanship and creation in Alabastria, with his followers being the primary craftsmen and creators across all continents.",
        }),
        berronar_truesilver_0_100_cycles_history: await db.createDeityHistory({
            id: "berronar-truesilver-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.berronar_truesilver.id,
            description: "Gained followers among dwarven families who sought to establish their homes in the new world, with her temples serving as centers of family and protection.",
        }),
        berronar_truesilver_100_300_cycles_history: await db.createDeityHistory({
            id: "berronar-truesilver-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.berronar_truesilver.id,
            description: "Became the patron of dwarven families across all continents, with her temples serving as centers of family and protection.",
        }),
        berronar_truesilver_300_600_cycles_history: await db.createDeityHistory({
            id: "berronar-truesilver-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.berronar_truesilver.id,
            description: "Established the most extensive network of family and protection in Alabastria, with her followers being the primary protectors and home keepers across all continents.",
        }),
        berronar_truesilver_600_800_cycles_history: await db.createDeityHistory({
            id: "berronar-truesilver-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.berronar_truesilver.id,
            description: "Currently maintains the most extensive network of family and protection in Alabastria, with her followers being the primary protectors and home keepers across all continents.",
        }),
        clangeddin_silverbeard_0_100_cycles_history: await db.createDeityHistory({
            id: "clangeddin-silverbeard-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.clangeddin_silverbeard.id,
            description: "Gained followers among dwarven warriors who sought to protect their people in the new world, with his temples serving as centers of battle and honor.",
        }),
        clangeddin_silverbeard_100_300_cycles_history: await db.createDeityHistory({
            id: "clangeddin-silverbeard-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.clangeddin_silverbeard.id,
            description: "Became the patron of dwarven warriors across all continents, with his temples serving as centers of battle and honor.",
        }),
        clangeddin_silverbeard_300_600_cycles_history: await db.createDeityHistory({
            id: "clangeddin-silverbeard-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.clangeddin_silverbeard.id,
            description: "Established the most extensive network of battle and honor in Alabastria, with his followers being the primary warriors and honor seekers across all continents.",
        }),
        clangeddin_silverbeard_600_800_cycles_history: await db.createDeityHistory({
            id: "clangeddin-silverbeard-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.clangeddin_silverbeard.id,
            description: "Currently maintains the most extensive network of battle and honor in Alabastria, with his followers being the primary warriors and honor seekers across all continents.",
        }),
        dugmaren_brightmantle_0_100_cycles_history: await db.createDeityHistory({
            id: "dugmaren-brightmantle-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.dugmaren_brightmantle.id,
            description: "Gained followers among dwarven inventors who sought to adapt their technology to the new world, with his temples serving as centers of discovery and innovation.",
        }),
        dugmaren_brightmantle_100_300_cycles_history: await db.createDeityHistory({
            id: "dugmaren-brightmantle-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.dugmaren_brightmantle.id,
            description: "Became the patron of dwarven inventors across all continents, with his temples serving as centers of discovery and innovation.",
        }),
        dugmaren_brightmantle_300_600_cycles_history: await db.createDeityHistory({
            id: "dugmaren-brightmantle-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.dugmaren_brightmantle.id,
            description: "Established the most extensive network of discovery and innovation in Alabastria, with his followers being the primary inventors and researchers across all continents.",
        }),
        dugmaren_brightmantle_600_800_cycles_history: await db.createDeityHistory({
            id: "dugmaren-brightmantle-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.dugmaren_brightmantle.id,
            description: "Currently maintains the most extensive network of discovery and innovation in Alabastria, with his followers being the primary inventors and researchers across all continents.",
        }),
        vergadain_0_100_cycles_history: await db.createDeityHistory({
            id: "vergadain-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.vergadain.id,
            description: "Gained followers among dwarven merchants who sought to establish trade in the new world, with his temples serving as centers of wealth and trade.",
        }),
        vergadain_100_300_cycles_history: await db.createDeityHistory({
            id: "vergadain-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.vergadain.id,
            description: "Became the patron of dwarven merchants across all continents, with his temples serving as centers of wealth and trade.",
        }),
        vergadain_300_600_cycles_history: await db.createDeityHistory({
            id: "vergadain-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.vergadain.id,
            description: "Established the most extensive network of wealth and trade in Alabastria, with his followers being the primary merchants and traders across all continents.",
        }),
        vergadain_600_800_cycles_history: await db.createDeityHistory({
            id: "vergadain-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.vergadain.id,
            description: "Currently maintains the most extensive network of wealth and trade in Alabastria, with his followers being the primary merchants and traders across all continents.",
        }),
        corellon_larethian_0_100_cycles_history: await db.createDeityHistory({
            id: "corellon-larethian-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.corellon_larethian.id,
            description: "Gained followers among elven settlers who sought to establish their art and magic in the new world, with his temples serving as centers of creativity and magic.",
        }),
        corellon_larethian_100_300_cycles_history: await db.createDeityHistory({
            id: "corellon-larethian-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.corellon_larethian.id,
            description: "Became the patron of elven communities across all continents, with his temples serving as centers of art and magic.",
        }),
        corellon_larethian_300_600_cycles_history: await db.createDeityHistory({
            id: "corellon-larethian-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.corellon_larethian.id,
            description: "Established the most prestigious magical and artistic institutions in Alabastria, with his followers being the primary creators and magical researchers across all continents.",
        }),
        corellon_larethian_600_800_cycles_history: await db.createDeityHistory({
            id: "corellon-larethian-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.corellon_larethian.id,
            description: "Currently maintains the most extensive network of art and magic in Alabastria, with his followers being the primary artists and magical researchers across all continents.",
        }),
        sehanine_moonbow_0_100_cycles_history: await db.createDeityHistory({
            id: "sehanine-moonbow-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.sehanine_moonbow.id,
            description: "Gained followers among elven rangers who sought to explore the new world, with her temples serving as centers of dreams and journeys.",
        }),
        sehanine_moonbow_100_300_cycles_history: await db.createDeityHistory({
            id: "sehanine-moonbow-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.sehanine_moonbow.id,
            description: "Became the patron of elven rangers across all continents, with her temples serving as centers of exploration and dreams.",
        }),
        sehanine_moonbow_300_600_cycles_history: await db.createDeityHistory({
            id: "sehanine-moonbow-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.sehanine_moonbow.id,
            description: "Established the most extensive network of exploration and dreams in Alabastria, with her followers being the primary rangers and explorers across all continents.",
        }),
        sehanine_moonbow_600_800_cycles_history: await db.createDeityHistory({
            id: "sehanine-moonbow-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.sehanine_moonbow.id,
            description: "Currently maintains the most extensive network of exploration and dreams in Alabastria, with her followers being the primary rangers and explorers across all continents.",
        }),
        hanali_celanil_0_100_cycles_history: await db.createDeityHistory({
            id: "hanali-celanil-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.hanali_celanil.id,
            description: "Gained followers among elven communities who sought to maintain their culture of beauty and love in the new world, with her temples serving as centers of love and beauty.",
        }),
        hanali_celanil_100_300_cycles_history: await db.createDeityHistory({
            id: "hanali-celanil-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.hanali_celanil.id,
            description: "Became the patron of elven communities across all continents, with her temples serving as centers of love and beauty.",
        }),
        hanali_celanil_300_600_cycles_history: await db.createDeityHistory({
            id: "hanali-celanil-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.hanali_celanil.id,
            description: "Established the most extensive network of love and beauty in Alabastria, with her followers being the primary artists and lovers across all continents.",
        }),
        hanali_celanil_600_800_cycles_history: await db.createDeityHistory({
            id: "hanali-celanil-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.hanali_celanil.id,
            description: "Currently maintains the most extensive network of love and beauty in Alabastria, with her followers being the primary artists and lovers across all continents.",
        }),
        labelas_enoreth_0_100_cycles_history: await db.createDeityHistory({
            id: "labelas-enoreth-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.labelas_enoreth.id,
            description: "Gained followers among elven scholars who sought to record the history of The Bringing, with his temples serving as centers of time and wisdom.",
        }),
        labelas_enoreth_100_300_cycles_history: await db.createDeityHistory({
            id: "labelas-enoreth-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.labelas_enoreth.id,
            description: "Became the patron of elven scholars across all continents, with his temples serving as centers of time and wisdom.",
        }),
        labelas_enoreth_300_600_cycles_history: await db.createDeityHistory({
            id: "labelas-enoreth-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.labelas_enoreth.id,
            description: "Established the most extensive network of time and wisdom in Alabastria, with his followers being the primary historians and scholars across all continents.",
        }),
        labelas_enoreth_600_800_cycles_history: await db.createDeityHistory({
            id: "labelas-enoreth-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.labelas_enoreth.id,
            description: "Currently maintains the most extensive network of time and wisdom in Alabastria, with his followers being the primary historians and scholars across all continents.",
        }),
        solonor_thelandira_0_100_cycles_history: await db.createDeityHistory({
            id: "solonor-thelandira-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.solonor_thelandira.id,
            description: "Gained followers among elven rangers who sought to hunt and explore the new world, with his temples serving as centers of archery and hunting.",
        }),
        solonor_thelandira_100_300_cycles_history: await db.createDeityHistory({
            id: "solonor-thelandira-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.solonor_thelandira.id,
            description: "Became the patron of elven rangers across all continents, with his temples serving as centers of archery and hunting.",
        }),
        solonor_thelandira_300_600_cycles_history: await db.createDeityHistory({
            id: "solonor-thelandira-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.solonor_thelandira.id,
            description: "Established the most extensive network of archery and hunting in Alabastria, with his followers being the primary rangers and hunters across all continents.",
        }),
        solonor_thelandira_600_800_cycles_history: await db.createDeityHistory({
            id: "solonor-thelandira-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.solonor_thelandira.id,
            description: "Currently maintains the most extensive network of archery and hunting in Alabastria, with his followers being the primary rangers and hunters across all continents.",
        }),
        lolth_0_100_cycles_history: await db.createDeityHistory({
            id: "lolth-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.lolth.id,
            description: "Gained followers among dark elves who sought to establish their power in the new world, with her temples serving as centers of deception and domination.",
        }),
        lolth_100_300_cycles_history: await db.createDeityHistory({
            id: "lolth-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.lolth.id,
            description: "Became the patron of dark elves across all continents, with her temples serving as centers of deception and domination.",
        }),
        lolth_300_600_cycles_history: await db.createDeityHistory({
            id: "lolth-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.lolth.id,
            description: "Established a network of deception and domination across all continents, with her followers being the primary deceivers and power seekers across all continents.",
        }),
        lolth_600_800_cycles_history: await db.createDeityHistory({
            id: "lolth-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.lolth.id,
            description: "Currently maintains a network of deception and domination in Alabastria, with her followers being the primary deceivers and power seekers across all continents.",
        }),
        vhaeraun_0_100_cycles_history: await db.createDeityHistory({
            id: "vhaeraun-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.vhaeraun.id,
            description: "Gained followers among dark elves who sought to rebel against the new world order, with his temples serving as centers of shadow and rebellion.",
        }),
        vhaeraun_100_300_cycles_history: await db.createDeityHistory({
            id: "vhaeraun-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.vhaeraun.id,
            description: "Became the patron of dark elves across all continents, with his temples serving as centers of shadow and rebellion.",
        }),
        vhaeraun_300_600_cycles_history: await db.createDeityHistory({
            id: "vhaeraun-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.vhaeraun.id,
            description: "Established a network of shadow and rebellion across all continents, with his followers being the primary rebels and thieves across all continents.",
        }),
        vhaeraun_600_800_cycles_history: await db.createDeityHistory({
            id: "vhaeraun-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.vhaeraun.id,
            description: "Currently maintains a network of shadow and rebellion in Alabastria, with his followers being the primary rebels and thieves across all continents.",
        }),
        eilistraee_0_100_cycles_history: await db.createDeityHistory({
            id: "eilistraee-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.eilistraee.id,
            description: "Gained followers among dark elves who sought redemption in the new world, with her temples serving as centers of song and redemption.",
        }),
        eilistraee_100_300_cycles_history: await db.createDeityHistory({
            id: "eilistraee-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.eilistraee.id,
            description: "Became the patron of redeemed dark elves across all continents, with her temples serving as centers of song and redemption.",
        }),
        eilistraee_300_600_cycles_history: await db.createDeityHistory({
            id: "eilistraee-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.eilistraee.id,
            description: "Established a network of song and redemption across all continents, with her followers being the primary bards and redemption seekers across all continents.",
        }),
        eilistraee_600_800_cycles_history: await db.createDeityHistory({
            id: "eilistraee-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.eilistraee.id,
            description: "Currently maintains a network of song and redemption in Alabastria, with her followers being the primary bards and redemption seekers across all continents.",
        }),
        gruumsh_one_eye_0_100_cycles_history: await db.createDeityHistory({
            id: "gruumsh-one-eye-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.gruumsh_one_eye.id,
            description: "undefined",
        }),
        gruumsh_one_eye_100_300_cycles_history: await db.createDeityHistory({
            id: "gruumsh-one-eye-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.gruumsh_one_eye.id,
            description: "undefined",
        }),
        gruumsh_one_eye_300_600_cycles_history: await db.createDeityHistory({
            id: "gruumsh-one-eye-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.gruumsh_one_eye.id,
            description: "undefined",
        }),
        gruumsh_one_eye_600_800_cycles_history: await db.createDeityHistory({
            id: "gruumsh-one-eye-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.gruumsh_one_eye.id,
            description: "undefined",
        }),
        luthic_0_100_cycles_history: await db.createDeityHistory({
            id: "luthic-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.luthic.id,
            description: "undefined",
        }),
        luthic_100_300_cycles_history: await db.createDeityHistory({
            id: "luthic-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.luthic.id,
            description: "undefined",
        }),
        luthic_300_600_cycles_history: await db.createDeityHistory({
            id: "luthic-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.luthic.id,
            description: "undefined",
        }),
        luthic_600_800_cycles_history: await db.createDeityHistory({
            id: "luthic-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.luthic.id,
            description: "undefined",
        }),
        ilneval_0_100_cycles_history: await db.createDeityHistory({
            id: "ilneval-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.ilneval.id,
            description: "undefined",
        }),
        ilneval_100_300_cycles_history: await db.createDeityHistory({
            id: "ilneval-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.ilneval.id,
            description: "undefined",
        }),
        ilneval_300_600_cycles_history: await db.createDeityHistory({
            id: "ilneval-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.ilneval.id,
            description: "undefined",
        }),
        ilneval_600_800_cycles_history: await db.createDeityHistory({
            id: "ilneval-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.ilneval.id,
            description: "undefined",
        }),
        bahgtru_0_100_cycles_history: await db.createDeityHistory({
            id: "bahgtru-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.bahgtru.id,
            description: "undefined",
        }),
        bahgtru_100_300_cycles_history: await db.createDeityHistory({
            id: "bahgtru-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.bahgtru.id,
            description: "undefined",
        }),
        bahgtru_300_600_cycles_history: await db.createDeityHistory({
            id: "bahgtru-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.bahgtru.id,
            description: "undefined",
        }),
        bahgtru_600_800_cycles_history: await db.createDeityHistory({
            id: "bahgtru-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.bahgtru.id,
            description: "undefined",
        }),
        shargaas_0_100_cycles_history: await db.createDeityHistory({
            id: "shargaas-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.shargaas.id,
            description: "undefined",
        }),
        shargaas_100_300_cycles_history: await db.createDeityHistory({
            id: "shargaas-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.shargaas.id,
            description: "undefined",
        }),
        shargaas_300_600_cycles_history: await db.createDeityHistory({
            id: "shargaas-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.shargaas.id,
            description: "undefined",
        }),
        shargaas_600_800_cycles_history: await db.createDeityHistory({
            id: "shargaas-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.shargaas.id,
            description: "undefined",
        }),
        bahamut_0_100_cycles_history: await db.createDeityHistory({
            id: "bahamut-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.bahamut.id,
            description: "undefined",
        }),
        bahamut_100_300_cycles_history: await db.createDeityHistory({
            id: "bahamut-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.bahamut.id,
            description: "undefined",
        }),
        bahamut_300_600_cycles_history: await db.createDeityHistory({
            id: "bahamut-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.bahamut.id,
            description: "undefined",
        }),
        bahamut_600_800_cycles_history: await db.createDeityHistory({
            id: "bahamut-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.bahamut.id,
            description: "undefined",
        }),
        tiamat_0_100_cycles_history: await db.createDeityHistory({
            id: "tiamat-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.tiamat.id,
            description: "undefined",
        }),
        tiamat_100_300_cycles_history: await db.createDeityHistory({
            id: "tiamat-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.tiamat.id,
            description: "undefined",
        }),
        tiamat_300_600_cycles_history: await db.createDeityHistory({
            id: "tiamat-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.tiamat.id,
            description: "undefined",
        }),
        tiamat_600_800_cycles_history: await db.createDeityHistory({
            id: "tiamat-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.tiamat.id,
            description: "undefined",
        }),
        akadi_0_100_cycles_history: await db.createDeityHistory({
            id: "akadi-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.akadi.id,
            description: "undefined",
        }),
        akadi_100_300_cycles_history: await db.createDeityHistory({
            id: "akadi-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.akadi.id,
            description: "undefined",
        }),
        akadi_300_600_cycles_history: await db.createDeityHistory({
            id: "akadi-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.akadi.id,
            description: "undefined",
        }),
        akadi_600_800_cycles_history: await db.createDeityHistory({
            id: "akadi-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.akadi.id,
            description: "undefined",
        }),
        grumbar_0_100_cycles_history: await db.createDeityHistory({
            id: "grumbar-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.grumbar.id,
            description: "undefined",
        }),
        grumbar_100_300_cycles_history: await db.createDeityHistory({
            id: "grumbar-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.grumbar.id,
            description: "undefined",
        }),
        grumbar_300_600_cycles_history: await db.createDeityHistory({
            id: "grumbar-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.grumbar.id,
            description: "undefined",
        }),
        grumbar_600_800_cycles_history: await db.createDeityHistory({
            id: "grumbar-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.grumbar.id,
            description: "undefined",
        }),
        kossuth_0_100_cycles_history: await db.createDeityHistory({
            id: "kossuth-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.kossuth.id,
            description: "undefined",
        }),
        kossuth_100_300_cycles_history: await db.createDeityHistory({
            id: "kossuth-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.kossuth.id,
            description: "undefined",
        }),
        kossuth_300_600_cycles_history: await db.createDeityHistory({
            id: "kossuth-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.kossuth.id,
            description: "undefined",
        }),
        kossuth_600_800_cycles_history: await db.createDeityHistory({
            id: "kossuth-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.kossuth.id,
            description: "undefined",
        }),
        istishia_0_100_cycles_history: await db.createDeityHistory({
            id: "istishia-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.istishia.id,
            description: "undefined",
        }),
        istishia_100_300_cycles_history: await db.createDeityHistory({
            id: "istishia-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.istishia.id,
            description: "undefined",
        }),
        istishia_300_600_cycles_history: await db.createDeityHistory({
            id: "istishia-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.istishia.id,
            description: "undefined",
        }),
        istishia_600_800_cycles_history: await db.createDeityHistory({
            id: "istishia-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.istishia.id,
            description: "undefined",
        }),
        the_raven_queen_0_100_cycles_history: await db.createDeityHistory({
            id: "the-raven-queen-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.the_raven_queen.id,
            description: "undefined",
        }),
        the_raven_queen_100_300_cycles_history: await db.createDeityHistory({
            id: "the-raven-queen-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.the_raven_queen.id,
            description: "undefined",
        }),
        the_raven_queen_300_600_cycles_history: await db.createDeityHistory({
            id: "the-raven-queen-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.the_raven_queen.id,
            description: "undefined",
        }),
        the_raven_queen_600_800_cycles_history: await db.createDeityHistory({
            id: "the-raven-queen-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.the_raven_queen.id,
            description: "undefined",
        }),
        asmodeus_0_100_cycles_history: await db.createDeityHistory({
            id: "asmodeus-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.asmodeus.id,
            description: "undefined",
        }),
        asmodeus_100_300_cycles_history: await db.createDeityHistory({
            id: "asmodeus-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.asmodeus.id,
            description: "undefined",
        }),
        asmodeus_300_600_cycles_history: await db.createDeityHistory({
            id: "asmodeus-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.asmodeus.id,
            description: "undefined",
        }),
        asmodeus_600_800_cycles_history: await db.createDeityHistory({
            id: "asmodeus-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.asmodeus.id,
            description: "undefined",
        }),
        yondalla_0_100_cycles_history: await db.createDeityHistory({
            id: "yondalla-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.yondalla.id,
            description: "undefined",
        }),
        yondalla_100_300_cycles_history: await db.createDeityHistory({
            id: "yondalla-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.yondalla.id,
            description: "undefined",
        }),
        yondalla_300_600_cycles_history: await db.createDeityHistory({
            id: "yondalla-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.yondalla.id,
            description: "undefined",
        }),
        yondalla_600_800_cycles_history: await db.createDeityHistory({
            id: "yondalla-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.yondalla.id,
            description: "undefined",
        }),
        arvoreen_0_100_cycles_history: await db.createDeityHistory({
            id: "arvoreen-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.arvoreen.id,
            description: "undefined",
        }),
        arvoreen_100_300_cycles_history: await db.createDeityHistory({
            id: "arvoreen-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.arvoreen.id,
            description: "undefined",
        }),
        arvoreen_300_600_cycles_history: await db.createDeityHistory({
            id: "arvoreen-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.arvoreen.id,
            description: "undefined",
        }),
        arvoreen_600_800_cycles_history: await db.createDeityHistory({
            id: "arvoreen-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.arvoreen.id,
            description: "undefined",
        }),
        cyrrollalee_0_100_cycles_history: await db.createDeityHistory({
            id: "cyrrollalee-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.cyrrollalee.id,
            description: "undefined",
        }),
        cyrrollalee_100_300_cycles_history: await db.createDeityHistory({
            id: "cyrrollalee-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.cyrrollalee.id,
            description: "undefined",
        }),
        cyrrollalee_300_600_cycles_history: await db.createDeityHistory({
            id: "cyrrollalee-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.cyrrollalee.id,
            description: "undefined",
        }),
        cyrrollalee_600_800_cycles_history: await db.createDeityHistory({
            id: "cyrrollalee-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.cyrrollalee.id,
            description: "undefined",
        }),
        urogalan_0_100_cycles_history: await db.createDeityHistory({
            id: "urogalan-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.urogalan.id,
            description: "undefined",
        }),
        urogalan_100_300_cycles_history: await db.createDeityHistory({
            id: "urogalan-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.urogalan.id,
            description: "undefined",
        }),
        urogalan_300_600_cycles_history: await db.createDeityHistory({
            id: "urogalan-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.urogalan.id,
            description: "undefined",
        }),
        urogalan_600_800_cycles_history: await db.createDeityHistory({
            id: "urogalan-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.urogalan.id,
            description: "undefined",
        }),
        garl_glittergold_0_100_cycles_history: await db.createDeityHistory({
            id: "garl-glittergold-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.garl_glittergold.id,
            description: "undefined",
        }),
        garl_glittergold_100_300_cycles_history: await db.createDeityHistory({
            id: "garl-glittergold-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.garl_glittergold.id,
            description: "undefined",
        }),
        garl_glittergold_300_600_cycles_history: await db.createDeityHistory({
            id: "garl-glittergold-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.garl_glittergold.id,
            description: "undefined",
        }),
        garl_glittergold_600_800_cycles_history: await db.createDeityHistory({
            id: "garl-glittergold-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.garl_glittergold.id,
            description: "undefined",
        }),
        baervan_wildwanderer_0_100_cycles_history: await db.createDeityHistory({
            id: "baervan-wildwanderer-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.baervan_wildwanderer.id,
            description: "undefined",
        }),
        baervan_wildwanderer_100_300_cycles_history: await db.createDeityHistory({
            id: "baervan-wildwanderer-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.baervan_wildwanderer.id,
            description: "undefined",
        }),
        baervan_wildwanderer_300_600_cycles_history: await db.createDeityHistory({
            id: "baervan-wildwanderer-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.baervan_wildwanderer.id,
            description: "undefined",
        }),
        baervan_wildwanderer_600_800_cycles_history: await db.createDeityHistory({
            id: "baervan-wildwanderer-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.baervan_wildwanderer.id,
            description: "undefined",
        }),
        baravar_cloakshadow_0_100_cycles_history: await db.createDeityHistory({
            id: "baravar-cloakshadow-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.baravar_cloakshadow.id,
            description: "undefined",
        }),
        baravar_cloakshadow_100_300_cycles_history: await db.createDeityHistory({
            id: "baravar-cloakshadow-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.baravar_cloakshadow.id,
            description: "undefined",
        }),
        baravar_cloakshadow_300_600_cycles_history: await db.createDeityHistory({
            id: "baravar-cloakshadow-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.baravar_cloakshadow.id,
            description: "undefined",
        }),
        baravar_cloakshadow_600_800_cycles_history: await db.createDeityHistory({
            id: "baravar-cloakshadow-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.baravar_cloakshadow.id,
            description: "undefined",
        }),
        segojan_earthcaller_0_100_cycles_history: await db.createDeityHistory({
            id: "segojan-earthcaller-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.segojan_earthcaller.id,
            description: "undefined",
        }),
        segojan_earthcaller_100_300_cycles_history: await db.createDeityHistory({
            id: "segojan-earthcaller-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.segojan_earthcaller.id,
            description: "undefined",
        }),
        segojan_earthcaller_300_600_cycles_history: await db.createDeityHistory({
            id: "segojan-earthcaller-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.segojan_earthcaller.id,
            description: "undefined",
        }),
        segojan_earthcaller_600_800_cycles_history: await db.createDeityHistory({
            id: "segojan-earthcaller-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.segojan_earthcaller.id,
            description: "undefined",
        }),
        maglubiyet_0_100_cycles_history: await db.createDeityHistory({
            id: "maglubiyet-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.maglubiyet.id,
            description: "undefined",
        }),
        maglubiyet_100_300_cycles_history: await db.createDeityHistory({
            id: "maglubiyet-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.maglubiyet.id,
            description: "undefined",
        }),
        maglubiyet_300_600_cycles_history: await db.createDeityHistory({
            id: "maglubiyet-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.maglubiyet.id,
            description: "undefined",
        }),
        maglubiyet_600_800_cycles_history: await db.createDeityHistory({
            id: "maglubiyet-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.maglubiyet.id,
            description: "undefined",
        }),
        khurgorbaeyag_0_100_cycles_history: await db.createDeityHistory({
            id: "khurgorbaeyag-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.khurgorbaeyag.id,
            description: "undefined",
        }),
        khurgorbaeyag_100_300_cycles_history: await db.createDeityHistory({
            id: "khurgorbaeyag-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.khurgorbaeyag.id,
            description: "undefined",
        }),
        khurgorbaeyag_300_600_cycles_history: await db.createDeityHistory({
            id: "khurgorbaeyag-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.khurgorbaeyag.id,
            description: "undefined",
        }),
        khurgorbaeyag_600_800_cycles_history: await db.createDeityHistory({
            id: "khurgorbaeyag-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.khurgorbaeyag.id,
            description: "undefined",
        }),
        bargrivyek_0_100_cycles_history: await db.createDeityHistory({
            id: "bargrivyek-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.bargrivyek.id,
            description: "undefined",
        }),
        bargrivyek_100_300_cycles_history: await db.createDeityHistory({
            id: "bargrivyek-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.bargrivyek.id,
            description: "undefined",
        }),
        bargrivyek_300_600_cycles_history: await db.createDeityHistory({
            id: "bargrivyek-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.bargrivyek.id,
            description: "undefined",
        }),
        bargrivyek_600_800_cycles_history: await db.createDeityHistory({
            id: "bargrivyek-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.bargrivyek.id,
            description: "undefined",
        }),
        nomog_geaya_0_100_cycles_history: await db.createDeityHistory({
            id: "nomog-geaya-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.nomog_geaya.id,
            description: "undefined",
        }),
        nomog_geaya_100_300_cycles_history: await db.createDeityHistory({
            id: "nomog-geaya-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.nomog_geaya.id,
            description: "undefined",
        }),
        nomog_geaya_300_600_cycles_history: await db.createDeityHistory({
            id: "nomog-geaya-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.nomog_geaya.id,
            description: "undefined",
        }),
        nomog_geaya_600_800_cycles_history: await db.createDeityHistory({
            id: "nomog-geaya-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.nomog_geaya.id,
            description: "undefined",
        }),
        kurtulmak_0_100_cycles_history: await db.createDeityHistory({
            id: "kurtulmak-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.kurtulmak.id,
            description: "undefined",
        }),
        kurtulmak_100_300_cycles_history: await db.createDeityHistory({
            id: "kurtulmak-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.kurtulmak.id,
            description: "undefined",
        }),
        kurtulmak_300_600_cycles_history: await db.createDeityHistory({
            id: "kurtulmak-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.kurtulmak.id,
            description: "undefined",
        }),
        kurtulmak_600_800_cycles_history: await db.createDeityHistory({
            id: "kurtulmak-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.kurtulmak.id,
            description: "undefined",
        }),
        gith_0_100_cycles_history: await db.createDeityHistory({
            id: "gith-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.gith.id,
            description: "undefined",
        }),
        gith_100_300_cycles_history: await db.createDeityHistory({
            id: "gith-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.gith.id,
            description: "undefined",
        }),
        gith_300_600_cycles_history: await db.createDeityHistory({
            id: "gith-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.gith.id,
            description: "undefined",
        }),
        gith_600_800_cycles_history: await db.createDeityHistory({
            id: "gith-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.gith.id,
            description: "undefined",
        }),
        vlaakith_0_100_cycles_history: await db.createDeityHistory({
            id: "vlaakith-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.vlaakith.id,
            description: "undefined",
        }),
        vlaakith_100_300_cycles_history: await db.createDeityHistory({
            id: "vlaakith-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.vlaakith.id,
            description: "undefined",
        }),
        vlaakith_300_600_cycles_history: await db.createDeityHistory({
            id: "vlaakith-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.vlaakith.id,
            description: "undefined",
        }),
        vlaakith_600_800_cycles_history: await db.createDeityHistory({
            id: "vlaakith-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.vlaakith.id,
            description: "undefined",
        }),
        sseth_0_100_cycles_history: await db.createDeityHistory({
            id: "sseth-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.sseth.id,
            description: "undefined",
        }),
        sseth_100_300_cycles_history: await db.createDeityHistory({
            id: "sseth-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.sseth.id,
            description: "undefined",
        }),
        sseth_300_600_cycles_history: await db.createDeityHistory({
            id: "sseth-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.sseth.id,
            description: "undefined",
        }),
        sseth_600_800_cycles_history: await db.createDeityHistory({
            id: "sseth-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.sseth.id,
            description: "undefined",
        }),
        merrshaulk_0_100_cycles_history: await db.createDeityHistory({
            id: "merrshaulk-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.merrshaulk.id,
            description: "undefined",
        }),
        merrshaulk_100_300_cycles_history: await db.createDeityHistory({
            id: "merrshaulk-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.merrshaulk.id,
            description: "undefined",
        }),
        merrshaulk_300_600_cycles_history: await db.createDeityHistory({
            id: "merrshaulk-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.merrshaulk.id,
            description: "undefined",
        }),
        merrshaulk_600_800_cycles_history: await db.createDeityHistory({
            id: "merrshaulk-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.merrshaulk.id,
            description: "undefined",
        }),
        umberlee_0_100_cycles_history: await db.createDeityHistory({
            id: "umberlee-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.umberlee.id,
            description: "undefined",
        }),
        umberlee_100_300_cycles_history: await db.createDeityHistory({
            id: "umberlee-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.umberlee.id,
            description: "undefined",
        }),
        umberlee_300_600_cycles_history: await db.createDeityHistory({
            id: "umberlee-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.umberlee.id,
            description: "undefined",
        }),
        umberlee_600_800_cycles_history: await db.createDeityHistory({
            id: "umberlee-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.umberlee.id,
            description: "undefined",
        }),
        valkur_0_100_cycles_history: await db.createDeityHistory({
            id: "valkur-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.valkur.id,
            description: "undefined",
        }),
        valkur_100_300_cycles_history: await db.createDeityHistory({
            id: "valkur-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.valkur.id,
            description: "undefined",
        }),
        valkur_300_600_cycles_history: await db.createDeityHistory({
            id: "valkur-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.valkur.id,
            description: "undefined",
        }),
        valkur_600_800_cycles_history: await db.createDeityHistory({
            id: "valkur-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.valkur.id,
            description: "undefined",
        }),
        deep_sashelas_0_100_cycles_history: await db.createDeityHistory({
            id: "deep-sashelas-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.deep_sashelas.id,
            description: "undefined",
        }),
        deep_sashelas_100_300_cycles_history: await db.createDeityHistory({
            id: "deep-sashelas-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.deep_sashelas.id,
            description: "undefined",
        }),
        deep_sashelas_300_600_cycles_history: await db.createDeityHistory({
            id: "deep-sashelas-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.deep_sashelas.id,
            description: "undefined",
        }),
        deep_sashelas_600_800_cycles_history: await db.createDeityHistory({
            id: "deep-sashelas-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.deep_sashelas.id,
            description: "undefined",
        }),
        sekolah_0_100_cycles_history: await db.createDeityHistory({
            id: "sekolah-0-100-cycles-history",
            era: "0-100 cycles",
            deityId: deities.sekolah.id,
            description: "undefined",
        }),
        sekolah_100_300_cycles_history: await db.createDeityHistory({
            id: "sekolah-100-300-cycles-history",
            era: "100-300 cycles",
            deityId: deities.sekolah.id,
            description: "undefined",
        }),
        sekolah_300_600_cycles_history: await db.createDeityHistory({
            id: "sekolah-300-600-cycles-history",
            era: "300-600 cycles",
            deityId: deities.sekolah.id,
            description: "undefined",
        }),
        sekolah_600_800_cycles_history: await db.createDeityHistory({
            id: "sekolah-600-800-cycles-history",
            era: "600-800 cycles",
            deityId: deities.sekolah.id,
            description: "undefined",
        }),
    }
}