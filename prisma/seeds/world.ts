import { Prisma, Month } from "@prismagen/client";
import * as db from "@lib/db-seed";
//import { Dates } from "./index";

type WorldPayload = Prisma.WorldGetPayload<{}>;
export interface Worlds {
    worldSeed: WorldPayload;
    alabastria: WorldPayload;
}

/* interface WorldsParams {
    dates: Dates;
} */
export async function seedWorlds(/* params: WorldsParams */): Promise<Worlds> {
    //const { dates } = params;
    if (!process.env.WORLD_SEED_ID) {
        throw new Error("Missing WORLD_SEED_ID in environment variables.");
    }
    return {
        worldSeed: await db.createWorld({
            id: process.env.WORLD_SEED_ID,
            //slug: "world-seed",
            name: "World Seed",
            description: "The World Seed, a collection of core information available to all worlds born from it.",
        }),
        alabastria: await db.createWorld({
            id: "alabastria",
            //slug: "alabastria",
            name: "Alabastria",
            description: "This world of wonders was once a beastly plane simply consisting of wild creatures within its forests, mountains, deserts, and plains. It is unknown in record what was responsible or how it happened, but groups of creatures and peoples from all different manner of realms and worlds of existence began reappearing in this new land and its various continents. Through much loss and areal infighting, not understanding or knowing what had happened to their homes, as the quickest to adapt and recover rose to establish the beginnings of control, now many starting new generations, permanent homes, their own ways of life, making Alabastria what it is today. <hr> It has now been 800 cycles since The Bringing, most races are multiple generations deep, empires have risen and fallen, villages have become towns and towns have become capital cities, politics from whatever land their ancestors hailed from are long forgotten for this current worlds kingdoms.",
            circumference: 15000,
            diameter: 4775,
            currentDate: "800 Highsun 15",
            //currentDateId: dates.alabastriaCurrentDate.id,
            surfaceAreaSq: BigInt(716100000),
            yearCalled: "cycles",
        }),
    }
}
