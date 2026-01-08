import { Language, Prisma } from "@prismagen/client";
import * as db from "@lib/db-seed";
import { CreatureSizes, Languages/* , RaceAbilityScores */, RaceNames/* , RaceTraits */ } from "./index";

type RacePayload = Prisma.RaceGetPayload<{}>;
export interface Races {
    aarakocra: RacePayload;
    aasimar: RacePayload;
    autognome: RacePayload;
    bugbear: RacePayload;
    centaur: RacePayload;
    changeling: RacePayload;
    dhampir: RacePayload;
    dragonborn: RacePayload;
    dwarf: RacePayload;
    elf: RacePayload;
    gnome: RacePayload;
    goblin: RacePayload;
    goliath: RacePayload;
    halfling: RacePayload;
    hobgoblin: RacePayload;
    human: RacePayload;
    kenku: RacePayload;
    kobold: RacePayload;
    lizardfolk: RacePayload;
    orc: RacePayload;
    tabaxi: RacePayload;
    tiefling: RacePayload;
    tortle: RacePayload;
    triton: RacePayload;
    fairy: RacePayload;
    firbolg: RacePayload;
    genasi: RacePayload;
    giff: RacePayload;
    harengon: RacePayload;
    kalashtar: RacePayload;
    kender: RacePayload;
    loxodon: RacePayload;
    shifter: RacePayload;
    vedalken: RacePayload;
    warforged: RacePayload;
    yuan_ti: RacePayload;
    hadozee: RacePayload;
    hexblood: RacePayload;
    half_elf: RacePayload;
    half_orc: RacePayload;
    leonin: RacePayload;
    minotaur: RacePayload;
    owlin: RacePayload;
    plasmoid: RacePayload;
    reborn: RacePayload;
    satyr: RacePayload;
    simic_hybrid: RacePayload;
    thri_kreen: RacePayload;
    gith: RacePayload;
}

interface SeedRacesParams {
    creatureSizes: CreatureSizes;
    languages: Languages;
    //raceTraits: RaceTraits;
    raceNames: RaceNames;
    //raceAbilityScores: RaceAbilityScores;
}
export async function seedRaces(params: SeedRacesParams): Promise<Races> {
    const { creatureSizes, languages/*   */, raceNames/* , raceAbilityScores */ } = params;
    return {
        aarakocra: await db.createRace({
            id: "race-aarakocra",
            name: "Aarakocra",
            //slug: "aarakocra",
            description:
                "Birdfolk from the Elemental Plane of Air, Aarakocra are often travelers, expats, refugees, or adventurers. Resembling humanoids in their stature and bipedal movements, they also gain the benefits of a flying speed, slashing talons, and an understanding of the Aarakocra as well as the Auran tongue and writ.",
            additionalProperties: { speed: "25 feet walking, 50 feet flying" },
            //age: "Aarakocra reach maturity by age 3. Compared to humans, aarakocra don't usually live longer than 30 years.",
            ageAdulthood: 3,
            ageLifespan: 30,
            alignment:
                "Most aarakocra are good and rarely choose sides when it comes to law and chaos. Leaders are sometimes lawful good.",
            heightRangeLow: 5.0,
            heightRangeHigh: 6.4,
            weightRangeLow: 90,
            weightRangeHigh: 130,
            alabastriaLore:
                "In Bulsania's mountain peaks and Kuriguer's coastal cliffs, Aarakocra serve as messengers and scouts, their aerial perspective providing crucial intelligence about the harsh landscapes below. These birdfolk often work with the Huntbound Order, using their flight to track dangerous creatures across difficult terrain.",
            playstyle:
                "Excellent mobility and ranged combat specialists. Perfect for players who want aerial superiority and unique movement options.",
            defaultCreatureSizeId: creatureSizes.medium.id,
            languages: {
                connect: [
                    { id: languages.common.id },
                    { id: languages.aarakocra.id },
                    { id: languages.auran.id },
                ],
            },
            /* traits: {
                connect: [
                    { id: raceTraits.flight_aarakocra.id },
                    { id: raceTraits.talons_aarakocra.id },
                ],
            },
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.dex_two.id },
                    { id: raceAbilityScores.wis_one.id },
                ],
            }, */
            namesId: raceNames.aarakocra.id,
        }),
        aasimar: await db.createRace({
            id: "race-aasimar",
            name: "Aasimar",
            //slug: "aasimar",
            description:
                "Aasimar are descended from humans and often celestials, reflecting the light and pure good of the divine realm. This goodness is often signified by a celestial mark on their bodies and their undeniable beauty.",
            additionalProperties: { speed: "30 feet" },
            //age: "Aasimar mature at the same rate as humans but can live up to 160 years.",
            ageAdulthood: 18,
            ageLifespan: 160,
            alignment:
                "Aasimar are inclined toward good alignments. Not all aasimar are of good alignment, but very few are evil.",
            heightRangeLow: 5.4,
            heightRangeHigh: 7.0,
            weightRangeLow: 110,
            weightRangeHigh: 190,
            alabastriaLore:
                "Across Skratonia's cities and temples, Aasimar serve as beacons of hope and divine guidance. These celestial-touched individuals often work with clerics and paladins, their healing abilities and divine resistance making them natural leaders in the fight against darkness.",
            playstyle:
                "Divine support and healing specialists. Great for players who want to be the party's moral compass and primary healer.",
            defaultCreatureSizeId: creatureSizes.medium.id,
            languages: {
                connect: [
                    { id: languages.common.id },
                    { id: languages.celestial.id },
                ],
            },
            /* traits: {
                connect: [
                    { id: raceTraits.darkvision_aasimar.id },
                    { id: raceTraits.celestial_resistance_aasimar.id },
                    { id: raceTraits.healing_hands_aasimar.id },
                ],
            },
            abilityScoreIncreases: {
                connect: [{ id: raceAbilityScores.cha_two.id }],
        }, */
            namesId: raceNames.aasimar.id,
        }),
        autognome: await db.createRace({
            id: "race-autognome",
            name: "Autognome",
            //slug: "autognome",
            description:
                "Autognomes are small constructs built by gnomes to serve as assistants and companions. They are imbued with a spark of life and sentience, making them more than mere machines.",
            additionalProperties: { speed: "30 feet" },
            //age: "Autognomes don't age, but they can be destroyed. They can live indefinitely if properly maintained.",
            ageAdulthood: 0,
            ageLifespan: 0,
            alignment:
                "Most autognomes are lawful, following the instructions of their creators or their own internal programming.",
            heightRangeLow: 2.8,
            heightRangeHigh: 3.4,
            weightRangeLow: 45,
            weightRangeHigh: 49,
            alabastriaLore:
                "In Alatman's volcanic forges and Maltman's mountain workshops, Autognomes serve as tireless assistants to their gnomish creators. These mechanical beings represent the pinnacle of gnomish engineering, combining magical and technological innovation in Alabastria's most advanced settlements.",
            playstyle:
                "Durable utility specialists with unique construct abilities. Perfect for players who want to be immune to many common threats and have unique roleplay opportunities.",
            defaultCreatureSizeId: creatureSizes.small.id,
            languages: {
                connect: [{ id: languages.common.id }, { id: languages.gnomish.id }],
        },
            /* traits: {
                connect: [
                    { id: raceTraits.constructed_resilience_autognome.id },
                    { id: raceTraits.mechanical_nature_autognome.id },
                    { id: raceTraits.sentrys_rest_autognome.id },
                    { id: raceTraits.true_life_autognome.id },
                ],
            },
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.int_two.id },
                    { id: raceAbilityScores.con_one.id },
                ],
            }, */
            namesId: raceNames.autognome.id,
        }),
        bugbear: await db.createRace({
            id: "race-bugbear",
            name: "Bugbear",
            //slug: "bugbear",
            description:
                "Bugbears are large, hairy goblinoids with a talent for stealth and surprise attacks. Despite their intimidating appearance, they can be surprisingly cunning and strategic.",
            additionalProperties: { speed: "30 feet" },
            //age: "Bugbears reach adulthood at age 16 and live up to 80 years.",
            ageAdulthood: 16,
            ageLifespan: 80,
            alignment:
                "Bugbears are chaotic evil in the wild, but some can be trained to be lawful evil.",
            heightRangeLow: 6.0,
            heightRangeHigh: 7.4,
            weightRangeLow: 200,
            weightRangeHigh: 272,
            alabastriaLore:
                "In Katman's swamplands and the darker corners of Alabastria, Bugbears serve as scouts and infiltrators for various factions. Their natural stealth and surprise attack abilities make them valuable assets in the Huntbound Order's more covert operations.",
            playstyle:
                "Stealthy melee combatants with surprise tactics. Great for players who want to be sneaky fighters with extended reach.",
            defaultCreatureSizeId: creatureSizes.medium.id,
            languages: {
                connect: [{ id: languages.common.id }, { id: languages.goblin.id }],
        },
            /* traits: {
                connect: [
                    { id: raceTraits.darkvision_bugbear.id },
                    { id: raceTraits.long_limbed_bugbear.id },
                    { id: raceTraits.powerful_build_bugbear.id },
                    { id: raceTraits.sneaky_bugbear.id },
                    { id: raceTraits.surprise_attack_bugbear.id },
                ],
            },
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.str_two.id },
                    { id: raceAbilityScores.dex_one.id },
                ],
            }, */
            namesId: raceNames.bugbear.id,
        }),
        centaur: await db.createRace({
            id: "race-centaur",
            name: "Centaur",
            //slug: "centaur",
            description:
                "Centaurs are humanoid creatures with the upper body of a human and the lower body of a horse. They are known for their speed, strength, and connection to nature.",
            additionalProperties: { speed: "40 feet" },
            //age: "Centaurs mature and age at the same rate as humans, living about 100 years.",
            ageAdulthood: 18,
            ageLifespan: 100,
            alignment:
                "Centaurs are typically chaotic good, valuing freedom and nature.",
            heightRangeLow: 6.2,
            heightRangeHigh: 7.1,
            weightRangeLow: 200,
            weightRangeHigh: 272,
            alabastriaLore:
                "On Skratonia's vast plains and in Kuriguer's magical forests, Centaurs serve as messengers, scouts, and guardians of nature. Their speed and connection to the land make them invaluable allies in the Huntbound Order's efforts to protect Alabastria's wilderness.",
            playstyle:
                "Mobile melee combatants with nature connection. Perfect for players who want speed, strength, and natural abilities.",
            defaultCreatureSizeId: creatureSizes.medium.id,
            languages: {
                connect: [{ id: languages.common.id }, { id: languages.sylvan.id }],
        },
            /* traits: {
                connect: [
                    { id: raceTraits.charge_centaur.id },
                    { id: raceTraits.hooves_centaur.id },
                    { id: raceTraits.equine_build_centaur.id },
                    { id: raceTraits.survivor_centaur.id },
                ],
            },
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.str_two.id },
                    { id: raceAbilityScores.wis_one.id },
                ],
            }, */
            namesId: raceNames.centaur.id,
        }),
        changeling: await db.createRace({
            id: "race-changeling",
            name: "Changeling",
            //slug: "changeling",
            description:
                "Changelings are shapeshifters who can alter their appearance at will. They are often found in urban environments where their abilities allow them to blend in and gather information.",
            additionalProperties: { speed: "30 feet" },
            //age: "Changelings mature at the same rate as humans but can live up to 200 years.",
            ageAdulthood: 18,
            ageLifespan: 200,
            alignment:
                "Changelings are typically chaotic, as they value personal freedom and adaptability.",
            heightRangeLow: 5.4,
            heightRangeHigh: 7.0,
            weightRangeLow: 110,
            weightRangeHigh: 190,
            alabastriaLore:
                "In Skratonia's diverse cities and Kuriguer's cosmopolitan ports, Changelings serve as spies, diplomats, and information brokers. Their shapeshifting abilities make them invaluable assets to the Huntbound Order's intelligence operations.",
            playstyle:
                "Versatile social specialists with infiltration abilities. Perfect for players who want to be masters of disguise and social manipulation.",
            defaultCreatureSizeId: creatureSizes.medium.id,
            languages: {
                connect: [
                    { id: languages.common.id },
                    { id: languages.any_two.id },
                ],
            },
            /* traits: {
                connect: [
                    { id: raceTraits.shapechanger_changeling.id },
                    { id: raceTraits.changeling_instincts_changeling.id },
                    { id: raceTraits.divergent_persona_changeling.id },
                ],
            },
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.cha_two.id },
                    { id: raceAbilityScores.dex_one.id },
                ],
            }, */
            namesId: raceNames.changeling.id,
        }),
        dhampir: await db.createRace({
            id: "race-dhampir",
            name: "Dhampir",
            //slug: "dhampir",
            description:
                "Dhampirs are the offspring of vampires and mortals, inheriting some of their undead parent's abilities while maintaining their humanity. They walk between the worlds of the living and the dead.",
            additionalProperties: { speed: "35 feet" },
            //age: "Dhampirs mature at the same rate as humans but can live for centuries.",
            ageAdulthood: 18,
            ageLifespan: -750,
            alignment:
                "Dhampirs can be of any alignment, though many struggle with their dark heritage.",
            heightRangeLow: 5.4,
            heightRangeHigh: 7.0,
            weightRangeLow: 110,
            weightRangeHigh: 190,
            alabastriaLore:
                "In Alabastria's shadowed corners and among the undead-haunted regions, Dhampirs walk a dangerous path between life and death. Some serve the Huntbound Order as specialists against undead threats, while others struggle with their dark heritage in the world's more accepting communities.",
            playstyle:
                "Mobile combatants with unique feeding mechanics. Great for players who want to play morally complex characters with undead abilities.",
            defaultCreatureSizeId: creatureSizes.medium.id,
            languages: {
                connect: [
                    { id: languages.common.id },
                    { id: languages.any_one.id },
                ],
            },
            /* traits: {
                connect: [
                    { id: raceTraits.darkvision_dhampir.id },
                    { id: raceTraits.spider_climb_dhampir.id },
                    { id: raceTraits.vampiric_bite_dhampir.id },
                    { id: raceTraits.deathless_nature_dhampir.id },
                ],
            },
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.cha_two.id },
                    { id: raceAbilityScores.dex_one.id },
                ],
            }, */
            namesId: raceNames.dhampir.id,
        }),
        dragonborn: await db.createRace({
            id: "race-dragonborn",
            name: "Dragonborn",
            //slug: "dragonborn",
            description:
                "Dragonborn are humanoid dragons, created by dragons or born from dragon eggs. They are proud, honorable, and often seek to prove their worth through great deeds.",
            additionalProperties: { speed: "30 feet" },
            //age: "Dragonborn grow quickly, reaching adulthood by age 15 and living to be around 80 years old.",
            ageAdulthood: 15,
            ageLifespan: 80,
            alignment:
                "Dragonborn tend to extremes, making a conscious choice for one side or the other in the cosmic war between good and evil.",
            heightRangeLow: 5.6,
            heightRangeHigh: 7.2,
            weightRangeLow: 175,
            weightRangeHigh: 247,
            alabastriaLore:
                "In Bulsania's militarized society and across Alabastria's dragon-worshipping regions, Dragonborn serve as elite warriors and leaders. Their draconic heritage and martial prowess make them natural commanders in the Huntbound Order's most dangerous missions.",
            playstyle:
                "Martial combatants with elemental abilities. Perfect for players who want to be proud warriors with draconic powers.",
            defaultCreatureSizeId: creatureSizes.medium.id,
            languages: {
                connect: [{ id: languages.common.id }, { id: languages.draconic.id }],
        },
            /* traits: {
                connect: [
                    { id: raceTraits.draconic_ancestry_dragonborn.id },
                    { id: raceTraits.breath_weapon_dragonborn.id },
                    { id: raceTraits.damage_resistance_dragonborn.id },
                ],
            },
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.str_two.id },
                    { id: raceAbilityScores.cha_one.id },
                ],
            }, */
            namesId: raceNames.dragonborn.id,
        }),
        dwarf: await db.createRace({
            id: "race-dwarf",
            name: "Dwarf",
            //slug: "dwarf",
            description:
                "Dwarves are a stoic but stern race, ensconced in cities carved from the hearts of mountains and fiercely determined to repel the hardships of the outside world.",
            additionalProperties: { speed: "25 feet" },
            //age: "Dwarves mature at the same rate as humans, but they're considered young until they reach the age of 50. On average, they live about 350 years.",
            ageAdulthood: 50,
            ageLifespan: 350,
            alignment:
                "Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.",
            heightRangeLow: 3.8,
            heightRangeHigh: 4.0,
            weightRangeLow: 115,
            weightRangeHigh: 163,
            alabastriaLore:
                "In Maltman's mountain strongholds and Alatman's volcanic forges, Dwarves serve as master craftsmen and miners. Their expertise in metalwork and stone construction makes them invaluable allies in the Huntbound Order's efforts to fortify settlements against monstrous threats.",
            playstyle:
                "Durable craftsmen and warriors with resistance to common threats. Perfect for players who want to be tough, practical characters with crafting abilities.",
            defaultCreatureSizeId: creatureSizes.medium.id,
            languages: {
                connect: [{ id: languages.common.id }, { id: languages.dwarvish.id }],
        },
            /* traits: {
                connect: [
                    { id: raceTraits.darkvision_dwarf.id },
                    { id: raceTraits.dwarven_resilience_dwarf.id },
                    { id: raceTraits.stonecunning_dwarf.id },
                ],
            },
            abilityScoreIncreases: {
                connect: [{ id: raceAbilityScores.con_two.id }],
        }, */
            namesId: raceNames.dwarf.id,
        }),
        elf: await db.createRace({
            id: "race-elf",
            name: "Elf",
            //slug: "elf",
            description:
                "Elves are a magical people of otherworldly grace, living in the world but not entirely part of it. They live in places of ethereal beauty, in the midst of ancient forests or in silvery spires glittering with faerie light.",
            additionalProperties: { speed: "30 feet" },
            //age: "Elves mature at the same rate as humans physically, but are considered adults around 100 years old. They can live to be 750 years old.",
            ageAdulthood: 100,
            ageLifespan: 750,
            alignment:
                "Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others' freedom as well as their own.",
            heightRangeLow: 4.6,
            heightRangeHigh: 6.4,
            weightRangeLow: 90,
            weightRangeHigh: 130,
            alabastriaLore:
                "In Kuriguer's magical forests and Skratonia's ancient groves, Elves serve as guardians of nature and keepers of ancient wisdom. Their long lives and magical heritage make them natural leaders in the Huntbound Order's efforts to protect Alabastria's natural beauty and magical secrets.",
            playstyle:
                "Graceful and perceptive characters with magical resistance. Perfect for players who want to be agile, wise, and resistant to common magical effects.",
            defaultCreatureSizeId: creatureSizes.medium.id,
            languages: {
                connect: [{ id: languages.common.id }, { id: languages.elvish.id }],
        },
            /* traits: {
                connect: [
                    { id: raceTraits.darkvision_elf.id },
                    { id: raceTraits.keen_senses_elf.id },
                    { id: raceTraits.fey_ancestry_elf.id },
                    { id: raceTraits.trance_elf.id },
                ],
            },
            abilityScoreIncreases: {
                connect: [{ id: raceAbilityScores.dex_two.id }],
        }, */
            namesId: raceNames.elf.id,
        }),
        fairy: await db.createRace({
            id: "race-fairy",
            name: "Fairy",
            //slug: "fairy",
            description:
                "Fairies are small, magical humanoids with a deep connection to the Feywild. They are known for their mischievous nature and powerful magic.",
            additionalProperties: { speed: "30 feet" },
            //age: "Fairies mature at the same rate as humans but can live for centuries.",
            ageAdulthood: 18,
            ageLifespan: -500,
            alignment:
                "Fairies are typically chaotic, as they value personal freedom and creativity.",
            heightRangeLow: 2.6,
            heightRangeHigh: 3.2,
            weightRangeLow: 30,
            weightRangeHigh: 34,
            alabastriaLore:
                "In Kuriguer's magical forests and fey-touched areas, Fairies serve as messengers and guardians of the natural world. Their small size and magical abilities make them excellent scouts and spies in the Huntbound Order's operations.",
            playstyle:
                "Tiny magical scouts with flight abilities. Perfect for players who want to be small, magical characters with unique movement options.",
            defaultCreatureSizeId: creatureSizes.small.id,
            languages: {
                connect: [{ id: languages.common.id }, { id: languages.sylvan.id }],
        },
            /* traits: {
                connect: [
                    { id: raceTraits.fairy_magic_fairy.id },
                    { id: raceTraits.flight_fairy.id },
                    { id: raceTraits.fey_passage_fairy.id },
                ],
            },
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.cha_two.id },
                    { id: raceAbilityScores.dex_one.id },
                ],
            }, */
            namesId: raceNames.fairy.id,
        }),
        firbolg: await db.createRace({
            id: "race-firbolg",
            name: "Firbolg",
            //slug: "firbolg",
            description:
                "Firbolgs are gentle giants who live in the deepest forests and serve as guardians of nature. They are known for their wisdom, strength, and connection to the natural world.",
            additionalProperties: { speed: "30 feet" },
            //age: "Firbolgs reach adulthood around 30 and can live up to 500 years.",
            ageAdulthood: 30,
            ageLifespan: 500,
            alignment:
                "Firbolgs are typically neutral good, valuing nature and protecting the innocent.",
            heightRangeLow: 7.0,
            heightRangeHigh: 8.8,
            weightRangeLow: 250,
            weightRangeHigh: 322,
            alabastriaLore:
                "In Kuriguer's deepest forests and Skratonia's ancient groves, Firbolgs serve as guardians of nature and protectors of the innocent. Their gentle strength and natural magic make them powerful allies in the Huntbound Order's efforts to protect Alabastria's wilderness.",
            playstyle:
                "Gentle giants with nature magic and stealth abilities. Perfect for players who want to be strong, wise characters with unique magical abilities.",
            defaultCreatureSizeId: creatureSizes.medium.id,
            languages: {
                connect: [
                    { id: languages.common.id },
                    { id: languages.giant.id },
                    { id: languages.elvish.id },
                ],
            },
            /* traits: {
                connect: [
                    { id: raceTraits.firbolg_magic_firbolg.id },
                    { id: raceTraits.hidden_step_firbolg.id },
                    { id: raceTraits.powerful_build_firbolg.id },
                    { id: raceTraits.speech_of_beast_and_leaf_firbolg.id },
                ],
            },
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.wis_two.id },
                    { id: raceAbilityScores.str_one.id },
                ],
            }, */
            namesId: raceNames.firbolg.id,
        }),
        genasi: await db.createRace({
            id: "race-genasi",
            name: "Genasi",
            //slug: "genasi",
            description:
                "Genasi are humanoids with a deep connection to elemental forces. They are born when mortals and elementals interbreed, resulting in beings with elemental powers.",
            additionalProperties: { speed: "30 feet" },
            //age: "Genasi mature at the same rate as humans but can live up to 120 years.",
            ageAdulthood: 18,
            ageLifespan: 120,
            alignment:
                "Genasi can be of any alignment, though they often reflect the nature of their elemental heritage.",
            heightRangeLow: 5.4,
            heightRangeHigh: 7.0,
            weightRangeLow: 110,
            weightRangeHigh: 190,
            alabastriaLore:
                "In Kuriguer's elemental hotspots and Alatman's volcanic regions, Genasi serve as elemental specialists and magical researchers. Their elemental heritage and magical abilities make them valuable assets in the Huntbound Order's efforts to understand and control Alabastria's magical phenomena.",
            playstyle:
                "Elemental magic users with unique resistances. Perfect for players who want to be magical characters with elemental themes.",
            defaultCreatureSizeId: creatureSizes.medium.id,
            languages: {
                connect: [
                    { id: languages.common.id },
                    { id: languages.primordial.id },
                ],
            },
            /* traits: {
                connect: [
                    { id: raceTraits.elemental_resistance_genasi.id },
                    { id: raceTraits.elemental_magic_genasi.id },
                ],
            },
            abilityScoreIncreases: {
                connect: [{ id: raceAbilityScores.con_two.id }],
        }, */
            namesId: raceNames.genasi.id,
        }),
        gnome: await db.createRace({
            id: "race-gnome",
            name: "Gnome",
            //slug: "gnome",
            description:
                "Small, curious folk with a natural affinity for magic and invention. Gnomes are known for their intelligence, curiosity, and love of knowledge.",
            additionalProperties: { speed: "25 feet" },
            //age: "Gnomes mature at the same rate humans do, and most are expected to settle down into an adult life by around age 40. They can live 350 to almost 500 years.",
            ageAdulthood: 40,
            ageLifespan: 500,
            alignment:
                "Gnomes are most often good. Those who tend toward law are sages, engineers, researchers, scholars, investigators, or inventors. Those who tend toward chaos are minstrels, tricksters, wanderers, or fanciful jewelers.",
            heightRangeLow: 3.0,
            heightRangeHigh: 3.6,
            weightRangeLow: 35,
            weightRangeHigh: 45,
            alabastriaLore:
                "Gnomes in Alabastria are found primarily in the magical academies of Kuriguer, where their natural curiosity and magical aptitude make them excellent researchers and inventors. They often work alongside Artificers to create magical devices and study the strange phenomena of the world.",
            playstyle:
                "Intelligent spellcasters and inventors who excel at problem-solving and magical research. Perfect for players who enjoy creative solutions and magical experimentation.",
            defaultCreatureSizeId: creatureSizes.small.id,
            languages: {
                connect: [{ id: languages.common.id }, { id: languages.gnomish.id }, { id: languages.common_sign_language.id }, { id: languages.undercommon.id }],
        },
            /* traits: {
                connect: [
                    { id: raceTraits.darkvision_gnome.id },
                    { id: raceTraits.gnome_cunning_gnome.id },
                ],
            },
            abilityScoreIncreases: {
                connect: [{ id: raceAbilityScores.int_two.id }],
        }, */
            namesId: raceNames.gnome.id,
        }),
        giff: await db.createRace({
            id: "race-giff",
            name: "Giff",
            //slug: "giff",
            description:
                "Hippopotamus-like humanoids known for their strength, honor, and love of firearms and explosives. Giff are disciplined warriors with a strong sense of duty.",
            additionalProperties: { speed: "30 feet" },
            //age: "Giff mature at the same rate as humans and live about as long.",
            ageAdulthood: 18,
            ageLifespan: 80,
            alignment:
                "Giff are typically lawful, tending toward good. They value honor, discipline, and order.",
            heightRangeLow: 6.0,
            heightRangeHigh: 7.0,
            weightRangeLow: 280,
            weightRangeHigh: 340,
            alabastriaLore:
                "Giff in Alabastria are found primarily in the militarized regions of Bulsania, where their disciplined nature and combat prowess make them excellent soldiers and guards. They often serve in the Huntbound Order as elite warriors.",
            playstyle:
                "Strong warriors who excel at ranged combat with firearms and heavy weapons. Perfect for players who want to be disciplined soldiers with advanced weaponry.",
            defaultCreatureSizeId: creatureSizes.medium.id,
            languages: {
                connect: [{ id: languages.common.id }, { id: languages.giff.id }],
        },
            /* traits: {
                connect: [
                    { id: raceTraits.firearms_mastery_giff.id },
                    { id: raceTraits.hippo_build_giff.id },
                    { id: raceTraits.natural_armor_giff.id },
                ],
            },
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.str_two.id },
                    { id: raceAbilityScores.con_one.id },
                ],
            }, */
            namesId: raceNames.giff.id,
        }),
        goblin: await db.createRace({
            id: "race-goblin",
            name: "Goblin",
            //slug: "goblin",
            description:
                "Small, cunning humanoids known for their stealth, speed, and opportunistic nature. Goblins are survivors who excel at hit-and-run tactics.",
            additionalProperties: { speed: "30 feet" },
            //age: "Goblins reach adulthood at age 8 and live up to 60 years.",
            ageAdulthood: 8,
            ageLifespan: 60,
            alignment:
                "Goblins are typically neutral evil, as they care only for their own needs. A few goblins might rise above their origins, however, proving to be heroes worthy of legend.",
            heightRangeLow: 3.0,
            heightRangeHigh: 3.6,
            weightRangeLow: 35,
            weightRangeHigh: 45,
            alabastriaLore:
                "Goblins in Alabastria are found in the swamps and wilderness of Kamalatman, where they form small tribes and communities. They are often viewed with suspicion by other races, but some have proven themselves as valuable allies and members of the Huntbound Order.",
            playstyle:
                "Fast and stealthy characters who excel at hit-and-run tactics and survival. Perfect for players who want to be quick and cunning.",
            defaultCreatureSizeId: creatureSizes.small.id,
            languages: {
                connect: [{ id: languages.common.id }, { id: languages.goblin.id }],
        },
            /* traits: {
                connect: [
                    { id: raceTraits.darkvision_goblin.id },
                    { id: raceTraits.fury_of_the_small_goblin.id },
                    { id: raceTraits.nimble_escape_goblin.id },
                ],
            },
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.dex_two.id },
                    { id: raceAbilityScores.con_one.id },
                ],
            }, */
            namesId: raceNames.goblin.id,
        }),
        goliath: await db.createRace({
            id: "race-goliath",
            name: "Goliath",
            //slug: "goliath",
            description:
                "Tall, muscular humanoids with gray skin and a natural resistance to cold. Goliaths are competitive and value strength and endurance.",
            additionalProperties: { speed: "30 feet" },
            //age: "Goliaths have lifespans comparable to humans. They enter adulthood in their late teens and usually live less than a century.",
            ageAdulthood: 18,
            ageLifespan: 90,
            alignment:
                "Goliaths tend toward neutral alignments. They value individual freedom and self-reliance.",
            heightRangeLow: 7.0,
            heightRangeHigh: 8.0,
            weightRangeLow: 280,
            weightRangeHigh: 340,
            alabastriaLore:
                "Goliaths in Alabastria are found primarily in the mountain regions of Bulsania and Kamalatman, where their strength and endurance make them excellent climbers and warriors. They often serve as guides and protectors in the harsh mountain terrain.",
            playstyle:
                "Strong and tough characters who excel at physical challenges and combat. Perfect for players who want to be powerful warriors with natural resilience.",
            defaultCreatureSizeId: creatureSizes.medium.id,
            languages: {
                connect: [{ id: languages.common.id }, { id: languages.giant.id }, { id: languages.common_sign_language.id }],
        },
            /* traits: {
                connect: [
                    { id: raceTraits.natural_athlete_goliath.id },
                    { id: raceTraits.stones_endurance_goliath.id },
                    { id: raceTraits.powerful_build_goliath.id },
                    { id: raceTraits.mountain_born_goliath.id },
                ],
            },
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.str_two.id },
                    { id: raceAbilityScores.con_one.id },
                ],
            }, */
            namesId: raceNames.goliath.id,
        }),
        hadozee: await db.createRace({
            id: "race-hadozee",
            name: "Hadozee",
            //slug: "hadozee",
            description:
                "Simian humanoids with patagial skin flaps between their arms and legs, Hadozee are natural climbers, sailors, and gliders. They are often called “deck apes,” moving with agility through ships’ rigging or across rugged terrain. Their prehensile feet grant extra dexterity, and in the air they can glide to safety from falls. In Skratonia, they are known for navigating between open plains and sky-scoured plateaus, often serving as scouts, sailors, or wanderers between towns.",
            additionalProperties: { speed: "30 feet walking; climbing speed equal to walking speed" },
            //age: "Hadozee mature at about the same rate as humans (late teens) and often live somewhat longer, up to around 90 years.",
            ageAdulthood: 18,
            ageLifespan: 90,
            alignment:
                "Tending toward neutrality, often mercenary or wanderlust-driven. Exceptions lean more chaotic than lawful and more often good than evil.",
            heightRangeLow: 5.0,
            heightRangeHigh: 6.0,
            weightRangeLow: 150,
            weightRangeHigh: 200,
            alabastriaLore:
                "In the plains and sky-scrub plateaus of Skratonia, Hadozee make their homes near cliff-edged oases and rigged lookout towers, gliding from heights to scout the terrain below. Their prehensile feet let them navigate planks, ropes, and the rigging of ships or nomadic caravans with ease. Many join the wind-flecked trading fleets of Skratonia, serving aboard sail-ships or sky-vessels, guiding them along trade routes between major towns carved across open plains.",
            playstyle:
                "Mobile scouts and utility characters. Good for players who like vertical movement (glide), creative positioning, and surviving falls. Excellent with classes that benefit from mobility, dexterity, or reactions.",
            defaultCreatureSizeId: creatureSizes.medium.id,
            languages: {
                connect: [{ id: languages.common.id }, { id: languages.hadozee.id }],
        },
            /* traits: {
                connect: [
                    { id: raceTraits.dexterous_feet_hadozee.id },
                    { id: raceTraits.glide_hadozee.id },
                    { id: raceTraits.hadozee_dodge_hadozee.id },
                ],
            },
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.dex_two.id },
                    { id: raceAbilityScores.any_one.id },
                ],
            }, */
            namesId: raceNames.hadozee.id,
        }),
        half_elf: await db.createRace({
            id: "race-half-elf",
            name: "Half-Elf",
            //slug: "half-elf",
            description:
                "The offspring of humans and elves, combining the best traits of both races. Half-elves are versatile and charismatic, often serving as diplomats and mediators.",
            additionalProperties: { speed: "30 feet" },
            //age: "Half-elves mature at the same rate humans do and reach adulthood around age 20. They live much longer than humans, often exceeding 180 years.",
            ageAdulthood: 20,
            ageLifespan: 180,
            alignment:
                "Half-elves share the chaotic bent of their elven heritage. They value both personal freedom and creative expression, demonstrating neither love of leaders nor desire for followers.",
            heightRangeLow: 5.0,
            heightRangeHigh: 6.0,
            weightRangeLow: 110,
            weightRangeHigh: 180,
            alabastriaLore:
                "Half-Elves in Alabastria are found throughout all continents, often serving as diplomats and mediators between different races. Their mixed heritage makes them valuable in the complex political landscape of the world.",
            playstyle:
                "Versatile characters who excel at social interaction and can adapt to many different situations. Perfect for players who want flexibility and charisma.",
            defaultCreatureSizeId: creatureSizes.medium.id,
            languages: {
                connect: [
                    { id: languages.common.id },
                    { id: languages.elvish.id },
                    { id: languages.any_one.id },
                ],
            },
            /* traits: {
                connect: [
                    { id: raceTraits.darkvision_half_elf.id },
                    { id: raceTraits.fey_ancestry_half_elf.id },
                    { id: raceTraits.skill_versatility_half_elf.id },
                ],
            },
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.cha_two.id },
                    { id: raceAbilityScores.any_one.id },
                ],
            }, */
            namesId: raceNames.half_elf.id,
        }),
        half_orc: await db.createRace({
            id: "race-half-orc",
            name: "Half-Orc",
            //slug: "half-orc",
            description:
                "The offspring of humans and orcs, combining human versatility with orcish strength and endurance. Half-orcs are often found on the fringes of society.",
            additionalProperties: { speed: "30 feet" },
            //age: "Half-orcs mature a little faster than humans, reaching adulthood around age 14. They age noticeably faster and rarely live longer than 75 years.",
            ageAdulthood: 14,
            ageLifespan: 75,
            alignment:
                "Half-orcs inherit a tendency toward chaos from their orc parents and are not strongly inclined toward good. Half-orcs raised among orcs and willing to live out their lives among them are usually evil.",
            heightRangeLow: 5.6,
            heightRangeHigh: 6.6,
            weightRangeLow: 150,
            weightRangeHigh: 220,
            alabastriaLore:
                "Half-Orcs in Alabastria are found primarily in the frontier regions of Kamalatman and the borderlands of Skratonia, where their strength and endurance make them valuable as guards and warriors. They often face discrimination but have proven themselves as capable members of the Huntbound Order.",
            playstyle:
                "Strong and tough characters who excel at combat and survival. Perfect for players who want to be powerful warriors with natural resilience.",
            defaultCreatureSizeId: creatureSizes.medium.id,
            languages: {
                connect: [{ id: languages.common.id }, { id: languages.orcish.id }],
        },
            /* traits: {
                connect: [
                    { id: raceTraits.darkvision_half_orc.id },
                    { id: raceTraits.relentless_endurance_half_orc.id },
                    { id: raceTraits.savage_attacks_half_orc.id },
                ],
            },
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.str_two.id },
                    { id: raceAbilityScores.con_one.id },
                ],
            }, */
            namesId: raceNames.half_orc.id,
        }),
        halfling: await db.createRace({
            id: "race-halfling",
            name: "Halfling",
            //slug: "halfling",
            description:
                "Small, cheerful folk known for their luck, courage, and love of comfort. Halflings are optimistic and resourceful, making the best of any situation.",
            additionalProperties: { speed: "25 feet" },
            //age: "Halflings reach adulthood at age 20 and live up to 150 years.",
            ageAdulthood: 20,
            ageLifespan: 150,
            alignment:
                "Most halflings are lawful good. As a rule, they are good-hearted and kind, hate to see others in pain, and have no tolerance for oppression. They are also very orderly and traditional, leaning heavily on the support of their community and the comfort of their old ways.",
            heightRangeLow: 2.7,
            heightRangeHigh: 3.3,
            weightRangeLow: 30,
            weightRangeHigh: 40,
            alabastriaLore:
                "Halflings in Alabastria are found primarily in the fertile plains of Skratonia, where their agricultural skills and community values make them excellent farmers and merchants. They often serve as the backbone of the region's economy and are known for their hospitality.",
            playstyle:
                "Lucky and brave characters who excel at avoiding danger and supporting their communities. Perfect for players who want to be optimistic and resourceful.",
            defaultCreatureSizeId: creatureSizes.small.id,
            languages: {
                connect: [{ id: languages.common.id }, { id: languages.halfling.id }],
        },
            /* traits: {
                connect: [
                    { id: raceTraits.lucky_halfling.id },
                    { id: raceTraits.brave_halfling.id },
                    { id: raceTraits.halfling_nimbleness_halfling.id },
                ],
            },
            abilityScoreIncreases: {
                connect: [{ id: raceAbilityScores.dex_two.id }],
        }, */
            namesId: raceNames.halfling.id,
        }),
        harengon: await db.createRace({
            id: "race-harengon",
            name: "Harengon",
            //slug: "harengon",
            description:
                "Rabbit-like humanoids known for their agility, luck, and connection to the Feywild. Harengon are quick, nimble, and often have a mischievous streak.",
            additionalProperties: { speed: "30 feet" },
            //age: "Harengon mature at the same rate as humans and live about as long.",
            ageAdulthood: 18,
            ageLifespan: 80,
            alignment:
                "Harengon are typically chaotic, tending toward good. They value freedom and personal expression.",
            heightRangeLow: 3.0,
            heightRangeHigh: 5.0,
            weightRangeLow: 35,
            weightRangeHigh: 85,
            alabastriaLore:
                "Harengon in Alabastria are found primarily in the magical forests of Kuriguer, where their fey heritage and agility make them excellent scouts and messengers. They often serve as couriers for the Huntbound Order and guides through dangerous terrain.",
            playstyle:
                "Agile and lucky characters who excel at movement and avoiding danger. Perfect for players who want to be quick and nimble.",
            defaultCreatureSizeId: creatureSizes.small.id,
            languages: {
                connect: [{ id: languages.common.id }, { id: languages.sylvan.id }],
        },
            /* traits: {
                connect: [
                    { id: raceTraits.hare_trigger_harengon.id },
                    { id: raceTraits.leporine_senses_harengon.id },
                    { id: raceTraits.lucky_footwork_harengon.id },
                    { id: raceTraits.rabbit_hop_harengon.id },
                ],
            },
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.dex_two.id },
                    { id: raceAbilityScores.any_one.id },
                ],
            }, */
            namesId: raceNames.harengon.id,
        }),
        hexblood: await db.createRace({
            id: "race-hexblood",
            name: "Hexblood",
            //slug: "hexblood",
            description:
                "Humanoids touched by hag magic, bearing the mark of a hag's influence. Hexbloods are often outcasts but possess unique magical abilities.",
            additionalProperties: { speed: "30 feet" },
            //age: "Hexbloods mature at the same rate as humans but can live up to 200 years due to their hag heritage.",
            ageAdulthood: 18,
            ageLifespan: 200,
            alignment:
                "Hexbloods can be of any alignment, but many lean toward chaotic due to their outsider status.",
            heightRangeLow: 5.0,
            heightRangeHigh: 6.0,
            weightRangeLow: 110,
            weightRangeHigh: 180,
            alabastriaLore:
                "Hexbloods in Alabastria are found in the darker regions of Kuriguer's forests and the swamps of Kamalatman, where their hag-touched nature makes them both feared and sought after for their unique magical abilities. They often serve as scouts and information gatherers for the Huntbound Order.",
            playstyle:
                "Magical characters with unique abilities and outsider status. Perfect for players who want to be mysterious and magical.",
            defaultCreatureSizeId: creatureSizes.medium.id,
            languages: {
                connect: [
                    { id: languages.common.id },
                    { id: languages.any_one.id },
                ],
            },
            /* traits: {
                connect: [
                    { id: raceTraits.darkvision_hexblood.id },
                    { id: raceTraits.hex_magic_hexblood.id },
                    { id: raceTraits.eerie_token_hexblood.id },
                ],
            },
            abilityScoreIncreases: {
                connect: [{ id: raceAbilityScores.any_one.id }],
        }, */
            namesId: raceNames.hexblood.id,
        }),
        hobgoblin: await db.createRace({
            id: "race-hobgoblin",
            name: "Hobgoblin",
            //slug: "hobgoblin",
            description:
                "Larger, more disciplined cousins of goblins known for their military prowess and strict codes of honor. Hobgoblins are organized warriors who value discipline and order.",
            additionalProperties: { speed: "30 feet" },
            //age: "Hobgoblins mature at the same rate as humans and live about as long.",
            ageAdulthood: 18,
            ageLifespan: 80,
            alignment:
                "Hobgoblins are typically lawful evil, as they care only for their own needs and are willing to use any means to achieve their goals.",
            heightRangeLow: 5.6,
            heightRangeHigh: 6.6,
            weightRangeLow: 150,
            weightRangeHigh: 220,
            alabastriaLore:
                "Hobgoblins in Alabastria are found in the militarized regions of Bulsania and the organized settlements of Kamalatman, where their disciplined nature and military training make them excellent soldiers and guards. Some have proven themselves as valuable members of the Huntbound Order.",
            playstyle:
                "Disciplined warriors who excel at organized combat and teamwork. Perfect for players who want to be military-focused characters.",
            defaultCreatureSizeId: creatureSizes.medium.id,
            languages: {
                connect: [{ id: languages.common.id }, { id: languages.goblin.id }],
        },
            /* traits: {
                connect: [
                    { id: raceTraits.darkvision_hobgoblin.id },
                    { id: raceTraits.martial_training_hobgoblin.id },
                    { id: raceTraits.saving_face_hobgoblin.id },
                ],
            },
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.con_two.id },
                    { id: raceAbilityScores.int_one.id },
                ],
            }, */
            namesId: raceNames.hobgoblin.id,
        }),
        human: await db.createRace({
            id: "race-human",
            name: "Human",
            //slug: "human",
            description:
                "The most adaptable and ambitious of the common races, humans are known for their versatility and drive to achieve greatness. They are found in every corner of the world.",
            additionalProperties: { speed: "30 feet" },
            //age: "Humans reach adulthood in their late teens and live less than a century.",
            ageAdulthood: 18,
            ageLifespan: 80,
            alignment:
                "Humans tend toward no particular alignment. The best and the worst are found among them.",
            heightRangeLow: 5.0,
            heightRangeHigh: 6.0,
            weightRangeLow: 110,
            weightRangeHigh: 180,
            alabastriaLore:
                "Humans in Alabastria are found throughout all continents, serving as the backbone of most civilizations. Their adaptability and ambition have made them leaders in politics, trade, and the Huntbound Order. They are known for their ability to work with other races and their drive to achieve greatness.",
            playstyle:
                "Versatile characters who can excel at any role. Perfect for players who want maximum flexibility and adaptability.",
            defaultCreatureSizeId: creatureSizes.medium.id,
            languages: {
                connect: [
                    { id: languages.common.id },
                    { id: languages.any_one.id },
                ],
            },
            /* traits: {
                connect: [{ id: raceTraits.extra_language_human.id }],
        },
            abilityScoreIncreases: {
                connect: [{ id: raceAbilityScores.any_one.id }],
        }, */
            namesId: raceNames.human.id,
        }),
        kalashtar: await db.createRace({
            id: "race-kalashtar",
            name: "Kalashtar",
            //slug: "kalashtar",
            description:
                "Humanoids with a unique connection to the dream plane, sharing their consciousness with quori spirits. Kalashtar are wise, empathetic, and possess psionic abilities.",
            additionalProperties: { speed: "30 feet" },
            //age: "Kalashtar mature at the same rate as humans and live about as long.",
            ageAdulthood: 18,
            ageLifespan: 80,
            alignment:
                "Kalashtar are typically lawful good, as they are guided by the wisdom of their quori spirits.",
            heightRangeLow: 5.0,
            heightRangeHigh: 6.0,
            weightRangeLow: 110,
            weightRangeHigh: 180,
            alabastriaLore:
                "Kalashtar in Alabastria are found primarily in the magical regions of Kuriguer, where their psionic abilities and connection to the dream plane make them excellent scholars and spiritual guides. They often serve as advisors to the Huntbound Order and other organizations.",
            playstyle:
                "Psionic characters with telepathic abilities and spiritual wisdom. Perfect for players who want to be wise and empathetic with unique mental powers.",
            defaultCreatureSizeId: creatureSizes.medium.id,
            languages: {
                connect: [{ id: languages.common.id }, { id: languages.quori.id }],
        },
            /* traits: {
                connect: [
                    { id: raceTraits.dual_mind_kalashtar.id },
                    { id: raceTraits.mental_discipline_kalashtar.id },
                    { id: raceTraits.mind_link_kalashtar.id },
                    { id: raceTraits.severed_from_dreams_kalashtar.id },
                ],
            },
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.wis_two.id },
                    { id: raceAbilityScores.any_one.id },
                ],
            }, */
            namesId: raceNames.kalashtar.id,
        }),
        kender: await db.createRace({
            id: "race-kender",
            name: "Kender",
            //slug: "kender",
            description:
                "Small, curious humanoids known for their fearlessness, curiosity, and tendency to 'borrow' things. Kender are brave, optimistic, and often find themselves in trouble.",
            additionalProperties: { speed: "25 feet" },
            //age: "Kender mature at the same rate as halflings, reaching adulthood around 20 and living up to 150 years.",
            ageAdulthood: 20,
            ageLifespan: 150,
            alignment:
                "Kender are typically chaotic good, as they value freedom and helping others.",
            heightRangeLow: 3.0,
            heightRangeHigh: 3.6,
            weightRangeLow: 35,
            weightRangeHigh: 45,
            alabastriaLore:
                "Kender in Alabastria are found throughout all continents, often serving as scouts and adventurers. Their fearlessness and curiosity make them excellent for dangerous missions, though their tendency to 'borrow' things can cause problems.",
            playstyle:
                "Fearless and curious characters who excel at exploration and social interaction. Perfect for players who want to be brave and optimistic.",
            defaultCreatureSizeId: creatureSizes.small.id,
            languages: {
                connect: [
                    { id: languages.common.id },
                    { id: languages.kenderspeak.id },
                ],
            },
            /* traits: {
                connect: [
                    { id: raceTraits.fearless_kender.id },
                    { id: raceTraits.kender_curiosity_kender.id },
                    { id: raceTraits.taunt_kender.id },
                ],
            },
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.dex_two.id },
                    { id: raceAbilityScores.cha_one.id },
                ],
            }, */
            namesId: raceNames.kender.id,
        }),
        kenku: await db.createRace({
            id: "race-kenku",
            name: "Kenku",
            //slug: "kenku",
            description:
                "Raven-like humanoids cursed to mimic sounds and voices rather than speak original thoughts. Kenku are clever, stealthy, and excellent at imitation.",
            additionalProperties: { speed: "30 feet" },
            //age: "Kenku reach adulthood at 12 and live around 60 years.",
            ageAdulthood: 12,
            ageLifespan: 60,
            alignment:
                "Kenku are typically chaotic neutral, as they are driven by their own desires and instincts.",
            heightRangeLow: 5.0,
            heightRangeHigh: 5.6,
            weightRangeLow: 90,
            weightRangeHigh: 120,
            alabastriaLore:
                "Kenku in Alabastria are found in the cities and wilderness of all continents, often serving as spies, messengers, and information gatherers. Their mimicry abilities make them valuable for the Huntbound Order's intelligence operations.",
            playstyle:
                "Stealthy and clever characters who excel at imitation and information gathering. Perfect for players who want to be sneaky and resourceful.",
            defaultCreatureSizeId: creatureSizes.medium.id,
            languages: {
                connect: [{ id: languages.common.id }, { id: languages.auran.id }, { id: languages.common_sign_language.id }],
        },
            /* traits: {
                connect: [
                    { id: raceTraits.expert_forgery_kenku.id },
                    { id: raceTraits.kenku_training_kenku.id },
                    { id: raceTraits.mimicry_kenku.id },
                ],
            },
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.dex_two.id },
                    { id: raceAbilityScores.wis_one.id },
                ],
            }, */
            namesId: raceNames.kenku.id,
        }),
        kobold: await db.createRace({
            id: "race-kobold",
            name: "Kobold",
            //slug: "kobold",
            description:
                "Small, reptilian humanoids known for their cowardice, cunning, and pack tactics. Kobolds are weak individually but dangerous in groups.",
            additionalProperties: { speed: "30 feet" },
            //age: "Kobolds mature quickly, reaching adulthood by age 6, and can live up to 120 years.",
            ageAdulthood: 6,
            ageLifespan: 120,
            alignment:
                "Kobolds are typically lawful evil, as they care only for their own needs and are willing to use any means to achieve their goals.",
            heightRangeLow: 2.0,
            heightRangeHigh: 2.6,
            weightRangeLow: 25,
            weightRangeHigh: 35,
            alabastriaLore:
                "Kobolds in Alabastria are found in the underground regions of Kamalatman and the mountain caves of Bulsania, where they form small communities and serve as scouts and miners. Some have proven themselves as valuable members of the Huntbound Order.",
            playstyle:
                "Small and cunning characters who excel at teamwork and survival. Perfect for players who want to be clever and resourceful.",
            defaultCreatureSizeId: creatureSizes.small.id,
            languages: {
                connect: [{ id: languages.common.id }, { id: languages.draconic.id }],
        },
            /* traits: {
                connect: [
                    { id: raceTraits.darkvision_kobold.id },
                    { id: raceTraits.grovel_cower_and_beg_kobold.id },
                    { id: raceTraits.pack_tactics_kobold.id },
                ],
            },
            abilityScoreIncreases: {
                connect: [{ id: raceAbilityScores.dex_two.id }],
        }, */
            namesId: raceNames.kobold.id,
        }),
        leonin: await db.createRace({
            id: "race-leonin",
            name: "Leonin",
            //slug: "leonin",
            description:
                "Lion-like humanoids known for their strength, courage, and regal bearing. Leonin are proud warriors who value honor and strength.",
            additionalProperties: { speed: "35 feet" },
            //age: "Leonin mature at the same rate as humans and live about as long.",
            ageAdulthood: 18,
            ageLifespan: 80,
            alignment:
                "Leonin are typically lawful good, as they value honor, justice, and protecting the weak.",
            heightRangeLow: 5.6,
            heightRangeHigh: 6.6,
            weightRangeLow: 150,
            weightRangeHigh: 220,
            alabastriaLore:
                "Leonin in Alabastria are found primarily in the plains of Skratonia and the mountain regions of Bulsania, where their strength and courage make them excellent warriors and leaders. They often serve as commanders in the Huntbound Order and other military organizations.",
            playstyle:
                "Strong and courageous characters who excel at combat and leadership. Perfect for players who want to be powerful warriors with regal bearing.",
            defaultCreatureSizeId: creatureSizes.medium.id,
            languages: {
                connect: [{ id: languages.common.id }, { id: languages.leonin.id }],
        },
            /* traits: {
                connect: [
                    { id: raceTraits.darkvision_leonin.id },
                    { id: raceTraits.claws_leonin.id },
                    { id: raceTraits.hunters_instincts_leonin.id },
                    { id: raceTraits.daunting_roar_leonin.id },
                ],
            },
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.str_two.id },
                    { id: raceAbilityScores.con_one.id },
                ],
            }, */
            namesId: raceNames.leonin.id,
        }),
        lizardfolk: await db.createRace({
            id: "race-lizardfolk",
            name: "Lizardfolk",
            //slug: "lizardfolk",
            description:
                "Reptilian humanoids known for their natural armor, swimming abilities, and practical nature. Lizardfolk are survivalists who value efficiency and strength.",
            additionalProperties: { speed: "30 feet" },
            //age: "Lizardfolk reach adulthood around 14 and live up to 60 years.",
            ageAdulthood: 14,
            ageLifespan: 60,
            alignment:
                "Lizardfolk are typically neutral, as they care only for their own survival and the survival of their tribe.",
            heightRangeLow: 5.6,
            heightRangeHigh: 6.6,
            weightRangeLow: 150,
            weightRangeHigh: 220,
            alabastriaLore:
                "Lizardfolk in Alabastria are found primarily in the swamps and wetlands of Kamalatman, where their natural abilities make them excellent hunters and survivalists. They often serve as guides and scouts for the Huntbound Order in difficult terrain.",
            playstyle:
                "Survivalist characters who excel at combat and wilderness survival. Perfect for players who want to be practical and efficient.",
            defaultCreatureSizeId: creatureSizes.medium.id,
            languages: {
                connect: [{ id: languages.common.id }, { id: languages.draconic.id }],
        },
            /* traits: {
                connect: [
                    { id: raceTraits.bite_lizardfolk.id },
                    { id: raceTraits.cunning_artisan_lizardfolk.id },
                    { id: raceTraits.hold_breath_lizardfolk.id },
                    { id: raceTraits.natural_armor_lizardfolk.id },
                    { id: raceTraits.hungry_jaws_lizardfolk.id },
                ],
            },
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.con_two.id },
                    { id: raceAbilityScores.wis_one.id },
                ],
            }, */
            namesId: raceNames.lizardfolk.id,
        }),
        loxodon: await db.createRace({
            id: "race-loxodon",
            name: "Loxodon",
            //slug: "loxodon",
            description:
                "Elephant-like humanoids known for their strength, wisdom, and natural armor. Loxodon are patient, wise, and have excellent memories.",
            additionalProperties: { speed: "30 feet" },
            //age: "Loxodon mature at the same rate as humans and live about as long.",
            ageAdulthood: 18,
            ageLifespan: 80,
            alignment:
                "Loxodon are typically lawful good, as they value order, justice, and protecting others.",
            heightRangeLow: 6.0,
            heightRangeHigh: 7.0,
            weightRangeLow: 280,
            weightRangeHigh: 340,
            alabastriaLore:
                "Loxodon in Alabastria are found primarily in the plains of Skratonia and the mountain regions of Bulsania, where their strength and wisdom make them excellent leaders and protectors. They often serve as advisors and commanders in the Huntbound Order.",
            playstyle:
                "Strong and wise characters who excel at leadership and protection. Perfect for players who want to be patient and powerful.",
            defaultCreatureSizeId: creatureSizes.medium.id,
            languages: {
                connect: [{ id: languages.common.id }, { id: languages.loxodon.id }],
        },
            /* traits: {
                connect: [
                    { id: raceTraits.natural_armor_loxodon.id },
                    { id: raceTraits.powerful_build_loxodon.id },
                    { id: raceTraits.trunk_loxodon.id },
                    { id: raceTraits.keen_smell_loxodon.id },
                ],
            },
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.con_two.id },
                    { id: raceAbilityScores.wis_one.id },
                ],
            }, */
            namesId: raceNames.loxodon.id,
        }),
        minotaur: await db.createRace({
            id: "race-minotaur",
            name: "Minotaur",
            //slug: "minotaur",
            description:
                "Bull-like humanoids known for their strength, horns, and connection to labyrinths. Minotaurs are powerful warriors with a natural sense of direction.",
            additionalProperties: { speed: "30 feet" },
            //age: "Minotaurs mature at the same rate as humans and live about as long.",
            ageAdulthood: 18,
            ageLifespan: 80,
            alignment:
                "Minotaurs are typically chaotic neutral, as they value freedom and personal strength.",
            heightRangeLow: 6.0,
            heightRangeHigh: 7.0,
            weightRangeLow: 200,
            weightRangeHigh: 280,
            alabastriaLore:
                "Minotaurs in Alabastria are found primarily in the mountain regions of Bulsania and the underground areas of Kamalatman, where their strength and sense of direction make them excellent guides and warriors. They often serve as protectors and scouts for the Huntbound Order.",
            playstyle:
                "Strong and powerful characters who excel at combat and navigation. Perfect for players who want to be powerful warriors with unique abilities.",
            defaultCreatureSizeId: creatureSizes.medium.id,
            languages: {
                connect: [{ id: languages.common.id }, { id: languages.minotaur.id }],
        },
            /* traits: {
                connect: [
                    { id: raceTraits.horns_minotaur.id },
                    { id: raceTraits.goring_rush_minotaur.id },
                    { id: raceTraits.hammering_horns_minotaur.id },
                    { id: raceTraits.labyrinthine_recall_minotaur.id },
                ],
            },
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.str_two.id },
                    { id: raceAbilityScores.con_one.id },
                ],
            }, */
            namesId: raceNames.minotaur.id,
        }),
        orc: await db.createRace({
            id: "race-orc",
            name: "Orc",
            //slug: "orc",
            description:
                "Strong, aggressive humanoids known for their physical prowess and tribal culture. Orcs are fierce warriors who value strength and honor.",
            additionalProperties: { speed: "30 feet" },
            //age: "Orcs mature a little faster than humans, reaching adulthood around age 14, and rarely live longer than 75 years.",
            ageAdulthood: 14,
            ageLifespan: 75,
            alignment:
                "Orcs are typically chaotic evil, as they care only for their own needs and are willing to use any means to achieve their goals.",
            heightRangeLow: 5.6,
            heightRangeHigh: 6.6,
            weightRangeLow: 150,
            weightRangeHigh: 220,
            alabastriaLore:
                "Orcs in Alabastria are found primarily in the frontier regions of Kamalatman and the borderlands of Skratonia, where their strength and aggression make them valuable as warriors and guards. Some have proven themselves as capable members of the Huntbound Order.",
            playstyle:
                "Strong and aggressive characters who excel at combat and physical challenges. Perfect for players who want to be powerful warriors.",
            defaultCreatureSizeId: creatureSizes.medium.id,
            languages: {
                connect: [{ id: languages.common.id }, { id: languages.orcish.id }],
        },
            /* traits: {
                connect: [
                    { id: raceTraits.darkvision_orc.id },
                    { id: raceTraits.aggressive_orc.id },
                    { id: raceTraits.powerful_build_orc.id },
                ],
            },
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.str_two.id },
                    { id: raceAbilityScores.con_one.id },
                ],
            }, */
            namesId: raceNames.orc.id,
        }),
        owlin: await db.createRace({
            id: "race-owlin",
            name: "Owlin",
            //slug: "owlin",
            description:
                "Owl-like humanoids known for their flight, stealth, and keen senses. Owlin are wise, stealthy, and have excellent night vision.",
            additionalProperties: { speed: "30 feet" },
            //age: "Owlin mature at the same rate as humans and live about as long.",
            ageAdulthood: 18,
            ageLifespan: 80,
            alignment:
                "Owlin are typically neutral good, as they value wisdom and helping others.",
            heightRangeLow: 3.0,
            heightRangeHigh: 5.0,
            weightRangeLow: 35,
            weightRangeHigh: 85,
            alabastriaLore:
                "Owlin in Alabastria are found primarily in the forests of Kuriguer and the mountain regions of Bulsania, where their flight and stealth abilities make them excellent scouts and messengers. They often serve as aerial reconnaissance for the Huntbound Order.",
            playstyle:
                "Flying and stealthy characters who excel at reconnaissance and night operations. Perfect for players who want to be wise and mobile.",
            defaultCreatureSizeId: creatureSizes.small.id,
            languages: {
                connect: [{ id: languages.common.id }, { id: languages.owlin.id }],
        },
            /* traits: {
                connect: [
                    { id: raceTraits.darkvision_owlin.id },
                    { id: raceTraits.flight_owlin.id },
                    { id: raceTraits.keen_senses_owlin.id },
                    { id: raceTraits.silent_feathers_owlin.id },
                ],
            },
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.dex_two.id },
                    { id: raceAbilityScores.wis_one.id },
                ],
            }, */
            namesId: raceNames.owlin.id,
        }),
        plasmoid: await db.createRace({
            id: "race-plasmoid",
            name: "Plasmoid",
            //slug: "plasmoid",
            description:
                "Amorphous humanoids made of living ooze, capable of changing their shape and squeezing through tight spaces. Plasmoids are adaptable and resilient.",
            additionalProperties: { speed: "30 feet" },
            //age: "Plasmoids mature at the same rate as humans and live about as long.",
            ageAdulthood: 18,
            ageLifespan: 80,
            alignment:
                "Plasmoids can be of any alignment, as they are highly adaptable to their environment.",
            heightRangeLow: 5.0,
            heightRangeHigh: 6.0,
            weightRangeLow: 110,
            weightRangeHigh: 180,
            alabastriaLore:
                "Plasmoids in Alabastria are found in the swamps and underground regions of Kamalatman, where their amorphous nature makes them excellent infiltrators and scouts. They often serve as spies and information gatherers for the Huntbound Order.",
            playstyle:
                "Adaptable and resilient characters who excel at infiltration and survival. Perfect for players who want to be flexible and unique.",
            defaultCreatureSizeId: creatureSizes.medium.id,
            languages: {
                connect: [
                    { id: languages.common.id },
                    { id: languages.any_one.id },
                ],
            },
            /* traits: {
                connect: [
                    { id: raceTraits.amorphous_plasmoid.id },
                    { id: raceTraits.darkvision_plasmoid.id },
                    { id: raceTraits.hold_breath_plasmoid.id },
                    { id: raceTraits.natural_reach_plasmoid.id },
                    { id: raceTraits.shape_self_plasmoid.id },
                ],
            },
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.con_two.id },
                    { id: raceAbilityScores.any_one.id },
                ],
            }, */
            namesId: raceNames.plasmoid.id,
        }),
        reborn: await db.createRace({
            id: "race-reborn",
            name: "Reborn",
            //slug: "reborn",
            description:
                "Humanoids who have died and returned to life, bearing the marks of their death and possessing unique abilities. Reborn are often outcasts but have unique perspectives on life and death.",
            additionalProperties: { speed: "30 feet" },
            //age: "Reborn don't age naturally and can live indefinitely, though their original race's lifespan may still apply.",
            ageAdulthood: 18,
            ageLifespan: 80,
            alignment:
                "Reborn can be of any alignment, as their death and rebirth often changes their perspective on life.",
            heightRangeLow: 5.0,
            heightRangeHigh: 6.0,
            weightRangeLow: 110,
            weightRangeHigh: 180,
            alabastriaLore:
                "Reborn in Alabastria are found throughout all continents, often serving as advisors and guides due to their unique perspective on life and death. They often work with the Huntbound Order as spiritual advisors and those who understand the nature of mortality.",
            playstyle:
                "Unique characters with death-defying abilities and unique perspectives. Perfect for players who want to be mysterious and otherworldly.",
            defaultCreatureSizeId: creatureSizes.medium.id,
            languages: {
                connect: [
                    { id: languages.common.id },
                    { id: languages.any_one.id },
                ],
            },
            /* traits: {
                connect: [
                    { id: raceTraits.ancestral_legacy_reborn.id },
                    { id: raceTraits.deathless_nature_reborn.id },
                    { id: raceTraits.knowledge_from_a_past_life_reborn.id },
                    { id: raceTraits.souls_gift_reborn.id },
                ],
            },
            abilityScoreIncreases: {
                connect: [{ id: raceAbilityScores.any_one.id }],
        }, */
            namesId: raceNames.reborn.id,
        }),
        satyr: await db.createRace({
            id: "race-satyr",
            name: "Satyr",
            //slug: "satyr",
            description:
                "Fey humanoids with goat-like features known for their revelry, music, and connection to nature. Satyrs are joyful, musical, and have a strong connection to the Feywild.",
            additionalProperties: { speed: "35 feet" },
            //age: "Satyrs mature at the same rate as humans but can live up to 200 years.",
            ageAdulthood: 18,
            ageLifespan: 200,
            alignment:
                "Satyrs are typically chaotic good, as they value freedom and joy.",
            heightRangeLow: 5.0,
            heightRangeHigh: 6.0,
            weightRangeLow: 110,
            weightRangeHigh: 180,
            alabastriaLore:
                "Satyrs in Alabastria are found primarily in the magical forests of Kuriguer, where their fey nature and musical abilities make them excellent entertainers and guides. They often serve as bards and entertainers for the Huntbound Order.",
            playstyle:
                "Joyful and musical characters who excel at entertainment and social interaction. Perfect for players who want to be charismatic and fun-loving.",
            defaultCreatureSizeId: creatureSizes.medium.id,
            languages: {
                connect: [{ id: languages.common.id }, { id: languages.sylvan.id }],
        },
            /* traits: {
                connect: [
                    { id: raceTraits.fey_satyr.id },
                    { id: raceTraits.ram_satyr.id },
                    { id: raceTraits.magic_resistance_satyr.id },
                    { id: raceTraits.mirthful_leaps_satyr.id },
                    { id: raceTraits.reveler_satyr.id },
                ],
            },
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.dex_two.id },
                    { id: raceAbilityScores.cha_one.id },
                ],
            }, */
            namesId: raceNames.satyr.id,
        }),
        shifter: await db.createRace({
            id: "race-shifter",
            name: "Shifter",
            //slug: "shifter",
            description:
                "Humanoids with the ability to partially transform into their animal totems. Shifters are connected to nature and have enhanced senses and abilities.",
            additionalProperties: { speed: "30 feet" },
            //age: "Shifters mature at the same rate as humans and live about as long.",
            ageAdulthood: 18,
            ageLifespan: 80,
            alignment:
                "Shifters are typically neutral, as they are driven by their animal instincts and personal desires.",
            heightRangeLow: 5.0,
            heightRangeHigh: 6.0,
            weightRangeLow: 110,
            weightRangeHigh: 180,
            alabastriaLore:
                "Shifters in Alabastria are found throughout all continents, often serving as scouts and rangers due to their animal-like abilities. They often work with the Huntbound Order as trackers and wilderness guides.",
            playstyle:
                "Nature-connected characters with animal-like abilities and enhanced senses. Perfect for players who want to be wild and instinctive.",
            defaultCreatureSizeId: creatureSizes.medium.id,
            languages: {
                connect: [
                    { id: languages.common.id },
                    { id: languages.any_one.id },
                ],
            },
            /* traits: {
                connect: [
                    { id: raceTraits.darkvision_shifter.id },
                    { id: raceTraits.shifting_shifter.id },
                ],
            },
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.dex_two.id },
                    { id: raceAbilityScores.any_one.id },
                ],
            }, */
            namesId: raceNames.shifter.id,
        }),
        simic_hybrid: await db.createRace({
            id: "race-simic-hybrid",
            name: "Simic Hybrid",
            //slug: "simic-hybrid",
            description:
                "Humanoids who have been enhanced with animal traits through magical experimentation. Simic Hybrids are unique individuals with both human and animal characteristics.",
            additionalProperties: { speed: "30 feet" },
            //age: "Simic Hybrids mature at the same rate as humans and live about as long.",
            ageAdulthood: 18,
            ageLifespan: 80,
            alignment:
                "Simic Hybrids can be of any alignment, as their enhancements don't determine their moral outlook.",
            heightRangeLow: 5.0,
            heightRangeHigh: 6.0,
            weightRangeLow: 110,
            weightRangeHigh: 180,
            alabastriaLore:
                "Simic Hybrids in Alabastria are found primarily in the magical academies of Kuriguer, where their unique enhancements make them valuable for research and experimentation. They often serve as test subjects and researchers for the Huntbound Order.",
            playstyle:
                "Enhanced characters with unique animal traits and abilities. Perfect for players who want to be unique and experimental.",
            defaultCreatureSizeId: creatureSizes.medium.id,
            languages: {
                connect: [
                    { id: languages.common.id },
                    { id: languages.any_one.id },
                ],
            },
            /* traits: {
                connect: [
                    { id: raceTraits.animal_enhancement_simic_hybrid.id },
                    { id: raceTraits.darkvision_simic_hybrid.id },
                ],
            },
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.con_two.id },
                    { id: raceAbilityScores.any_one.id },
                ],
            }, */
            namesId: raceNames.simic_hybrid.id,
        }),
        tabaxi: await db.createRace({
            id: "race-tabaxi",
            name: "Tabaxi",
            //slug: "tabaxi",
            description:
                "Cat-like humanoids known for their agility, curiosity, and love of shiny objects. Tabaxi are graceful, stealthy, and have excellent reflexes.",
            additionalProperties: { speed: "30 feet" },
            //age: "Tabaxi mature at the same rate as humans and have lifespans equivalent to humans.",
            ageAdulthood: 18,
            ageLifespan: 80,
            alignment:
                "Tabaxi are typically chaotic good, as they value freedom and helping others.",
            heightRangeLow: 5.0,
            heightRangeHigh: 6.0,
            weightRangeLow: 110,
            weightRangeHigh: 180,
            alabastriaLore:
                "Tabaxi in Alabastria are found throughout all continents, often serving as scouts and messengers due to their agility and curiosity. They often work with the Huntbound Order as trackers and information gatherers.",
            playstyle:
                "Agile and curious characters who excel at stealth and exploration. Perfect for players who want to be graceful and inquisitive.",
            defaultCreatureSizeId: creatureSizes.medium.id,
            languages: {
                connect: [{ id: languages.common.id }, { id: languages.tabaxi.id }],
        },
            /* traits: {
                connect: [
                    { id: raceTraits.darkvision_tabaxi.id },
                    { id: raceTraits.feline_agility_tabaxi.id },
                    { id: raceTraits.cats_claws_tabaxi.id },
                    { id: raceTraits.cats_talent_tabaxi.id },
                ],
            },
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.dex_two.id },
                    { id: raceAbilityScores.cha_one.id },
                ],
            }, */
            namesId: raceNames.tabaxi.id,
        }),
        thri_kreen: await db.createRace({
            id: "race-thri-kreen",
            name: "Thri-kreen",
            //slug: "thri-kreen",
            description:
                "Insectoid humanoids with four arms and a chitinous exoskeleton. Thri-kreen are fast, agile, and have unique physical abilities.",
            additionalProperties: { speed: "30 feet" },
            //age: "Thri-kreen mature at the same rate as humans and live about as long.",
            ageAdulthood: 18,
            ageLifespan: 80,
            alignment:
                "Thri-kreen are typically lawful neutral, as they value order and efficiency.",
            heightRangeLow: 5.0,
            heightRangeHigh: 6.0,
            weightRangeLow: 110,
            weightRangeHigh: 180,
            alabastriaLore:
                "Thri-kreen in Alabastria are found primarily in the desert regions of Kamalatman and the mountain regions of Bulsania, where their unique abilities make them excellent scouts and warriors. They often serve as elite operatives for the Huntbound Order.",
            playstyle:
                "Unique insectoid characters with multiple arms and special abilities. Perfect for players who want to be alien and efficient.",
            defaultCreatureSizeId: creatureSizes.medium.id,
            languages: {
                connect: [
                    { id: languages.common.id },
                    { id: languages.thri_kreen.id },
                ],
            },
            /* traits: {
                connect: [
                    { id: raceTraits.chameleon_carapace_thri_kreen.id },
                    { id: raceTraits.darkvision_thri_kreen.id },
                    { id: raceTraits.extra_arms_thri_kreen.id },
                    { id: raceTraits.sleepless_thri_kreen.id },
                    { id: raceTraits.thri_kreen_weapon_training_thri_kreen.id },
                ],
            },
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.dex_two.id },
                    { id: raceAbilityScores.wis_one.id },
                ],
            }, */
            namesId: raceNames.thri_kreen.id,
        }),
        tiefling: await db.createRace({
            id: "race-tiefling",
            name: "Tiefling",
            //slug: "tiefling",
            description:
                "Humanoids with infernal heritage, bearing the mark of their fiendish ancestors. Tieflings are often outcasts but possess unique magical abilities.",
            additionalProperties: { speed: "30 feet" },
            //age: "Tieflings mature at the same rate as humans but live a few years longer, up to 120 years.",
            ageAdulthood: 18,
            ageLifespan: 120,
            alignment:
                "Tieflings are typically chaotic neutral, as they are driven by their own desires and instincts.",
            heightRangeLow: 5.0,
            heightRangeHigh: 6.0,
            weightRangeLow: 110,
            weightRangeHigh: 180,
            alabastriaLore:
                "Tieflings in Alabastria are found throughout all continents, often serving as advisors and spellcasters due to their infernal heritage and magical abilities. They often work with the Huntbound Order as magical specialists and those who understand the nature of fiends.",
            playstyle:
                "Magical characters with infernal heritage and unique abilities. Perfect for players who want to be mysterious and magical.",
            defaultCreatureSizeId: creatureSizes.medium.id,
            languages: {
                connect: [{ id: languages.common.id }, { id: languages.infernal.id }],
        },
            /* traits: {
                connect: [
                    { id: raceTraits.darkvision_tiefling.id },
                    { id: raceTraits.hellish_resistance_tiefling.id },
                    { id: raceTraits.infernal_legacy_tiefling.id },
                ],
            },
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.cha_two.id },
                    { id: raceAbilityScores.int_one.id },
                ],
            }, */
            namesId: raceNames.tiefling.id,
        }),
        tortle: await db.createRace({
            id: "race-tortle",
            name: "Tortle",
            //slug: "tortle",
            description:
                "Turtle-like humanoids known for their natural armor and connection to water. Tortles are wise, patient, and have excellent defensive abilities.",
            additionalProperties: { speed: "30 feet" },
            //age: "Tortles reach adulthood by age 15 and live to be around 50 years old.",
            ageAdulthood: 15,
            ageLifespan: 50,
            alignment:
                "Tortles are typically lawful good, as they value order, justice, and protecting others.",
            heightRangeLow: 5.0,
            heightRangeHigh: 6.0,
            weightRangeLow: 200,
            weightRangeHigh: 280,
            alabastriaLore:
                "Tortles in Alabastria are found primarily in the coastal regions of Kuriguer and the waterways of Kamalatman, where their natural abilities make them excellent swimmers and protectors. They often serve as guardians and healers for the Huntbound Order.",
            playstyle:
                "Defensive and wise characters who excel at protection and healing. Perfect for players who want to be patient and protective.",
            defaultCreatureSizeId: creatureSizes.medium.id,
            languages: {
                connect: [{ id: languages.common.id }, { id: languages.aquan.id }],
        },
            /* traits: {
                connect: [
                    { id: raceTraits.claws_tortle.id },
                    { id: raceTraits.hold_breath_tortle.id },
                    { id: raceTraits.natural_armor_tortle.id },
                    { id: raceTraits.shell_defense_tortle.id },
                    { id: raceTraits.survival_instinct_tortle.id },
                ],
            },
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.str_two.id },
                    { id: raceAbilityScores.wis_one.id },
                ],
            }, */
            namesId: raceNames.tortle.id,
        }),
        triton: await db.createRace({
            id: "race-triton",
            name: "Triton",
            //slug: "triton",
            description:
                "Aquatic humanoids with a strong connection to the sea and water magic. Tritons are noble, proud, and have excellent swimming abilities.",
            additionalProperties: { speed: "30 feet" },
            //age: "Tritons reach maturity around 15 and can live up to 200 years.",
            ageAdulthood: 15,
            ageLifespan: 200,
            alignment:
                "Tritons are typically lawful good, as they value order, justice, and protecting others.",
            heightRangeLow: 5.0,
            heightRangeHigh: 6.0,
            weightRangeLow: 110,
            weightRangeHigh: 180,
            alabastriaLore:
                "Tritons in Alabastria are found primarily in the coastal regions of Kuriguer and the waterways of Kamalatman, where their aquatic abilities make them excellent sailors and water guardians. They often serve as maritime specialists for the Huntbound Order.",
            playstyle:
                "Aquatic characters with water magic and swimming abilities. Perfect for players who want to be noble and water-focused.",
            defaultCreatureSizeId: creatureSizes.medium.id,
            languages: {
                connect: [
                    { id: languages.common.id },
                    { id: languages.primordial.id },
                ],
            },
            /* traits: {
                connect: [
                    { id: raceTraits.amphibious_triton.id },
                    { id: raceTraits.control_air_and_water_triton.id },
                    { id: raceTraits.emissary_of_the_sea_triton.id },
                    { id: raceTraits.guardians_of_the_depths_triton.id },
                    { id: raceTraits.swimming_speed_triton.id },
                ],
            },
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.str_one.id },
                    { id: raceAbilityScores.con_one.id },
                    { id: raceAbilityScores.cha_one.id },
                ],
            }, */
            namesId: raceNames.triton.id,
        }),
        vedalken: await db.createRace({
            id: "race-vedalken",
            name: "Vedalken",
            //slug: "vedalken",
            description:
                "Blue-skinned humanoids known for their intelligence, precision, and connection to knowledge. Vedalken are analytical, methodical, and have excellent problem-solving abilities.",
            additionalProperties: { speed: "30 feet" },
            //age: "Vedalken mature at the same rate as humans and live about as long.",
            ageAdulthood: 18,
            ageLifespan: 80,
            alignment:
                "Vedalken are typically lawful neutral, as they value order, logic, and efficiency.",
            heightRangeLow: 5.0,
            heightRangeHigh: 6.0,
            weightRangeLow: 110,
            weightRangeHigh: 180,
            alabastriaLore:
                "Vedalken in Alabastria are found primarily in the magical academies of Kuriguer and the research facilities of Kamalatman, where their analytical abilities make them excellent scholars and researchers. They often serve as advisors and researchers for the Huntbound Order.",
            playstyle:
                "Intelligent and analytical characters who excel at problem-solving and research. Perfect for players who want to be methodical and precise.",
            defaultCreatureSizeId: creatureSizes.medium.id,
            languages: {
                connect: [{ id: languages.common.id }, { id: languages.vedalken.id }],
        },
            /* traits: {
                connect: [
                    { id: raceTraits.darkvision_vedalken.id },
                    { id: raceTraits.vedalken_dispassion_vedalken.id },
                    { id: raceTraits.partially_amphibious_vedalken.id },
                    { id: raceTraits.tireless_precision_vedalken.id },
                ],
            },
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.int_two.id },
                    { id: raceAbilityScores.wis_one.id },
                ],
            }, */
            namesId: raceNames.vedalken.id,
        }),
        warforged: await db.createRace({
            id: "race-warforged",
            name: "Warforged",
            //slug: "warforged",
            description:
                "Constructed humanoids created for war but now seeking their own purpose. Warforged are durable, adaptable, and have unique mechanical abilities.",
            additionalProperties: { speed: "30 feet" },
            //age: "Warforged don't age and can live indefinitely if properly maintained.",
            ageAdulthood: 0,
            ageLifespan: 0,
            alignment:
                "Warforged can be of any alignment, as they are driven by their own choices and experiences.",
            heightRangeLow: 5.0,
            heightRangeHigh: 6.0,
            weightRangeLow: 110,
            weightRangeHigh: 180,
            alabastriaLore:
                "Warforged in Alabastria are found throughout all continents, often serving as guards and warriors due to their constructed nature and durability. They often work with the Huntbound Order as elite operatives and those who understand the nature of constructs.",
            playstyle:
                "Constructed characters with unique mechanical abilities and durability. Perfect for players who want to be artificial and adaptable.",
            defaultCreatureSizeId: creatureSizes.medium.id,
            languages: {
                connect: [
                    { id: languages.common.id },
                    { id: languages.any_one.id },
                ],
            },
            /* traits: {
                connect: [
                    { id: raceTraits.constructed_resilience_warforged.id },
                    { id: raceTraits.sentrys_rest_warforged.id },
                    { id: raceTraits.integrated_protection_warforged.id },
                    { id: raceTraits.specialized_design_warforged.id },
                ],
            },
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.con_two.id },
                    { id: raceAbilityScores.any_one.id },
                ],
            }, */
            namesId: raceNames.warforged.id,
        }),
        yuan_ti: await db.createRace({
            id: "race-yuan-ti",
            name: "Yuan-ti",
            //slug: "yuan-ti",
            description:
                "Snake-like humanoids with serpentine features and magical abilities. Yuan-ti are often outcasts but possess unique magical powers and resistance to magic.",
            additionalProperties: { speed: "30 feet" },
            //age: "Yuan-ti mature at the same rate as humans and live up to 120 years.",
            ageAdulthood: 18,
            ageLifespan: 120,
            alignment:
                "Yuan-ti are typically chaotic evil, as they care only for their own needs and are willing to use any means to achieve their goals.",
            heightRangeLow: 5.0,
            heightRangeHigh: 6.0,
            weightRangeLow: 110,
            weightRangeHigh: 180,
            alabastriaLore:
                "Yuan-ti in Alabastria are found primarily in the swamps and underground regions of Kamalatman, where their serpentine nature makes them excellent infiltrators and spellcasters. They often serve as spies and magical specialists for the Huntbound Order.",
            playstyle:
                "Magical characters with serpentine heritage and unique abilities. Perfect for players who want to be mysterious and magical.",
            defaultCreatureSizeId: creatureSizes.medium.id,
            languages: {
                connect: [
                    { id: languages.common.id },
                    { id: languages.abyssal.id },
                    { id: languages.draconic.id },
                ],
            },
            /* traits: {
                connect: [
                    { id: raceTraits.darkvision_yuan_ti.id },
                    { id: raceTraits.magic_resistance_yuan_ti.id },
                    { id: raceTraits.poison_immunity_yuan_ti.id },
                    { id: raceTraits.serpentine_magic_yuan_ti.id },
                ],
            },
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.cha_two.id },
                    { id: raceAbilityScores.int_one.id },
                ],
            }, */
            namesId: raceNames.yuan_ti.id,
        }),
        gith: await db.createRace({
            id: "race-gith",
            name: "Gith",
            //slug: "gith",
            description:
                "Ancient warriors who freed themselves from mind flayer slavery through sheer will and martial prowess. The gith are a proud people divided into two distinct cultures, each following their own path to ensure they never fall into bondage again.",
            additionalProperties: { speed: "30 feet" },
            //age: "Gith reach adulthood in their late teens and live to be around 100 years old.",
            ageAdulthood: 18,
            ageLifespan: 100,
            alignment:
                "Gith alignment varies by culture. Githyanki tend toward lawful evil, while githzerai lean toward lawful neutral. Individual gith may be of any alignment.",
            heightRangeLow: 5.5,
            heightRangeHigh: 6.5,
            weightRangeLow: 120,
            weightRangeHigh: 180,
            alabastriaLore:
                "Gith are rare in Alabastria, as most reside in the Astral Plane or remote monasteries across the planes. Those who do appear are often planar travelers, seeking ancient knowledge or hunting mind flayers. Some serve as mercenaries or advisors to those who understand the value of their combat expertise and psionic abilities.",
            playstyle:
                "Warrior-philosophers with psionic powers and a martial heritage. Perfect for players who want disciplined combatants with a mysterious planar origin and innate mental abilities.",
            defaultCreatureSizeId: creatureSizes.medium.id,
            languages: {
                connect: [
                    { id: languages.common.id },
                    { id: languages.gith.id },
                ],
            },
            /* traits: {
                connect: [
                    { id: raceTraits.gith_psionics.id },
                    { id: raceTraits.mental_discipline.id },
                    { id: raceTraits.planar_knowledge.id },
                ],
            },
            abilityScoreIncreases: {
                connect: [
                    { id: raceAbilityScores.int_one.id },
                ],
            }, */
            namesId: raceNames.gith.id,
        }),
    }
}