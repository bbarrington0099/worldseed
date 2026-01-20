import { Prisma } from '@prismagen/client';
import * as db from '@lib/db-seed';
import { Factions } from './index';

type FactionHistoricEventPayload = Prisma.FactionHistoricEventGetPayload<{}>;
export interface FactionHistoricEvents {
    huntbound_order_founding: FactionHistoricEventPayload;
    huntbound_order_founding_years: FactionHistoricEventPayload;
    huntbound_order_early_expansion: FactionHistoricEventPayload;
    huntbound_order_guild_establishment: FactionHistoricEventPayload;
    huntbound_order_modern_era: FactionHistoricEventPayload;
}

interface SeedFactionHistoricEventParams {
    factions: Factions;
}
export async function seedFactionHistoricEvents(
    params: SeedFactionHistoricEventParams
): Promise<FactionHistoricEvents> {
    const { factions } = params;
    return {
        huntbound_order_founding: await db.createFactionHistoricEvent({
            id: 'huntbound-order-founding',
            name: 'Founding of the Huntbound Order',
            description: "Tharos had fought in the king's armies for decades, but grew frustrated seeing villages abandoned to monsters while soldiers marched to foreign wars. The final straw came when he found a wyvern terrorizing a defenseless village. After slaying it alone, his armor torn and face scarred, he planted his banner and declared: 'If soldiers cannot answer the call, then we will. Any who would hunt the horrors of the dark — stand with me, and let us be bound by this oath.'",
            eventType: 'founding',
            eventDate: '755',
            faction: { connect: { id: factions.huntboundOrder.id } },
        }),
        huntbound_order_founding_years: await db.createFactionHistoricEvent({
            id: 'huntbound-order-founding-years',
            name: 'The Founding Years of the Huntbound Order',
            description: 'In the initial years following its founding, the Huntbound Order focused on recruiting skilled hunters and establishing its reputation across Skratonia. Tharos and his early followers traveled from village to village, answering calls for help and taking on dangerous contracts. Their success in slaying monsters and protecting settlements quickly spread their fame, attracting more members who were drawn to the Order’s mission and camaraderie. During this period, the Order developed its core values and training protocols, laying the foundation for its future growth.',
            eventType: 'founding years',
            eventDateRange: '755-760',
            faction: { connect: { id: factions.huntboundOrder.id } },
        }),
        huntbound_order_early_expansion: await db.createFactionHistoricEvent({
            id: 'huntbound-order-early-expansion',
            name: 'Early Expansion of the Huntbound Order',
            description: 'Building on their initial successes, the Huntbound Order expanded its operations throughout Skratonia and into neighboring regions. The Order took on more significant contracts, often dealing with larger and more dangerous monsters that threatened entire communities. Their reputation as effective monster hunters grew, leading to increased demand for their services. During this time, the Order formalized its rank structure and training programs, ensuring that all members were well-prepared for the challenges they faced in the field.',
            eventType: 'early expansion',
            eventDateRange: '760-780',
            faction: { connect: { id: factions.huntboundOrder.id } },
        }),
        huntbound_order_guild_establishment: await db.createFactionHistoricEvent({
            id: 'huntbound-order-guild-establishment', 
            name: 'Establishment of the Huntbound Order Guild',
            description: 'As the Huntbound Order continued to grow in size and reputation, they established a permanent headquarters in the form of a fortress-tavern located in Suetonon, the bustling trade city. This location served as both a base of operations and a social hub for members to gather, share stories, and celebrate their victories. The guild formalized its organizational structure, creating clear ranks and roles within the Order. This period also saw the beginning of legendary hunts that would become part of the Order’s lore, further cementing their status as elite monster hunters.',
            eventType: 'guild establishment',
            eventDateRange: '780-795',
            faction: { connect: { id: factions.huntboundOrder.id } },
        }),
        huntbound_order_modern_era: await db.createFactionHistoricEvent({
            id: 'huntbound-order-modern-era',
            name: 'The Modern Era of the Huntbound Order',
            description: 'In the modern era, the Huntbound Order has solidified its position as the premier monster-hunting guild in Skratonia. With full operational control over monster-related threats in the kingdom, the Order has gained international recognition for its effectiveness and professionalism. Elite hunters within the Order have achieved legendary status, known for their daring feats and successful hunts. The guild continues to attract top talent from across the realm, maintaining its prestigious standing and commitment to protecting the innocent from monstrous dangers.',
            eventType: 'modern era',
            eventDateRange: '795-800',
            faction: { connect: { id: factions.huntboundOrder.id } },
        }),
    };
}