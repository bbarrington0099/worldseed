import { Prisma, ContinentLanguagePrevalence } from "@prismagen/client";
import * as db from "@lib/db-seed";
import { Continents, Languages } from '../index';

interface ContinentLanguagesParams {
    continents: Continents;
    languages: Languages;
}
export async function setContinentLanguages(params: ContinentLanguagesParams) {
    const { continents, languages } = params;
    try {
        // Kuriguer
        await db.addContinentLanguage(ContinentLanguagePrevalence.PRIMARY, continents.kuriguer.id, languages.common.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.PRIMARY, continents.kuriguer.id, languages.elvish.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.PRIMARY, continents.kuriguer.id, languages.sylvan.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.SECONDARY, continents.kuriguer.id, languages.gnomish.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.SECONDARY, continents.kuriguer.id, languages.draconic.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.SECONDARY, continents.kuriguer.id, languages.primordial.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.RARE, continents.kuriguer.id, languages.celestial.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.RARE, continents.kuriguer.id, languages.abyssal.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.RARE, continents.kuriguer.id, languages.deep_speech.id);
        // Katman
        await db.addContinentLanguage(ContinentLanguagePrevalence.PRIMARY, continents.katman.id, languages.orcish.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.PRIMARY, continents.katman.id, languages.common.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.SECONDARY, continents.katman.id, languages.draconic.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.SECONDARY, continents.katman.id, languages.lizardfolk.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.SECONDARY, continents.katman.id, languages.yuan_ti.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.SECONDARY, continents.katman.id, languages.abyssal.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.RARE, continents.katman.id, languages.aquan.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.RARE, continents.katman.id, languages.druidic.id);
        // Alatman
        await db.addContinentLanguage(ContinentLanguagePrevalence.PRIMARY, continents.alatman.id, languages.common.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.PRIMARY, continents.alatman.id, languages.draconic.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.SECONDARY, continents.alatman.id, languages.gnomish.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.SECONDARY, continents.alatman.id, languages.infernal.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.SECONDARY, continents.alatman.id, languages.primordial.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.RARE, continents.alatman.id, languages.modron.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.RARE, continents.alatman.id, languages.abyssal.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.RARE, continents.alatman.id, languages.deep_speech.id);
        // Maltman
        await db.addContinentLanguage(ContinentLanguagePrevalence.PRIMARY, continents.maltman.id, languages.common.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.PRIMARY, continents.maltman.id, languages.dwarvish.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.SECONDARY, continents.maltman.id, languages.undercommon.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.SECONDARY, continents.maltman.id, languages.draconic.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.SECONDARY, continents.maltman.id, languages.gnomish.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.RARE, continents.maltman.id, languages.giant.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.RARE, continents.maltman.id, languages.terran.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.RARE, continents.maltman.id, languages.deep_speech.id);
        // Skratonia
        await db.addContinentLanguage(ContinentLanguagePrevalence.PRIMARY, continents.skratonia.id, languages.common.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.PRIMARY, continents.skratonia.id, languages.halfling.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.SECONDARY, continents.skratonia.id, languages.elvish.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.SECONDARY, continents.skratonia.id, languages.infernal.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.SECONDARY, continents.skratonia.id, languages.celestial.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.RARE, continents.skratonia.id, languages.draconic.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.RARE, continents.skratonia.id, languages.telepathic.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.RARE, continents.skratonia.id, languages.giant.id);
        // Bulsania
        await db.addContinentLanguage(ContinentLanguagePrevalence.PRIMARY, continents.bulsania.id, languages.giant.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.PRIMARY, continents.bulsania.id, languages.draconic.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.SECONDARY, continents.bulsania.id, languages.common.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.SECONDARY, continents.bulsania.id, languages.aarakocra.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.SECONDARY, continents.bulsania.id, languages.goliath.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.RARE, continents.bulsania.id, languages.auran.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.RARE, continents.bulsania.id, languages.primordial.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.RARE, continents.bulsania.id, languages.celestial.id);
        // Kantra
        await db.addContinentLanguage(ContinentLanguagePrevalence.PRIMARY, continents.kantra.id, languages.infernal.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.PRIMARY, continents.kantra.id, languages.abyssal.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.SECONDARY, continents.kantra.id, languages.ignan.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.SECONDARY, continents.kantra.id, languages.primordial.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.RARE, continents.kantra.id, languages.deep_speech.id);
        await db.addContinentLanguage(ContinentLanguagePrevalence.RARE, continents.kantra.id, languages.unknown_dialects.id);
    } catch (error) {
        console.error("Error connecting languages to continents:", error);
        process.exit(1);
    }
}