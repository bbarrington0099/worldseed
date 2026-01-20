import { Prisma } from '@prismagen/client';
import * as db from '@lib/db-seed';
import { Characters, Continents } from '../index';

type CharacterContinentRulerPayload = Prisma.CharacterContinentRulerGetPayload<{}>;
export interface CharacterContinentRulers {
	elaraMoonwhisperRulerOfKuriguer: CharacterContinentRulerPayload;
	gorakSwampstriderRulerOfKatman: CharacterContinentRulerPayload;
	thorneIronforgeRulerOfAlatman: CharacterContinentRulerPayload;
    bronwynStonebeardRulerOfMaltman: CharacterContinentRulerPayload;
    marcusGoldfieldRulerOfSkratonia: CharacterContinentRulerPayload;
    thaneIcewindRulerOfBulsania: CharacterContinentRulerPayload;
}

interface SeedCharacterContinentRulersParams {
    characters: Characters;
    continents: Continents;
}
export async function setCharacterContinentRulers(params: SeedCharacterContinentRulersParams): Promise<CharacterContinentRulers> {
    const { characters, continents } = params;
    return {
        elaraMoonwhisperRulerOfKuriguer: await db.setCharacterContinentRuler({
            id: 'charactercontinentruler-elara-moonwhisper-kuriguer',
            title: 'High Archmage',
            rulingStyle: 'Enlightened and Diplomatic',
            startedRulingDate: '625',
            character: { connect: { id: characters.elaraMoonwhisper.id } },
            continent: { connect: { id: continents.kuriguer.id } },
        }),
        gorakSwampstriderRulerOfKatman: await db.setCharacterContinentRuler({
            id: 'charactercontinentruler-gorak-swampstrider-katman',
            title: 'High King of Katman',
            rulingStyle: 'Strong and Just',
            startedRulingDate: '765',
            character: { connect: { id: characters.gorakSwampstrider.id } },
            continent: { connect: { id: continents.katman.id } },
        }),
        thorneIronforgeRulerOfAlatman: await db.setCharacterContinentRuler({
            id: 'charactercontinentruler-thorne-ironforge-alatman',
            title: 'King of Alatman',
            rulingStyle: 'Pragmatic and Authoritative',
            startedRulingDate: '780',
            character: { connect: { id: characters.thorneIronforge.id } },
            continent: { connect: { id: continents.alatman.id } },
        }),
        bronwynStonebeardRulerOfMaltman: await db.setCharacterContinentRuler({
            id: 'charactercontinentruler-bronwyn-stonebeard-maltman',
            title: 'Queen of Maltman',
            rulingStyle: 'Resilient and Visionary',
            startedRulingDate: '680',
            character: { connect: { id: characters.bronwynStonebeard.id } },
            continent: { connect: { id: continents.maltman.id } },
        }),
        marcusGoldfieldRulerOfSkratonia: await db.setCharacterContinentRuler({
            id: 'charactercontinentruler-marcus-goldfield-skratonia',
            title: 'High Speaker',
            rulingStyle: 'Charismatic and Diplomatic',
            startedRulingDate: '785',
            character: { connect: { id: characters.marcusGoldfield.id } },
            continent: { connect: { id: continents.skratonia.id } },
        }),
        thaneIcewindRulerOfBulsania: await db.setCharacterContinentRuler({
            id: 'charactercontinentruler-thane-icewind-bulsania',
            title: 'High Chief',
            rulingStyle: 'Stoic and Honorable',
            startedRulingDate: '315',
            character: { connect: { id: characters.thaneIcewind.id } },
            continent: { connect: { id: continents.bulsania.id } },
        }),
    };
}
