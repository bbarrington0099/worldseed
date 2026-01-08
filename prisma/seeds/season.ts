import { Prisma } from "@prismagen/client";
import * as db from "@lib/db-seed";

type SeasonPayload = Prisma.SeasonGetPayload<{}>;
export interface Seasons {
    bloom: SeasonPayload;
    flare: SeasonPayload;
    wither: SeasonPayload;
    hush: SeasonPayload;
}

export async function seedSeasons(): Promise<Seasons> {
    return {
        bloom:  await db.createSeason({
            id: "season-bloom",
            name: "Bloom",
            description: "The season of growth and renewal, when flora flourishes and life awakens after the hush.",
        }),
        flare:  await db.createSeason({
            id: "season-flare",
            name: "Flare",
            description: "The season of warmth and vitality, characterized by long days, abundant sunlight, and vibrant energy.",
        }),
        wither:  await db.createSeason({
            id: "season-wither",
            name: "Wither",
            description: "The season of decline and preparation, when nature begins to slow down and conserve energy for the upcoming hush.",
        }),
        hush:  await db.createSeason({
            id: "season-hush",
            name: "Hush",
            description: "The season of rest and dormancy, marked by cold temperatures, shorter days, and a quiet stillness in the environment.",
        }),
    }
}