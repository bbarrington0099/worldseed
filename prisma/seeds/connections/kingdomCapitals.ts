import * as db from "@lib/db-seed";
import { Kingdoms, Continents } from "../index";

interface KingdomsCapitalsParams {
    kingdoms: Kingdoms;
    continents: Continents;
}
export async function setKingdomsCapitals(params: KingdomsCapitalsParams) {
    const { kingdoms, continents } = params;
    try {
        await db.setKingdomCapital(kingdoms.kamalatman.id, continents.katman.id);
    } catch (error) {
        console.error(`Error setting capital for kingdom:`, error);
        process.exit(1);
    }
}