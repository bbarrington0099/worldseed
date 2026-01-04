import * as db from "@lib/db-seed";
import { Continents, Towns } from "../index";

interface ContinentsCapitalsParams {
    continents: Continents;
    towns: Towns;
}
export async function setContinentCapitals(params: ContinentsCapitalsParams) {
    const { continents, towns } = params;
    try {
        await db.setContinentCapital(continents.kuriguer.id, towns.silverleaf_harbor.id);
        await db.setContinentCapital(continents.katman.id, towns.swamp_crown.id);
        await db.setContinentCapital(continents.alatman.id, towns.volcanic_throne.id);
        await db.setContinentCapital(continents.maltman.id, towns.deepforge_citadel.id);
        await db.setContinentCapital(continents.skratonia.id, towns.golden_fields.id);
        await db.setContinentCapital(continents.bulsania.id, towns.frosthold.id);
    } catch (error) {
        console.error(`Error setting capitals for continents:`, error);
        process.exit(1);
    }
}