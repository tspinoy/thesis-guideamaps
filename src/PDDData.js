import React from 'react';

export const PDDTypes = {
  ALIMENTATION: 'alimentation',
  DECHETS: 'déchets',
  ENERGIE: 'énergie',
};

export const getPrimaryNodeColor = node => {
  switch (node.data.type) {
    case PDDTypes.ALIMENTATION:
      return '#5fb660';
    case PDDTypes.DECHETS:
      return '#468cc7';
    case PDDTypes.ENERGIE:
      return '#eeac57';
    default:
      return '#373244';
  }
};

export const getSecondaryNodeColor = node => {
  switch (node.data.type) {
    case PDDTypes.ALIMENTATION:
      return '#ecf5d5';
    case PDDTypes.DECHETS:
      return '#cfedfe';
    case PDDTypes.ENERGIE:
      return '#faefbc';
    default:
      return '#373244';
  }
};

export const PDDData = [
  {
    id: 0,
    title: 'Alimentation',
    text: '',
    media: '',
    parent: '',
    authors: '',
    place: '',
  },
  {
    id: 1,
    title: 'QUE MANGE-T-ON ?',
    text:
      'Besoin essentiel pour la survie de chacun, notre nourriture est également déterminante pour notre santé. C’est tout sauf le hasard qui a fait de l’alimentation le premier thème choisi pour être traité dans le cadre de cette opération.n' +
      'n' +
      'Savons-nous comment notre nourriture est produite, transformée, distribuée ? Avons-nous une idée de ce dont notre alimentation est constituée ?n' +
      'n' +
      'Nous avons la chance de vivre dans une région du monde où l’écrasante majorité de la population a accès à une quantité suffisante de nourriture. Cette chance est loin d’être partagée par tous les habitants de notre planète et, même dans notre pays, de grandes disparités subsistent.n' +
      'n' +
      'Pour en apprendre un peu plus sur ces questions, naviguez dans les différents chapitres de ce thème et découvrez les travaux des élèves bruxellois qui ont participé au volet scolaire de la plateforme DD.',
    media:
      'https://upload.wikimedia.org/wikipedia/commons/a/a0/Tractors_in_Potato_Field.jpg',
    parent: 0,
    authors: 'INFORSCIENCES',
    place: '',
  },
  {
    id: 2,
    title: "L'AGRICULTURE",
    text:
      'Longtemps l’agriculture est restée le secteur de l’économie qui occupait le plus de travailleurs. Aujourd’hui, moins de 5% de la population européenne se consacre à l’agriculture, avec de grandes disparités régionales. Ainsi, en Belgique, les agriculteurs ne sont que 2% de la population.n' +
      'n' +
      'Pendant ce temps, la production agricole a, par contre, augmenté plus vite que la population de nos régions. Aujourd’hui, nous avons des excédents dans la production. Cette spectaculaire augmentation de la productivité agricole résulte d’une révolution dans les pratiques qui s’est accomplie dans le courant du XXe siècle. La mécanisation du secteur, l’introduction des fertilisants et des pesticides, les techniques d’irrigation, mais aussi l’amélioration des méthodes de conservation de la production, sont quelques uns des facteurs qui expliquent ces résultats.n' +
      'n' +
      'Les méthodes qui ont permis cette révolution sont aujourd’hui remises en question. Très énergivores, consommant de l’eau plus que de raison, c’est surtout l’excès de recours aux fertilisants et pesticides qui est contesté car ils se retrouvent, à l’état de traces, dans les aliments que nous consommons.n' +
      'n' +
      'L’extraordinaire essor de l’agriculture biologique et des fermes urbaines, surtout pour la production maraîchère, illustre cette remise en question et une prise de conscience des consommateurs de la nécessité de soutenir le secteur agricole pour avoir une production de qualité.n' +
      'n' +
      'En Région Bruxelloise des initiatives se développent pour une agriculture urbaine de qualité. Si, comme les jeunes participants de cette opération, vous désirez les découvrir, nous vous invitons à aller visiter ces fermes ou, au moins, à visiter leur site web.',
    media:
      'https://upload.wikimedia.org/wikipedia/commons/a/a0/Tractors_in_Potato_Field.jpg',
    parent: 1,
    authors: 'INFORSCIENCES',
    place: '',
  },
  {
    id: 3,
    title: 'LA FILIERE ALIMENTAIRE',
    text:
      'Pour élaborer cette plateforme, nous avons réalisé une analyse (non-exhaustive) des flux alimentaires à Bruxelles (Photo ci-contre)',
    media:
      'http://sciences.ulb.ac.be/wp-content/uploads/2017/05/Plateforme-DD-Fili%C3%A8re-alimentaire.png',
    parent: 1,
    authors: 'INFORSCIENCES',
    place: '',
  },
  {
    id: 4,
    title: 'LA TRANSFORMATION ALIMENTAIRE',
    text:
      'La plupart de nos aliments sont transformés pour pouvoir être consommés. Notre pain quotidien, aliment de base depuis des millénaires en est le parfait exemple. Ainsi, les graines des céréales, riches en nutriments, sont broyées pour en faire de la farine, transformée à son tour grâce à la fermentation par des levures et avant une dernière transformation lors de la cuisson. Une série d’étapes que la science nous permet de comprendre et de maîtriser.',
    media: 'http://sciences.ulb.ac.be/wp-content/uploads/2017/05/IMG_0942.jpg',
    parent: 1,
    authors: 'INFORSCIENCES',
    place: '',
  },
  {
    id: 5,
    title: "L'ASSIETTE",
    text:
      'Les campagnes se vident et les villes grandissent. Le lien avec la nature se distant. Aujourd’hui, beaucoup de jeunes citadins peinent à identifier ce qu’ils mangent. Quelle partie du céleri mangeons-nous ? Les feuilles, la tige ou la racine ? Les tomates sont elles des fruits ou des légumes ? Etes-vous bien sur que les pommes de terre ne sont pas des racines ? Quelle est la nature chimique de ces aliments et comment pouvons nous l’analyser ? Voici quelques questions auxquelles les élèves bruxellois ont essayé de répondre. Découvrez leurs travaux…',
    media:
      'http://sciences.ulb.ac.be/wp-content/uploads/2017/05/alimentation.jpg',
    parent: 1,
    authors: 'INFORSCIENCES',
    place: '',
  },
];

export const PDDData2 = [
  {
    id: 0,
    titre: 'Plateforme DD',
    sousTitre: '',
    resume: '',
    parent: '',
    enfants: '',
    entrant: 7,
    sortant: '',
    ecole:
      "WORMS asbl;Collège St-Michel d'Etterbeek 17-18;Ferme du Parc Maximilien;Ecole Van Meyel 2017-18;Institut Alexandre Herlin 2017-18",
    multimedia: '',
    auteur:
      "Les élèves de 5è et 6è primaire de l'ecole Van Meyel, de 1ère secondaire forme 3 de l'Institut Alexandre Herlin et de 2è secondaire complémentaire et de rhétorique du Collège St-Michel ainsi que Inforsciences",
    source: '',
    image: 'https://sciences.brussels/dd/imgs/logo-DD.png',
    crossRefs: [],
  },
  {
    id: 1,
    titre: 'Bioconversion alimentaire',
    sousTitre: '',
    resume:
      "**Valorisation des résidus alimentaires végétaux pour élever des larves de mouches soldat noire**;**La recherche participative ValueBugs** a été implémentée dans 5 classes de 3 ecoles différentes : Collège St-Michel, 1ère et 6ème secondaire Ecole Van Meyel, 5ème et 6ème primaire Institut Alexandre Herlin, 1ère secondaire forme 3. nLe principe est d'utiliser les résidus alimentaires végétaux pour nourrir des larves de mouches soldat noire (Hermetia illucens). Ces larves pourront être utilisées comme aliment pour nourrir des animaux d’élevage (poules ou de poissons) ou de compagnie. L’avantage de cette conversion est de produire des aliments à haute valeur protéique.  nnLes **partenaires** de ce projet de recherche participative sont: La ferme du parc Maximilien, la ligue de protection des oiseaux, le CERVA (Centre d'étude et de recherches vétérinaires et agrochimiques) et l’asbl WORMS.  Objectifs pour les classes était de réaliser un dispositif permettant d'accueillir les larve et un autre pour faire la reproduction des mouches sur base de matériaux de récupération.  Mais aussi de réaliser des observations et des mesures (taille, poid, etc.) sur l’expérience en cours.   Résultats Plus de la moitié des dispositifs (55%) ont fonctionné. nnConcernant l’élevage, il faut en moyenne 94 jours pour le développement à maturité des premières larves. Il faut entre 1 à 2 semaines pour que ces larves mûres se transforment en mouche. Dans certaines classes, elles pèsent en moyenne 0,31g.  nLes aliments préférés par les larves sont la pomme (trognon), la salade, la carotte (râpée) et le pain. Elles n’aiment pas le céleri.  Les élèves recommandent d’alimenter les larves lorsque la majeure partie de la nourriture est transformée/consommée.  Ils proposent de ne pas faire l’élevage en plein hiver car les écarts de températures augmentent probablement le taux de mortalité des larves. Ils disent aussi avoir besoin de plus d’informations sur la mouche et son développement pour mieux pouvoir conduire l'élevage. nnConcernant les dispositifs, certains ont commencé à sentir relativement vite (début décembre). Pour pallier à cela ils ont utilisé du marc de café. L’utilisation de pain sec leur a permit de contrôler l’excès d’humidité.  La technique de la bouteille couchée fonctionne bien !  nPour ce qui est de la gestion en classe, ils ont organisé pour la plupart une tournante par groupe de 2 élèves mais que cela n’a fonctionné qu’un certain temps. Dans la plupart des classes, un petit groupe d’élèves motivés a prit en charge la gestion de l’élevage.  Ils ont été chercher la nourriture à la cantine de l’ecole ou des restes de collations des élèves. Ils proposent pour structurer le travail de :  prendre du temps sur le cours pour s’occuper de l’élevage installer un tableau mis en évidence à compléter par les groupes, noter dans le journal de classe  nn**Conclusion**, Les élèves se sont bien débrouillés dans ce projet de recherche totalement nouveau. Ils ont eu l’opportunité de communiquer leurs apprentissages à la ferme du parc Maximilien qui lance une unité de démonstration du projet et à Etienne Toffin qui coordonne le projet de recherche. Ces échanges valorisent leurs travaux et font d’eux des élèves-chercheurs.nnSuite à la participation de 5 classes de 3 ecoles différentes au projet de recherche participative **ValueBugs**, les résultats ont été récupérés et compilés dans ce document. Les élèves ont réalisés des dispositifs d'élevage et des volières uniques pour faire avancer la recherche !",
    parent: 0,
    enfants: '',
    entrant: 7,
    sortant: '',
    ecole:
      "WORMS asbl;Collège St-Michel d'Etterbeek 17-18;Ferme du Parc Maximilien;Ecole Van Meyel 2017-18;Institut Alexandre Herlin 2017-18",
    multimedia: '',
    auteur:
      "Les élèves de 5è et 6è primaire de l'ecole Van Meyel, de 1ère secondaire forme 3 de l'Institut Alexandre Herlin et de 2è secondaire complémentaire et de rhétorique du Collège St-Michel ainsi que Inforsciences",
    source: '',
    image: 'http://sciences.ulb.ac.be/wp-content/uploads/2018/06/ValueBugs.jpg',
    crossRefs: [19, 11, 14, 2, 8, 5, 16],
  },
  {
    id: 2,
    titre: 'Fait maison',
    sousTitre: '',
    resume:
      "Il existe une foule de techniques et recettes pour faire soi-même à la maison des produits et objets que nous avons trop l'habitude d'acheter en magasin. Cela permet de réduire la quantité d'emballages et de savoir ce qu'il y a dans les produits que nous utilisons.n***nSuite à leur participation au menu **Déchets** pour l'édition 2017-2018 de la Plateforme DD, les élèves de 5è et 6è primaire de l'Ecole al-Ghazali ont décidé de mettre en place des ateliers pour la fête de l'ecole. Ils ont donc partagé leurs savoirs de manière ludique lors de la fête de l'ecole qui a eu lieu les 27, 28 et 29 mars 2018.  nnLes élèves ont **fabriqué des éponges maison** (tawashi) avec de vieux tissus et ont proposé un atelier sur la **fabrication du dentifrice** dont voici la recette :nnSuivez les ingrédients suivants : nn° 3 c . à soupe d’huile vierge de noix de coco solide (que vous pouvez légèrement faire fondre à feu doux) nn° 1⁄2 c . à soupe de bicarbonate de soude. nn° 1⁄2 c . à soupe d’argile blanche. Mélangez un peu. Vous pouvez ajouter des huiles essentielles pour lui donner un goût plus spécifique. nn° 25 gouttes d’huile essentielle de menthe poivrée (pour l’effet fraîcheur et bonne haleine !) nn° 5 gouttes d’ huile essentielle de Tea tree (antiseptique)nnnSur ce lien vous trouverez la technique pour fabriquer vos éponges vous même: https://www.kaizen-magazine.com/diy/do-it-yourself-realiser-un-tawashi/",
    parent: 19,
    enfants: 'Le pain',
    entrant: 18,
    sortant: 18,
    ecole: 'Ecole Al-Ghazali 2017 - 2018',
    multimedia: '',
    auteur: 'Inforsciences',
    source: '',
    image: 'http://sciences.ulb.ac.be/wp-content/uploads/2018/06/P1044655.jpg',
    crossRefs: [],
  },
  {
    id: 3,
    titre: 'La consommation d’eau',
    sousTitre: '',
    resume:
      "*Suite aux quatre activités du programme scolaire, les élèves du Collège Saint-Hubert de Watermael-Boisfort ont travaillé, réfléchi et écrit sur la consommation d'eau*n***n&quot;Dans cette vidéo, nous vous montrons plusieurs actions que nous faisons quotidiennement mais qui consomment beaucoup plus d’eau que nous le pensons. Donc, nous vous montrons ce qu’il faut faire pour consommer le moins possible d’eau.nn**Exemples :**n- Quand vous vous lavez ne pas laisser l’eau couler.n- Essayer de prendre  le moins possible de bain et donc le plus possible de douche.n- Quand vous allez eau toilette ne pas tirer la chasse tout de suite, attendez que 2/3 personnes soient passées pour la tirer.n-…nn*Les actions quotidiennes utilisant le plus d’eau :*n1. Douche et bain : 39% n2. Sanitaires : 20% n3. Lavage du linge : 12% n4. Vaisselle : 10% n5. Divers : 6% n6. Lavage de voiture/jardin : 6% n7. Cuisine : 6% n8. Boisson : 1% nnnpar : Marie Neuville, Florence Rouvez, Manpreet Singh&quot;",
    parent: 4,
    enfants: 6,
    entrant: '',
    sortant: 'Réduire sa consommation;Le Coca-Cola',
    ecole: 'Collège Saint-Hubert de Watermael-Boisfort',
    multimedia: '',
    auteur:
      'les élèves de la classe de 2ème secondaire du Collège Saint-Hubert',
    source: '',
    image: '',
    crossRefs: [],
  },
  {
    id: 4,
    titre: 'La pollution',
    sousTitre: '',
    resume:
      "*Suite aux quatre activités du programme scolaire les élèves de 3ème secondaire de l'athénée Serge Creuz ont réalisé des panneaux de sensibilisation à l'impact de la pollution*n***n&quot;La pollution a des mauvaises répercussions sur la Terre, elle est la cause du réchauffement climatique et elle entraîne de grave problème de santé. Il existe plusieurs sorte de pollution : la pollution de l'air, la pollution marine, ... Cela est en partie la cause de la disparition des animaux. Comment peut-on remédier à ce problème ? Que devrait-on faire ? Doit-on agit ou doit-on rester dans notre confort ?&quot;nn&quot;La pollution a un impact réel dans notre société (Molembeek). Il faut savoir que l'environnement joue un très grand rôle dans le comportement de la population molembeekoise. Un mauvais environnement voudrait donc dire des comportements inappropriés. Favoriser le réchauffement climatique voudrait-il donc dire favoriser des attitudes malheureuses ? Quelle joie y a-t-il a vivre dans un environnement malpropre ? Si nous sommes fiers de nous revendiquer molembeekois, pourquoi ne pas entretenir notre quartier ? En arrêtant de jeter nos papiers par terre, en recyclant un peu plus, nous contribuons moins au réchauffement climatique.&quot;nn&quot;*Pour une terre plus saine, donnez le meilleur de vous même.* nnNous sommes à l'origine de la pollution et du réchauffement climatique. En effet, beaucoup d'inventions, qui n'ont pas été utilisées de la bonne manière, ont changé l'apparence de notre jolie Terre. Ce phénomène détruit notre planète et engendre de graves catastrophes telles que la fonte des glaces. Ainsi au lieu de vouloir changer de planète, essayez de modifier vos comportements envers la nôtre. &quot;",
    parent: 1,
    enfants: '10;5;3',
    entrant: '',
    sortant: '',
    ecole: 'Athénée Royal Serge Creuz',
    multimedia: '',
    auteur:
      "les élèves de la classe de 3ème secondaire de l'Athénée Royal Serge Creuz",
    source: '',
    image: 'http://sciences.ulb.ac.be/wp-content/uploads/2017/05/Pollution.jpg',
    crossRefs: [],
  },
  {
    id: 5,
    titre: 'La pollution atmosphérique',
    sousTitre: '',
    resume:
      "*Suite aux quatre activités du programme scolaire, les élèves du Collège Saint-Hubert de Watermael-Boisfort ont  travaillé, réfléchi et écrit sur la pollution atmosphérique*n***n&quot;La pollution atmosphérique des transports est trop importante : Le secteur des transports, en particulier les transports routiers, est en grande partie responsable de la pollution atmosphérique. En effet, les véhicules rejettent des émissions polluantes qui sont nocives pour notre santé. Ceci est d’autant plus vrai dans les villes car c’est là que la pollution est la plus importante et que les populations vivent. Le trafic routier est donc le premier responsable de la pollution dans les agglomérations.nnLa pollution atmosphérique, due en grande partie aux gaz d'échappements, cause des maladies respiratoires et contribue au réchauffement de la planète. En effet, le dioxyde de carbone (CO2) qui est rejeté entre autres par les voitures pollue l'atmosphère. On voit aussi apparaître au-dessus des grandes villes un « smog », sorte de brouillard causé par les pollutions urbaines. Ce smog est plus présent au-dessus des grandes villes asiatiques.nnnCamille NEUVILLE, Eliane KERVYN et Elise WYNGAERDEN  &quot;",
    parent: 4,
    enfants: '17;15',
    entrant: '',
    sortant: "l'effet de serre",
    ecole: 'Collège Saint-Hubert de Watermael-Boisfort',
    multimedia: '',
    auteur:
      'les élèves de 2 ème secondaire du Collège Saint-Hubert de Watermael-Boisfort',
    source: '',
    image: 'http://sciences.ulb.ac.be/wp-content/uploads/2017/05/smog.jpg',
    crossRefs: [10],
  },
  {
    id: 6,
    titre: "L'eau chaude",
    sousTitre: '',
    resume:
      "*Suite aux quatre activités du programme scolaire, les élèves du Collège Saint-Hubert de Watermael-Boisfort ont travaillé et écrit sur l'eau chaude*n***n&quot;Lorsque l’on dit “réduire sa consommation d’énergie”, on pense à  : n- Éteindre la lumière une fois que l’on quitte une piècen- Mettre moins de chauffage lorsqu’il fait chaud ou s’habiller plus chaudement n- Utiliser moins souvent la voiture et plus marcher nnMais peu de personnes pensent à l’eau chaude.  nnActuellement, l’eau chaude est principalement produite grâce à l’électricité ou au gaz. Mais il existe d’autres moyens beaucoup plus écologiques : par exemple, utiliser l’énergie solaire ou géothermique.nnLe chauffe-eau solaire est un moyen de plus en plus répandu. Il capte l’énergie lumineuse du soleil qu’il transforme en énergie thermique. Généralement placé sur le toit d’une maison, disposant ainsi d’une bonne lumière, il peut durer une bonne vingtaine d’années mais nécessite quand même, de temps à autre, un entretien. Il peut apporter une grande économie d’énergie, principalement dans les pays chauds et fortement ensoleillés. Il peut satisfaire ainsi une bonne partie de la demande en eau chaude et peut également produire de l’électricité.nnLa pompe à chaleur est aussi une alternative. Elle prélève la chaleur naturelle présente dans les sous-sols ou nappes phréatiques et l’amène au milieu à chauffer là où un ballon d’eau l’attend et pourra ainsi être chauffé.nnEn dehors de ces grandes mesures, parfois de simples petits gestes répétés peuvent faire une grande différence. Par exemple, privilégiez les douches plutôt que les bains qui peuvent consommer jusqu’au triple de la consommation d’eau chaude d’une seule douche, coupez l’eau lorsque vous vous lavez les mains ou les cheveux ou encore faites de grandes vaisselles au lieu de faire tourner votre lave-vaisselle avec trois couteaux et une assiette !nnDiane Bilgischer – Tessa Rouvez – Juliette Hubert&quot;",
    parent: 1,
    enfants: '',
    entrant: 'les panneaux solaires',
    sortant: '',
    ecole: 'Collège Saint-Hubert de Watermael-Boisfort',
    multimedia: '',
    auteur:
      'les élèves de 2ème secondaire A du Collège Saint-Hubert de Watermael-Boisfort',
    source: '',
    image: '',
    crossRefs: [],
  },
  {
    id: 7,
    titre: 'Le gaspillage alimentaire',
    sousTitre: "Partie de la nourriture produite qui n'est pas consommée",
    resume:
      "*Suite au travail effectué sur la gestion des déchets, la classe de 2ème du Collège Saint-Michel d'Etterbeek a décidé de passer à l'action pour réduire le gaspillage alimentaire. Voici leur lettre, adressée à la direction du collège :*nn&quot;Bonjour Madame,nnAvant tout chose, nous sommes l'équipe de SDA (Structures des apprentissages) de n2ème humanité et nous aimerions vous proposer une idée qui nous intéresse et qui vous intéressera certainement. Dans le cadre du cours, nous avons eu l'occasion de débattre, d'être informés et de réaliser des expériences scientifiques sur le tri des déchets. Tout ça nous a interpellé jusqu'à vous proposer cette idée de génie !nQuoi de plus formidable, pour une ecole de protéger l'environnement au lieu de le polluer ?nnNous trouvons que ce serait une très bonne idée d'avoir, ici au Collège, des poubelles oranges car cela pourrait aider les cuisiniers, les élèves,.. à mieux s'y retrouver au niveau du tri. nVous connaissez déjà l'importance du recyclage à travers les sacs poubelles bleus et jaunes. Depuis le début janvier, Bruxelles-Propreté a décidé de mettre en place un sac poubelle orange qui peut contenir tous nos restes de nourriture en passant par le sachet de thé, le marc de café ou encore les épluchures et autres emballages biodégradables. Les déchets de la poubelle orange deviendront du biogaz qui se trouve dans un biométhaniseur qui permettra de faire de l’électricité.nnCe serait sympa que nous soyons la première ecole à utiliser cette poubelle orange. En disposant de poubelles oranges, le collège deviendrait un bon exemple pour d'autres ecoles et donnerait une belle image. Un bon emplacement pour les placer serait de les mettre à l'entrée des réfectoires, à la salle des professeurs et dans les cours.nnMerci de votre compréhension.nnCordialementnPour le groupe SDA,nMoudjaoui ImanenDeluga Karolina&quot;",
    parent: 1,
    enfants: '',
    entrant: 'la transformation alimentaire',
    sortant: 1,
    ecole: "College Saint-Michel d'Etterbeek",
    multimedia: '',
    auteur:
      "les élèves de la classe de 2éme secondaire du Collège Saint-Michel d'Etterbeek",
    source:
      'Bruxelles-Propreté : https://www.arp-gan.be/fr/tri/22-dchets-alimentaires.html',
    image:
      'http://www.insidebrussels.be/V2/wp-content/uploads/2017/01/Screen-Shot-2017-01-08-at-20.23.51.png',
    crossRefs: [0],
  },
  {
    id: 8,
    titre: 'Le recyclage',
    sousTitre: 'pour mieux collaborer avec la nature.',
    resume:
      "*Suite aux quatre activités du programme scolaire les élèves de 3ème secondaire de l'Athénée Serge Creuz ont réalisé des panneaux de sensibilisation au recyclage.*n***n&quot;Recycler, c'est redonner une seconde vie aux choses. C'est éviter que des produits gaspillés se trouvent dans la nature et prennent des années, voire des centaines d'années, à disparaître. Recycler c'est protéger l'environnement, penser à l'avenir des prochaines générations. En recyclant, vous protéger l'environnement, vous économiser de l’énergie, vous développer le secteur du tri sélectif.&quot;",
    parent: 1,
    enfants: '9;12;1;16',
    entrant: 14,
    sortant: '',
    ecole: "l'Athénée Royal Serge Creuz",
    multimedia: '',
    auteur:
      "les élèves de la classe de 3ème secondaire de l'Athénée Royal Serge Creuz",
    source: '',
    image: 'http://sciences.ulb.ac.be/wp-content/uploads/2017/05/Recyclage.png',
    crossRefs: [],
  },
  {
    id: 9,
    titre: 'Le recyclage des panneaux photovoltaïques',
    sousTitre: '',
    resume:
      "*Suite aux activités réalisées avec les élèves de 2ème secondaire de l'Athénée Léon Lepage, certains d'entre eux ont décidé de rédiger les pages concernant les panneaux solaires.*n***n&quot;La plupart des composants d'un module solaire photovoltaïque, tout le verre et de grandes quantités de métaux peuvent être récupérés et recyclés. Certaines entreprises privées et des organismes sans but lucratif mettent en place des systèmes de collecte et de recyclage pour les panneaux photovoltaïques en fin de vie. nnEntre 2010 et 2014, plusieurs enquêtes et l'union européenne ont estimé que les deux tiers des déchets de cette nature n'arrivent jamais aux centres de retraitement agréés mais finissent en décharge ou à l'étranger.nnHassun Noura&quot;",
    parent: 8,
    enfants: '',
    entrant: 'la production des panneaux photovoltaïques',
    sortant: '',
    ecole: "l'athénée Léon Lepage",
    multimedia: '',
    auteur: "Hassun Noura, 2 ème secondaire B de l'athénée Léon Lepage",
    source: 'http://energies-renouvelables.consoneo.com ; http://energreen.be/',
    image:
      'http://sciences.ulb.ac.be/wp-content/uploads/2017/06/Recyclage-des-panneaux-solaires-photovoltaiques.jpg',
    crossRefs: [8],
  },
  {
    id: 10,
    titre: 'Les déchets dans la nature',
    sousTitre: 'Dégradation des déchets dans la nature',
    resume:
      "*Suite à un atelier sur la gestion des déchets, les élèves ont appris que les déchets se dégradaient dans la nature. Mais chaque déchets a un temps de dégradation propre selon sa forme et sa composition. Suite à cela, les élèves de 2ème secondaire du collège Saint-Michel d'Etterbeek, ont réalisé la ligne du temps (ci-contre) représentant le temps de dégradation des déchets de leur ecole .*",
    parent: 1,
    enfants: '11;5',
    entrant: '',
    sortant: '',
    ecole: "Collège Saint-Michel d'Etterbeek",
    multimedia: '',
    auteur:
      'les élèves de la classe de 2 ème secondaire du collège Saint Michel (Image); INFORSCIENCES (Texte)',
    source: "la classe de 2 ème secondaire du Collège Saint Michel d'Etterbeek",
    image: '',
    crossRefs: [],
  },
  {
    id: 11,
    titre: 'Les déchets dans les oceans',
    sousTitre: 'Le huitième continent',
    resume:
      "*Texte issu d'une présentation PowerPoint, réalisé par les élèves de la classe de 2ème secondaire du Collège Saint Michel d'Etterbeek pour sensibiliser les autres élèves à la gestion des déchets.*nn&quot;Après avoir travaillé sur le tri des déchets et ses conséquences, nous voulons nous mobiliser et vous en faire prendre conscience…nnActuellement, les océans sont pollués par plus de 100 millions de tonnes de plastiques. Le huitième continent qu'est ce que c'est ? C'est tous les déchets non recyclés. Ils se trouvent entre les Etats - Unis et le Japon, dans l'océan pacifique.nD'où viennent les plastiques ?nLes plastiques proviennent des grands cargos qui coulent, des gens au bord de la plage qui jettent leurs déchets et aussi de pays qui n'ont pas les moyens de recycler donc ils les rejettent dans la mer.nnComment les gens réagissent ... ? Les gens à travers le monde ne prennent pas conscience de la quantité de plastiques dispersés dans les différents milieux aquatiques.nAprès une réflexion de longue durée, des personnes se sont mobilisées pour ne consommer que 25 kilos de déchets par an et éviter de polluer autant nos océans ... Aidez nous à ne pas former le 8ème continent !nnAmine, Charles, Chloé, Elisa, Grâce, Grégoire, Hazem, Hrandy, Imane, Karolina, Mateo, Matthaeus, Michel, Mohamed, Salma et Yassin&quot;",
    parent: 10,
    enfants: '',
    entrant: '',
    sortant: '',
    ecole: "Collège Saint-Michel d'Etterbeek",
    multimedia: '',
    auteur: "la classe de 2ème secondaire du Collège Saint-Michel d'Etterbeek",
    source: '',
    image:
      'http://2.bp.blogspot.com/-3vuMU4pzzHQ/T1EdtX4OSKI/AAAAAAAAAFU/ZO9ByYlW2bU/s1600/vortex.jpg',
    crossRefs: [],
  },
  {
    id: 12,
    titre: 'Le tri densitaire des plastiques',
    sousTitre: 'Trier les plastiques',
    resume:
      "Suite à leur participation au menu **Déchets** pour l'édition 2017-2018 de la Plateforme DD, les élèves de 5è et 6è primaire de l'Ecole al-Ghazali ont décidé de mettre en place des ateliers pour la fête de l'ecole. Ils ont donc partager leurs savoirs de manière ludique lors de la fête de d'ecole qui a eu lieu les 27, 28 et 29 mars 2018.  nnLes élèves ont proposé un atelier sur le tri densitaire des plastique. L'objectif ludique était de prévoir si des aliments ou des objets, flottent ou coulent. Ensuite, ils ont expliqué aux participants que c'est cette technique (flotte/coule) qui est utilisée pour trier les déchets plastiques.",
    parent: 13,
    enfants: '',
    entrant: '',
    sortant: '',
    ecole: 'Ecole Al-Ghazali 2017 - 2018',
    multimedia: '',
    auteur: 'Inforsciences',
    source: '',
    image:
      'http://sciences.ulb.ac.be/wp-content/uploads/2018/05/tri-densitaire.jpg',
    crossRefs: [8],
  },
  {
    id: 13,
    titre: 'Le tri des déchets',
    sousTitre:
      'Première étape du recyclage : la collecte et le tri des déchets',
    resume:
      "*Trier les déchets ménagers est devenu un geste normal pour les bruxellois : un geste citoyen plus encore qu’une obligation légale. Les belges sont même les champions du tri au niveau européen.;Suite à leur participation au menu **Déchets** pour l'édition 2017-2018 de la Plateforme DD, les élèves de 5è et 6è primaire de l'Ecole al-Ghazali ont décidé de mettre en place des ateliers pour la fête de l'ecole. Ils ont donc partager leurs savoirs de manière ludique lors de la fête de d'ecole qui a eu lieu les 27, 28 et 29 mars 2018.  nnLes élèves ont notamment proposé un jeu dans lequel ils demandent  aux participants de trier un certain nombre de déchets en 15 secondes. Si ils y parviennent, ils gagnent un lot! nPourtant, il n’est pas si simple de s’y retrouver parmi les différents types de plastiques recyclables ou non, de bien identifier ce qui va dans les différents types de poubelles.nLe tri manuel, auquel les citoyens sont soumis, est suivi par d’autres processus de tri, plus poussés, pour lesquels on exploite les propriétés physiques et chimiques des déchets. Les élèves ont pu découvrir certains de ces processus au cours de cette opération.*",
    parent: 1,
    enfants: '14;12;16',
    entrant: '',
    sortant: 8,
    ecole: 'Recyclis',
    multimedia: '',
    auteur: 'INFORSCIENCES',
    source:
      'Eurostat : http://ec.europa.eu/eurostat/statistics-explained/index.php/Municipal_waste_statistics',
    image: 'https://www.arp-gan.be/images/upload/images/Sacs_orange_plus.jpg',
    crossRefs: [],
  },
  {
    id: 14,
    titre: 'Le tri par densite',
    sousTitre: '',
    resume:
      "*Durant l'atelier expérimental, les élèves ont appris que l'on utilise la densité des plastiques pour les trier. Ils ont découvert la notion de densité (et de masse volumique). Ils ont conçu un densimètre. Ils ont séparé différents plastiques en fonction de leurs densités respectives et des sigles spécifiques.* nn**Compte rendu de l'introduction sur la densité par Constantin et Geoffroy **nn&quot; On nous a expliqué la densité avec de la nourriture gros et petit. Contrairement à ce qu’on pourrait croire, les gros fruits et légumes ne coulent pas forcément. L’expérience consistait à deviner si les fruits et légumes coulaient ou non.&quot; nn**Compte rendu de la fabrication du densimètre par Mathilde et Capucine (photo de l'atelier ci-contre)**nn&quot; Lors de notre visite à L’ULB nous avons pu fabriquer un densimètre avec : Une paille, un bout de pâte à modeler, une feuille, une équerre, des ciseaux, des trombones et un crayon. C’était simple, il suffisait de suivre les instructions ! Nous l’avons ensuite essayé dans de l’eau, de l’huile et de l’éthanol. Nous avons pu constater les différentes densités de différents liquides. Nous avons beaucoup aimé les différentes expériences à réaliser ; la fabrication d’un densimètre nous a plu. Nous avons aussi appris beaucoup de choses en s’amusant.&quot;nn**Compte rendu de la séparation des plastiques en fonction de leurs densités respectives par Arthur et Charles**nn&quot; On avait de l’eau , du sel et du vinaigre. Le vinaigre ne servait à rien : il fallait faire le bon dosage entre l’eau et le sel pour que les trois plastiques se séparent. Les plastiques “flottaient” à trois hauteurs différentes dans le bécher. Ils avaient trois densités différentes par rapport à la densité de l’eau salée.&quot;nn**Compte rendu de la séparation des plastiques grâce aux sigles par Ulysse et Mathilde**nn&quot; La reconnaissance des plastiques:  ici, nous avons appris à mettre les plastiques dans les bons bacs grâce au sigle sur les bouteilles &quot;",
    parent: 13,
    enfants: '',
    entrant: '',
    sortant: 8,
    ecole: 'Lycée Français Jean Monnet',
    multimedia: '',
    auteur:
      'les élèves de la classe de CM2.7 (5ème primaire) du Lycée Français Jean Monnet',
    source: 'INFORSCIENCES',
    image: 'http://sciences.ulb.ac.be/wp-content/uploads/2017/05/IMG_9904.jpg',
    crossRefs: [],
  },
  {
    id: 15,
    titre: "l'impact des voitures",
    sousTitre: "Impact de l'utilisation des voitures sur l'environnement",
    resume:
      "*Suite aux quatre activités du programme scolaire, les élèves du Collège Saint-Hubert de Watermael-Boisfort ont travaillé, réfléchi et écrit sur l'impact de l'utilisation de la voiture sur l'environnement. Ils ont mesuré l'utilisation de la voiture pour les transports scolaire pour leur collège et une stratégie pour la réduire *n***n&quot;Aujourd’hui, tout le monde sait que la voiture pollue énormément. Mais, pourquoi dit-on que la voiture pollue ?  La voiture pollue parce qu’elle fonctionne en brûlant de l’essence ou du diesel, produits à base de pétrole, une énergie non-renouvelable.  En brûlant, ces 2 carburants dégagent plusieurs polluants :nn- **Gaz carbonique (CO2) :** non nocif, mais actif dans l'effet de serre.n- **Monoxyde de carbone (CO)** précurseur de l'ozone, très nocif. De plus, il produit des composés acides au contact de l'humidité.n- **Particules fines **suspectées d'effets cancérigènes, les plus fines étant les plus nocives. (principale composant du « smog »)n- **Oxyde de soufre (SO2) :** produit des composés acides au contact de l'humidité.n- **Ozone (O3) :** produit indirectement en zone urbaine par l'action du rayonnement ultraviolet solaire sur n- **les NOx et les COV**. Très nocif pour le système respiratoirennCi-contre (photo), la répartition des différents transports polluants en milieu urbain.nn*Nous avons décidé dans le cadre de cet exposé de nous concentrer sur les émissions de CO2. *nnLe CO2 n’est pas directement nocif pour la santé, mais il est la principale cause de l’effet de serre qui a des conséquences dramatiques sur le climat. C’est le fameux réchauffement climatique qui est actuellement au cœur des débats et probablement la plus grande menace sur l’avenir de notre planète.nn**Visitez le lieu ci-dessous pour découvrir la recherche et l'initiative citoyenne réalisées par les élèves**",
    parent: 5,
    enfants: '',
    entrant: '',
    sortant: "l'effet de serre",
    ecole: 'Collège Saint-Hubert de Watermael-Boisfort',
    multimedia: '',
    auteur:
      'les élèves de la classe de 2ème secondaire du Collège Saint-Hubert de Watermael-Boisfort',
    source: '',
    image:
      'http://sciences.ulb.ac.be/wp-content/uploads/2017/05/repartition-des-transports.jpg',
    crossRefs: [],
  },
  {
    id: 16,
    titre: 'Recyclage des Piles Usagées',
    sousTitre: 'Le Tri des Piles Usagées - BEBAT',
    resume:
      "*Après avoir suivi le menu **Gestion des déchets** avec la Plateforme DD, les élèves de l'Institut Reine Fabiola de Mme Hélène Coquelet, ont décidé de mettre en place une collecte des piles usagées à l'ecole. L'Institut Reine Fabiola est ainsi devenu un point de collecte Bebat ! *n***n**Bebat, c'est quoi?** n&quot;*Depuis 20 ans déjà, Bebat offre une nouvelle vie aux piles usagées en les collectant, les triant et les recyclant. Nous en extrayons les métaux et les matériaux précieux afin de les réutiliser comme matières premières. Toutes les autres substances sont elles aussi traitées avec le plus grand soin.*&quot;nn**Comment trier les piles?** n&quot;*1/ Le tri manuelnNous ouvrons les sachets et en retirons tout ce qui n'a pas sa place dans notre processus de tri (déchets, appareils électroniques, seringues, ampoules...).n2/ Le tri mécaniquenLes piles sont triées par taille à l'aide d'un tamis vibrant. n3/ Le tri automatiquenEn fonction de la taille, du poids et du champ magnétique des piles, nous connaissons leur composition chimique et nous pouvons les classer selon différentes familles chimiques.*&quot; Plus d'infos sur le tri des piles ici: https://www.bebat.be/fr/trier nn**Comment recycler? **n&quot;*Une fois triées par famille chimique, toutes les piles sont recyclées. Ce processus de recyclage se déroule selon un processus spécifique propre à chaque famille, au cours duquel les métaux et les autres composants sont récupérés pour être réutilisés comme matières premières dans l'industrie.*&quot; Plus d'infos sur le recyclage ici: https://www.bebat.be/fr/recycler",
    parent: 8,
    enfants: '',
    entrant: '',
    sortant: '',
    ecole: 'Institut Reine Fabiola',
    multimedia: '',
    auteur: 'Inforsciences',
    source: 'https://www.bebat.be/fr/programmescolaire#menu',
    image:
      'http://sciences.ulb.ac.be/wp-content/uploads/2018/06/IMG_2642-e1528712886440.jpg',
    crossRefs: [13],
  },
  {
    id: 17,
    titre: 'Réduire la pollution atmosphérique',
    sousTitre:
      'Mais pourquoi tant de personnes continuent-elles à prendre leur voiture ?',
    resume:
      '*Suite aux quatre activités du programme scolaire, les élèves du Collège Saint-Hubert de Watermael-Boisfort ont travaillé, réfléchi et écrit sur la pollution atmosphérique et les moyens pour la réduire*n***n&quot;Le confort qu’apporte la voiture semble être important pour beaucoup de personnes. En effet, lorsqu’une personne va  travailler en voiture, le soir après une dure journée, elle peut décompresser, couper et récupérer tranquillement dans son véhicule. La personne n’est pas debout dans un bus bondé. Elle est au calme.  Aller au travail en voiture permet de partir à n’importe quelle heure, on ne dépend de personne ni des horaires des transports en commun, il ne faut pas non plus attendre dans le froid. Mais il faut faire face aux embouteillages et être conscient de la pollution que la voiture engendre.nnIl s’agit de bien choisir son moyen de transport, de réfléchir à la meilleure façon de se rendre sur son lieu de travail ou à l’ecole et de le faire en connaissant l’impact que chaque moyen de transport occasionne sur l’environnement. De nouveaux moyens de transport font aussi leur apparition et vont probablement se développer dans les années à venir tels que les trottinettes, vélos et voitures électriques. Pour l’instant leur coût est encore assez important. &quot;nnCi-dessous, plusieurs sujets traitant des moyens qui permettent de réduire la pollution atmosphérique. Malheureusement, aucun n’est parfait. Nous allons vous présenter les différentes solutions qui existent .nnCamille NEUVILLE, Eliane KERVYN et Elise WYNGAERDEN  &quot;',
    parent: 5,
    enfants: 'se déplacer à pied ou à vélo;les transports en commun',
    entrant: '',
    sortant: '',
    ecole: 'Collège Saint-Hubert de Watermael-Boisfort',
    multimedia: '',
    auteur:
      'les élèves de 2ème secondaire du Collège Saint-Hubert de Watermael-Boisfort',
    source: '',
    image: 'http://sciences.ulb.ac.be/wp-content/uploads/2017/05/smog.jpg',
    crossRefs: [],
  },
  {
    id: 18,
    titre: 'Réutiliser',
    sousTitre: '',
    resume:
      "*La réutilisation est une solution efficace pour réduire nos déchets. De multiples objets peuvent être réutilisés de nombreuses fois sans devoir être détruits ou transformés (recyclage).*n***nnSuite à leur participation au menu **Déchets** pour l'édition 2017-2018 de la Plateforme DD, les élèves de 5è et 6è primaire de l'Ecole al-Ghazali ont décidé de mettre en place des ateliers pour la fête de l'ecole. Ils ont donc partagé leurs savoirs de manière ludique lors de la fête de d'ecole qui a eu lieu les 27, 28 et 29 mars 2018.    nnLes élèves ont proposé un atelier montrant comment fabriquer une boîte range-tout et un autre où ils offrent aux participants des sacs réutilisables en toile de lin qu'ils décorent eux-mêmes avec des pochoirs. Sur la photo, les élèves réutilisent de vieux bas pour faire des éponges *tawashi*nn**LA BOÎTE RANGE-TOUT**: *Il faut d’abord avoir un bocal en verre,ndeux pelotes de laines de différentes couleurs, de la colle forte. Quand vous aurez tout le matériel, vous commencez par enrouler la première pelote puis vous mettez un peu de colle sur le bout du fil et vous devez faire ça jusque ça recouvre tout le pot, puis vous avez fini.*",
    parent: 19,
    enfants: '',
    entrant: 'Fait maison',
    sortant: 'Fait maison',
    ecole: 'Ecole Al-Ghazali 2017 - 2018',
    multimedia: '',
    auteur: 'Inforsciences',
    source: '',
    image: 'http://sciences.ulb.ac.be/wp-content/uploads/2018/06/P1044655.jpg',
    crossRefs: [],
  },
  {
    id: 19,
    titre: 'Zéro déchet',
    sousTitre: '',
    resume:
      '*Dans nos poubelles, les emballages se taillent la part du lion. Réduire leur volume est devenu une nécessité. Certaines personnes, particulièrement motivées et faisant preuve d’une énorme créativité, se sont engagées à organiser leur quotidien sans emballages (ou presque). Rassurez-vous, elles vivent très bien. Leur expérience est source d’inspiration pour chacun de nous.*',
    parent: 1,
    enfants: '1;Fait maison',
    entrant: '',
    sortant: '',
    ecole: 'Zerocarabistouille;Ecole Al-Ghazali 2017 - 2018',
    multimedia: '',
    auteur: 'INFORSCIENCES',
    source: '',
    image:
      'http://sciences.ulb.ac.be/wp-content/uploads/2018/06/zero-déchets.jpg',
    crossRefs: [],
  },
];

export const PDDDataComplete = [
  {
    author:
      "Les élèves de 5è et 6è primaire de l'ecole Van Meyel, de 1ère secondaire forme 3 de l'Institut Alexandre Herlin et de 2è secondaire complémentaire et de rhétorique du Collège St-Michel ainsi que Inforsciences",
    content: '',
    crossRefs: [],
    id: 0,
    image: 'https://sciences.brussels/dd/imgs/logo-DD.png',
    parent: '',
    title: 'Plateforme DD',
    type: 'none',
  },
  /* ************
   * 3 CATEGORIES
   * ************ */
  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      '<p>Besoin essentiel pour la survie de chacun, notre nourriture est également déterminante pour notre santé. C’est tout sauf le hasard qui a fait de l’alimentation le premier thème choisi pour être traité dans le cadre de cette opération.</p><br>' +
      '<p><strong>Savons-nous comment notre nourriture est produite, transformée, distribuée ? Avons-nous une idée de ce dont notre alimentation est constituée ? </strong></p><br>' +
      '<p>Nous avons la chance de vivre dans une région du monde où l’écrasante majorité de la population a accès à une quantité suffisante de nourriture. Cette chance est loin d’être partagée par tous les habitants de notre planète et, même dans notre pays, de grandes disparités subsistent. </p><br>' +
      '<p>Pour en apprendre un peu plus sur ces questions, naviguez dans les différents chapitres de ce thème et découvrez les travaux des élèves bruxellois qui ont participé au volet scolaire de la plateforme DD.</p>',
    crossRefs: [],
    id: 1,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/a/a0/Tractors_in_Potato_Field.jpg',
    parent: 0,
    title: 'Alimentation',
    type: PDDTypes.ALIMENTATION,
  },
  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      '<p><em>Objets usagés, emballages, restes de nourriture, la liste de nos déchets est longue et leur volume considérable. Trop souvent, nous ne nous inquiétons pas de savoir ce qu’ils deviennent une fois notre poubelle vidée. </em></p><br>' +
      '<p><em>En Belgique, de plus en plus, nos déchets ont une seconde vie : ils sont recyclés. En plus de réduire drastiquement la quantité d’ordures qui est mise en décharge, le recyclage permet de transformer nos déchets en ressources nouvelles. </em></p><br>' +
      '<p><em>Que deviennent nos déchets ? Comment sont-ils triés, transformés ou stockés? Qui intervient dans les différents processus ?</em></p><br>' +
      '<p><em>Pour en apprendre un peu plus sur ces questions, naviguez dans les différents chapitres de ce thème et découvrez les travaux des élèves bruxellois qui ont participé au volet scolaire de la plateforme DD.</em></p>' +
      '</div>',
    crossRefs: [],
    id: 2,
    image:
      'http://sciences.ulb.ac.be/wp-content/uploads/2017/05/DD-d%C3%A9pots-clandestins.jpg',
    parent: 0,
    title: 'Déchets',
    type: PDDTypes.DECHETS,
  },
  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      "<p><em>Suite aux activités réalisées, les élèves du Collège Saint-Hubert ont rédigé plusieurs sujets traitant de l'énergie au quotidien</em></p><br>" +
      "<p>&quot;L'énergie, voilà une chose omniprésente dans notre vie quotidienne. Un système possède de l'énergie lorsqu’il est capable de provoquer un mouvement, d'élever une température, ...</p><br>" +
      "<p>Lorsque l'on pense à énergie, les premiers mots qui nous viennent à l'esprit sont: l'électricité, le mouvement, le chauffage.</p><br>" +
      '<p>Diane Bilgischer – Tessa Rouvez – Juliette Hubert&quot;</p>' +
      '</div>',
    crossRefs: [],
    id: 3,
    image: 'http://sciences.ulb.ac.be/wp-content/uploads/2017/05/Pokemon.png',
    parent: 0,
    title: 'Énergie',
    type: PDDTypes.ENERGIE,
  },
  /* ************
   * ALIMENTATION
   * ************ */
  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      "<p>Longtemps l'agriculture est restée le secteur de l'économie qui occupait le plus de travailleurs. Aujourd'hui, moins de 5% de la population européenne se consacre à l'agriculture, avec de grandes disparités régionales. Ainsi, en Belgique, les agriculteurs ne sont que 2% de la population.</p><br>" +
      "<p>Pendant ce temps, la production agricole a, par contre, augmenté plus vite que la population de nos régions. Aujourd'hui, nous avons des excédents dans la production. Cette spectaculaire augmentation de la productivité agricole résulte d'une révolution dans les pratiques qui s'est accomplie dans le courant du XXe siècle. La mécanisation du secteur, l'introduction des fertilisants et des pesticides, les techniques d'irrigation, mais aussi l'amélioration des méthodes de conservation de la production, sont quelques uns des facteurs qui expliquent ces résultats.</p><br>" +
      "<p>Les méthodes qui ont permis cette révolution sont aujourd'hui remises en question. Très énergivores, consommant de l'eau plus que de raison, c’est surtout l'excès de recours aux fertilisants et pesticides qui est contesté car ils se retrouvent, à l'état de traces, dans les aliments que nous consommons.</p><br>" +
      "<p>L'extraordinaire essor de l'agriculture biologique et des fermes urbaines, surtout pour la production maraîchère, illustre cette remise en question et une prise de conscience des consommateurs de la nécessité de soutenir le secteur agricole pour avoir une production de qualité.</p><br>" +
      '<p>En Région Bruxelloise des initiatives se développent pour une agriculture urbaine de qualité. Si, comme les jeunes participants de cette opération, vous désirez les découvrir, nous vous invitons à aller visiter ces fermes ou, au moins, à visiter leur site web.</p>' +
      '</div>',
    crossRefs: [6, 8, 19],
    id: 4,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/a/a0/Tractors_in_Potato_Field.jpg',
    parent: 1,
    title: "L'agriculture",
    type: PDDTypes.ALIMENTATION,
  },
  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      '<p><em>Pour élaborer cette plateforme, nous avons réalisé une analyse (non-exhaustive) des flux alimentaires à Bruxelles (Photo ci-contre)</em></p>' +
      '</div>',
    crossRefs: [],
    id: 5,
    image:
      'http://sciences.ulb.ac.be/wp-content/uploads/2017/05/Plateforme-DD-Fili%C3%A8re-alimentaire.png',
    parent: 1,
    title: 'La filiere alimentaire',
    type: PDDTypes.ALIMENTATION,
  },

  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      '<p><em>La plupart de nos aliments sont transformés pour pouvoir être consommés. Notre pain quotidien, aliment de base depuis des millénaires en est le parfait exemple.  Ainsi, les graines des céréales, riches en nutriments, sont broyées pour en faire de la farine, transformée à son tour grâce à la fermentation par des levures et avant une dernière transformation lors de la cuisson. Une série d’étapes que la science nous permet de comprendre et de maîtriser.</em></p>' +
      '</div>',
    crossRefs: [7, 8, 19],
    id: 6,
    image: 'http://sciences.ulb.ac.be/wp-content/uploads/2017/05/IMG_0942.jpg',
    parent: 1,
    title: 'La transformation alimentaire',
    type: PDDTypes.ALIMENTATION,
  },
  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      "<p><strong>Préparation de pains artisanaux et originaux par les élèves de 2ème secondaire de la classe de Mr Lermuseau Frank à L'Autre Côté de l'Ecole.</strong></p><br>" +
      "<p>Les élèves ont suivit le menu <strong>Alimentation</strong> avec la Plateforme DD. Ils les élèves ont participé à <strong>la séance d'introduction &quot;de l'assiette au système alimentaire&quot;</strong>. Ensuite, ils sont venus à l'ULB pour réaliser <strong>l'atelier expérimental &quot;Anatomie végétale à croquer&quot;</strong>. Puis, ils ont visité <strong> la Ferme Nos Pilifs</strong>. Finalement, ils ont réalisé <strong>la séance de conclusion et de réflexion </strong>en classe.</p><br>" +
      "<p>Pour leur projet scolaire, les élèves ont préparé des pains (blanc et à l'ail) chez eux et les ont amenés à déguster à l'événement de clôture de la Plateforme DD le 5 mai 2018.  Il n'ont pas seulement préparé le pain mais ils ont aussi calculé le prix coutant du pain fait maison comparé à celui qu'on achète en magasin. Ils obtiennent un coût approximatif de 1,25€ pour un pain de 600 grammes. Ils remarquent que le pain disponible en magasin est plus cher et concluent qu'il est plus économique de faire son pain sois même.</p><br>" +
      '<p>Bravo à eux !</p>' +
      '</div>',
    crossRefs: [6, 17],
    id: 7,
    image: 'http://sciences.ulb.ac.be/wp-content/uploads/2018/06/P1066105.jpg',
    parent: 6,
    title: 'Le pain',
    type: PDDTypes.ALIMENTATION,
  },

  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      '<p><em>Les campagnes se vident et les villes grandissent. Le lien avec la nature se distant.  Aujourd’hui, beaucoup de jeunes citadins peinent à identifier ce qu’ils mangent.  Quelle partie du céleri mangeons-nous ? Les feuilles, la tige ou la racine? Les tomates sont elles des fruits ou des légumes ?  Etes-vous bien sur que les pommes de terre ne sont pas des racines ?  Quelle est la nature chimique de ces aliments et comment pouvons nous l’analyser ?  Voici quelques questions auxquelles les élèves bruxellois ont essayé de répondre. Découvrez leurs travaux...</em></p>' +
      '</div>',
    crossRefs: [4, 6, 9, 19, 37, 49],
    id: 8,
    image:
      'http://sciences.ulb.ac.be/wp-content/uploads/2017/05/alimentation.jpg',
    parent: 1,
    title: "L'assiette",
    type: PDDTypes.ALIMENTATION,
  },
  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      '<p><em>Suite aux quatre activités du programme scolaire, les élèves du Collège Saint-Hubert de Watermael-Boisfort ont  travaillé et réfléchi sur la consommation de viande et ses conséquences</em></p><br>' +
      '<hr />' +
      "<p>&quot;Manger de la viande nuit à l'environnement. Selon un rapport de 2013 des Nations Unies, la production de nourriture animale générerait 14,5% des gaz à effets de serre, dont 9,3% par les bovins. Le secteur de l'élevage produit 7,1 milliards de tonnes de gaz équivalent au CO2. Ces gaz sont majoritairement produits par</p><br>" +
      '<ul>' +
      "<li>l'élevage des ruminants,</li>" +
      "<li>la digestion des bovins (les pets d'une vache sont faits de méthane, un gaz à effet de serre 25 fois plus puissant que le CO2. Le méthane expulsé par les bovins est la cause pour la moitié du réchauffement climatique!!!),</li>" +
      '<li>la production et la transformation du fourrage,</li>' +
      '<li>la fermentation du fumier</li>' +
      '<li>le transport des animaux et de la viande.' +
      'Le CO2 émis pour faire 1 kilo de bœuf est égal au CO2 émis par une ampoule de 100 watts allumée pendant une vingtaine de jours.</li>' +
      '</ul>' +
      "<p>En Europe, la consommation de viande a été augmenté de 60% ces 50 dernières années (c'est énorme) ! Et pourtant, c'est prouvé que manger trop de viande, c'est comme manger trop de sucre, c'est mettre sa santé en danger. Il y a des études scientifiques qui prouvent que la surconsommation de viande a un lien avec les maladies cardiovasculaires, certains cancers, des attaques cérébrales, le diabète, l'hypertension, et bien sûr l'obésité. Un homme omnivore d'âge moyen, a trois fois plus de chance de mourir d'une maladie cardiovasculaire qu'un végétarien.</p><br>" +
      "<p>80% de la forêt amazonienne a été détruite pour l'élevage des bovins ou pour l'agriculture des céréales pour nourrir ces bovins! Cela représente 14% de la déforestation de notre planète. Saviez-vous que un hectare de forêt tropicale absorbe une tonne de CO2 par an et nous détruisons cette forêt pour des élevages de bovins qui expulsent des quantités énorme de CO2 (plusieurs milliards de tonnes métrique par an !!!). Cela a un énorme impact sur notre monde! C'est une catastrophe pour notre planète : dégradation des terres, inondations, glissement de terrain, érosion, et la destruction des structures des sols. N'oublions pas que la déforestation provoque aussi la disparition d'espèces. Plus ou moins un tiers de la population mondiale est en manque d'eau potable or 70% de nos ressources d'eau sont utilisées par le secteur agricole et en majeur partie pour les élevages. Environ 5 000 litres d'eau sont utilisés pour produire 1000 kcal d'aliment d'origine animal alors que 1 000 litres sont utilisés pour des aliments végétaux. Si nous étions végétariens, nous pourrions économiser des milliers de litres d'eau par jour!!!  Nous sommes actuellement environ 7 milliards d'êtres humains sur notre planète.</p><br>" +
      "<p>Une personne sur neuf souffre de famine et cela est causé par plusieurs facteurs: des facteurs sociaux, géographiques et économiques. Devenir végétarien serait une bonne solution. Plus de la moitié des céréales produites sert actuellement à nourrir le bétail alors que l'on pourrait utiliser cette moitié pour nourrir les hommes. La terre pourrait nourrir alors 15 milliards de personnes.</p><br>" +
      "<p>Pour conclure, nous pourrions dire que même si l'élevage n'a pas que des mauvais côtés (Il y a des prairies qui ont leur sol plein de carbone stocké donc si on devait les retourner pour créer des champs pour l'alimentation humaine, tout le CO2 serait relâché dans notre atmosphère !!), elle est source de beaucoup de pollution, de déforestation, d'énormément de consommation d'eau alors que la consommation excessive de viande n'est pas bonne pour notre santé. Il serait donc sage et pas si difficile de diviser par deux notre consommation afin de réduire de 50% les émissions de gaz à effet de serre.&quot;</p>" +
      '</div>',
    crossRefs: [49],
    id: 9,
    image:
      'http://sciences.ulb.ac.be/wp-content/uploads/2017/05/PlateformeDD-logo-alimentation.png',
    parent: 8, // l'assiette
    title: 'Réduire sa consommation de viande',
    type: PDDTypes.ALIMENTATION,
  },
  /* ***********
   * * DECHETS *
   * *********** */
  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      '<p><em>Trier les déchets ménagers est devenu un geste normal pour les bruxellois : un geste citoyen plus encore qu’une obligation légale. Les belges sont même les champions du tri au niveau européen. Pourtant, il n’est pas si simple de s’y retrouver parmi les différents types de plastiques recyclables ou non, de bien identifier ce qui va dans les différents types de poubelles. Le tri manuel, auquel les citoyens sont soumis, est suivi par d’autres processus de tri, plus poussés, pour lesquels on exploite les propriétés physiques et chimiques des déchets. Les élèves ont pu découvrir certains de ces processus au cours de cette opération.</em></p><br>' +
      "<p>Suite à leur participation au menu <strong>Déchets</strong> pour l'édition 2017-2018 de la Plateforme DD, les élèves de 5è et 6è primaire de l'Ecole al-Ghazali ont décidé de mettre en place des ateliers pour la fête de l'école. Ils ont donc partager leurs savoirs de manière ludique lors de la fête de d'école qui a eu lieu les 27, 28 et 29 mars 2018.</p><br>" +
      '<p>Les élèves ont notamment proposé un jeu dans lequel ils demandent  aux participants de trier un certain nombre de déchets en 15 secondes. Si ils y parviennent, ils gagnent un lot!</p>' +
      '</div>',
    crossRefs: [13, 15],
    id: 10,
    image: 'https://www.arp-gan.be/images/upload/images/Sacs_orange_plus.jpg',
    parent: 2,
    title: 'Le tri des déchets',
    type: PDDTypes.DECHETS,
  },
  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      "<p><em>Durant l'atelier expérimental, les élèves ont appris que l'on utilise la densité des plastiques pour les trier. Ils ont découvert la notion de densité (et de masse volumique). Ils ont conçu un densimètre. Ils ont séparé différents plastiques en fonction de leurs densités respectives et des sigles spécifiques.</em></p><br>" +
      "<p><strong>Compte rendu de l'introduction sur la densité par Constantin et Geoffroy </strong></p><br>" +
      "<p>&quot; On nous a expliqué la densité avec de la nourriture gros et petit. Contrairement à ce qu'on pourrait croire, les gros fruits et légumes ne coulent pas forcément. L'expérience consistait à deviner si les fruits et légumes coulaient ou non.&quot;</p><br>" +
      "<p><strong>Compte rendu de la fabrication du densimètre par Mathilde et Capucine (photo de l'atelier ci-contre)</strong></p><br>" +
      "<p>&quot; Lors de notre visite à L'ULB nous avons pu fabriquer un densimètre avec : Une paille, un bout de pâte à modeler, une feuille, une équerre, des ciseaux, des trombones et un crayon. C’était simple, il suffisait de suivre les instructions ! Nous l’avons ensuite essayé dans de l'eau, de l’huile et de l’éthanol. Nous avons pu constater les différentes densités de différents liquides. Nous avons beaucoup aimé les différentes expériences à réaliser ; la fabrication d’un densimètre nous a plu. Nous avons aussi appris beaucoup de choses en s’amusant.&quot;</p><br>" +
      '<p><strong>Compte rendu de la séparation des plastiques en fonction de leurs densités respectives par Arthur et Charles</strong></p><br>' +
      "<p>&quot; On avait de l'eau , du sel et du vinaigre. Le vinaigre ne servait à rien : il fallait faire le bon dosage entre l’eau et le sel pour que les trois plastiques se séparent. Les plastiques “flottaient” à trois hauteurs différentes dans le bécher. Ils avaient trois densités différentes par rapport à la densité de l’eau salée.&quot;</p><br>" +
      '<p><strong>Compte rendu de la séparation des plastiques grâce aux sigles par Ulysse et Mathilde</strong></p><br>' +
      '<p>&quot;La reconnaissance des plastiques: ici, nous avons appris à mettre les plastiques dans les bons bacs grâce au sigle sur les bouteilles&quot;</p>' +
      '</div>',
    crossRefs: [13],
    id: 11,
    image: 'http://sciences.ulb.ac.be/wp-content/uploads/2017/05/IMG_9904.jpg',
    parent: 10, // tri des déchets
    title: 'Le tri par densite',
    type: PDDTypes.DECHETS,
  },
  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      "<p>Suite à leur participation au menu <strong>Déchets</strong> pour l'édition 2017-2018 de la Plateforme DD, les élèves de 5è et 6è primaire de l'Ecole al-Ghazali ont décidé de mettre en place des ateliers pour la fête de l'école. Ils ont donc partager leurs savoirs de manière ludique lors de la fête de d'école qui a eu lieu les 27, 28 et 29 mars 2018.</p><br>" +
      "<p>Les élèves ont proposé un atelier sur le tri densitaire des plastique. L'objectif ludique était de prévoir si des aliments ou des objets, flottent ou coulent. Ensuite, ils ont expliqué aux participants que c'est cette technique (flotte/coule) qui est utilisée pour trier les déchets plastiques.</p>" +
      '</div>',
    crossRefs: [13],
    id: 12,
    image:
      'http://sciences.ulb.ac.be/wp-content/uploads/2018/05/tri-densitaire.jpg',
    parent: 10, // tri des déchets
    title: 'Le tri densitaire des plastiques',
    type: PDDTypes.DECHETS,
  },

  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      "<p><em>Suite aux quatre activités du programme scolaire les élèves de 3ème secondaire de l'Athénée Serge Creuz ont réalisé des panneaux de sensibilisation au recyclage.</em></p><br>" +
      "<p>&quot;Recycler, c'est redonner une seconde vie aux choses. C'est éviter que des produits gaspillés se trouvent dans la nature et prennent des années, voire des centaines d'années, à disparaître. Recycler c'est protéger l'environnement, penser à l'avenir des prochaines générations. En recyclant, vous protéger l'environnement, vous économiser de l'énergie, vous développer le secteur du tri sélectif.&quot;</p>" +
      '</div>',
    crossRefs: [10, 11, 12, 56],
    id: 13,
    image: 'http://sciences.ulb.ac.be/wp-content/uploads/2017/05/Recyclage.png',
    parent: 2,
    title: 'Le recyclage',
    type: PDDTypes.DECHETS,
  },
  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      "<p><em>Suite aux activités réalisées avec les élèves de 2ème secondaire de l'Athénée Léon Lepage, certains d'entre eux ont décidé de rédiger les pages concernant les panneaux solaires.</em></p><br>" +
      "<p>&quot;La plupart des composants d'un module solaire photovoltaïque, tout le verre et de grandes quantités de métaux peuvent être récupérés et recyclés. Certaines entreprises privées et des organismes sans but lucratif mettent en place des systèmes de collecte et de recyclage pour les panneaux photovoltaïques en fin de vie.</p><br>" +
      "<p>Entre 2010 et 2014, plusieurs enquêtes et l'union européenne ont estimé que les deux tiers des déchets de cette nature n'arrivent jamais aux centres de retraitement agréés mais finissent en décharge ou à l'étranger.</p><br>" +
      '<p>Hassun Noura&quot;</p>' +
      '</div>',
    crossRefs: [40, 42],
    id: 14,
    image:
      'http://sciences.ulb.ac.be/wp-content/uploads/2017/06/Recyclage-des-panneaux-solaires-photovoltaiques.jpg',
    parent: 13, // recyclage
    title: 'Le recyclage des panneaux photovoltaïques',
    type: PDDTypes.DECHETS,
  },
  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      "<p><em>Après avoir suivi le menu <strong>Gestion des déchets</strong> avec la Plateforme DD, les élèves de l'Institut Reine Fabiola de Mme Hélène Coquelet, ont décidé de mettre en place une collecte des piles usagées à l'école. L'Institut Reine Fabiola est ainsi devenu un point de collecte Bebat !</em></p><br>" +
      "<p><strong>Bebat, c'est quoi?</strong> &quot;<em>Depuis 20 ans déjà, Bebat offre une nouvelle vie aux piles usagées en les collectant, les triant et les recyclant. Nous en extrayons les métaux et les matériaux précieux afin de les réutiliser comme matières premières. Toutes les autres substances sont elles aussi traitées avec le plus grand soin.</em>&quot;</p><br>" +
      "<p><strong>Comment trier les piles?</strong> &quot;<em>1/ Le tri manuel Nous ouvrons les sachets et en retirons tout ce qui n'a pas sa place dans notre processus de tri (déchets, appareils électroniques, seringues, ampoules...). 2/ Le tri mécanique Les piles sont triées par taille à l'aide d'un tamis vibrant. 3/ Le tri automatique En fonction de la taille, du poids et du champ magnétique des piles, nous connaissons leur composition chimique et nous pouvons les classer selon différentes familles chimiques.</em>&quot; Plus d'infos sur le tri des piles ici: <a href='https://www.bebat.be/fr/trier'>https://www.bebat.be/fr/trier</a></p><br>" +
      "<p><strong>Comment recycler? </strong> &quot;<em>Une fois triées par famille chimique, toutes les piles sont recyclées. Ce processus de recyclage se déroule selon un processus spécifique propre à chaque famille, au cours duquel les métaux et les autres composants sont récupérés pour être réutilisés comme matières premières dans l'industrie.</em>&quot; Plus d'infos sur le recyclage ici: <a href='https://www.bebat.be/fr/recycler'>https://www.bebat.be/fr/recycler</a></p>" +
      '</div>',
    crossRefs: [10],
    id: 15,
    image:
      'http://sciences.ulb.ac.be/wp-content/uploads/2018/06/IMG_2642-e1528712886440.jpg',
    parent: 13, // recyclage
    title: 'Recyclage des piles usagées',
    type: PDDTypes.DECHETS,
  },

  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      "<p><em>Dans nos poubelles, les emballages se taillent la part du lion. Réduire leur volume est devenu une nécessité. Certaines personnes, particulièrement motivées et faisant preuve d’une énorme créativité, se sont engagées à organiser leur quotidien sans emballages (ou presque). Rassurez-vous, elles vivent très bien. Leur expérience est source d'inspiration pour chacun de nous.</em></p>" +
      '</div>',
    crossRefs: [],
    id: 16,
    image:
      'http://sciences.ulb.ac.be/wp-content/uploads/2018/06/zero-d%C3%A9chets.jpg',
    parent: 2,
    title: 'Zéro déchet',
    type: PDDTypes.DECHETS,
  },
  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      "<p>Il existe une foule de techniques et recettes pour faire soi-même à la maison des produits et objets que nous avons trop l'habitude d'acheter en magasin. Cela permet de réduire la quantité d'emballages et de savoir ce qu'il y a dans les produits que nous utilisons.</p><br>" +
      "<p>Suite à leur participation au menu <strong>Déchets</strong> pour l'édition 2017-2018 de la Plateforme DD, les élèves de 5è et 6è primaire de l'Ecole al-Ghazali ont décidé de mettre en place des ateliers pour la fête de l'école. Ils ont donc partagé leurs savoirs de manière ludique lors de la fête de l'école qui a eu lieu les 27, 28 et 29 mars 2018.</p><br>" +
      '<p>Les élèves ont <strong>fabriqué des éponges maison</strong> (tawashi) avec de vieux tissus et ont proposé un atelier sur la <strong>fabrication du dentifrice</strong> dont voici la recette:</p><br>' +
      '<p>Suivez les ingrédients suivants:</p>' +
      '<ul>' +
      "<li>3 c . à soupe d'huile vierge de noix de coco solide (que vous pouvez légèrement faire fondre à feu doux)</li>" +
      '<li>1⁄2 c . à soupe de bicarbonate de soude.</li>' +
      '<li>1⁄2 c . à soupe d’argile blanche. Mélangez un peu. Vous pouvez ajouter des huiles essentielles pour lui donner un goût plus spécifique.</li>' +
      "<li>25 gouttes d’huile essentielle de menthe poivrée (pour l'effet fraîcheur et bonne haleine !)</li>" +
      "<li>5 gouttes d'huile essentielle de Tea tree (antiseptique)</li>" +
      '</ul><br>' +
      "<p>Sur ce lien vous trouverez la technique pour fabriquer vos éponges vous même: <a href='https://www.kaizen-magazine.com/diy/do-it-yourself-realiser-un-tawashi/' target='_blank'>https://www.kaizen-magazine.com/diy/do-it-yourself-realiser-un-tawashi/</a></p>" +
      '</div>',
    crossRefs: [7, 18],
    id: 17,
    image: 'http://sciences.ulb.ac.be/wp-content/uploads/2018/06/P1044655.jpg',
    parent: 16, // zéro déchet
    title: 'Fait maison',
    type: PDDTypes.DECHETS,
  },
  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      '<p><em>La réutilisation est une solution efficace pour réduire nos déchets. De multiples objets peuvent être réutilisés de nombreuses fois sans devoir être détruits ou transformés (recyclage).</em></p><br>' +
      "<p>Suite à leur participation au menu <strong>Déchets</strong> pour l'édition 2017-2018 de la Plateforme DD, les élèves de 5è et 6è primaire de l'Ecole al-Ghazali ont décidé de mettre en place des ateliers pour la fête de l'école. Ils ont donc partagé leurs savoirs de manière ludique lors de la fête de d'école qui a eu lieu les 27, 28 et 29 mars 2018.</p><br>" +
      "<p>Les élèves ont proposé un atelier montrant comment fabriquer une boîte range-tout et un autre où ils offrent aux participants des sacs réutilisables en toile de lin qu'ils décorent eux-mêmes avec des pochoirs. Sur la photo, les élèves réutilisent de vieux bas pour faire des éponges <em>tawashi</em></p><br>" +
      "<p><strong>LA BOÎTE RANGE-TOUT</strong>: <em>Il faut d'abord avoir un bocal en verre, deux pelotes de laines de différentes couleurs, de la colle forte. Quand vous aurez tout le matériel, vous commencez par enrouler la première pelote puis vous mettez un peu de colle sur le bout du fil et vous devez faire ça jusque ça recouvre tout le pot, puis vous avez fini.</em></p>" +
      '</div>',
    crossRefs: [17],
    id: 18,
    image: 'http://sciences.ulb.ac.be/wp-content/uploads/2018/06/P1044655.jpg',
    parent: 16, // zéro déchet
    title: 'Réutiliser',
    type: PDDTypes.DECHETS,
  },

  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      "<p><em>Suite au travail effectué sur la gestion des déchets, la classe de 2ème du Collège Saint-Michel d'Etterbeek a décidé de passer à l'action pour réduire le gaspillage alimentaire. Voici leur lettre, adressée à la direction du collège :</em></p><br>" +
      '<p>&quot;Bonjour Madame,</p>' +
      "<p>Avant tout chose, nous sommes l'équipe de SDA (Structures des apprentissages) de 2ème humanité et nous aimerions vous proposer une idée qui nous intéresse et qui vous intéressera certainement. Dans le cadre du cours, nous avons eu l'occasion de débattre, d'être informés et de réaliser des expériences scientifiques sur le tri des déchets. Tout ça nous a interpellé jusqu'à vous proposer cette idée de génie ! Quoi de plus formidable, pour une école de protéger l'environnement au lieu de le polluer ?</p><br>" +
      "<p>Nous trouvons que ce serait une très bonne idée d'avoir, ici au Collège, des poubelles oranges car cela pourrait aider les cuisiniers, les élèves,.. à mieux s'y retrouver au niveau du tri. Vous connaissez déjà l'importance du recyclage à travers les sacs poubelles bleus et jaunes. Depuis le début janvier, Bruxelles-Propreté a décidé de mettre en place un sac poubelle orange qui peut contenir tous nos restes de nourriture en passant par le sachet de thé, le marc de café ou encore les épluchures et autres emballages biodégradables. Les déchets de la poubelle orange deviendront du biogaz qui se trouve dans un biométhaniseur qui permettra de faire de l’électricité.</p><br>" +
      "<p>Ce serait sympa que nous soyons la première école à utiliser cette poubelle orange. En disposant de poubelles oranges, le collège deviendrait un bon exemple pour d'autres écoles et donnerait une belle image. Un bon emplacement pour les placer serait de les mettre à l'entrée des réfectoires, à la salle des professeurs et dans les cours.</p><br>" +
      '<p>Merci de votre compréhension.</p><br>' +
      '<p>Cordialement Pour le groupe SDA, Moudjaoui Imane Deluga Karolina&quot;</p>' +
      '</div>',
    crossRefs: [1, 4, 6, 8, 56],
    id: 19,
    image:
      'http://www.insidebrussels.be/V2/wp-content/uploads/2017/01/Screen-Shot-2017-01-08-at-20.23.51.png',
    parent: 2,
    title: 'Le gaspillage alimentaire',
    type: PDDTypes.DECHETS,
  },

  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      "<p><em>Suite aux quatre activités du programme scolaire les élèves de 3ème secondaire de l'athénée Serge Creuz ont réalisé des panneaux de sensibilisation à l'impact de la pollution</em></p><br>" +
      "<p>&quot;La pollution a des mauvaises répercussions sur la Terre, elle est la cause du réchauffement climatique et elle entraîne de grave problème de santé. Il existe plusieurs sorte de pollution : la pollution de l'air, la pollution marine, ... Cela est en partie la cause de la disparition des animaux. Comment peut-on remédier à ce problème ? Que devrait-on faire ? Doit-on agit ou doit-on rester dans notre confort ?&quot;</p><br>" +
      "<p>&quot;La pollution a un impact réel dans notre société (Molembeek). Il faut savoir que l'environnement joue un très grand rôle dans le comportement de la population molembeekoise. Un mauvais environnement voudrait donc dire des comportements inappropriés. Favoriser le réchauffement climatique voudrait-il donc dire favoriser des attitudes malheureuses ? Quelle joie y a-t-il a vivre dans un environnement malpropre ? Si nous sommes fiers de nous revendiquer molembeekois, pourquoi ne pas entretenir notre quartier ? En arrêtant de jeter nos papiers par terre, en recyclant un peu plus, nous contribuons moins au réchauffement climatique.&quot;</p><br>" +
      '<p>&quot;<em>Pour une terre plus saine, donnez le meilleur de vous même.</em></p><br>' +
      "<p>Nous sommes à l'origine de la pollution et du réchauffement climatique. En effet, beaucoup d'inventions, qui n'ont pas été utilisées de la bonne manière, ont changé l'apparence de notre jolie Terre. Ce phénomène détruit notre planète et engendre de graves catastrophes telles que la fonte des glaces. Ainsi au lieu de vouloir changer de planète, essayez de modifier vos comportements envers la nôtre. &quot;</p>" +
      '</div>',
    crossRefs: [45],
    id: 20,
    image: 'http://sciences.ulb.ac.be/wp-content/uploads/2017/05/Pollution.jpg',
    parent: 2,
    title: 'La pollution',
    type: PDDTypes.DECHETS,
  },
  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      "<p><em>Suite à un atelier sur la gestion des déchets, les élèves ont appris que les déchets se dégradaient dans la nature. Mais chaque déchets a un temps de dégradation propre selon sa forme et sa composition. Suite à cela, les élèves de 2ème secondaire du collège Saint-Michel d'Etterbeek, ont réalisé la ligne du temps (ci-contre) représentant le temps de dégradation des déchets de leur école .</em></p><br>" +
      '</div>',
    crossRefs: [23],
    id: 21,
    image:
      'http://sciences.ulb.ac.be/wp-content/uploads/2017/05/temps-de-d%C3%A9gradation-des-d%C3%A9chets-de-l%C3%A9cole.jpg',
    parent: 20,
    title: 'Les déchets dans la nature',
    type: PDDTypes.DECHETS,
  },
  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      "<p><em>Texte issu d'une présentation PowerPoint, réalisé par les élèves de la classe de 2ème secondaire du Collège Saint Michel d'Etterbeek pour sensibiliser les autres élèves à la gestion des déchets.</em></p><br>" +
      '<p>&quot;Après avoir travaillé sur le tri des déchets et ses conséquences, nous voulons nous mobiliser et vous en faire prendre conscience...</p>' +
      "<p>Actuellement, les océans sont pollués par plus de 100 millions de tonnes de plastiques. Le huitième continent qu'est ce que c'est ? C'est tous les déchets non recyclés. Ils se trouvent entre les Etats - Unis et le Japon, dans l'océan pacifique. D'où viennent les plastiques ? Les plastiques proviennent des grands cargos qui coulent, des gens au bord de la plage qui jettent leurs déchets et aussi de pays qui n'ont pas les moyens de recycler donc ils les rejettent dans la mer.</p><br>" +
      '<p>Comment les gens réagissent ... ? Les gens à travers le monde ne prennent pas conscience de la quantité de plastiques dispersés dans les différents milieux aquatiques. Après une réflexion de longue durée, des personnes se sont mobilisées pour ne consommer que 25 kilos de déchets par an et éviter de polluer autant nos océans ... Aidez nous à ne pas former le 8ème continent !</p><br>' +
      '<p>Amine, Charles, Chloé, Elisa, Grâce, Grégoire, Hazem, Hrandy, Imane, Karolina, Mateo, Matthaeus, Michel, Mohamed, Salma et Yassin&quot;</p>' +
      '</div>',
    crossRefs: [],
    id: 22,
    image:
      'http://2.bp.blogspot.com/-3vuMU4pzzHQ/T1EdtX4OSKI/AAAAAAAAAFU/ZO9ByYlW2bU/s1600/vortex.jpg',
    parent: 21, // les déchets dans la nature
    title: 'Les déchets dans les océans',
    type: PDDTypes.DECHETS,
  },

  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      '<p><em>Suite aux quatre activités du programme scolaire, les élèves du Collège Saint-Hubert de Watermael-Boisfort ont travaillé, réfléchi et écrit sur la pollution atmosphérique</em></p><br>' +
      "<p>&quot;La pollution atmosphérique des transports est trop importante : Le secteur des transports, en particulier les transports routiers, est en grande partie responsable de la pollution atmosphérique. En effet, les véhicules rejettent des émissions polluantes qui sont nocives pour notre santé. Ceci est d'autant plus vrai dans les villes car c'est là que la pollution est la plus importante et que les populations vivent. Le trafic routier est donc le premier responsable de la pollution dans les agglomérations.</p><br>" +
      "<p>La pollution atmosphérique, due en grande partie aux gaz d'échappements, cause des maladies respiratoires et contribue au réchauffement de la planète. En effet, le dioxyde de carbone (CO2) qui est rejeté entre autres par les voitures pollue l'atmosphère. On voit aussi apparaître au-dessus des grandes villes un « smog », sorte de brouillard causé par les pollutions urbaines. Ce smog est plus présent au-dessus des grandes villes asiatiques.</p><br>" +
      '<p>Camille NEUVILLE, Eliane KERVYN et Elise WYNGAERDEN  &quot;</p>' +
      '</div>',
    crossRefs: [21],
    id: 23,
    image: 'http://sciences.ulb.ac.be/wp-content/uploads/2017/05/smog.jpg',
    parent: 20, // la pollution
    title: 'La pollution atmosphérique',
    type: PDDTypes.DECHETS,
  },
  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      '<p><em>Suite aux quatre activités du programme scolaire, les élèves du Collège Saint-Hubert de Watermael-Boisfort ont travaillé, réfléchi et écrit sur la pollution atmosphérique et les moyens pour la réduire</em></p><br>' +
      "<p>&quot;Le confort qu'apporte la voiture semble être important pour beaucoup de personnes. En effet, lorsqu’une personne va  travailler en voiture, le soir après une dure journée, elle peut décompresser, couper et récupérer tranquillement dans son véhicule. La personne n’est pas debout dans un bus bondé. Elle est au calme.  Aller au travail en voiture permet de partir à n’importe quelle heure, on ne dépend de personne ni des horaires des transports en commun, il ne faut pas non plus attendre dans le froid. Mais il faut faire face aux embouteillages et être conscient de la pollution que la voiture engendre.</p><br>" +
      "<p>Il s'agit de bien choisir son moyen de transport, de réfléchir à la meilleure façon de se rendre sur son lieu de travail ou à l'école et de le faire en connaissant l'impact que chaque moyen de transport occasionne sur l'environnement. De nouveaux moyens de transport font aussi leur apparition et vont probablement se développer dans les années à venir tels que les trottinettes, vélos et voitures électriques. Pour l'instant leur coût est encore assez important. &quot;</p><br>" +
      "<p>Ci-dessous, plusieurs sujets traitant des moyens qui permettent de réduire la pollution atmosphérique. Malheureusement, aucun n'est parfait. Nous allons vous présenter les différentes solutions qui existent .</p><br>" +
      '<p>Camille NEUVILLE, Eliane KERVYN et Elise WYNGAERDEN&quot;</p>' +
      '</div>',
    crossRefs: [53, 54],
    id: 24,
    image: 'http://sciences.ulb.ac.be/wp-content/uploads/2017/05/smog.jpg',
    parent: 23, // la pollution atmosphérique
    title: 'Réduire la pollution atmosphérique',
    type: PDDTypes.DECHETS,
  },
  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      "<p><em>Suite aux quatre activités du programme scolaire, les élèves du Collège Saint-Hubert de Watermael-Boisfort ont travaillé, réfléchi et écrit sur l'impact de l'utilisation de la voiture sur l'environnement. Ils ont mesuré l'utilisation de la voiture pour les transports scolaire pour leur collège et une stratégie pour la réduire </em></p><br>" +
      "<p>&quot;Aujourd'hui, tout le monde sait que la voiture pollue énormément. Mais, pourquoi dit-on que la voiture pollue ? La voiture pollue parce qu'elle fonctionne en brûlant de l'essence ou du diesel, produits à base de pétrole, une énergie non-renouvelable. En brûlant, ces 2 carburants dégagent plusieurs polluants :</p><br>" +
      '<ul>' +
      "<li><strong>Gaz carbonique (CO2) :</strong> non nocif, mais actif dans l'effet de serre.</li>" +
      "<li><strong>Monoxyde de carbone (CO)</strong> précurseur de l'ozone, très nocif. De plus, il produit des composés acides au contact de l'humidité.</li>" +
      "<li><strong>Particules fines </strong>suspectées d'effets cancérigènes, les plus fines étant les plus nocives. (principale composant du « smog »)</li>" +
      "<li><strong>Oxyde de soufre (SO2) :</strong> produit des composés acides au contact de l'humidité.</li>" +
      "<li><strong>Ozone (O3) :</strong> produit indirectement en zone urbaine par l'action du rayonnement ultraviolet solaire sur </li>" +
      '<li><strong>les NOx et les COV</strong>. Très nocif pour le système respiratoire</li>' +
      '</ul><br>' +
      '<p>Ci-contre (photo), la répartition des différents transports polluants en milieu urbain.</p><br>' +
      '<p><em>Nous avons décidé dans le cadre de cet exposé de nous concentrer sur les émissions de CO2. </em></p><br>' +
      "<p>Le CO2 n'est pas directement nocif pour la santé, mais il est la principale cause de l’effet de serre qui a des conséquences dramatiques sur le climat. C’est le fameux réchauffement climatique qui est actuellement au cœur des débats et probablement la plus grande menace sur l’avenir de notre planète.</p><br>" +
      "<p><strong>Visitez le lieu ci-dessous pour découvrir la recherche et l'initiative citoyenne réalisées par les élèves</strong></p>" +
      '</div>',
    crossRefs: [],
    id: 25,
    image:
      'http://sciences.ulb.ac.be/wp-content/uploads/2017/05/repartition-des-transports.jpg',
    parent: 23, // la pollution
    title: "L'impact des voitures",
    type: PDDTypes.DECHETS,
  },

  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      "<p><em>Suite aux quatre activités du programme scolaire, les élèves du Collège Saint-Hubert de Watermael-Boisfort ont travaillé, réfléchi et écrit sur la consommation d'eau</em></p><br>" +
      "<p>&quot;Dans cette vidéo, nous vous montrons plusieurs actions que nous faisons quotidiennement mais qui consomment beaucoup plus d'eau que nous le pensons. Donc, nous vous montrons ce qu'il faut faire pour consommer le moins possible d'eau.</p><br>" +
      '<p><strong>Exemples :</strong></p>' +
      '<ul>' +
      "<li>Quand vous vous lavez ne pas laisser l'eau couler.</li>" +
      '<li>Essayer de prendre  le moins possible de bain et donc le plus possible de douche.</li>' +
      '<li>Quand vous allez eau toilette ne pas tirer la chasse tout de suite, attendez que 2/3 personnes soient passées pour la tirer.</li>' +
      '</ul><br>' +
      "<p><em>Les actions quotidiennes utilisant le plus d'eau :</em></p>" +
      '<ol>' +
      '<li>Douche et bain : 39% </li>' +
      '<li>Sanitaires : 20% </li>' +
      '<li>Lavage du linge : 12% </li>' +
      '<li>Vaisselle : 10% </li>' +
      '<li>Divers : 6% </li>' +
      '<li>Lavage de voiture/jardin : 6% </li>' +
      '<li>Cuisine : 6% </li>' +
      '<li>Boisson : 1% </li>' +
      '</ol><br>' +
      '<p>par : Marie Neuville, Florence Rouvez, Manpreet Singh&quot;</p>' +
      '</div>',
    crossRefs: [20, 45],
    id: 26,
    image:
      'http://sciences.ulb.ac.be/wp-content/uploads/2017/05/repartition-des-transports.jpg',
    parent: 23, // la pollution
    title: "La consommation d'eau",
    type: PDDTypes.DECHETS,
  },

  /* ***********
   * * Énergie *
   * *********** */
  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      "<p><em>Cette page est en cours d'écriture par les élèves participant au volet scolaire du programme</em></p><br>" +
      '<p><em>Pour participer au volet scolaire avec votre classe ou votre école, contactez-nous.</em></p><br>' +
      "<p><em>L'équipe d'INFORSCIENCES</em></p>" +
      '</div>',
    crossRefs: [31],
    id: 27,
    image:
      'http://sciences.ulb.ac.be/wp-content/uploads/2017/05/PlateformeDD-logo-energie.png',
    parent: 3,
    title: "Les formes d'énergie",
    type: PDDTypes.ENERGIE,
  },
  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      "<p> <em>Suite aux quatre activités du programme scolaire, les élèves du Collège Saint-Hubert de Watermael-Boisfort ont travaillé, réfléchi et écrit sur l'effet de serre</em></p><br>" +
      "<p>&quot;L'énergie solaire est l'énergie qui provient du rayonnement solaire. C'est une énergie renouvelable. Elle est utilisée pour produire de la chaleur (chauffer de l'eau) et même de l'électricité. Cette transformation d'énergie est faite par les panneaux solaires thermiques ou photovoltaïques.&quot;</p>" +
      '</div>',
    crossRefs: [39, 40],
    id: 28,
    image: 'http://sciences.ulb.ac.be/wp-content/uploads/2017/05/DD-Soleil.png',
    parent: 27, // formes d'énergie
    title: "L'énergie solaire",
    type: PDDTypes.ENERGIE,
  },
  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      "<p><em>Suite aux animations, les élèves de la classe de les élèves de 2ème secondaire de l'Institut de l'Enfant Jésus d'Etterbeek ont rédigé plusieurs pages sur l'énergie </em></p><br>" +
      "<p>&quot;L'énergie éolienne est l'énergie du vent.&quot;</p>" +
      '</div>',
    crossRefs: [36],
    id: 29,
    image:
      'http://sciences.ulb.ac.be/wp-content/uploads/2017/05/Champ_d%C3%A9oliennes.jpg',
    parent: 27, // formes d'énergie
    title: "L'énergie éolienne",
    type: PDDTypes.ENERGIE,
  },
  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      "<p><em>Suite aux animations, les élèves de la classe de 1ère secondaire B de l'Autre Côté de l'Ecole ont rédigés plusieurs pages sur l'énergie </em></p><br>" +
      "<p>&quot;L'énergie hydraulique est l'énergie fournie par le mouvement de l'eau, des vagues, d'un cours d'eau ou de chutes d'eau. On peut exploiter cette énergie de différentes façons.&quot;</p>" +
      '</div>',
    crossRefs: [35],
    id: 30,
    image:
      'http://sciences.ulb.ac.be/wp-content/uploads/2017/05/%C3%A9nergie-hydaulique.jpg',
    parent: 27, // formes d'énergie
    title: "L'énergie hydraulique",
    type: PDDTypes.ENERGIE,
  },

  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      "<p><em>Suite aux activités réalisées avec les élèves de 2ème secondaire de l'Athénée Léon Lepage, certains d'entre eux ont décidé de rédiger les pages concernant la production de l'électricité.</em></p><br>" +
      "<p>&quot;La production d'électricité est essentiellement un secteur industriel destiné à mettre à disposition de l'ensemble des consommateurs la possibilité d'un approvisionnement adapté à leurs besoins en énergie électrique.</p><br>" +
      "<p>La production d'électricité se fait depuis la fin du XIXè siècle à partir de différentes sources d'énergie primaire. Les premières centrales électriques fonctionnaient au bois. Aujourd'hui, la production peut se faire à partir d'énergie fossile (charbon, gaz naturel ou pétrole), d'énergie nucléaire, d'énergie solaire, d'énergie éolienne et de biomasse.</p><br>" +
      "<p><em>Combien de fois avez vous utilisé l'électricité aujourd'hui ?</em> Dans le monde moderne, l'électricité est un élément essentiel de la vie quotidienne. En fait, il est probablement impossible de compter toutes les fois où nous utilisons l'électricité au cours de la journée.</p><br>" +
      '<p><strong>Les différents modes de production</strong></p><br>' +
      "<p>Les centrales les plus répandues et les moins chères à construire sont les centrales thermiques à flamme, qui brûlent des énergies fossiles (charbon, pétrole ou gaz naturel) ou de la biomasse (déchets ménagers ou végétaux). Les centrales à charbon sont les plus nombreuses : elle produisent aujourd'hui plus de 40% de l’électricité mondiale. Ce sont aussi celles qui émettent le plus de CO2 par KWh produit. De grands pays, comme la Chine ou l'Inde utilisent essentiellement des centrales à charbon pour produire leur électricité. Les centrales nucléaires utilisent la chaleur produite par la fission des atomes d'uranium 235 ou de plutonium 239. D'autres centrales se servent de la chaleur/lumière du soleil, concentrée par des miroirs (centrales solaires thermiques à concentration).&quot;</p><br>" +
      '<p>Néné, Wiam &amp; Ghama</p>' +
      '</div>',
    crossRefs: [27, 43, 45],
    id: 31,
    image:
      'http://sciences.ulb.ac.be/wp-content/uploads/2017/06/centrale-a-charbon.jpg',
    parent: 3,
    title: 'La production énergétique',
    type: PDDTypes.ENERGIE,
  },
  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      "<p><em>Les pages sont en cours d'écriture par les élèves participants au volet scolaire du programme.</em></p><br>" +
      '<p><em>Pour participer au volet scolaire avec votre classe ou votre école, contactez-nous.</em></p><br>' +
      "<p><em>L'équipe d'INFORSCIENCES</em></p>" +
      '</div>',
    crossRefs: [3],
    id: 32,
    image:
      'http://sciences.ulb.ac.be/wp-content/uploads/2017/05/DD-Centrale_nucl%C3%A9aire_de_belleville_-_tours_de_refroidissement_1.jpg',
    parent: 31, // la production énergétique
    title: 'Les centrales nucleaires',
    type: PDDTypes.ENERGIE,
  },
  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      "<p><em>Suite aux animations, les élèves de la classe de 1ère secondaire B de l'Autre Côté de l'Ecole ont rédigé plusieurs pages sur l'énergie </em></p><br>" +
      '<p>&quot;Marie Skłodowska-Curie, née Maria Salomea Skłodowska le 7 novembre 1867 à Varsovie, au sein du Royaume du Congrès (actuelle Pologne), et morte le 4 juillet 1934 au sanatorium de Sancellemoz situé à Passy (Haute-Savoie, France), est une physicienne et chimiste polonaise, naturalisée française.</p><br>' +
      "<p>Pierre Curie — son époux — et Marie Curie reçoivent une moitié du prix Nobel de physique de 1903 (l'autre moitié est remise à Henri Becquerel) pour leurs recherches sur les radiations. En 1911, elle obtient le prix Nobel de chimie pour ses travaux sur le polonium et le radium.</p><br>" +
      "<p>Scientifique d'exception, elle est la première femme à avoir reçu le prix Nobel, et à ce jour la seule femme à en avoir reçu deux. Elle reste à ce jour la seule lauréate à avoir été récompensée dans deux domaines scientifiques distincts (par la suite, et en dehors strictement des sciences, Linus Pauling obtint le prix Nobel de chimie en 1954 et le prix Nobel de la paix en 1962). Elle est également la première femme lauréate en 1903, avec son mari, de la médaille Davy pour ses travaux sur le radium.</p><br>" +
      "<p>Maria Salomea Skłodowska naît à Varsovie, alors dans l'Empire russe, d'un père d'origine noble (professeur de mathématiques et de physique) et d'une mère institutrice. Elle est la benjamine d'une famille de quatre sœurs, Zofia (1863-1876), Bronisława  (1865-1939) et Helena (1866-1961), et un frère (1863-1937).</p><br>" +
      "<p>En l'espace de deux ans, elle perd sa sœur Zofia, du typhus, en janvier 1876, et sa mère, de la tuberculose, le 9 mai 1878. Elle se réfugie alors dans les études où elle excelle dans toutes les matières, et où la note maximale lui est accordée. Elle obtient ainsi son diplôme de fin d'études secondaires avec la médaille d’or en 1883. Elle souhaite poursuivre des études supérieures mais ces études sont interdites aux femmes.</p><br>" +
      "<p>Lorsque sa sœur aînée, Bronia, part faire des études de médecine à Paris, Marie s'engage comme gouvernante en province en espérant économiser pour la rejoindre, tout en ayant initialement pour objectif de revenir en Pologne pour enseigner. Au bout de trois ans, elle regagne Varsovie, où un cousin lui permet d'entrer dans un laboratoire. En 1891, elle part pour Paris, où elle est hébergée par sa sœur et son beau-frère. Le 3 novembre 1891, elle s'inscrit pour des études de physique à la faculté des sciences de Paris. Parmi les 776 étudiants de la faculté des sciences en janvier 1895, il se trouve 27 femmes. Si la plupart des étudiantes en faculté de médecine sont des étrangères, elles ne sont que 7 étrangères sur les 27 étudiantes en sciences.</p><br>" +
      "<p>Marie Curie décide d'étudier la radioactivité et en 1898, son mari Pierre Curie la rejoint dans ses recherches. Ils travaillent sur une roche s'appelant la pechblende qui est la principale source d'uranium. Marie essaye de comprendre quel est l’élément radioactif dans la roche. En juillet 1898, Marie Curie annonce la découverte du polonium nommé comme ça en l’honneur de son pays d’origine, la Pologne. Cet élément est 400 fois plus radioactif que l'uranium. </p><br>" +
      '<p>Eva&quot;</p>' +
      '</div>',
    crossRefs: [27],
    id: 33,
    image:
      'http://sciences.ulb.ac.be/wp-content/uploads/2017/05/Marie_Curie_c1920.png',
    parent: 32, // les centrales nucleaires
    title: 'Marie Curie et la radioactivité',
    type: PDDTypes.ENERGIE,
  },

  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      "<p><em>Suite aux animations, les élèves de la classe de les élèves de 2ème secondaire de l'Institut de l'Enfant Jésus d'Etterbeek ont rédigé plusieurs pages sur l'énergie </em></p><br>" +
      "<p>&quot;Les énergies renouvelables sont des énergies qui peuvent être renouvelées naturellement. Elles peuvent donc être utilisées sans limite dans le temps tandis que les énergies fossiles proviennent de réserves qui s'épuisent (qui se vident). ll existe cinq grands types d'énergies renouvelables : l'énergie solaire, l'énergie éolienne, l'énergie hydraulique, la biomasse et la géothermie.</p><br>" +
      '<p>Belgin, Siffeddine et Alexandra&quot;</p>' +
      '</div>',
    crossRefs: [27],
    id: 34,
    image:
      'http://sciences.ulb.ac.be/wp-content/uploads/2017/05/Champ_d%C3%A9oliennes.jpg',
    parent: 31, // la production énergétique
    title: 'Les énergies renouvables',
    type: PDDTypes.ENERGIE,
  },
  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      "<p><em>Suite aux animations, les élèves de la classe de 1ère secondaire B de l'Autre Côté de l'Ecole ont rédigés plusieurs pages sur l'énergie </em></p><br>" +
      "<p>&quot;Dès l'Antiquité l'énergie hydraulique est apparue avec les moulins à eau. En 1801, on augmente la taille des installations et grâce à la turbine on leur fait produire de l'électricité, ce qui permet de faciliter l'utilisation de cette énergie, c'est l'énergie hydroélectrique.&quot;</p><br>" +
      "<p>&quot;Les barrages sont des constructions mises en travers d'un cours d'eau pour en réguler le débit et/ou stocker de l'eau. Ils peuvent aussi produire de l'électricité grâce à des turbines qui transforment l'énergie cinétique en énergie électrique.</p><br>" +
      "<p>L'énergie cinétique c’est l'énergie du mouvement (de l'eau ou du vent par exemples). L'énergie hydraulique est une énergie renouvelable (qui se renouvelle continuellement) et non polluante certes mais pas sans défauts. En effet d'énormes barrages chassent notamment les animaux de leur environnement naturel. Les barrages possèdent donc à la fois des qualités et des défauts. Des qualités parce qu'ils peuvent produire de l'énergie sans polluer la planète et des défauts parce qu'ils ont un fort impact sur leur environnement et sur les espèces végétales et animales.</p><br>" +
      '<p>Belgin, Siffeddine et Alexandra&quot;</p>' +
      '</div>',
    crossRefs: [30],
    id: 35,
    image: 'http://sciences.ulb.ac.be/wp-content/uploads/2017/05/barrage.jpg',
    parent: 34, // les énergies renouvables
    title: 'Les barrages',
    type: PDDTypes.ENERGIE,
  },
  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      "<p><em>Suite aux animations, les élèves de la classe de 2eme secondaire B de l'institut de l'Enfant Jésus d'Etterbeek ont rédigé plusieurs pages sur les énergies renouvelables</em></p><br>" +
      '<p>&quot;Les éoliennes sont des moulins à vent mais en plus moderne.</p><br>' +
      "<p>Le vent qui les entraîne forme des forces mécaniques. Les hélices des éoliennes, captent l'énergie du vent et la transforment en électricité grâce à un générateur.</p><br>" +
      "<p><strong>Avantages de l'énergie éolienne :</strong></p>" +
      '<ul>' +
      "<li>La puissance et l'énergie produites par une éolienne peuvent être relativement importante.</li>" +
      "<li>Le mini-éolien permet de produire de l'énergie pour un site isolé.</li>" +
      '</ul>' +
      "<p><strong>Inconvénients de l'énergie éolienne :</strong></p>" +
      '<ul>' +
      "<li>Elles peuvent gâcher le paysage, c'est pourquoi certaines sont installées en mer.</li>" +
      "<li>Elles ne peuvent produire de l'énergie que dans les lieux où le vent souffle.</li>" +
      "<li>Leur production, qui n'est pas régulière, doit être complétée par d'autres productions d'électricité lorsqu'on veut de l'électricité à la demande à n'importe quel moment</li>" +
      '</ul>' +
      '<p>Belgin, Siffeddine et Alexandra&quot;</p>' +
      '</div>',
    crossRefs: [29],
    id: 36,
    image: 'http://sciences.ulb.ac.be/wp-content/uploads/2017/05/eolienne.jpg',
    parent: 34, // les énergies renouvables
    title: 'Les éoliennes',
    type: PDDTypes.ENERGIE,
  },
  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      "<p><em>Suite aux animations, les élèves de la classe de 2ème secondaire B de l'institut de l'Enfant Jésus d'Etterbeek ont rédigé plusieurs pages sur les énergies renouvelables</em></p><br>" +
      "<p>&quot;La biomasse en tant que ressource d'énergie est l'utilisation de la matière de diverses plantes en la transformant ou non. </p>" +
      '<p>Il y a :</p>' +
      '<ul>' +
      '<li>Le bois de chauffage servant principalement au chauffage, et aussi à la cuisson des aliments (photo ci-contre)</li>' +
      "<li>Les produits agricoles transformés pour remplacer les carburants classiques comme l'essence ou le diesel.</li>" +
      "<li>Le biogaz, produit par la fermentation de déchets, de lisiers voire de plantes cultivées pour cela, le procédé s'appelle la méthanisation.</li>" +
      '</ul>' +
      '<p>Belgin, Siffeddine et Alexandra&quot;</p>' +
      '</div>',
    crossRefs: [8],
    id: 37,
    image: 'http://sciences.ulb.ac.be/wp-content/uploads/2017/05/biomasse.jpg',
    parent: 34, // les énergies renouvables
    title: 'La biomasse',
    type: PDDTypes.ENERGIE,
  },
  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      "<p><em>Suite aux animations, les élèves de la classe de 2ème secondaire B de l'institut de l'Enfant Jésus d'Etterbeek ont rédigé plusieurs pages sur les énergies renouvelables </em></p><br>" +
      "<p>&quot;La géothermie utilise la chaleur naturelle contenue dans les sous-sols. Elle peut être utilisée pour le chauffage mais aussi pour la production d'électricité.</p><br>" +
      '<p>La géothermie est appelée haute énergie (à plus de 150 °C), moyenne énergie (de 90 °C à 150 °C), basse énergie (de 30 °C à 90 °C) et très basse énergie (à moins de 30 °C).</p><br>' +
      '<p>La géothermie ne dégage que peu de gaz à effet de serre et ne laisse aucun déchet après utilisation. Elle n’a pas besoin d’être évacuée, et pas besoin d’être stockée.</p><br>' +
      '<p>La géothermie est utilisée pour :</p>' +
      '<ul>' +
      '<li>La production de chaleur (chauffage)</li>' +
      "<li>La production de l'électricité</li>" +
      '</ul>' +
      '<p>Belgin, Siffeddine et Alexandra&quot;</p>' +
      '</div>',
    crossRefs: [48],
    id: 38,
    image:
      'http://sciences.ulb.ac.be/wp-content/uploads/2017/05/DD-G%C3%A9othermie-islande.jpg',
    parent: 34, // les énergies renouvables
    title: 'La géothermie',
    type: PDDTypes.ENERGIE,
  },

  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      "<p><em>Suite aux activités réalisées avec les élèves du Collège Saint-Hubert et de l'Autre Côté de l'Ecole, certains d'entre eux ont décidé de rédiger les pages concernant les panneaux solaires</em></p><br>" +
      "<p>&quot;Il y a deux catégories de panneaux solaires : les panneaux thermiques qui transforment l'énergie solaire en énergie thermique, pour chauffer de l'eau par exemple, puis les panneaux solaires photovoltaïques qui transforment l'énergie </p><br>" +
      '<p><strong> - A quoi servent-ils ?</strong></p><br>' +
      "<p>Les panneaux dits thermiques servent, par exemple, à faire chauffer de l'eau. Les panneaux dits photovoltaïques servent à produire de l'électricité.</p><br>" +
      '<p><strong> - Quels sont les avantages des panneaux solaires ?</strong></p><br>' +
      "<p>Ils utilisent une énergie renouvelable et illimitée (le soleil) et ils ne polluent pas (pas d'émission de gaz à effet de serre).&quot;</p>" +
      '</div>',
    crossRefs: [28, 46, 47, 48],
    id: 39,
    image:
      'http://sciences.ulb.ac.be/wp-content/uploads/2017/05/DD-G%C3%A9othermie-islande.jpg',
    parent: 34, // les énergies renouvables
    title: 'Les panneaux solaires',
    type: PDDTypes.ENERGIE,
  },
  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      "<p><em>Suite aux activités réalisées avec les élèves du Collège Saint-Hubert, certains d'entre eux ont décidé de rédiger les pages concernant les panneaux solaires</em></p><br>" +
      "<p>&quot;Le sujet que nous allons aborder est plus précisément centré sur les panneaux solaires photovoltaïques.  Les panneaux solaires photovoltaïques transforment l'énergie solaire en électricité. Quand un photon de lumière arrive, il crée une rupture entre l'atome de silicium et un électron, modifiant les charges électriques. On l'appelle l'effet photovoltaïques. Les atomes vont dans la zone positive du panneau et les électrons dans la zone négative. Une tension continue est alors créée et l'onduleur module ce courant pour le rendre alternatif pour l'envoyer au compteur de production qui transmettra l'électricité au réseau public qui reviendra au compteur de consommation pour enfin être utilisé par les appareils électriques.</p><br>" +
      "<p><strong>Avantages et inconvénients :</strong>L'énergie solaire utilisée par les panneaux solaires photovoltaïques a plusieurs avantages. Tout d'abord, c'est une énergie inépuisable et gratuite. Elle peut être utilisée et installée partout car elle vient du soleil et, dans certains endroits, elle peut même être très utile car elle remplace l'électricité peu atteignable. C'est une énergie naturelle et écologique. De plus, entretenir un panneau solaire ne demande pas beaucoup d’argent. Malheureusement, il y a quand même certains inconvénients... le prix de l'installation des panneaux est élevé et le rendement électrique peut diminuer avec le temps.</p><br>" +
      '<p><strong>Avantages</strong></p>' +
      '<ul>' +
      "<li>Non polluante pour l'environnement</li>" +
      "<li>L'énergie solaire est inépuisable</li>" +
      '<li>Autonome</li>' +
      "<li>Peu d'entretien</li>" +
      '<li>Silencieux et non dérangeant</li>' +
      '<li>Bon investissement pour des particuliers</li>' +
      '</ul><br>' +
      '<p><strong>Inconvénients</strong></p>' +
      '<ul>' +
      "<li>L'énergie solaire n'est pas compétitive</li>" +
      '<li>Un panneau solaire a une durée de vie de 25 ans</li>' +
      "<li>Il faut 3 ans au panneau pour produire l'énergie qui a été utilisée pour sa construction.</li>" +
      "<li>Il faut investir dans des moyens de stockage de l'énergie qui coûtent très cher</li>" +
      '<li>Ils contiennent des produits toxiques</li>' +
      "<li>La filière de recyclage n'est pas encore existante &quot;</li>" +
      '</div>',
    crossRefs: [14, 28, 47],
    id: 40,
    image:
      'http://sciences.ulb.ac.be/wp-content/uploads/2017/05/DD-un-panneau-solaire.jpg',
    parent: 39, // les panneaux solaires
    title: 'Les panneaux photovoltaiques',
    type: PDDTypes.ENERGIE,
  },
  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      "<p><em>Suite aux animations, les élèves de la classe de 1ère secondaire B de l'Autre Côté de l'Ecole ont rédigé plusieurs pages sur l'énergie </em></p><br>" +
      "<p>&quot;En 1913, William Coblentz a posé le premier brevet pour une cellule solaire, mais il ne pourra jamais la faire fonctionner... En 1916, Robert Millikan (photo ci-contre) a été le premier à produire de l'électricité avec une cellule solaire.</p><br>" +
      '<p>Ryan et Théo&quot;</p>' +
      '</div>',
    crossRefs: [],
    id: 41,
    image: 'http://sciences.ulb.ac.be/wp-content/uploads/2017/05/Milikan.png',
    parent: 40, // les panneaux photovoltaiques
    title: 'Histoire du photovoltaiques',
    type: PDDTypes.ENERGIE,
  },
  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      "<p><em>Suite aux activités réalisées avec les élèves de 2ème secondaire de l'Athénée Léon Lepage, certains d'entre eux ont décidé de rédiger les pages concernant les panneaux solaires.</em></p><br>" +
      '<p>&quot;Les panneaux solaires photovoltaïques regroupent des cellules photovoltaïques reliées entre elles. En dehors des centrales solaires, les installations se font actuellement plutôt sur les toits des logements ou des bâtiments, soit en intégration de toiture, soit en surimposition.</p><br>' +
      '<p><strong>Différentes technologies</strong></p>' +
      '<ul>' +
      '<li>Le silicium polycristallin représente environ 57% du marché mondial.</li>' +
      '<li>Le silicium monocristallin représente environ 30,9% du marché mondial.</li>' +
      '<li>Le tellurure de cadmium représente 5,5% du marché mondial.</li>' +
      '</ul><br>' +
      '<p><strong>Production mondiale</strong></p><br>' +
      "<p>La production mondiale de panneaux est principalement répartie entre la Chine, Taïwan, l'Allemagne, le Japon et les Etats-Unis. Il s'agit majoritairement d'assemblage de cellules photovoltaïques qui sont majoritairement produites en Chine (80% de la production est effectuée en Asie).</p><br>" +
      '<p><em>Enjeux géopolitiques</em></p><br>' +
      "<p>La Chine s'est imposée comme le premier fabricant mondial de panneaux solaires photovoltaïques. Face à cette concurrence, l'Europe risque de perdre quelque 30 000 emplois, ce qui l'a poussée à appliquer des mesures particulières pour limiter le phénomène.</p><br>" +
      '<p><em>Aspects environnementaux</em></p><br>' +
      "<p>Comme beaucoup de processus industriels, la fabrication des panneaux solaires présente des risques pour l'environnement, notamment en matière de réchauffement climatique. En outre, la fabrication nécessite de l'énergie. Le panneau met quatre ans à produire une quantité d'énergie équivalente. Les fabricants cherchent à minimiser les coûts et les besoins en matériaux. Du point de vue du bilan en dioxyde de carbone, sur un cycle de vie de vingt ans, l'émission de CO2 par KWh électrique produit par un panneau photovoltaïque représente selon le type considéré, de 7 à 37% de l'émission de CO2 émise par une centrale thermique classique pour produire la même quantité d'énergie.</p><br>" +
      '<p>Hassun Noura&quot;</p>' +
      '</div>',
    crossRefs: [14],
    id: 42,
    image:
      'http://sciences.ulb.ac.be/wp-content/uploads/2017/06/production-de-cellules-photovoltaiques.jpg',
    parent: 40, // les panneaux photovoltaiques
    title: 'La production des panneaux photovoltaiques',
    type: PDDTypes.ENERGIE,
  },

  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      "<p><em>Suite aux activités réalisées avec les élèves de 2ème secondaire de l'Athénée Léon Lepage, certains d'entre eux ont décidé de rédiger les pages concernant la circulation de l'électricité.</em></p><br>" +
      "<p>&quot;Un courant électrique est généré par le déplacement de charges électriques dans un matériau conducteur. L'électricité est aujourd'hui utilisée pour l'éclairage, le chauffage mais aussi pour alimenter un nombre croissant d’appareils électroniques.</p><br>" +
      "<p><strong>L'électricité est difficilement stockable en grande quantité.</strong></p><br>" +
      "<p>Cette question est centrale dans le développement des énergies renouvelables intermittentes. Les réseaux de distribution livrent directement l'électricité chez les consommateurs finaux.</p><br>" +
      "<p>Les lignes électriques sont à une tension de 20 000 Volts. Des postes de transformation sont placés à l'interconnexion des réseaux de transport et de distribution. Certains moyens de production d'électricité décentralisés (éoliennes, panneaux photovoltaïques) peuvent être directement raccordés au réseau de distribution et ne passent pas par le réseau de transport. On parle de production locale pour cette raison.</p><br>" +
      "<p>Il y a trois câbles conducteurs par circuit pour optimiser l'acheminement de l'électricité et minimiser les pertes en lignes.</p><br>" +
      "<p><strong>La tension électrique </strong>est mesurée en <strong>Volt</strong>, elle permet de déterminer la puissance de charges électriques dans un matériau. Elle peut être comparée à la pression de l'eau dans un tuyau lorsque le robinet est fermé. L'intensité du courant électrique permet de mesurer le débit des électrons dans le conducteur, à l'image du débit d'eau qui sort du robinet.</p><br>" +
      "<p><strong>La puissance électrique</strong> est mesurée en <strong>Watt</strong> ou en Kilowatt, elle permet de déterminer la quantité d'énergie transmise et se mesure par le produit de la tension et de l'intensité. La puissance électrique peut être associée à la puissance du jet d'eau lorsqu'il sort du robinet.</p><br>" +
      '<p>Ayoub, Youssef &amp; Ibrahima&quot;</p>' +
      '</div>',
    crossRefs: [31, 45, 51],
    id: 43,
    image:
      'http://sciences.ulb.ac.be/wp-content/uploads/2017/06/800px-Pylone400kv.jpg',
    parent: 3,
    title: "La distribution de l'électricité",
    type: PDDTypes.ENERGIE,
  },
  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      "<p>Réalisation d'un jeu <em>question-réponse</em> avec une circuit électrique intégré qui allume une ampoule lorsque la réponse est bonne.</p><br>" +
      "<p>&quot;Un courant électrique est généré par le déplacement de charges électriques dans un matériau conducteur. L'électricité est aujourd'hui utilisée pour l'éclairage, le chauffage mais aussi pour alimenter un nombre croissant d’appareils électroniques.</p><br>" +
      "<p>Des élèves de 2ème secondaire de L'Autre Côté de l'Ecole de Mr LERMUSEAU Frank ont suivit le menu <strong>Energie</strong> durant l'année 2017-2018.</p><br>" +
      "<p>Pour leur projet scolaire, ils ont réalisé un jeu de question-réponse interactif qui allume une ampoule lorsque la réponse est bonne. Ce projet a pu être présenté lors de l'événement de clôture le 05 mai 2017.</p><br>" +
      '<p>Bravo à eux !</p><br>' +
      "<p><strong><a href='http://www.acecole.be/'>http://www.acecole.be/</a></strong></p>" +
      '</div>',
    crossRefs: [],
    id: 44,
    image: 'http://sciences.ulb.ac.be/wp-content/uploads/2018/06/P1066111.jpg',
    parent: 43, // la distribution de l'électricité
    title: 'Questionnaire electrique',
    type: PDDTypes.ENERGIE,
  },

  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      "<p><em>Les pages sont en cours d'écriture par les élèves participants au volet scolaire du programme.</em></p><br>" +
      '<p><em>Pour participer au volet scolaire avec votre classe ou votre école, contactez-nous.</em></p><br>' +
      "<p><em>L'équipe d'INFORSCIENCES</em></p>" +
      '</div>',
    crossRefs: [26, 31, 43],
    id: 45,
    image:
      'http://sciences.ulb.ac.be/wp-content/uploads/2017/05/PlateformeDD-logo-energie.png',
    parent: 3,
    title: 'La consommation énergétique',
    type: PDDTypes.ENERGIE,
  },
  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      "<p><em>Suite aux animations, les élèves de la classe de 1ère secondaire B de l'Autre Côté de l'Ecole ont rédigés plusieurs pages sur l'énergie</em></p><br>" +
      "<p>&quot;La maison passive n'utilise aucune énergie venue de l'extérieur et envoie éventuellement l'énergie électrique qu'elle produit en plus vers le réseau.</p><br>" +
      "<p>La plupart des maisons passives n'utilisent pas de chauffage mais elles emmagasinent la chaleur du soleil et sont si bien isolées qu’elles empêchent cette chaleur de sortir. Elles sont isolées par l'extérieur ce qui va créer une sorte de « bouclier ». </p><br>" +
      "<p>La maison passive profite du soleil pour se chauffer et pour produire de l'électricité. La température dans la maison est toujours la même quel que soit la saison (+ ou – 21 °C). La maison doit être bien orientée par rapport au soleil, la plupart du temps elle est orientée vers le Sud pour récupérer un maximum de lumière et de chaleur. En été l’inclinaison de volets permet de voir convenablement vers l’extérieur sans que la maison ne chauffe de trop.</p><br>" +
      "<p>Pour aérer la maison on utilise un système « vieux comme le monde » : un puits canadien. Le puits canadien consiste à faire entrer l’air extérieur vers l’intérieur de la maison en le faisant passer sous le sol (dans le jardin) à 5 ou 6 mètres de profondeur (car le terre reste à 13°C). Ainsi l'air qui entre dans la maison est plus chaud ou plus froid (en fonction de la saison) que l’air extérieur. Ce qui permet de rafraîchir la maison en été et de réchauffer la maison en hiver. L’air est ensuite évacué par d’autres bouches d’air qu’on appelle VMC (Ventilation Mécanique Contrôlée) qui évacue en permanence l'air vicié de la maison.</p><br>" +
      "<p>La maison passive produit de l'électricité grâce à des panneaux photovoltaïques qui sont placés sur le toit. Les panneaux photovoltaïques, aussi appelés panneaux solaires, sont composés notamment de silicium (matériau semi-conducteur). Le silicium constitue le composant principal d’une cellule solaire et c’est grâce à lui que les cellules solaires peuvent générer de l'électricité à partir de la lumière du soleil. Cela fonctionne même quand il y a des nuages. Si la production des panneaux solaires dépasse la consommation du ménage, alors on peut vendre l’électricité produite.</p><br>" +
      "<p>Tout cela est coordonné depuis un ordinateur situé à l'intérieur de la maison, il commande tout le bâtiment. Cela permet à la maison d'être quasiment autonome. La maison passive comporte aussi souvent un compost et un potager.</p><br>" +
      '<p>Ferdinand et Matéo,&quot;</p>' +
      '</div>',
    crossRefs: [39],
    id: 46,
    image:
      'http://sciences.ulb.ac.be/wp-content/uploads/2017/05/Passive_House_scheme_1_multilingual.svg_.png',
    parent: 45, // consommation énergétique
    title: 'La maison passive',
    type: PDDTypes.ENERGIE,
  },
  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      "<p><em>Suite aux activités réalisées avec les élèves du Collège Saint-Hubert, certains d'entre eux ont décidé de rédiger les pages concernant les panneaux solaires</em></p><br>" +
      "<p>&quot;Certains objets peuvent fonctionner avec l'énergie solaire. En effet, ils captent la lumière du soleil grâce à de petits panneaux solaires photovoltaïques. Il existe aussi certains chargeurs de téléphone et autre ou encore des calculatrices qui fonctionnent avec le même principe.</p><br>" +
      "<p>Beaucoup d'objets fonctionnant à l'électricité pourraient aussi marcher grâce aux panneaux solaire à condition qu'ils soient de petite taille : les chargeurs, les calculatrices, les lampes et bien d'autres encore.Tous ces petits objets nous sont souvent utiles quand nous partons en vacances ou dans ce genre de situation. Pourtant, il y a aussi des grands objets qui fonctionnent avec l'énergie solaire comme les mobile-homes par exemple, ou, sur le toit, sont placés des panneaux solaires qui captent l'énergie du soleil qui remplace donc l’électricité pour tous les appareils du mobil-home.&quot;</p>" +
      '</div>',
    crossRefs: [39, 40],
    id: 47,
    image:
      'http://sciences.ulb.ac.be/wp-content/uploads/2017/05/objets-solaire.png',
    parent: 45, // consommation énergétique
    title: "Les objets qui fonctionnent à l'énergie solaire",
    type: PDDTypes.ENERGIE,
  },
  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      "<p><em>Suite aux quatre activités du programme scolaire, les élèves du Collège Saint-Hubert de Watermael-Boisfort ont travaillé et écrit sur l'eau chaude</em></p><br>" +
      "<p>&quot;Lorsque l’on dit “réduire sa consommation d'énergie”, on pense à  : </p>" +
      '<ul>' +
      "<li>Éteindre la lumière une fois que l'on quitte une pièce</li>" +
      "<li>Mettre moins de chauffage lorsqu'il fait chaud ou s’habiller plus chaudement </li>" +
      '<li>Utiliser moins souvent la voiture et plus marcher </li>' +
      '</ul><br>' +
      "<p>Mais peu de personnes pensent à l'eau chaude.</p>" +
      "<p>Actuellement, l'eau chaude est principalement produite grâce à l'électricité ou au gaz. Mais il existe d'autres moyens beaucoup plus écologiques : par exemple, utiliser l'énergie solaire ou géothermique.</p><br>" +
      "<p>Le chauffe-eau solaire est un moyen de plus en plus répandu. Il capte l'énergie lumineuse du soleil qu'il transforme en énergie thermique. Généralement placé sur le toit d'une maison, disposant ainsi d'une bonne lumière, il peut durer une bonne vingtaine d'années mais nécessite quand même, de temps à autre, un entretien. Il peut apporter une grande économie d’énergie, principalement dans les pays chauds et fortement ensoleillés. Il peut satisfaire ainsi une bonne partie de la demande en eau chaude et peut également produire de l'électricité.</p><br>" +
      "<p>La pompe à chaleur est aussi une alternative. Elle prélève la chaleur naturelle présente dans les sous-sols ou nappes phréatiques et l'amène au milieu à chauffer là où un ballon d’eau l’attend et pourra ainsi être chauffé.</p><br>" +
      "<p>En dehors de ces grandes mesures, parfois de simples petits gestes répétés peuvent faire une grande différence. Par exemple, privilégiez les douches plutôt que les bains qui peuvent consommer jusqu’au triple de la consommation d’eau chaude d’une seule douche, coupez l'eau lorsque vous vous lavez les mains ou les cheveux ou encore faites de grandes vaisselles au lieu de faire tourner votre lave-vaisselle avec trois couteaux et une assiette !</p><br>" +
      '<p>Diane Bilgischer – Tessa Rouvez – Juliette Hubert&quot;</p>' +
      '</div>',
    crossRefs: [26, 38, 39, 57],
    id: 48,
    image: '',
    parent: 45, // consommation énergétique
    title: "L'eau chaude",
    type: PDDTypes.ENERGIE,
  },

  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      "<p><em>Suite aux quatre activités du programme scolaire, les élèves du Collège Saint-Hubert de Watermael-Boisfort ont travaillé, réfléchi et écrit sur les différentes manières de réduire l'impact de sa consommation alimentaire ou réduire sa consommation énergétique.</em></p><br>" +
      "<p>&quot;Il est urgent de réduire notre consommation afin de sauvegarder notre planète. On peut réduire notre consommation d'électricité, de pétrole, d'eau...&quot;</p>" +
      '</div>',
    crossRefs: [8, 9, 26],
    id: 49,
    image:
      'http://sciences.ulb.ac.be/wp-content/uploads/2017/05/PlateformeDD-logo-energie.png',
    parent: 45, // consommation énergétique
    title: 'Réduire sa consommation',
    type: PDDTypes.ENERGIE,
  },
  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      "<p><em>Suite aux quatre activités du programme scolaire les élèves du Collège Saint-Hubert de Watermael-Boisfort et de l'Athénée Léon Lepage de Bruxelles ont identifié plusieurs astuces pour réduire la consommation d’électricité</em></p><br>" +
      "<p>&quot;<strong>A l'école</strong></p>" +
      '<ul>' +
      "<li>Éteindre le chauffage en été car la température minimum qu'il faut pour travailler est de 15°C, en été la température est supérieur à 15°C.</li>" +
      "<li>Installer des détecteurs de mouvements pour allumer la lumière. Comme ça, quand on oublie d'éteindre la lumière, elle s'éteindra toute seule. </li>" +
      '</ul><br>' +
      '<p><strong>A la maison</strong></p>' +
      '<ul>' +
      "<li>Éteindre le chauffage quand on part en vacances, si on oublie de l'éteindre, il y a moyen d'installer une application sur son portable pour éteindre le chauffage à distance.</li>" +
      '<li>Chauffez les pièces de vie à une température maximum de 19°C à 20°C</li>' +
      '<li>Éteindre les lumières quand on quitte la pièce ou ouvrir les rideaux quand il y a du soleil. </li>' +
      "<li>En été, faire pendre son linge au soleil à la place d'utiliser un sèche linge car il consomme beaucoup.</li>" +
      '<li>Éteindre et ne pas mettre en veille les appareils électroniques comme son ordinateur, son portable (la nuit), la télé, ...</li>' +
      '<li>Le soir, fermez rideaux et volets afin de conserver la chaleur dans la maison.</li>' +
      '<li>Lavez votre linge à basse température (30°C). </li>' +
      "<li>Optez pour un ordinateur portable plutôt qu'un fixe. </li>" +
      '</ul><br>' +
      "<p><strong>A l'école et à la maison</strong></p>" +
      '<ul>' +
      "<li>Remplacer nos vielles ampoules et les remplacer pas des LED car elles ont un meilleur rapport qualité prix que les autres ampoules. Une ampoule économique consomme moins d'électricité qu'une ampoule à incandescences en offrant quatre fois plus de luminosité. Supprimez les lampes énergivores comme les halogènes que vous pouvez parfois remplacer par des ampoules LED.</li>" +
      '<li>Laissez entrer un maximum de lumière naturelle</li>' +
      '</ul><br>' +
      "<p><strong>Tous les conseils qui ont été donnée ci-dessus sont très important pour éviter le gaspillage énergétique mais aussi pour éviter d'avoir à payer des factures salées.</strong>&quot;</p>" +
      '</div>',
    crossRefs: [],
    id: 50,
    image:
      'http://sciences.ulb.ac.be/wp-content/uploads/2017/05/PlateformeDD-logo-energie.png',
    parent: 49, // réduire sa consommation
    title: "Réduire sa consommation d'électricité",
    type: PDDTypes.ENERGIE,
  },
  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      "<p><strong>Mesure de la consommation électrique de l'école pour l'éclairage</strong></p><br>" +
      "<p>Des élèves de 2ème secondaire de <em>L'Autre Côté de l'Ecole</em> de Mr LERMUSEAU Frank ont suivi le menu <strong>Energie</strong> durant l'année 2017-2018. Ils ont participé à <strong>la séance d'introduction &quot;les formes et les sources d'énergie&quot;</strong>. Ensuite, ils se sont rendu à l'Expérimentarium de Physique de l'ULB pour réaliser <strong>l'atelier expérimental &quot;transformations et transmissions de l'énergie&quot;</strong> et <strong>la visite sur le fonctionnement des générateurs et des moteurs</strong>. Ensuite, ils ont pris part à <strong>la séance de conclusion et de réflexion</strong> en classe. Enfin ils se sont rendus à l'ULB pour participer à <strong>l'événement de clôture</strong> lors duquel ils ont présenté un travail formidable! </p><br>" +
      "<p>L'objectif de ce travail était de mesurer la consommation énergétique de leur école et de la comparer à celle des autres écoles. Dans la cas où ils consommerait plus que la moyenne, ils ont envisagé de trouver des solutions pour faire baisser cette consommation.  Les élèves ont ensuite  <strong>calculé la consommation électrique</strong> de l'école pour l'éclairage au <strong>néon</strong> existant. Pour cela ils ont dû aller chercher les informations au bon endroit dans l'école: l'économat. Ils ont aussi cherché des informations sur la consommation moyenne des écoles belges en se référant au site de l'enseignement francophone (<a href='http://www.enseignement.be/index.php'>http://www.enseignement.be/index.php</a>). Ils ont ensuite cherché à calculer quelle serait cette consommation si l'éclairage au néon était remplacé par un éclairage <strong>LED</strong>. </p><br>" +
      "<p>Ils ont donc compté tous les néons de l'école et sont arrivés à un nombre approximatif de <strong>2000 néons</strong>. Le prix d'éclairage d'un néon pendant une année d'utilisation est de 21,9€ alors que pour une LED il est de 6€. Ils ont aussi calculé que, avec cet éclairage LED,  l'école pourrait réaliser des <strong>économies d'environs 31.800€ par an !</strong> Le temps nécessaire pour amortir cet investissement est de 2 ans environs. De plus, la durée de vie des lampes LED est 5 fois plus élevées que celle des néons. Ce nouvel éclairage demanderait donc moins d'entretien et générerait moins de déchets !</p><br>" +
      "<p>Si on remplaçait les éclairages par du LED dans tous les établissements scolaires, bureaux et autres grands bâtiments, ce n'est pas seulement d'argent qu'il serait question mais cela aurait un réel impact écologique.</p><br>" +
      '<p>Bravo à eux !</p><br>' +
      "<p>Lien de l'école: <a href='http://www.acecole.be/'>http://www.acecole.be/</a></p>" +
      '</div>',
    crossRefs: [43],
    id: 51,
    image: '',
    parent: 50, // Réduire sa consommation d'électricité
    title: 'Eclairage led vs néon',
    type: PDDTypes.ENERGIE,
  },
  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      '<p><em>Suite aux quatre activités du programme scolaire, les élèves du Collège Saint-Hubert de Watermael-Boisfort ont travaillé, réfléchi et écrit sur la pollution atmosphérique et les moyens pour la réduire. Ci-dessous, le co-voiturage.</em></p><br>' +
      "<p>&quot;Le covoiturage est l'utilisation d'une voiture par plusieurs personnes.</p><br>" +
      "<p>Cette utilisation est organisée à l’avance contrairement à l'auto-stop. Le but étant d'effectuer un trajet commun et donc de réduire le nombre de voiture sur la route.</p><br>" +
      "<p><strong>Avantages :</strong> Pour le conducteur et les passagers, le covoiturage permet d'économiser, de partager les dépenses de carburant et de maintenance de la voiture. Il leur permet également de maintenir un lien social (on fait la route à plusieurs).</p><br>" +
      '<p>En diminuant le nombre de voitures sur la route le covoiturage permet donc de diminuer les embouteillages, la pollution et les accidents de la route.</p><br>' +
      "<p><strong>Inconvénients :</strong> Pour les heures de départ et de retour, les personnes dépendent les unes des autres. Pas question, donc, de partir de temps en temps plus tôt ou de rester plus tard au travail. Difficile aussi de profiter du trajet pour s’arrêter faire des courses ou pour déposer des enfants à l'école.  Il faut aussi veiller à bien s’entendre avec les collègues présents dans la voiture.</p><br>" +
      '<p>Camille NEUVILLE, Eliane KERVYN et Elise WYNGAERDEN &quot;</p>' +
      '</div>',
    crossRefs: [24],
    id: 52,
    image:
      'http://sciences.ulb.ac.be/wp-content/uploads/2017/05/Aire_de_Covoiturage_Arvert-La_Tremblade.jpg',
    parent: 49, // réduire sa consommation
    title: 'Le co-voiturage',
    type: PDDTypes.ENERGIE,
  },
  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      '<p><em>Suite aux quatre activités du programme scolaire, les élèves du Collège Saint-Hubert de Watermael-Boisfort ont travaillé, réfléchi et écrit sur la pollution atmosphérique et les moyens pour la réduire. Ci-dessous, se déplacer à pied ou à vélo</em></p><br>' +
      "<p>&quot;Se rendre à son travail à pied ou à vélo peut être une bonne solution lorsqu'on n'habite pas trop loin de son travail.</p><br>" +
      '<p><strong>Avantages</strong></p><br>' +
      "<p>C'est le moyen de transport le plus sain, il permet de rester actif et de faire du sport. De plus, on ne dépend pas du trafic. Le risque d'arriver en retard est donc beaucoup plus faible. Aucun autre moyen de transport n'est aussi écologique que le vélo. L’environnement est préservé et c’est gratuit (à condition d'avoir déjà un vélo). Aller au travail à pied ne coûte rien non plus. Se rendre à son travail à vélo s’avère souvent plus facile qu’en voiture. De plus, il n’y a pas de places de parking à trouver, ni de parking à payer. De plus en plus de grandes villes ont développé ces dernières années un réseau de vélos accessibles pour la population. A Bruxelles, ce sont les « Villos». Les personnes peuvent donc combiner plusieurs moyens de transport, par exemple, train, bus et vélo (villo) et donc arriver rapidement sur leur lieu de travail sans prendre leur voiture. C'est donc un gain pour l’environnement et pour la mobilité.</p><br>" +
      '<p><strong>Inconvénients</strong></p><br>' +
      "<p>Quand il pleut, qu'il grêle ou qu'il neige, se rendre au travail à pied ou à vélo perd naturellement de son charme.  Toutes les entreprises ne sont pas équipées de douches ou de vestiaires appropriés pour se changer.  A Bruxelles, l'espace routier est peu ou mal aménage pour les vélos. Il manque énormément de pistes cyclables.  Le vélo souffre encore d'une mauvaise image auprès de la population. Le vélo est lent, salissant, peu pratique, peu valorisant en termes d'image et de statut social.</p><br>" +
      '<p>Camille NEUVILLE, Eliane KERVYN et Elise WYNGAERDEN&quot;</p>' +
      '</div>',
    crossRefs: [24],
    id: 53,
    image:
      'http://sciences.ulb.ac.be/wp-content/uploads/2017/05/a-pied-ou-a-v%C3%A9lo.jpg',
    parent: 49, // réduire sa consommation
    title: 'Se déplacer à pied ou à vélo',
    type: PDDTypes.ENERGIE,
  },
  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      '<p><em>Suite aux quatre activités du programme scolaire, les élèves du Collège Saint-Hubert de Watermael-Boisfort ont travaillé, réfléchi et écrit sur la pollution atmosphérique et les moyens pour la réduire. Ci-dessous, les transports en commun.</em></p><br>' +
      "<p>&quot;Lorsqu'on habite dans une ville où le trafic est important, les transports en commun sont la plupart du temps la solution la plus rapide. </p><br>" +
      '<p><strong>Avantages :</strong></p>' +
      "<p>La rapidité des transports. Les métros, construits en sous-terrain, ne dépendent pas du trafic automobile. Il en est de même pour les trams et bus qui bénéficient de « sites-propres » (espaces sur la route qui leur sont réservés  ainsi qu’aux vélos et taxis). Il ne faut pas chercher de place de parking ou se soucier d'une éventuelle amende.</p><br>" +
      "<p>Dans le train, le bus, le tram ou le métro, on peut lire tranquillement un livre, dormir encore un peu ou rêvasser. Il ne faut pas être attentif à la circulation. Avec les applications pour smartphone de la STIB ou de la SNCB, on peut facilement connaître les horaires des bus, trams, trains … On peut alors s’organiser pour ne pas les attendre trop longtemps et pour arriver à l'heure. </p><br>" +
      '<p><strong>Inconvénients :</strong></p>' +
      "<p>Les personnes dépendent des horaires et des retards des transports publics. Il y a de fortes chances qu'il y ait beaucoup de monde pendant les heures de pointe. Dans certains trains, il faut se battre pour disposer d'une place assise, ce qui sera également souvent le cas dans les métros, les trams et les bus.</p><br>" +
      '<p>Camille NEUVILLE, Eliane KERVYN et Elise WYNGAERDEN&quot;</p>' +
      '</div>',
    crossRefs: [24],
    id: 54,
    image: 'http://sciences.ulb.ac.be/wp-content/uploads/2017/05/la-stib.png',
    parent: 49, // réduire sa consommation
    title: 'Les transports en commun',
    type: PDDTypes.ENERGIE,
  },
  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      "<p><em>Suite aux activités réalisées avec les élèves de 2ème secondaire de l'Athénée Léon Lepage, certains d'entre eux ont décidé vous partager quelques concepts et quelques conseil pour réduire les pertes de chaleur du chauffage</em></p><br>" +
      "<p>L'isolation de l'enveloppe est, de loin, le moyen le plus efficace pour réduire la consommation d'un bâtiment. Les vitrages très performants permettent aujourd'hui de diminuer drastiquement les consommations d'hivers.</p><br>" +
      "<p><strong>Non, on n'isole jamais trop.</strong> L'isolation diminue la demande de chauffage en hivers et augmente cette de refroidissement en été mais le bilan global des consommations annuelles est toujours en sa faveur. Il est toujours utile d'isoler, même si cela entraîne la nécessité de climatiser. Bien entendu, l'idéal est de trouver des solutions naturelles pour rafraîchir le bâtiment et éviter ainsi le refroidissement.</p><br>" +
      '<p><em>Dans les propos ci-dessous, on supposera toujours que le bâtiment est bien isolé</em></p><br>' +
      "<p>On donnera également aux concepteurs, le temps et les moyens nécessaires pour étudier les détails de construction à prévoir pour éviter les ponts thermiques (principe de continuité de l'isolation).</p><br>" +
      "<p>Aujourd'hui, il convient de réaliser une enveloppe très étanche à l'air (parois, joints, portes, ...) et d'organiser une ventilation hygiénique contrôlée. Il sera très utile de prévoir un sas à l'entrée du bâtiment, particulièrement en cas de climatisation de celui-ci. On sera aussi très attentif également à la fermeture des grilles de châssis pendant la nuit et le weekend, quitte à installer des grilles motorisées. </p><br>" +
      "<p>Dans un immeuble bien isolé, le chauffage de l'air neuf hygiénique génère plus de la moitié des consommations de chauffage. On veillera à :</p><br>" +
      '<ul>' +
      "<li>limiter le débit d'air neuf à 30 m3/h/personne en période de chauffe. Ce débit peut, bien sûr, être augmenté en mi-saison et/ou en été.</li>" +
      "<li>Favoriser les installations de ventilation &quot;double flux&quot; : une école est occupée 25% du temps, un bureau 30% du temps ! Il est donc fondamental de pouvoir stopper le débit d'air en période inoccupation.</li>" +
      '<li>Gérer ce débit en fonction de la présence effective des occupants: un capteur (détecteur de présence, sonde CO2,...) peut permettre de moduler le débit, par palier (ventilateur à plusieurs vitesse) ou en continu (ventilateur à vitesses variables)</li>' +
      '</div>',
    crossRefs: [],
    id: 55,
    image:
      'http://sciences.ulb.ac.be/wp-content/uploads/2017/05/PlateformeDD-logo-energie.png',
    parent: 49, // réduire sa consommation
    title: 'Réduire les pertes de chaleur du chauffage',
    type: PDDTypes.ENERGIE,
  },

  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      '<p><strong>Valorisation des résidus alimentaires végétaux pour élever des larves de mouches soldat noire</strong></p><br>' +
      "<p>Suite à la participation de 5 classes de 3 écoles différentes au projet de recherche participative <strong>ValueBugs</strong>, les résultats ont été récupérés et compilés dans ce document. Les élèves ont réalisés des dispositifs d'élevage et des volières uniques pour faire avancer la recherche !</p><br>" +
      "<p><strong>La recherche participative ValueBugs</strong> a été implémentée dans 5 classes de 3 écoles différentes : Collège St-Michel, 1ère et 6ème secondaire Ecole Van Meyel, 5ème et 6ème primaire Institut Alexandre Herlin, 1ère secondaire forme 3. Le principe est d'utiliser les résidus alimentaires végétaux pour nourrir des larves de mouches soldat noire (Hermetia illucens). Ces larves pourront être utilisées comme aliment pour nourrir des animaux d’élevage (poules ou de poissons) ou de compagnie. L’avantage de cette conversion est de produire des aliments à haute valeur protéique.</p><br>" +
      "<p>Les <strong>partenaires</strong> de ce projet de recherche participative sont: La ferme du parc Maximilien, la ligue de protection des oiseaux, le CERVA (Centre d'étude et de recherches vétérinaires et agrochimiques) et l’asbl WORMS.  Objectifs pour les classes était de réaliser un dispositif permettant d'accueillir les larve et un autre pour faire la reproduction des mouches sur base de matériaux de récupération.  Mais aussi de réaliser des observations et des mesures (taille, poid, etc.) sur l’expérience en cours.   Résultats Plus de la moitié des dispositifs (55%) ont fonctionné. </p><br>" +
      "<p>Concernant l'élevage, il faut en moyenne 94 jours pour le développement à maturité des premières larves. Il faut entre 1 à 2 semaines pour que ces larves mûres se transforment en mouche. Dans certaines classes, elles pèsent en moyenne 0,31g.<br>" +
      "Les aliments préférés par les larves sont la pomme (trognon), la salade, la carotte (râpée) et le pain. Elles n’aiment pas le céleri.  Les élèves recommandent d’alimenter les larves lorsque la majeure partie de la nourriture est transformée/consommée.  Ils proposent de ne pas faire l’élevage en plein hiver car les écarts de températures augmentent probablement le taux de mortalité des larves. Ils disent aussi avoir besoin de plus d’informations sur la mouche et son développement pour mieux pouvoir conduire l'élevage. </p><br>" +
      "<p>Concernant les dispositifs, certains ont commencé à sentir relativement vite (début décembre). Pour pallier à cela ils ont utilisé du marc de café. L'utilisation de pain sec leur a permit de contrôler l'excès d'humidité. La technique de la bouteille couchée fonctionne bien !<br>Pour ce qui est de la gestion en classe, ils ont organisé pour la plupart une tournante par groupe de 2 élèves mais que cela n'a fonctionné qu’un certain temps. Dans la plupart des classes, un petit groupe d’élèves motivés a prit en charge la gestion de l'élevage. Ils ont été chercher la nourriture à la cantine de l’école ou des restes de collations des élèves. Ils proposent pour structurer le travail de :  prendre du temps sur le cours pour s'occuper de l'élevage installer un tableau mis en évidence à compléter par les groupes, noter dans le journal de classe  </p><br>" +
      "<p><strong>Conclusion</strong>, Les élèves se sont bien débrouillés dans ce projet de recherche totalement nouveau. Ils ont eu l'opportunité de communiquer leurs apprentissages à la ferme du parc Maximilien qui lance une unité de démonstration du projet et à Etienne Toffin qui coordonne le projet de recherche. Ces échanges valorisent leurs travaux et font d’eux des élèves-chercheurs.                            </p>" +
      '</div>',
    crossRefs: [19],
    id: 56,
    image: 'http://sciences.ulb.ac.be/wp-content/uploads/2018/06/ValueBugs.jpg',
    parent: 16, // zéro déchet
    title: 'Bioconversion alimentaire',
    type: PDDTypes.DECHETS,
  },

  {
    author: 'INFORSCIENCES',
    content:
      '<div>' +
      "<p><em>Suite aux activités réalisées avec les élèves de 2ème secondaire de l'Athénée Léon Lepage, certains d'entre eux ont décidé de rédiger les pages concernant les panneaux solaires</em></p><br>" +
      '<p>&quot;Un panneau solaire est un dispositif énergétique à bas de capteurs solaires thermiques ou photovoltaïques et destiné à convertir le rayonnement solaire en énergie thermique ou électrique, il présente de nombreux avantages et inconvénients dont nous allons traiter. Il en existe différents types adaptés à différentes situations. </p>' +
      '<p><strong>Les panneaux solaires thermiques</strong></p><br>' +
      '<p>Il existe deux grands types de panneaux solaires thermiques : les &quot;capteurs à eau&quot;  et les systèmes aérothermiques &quot;les capteurs à air&quot;.</p><br>' +
      '<p><strong>Les capteurs thermiques &quot;à eau&quot;</strong></p><br>' +
      "<p>L'eau ou, plus souvent, un liquide caloporteur, circule dans les tubes en circuit fermé. Pour obtenir un meilleur rendement, les tubes peuvent être sous-vide, c'est à dire que la surface des tubes est double et qu'entre ces deux couches, le vide est fait. Ceci permet d'obtenir un effet de serre. Les capteurs solaires à eau sont utilisés pour produire de l'eau chaude sanitaire dans un chauffe eau solaire individuel. Ces systèmes permettent d'économiser de l'ordre de 350 KWh par an et par mètre carré de capteur.</p><br>" +
      '<p><strong>Les capteurs thermiques &quot;à air&quot;</strong></p><br>' +
      "<p>L'air circule et s'échauffe au contact des absorbeurs ou dans une zone d'éffet de serre. L'air ainsi chauffé est ensuite ventilé dans les habitats, généralement pour le chauffage et parfois pour des usages industriels ou agricoles. </p><br>" +
      '<p>Hassun Noura , classe de 2sB&quot;</p>' +
      '</div>',
    crossRefs: [27, 28, 48],
    id: 57,
    image:
      'http://sciences.ulb.ac.be/wp-content/uploads/2017/05/PlateformeDD-logo-energie.png',
    parent: 39, // les panneaux solaires
    title: 'Les panneaux thermique',
    type: PDDTypes.ENERGIE,
  },
];
