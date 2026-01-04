import { Prisma, LegendaryCreatureThreatLevel } from "@prismagen/client";
import * as db from "@lib/db-seed";
import { Continents, CreatureSizes, CreatureTypes } from "./index";

type LegendaryCreaturePayload = Prisma.LegendaryCreatureGetPayload<{}>;
export interface LegendaryCreatures {
    malagaroth: LegendaryCreaturePayload;
    wyvern_queen_sylvara: LegendaryCreaturePayload;
    azrakul_the_crimson_cult_leader: LegendaryCreaturePayload;
    iron_golem_king: LegendaryCreaturePayload;
    shadow_stalker: LegendaryCreaturePayload;
    ancient_wyvern: LegendaryCreaturePayload;
    plague_lord: LegendaryCreaturePayload;
    shadowmaw_pack: LegendaryCreaturePayload;
    crimson_reaper: LegendaryCreaturePayload;
    iron_titan: LegendaryCreaturePayload;
    swamp_witch: LegendaryCreaturePayload;
    frost_wraith: LegendaryCreaturePayload;
    elemental_storm: LegendaryCreaturePayload;
    bandit_king: LegendaryCreaturePayload;
    fey_lord: LegendaryCreaturePayload;
    crystal_dragon: LegendaryCreaturePayload;
    cult_of_the_void: LegendaryCreaturePayload;
    swarm_queen: LegendaryCreaturePayload;
    time_wraith: LegendaryCreaturePayload;
    mountain_giant_chieftain: LegendaryCreaturePayload;
}

interface SeedLegendaryCreatureParams {
    continents: Continents;
    creatureSizes: CreatureSizes;
    creatureTypes: CreatureTypes;
}
export async function seedLegendaryCreatures(params: SeedLegendaryCreatureParams): Promise<LegendaryCreatures> {
    const { continents, creatureSizes, creatureTypes } = params;
    return {
        // Past
        malagaroth: await db.createLegendaryCreature({
            id: "legendary-creature-malagaroth-swamp-dragon",
            name: "Malagaroth the Swamp Dragon",
            description: "A massive black dragon that terrorized the swamplands for centuries, breathing clouds of toxic gas that turned the very air into poison. Its lair was a vast network of flooded caves beneath the swamps, where it hoarded the treasures of countless victims.",
            threatLevel: LegendaryCreatureThreatLevel.REGIONAL,
            isPast: true,
            defeatedBy: "Gorak Swampstrider",
            defeatedByTitle: "Supreme Ruler of Kamalatman",
            defeatStory: "During the Swamp Wars, when Gorak was in his 40s (793AB), he single-handedly defeated the dreaded Swamp Dragon Malagaroth, whose death throes created the vast swamplands that now bear his name. This victory earned him the respect of all three Kamalatman kingdoms, and he was chosen to marry Princess Elara of Katman, uniting the royal bloodlines.",
            legacy: "The dragon's death created the vast swamplands that now define the region, and its bones are said to still lie beneath the murky waters, occasionally causing the ground to tremble.",
            creatureSizeId: creatureSizes.huge.id,
            creatureTypeId: creatureTypes.dragon.id,
            continentId: continents.katman.id
        }),
        wyvern_queen_sylvara: await db.createLegendaryCreature({
            id: "legendary-creature-wyvern-queen-sylvara",
            name: "Wyvern Queen Sylvara",
            description: "A massive white wyvern with ice-blue scales that could freeze the very air with her breath. She led a vast migration of wyverns that threatened to overrun the northern continents, her intelligence and magical abilities making her nearly invincible.",
            threatLevel: LegendaryCreatureThreatLevel.GLOBAL,
            isPast: true,
            defeatedBy: "Thane Icewind",
            defeatedByTitle: "Legendary Frost Giant Slayer",
            defeatStory: "During the Great Wyvern Migration including the year 730AB, when the Wyvern Queen led her vast army north, Thane Icewind was a legendary warrior from the northern tribes. In the final battle against the Wyvern Queen, Thane was struck by her devastating frost breath, which should have killed him instantly. However, through sheer willpower and divine intervention from Tempus, he survived but was permanently transformed - his skin turned to the pale blue-gray of ice, his eyes became piercing ice-blue, and his very essence became bound to the frozen elements. This transformation made him the perfect leader for the harsh frozen lands, and he established the first Icebound Confederacy.",
            legacy: "The Wyvern Wars ended with her defeat, establishing the current alliance system between continents and making Thane a legendary figure across all of Alabastria.",
            creatureSizeId: creatureSizes.gargantuan.id,
            creatureTypeId: creatureTypes.dragon.id,
            continentId: continents.bulsania.id
        }),
        azrakul_the_crimson_cult_leader: await db.createLegendaryCreature({
            id: "legendary-creature-crimson-cult-leader-azrakul",
            name: "Azrakul the Crimson Cult Leader",
            description: "A charismatic tiefling warlock who led a massive cult that sought to open portals to the lower planes. His followers numbered in the thousands, and he had mastered dark magic that allowed him to command legions of fiends.",
            threatLevel: LegendaryCreatureThreatLevel.CONTINENTAL,
            isPast: true,
            defeatedBy: "Sir Aldric the Redeemer",
            defeatedByTitle: "Paladin of the Golden Order",
            defeatStory: "During the Great Wyvern Migration including the year 506AB, Sir Aldric the Redeemer was a legendary paladin who used his diplomatic skills and divine magic to infiltrate the cult, learning their plans and turning many of their members against their leader. Through careful negotiation and the promise of redemption, he convinced the cult's inner circle to betray their master, leading to the cult leader's capture and the cult's dissolution. This victory helped secure the alliance that would later allow the Treaty of Golden Fields to be brokered, and his methods of redemption through diplomacy became legendary, inspiring future leaders like Marcus Goldfield.",
            legacy: "The cult's stronghold was destroyed, and many former cultists were rehabilitated and reintegrated into society, proving that even the most lost souls can find redemption.",
            creatureSizeId: creatureSizes.medium.id,
            creatureTypeId: creatureTypes.humanoid.id,
            continentId: continents.bulsania.id
        }),
        iron_golem_king: await db.createLegendaryCreature({
            id: "legendary-creature-iron-golem-king",
            name: "The Iron Golem King",
            description: "A massive construct created by ancient dwarven artificers, standing over 20 feet tall and made entirely of enchanted iron. It had gained sentience and declared itself king of the volcanic region, enslaving the local population to mine materials for its ever-growing army of constructs.",
            threatLevel: LegendaryCreatureThreatLevel.REGIONAL,
            isPast: true,
            defeatedBy: "Svenrue Steelmore",
            defeatedByTitle: "Master of the Volcanic Forges",
            defeatStory: "Around 214AB, Svenrue Steelmore discovered the ancient control runes that had been used to create the Iron Golem King. Through careful study and magical expertise, she was able to reprogram the construct, turning it from a tyrant into a guardian that now protects the volcanic region from external threats.",
            legacy: "The Iron Golem King now serves as a guardian of the volcanic region, and its knowledge of ancient construct-making techniques has been preserved and taught to new generations of artificers.",
            creatureSizeId: creatureSizes.huge.id,
            creatureTypeId: creatureTypes.construct.id,
            continentId: continents.alatman.id
        }),
        shadow_stalker: await db.createLegendaryCreature({
            id: "legendary-creature-shadow-stalker",
            name: "The Shadow Stalker",
            description: "A creature that existed partially in the shadow plane, able to phase through solid matter and drain the life force from its victims. It had been created by a failed magical experiment and had been terrorizing the magical academies for decades.",
            threatLevel: LegendaryCreatureThreatLevel.CITY,
            isPast: true,
            defeatedBy: "Elara Moonwhisper",
            defeatedByTitle: "High Archmage of the Conclave",
            defeatStory: "Elara spent years researching the creature's nature and finally in 659AB discovered that it was bound to a specific shadow anchor. Through a complex ritual involving light magic and planar binding, she was able to banish the creature back to the shadow plane and seal the anchor, preventing its return.",
            legacy: "The magical academies now have better protections against planar creatures, and Elara's research into shadow magic has advanced the field significantly.",
            creatureSizeId: creatureSizes.medium.id,
            creatureTypeId: creatureTypes.aberration.id,
            continentId: continents.kuriguer.id
        }),
        ancient_wyvern: await db.createLegendaryCreature({
            id: "legendary-creature-ancient-wyvern",
            name: "The Ancient Wyvern",
            description: "A massive, ancient wyvern that had terrorized the central plains for decades, preying on caravans and settlements. This wyvern was larger and more intelligent than its kin, with scales as hard as steel and breath that could melt stone. It had learned to avoid large military forces and instead targeted isolated communities, making it nearly impossible to track and defeat.",
            threatLevel: LegendaryCreatureThreatLevel.REGIONAL,
            isPast: true,
            defeatedBy: "Tharos Raggenthraw",
            defeatedByTitle: "Guild Founder and Master of the Huntbound Order",
            defeatStory: "In 755AB, before founding the Huntbound Order, Tharos was a veteran of the Skratonian Alliance's military forces. After witnessing villages abandoned to monsters while soldiers fought foreign wars, he took matters into his own hands. He tracked the Ancient Wyvern for months, learning its patterns and weaknesses. In a legendary duel that lasted three days, Tharos used his divine connection to Tempus and his mastery of battle tactics to finally defeat the beast. This victory inspired him to found the Huntbound Order, dedicated to protecting the innocent from monsters that the regular military couldn't handle.",
            legacy: "The defeat of the Ancient Wyvern proved that dedicated monster hunters could succeed where armies failed. This victory directly led to the founding of the Huntbound Order, which has since become the premier organization for monster hunting across all of Alabastria.",
            creatureSizeId: creatureSizes.gargantuan.id,
            creatureTypeId: creatureTypes.dragon.id,
            continentId: continents.skratonia.id
        }),
        plague_lord: await db.createLegendaryCreature({
            id: "legendary-creature-plague-lord",
            name: "The Plague Lord",
            description: "A powerful lich who had mastered death magic and was spreading a magical plague across the continent in 312AB. The plague turned its victims into mindless undead, and the lich was using their souls to fuel his dark rituals.",
            threatLevel: LegendaryCreatureThreatLevel.CONTINENTAL,
            isPast: true,
            defeatedBy: "The Radiant Paladin",
            defeatedByTitle: "Champion of the Light",
            defeatStory: "The Radiant Paladin, whose true name has been lost to history, led a crusade against the Plague Lord, gathering paladins and clerics from across the continent. Through divine magic and sheer determination, they were able to destroy the lich's phylactery and banish his spirit to the lower planes, ending the plague.",
            legacy: "The Radiant Paladin's sacrifice saved countless lives, and their name is still spoken with reverence by those who follow the light. The continent of Katman, while still cursed, is no longer plagued by the undead curse.",
            creatureSizeId: creatureSizes.medium.id,
            creatureTypeId: creatureTypes.undead.id,
            continentId: continents.katman.id
        }),
        // Present
        shadowmaw_pack: await db.createLegendaryCreature({
            id: "legendary-creature-shadowmaw-pack",
            name: "The Shadowmaw Pack",
            description: "A pack of massive, intelligent wolves that have been corrupted by shadow magic. They hunt in the deeper forests, their howls causing fear and madness in those who hear them. Their leader, Shadowmaw, is said to be as large as a horse and can phase through shadows.",
            threatLevel: LegendaryCreatureThreatLevel.CITY,
            questPotential: "Hunt down the pack and either destroy them or find a way to break their curse and restore them to their natural state.",
            creatureSizeId: creatureSizes.large.id,
            creatureTypeId: creatureTypes.beast.id,
            continentId: continents.kuriguer.id
        }),
        crimson_reaper: await db.createLegendaryCreature({
            id: "legendary-creature-crimson-reaper",
            name: "The Crimson Reaper",
            description: "A powerful demon that has established a cult in the cursed lands, using its infernal powers to corrupt the local population. It appears as a massive figure wreathed in flames, wielding a scythe that can cut through both flesh and soul.",
            threatLevel: LegendaryCreatureThreatLevel.CONTINENTAL,
            questPotential: "Infiltrate the cult, gather information about the demon's weaknesses, and either banish it back to the lower planes or destroy it permanently.",
            creatureSizeId: creatureSizes.huge.id,
            creatureTypeId: creatureTypes.fiend.id,
            continentId: continents.alatman.id
        }),
        iron_titan: await db.createLegendaryCreature({
            id: "legendary-creature-iron-titan",
            name: "The Iron Titan",
            description: "A massive construct that has gone rogue, rampaging through the mining villages and destroying everything in its path. It was originally created to help with mining operations but has developed a malevolent consciousness and now seeks to destroy all organic life.",
            threatLevel: LegendaryCreatureThreatLevel.CITY,
            questPotential: "Find a way to either shut down the construct or reprogram it to serve its original purpose. The construct's control systems are hidden deep within the mountain.",
            creatureSizeId: creatureSizes.large.id,
            creatureTypeId: creatureTypes.construct.id,
            continentId: continents.maltman.id
        }),
        swamp_witch: await db.createLegendaryCreature({
            id: "legendary-creature-swamp-witch",
            name: "The Swamp Witch",
            description: "A powerful druid who has been corrupted by the dark magic of the swamps. She commands legions of plant creatures and oozes, using them to terrorize the local population and expand her domain. She lives in a massive tree that has been twisted into a fortress.",
            threatLevel: LegendaryCreatureThreatLevel.REGIONAL,
            questPotential: "Either defeat the Swamp Witch and free the corrupted creatures under her control, or find a way to redeem her and restore the natural balance of the swamps.",
            creatureSizeId: creatureSizes.medium.id,
            creatureTypeId: creatureTypes.humanoid.id,
            continentId: continents.katman.id
        }),
        frost_wraith: await db.createLegendaryCreature({
            id: "legendary-creature-frost-wraith",
            name: "The Frost Wraith",
            description: "The spirit of a powerful shaman who died in the frozen wastes, now bound to the ice and seeking revenge against the living. It can control the weather, creating blizzards that last for days, and its touch can freeze a person solid instantly.",
            threatLevel: LegendaryCreatureThreatLevel.CONTINENTAL,
            questPotential: "Discover the Frost Wraith's true name and the circumstances of its death, then perform the proper burial rites to lay its spirit to rest.",
            creatureSizeId: creatureSizes.medium.id,
            creatureTypeId: creatureTypes.undead.id,
            continentId: continents.bulsania.id
        }),
        elemental_storm: await db.createLegendaryCreature({
            id: "legendary-creature-elemental-storm",
            name: "The Elemental Storm",
            description: "A massive storm of pure elemental energy that has been raging around the volcano for months. It contains fire, earth, and air elementals all mixed together, creating a chaotic maelstrom that threatens to spread across the entire region.",
            threatLevel: LegendaryCreatureThreatLevel.REGIONAL,
            questPotential: "Find a way to either calm the elemental storm or channel its energy into something constructive, such as powering the forges or creating new magical items.",
            creatureSizeId: creatureSizes.gargantuan.id,
            creatureTypeId: creatureTypes.elemental.id,
            continentId: continents.alatman.id
        }),
        bandit_king: await db.createLegendaryCreature({
            id: "legendary-creature-bandit-king",
            name: "The Bandit King",
            description: "A charismatic leader who has united several bandit groups into a massive criminal organization. He controls the major trade routes and demands tribute from all caravans, using his network of spies and informants to stay one step ahead of the law.",
            threatLevel: LegendaryCreatureThreatLevel.CONTINENTAL,
            questPotential: "Infiltrate the bandit organization, gather evidence of their crimes, and either capture the Bandit King or convince him to turn over a new leaf and use his skills for legitimate purposes.",
            creatureSizeId: creatureSizes.medium.id,
            creatureTypeId: creatureTypes.humanoid.id,
            continentId: continents.skratonia.id
        }),
        fey_lord: await db.createLegendaryCreature({
            id: "legendary-creature-fey-lord",
            name: "The Fey Lord",
            description: "A powerful fey creature that has claimed a large portion of the forest as its domain, trapping travelers in an endless maze of enchanted trees. It feeds on the confusion and fear of its victims, growing stronger with each person it ensnares.",
            threatLevel: LegendaryCreatureThreatLevel.REGIONAL,
            questPotential: "Navigate the enchanted maze, find the Fey Lord's true name, and either defeat it in combat or outwit it in a game of riddles and puzzles.",
            creatureSizeId: creatureSizes.large.id,
            creatureTypeId: creatureTypes.fey.id,
            continentId: continents.kuriguer.id
        }),
        crystal_dragon: await db.createLegendaryCreature({
            id: "legendary-creature-crystal-dragon",
            name: "The Crystal Dragon",
            description: "A young but powerful dragon made entirely of living crystal that has taken up residence in the deepest mines. It hoards precious gems and metals, and its breath weapon can turn living creatures into crystal statues.",
            threatLevel: LegendaryCreatureThreatLevel.CITY,
            questPotential: "Either negotiate with the dragon to share the mines' resources, or find a way to defeat it without destroying the valuable crystal it has created.",
            creatureSizeId: creatureSizes.huge.id,
            creatureTypeId: creatureTypes.dragon.id,
            continentId: continents.maltman.id
        }),
        cult_of_the_void: await db.createLegendaryCreature({
            id: "legendary-creature-cult-of-the-void",
            name: "The Cult of the Void",
            description: "A secretive cult that worships the concept of nothingness and seeks to unravel the very fabric of reality. They have been performing dark rituals that are causing reality to become unstable in certain areas, creating dangerous zones where the laws of physics no longer apply.",
            threatLevel: LegendaryCreatureThreatLevel.CONTINENTAL,
            questPotential: "Investigate the cult's activities, stop their reality-warping rituals, and either capture or eliminate the cult leaders before they can cause irreparable damage to the world.",
            creatureSizeId: creatureSizes.medium.id,
            creatureTypeId: creatureTypes.humanoid.id,
            continentId: continents.kuriguer.id
        }),
        swarm_queen: await db.createLegendaryCreature({
            id: "legendary-creature-swarm-queen",
            name: "The Swarm Queen",
            description: "A massive, insect-like creature that has been breeding an army of smaller monsters in the deepest swamps. It can control its offspring telepathically and uses them to expand its territory, consuming everything in its path.",
            threatLevel: LegendaryCreatureThreatLevel.REGIONAL,
            questPotential: "Find and destroy the Swarm Queen before it can breed enough offspring to overrun the entire swamp region. The queen is heavily protected by its swarm, so a direct assault may not be the best approach.",
            creatureSizeId: creatureSizes.huge.id,
            creatureTypeId: creatureTypes.monstrosity.id,
            continentId: continents.katman.id
        }),
        time_wraith: await db.createLegendaryCreature({
            id: "legendary-creature-time-wraith",
            name: "The Time Wraith",
            description: "A creature that exists partially outside of time, able to move through different moments in history. It has been causing temporal anomalies throughout the magical academies, making it difficult to perform spells that require precise timing.",
            threatLevel: LegendaryCreatureThreatLevel.CITY,
            questPotential: "Track down the Time Wraith through different time periods, understand its nature, and either banish it to a timeless void or find a way to anchor it to a specific moment in time.",
            creatureSizeId: creatureSizes.medium.id,
            creatureTypeId: creatureTypes.aberration.id,
            continentId: continents.kuriguer.id
        }),
        mountain_giant_chieftain: await db.createLegendaryCreature({
            id: "legendary-creature-mountain-giant-chieftain",
            name: "The Mountain Giant Chieftain",
            description: "A massive giant who has united several giant clans under his leadership. He seeks to reclaim the mountain regions from the smaller tribes and monsters that have encroached upon their ancestral lands.",
            threatLevel: LegendaryCreatureThreatLevel.REGIONAL,
            questPotential: "Negotiate with the chieftain to find a peaceful resolution to the territorial disputes, or prepare for a large-scale battle against his united giant forces.",
            creatureSizeId: creatureSizes.gargantuan.id,
            creatureTypeId: creatureTypes.giant.id,
            continentId: continents.bulsania.id
        })
    }
}