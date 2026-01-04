import { Prisma } from "@prismagen/client";
import * as db from "@lib/db-seed";

type ClassRolePayload = Prisma.ClassRoleGetPayload<{}>;
export interface ClassRoles {
    tank: ClassRolePayload;
    striker: ClassRolePayload;
    damage_dealer: ClassRolePayload;
    controller: ClassRolePayload;
    healer: ClassRolePayload;
    support: ClassRolePayload;
    utility: ClassRolePayload;
    scout: ClassRolePayload;
    shapeshifter: ClassRolePayload;
    summoner: ClassRolePayload;
    blaster: ClassRolePayload;
    defender: ClassRolePayload;
    face: ClassRolePayload;
}

export async function seedClassRoles(): Promise<ClassRoles> {
    return {
        tank: await db.createClassRole({
            id: "class-role-tank",
            name: "Tank",
            purpose: "Absorb damage and protect allies in combat.",
            keyTraits: [
                "Damage Mitigation",
                "Battlefield Presence",
                "Zone Control",
            ],
        }),
        striker: await db.createClassRole({
            id: "class-role-striker",
            name: "Striker",
            purpose: "Deal high damage to single targets.",
            keyTraits: [
                "Burst Damage",
                "Mobility",
                "Target Focus",
            ],
        }),
        damage_dealer: await db.createClassRole({
            id: "class-role-damage-dealer",
            name: "Damage Dealer",
            purpose: "Deal consistent damage across multiple turns or multiple targets.",
            keyTraits: [
                "Sustained Damage",
                "Area-of-Effect Options",
                "Reliable Output",
            ],
        }),
        controller: await db.createClassRole({
            id: "class-role-controller",
            name: "Controller",
            purpose: "Shape the battlefield by limiting enemy actions and movement.",
            keyTraits: [
                "Crowd Control",
                "Debuffs",
                "Battlefield Manipulation",
            ],
        }),
        healer: await db.createClassRole({
            id: "class-role-healer",
            name: "Healer",
            purpose: "Restore health and remove harmful conditions from allies.",
            keyTraits: [
                "Healing Output",
                "Condition Removal",
                "Emergency Recovery",
            ],
        }),
        support: await db.createClassRole({
            id: "class-role-support",
            name: "Support",
            purpose: "Enhance allies through buffs, bonuses, and tactical advantages.",
            keyTraits: [
                "Buffs",
                "Ally Synergy",
                "Resource Enhancement",
            ],
        }),
        utility: await db.createClassRole({
            id: "class-role-utility",
            name: "Utility",
            purpose: "Solve non-combat challenges and provide versatility in and out of combat.",
            keyTraits: [
                "Skill Expertise",
                "Exploration Tools",
                "Problem Solving",
            ],
        }),
        scout: await db.createClassRole({
            id: "class-role-scout",
            name: "Scout",
            purpose: "Gather information and secure advantageous positioning.",
            keyTraits: [
                "Stealth",
                "Reconnaissance",
                "Initiative Advantage",
            ],
        }),
        shapeshifter: await db.createClassRole({
            id: "class-role-shapeshifter",
            name: "Shapeshifter",
            purpose: "Adapt to situations by changing form or abilities.",
            keyTraits: [
                "Form Switching",
                "Role Flexibility",
                "Adaptive Combat Styles",
            ],
        }),
        summoner: await db.createClassRole({
            id: "class-role-summoner",
            name: "Summoner",
            purpose: "Control the battlefield through summoned creatures, minions, or conjured entities.",
            keyTraits: [
                "Minion Management",
                "Action Economy Advantage",
                "Battlefield Presence",
            ],
        }),
        blaster: await db.createClassRole({
            id: "class-role-blaster",
            name: "Blaster",
            purpose: "Deal heavy area-of-effect damage using powerful offensive abilities or spells.",
            keyTraits: [
                "Area-of-Effect Damage",
                "High Burst Output",
                "Limited Sustained Damage",
            ],
        }),
        defender: await db.createClassRole({
            id: "class-role-defender",
            name: "Defender",
            purpose: "Protect allies by combining durability with battlefield control.",
            keyTraits: [
                "Damage Mitigation",
                "Enemy Control",
                "Frontline Presence",
            ],
        }),
        face: await db.createClassRole({
            id: "class-role-face",
            name: "Face",
            purpose: "Handle social encounters and negotiations on behalf of the party.",
            keyTraits: [
                "High Charisma",
                "Persuasion and Deception",
                "Social Influence",
            ],
        }),
    }
}