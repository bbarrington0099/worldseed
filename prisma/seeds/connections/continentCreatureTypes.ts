import { Prisma, ContinentCreatureRelation } from "@prismagen/client";
import * as db from "@lib/db-seed";
import { Continents, CreatureTypes } from "../index";

interface ContinentCreatureTypesParams {
    continents: Continents;
    creatureTypes: CreatureTypes;
}
export async function setContinentCreatureTypes(params: ContinentCreatureTypesParams) {
    const { continents, creatureTypes } = params;
    try {
        // Kuriguer
        // Primary
        await db.createContinentCreatureType({
            id: "continent-creature-type-aberration-kuriguer-alabastria",
            continentId: continents.kuriguer.id,
            creatureTypeId: creatureTypes.aberration.id,
            relation: ContinentCreatureRelation.PRIMARY,
            reasoning: "Scholars whisper of ancient secrets buried in the magical academies, where research into 'lost knowledge' has uncovered things that defy natural law. Travelers who venture too deep into the research districts report seeing creatures that move in impossible ways and speak in tongues that hurt the mind."
        });
        await db.createContinentCreatureType({
            id: "continent-creature-type-fey-kuriguer-alabastria",
            continentId: continents.kuriguer.id,
            creatureTypeId: creatureTypes.fey.id,
            relation: ContinentCreatureRelation.PRIMARY,
            reasoning: "The deeper forests pulse with fey magic, where Sylvan voices whisper from unseen glades. The Living Barrier itself seems to dance with otherworldly energy, and many claim to have seen ethereal figures flitting between the ancient trees."
        });
        await db.createContinentCreatureType({
            id: "continent-creature-type-plant-kuriguer-alabastria",
            continentId: continents.kuriguer.id,
            creatureTypeId: creatureTypes.plant.id,
            relation: ContinentCreatureRelation.PRIMARY,
            reasoning: "The forests here are alive in ways that unsettle even experienced druids. Trees seem to watch travelers pass, and the very ground beneath your feet sometimes shifts as if the roots themselves are moving. The archmage's ability to speak with all living things suggests the plants here possess a consciousness beyond the ordinary."
        });
        // Secondary
        await db.createContinentCreatureType({
            id: "continent-creature-type-elemental-kuriguer-alabastria",
            continentId: continents.kuriguer.id,
            creatureTypeId: creatureTypes.elemental.id,
            relation: ContinentCreatureRelation.SECONDARY,
            reasoning: "The air itself crackles with primordial energy, and travelers often witness storms that seem to have minds of their own. The magical nature of this land has drawn elemental forces from across the planes."
        });
        await db.createContinentCreatureType({
            id: "continent-creature-type-dragon-kuriguer-alabastria",
            continentId: continents.kuriguer.id,
            creatureTypeId: creatureTypes.dragon.id,
            relation: ContinentCreatureRelation.SECONDARY,
            reasoning: "Though the Wyvern Wars ended centuries ago, the scars remain in the landscape and the memories of the people. Ancient draconic runes can still be found carved into stones, and some claim to hear the echoes of great wings in the mountain winds."
        });
        // Katman
        // Primary
        await db.createContinentCreatureType({
            id: "continent-creature-type-dragon-katman-alabastria",
            continentId: continents.katman.id,
            creatureTypeId: creatureTypes.dragon.id,
            relation: ContinentCreatureRelation.PRIMARY,
            reasoning: "The legend of Malagaroth the Swamp Dragon still haunts these lands. Travelers crossing the vast swamps often hear deep, rumbling calls that echo through the mist, and the very ground sometimes trembles as if the great beast's spirit still stirs beneath the murky waters."
        });
        await db.createContinentCreatureType({
            id: "continent-creature-type-ooze-katman-alabastria",
            continentId: continents.katman.id,
            creatureTypeId: creatureTypes.ooze.id,
            relation: ContinentCreatureRelation.PRIMARY,
            reasoning: "The swamps here are alive with slithering, amorphous creatures that seem to rise from the very muck itself. Travelers must watch their step carefully, as what appears to be a simple puddle might suddenly reach out with pseudopods to drag the unwary into the depths."
        });
        await db.createContinentCreatureType({
            id: "continent-creature-type-plant-katman-alabastria",
            continentId: continents.katman.id,
            creatureTypeId: creatureTypes.plant.id,
            relation: ContinentCreatureRelation.PRIMARY,
            reasoning: "The swamplands teem with vegetation that moves with purpose. Swamp lilies bloom in impossible colors, and vines seem to reach toward travelers as they pass. The very air is thick with the scent of growing things that have learned to hunt."
        });
        // Secondary
        await db.createContinentCreatureType({
            id: "continent-creature-type-monstrosity-katman-alabastria",
            continentId: continents.katman.id,
            creatureTypeId: creatureTypes.monstrosity.id,
            relation: ContinentCreatureRelation.SECONDARY,
            reasoning: "The frontier swamps breed creatures that defy natural classification. Travelers report seeing beasts that seem to be part reptile, part plant, part something else entirely - as if the very nature of the swamps has twisted the creatures that call it home."
        });
        await db.createContinentCreatureType({
            id: "continent-creature-type-undead-katman-alabastria",
            continentId: continents.katman.id,
            creatureTypeId: creatureTypes.undead.id,
            relation: ContinentCreatureRelation.SECONDARY,
            reasoning: "The swamps hold their dead close, and many who perish in these treacherous waters find themselves unable to rest. Misty figures can be seen moving through the reeds at night, and the sound of dragging footsteps often follows travelers along the narrow paths."
        });
        // Alatman
        // Primary
        await db.createContinentCreatureType({
            id: "continent-creature-type-elemental-alatman-alabastria",
            continentId: continents.alatman.id,
            creatureTypeId: creatureTypes.elemental.id,
            relation: ContinentCreatureRelation.PRIMARY,
            reasoning: "The volcano rumbles constantly, and travelers report seeing creatures of pure flame dancing in the lava flows. The very air shimmers with heat, and those who venture too close to the volcanic vents often witness earth and fire elementals emerging from the molten rock as if summoned by the land itself."
        });
        await db.createContinentCreatureType({
            id: "continent-creature-type-construct-alatman-alabastria",
            continentId: continents.alatman.id,
            creatureTypeId: creatureTypes.construct.id,
            relation: ContinentCreatureRelation.PRIMARY,
            reasoning: "The forges here never sleep, and the clang of metal on metal echoes day and night. Travelers are often startled to see mechanical beings that move with purpose through the workshops - some clearly artificial, others so lifelike that only their glowing eyes give them away as constructs rather than living beings."
        });
        await db.createContinentCreatureType({
            id: "continent-creature-type-fiend-alatman-alabastria",
            continentId: continents.alatman.id,
            creatureTypeId: creatureTypes.fiend.id,
            relation: ContinentCreatureRelation.PRIMARY,
            reasoning: "The darker forests whisper with infernal voices, and travelers who stray from the main paths often report seeing creatures with too many eyes and too many teeth. The very shadows seem to move with malicious intent, and many claim to hear whispers in languages that chill the blood."
        });
        // Secondary
        await db.createContinentCreatureType({
            id: "continent-creature-type-dragon-alatman-alabastria",
            continentId: continents.alatman.id,
            creatureTypeId: creatureTypes.dragon.id,
            relation: ContinentCreatureRelation.SECONDARY,
            reasoning: "The volcanic peaks are said to be home to dragons of fire and stone, and travelers often see great winged shapes silhouetted against the ash-filled sky. The ancient draconic tongue is still spoken here, passed down through generations who learned it from the great wyrms themselves."
        });
        await db.createContinentCreatureType({
            id: "continent-creature-type-aberration-alatman-alabastria",
            continentId: continents.alatman.id,
            creatureTypeId: creatureTypes.aberration.id,
            relation: ContinentCreatureRelation.SECONDARY,
            reasoning: "Deep in the volcanic caves and ancient ruins, travelers report encountering creatures that move in ways that hurt the mind to watch. Their speech sounds like the grinding of stones and the crackling of flames, and their very presence seems to warp the reality around them."
        });
        // Maltman
        // Primary
        await db.createContinentCreatureType({
            id: "continent-creature-type-giant-maltman-alabastria",
            continentId: continents.maltman.id,
            creatureTypeId: creatureTypes.giant.id,
            relation: ContinentCreatureRelation.PRIMARY,
            reasoning: "The mountains here are home to creatures of immense size, and travelers often hear the thunderous footsteps of giants echoing through the peaks. The Noxious Mountain itself seems to breathe, and those who venture too high report seeing massive figures moving among the clouds, their forms barely visible through the mist."
        });
        await db.createContinentCreatureType({
            id: "continent-creature-type-construct-maltman-alabastria",
            continentId: continents.maltman.id,
            creatureTypeId: creatureTypes.construct.id,
            relation: ContinentCreatureRelation.PRIMARY,
            reasoning: "The mines are filled with mechanical wonders that never tire. Travelers marvel at the clockwork guardians that patrol the deeper tunnels, their brass bodies gleaming in the torchlight. The dwarves have created beings of metal and stone that work alongside the miners, their movements precise and tireless."
        });
        await db.createContinentCreatureType({
            id: "continent-creature-type-dragon-maltman-alabastria",
            continentId: continents.maltman.id,
            creatureTypeId: creatureTypes.dragon.id,
            relation: ContinentCreatureRelation.PRIMARY,
            reasoning: "Ancient draconic runes cover the walls of the deepest mines, carved by claws that could only belong to dragons. Travelers sometimes hear the deep, rumbling calls of great wyrms echoing through the mountain passages, and the miners speak of encounters with creatures that seem to be part dragon, part mountain itself."
        });
        // Secondary
        await db.createContinentCreatureType({
            id: "continent-creature-type-elemental-maltman-alabastria",
            continentId: continents.maltman.id,
            creatureTypeId: creatureTypes.elemental.id,
            relation: ContinentCreatureRelation.SECONDARY,
            reasoning: "The deep mining operations have awakened the very earth, and travelers report seeing creatures of stone and metal that seem to emerge from the walls themselves. The mountain's heart beats with elemental energy, and those who listen closely can hear the ancient songs of the earth."
        });
        await db.createContinentCreatureType({
            id: "continent-creature-type-aberration-maltman-alabastria",
            continentId: continents.maltman.id,
            creatureTypeId: creatureTypes.aberration.id,
            relation: ContinentCreatureRelation.SECONDARY,
            reasoning: "The deepest mines have uncovered things that should have remained buried. Travelers who venture into the oldest tunnels report encountering creatures that seem to be made of living stone, their forms shifting and changing in ways that defy understanding."
        });
        // Skratonia
        // Primary
        await db.createContinentCreatureType({
            id: "continent-creature-type-humanoid-skratonia-alabastria",
            continentId: continents.skratonia.id,
            creatureTypeId: creatureTypes.humanoid.id,
            relation: ContinentCreatureRelation.PRIMARY,
            reasoning: "As the crossroads of civilization, this land attracts both legitimate traders and dangerous outlaws. Bandit groups prey on caravans, while cults seek to exploit the diverse population for their dark purposes. The wealth and diversity make it a prime target for criminal organizations and hostile humanoid threats."
        });
        await db.createContinentCreatureType({
            id: "continent-creature-type-beast-skratonia-alabastria",
            continentId: continents.skratonia.id,
            creatureTypeId: creatureTypes.beast.id,
            relation: ContinentCreatureRelation.PRIMARY,
            reasoning: "The vast plains are alive with creatures both wild and domesticated. Travelers often see herds of strange beasts grazing in the distance, their forms silhouetted against the golden wheat fields. The pastoral communities have learned to live alongside creatures that would be considered dangerous elsewhere."
        });
        await db.createContinentCreatureType({
            id: "continent-creature-type-celestial-skratonia-alabastria",
            continentId: continents.skratonia.id,
            creatureTypeId: creatureTypes.celestial.id,
            relation: ContinentCreatureRelation.PRIMARY,
            reasoning: "The prosperity and diversity of this land has drawn the attention of celestial beings, and travelers often report seeing figures of pure light moving through the cities at dawn. The aasimar populations seem to glow with an inner radiance, and many claim to have been blessed by divine intervention during their travels here."
        });
        // Secondary
        await db.createContinentCreatureType({
            id: "continent-creature-type-fiend-skratonia-alabastria",
            continentId: continents.skratonia.id,
            creatureTypeId: creatureTypes.fiend.id,
            relation: ContinentCreatureRelation.SECONDARY,
            reasoning: "Even in this land of plenty, the infernal influence can be felt. Travelers sometimes notice the tiefling populations moving through the shadows with an otherworldly grace, and the very air occasionally carries whispers in languages that chill the soul."
        });
        await db.createContinentCreatureType({
            id: "continent-creature-type-fey-skratonia-alabastria",
            continentId: continents.skratonia.id,
            creatureTypeId: creatureTypes.fey.id,
            relation: ContinentCreatureRelation.SECONDARY,
            reasoning: "The rural areas hold pockets of wild magic where the fey still dance. Travelers who venture off the main roads often find themselves in glades where the very nature of reality seems to shift, and the creatures they encounter there are neither wholly natural nor wholly magical."
        });
        // Bulsania
        // Primary
        await db.createContinentCreatureType({
            id: "continent-creature-type-giant-bulsania-alabastria",
            continentId: continents.bulsania.id,
            creatureTypeId: creatureTypes.giant.id,
            relation: ContinentCreatureRelation.PRIMARY,
            reasoning: "The frozen peaks are home to creatures of immense size, their forms barely visible through the eternal blizzards. Travelers often hear the thunderous footsteps of giants echoing across the ice fields, and the very mountains themselves seem to move with the slow, deliberate pace of ancient titans."
        });
        await db.createContinentCreatureType({
            id: "continent-creature-type-dragon-bulsania-alabastria",
            continentId: continents.bulsania.id,
            creatureTypeId: creatureTypes.dragon.id,
            relation: ContinentCreatureRelation.PRIMARY,
            reasoning: "The ice dragons of Bulsania are legendary, their breath turning the very air to ice crystals. Travelers report seeing great winged shapes soaring through the aurora-lit skies, their scales glinting like frozen gems. The Dragonborn settlements here speak of ancient pacts with these magnificent creatures."
        });
        await db.createContinentCreatureType({
            id: "continent-creature-type-undead-bulsania-alabastria",
            continentId: continents.bulsania.id,
            creatureTypeId: creatureTypes.undead.id,
            relation: ContinentCreatureRelation.PRIMARY,
            reasoning: "The harsh conditions and violent deaths in the frozen wastes mean that not all spirits find peace. Restless souls occasionally manifest, bound to the material realm by unfinished business, powerful emotions, or connections to items they held dear in life. Some appear in the periphery of vision, while others gain enough strength to manipulate the physical world, watching over loved ones or seeking to complete their final missions."
        });
        await db.createContinentCreatureType({
            id: "continent-creature-type-elemental-bulsania-alabastria",
            continentId: continents.bulsania.id,
            creatureTypeId: creatureTypes.elemental.id,
            relation: ContinentCreatureRelation.PRIMARY,
            reasoning: "The frozen landscape pulses with elemental energy, and travelers often witness storms that seem to have minds of their own. Ice elementals dance in the blizzards, and the very ground sometimes shifts as if the earth itself is alive beneath the permafrost. The far northern spires are haunted by a particularly terrifying phenomenon - sentient blizzards that hunt living creatures, composed of tortured souls trapped within swirling ice and snow, their screams echoing through the winds as they tear apart any who venture too close."
        });
        // Secondary
        await db.createContinentCreatureType({
            id: "continent-creature-type-monstrosity-bulsania-alabastria",
            continentId: continents.bulsania.id,
            creatureTypeId: creatureTypes.monstrosity.id,
            relation: ContinentCreatureRelation.SECONDARY,
            reasoning: "The extreme cold has twisted the creatures that call this land home, creating beings that are neither wholly natural nor wholly magical. Travelers report encountering beasts with too many eyes and too many limbs, their forms adapted to survive in conditions that would kill ordinary creatures. Rimebeasts prowl the wastes - small but vicious predators that hunt in packs and are a common target for mercenary hunting parties, though they should never be underestimated."
        });
        await db.createContinentCreatureType({
            id: "continent-creature-type-celestial-bulsania-alabastria",
            continentId: continents.bulsania.id,
            creatureTypeId: creatureTypes.celestial.id,
            relation: ContinentCreatureRelation.SECONDARY,
            reasoning: "The divine transformation of the ruler has left its mark on the land, and travelers sometimes witness celestial beings moving through the frozen wastes. The very air occasionally shimmers with divine light, and those who are pure of heart often find themselves guided by unseen hands through the treacherous terrain."
        });
    } catch (error) {
        console.error("Error connecting creature types to continents:", error);
        process.exit(1);
    }
}