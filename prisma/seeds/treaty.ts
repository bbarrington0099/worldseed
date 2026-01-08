import { Prisma } from "@prismagen/client";
import * as db from "@lib/db-seed";
import { Continents/* , Dates */ } from "./index";

type TreatyPayload = Prisma.TreatyGetPayload<{}>;
export interface Treaties {
    magical_research_accord: TreatyPayload;
    northern_defense_pact: TreatyPayload;
    kamalatman_internal_trade_agreement: TreatyPayload;
    southern_trade_pact: TreatyPayload;
    volcanic_forge_accord: TreatyPayload;
    northern_mining_accord: TreatyPayload;
    raw_trade_pact: TreatyPayload;
    kantra_non_aggression_pact: TreatyPayload;
}

interface SeedTreatiesParams {
    continents: Continents;
    //dates: Dates;
}
export async function seedTreaties(params: SeedTreatiesParams): Promise<Treaties> {
    const { continents /*, dates */ } = params;
    return {
        magical_research_accord: await db.createTreaty({
            id: "treaty-magical-research-accord-alabastria",
            name: "Magical Research Accord",
            //signedDate: { connect: { id: dates.magical_research_accord_signed_date.id } },
            signedDate: "615",
            terms: "Kuriguer shares magical knowledge in exchange for agricultural goods and trade access across the seas protected by Skratonia.",
            continentsInvolved: {
                connect: [
                    { id: continents.kuriguer.id },
                    { id: continents.skratonia.id }
                ]
            }
        }),
        northern_defense_pact: await db.createTreaty({
            id: "treaty-northern-defense-pact-alabastria",
            name: "Northern Defense Pact",
            //signedDate: { connect: { id: dates.northern_defense_pact_signed_date.id } },
            signedDate: "580",
            terms: "Mutual defense agreement between Bulsania and Skratonia to protect northern maritime trade routes from Kantra threats.",
            continentsInvolved: {
                connect: [
                    { id: continents.bulsania.id },
                    { id: continents.skratonia.id }
                ]
            }
        }),
        kamalatman_internal_trade_agreement: await db.createTreaty({
            id: "treaty-kamalatman-internal-trade-agreement-alabastria",
            name: "Kamalatman Internal Trade Agreement",
            //signedDate: { connect: { id: dates.kamalatman_internal_trade_agreement_signed_date.id } },
            signedDate: "700",
            terms: "Free trade agreement between Katman, Alatman, and Maltman to promote economic growth and resource sharing within Kamalkamalatman_internal_trade_agreement_signed_dateatman.",
            continentsInvolved: {
                connect: [
                    { id: continents.katman.id },
                    { id: continents.alatman.id },
                    { id: continents.maltman.id }
                ]
            }
        }),
        southern_trade_pact: await db.createTreaty({
            id: "treaty-southern-trade-pact-alabastria",
            name: "Southern Trade Pact",
            //signedDate: { connect: { id: dates.southern_trade_pact_signed_date.id } },
            signedDate: "750",
            terms: "Trade agreement between Katman, and Skratonia to facilitate trade of agricultural goods and manufactured items in exchange for raw materials and swamp resources.",
            continentsInvolved: {
                connect: [
                    { id: continents.katman.id },
                    { id: continents.skratonia.id }
                ]
            }
        }),
        volcanic_forge_accord: await db.createTreaty({
            id: "treaty-volcanic-forge-accord-alabastria",
            name: "Volcanic Forge Accord",
            //signedDate: { connect: { id: dates.volcanic_forge_accord_signed_date.id } },
            signedDate: "620",
            terms: "Agreement between Alatman and Skratonia to supply advanced magical components in exchange for agricultural goods and trade access.",
            continentsInvolved: {
                connect: [
                    { id: continents.alatman.id },
                    { id: continents.skratonia.id }
                ]
            }
        }),
        northern_mining_accord: await db.createTreaty({
            id: "treaty-northern-mining-accord-alabastria",
            name: "Northern Mining Accord",
            //signedDate: { connect: { id: dates.northern_mining_accord_signed_date.id } },
            signedDate: "590",
            terms: "Mining rights agreement between Maltman and Bulsania for rare metals and gems in exchange for advanced mining equipment and techniques.",
            continentsInvolved: {
                connect: [
                    { id: continents.maltman.id },
                    { id: continents.bulsania.id }
                ]
            }
        }),
        raw_trade_pact: await db.createTreaty({
            id: "treaty-raw-trade-pact-alabastria",
            name: "Raw Trade Pact",
            //signedDate: { connect: { id: dates.raw_trade_pact_signed_date.id } },
            signedDate: "730",
            terms: "Trade agreement between Maltman, and Skratonia to facilitate trade for agricultural goods and manufactured items in exchange for raw materials and mining expertise.",
            continentsInvolved: {
                connect: [
                    { id: continents.maltman.id },
                    { id: continents.skratonia.id }
                ]
            }
        }),
        kantra_non_aggression_pact: await db.createTreaty({
            id: "treaty-kantra-non-aggression-pact-alabastria",
            name: "Kantra Non-Aggression Pact",
            //signedDate: { connect: { id: dates.kantra_non_aggression_pact_signed_date.id } },
            signedDate: "780",
            terms: "Mutual non-aggression agreement between all continents to avoid direct conflict over Kantra and focus on defense against its threats.",
            continentsInvolved: {
                connect: [
                    { id: continents.katman.id },
                    { id: continents.alatman.id },
                    { id: continents.maltman.id },
                    { id: continents.skratonia.id },
                    { id: continents.bulsania.id }
                ]
            }
        })
    }
}