document.addEventListener('DOMContentLoaded', () => {
    // --- PARTIE 1: BASE DE DONNÉES COMPLÈTE DU QUIZ ---
    const quizDB_info = [
        { question: "Qu'est-ce que l'algorithmique ?", answer: "La conception et l'analyse des algorithmes, des séquences d'instructions destinées à résoudre un problème." },
        { question: "Quelle est la différence entre RAM et ROM ?", answer: "La RAM est une mémoire volatile pour le stockage temporaire, tandis que la ROM est non volatile pour le stockage permanent du firmware." },
        { question: "Qu'est-ce qu'un langage de programmation interprété ?", answer: "Un langage exécuté ligne par ligne par un interpréteur, sans nécessiter de compilation préalable." },
        { question: "Expliquez le concept de clé étrangère dans les bases de données.", answer: "Une colonne qui établit une relation entre deux tables, reliant la clé primaire d'une table à une colonne d'une autre table." },
        { question: "Qu'est-ce qu'un réseau informatique ?", answer: "Un ensemble d'ordinateurs interconnectés permettant le partage de ressources et d'informations." },
        { question: "Décrivez le modèle OSI en informatique.", answer: "Un modèle de référence en sept couches qui définit les fonctions de communication d'un système informatique." },
        { question: "Qu'est-ce qu'un algorithme de tri (ex: tri à bulles) ?", answer: "Un algorithme qui organise des éléments dans un ordre spécifique." },
        { question: "Quelle est la différence entre un disque dur HDD et un SSD ?", answer: "Un HDD utilise des plateaux magnétiques, tandis qu'un SSD utilise des puces de mémoire flash, offrant une vitesse d'accès plus rapide." },
        { question: "Expliquez le fonctionnement du protocole HTTPS.", answer: "Il sécurise les échanges de données entre navigateur et serveur en utilisant une couche de chiffrement SSL/TLS." },
        { question: "Qu'est-ce qu'une adresse IP et à quoi sert-elle ?", answer: "Elle identifie de manière unique un appareil sur un réseau, permettant sa localisation et sa communication." },
        { question: "Quelle est la différence entre Java et JavaScript ?", answer: "Java est un langage polyvalent côté serveur, tandis que JavaScript est un langage de script côté client pour rendre les pages web interactives." },
        { question: "Qu'est-ce qu'un DNS et quel est son rôle ?", answer: "Le DNS (Domain Name System) traduit les noms de domaine en adresses IP." },
        { question: "Expliquez le concept de la virtualisation.", answer: "Elle permet d'exécuter plusieurs systèmes d'exploitation sur un même matériel physique via des machines virtuelles." },
        { question: "Qu'est-ce qu'un langage de balisage (ex: HTML) ?", answer: "Un langage qui structure le contenu d'un document pour la création de pages web." },
        { question: "Qu'est-ce qu'un pare-feu et comment fonctionne-t-il ?", answer: "Un dispositif de sécurité qui contrôle le trafic réseau en autorisant ou bloquant des communications selon des règles prédéfinies." },
        { question: "Décrivez le concept de programmation orientée objet.", answer: "Une méthode qui organise le code en objets, regroupant données et méthodes, favorisant la réutilisation et la modularité." },
        { question: "Qu'est-ce qu'un Framework de développement ?", answer: "Une structure logicielle facilitant le développement d'applications en fournissant des bibliothèques et des conventions." },
        { question: "Expliquez la différence entre HTTP et Web Socket.", answer: "HTTP est sans état, tandis que Web Socket permet une communication bidirectionnelle persistante entre client et serveur." },
        { question: "Qu'est-ce qu'un algorithme de recherche binaire ?", answer: "Un algorithme qui divise une liste triée en deux à chaque étape pour une recherche efficace." },
        { question: "Qu'est-ce que le Machine Learning (ex: reconnaissance vocale) ?", answer: "Une branche de l'IA où les systèmes apprennent à partir de données." },
        { question: "Quelle est la différence entre un logiciel open source et propriétaire ?", answer: "L'open source permet l'accès au code source, sa modification et distribution, contrairement au logiciel propriétaire qui limite ces droits." },
        { question: "Qu'est-ce qu'une attaque par force brute ?", answer: "Une attaque qui consiste à essayer toutes les combinaisons possibles pour trouver un mot de passe ou une clé." },
        { question: "Comment fonctionne un SGBDR (Système de Gestion de Bases de Données Relationnelles) ?", answer: "Il organise les données en tables reliées par des clés, permettant la recherche, l'ajout et la suppression de données." },
        { question: "Qu'est-ce que le Cloud Computing (ex: AWS) ?", answer: "Il permet l'accès à des ressources informatiques à la demande via Internet." },
        { question: "Qu'est-ce qu'un algorithme de hachage et à quoi sert-il ?", answer: "Il convertit des données en une valeur de taille fixe, utilisé pour stocker des mots de passe de manière sécurisée." },
        { question: "Quelle est la différence entre IPv4 et IPv6 ?", answer: "IPv4 utilise des adresses sur 32 bits, tandis qu'IPv6 utilise des adresses sur 128 bits, offrant un espace bien plus grand." },
        { question: "Qu'est-ce qu'un conteneur en informatique (ex: Docker) ?", answer: "Une unité d'exécution légère, indépendante et isolée contenant une application et ses dépendances." },
        { question: "Qu'est-ce que le protocole SNMP ?", answer: "Un protocole (Simple Network Management Protocol) qui permet la gestion et le suivi des dispositifs réseau." },
        { question: "Quelle est la différence entre le développement Agile et en cascade ?", answer: "Agile privilégie la flexibilité et les itérations, tandis que le cascade suit un processus linéaire et séquentiel." },
        { question: "Qu'est-ce qu'un langage de requête SQL et à quoi sert-il ?", answer: "SQL (Structured Query Language) est utilisé pour interagir avec les bases de données relationnelles." },
        { question: "Qu'est-ce qu'un bug informatique et comment est-il corrigé ?", answer: "C'est un défaut dans le code, corrigé par identification, modification du code et tests." },
        { question: "Qu'est-ce que la cryptographie ?", answer: "Elle sécurise les communications en convertissant les données en un format illisible, assurant confidentialité et intégrité." },
        { question: "Décrivez le concept de l'intelligence artificielle.", answer: "Elle vise à créer des systèmes capables de réaliser des tâches nécessitant une intelligence humaine (reconnaissance de motifs, etc.)." },
        { question: "Qu'est-ce qu'un réseau neuronal en apprentissage profond ?", answer: "Une structure algorithmique inspirée du cerveau humain pour résoudre des tâches complexes." },
        { question: "Expliquez le concept de la mémoire cache dans un processeur.", answer: "Une mémoire rapide et petite près du processeur pour stocker les données fréquemment utilisées et améliorer les performances." },
        { question: "Qu'est-ce qu'un langage de script (ex: Python) ?", answer: "Un langage de programmation interprété, exécuté sans compilation préalable." },
        { question: "Quelle est la différence entre HTTP et HTTPS ?", answer: "HTTPS utilise une couche de chiffrement SSL/TLS pour sécuriser les données, contrairement à HTTP." },
        { question: "Qu'est-ce qu'une injection SQL et comment l'éviter ?", answer: "L'insertion de code SQL malveillant dans une requête, évitable avec des requêtes paramétrées." },
        { question: "Qu'est-ce que le DevOps ?", answer: "Une approche combinant développement (Dev) et opérations (Ops) pour améliorer la collaboration et l'efficacité." },
        { question: "Qu'est-ce qu'un algorithme glouton en informatique ?", answer: "Un algorithme qui fait des choix localement optimaux à chaque étape pour trouver une solution globale." },
        { question: "Qu'est-ce qu'un pare-feu applicatif (WAF) ?", answer: "Un dispositif qui surveille, filtre et bloque le trafic HTTP vers une application web pour la protéger." },
        { question: "Expliquez le principe du modèle client-serveur.", answer: "Des ordinateurs clients demandent des services à un serveur central, qui distribue les tâches et les ressources." },
        { question: "Qu'est-ce qu'un algorithme de chiffrement asymétrique ?", answer: "Il utilise une paire de clés (publique et privée) pour chiffrer et déchiffrer des données." },
        { question: "Qu'est-ce qu'une attaque de déni de service (DDoS) ?", answer: "Une attaque visant à rendre un service indisponible en le submergeant de trafic excessif." },
        { question: "Différence entre apprentissage supervisé et non supervisé ?", answer: "Le supervisé utilise des données étiquetées pour entraîner un modèle, le non supervisé explore des données non étiquetées pour trouver des motifs." },
        { question: "Qu'est-ce qu'un gestionnaire de versions (VCS) (ex: Git) ?", answer: "Un système qui enregistre et gère les différentes versions d'un projet." },
        { question: "Expliquez le concept de l'informatique quantique.", answer: "Elle utilise les principes de la mécanique quantique pour des calculs potentiellement beaucoup plus rapides." },
        { question: "Qu'est-ce qu'un réseau neuronal convolutif (CNN) ?", answer: "Un type de réseau neuronal spécialement conçu pour la reconnaissance de motifs, souvent utilisé pour les images." },
        { question: "Qu'est-ce que la récursivité en programmation ?", answer: "La capacité d'une fonction à s'appeler elle-même pour résoudre des problèmes de manière itérative." },
        { question: "Qu'est-ce qu'un système de fichiers ?", answer: "Un système qui organise et stocke les données sur un support, permettant leur accès, modification et gestion." },
        { question: "Qu'est-ce que le modèle MVC (Modèle-Vue-Contrôleur) ?", answer: "Un modèle architectural qui sépare une application en trois composants : Modèle (données), Vue (affichage) et Contrôleur (logique)." },
        { question: "Qu'est-ce qu'un langage basé sur la pile (stack-based) ?", answer: "Un langage qui utilise une structure de pile (LIFO - dernier entré, premier sorti) pour gérer l'exécution." },
        { question: "Différence entre développement natif et hybride pour mobile ?", answer: "Natif crée des apps spécifiques à une plateforme (iOS/Android), hybride utilise des technologies web pour des apps multiplateformes." },
        { question: "Différence entre un conteneur logiciel et une machine virtuelle ?", answer: "Un conteneur partage le noyau du système d'exploitation, une VM émule un système d'exploitation complet." },
        { question: "Qu'est-ce qu'une attaque de phishing ?", answer: "Une attaque qui vise à tromper les utilisateurs pour obtenir des informations sensibles via de faux emails ou liens." },
        { question: "Expliquez le concept de l'API REST.", answer: "Un style d'architecture (Representational State Transfer) qui utilise les principes du web pour créer des services web." },
        { question: "Qu'est-ce qu'un algorithme de recherche heuristique ?", answer: "Une approche basée sur des règles empiriques pour résoudre des problèmes quand une solution exacte est difficile à trouver." },
        { question: "Qu'est-ce qu'un langage de programmation fonctionnelle ?", answer: "Un langage centré sur les fonctions mathématiques, encourageant l'immutabilité et l'absence d'effets secondaires." },
        { question: "Qu'est-ce que le protocole OAuth ?", answer: "Un protocole d'autorisation qui permet à une app tierce d'accéder à des ressources au nom d'un utilisateur sans partager ses identifiants." },
        { question: "Qu'est-ce qu'un algorithme de tri rapide (Quick Sort) ?", answer: "Un algorithme de tri efficace qui utilise une stratégie de 'diviser pour régner' avec un élément pivot." }
    ];
    const quizDB_office = [
        { question: "Comment insérer une page de garde dans Word ?", answer: "Dans l'onglet 'Insertion', choisir 'Page de garde' et sélectionner un modèle." },
        { question: "Comment ajouter un commentaire dans un document Word ?", answer: "Clic droit à l'endroit souhaité, puis sélectionner 'Insérer un commentaire'." },
        { question: "Comment modifier l'espacement entre les lignes dans Word ?", answer: "Dans 'Mise en page', cliquer sur 'Espacement des paragraphes' et ajuster l'espacement." },
        { question: "Comment créer une liste numérotée dans Word ?", answer: "Sélectionner le texte, aller dans l'onglet 'Accueil', cliquer sur 'Numérotation' et choisir le style." },
        { question: "Comment insérer un saut de page manuel dans Word ?", answer: "Placer le curseur, aller dans 'Mise en page' et sélectionner 'Saut de page'." },
        { question: "Comment insérer une table des matières automatique dans Word ?", answer: "Placer le curseur, aller dans 'Références', cliquer sur 'Table des matières' et choisir un style." },
        { question: "Comment changer l'orientation d'une page dans Word ?", answer: "Aller dans 'Mise en page', cliquer sur 'Orientation' et choisir 'Paysage' ou 'Portrait'." },
        { question: "Comment fusionner des cellules dans un tableau Word ?", answer: "Sélectionner les cellules, aller dans l'onglet 'Disposition' du tableau, cliquer sur 'Fusionner les cellules'." },
        { question: "Comment insérer une image dans un document Word ?", answer: "Placer le curseur, aller dans 'Insertion', cliquer sur 'Image' et sélectionner le fichier." },
        { question: "Comment changer la couleur d'un texte dans Word ?", answer: "Sélectionner le texte, aller dans 'Accueil', cliquer sur l'icône de couleur de police et choisir la couleur." },
        { question: "Comment créer une liste déroulante dans Word ?", answer: "Aller dans l'onglet 'Développeur', cliquer sur 'Liste déroulante' et la configurer." },
        { question: "Comment protéger un document Word par mot de passe ?", answer: "Aller dans 'Fichier' > 'Protéger le document' > 'Chiffrer avec mot de passe'." },
        { question: "Comment additionner une colonne de chiffres dans Excel ?", answer: "Utiliser la fonction SOMME, par exemple : =SOMME(A1:A10)." },
        { question: "Comment figer les volets dans Excel ?", answer: "Sélectionner la cellule en dessous et à droite de la zone à figer, puis aller dans 'Affichage' > 'Figer les volets'." },
        { question: "Quelle formule utiliser pour la moyenne dans Excel ?", answer: "Utiliser la fonction MOYENNE, par exemple : =MOYENNE(A1:A10)." },
        { question: "Comment créer un graphique à secteurs dans Excel ?", answer: "Sélectionner les données, aller dans 'Insertion', choisir 'Graphique à secteurs'." },
        { question: "Comment protéger une feuille Excel avec un mot de passe ?", answer: "Aller dans 'Révision', cliquer sur 'Protéger la feuille', et entrer un mot de passe." },
        { question: "Comment utiliser la fonction SI dans Excel ?", answer: "Par exemple : =SI(A1>10; \"Oui\"; \"Non\") pour afficher un résultat basé sur une condition." },
        { question: "Comment créer une validation des données dans Excel ?", answer: "Sélectionner la cellule, aller dans 'Données', cliquer sur 'Validation des données' et définir les critères." },
        { question: "Comment utiliser la fonction RECHERCHEV dans Excel ?", answer: "Pour chercher une valeur dans une colonne et retourner une valeur correspondante d'une autre colonne. Ex: =RECHERCHEV(A1; Feuille2!A:B; 2; FAUX)." },
        { question: "Comment utiliser la fonction CONCATENER dans Excel ?", answer: "Pour joindre plusieurs chaînes de texte. Ex: =CONCATENER(A1; \" \"; B1)." },
        { question: "Comment utiliser la fonction SOMME.SI dans Excel ?", answer: "Pour additionner des cellules qui répondent à un critère. Ex: =SOMME.SI(A1:A10; \">5\")." },
        { question: "Comment créer un tableau croisé dynamique dans Excel ?", answer: "Sélectionner les données, aller dans 'Insertion', choisir 'Tableau croisé dynamique'." },
        { question: "Comment utiliser la fonction SI.ERREUR dans Excel ?", answer: "Pour retourner une valeur spécifiée si une formule génère une erreur. Ex: =SI.ERREUR(A1/B1; \"Erreur\")." },
        { question: "Comment créer une mise en forme conditionnelle dans Excel ?", answer: "Sélectionner la plage, aller dans 'Accueil', cliquer sur 'Mise en forme conditionnelle' et choisir une règle." }
    ];

    // --- PARTIE 2: VARIABLES, ÉTAT DE L'APPLICATION ET RÉFÉRENCES DOM ---
    const appState = {
        currentQuizData: [],
        currentQuestionIndex: 0,
        score: 0,
        timer: null,
        timeLeft: 60,
        totalPoints: 0,
        selectedCategory: null,
        currentLevel: null,
        levelScores: {},
        levelUnlocked: {}
    };

    const screens = {
        home: document.getElementById('home-screen'),
        level: document.getElementById('level-selection-screen'),
        quiz: document.getElementById('quiz-screen'),
        result: document.getElementById('result-screen'),
    };

    const homeElements = {
        totalPoints: document.getElementById('total-points'),
        categoryButtons: document.querySelectorAll('.btn-category'),
    };
    
    const levelElements = {
        title: document.getElementById('level-selection-title'),
        buttonsContainer: document.getElementById('level-buttons-container'),
    };
    
    const quizElements = {
        progressBar: document.getElementById('progress-bar'),
        questionCounter: document.getElementById('question-counter'),
        currentScore: document.getElementById('current-score'),
        timer: document.getElementById('timer'),
        questionText: document.getElementById('question-text'),
        optionsContainer: document.getElementById('options-container'),
        nextBtn: document.getElementById('next-btn'),
    };
    
    const resultElements = {
        animationContainer: document.getElementById('animation-container'),
        title: document.getElementById('result-title'),
        message: document.getElementById('result-message'),
        finalScore: document.getElementById('final-score'),
        pointsBadge: document.getElementById('points-badge'),
        pointsEarned: document.getElementById('points-earned'),
        backToHomeBtn: document.getElementById('back-to-home-btn'),
    };

    const allHomeButtons = document.querySelectorAll('.home-icon-btn');

    // Ajout pour les effets sonores
    const goodSound = new Audio('https://raw.githubusercontent.com/PFredia/QuizInformatique/main/audio/good.mp3');
    const badSound = new Audio('https://raw.githubusercontent.com/PFredia/QuizInformatique/main/audio/bad.mp3');
    const quizStartSound = new Audio('https://raw.githubusercontent.com/PFredia/QuizInformatique/main/audio/quiz_start.mp3');
    const quizFinishSound = new Audio('https://raw.githubusercontent.com/PFredia/QuizInformatique/main/audio/quiz_finish.mp3');
    const timeUpSound = new Audio('https://raw.githubusercontent.com/PFredia/QuizInformatique/main/audio/time_up.mp3');
    const levelUnlockedSound = new Audio('https://raw.githubusercontent.com/PFredia/QuizInformatique/main/audio/level_unlocked.mp3');
    const victorySound = new Audio('https://raw.githubusercontent.com/PFredia/QuizInformatique/main/audio/victory.mp3');
    const failureSound = new Audio('https://raw.githubusercontent.com/PFredia/QuizInformatique/main/audio/failure.mp3');
    const tickSound = new Audio('https://raw.githubusercontent.com/PFredia/QuizInformatique/main/audio/tick.mp3');

    quizStartSound.loop = true;

    // --- PARTIE 3: FONCTIONS PRINCIPALES DE L'APPLICATION ---

    function switchScreen(screenName) {
        Object.values(screens).forEach(screen => screen.classList.remove('active'));
        screens[screenName].classList.add('active');
    }

    function goHome() {
        quizStartSound.currentTime = 0;
        quizStartSound.play();
        clearInterval(appState.timer);
        loadStats();
        switchScreen('home');
    }

    function showLevelSelection(category) {
        appState.selectedCategory = category;
        const sourceDB = category === 'info' ? quizDB_info : quizDB_office;
        const questionsPerLevel = 10;
        const numLevels = Math.ceil(sourceDB.length / questionsPerLevel);

        levelElements.title.textContent = `Module ${category === 'info' ? 'Informatique' : 'Bureautique'}`;
        levelElements.buttonsContainer.innerHTML = '';

        // Par défaut, seul le niveau 1 est débloqué
        if (!appState.levelUnlocked[category]) {
            appState.levelUnlocked[category] = 1;
        }

        for (let i = 0; i < numLevels; i++) {
            const start = i * questionsPerLevel;
            const end = start + questionsPerLevel;
            const button = document.createElement('button');
            button.classList.add('btn-level');
            const levelKey = `${category}_level_${i + 1}`;
            const bestScore = appState.levelScores[levelKey] || 0;
            const scoreText = bestScore > 0 ? ` (Meilleur: ${bestScore}%)` : '';
            button.textContent = `Niveau ${i + 1} (Q. ${start + 1} - ${Math.min(end, sourceDB.length)})${scoreText}`;
            // Verrouillage : seuls les niveaux débloqués sont cliquables
            if (i + 1 > appState.levelUnlocked[category]) {
                button.disabled = true;
                button.style.opacity = 0.5;
                button.title = "Terminez le niveau précédent pour débloquer celui-ci.";
            } else {
                button.addEventListener('click', () => {
                    startQuiz(start, end, i + 1);
                });
            }
            levelElements.buttonsContainer.appendChild(button);
        }
        
        const allButton = document.createElement('button');
        allButton.classList.add('btn-level');
        
        // Afficher le meilleur score pour le quiz complet
        const completeKey = `${category}_complete`;
        const completeBestScore = appState.levelScores[completeKey] || 0;
        const completeScoreText = completeBestScore > 0 ? ` (Meilleur: ${completeBestScore}%)` : '';
        
        allButton.textContent = `Quiz Complet (${sourceDB.length} questions)${completeScoreText}`;
        allButton.addEventListener('click', () => {
            startQuiz(0, sourceDB.length, 'complete');
        });
        levelElements.buttonsContainer.appendChild(allButton);

        switchScreen('level');
    }

    function generateMCQ(questionsForLevel) {
        const fullAnswerPool = (appState.selectedCategory === 'info' ? quizDB_info : quizDB_office).map(item => item.answer);

        return questionsForLevel.map(item => {
            const correctAnswer = item.answer;
            const distractors = fullAnswerPool
                .filter(ans => ans !== correctAnswer)
                .sort(() => 0.5 - Math.random())
                .slice(0, 3);
            const options = [correctAnswer, ...distractors].sort(() => 0.5 - Math.random());
            return {
                question: item.question,
                options: options,
                correctAnswer: correctAnswer,
            };
        });
    }
    
    function startQuiz(start, end, level) {
        quizStartSound.pause();
        quizStartSound.currentTime = 0;
        appState.totalPoints = 0;
        const sourceDB = appState.selectedCategory === 'info' ? quizDB_info : quizDB_office;
        const questionsForLevel = sourceDB.slice(start, end);

        appState.currentQuizData = generateMCQ(questionsForLevel).sort(() => 0.5 - Math.random());
        appState.currentQuestionIndex = 0;
        appState.score = 0;
        appState.timeLeft = appState.currentQuizData.length * 20;

        quizElements.nextBtn.disabled = true;
        switchScreen('quiz');
        showQuestion();
        startTimer();

        if (level) {
            appState.currentLevel = level;
            appState.levelScores[`${appState.selectedCategory}_level_${level}`] = 0;
        }
    }

    function showQuestion() {
        resetOptionsStyle();
        quizElements.nextBtn.disabled = true;
        const currentQuestion = appState.currentQuizData[appState.currentQuestionIndex];
        const progress = ((appState.currentQuestionIndex + 1) / appState.currentQuizData.length) * 100;
        quizElements.progressBar.style.width = `${progress}%`;
        quizElements.questionCounter.textContent = `Question ${appState.currentQuestionIndex + 1}/${appState.currentQuizData.length}`;
        quizElements.currentScore.textContent = `Score: ${appState.score}`;
        quizElements.questionText.textContent = currentQuestion.question;
        quizElements.optionsContainer.innerHTML = '';
        currentQuestion.options.forEach(option => {
            const button = document.createElement('div');
            button.classList.add('option');
            button.textContent = option;
            button.addEventListener('click', () => selectAnswer(button, currentQuestion.correctAnswer));
            quizElements.optionsContainer.appendChild(button);
        });
    }

    function selectAnswer(selectedButton, correctAnswer) {
        tickSound.pause();
        tickSound.currentTime = 0;
        const allOptions = quizElements.optionsContainer.children;
        for (let option of allOptions) { option.classList.add('disabled'); }
        if (selectedButton.textContent === correctAnswer) {
            selectedButton.classList.add('correct');
            goodSound.play(); // Effet sonore bonne réponse
            appState.score++;
        } else {
            selectedButton.classList.add('incorrect');
            badSound.play(); // Effet sonore mauvaise réponse
            for (let option of allOptions) { if (option.textContent === correctAnswer) { option.classList.add('correct'); } }
        }
        
        // Mettre à jour l'affichage du score actuel
        quizElements.currentScore.textContent = `Score: ${appState.score}`;
        
        quizElements.nextBtn.disabled = false;
    }

    function resetOptionsStyle() {
        const allOptions = quizElements.optionsContainer.children;
        for (let option of allOptions) { option.className = 'option'; }
    }

    function handleNext() {
        appState.currentQuestionIndex++;
        if (appState.currentQuestionIndex < appState.currentQuizData.length) {
            showQuestion();
        } else {
            showResult();
        }
    }

    function startTimer() {
        clearInterval(appState.timer);
        appState.timer = setInterval(() => {
            appState.timeLeft--;
            const minutes = Math.floor(appState.timeLeft / 60);
            const seconds = appState.timeLeft % 60;
            quizElements.timer.textContent = `⏱️ ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            if (appState.timeLeft <= 10 && appState.timeLeft > 0) {
                tickSound.play(); // Bip pour les 10 dernières secondes
            }
            if (appState.timeLeft <= 0) {
                clearInterval(appState.timer);
                timeUpSound.play(); // Son temps écoulé
                showResult();
            }
        }, 1000);
    }
    
    function showResult() {
        clearInterval(appState.timer);
        switchScreen('result');
        quizFinishSound.play(); // Son de fin de quiz
        const totalQuestions = appState.currentQuizData.length;
        const percentage = Math.round((appState.score / totalQuestions) * 100);
        const pointsEarned = appState.score * 10;
        appState.totalPoints += pointsEarned;
        
        // Sauvegarder le score pour ce niveau
        if (appState.currentLevel) {
            const levelKey = `${appState.selectedCategory}_level_${appState.currentLevel}`;
            const currentBestScore = appState.levelScores[levelKey] || 0;
            if (percentage > currentBestScore) {
                appState.levelScores[levelKey] = percentage;
            }
        }
        
        // Débloquer le niveau suivant si score >= 80%
        if (appState.currentLevel && percentage >= 80) {
            const cat = appState.selectedCategory;
            if (!appState.levelUnlocked[cat] || appState.currentLevel >= appState.levelUnlocked[cat]) {
                appState.levelUnlocked[cat] = appState.currentLevel + 1;
            }
        }
        
        saveStats();
        resultElements.finalScore.textContent = `${appState.score}/${totalQuestions}`;
        resultElements.pointsEarned.textContent = pointsEarned;
        if (percentage >= 80) {
            resultElements.title.textContent = "Exceptionnel ! 🚀";
            resultElements.message.textContent = "Vous maîtrisez parfaitement ce sujet. Continuez comme ça !";
            victorySound.play(); // Son de victoire
            levelUnlockedSound.play(); // Son niveau débloqué
        } else if (percentage >= 50) {
            resultElements.title.textContent = "Bien joué ! 👍";
            resultElements.message.textContent = "Un bon score ! Un peu plus de pratique et ce sera parfait.";
        } else {
            resultElements.title.textContent = "Continuez d'essayer ! 🧠";
            resultElements.message.textContent = "Chaque erreur est une occasion d'apprendre. Ne baissez pas les bras !";
            failureSound.play(); // Son d'échec
        }
        playResultAnimation();
    }
    
    function playResultAnimation() {
        resultElements.animationContainer.innerHTML = '';
        for (let i = 0; i < 30; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 80 + 20}%`;
            star.style.animationDelay = `${Math.random() * 1}s`;
            star.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;
            resultElements.animationContainer.appendChild(star);
        }
    }

    // --- PARTIE 4: GESTION DU STOCKAGE LOCAL ---
    function saveStats() {
        localStorage.setItem('quizAppStats', JSON.stringify({ 
            totalPoints: appState.totalPoints,
            levelScores: appState.levelScores,
            levelUnlocked: appState.levelUnlocked
        }));
    }

    function loadStats() {
        const stats = JSON.parse(localStorage.getItem('quizAppStats'));
        if (stats) { 
            appState.totalPoints = stats.totalPoints || 0;
            appState.levelScores = stats.levelScores || {};
            appState.levelUnlocked = stats.levelUnlocked || {};
        }
        homeElements.totalPoints.textContent = appState.totalPoints;
    }

    // --- PARTIE 5: INITIALISATION DE L'APPLICATION ---
    function init() {
        homeElements.categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                showLevelSelection(button.dataset.category);
            });
        });

        quizElements.nextBtn.addEventListener('click', handleNext);

        resultElements.backToHomeBtn.addEventListener('click', goHome);
        
        allHomeButtons.forEach(button => {
            button.addEventListener('click', goHome);
        });
        
        loadStats();
        switchScreen('home');
    }

    init();
});