import { Prisma, GovernmentType } from "@prismagen/client";
import * as db from "@lib/db-seed";
import { Worlds, Colors } from "./index";

type KingdomPayload = Prisma.KingdomGetPayload<{}>;
export interface Kingdoms {
    kamalatman: KingdomPayload;
}

interface SeedKingdomsParams {
    worlds: Worlds;
}
export async function seedKingdoms(params: SeedKingdomsParams): Promise<Kingdoms> {
    const { worlds } = params;
    return {
        kamalatman: await db.createKingdom({
            id: "kamalatman-alabastria",
            name: "Kamalatman",
            worldId: worlds.alabastria.id,
            description: "The unified kingdom encompassing the three continents of Alatman, Maltman, and Katman, ruled by a single royal family with regional princes governing each continent.",
            surfaceAreaSqMi: BigInt(2130000),
            primaryColor: Colors.GOLD.toString(),
            secondaryColor: Colors.CRIMSON.toString(),
            flagSymbol: "Triple Crown",
            flagDescription: "Three interlocked crowns representing the unified rule of the three Kamalatman continents.",
            dateFounded: "183",
            governmentType: GovernmentType.MONARCHY,
            politicalStructure: "Each continent within the kingdom posesses its own government that governs that continent under the authority and rule of the current Supreme Ruler, rotating which of the continent elects to the overall throne as Supreme Ruler every half-century.",
            majorPoliticalIssue: "Tensions occasionally arise between the three continental rulers, each vying for greater influence over the kingdom's policies and resources. Regional disputes over taxation and resource allocation are common, as each continent seeks to maximize its own prosperity while maintaining loyalty to the central monarchy.",
            foreignRelations: "Kamalatman maintains a cautious but pragmatic relationship with neighboring continents, focusing on trade and mutual defense. Diplomatic envoys are regularly exchanged to foster goodwill, though underlying tensions exist due to historical conflicts and competition for resources."
        })
    }
};