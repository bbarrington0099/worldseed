import { Prisma } from "@prismagen/client";
import * as db from "@lib/db-seed";
import { Worlds } from "./index";

type HistoricalPeriodPayload = Prisma.HistoricalPeriodGetPayload<{}>;
export interface HistoricalPeriods {
    bringing: HistoricalPeriodPayload;
    formation: HistoricalPeriodPayload;
    expansion: HistoricalPeriodPayload;
    modern: HistoricalPeriodPayload;
}

interface HistoricalPeriodsParams {
    worlds: Worlds;
}
export async function createHistoricalPeriods(params: HistoricalPeriodsParams): Promise<HistoricalPeriods> {
    const { worlds } = params;
    return {
        bringing: await db.createHistoricalPeriod({
            id: "0-100-bringing-first-settlements",
            name: "The Bringing & First Settlements",
            startCycle: 0,
            endCycle: 100,
            description: "The mysterious arrival of races from different realms and the desperate struggle for survival in a new world.",
            significance: "The most pivotal era in Alabastria's history, when countless races from different planes of existence suddenly found themselves in this strange new world. Confusion, desperation, and the will to survive drove the formation of the first settlements.",
            worldId: worlds.alabastria.id,
            sortOrder: 0,
        }),
        formation: await db.createHistoricalPeriod({
            id: "101-300-formation",
            name: "The Formation & Early Wars",
            startCycle: 101,
            endCycle: 300,
            description: "The rise of the first governments and the conflicts that would shape continental politics for generations.",
            significance: "As populations stabilized and resources became more secure, the scattered settlements began to organize into larger political entities. This period saw the birth of the major governments that still exist today, as well as the first large-scale wars between them.",
            worldId: worlds.alabastria.id,
            sortOrder: 1,
        }),
        expansion: await db.createHistoricalPeriod({
            id: "301-600-expansion",
            name: "The Age of Expansion & The Great Alliances",
            startCycle: 301,
            endCycle: 600,
            description: "A golden age of diplomacy, trade, and magical discovery, marked by unprecedented cooperation between kingdoms.",
            significance: "This era marked Alabastria's transition from survival-focused kingdoms to thriving civilizations. Trade networks flourished, magical phenomena attracted scholars and adventurers, and the first truly international conflicts required unprecedented cooperation.",
            worldId: worlds.alabastria.id,
            sortOrder: 2,
        }),
        modern: await db.createHistoricalPeriod({
            id: "601-present-modern",
            name: "The Modern Era",
            startCycle: 601,
            description: "The current age of established civilizations, complex politics, and the ongoing mysteries that define contemporary Alabastria.",
            significance: "The current era represents the culmination of 800 cycles of growth, conflict, and adaptation. Most races are now multiple generations deep in Alabastrian culture, having developed distinct identities separate from their original homelands. Cities have grown into major population centers, trade networks span the known world, and complex political relationships define international affairs.",
            worldId: worlds.alabastria.id,
            sortOrder: 3,
        }),
    }
}