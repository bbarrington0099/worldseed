import { Prisma } from "@prismagen/client";
import * as db from "@lib/db-seed";
import { Seasons } from "./index";

type MonthPayload = Prisma.MonthGetPayload<{}>;
export interface Months {
    dawnrise: MonthPayload;
    scripture: MonthPayload;
    moonseed: MonthPayload;
    highsun: MonthPayload;
    warcall: MonthPayload;
    goldturn: MonthPayload;
    shieldmeet: MonthPayload;
    veilfall: MonthPayload;
    harvestgrave: MonthPayload;
    lastrite: MonthPayload;
    ironrule: MonthPayload;
    nightchance: MonthPayload;
}

interface MonthsParams {
    seasons: Seasons;
}
export async function seedMonths(params: MonthsParams): Promise<Months> {
    const { seasons } = params;
    return {
        dawnrise: await db.createMonth({
            id: "month-dawnrise",
            name: "Dawnrise",
            description: "The first month of the year, symbolizing new beginnings and the awakening of life, often marked by planting celebrations, weddings, and new ventures.",
            daysInMonth: 30,
            seasonId: seasons.bloom.id,
        }),
        scripture: await db.createMonth({
            id: "month-scripture",
            name: "Scripture",
            description: "A month devoted to knowledge, record-keeping, and prophecy, when scholars, priests, and mages chronicle history and seek insight.",
            daysInMonth: 30,
            seasonId: seasons.bloom.id,
        }),
        moonseed: await db.createMonth({
            id: "month-moonseed",
            name: "Moonseed",
            description: "A month of cycles and subtle influence, associated with travel, secret rites, and the guiding light of the moon.",
            daysInMonth: 30,
            seasonId: seasons.bloom.id,
        }),
        highsun: await db.createMonth({
            id: "month-highsun",
            name: "Highsun",
            description: "A month of intense heat and elemental power, when storms rage, seas churn, and fire burns brightest.",
            daysInMonth: 30,
            seasonId: seasons.flare.id,
        }),
        warcall: await db.createMonth({
            id: "month-warcall",
            name: "Warcall",
            description: "The traditional season of campaigns and conflict, when armies march, honor is tested, and battle is joined.",
            daysInMonth: 30,
            seasonId: seasons.flare.id,
        }),
        goldturn: await db.createMonth({
            id: "month-goldturn",
            name: "Goldturn",
            description: "A prosperous month of trade, travel, and risk, associated with luck, revelry, and the turning of fortunes.",
            daysInMonth: 30,
            seasonId: seasons.flare.id,
        }),
        shieldmeet: await db.createMonth({
            id: "month-shieldmeet",
            name: "Shieldmeet",
            description: "A month emphasizing vigilance and duty, when defenses are strengthened and oaths of protection are renewed.",
            daysInMonth: 30,
            seasonId: seasons.wither.id,
        }),
        veilfall: await db.createMonth({
            id: "month-veilfall",
            name: "Veilfall",
            description: "A shadowed month of secrets and deception, when espionage thrives and unseen conflicts unfold.",
            daysInMonth: 30,
            seasonId: seasons.wither.id,
        }),
        harvestgrave: await db.createMonth({
            id: "month-harvestgrave",
            name: "Harvestgrave",
            description: "A somber month of final harvests and remembrance, honoring sacrifice, endurance, and the inevitability of loss.",
            daysInMonth: 30,
            seasonId: seasons.wither.id,
        }),
        lastrite: await db.createMonth({
            id: "month-lastrite",
            name: "Lastrite",
            description: "A month of funerary rites and judgment, when the dead are honored and the balance between life and death is observed.",
            daysInMonth: 30,
            seasonId: seasons.hush.id,
        }),
        ironrule: await db.createMonth({
            id: "month-ironrule",
            name: "Ironrule",
            description: "A harsh month of authority and control, marked by strict laws, enforced order, and the tightening grip of power.",
            daysInMonth: 30,
            seasonId: seasons.hush.id,
        }),
        nightchance: await db.createMonth({
            id: "month-nightchance",
            name: "Nightchance",
            description: "The final month of the year, steeped in superstition and uncertainty, when misfortune, madness, and fate hold sway before renewal returns.",
            daysInMonth: 30,
            seasonId: seasons.hush.id,
        }),
    };
}