import { Prisma } from "@prismagen/client";
import * as db from "@lib/db-seed";

type CreatureSizePayload = Prisma.CreatureSizeGetPayload<{}>;
export interface CreatureSizes {
    tiny: CreatureSizePayload;
    small: CreatureSizePayload;
    medium: CreatureSizePayload;
    large: CreatureSizePayload;
    huge: CreatureSizePayload;
    gargantuan: CreatureSizePayload;
}

export async function seedCreatureSizes(): Promise<CreatureSizes> {
    return {
        tiny: await db.createCreatureSize({
            id: "creature-size-tiny",
            name: "Tiny",
            occupiedSpace: "2.5 ft. x 2.5 ft.",
            heightRange: "Under 2.5 ft.",
            weightRange: "Under 20 lbs.",
            description: "Tiny creatures are very small, often fitting in the palm of a hand. They occupy minimal space and can easily hide or maneuver in tight areas."
        }),
        small: await db.createCreatureSize({
            id: "creature-size-small",
            name: "Small",
            occupiedSpace: "5 ft. x 5 ft.",
            heightRange: "2.5 ft. to 4 ft.",
            weightRange: "20 lbs. to 40 lbs.",
            description: "Small creatures are larger than Tiny ones but still compact. They can navigate through spaces that larger creatures cannot and often have agility advantages."
        }),
        medium: await db.createCreatureSize({
            id: "creature-size-medium",
            name: "Medium",
            occupiedSpace: "5 ft. x 5 ft.",
            heightRange: "4 ft. to 8 ft.",
            weightRange: "40 lbs. to 400 lbs.",
            description: "Medium creatures are the standard size for most humanoids. They occupy a moderate amount of space and have balanced physical capabilities."
        }),
        large: await db.createCreatureSize({
            id: "creature-size-large",
            name: "Large",
            occupiedSpace: "10 ft. x 10 ft.",
            heightRange: "8 ft. to 16 ft.",
            weightRange: "400 lbs. to 2,000 lbs.",
            description: "Large creatures are imposing and occupy significant space. They often have greater strength and durability but may be less agile."
        }),
        huge: await db.createCreatureSize({
            id: "creature-size-huge",
            name: "Huge",
            occupiedSpace: "15 ft. x 15 ft.",
            heightRange: "16 ft. to 32 ft.",
            weightRange: "2,000 lbs. to 20,000 lbs.",
            description: "Huge creatures are massive beings that dominate their surroundings. They require large areas to move and can often cause environmental damage due to their size."
        }),
        gargantuan: await db.createCreatureSize({
            id: "creature-size-gargantuan",
            name: "Gargantuan",
            occupiedSpace: "20 ft. x 20 ft. or larger",
            heightRange: "Over 32 ft.",
            weightRange: "Over 20,000 lbs.",
            description: "Gargantuan creatures are colossal entities that tower over most others. They occupy vast spaces and their presence can significantly alter the landscape around them."
        })
    }
}