import { Prisma } from '@prismagen/client';
import * as db from '@lib/db-seed';
import { Pantheons, Colors } from './index';

type DeityPayload = Prisma.DeityGetPayload<{}>;
export interface Deities {
	cyric: DeityPayload;
	tempus: DeityPayload;
	mystra: DeityPayload;
	lathander: DeityPayload;
	selune: DeityPayload;
	shar: DeityPayload;
	oghma: DeityPayload;
	deneir: DeityPayload;
	mask: DeityPayload;
	helm: DeityPayload;
	tyr: DeityPayload;
	chauntea: DeityPayload;
	ilmater: DeityPayload;
	talona: DeityPayload;
	tymora: DeityPayload;
	beshaba: DeityPayload;
	kelemvor: DeityPayload;
	bane: DeityPayload;
	myrkul: DeityPayload;
	jergal: DeityPayload;
	moradin: DeityPayload;
	berronar_truesilver: DeityPayload;
	clangeddin_silverbeard: DeityPayload;
	dugmaren_brightmantle: DeityPayload;
	vergadain: DeityPayload;
	corellon_larethian: DeityPayload;
	sehanine_moonbow: DeityPayload;
	hanali_celanil: DeityPayload;
	labelas_enoreth: DeityPayload;
	solonor_thelandira: DeityPayload;
	lolth: DeityPayload;
	vhaeraun: DeityPayload;
	eilistraee: DeityPayload;
	gruumsh_one_eye: DeityPayload;
	luthic: DeityPayload;
	ilneval: DeityPayload;
	bahgtru: DeityPayload;
	shargaas: DeityPayload;
	bahamut: DeityPayload;
	tiamat: DeityPayload;
	akadi: DeityPayload;
	grumbar: DeityPayload;
	kossuth: DeityPayload;
	istishia: DeityPayload;
	the_raven_queen: DeityPayload;
	asmodeus: DeityPayload;
	yondalla: DeityPayload;
	arvoreen: DeityPayload;
	cyrrollalee: DeityPayload;
	urogalan: DeityPayload;
	garl_glittergold: DeityPayload;
	baervan_wildwanderer: DeityPayload;
	baravar_cloakshadow: DeityPayload;
	segojan_earthcaller: DeityPayload;
	maglubiyet: DeityPayload;
	khurgorbaeyag: DeityPayload;
	bargrivyek: DeityPayload;
	nomog_geaya: DeityPayload;
	kurtulmak: DeityPayload;
	gith: DeityPayload;
	vlaakith: DeityPayload;
	sseth: DeityPayload;
	merrshaulk: DeityPayload;
	umberlee: DeityPayload;
	valkur: DeityPayload;
	deep_sashelas: DeityPayload;
	sekolah: DeityPayload;
}

interface SeedDeitiesParams {
	pantheons: Pantheons;
}
export async function seedDeities(params: SeedDeitiesParams): Promise<Deities> {
	const { pantheons } = params;
	return {
		cyric: await db.createDeity({
			id: 'cyric',
			name: 'Cyric',
			title: 'Prince of Lies',
			symbol: 'fas fa-sun-plant-wilt',
			additionalProperties: {
				alignment: 'Chaotic Evil',
				alabastriaContext:
					'Since The Bringing, Cyric’s presence in Alabastria has been subtle but deeply corrosive. His cult thrives in the shadows of major cities, especially where political intrigue, secret wars, and assassinations are common. His influence is most feared in fractured states and among criminal syndicates.',
			},
			description:
				"A chaotic evil Faerûnian god, the Prince of Lies and Dark Sun. Cyric is a petty, megalomaniacal deity of strife, murder, lies, intrigue, deception, and illusions, claiming superiority over all other gods. He delights in weaving deadly betrayal and chaos; legends say he often appears as a slim man with chalk-white skin and blazing dark eyes. Through his cults, Cyric's influence spreads via murder, conflicts and conspiracies across the Realms.",
			pantheonId: pantheons.human_centric_faerun_forgotten_realms.id,
			domains: ['Trickery', 'Death', 'Madness', 'Intrigue'],
			followers: [
				'Assassins',
				'Liars and deceivers',
				'Mad prophets',
				'Cultists',
				'Political conspirators',
			],
			temples:
				'Hidden shrines, underground chambers, and abandoned ruins',
			symbols: [
				'Black sun with a purple core',
				'Broken halo',
				'Bloodstained dagger',
				'Cracked skull',
			],
			colors: [Colors.BLACK.toString(), Colors.DARK_PURPLE.toString(), Colors.CRIMSON.toString(), Colors.GRAY.toString()],
		}),
		tempus: await db.createDeity({
			id: 'tempus',
			name: 'Tempus',
			title: 'Lord of Battles',
			symbol: 'fas fa-pen-fancy',
			additionalProperties: {
				alignment: 'Neutral',
				alabastriaContext:
					'Since The Bringing, Tempus has gained many followers among the Huntbound Order and military forces across all continents. His influence is strongest in Skratonia where organized warfare is most common.',
			},
			description:
				"The Chaotic Neutral Lord of Battles, god of war and honorable combat. He stands for valor, courage and the glory of battle, urging warriors to fight bravely and resolve disputes by force (cowardice is anathema). His domain covers all martial strife and righteous warfare; soldiers of every army pray to him for strength and victory. Tempus's legendary avatar is a towering 12-foot-tall armored warrior wielding a massive battle-axe, symbolizing the fury and discipline of combat.",
			pantheonId: pantheons.human_centric_faerun_forgotten_realms.id,
			domains: ['War', 'Battle', 'Strategy'],
			followers: [
				'Warriors',
				'Soldiers',
				'Strategists',
				'Huntbound Order',
			],
			temples: 'Fortresses and training grounds',
			symbols: [
				'Crossed swords',
				'Burning sword',
				'War banner',
				'Shield with lightning bolt',
				'Sword and shield',
			],
			colors: [Colors.CRIMSON.toString(), Colors.GOLD.toString(), Colors.SILVER.toString(), Colors.STEEL_GRAY.toString()],
		}),
		mystra: await db.createDeity({
			id: 'mystra',
			name: 'Mystra',
			title: 'Goddess of Magic',
			symbol: 'fas fa-magic',
			additionalProperties: {
				alignment: 'Neutral Good',
				alabastriaContext:
					"Mystra's influence is strongest in Kuriguer where magical anomalies and research institutions are concentrated. Her followers have been instrumental in understanding the magical properties of Alabastria.",
			},
			description:
				'The Faerûnian goddess of magic, known as the "Mother of All Magic." Mystra embodies the Weave of all arcane power. She stands for magical knowledge, balance, and the cosmic order of spellcasting, ensuring that magic laws are upheld. No single mortal image defines her; she often appears as a beautiful young woman or a shimmering multicolored wisp, able to shapechange at will. All wizards and sorcerers derive their spellcasting through her Weave, making her influence among spellcasters absolute.',
			pantheonId: pantheons.human_centric_faerun_forgotten_realms.id,
			domains: ['Magic', 'The Weave', 'Arcane Knowledge'],
			followers: [
				'Wizards',
				'Sorcerers',
				'Arcane Researchers',
				'Magic Scholars',
			],
			temples: 'Libraries and magical academies',
			symbols: [
				'Seven-pointed star',
				'Weave pattern',
				"Mystra's symbol",
				'Arcane circle',
				'Magic staff',
			],
			colors: [
				Colors.DARK_BLUE.toString(),
				Colors.SILVER.toString(),
				Colors.WHITE.toString(),
				Colors.DARK_PURPLE.toString(),
			],
		}),
		lathander: await db.createDeity({
			id: 'lathander',
			name: 'Lathander',
			title: 'Morninglord',
			symbol: 'fas fa-sun',
			additionalProperties: {
				alignment: 'Lawful Good',
				alabastriaContext:
					"Lathander's influence is strongest in Skratonia where his temples serve as centers of healing and renewal. His followers are often found among healers and those seeking new beginnings.",
			},
			description:
				"The Neutral Good Morninglord, god of dawn, renewal, and birth. He symbolizes hope, creativity and new beginnings, inspiring people to seize each new day's promise. Representing youth and the fertility of spring, Lathander's worshipers value self-improvement and the flourishing of life; he urges the destruction of undead and decay to let life prosper. His symbol is the rising sun, and he is often envisioned as a radiant young man in gilded armor greeting the dawn.",
			pantheonId: pantheons.human_centric_faerun_forgotten_realms.id,
			domains: ['Renewal', 'Dawn', 'Hope', 'Spring'],
			followers: [
				'Healers',
				'Paladins',
				'Farmers',
				'Those Seeking Renewal',
			],
			temples: 'Healing centers and agricultural communities',
			symbols: [
				'Rising sun',
				'Golden disk',
				"Dawn's light",
				'Spring flower',
				'Sunburst',
			],
			colors: [Colors.GOLD.toString(), Colors.YELLOW.toString(), Colors.WHITE.toString(), Colors.LIGHT_BLUE.toString()],
		}),
		selune: await db.createDeity({
			id: 'selune',
			name: 'Selûne',
			title: 'Our Lady of Silver',
			symbol: 'fas fa-moon',
			additionalProperties: {
				alignment: 'Chaotic Good',
				alabastriaContext:
					"Selûne's influence is strongest among coastal communities and travelers. Her followers are often found among sailors, rangers, and those who explore the unknown.",
			},
			description:
				'The Chaotic Good Moonmaiden of Faerûn, goddess of the moon and stars. She stands for guidance, hope, and prophecy under the night sky, watching over lost travelers, sailors, and werewolves (good lycanthropes). Selûne is often depicted as a beautiful woman with flowing silver hair and moonlit eyes, symbolizing gentle illumination in darkness. Her influence covers the cycles of the moon and the quest for mercy; she is locked in an eternal, light-versus-darkness struggle with her twin sister Shar.',
			pantheonId: pantheons.human_centric_faerun_forgotten_realms.id,
			domains: ['Moon', 'Navigation', 'Stars', 'Wanderers'],
			followers: ['Sailors', 'Rangers', 'Travelers', 'Explorers'],
			temples: 'Lighthouses and coastal shrines',
			symbols: [
				'Crescent moon',
				'Silver disk',
				'Star cluster',
				'Compass rose',
				'Moon and stars',
			],
			colors: [
				Colors.SILVER.toString(),
				Colors.WHITE.toString(),
				Colors.LIGHT_BLUE.toString(),
				Colors.PALE_GOLD.toString(),
			],
		}),
		shar: await db.createDeity({
			id: 'shar',
			name: 'Shar',
			title: 'Mistress of the Night',
			symbol: 'fas fa-eye-slash',
			additionalProperties: {
				alignment: 'Neutral Evil',
				alabastriaContext:
					"Shar's influence is strongest in the darker corners of society and among those who deal in secrets. Her followers are often found among rogues, spies, and those who have lost much.",
			},
			description:
				"The Neutral Evil goddess of darkness, night and loss. Twin sister of Selûne, Shar embodies shadow, secrets, oblivion and grief. She is the Lady of Loss and creator of the Shadow Weave, commanding power over memory and despair. Her followers worship forbidden secrets and emotional darkness; Shar's realm is hidden beneath the night, and she represents the inevitability of endings and forgotten things.",
			pantheonId: pantheons.human_centric_faerun_forgotten_realms.id,
			domains: ['Darkness', 'Secrets', 'Loss', 'Forgetting'],
			followers: [
				'Rogues',
				'Spies',
				'Those Who Have Lost',
				'Shadow Workers',
			],
			temples: 'Hidden shrines and secret meeting places',
			symbols: [
				'Black disk',
				'Shadow veil',
				'Dark moon',
				'Mystery symbol',
				'Eclipse',
			],
			colors: [
				Colors.BLACK.toString(),
				Colors.DARK_PURPLE.toString(),
				Colors.DARK_BLUE.toString(),
				Colors.SILVER.toString(),
			],
		}),
		oghma: await db.createDeity({
			id: 'oghma',
			name: 'Oghma',
			title: 'The Binder of What Is Known',
			symbol: 'fas fa-book-open',
			additionalProperties: {
				alignment: 'Neutral',
				alabastriaContext:
					'Since The Bringing, Oghma has become a stabilizing force in Alabastria, revered by scholars seeking to preserve pre-Bringing knowledge and to understand the new world. His temples often serve as libraries, universities, and neutral grounds for discourse across cultures.',
			},
			description:
				'The Unaligned (or Neutral) god of knowledge, inspiration and invention. Known as the Binder of What is Known, he oversees all recorded lore and ideas. Oghma stands for creativity in speech and writing, the spread of knowledge, and the power of the word; he is patron of bards, scribes, and scholars. He is depicted as a handsome, well-dressed man (often dark-haired) and his symbol is a blank scroll. His influence spans all collected knowledge, from ancient tomes to new inventions.',
			pantheonId: pantheons.human_centric_faerun_forgotten_realms.id,
			domains: ['Knowledge', 'Inspiration', 'Lore', 'Communication'],
			followers: [
				'Scholars',
				'Bards',
				'Historians',
				'Scribes',
				'Inventors',
			],
			temples: 'Libraries, archives, universities, and scriptoria',
			symbols: [
				'Open book with a blank page',
				'Quill crossed with a scroll',
				'Knot of knowledge',
				'Seven-pointed star of lore',
			],
			colors: [Colors.WHITE.toString(), Colors.LIGHT_BLUE.toString(), Colors.GOLD.toString(), Colors.GRAY.toString()],
		}),
		deneir: await db.createDeity({
			id: 'deneir',
			name: 'Deneir',
			title: 'The First Scribe',
			symbol: 'fas fa-feather-pointed',
			additionalProperties: {
				alignment: 'Neutral Good',
				alabastriaContext:
					'Since The Bringing, Deneir’s followers have worked closely with Oghman temples to transcribe fading memories and endangered texts. In Alabastria, his influence is strongest wherever laws, histories, and magical formulae must be carefully recorded and protected.',
			},
			description:
				"The Neutral Good lesser deity of glyphs, imagery, literature and cartography. As Oghma's scribe, Deneir embodies written and visual communication, inspiring artists, librarians, and mapmakers. He stands for the preservation of knowledge and the beauty of written language. Deneir is often portrayed as an old, gentle sage (long white beard, violet eyes) holding a quill and scroll. His influence covers libraries, art academies and the written word across the Realms.",
			pantheonId: pantheons.human_centric_faerun_forgotten_realms.id,
			domains: ['Knowledge', 'Writing', 'Glyphs', 'Literature'],
			followers: [
				'Scribes',
				'Librarians',
				'Archivists',
				'Chroniclers',
				'Rune scholars',
			],
			temples:
				'Scriptoria, record halls, rune libraries, and monasteries',
			symbols: [
				'Lit candle above an open book',
				'Runed quill',
				'Glyph-inscribed scroll',
				'Eye within a page',
			],
			colors: [
				Colors.BONE_WHITE.toString(),
				Colors.BLACK.toString(),
				Colors.GOLD.toString(),
				Colors.DARK_BLUE.toString(),
			],
		}),
		mask: await db.createDeity({
			id: 'mask',
			name: 'Mask',
			title: 'The Lord of Shadows',
			symbol: 'fas fa-masks-theater',
			additionalProperties: {
				alignment: 'Chaotic Neutral',
				alabastriaContext:
					'Since The Bringing, Mask has flourished in Alabastria’s expanding cities and trade hubs. His worship is strongest among thieves’ guilds, smugglers, and information brokers, where secrecy and misdirection are essential to survival.',
			},
			description:
				'The Chaotic Neutral (often Neutral Evil) god of shadows and thieves. Called the Lord of Shadows, he represents secrecy, stealth, and intrigue. Mask stands for cunning thievery and covert operations; his worshipers include burglars, assassins, and spies who use trickery as a tool. He is depicted wearing a blank black velvet mask or cloak, usually seen as a dark-hooded figure with a featureless mask and red-tipped symbol. His influence covers the hidden corners of the world and the manipulation of darkness.',
			pantheonId: pantheons.human_centric_faerun_forgotten_realms.id,
			domains: ['Trickery', 'Shadows', 'Thievery', 'Intrigue'],
			followers: [
				'Thieves',
				'Rogues',
				'Spies',
				'Smugglers',
				'Information brokers',
			],
			temples:
				'Hidden guild halls, back-alley shrines, and shadowed catacombs',
			symbols: [
				'Black mask',
				'Shadowed dagger',
				'Coin with a hole',
				'Cloaked figure',
			],
			colors: [Colors.BLACK.toString(), Colors.DARK_BLUE.toString(), Colors.SILVER.toString(), Colors.GRAY.toString()],
		}),
		helm: await db.createDeity({
			id: 'helm',
			name: 'Helm',
			title: 'The Vigilant One',
			symbol: 'fas fa-shield-halved',
			additionalProperties: {
				alignment: 'Lawful Neutral',
				alabastriaContext:
					'Since The Bringing, Helm has been revered by city guards, watchmen, and defenders of the realm in Alabastria. His temples often serve as barracks, training halls, and places of sanctuary during times of unrest.',
			},
			description:
				'The Lawful Neutral god of guardians, protection and vigilance. Known as the Vigilant One, Helm epitomizes duty and watchfulness. He stands for the steadfast defense of the helpless, inspiring guards and soldiers to constant vigilance. He is usually portrayed as a towering, fully armored warrior whose helm hides his face, and his symbol is an open eye. His power safeguards frontier posts, keeps, and paladins on guard, ever watchful against threats.',
			pantheonId: pantheons.human_centric_faerun_forgotten_realms.id,
			domains: ['Protection', 'Guardianship', 'Duty', 'Law'],
			followers: [
				'Guards',
				'Soldiers',
				'Watchmen',
				'Paladins',
				'Lawful magistrates',
			],
			temples: 'Fortified temples, watchtowers, barracks, and city walls',
			symbols: [
				'Closed helm',
				'Shield with an eye',
				'Watchtower',
				'Gauntleted fist',
			],
			colors: [
				Colors.STEEL_GRAY.toString(),
				Colors.SILVER.toString(),
				Colors.WHITE.toString(),
				Colors.DARK_BLUE.toString(),
			],
		}),
		tyr: await db.createDeity({
			id: 'tyr',
			name: 'Tyr',
			title: 'The Even-Handed',
			symbol: 'fas fa-scale-balanced',
			additionalProperties: {
				alignment: 'Lawful Good',
				alabastriaContext:
					'Since The Bringing, Tyr has been a guiding force for judges, magistrates, and paladins in Alabastria. His teachings underpin many of the legal systems in cities and kingdoms, emphasizing fairness, accountability, and moral responsibility.',
			},
			description:
				'The Lawful Good god of justice and righteousness. Tyr is the blind, one-handed "Even-Handed" god who embodies fair judgment and the rule of law. He stands for honor, rightful punishment, and the willingness to sacrifice for the greater good. Tyr\'s symbol is a balanced scale atop a warhammer, reflecting that both might and mercy serve justice. He is depicted as a noble armored warrior missing his hand, and he leads crusades against tyranny and evil in Faerûn.',
			pantheonId: pantheons.human_centric_faerun_forgotten_realms.id,
			domains: ['Justice', 'Law', 'Honor', 'Duty'],
			followers: [
				'Judges',
				'Paladins',
				'Lawyers',
				'City officials',
				'Soldiers upholding justice',
			],
			temples: 'Courthouses, fortified temples, and halls of justice',
			symbols: [
				'Balanced scales',
				'Sword over scales',
				'Blindfolded hand holding scales',
				'Gauntlet holding a sword',
			],
			colors: [Colors.WHITE.toString(), Colors.GOLD.toString(), Colors.SILVER.toString(), Colors.CRIMSON.toString()],
		}),
		chauntea: await db.createDeity({
			id: 'chauntea',
			name: 'Chauntea',
			title: 'The Great Mother',
			symbol: 'fas fa-seedling',
			additionalProperties: {
				alignment: 'Neutral Good',
				alabastriaContext:
					'Since The Bringing, Chauntea has been revered by farmers, gardeners, and rural communities across Alabastria. Her temples often serve as centers of agricultural knowledge, seasonal festivals, and communal guidance on cultivation.',
			},
			description:
				"The Neutral Good Earthmother, goddess of agriculture, life and the harvest. Chauntea embodies fertility of the land, nurturing crops, livestock and nature's bounty. She stands for growth, sustenance and community—the provider of food and the seasons. Often shown as a generous mother figure with flowers in her hair, she is usually depicted as a kindly, robust woman (white hair, farming garb) tending fields. Her followers include farmers and gardeners; her influence ensures abundant harvests and seasonal renewal.",
			pantheonId: pantheons.human_centric_faerun_forgotten_realms.id,
			domains: ['Agriculture', 'Harvest', 'Nature', 'Life'],
			followers: [
				'Farmers',
				'Gardeners',
				'Rangers',
				'Druids',
				'Herbalists',
			],
			temples:
				'Granaries, farm shrines, garden temples, and rural sanctuaries',
			symbols: [
				'Sheaf of wheat',
				'Blooming flower',
				'Cornucopia',
				'Tree with deep roots',
			],
			colors: [Colors.GREEN.toString(), Colors.BROWN.toString(), Colors.GOLD.toString(), Colors.LIGHT_BLUE.toString()],
		}),
		ilmater: await db.createDeity({
			id: 'ilmater',
			name: 'Ilmater',
			title: 'The Crying God',
			symbol: 'fas fa-hand-holding-heart',
			additionalProperties: {
				alignment: 'Lawful Good',
				alabastriaContext:
					'Since The Bringing, Ilmater’s worship has grown among refugees, the sick, and those affected by war and disaster in Alabastria. His temples often double as hospitals, orphanages, and shelters, serving as beacons of mercy and care.',
			},
			description:
				'The Lawful Good god of endurance, suffering and martyrdom. Called the Crying God or One Who Endures, Ilmater is the patron of the oppressed and the sick. He stands for compassion and perseverance, encouraging mercy and soothing pain; he teaches that suffering can have purpose. He is typically depicted as a gentle, kneeling figure (often wounded himself) with bands on his arms, signifying his willingness to share burdens. His influence is found in hospitals and orphanages, and he inspires aid to those in torment.',
			pantheonId: pantheons.human_centric_faerun_forgotten_realms.id,
			domains: ['Endurance', 'Suffering', 'Compassion', 'Healing'],
			followers: [
				'Healers',
				'Clerics',
				'Monks',
				'Caregivers',
				'Refugees and the oppressed',
			],
			temples: 'Hospitals, shelters, monasteries, and quiet sanctuaries',
			symbols: [
				'Pair of hands bound with a red cord',
				'Weeping face',
				'Broken chain',
				'Heart encircled by flame',
			],
			colors: [
				Colors.WHITE.toString(),
				Colors.CRIMSON.toString(),
				Colors.LIGHT_BLUE.toString(),
				Colors.SILVER.toString(),
			],
		}),
		talona: await db.createDeity({
			id: 'talona',
			name: 'Talona',
			title: 'Lady of Poison',
			symbol: 'fas fa-skull-crossbones',
			additionalProperties: {
				alignment: 'Chaotic Evil',
				alabastriaContext:
					'Since The Bringing, Talona’s worship has surged during times of plague, famine, and environmental collapse. Her cults are strongest in overcrowded cities, war-torn regions, and areas struck by unexplained illness. Many secretly placate her rather than openly worship her, hoping to avert her attention.',
			},
			description:
				'The Chaotic Evil goddess of poison, disease, and decay. She personifies sickness, plague and the maladies of the body. Talona stands for the inevitability of illness and the raw destructive power of contagion; outbreaks and mysterious poisons are her gifts (or curses). She is often depicted as a gaunt, withered crone or a beautiful temptress whose touch means death; both forms foretell disease. Her influence is felt wherever sickness spreads, and her shrines are marked with symbols of disease (vines or stalks).',
			pantheonId: pantheons.human_centric_faerun_forgotten_realms.id,
			domains: ['Poison', 'Disease', 'Decay', 'Suffering'],
			followers: [
				'Poisoners',
				'Plague cultists',
				'Assassins',
				'Alchemists',
				'Desperate commoners',
			],
			temples:
				'Hidden shrines, plague pits, ruined hospitals, and alchemical dens',
			symbols: [
				'Three teardrops falling from a skull',
				'Poisoned chalice',
				'Green-black serpent',
				'Withered flower',
			],
			colors: [
				Colors.SICKLY_GREEN.toString(),
				Colors.BLACK.toString(),
				Colors.YELLOW.toString(),
				Colors.BROWN.toString(),
			],
		}),
		tymora: await db.createDeity({
			id: 'tymora',
			name: 'Tymora',
			title: 'Lady Luck',
			symbol: 'fas fa-dice',
			additionalProperties: {
				alignment: 'Chaotic Good',
				alabastriaContext:
					"Tymora's influence is strongest among adventurers, gamblers, and those who take risks. Her followers are often found among the Huntbound Order and other adventuring groups.",
			},
			description:
				'The Chaotic Good goddess of good fortune and victory. Called Lady Luck, Tymora brings confidence and luck to daring individuals. She stands for boldness, skill, and taking chances; her followers (especially adventurers and gamblers) honor risk-taking and triumphant returns. Her symbol is a coin or nine-pointed star, and her demeanor is cheerful and generous. She is often depicted as a jovial young woman tossing coins, and her touch can turn the tide of events in favor of the brave.',
			pantheonId: pantheons.human_centric_faerun_forgotten_realms.id,
			domains: ['Good Fortune', 'Luck', 'Adventure', 'Gambling'],
			followers: [
				'Adventurers',
				'Gamblers',
				'Risk Takers',
				'Huntbound Order',
			],
			temples: 'Taverns and gambling halls',
			symbols: [
				'Gold coin',
				'Lucky clover',
				'Dice',
				'Fortune wheel',
				'Four-leaf clover',
			],
			colors: [Colors.GOLD.toString(), Colors.GREEN.toString(), Colors.WHITE.toString(), Colors.SILVER.toString()],
		}),
		beshaba: await db.createDeity({
			id: 'beshaba',
			name: 'Beshaba',
			title: 'Lady Doom',
			symbol: 'fas fa-skull',
			additionalProperties: {
				alignment: 'Chaotic Evil',
				alabastriaContext:
					"Beshaba's influence is strongest among those who have suffered great misfortune or who deal in curses and hexes. Her followers are often found among those who have been wronged.",
			},
			description:
				'The Chaotic Evil goddess of misfortune and ill luck. Nicknamed the Maiden of Misfortune, she sows accidents, bad omens and curses wherever she goes. Beshaba stands for chaos and random chance gone awry; her followers revel in envy and spite, hoping her wrath befalls others. Her symbol is a black antler (or twelve-pointed star), and she appears as a beautiful woman with disheveled white hair and yellow eyes. Sailors and travelers avoid unlucky gestures like her worshipers do, and shrines to Beshaba are hidden to escape her malicious attention.',
			pantheonId: pantheons.human_centric_faerun_forgotten_realms.id,
			domains: ['Misfortune', 'Bad Luck', 'Accidents', 'Curses'],
			followers: [
				'Those Who Have Suffered',
				'Cursed Individuals',
				'Hex Workers',
				'Victims of Misfortune',
			],
			temples: 'Cursed places and accident sites',
			symbols: [
				'Black Antlers',
				'Broken mirror',
				'Wilted flower',
				'Skull and crossbones',
			],
			colors: [Colors.BLACK.toString(), Colors.MAUVE.toString(), Colors.DARK_PURPLE.toString()],
		}),
		kelemvor: await db.createDeity({
			id: 'kelemvor',
			name: 'Kelemvor',
			title: 'Lord of the Dead',
			symbol: 'fas fa-balance-scale',
			additionalProperties: {
				alignment: 'Lawful Neutral',
				alabastriaContext:
					"Kelemvor's influence is strongest among those who deal with death and the dead. His followers are often found among clerics, undertakers, and those who seek justice.",
			},
			description:
				'The Lawful Neutral god of death and the dead. He is the fair Judge of the Damned, teaching that death is a natural part of life. Kelemvor offers a merciful, unbiased passage to the afterlife, insisting souls accept death without fear. He is typically depicted as a stern but just warrior (often in black armor with green eyes), and his holy symbol is a balanced set of scales. As god of the dead, he governs funerals and the fair distribution of souls, opposing undead aberrations.',
			pantheonId: pantheons.human_centric_faerun_forgotten_realms.id,
			domains: ['Death', 'Judgment', 'The Dead', 'Justice'],
			followers: [
				'Clerics',
				'Undertakers',
				'Judges',
				'Those Seeking Justice',
			],
			temples: 'Cemeteries and courthouses',
			symbols: [
				'Skeleton',
				'Scale',
				'Sword',
				'Death symbol',
				'Scales of justice',
			],
			colors: [Colors.BLACK.toString(), Colors.WHITE.toString(), Colors.SILVER.toString(), Colors.GRAY.toString()],
		}),
		bane: await db.createDeity({
			id: 'bane',
			name: 'Bane',
			title: 'The Black Hand',
			symbol: 'fas fa-fist-raised',
			additionalProperties: {
				alignment: 'Lawful Evil',
				alabastriaContext:
					"Bane's influence is strongest among tyrants, conquerors, and those who seek to control others through fear. His followers are often found among the ruling classes and military leaders.",
			},
			description:
				"The Lawful Evil god of tyranny, fear and hate. Known as the Black Hand, Bane epitomizes ruthless oppression and control. He commands armies and imposes strict order, demanding absolute loyalty. His symbol is a black gauntlet or hand, and he is portrayed as a towering armored warrior. Bane's influence lies in despotic rule and war; his clergy focus on subjugating the weak and enforcing a brutal hierarchy.",
			pantheonId: pantheons.human_centric_faerun_forgotten_realms.id,
			domains: ['Tyranny', 'Conquest', 'Fear', 'Oppression'],
			followers: [
				'Tyrants',
				'Conquerors',
				'Military Leaders',
				'Those Seeking Power',
			],
			temples: 'Fortresses and military bases',
			symbols: [
				'Clenched fist',
				'Black gauntlet',
				'Tyranny symbol',
				'Iron crown',
				'Fist of Bane',
			],
			colors: [Colors.BLACK.toString(), Colors.RED.toString(), Colors.GRAY.toString(), Colors.CRIMSON.toString()],
		}),
		myrkul: await db.createDeity({
			id: 'myrkul',
			name: 'Myrkul',
			title: 'Lord of Bones',
			symbol: 'fas fa-skull-crossbones',
			additionalProperties: {
				alignment: 'Neutral Evil',
				alabastriaContext:
					"Myrkul's influence is strongest among necromancers, undead, and those who deal with death magic. His followers are often found among the undead and those who seek to cheat death.",
			},
			description:
				'The Neutral Evil god of death, decay and old age. Called the Lord of Bones, Myrkul rules over the mortal end and the pull of the grave. He stands for the natural decay of life and the inevitability of death. He is usually depicted as a skeletal figure in flowing black robes or as a skull-faced specter. His worshipers know his symbol to be a white human skull; under his shadow, life withers away, and undead often arise seeking his service.',
			pantheonId: pantheons.human_centric_faerun_forgotten_realms.id,
			domains: ['Undeath', 'Necromancy', 'The Undead', 'Decay'],
			followers: [
				'Necromancers',
				'Undead',
				'Those Seeking Immortality',
				'Death Magic Users',
			],
			temples: 'Necropolises and undead lairs',
			symbols: [
				'White Human skull',
				'Bone',
				'Death symbol',
				'Skull and crossbones',
				'Grim Reaper',
			],
			colors: [Colors.BLACK.toString(), Colors.BONE_WHITE.toString()],
		}),
		jergal: await db.createDeity({
			id: 'jergal',
			name: 'Jergal',
			title: 'Scribe of the Dead',
			symbol: 'fas fa-book-skull',
			additionalProperties: {
				alignment: 'True Neutral',
				alabastriaContext:
					"Jergal's influence is strongest among scribes, historians, and those who deal with records and knowledge. His followers are often found among scholars and record keepers.",
			},
			description:
				"The Neutral god of death's record-keeping. He is the original Keeper of Souls but long ago ceded power to Myrkul (and later Kelemvor). Jergal is also the scribe and torchbearer of the dead, serving under Kelemvor as the Recorder of the Damned. He stands for the end of all things and the orderliness of death. He is depicted as a senile, emaciated being or sometimes a praying mantis-like creature with a cloak, quill and ledger, emphasizing his role as death's humble clerk.",
			pantheonId: pantheons.human_centric_faerun_forgotten_realms.id,
			domains: ['Records of the Dead', 'Fate', 'History', 'Knowledge'],
			followers: ['Scribes', 'Historians', 'Record Keepers', 'Scholars'],
			temples: 'Libraries and record halls',
			symbols: [
				'A skull biting a scroll',
				'Quill and ledger',
				'Hourglass with wings',
				'Book of the dead',
			],
			colors: [Colors.GRAY.toString(), Colors.BROWN.toString()],
		}),
		moradin: await db.createDeity({
			id: 'moradin',
			name: 'Moradin',
			title: 'Soul Forger',
			symbol: 'fas fa-hammer',
			additionalProperties: {
				alignment: 'Lawful Good',
				alabastriaContext:
					"Moradin's influence is strongest among dwarven communities and craftsmen. His followers are often found among blacksmiths, miners, and those who work with metal.",
			},
			description:
				"The Lawful Good chief deity of the dwarves and their creator. Called the Soul Forger, he is god of the forge, creation and family. Moradin stands for craftsmanship, honor, and duty; he inspires dwarves to build strong communities and fine metalworks. He is depicted as a tall, muscular dwarf in a smith's apron wielding hammer and tongs, with a long flowing beard. His influence encompasses all dwarven industry, clan loyalty, and the crafting of enchanted weapons.",
			pantheonId: pantheons.dwarves_moradins_folk.id,
			domains: ['Creation', 'Forge', 'Craftsmanship', 'Dwarves'],
			followers: ['Dwarves', 'Blacksmiths', 'Miners', 'Craftsmen'],
			temples: 'Forges and workshops',
			symbols: [
				'Hammer and anvil',
				'Mountain',
				'Forge',
				'Dwarven rune',
				'Hammer of Moradin',
			],
			colors: [Colors.BROWN.toString(), Colors.GOLD.toString(), Colors.ORANGE.toString(), Colors.GRAY.toString()],
		}),
		berronar_truesilver: await db.createDeity({
			id: 'berronar-truesilver',
			name: 'Berronar Truesilver',
			title: 'The Shield Mother',
			symbol: 'fas fa-shield-alt',
			additionalProperties: {
				alignment: 'Lawful Good',
				alabastriaContext:
					"Berronar's influence is strongest among dwarven families and those who seek to protect their homes. Her followers are often found among mothers, protectors, and those who maintain homes.",
			},
			description:
				'The Lawful Good dwarven goddess of hearth, home and healing. Revered as the matron of dwarves, she embodies compassion, family and tradition. Berronar stands for loyalty and community: dwarves pray to her for protection of marriages and for comfort in hard times. She appears as a kind, maternal dwarf woman (often with silver-white hair) cradling children or at a workbench, reflecting her role as caretaker. Her blessings are sought for childbirth, healing wounds, and the warmth of the hearth.',
			pantheonId: pantheons.dwarves_moradins_folk.id,
			domains: ['Home', 'Hearth', 'Family', 'Protection'],
			followers: [
				'Dwarven Mothers',
				'Protectors',
				'Home Keepers',
				'Family Members',
			],
			temples: 'Homes and family shrines',
			symbols: [
				'Shield',
				'Hammer',
				'Dwarven symbol',
				'Protection symbol',
				'Shield of truth',
			],
			colors: [Colors.SILVER.toString(), Colors.BLUE.toString(), Colors.WHITE.toString(), Colors.GOLD.toString()],
		}),
		clangeddin_silverbeard: await db.createDeity({
			id: 'clangeddin-silverbeard',
			name: 'Clangeddin Silverbeard',
			title: 'The Battle Lord',
			symbol: 'fas fa-tents',
			additionalProperties: {
				alignment: 'Lawful Good',
				alabastriaContext:
					"Clangeddin's influence is strongest among dwarven warriors and those who fight for honor. His followers are often found among soldiers, paladins, and those who seek justice through combat.",
			},
			description:
				'The Lawful Good dwarven god of war and valor. Known as the Lord of the Twin Axes, he inspires courage and honor in battle. He stands for martial bravery, never surrendering and fighting with fair strength. Clangeddin is depicted as a fierce dwarf warrior with a magnificent silver beard and two battleaxes. His influence is strongest among dwarven armies and fighters; he is worshiped when the clan calls arms against its foes.',
			pantheonId: pantheons.dwarves_moradins_folk.id,
			domains: ['Battle', 'War', 'Honor', 'Courage'],
			followers: [
				'Dwarven Warriors',
				'Soldiers',
				'Paladins',
				'Honor Seekers',
			],
			temples: 'Barracks and training grounds',
			symbols: [
				'War camp',
				'Battle axe',
				'Dwarven symbol',
				'Shield',
				'Axe of war',
			],
			colors: [Colors.SILVER.toString(), Colors.BLUE.toString(), Colors.WHITE.toString(), Colors.GOLD.toString()],
		}),
		dugmaren_brightmantle: await db.createDeity({
			id: 'dugmaren-brightmantle',
			name: 'Dugmaren Brightmantle',
			title: 'The Gleam in the Eye',
			symbol: 'fas fa-lightbulb',
			additionalProperties: {
				alignment: 'Chaotic Good',
				alabastriaContext:
					"Dugmaren's influence is strongest among dwarven inventors and those who seek new knowledge. His followers are often found among engineers, researchers, and those who create new things.",
			},
			description:
				'The Lawful Good dwarven god of invention, exploration and discovery. He encourages curiosity and innovation among dwarves. Known for his wandering, thoughtful nature, Dugmaren stands for breaking tradition when seeking knowledge. He appears as an elder dwarf (often cheerful, with bright eyes) surrounded by books and tools. His followers are scholars, wizards and inventors who push the boundaries of dwarven lore and technology.',
			pantheonId: pantheons.dwarves_moradins_folk.id,
			domains: ['Discovery', 'Invention', 'Innovation', 'Knowledge'],
			followers: [
				'Dwarven Inventors',
				'Engineers',
				'Researchers',
				'Innovators',
			],
			temples: 'Libraries and workshops',
			symbols: [
				'Light bulb',
				'Book',
				'Gnome symbol',
				'Innovation symbol',
				'Bright mantle',
			],
			colors: [Colors.GOLD.toString(), Colors.BLUE.toString(), Colors.WHITE.toString(), Colors.SILVER.toString()],
		}),
		vergadain: await db.createDeity({
			id: 'vergadain',
			name: 'Vergadain',
			title: 'The Merchant King',
			symbol: 'fas fa-coins',
			additionalProperties: {
				alignment: 'Neutral',
				alabastriaContext:
					"Vergadain's influence is strongest among dwarven merchants and those who deal in trade. His followers are often found among traders, merchants, and those who seek wealth.",
			},
			description:
				'The Neutral Good dwarven god of luck, wealth and trickery. Known as the Laughing Dwarf, he is patron of merchants, gamblers and fortune-seekers. He stands for fortune and shrewd bargaining: dwarves pray to him for profitable deals and lucky finds. He often appears as a rotund dwarf carrying coins or gems, always with a wry smile. His influence encourages dwarves to seek wealth and to outwit their competitors through cunning wit.',
			pantheonId: pantheons.dwarves_moradins_folk.id,
			domains: ['Wealth', 'Luck', 'Trade', 'Commerce'],
			followers: [
				'Dwarven Merchants',
				'Traders',
				'Wealth Seekers',
				'Entrepreneurs',
			],
			temples: 'Markets and trading posts',
			symbols: [
				'Gold coin with the face of a dwarf',
				'Bag of coins',
				'Merchant symbol',
				'Trade symbol',
				'Laughing dwarf',
			],
			colors: [Colors.DARK_PURPLE.toString(), Colors.GOLD.toString()],
		}),
		corellon_larethian: await db.createDeity({
			id: 'corellon-larethian',
			name: 'Corellon Larethian',
			title: 'Creator of the Elves',
			symbol: 'fas fa-palette',
			additionalProperties: {
				alignment: 'Chaotic Good',
				alabastriaContext:
					"Corellon's influence is strongest among elven communities and artists. His followers are often found among bards, wizards, and those who create beautiful things.",
			},
			description:
				'The Chaotic Good leader of the elven pantheon. God of magic, arts, music, and war for the elven race. Corellon embodies elven creativity and martial skill. Often depicted as an androgynous or dual-gendered elf wielding a star-tipped sword, he represents beauty and balance. His influence covers all elven culture, and he created the elves in Faerûn; he stands for art, poetry and victory against invaders.',
			pantheonId: pantheons.elves_the_seldarine_dark_seldarine.id,
			domains: ['Elves', 'Art', 'Magic', 'Music'],
			followers: ['Elves', 'Artists', 'Bards', 'Wizards', 'Creators'],
			temples: 'Art galleries and magical academies',
			symbols: [
				'Silver crescent',
				'Artistic brush',
				'Musical note',
				'Crescent moon',
			],
			colors: [Colors.SILVER.toString(), Colors.BLUE.toString(), Colors.WHITE.toString(), Colors.GOLD.toString()],
		}),
		sehanine_moonbow: await db.createDeity({
			id: 'sehanine-moonbow',
			name: 'Sehanine Moonbow',
			title: 'Goddess of Dreams',
			symbol: 'fas fa-moon',
			additionalProperties: {
				alignment: 'Chaotic Good',
				alabastriaContext:
					"Sehanine's influence is strongest among elven rangers and those who journey. Her followers are often found among rangers, druids, and those who explore the unknown.",
			},
			description:
				'The Chaotic Good elven goddess of the moon, dreams and death. She is the Lunar Lady guiding souls, as well as patron of illusions and secret knowledge. Sehanine stands for mysteries, prophecy and the cycle of life and death; she safely leads elven souls through the stars. She is often portrayed as an ageless elf bathed in moonlight. Her influence extends to night vision, dreams and guiding friends safely through transitions.',
			pantheonId: pantheons.elves_the_seldarine_dark_seldarine.id,
			domains: ['Dreams', 'Journeys', 'Death', 'Mysteries'],
			followers: ['Elven Rangers', 'Druids', 'Explorers', 'Dreamers'],
			temples: 'Forest shrines and journey markers',
			symbols: [
				'Full moon',
				'Moonbow',
				'Crescent moon',
				'Moon and stars',
			],
			colors: [Colors.SILVER.toString(), Colors.WHITE.toString()],
		}),
		hanali_celanil: await db.createDeity({
			id: 'hanali-celanil',
			name: 'Hanali Celanil',
			title: 'Goddess of Love',
			symbol: 'fas fa-heart',
			additionalProperties: {
				alignment: 'Chaotic Good',
				alabastriaContext:
					"Hanali's influence is strongest among elven communities and those who appreciate beauty. Her followers are often found among artists, lovers, and those who seek beauty.",
			},
			description:
				"The Chaotic Good elven goddess of love and beauty. Known as the Lady Goldheart, she embodies romance, joy and the artistic side of elves. Hanali stands for the celebration of love in all forms and the pursuit of art for beauty's sake. She is depicted as a luminous, heartbreakingly beautiful elf, often surrounded by petals or song. Her influence inspires poets, artists, and lovers; her temples are places of weddings and joy.",
			pantheonId: pantheons.elves_the_seldarine_dark_seldarine.id,
			domains: ['Love', 'Beauty', 'Romance', 'Art'],
			followers: [
				'Elven Artists',
				'Lovers',
				'Beauty Seekers',
				'Romantics',
			],
			temples: 'Gardens and art galleries',
			symbols: ['Golden heart', 'Rose', 'Heart with wings', 'Flower'],
			colors: [Colors.GOLD.toString(), Colors.PINK.toString()],
		}),
		labelas_enoreth: await db.createDeity({
			id: 'labelas-enoreth',
			name: 'Labelas Enoreth',
			title: 'God of Time',
			symbol: 'fas fa-clock',
			additionalProperties: {
				alignment: 'Neutral Good',
				alabastriaContext:
					"Labelas's influence is strongest among elven scholars and those who study history. His followers are often found among historians, scholars, and those who seek wisdom.",
			},
			description:
				"The Chaotic Good elven god of time and longevity. Called the Lord of the Continuum, he ensures time's orderly flow and guards against temporal disruption. He stands for wisdom gained over long life and respect for history. He is depicted as an ageless elf (sometimes with an eyepatch) using a symbol of the setting sun. Labelas guides elves through their long lives and afterlife, keeping the calendar of elven history.",
			pantheonId: pantheons.elves_the_seldarine_dark_seldarine.id,
			domains: ['Time', 'Wisdom', 'Longevity', 'Memory'],
			followers: [
				'Elven Scholars',
				'Historians',
				'Wisdom Seekers',
				'Memory Keepers',
			],
			temples: 'Libraries and historical sites',
			symbols: ['Setting sun', 'Hourglass', 'Clock face'],
			colors: [Colors.GOLD.toString(), Colors.SILVER.toString()],
		}),
		solonor_thelandira: await db.createDeity({
			id: 'solonor-thelandira',
			name: 'Solonor Thelandira',
			title: 'God of Archery',
			symbol: 'fas fa-arrows-up-to-line',
			additionalProperties: {
				alignment: 'Chaotic Good',
				alabastriaContext:
					"Solonor's influence is strongest among elven rangers and hunters. His followers are often found among rangers, hunters, and those who live in the wilderness.",
			},
			description:
				'The Chaotic Good elven god of hunting, archery and survival in the wild. He teaches elven skill in the bow, tracking, and woodcraft. Solonor stands for harmony with nature and the protection of wild places. He is depicted as a lean, hooded elf with a longbow, moving silently through the forest. His influence covers rangers and scouts; elves pray to him for keen sight and success in the hunt.',
			pantheonId: pantheons.elves_the_seldarine_dark_seldarine.id,
			domains: ['Archery', 'Wilderness', 'Hunting', 'Nature'],
			followers: [
				'Elven Rangers',
				'Hunters',
				'Wilderness Dwellers',
				'Archers',
			],
			temples: 'Forest shrines and hunting lodges',
			symbols: ['Silver arrow', 'Bow and arrow', 'Arrowhead'],
			colors: [Colors.GREEN.toString(), Colors.BROWN.toString()],
		}),
		lolth: await db.createDeity({
			id: 'lolth',
			name: 'Lolth',
			title: 'Spider Queen',
			symbol: 'fas fa-spider',
			additionalProperties: {
				alignment: 'Chaotic Evil',
				alabastriaContext:
					"Lolth's influence is strongest among dark elves and those who seek power through deception. Her followers are often found among drow, rogues, and those who deal in lies.",
			},
			description:
				"The Chaotic Evil drow (dark elf) goddess of spiders, darkness and chaos. The Queen of Spiders, she demands cruelty and deceit from her worshipers. She stands for betrayal, ambition and the treacherous hierarchy of the Underdark. In art she is shown as a cruel drow woman or a giant black widow; her clerics know that trust is a weakness. Lolth's influence enslaves the drow under her terror; she embodies the idea that power comes through manipulation and cruelty.",
			pantheonId: pantheons.elves_the_seldarine_dark_seldarine.id,
			domains: ['Spiders', 'Lies', 'Domination', 'Darkness'],
			followers: ['Drow', 'Rogues', 'Deceivers', 'Power Seekers'],
			temples: 'Underground shrines and dark places',
			symbols: ['Spider', 'Web', 'Eight-pointed star', 'Spider web'],
			colors: [Colors.BLACK.toString(), Colors.DARK_PURPLE.toString(), Colors.SILVER.toString(), Colors.RED.toString()],
		}),
		vhaeraun: await db.createDeity({
			id: 'vhaeraun',
			name: 'Vhaeraun',
			title: 'God of Shadow',
			symbol: 'fas fa-mask',
			additionalProperties: {
				alignment: 'Chaotic Evil',
				alabastriaContext:
					"Vhaeraun's influence is strongest among dark elves and those who rebel against authority. His followers are often found among rogues, rebels, and those who deal in shadows.",
			},
			description:
				"The Neutral Evil drow god of male drow, thievery and shadows. Known as the Masked Lord, he opposes Lolth's rule and advocates male dominance (within drow society). He stands for rebellion, change and freedom for marginalized drow, encouraging stealth and illusion. He appears as a handsome dark elf male wearing a black mask. His influence is over infiltrators and those who live by stealth, as he teaches that shadows and subterfuge can overturn tyranny.",
			pantheonId: pantheons.elves_the_seldarine_dark_seldarine.id,
			domains: ['Shadow', 'Rebellion', 'Thievery', 'Secrets'],
			followers: ['Dark Elves', 'Rogues', 'Rebels', 'Thieves'],
			temples: 'Hidden shrines and secret meeting places',
			symbols: ['Black mask', 'Shadowy figure', 'Crescent moon'],
			colors: [Colors.RED.toString(), Colors.BLACK.toString()],
		}),
		eilistraee: await db.createDeity({
			id: 'eilistraee',
			name: 'Eilistraee',
			title: 'Goddess of Song',
			symbol: 'fas fa-music',
			additionalProperties: {
				alignment: 'Chaotic Good',
				alabastriaContext:
					"Eilistraee's influence is strongest among dark elves who seek redemption and those who appreciate music. Her followers are often found among bards, dancers, and those who seek redemption.",
			},
			description:
				'The Chaotic Good drow goddess of moonlight, dance and redemption. The Dark Maiden encourages drow to seek harmony and kindness. She stands for hope and compassion, teaching that even dark elves can turn to good. She is often depicted as a joyful dark elf woman dancing under the moon. Her followers (particularly surface-dwelling drow) embrace music, the hunt and guiding lost souls back to the light.',
			pantheonId: pantheons.elves_the_seldarine_dark_seldarine.id,
			domains: ['Song', 'Redemption', 'Dance', 'Beauty'],
			followers: [
				'Redeemed Dark Elves',
				'Bards',
				'Dancers',
				'Redemption Seekers',
			],
			temples: 'Music halls and dance studios',
			symbols: [
				'Unclad female drow with long hair dancing before a full moon with a silver bastard sword',
				'Musical note',
				'Dancing figure',
			],
			colors: [Colors.GOLD.toString(), Colors.SILVER.toString()],
		}),
		gruumsh_one_eye: await db.createDeity({
			id: 'gruumsh-one-eye',
			name: 'Gruumsh One-Eye',
			title: 'The One-Eyed God',
			symbol: 'fas fa-eye-slash',
			additionalProperties: {
				alignment: 'Chaotic Evil',
				alabastriaContext:
					"Since The Bringing, Gruumsh has found new followers among the orc tribes scattered across Alabastria's harsh lands, particularly in the Blood Badlands and other unforgiving territories.",
			},
			description:
				'The Lawful Evil chief god of the orc race. The one-eyed war god, symbolized by an unblinking eye, who demands that orcs conquer all lands. Gruumsh stands for strength through conflict and the eternal struggle against enemies (especially elves). He is depicted as a massive one-eyed orc warrior with iron-gray skin. His influence drives orc tribes into ceaseless war and conquest, as he himself seeks to prove orcish dominance.',
			pantheonId: pantheons.orcs_tribe_of_gruumsh.id,
			domains: ['War', 'Destruction', 'Conquest'],
			followers: ['Orcs', 'Barbarians', 'Conquerors'],
			temples: 'War Camps',
			symbols: ['Triangular eye', 'Broken sword'],
			colors: [Colors.RED.toString(), Colors.BLACK.toString()],
		}),
		luthic: await db.createDeity({
			id: 'luthic',
			name: 'Luthic',
			title: 'The Cave Mother',
			symbol: 'fas fa-mountain',
			additionalProperties: {
				alignment: 'Lawful Evil',
				alabastriaContext:
					"Luthic's influence has been crucial for orc survival in Alabastria's harsh environments, particularly in the Blood Badlands where her followers have established hidden cave settlements.",
			},
			description:
				"The Lawful Evil orc goddess of fertility, healing and home. Called the Cave Mother, she cares for orc mothers and wounded warriors. She stands for the nurturing, maternal side of orc society (an exception in their brutal pantheon). She is envisioned as a stout orc matronly figure. Orcs honor her for her blessings of fertility and for tending the injured, believing she ensures the clan's continued life.",
			pantheonId: pantheons.orcs_tribe_of_gruumsh.id,
			domains: ['Fertility', 'Healing', 'Caves'],
			followers: ['Orc Mothers', 'Healers', 'Cave Dwellers'],
			temples: 'Cave Sanctuaries',
			symbols: ['Cave bear', 'Cave'],
			colors: [Colors.BROWN.toString(), Colors.GREEN.toString()],
		}),
		ilneval: await db.createDeity({
			id: 'ilneval',
			name: 'Ilneval',
			title: 'The War Chief',
			symbol: 'fas fa-chess',
			additionalProperties: {
				alignment: 'Lawful Evil',
				alabastriaContext:
					"Ilneval's strategic wisdom has been invaluable for orc survival in Alabastria, helping them adapt their warfare tactics to the new world's challenges.",
			},
			description:
				'The Lawful Evil orc god of battle strategy and leadership. Known as the War-Maker, he encourages orc warlords to plan cunning campaigns and seek martial glory. He stands for discipline and tactical prowess in battle. He is portrayed as a towering orc general with armor and sword. His influence is strongest among orc commanders who value honor in warfare and domination through organized force.',
			pantheonId: pantheons.orcs_tribe_of_gruumsh.id,
			domains: ['War', 'Strategy', 'Leadership'],
			followers: ['Orc Generals', 'Tacticians', 'War Leaders'],
			temples: 'War Academies',
			symbols: ['Bloodied sword'],
			colors: [Colors.RED.toString(), Colors.SILVER.toString()],
		}),
		bahgtru: await db.createDeity({
			id: 'bahgtru',
			name: 'Bahgtru',
			title: 'The Brute',
			symbol: 'fas fa-fist-raised',
			additionalProperties: {
				alignment: 'Chaotic Evil',
				alabastriaContext:
					"Bahgtru's followers have become known for their incredible physical strength and unwavering loyalty, making them valuable allies and fearsome enemies in Alabastria.",
			},
			description:
				'The Lawful Evil orc god of strength and combat. Called the Leg-Breaker, he embodies raw physical power and rage in battle. He stands for brute force and unwavering loyalty to the clan. He is depicted as a huge, muscle-bound orc wielding weapons. His influence drives orcs to crush foes with overwhelming might; he is worshiped by those orcs who prize sheer strength above all.',
			pantheonId: pantheons.orcs_tribe_of_gruumsh.id,
			domains: ['Strength', 'Loyalty', 'Brute Force'],
			followers: ['Orc Warriors', 'Berserkers', 'Bodyguards'],
			temples: 'Training Grounds',
			symbols: ['Broken bone'],
			colors: [Colors.BROWN.toString(), Colors.RED.toString()],
		}),
		shargaas: await db.createDeity({
			id: 'shargaas',
			name: 'Shargaas',
			title: 'The Night Stalker',
			symbol: 'fas fa-mask',
			additionalProperties: {
				alignment: 'Chaotic Evil',
				alabastriaContext:
					"Shargaas's followers have found new opportunities in Alabastria's complex political landscape, serving as spies, assassins, and information brokers.",
			},
			description:
				'The Neutral Evil orc god of darkness and stealth. The Night Lord of the orcs, Shargaas patronizes assassins, spies and those who move unseen. He stands for secrecy, intuition and the fear of the night. He appears as a gaunt, black-skinned orc shrouded in shadow. His influence encourages orcs to use ambush and terror, believing in strength that hides in darkness.',
			pantheonId: pantheons.orcs_tribe_of_gruumsh.id,
			domains: ['Darkness', 'Stealth', 'Thievery'],
			followers: ['Assassins', 'Thieves', 'Spies'],
			temples: 'Hidden Shrines',
			symbols: ['Red crescent moon', 'Horned mask'],
			colors: [Colors.BLACK.toString(), Colors.GRAY.toString()],
		}),
		bahamut: await db.createDeity({
			id: 'bahamut',
			name: 'Bahamut',
			title: 'The Platinum Dragon',
			symbol: 'fas fa-shield-alt',
			additionalProperties: {
				alignment: 'Lawful Good',
				alabastriaContext:
					"Bahamut's influence has been crucial for dragonborn integration into Alabastrian society, providing them with a moral compass and sense of purpose.",
			},
			description:
				'The Lawful Good dragon god of justice and nobility. The Platinum Dragon and father of all good dragons, he embodies honor, mercy and protection of the weak. He stands for righteous rule and the duty of the strong to defend the innocent. In his true form, Bahamut is a magnificent great platinum dragon. His symbol is a seven-pointed star and he is the sworn enemy of Tiamat; his influence is felt wherever dragons or paladins fight for justice.',
			pantheonId: pantheons.dragons_dragonborn.id,
			domains: ['Justice', 'Protection', 'Nobility'],
			followers: ['Dragonborn', 'Paladins', 'Noble Warriors'],
			temples: 'Noble Temples',
			symbols: [
				'Dragon head',
				'Platinum scale',
				'Divine symbol',
				'Wing',
				'Platinum dragon',
			],
			colors: [Colors.PLATINUM.toString(), Colors.WHITE.toString(), Colors.GOLD.toString(), Colors.SILVER.toString()],
		}),
		tiamat: await db.createDeity({
			id: 'tiamat',
			name: 'Tiamat',
			title: 'The Chromatic Dragon',
			symbol: 'fas fa-crown',
			additionalProperties: {
				alignment: 'Chaotic Evil',
				alabastriaContext:
					"Tiamat's influence has been a constant threat in Alabastria, with her followers seeking power, wealth, and domination over others.",
			},
			description:
				"The Lawful Evil five-headed goddess of evil dragons. Queen of the Chromatic Dragons, Tiamat has five dragon heads (red, green, black, white, blue) and represents greed, tyranny and destructive power. She stands for cruelty and ambition: her worship encourages dragonkind to dominate and destroy. In art, she is depicted as a massive dragon with all five heads, each spitting a different elemental breath. Tiamat's influence commands evil dragons and their cults, opposing her noble brother Bahamut.",
			pantheonId: pantheons.dragons_dragonborn.id,
			domains: ['Greed', 'Tyranny', 'Vengeance'],
			followers: ['Evil Dragonborn', 'Tyrants', 'Greedy Merchants'],
			temples: 'Dark Fortresses',
			symbols: [
				'Five-headed dragon',
				'Chromatic scale',
				'Evil symbol',
				'Claw',
				'Five-headed dragon',
			],
			colors: [
				Colors.RED.toString(),
				Colors.BLUE.toString(),
				Colors.GREEN.toString(),
				Colors.BLACK.toString(),
				Colors.WHITE.toString(),
			],
		}),
		akadi: await db.createDeity({
			id: 'akadi',
			name: 'Akadi',
			title: 'The Queen of Air',
			symbol: 'fas fa-wind',
			additionalProperties: {
				alignment: 'Chaotic Neutral',
				alabastriaContext:
					"Akadi's influence has been crucial for air genasi and sailors in Alabastria, helping them navigate the winds and adapt to change.",
			},
			description:
				'The True Neutral faerûnian elemental goddess of air and movement. Queen of the Winds, she embodies freedom, speed and change. Akadi stands for the open sky and wanderlust; her worshipers embrace travel and constant motion. She appears as a translucent blue-winged woman or a swirling column of wind. Her influence governs storms, the breath of life, and the unbound spirit of flight.',
			pantheonId: pantheons.elemental_lords.id,
			domains: ['Air', 'Movement', 'Change'],
			followers: ['Air Genasi', 'Sailors', 'Wanderers'],
			temples: 'High Towers',
			symbols: [
				'Cloud',
				'Wind swirl',
				'Feather',
				'Air symbol',
				'Wind gust',
			],
			colors: [Colors.WHITE.toString(), Colors.BLUE.toString()],
		}),
		grumbar: await db.createDeity({
			id: 'grumbar',
			name: 'Grumbar',
			title: 'The Earth Lord',
			symbol: 'fas fa-mountain',
			additionalProperties: {
				alignment: 'Lawful Neutral',
				alabastriaContext:
					"Grumbar's influence has been essential for earth genasi and miners in Alabastria, helping them work with the land and extract its resources.",
			},
			description:
				"The Neutral evil primal elemental lord of earth. He embodies stone's endurance and stability. He stands for permanence and the refusal to be moved, defending mountains and subterranean realms. He appears as a colossal earth elemental or a massive stone giant. His influence holds sway over earthquakes and underground treasures. (He is opposed by Akadi's change.)",
			pantheonId: pantheons.elemental_lords.id,
			domains: ['Earth', 'Strength', 'Endurance'],
			followers: ['Earth Genasi', 'Miners', 'Farmers'],
			temples: 'Underground Shrines',
			symbols: ['Mountain'],
			colors: [Colors.BROWN.toString(), Colors.GRAY.toString()],
		}),
		kossuth: await db.createDeity({
			id: 'kossuth',
			name: 'Kossuth',
			title: 'The Fire Lord',
			symbol: 'fas fa-fire',
			additionalProperties: {
				alignment: 'Chaotic Neutral',
				alabastriaContext:
					"Kossuth's influence has been crucial for fire genasi and blacksmiths in Alabastria, providing them with the power to forge weapons and tools.",
			},
			description:
				'The Neutral (often Lawful Neutral) elemental lord of fire. As the Lord of Flames, Kossuth represents the cleansing and destructive aspect of fire. He stands for purification through flame – he encourages noble sacrifice and the forging of strength by fire (while incinerating impurity). He is depicted as a towering pillar of burning flame over 60 feet tall. His domain includes volcanoes, wildfires and all purging flames.',
			pantheonId: pantheons.elemental_lords.id,
			domains: ['Fire', 'Destruction', 'Renewal'],
			followers: ['Fire Genasi', 'Blacksmiths', 'Warriors'],
			temples: 'Forge Temples',
			symbols: ['Flame'],
			colors: [Colors.RED.toString(), Colors.ORANGE.toString()],
		}),
		istishia: await db.createDeity({
			id: 'istishia',
			name: 'Istishia',
			title: 'The Water Lord',
			symbol: 'fas fa-water',
			additionalProperties: {
				alignment: 'True Neutral',
				alabastriaContext:
					"Istishia's influence has been essential for water genasi and fishermen in Alabastria, helping them work with rivers and heal the sick.",
			},
			description:
				'The Neutral elemental lord of water and the sea. He embodies the cleansing power and inexorable flow of water (rivers, oceans, rain). He stands for change and adaptability through gentle strength. He appears as any body of water: a droplet, a wave, or a towering water elemental. His symbol is a cresting wave, and his influence extends over all maritime and freshwater realms.',
			pantheonId: pantheons.elemental_lords.id,
			domains: ['Water', 'Adaptability', 'Rivers'],
			followers: ['Water Genasi', 'Fishermen', 'Healers'],
			temples: 'Riverside Shrines',
			symbols: ['Wave'],
			colors: [Colors.BLUE.toString(), Colors.WHITE.toString()],
		}),
		the_raven_queen: await db.createDeity({
			id: 'the-raven-queen',
			name: 'The Raven Queen',
			title: 'Goddess of Fate and Death',
			symbol: 'fas fa-crow',
			additionalProperties: {
				alignment: 'Lawful Neutral',
				alabastriaContext:
					"The Raven Queen's influence has been crucial for those dealing with death and memory in Alabastria, particularly among the Shadar-kai and those who mourn the lost.",
			},
			description:
				'The Neutral (formerly mortal) goddess of death and fate. She is a mysterious, somber entity ruling over winter and the passage of souls from life to death. The Raven Queen stands for the inevitability of death and the preservation of memories; she takes great care that souls do not cling unnaturally to life. She has no true form, often depicted as a cloaked figure or a raven, and she rules from the Shadowfell. Her power is over destiny and the afterlife, and she commands respect even from devils and the gods of death.',
			pantheonId: pantheons.death_shadow_powers.id,
			domains: ['Death', 'Fate', 'Memory'],
			followers: ['Shadar-kai', 'Mourners', 'Necromancers'],
			temples: 'Shadow Sanctuaries',
			symbols: [
				'Raven',
				'Crown',
				'Scythe',
				'Fate symbol',
				"Raven's crown",
			],
			colors: [Colors.BLACK.toString(), Colors.SILVER.toString(), Colors.WHITE.toString(), Colors.DARK_PURPLE.toString()],
		}),
		asmodeus: await db.createDeity({
			id: 'asmodeus',
			name: 'Asmodeus',
			title: 'Lord of the Nine Hells',
			symbol: 'fas fa-crown',
			additionalProperties: {
				alignment: 'Lawful Evil',
				alabastriaContext:
					"Asmodeus's influence in Alabastria has been subtle but persistent, with his followers often working through legal systems and contracts to gain power.",
			},
			description:
				'The Lawful Evil Overlord of the Nine Hells. Asmodeus is the archdevil king and supreme tyrant of infernal realms. He embodies ultimate tyranny, lawful evil hierarchy and domination by contract. He is depicted as a regal red-skinned humanoid with horns and a long tail (though his truest form is a massive cosmic serpent). He stands for ambition at any cost and enforces rigid discipline among devils.',
			pantheonId: pantheons.death_shadow_powers.id,
			domains: ['Tyranny', 'Infernal', 'Contracts'],
			followers: ['Devils', 'Tyrants', 'Contract Lawyers'],
			temples: 'Infernal Fortresses',
			symbols: [
				"Devil's head",
				'Infernal symbol',
				'Crown',
				'Flame',
				'Crown of Asmodeus',
			],
			colors: [Colors.RED.toString(), Colors.BLACK.toString(), Colors.GOLD.toString(), Colors.CRIMSON.toString()],
		}),
		yondalla: await db.createDeity({
			id: 'yondalla',
			name: 'Yondalla',
			title: 'The Protector and Provider',
			symbol: 'fas fa-shield-alt',
			additionalProperties: {
				alignment: 'Lawful Good',
				alabastriaContext:
					"Yondalla's influence has been essential for halfling communities in Alabastria, providing them with protection and prosperity in their new homes.",
			},
			description:
				"The Lawful Good protector goddess and matriarch of the halflings. She is the nourisher and defender of halfling-kind, embodying fertility, protection, and community. She stands for family and hearth; halflings honor her with prayers before meals and festivals for abundance. She is typically shown as a kindly matron holding a shepherd's crook and a cornucopia. Her influence is over safety and plenty in halfling homes.",
			pantheonId: pantheons.halfling_yondallas_children.id,
			domains: ['Fertility', 'Protection', 'Halflings'],
			followers: ['Halflings', 'Farmers', 'Families'],
			temples: 'Home Shrines',
			symbols: [
				'Shield',
				'Home',
				'Halfling symbol',
				'Cornucopia',
				'Shield of protection',
			],
			colors: [Colors.GREEN.toString(), Colors.BROWN.toString(), Colors.GOLD.toString(), Colors.WHITE.toString()],
		}),
		arvoreen: await db.createDeity({
			id: 'arvoreen',
			name: 'Arvoreen',
			title: 'The Defender',
			symbol: 'fas fa-shield',
			additionalProperties: {
				alignment: 'Lawful Good',
				alabastriaContext:
					"Arvoreen's influence has been crucial for halfling defense in Alabastria, teaching them to protect their communities from threats.",
			},
			description:
				'The Neutral Good halfling god of martial valor and protection. Known as the Halfling guardian, he is essentially the halfling war-god. He stands for vigilance and defense of the community. Depicted as a lithe halfling warrior with a short sword and shield, Arvoreen embodies the ideal that even a small people must defend their homes. His priests (often town guards) watch the borders of villages against threats.',
			pantheonId: pantheons.halfling_yondallas_children.id,
			domains: ['Defense', 'Vigilance', 'Guardianship'],
			followers: ['Halfling Guards', 'Defenders', 'Vigilantes'],
			temples: 'Guard Posts',
			symbols: [
				'Shield',
				'Sword',
				'Halfling symbol',
				'Defense symbol',
				'Shield of Arvoreen',
			],
			colors: [Colors.SILVER.toString(), Colors.BLUE.toString(), Colors.WHITE.toString(), Colors.GOLD.toString()],
		}),
		cyrrollalee: await db.createDeity({
			id: 'cyrrollalee',
			name: 'Cyrrollalee',
			title: 'The Hearthkeeper',
			symbol: 'fas fa-heart',
			additionalProperties: {
				alignment: 'Neutral Good',
				alabastriaContext:
					"Cyrrollalee's influence has been essential for building halfling communities in Alabastria, fostering friendship and trust among neighbors.",
			},
			description:
				'The Neutral Good halfling goddess of hospitality, friendship and wealth. Called the Hearthkeeper, she represents the comfort and security of home. She stands for generosity and trust; her followers practice welcoming all guests. Depicted as a kind older halfling woman, her symbol is an open door or a hearth. Her influence fosters community bonds: halflings light cookfires and host travelers in her name, and she is guardian of all halfling homes.',
			pantheonId: pantheons.halfling_yondallas_children.id,
			domains: ['Friendship', 'Trust', 'Hearth'],
			followers: ['Halfling Hosts', 'Friends', 'Community Builders'],
			temples: 'Community Centers',
			symbols: [
				'Heart',
				'Handshake',
				'Home',
				'Friendship symbol',
				'Heart of friendship',
			],
			colors: [Colors.PINK.toString(), Colors.GOLD.toString(), Colors.WHITE.toString(), Colors.GREEN.toString()],
		}),
		urogalan: await db.createDeity({
			id: 'urogalan',
			name: 'Urogalan',
			title: 'The Earth Lord',
			symbol: 'fas fa-mountain',
			additionalProperties: {
				alignment: 'Lawful Neutral',
				alabastriaContext:
					"Urogalan's influence has been important for halfling burial practices in Alabastria, providing them with proper death rites and earth connection.",
			},
			description:
				"The Lawful Neutral halfling god of earth, burial and the underworld. He is a gentle deity who presides over the resting of the dead. Urogalan stands for natural cycles and reverence of ancestors: he guides halfling souls to peace. He appears as a serene halfling in earthly or white robes, and his symbol is a black dog's head. Halflings honor him by burying their dead and seeking his guidance to safe passage after life.",
			pantheonId: pantheons.halfling_yondallas_children.id,
			domains: ['Death', 'Earth', 'Burials'],
			followers: ['Halfling Gravediggers', 'Earth Workers', 'Mourners'],
			temples: 'Graveyards',
			symbols: [
				'Mountain',
				'Shovel',
				'Grave',
				'Earth symbol',
				'Mountain of earth',
			],
			colors: [Colors.BROWN.toString(), Colors.GRAY.toString(), Colors.GREEN.toString(), Colors.GOLD.toString()],
		}),
		garl_glittergold: await db.createDeity({
			id: 'garl-glittergold',
			name: 'Garl Glittergold',
			title: 'The Joker',
			symbol: 'fas fa-smile',
			additionalProperties: {
				alignment: 'Neutral Good',
				alabastriaContext:
					"Garl Glittergold's influence has been essential for gnome communities in Alabastria, providing them with luck and protection through humor.",
			},
			description:
				'The Lawful Good gnome king and god of humor, protection and gemcutting. Also called the Watchful Protector, he embodies gnomish wit and goodwill. He stands for cleverness, joy, and the safeguarding of his people. He is depicted as a plump, jovial gnome with a long beard, often tinkering or carrying a set of dice. His temples and festivals are cheerful, reflecting gnomish hospitality; he is patron of all good gnomes and a fierce enemy of evil giants.',
			pantheonId: pantheons.gnomes_lords_of_the_golden_hills.id,
			domains: ['Luck', 'Jokes', 'Protection'],
			followers: ['Gnomes', 'Tricksters', 'Protectors'],
			temples: 'Playful Shrines',
			symbols: [
				'Gold nugget',
				'Gem',
				'Pickaxe',
				'Gnome symbol',
				'Golden gem',
			],
			colors: [Colors.GOLD.toString(), Colors.GREEN.toString(), Colors.BLUE.toString(), Colors.SILVER.toString()],
		}),
		baervan_wildwanderer: await db.createDeity({
			id: 'baervan-wildwanderer',
			name: 'Baervan Wildwanderer',
			title: 'The Forest Walker',
			symbol: 'fas fa-tree',
			additionalProperties: {
				alignment: 'Chaotic Good',
				alabastriaContext:
					"Baervan Wildwanderer's influence has been important for gnome rangers and travelers in Alabastria, helping them navigate the wild places.",
			},
			description:
				"The Neutral Good gnome god of forests, travel and nature. He is the patron of forest gnomes and woodland creatures. Baervan stands for exploration and harmony with nature. He is often pictured as a kindly gnome with leaves entwined in his beard, carrying a staff. His influence protects forests and encourages gnomes to roam freely, respecting nature's balance.",
			pantheonId: pantheons.gnomes_lords_of_the_golden_hills.id,
			domains: ['Forests', 'Travel', 'Wild Places'],
			followers: ['Gnome Rangers', 'Travelers', 'Nature Lovers'],
			temples: 'Forest Shrines',
			symbols: ['Tree', 'Leaf', 'Path', 'Nature symbol', 'Tree of life'],
			colors: [Colors.GREEN.toString(), Colors.BROWN.toString(), Colors.GOLD.toString(), Colors.SILVER.toString()],
		}),
		baravar_cloakshadow: await db.createDeity({
			id: 'baravar-cloakshadow',
			name: 'Baravar Cloakshadow',
			title: 'The Shadow Walker',
			symbol: 'fas fa-mask',
			additionalProperties: {
				alignment: 'Chaotic Neutral',
				alabastriaContext:
					"Baravar Cloakshadow's influence has been important for gnome illusionists and tricksters in Alabastria, teaching them the art of deception.",
			},
			description:
				'The Neutral Good gnome god of illusion, secrecy and luck. Called the Sly One, he teaches that a little trickery can help gnomes survive. He stands for clever protection: followers use illusions and quick wits to stay safe. His symbol is a cloak with a dagger, and he is revered by gnome illusionists and thieves. He embodies gnomish love of pranks and surprise, valuing cunning over brute force.',
			pantheonId: pantheons.gnomes_lords_of_the_golden_hills.id,
			domains: ['Trickery', 'Illusions', 'Deception'],
			followers: ['Gnome Illusionists', 'Tricksters', 'Spies'],
			temples: 'Hidden Shrines',
			symbols: [
				'Mask',
				'Shadow',
				'Cloak',
				'Trickery symbol',
				'Shadow mask',
			],
			colors: [Colors.DARK_PURPLE.toString(), Colors.BLACK.toString(), Colors.SILVER.toString(), Colors.GOLD.toString()],
		}),
		segojan_earthcaller: await db.createDeity({
			id: 'segojan-earthcaller',
			name: 'Segojan Earthcaller',
			title: 'The Earth Speaker',
			symbol: 'fas fa-mountain',
			additionalProperties: {
				alignment: 'Neutral Good',
				alabastriaContext:
					"Segojan Earthcaller's influence has been essential for gnome miners and earth workers in Alabastria, helping them work with the earth safely.",
			},
			description:
				"The Neutral Good gnome god of earth and gems. Unlike Baervan's forests, Segojan governs the subterranean earth and its riches. He stands for stability, mining and stewardship of the earth. Depicted as a wise old gnome with earthy tones, his symbol is a glowing gemstone. He watches over gnome tunnels and treasures, and is honored by miners and druids of the deep.",
			pantheonId: pantheons.gnomes_lords_of_the_golden_hills.id,
			domains: ['Earth', 'Burrows', 'Deep Places'],
			followers: ['Gnome Miners', 'Earth Workers', 'Burrowers'],
			temples: 'Underground Shrines',
			symbols: [
				'Mountain',
				'Hammer',
				'Gem',
				'Earth symbol',
				'Mountain gem',
			],
			colors: [Colors.BROWN.toString(), Colors.GOLD.toString(), Colors.GREEN.toString(), Colors.SILVER.toString()],
		}),
		maglubiyet: await db.createDeity({
			id: 'maglubiyet',
			name: 'Maglubiyet',
			title: 'The Mighty One',
			symbol: 'fas fa-crown',
			additionalProperties: {
				alignment: 'Lawful Evil',
				alabastriaContext:
					"Maglubiyet's influence has been crucial for goblinoid survival in Alabastria, teaching them to dominate and conquer in the new world.",
			},
			description:
				'The Lawful Evil supreme deity of goblins and hobgoblins. The Battle Lord of the Goblinoid Pantheon, he demands constant conquest. He stands for war and slavery: all goblinoid races serve him and wage unceasing campaigns for his glory. He is depicted as an imposing black-skinned goblinoid warlord clutching an axe. His cult enforces strict discipline; goblinoids battle relentlessly under his banner.',
			pantheonId: pantheons.goblins_the_dark_gods.id,
			domains: ['War', 'Domination', 'Goblinoids'],
			followers: ['Goblins', 'Hobgoblins', 'Bugbears'],
			temples: 'War Camps',
			symbols: [
				'Goblin symbol',
				'Skull',
				'War axe',
				'Banner',
				'Goblin crown',
			],
			colors: [Colors.RED.toString(), Colors.BLACK.toString(), Colors.BROWN.toString(), Colors.YELLOW.toString()],
		}),
		khurgorbaeyag: await db.createDeity({
			id: 'khurgorbaeyag',
			name: 'Khurgorbaeyag',
			title: 'The Slave Driver',
			symbol: 'fas fa-chain',
			additionalProperties: {
				alignment: 'Lawful Evil',
				alabastriaContext:
					"Khurgorbaeyag's influence has been important for goblinoid slavers in Alabastria, teaching them the art of oppression and control.",
			},
			description:
				'The Lawful Evil goblin god of slavery and strict order. Known as The Overseer, he enforces harsh discipline among goblins. He stands for authority and fear in goblinoid society. He appears as a massive red-skinned goblin wielding a whip. His influence justifies subjugation of weaker goblinoids and ruthless training; he demands efficiency and punishes dissent violently.',
			pantheonId: pantheons.goblins_the_dark_gods.id,
			domains: ['Slavery', 'Tyranny', 'Oppression'],
			followers: ['Goblin Slavers', 'Tyrants', 'Oppressors'],
			temples: 'Slave Pits',
			symbols: [
				'Chain',
				'Whip',
				'Collar',
				'Slavery symbol',
				'Chain of slavery',
			],
			colors: [Colors.BLACK.toString(), Colors.RED.toString(), Colors.BROWN.toString(), Colors.GRAY.toString()],
		}),
		bargrivyek: await db.createDeity({
			id: 'bargrivyek',
			name: 'Bargrivyek',
			title: 'The Peacekeeper',
			symbol: 'fas fa-handshake',
			additionalProperties: {
				alignment: 'Lawful Neutral',
				alabastriaContext:
					"Bargrivyek's influence has been rare but important for goblinoid cooperation in Alabastria, teaching them the value of unity and peace.",
			},
			description:
				'The Lawful Evil hobgoblin god of cooperation and territorial unity. Called the Peacekeeper, he ironically demands teamwork among hobgoblins for expansion. He stands for disciplined unity within goblinoid ranks (so they can more effectively dominate others). He is shown as a tall, stern goblinoid. His influence fosters efficiency and organized conquest; hobgoblins honor him as long as his forced "peace" serves their martial goals.',
			pantheonId: pantheons.goblins_the_dark_gods.id,
			domains: ['Territory', 'Cooperation', 'Unity'],
			followers: ['Goblin Diplomats', 'Peacemakers', 'Unifiers'],
			temples: 'Diplomatic Centers',
			symbols: [
				'Handshake',
				'Peace sign',
				'Unity symbol',
				'Goblin symbol',
				'Hand of peace',
			],
			colors: [Colors.GREEN.toString(), Colors.GOLD.toString(), Colors.WHITE.toString(), Colors.BLUE.toString()],
		}),
		nomog_geaya: await db.createDeity({
			id: 'nomog-geaya',
			name: 'Nomog-Geaya',
			title: 'The Authority',
			symbol: 'fas fa-gavel',
			additionalProperties: {
				alignment: 'Lawful Evil',
				alabastriaContext:
					"Nomog-Geaya's influence has been crucial for hobgoblin military organization in Alabastria, teaching them the importance of authority and discipline.",
			},
			description:
				'The Lawful Evil hobgoblin god of war and tyranny. As the Iron Fist of the goblinoids, he presides over militant conquest and fear. He stands for absolute loyalty and might: Nomog-Geaya demands ruthless tactics on the battlefield. He appears as an ash-gray giant hobgoblin warrior with shark-like teeth. His influence guides hobgoblin armies; warriors pray to him for strength in battle and dominance over enemies.',
			pantheonId: pantheons.goblins_the_dark_gods.id,
			domains: ['Authority', 'War', 'Hobgoblins'],
			followers: ['Hobgoblins', 'Military Leaders', 'Authorities'],
			temples: 'Military Forts',
			symbols: [
				'Gavel',
				'Crown',
				'Authority symbol',
				'Hobgoblin symbol',
				'Gavel of authority',
			],
			colors: [Colors.RED.toString(), Colors.BLACK.toString(), Colors.GOLD.toString(), Colors.SILVER.toString()],
		}),
		kurtulmak: await db.createDeity({
			id: 'kurtulmak',
			name: 'Kurtulmak',
			title: 'The Kobold God',
			symbol: 'fas fa-hammer',
			additionalProperties: {
				alignment: 'Lawful Evil',
				alabastriaContext:
					"Kurtulmak's influence has been essential for kobold survival in Alabastria, teaching them to build traps and tunnels for protection.",
			},
			description:
				"The Lawful Evil kobold god of war, mining and traps. Patron of all kobolds, he is called the Watcher and assumes they were born from the earth. He stands for survival through cunning and conflict with the stronger races. His worshipers believe he created kobolds from dragon's spawn, teaching them trickery and mining. He is symbolized by a gnomish skull (insult to gnomes), and his avatar is a draconic kobold with a spear. His influence is seen in kobold ambush tactics and their reverence for traps and tunnels.",
			pantheonId: pantheons.goblins_the_dark_gods.id,
			domains: ['Kobolds', 'Traps', 'Tunnels'],
			followers: ['Kobolds', 'Trap Makers', 'Tunnelers'],
			temples: 'Underground Lairs',
			symbols: [
				'Kobold symbol',
				'Trap',
				'Dagger',
				'Small skull',
				'Kobold trap',
			],
			colors: [Colors.BROWN.toString(), Colors.RED.toString(), Colors.BLACK.toString(), Colors.YELLOW.toString()],
		}),
		gith: await db.createDeity({
			id: 'gith',
			name: 'Gith',
			title: 'The Liberator',
			symbol: 'fas fa-fist-raised',
			additionalProperties: {
				alignment: 'Chaotic Good',
				alabastriaContext:
					"Gith's influence has been crucial for Gith communities in Alabastria, teaching them the value of freedom and the importance of fighting against oppression.",
			},
			description:
				"The githyanki's legendary founder and namesake (originally a mortal rebel). Gith led the first revolt against the illithid empire, freeing her people. While not a true deity in 5e, her memory persists: she embodies freedom and vengeance against oppression. After death she made pact with Tiamat, and her spirit lingers in gith legend. The githyanki worship Vlaakith (a lich queen), and the githzerai worship Zerthimon (prophet) – both drawing inspiration from Gith's legacy.",
			pantheonId: pantheons.gith.id,
			domains: ['Freedom', 'Vengeance', 'Liberation'],
			followers: ['Githyanki', 'Githzerai', 'Liberators'],
			temples: 'Liberation Shrines',
			symbols: [
				'Fist',
				'Sword',
				'Liberation symbol',
				'Gith symbol',
				'Fist of freedom',
			],
			colors: [Colors.SILVER.toString(), Colors.BLUE.toString(), Colors.WHITE.toString(), Colors.GOLD.toString()],
		}),
		vlaakith: await db.createDeity({
			id: 'vlaakith',
			name: 'Vlaakith',
			title: 'The Lich-Queen',
			symbol: 'fas fa-skull',
			additionalProperties: {
				alignment: 'Lawful Evil',
				alabastriaContext:
					"Vlaakith's influence has been important for Githyanki communities in Alabastria, teaching them the power of tyranny and undeath.",
			},
			description:
				'The Chaotic Evil lich-queen of the githyanki. Once a mortal gith warrior, she became an undead ruler. As the Undying Queen, she wields vast arcane power to enforce her will. Vlaakith stands for ambition and xenophobia: she drives the githyanki to conquer the planes for her. She appears as a fearsome lich with a silver sword symbol, her very presence inspiring terror among her subjects.',
			pantheonId: pantheons.gith.id,
			domains: ['Tyranny', 'Undeath', 'Githyanki'],
			followers: ['Githyanki', 'Undead', 'Tyrants'],
			temples: 'Undead Fortresses',
			symbols: [
				'Skull',
				'Crown',
				'Lich symbol',
				'Githyanki symbol',
				'Crown of undeath',
			],
			colors: [Colors.BLACK.toString(), Colors.DARK_PURPLE.toString(), Colors.SILVER.toString(), Colors.RED.toString()],
		}),
		sseth: await db.createDeity({
			id: 'sseth',
			name: 'Sseth',
			title: 'The Serpent Lord',
			symbol: 'fas fa-eye',
			additionalProperties: {
				alignment: 'Chaotic Evil',
				alabastriaContext:
					"Sseth's influence has been important for Yuan-Ti communities in Alabastria, teaching them the power of ambition and secrecy.",
			},
			description:
				'Originally the chief god of the yuan-ti (snakefolk). As Sseth (meaning "he who sleeps"), he was "reborn" and became their major deity. He is Chaotic Evil, a god of traps, poison and murder. Sseth (Merrshaulk\'s aspect) demands sacrifice and cunning; his symbol is a cobra\'s head. He embodies the darkest aspects of snakekind – ambition through stealth and bloodshed – and his worship survives among yuan-ti extremists.',
			pantheonId: pantheons.yuan_ti_serpent_gods.id,
			domains: ['Ambition', 'Secrecy', 'Deception'],
			followers: ['Yuan-Ti', 'Ambition Seekers', 'Deceivers'],
			temples: 'Hidden Temples',
			symbols: [
				'Eye',
				'Snake',
				'Ambition symbol',
				'Yuan-ti symbol',
				'Eye of ambition',
			],
			colors: [Colors.GREEN.toString(), Colors.GOLD.toString(), Colors.BLACK.toString(), Colors.SILVER.toString()],
		}),
		merrshaulk: await db.createDeity({
			id: 'merrshaulk',
			name: 'Merrshaulk',
			title: 'The Slumbering Serpent',
			symbol: 'fas fa-bed',
			additionalProperties: {
				alignment: 'Chaotic Evil',
				alabastriaContext:
					"Merrshaulk's influence has been important for Yuan-Ti communities in Alabastria, teaching them the dangers of decadence and corruption.",
			},
			description:
				'The Chaotic Evil yuan-ti god of decadence, corruption and slumber. Merrshaulk represents the dangers of complacency and the slow decay of ambition. He stands for the seductive power of rest and the corruption that comes from abandoning vigilance. His influence is felt among those yuan-ti who have grown complacent or who seek power through corruption rather than direct action.',
			pantheonId: pantheons.yuan_ti_serpent_gods.id,
			domains: ['Decadence', 'Corruption', 'Slumber'],
			followers: ['Yuan-Ti', 'Corrupt Officials', 'Decadent Rulers'],
			temples: 'Corrupt Palaces',
			symbols: [
				'Bed',
				'Snake',
				'Decadence symbol',
				'Yuan-ti symbol',
				'Serpent of slumber',
			],
			colors: [Colors.GREEN.toString(), Colors.GOLD.toString(), Colors.BLACK.toString(), Colors.DARK_PURPLE.toString()],
		}),
		umberlee: await db.createDeity({
			id: 'umberlee',
			name: 'Umberlee',
			title: 'The Bitch Queen',
			symbol: 'fas fa-wave-square',
			additionalProperties: {
				alignment: 'Chaotic Evil',
				alabastriaContext:
					"Umberlee's influence has been crucial for sailors and coastal folk in Alabastria, teaching them to respect the power of the sea and storms.",
			},
			description:
				"The Chaotic Evil Queen of the Depths, goddess of the sea, storms and shipwrecks. She epitomizes the cruelty and unpredictability of the ocean. Sailors know that when tempests rage, it is Umberlee's laughter on the wind. She stands for arrogance and greed, demanding tribute of pearls to calm her rage. Umberlee's avatar is a towering sea goddess with green seaweed hair and a trident (or sometimes a manatee-faced water spirit). Her influence spans all sea-weather: she sends hurricanes, floods ships and feeds shipwreck survivors to her sharks.",
			pantheonId: pantheons.sea_powers.id,
			domains: ['Sea', 'Storms', 'Drowning'],
			followers: ['Sailors', 'Storm Callers', 'Sea Witches'],
			temples: 'Storm Shrines',
			symbols: ['Wave', 'Storm', 'Sea symbol', 'Trident', 'Storm wave'],
			colors: [Colors.BLUE.toString(), Colors.WHITE.toString(), Colors.SILVER.toString(), Colors.GRAY.toString()],
		}),
		valkur: await db.createDeity({
			id: 'valkur',
			name: 'Valkur',
			title: "The Sailor's Friend",
			symbol: 'fas fa-anchor',
			additionalProperties: {
				alignment: 'Chaotic Good',
				alabastriaContext:
					"Valkur's influence has been essential for sailors and sea travelers in Alabastria, providing them with protection and fair winds.",
			},
			description:
				"The Chaotic Good god of sailors, ships and favorable winds. Known as the Captain of the Waves, he embodies the daring spirit of sea captains. He stands for adventure on the ocean, courage and loyalty among a ship's crew. Valkur is often depicted as a rowdy, muscular sailor (sometimes half-orc) crowned with lightning-salmon, with a broad grin. Sailors pray to him for safe passage and bountiful voyages, knowing he will calm the seas for those brave enough to challenge them.",
			pantheonId: pantheons.sea_powers.id,
			domains: ['Sailors', 'Protection', 'Fair Seas'],
			followers: ['Sailors', 'Coastal Guards', 'Sea Travelers'],
			temples: 'Harbor Shrines',
			symbols: [
				'Anchor',
				'Ship',
				'Sailor symbol',
				'Compass',
				'Anchor of safety',
			],
			colors: [Colors.BLUE.toString(), Colors.WHITE.toString(), Colors.GOLD.toString(), Colors.SILVER.toString()],
		}),
		deep_sashelas: await db.createDeity({
			id: 'deep-sashelas',
			name: 'Deep Sashelas',
			title: 'The Sea Elf God',
			symbol: 'fas fa-fish',
			additionalProperties: {
				alignment: 'Chaotic Good',
				alabastriaContext:
					"Deep Sashelas's influence has been important for sea elves and coastal artists in Alabastria, inspiring creativity and knowledge of the sea.",
			},
			description:
				'The Chaotic Good elven god of the sea and patron of aquatic elves. Called the Dolphin Prince, he created and guides the sea-elves. He stands for harmony with the ocean and the protection of marine life. Sashelas appears as a blue-green sea-elf or as guiding dolphin-shaped lights. His temples (often giant shells) dot the coasts, and his influence fosters peaceful relations among underwater races and defense against sea monsters.',
			pantheonId: pantheons.sea_powers.id,
			domains: ['Creativity', 'Knowledge', 'Sea'],
			followers: ['Sea Elves', 'Artists', 'Scholars'],
			temples: 'Underwater Temples',
			symbols: [
				'Fish',
				'Coral',
				'Sea symbol',
				'Trident',
				'Coral trident',
			],
			colors: [Colors.BLUE.toString(), Colors.GREEN.toString(), Colors.GOLD.toString(), Colors.SILVER.toString()],
		}),
		sekolah: await db.createDeity({
			id: 'sekolah',
			name: 'Sekolah',
			title: 'The Shark God',
			symbol: 'fas fa-khanda',
			additionalProperties: {
				alignment: 'Chaotic Evil',
				alabastriaContext:
					"Sekolah's influence has been important for Sahuagin communities in Alabastria, teaching them the power of predation and the hunt.",
			},
			description:
				'The Lawful Evil shark god of the sahuagin (sea devils). He embodies hunting and tyranny beneath the waves. Sekolah stands for brutality and primal might; his worshipers prize feats of strength and ruthlessness. His avatar is a colossal great white shark. His symbol is a white shark, and his influence drives sahuagin to savage raids on coastal peoples and dominion over the seas.',
			pantheonId: pantheons.sea_powers.id,
			domains: ['Sharks', 'Predation', 'Sahuagin'],
			followers: ['Sahuagin', 'Shark Cultists', 'Predators'],
			temples: 'Underwater Lairs',
			symbols: [
				'Shark',
				'Fang',
				'Predation symbol',
				'Sahuagin symbol',
				"Shark's fang",
			],
			colors: [Colors.GRAY.toString(), Colors.RED.toString(), Colors.BLACK.toString(), Colors.WHITE.toString()],
		}),
	};
}
