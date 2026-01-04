import { Prisma, AbilityScores } from "@prismagen/client";
import * as db from "@lib/db-seed";

type RaceAbilityScorePayload = Prisma.RaceAbilityScoreGetPayload<{}>;
export interface RaceAbilityScores {
    dex_one: RaceAbilityScorePayload;
    dex_two: RaceAbilityScorePayload;
    cha_one: RaceAbilityScorePayload;
    cha_two: RaceAbilityScorePayload;
    wis_one: RaceAbilityScorePayload;
    wis_two: RaceAbilityScorePayload;
    int_one: RaceAbilityScorePayload;
    int_two: RaceAbilityScorePayload;
    con_one: RaceAbilityScorePayload;
    con_two: RaceAbilityScorePayload;
    str_one: RaceAbilityScorePayload;
    str_two: RaceAbilityScorePayload;
    any_one: RaceAbilityScorePayload;
    any_two: RaceAbilityScorePayload;
}

export async function seedRaceAbilityScores(): Promise<RaceAbilityScores> {
    return {
        dex_one: await db.createRaceAbilityScore({
            id: "race-ability-score-dex-one",
            ability: AbilityScores.DEXTERITY,
            modifier: 1
        }),
        dex_two: await db.createRaceAbilityScore({
            id: "race-ability-score-dex-two",
            ability: AbilityScores.DEXTERITY,
            modifier: 2
        }),
        cha_one: await db.createRaceAbilityScore({
            id: "race-ability-score-cha-one",
            ability: AbilityScores.CHARISMA,
            modifier: 1
        }),
        cha_two: await db.createRaceAbilityScore({
            id: "race-ability-score-cha-two",
            ability: AbilityScores.CHARISMA,
            modifier: 2
        }),
        wis_one: await db.createRaceAbilityScore({
            id: "race-ability-score-wis-one",
            ability: AbilityScores.WISDOM,
            modifier: 1
        }),
        wis_two: await db.createRaceAbilityScore({
            id: "race-ability-score-wis-two",
            ability: AbilityScores.WISDOM,
            modifier: 2
        }),
        int_one: await db.createRaceAbilityScore({
            id: "race-ability-score-int-one",
            ability: AbilityScores.INTELLIGENCE,
            modifier: 1
        }),
        int_two: await db.createRaceAbilityScore({
            id: "race-ability-score-int-two",
            ability: AbilityScores.INTELLIGENCE,
            modifier: 2
        }),
        con_one: await db.createRaceAbilityScore({
            id: "race-ability-score-con-one",
            ability: AbilityScores.CONSTITUTION,
            modifier: 1
        }),
        con_two: await db.createRaceAbilityScore({
            id: "race-ability-score-con-two",
            ability: AbilityScores.CONSTITUTION,
            modifier: 2
        }),
        str_one: await db.createRaceAbilityScore({
            id: "race-ability-score-str-one",
            ability: AbilityScores.STRENGTH,
            modifier: 1
        }),
        str_two: await db.createRaceAbilityScore({
            id: "race-ability-score-str-two",
            ability: AbilityScores.STRENGTH,
            modifier: 2
        }),
        any_one: await db.createRaceAbilityScore({
            id: "race-ability-score-any-one",
            ability: AbilityScores.ANY_OTHER,
            modifier: 1
        }),
        any_two: await db.createRaceAbilityScore({
            id: "race-ability-score-any-two",
            ability: AbilityScores.ANY_OTHER,
            modifier: 2
        })
    }
}