import { Prisma, TradeRouteFrequency, TradeRouteType } from "@prismagen/client";
import * as db from "@lib/db-seed";
import { Continents, Towns, Voyages } from "./index";

type TradeRoutePayload = Prisma.TradeRouteGetPayload<{}>;
export interface TradeRoutes {
    magical_coast: TradeRoutePayload;
    northern_air: TradeRoutePayload;
    forest_path: TradeRoutePayload;
    southern_swamp: TradeRoutePayload;
    swamp_passage: TradeRoutePayload;
    central_plains: TradeRoutePayload;
    eastern_sea: TradeRoutePayload;
    volcanic_supply: TradeRoutePayload;
    great_mining_road: TradeRoutePayload;
    northern_sea: TradeRoutePayload;
    underground_passage: TradeRoutePayload;
    great_central_highway: TradeRoutePayload;
    kantra_watch: TradeRoutePayload;
}

interface SeedTradeRoutesParams {
    voyages: Voyages;
    continents: Continents;
    towns: Towns;
}
export async function seedTradeRoutes(params: SeedTradeRoutesParams): Promise<TradeRoutes> {
    const { voyages, continents, towns } = params;
    return {
        magical_coast: await db.createTradeRoute({
            id: "trade-route-magical-coast-alabastria",
            name: "Magical Coast Route",
            description: "Primary maritime trade route across the seas connecting Kuriguer's coastal towns to Skratonia's major cities, carrying magical components and research materials.",
            goods: ["Magical components", "Research materials", "Elven crafts", "Agricultural products"],
            routeType: TradeRouteType.MARITIME,
            frequency: TradeRouteFrequency.WEEKLY,
            continentStops: {
                connect: [
                    { id: continents.kuriguer.id },
                    { id: continents.skratonia.id }
                ]
            },
            voyages: {
                connect: [
                    { id: voyages.kuriguer_skratonia.id }
                ]
            }
        }),
        northern_air: await db.createTradeRoute({
            id: "trade-route-northern-air-alabastria",
            name: "Northern Air Route",
            description: "Aerial trade route using flying ships from Kuriguer to cross the northern seas and connect with Bulsania, avoiding the dangerous Kantra region.",
            goods: ["Frozen goods", "Rare materials", "Magical artifacts", "Elven weapons"],
            routeType: TradeRouteType.AERIAL,
            frequency: TradeRouteFrequency.MONTHLY,
            continentStops: {
                connect: [
                    { id: continents.kuriguer.id },
                    { id: continents.bulsania.id }
                ]
            },
            voyages: {
                connect: [
                    { id: voyages.kuriguer_bulsania.id }
                ]
            }
        }),
        forest_path: await db.createTradeRoute({
            id: "trade-route-forest-path-alabastria",
            name: "Forest Path",
            description: "Dangerous overland route through Kuriguer's interior forests to reach coastal ports, where goods are then transported by sea to the Kamalatman regions. Used by brave traders and the Huntbound Order.",
            goods: ["Magical research", "Rare herbs", "Mining equipment", "Swamp goods"],
            routeType: TradeRouteType.OVERLAND_TO_MARITIME,
            frequency: TradeRouteFrequency.IRREGULAR,
            continentStops: {
                connect: [
                    { id: continents.kuriguer.id },
                    { id: continents.maltman.id }
                ]
            },
            voyages: {
                connect: [
                    { id: voyages.kuriguer_maltman.id }
                ]
            }
        }),
        southern_swamp: await db.createTradeRoute({
            id: "trade-route-southern-swamp-alabastria",
            name: "Southern Swamp Route",
            description: "Dangerous overland route connecting to the coastal ports of Katman, where goods are then transported by sea to Skratonia's agricultural regions, carrying swamp goods and raw materials.",
            goods: ["Swamp goods", "Raw materials", "Agricultural products", "Military equipment"],
            routeType: TradeRouteType.OVERLAND_TO_MARITIME,
            frequency: TradeRouteFrequency.WEEKLY,
            continentStops: {
                connect: [
                    { id: continents.katman.id },
                    { id: continents.skratonia.id }
                ]
            },
            voyages: {
                connect: [
                    { id: voyages.katman_skratonia.id }
                ]
            }
        }),
        swamp_passage: await db.createTradeRoute({
            id: "trade-route-swamp-passage-alabastria",
            name: "Swamp Passage",
            description: "Dangerous overland route through the swamps connecting to the coastal ports of Katman, where goods are then transported by sea to Alatman, used for internal Kamalatman trade.",
            goods: ["Raw materials", "Food supplies", "Military equipment", "Swamp resources"],
            routeType: TradeRouteType.OVERLAND_TO_MARITIME,
            frequency: TradeRouteFrequency.WEEKLY,
            continentStops: {
                connect: [
                    { id: continents.katman.id },
                    { id: continents.alatman.id }
                ]
            },
            voyages: {
                connect: [
                    { id: voyages.katman_alatman.id }
                ]
            }
        }),
        central_plains: await db.createTradeRoute({
            id: "trade-route-central-plains-alabastria",
            name: "Central Plains Route",
            description: "Major trade route connecting to the coastal ports of Katman often intercepting goods from Maltman, where goods are then transported by sea to Skratonia's agricultural regions, carrying raw materials and manufactured goods.",
            goods: ["Raw materials", "Manufactured goods", "Agricultural products", "Military equipment"],
            routeType: TradeRouteType.OVERLAND_TO_MARITIME,
            frequency: TradeRouteFrequency.BI_WEEKLY,
            continentStops: {
                connect: [
                    { id: continents.katman.id },
                    { id: continents.maltman.id },
                    { id: continents.skratonia.id }
                ]
            },
            voyages: {
                connect: [
                    { id: voyages.katman_maltman.id },
                    { id: voyages.katman_skratonia.id }
                ]
            }
        }),
        eastern_sea: await db.createTradeRoute({
            id: "trade-route-eastern-sea-alabastria",
            name: "Eastern Sea Route",
            description: "Maritime route sailing out of Katman after often intercepting goods from Alatman, where goods are then transported over the eastern seas to Skratonia, carrying high-value swamp goods.",
            goods: ["Raw materials", "Swamp goods", "Agricultural products", "Military equipment", "Magical components", "Rare gems", "Volcanic weapons"],
            routeType: TradeRouteType.MARITIME,
            frequency: TradeRouteFrequency.WEEKLY,
            continentStops: {
                connect: [
                    { id: continents.katman.id },
                    { id: continents.alatman.id },
                    { id: continents.skratonia.id }
                ]
            },
            voyages: {
                connect: [
                    { id: voyages.katman_skratonia.id },
                    { id: voyages.katman_alatman.id }
                ]
            }
        }),
        volcanic_supply: await db.createTradeRoute({
            id: "trade-route-volcanic-supply-alabastria",
            name: "Volcanic Supply Route",
            description: "Primary maritime trade route connecting Alatman's volcanic forges to the other Kamalatman regions and beyond via sea travel.",
            goods: ["Volcanic glass", "Magical metals", "Constructed items", "Rare minerals"],
            routeType: TradeRouteType.MARITIME,
            frequency: TradeRouteFrequency.DAILY,
            continentStops: {
                connect: [
                    { id: continents.alatman.id },
                    { id: continents.katman.id },
                    { id: continents.maltman.id }
                ]
            },
            voyages: {
                connect: [
                    { id: voyages.alatman_maltman.id },
                    { id: voyages.katman_alatman.id }
                ]
            }
        }),
        great_mining_road: await db.createTradeRoute({
            id: "trade-route-great-mining-road-alabastria",
            name: "Great Mining Road",
            description: "Primary overland trade route connecting Maltman's mining villages to coastal ports, where goods are then transported by sea to other Kamalatman regions and major trade centers.",
            goods: ["Raw ores", "Refined metals", "Gems", "Mining equipment", "Dwarven crafts"],
            routeType: TradeRouteType.OVERLAND_TO_MARITIME,
            frequency: TradeRouteFrequency.DAILY,
            continentStops: {
                connect: [
                    { id: continents.maltman.id },
                    { id: continents.katman.id },
                    { id: continents.alatman.id }
                ]
            },
            voyages: {
                connect: [
                    { id: voyages.katman_maltman.id },
                    { id: voyages.katman_alatman.id }
                ]
            }
        }),
        northern_sea: await db.createTradeRoute({
            id: "trade-route-northern-sea-alabastria",
            name: "Northern Sea Route",
            description: "Maritime route connecting to Bulsania from Maltman, carrying high-value mining goods.",
            goods: ["Rare metals", "Magical gems", "Dwarven weapons", "Frozen goods"],
            routeType: TradeRouteType.MARITIME,
            frequency: TradeRouteFrequency.WEEKLY,
            continentStops: {
                connect: [
                    { id: continents.maltman.id },
                    { id: continents.bulsania.id }
                ]
            },
            voyages: {
                connect: [
                    { id: voyages.maltman_bulsania.id }
                ]
            }
        }),
        underground_passage: await db.createTradeRoute({
            id: "trade-route-underground-passage-alabastria",
            name: "Underground Passage",
            description: "Secret underground trade route connecting to Alatman to Maltman, where goods are then transported by sea to Kuriguer, used for magical research materials.",
            goods: ["Magical metals", "Ancient artifacts", "Research materials", "Rare components"],
            routeType: TradeRouteType.UNDERGROUND_TO_MARITIME,
            frequency: TradeRouteFrequency.MONTHLY,
            continentStops: {
                connect: [
                    { id: continents.alatman.id },
                    { id: continents.maltman.id },
                    { id: continents.kuriguer.id }
                ]
            },
            voyages: {
                connect: [
                    { id: voyages.kuriguer_maltman.id }
                ]
            }
        }),
        great_central_highway: await db.createTradeRoute({
            id: "trade-route-great-central-highway-alabastria",
            name: "Great Central Highway",
            description: "Primary overland trade route connecting all major Skratonian cities and ports.",
            goods: ["Agricultural products", "Manufactured goods", "Trade goods", "Food supplies"],
            routeType: TradeRouteType.OVERLAND,
            frequency: TradeRouteFrequency.DAILY,
            continentStops: {
                connect: [
                    { id: continents.skratonia.id }
                ]
            },
            townStops: {
                connect: [
                    { id: towns.suetonon.id },
                    { id: towns.silverleaf_harbor.id }
                ]
            }
        }),
        kantra_watch: await db.createTradeRoute({
            id: "trade-route-kantra-watch-alabastria",
            name: "Kantra Watch Route",
            description: "Military patrol route along the north-eastern borders of Bulsania and south-western borders of Skratonia, monitoring for threats from Kantra and unknown dangers; delivering supplies to naval forces stationed outside of Kantra.",
            goods: ["Military equipment", "Supplies", "Reconnaissance", "Defense materials"],
            routeType: TradeRouteType.OVERLAND,
            frequency: TradeRouteFrequency.MONTHLY,
            continentStops: {
                connect: [
                    { id: continents.bulsania.id },
                    { id: continents.skratonia.id }
                ]
            },
            voyages: {
                connect: [
                    { id: voyages.bulsania_kantra.id },
                    { id: voyages.skratonia_kantra.id }
                ]
            }
        })
    }
}