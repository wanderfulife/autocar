const nbPersArret = [
	{ id: 1, output: "<5", text: "< 5" },
	{ id: 2, output: "5-15", text: "5 – 15" },
	{ id: 3, output: ">15", text: "> 15" },
];

const OptionsTransport = [
	{ id: 1, output: "FlixBus", text: "FlixBus" },
	{ id: 2, output: "BlablacarOuibus", text: "Blablacar / Ouibus" },
	{ id: 3, output: "Flibco", text: "Flibco (pour les aéroports)" },
	{ id: 4, output: "Autre", text: "Autre (préciser) :" },
];

const modesDeplacement = [
	{
		id: 1,
		output: "Marche",
		text: "En marchant (au moins 5 min si avec un autre mode de déplacement)",
	},
	{ id: 2, output: "Vélo perso", text: "À vélo personnel" },
	{
		id: 3,
		output: "Vélo partagé",
		text: "À vélo partagé (VLille, Tier, Lime)",
	},
	{
		id: 4,
		output: "Trottinette perso",
		text: "À trottinette personnelle",
	},
	{
		id: 5,
		output: "Transports",
		text: "En transports en commun urbains (métro, tram, bus urbains…)",
	},
	{ id: 6, output: "Autocar", text: "En autocar (FlixBus, BlaBlaCar…)" },
	{ id: 7, output: "Train", text: "En train (TGV, TER, Intercités…)" },
	{
		id: 8,
		output: "Conducteur",
		text: "En voiture en tant que conduct·eur·rice",
	},
	{
		id: 9,
		output: "Passager",
		text: "En voiture en tant que passag·er·ère",
	},
	{
		id: 10,
		output: "Déposé par proche",
		text: "J’ai été déposé par un proche",
	},
	{
		id: 11,
		output: "Covoiturage",
		text: "C’était un covoiturage formel (via une plateforme type BlaBlaCar)",
	},
	{ id: 12, output: "Autre", text: "Autre (préciser)" },
];

const passagere1 = [
	{
		id: 1,
		output: "Déposé par proche",
		text: "J’ai été déposé par un proche",
	},
	{
		id: 2,
		output: "Covoiturage",
		text: "C’était un covoiturage formel (via une plateforme type BlaBlaCar)",
	},
];

const passagere2 = [
	{
		id: 1,
		output: "Stationnement",
		text: "Stationné sa voiture dans les environs",
	},
	{
		id: 2,
		output: "Dépôt arrêt minute",
		text: "Déposé ses passagers en réalisant un arrêt minute",
	},
];

const motifsDeplacement = [
	{ id: 1, output: "Rentrer", text: "Rentrer chez vous" },
	{ id: 2, output: "Visite proches", text: "Visite à des proches" },
	{ id: 3, output: "Vacances / Loisirs", text: "Vacances / Loisirs" },
	{
		id: 4,
		output: "Logement occasionnel",
		text: "Rejoindre un logement occasionnel",
	},
	{
		id: 5,
		output: "Déplacement professionnel",
		text: "Déplacement professionnel",
	},
	{ id: 6, output: "Autre", text: "Autre (préciser)" },
];

const raisonsDeplacement = [
	{ id: 1, output: "Visite proches", text: "Visite à des proches" },
	{ id: 2, output: "Vacances / Loisirs", text: "Vacances / Loisirs" },
	{
		id: 3,
		output: "Logement occasionnel",
		text: "Rejoindre un logement occasionnel",
	},
	{
		id: 4,
		output: "Déplacement professionnel",
		text: "Déplacement professionnel",
	},
	{ id: 5, output: "Autre", text: "Autre (préciser)" },
];

const paysOptions = [
	{ id: 1, output: "France", text: "France" },
	{ id: 2, output: "Belgique", text: "Belgique" },
	{ id: 3, output: "Pays Bas", text: "Pays Bas" },
	{ id: 4, output: "Allemagne", text: "Allemagne" },
	{ id: 5, output: "Royaume uni", text: "Royaume uni" },
	{ id: 6, output: "Autre", text: "Autre (préciser)" },
];

const lieuxFrance = [
	{ id: 1, output: "Aéroport", text: "Aéroport" },
	{
		id: 2,
		output: "Paris / Région parisienne",
		text: "Paris / Région parisienne",
	},
	{ id: 3, output: "Hauts-de-France", text: "Hauts-de-France" },
	{ id: 4, output: "Autre", text: "Autre" },
];


const lieuxBelgique = [
	{ id: 1, output: "Aéroport", text: "Aéroport" },
	{
		id: 2,
		output: "Hors aéroport",
		text: "Hors aéroport",
	},
];

const frequenceDeplacement = [
	{
		id: 1,
		output: "Première fois",
		text: "C’est la première fois",
	},
	{ id: 2, output: "1 fois par semaine", text: "Au moins 1 fois par semaine" },
	{ id: 3, output: "1 fois par mois", text: "Au moins 1 fois par mois" },
	{ id: 4, output: "Plusieurs fois par an", text: "Plusieurs fois par an" },
	{ id: 5, output: "Moins d’1 fois par an", text: "Moins d’1 fois par an" },
	{
		id: 6,
		output: "Jamais",
		text: "Jamais",
	},
];

const frequences = [
	{ id: 1, output: "Première fois", text: "C’est la première fois" },
	{ id: 2, output: "1 fois par semaine", text: "Au moins 1 fois par semaine" },
	{ id: 3, output: "1 fois par mois", text: "Au moins 1 fois par mois" },
	{ id: 4, output: "Plusieurs fois par an", text: "Plusieurs fois par an" },
	{ id: 5, output: "Moins d’1 fois par an", text: "Moins d’1 fois par an" },
];

const motifsVoyage = [
	{
		id: 1,
		output: "professionnel",
		text: "Déplacement professionnel",
	},
	{ id: 2, output: "Visite à des proches", text: "Visite à des proches" },
	{ id: 3, output: "Vacances / Loisirs", text: "Vacances / Loisirs" },
	{
		id: 4,
		output: "Logement occasionnel",
		text: "Rejoindre un logement occasionnel",
	},
	{ id: 5, output: "Autre", text: "Autre (préciser)" },
];

const amenagementsArretsBus = [
	{
		id: 1,
		output: "Abris voyageur grands et confortables",
		text: "Des « abris voyageur » suffisamment grands et confortables au plus près des cars",
	},
	{
		id: 2,
		output: "Parvis avec places assises",
		text: "Un vaste parvis à proximité des arrêts de cars avec des places assises vous permettant de vous isoler des autres voyageurs",
	},
	{
		id: 3,
		output: "Espace d’attente intérieur chauffé",
		text: "Un espace d’attente en intérieur chauffé mais possiblement un peu éloigné des cars",
	},
];

const informationsArretsBus = [
	{
		id: 1,
		output: "Écrans d'information temps réel",
		text: "Des Écrans d’information « temps réel » sur les départs et les arrivées",
	},
	{
		id: 2,
		output: "Annonces sonores départs et arrivées",
		text: "Des Annonces sonores sur les départs et les arrivées",
	},
	{
		id: 3,
		output: "Affichage fiches horaires",
		text: "Un affichage des fiches horaires théoriques",
	},
];
const securiteArretsBus = [
	{ id: 1, output: "Vidéosurveillance", text: "Vidéosurveillance" },
	{ id: 2, output: "Présence humaine", text: "Une présence humaine" },
	{
		id: 3,
		output: "Espace bien éclairé",
		text: "Un espace bien éclairé visible c’est suffisant",
	},
];

const optionsGenre = [
	{ id: 1, output: "Homme", text: "Un homme" },
	{ id: 2, output: "Femme", text: "Une femme" },
	{
		id: 3,
		output: "Ne souhaite pas répondre",
		text: "Je ne souhaite pas répondre",
	},
];

const tranchesAge = [
	{ id: 1, output: "15/17 ans", text: "15/17 ans" },
	{ id: 2, output: "18/29 ans", text: "18/29 ans" },
	{ id: 3, output: "30/44 ans", text: "30/44 ans" },
	{ id: 4, output: "45/59 ans", text: "45/59 ans" },
	{ id: 5, output: "60/74 ans", text: "60/74 ans" },
	{ id: 6, output: "75 ans et plus", text: "75 ans et plus" },
];

const categoriesProfessionnelles = [
	{ id: 1, output: "Agriculteur·rice", text: "Agriculteur·rice" },
	{
		id: 2,
		output: "Artisan·ne, commerçant·e, chef·fe d’entreprise",
		text: "Artisan·ne, commerçant·e, chef·fe d’entreprise",
	},
	{
		id: 3,
		output: "Cadre, profession intellectuelle supérieure",
		text: "Cadre, profession intellectuelle supérieure",
	},
	{
		id: 4,
		output: "Profession intermédiaire",
		text: "Profession intermédiaire",
	},
	{ id: 5, output: "Employé·e", text: "Employé·e" },
	{ id: 6, output: "Ouvrier·e", text: "Ouvrier·e" },
	{ id: 7, output: "Etudiant·e", text: "Etudiant·e" },
	{
		id: 8,
		output: "Sans activité professionnelle",
		text: "Sans activité professionnelle",
	},
	{ id: 9, output: "Retraité·e", text: "Retraité·e" },
	{ id: 10, output: "Autre", text: "Autre (préciser)" },
];




export {
	nbPersArret,
	OptionsTransport,
	modesDeplacement,
	passagere1,
	passagere2,
	motifsDeplacement,
	raisonsDeplacement,
	paysOptions,
	lieuxFrance,
	lieuxBelgique,
	frequenceDeplacement,
	frequences,
	motifsVoyage,
	amenagementsArretsBus,
	informationsArretsBus,
	securiteArretsBus,
	optionsGenre,
	tranchesAge,
	categoriesProfessionnelles,
};
