import { CreatureSize, Prisma } from "@prismagen/client";
import * as db from "@lib/db-seed";
import { CreatureSizes } from "./index";

type CreatureTypePayload = Prisma.CreatureTypeGetPayload<{}>;
export interface CreatureTypes {
    aberration: CreatureTypePayload;
    beast: CreatureTypePayload;
    celestial: CreatureTypePayload;
    construct: CreatureTypePayload;
    dragon: CreatureTypePayload;
    elemental: CreatureTypePayload;
    fey: CreatureTypePayload;
    fiend: CreatureTypePayload;
    giant: CreatureTypePayload;
    humanoid: CreatureTypePayload;
    monstrosity: CreatureTypePayload;
    ooze: CreatureTypePayload;
    plant: CreatureTypePayload;
    undead: CreatureTypePayload;
}

interface SeedCreatureTypesParams {
    creatureSizes: CreatureSizes;
}
export async function seedCreatureTypes(params: SeedCreatureTypesParams): Promise<CreatureTypes> {
    const { creatureSizes } = params;
    return {
        aberration: await db.createCreatureType({
            id: "creature-type-aberration",
            name: "Aberration",
            //slug: "creature-type-aberration",
            description: "Creatures that defy natural law and understanding, often born from magical experimentation or planar corruption.",
            habits: "Aberrations are unpredictable and alien in their thinking. They often lurk in dark, isolated places and prefer to ambush their prey. Many are drawn to areas of magical instability or planar rifts.",
            tactics: "Aberrations typically use their bizarre anatomies and psionic abilities to confuse and terrify opponents. They often attack from unexpected angles and use mind-affecting abilities to turn allies against each other. Many can phase through solid matter or exist partially in other planes.",
            weaknesses: "Most aberrations are vulnerable to psychic damage and mind-affecting spells. They often have poor physical defenses despite their otherworldly abilities. Many are susceptible to radiant damage and can be banished or contained with proper magical wards.",
            commonSizes: {
                connect: [
                    { id: creatureSizes.medium.id },
                    { id: creatureSizes.large.id }
                ]
            }
        }),
        beast: await db.createCreatureType({
            id: "creature-type-beast",
            name: "Beast",
            //slug: "creature-type-beast",
            description: "Wild creatures both natural and magical, ranging from ordinary animals to fantastical beasts that roam the wilderness.",
            habits: "Beasts follow natural instincts and territorial patterns. They establish hunting grounds, mark territory with scent or claw marks, and often hunt at specific times of day. Many are protective of their young and will fight more ferociously when cornered.",
            tactics: "Beasts rely on natural weapons like claws, teeth, and horns. They use pack tactics when in groups, with some members flanking while others attack head-on. Many use their superior senses to track and ambush prey, often attacking from cover or above.",
            weaknesses: "Most beasts are vulnerable to fire and loud noises. They can be distracted by food or territorial displays. Many are susceptible to charm effects and can be calmed by druids or rangers with proper animal handling skills.",
            commonSizes: {
                connect: [
                    { id: creatureSizes.tiny.id },
                    { id: creatureSizes.small.id },
                    { id: creatureSizes.medium.id },
                    { id: creatureSizes.large.id },
                    { id: creatureSizes.huge.id }
                ]
            }
        }),
        celestial: await db.createCreatureType({
            id: "creature-type-celestial",
            name: "Celestial",
            //slug: "creature-type-celestial",
            description: "Beings of pure light and divine energy, often sent to protect the innocent or carry out divine will.",
            habits: "Celestials are drawn to areas of great virtue, holy sites, and places where evil threatens the innocent. They often appear during times of great need and prefer to work through mortal champions rather than directly intervening.",
            tactics: "Celestials fight with divine magic and radiant energy. They use their healing abilities to support allies and their smiting powers to destroy evil. Many can fly and use their mobility to outmaneuver ground-based opponents.",
            weaknesses: "Celestials are vulnerable to necrotic damage and can be banished by powerful evil magic. They are bound by divine law and cannot act against their nature. Some can be corrupted or turned to evil through prolonged exposure to negative energy.",
            commonSizes: {
                connect: [
                    { id: creatureSizes.medium.id },
                    { id: creatureSizes.large.id }
                ]
            }
        }),
        construct: await db.createCreatureType({
            id: "creature-type-construct",
            name: "Construct",
            //slug: "creature-type-construct",
            description: "Artificial beings created through magic or technology, ranging from simple golems to complex mechanical creatures.",
            habits: "Constructs are typically found guarding specific locations or performing assigned tasks. They follow their programming rigidly and rarely deviate from their intended purpose. Many are powered by magical cores that require periodic maintenance.",
            tactics: "Constructs fight with relentless determination, using their superior strength and durability to overwhelm opponents. They often use simple but effective combat patterns and can continue fighting even when severely damaged. Many have built-in weapons or magical abilities.",
            weaknesses: "Constructs are immune to poison and psychic effects but vulnerable to rust and acid damage. They can be disabled by targeting their control mechanisms or power sources. Many are susceptible to dispel magic and can be reprogrammed by skilled artificers.",
            commonSizes: {
                connect: [
                    { id: creatureSizes.medium.id },
                    { id: creatureSizes.medium.id },
                    { id: creatureSizes.large.id },
                ]
            }
        }),
        dragon: await db.createCreatureType({
            id: "creature-type-dragon",
            name: "Dragon",
            //slug: "creature-type-dragon",
            description: "Ancient, powerful reptilian creatures of immense intelligence and magical ability, often hoarding treasure and knowledge.",
            habits: "Dragons are territorial and establish lairs in remote, defensible locations. They hoard treasure and magical items, often using them to enhance their power. Many dragons are highly intelligent and can be negotiated with, though they are proud and easily offended.",
            tactics: "Dragons use their breath weapons to devastating effect, often opening combat with a breath attack. They combine aerial mobility with powerful melee attacks, using their size and strength to dominate the battlefield. Many can cast spells and use their hoard's magic items.",
            weaknesses: "Each dragon type has specific elemental vulnerabilities. Most dragons have soft underbelly scales that are easier to penetrate. They are vulnerable to attacks that target their wings or eyes. Many can be affected by spells that target their pride or greed.",
            commonSizes: {
                connect: [
                    { id: creatureSizes.large.id },
                    { id: creatureSizes.huge.id },
                ]
            }
        }),
        elemental: await db.createCreatureType({
            id: "creature-type-elemental",
            name: "Elemental",
            //slug: "creature-type-elemental",
            description: "Beings of pure elemental energy - fire, water, earth, and air - often summoned or bound to specific locations.",
            habits: "Elementals are drawn to areas that match their elemental nature. Fire elementals seek heat and flame, water elementals are found near bodies of water, earth elementals prefer rocky terrain, and air elementals favor high places and open skies.",
            tactics: "Elementals use their elemental powers to devastating effect, often creating environmental hazards. They can merge with their element to become harder to hit and can create elemental effects that persist after they're gone. Many can summon smaller elementals to aid them.",
            weaknesses: "Each elemental type is vulnerable to its opposing element. Fire elementals are weak to water, water to fire, earth to air, and air to earth. They can be banished or dispelled with the right magic. Many are bound to specific locations and cannot travel far from their source.",
            commonSizes: {
                connect: [
                    { id: creatureSizes.medium.id },
                    { id: creatureSizes.large.id },
                ]
            }
        }),
        fey: await db.createCreatureType({
            id: "creature-type-fey",
            name: "Fey",
            //slug: "creature-type-fey",
            description: "Magical creatures of the natural world, often capricious and dangerous, dwelling in enchanted forests and glades.",
            habits: "Fey creatures are drawn to areas of natural beauty and magical energy. They often establish courts in enchanted groves and are most active during twilight hours. Many are bound by ancient pacts and cannot break their word once given.",
            tactics: "Fey use charm and illusion magic to confuse and mislead opponents. They often fight in groups, using their superior mobility and magical abilities to outmaneuver enemies. Many can phase between the material plane and the Feywild.",
            weaknesses: "Fey creatures are vulnerable to cold iron weapons and can be bound by proper magical wards. They are susceptible to spells that target their nature and can be banished back to the Feywild. Many are bound by their word and cannot break promises.",
            commonSizes: {
                connect: [
                    { id: creatureSizes.tiny.id },
                    { id: creatureSizes.small.id },
                ]
            }
        }),
        fiend: await db.createCreatureType({
            id: "creature-type-fiend",
            name: "Fiend",
            //slug: "creature-type-fiend",
            description: "Creatures from the lower planes, often demonic or devilish in nature, seeking to corrupt and destroy.",
            habits: "Fiends are drawn to areas of corruption, suffering, and evil. They often establish cults and corrupt mortals to do their bidding. Many are bound by contracts and cannot break their word, though they will exploit every loophole.",
            tactics: "Fiends use fear, corruption, and overwhelming force to defeat opponents. They often fight in groups, with weaker fiends supporting stronger ones. Many can summon other fiends and use their infernal powers to create lasting effects.",
            weaknesses: "Fiends are vulnerable to radiant damage and can be banished with holy magic. They are bound by their nature and cannot act against their alignment. Many can be bound by proper magical wards and are vulnerable to weapons blessed by good deities.",
            commonSizes: {
                connect: [
                    { id: creatureSizes.medium.id },
                    { id: creatureSizes.large.id },
                ]
            }
        }),
        giant: await db.createCreatureType({
            id: "creature-type-giant",
            name: "Giant",
            //slug: "creature-type-giant",
            description: "Massive humanoid creatures of great strength and often primitive intelligence, dwelling in remote mountainous regions.",
            habits: "Giants are territorial and establish strongholds in remote areas. They often form tribes and follow a strict hierarchy. Many are drawn to areas rich in resources and will defend their territory fiercely.",
            tactics: "Giants use their massive size and strength to overwhelm opponents. They often fight with large weapons and can throw boulders or other heavy objects. Many use their reach advantage to keep enemies at bay while dealing devastating damage.",
            weaknesses: "Giants are often slow and less agile than smaller opponents. They can be outmaneuvered and are vulnerable to attacks that target their joints or eyes. Many are susceptible to charm effects and can be turned against each other.",
            commonSizes: {
                connect: [
                    { id: creatureSizes.huge.id }
                ]
            }
        }),
        humanoid: await db.createCreatureType({
            id: "creature-type-humanoid",
            name: "Humanoid",
            //slug: "creature-type-humanoid",
            description: "Intelligent humanoid creatures that pose threats through organization, cunning, and numbers - including bandits, cults, rebels, and hostile tribes.",
            habits: "Humanoid enemies often operate in organized groups with clear hierarchies. They establish bases of operations, gather intelligence, and plan coordinated attacks. Many are motivated by greed, power, or ideological beliefs.",
            tactics: "Humanoids use strategy, teamwork, and superior numbers to overcome opponents. They often employ hit-and-run tactics, ambushes, and psychological warfare. Many use magic items, poisons, and other tools to gain advantages.",
            weaknesses: "Humanoids are vulnerable to the same tactics they use against others. They can be turned against each other through bribery, intimidation, or magical influence. Many are susceptible to charm effects and can be captured for information.",
            commonSizes: {
                connect: [
                    { id: creatureSizes.medium.id }
                ]
            }
        }),
        monstrosity: await db.createCreatureType({
            id: "creature-type-monstrosity",
            name: "Monstrosity",
            //slug: "creature-type-monstrosity",
            description: "Creatures that defy natural classification, often the result of magical experimentation or planar corruption.",
            habits: "Monstrosities are often solitary creatures that lurk in remote or dangerous areas. They are drawn to places of magical instability and often exhibit behaviors that combine traits from multiple creature types.",
            tactics: "Monstrosities use their unique abilities and bizarre anatomies to surprise and overwhelm opponents. They often have multiple attack methods and can adapt their tactics based on their opponent's weaknesses. Many are highly aggressive and fight to the death.",
            weaknesses: "Monstrosities often have specific vulnerabilities based on their component creatures. Many are vulnerable to radiant damage and can be affected by spells that target their unnatural nature. They often have poor intelligence and can be outsmarted.",
            commonSizes: {
                connect: [
                    { id: creatureSizes.medium.id },
                    { id: creatureSizes.large.id }
                ]
            }
        }),
        ooze: await db.createCreatureType({
            id: "creature-type-ooze",
            name: "Ooze",
            //slug: "creature-type-ooze",
            description: "Amorphous, slithering creatures that move through the environment, often acidic or toxic in nature.",
            habits: "Oozes are drawn to dark, damp environments and often lurk in dungeons, caves, and underground areas. They are attracted to organic matter and will consume almost anything they can engulf. Many are slow-moving but persistent hunters.",
            tactics: "Oozes use their amorphous nature to squeeze through small spaces and surprise opponents. They often attack by engulfing their prey and dissolving them with acid. Many can split into smaller oozes when damaged, making them harder to eliminate completely.",
            weaknesses: "Oozes are vulnerable to fire and cold damage, which can slow or stop their movement. They are immune to most mental effects and cannot be charmed or frightened. Many can be destroyed by splitting them into pieces too small to survive.",
            commonSizes: {
                connect: [
                    { id: creatureSizes.small.id },
                    { id: creatureSizes.medium.id },
                    { id: creatureSizes.large.id }
                ]
            }
        }),
        plant: await db.createCreatureType({
            id: "creature-type-plant",
            name: "Plant",
            //slug: "creature-type-plant",
            description: "Vegetation that has gained consciousness and mobility, often carnivorous or magical in nature.",
            habits: "Plant creatures are rooted to specific locations and are most active during daylight hours. They often establish groves or forests where they can control the environment. Many are territorial and will defend their domain fiercely.",
            tactics: "Plant creatures use their natural weapons like thorns, vines, and roots to attack opponents. They often use their environment to their advantage, creating difficult terrain and using their reach to keep enemies at bay. Many can regenerate and are difficult to kill permanently.",
            weaknesses: "Plant creatures are vulnerable to fire damage and can be affected by spells that target plants. They are often immobile and can be outmaneuvered. Many are susceptible to spells that affect their growth or can be controlled by druids.",
            commonSizes: {
                connect: [
                    { id: creatureSizes.medium.id },
                    { id: creatureSizes.large.id }
                ]
            }
        }),
        undead: await db.createCreatureType({
            id: "creature-type-undead",
            name: "Undead",
            //slug: "creature-type-undead",
            description: "Creatures that have returned from death, often through necromancy or dark magic, seeking to spread their curse.",
            habits: "Undead creatures are drawn to areas of death, decay, and negative energy. They often lurk in graveyards, crypts, and battlefields. Many are bound to specific locations or objects and cannot travel far from their source.",
            tactics: "Undead use fear, paralysis, and life-draining abilities to weaken opponents. They often fight in groups and can raise fallen enemies as undead allies. Many are immune to most mental effects and cannot be charmed or frightened.",
            weaknesses: "Undead creatures are vulnerable to radiant damage and can be turned or destroyed by holy magic. They are often weak to fire and can be affected by spells that target undead. Many can be destroyed by finding and destroying their phylactery or source.",
            commonSizes: {
                connect: [
                    { id: creatureSizes.medium.id },
                ]
            }
        })
    }
}