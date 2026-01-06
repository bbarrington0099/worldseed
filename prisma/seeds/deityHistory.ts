import { HistoricalPeriod, Prisma } from "@prismagen/client";
import * as db from "@lib/db-seed";
import { Deities, HistoricalPeriods } from "./index";

type DeityHistoryPayload = Prisma.DeityHistoryGetPayload<{}>;
export interface DeityHistories {
    cyric_bringing_history: DeityHistoryPayload;
    cyric_formation_history: DeityHistoryPayload;
    cyric_expansion_history: DeityHistoryPayload;
    cyric_modern_history: DeityHistoryPayload;
    tempus_bringing_history: DeityHistoryPayload;
    tempus_formation_history: DeityHistoryPayload;
    tempus_expansion_history: DeityHistoryPayload;
    tempus_modern_history: DeityHistoryPayload;
    mystra_bringing_history: DeityHistoryPayload;
    mystra_formation_history: DeityHistoryPayload;
    mystra_expansion_history: DeityHistoryPayload;
    mystra_modern_history: DeityHistoryPayload;
    lathander_bringing_history: DeityHistoryPayload;
    lathander_formation_history: DeityHistoryPayload;
    lathander_expansion_history: DeityHistoryPayload;
    lathander_modern_history: DeityHistoryPayload;
    selune_bringing_history: DeityHistoryPayload;
    selune_formation_history: DeityHistoryPayload;
    selune_expansion_history: DeityHistoryPayload;
    selune_modern_history: DeityHistoryPayload;
    shar_bringing_history: DeityHistoryPayload;
    shar_formation_history: DeityHistoryPayload;
    shar_expansion_history: DeityHistoryPayload;
    shar_modern_history: DeityHistoryPayload;
    oghma_bringing_history: DeityHistoryPayload;
    oghma_formation_history: DeityHistoryPayload;
    oghma_expansion_history: DeityHistoryPayload;
    oghma_modern_history: DeityHistoryPayload;
    deneir_bringing_history: DeityHistoryPayload;
    deneir_formation_history: DeityHistoryPayload;
    deneir_expansion_history: DeityHistoryPayload;
    deneir_modern_history: DeityHistoryPayload;
    mask_bringing_history: DeityHistoryPayload;
    mask_formation_history: DeityHistoryPayload;
    mask_expansion_history: DeityHistoryPayload;
    mask_modern_history: DeityHistoryPayload;
    helm_bringing_history: DeityHistoryPayload;
    helm_formation_history: DeityHistoryPayload;
    helm_expansion_history: DeityHistoryPayload;
    helm_modern_history: DeityHistoryPayload;
    tyr_bringing_history: DeityHistoryPayload;
    tyr_formation_history: DeityHistoryPayload;
    tyr_expansion_history: DeityHistoryPayload;
    tyr_modern_history: DeityHistoryPayload;
    chauntea_bringing_history: DeityHistoryPayload;
    chauntea_formation_history: DeityHistoryPayload;
    chauntea_expansion_history: DeityHistoryPayload;
    chauntea_modern_history: DeityHistoryPayload;
    ilmater_bringing_history: DeityHistoryPayload;
    ilmater_formation_history: DeityHistoryPayload;
    ilmater_expansion_history: DeityHistoryPayload;
    ilmater_modern_history: DeityHistoryPayload;
    talona_bringing_history: DeityHistoryPayload;
    talona_formation_history: DeityHistoryPayload;
    talona_expansion_history: DeityHistoryPayload;
    talona_modern_history: DeityHistoryPayload;
    tymora_bringing_history: DeityHistoryPayload;
    tymora_formation_history: DeityHistoryPayload;
    tymora_expansion_history: DeityHistoryPayload;
    tymora_modern_history: DeityHistoryPayload;
    beshaba_bringing_history: DeityHistoryPayload;
    beshaba_formation_history: DeityHistoryPayload;
    beshaba_expansion_history: DeityHistoryPayload;
    beshaba_modern_history: DeityHistoryPayload;
    kelemvor_bringing_history: DeityHistoryPayload;
    kelemvor_formation_history: DeityHistoryPayload;
    kelemvor_expansion_history: DeityHistoryPayload;
    kelemvor_modern_history: DeityHistoryPayload;
    bane_bringing_history: DeityHistoryPayload;
    bane_formation_history: DeityHistoryPayload;
    bane_expansion_history: DeityHistoryPayload;
    bane_modern_history: DeityHistoryPayload;
    myrkul_bringing_history: DeityHistoryPayload;
    myrkul_formation_history: DeityHistoryPayload;
    myrkul_expansion_history: DeityHistoryPayload;
    myrkul_modern_history: DeityHistoryPayload;
    jergal_bringing_history: DeityHistoryPayload;
    jergal_formation_history: DeityHistoryPayload;
    jergal_expansion_history: DeityHistoryPayload;
    jergal_modern_history: DeityHistoryPayload;
    moradin_bringing_history: DeityHistoryPayload;
    moradin_formation_history: DeityHistoryPayload;
    moradin_expansion_history: DeityHistoryPayload;
    moradin_modern_history: DeityHistoryPayload;
    berronar_truesilver_bringing_history: DeityHistoryPayload;
    berronar_truesilver_formation_history: DeityHistoryPayload;
    berronar_truesilver_expansion_history: DeityHistoryPayload;
    berronar_truesilver_modern_history: DeityHistoryPayload;
    clangeddin_silverbeard_bringing_history: DeityHistoryPayload;
    clangeddin_silverbeard_formation_history: DeityHistoryPayload;
    clangeddin_silverbeard_expansion_history: DeityHistoryPayload;
    clangeddin_silverbeard_modern_history: DeityHistoryPayload;
    dugmaren_brightmantle_bringing_history: DeityHistoryPayload;
    dugmaren_brightmantle_formation_history: DeityHistoryPayload;
    dugmaren_brightmantle_expansion_history: DeityHistoryPayload;
    dugmaren_brightmantle_modern_history: DeityHistoryPayload;
    vergadain_bringing_history: DeityHistoryPayload;
    vergadain_formation_history: DeityHistoryPayload;
    vergadain_expansion_history: DeityHistoryPayload;
    vergadain_modern_history: DeityHistoryPayload;
    corellon_larethian_bringing_history: DeityHistoryPayload;
    corellon_larethian_formation_history: DeityHistoryPayload;
    corellon_larethian_expansion_history: DeityHistoryPayload;
    corellon_larethian_modern_history: DeityHistoryPayload;
    sehanine_moonbow_bringing_history: DeityHistoryPayload;
    sehanine_moonbow_formation_history: DeityHistoryPayload;
    sehanine_moonbow_expansion_history: DeityHistoryPayload;
    sehanine_moonbow_modern_history: DeityHistoryPayload;
    hanali_celanil_bringing_history: DeityHistoryPayload;
    hanali_celanil_formation_history: DeityHistoryPayload;
    hanali_celanil_expansion_history: DeityHistoryPayload;
    hanali_celanil_modern_history: DeityHistoryPayload;
    labelas_enoreth_bringing_history: DeityHistoryPayload;
    labelas_enoreth_formation_history: DeityHistoryPayload;
    labelas_enoreth_expansion_history: DeityHistoryPayload;
    labelas_enoreth_modern_history: DeityHistoryPayload;
    solonor_thelandira_bringing_history: DeityHistoryPayload;
    solonor_thelandira_formation_history: DeityHistoryPayload;
    solonor_thelandira_expansion_history: DeityHistoryPayload;
    solonor_thelandira_modern_history: DeityHistoryPayload;
    lolth_bringing_history: DeityHistoryPayload;
    lolth_formation_history: DeityHistoryPayload;
    lolth_expansion_history: DeityHistoryPayload;
    lolth_modern_history: DeityHistoryPayload;
    vhaeraun_bringing_history: DeityHistoryPayload;
    vhaeraun_formation_history: DeityHistoryPayload;
    vhaeraun_expansion_history: DeityHistoryPayload;
    vhaeraun_modern_history: DeityHistoryPayload;
    eilistraee_bringing_history: DeityHistoryPayload;
    eilistraee_formation_history: DeityHistoryPayload;
    eilistraee_expansion_history: DeityHistoryPayload;
    eilistraee_modern_history: DeityHistoryPayload;
    gruumsh_one_eye_bringing_history: DeityHistoryPayload;
    gruumsh_one_eye_formation_history: DeityHistoryPayload;
    gruumsh_one_eye_expansion_history: DeityHistoryPayload;
    gruumsh_one_eye_modern_history: DeityHistoryPayload;
    luthic_bringing_history: DeityHistoryPayload;
    luthic_formation_history: DeityHistoryPayload;
    luthic_expansion_history: DeityHistoryPayload;
    luthic_modern_history: DeityHistoryPayload;
    ilneval_bringing_history: DeityHistoryPayload;
    ilneval_formation_history: DeityHistoryPayload;
    ilneval_expansion_history: DeityHistoryPayload;
    ilneval_modern_history: DeityHistoryPayload;
    bahgtru_bringing_history: DeityHistoryPayload;
    bahgtru_formation_history: DeityHistoryPayload;
    bahgtru_expansion_history: DeityHistoryPayload;
    bahgtru_modern_history: DeityHistoryPayload;
    shargaas_bringing_history: DeityHistoryPayload;
    shargaas_formation_history: DeityHistoryPayload;
    shargaas_expansion_history: DeityHistoryPayload;
    shargaas_modern_history: DeityHistoryPayload;
    bahamut_bringing_history: DeityHistoryPayload;
    bahamut_formation_history: DeityHistoryPayload;
    bahamut_expansion_history: DeityHistoryPayload;
    bahamut_modern_history: DeityHistoryPayload;
    tiamat_bringing_history: DeityHistoryPayload;
    tiamat_formation_history: DeityHistoryPayload;
    tiamat_expansion_history: DeityHistoryPayload;
    tiamat_modern_history: DeityHistoryPayload;
    akadi_bringing_history: DeityHistoryPayload;
    akadi_formation_history: DeityHistoryPayload;
    akadi_expansion_history: DeityHistoryPayload;
    akadi_modern_history: DeityHistoryPayload;
    grumbar_bringing_history: DeityHistoryPayload;
    grumbar_formation_history: DeityHistoryPayload;
    grumbar_expansion_history: DeityHistoryPayload;
    grumbar_modern_history: DeityHistoryPayload;
    kossuth_bringing_history: DeityHistoryPayload;
    kossuth_formation_history: DeityHistoryPayload;
    kossuth_expansion_history: DeityHistoryPayload;
    kossuth_modern_history: DeityHistoryPayload;
    istishia_bringing_history: DeityHistoryPayload;
    istishia_formation_history: DeityHistoryPayload;
    istishia_expansion_history: DeityHistoryPayload;
    istishia_modern_history: DeityHistoryPayload;
    the_raven_queen_bringing_history: DeityHistoryPayload;
    the_raven_queen_formation_history: DeityHistoryPayload;
    the_raven_queen_expansion_history: DeityHistoryPayload;
    the_raven_queen_modern_history: DeityHistoryPayload;
    asmodeus_bringing_history: DeityHistoryPayload;
    asmodeus_formation_history: DeityHistoryPayload;
    asmodeus_expansion_history: DeityHistoryPayload;
    asmodeus_modern_history: DeityHistoryPayload;
    yondalla_bringing_history: DeityHistoryPayload;
    yondalla_formation_history: DeityHistoryPayload;
    yondalla_expansion_history: DeityHistoryPayload;
    yondalla_modern_history: DeityHistoryPayload;
    arvoreen_bringing_history: DeityHistoryPayload;
    arvoreen_formation_history: DeityHistoryPayload;
    arvoreen_expansion_history: DeityHistoryPayload;
    arvoreen_modern_history: DeityHistoryPayload;
    cyrrollalee_bringing_history: DeityHistoryPayload;
    cyrrollalee_formation_history: DeityHistoryPayload;
    cyrrollalee_expansion_history: DeityHistoryPayload;
    cyrrollalee_modern_history: DeityHistoryPayload;
    urogalan_bringing_history: DeityHistoryPayload;
    urogalan_formation_history: DeityHistoryPayload;
    urogalan_expansion_history: DeityHistoryPayload;
    urogalan_modern_history: DeityHistoryPayload;
    garl_glittergold_bringing_history: DeityHistoryPayload;
    garl_glittergold_formation_history: DeityHistoryPayload;
    garl_glittergold_expansion_history: DeityHistoryPayload;
    garl_glittergold_modern_history: DeityHistoryPayload;
    baervan_wildwanderer_bringing_history: DeityHistoryPayload;
    baervan_wildwanderer_formation_history: DeityHistoryPayload;
    baervan_wildwanderer_expansion_history: DeityHistoryPayload;
    baervan_wildwanderer_modern_history: DeityHistoryPayload;
    baravar_cloakshadow_bringing_history: DeityHistoryPayload;
    baravar_cloakshadow_formation_history: DeityHistoryPayload;
    baravar_cloakshadow_expansion_history: DeityHistoryPayload;
    baravar_cloakshadow_modern_history: DeityHistoryPayload;
    segojan_earthcaller_bringing_history: DeityHistoryPayload;
    segojan_earthcaller_formation_history: DeityHistoryPayload;
    segojan_earthcaller_expansion_history: DeityHistoryPayload;
    segojan_earthcaller_modern_history: DeityHistoryPayload;
    maglubiyet_bringing_history: DeityHistoryPayload;
    maglubiyet_formation_history: DeityHistoryPayload;
    maglubiyet_expansion_history: DeityHistoryPayload;
    maglubiyet_modern_history: DeityHistoryPayload;
    khurgorbaeyag_bringing_history: DeityHistoryPayload;
    khurgorbaeyag_formation_history: DeityHistoryPayload;
    khurgorbaeyag_expansion_history: DeityHistoryPayload;
    khurgorbaeyag_modern_history: DeityHistoryPayload;
    bargrivyek_bringing_history: DeityHistoryPayload;
    bargrivyek_formation_history: DeityHistoryPayload;
    bargrivyek_expansion_history: DeityHistoryPayload;
    bargrivyek_modern_history: DeityHistoryPayload;
    nomog_geaya_bringing_history: DeityHistoryPayload;
    nomog_geaya_formation_history: DeityHistoryPayload;
    nomog_geaya_expansion_history: DeityHistoryPayload;
    nomog_geaya_modern_history: DeityHistoryPayload;
    kurtulmak_bringing_history: DeityHistoryPayload;
    kurtulmak_formation_history: DeityHistoryPayload;
    kurtulmak_expansion_history: DeityHistoryPayload;
    kurtulmak_modern_history: DeityHistoryPayload;
    gith_bringing_history: DeityHistoryPayload;
    gith_formation_history: DeityHistoryPayload;
    gith_expansion_history: DeityHistoryPayload;
    gith_modern_history: DeityHistoryPayload;
    vlaakith_bringing_history: DeityHistoryPayload;
    vlaakith_formation_history: DeityHistoryPayload;
    vlaakith_expansion_history: DeityHistoryPayload;
    vlaakith_modern_history: DeityHistoryPayload;
    sseth_bringing_history: DeityHistoryPayload;
    sseth_formation_history: DeityHistoryPayload;
    sseth_expansion_history: DeityHistoryPayload;
    sseth_modern_history: DeityHistoryPayload;
    merrshaulk_bringing_history: DeityHistoryPayload;
    merrshaulk_formation_history: DeityHistoryPayload;
    merrshaulk_expansion_history: DeityHistoryPayload;
    merrshaulk_modern_history: DeityHistoryPayload;
    umberlee_bringing_history: DeityHistoryPayload;
    umberlee_formation_history: DeityHistoryPayload;
    umberlee_expansion_history: DeityHistoryPayload;
    umberlee_modern_history: DeityHistoryPayload;
    valkur_bringing_history: DeityHistoryPayload;
    valkur_formation_history: DeityHistoryPayload;
    valkur_expansion_history: DeityHistoryPayload;
    valkur_modern_history: DeityHistoryPayload;
    deep_sashelas_bringing_history: DeityHistoryPayload;
    deep_sashelas_formation_history: DeityHistoryPayload;
    deep_sashelas_expansion_history: DeityHistoryPayload;
    deep_sashelas_modern_history: DeityHistoryPayload;
    sekolah_bringing_history: DeityHistoryPayload;
    sekolah_formation_history: DeityHistoryPayload;
    sekolah_expansion_history: DeityHistoryPayload;
    sekolah_modern_history: DeityHistoryPayload;
}

interface SeedDeityHistoriesParams {
    historicalPeriods: HistoricalPeriods;
    deities: Deities;
}
export async function seedDeityHistories(params: SeedDeityHistoriesParams): Promise<DeityHistories> {
    const { deities, historicalPeriods } = params;
    return {
        cyric_bringing_history: await db.createDeityHistory({
            id: "cyric-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.cyric.id,
            description: "The Bringing weakened Cyric’s divine coherence, amplifying his madness. His early cults splintered, many turning violently on one another as conflicting visions spread.",
        }),
        cyric_formation_history: await db.createDeityHistory({
            id: "cyric-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.cyric.id,
            description: "Cyricite sects began infiltrating courts and guilds, engineering assassinations and civil unrest. Several short-lived theocracies collapsed due to internal betrayal.",
        }),
        cyric_expansion_history: await db.createDeityHistory({
            id: "cyric-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.cyric.id,
            description: "A period known as the Fractured Dogma saw Cyric’s followers war against each other over contradictory revelations. Despite this, his influence grew through fear and chaos rather than devotion.",
        }),
        cyric_modern_history: await db.createDeityHistory({
            id: "cyric-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.cyric.id,
            description: "In the current age, Cyric is worshiped primarily in secret. His cults are blamed for several major political collapses and the rise of the Veiled Knives, an infamous assassin network operating across continents.",
        }),
        tempus_bringing_history: await db.createDeityHistory({
            id: "tempus-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.tempus.id,
            description: "Initially confused by The Bringing, Tempus's followers struggled to maintain their faith in a new world. Many turned to him for guidance during the early conflicts and resource wars.",
        }),
        tempus_formation_history: await db.createDeityHistory({
            id: "tempus-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.tempus.id,
            description: "Gained prominence during the First Continental War, with his temples becoming centers of military training and strategy. The Huntbound Order's founding in 755 cycles marked a major resurgence of his influence.",
        }),
        tempus_expansion_history: await db.createDeityHistory({
            id: "tempus-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.tempus.id,
            description: "Became the patron deity of the Huntbound Order, with Tharos Raggenthraw being a devoted follower. His influence spread across all continents as the guild expanded.",
        }),
        tempus_modern_history: await db.createDeityHistory({
            id: "tempus-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.tempus.id,
            description: "Currently at the height of his power in Alabastria, with the Huntbound Order serving as his primary religious organization. His temples are found in every major city.",
        }),
        mystra_bringing_history: await db.createDeityHistory({
            id: "mystra-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.mystra.id,
            description: "Her followers were among the first to adapt to Alabastria's unique magical properties, establishing the first magical research centers.",
        }),
        mystra_formation_history: await db.createDeityHistory({
            id: "mystra-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.mystra.id,
            description: "Gained significant influence during Kuriguer's Magic Surge, with her temples becoming centers of magical learning and research.",
        }),
        mystra_expansion_history: await db.createDeityHistory({
            id: "mystra-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.mystra.id,
            description: "Established the first magical academies in Kuriguer, becoming the primary patron of magical education and research across Alabastria.",
        }),
        mystra_modern_history: await db.createDeityHistory({
            id: "mystra-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.mystra.id,
            description: "Currently maintains the most prestigious magical institutions in Alabastria, with her followers being the primary researchers of the continent's magical anomalies.",
        }),
        lathander_bringing_history: await db.createDeityHistory({
            id: "lathander-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.lathander.id,
            description: "Provided hope and healing during the chaotic early years of The Bringing, with his temples becoming sanctuaries for the displaced.",
        }),
        lathander_formation_history: await db.createDeityHistory({
            id: "lathander-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.lathander.id,
            description: "Gained prominence as a patron of agriculture and renewal, with his followers helping establish the first successful farming communities in Skratonia.",
        }),
        lathander_expansion_history: await db.createDeityHistory({
            id: "lathander-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.lathander.id,
            description: "Became the primary patron of healing and renewal across all continents, with his temples serving as centers of medical knowledge and agricultural innovation.",
        }),
        lathander_modern_history: await db.createDeityHistory({
            id: "lathander-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.lathander.id,
            description: "Currently maintains the most extensive healing network in Alabastria, with his followers being the primary healers and agricultural advisors across all continents.",
        }),
        selune_bringing_history: await db.createDeityHistory({
            id: "selune-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.selune.id,
            description: "Guided the first explorers and settlers as they navigated the new world, with her temples serving as navigation aids and safe havens.",
        }),
        selune_formation_history: await db.createDeityHistory({
            id: "selune-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.selune.id,
            description: "Gained prominence as a patron of exploration and trade, with her followers establishing the first trade routes and navigation systems.",
        }),
        selune_expansion_history: await db.createDeityHistory({
            id: "selune-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.selune.id,
            description: "Became the primary patron of maritime trade and exploration, with her temples serving as lighthouses and navigation centers along all coastlines.",
        }),
        selune_modern_history: await db.createDeityHistory({
            id: "selune-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.selune.id,
            description: "Currently maintains the most extensive navigation network in Alabastria, with her followers being the primary guides for all maritime and overland travel.",
        }),
        shar_bringing_history: await db.createDeityHistory({
            id: "shar-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.shar.id,
            description: "Gained followers among those who lost everything in The Bringing, with her temples serving as places of mourning and secret gathering.",
        }),
        shar_formation_history: await db.createDeityHistory({
            id: "shar-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.shar.id,
            description: "Established a network of hidden shrines and secret societies, with her followers becoming the primary information brokers and spies across all continents.",
        }),
        shar_expansion_history: await db.createDeityHistory({
            id: "shar-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.shar.id,
            description: "Became the patron of the shadow economy and underground networks, with her followers controlling much of the information flow between continents.",
        }),
        shar_modern_history: await db.createDeityHistory({
            id: "shar-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.shar.id,
            description: "Currently maintains the most extensive information network in Alabastria, with her followers being the primary spies and information brokers across all continents.",
        }),
        oghma_bringing_history: await db.createDeityHistory({
            id: "oghma-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.oghma.id,
            description: "In the aftermath of The Bringing, Oghma’s faithful focused on salvaging texts, oral histories, and lost languages. Many risked their lives to preserve fragments of the old world’s knowledge.",
        }),
        oghma_formation_history: await db.createDeityHistory({
            id: "oghma-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.oghma.id,
            description: "Oghman libraries became centers of learning and diplomacy. The first Great Concord of Scholars was signed under his auspices, standardizing languages and historical records.",
        }),
        oghma_expansion_history: await db.createDeityHistory({
            id: "oghma-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.oghma.id,
            description: "A golden age of invention and exploration emerged, driven by Oghma’s clergy encouraging experimentation and free exchange of ideas across continents.",
        }),
        oghma_modern_history: await db.createDeityHistory({
            id: "oghma-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.oghma.id,
            description: "In the present age, Oghma’s temples stand as neutral sanctuaries. His followers are instrumental in educating the masses and safeguarding truth against manipulation and deliberate falsehoods.",
        }),
        deneir_bringing_history: await db.createDeityHistory({
            id: "deneir-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.deneir.id,
            description: "Following The Bringing, Deneir’s clergy raced to document events as they unfolded, believing that accurate records would prevent future chaos born of forgotten truth.",
        }),
        deneir_formation_history: await db.createDeityHistory({
            id: "deneir-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.deneir.id,
            description: "Deneirite monasteries became centers of law and record-keeping. Many early Alabastrian legal codes were penned under his guidance.",
        }),
        deneir_expansion_history: await db.createDeityHistory({
            id: "deneir-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.deneir.id,
            description: "A surge in rune magic and glyph-based spellcraft elevated Deneir’s status among mages and artificers, solidifying his role as guardian of written magic.",
        }),
        deneir_modern_history: await db.createDeityHistory({
            id: "deneir-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.deneir.id,
            description: "In the current age, Deneir’s followers act as trusted neutral recorders of treaties, histories, and magical research, often serving as arbiters when truth is disputed.",
        }),
        mask_bringing_history: await db.createDeityHistory({
            id: "mask-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.mask.id,
            description: "In the uncertain days after The Bringing, Mask’s faithful became essential scouts, smugglers, and information gatherers. Many cities quietly relied on them despite public condemnation.",
        }),
        mask_formation_history: await db.createDeityHistory({
            id: "mask-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.mask.id,
            description: "Thieves’ guilds formally organized under Mask’s loose patronage, creating networks that spanned continents and traded in secrets as readily as coin.",
        }),
        mask_expansion_history: await db.createDeityHistory({
            id: "mask-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.mask.id,
            description: "A golden age of espionage elevated Mask’s influence. Shadow wars between rival states were often decided by Maskan agents before armies ever marched.",
        }),
        mask_modern_history: await db.createDeityHistory({
            id: "mask-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.mask.id,
            description: "In the present era, Mask is regarded with wary tolerance. His worship persists wherever laws are rigid, borders are tight, and secrets are valuable.",
        }),
        helm_bringing_history: await db.createDeityHistory({
            id: "helm-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.helm.id,
            description: "After The Bringing, Helm’s followers focused on restoring order amidst widespread chaos. His priests advised leaders on maintaining law and discipline in vulnerable cities.",
        }),
        helm_formation_history: await db.createDeityHistory({
            id: "helm-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.helm.id,
            description: "Helm’s influence expanded with the rise of city-states and organized militias. Watchtowers and fortified temples were constructed to safeguard urban centers.",
        }),
        helm_expansion_history: await db.createDeityHistory({
            id: "helm-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.helm.id,
            description: "Helm’s clergy became a respected force in law enforcement, mediating disputes and training guards. Many paladins and knights pledged service to him during regional conflicts.",
        }),
        helm_modern_history: await db.createDeityHistory({
            id: "helm-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.helm.id,
            description: "In the present age, Helm’s faithful continue to safeguard Alabastria. His temples act as centers of civic defense, and his doctrines of vigilance and duty guide soldiers, guards, and lawkeepers across the land.",
        }),
        tyr_bringing_history: await db.createDeityHistory({
            id: "tyr-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.tyr.id,
            description: "Following The Bringing, Tyr’s faithful worked to stabilize cities and regions, establishing courts and promoting impartial justice in a chaotic world.",
        }),
        tyr_formation_history: await db.createDeityHistory({
            id: "tyr-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.tyr.id,
            description: "Tyr’s influence expanded as legal codes were formalized across Alabastria. Paladins of Tyr acted as judges, mediators, and protectors of law.",
        }),
        tyr_expansion_history: await db.createDeityHistory({
            id: "tyr-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.tyr.id,
            description: "Tyr’s clergy gained recognition as moral arbiters, intervening in disputes between rulers and kingdoms. His doctrines of fairness became a cornerstone of governance.",
        }),
        tyr_modern_history: await db.createDeityHistory({
            id: "tyr-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.tyr.id,
            description: "In the current era, Tyr’s temples serve as centers of law and justice. His followers continue to uphold fairness, mediate conflicts, and punish wrongdoing, ensuring that Tyr’s ideals remain a guiding light in Alabastria.",
        }),
        chauntea_bringing_history: await db.createDeityHistory({
            id: "chauntea-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.chauntea.id,
            description: "After The Bringing, Chauntea’s clergy focused on restoring agricultural systems disrupted by chaos. Seeds were planted anew, and knowledge of irrigation and crop rotation was shared widely.",
        }),
        chauntea_formation_history: await db.createDeityHistory({
            id: "chauntea-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.chauntea.id,
            description: "Rural communities grew in size and stability under her guidance. Festivals celebrating planting and harvest became widespread, reinforcing social cohesion.",
        }),
        chauntea_expansion_history: await db.createDeityHistory({
            id: "chauntea-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.chauntea.id,
            description: "Her influence extended into urban centers as granaries, gardens, and public farms were established to feed growing populations. Druidic orders allied with her for land stewardship.",
        }),
        chauntea_modern_history: await db.createDeityHistory({
            id: "chauntea-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.chauntea.id,
            description: "In the present era, Chauntea’s followers continue to ensure food security, protect farmland, and celebrate the cycles of growth and harvest. Her teachings influence both peasants and rulers who value the prosperity of the land.",
        }),
        ilmater_bringing_history: await db.createDeityHistory({
            id: "ilmater-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.ilmater.id,
            description: "After The Bringing, Ilmater’s followers focused on aiding those devastated by upheaval. Temples acted as emergency relief centers for the displaced and wounded.",
        }),
        ilmater_formation_history: await db.createDeityHistory({
            id: "ilmater-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.ilmater.id,
            description: "Ilmaterite charities and hospitals were formalized, and orders of compassionate monks and clerics spread throughout Alabastria.",
        }),
        ilmater_expansion_history: await db.createDeityHistory({
            id: "ilmater-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.ilmater.id,
            description: "His clergy became mediators and healers in war-torn regions. Pilgrimages to sites of past tragedies grew as acts of penance and service.",
        }),
        ilmater_modern_history: await db.createDeityHistory({
            id: "ilmater-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.ilmater.id,
            description: "In the present era, Ilmater’s temples are vital centers for social welfare. His followers continue to alleviate suffering, provide refuge, and advocate for endurance, patience, and hope in the face of adversity.",
        }),
        talona_bringing_history: await db.createDeityHistory({
            id: "talona-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.talona.id,
            description: "In the chaos following The Bringing, Talona’s influence spread rapidly through uncontrolled disease and spoiled food supplies. Early cultists flourished among refugees and the dying.",
        }),
        talona_formation_history: await db.createDeityHistory({
            id: "talona-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.talona.id,
            description: "Several devastating plagues were attributed to Talona’s favor or wrath. Her worship became deeply feared, and many cities outlawed even speaking her name.",
        }),
        talona_expansion_history: await db.createDeityHistory({
            id: "talona-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.talona.id,
            description: "Talona’s followers refined poisons and diseases into weapons, selling their services to criminals and rival states. Her cults became more organized and secretive.",
        }),
        talona_modern_history: await db.createDeityHistory({
            id: "talona-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.talona.id,
            description: "In the current era, Talona is placated through forbidden rites rather than openly praised. Her cults are blamed for recent outbreaks collectively known as the Ashen Cough and the Black Bloom.",
        }),
        tymora_bringing_history: await db.createDeityHistory({
            id: "tymora-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.tymora.id,
            description: "Gained followers among those who took risks to survive in the new world, with her temples serving as centers of hope and luck.",
        }),
        tymora_formation_history: await db.createDeityHistory({
            id: "tymora-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.tymora.id,
            description: "Became the patron of early adventurers and explorers, with her temples serving as gathering places for those seeking fortune and adventure.",
        }),
        tymora_expansion_history: await db.createDeityHistory({
            id: "tymora-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.tymora.id,
            description: "Gained significant influence among the Huntbound Order and other adventuring groups, with her temples becoming centers of luck and fortune.",
        }),
        tymora_modern_history: await db.createDeityHistory({
            id: "tymora-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.tymora.id,
            description: "Currently maintains the most extensive network of luck and fortune in Alabastria, with her followers being the primary patrons of adventurers and risk takers.",
        }),
        beshaba_bringing_history: await db.createDeityHistory({
            id: "beshaba-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.beshaba.id,
            description: "Gained followers among those who suffered the most from The Bringing, with her temples serving as places of mourning and curse work.",
        }),
        beshaba_formation_history: await db.createDeityHistory({
            id: "beshaba-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.beshaba.id,
            description: "Established a network of cursed shrines and accident sites, with her followers becoming the primary curse workers and hex specialists across all continents.",
        }),
        beshaba_expansion_history: await db.createDeityHistory({
            id: "beshaba-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.beshaba.id,
            description: "Became the patron of the cursed and wronged, with her temples serving as centers of curse work and misfortune magic.",
        }),
        beshaba_modern_history: await db.createDeityHistory({
            id: "beshaba-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.beshaba.id,
            description: "Currently maintains the most extensive network of curse work and misfortune in Alabastria, with her followers being the primary curse workers and hex specialists.",
        }),
        kelemvor_bringing_history: await db.createDeityHistory({
            id: "kelemvor-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.kelemvor.id,
            description: "Gained followers among those who dealt with the many deaths caused by The Bringing, with his temples serving as centers of death and judgment.",
        }),
        kelemvor_formation_history: await db.createDeityHistory({
            id: "kelemvor-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.kelemvor.id,
            description: "Became the primary patron of death and judgment across all continents, with his temples serving as centers of justice and the dead.",
        }),
        kelemvor_expansion_history: await db.createDeityHistory({
            id: "kelemvor-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.kelemvor.id,
            description: "Established the most extensive network of death and judgment in Alabastria, with his followers being the primary judges and undertakers across all continents.",
        }),
        kelemvor_modern_history: await db.createDeityHistory({
            id: "kelemvor-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.kelemvor.id,
            description: "Currently maintains the most extensive network of death and judgment in Alabastria, with his followers being the primary judges and undertakers across all continents.",
        }),
        bane_bringing_history: await db.createDeityHistory({
            id: "bane-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.bane.id,
            description: "Gained followers among those who sought to control the chaos of The Bringing, with his temples serving as centers of tyranny and conquest.",
        }),
        bane_formation_history: await db.createDeityHistory({
            id: "bane-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.bane.id,
            description: "Became the patron of many ruling classes and military leaders, with his temples serving as centers of power and control across all continents.",
        }),
        bane_expansion_history: await db.createDeityHistory({
            id: "bane-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.bane.id,
            description: "Established a network of tyrannical rule and military conquest, with his followers being the primary tyrants and conquerors across all continents.",
        }),
        bane_modern_history: await db.createDeityHistory({
            id: "bane-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.bane.id,
            description: "Currently maintains the most extensive network of tyranny and conquest in Alabastria, with his followers being the primary tyrants and conquerors across all continents.",
        }),
        myrkul_bringing_history: await db.createDeityHistory({
            id: "myrkul-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.myrkul.id,
            description: "Gained followers among those who sought to cheat death in the new world, with his temples serving as centers of necromancy and undeath.",
        }),
        myrkul_formation_history: await db.createDeityHistory({
            id: "myrkul-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.myrkul.id,
            description: "Became the patron of necromancers and undead across all continents, with his temples serving as centers of death magic and undeath.",
        }),
        myrkul_expansion_history: await db.createDeityHistory({
            id: "myrkul-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.myrkul.id,
            description: "Established a network of necromancy and undeath across all continents, with his followers being the primary necromancers and undead across all continents.",
        }),
        myrkul_modern_history: await db.createDeityHistory({
            id: "myrkul-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.myrkul.id,
            description: "Currently maintains the most extensive network of necromancy and undeath in Alabastria, with his followers being the primary necromancers and undead across all continents.",
        }),
        jergal_bringing_history: await db.createDeityHistory({
            id: "jergal-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.jergal.id,
            description: "Gained followers among those who sought to record the history of The Bringing, with his temples serving as centers of record keeping and knowledge.",
        }),
        jergal_formation_history: await db.createDeityHistory({
            id: "jergal-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.jergal.id,
            description: "Became the patron of scribes and historians across all continents, with his temples serving as centers of record keeping and knowledge.",
        }),
        jergal_expansion_history: await db.createDeityHistory({
            id: "jergal-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.jergal.id,
            description: "Established the most extensive network of record keeping and knowledge in Alabastria, with his followers being the primary scribes and historians across all continents.",
        }),
        jergal_modern_history: await db.createDeityHistory({
            id: "jergal-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.jergal.id,
            description: "Currently maintains the most extensive network of record keeping and knowledge in Alabastria, with his followers being the primary scribes and historians across all continents.",
        }),
        moradin_bringing_history: await db.createDeityHistory({
            id: "moradin-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.moradin.id,
            description: "Gained followers among dwarven settlers who sought to establish their craft in the new world, with his temples serving as centers of craftsmanship and creation.",
        }),
        moradin_formation_history: await db.createDeityHistory({
            id: "moradin-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.moradin.id,
            description: "Became the patron of dwarven communities across all continents, with his temples serving as centers of craftsmanship and creation.",
        }),
        moradin_expansion_history: await db.createDeityHistory({
            id: "moradin-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.moradin.id,
            description: "Established the most extensive network of craftsmanship and creation in Alabastria, with his followers being the primary craftsmen and creators across all continents.",
        }),
        moradin_modern_history: await db.createDeityHistory({
            id: "moradin-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.moradin.id,
            description: "Currently maintains the most extensive network of craftsmanship and creation in Alabastria, with his followers being the primary craftsmen and creators across all continents.",
        }),
        berronar_truesilver_bringing_history: await db.createDeityHistory({
            id: "berronar-truesilver-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.berronar_truesilver.id,
            description: "Gained followers among dwarven families who sought to establish their homes in the new world, with her temples serving as centers of family and protection.",
        }),
        berronar_truesilver_formation_history: await db.createDeityHistory({
            id: "berronar-truesilver-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.berronar_truesilver.id,
            description: "Became the patron of dwarven families across all continents, with her temples serving as centers of family and protection.",
        }),
        berronar_truesilver_expansion_history: await db.createDeityHistory({
            id: "berronar-truesilver-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.berronar_truesilver.id,
            description: "Established the most extensive network of family and protection in Alabastria, with her followers being the primary protectors and home keepers across all continents.",
        }),
        berronar_truesilver_modern_history: await db.createDeityHistory({
            id: "berronar-truesilver-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.berronar_truesilver.id,
            description: "Currently maintains the most extensive network of family and protection in Alabastria, with her followers being the primary protectors and home keepers across all continents.",
        }),
        clangeddin_silverbeard_bringing_history: await db.createDeityHistory({
            id: "clangeddin-silverbeard-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.clangeddin_silverbeard.id,
            description: "Gained followers among dwarven warriors who sought to protect their people in the new world, with his temples serving as centers of battle and honor.",
        }),
        clangeddin_silverbeard_formation_history: await db.createDeityHistory({
            id: "clangeddin-silverbeard-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.clangeddin_silverbeard.id,
            description: "Became the patron of dwarven warriors across all continents, with his temples serving as centers of battle and honor.",
        }),
        clangeddin_silverbeard_expansion_history: await db.createDeityHistory({
            id: "clangeddin-silverbeard-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.clangeddin_silverbeard.id,
            description: "Established the most extensive network of battle and honor in Alabastria, with his followers being the primary warriors and honor seekers across all continents.",
        }),
        clangeddin_silverbeard_modern_history: await db.createDeityHistory({
            id: "clangeddin-silverbeard-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.clangeddin_silverbeard.id,
            description: "Currently maintains the most extensive network of battle and honor in Alabastria, with his followers being the primary warriors and honor seekers across all continents.",
        }),
        dugmaren_brightmantle_bringing_history: await db.createDeityHistory({
            id: "dugmaren-brightmantle-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.dugmaren_brightmantle.id,
            description: "Gained followers among dwarven inventors who sought to adapt their technology to the new world, with his temples serving as centers of discovery and innovation.",
        }),
        dugmaren_brightmantle_formation_history: await db.createDeityHistory({
            id: "dugmaren-brightmantle-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.dugmaren_brightmantle.id,
            description: "Became the patron of dwarven inventors across all continents, with his temples serving as centers of discovery and innovation.",
        }),
        dugmaren_brightmantle_expansion_history: await db.createDeityHistory({
            id: "dugmaren-brightmantle-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.dugmaren_brightmantle.id,
            description: "Established the most extensive network of discovery and innovation in Alabastria, with his followers being the primary inventors and researchers across all continents.",
        }),
        dugmaren_brightmantle_modern_history: await db.createDeityHistory({
            id: "dugmaren-brightmantle-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.dugmaren_brightmantle.id,
            description: "Currently maintains the most extensive network of discovery and innovation in Alabastria, with his followers being the primary inventors and researchers across all continents.",
        }),
        vergadain_bringing_history: await db.createDeityHistory({
            id: "vergadain-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.vergadain.id,
            description: "Gained followers among dwarven merchants who sought to establish trade in the new world, with his temples serving as centers of wealth and trade.",
        }),
        vergadain_formation_history: await db.createDeityHistory({
            id: "vergadain-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.vergadain.id,
            description: "Became the patron of dwarven merchants across all continents, with his temples serving as centers of wealth and trade.",
        }),
        vergadain_expansion_history: await db.createDeityHistory({
            id: "vergadain-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.vergadain.id,
            description: "Established the most extensive network of wealth and trade in Alabastria, with his followers being the primary merchants and traders across all continents.",
        }),
        vergadain_modern_history: await db.createDeityHistory({
            id: "vergadain-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.vergadain.id,
            description: "Currently maintains the most extensive network of wealth and trade in Alabastria, with his followers being the primary merchants and traders across all continents.",
        }),
        corellon_larethian_bringing_history: await db.createDeityHistory({
            id: "corellon-larethian-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.corellon_larethian.id,
            description: "Gained followers among elven settlers who sought to establish their art and magic in the new world, with his temples serving as centers of creativity and magic.",
        }),
        corellon_larethian_formation_history: await db.createDeityHistory({
            id: "corellon-larethian-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.corellon_larethian.id,
            description: "Became the patron of elven communities across all continents, with his temples serving as centers of art and magic.",
        }),
        corellon_larethian_expansion_history: await db.createDeityHistory({
            id: "corellon-larethian-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.corellon_larethian.id,
            description: "Established the most prestigious magical and artistic institutions in Alabastria, with his followers being the primary creators and magical researchers across all continents.",
        }),
        corellon_larethian_modern_history: await db.createDeityHistory({
            id: "corellon-larethian-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.corellon_larethian.id,
            description: "Currently maintains the most extensive network of art and magic in Alabastria, with his followers being the primary artists and magical researchers across all continents.",
        }),
        sehanine_moonbow_bringing_history: await db.createDeityHistory({
            id: "sehanine-moonbow-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.sehanine_moonbow.id,
            description: "Gained followers among elven rangers who sought to explore the new world, with her temples serving as centers of dreams and journeys.",
        }),
        sehanine_moonbow_formation_history: await db.createDeityHistory({
            id: "sehanine-moonbow-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.sehanine_moonbow.id,
            description: "Became the patron of elven rangers across all continents, with her temples serving as centers of exploration and dreams.",
        }),
        sehanine_moonbow_expansion_history: await db.createDeityHistory({
            id: "sehanine-moonbow-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.sehanine_moonbow.id,
            description: "Established the most extensive network of exploration and dreams in Alabastria, with her followers being the primary rangers and explorers across all continents.",
        }),
        sehanine_moonbow_modern_history: await db.createDeityHistory({
            id: "sehanine-moonbow-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.sehanine_moonbow.id,
            description: "Currently maintains the most extensive network of exploration and dreams in Alabastria, with her followers being the primary rangers and explorers across all continents.",
        }),
        hanali_celanil_bringing_history: await db.createDeityHistory({
            id: "hanali-celanil-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.hanali_celanil.id,
            description: "Gained followers among elven communities who sought to maintain their culture of beauty and love in the new world, with her temples serving as centers of love and beauty.",
        }),
        hanali_celanil_formation_history: await db.createDeityHistory({
            id: "hanali-celanil-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.hanali_celanil.id,
            description: "Became the patron of elven communities across all continents, with her temples serving as centers of love and beauty.",
        }),
        hanali_celanil_expansion_history: await db.createDeityHistory({
            id: "hanali-celanil-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.hanali_celanil.id,
            description: "Established the most extensive network of love and beauty in Alabastria, with her followers being the primary artists and lovers across all continents.",
        }),
        hanali_celanil_modern_history: await db.createDeityHistory({
            id: "hanali-celanil-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.hanali_celanil.id,
            description: "Currently maintains the most extensive network of love and beauty in Alabastria, with her followers being the primary artists and lovers across all continents.",
        }),
        labelas_enoreth_bringing_history: await db.createDeityHistory({
            id: "labelas-enoreth-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.labelas_enoreth.id,
            description: "Gained followers among elven scholars who sought to record the history of The Bringing, with his temples serving as centers of time and wisdom.",
        }),
        labelas_enoreth_formation_history: await db.createDeityHistory({
            id: "labelas-enoreth-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.labelas_enoreth.id,
            description: "Became the patron of elven scholars across all continents, with his temples serving as centers of time and wisdom.",
        }),
        labelas_enoreth_expansion_history: await db.createDeityHistory({
            id: "labelas-enoreth-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.labelas_enoreth.id,
            description: "Established the most extensive network of time and wisdom in Alabastria, with his followers being the primary historians and scholars across all continents.",
        }),
        labelas_enoreth_modern_history: await db.createDeityHistory({
            id: "labelas-enoreth-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.labelas_enoreth.id,
            description: "Currently maintains the most extensive network of time and wisdom in Alabastria, with his followers being the primary historians and scholars across all continents.",
        }),
        solonor_thelandira_bringing_history: await db.createDeityHistory({
            id: "solonor-thelandira-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.solonor_thelandira.id,
            description: "Gained followers among elven rangers who sought to hunt and explore the new world, with his temples serving as centers of archery and hunting.",
        }),
        solonor_thelandira_formation_history: await db.createDeityHistory({
            id: "solonor-thelandira-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.solonor_thelandira.id,
            description: "Became the patron of elven rangers across all continents, with his temples serving as centers of archery and hunting.",
        }),
        solonor_thelandira_expansion_history: await db.createDeityHistory({
            id: "solonor-thelandira-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.solonor_thelandira.id,
            description: "Established the most extensive network of archery and hunting in Alabastria, with his followers being the primary rangers and hunters across all continents.",
        }),
        solonor_thelandira_modern_history: await db.createDeityHistory({
            id: "solonor-thelandira-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.solonor_thelandira.id,
            description: "Currently maintains the most extensive network of archery and hunting in Alabastria, with his followers being the primary rangers and hunters across all continents.",
        }),
        lolth_bringing_history: await db.createDeityHistory({
            id: "lolth-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.lolth.id,
            description: "Gained followers among dark elves who sought to establish their power in the new world, with her temples serving as centers of deception and domination.",
        }),
        lolth_formation_history: await db.createDeityHistory({
            id: "lolth-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.lolth.id,
            description: "Became the patron of dark elves across all continents, with her temples serving as centers of deception and domination.",
        }),
        lolth_expansion_history: await db.createDeityHistory({
            id: "lolth-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.lolth.id,
            description: "Established a network of deception and domination across all continents, with her followers being the primary deceivers and power seekers across all continents.",
        }),
        lolth_modern_history: await db.createDeityHistory({
            id: "lolth-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.lolth.id,
            description: "Currently maintains a network of deception and domination in Alabastria, with her followers being the primary deceivers and power seekers across all continents.",
        }),
        vhaeraun_bringing_history: await db.createDeityHistory({
            id: "vhaeraun-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.vhaeraun.id,
            description: "Gained followers among dark elves who sought to rebel against the new world order, with his temples serving as centers of shadow and rebellion.",
        }),
        vhaeraun_formation_history: await db.createDeityHistory({
            id: "vhaeraun-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.vhaeraun.id,
            description: "Became the patron of dark elves across all continents, with his temples serving as centers of shadow and rebellion.",
        }),
        vhaeraun_expansion_history: await db.createDeityHistory({
            id: "vhaeraun-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.vhaeraun.id,
            description: "Established a network of shadow and rebellion across all continents, with his followers being the primary rebels and thieves across all continents.",
        }),
        vhaeraun_modern_history: await db.createDeityHistory({
            id: "vhaeraun-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.vhaeraun.id,
            description: "Currently maintains a network of shadow and rebellion in Alabastria, with his followers being the primary rebels and thieves across all continents.",
        }),
        eilistraee_bringing_history: await db.createDeityHistory({
            id: "eilistraee-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.eilistraee.id,
            description: "Gained followers among dark elves who sought redemption in the new world, with her temples serving as centers of song and redemption.",
        }),
        eilistraee_formation_history: await db.createDeityHistory({
            id: "eilistraee-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.eilistraee.id,
            description: "Became the patron of redeemed dark elves across all continents, with her temples serving as centers of song and redemption.",
        }),
        eilistraee_expansion_history: await db.createDeityHistory({
            id: "eilistraee-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.eilistraee.id,
            description: "Established a network of song and redemption across all continents, with her followers being the primary bards and redemption seekers across all continents.",
        }),
        eilistraee_modern_history: await db.createDeityHistory({
            id: "eilistraee-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.eilistraee.id,
            description: "Currently maintains a network of song and redemption in Alabastria, with her followers being the primary bards and redemption seekers across all continents.",
        }),
        gruumsh_one_eye_bringing_history: await db.createDeityHistory({
            id: "gruumsh-one-eye-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.gruumsh_one_eye.id,
            description: "undefined",
        }),
        gruumsh_one_eye_formation_history: await db.createDeityHistory({
            id: "gruumsh-one-eye-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.gruumsh_one_eye.id,
            description: "undefined",
        }),
        gruumsh_one_eye_expansion_history: await db.createDeityHistory({
            id: "gruumsh-one-eye-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.gruumsh_one_eye.id,
            description: "undefined",
        }),
        gruumsh_one_eye_modern_history: await db.createDeityHistory({
            id: "gruumsh-one-eye-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.gruumsh_one_eye.id,
            description: "undefined",
        }),
        luthic_bringing_history: await db.createDeityHistory({
            id: "luthic-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.luthic.id,
            description: "undefined",
        }),
        luthic_formation_history: await db.createDeityHistory({
            id: "luthic-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.luthic.id,
            description: "undefined",
        }),
        luthic_expansion_history: await db.createDeityHistory({
            id: "luthic-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.luthic.id,
            description: "undefined",
        }),
        luthic_modern_history: await db.createDeityHistory({
            id: "luthic-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.luthic.id,
            description: "undefined",
        }),
        ilneval_bringing_history: await db.createDeityHistory({
            id: "ilneval-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.ilneval.id,
            description: "undefined",
        }),
        ilneval_formation_history: await db.createDeityHistory({
            id: "ilneval-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.ilneval.id,
            description: "undefined",
        }),
        ilneval_expansion_history: await db.createDeityHistory({
            id: "ilneval-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.ilneval.id,
            description: "undefined",
        }),
        ilneval_modern_history: await db.createDeityHistory({
            id: "ilneval-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.ilneval.id,
            description: "undefined",
        }),
        bahgtru_bringing_history: await db.createDeityHistory({
            id: "bahgtru-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.bahgtru.id,
            description: "undefined",
        }),
        bahgtru_formation_history: await db.createDeityHistory({
            id: "bahgtru-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.bahgtru.id,
            description: "undefined",
        }),
        bahgtru_expansion_history: await db.createDeityHistory({
            id: "bahgtru-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.bahgtru.id,
            description: "undefined",
        }),
        bahgtru_modern_history: await db.createDeityHistory({
            id: "bahgtru-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.bahgtru.id,
            description: "undefined",
        }),
        shargaas_bringing_history: await db.createDeityHistory({
            id: "shargaas-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.shargaas.id,
            description: "undefined",
        }),
        shargaas_formation_history: await db.createDeityHistory({
            id: "shargaas-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.shargaas.id,
            description: "undefined",
        }),
        shargaas_expansion_history: await db.createDeityHistory({
            id: "shargaas-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.shargaas.id,
            description: "undefined",
        }),
        shargaas_modern_history: await db.createDeityHistory({
            id: "shargaas-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.shargaas.id,
            description: "undefined",
        }),
        bahamut_bringing_history: await db.createDeityHistory({
            id: "bahamut-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.bahamut.id,
            description: "undefined",
        }),
        bahamut_formation_history: await db.createDeityHistory({
            id: "bahamut-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.bahamut.id,
            description: "undefined",
        }),
        bahamut_expansion_history: await db.createDeityHistory({
            id: "bahamut-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.bahamut.id,
            description: "undefined",
        }),
        bahamut_modern_history: await db.createDeityHistory({
            id: "bahamut-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.bahamut.id,
            description: "undefined",
        }),
        tiamat_bringing_history: await db.createDeityHistory({
            id: "tiamat-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.tiamat.id,
            description: "undefined",
        }),
        tiamat_formation_history: await db.createDeityHistory({
            id: "tiamat-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.tiamat.id,
            description: "undefined",
        }),
        tiamat_expansion_history: await db.createDeityHistory({
            id: "tiamat-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.tiamat.id,
            description: "undefined",
        }),
        tiamat_modern_history: await db.createDeityHistory({
            id: "tiamat-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.tiamat.id,
            description: "undefined",
        }),
        akadi_bringing_history: await db.createDeityHistory({
            id: "akadi-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.akadi.id,
            description: "undefined",
        }),
        akadi_formation_history: await db.createDeityHistory({
            id: "akadi-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.akadi.id,
            description: "undefined",
        }),
        akadi_expansion_history: await db.createDeityHistory({
            id: "akadi-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.akadi.id,
            description: "undefined",
        }),
        akadi_modern_history: await db.createDeityHistory({
            id: "akadi-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.akadi.id,
            description: "undefined",
        }),
        grumbar_bringing_history: await db.createDeityHistory({
            id: "grumbar-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.grumbar.id,
            description: "undefined",
        }),
        grumbar_formation_history: await db.createDeityHistory({
            id: "grumbar-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.grumbar.id,
            description: "undefined",
        }),
        grumbar_expansion_history: await db.createDeityHistory({
            id: "grumbar-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.grumbar.id,
            description: "undefined",
        }),
        grumbar_modern_history: await db.createDeityHistory({
            id: "grumbar-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.grumbar.id,
            description: "undefined",
        }),
        kossuth_bringing_history: await db.createDeityHistory({
            id: "kossuth-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.kossuth.id,
            description: "undefined",
        }),
        kossuth_formation_history: await db.createDeityHistory({
            id: "kossuth-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.kossuth.id,
            description: "undefined",
        }),
        kossuth_expansion_history: await db.createDeityHistory({
            id: "kossuth-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.kossuth.id,
            description: "undefined",
        }),
        kossuth_modern_history: await db.createDeityHistory({
            id: "kossuth-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.kossuth.id,
            description: "undefined",
        }),
        istishia_bringing_history: await db.createDeityHistory({
            id: "istishia-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.istishia.id,
            description: "undefined",
        }),
        istishia_formation_history: await db.createDeityHistory({
            id: "istishia-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.istishia.id,
            description: "undefined",
        }),
        istishia_expansion_history: await db.createDeityHistory({
            id: "istishia-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.istishia.id,
            description: "undefined",
        }),
        istishia_modern_history: await db.createDeityHistory({
            id: "istishia-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.istishia.id,
            description: "undefined",
        }),
        the_raven_queen_bringing_history: await db.createDeityHistory({
            id: "the-raven-queen-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.the_raven_queen.id,
            description: "undefined",
        }),
        the_raven_queen_formation_history: await db.createDeityHistory({
            id: "the-raven-queen-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.the_raven_queen.id,
            description: "undefined",
        }),
        the_raven_queen_expansion_history: await db.createDeityHistory({
            id: "the-raven-queen-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.the_raven_queen.id,
            description: "undefined",
        }),
        the_raven_queen_modern_history: await db.createDeityHistory({
            id: "the-raven-queen-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.the_raven_queen.id,
            description: "undefined",
        }),
        asmodeus_bringing_history: await db.createDeityHistory({
            id: "asmodeus-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.asmodeus.id,
            description: "undefined",
        }),
        asmodeus_formation_history: await db.createDeityHistory({
            id: "asmodeus-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.asmodeus.id,
            description: "undefined",
        }),
        asmodeus_expansion_history: await db.createDeityHistory({
            id: "asmodeus-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.asmodeus.id,
            description: "undefined",
        }),
        asmodeus_modern_history: await db.createDeityHistory({
            id: "asmodeus-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.asmodeus.id,
            description: "undefined",
        }),
        yondalla_bringing_history: await db.createDeityHistory({
            id: "yondalla-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.yondalla.id,
            description: "undefined",
        }),
        yondalla_formation_history: await db.createDeityHistory({
            id: "yondalla-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.yondalla.id,
            description: "undefined",
        }),
        yondalla_expansion_history: await db.createDeityHistory({
            id: "yondalla-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.yondalla.id,
            description: "undefined",
        }),
        yondalla_modern_history: await db.createDeityHistory({
            id: "yondalla-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.yondalla.id,
            description: "undefined",
        }),
        arvoreen_bringing_history: await db.createDeityHistory({
            id: "arvoreen-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.arvoreen.id,
            description: "undefined",
        }),
        arvoreen_formation_history: await db.createDeityHistory({
            id: "arvoreen-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.arvoreen.id,
            description: "undefined",
        }),
        arvoreen_expansion_history: await db.createDeityHistory({
            id: "arvoreen-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.arvoreen.id,
            description: "undefined",
        }),
        arvoreen_modern_history: await db.createDeityHistory({
            id: "arvoreen-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.arvoreen.id,
            description: "undefined",
        }),
        cyrrollalee_bringing_history: await db.createDeityHistory({
            id: "cyrrollalee-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.cyrrollalee.id,
            description: "undefined",
        }),
        cyrrollalee_formation_history: await db.createDeityHistory({
            id: "cyrrollalee-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.cyrrollalee.id,
            description: "undefined",
        }),
        cyrrollalee_expansion_history: await db.createDeityHistory({
            id: "cyrrollalee-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.cyrrollalee.id,
            description: "undefined",
        }),
        cyrrollalee_modern_history: await db.createDeityHistory({
            id: "cyrrollalee-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.cyrrollalee.id,
            description: "undefined",
        }),
        urogalan_bringing_history: await db.createDeityHistory({
            id: "urogalan-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.urogalan.id,
            description: "undefined",
        }),
        urogalan_formation_history: await db.createDeityHistory({
            id: "urogalan-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.urogalan.id,
            description: "undefined",
        }),
        urogalan_expansion_history: await db.createDeityHistory({
            id: "urogalan-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.urogalan.id,
            description: "undefined",
        }),
        urogalan_modern_history: await db.createDeityHistory({
            id: "urogalan-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.urogalan.id,
            description: "undefined",
        }),
        garl_glittergold_bringing_history: await db.createDeityHistory({
            id: "garl-glittergold-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.garl_glittergold.id,
            description: "undefined",
        }),
        garl_glittergold_formation_history: await db.createDeityHistory({
            id: "garl-glittergold-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.garl_glittergold.id,
            description: "undefined",
        }),
        garl_glittergold_expansion_history: await db.createDeityHistory({
            id: "garl-glittergold-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.garl_glittergold.id,
            description: "undefined",
        }),
        garl_glittergold_modern_history: await db.createDeityHistory({
            id: "garl-glittergold-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.garl_glittergold.id,
            description: "undefined",
        }),
        baervan_wildwanderer_bringing_history: await db.createDeityHistory({
            id: "baervan-wildwanderer-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.baervan_wildwanderer.id,
            description: "undefined",
        }),
        baervan_wildwanderer_formation_history: await db.createDeityHistory({
            id: "baervan-wildwanderer-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.baervan_wildwanderer.id,
            description: "undefined",
        }),
        baervan_wildwanderer_expansion_history: await db.createDeityHistory({
            id: "baervan-wildwanderer-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.baervan_wildwanderer.id,
            description: "undefined",
        }),
        baervan_wildwanderer_modern_history: await db.createDeityHistory({
            id: "baervan-wildwanderer-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.baervan_wildwanderer.id,
            description: "undefined",
        }),
        baravar_cloakshadow_bringing_history: await db.createDeityHistory({
            id: "baravar-cloakshadow-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.baravar_cloakshadow.id,
            description: "undefined",
        }),
        baravar_cloakshadow_formation_history: await db.createDeityHistory({
            id: "baravar-cloakshadow-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.baravar_cloakshadow.id,
            description: "undefined",
        }),
        baravar_cloakshadow_expansion_history: await db.createDeityHistory({
            id: "baravar-cloakshadow-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.baravar_cloakshadow.id,
            description: "undefined",
        }),
        baravar_cloakshadow_modern_history: await db.createDeityHistory({
            id: "baravar-cloakshadow-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.baravar_cloakshadow.id,
            description: "undefined",
        }),
        segojan_earthcaller_bringing_history: await db.createDeityHistory({
            id: "segojan-earthcaller-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.segojan_earthcaller.id,
            description: "undefined",
        }),
        segojan_earthcaller_formation_history: await db.createDeityHistory({
            id: "segojan-earthcaller-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.segojan_earthcaller.id,
            description: "undefined",
        }),
        segojan_earthcaller_expansion_history: await db.createDeityHistory({
            id: "segojan-earthcaller-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.segojan_earthcaller.id,
            description: "undefined",
        }),
        segojan_earthcaller_modern_history: await db.createDeityHistory({
            id: "segojan-earthcaller-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.segojan_earthcaller.id,
            description: "undefined",
        }),
        maglubiyet_bringing_history: await db.createDeityHistory({
            id: "maglubiyet-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.maglubiyet.id,
            description: "undefined",
        }),
        maglubiyet_formation_history: await db.createDeityHistory({
            id: "maglubiyet-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.maglubiyet.id,
            description: "undefined",
        }),
        maglubiyet_expansion_history: await db.createDeityHistory({
            id: "maglubiyet-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.maglubiyet.id,
            description: "undefined",
        }),
        maglubiyet_modern_history: await db.createDeityHistory({
            id: "maglubiyet-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.maglubiyet.id,
            description: "undefined",
        }),
        khurgorbaeyag_bringing_history: await db.createDeityHistory({
            id: "khurgorbaeyag-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.khurgorbaeyag.id,
            description: "undefined",
        }),
        khurgorbaeyag_formation_history: await db.createDeityHistory({
            id: "khurgorbaeyag-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.khurgorbaeyag.id,
            description: "undefined",
        }),
        khurgorbaeyag_expansion_history: await db.createDeityHistory({
            id: "khurgorbaeyag-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.khurgorbaeyag.id,
            description: "undefined",
        }),
        khurgorbaeyag_modern_history: await db.createDeityHistory({
            id: "khurgorbaeyag-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.khurgorbaeyag.id,
            description: "undefined",
        }),
        bargrivyek_bringing_history: await db.createDeityHistory({
            id: "bargrivyek-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.bargrivyek.id,
            description: "undefined",
        }),
        bargrivyek_formation_history: await db.createDeityHistory({
            id: "bargrivyek-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.bargrivyek.id,
            description: "undefined",
        }),
        bargrivyek_expansion_history: await db.createDeityHistory({
            id: "bargrivyek-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.bargrivyek.id,
            description: "undefined",
        }),
        bargrivyek_modern_history: await db.createDeityHistory({
            id: "bargrivyek-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.bargrivyek.id,
            description: "undefined",
        }),
        nomog_geaya_bringing_history: await db.createDeityHistory({
            id: "nomog-geaya-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.nomog_geaya.id,
            description: "undefined",
        }),
        nomog_geaya_formation_history: await db.createDeityHistory({
            id: "nomog-geaya-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.nomog_geaya.id,
            description: "undefined",
        }),
        nomog_geaya_expansion_history: await db.createDeityHistory({
            id: "nomog-geaya-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.nomog_geaya.id,
            description: "undefined",
        }),
        nomog_geaya_modern_history: await db.createDeityHistory({
            id: "nomog-geaya-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.nomog_geaya.id,
            description: "undefined",
        }),
        kurtulmak_bringing_history: await db.createDeityHistory({
            id: "kurtulmak-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.kurtulmak.id,
            description: "undefined",
        }),
        kurtulmak_formation_history: await db.createDeityHistory({
            id: "kurtulmak-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.kurtulmak.id,
            description: "undefined",
        }),
        kurtulmak_expansion_history: await db.createDeityHistory({
            id: "kurtulmak-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.kurtulmak.id,
            description: "undefined",
        }),
        kurtulmak_modern_history: await db.createDeityHistory({
            id: "kurtulmak-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.kurtulmak.id,
            description: "undefined",
        }),
        gith_bringing_history: await db.createDeityHistory({
            id: "gith-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.gith.id,
            description: "undefined",
        }),
        gith_formation_history: await db.createDeityHistory({
            id: "gith-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.gith.id,
            description: "undefined",
        }),
        gith_expansion_history: await db.createDeityHistory({
            id: "gith-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.gith.id,
            description: "undefined",
        }),
        gith_modern_history: await db.createDeityHistory({
            id: "gith-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.gith.id,
            description: "undefined",
        }),
        vlaakith_bringing_history: await db.createDeityHistory({
            id: "vlaakith-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.vlaakith.id,
            description: "undefined",
        }),
        vlaakith_formation_history: await db.createDeityHistory({
            id: "vlaakith-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.vlaakith.id,
            description: "undefined",
        }),
        vlaakith_expansion_history: await db.createDeityHistory({
            id: "vlaakith-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.vlaakith.id,
            description: "undefined",
        }),
        vlaakith_modern_history: await db.createDeityHistory({
            id: "vlaakith-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.vlaakith.id,
            description: "undefined",
        }),
        sseth_bringing_history: await db.createDeityHistory({
            id: "sseth-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.sseth.id,
            description: "undefined",
        }),
        sseth_formation_history: await db.createDeityHistory({
            id: "sseth-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.sseth.id,
            description: "undefined",
        }),
        sseth_expansion_history: await db.createDeityHistory({
            id: "sseth-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.sseth.id,
            description: "undefined",
        }),
        sseth_modern_history: await db.createDeityHistory({
            id: "sseth-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.sseth.id,
            description: "undefined",
        }),
        merrshaulk_bringing_history: await db.createDeityHistory({
            id: "merrshaulk-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.merrshaulk.id,
            description: "undefined",
        }),
        merrshaulk_formation_history: await db.createDeityHistory({
            id: "merrshaulk-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.merrshaulk.id,
            description: "undefined",
        }),
        merrshaulk_expansion_history: await db.createDeityHistory({
            id: "merrshaulk-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.merrshaulk.id,
            description: "undefined",
        }),
        merrshaulk_modern_history: await db.createDeityHistory({
            id: "merrshaulk-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.merrshaulk.id,
            description: "undefined",
        }),
        umberlee_bringing_history: await db.createDeityHistory({
            id: "umberlee-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.umberlee.id,
            description: "undefined",
        }),
        umberlee_formation_history: await db.createDeityHistory({
            id: "umberlee-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.umberlee.id,
            description: "undefined",
        }),
        umberlee_expansion_history: await db.createDeityHistory({
            id: "umberlee-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.umberlee.id,
            description: "undefined",
        }),
        umberlee_modern_history: await db.createDeityHistory({
            id: "umberlee-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.umberlee.id,
            description: "undefined",
        }),
        valkur_bringing_history: await db.createDeityHistory({
            id: "valkur-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.valkur.id,
            description: "undefined",
        }),
        valkur_formation_history: await db.createDeityHistory({
            id: "valkur-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.valkur.id,
            description: "undefined",
        }),
        valkur_expansion_history: await db.createDeityHistory({
            id: "valkur-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.valkur.id,
            description: "undefined",
        }),
        valkur_modern_history: await db.createDeityHistory({
            id: "valkur-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.valkur.id,
            description: "undefined",
        }),
        deep_sashelas_bringing_history: await db.createDeityHistory({
            id: "deep-sashelas-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.deep_sashelas.id,
            description: "undefined",
        }),
        deep_sashelas_formation_history: await db.createDeityHistory({
            id: "deep-sashelas-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.deep_sashelas.id,
            description: "undefined",
        }),
        deep_sashelas_expansion_history: await db.createDeityHistory({
            id: "deep-sashelas-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.deep_sashelas.id,
            description: "undefined",
        }),
        deep_sashelas_modern_history: await db.createDeityHistory({
            id: "deep-sashelas-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.deep_sashelas.id,
            description: "undefined",
        }),
        sekolah_bringing_history: await db.createDeityHistory({
            id: "sekolah-bringing-history",
            eraId: historicalPeriods.bringing.id,
            deityId: deities.sekolah.id,
            description: "undefined",
        }),
        sekolah_formation_history: await db.createDeityHistory({
            id: "sekolah-formation-history",
            eraId: historicalPeriods.formation.id,
            deityId: deities.sekolah.id,
            description: "undefined",
        }),
        sekolah_expansion_history: await db.createDeityHistory({
            id: "sekolah-expansion-history",
            eraId: historicalPeriods.expansion.id,
            deityId: deities.sekolah.id,
            description: "undefined",
        }),
        sekolah_modern_history: await db.createDeityHistory({
            id: "sekolah-modern-history",
            eraId: historicalPeriods.modern.id,
            deityId: deities.sekolah.id,
            description: "undefined",
        }),
    }
}