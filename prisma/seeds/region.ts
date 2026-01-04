import { Prisma } from "@prismagen/client";
import * as db from "@lib/db-seed";
import { Continents } from "./index";

type RegionPayload = Prisma.RegionGetPayload<{}>;
export interface Regions {
    central_skratonia: RegionPayload;
    the_ashen_city: RegionPayload;
    otherwordly_wastes: RegionPayload;
    farmlands_of_paradise: RegionPayload;
    blood_badlands: RegionPayload;
}

interface SeedRegionsParams {
    continents: Continents;
}
export async function seedRegions(params: SeedRegionsParams): Promise<Regions> {
    const { continents } = params;
    return {
        central_skratonia: await db.createRegion({
            id: "central-skratonia-alabastria",
            name: "Central Skratonia",
            continent: { connect: { id: continents.skratonia.id } },
            description: "The central region of Skratonia, sitting between 'Otherwordly Wastes' and 'The Farmlands', known for its' rolling plains and scattered settlements with many of the continents trade routes passing through.",
        }),
        the_ashen_city: await db.createRegion({
            id: "the-ashen-city-skratonia-alabastria",
            name: "The Ashen City",
            continent: { connect: { id: continents.skratonia.id } },
            description: "Sitting to the north-east of the continent, The Ashen City is a vast ruin-choked region where a once-great metropolis lies buried under drifting gray ash and shattered stone. Ghostly lights, lingering magic, and restless spirits haunt its collapsed streets, and the air itself feels heavy with memory. Few enter willingly, as the Ashen City is known to change those who stay around for too long.",
        }),
        otherwordly_wastes: await db.createRegion({
            id: "otherwordly-wastes-skratonia-alabastria",
            name: "Otherwordly Wastes",
            continent: { connect: { id: continents.skratonia.id } },
            description: "On the northern coast of the continent, west of the mountains near Suetonon, Otherwordly Wastes is a vast, unforgiving desert where the sun beats down mercilessly, and the air is filled with the scent of death. The wastes are home to many dangerous creatures, and few dare to venture within their boundaries.",
        }),
        farmlands_of_paradise: await db.createRegion({
            id: "farmlands-of-paradise-skratonia-alabastria",
            name: "Farmlands of Paradise",
            continent: { connect: { id: continents.skratonia.id } },
            description: "To the south of Suetonon, Farmlands of Paradise is the region that give Skratonia its' lifeblood, providing the continent with its' food and trade.",
        }),
        blood_badlands: await db.createRegion({
            id: "blood-badlands-skratonia-alabastria",
            name: "Blood Badlands",
            continent: { connect: { id: continents.skratonia.id } },
            description: "Near the farthest west coast of the continent, Blood Badlands is the most dangerous region of the continent, where not only wild beasts roam, but many raiding tribes have made their home in the rugged terrain and rocky cliffs.",
        }),
    }
}