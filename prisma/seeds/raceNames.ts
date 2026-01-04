import { Prisma } from "@prismagen/client";
import * as db from "@lib/db-seed";

type RaceNamePayload = Prisma.RaceNameGetPayload<{}>;
export interface RaceNames {
    aarakocra: RaceNamePayload;
    aasimar: RaceNamePayload;
    autognome: RaceNamePayload;
    bugbear: RaceNamePayload;
    centaur: RaceNamePayload;
    changeling: RaceNamePayload;
    dhampir: RaceNamePayload;
    dragonborn: RaceNamePayload;
    dwarf: RaceNamePayload;
    elf: RaceNamePayload;
    gnome: RaceNamePayload;
    goblin: RaceNamePayload;
    goliath: RaceNamePayload;
    halfling: RaceNamePayload;
    hobgoblin: RaceNamePayload;
    human: RaceNamePayload;
    kenku: RaceNamePayload;
    kobold: RaceNamePayload;
    lizardfolk: RaceNamePayload;
    orc: RaceNamePayload;
    tabaxi: RaceNamePayload;
    tiefling: RaceNamePayload;
    tortle: RaceNamePayload;
    triton: RaceNamePayload;
    fairy: RaceNamePayload;
    firbolg: RaceNamePayload;
    genasi: RaceNamePayload;
    giff: RaceNamePayload;
    harengon: RaceNamePayload;
    kalashtar: RaceNamePayload;
    kender: RaceNamePayload;
    loxodon: RaceNamePayload;
    shifter: RaceNamePayload;
    vedalken: RaceNamePayload;
    warforged: RaceNamePayload;
    yuan_ti: RaceNamePayload;
    hadozee: RaceNamePayload;
    hexblood: RaceNamePayload;
    half_elf: RaceNamePayload;
    half_orc: RaceNamePayload;
    leonin: RaceNamePayload;
    minotaur: RaceNamePayload;
    owlin: RaceNamePayload;
    plasmoid: RaceNamePayload;
    reborn: RaceNamePayload;
    satyr: RaceNamePayload;
    simic_hybrid: RaceNamePayload;
    thri_kreen: RaceNamePayload;
}

export async function seedRaceNames(): Promise<RaceNames> {
    return {
        aarakocra: await db.createRaceName({
            id: "race-names-aarakocra",
            male: ["Kree", "Kreel", "Kreeth", "Kreetha", "Kreetho", "Kreethu"],
            female: ["Kreea", "Kreela", "Kreetha", "Kreethi", "Kreetho", "Kreethu"],
            unisex: [],
            surname: ["Windcaller", "Skysoarer", "Clouddancer", "Stormrider", "Windwhisper", "Skywatcher"]
        }),
        aasimar: await db.createRaceName({
            id: "race-names-aasimar",
            male: ["Seraphiel", "Thalion", "Aurelius", "Celestius", "Divinus", "Luminus"],
            female: ["Liora", "Mara", "Celestia", "Aurelia", "Divina", "Lumina"],
            unisex: [],
            surname: ["Brightwing", "Goldheart", "Starfall", "Lightbringer", "Heavenward", "Divinegrace"]
        }),
        autognome: await db.createRaceName({
            id: "race-names-autognome",
            male: ["Cog", "Gear", "Spring", "Piston", "Rivet", "Bolt"],
            female: ["Cog", "Gear", "Spring", "Piston", "Rivet", "Bolt"],
            unisex: [],
            surname: ["Ironworks", "Steelcraft", "Clockwork", "Mechanus", "Gearwright", "Springmaker"]
        }),
        bugbear: await db.createRaceName({
            id: "race-names-bugbear",
            male: ["Gor", "Thokk", "Dren", "Harg", "Krusk", "Vrak"],
            female: ["Shara", "Emen", "Baggi", "Vola", "Ovak", "Zara"],
            unisex: [],
            surname: ["Bloodclaw", "Bonechewer", "Skullcrusher", "Ironhide", "Grimjaw", "Darkfang"]
        }),
        centaur: await db.createRaceName({
            id: "race-names-centaur",
            male: ["Chiron", "Pholus", "Nessus", "Eurytion", "Hylaeus", "Rhoecus"],
            female: ["Hippe", "Melanippe", "Ocyrhoe", "Theano", "Euippe", "Hippodamia"],
            unisex: [],
            surname: ["Swiftstride", "Windrunner", "Meadowgallop", "Thunderhoof", "Stormchaser", "Wildheart"]
        }),
        changeling: await db.createRaceName({
            id: "race-names-changeling",
            male: ["Aiden", "Caleb", "Ethan", "Gavin", "Ian", "Liam"],
            female: ["Aria", "Cora", "Eva", "Grace", "Iris", "Luna"],
            unisex: [],
            surname: ["Shapeshifter", "Faceless", "Mimic", "Doppelganger", "Illusion", "Mirage"]
        }),
        dhampir: await db.createRaceName({
            id: "race-names-dhampir",
            male: ["Vladimir", "Damien", "Lucian", "Cassius", "Darius", "Marcus"],
            female: ["Lilith", "Raven", "Luna", "Cassandra", "Diana", "Mira"],
            unisex: [],
            surname: ["Nightshade", "Bloodmoon", "Shadowbane", "Darkheart", "Crimson", "Nocturne"]
        }),
        dragonborn: await db.createRaceName({
            id: "race-names-dragonborn",
            male: ["Arjhan", "Balasar", "Bharash", "Donaar", "Ghesh", "Heskan"],
            female: ["Akra", "Biri", "Daar", "Farideh", "Harann", "Havilar"],
            unisex: [],
            surname: ["Flameheart", "Stormwind", "Frostfang", "Thunderclaw", "Shadowscale", "Goldwing"]
        }),
        dwarf: await db.createRaceName({
            id: "race-names-dwarf",
            male: ["Thrain", "Beldrum", "Dorn", "Farin", "Orik", "Thorin"],
            female: ["Hilda", "Elinor", "Bree", "Dagna", "Helja", "Thora"],
            unisex: [],
            surname: ["Ironbeard", "Stonehammer", "Goldforge", "Mountainheart", "Steelaxe", "Rockfist"]
        }),
        elf: await db.createRaceName({
            id: "race-names-elf",
            male: ["Thamior", "Kaelen", "Aelar", "Valandil", "Immeral", "Arannis"],
            female: ["Laeriel", "Sylvaria", "Naivara", "Elenwen", "Faelina", "Thalindra"],
            unisex: [],
            surname: ["Moonwhisper", "Stardancer", "Windweaver", "Leafshade", "Riversong", "Forestwalker"]
        }),
        fairy: await db.createRaceName({
            id: "race-names-fairy",
            male: ["Puck", "Oberon", "Titania"],
            female: ["Titania", "Puck", "Oberon"],
            unisex: [],
            surname: ["Sparklewing", "Dustdancer", "Glowmoth", "Twinkletoes", "Shimmer", "Gleam"]
        }),
        firbolg: await db.createRaceName({
            id: "race-names-firbolg",
            male: ["Bael", "Druid", "Fael", "Gael", "Hael", "Kael"],
            female: ["Ael", "Bael", "Cael", "Dael", "Eael", "Fael"],
            unisex: [],
            surname: ["Treehugger", "Forestkeeper", "Natureguard", "Wildwood", "Greenheart", "Earthshaker"]
        }),
        genasi: await db.createRaceName({
            id: "race-names-genasi",
            male: ["Aiden", "Blaze", "Cinder", "Dust", "Ember", "Flame"],
            female: ["Aria", "Breeze", "Crystal", "Dew", "Echo", "Frost"],
            unisex: [],
            surname: ["Elemental", "Primordial", "Essence", "Spirit", "Force", "Power"]
        }),
        gnome: await db.createRaceName({
            id: "race-names-gnome",
            male: ["Fizban", "Tink", "Alston", "Boddynock", "Zook", "Fizzlepuff"],
            female: ["Nissa", "Bimpnottin", "Caramip", "Ellywick", "Tana", "Thistle"],
            unisex: [],
            surname: ["Tinkertop", "Gadgetmaker", "Whimsy", "Trickster", "Gizmo", "Puzzle"]
        }),
        giff: await db.createRaceName({
            id: "race-names-giff",
            male: ["Gunther", "Hans", "Klaus", "Otto", "Rolf", "Wolfgang"],
            female: ["Greta", "Helga", "Ingrid", "Katarina", "Petra", "Ursula"],
            unisex: [],
            surname: ["Ironfist", "Steeljaw", "Gunpowder", "Cannonball", "Blunderbuss", "Musket"]
        }),
        goblin: await db.createRaceName({
            id: "race-names-goblin",
            male: ["Grik", "Snag", "Vrak", "Dreg", "Muck", "Snik"],
            female: ["Ziz", "Yip", "Nib", "Gik", "Pox", "Vix"],
            unisex: [],
            surname: ["Sneak", "Stab", "Grab", "Snatch", "Pilfer", "Thief"]
        }),
        goliath: await db.createRaceName({
            id: "race-names-goliath",
            male: ["Aukan", "Eglath", "Gae-Al", "Gauthak", "Ilikan", "Keothi"],
            female: ["Aukan", "Eglath", "Gae-Al", "Gauthak", "Ilikan", "Keothi"],
            unisex: [],
            surname: ["Stonefist", "Mountainpeak", "Thunderclap", "Stormcaller", "Earthshaker", "Rockbreaker"]
        }),
        hadozee: await db.createRaceName({
            id: "race-names-hadozee",
            male: ["Bansh", "Darsh", "Grath", "Groh", "Polth", "Marn"],
            female: ["Bahasha", "Bannithi", "Dashi", "Kalla", "Risha", "Yasha"],
            unisex: [],
            surname: ["Nightdream", "Swiftson", "Wave-dancer", "Dawnchaser", "Cloudjumper", "Swordstorm"]
        }),
        half_elf: await db.createRaceName({
            id: "race-names-half-elf",
            male: ["Caelum", "Lioran", "Thalion", "Eldrin", "Arlen", "Dorian"],
            female: ["Liora", "Nyxara", "Elara", "Selene", "Aria", "Luna"],
            unisex: [],
            surname: ["Moonwhisper", "Stardancer", "Windweaver", "Leafshade", "Riversong", "Forestwalker"]
        }),
        half_orc: await db.createRaceName({
            id: "race-names-half-orc",
            male: ["Gor", "Thokk", "Dren", "Harg", "Krusk", "Vrak"],
            female: ["Shara", "Emen", "Baggi", "Vola", "Ovak", "Zara"],
            unisex: [],
            surname: ["Bloodclaw", "Bonechewer", "Skullcrusher", "Ironhide", "Grimjaw", "Darkfang"]
        }),
        halfling: await db.createRaceName({
            id: "race-names-halfling",
            male: ["Milo", "Pippin", "Samwise", "Frodo", "Bilbo", "Tobias"],
            female: ["Rosie", "Marigold", "Pansy", "Daisy", "Primrose", "Piri"],
            unisex: [],
            surname: ["Greenbottle", "Underhill", "Goodbarrel", "Hobbiton", "Bagshot", "Baggins"]
        }),
        harengon: await db.createRaceName({
            id: "race-names-harengon",
            male: ["Bunny", "Hoppy", "Jumper", "Skipper", "Bounder", "Leaper"],
            female: ["Bunny", "Hoppy", "Jumper", "Skipper", "Bounder", "Leaper"],
            unisex: [],
            surname: ["Longears", "Quickfoot", "Swiftjump", "Bouncy", "Fleetfoot", "Springstep"]
        }),
        hexblood: await db.createRaceName({
            id: "race-names-hexblood",
            male: ["Crow", "Raven", "Shadow", "Grim", "Dark", "Night"],
            female: ["Crow", "Raven", "Shadow", "Grim", "Dark", "Night"],
            unisex: [],
            surname: ["Hexweaver", "Cursebearer", "Witchborn", "Hagspawn", "Darkmagic", "Spellbound"]
        }),
        hobgoblin: await db.createRaceName({
            id: "race-names-hobgoblin",
            male: ["Gor", "Thokk", "Dren", "Harg", "Krusk", "Vrak"],
            female: ["Shara", "Emen", "Baggi", "Vola", "Ovak", "Zara"],
            unisex: [],
            surname: ["Ironfist", "Steeljaw", "Gunpowder", "Cannonball", "Blunderbuss", "Musket"]
        }),
        human: await db.createRaceName({
            id: "race-names-human",
            male: ["Aiden", "Caleb", "Ethan", "Gavin", "Ian", "Liam"],
            female: ["Aria", "Cora", "Eva", "Grace", "Iris", "Luna"],
            unisex: [],
            surname: ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia"]
        }),
        kalashtar: await db.createRaceName({
            id: "race-names-kalashtar",
            male: ["Aiden", "Caleb", "Ethan", "Gavin", "Ian", "Liam"],
            female: ["Aria", "Cora", "Eva", "Grace", "Iris", "Luna"],
            unisex: [],
            surname: ["Dreamweaver", "Mindwalker", "Soulbinder", "Spiritguide", "Psion", "Telepath"]
        }),
        kender: await db.createRaceName({
            id: "race-names-kender",
            male: ["Milo", "Pippin", "Samwise", "Frodo", "Bilbo", "Tobias"],
            female: ["Rosie", "Marigold", "Pansy", "Daisy", "Primrose", "Piri"],
            unisex: [],
            surname: ["Greenbottle", "Underhill", "Goodbarrel", "Hobbiton", "Bagshot", "Baggins"]
        }),
        kenku: await db.createRaceName({
            id: "race-names-kenku",
            male: ["Caw", "Squawk", "Chirp", "Tweet", "Coo", "Cackle"],
            female: ["Caw", "Squawk", "Chirp", "Tweet", "Coo", "Cackle"],
            unisex: [],
            surname: ["Featherfall", "Wingbeat", "Skycaller", "Windwhisper", "Cloudsoarer", "Stormdancer"]
        }),
        kobold: await db.createRaceName({
            id: "race-names-kobold",
            male: ["Meepo", "Snik", "Vrak", "Drek", "Muck", "Grik"],
            female: ["Ziz", "Yip", "Nib", "Gik", "Pox", "Vix"],
            unisex: [],
            surname: ["Tinyclaw", "Smallfang", "Littletooth", "Miniscale", "Petite", "Diminutive"]
        }),
        leonin: await db.createRaceName({
            id: "race-names-leonin",
            male: ["Aukan", "Eglath", "Gae-Al", "Gauthak", "Ilikan", "Keothi"],
            female: ["Aukan", "Eglath", "Gae-Al", "Gauthak", "Ilikan", "Keothi"],
            unisex: [],
            surname: ["Goldmane", "Lionheart", "Pridestalker", "Mane", "Roar", "Claw"]
        }),
        lizardfolk: await db.createRaceName({
            id: "race-names-lizardfolk",
            male: ["Sissith", "Vessk", "Throden", "Hissar", "Ziss", "Kess"],
            female: ["Sash", "Vissara", "Thiss", "Hissara", "Zissith", "Kessara"],
            unisex: [],
            surname: ["Scalefoot", "Tailswish", "Clawmark", "Fang", "Scale", "Lizard"]
        }),
        loxodon: await db.createRaceName({
            id: "race-names-loxodon",
            male: ["Aukan", "Eglath", "Gae-Al", "Gauthak", "Ilikan", "Keothi"],
            female: ["Aukan", "Eglath", "Gae-Al", "Gauthak", "Ilikan", "Keothi"],
            unisex: [],
            surname: ["Tuskbreaker", "Trunkstrong", "Ivory", "Tusk", "Trunk", "Elephant"]
        }),
        minotaur: await db.createRaceName({
            id: "race-names-minotaur",
            male: ["Aukan", "Eglath", "Gae-Al", "Gauthak", "Ilikan", "Keothi"],
            female: ["Aukan", "Eglath", "Gae-Al", "Gauthak", "Ilikan", "Keothi"],
            unisex: [],
            surname: ["Hornbreaker", "Bullrush", "Charger", "Horn", "Bull", "Maze"]
        }),
        orc: await db.createRaceName({
            id: "race-names-orc",
            male: ["Gor", "Thokk", "Dren", "Harg", "Krusk", "Vrak"],
            female: ["Shara", "Emen", "Baggi", "Vola", "Ovak", "Zara"],
            unisex: [],
            surname: ["Bloodclaw", "Bonechewer", "Skullcrusher", "Ironhide", "Grimjaw", "Darkfang"]
        }),
        owlin: await db.createRaceName({
            id: "race-names-owlin",
            male: ["Hoot", "Screech"],
            female: ["Hoot", "Screech"],
            unisex: [],
            surname: ["Nightwing", "Owlcall", "Hoot", "Screech", "Wingbeat", "Featherfall"]
        }),
        plasmoid: await db.createRaceName({
            id: "race-names-plasmoid",
            male: ["Blob", "Goo", "Slime", "Gel", "Ooze", "Mucus"],
            female: ["Blob", "Goo", "Slime", "Gel", "Ooze", "Mucus"],
            unisex: [],
            surname: ["Slimy", "Gooey", "Blobby", "Gelatinous", "Mucous", "Viscous"]
        }),
        reborn: await db.createRaceName({
            id: "race-names-reborn",
            male: ["Aiden", "Caleb", "Ethan", "Gavin", "Ian", "Liam"],
            female: ["Aria", "Cora", "Eva", "Grace", "Iris", "Luna"],
            unisex: [],
            surname: ["Deathless", "Undying", "Eternal", "Immortal", "Ageless", "Timeless"]
        }),
        satyr: await db.createRaceName({
            id: "race-names-satyr",
            male: ["Puck", "Oberon", "Titania"],
            female: ["Titania", "Puck", "Oberon"],
            unisex: [],
            surname: ["Horned", "Goatfoot", "Pan", "Faun", "Sylvan", "Woodland"]
        }),
        shifter: await db.createRaceName({
            id: "race-names-shifter",
            male: ["Aiden", "Caleb", "Ethan", "Gavin", "Ian", "Liam"],
            female: ["Aria", "Cora", "Eva", "Grace", "Iris", "Luna"],
            unisex: [],
            surname: ["Wildheart", "Beastform", "Shapeshifter", "Feral", "Primal", "Savage"]
        }),
        simic_hybrid: await db.createRaceName({
            id: "race-names-simic-hybrid",
            male: ["Aiden", "Caleb", "Ethan", "Gavin", "Ian", "Liam"],
            female: ["Aria", "Cora", "Eva", "Grace", "Iris", "Luna"],
            unisex: [],
            surname: ["Hybrid", "Mutant", "Experiment", "Modified", "Enhanced", "Evolved"]
        }),
        tabaxi: await db.createRaceName({
            id: "race-names-tabaxi",
            male: ["Aukan", "Eglath", "Gae-Al", "Gauthak", "Ilikan", "Keothi"],
            female: ["Aukan", "Eglath", "Gae-Al", "Gauthak", "Ilikan", "Keothi"],
            unisex: [],
            surname: ["Whiskers", "Purr", "Meow", "Claw", "Fang", "Tail"]
        }),
        thri_kreen: await db.createRaceName({
            id: "race-names-thri-kreen",
            male: ["Aukan", "Eglath", "Gae-Al", "Gauthak", "Ilikan", "Keothi"],
            female: ["Aukan", "Eglath", "Gae-Al", "Gauthak", "Ilikan", "Keothi"],
            unisex: [],
            surname: ["Manyarms", "Chitin", "Exoskeleton", "Mandible", "Antenna", "Compound"]
        }),
        tiefling: await db.createRaceName({
            id: "race-names-tiefling",
            male: ["Akmenos", "Barakas", "Damakos", "Iados", "Therai", "Vladimir"],
            female: ["Akta", "Bryseis", "Damaia", "Kallista", "Lerissa", "Lilith"],
            unisex: [],
            surname: ["Hellspawn", "Devilborn", "Infernal", "Demon", "Fiend", "Devil"]
        }),
        tortle: await db.createRaceName({
            id: "race-names-tortle",
            male: ["Aukan", "Eglath", "Gae-Al", "Gauthak", "Ilikan", "Keothi"],
            female: ["Aukan", "Eglath", "Gae-Al", "Gauthak", "Ilikan", "Keothi"],
            unisex: [],
            surname: ["Shellback", "Turtle", "Tortoise", "Carapace", "Shell", "Slow"]
        }),
        triton: await db.createRaceName({
            id: "race-names-triton",
            male: ["Aukan", "Eglath", "Gae-Al", "Gauthak", "Ilikan", "Keothi"],
            female: ["Aukan", "Eglath", "Gae-Al", "Gauthak", "Ilikan", "Keothi"],
            unisex: [],
            surname: ["Seafoam", "Wavecaller", "Tide", "Ocean", "Sea", "Water"]
        }),
        vedalken: await db.createRaceName({
            id: "race-names-vedalken",
            male: ["Aiden", "Caleb", "Ethan", "Gavin", "Ian", "Liam"],
            female: ["Aria", "Cora", "Eva", "Grace", "Iris", "Luna"],
            unisex: [],
            surname: ["Mind", "Thought", "Logic", "Reason", "Wisdom", "Knowledge"]
        }),
        warforged: await db.createRaceName({
            id: "race-names-warforged",
            male: ["Cog", "Gear", "Spring", "Piston", "Rivet", "Bolt"],
            female: ["Cog", "Gear", "Spring", "Piston", "Rivet", "Bolt"],
            unisex: [],
            surname: ["Ironworks", "Steelcraft", "Clockwork", "Mechanus", "Gearwright", "Springmaker"]
        }),
        yuan_ti: await db.createRaceName({
            id: "race-names-yuan-ti",
            male: ["Aukan", "Eglath", "Gae-Al", "Gauthak", "Ilikan", "Keothi"],
            female: ["Aukan", "Eglath", "Gae-Al", "Gauthak", "Ilikan", "Keothi"],
            unisex: [],
            surname: ["Snakescale", "Serpent", "Viper", "Cobra", "Python", "Constrictor"]
        }),
    }
}