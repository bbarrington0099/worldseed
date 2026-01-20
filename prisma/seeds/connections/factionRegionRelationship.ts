import { Prisma } from '@prismagen/client';
import * as db from '@lib/db-seed';
import { Factions, Regions } from '../index';

type FactionRegionRelationshipPayload = Prisma.FactionRegionRelationshipGetPayload<{}>;
export interface FactionRegionRelationships {
    huntbound_order_central_skratonia: FactionRegionRelationshipPayload;
    huntbound_order_ashen_city: FactionRegionRelationshipPayload;
    huntbound_order_otherworldy_wastes: FactionRegionRelationshipPayload;
    huntbound_order_blood_badlands: FactionRegionRelationshipPayload;
}

interface SeedFactionRegionRelationshipParams {
    factions: Factions;
    regions: Regions;
}
export async function setFactionRegionRelationships(
    params: SeedFactionRegionRelationshipParams
): Promise<FactionRegionRelationships> {
    const { factions, regions } = params;
    return {
        huntbound_order_central_skratonia: await db.createFactionRegionRelationship({
            id: 'huntbound-order-central-skratonia',
            description: 'Between the Otherworldly Wastes and The Farmlands. Regular patrols and monster hunting.',
            activites: ['Village protection', 'Trade route security', 'Beast elimination'],
            relationshipType: 'PRIMARY',
            factionId: factions.huntboundOrder.id,
            regionId: regions.central_skratonia.id,
        }),
        huntbound_order_ashen_city: await db.createFactionRegionRelationship({
            id: 'huntbound-order-ashen-city',
            description: 'Full of various monsters and spirits requiring specialized hunters.',
            activites: ['Spirit banishment', 'Monster extermination', 'Supernatural investigations'],
            relationshipType: 'PRIMARY',
            factionId: factions.huntboundOrder.id,
            regionId: regions.the_ashen_city.id,
        }),
        huntbound_order_otherworldy_wastes: await db.createFactionRegionRelationship({
            id: 'huntbound-order-otherworldy-wastes',
            description: 'Thinning beast numbers in lands close to civilized areas.',
            activites: ['Population control', 'Threat assessment', 'Wasteland patrols'],
            relationshipType: 'PRIMARY',
            factionId: factions.huntboundOrder.id,
            regionId: regions.otherwordly_wastes.id,
        }),
        huntbound_order_blood_badlands: await db.createFactionRegionRelationship({
            id: 'huntbound-order-blood-badlands',
            description: 'Dangerous hunting grounds with valuable loot and materials.',
            activites: ['High-risk hunts', 'Resource recovery', 'Elite training exercises'],
            relationshipType: 'PRIMARY',
            factionId: factions.huntboundOrder.id,
            regionId: regions.blood_badlands.id,
        }),
    };
}