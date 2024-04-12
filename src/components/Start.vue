<template>
	<div class="container">

		<div id="enqueteur" v-if="level === 0">
			<h2>Prénom enqueteur :</h2>
			<input class="form-control" type="text" v-model="ENQUETEUR" />
			<button v-if="ENQUETEUR" @click="next" class="btn-next">Suivant</button>
		</div>

		<div id="3" v-if="level === 1" class="form-group">
			<h1>Nombre de personnes qui attendent aux arrêts de bus</h1>
			<select v-model="NbrPersArretBus" class="form-control">
				<option v-for="option in nbPersArret" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="NbrPersArretBus" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="4" v-if="level === 2">
			<h1>Nombre de car aux arrêts de bus (taux d’occupation)</h1>
			<input class="form-control" type="text" v-model="NbrCarArretBus" placeholder="Precisions">
			<button v-if="NbrCarArretBus" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div v-if="level === 3">
			<h1>Bonjour,<br>je m’appelle XXX et je réalise une enquête pour le compte de la Métropole
				Européenne de Lille sur l’utilisation des services de transports assuré par autocar,<br>
				accepteriez-vous de
				répondre à quelques questions de manière anonyme,<br> cela prendra moins de 5 minutes ?</h1>
			<button @click="startSurvey" class="btn-next">COMMENCER QUESTIONNAIRE</button>
		</div>


		<div id="5" v-if="level === 4">
			<h1> Quelle compagnie de car allez-vous utiliser ? </h1>
			<h2>Note enquêteur : les bus Blablacar s’appelaient auparavant Blablabus ou Ouibus.</h2>
			<select v-model="Compagnie" class="form-control">
				<option v-for="option in OptionsTransport" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<input v-if="Compagnie === 'Autre'" class="form-control" type="text" v-model="CompagniePrecision"
				placeholder="Precisez">
			<button v-if="Compagnie" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="6-7" v-if="level === 5">
			<h1> Comment êtes-vous arrivé·e à Lille Europe ? </h1>
			<select v-model="ModeDeplacement" class="form-control">
				<option v-for="option in modesDeplacement" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<div v-if="ModeDeplacement === 'Passager'">
				<h1>Si voiture en tant que passag·er·ère </h1>
				<select v-model="PassagerQ1" class="form-control">
					<option v-for="option in passagere1" :key="option.id" :value="option.output">
						{{ option.text }}
					</option>
				</select>
				<h1>Le conducteur a-t-il … ?</h1>
				<select v-model="PassagerQ2" class="form-control">
					<option v-for="option in passagere2" :key="option.id" :value="option.output">
						{{ option.text }}
					</option>
				</select>
			</div>
			<input v-if="ModeDeplacement === 'Autre'" class="form-control" type="text"
				v-model="ModeDeplacementPrecision" placeholder="Precisez">
			<button v-if="ModeDeplacement" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="8" v-if="level === 6">
			<h1>Avec combien de personnes effectuez-vous ce déplacement en autocar ? (si tout seul, alors zéro)</h1>
			<h1>(réponse numérique entre 0 et 99)</h1>
			<input class="form-control" type="text" v-model="NbrPers" placeholder="Precisions">
			<button v-if="NbrPers" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>


		<div id="9 - 10" v-if="level === 7">
			<h1>Quel est le motif de votre voyage ?</h1>
			<select v-model="Motif" class="form-control">
				<option v-for="option in motifsDeplacement" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<div v-if="Motif === 'Rentrer'">
				<h1>Pour quel motif êtes-vous venu à Lille ?</h1>
				<select v-model="MotifVenue" class="form-control">
					<option v-for="option in raisonsDeplacement" :key="option.id" :value="option.output">
						{{ option.text }}
					</option>
				</select>
			</div>
			<input v-if="Motif === 'Autre'" class="form-control" type="text" v-model="PrecisionMotif"
				placeholder="Precisez">
			<button v-if="Motif" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="11" v-if="level === 8">
			<h1>Quelle est votre destination avec cet autocar ? </h1>
			<select v-model="Pays" class="form-control">
				<option v-for="option in paysOptions" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<div v-if="Pays === 'France'">
				<h1>Note enquêteur : la réponse « Aéroport » l’emporte sur Paris ou Hauts de France : si on se rend à
					l’aéroport de Lille Lesquin ou de Roissy, bien cocher «France - aéroport »</h1>
				<select v-model="FrPrecision" class="form-control">
					<option v-for="option in lieuxFrance" :key="option.id" :value="option.output">
						{{ option.text }}
					</option>
				</select>
			</div>
			<div v-if="Pays === 'Belgique'">
				<h1>Precisez</h1>
				<select v-model="BePrecision" class="form-control">
					<option v-for="option in lieuxBelgique" :key="option.id" :value="option.output">
						{{ option.text }}
					</option>
				</select>
			</div>
			<input v-if="Pays === 'Autre'" class="form-control" type="text" v-model="PaysPrecision"
				placeholder="Precisez">
			<button v-if="Pays" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="12" v-if="level === 9">
			<h1> A quelle fréquence utilisez-vous les cars longue distance de type FlixBus, OuiBus, Blablacar… que ce
				soit à Lille ou ailleurs ? (les navettes aéroports type Flibco ne sont pas concernées par cette
				question) </h1>
			<select v-model="Frequence" class="form-control">
				<option v-for="option in frequenceDeplacement" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="Frequence" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="13" v-if="level === 10">
			<h1> Avez-vous l’habitude de prendre l’autocar à Lille Europe (y compris navettes aéroports, mais ne pas
				tenir compte des bus Ilévia)? </h1>
			<select v-model="FrequenceLille" class="form-control">
				<option v-for="option in frequences" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="FrequenceLille" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="14" v-if="level === 11">
			<h1> Pour quel(s) motif(s) utilisez-vous généralement les cars longue distance de type FlixBus, BlaBlaCar… ?
			</h1>
			<select v-model="MotifLD" class="form-control">
				<option v-for="option in motifsVoyage" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<input v-if="MotifLD === 'Autre'" class="form-control" type="text" v-model="PrecisionMotifLD"
				placeholder="Precisions">
			<button v-if="MotifLD" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div v-if="level === 12">
			<button @click="submitSurvey" class="btn-next">FINIR QUESTIONNAIRE</button>
			<button @click="back" class="btn-return">retour</button>
		</div>
		<img class="logo" src="../assets/Alycelogo.webp" alt="Logo Alyce">

		<button class="btn-fin" @click="downloadData">download DATA</button>


	</div>
</template>

<script setup>
import { ref } from "vue";
import {
	nbPersArret, OptionsTransport, modesDeplacement, passagere1, passagere2, motifsDeplacement,
	raisonsDeplacement, paysOptions, lieuxFrance, lieuxBelgique,
	frequenceDeplacement, frequences, motifsVoyage
} from "./reponses";
// import GareSelector from "./GareSelector.vue";
import CommuneSelector from './CommuneSelector.vue';
import { db } from "../firebaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";
import * as XLSX from "xlsx";

const surveyCollectionRef = collection(db, "Autocar");
const level = ref(0);
const startDate = ref('');
const ENQUETEUR = ref('');
const NbrPersArretBus = ref('');
const NbrCarArretBus = ref('');
const Compagnie = ref('');
const CompagniePrecision = ref('');
const ModeDeplacement = ref('');
const ModeDeplacementPrecision = ref('');
const PassagerQ1 = ref('');
const PassagerQ2 = ref('');
const NbrPers = ref('');
const Motif = ref('');
const MotifVenue = ref('');
const PrecisionMotif = ref('');
const Pays = ref('');
const FrPrecision = ref('');
const BePrecision = ref('');
const PaysPrecision = ref('');
const Frequence = ref('');
const FrequenceLille = ref('');
const MotifLD = ref('');
const PrecisionMotifLD = ref('');





const startSurvey = () => {
	startDate.value = new Date().toLocaleTimeString("fr-FR").slice(0, 8);
	level.value++;
}


const next = () => {
	level.value++;

}

const back = () => {
	level.value--;
}



const submitSurvey = async () => {
	await addDoc(surveyCollectionRef, {
		HEURE_DEBUT: startDate.value,
		DATE: new Date().toLocaleDateString("fr-FR").replace(/\//g, "-"),
		JOUR: new Date().toLocaleDateString("fr-FR", { weekday: 'long' }),
		ENQUETEUR: ENQUETEUR.value,
		HEURE_FIN: new Date().toLocaleTimeString("fr-FR").slice(0, 8),
		NbrPersArretBus: NbrPersArretBus.value,
		NbrCarArretBus: NbrCarArretBus.value,
		Compagnie: Compagnie.value,
		CompagniePrecision: CompagniePrecision.value,
		ModeDeplacement: ModeDeplacement.value,
		ModeDeplacementPrecision: ModeDeplacementPrecision.value,
		PassagerQ1: PassagerQ1.value,
		PassagerQ2: PassagerQ2.value,
		NbrPers: NbrPers.value,
		Motif: Motif.value,
		MotifVenue: MotifVenue.value,
		PrecisionMotif: PrecisionMotif.value,
		Pays: Pays.value,
		FrPrecision: FrPrecision.value,
		BePrecision: BePrecision.value,
		PaysPrecision: PaysPrecision.value,
		Frequence: Frequence.value,
		FrequenceLille: FrequenceLille.value,
		MotifLD: MotifLD.value,
		PrecisionMotifLD: PrecisionMotifLD.value,

		


	});
	level.value = 1;
	startDate.value = "";
	NbrPersArretBus.value = "";
	NbrCarArretBus.value = "";
	Compagnie.value = "";
	CompagniePrecision.value = "";
	ModeDeplacement.value = "";
	ModeDeplacementPrecision.value = "";
	PassagerQ1.value = "";
	PassagerQ2.value = "";
	NbrPers.value = "";
	Motif.value = "";
	MotifVenue.value = "";
	PrecisionMotif.value = "";
	Pays.value = "";
	FrPrecision.value = "";
	BePrecision.value = "";
	PaysPrecision.value = "";
	Frequence.value = "";
	FrequenceLille.value = "";
	MotifLD.value = "";
	PrecisionMotifLD.value = "";	
};

const downloadData = async () => {
	try {
		const querySnapshot = await getDocs(surveyCollectionRef);
		let data = [];
		let maxWidths = {}; // Object to keep track of maximum width for each column

		// Define your headers // MODIFICATION SUR L'EXCEL
		const headers = {
			ID_questionnaire: "ID_questionnaire",
			ENQUETEUR: "ENQUETEUR",
			DATE: "DATE",
			JOUR: "JOUR",
			HEURE_DEBUT: "HEURE_DEBUT",
			HEURE_FIN: "HEURE_FIN",
			NbrPersArretBus: "NbrPersArretBus",
			NbrCarArretBus: "NbrCarArretBus",
			Compagnie: "Compagnie",
			CompagniePrecision: "CompagniePrecision",
			ModeDeplacement: "ModeDeplacement",
			ModeDeplacementPrecision: "ModeDeplacementPrecision",
			PassagerQ1: "PassagerQ1",
			PassagerQ2: "PassagerQ2",
			NbrPers: "NbrPers",
			Motif: "Motif",
			MotifVenue: "MotifVenue",
			PrecisionMotif: "PrecisionMotif",
			Pays: "Pays",
			FrPrecision: "FrPrecision",
			BePrecision: "BePrecision",
			PaysPrecision: "PaysPrecision",
			Frequence: "Frequence",
			FrequenceLille: "FrequenceLille",
			MotifLD: "MotifLD",
			PrecisionMotifLD: "PrecisionMotifLD",
		};

		// Initialize maxWidths with header lengths
		Object.keys(headers).forEach((key) => {
			maxWidths[key] = headers[key].length;
		});

		querySnapshot.forEach((doc) => {
			let docData = doc.data();
			let mappedData = {
				ID_questionnaire: doc.id,
				ENQUETEUR: docData.ENQUETEUR || "",
				DATE: docData.DATE || "",
				JOUR: docData.JOUR || "",
				HEURE_DEBUT: docData.HEURE_DEBUT || "",
				HEURE_FIN: docData.HEURE_FIN || "",
				NbrPersArretBus: docData.NbrPersArretBus || "",
				NbrCarArretBus: docData.NbrCarArretBus || "",
				Compagnie: docData.Compagnie || "",
				CompagniePrecision: docData.CompagniePrecision || "",
				ModeDeplacement: docData.ModeDeplacement || "",
				ModeDeplacementPrecision: docData.ModeDeplacementPrecision || "",
				PassagerQ1: docData.PassagerQ1 || "",
				PassagerQ2: docData.PassagerQ2 || "",
				NbrPers: docData.NbrPers || "",
				Motif: docData.Motif || "",
				MotifVenue: docData.MotifVenue || "",
				PrecisionMotif: docData.PrecisionMotif || "",
				Pays: docData.Pays || "",
				FrPrecision: docData.FrPrecision || "",
				BePrecision: docData.BePrecision || "",
				PaysPrecision: docData.PaysPrecision || "",
				Frequence: docData.Frequence || "",	
				FrequenceLille: docData.FrequenceLille || "",
				MotifLD: docData.MotifLD || "",
				PrecisionMotifLD: docData.PrecisionMotifLD || "",
			};
			data.push(mappedData);

			// Update maxWidths for each key in mappedData
			Object.keys(mappedData).forEach((key) => {
				const valueLength = mappedData[key].toString().length;
				maxWidths[key] = Math.max(maxWidths[key], valueLength);
			});
		});

		// Convert data to a worksheet
		const worksheet = XLSX.utils.json_to_sheet(data, {
			header: Object.keys(headers),
			skipHeader: false,
		});

		// Set the widths for each column
		worksheet["!cols"] = Object.keys(maxWidths).map((key) => ({
			wch: maxWidths[key] + 2 // +2 for a little extra padding
		}));

		const workbook = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(workbook, worksheet, "Data");

		// Export the workbook to a .xlsx file
		XLSX.writeFile(workbook, "Autocar.xlsx");
	} catch (error) {
		console.error("Error downloading data: ", error);
	}
};

</script>

<style>
body {
	background-color: #2a3b63;
}

.logo {
	padding: 10%;
	height: 3em;
}

h1 {
	text-align: center;
	color: #4caf50;
}

h2 {
	color: white;
}

.container {
	background-color: #2a3b63;
	color: white;
	padding: 5% 0;
	width: 75%;
	margin: auto;
}

.btn-next {
	width: 100%;
	background-color: green;
	color: white;
	padding: 20px 20px;
	margin-top: 20%;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}

.btn-fin {
	width: 100%;
	background-color: #4c4faf;
	color: white;
	padding: 20px 20px;
	margin-top: 5%;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}

.btn-return {
	width: 100%;
	background-color: #898989;
	color: white;
	padding: 20px 20px;
	margin-top: 5%;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}

.btn-return:hover {
	background-color: #839684;
}

.commune-dropdown {
	/* Style your dropdown list here */
	list-style-type: none;
	padding: 0;
	margin: 0;
	border: 1px solid #ccc;
	border-radius: 4px;
	max-height: 200px;
	overflow-y: auto;
}

.form-control {
	width: 100%;
	border-radius: 5px;
	border: 1px solid white;
	background-color: #333;
	color: white;
	text-transform: uppercase;
	font-weight: bolder;
}

input.form-control {
	width: 93%;
}

.commune-dropdown li {
	padding: 5px 10px;
	cursor: pointer;
}

*:focus {
	outline: none;
}

.commune-dropdown li:hover {
	background-color: #f0f0f0;
}

input,
select,
button {
	font-size: 16px;
	padding: 10px;
}
</style>
