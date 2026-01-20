import { Prisma } from '@prismagen/client';
import * as db from '@lib/db-seed';

type FactionPayload = Prisma.FactionGetPayload<{}>;
export interface Factions {
    frostmarchCompany: FactionPayload;
    huntboundOrder: FactionPayload;
}

export async function seedFactions(): Promise<Factions> {
    return {
		frostmarchCompany: await db.createFaction({
			id: 'frostmarch-company',
			name: 'The Frostmarch Company',
			description:
				'The Frostmarch Company is a formidable hobgoblin mercenary clan that has carved out a niche in the harsh, frozen regions of Bulsania. Known for their discipline and ruthlessness, they operate as both protectors of trade routes and hunters of dangerous monsters that threaten the sparse settlements in the area. Their society is built around communal living, where all children are raised together, and individual worth is measured by strength and utility rather than lineage. The Frostmarch Company values endurance and martial prowess, making them respected and feared across the northern territories.',
			mainPurpose:
				'To survive and prosper in the frozen wastelands by selling their blades as mercenaries and exterminating monsters and hostile tribes that threaten trade routes and settlements.',
			foundedDate: '680',
			emblemDescription:
				'An ice-blue field with a white frost giant skull at the center, flanked by two crossed black axes beneath it.',
			motto: 'Strength and Survival Above All',
			philosophy:
				"The Frostmarch Company believes in the survival of the fittest, where strength, discipline, and usefulness are the keys to prosperity. They hold that communal bonds forged through shared hardship are stronger than blood ties, and that every member must contribute to the clan's success. Their philosophy emphasizes resilience in the face of adversity, valuing those who can endure the harsh conditions of their homeland and excel in combat as essential to the clan's continued existence and dominance in the frozen north.",
		}),
		huntboundOrder: await db.createFaction({
			id: 'huntbound-order',
			name: 'The Huntbound Order',
			description:
				"The Huntbound Order is a monster-hunting guild that straddles the line between mercenary band and knightly order. They are famous across the kingdom for answering calls the crown's armies cannot — slaying rampaging wyverns, hunting nightstalkers through villages, or rooting out beasts that lurk too close to trade routes and farmland. Their reputation is built not only on their results, but on their camaraderie: taverns ring with laughter when the Huntbound arrive, and bards find endless stories in their bloody victories and rowdy celebrations.",
			mainPurpose:
				'Take on quests and contracts to hunt and slay dangerous monsters threatening settlements and trade routes.',
			foundedDate: '755',
			emblemDescription:
				"A circular ouroboros formed by a lion and a wyvern locked in eternal struggle, biting each other's tails. At the center stands a massive greataxe over a radiant burst — the War God Tempus's blessing. Blue and silver are their heraldic colors, though many tattoos and carved marks are rendered in stark black.",
			motto: 'Bound by oath, tempered by steel, we hunt so the realm endures.',
			philosophy:
				"Tharos understands that guild members may use methods that go against his personal morals or his own way of handling situations. However, he firmly believes that those putting their lives on the line in the moment should be the ones to determine how they accomplish their mission, so long as they work toward the ultimate goal of saving the innocent from monsters. This pragmatic philosophy is why the guild's core values are intentionally broad and flexible, allowing for diverse alignments and approaches while maintaining unity of purpose.",
			additionalProperties: {
				coreValues: [
					{
						name: 'The Hunt Comes First',
						description:
							'Whatever you do along the way, the beast must fall.',
					},
					{
						name: 'Protect the Realm',
						description:
							'Our hunts are not for glory alone, but to keep the kingdom safe when others cannot.',
					},
					{
						name: 'Respect the Oath',
						description:
							'A Huntbound may fight in their own way, but never betray their comrades or the cause.',
					},
					{
						name: 'Strength in Fellowship',
						description:
							'No hunter stands alone; every blade, spell, and arrow has a place in the Order.',
					},
					{
						name: 'Honor the Fallen, Celebrate the Living',
						description:
							'The hunt is deadly. We mourn our dead and drink to their memory, but we do not waste the life still in us.',
					},
				],
				reputation: {
					commonFolk:
						'Saviors and folk heroes, though sometimes viewed with awe or suspicion because of their wild personalities.',
					nobility:
						'Both an asset and a headache — their reliability is unmatched, but they answer to their Guildmaster, not to any crown.',
					adventurers:
						'The Huntbound Order is one of the most prestigious guilds to join; a name recognized across the world, promising both glory and family.',
				},
			},
		}),
	};
}