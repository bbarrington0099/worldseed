import { Prisma, Month } from "@prismagen/client";
import * as db from "@lib/db-seed";

type WorldPayload = Prisma.WorldGetPayload<{}>;
export interface Worlds {
    alabastria: WorldPayload;
}

export async function seedWorlds(): Promise<Worlds> {
    return {
        alabastria: await db.createWorld({
            id: "alabastria",
            slug: "alabastria",
            name: "Alabastria",
            description: "This world of wonders was once a beastly plane simply consisting of wild creatures within its forests, mountains, deserts, and plains. It is unknown in record what was responsible or how it happened, but groups of creatures and peoples from all different manner of realms and worlds of existence began reappearing in this new land and its various continents. Through much loss and areal infighting, not understanding or knowing what had happened to their homes, as the quickest to adapt and recover rose to establish the beginnings of control, now many starting new generations, permanent homes, their own ways of life, making Alabastria what it is today. <hr> It has now been 800 cycles since The Bringing, most races are multiple generations deep, empires have risen and fallen, villages have become towns and towns have become capital cities, politics from whatever land their ancestors hailed from are long forgotten for this current worlds kingdoms.",
            circumferenceMi: 15000,
            diameterMi: 4775,
            currentCycle: 800,
            currentMonth: Month.JUNE,
            currentDay: 15,
            surfaceAreaSqMi: BigInt(716100000)
        }),
    }
}
