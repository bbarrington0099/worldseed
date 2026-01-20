import { Prisma } from '@prismagen/client';
import * as db from '@lib/db-seed';
import { Factions, Continents, Regions, Towns } from './index';

type FactionBasePayload = Prisma.FactionBaseGetPayload<{}>;
export interface FactionBases {
    huntbound_order_fangbreaker_hall: FactionBasePayload;
}

interface SeedFactionBaseParams {
    factions: Factions;
    continents: Continents;
    regions: Regions;
    towns: Towns;
}
export async function seedFactionBases(
    params: SeedFactionBaseParams
): Promise<FactionBases> {
    const { factions, continents, regions, towns } = params;
    return {
		huntbound_order_fangbreaker_hall: await db.createFactionBase({
			id: 'huntbound-order-fangbreaker-hall',
			name: 'Fangbreaker Hall',
			description:
				"A fortress-tavern hybrid built of stone and oak, with a tiled roof shaped like a dragon's tail. Located in a large trading hub on an ocean-fed river, providing access to extensive trade with other nations, plentiful recruits, and supply lines.",
			services: [
				'Great Hall: Trophy-adorned, hearth-warmed, filled with music and storytelling. The heart of guild social life.',
				'Training Grounds: Sparring pits, archery ranges, and monster-tracking drills. Where recruits become hunters.',
				'Sanctuary: Every member has a place to rest, recover, and belong. Private quarters and healing facilities.',
			],
			faction: { connect: { id: factions.huntboundOrder.id } },
			continent: { connect: { id: continents.skratonia.id } },
			town: { connect: { id: towns.suetonon.id } },
		}),
	};
}