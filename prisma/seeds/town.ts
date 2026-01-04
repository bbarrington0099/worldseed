import { Prisma, TownType } from "@prismagen/client";
import * as db from "@lib/db-seed";
import { Continents } from "./index";

type TownPayload = Prisma.TownGetPayload<{}>;
export interface Towns {
    silverleaf_harbor: TownPayload;
    swamp_crown: TownPayload;
    volcanic_throne: TownPayload;
    deepforge_citadel: TownPayload;
    golden_fields: TownPayload;
    frosthold: TownPayload;
    suetonon: TownPayload;
    tuinton: TownPayload;
}

interface SeedTownsParams {
    continents: Continents;
}
export async function seedTowns(params: SeedTownsParams): Promise<Towns> {
    const { continents } = params;
    return {
        silverleaf_harbor: await db.createTown({
            id: "silverleaf-harbor-kuriguer-alabastria",
            slug: "silverleaf-harbor-kuriguer-alabastria",
            name: "Silverleaf Harbor",
            type: TownType.CAPITAL,
        location: "To the south-west of the continent, Silverleaf Harbor is a small city built into the cliffs of Mount Rian, where natural architecture blends seamlessly with arcane engineering.",
        continent: { connect: { id: continents.kuriguer.id } },
        description: "A beautiful elven city built into the cliffs and trees, where natural architecture blends seamlessly with arcane engineering.",
        }),
        swamp_crown: await db.createTown({
            id: "swamp-crown-katman-kamalatman-alabastria",
            slug: "swamp-crown-katman-kamalatman-alabastria",
            name: "Swamp Crown",
            type: TownType.CAPITAL,
            continent: { connect: { id: continents.katman.id } },
            location: "To the north-west of the continent, the swamp crown sits on a small island in the middle of Incense Swamp, surrounded by the vast swamp and the forest that borders it.",
            description: "A unique city built on stilts and elevated platforms above the swamps, with the royal palace constructed on the highest point, connected by rope bridges and wooden walkways.",
        }),
        volcanic_throne: await db.createTown({
            id: "volcanic-throne-alatman-kamalatman-alabastria",
            slug: "volcanic-throne-alatman-kamalatman-alabastria",
            name: "Volcanic Throne",
            type: TownType.CAPITAL,
            continent: { connect: { id: continents.alatman.id } },
            location: "To the east in the northern section of the continent, the volcanic throne sits atop a volcanic plateau, overlooking the grey forests and swamps",
            description: "A fortress city built around the active volcano, with forges and workshops carved into the mountainside, where the royal palace sits atop the volcanic peak.",
        }),
        deepforge_citadel: await db.createTown({
            id: "deepforge-citadel-maltman-kamalatman-alabastria",
            slug: "deepforge-citadel-maltman-kamalatman-alabastria",
            name: "Deepforge Citadel",
            type: TownType.CAPITAL,
            continent: { connect: { id: continents.maltman.id } },
            location: "Protruding from Mount Gorgon, this great stronghold overlooks the great lake that lies in the center of the continent, feeding the land with it's fresh water and fish.",
            description: "A massive dwarven stronghold carved directly into the mountain, with multiple levels descending deep underground, where the royal halls are surrounded by the most productive mines.",
        }),
        golden_fields: await db.createTown({
            id: "golden-fields-skratonia-alabastria",
            slug: "golden-fields-skratonia-alabastria",
            name: "Golden Fields",
            type: TownType.CAPITAL,
            location: "Golden Fields is located to the southern edge of the central plains of the continent, at the crossroads of all major trade routes.",
            continent: { connect: { id: continents.skratonia.id } },
            description: "A sprawling metropolis built around a massive central marketplace, where the Council Halls rise above the bustling trade districts and agricultural warehouses.",
        }),
        frosthold: await db.createTown({
            id: "frosthold-bulsania-alabastria",
            slug: "frosthold-bulsania-alabastria",
            name: "Frosthold",
            type: TownType.CAPITAL,
            location: "In the west most part of the continent, Frosthold sits lodged against the outer side of the Noxious Mountain range, restricting access to and from the glacial side of the contient",
            continent: { connect: { id: continents.bulsania.id } },
            description: "A massive fortress city carved from ice and stone, with towering walls that blend into the mountain itself, where the royal halls are warmed by geothermal springs. The city relies heavily on mercenary companies like the Frostmarch Company to protect food caravans from raider tribes such as the Icemaw.",
        }),
        suetonon: await db.createTown({
            id: "suetonon-skratonia-alabastria",
            slug: "suetonon-skratonia-alabastria",
            name: "Suetonon",
            type: TownType.CITY,
            continent: { connect: { id: continents.skratonia.id } },
            location: "Suetonon is located in the far northern part of the continent, east of the wasted mountains, sitting on a river that flows into the ocean.",
            description: "A sprawling city of stone and steel, built on the ruins of an ancient empire. The city is a hub of trade and commerce, and is home to the Suetonon University, one of the most prestigious institutions of learning in the world.",
        }),
        tuinton: await db.createTown({
            id: "tuinton-skratonia-alabastria",
            slug: "tuinton-skratonia-alabastria",
            name: "Tuinton",
            type: TownType.HAMLET,
            location: "Tuinton is on the western edge of the Ashen City, just north of the mountain range that borders the road from Suetonon to the south.",
            continent: { connect: { id: continents.skratonia.id } },
            description: "A small, weather-worn farming hamlet nestled on the ashen fringe between Suetonon's outer roads and the looming influence of the Ashen City. Low stone cottages and timber barns cluster around a muddy crossroads, their roofs perpetually dusted with gray ash that drifts in from the surrounding wastes. The people are practical and insular, bound by shared labor and old obligations to distant nobles, and quick to grow silent around strangers.",
        }),
    }
}