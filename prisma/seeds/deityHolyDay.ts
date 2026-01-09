import { Prisma } from '@prismagen/client';
import * as db from '@lib/db-seed';
import { Deities } from './index';

type DeityHolyDayPayload = Prisma.DeityHolyDayGetPayload<{}>;
export interface DeityHolyDays {
	cyric_the_black_sun: DeityHolyDayPayload;
	cyric_night_of_shattered_truths: DeityHolyDayPayload;
	tempus_battles_dawn: DeityHolyDayPayload;
	tempus_victorys_end: DeityHolyDayPayload;
	mystra_weaves_awakening: DeityHolyDayPayload;
	mystra_mystras_blessing: DeityHolyDayPayload;
	lathander_dawns_blessing: DeityHolyDayPayload;
	lathander_springs_awakening: DeityHolyDayPayload;
	selune_moons_blessing: DeityHolyDayPayload;
	selune_stars_guidance: DeityHolyDayPayload;
	shar_nights_embrace: DeityHolyDayPayload;
	shar_shadows_blessing: DeityHolyDayPayload;
	oghma_the_day_of_unbound_pages: DeityHolyDayPayload;
	oghma_festival_of_first_words: DeityHolyDayPayload;
	deneir_the_first_inscription: DeityHolyDayPayload;
	deneir_inkbound_vigil: DeityHolyDayPayload;
	mask_the_long_shadow: DeityHolyDayPayload;
	mask_night_of_vanishing_coin: DeityHolyDayPayload;
	helm_the_vigil: DeityHolyDayPayload;
	helm_day_of_the_watchtower: DeityHolyDayPayload;
	tyr_day_of_the_scales: DeityHolyDayPayload;
	tyr_judgment_s_dawn: DeityHolyDayPayload;
	chauntea_planting_day: DeityHolyDayPayload;
	chauntea_harvest_home: DeityHolyDayPayload;
	ilmater_day_of_tears: DeityHolyDayPayload;
	ilmater_night_of_quiet_vigil: DeityHolyDayPayload;
	talona_the_weeping_blight: DeityHolyDayPayload;
	talona_night_of_bitter_breath: DeityHolyDayPayload;
	tymora_lucks_blessing: DeityHolyDayPayload;
	tymora_adventures_call: DeityHolyDayPayload;
	beshaba_dooms_call: DeityHolyDayPayload;
	beshaba_misfortunes_blessing: DeityHolyDayPayload;
	kelemvor_deaths_judgment: DeityHolyDayPayload;
	kelemvor_justices_call: DeityHolyDayPayload;
	bane_tyrannys_call: DeityHolyDayPayload;
	bane_conquests_blessing: DeityHolyDayPayload;
	myrkul_undeaths_call: DeityHolyDayPayload;
	myrkul_necromancys_blessing: DeityHolyDayPayload;
	jergal_records_blessing: DeityHolyDayPayload;
	jergal_fates_call: DeityHolyDayPayload;
	moradin_forges_blessing: DeityHolyDayPayload;
	moradin_creations_call: DeityHolyDayPayload;
	berronar_truesilver_hearths_blessing: DeityHolyDayPayload;
	berronar_truesilver_familys_call: DeityHolyDayPayload;
	clangeddin_silverbeard_battles_call: DeityHolyDayPayload;
	clangeddin_silverbeard_honors_blessing: DeityHolyDayPayload;
	dugmaren_brightmantle_discoverys_call: DeityHolyDayPayload;
	dugmaren_brightmantle_innovations_blessing: DeityHolyDayPayload;
	vergadain_trades_blessing: DeityHolyDayPayload;
	vergadain_wealths_call: DeityHolyDayPayload;
	corellon_larethian_arts_blessing: DeityHolyDayPayload;
	corellon_larethian_creations_call: DeityHolyDayPayload;
	sehanine_moonbow_dreams_blessing: DeityHolyDayPayload;
	sehanine_moonbow_journeys_call: DeityHolyDayPayload;
	hanali_celanil_loves_blessing: DeityHolyDayPayload;
	hanali_celanil_beautys_call: DeityHolyDayPayload;
	labelas_enoreth_times_blessing: DeityHolyDayPayload;
	labelas_enoreth_wisdoms_call: DeityHolyDayPayload;
	solonor_thelandira_archerys_blessing: DeityHolyDayPayload;
	solonor_thelandira_hunts_call: DeityHolyDayPayload;
	lolth_spiders_blessing: DeityHolyDayPayload;
	lolth_deceptions_call: DeityHolyDayPayload;
	vhaeraun_shadows_blessing: DeityHolyDayPayload;
	vhaeraun_rebellions_call: DeityHolyDayPayload;
	eilistraee_songs_blessing: DeityHolyDayPayload;
	eilistraee_redemptions_call: DeityHolyDayPayload;
	gruumsh_one_eye_blood_moon: DeityHolyDayPayload;
	gruumsh_one_eye_conquest_day: DeityHolyDayPayload;
	luthic_birth_festival: DeityHolyDayPayload;
	luthic_cave_blessing: DeityHolyDayPayload;
	ilneval_strategy_day: DeityHolyDayPayload;
	ilneval_victory_feast: DeityHolyDayPayload;
	bahgtru_strength_day: DeityHolyDayPayload;
	bahgtru_loyalty_feast: DeityHolyDayPayload;
	shargaas_night_of_shadows: DeityHolyDayPayload;
	shargaas_stealth_festival: DeityHolyDayPayload;
	bahamut_day_of_justice: DeityHolyDayPayload;
	bahamut_protection_festival: DeityHolyDayPayload;
	tiamat_day_of_conquest: DeityHolyDayPayload;
	tiamat_greed_festival: DeityHolyDayPayload;
	akadi_wind_festival: DeityHolyDayPayload;
	akadi_change_day: DeityHolyDayPayload;
	grumbar_earth_day: DeityHolyDayPayload;
	grumbar_harvest_festival: DeityHolyDayPayload;
	kossuth_fire_festival: DeityHolyDayPayload;
	kossuth_renewal_day: DeityHolyDayPayload;
	istishia_water_festival: DeityHolyDayPayload;
	istishia_flow_day: DeityHolyDayPayload;
	the_raven_queen_day_of_remembrance: DeityHolyDayPayload;
	the_raven_queen_shadow_festival: DeityHolyDayPayload;
	asmodeus_day_of_binding: DeityHolyDayPayload;
	asmodeus_infernal_solstice: DeityHolyDayPayload;
	yondalla_harvest_festival: DeityHolyDayPayload;
	yondalla_family_day: DeityHolyDayPayload;
	arvoreen_defense_day: DeityHolyDayPayload;
	arvoreen_vigilance_night: DeityHolyDayPayload;
	cyrrollalee_friendship_day: DeityHolyDayPayload;
	cyrrollalee_hearth_festival: DeityHolyDayPayload;
	urogalan_earth_day: DeityHolyDayPayload;
	urogalan_burial_festival: DeityHolyDayPayload;
	garl_glittergold_joke_day: DeityHolyDayPayload;
	garl_glittergold_luck_festival: DeityHolyDayPayload;
	baervan_wildwanderer_forest_day: DeityHolyDayPayload;
	baervan_wildwanderer_travel_festival: DeityHolyDayPayload;
	baravar_cloakshadow_trick_day: DeityHolyDayPayload;
	baravar_cloakshadow_shadow_festival: DeityHolyDayPayload;
	segojan_earthcaller_earth_day: DeityHolyDayPayload;
	segojan_earthcaller_burrow_festival: DeityHolyDayPayload;
	maglubiyet_conquest_day: DeityHolyDayPayload;
	maglubiyet_supremacy_festival: DeityHolyDayPayload;
	khurgorbaeyag_slavery_day: DeityHolyDayPayload;
	khurgorbaeyag_tyranny_festival: DeityHolyDayPayload;
	bargrivyek_unity_day: DeityHolyDayPayload;
	bargrivyek_peace_festival: DeityHolyDayPayload;
	nomog_geaya_authority_day: DeityHolyDayPayload;
	nomog_geaya_war_festival: DeityHolyDayPayload;
	kurtulmak_trap_day: DeityHolyDayPayload;
	kurtulmak_tunnel_festival: DeityHolyDayPayload;
	gith_liberation_day: DeityHolyDayPayload;
	gith_freedom_festival: DeityHolyDayPayload;
	vlaakith_tyranny_day: DeityHolyDayPayload;
	vlaakith_undeath_festival: DeityHolyDayPayload;
	sseth_ambition_day: DeityHolyDayPayload;
	sseth_secrecy_festival: DeityHolyDayPayload;
	merrshaulk_decadence_day: DeityHolyDayPayload;
	merrshaulk_slumber_festival: DeityHolyDayPayload;
	umberlee_storm_day: DeityHolyDayPayload;
	umberlee_sea_festival: DeityHolyDayPayload;
	valkur_sailors_day: DeityHolyDayPayload;
	valkur_fair_seas_festival: DeityHolyDayPayload;
	deep_sashelas_creativity_day: DeityHolyDayPayload;
	deep_sashelas_knowledge_festival: DeityHolyDayPayload;
	sekolah_predation_day: DeityHolyDayPayload;
	sekolah_shark_festival: DeityHolyDayPayload;
}

interface SeedDeityHolyDaysParams {
	deities: Deities;
}
export async function seedDeityHolyDays(
	params: SeedDeityHolyDaysParams
): Promise<DeityHolyDays> {
	const { deities } = params;
	return {
		cyric_the_black_sun: await db.createDeityHolyDay({
			id: 'cyric-the-black-sun',
			name: 'The Black Sun',
			deityId: deities.cyric.id,

			date: '',
		}),
		cyric_night_of_shattered_truths: await db.createDeityHolyDay({
			id: 'cyric-night-of-shattered-truths',
			name: 'Night of Shattered Truths',
			deityId: deities.cyric.id,

			date: '',
		}),
		tempus_battles_dawn: await db.createDeityHolyDay({
			id: 'tempus-battles-dawn',
			name: "Battle's Dawn",
			deityId: deities.tempus.id,

			date: '',
		}),
		tempus_victorys_end: await db.createDeityHolyDay({
			id: 'tempus-victorys-end',
			name: "Victory's End",
			deityId: deities.tempus.id,

			date: '',
		}),
		mystra_weaves_awakening: await db.createDeityHolyDay({
			id: 'mystra-weaves-awakening',
			name: "Weave's Awakening",
			deityId: deities.mystra.id,

			date: '',
		}),
		mystra_mystras_blessing: await db.createDeityHolyDay({
			id: 'mystra-mystras-blessing',
			name: "Mystra's Blessing",
			deityId: deities.mystra.id,

			date: '',
		}),
		lathander_dawns_blessing: await db.createDeityHolyDay({
			id: 'lathander-dawns-blessing',
			name: "Dawn's Blessing",
			deityId: deities.lathander.id,

			date: '',
		}),
		lathander_springs_awakening: await db.createDeityHolyDay({
			id: 'lathander-springs-awakening',
			name: "Spring's Awakening",
			deityId: deities.lathander.id,

			date: '',
		}),
		selune_moons_blessing: await db.createDeityHolyDay({
			id: 'selune-moons-blessing',
			name: "Moon's Blessing",
			deityId: deities.selune.id,

			date: '',
		}),
		selune_stars_guidance: await db.createDeityHolyDay({
			id: 'selune-stars-guidance',
			name: "Star's Guidance",
			deityId: deities.selune.id,

			date: '',
		}),
		shar_nights_embrace: await db.createDeityHolyDay({
			id: 'shar-nights-embrace',
			name: "Night's Embrace",
			deityId: deities.shar.id,

			date: '',
		}),
		shar_shadows_blessing: await db.createDeityHolyDay({
			id: 'shar-shadows-blessing',
			name: "Shadow's Blessing",
			deityId: deities.shar.id,

			date: '',
		}),
		oghma_the_day_of_unbound_pages: await db.createDeityHolyDay({
			id: 'oghma-the-day-of-unbound-pages',
			name: 'The Day of Unbound Pages',
			deityId: deities.oghma.id,

			date: '',
		}),
		oghma_festival_of_first_words: await db.createDeityHolyDay({
			id: 'oghma-festival-of-first-words',
			name: 'Festival of First Words',
			deityId: deities.oghma.id,

			date: '',
		}),
		deneir_the_first_inscription: await db.createDeityHolyDay({
			id: 'deneir-the-first-inscription',
			name: 'The First Inscription',
			deityId: deities.deneir.id,

			date: '',
		}),
		deneir_inkbound_vigil: await db.createDeityHolyDay({
			id: 'deneir-inkbound-vigil',
			name: 'Inkbound Vigil',
			deityId: deities.deneir.id,

			date: '',
		}),
		mask_the_long_shadow: await db.createDeityHolyDay({
			id: 'mask-the-long-shadow',
			name: 'The Long Shadow',
			deityId: deities.mask.id,

			date: '',
		}),
		mask_night_of_vanishing_coin: await db.createDeityHolyDay({
			id: 'mask-night-of-vanishing-coin',
			name: 'Night of Vanishing Coin',
			deityId: deities.mask.id,

			date: '',
		}),
		helm_the_vigil: await db.createDeityHolyDay({
			id: 'helm-the-vigil',
			name: 'The Vigil',
			deityId: deities.helm.id,

			date: '',
		}),
		helm_day_of_the_watchtower: await db.createDeityHolyDay({
			id: 'helm-day-of-the-watchtower',
			name: 'Day of the Watchtower',
			deityId: deities.helm.id,

			date: '',
		}),
		tyr_day_of_the_scales: await db.createDeityHolyDay({
			id: 'tyr-day-of-the-scales',
			name: 'Day of the Scales',
			deityId: deities.tyr.id,

			date: '',
		}),
		tyr_judgment_s_dawn: await db.createDeityHolyDay({
			id: 'tyr-judgment-s-dawn',
			name: 'Judgment’s Dawn',
			deityId: deities.tyr.id,

			date: '',
		}),
		chauntea_planting_day: await db.createDeityHolyDay({
			id: 'chauntea-planting-day',
			name: 'Planting Day',
			deityId: deities.chauntea.id,

			date: '',
		}),
		chauntea_harvest_home: await db.createDeityHolyDay({
			id: 'chauntea-harvest-home',
			name: 'Harvest Home',
			deityId: deities.chauntea.id,

			date: '',
		}),
		ilmater_day_of_tears: await db.createDeityHolyDay({
			id: 'ilmater-day-of-tears',
			name: 'Day of Tears',
			deityId: deities.ilmater.id,

			date: '',
		}),
		ilmater_night_of_quiet_vigil: await db.createDeityHolyDay({
			id: 'ilmater-night-of-quiet-vigil',
			name: 'Night of Quiet Vigil',
			deityId: deities.ilmater.id,

			date: '',
		}),
		talona_the_weeping_blight: await db.createDeityHolyDay({
			id: 'talona-the-weeping-blight',
			name: 'The Weeping Blight',
			deityId: deities.talona.id,

			date: '',
		}),
		talona_night_of_bitter_breath: await db.createDeityHolyDay({
			id: 'talona-night-of-bitter-breath',
			name: 'Night of Bitter Breath',
			deityId: deities.talona.id,

			date: '',
		}),
		tymora_lucks_blessing: await db.createDeityHolyDay({
			id: 'tymora-lucks-blessing',
			name: "Luck's Blessing",
			deityId: deities.tymora.id,

			date: '',
		}),
		tymora_adventures_call: await db.createDeityHolyDay({
			id: 'tymora-adventures-call',
			name: "Adventure's Call",
			deityId: deities.tymora.id,

			date: '',
		}),
		beshaba_dooms_call: await db.createDeityHolyDay({
			id: 'beshaba-dooms-call',
			name: "Doom's Call",
			deityId: deities.beshaba.id,

			date: '',
		}),
		beshaba_misfortunes_blessing: await db.createDeityHolyDay({
			id: 'beshaba-misfortunes-blessing',
			name: "Misfortune's Blessing",
			deityId: deities.beshaba.id,

			date: '',
		}),
		kelemvor_deaths_judgment: await db.createDeityHolyDay({
			id: 'kelemvor-deaths-judgment',
			name: "Death's Judgment",
			deityId: deities.kelemvor.id,

			date: '',
		}),
		kelemvor_justices_call: await db.createDeityHolyDay({
			id: 'kelemvor-justices-call',
			name: "Justice's Call",
			deityId: deities.kelemvor.id,

			date: '',
		}),
		bane_tyrannys_call: await db.createDeityHolyDay({
			id: 'bane-tyrannys-call',
			name: "Tyranny's Call",
			deityId: deities.bane.id,

			date: '',
		}),
		bane_conquests_blessing: await db.createDeityHolyDay({
			id: 'bane-conquests-blessing',
			name: "Conquest's Blessing",
			deityId: deities.bane.id,

			date: '',
		}),
		myrkul_undeaths_call: await db.createDeityHolyDay({
			id: 'myrkul-undeaths-call',
			name: "Undeath's Call",
			deityId: deities.myrkul.id,

			date: '',
		}),
		myrkul_necromancys_blessing: await db.createDeityHolyDay({
			id: 'myrkul-necromancys-blessing',
			name: "Necromancy's Blessing",
			deityId: deities.myrkul.id,

			date: '',
		}),
		jergal_records_blessing: await db.createDeityHolyDay({
			id: 'jergal-records-blessing',
			name: "Record's Blessing",
			deityId: deities.jergal.id,

			date: '',
		}),
		jergal_fates_call: await db.createDeityHolyDay({
			id: 'jergal-fates-call',
			name: "Fate's Call",
			deityId: deities.jergal.id,

			date: '',
		}),
		moradin_forges_blessing: await db.createDeityHolyDay({
			id: 'moradin-forges-blessing',
			name: "Forge's Blessing",
			deityId: deities.moradin.id,

			date: '',
		}),
		moradin_creations_call: await db.createDeityHolyDay({
			id: 'moradin-creations-call',
			name: "Creation's Call",
			deityId: deities.moradin.id,

			date: '',
		}),
		berronar_truesilver_hearths_blessing: await db.createDeityHolyDay({
			id: 'berronar-truesilver-hearths-blessing',
			name: "Hearth's Blessing",
			deityId: deities.berronar_truesilver.id,

			date: '',
		}),
		berronar_truesilver_familys_call: await db.createDeityHolyDay({
			id: 'berronar-truesilver-familys-call',
			name: "Family's Call",
			deityId: deities.berronar_truesilver.id,

			date: '',
		}),
		clangeddin_silverbeard_battles_call: await db.createDeityHolyDay({
			id: 'clangeddin-silverbeard-battles-call',
			name: "Battle's Call",
			deityId: deities.clangeddin_silverbeard.id,

			date: '',
		}),
		clangeddin_silverbeard_honors_blessing: await db.createDeityHolyDay({
			id: 'clangeddin-silverbeard-honors-blessing',
			name: "Honor's Blessing",
			deityId: deities.clangeddin_silverbeard.id,

			date: '',
		}),
		dugmaren_brightmantle_discoverys_call: await db.createDeityHolyDay({
			id: 'dugmaren-brightmantle-discoverys-call',
			name: "Discovery's Call",
			deityId: deities.dugmaren_brightmantle.id,

			date: '',
		}),
		dugmaren_brightmantle_innovations_blessing: await db.createDeityHolyDay(
			{
				id: 'dugmaren-brightmantle-innovations-blessing',
				name: "Innovation's Blessing",
				deityId: deities.dugmaren_brightmantle.id,

				date: '',
			}
		),
		vergadain_trades_blessing: await db.createDeityHolyDay({
			id: 'vergadain-trades-blessing',
			name: "Trade's Blessing",
			deityId: deities.vergadain.id,

			date: '',
		}),
		vergadain_wealths_call: await db.createDeityHolyDay({
			id: 'vergadain-wealths-call',
			name: "Wealth's Call",
			deityId: deities.vergadain.id,

			date: '',
		}),
		corellon_larethian_arts_blessing: await db.createDeityHolyDay({
			id: 'corellon-larethian-arts-blessing',
			name: "Art's Blessing",
			deityId: deities.corellon_larethian.id,

			date: '',
		}),
		corellon_larethian_creations_call: await db.createDeityHolyDay({
			id: 'corellon-larethian-creations-call',
			name: "Creation's Call",
			deityId: deities.corellon_larethian.id,

			date: '',
		}),
		sehanine_moonbow_dreams_blessing: await db.createDeityHolyDay({
			id: 'sehanine-moonbow-dreams-blessing',
			name: "Dream's Blessing",
			deityId: deities.sehanine_moonbow.id,

			date: '',
		}),
		sehanine_moonbow_journeys_call: await db.createDeityHolyDay({
			id: 'sehanine-moonbow-journeys-call',
			name: "Journey's Call",
			deityId: deities.sehanine_moonbow.id,

			date: '',
		}),
		hanali_celanil_loves_blessing: await db.createDeityHolyDay({
			id: 'hanali-celanil-loves-blessing',
			name: "Love's Blessing",
			deityId: deities.hanali_celanil.id,

			date: '',
		}),
		hanali_celanil_beautys_call: await db.createDeityHolyDay({
			id: 'hanali-celanil-beautys-call',
			name: "Beauty's Call",
			deityId: deities.hanali_celanil.id,

			date: '',
		}),
		labelas_enoreth_times_blessing: await db.createDeityHolyDay({
			id: 'labelas-enoreth-times-blessing',
			name: "Time's Blessing",
			deityId: deities.labelas_enoreth.id,

			date: '',
		}),
		labelas_enoreth_wisdoms_call: await db.createDeityHolyDay({
			id: 'labelas-enoreth-wisdoms-call',
			name: "Wisdom's Call",
			deityId: deities.labelas_enoreth.id,

			date: '',
		}),
		solonor_thelandira_archerys_blessing: await db.createDeityHolyDay({
			id: 'solonor-thelandira-archerys-blessing',
			name: "Archery's Blessing",
			deityId: deities.solonor_thelandira.id,

			date: '',
		}),
		solonor_thelandira_hunts_call: await db.createDeityHolyDay({
			id: 'solonor-thelandira-hunts-call',
			name: "Hunt's Call",
			deityId: deities.solonor_thelandira.id,

			date: '',
		}),
		lolth_spiders_blessing: await db.createDeityHolyDay({
			id: 'lolth-spiders-blessing',
			name: "Spider's Blessing",
			deityId: deities.lolth.id,

			date: '',
		}),
		lolth_deceptions_call: await db.createDeityHolyDay({
			id: 'lolth-deceptions-call',
			name: "Deception's Call",
			deityId: deities.lolth.id,

			date: '',
		}),
		vhaeraun_shadows_blessing: await db.createDeityHolyDay({
			id: 'vhaeraun-shadows-blessing',
			name: "Shadow's Blessing",
			deityId: deities.vhaeraun.id,

			date: '',
		}),
		vhaeraun_rebellions_call: await db.createDeityHolyDay({
			id: 'vhaeraun-rebellions-call',
			name: "Rebellion's Call",
			deityId: deities.vhaeraun.id,

			date: '',
		}),
		eilistraee_songs_blessing: await db.createDeityHolyDay({
			id: 'eilistraee-songs-blessing',
			name: "Song's Blessing",
			deityId: deities.eilistraee.id,

			date: '',
		}),
		eilistraee_redemptions_call: await db.createDeityHolyDay({
			id: 'eilistraee-redemptions-call',
			name: "Redemption's Call",
			deityId: deities.eilistraee.id,

			date: '',
		}),
		gruumsh_one_eye_blood_moon: await db.createDeityHolyDay({
			id: 'gruumsh-one-eye-blood-moon',
			name: 'Blood Moon',
			deityId: deities.gruumsh_one_eye.id,

			date: '',
		}),
		gruumsh_one_eye_conquest_day: await db.createDeityHolyDay({
			id: 'gruumsh-one-eye-conquest-day',
			name: 'Conquest Day',
			deityId: deities.gruumsh_one_eye.id,

			date: '',
		}),
		luthic_birth_festival: await db.createDeityHolyDay({
			id: 'luthic-birth-festival',
			name: 'Birth Festival',
			deityId: deities.luthic.id,

			date: '',
		}),
		luthic_cave_blessing: await db.createDeityHolyDay({
			id: 'luthic-cave-blessing',
			name: 'Cave Blessing',
			deityId: deities.luthic.id,

			date: '',
		}),
		ilneval_strategy_day: await db.createDeityHolyDay({
			id: 'ilneval-strategy-day',
			name: 'Strategy Day',
			deityId: deities.ilneval.id,

			date: '',
		}),
		ilneval_victory_feast: await db.createDeityHolyDay({
			id: 'ilneval-victory-feast',
			name: 'Victory Feast',
			deityId: deities.ilneval.id,

			date: '',
		}),
		bahgtru_strength_day: await db.createDeityHolyDay({
			id: 'bahgtru-strength-day',
			name: 'Strength Day',
			deityId: deities.bahgtru.id,

			date: '',
		}),
		bahgtru_loyalty_feast: await db.createDeityHolyDay({
			id: 'bahgtru-loyalty-feast',
			name: 'Loyalty Feast',
			deityId: deities.bahgtru.id,

			date: '',
		}),
		shargaas_night_of_shadows: await db.createDeityHolyDay({
			id: 'shargaas-night-of-shadows',
			name: 'Night of Shadows',
			deityId: deities.shargaas.id,

			date: '',
		}),
		shargaas_stealth_festival: await db.createDeityHolyDay({
			id: 'shargaas-stealth-festival',
			name: 'Stealth Festival',
			deityId: deities.shargaas.id,

			date: '',
		}),
		bahamut_day_of_justice: await db.createDeityHolyDay({
			id: 'bahamut-day-of-justice',
			name: 'Day of Justice',
			deityId: deities.bahamut.id,

			date: '',
		}),
		bahamut_protection_festival: await db.createDeityHolyDay({
			id: 'bahamut-protection-festival',
			name: 'Protection Festival',
			deityId: deities.bahamut.id,

			date: '',
		}),
		tiamat_day_of_conquest: await db.createDeityHolyDay({
			id: 'tiamat-day-of-conquest',
			name: 'Day of Conquest',
			deityId: deities.tiamat.id,

			date: '',
		}),
		tiamat_greed_festival: await db.createDeityHolyDay({
			id: 'tiamat-greed-festival',
			name: 'Greed Festival',
			deityId: deities.tiamat.id,

			date: '',
		}),
		akadi_wind_festival: await db.createDeityHolyDay({
			id: 'akadi-wind-festival',
			name: 'Wind Festival',
			deityId: deities.akadi.id,

			date: '',
		}),
		akadi_change_day: await db.createDeityHolyDay({
			id: 'akadi-change-day',
			name: 'Change Day',
			deityId: deities.akadi.id,

			date: '',
		}),
		grumbar_earth_day: await db.createDeityHolyDay({
			id: 'grumbar-earth-day',
			name: 'Earth Day',
			deityId: deities.grumbar.id,

			date: '',
		}),
		grumbar_harvest_festival: await db.createDeityHolyDay({
			id: 'grumbar-harvest-festival',
			name: 'Harvest Festival',
			deityId: deities.grumbar.id,

			date: '',
		}),
		kossuth_fire_festival: await db.createDeityHolyDay({
			id: 'kossuth-fire-festival',
			name: 'Fire Festival',
			deityId: deities.kossuth.id,

			date: '',
		}),
		kossuth_renewal_day: await db.createDeityHolyDay({
			id: 'kossuth-renewal-day',
			name: 'Renewal Day',
			deityId: deities.kossuth.id,

			date: '',
		}),
		istishia_water_festival: await db.createDeityHolyDay({
			id: 'istishia-water-festival',
			name: 'Water Festival',
			deityId: deities.istishia.id,

			date: '',
		}),
		istishia_flow_day: await db.createDeityHolyDay({
			id: 'istishia-flow-day',
			name: 'Flow Day',
			deityId: deities.istishia.id,

			date: '',
		}),
		the_raven_queen_day_of_remembrance: await db.createDeityHolyDay({
			id: 'the-raven-queen-day-of-remembrance',
			name: 'Day of Remembrance',
			deityId: deities.the_raven_queen.id,

			date: '',
		}),
		the_raven_queen_shadow_festival: await db.createDeityHolyDay({
			id: 'the-raven-queen-shadow-festival',
			name: 'Shadow Festival',
			deityId: deities.the_raven_queen.id,

			date: '',
		}),
		asmodeus_day_of_binding: await db.createDeityHolyDay({
			id: 'asmodeus-day-of-binding',
			name: 'Day of Binding',
			deityId: deities.asmodeus.id,

			date: '',
		}),
		asmodeus_infernal_solstice: await db.createDeityHolyDay({
			id: 'asmodeus-infernal-solstice',
			name: 'Infernal Solstice',
			deityId: deities.asmodeus.id,

			date: '',
		}),
		yondalla_harvest_festival: await db.createDeityHolyDay({
			id: 'yondalla-harvest-festival',
			name: 'Harvest Festival',
			deityId: deities.yondalla.id,

			date: '',
		}),
		yondalla_family_day: await db.createDeityHolyDay({
			id: 'yondalla-family-day',
			name: 'Family Day',
			deityId: deities.yondalla.id,

			date: '',
		}),
		arvoreen_defense_day: await db.createDeityHolyDay({
			id: 'arvoreen-defense-day',
			name: 'Defense Day',
			deityId: deities.arvoreen.id,

			date: '',
		}),
		arvoreen_vigilance_night: await db.createDeityHolyDay({
			id: 'arvoreen-vigilance-night',
			name: 'Vigilance Night',
			deityId: deities.arvoreen.id,

			date: '',
		}),
		cyrrollalee_friendship_day: await db.createDeityHolyDay({
			id: 'cyrrollalee-friendship-day',
			name: 'Friendship Day',
			deityId: deities.cyrrollalee.id,

			date: '',
		}),
		cyrrollalee_hearth_festival: await db.createDeityHolyDay({
			id: 'cyrrollalee-hearth-festival',
			name: 'Hearth Festival',
			deityId: deities.cyrrollalee.id,

			date: '',
		}),
		urogalan_earth_day: await db.createDeityHolyDay({
			id: 'urogalan-earth-day',
			name: 'Earth Day',
			deityId: deities.urogalan.id,

			date: '',
		}),
		urogalan_burial_festival: await db.createDeityHolyDay({
			id: 'urogalan-burial-festival',
			name: 'Burial Festival',
			deityId: deities.urogalan.id,

			date: '',
		}),
		garl_glittergold_joke_day: await db.createDeityHolyDay({
			id: 'garl-glittergold-joke-day',
			name: 'Joke Day',
			deityId: deities.garl_glittergold.id,

			date: '',
		}),
		garl_glittergold_luck_festival: await db.createDeityHolyDay({
			id: 'garl-glittergold-luck-festival',
			name: 'Luck Festival',
			deityId: deities.garl_glittergold.id,

			date: '',
		}),
		baervan_wildwanderer_forest_day: await db.createDeityHolyDay({
			id: 'baervan-wildwanderer-forest-day',
			name: 'Forest Day',
			deityId: deities.baervan_wildwanderer.id,

			date: '',
		}),
		baervan_wildwanderer_travel_festival: await db.createDeityHolyDay({
			id: 'baervan-wildwanderer-travel-festival',
			name: 'Travel Festival',
			deityId: deities.baervan_wildwanderer.id,

			date: '',
		}),
		baravar_cloakshadow_trick_day: await db.createDeityHolyDay({
			id: 'baravar-cloakshadow-trick-day',
			name: 'Trick Day',
			deityId: deities.baravar_cloakshadow.id,

			date: '',
		}),
		baravar_cloakshadow_shadow_festival: await db.createDeityHolyDay({
			id: 'baravar-cloakshadow-shadow-festival',
			name: 'Shadow Festival',
			deityId: deities.baravar_cloakshadow.id,

			date: '',
		}),
		segojan_earthcaller_earth_day: await db.createDeityHolyDay({
			id: 'segojan-earthcaller-earth-day',
			name: 'Earth Day',
			deityId: deities.segojan_earthcaller.id,

			date: '',
		}),
		segojan_earthcaller_burrow_festival: await db.createDeityHolyDay({
			id: 'segojan-earthcaller-burrow-festival',
			name: 'Burrow Festival',
			deityId: deities.segojan_earthcaller.id,

			date: '',
		}),
		maglubiyet_conquest_day: await db.createDeityHolyDay({
			id: 'maglubiyet-conquest-day',
			name: 'Conquest Day',
			deityId: deities.maglubiyet.id,

			date: '',
		}),
		maglubiyet_supremacy_festival: await db.createDeityHolyDay({
			id: 'maglubiyet-supremacy-festival',
			name: 'Supremacy Festival',
			deityId: deities.maglubiyet.id,

			date: '',
		}),
		khurgorbaeyag_slavery_day: await db.createDeityHolyDay({
			id: 'khurgorbaeyag-slavery-day',
			name: 'Slavery Day',
			deityId: deities.khurgorbaeyag.id,

			date: '',
		}),
		khurgorbaeyag_tyranny_festival: await db.createDeityHolyDay({
			id: 'khurgorbaeyag-tyranny-festival',
			name: 'Tyranny Festival',
			deityId: deities.khurgorbaeyag.id,

			date: '',
		}),
		bargrivyek_unity_day: await db.createDeityHolyDay({
			id: 'bargrivyek-unity-day',
			name: 'Unity Day',
			deityId: deities.bargrivyek.id,

			date: '',
		}),
		bargrivyek_peace_festival: await db.createDeityHolyDay({
			id: 'bargrivyek-peace-festival',
			name: 'Peace Festival',
			deityId: deities.bargrivyek.id,

			date: '',
		}),
		nomog_geaya_authority_day: await db.createDeityHolyDay({
			id: 'nomog-geaya-authority-day',
			name: 'Authority Day',
			deityId: deities.nomog_geaya.id,

			date: '',
		}),
		nomog_geaya_war_festival: await db.createDeityHolyDay({
			id: 'nomog-geaya-war-festival',
			name: 'War Festival',
			deityId: deities.nomog_geaya.id,

			date: '',
		}),
		kurtulmak_trap_day: await db.createDeityHolyDay({
			id: 'kurtulmak-trap-day',
			name: 'Trap Day',
			deityId: deities.kurtulmak.id,

			date: '',
		}),
		kurtulmak_tunnel_festival: await db.createDeityHolyDay({
			id: 'kurtulmak-tunnel-festival',
			name: 'Tunnel Festival',
			deityId: deities.kurtulmak.id,

			date: '',
		}),
		gith_liberation_day: await db.createDeityHolyDay({
			id: 'gith-liberation-day',
			name: 'Liberation Day',
			deityId: deities.gith.id,

			date: '',
		}),
		gith_freedom_festival: await db.createDeityHolyDay({
			id: 'gith-freedom-festival',
			name: 'Freedom Festival',
			deityId: deities.gith.id,

			date: '',
		}),
		vlaakith_tyranny_day: await db.createDeityHolyDay({
			id: 'vlaakith-tyranny-day',
			name: 'Tyranny Day',
			deityId: deities.vlaakith.id,

			date: '',
		}),
		vlaakith_undeath_festival: await db.createDeityHolyDay({
			id: 'vlaakith-undeath-festival',
			name: 'Undeath Festival',
			deityId: deities.vlaakith.id,

			date: '',
		}),
		sseth_ambition_day: await db.createDeityHolyDay({
			id: 'sseth-ambition-day',
			name: 'Ambition Day',
			deityId: deities.sseth.id,

			date: '',
		}),
		sseth_secrecy_festival: await db.createDeityHolyDay({
			id: 'sseth-secrecy-festival',
			name: 'Secrecy Festival',
			deityId: deities.sseth.id,

			date: '',
		}),
		merrshaulk_decadence_day: await db.createDeityHolyDay({
			id: 'merrshaulk-decadence-day',
			name: 'Decadence Day',
			deityId: deities.merrshaulk.id,

			date: '',
		}),
		merrshaulk_slumber_festival: await db.createDeityHolyDay({
			id: 'merrshaulk-slumber-festival',
			name: 'Slumber Festival',
			deityId: deities.merrshaulk.id,

			date: '',
		}),
		umberlee_storm_day: await db.createDeityHolyDay({
			id: 'umberlee-storm-day',
			name: 'Storm Day',
			deityId: deities.umberlee.id,

			date: '',
		}),
		umberlee_sea_festival: await db.createDeityHolyDay({
			id: 'umberlee-sea-festival',
			name: 'Sea Festival',
			deityId: deities.umberlee.id,

			date: '',
		}),
		valkur_sailors_day: await db.createDeityHolyDay({
			id: 'valkur-sailors-day',
			name: "Sailor's Day",
			deityId: deities.valkur.id,

			date: '',
		}),
		valkur_fair_seas_festival: await db.createDeityHolyDay({
			id: 'valkur-fair-seas-festival',
			name: 'Fair Seas Festival',
			deityId: deities.valkur.id,

			date: '',
		}),
		deep_sashelas_creativity_day: await db.createDeityHolyDay({
			id: 'deep-sashelas-creativity-day',
			name: 'Creativity Day',
			deityId: deities.deep_sashelas.id,

			date: '',
		}),
		deep_sashelas_knowledge_festival: await db.createDeityHolyDay({
			id: 'deep-sashelas-knowledge-festival',
			name: 'Knowledge Festival',
			deityId: deities.deep_sashelas.id,

			date: '',
		}),
		sekolah_predation_day: await db.createDeityHolyDay({
			id: 'sekolah-predation-day',
			name: 'Predation Day',
			deityId: deities.sekolah.id,

			date: '',
		}),
		sekolah_shark_festival: await db.createDeityHolyDay({
			id: 'sekolah-shark-festival',
			name: 'Shark Festival',
			deityId: deities.sekolah.id,

			date: '',
		}),
	};
}