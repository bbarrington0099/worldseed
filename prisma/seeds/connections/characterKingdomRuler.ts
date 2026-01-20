import { Prisma } from '@prismagen/client';
import * as db from '@lib/db-seed';
import { Characters, Kingdoms } from '../index';

type CharacterKingdomRulerPayload = Prisma.CharacterKingdomRulerGetPayload<{}>;
export interface CharacterKingdomRulers {
    gorakSwampstriderRulerOfKamalatman: CharacterKingdomRulerPayload;
}

interface SeedCharacterKingdomRulersParams {
    characters: Characters;
    kingdoms: Kingdoms;
}
export async function setCharacterKingdomRulers(params: SeedCharacterKingdomRulersParams): Promise<CharacterKingdomRulers> {
    const { characters, kingdoms } = params;
    return {
        gorakSwampstriderRulerOfKamalatman: await db.setCharacterKingdomRuler({
            id: 'characterkingdomruler-gorak-swampstrider-rulerofkamalatman',
            character: { connect: { id: characters.gorakSwampstrider.id } },
            kingdom: { connect: { id: kingdoms.kamalatman.id } },
            title: 'Supreme Ruler of Kamalatman',
            startedRulingDate: '783 Dawnrise 1',
            rulingStyle: 'A blend of strategic military leadership and diplomatic acumen, Gorak rules with a firm yet fair hand, valuing strength and unity among the diverse peoples of Kamalatman.',
        }),
    };
}