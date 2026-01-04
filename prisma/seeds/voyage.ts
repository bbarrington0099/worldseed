import { Prisma } from "@prismagen/client";
import * as db from "@lib/db-seed";
import { Continents } from "./index";

type VoyagePayload = Prisma.VoyageGetPayload<{}>;
export interface Voyages {
    kuriguer_katman: VoyagePayload;
    kuriguer_maltman: VoyagePayload;
    kuriguer_bulsania: VoyagePayload;
    kuriguer_skratonia: VoyagePayload;
    kuriguer_kantra: VoyagePayload;
    katman_skratonia: VoyagePayload;
    katman_maltman: VoyagePayload;
    katman_alatman: VoyagePayload;
    alatman_bulsania: VoyagePayload;
    alatman_maltman: VoyagePayload;
    maltman_bulsania: VoyagePayload;
    skratonia_kantra: VoyagePayload;
    bulsania_kantra: VoyagePayload;
}

interface SeedVoyagesParams {
    continents: Continents;
}
export async function seedVoyages(params: SeedVoyagesParams): Promise<Voyages> {
    const { continents } = params;
    return {
        kuriguer_katman: await db.createVoyage({
            id: "voyage-kuriguer-katman-alabastria",
            name: "Between Kuriguer and Katman",
            fromContinent: { connect: { id: continents.kuriguer.id } },
            toContinent: { connect: { id: continents.katman.id } },
            distanceMi: 1200,
            travelDays: 25,
            travelHours: 12
        }),
        kuriguer_maltman: await db.createVoyage({
            id: "voyage-kuriguer-maltman-alabastria",
            name: "Between Kuriguer and Maltman",
            fromContinent: { connect: { id: continents.kuriguer.id } },
            toContinent: { connect: { id: continents.maltman.id } },
            distanceMi: 800,
            travelDays: 16,
            travelHours: 16
        }),
        kuriguer_bulsania: await db.createVoyage({
            id: "voyage-kuriguer-bulsania-alabastria",
            name: "Between Kuriguer and Bulsania",
            fromContinent: { connect: { id: continents.kuriguer.id } },
            toContinent: { connect: { id: continents.bulsania.id } },
            distanceMi: 1500,
            travelDays: 31,
            travelHours: 6
        }),
        kuriguer_skratonia: await db.createVoyage({
            id: "voyage-kuriguer-skratonia-alabastria",
            name: "Between Kuriguer and Skratonia",
            fromContinent: { connect: { id: continents.kuriguer.id } },
            toContinent: { connect: { id: continents.skratonia.id } },
            distanceMi: 2100,
            travelDays: 43,
            travelHours: 18
        }),
        kuriguer_kantra: await db.createVoyage({
            id: "voyage-kuriguer-kantra-alabastria",
            name: "Between Kuriguer and Kantra",
            fromContinent: { connect: { id: continents.kuriguer.id } },
            toContinent: { connect: { id: continents.kantra.id } },
            distanceMi: 2800,
            travelDays: 58,
            travelHours: 8
        }),
        katman_skratonia: await db.createVoyage({
            id: "voyage-katman-skratonia-alabastria",
            name: "Between Katman and Skratonia",
            fromContinent: { connect: { id: continents.katman.id } },
            toContinent: { connect: { id: continents.skratonia.id } },
            distanceMi: 1400,
            travelDays: 29,
            travelHours: 4
        }),
        katman_maltman: await db.createVoyage({
            id: "voyage-katman-maltman-alabastria",
            name: "Between Katman and Maltman",
            fromContinent: { connect: { id: continents.katman.id } },
            toContinent: { connect: { id: continents.maltman.id } },
            distanceMi: 700,
            travelDays: 14,
            travelHours: 14
        }),
        katman_alatman: await db.createVoyage({
            id: "voyage-katman-alatman-alabastria",
            name: "Between Katman and Alatman",
            fromContinent: { connect: { id: continents.katman.id } },
            toContinent: { connect: { id: continents.alatman.id } },
            distanceMi: 800,
            travelDays: 16,
            travelHours: 16
        }),
        alatman_bulsania: await db.createVoyage({
            id: "voyage-alatman-bulsania-alabastria",
            name: "Between Alatman and Bulsania",
            fromContinent: { connect: { id: continents.alatman.id } },
            toContinent: { connect: { id: continents.bulsania.id } },
            distanceMi: 700,
            travelDays: 14,
            travelHours: 14
        }),
        alatman_maltman: await db.createVoyage({
            id: "voyage-alatman-maltman-alabastria",
            name: "Between Alatman and Maltman",
            fromContinent: { connect: { id: continents.alatman.id } },
            toContinent: { connect: { id: continents.maltman.id } },
            distanceMi: 700,
            travelDays: 14,
            travelHours: 14
        }),
        maltman_bulsania: await db.createVoyage({
            id: "voyage-maltman-bulsania-alabastria",
            name: "Between Maltman and Bulsania",
            fromContinent: { connect: { id: continents.maltman.id } },
            toContinent: { connect: { id: continents.bulsania.id } },
            distanceMi: 900,
            travelDays: 18,
            travelHours: 18
        }),
        skratonia_kantra: await db.createVoyage({
            id: "voyage-skratonia-kantra-alabastria",
            name: "Between Skratonia and Kantra",
            fromContinent: { connect: { id: continents.skratonia.id } },
            toContinent: { connect: { id: continents.kantra.id } },
            distanceMi: 2300,
            travelDays: 47,
            travelHours: 22
        }),
        bulsania_kantra: await db.createVoyage({
            id: "voyage-bulsania-kantra-alabastria",
            name: "Between Bulsania and Kantra",
            fromContinent: { connect: { id: continents.bulsania.id } },
            toContinent: { connect: { id: continents.kantra.id } },
            distanceMi: 1500,
            travelDays: 31,
            travelHours: 6
        })
    }
}