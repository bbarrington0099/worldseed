import { Prisma } from "@prismagen/client";
import * as db from "@lib/db-seed";

type LanguagePayload = Prisma.LanguageGetPayload<{}>;
export interface Languages {
    common: LanguagePayload;
    elvish: LanguagePayload;
    sylvan: LanguagePayload;
    gnomish: LanguagePayload;
    draconic: LanguagePayload;
    primordial: LanguagePayload;
    celestial: LanguagePayload;
    abyssal: LanguagePayload;
    deep_speech: LanguagePayload;
    infernal: LanguagePayload;
    dwarvish: LanguagePayload;
    undercommon: LanguagePayload;
    orcish: LanguagePayload;
    lizardfolk: LanguagePayload;
    yuan_ti: LanguagePayload;
    aquan: LanguagePayload;
    giant: LanguagePayload;
    terran: LanguagePayload;
    telepathic: LanguagePayload;
    halfling: LanguagePayload;
    aarakocra: LanguagePayload;
    goliath: LanguagePayload;
    auran: LanguagePayload;
    druidic: LanguagePayload;
    modron: LanguagePayload;
    ignan: LanguagePayload;
    goblin: LanguagePayload;
    giff: LanguagePayload;
    hadozee: LanguagePayload;
    quori: LanguagePayload;
    kenderspeak: LanguagePayload;
    leonin: LanguagePayload;
    loxodon: LanguagePayload;
    minotaur: LanguagePayload;
    owlin: LanguagePayload;
    tabaxi: LanguagePayload;
    thri_kreen: LanguagePayload;
    vedalken: LanguagePayload;
    unknown_dialects: LanguagePayload;
    any_one: LanguagePayload;
    any_two: LanguagePayload;
    common_sign_language: LanguagePayload;
    thieves_cant: LanguagePayload;
}

export async function seedLanguages(): Promise<Languages> {
    return {
        common: await db.createLanguage({
            id: "language-common-alabastria",
            name: "Common",
            description: "The common language of the world, a straightforward, everyday tongue considered simple and unremarkable yet existing in many different dialects and variations."
        }),
        elvish: await db.createLanguage({
            id: "language-elvish-alabastria",
            name: "Elvish",
            description: "An elegant, fluid speech; flowing and musical with subtle intonations and intricate grammar, so that even ordinary phrases sound like poetry."
        }),
        sylvan: await db.createLanguage({
            id: "language-sylvan-alabastria",
            name: "Sylvan",
            description: "The language of the fey, a mesmerizing natural music; composed of countless delicate and wild sounds (from a butterfly's whisper to a tree's thunder), painfully beautiful and enchantingly melodic."
        }),
        gnomish: await db.createLanguage({
            id: "language-gnomish-alabastria",
            name: "Gnomish",
            description: "A quirky, singsong chattering; precise and stilted, with a playful lilt and a cadence that makes even harsh consonants sound unusually cheerful."
        }),
        draconic: await db.createLanguage({
            id: "language-draconic-alabastria",
            name: "Draconic",
            description: "A harsh, sibilant tongue; full of sharp, crackling consonants and rolling r's, like the echo of claws on stone; it's powerful and ancient, often likened to dragons' roar."
        }),
        primordial: await db.createLanguage({
            id: "language-primordial-alabastria",
            name: "Primordial",
            description: "The elemental tongue; a raw, guttural rumble filled with nature's noises (the bubbling of water, the roar of fire, the rush of wind, the tremble of earth), as if speaking in the very voice of the elements."
        }),
        celestial: await db.createLanguage({
            id: "language-celestial-alabastria",
            name: "Celestial",
            description: "A sublime, harmonized speech; layered and melodic with round vowels and a sing-song tone. It flows like a divine hymn, beautiful and ethereal, almost too perfect for mortal ears."
        }),
        abyssal: await db.createLanguage({
            id: "language-abyssal-alabastria",
            name: "Abyssal",
            description: "A chaotic, discordant cacophony; snarling like barking demons and buzzing like a swarm of hornets, an ugly melee of harsh hisses and shouts. Its sound is unsettling and violent, a savage twin of elemental speech."
        }),
        deep_speech: await db.createLanguage({
            id: "language-deep-speech-alabastria",
            name: "Deep Speech",
            description: "The mind-shattering aberrant tongue; a reel of impossible, droning noises and eerie emotional tones with no normal grammar. Hearing it induces a profound wrongness, like a dirge of madness just on the edge of understanding."
        }),
        infernal: await db.createLanguage({
            id: "language-infernal-alabastria",
            name: "Infernal",
            description: "A harsh, austere dialect; once pure harmony but twisted with Abyssal harshness. It mixes round, orderly vowels with sharp, hissing consonants, an unholy fusion of melody and menace that is painful on the tongue."
        }),
        dwarvish: await db.createLanguage({
            id: "language-dwarvish-alabastria",
            name: "Dwarvish",
            description: "A stout, gutteral tongue; thick with hard consonants and throat-clearing sounds. It has a staccato, hearty rhythm, as if every word is hammered out of rock."
        }),
        undercommon: await db.createLanguage({
            id: "language-undercommon-alabastria",
            name: "Undercommon",
            description: "A deep, resonant murmur often spoken in darkness or caverns. It emphasizes volume, vibration and tone (more than nuanced words), carrying weight in how it's delivered, often feeling heavy and echoing."
        }),
        orcish: await db.createLanguage({
            id: "language-orcish-alabastria",
            name: "Orcish",
            description: "A raw, guttural growl; coarse and gravelly, with heavy hard consonants and a grating quality. It sounds fierce and unpolished, like a fighter's shout or the grinding of blades."
        }),
        lizardfolk: await db.createLanguage({
            id: "language-lizardfolk-alabastria",
            name: "Lizardfolk",
            description: "A reptilian croak; full of low growls and sharp hisses. It uses growling vowels and clipped consonants, often conveying meaning through tone and simple, blunt sounds."
        }),
        yuan_ti: await db.createLanguage({
            id: "language-yuan-ti-alabastria",
            name: "Yuan-Ti",
            description: "A sinuous, hissing tongue; serpentine and sibilant, with drawn-out s's and breathy whispers. It sounds smooth and exotic like a serpent's hiss beneath civilized words."
        }),
        aquan: await db.createLanguage({
            id: "language-aquan-alabastria",
            name: "Aquan",
            description: "A flowing, liquid speech; smooth and subtle like water itself. It ripples with hidden nuance and double meanings, as if every phrase carries a hidden current beneath its gentle surface."
        }),
        giant: await db.createLanguage({
            id: "language-giant-alabastria",
            name: "Giant",
            description: "A booming, thunderous roar; low and resonant with deep vibrating tones. It sounds like rolling thunder or shifting boulders, far below the pitch of most humanoids."
        }),
        terran: await db.createLanguage({
            id: "language-terran-alabastria",
            name: "Terran",
            description: "An earthy rumble; a deep, vibrating tongue like a tremor through rock. Words roll out like shifting stones, low and bass-heavy, echoing in the chest."
        }),
        telepathic: await db.createLanguage({
            id: "language-telepathic-alabastria",
            name: "Telepathic",
            description: "A wordless mind-voice no audible sound at all. Thoughts, images or emotions are conveyed directly, as if ideas themselves 'speak' without any real sound or accent."
        }),
        halfling: await db.createLanguage({
            id: "language-halfling-alabastria",
            name: "Halfling",
            description: "A soft, friendly chatter; light and gentle, with a quick, cheerful lilt. It often sounds warm and inviting, as if every sentence is spoken with a smile."
        }),
        aarakocra: await db.createLanguage({
            id: "language-aarakocra-alabastria",
            name: "Aarakocra",
            description: "An avian song; punctuated by chirps, trills and whistles. Many phrases are woven with bird-like notes and clicks, giving it a musical, airy quality like birdsong."
        }),
        goliath: await db.createLanguage({
            id: "language-goliath-alabastria",
            name: "Goliath",
            description: "A rugged, mountainous speech; guttural and blunt, with a rolling quality. It often sounds like a hardy growl or rumble (imagine the echoes of wind over peaks), reflecting a harsh and stoic nature."
        }),
        auran: await db.createLanguage({
            id: "language-auran-alabastria",
            name: "Auran",
            description: "An airy, breathy tongue; a long, slow exhalation of sound. Words come out softly and deliberately, drifting like a gentle breeze from the mouth."
        }),
        druidic: await db.createLanguage({
            id: "language-druidic-alabastria",
            name: "Druidic",
            description: "A secret, mystical language; soft and lyrical like a chant or whisper in the woods. It often feels like quiet chants or rustling leaves, using its own curving runes; outsiders may perceive it as musical and elusive (spoken only by druids)."
        }),
        modron: await db.createLanguage({
            id: "language-modron-alabastria",
            name: "Modron",
            description: "A mechanical, precise chatter; a series of clicks, beeps and soft whirrs. To most ears it sounds like a clockwork or machine-like language, deliberate and unemotional."
        }),
        ignan: await db.createLanguage({
            id: "language-ignan-alabastria",
            name: "Ignan",
            description: "A crackling, fiery hiss; sharp and staccato, full of hisses and clicks. It snaps and sparks like flames, evoking the crackle of fire or the pop of burning embers."
        }),
        goblin: await db.createLanguage({
            id: "language-goblin-alabastria",
            name: "Goblin",
            description: "A guttural tongue of hisses, grunts, and high-pitched chirrs, like a swarm of angry crows squabbling in a dark alley. Its writing often appears as jagged runes, as if clawed or gouged into stone."
        }),
        giff: await db.createLanguage({
            id: "language-giff-alabastria",
            name: "Giff",
            description: "Booming and brash, this language rolls out like a cannon blast with low chesty bellows broken by sudden shrieks and rasping chuckles. It has an oddly musical range, jumping from bass-heavy booms to tinny squeaks."
        }),
        hadozee: await db.createLanguage({
            id: "language-hadozee-alabastria",
            name: "Hadozee",
            description: "Soft and breezy, this language is made of low rumbling murmurs and owl-like hoots, flowing gently like waves against a wooden hull. Speech is often punctuated by barky clicks and breathy squeals, blending sound with subtle motion."
        }),
        quori: await db.createLanguage({
            id: "language-quori-alabastria",
            name: "Quori",
            description: "Sibilant and eerie, this language sounds like serpents whispering through dreams, its words hissing and rumbling with unsettling intent. Its script forms elegant circular sigils, like smoke curling into meaningful shapes."
        }),
        kenderspeak: await db.createLanguage({
            id: "language-kenderspeak-alabastria",
            name: "Kenderspeak",
            description: "Wildly whimsical and sprightly, this language dances along in a playful, question-filled rhythm that never seems to sit still. It flits between bright tones and quick babble, sounding as if the words themselves are hopping ahead of the speaker."
        }),
        leonin: await db.createLanguage({
            id: "language-leonin-alabastria",
            name: "Leonin",
            description: "Deep and proud, this language rumbles with low, powerful tones like a slow lion’s growl before bursting into thunderous shouts. Every word feels deliberate and forceful, trailing with confidence and sun-warmed strength."
        }),
        loxodon: await db.createLanguage({
            id: "language-loxodon-alabastria",
            name: "Loxodon",
            description: "Slow, meditative, and sonorous, this language hums like calm chanting backed by deep drums. Each syllable is drawn out in warm, mellow tones that feel as if they rise from deep within stone."
        }),
        minotaur: await db.createLanguage({
            id: "language-minotaur-alabastria",
            name: "Minotaur",
            description: "Guttural and blunt, this language crashes out in short bursts of snorts, growls, and heavy breaths. It often sounds like cattle lowing mixed with sharp bellows, emphasizing strength through sheer volume."
        }),
        owlin: await db.createLanguage({
            id: "language-owlin-alabastria",
            name: "Owlin",
            description: "Quiet and melodic, this language flows like a night breeze through feathers, ending phrases with soft hoots or gentle coos. It feels hushed and thoughtful, like lullabies whispered beneath moonlight."
        }),
        tabaxi: await db.createLanguage({
            id: "language-tabaxi-alabastria",
            name: "Tabaxi",
            description: "Playful and elastic, this language purrs and trills with rolling sounds, sudden hisses, and curious squeaks. It feels light and energetic, as if each word is chasing something just out of reach."
        }),
        thri_kreen: await db.createLanguage({
            id: "language-thri-kreen-alabastria",
            name: "Thri-kreen",
            description: "Alien and chittering, this language clicks, buzzes, and snaps like an insect chorus speaking in perfect rhythm. To most ears it barely registers as speech, sounding more like an intricate machine of mandible-snaps and whistles."
        }),
        vedalken: await db.createLanguage({
            id: "language-vedalken-alabastria",
            name: "Vedalken",
            description: "Coolly precise and smooth, this language slides from sound to sound with long vowels and soft sibilants. It feels measured and deliberate, like water flowing over polished stone or ink spreading cleanly across a page."
        }),
        unknown_dialects: await db.createLanguage({
            id: "language-unknown-dialects-alabastria",
            name: "Unknown Dialects",
            description: "A mysterious babble; unpredictable and varied. It may sound like a jumble of fragments from many tongues, a chaotic and esoteric jumble of sounds that defies easy description."
        }),
        any_one: await db.createLanguage({
            id: "language-any-one-alabastria",
            name: "Any One Language",
            description: "The ability to speak and understand any one language of your choice."
        }),
        any_two: await db.createLanguage({
            id: "language-any-two-alabastria",
            name: "Any Two Languages",
            description: "The ability to speak and understand any two languages of your choice."
        }),
        common_sign_language: await db.createLanguage({
            id: "language-common-sign-language-alabastria",
            name: "Common Sign Language",
            description: "A visual-gestural language using hand signs, facial expressions, and body language to convey meaning without spoken words."
        }),
        thieves_cant: await db.createLanguage({
            id: "language-thieves-cant-alabastria",
            name: "Thieves' Cant",
            description: "A secretive language used by rogues and thieves, consisting of coded phrases, slang, symbols, and gestures to communicate covertly."
        })
    }
}