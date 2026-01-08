import { Prisma } from "@prismagen/client";
import * as db from "@lib/db-seed";

type PantheonPayload = Prisma.PantheonGetPayload<{}>;
export interface Pantheons {
    human_centric_faerun_forgotten_realms: PantheonPayload;
    dwarves_moradins_folk: PantheonPayload;
    elves_the_seldarine_dark_seldarine: PantheonPayload;
    orcs_tribe_of_gruumsh: PantheonPayload;
    dragons_dragonborn: PantheonPayload;
    elemental_lords: PantheonPayload;
    death_shadow_powers: PantheonPayload;
    halfling_yondallas_children: PantheonPayload;
    gnomes_lords_of_the_golden_hills: PantheonPayload;
    goblins_the_dark_gods: PantheonPayload;
    gith: PantheonPayload;
    yuan_ti_serpent_gods: PantheonPayload;
    sea_powers: PantheonPayload;
}

export async function seedPantheons(): Promise<Pantheons> {
    return {
        human_centric_faerun_forgotten_realms: await db.createPantheon({
            id: "human-centric-faerun-forgotten-realms",
            name: "Human-Centric (Faerûn / Forgotten Realms)",
            //slug: "human-centric-faerun-forgotten-realms",
            description: "The primary pantheon of human civilizations, brought to Alabastria through The Bringing. These gods represent the core values and aspects of human society.",
            symbol: "fas fa-crown",
        }),
        dwarves_moradins_folk: await db.createPantheon({
            id: "dwarves-moradins-folk",
            name: "Dwarves – Moradin's Folk",
            //slug: "dwarves-moradins-folk",
            description: "The traditional pantheon of dwarven civilization, centered around Moradin and his family. These gods represent the core values of dwarven society: craftsmanship, honor, and family.",
            symbol: "fas fa-hammer",
        }),
        elves_the_seldarine_dark_seldarine: await db.createPantheon({
            id: "elves-the-seldarine-dark-seldarine",
            name: "Elves – The Seldarine & Dark Seldarine",
            //slug: "elves-the-seldarine-dark-seldarine",
            description: "The traditional pantheon of elven civilization, centered around Corellon Larethian and his family. These gods represent the core values of elven society: art, magic, and nature.",
            symbol: "fas fa-moon",
        }),
        orcs_tribe_of_gruumsh: await db.createPantheon({
            id: "orcs-tribe-of-gruumsh",
            name: "Orcs – Tribe of Gruumsh",
            //slug: "orcs-tribe-of-gruumsh",
            description: "The brutal pantheon of orcish deities, focused on conquest, strength, and survival in harsh conditions.",
            symbol: "fas fa-skull",
        }),
        dragons_dragonborn: await db.createPantheon({
            id: "dragons-dragonborn",
            name: "Dragons & Dragonborn",
            //slug: "dragons-dragonborn",
            description: "The ancient draconic pantheon, representing the eternal struggle between metallic and chromatic dragons.",
            symbol: "fas fa-dragon",
        }),
        elemental_lords: await db.createPantheon({
            id: "elemental-lords",
            name: "Elemental Lords",
            //slug: "elemental-lords",
            description: "The primordial forces of nature, worshiped by genasi, tritons, and those who seek to understand the fundamental elements.",
            symbol: "fas fa-fire",
        }),
        death_shadow_powers: await db.createPantheon({
            id: "death-shadow-powers",
            name: "Death & Shadow Powers",
            //slug: "death-shadow-powers",
            description: "The mysterious pantheon of death, fate, and shadow, worshiped by those who deal with the afterlife and hidden knowledge.",
            symbol: "fas fa-skull",
        }),
        halfling_yondallas_children: await db.createPantheon({
            id: "halfling-yondallas-children",
            name: "Halfling – Yondalla's Children",
            //slug: "halfling-yondallas-children",
            description: "The warm and protective pantheon of halfling deities, focused on home, family, and community.",
            symbol: "fas fa-home",
        }),
        gnomes_lords_of_the_golden_hills: await db.createPantheon({
            id: "gnomes-lords-of-the-golden-hills",
            name: "Gnomes – Lords of the Golden Hills",
            //slug: "gnomes-lords-of-the-golden-hills",
            description: "The playful and protective pantheon of gnome deities, focused on luck, protection, and trickery.",
            symbol: "fas fa-gem",
        }),
        goblins_the_dark_gods: await db.createPantheon({
            id: "goblins-the-dark-gods",
            name: "Goblins – The Dark Gods",
            //slug: "goblins-the-dark-gods",
            description: "The brutal and oppressive pantheon of goblinoid deities, focused on war, domination, and goblinoid supremacy.",
            symbol: "fas fa-skull-crossbones",
        }),
        gith: await db.createPantheon({
            id: "gith",
            name: "Gith",
            //slug: "gith",
            description: "The unique pantheon of Gith deities, focused on freedom, vengeance, and the eternal struggle against mind flayers.",
            symbol: "fas fa-fist-raised",
        }),
        yuan_ti_serpent_gods: await db.createPantheon({
            id: "yuan-ti-serpent-gods",
            name: "Yuan-Ti / Serpent Gods",
            //slug: "yuan-ti-serpent-gods",
            description: "The ancient and mysterious pantheon of serpent deities, focused on ambition, secrecy, and corruption.",
            symbol: "fas fa-staff-snake",
        }),
        sea_powers: await db.createPantheon({
            id: "sea-powers",
            name: "Sea Powers",
            //slug: "sea-powers",
            description: "The powerful pantheon of sea deities, worshiped by tritons, sailors, and coastal folk who depend on the ocean for their livelihood.",
            symbol: "fas fa-water",
        }),
    }
}