// LIEN VERS LES DIFFERENTES PAGES
import logoIsitech from "./assets/logo-isitech.png";
import logoLycee from "./assets/logo-campus-avignon.png";
import logoSoprasteria from "./assets/soprasteria_logo.jpeg";
import logoSteamulo from "./assets/steamulo_lyon_logo.jpeg";
import logoAfdTech from "./assets/afd_technologies_logo.jpeg";
import logoSyscom from "./assets/LOGO SYSCOM.png";
import {bacOnClick, btsOnClick, licenceOnClick, mastereOnClick} from "./helper.tsx";

export const FORMATION_URL = "/formations";
export const PROJECTS_URL = "/projects";
export const EXPERIENCES_URL = "/experiences";
export const COMPETENCES_URL = "/competences";
export const CONTACT_URL = "/contact";
export const ACCEUIL_URL = "/";
export const LINKEDIN_URL = "https://linkedin.com/in/julien-bertrand-847264166";
export const GITHUB_URL = "https://github.com/Flunshield";

// LIEN VERS LES DIFFERENTES FORMATIONS
export const MASTERE_URL = "https://www.ecole-isitech.com/formations/mastere-esi/"
export const LICENCE_URL = "https://www.ecole-isitech.com/formations/bachelor-rpi/"
export const BTS_URL = "https://www.campus-avignon.fr/bts-systeme-electronique/"
export const BAC_URL = "https://www.campus-avignon.fr/baccalaureat-sciences-et-technologies-de-l-industrie-et-du-developpement-durable/"

// COMPETENCE
export const TAB_SOFT_SKILS = [
    {
        "title": "Une communication efficace",
        "description": "Être capable de communiquer clairement et efficacement avec les membres de l'équipe, les clients et d'autres parties prenantes est essentiel pour comprendre les exigences du projet, collaborer efficacement et résoudre les problèmes."
    },
    {
        "title": "Un esprit d'équipe",
        "description": "Travailler en collaboration avec d'autres membres de l'équipe de développement, en partageant des idées, en résolvant des problèmes ensemble et en contribuant au succès de l'équipe dans son ensemble."
    },
    {
        "title": "Une capacité d'apprentissage rapide",
        "description": "L'industrie de la technologie évolue rapidement, et un développeur doit être capable d'apprendre de nouvelles technologies, langages de programmation et outils rapidement pour rester à jour et compétitif."
    },
    {
        "title": "Une bonne résolution de problèmes",
        "description": "Être capable d'analyser les problèmes, de trouver des solutions créatives et efficaces, et de mettre en œuvre des correctifs rapidement et efficacement."
    },
    {
        "title": "Adaptabilité",
        "description": "Être flexible et capable de s'adapter aux changements dans les exigences du projet, les technologies utilisées et les méthodologies de travail."
    },
    {
        "title": "Gestion du stress et résistance à la pression",
        "description": "Être capable de rester calme et concentré sous pression, de résoudre les problèmes de manière efficace et de maintenir un haut niveau de performance même dans des situations stressantes."
    }
]
export const TAB_HARD_SKILS_PROG = ["Javascript", "Node", "Php", "Html", "Css", "C#", "Python", "Java"];
export const TAB_HARD_SKILS_FRAMEWORK = ["React", "Tailwind", "Symfony", "Strapi", "NestJs", "Express", "Bootstrap", "Laravel"];
export const TAB_HARD_SKILS_BDD = ["PostgreSQL", "MySQL", "MongoDB", "SQLite"];
export const TAB_HARD_SKILS_DEVOPS = ["Git", "Docker", "Jenkins", "Kubernetes", "AWS", "Azure", "Google Cloud"];
export const TAB_HARD_SKILS_TEST = ["Jest", "Mocha", "Chai", "Selenium", "Cypress"];

export const TAB_HARD_SKILS = [
    {
        "title": "Programmation",
        "items": TAB_HARD_SKILS_PROG
    },
    {
        "title": "FrameWork",
        "items": TAB_HARD_SKILS_FRAMEWORK
    },
    {
        "title": "Base de données",
        "items": TAB_HARD_SKILS_BDD
    },
    {
        "title": "DevOps",
        "items": TAB_HARD_SKILS_DEVOPS
    },
    {
        "title": "Tests",
        "items": TAB_HARD_SKILS_TEST
    }
]

// FORMATION
export const FORMATIONS = [
    {
        id: 1,
        logo: logoIsitech,
        date: "2023 - 2025",
        location:"Lyon",
        title: "Bac +5 – Mastère ESI Expert en Systèmes d’Information",
        etablissement: "ISITECH",
        onClick: mastereOnClick,
        RNCP: true,
        titleRNCP: "Expert en Systèmes d’Information",
        RNCPCode: "34471",
    },
    {
        id: 2,
        logo: logoIsitech,
        date: "2022 - 2023",
        location:"Lyon",
        title: "Bac +3 – Bachelor RPI Responsable de Projets Informatiques",
        etablissement: "ISITECH",
        onClick: licenceOnClick,
        RNCP: true,
        titleRNCP: "Responsable de Projets Informatiques",
        RNCPCode: "38478"
    },
    {
        id: 3,
        logo: logoLycee,
        date: "2015 - 2017",
        location:"Avignon",
        title: "BTS Cybersécurité, informatique et réseaux, électronique (Anciennement SNIR)",
        etablissement: "Campus des sciences et techniques",
        onClick: btsOnClick,
        RNCP: false
    },
    {
        id: 4,
        logo: logoLycee,
        date: "2013 - 2015",
        location:"Avignon",
        title: "BAC STI2D - SIN",
        etablissement: "Campus des sciences et techniques",
        onClick: bacOnClick,
        RNCP: false
    }
];

// EXPERIENCES

export const EXPERIENCES = [
    {
        id: 1,
        logo: logoSoprasteria,
        title: "Alternance - Développeur Application Windows/Android/IOS",
        date: "Octobre 2023 - Octobre 2025",
        location: "SopraSteria - Limonest",
        description:
            "Je travaille sur le développement et la maintenance d'applications en lien avec le secteur immobilier.",
        technologies: ["React native", "TypeScript", "Javascript Vanilla", "Cordova", "SQlite", "Git", "GitLab"]
    },
    {
        id: 2,
        logo: logoSteamulo,
        title: "Alternance - Développeur Web Full Stack",
        date: "Septembre 2022 - Septembre 2023",
        location: "Steamulo-Lyon - Lyon",
        description:
            "J'ai travaillé sur le développement du guichet unique des entreprises et des associations. L'objectif principal de ce projet était de simplifier et de rendre plus efficaces les procédures administratives liées à la création, la modification et la cessation d'entreprise ou d'association.",
        technologies: ["React", "TypeScript", "Strapi", "Symfony PHP", "Docker", "PostgreSQL", "Git", "GitLab"],
    },
    {
        id: 3,
        logo: logoAfdTech,
        title: "CDI - Chef de projet FTTO / Référent technique FTTO",
        date: "Mai 2019 - Août 2022",
        location: "AFDTech - Lyon",
        description:
            "Mise en place d’un pôle production, management transverse d’une équipe de 12 personnes, prise en charge des nouvelles recrues et assurer leur montée en compétence, déploiement réalisé selon les objectifs fixés (Délai / Coût), gestion des contrats des prestataires, obtention des livrables dans les délais et au juste prix, validation technico-financière des livrables, devis et conceptions techniques, etc.",
        tasks: [
            "Mise en place d’un pôle production",
            "Management transverse d’une équipe de 12 personnes",
            "Prise en charge des nouvelles recrues et assurer leur montée en compétence",
            "Déploiement réalisé selon les objectifs fixés (Délai / Coût)",
            "Gestion des contrats des prestataires, obtention des livrables dans les délais et au juste prix",
            "Validation technico-financière des livrables, devis et conceptions techniques",
            "Assumer la validation technico-financière des livrables, devis et conceptions techniques dans un périmètre de décision",
            "Apporter au management tous les éléments nécessaires pour arbitrage",
            "Garantir l’application du processus et des spécifications déploiement, notamment sur les aspects sécurité/ingénierie",
            "Apporter une vision globale du portefeuille et assurer un reporting hebdomadaire",
            "Identifier et accompagner des solutions innovantes vers le résultat attendu"
        ]
    },
    {
        id: 4,
        logo: logoSyscom,
        title: "CDI - Technicien Radio / Télépilote de drone",
        date: "Septembre 2017 - Avril 2019",
        location: "AFDTech - Lyon",
        description:
            "Réalisation de faisabilité hertziennes (survey), réalisation de panoramiques, simulation radio 3G/4G/5G, conception d'architecture site radio, maintenance mesure PIM, calibrage RET.",
        tasks: [
            "Réalisation de faisabilité hertziennes (survey)",
            "Réalisation de panoramiques",
            "Simulation radio 3G/4G/5G",
            "Conception d'architecture site radio",
            "Maintenance mesure PIM",
            "Calibrage RET"
        ]
    }
];


// PROJETS
export const PROJETS = [
    {
        id: 13,
        title: "CodeArena-Frontend",
        commentaire: "Projet CodeArena FRONT / Développé dans le cadre de mon projet de première année en Mastère ESI.",
        description: "Code Arena est une application web qui permet l'affrontement en programmation entre développeurs.\n" +
            "Ces derniers obtiendront un classement permettant donc de différencier leur niveau de compétences. Ce qui\n" +
            "pourra également permettre à des recruteurs potentiels de pouvoir filtrer leurs recherches et de démarcher les\n" +
            "développeurs qu'ils estiment posséder la compétence qu'ils recherchent.",
        technologies: ["React", "Tailwind CSS", "TypeScript", "Dockers", "javascript"],
        githubLink: "https://github.com/Flunshield/CodeArena-Frontend",
        demoLink: "https://codearena.jbertrand.fr/"
    },
    {
        id: 12,
        title: "CodeArena-Backend",
        commentaire: "Projet CodeArena API / Développé dans le cadre de mon projet de première année en Mastère ESI.",
        description: "Cette APi est le backend de CodeArena",
        technologies: ["NestJs", "Tailwind CSS", "TypeScript", "Dockers", "javascript", "prisma"],
        githubLink: "https://github.com/Flunshield/CodeArena-Backend",
        demoLink: ""
    },
    {
        id: 11,
        title: "CodeArena-ApiTesting",
        commentaire: "Api de test réaliser dans le cadre de mon projet de 1ere année en Mastère ESI",
        description: "Cette API permet de tester du code (uniquement JavaScript pour le moment).",
        technologies: ["NestJs", "Tailwind CSS", "TypeScript", "Dockers", "javascript"],
        githubLink: "https://github.com/Flunshield/CodeArena-ApiTesting",
        demoLink: ""
    },
    {
        id: 10,
        title: "back-app-elasticsearch",
        commentaire: "",
        description: "Ce projet est une application Nest.js qui utilise Elasticsearch pour fournir une API. Cette API permet aux utilisateurs d'effectuer des opérations de recherche avancées dans un index Elasticsearch et d'indexer de nouveaux jeux de données de manière efficace. Ainsi, toutes nos routes API et fonctionnalités Front sont compatibles avec n'importe quel jeu de données indexé dans Elasticsearch.",
        technologies: ["NestJs", "Tailwind CSS", "TypeScript", "Dockers", "ElasticSearch"],
        githubLink: "https://github.com/Flunshield/back-app-elasticsearch",
        demoLink: ""
    },
    {
        id: 9,
        title: "front-app-ElasticSearch",
        commentaire: "",
        description: "Ce projet est une application web créée avec React, TypeScript et Tailwind CSS dan l'objectif de s'entrainer à utiliser ElastikSearch.",
        technologies: ["React", "Tailwind CSS", "TypeScript", "ElasticSearch"],
        githubLink: "https://github.com/Flunshield/frontElasticSearch",
        demoLink: ""

    },
    {
        id: 8,
        title: "QRCoffee",
        commentaire: "Projet réalisé dans le cadre de ma licence chez l'ISITECH (2022-2023)",
        description: "\n" +
            "QR Coffee est une application qui permet de générer des codes QR pour différentes utilisations, notamment pour des URL, des cartes de visite électroniques (vCard) ou des positions géographiques. Son fonctionnement est simple : l'utilisateur fournit les informations nécessaires, telles qu'une URL, des coordonnées GPS ou des données de contact, et l'application génère un code QR correspondant.",
        technologies: ["React", "Tailwind CSS", "Node.js", "Clerk", "mongoDb"],
        githubLink: "https://github.com/Flunshield/QRCoffee",
        demoLink: "https://frontqrcoffee.jbertrand.fr/"
    },
    {
        id: 7,
        title: "Starter React-Typescript-Tailwind-Vite",
        commentaire: "",
        description: "Un bon point de départ pour débuter un projet en utilisant React avec TypeScript et TailwindCSS est de rassembler ces technologies puissantes. Avec React, vous bénéficiez d'une bibliothèque JavaScript flexible pour la construction d'interfaces utilisateur dynamiques. TypeScript offre un typage statique pour une meilleure sécurité et une maintenance plus facile du code.",
        technologies: ["React", "Tailwind CSS", "NestJs", "Vite"],
        githubLink: "https://github.com/Flunshield/Starter-React-ts-tailwind-vite",
        demoLink: ""
    },
    {
        id: 6,
        title: "Starter NestJs-MariaDb-Prisma-Docker",
        commentaire: "",
        description: "Un bon point de départ pour débuter un projet en utilisant NestJs avec MariaDb et Prisma est de rassembler ces technologies puissantes. Avec NestJs, vous bénéficiez d'un framework Node.js pour la construction d'API RESTful et d'applications back-end. MariaDb est une base de données relationnelle open-source qui offre des performances élevées et une grande fiabilité. Prisma est un ORM moderne pour Node.js et TypeScript qui simplifie l'accès à la base de données et la gestion des requêtes.",
        technologies: ["NestJs", "MariaDb", "Prisma", "Docker"],
        githubLink: "https://github.com/Flunshield/Starter-nestJs-mariadb-docker",
        demoLink: ""
    },
    {
        id: 5,
        title: "Tours de Hanoï",
        commentaire: "",
        description: "Le problème des tours de Hanoï est un casse-tête mathématique classique qui consiste à déplacer un ensemble de disques de diamètres différents d'une tige à une autre, en utilisant une troisième tige comme espace de stockage intermédiaire. Les disques sont empilés par ordre décroissant de diamètre, avec le plus grand disque en bas et le plus petit en haut. L'objectif est de déplacer tous les disques de la tige de départ à la tige d'arrivée, en respectant les règles suivantes : un seul disque peut être déplacé à la fois, chaque mouvement consiste à déplacer le disque supérieur d'une pile vers le sommet d'une autre pile, et aucun disque ne peut être placé sur un disque de diamètre inférieur.",
        technologies: ["Python"],
        githubLink: "https://github.com/Flunshield/Hano-",
        demoLink: ""
    },
    {
        id: 4,
        title: "Rapport Alternance Licence",
        commentaire: "Rapport de mon alternance chez Steamulo Lyon",
        description: "Rapport de mon alternance chez Steamulo Lyon qui a durée 1 an. J'ai travaillé sur le développement du guichet unique des entreprises et des associations. L'objectif principal de ce projet était de simplifier et de rendre plus efficaces les procédures administratives liées à la création, la modification et la cessation d'entreprise ou d'association.",
        technologies: ["Word"],
        githubLink: "https://github.com/Flunshield/Rapport_Alternance",
        demoLink: ""
    },
    {
        id: 3,
        title: "Gotagel",
        commentaire: "Projet de fin de BTS (Partie application android)",
        description: "Gotagel est un projet où l'objectif était de mettre en place un system d'éolienne d'agriculture connecté. Ce projet comprenais une partie hardware et une partie software. La partie hardware était de mettre en place un system de mesure de la vitesse du vent, de la température et de l'humidité. La partie software était de mettre en place un site web et une application pour visualiser les données en temps réel.",
        technologies: ["Android", "Java", "Html", "Css", "Php", "MySQL"],
        githubLink: "https://github.com/Flunshield/GotaGel",
        demoLink: ""
    },
    {
        id: 2,
        title: "JwtVerif",
        commentaire: "",
        description: "Un outil simple pour vérifier les jetons JWT (JSON Web Token) en ligne. Les jetons JWT sont un moyen sûr",
        technologies: ["TypeScript"],
        githubLink: "https://github.com/Flunshield/JwtVerif",
        demoLink: ""
    },
    {
        id: 1,
        title: "Formule-de-Luhn",
        commentaire: "",
        description: "La formule de Luhn est une méthode simple de vérification de la validité des numéros de carte de crédit, des numéros de sécurité sociale, des numéros de compte bancaire et d'autres identifiants numériques. Elle est basée sur un algorithme qui calcule une somme de contrôle en fonction des chiffres du numéro, puis vérifie si la somme de contrôle est un multiple de 10.",
        technologies: ["Php"],
        githubLink: "https://github.com/Flunshield/Formule-de-Luhn",
        demoLink: ""
    },
];

export const TECHNOLOGIES = [
    "React",
    "Tailwind CSS",
    "NestJs",
    "Vite",
    "MariaDb",
    "Prisma",
    "Docker",
    "Python",
    "Word",
    "Android",
    "Java",
    "Html",
    "Css",
    "php",
    "MySQL",
    "TypeScript",
    "Tous"
];