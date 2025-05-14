// Initialisation de la bibliothèque AOS pour les animations
// Lorsque le contenu du document est chargé
// On initialise AOS avec une durée de 800ms et une seule animation par élément
// On récupère les paramètres de l'URL pour l'article à afficher
// On met à jour le contenu de la page avec ces paramètres

// Événement qui s'exécute lorsque tout le contenu DOM est chargé
document.addEventListener('DOMContentLoaded', function() {
    // Initialisation de la bibliothèque AOS (Animate On Scroll) avec des paramètres spécifiques
    AOS.init({
        duration: 800,   // Durée de l'animation fixée à 800 millisecondes
        once: true       // Chaque animation ne s'exécute qu'une seule fois (pas de répétition au scroll)
    });

    // Création d'un objet URLSearchParams pour extraire les paramètres de l'URL courante
    const urlParams = new URLSearchParams(window.location.search);
    // Récupération de l'identifiant de l'article à partir de l'URL
    const articleId = urlParams.get('id');
    // Récupération du titre de l'article à partir de l'URL
    const articleTitle = urlParams.get('title');
    // Récupération de la catégorie de l'article à partir de l'URL
    const articleCategory = urlParams.get('category');
    // Récupération de la date de l'article à partir de l'URL
    const articleDate = urlParams.get('date');
    // Récupération de l'auteur de l'article à partir de l'URL
    const articleAuthor = urlParams.get('author');
    // Récupération de l'image de l'article à partir de l'URL
    const articleImage = urlParams.get('image');

    // Appel à la fonction de mise à jour du contenu de la page avec tous les paramètres récupérés
    updatePageContent(articleId, articleTitle, articleCategory, articleDate, articleAuthor, articleImage);
});

// Fonction pour mettre à jour le contenu de la page selon les paramètres d'URL
function updatePageContent(id, title, category, date, author, image) {
    // Met à jour le titre de l'onglet du navigateur avec le titre de l'article et le nom du site
    document.title = `${title} | AFCON 2025 News`;

    // Met à jour l'affichage de la catégorie de l'article dans l'élément HTML correspondant
    document.getElementById('article-category').textContent = category;
    // Met à jour l'affichage du titre de l'article dans l'élément HTML correspondant
    document.getElementById('article-title').textContent = title;
    // Met à jour l'affichage de l'auteur de l'article dans l'élément HTML correspondant
    document.getElementById('article-author').textContent = author;
    // Met à jour l'affichage de la date de l'article dans l'élément HTML correspondant
    document.getElementById('article-date').textContent = date;
    // Met à jour un second affichage de la catégorie dans un autre élément HTML (probablement pour le fil d'Ariane)
    document.getElementById('article-category-text').textContent = category;

    // Récupère l'élément HTML qui va contenir le corps de l'article
    const articleContent = document.getElementById('article-content');
    // Remplit cet élément avec le contenu HTML de l'article, récupéré via la fonction getArticleContent()
    articleContent.innerHTML = getArticleContent(id);

    // Appel à la fonction pour mettre à jour la section des articles connexes
    updateRelatedArticles(id);
}

 // Fonction qui retourne le contenu HTML détaillé selon l'ID de l'article
// Cette fonction principale gère l'affichage du contenu spécifique à chaque article basé sur son ID
function getArticleContent(id) {
    // Utilisation d'une structure switch pour renvoyer différents contenus selon l'ID de l'article
    // Le switch permet d'exécuter différents blocs de code en fonction de la valeur de l'ID fournie
    switch(id) {
        case '1':
            // Retourne le contenu HTML pour l'article 1 (match entre Tunisie et Maroc)
            // Cette section génère le HTML complet pour l'article sur le match Tunisie-Maroc
            return `
                <div class="article-featured-image mb-4">
                    <!-- Image principale de l'article avec une classe Bootstrap pour la marge inférieure -->
                    <img src="img/news/img1.webp" alt="Tunisia vs Morocco U20" class="img-fluid rounded" loading="lazy">
                    <!-- L'attribut loading="lazy" permet le chargement différé de l'image pour optimiser les performances -->
                </div>
                <h2 class="mb-3">MATCH FACTS: Winner-takes-all battle between Tunisia and Morocco in Group B</h2>
                <!-- Titre principal de l'article avec classe de marge inférieure -->
                <p class="lead">North African heavyweights Tunisia and Morocco meet once again at the TotalEnergies CAF Under-20 Africa Cup of Nations at the Suez Canal Stadium on Ismailia on Wednesday (kick-off 18:00 local time / 15:00 GMT), rekindling a rivalry that dates back to 1981.</p>
                <!-- Paragraphe d'introduction avec la classe "lead" pour le mettre en évidence -->
                <p>The outcome of this Group B match could determine the pool winner, depending on Nigeria's result against Kenya.</p>
                <!-- Paragraphe standard décrivant les enjeux du match -->
                <p>Victory for either would see them advance. A draw will be enough for Morocco to progress to the knockout stages. Tunisia, meanwhile, could still advance as one of the best third-placed teams with a draw.</p>
                <!-- Explication des scénarios de qualification -->
                <p>Their previous encounters at the TotalEnergies CAF U20 AFCON include a two-legged first-round clash in 1981 – where each side won 1-0 at home before Tunisia edged through 6-5 on penalties – and a dramatic quarterfinal meeting in 2021, which ended 0-0 before Tunisia advanced with a 4-1 shootout victory in Nouadhibou.</p>
                <!-- Historique des rencontres précédentes entre les deux équipes -->
                <p>The teams most recently faced off in qualifying for this edition during the 2024 UNAF Tournament. That match, held at the Suez Canal Stadium in Ismailia last November, saw Tunisia take an early lead through Khalil Ayari, only for Morocco to come back with second-half goals from Mouad Dahak and Reda Laalaoui to win 2-1.</p>
                <!-- Détails sur leur confrontation la plus récente -->
                <div class="row mt-4">
                    <!-- Conteneur de ligne avec une marge supérieure pour organiser les statistiques des équipes -->
                    <div class="col-md-6">
                        <!-- Colonne de gauche occupant la moitié de l'écran sur les appareils moyens et plus grands -->
                        <h3>TUNISIA FACTS</h3>
                        <!-- Titre pour la section des statistiques de la Tunisie -->
                        <ul>
                            <!-- Liste non ordonnée pour présenter les statistiques -->
                            <li>Tunisia lost their opening game to Nigeria but bounced back with a 3-1 win over Kenya, coming from behind.</li>
                            <!-- Premier point statistique sur la Tunisie -->
                            <li>They have never won back-to-back group matches at the tournament.</li>
                            <!-- Statistique historique sur les performances de la Tunisie -->
                            <li>The victory over Kenya ended a three-match losing streak in open play.</li>
                            <!-- Information sur la série récente de résultats -->
                            <li>Tunisia are aiming for a third quarterfinal appearance, having reached the last eight in 1985, 2021, and 2023.</li>
                            <!-- Objectif de l'équipe et historique des performances -->
                            <li>In their final group games, Tunisia lost 2-1 to Central African Republic in 2021 and beat Zambia 2-1 in 2023.</li>
                            <!-- Détails sur les performances lors des derniers matchs de groupe -->
                            <li>Tunisia have conceded in each of their last six matches at the finals – their last clean sheet came in a 0-0 draw against Benin in 2021.</li>
                            <!-- Statistique défensive sur les clean sheets -->
                            <li>Against Kenya, Tunisia attempted 300 passes, 171 of which were in the opposition half.</li>
                            <!-- Statistique technique sur la possession et le jeu offensif -->
                            <li>They also recorded five shots on target – their highest tally in a match at the current tournament.</li>
                            <!-- Statistique offensive sur les tirs cadrés -->
                        </ul>
                    </div>
                    <div class="col-md-6">
                        <!-- Colonne de droite occupant l'autre moitié de l'écran -->
                        <h3>MOROCCO FACTS</h3>
                        <!-- Titre pour la section des statistiques du Maroc -->
                        <ul>
                            <!-- Liste non ordonnée pour les statistiques du Maroc -->
                            <li>Morocco drew 0-0 with Nigeria in their last match and need just a point to reach the knockout rounds for a third straight tournament. They were semi-finalists in 2005 and quarter-finalists in 2021.</li>
                            <!-- Premier point statistique sur le Maroc et sa situation actuelle -->
                            <li>Since the introduction of group stages, Morocco have exited in the first round twice (1993 and 2003) and progressed beyond it in 1997, 2005, and 2021.</li>
                            <!-- Historique des performances du Maroc dans la compétition -->
                            <li>Morocco are unbeaten in their last eight group-stage matches at the finals (W5 D3).</li>
                            <!-- Série d'invincibilité en phase de groupes -->
                            <li>Their last group-stage loss was a 4-0 defeat to Egypt in 2003.</li>
                            <!-- Information sur la dernière défaite en phase de groupes -->
                            <li>In each of their last three tournaments, Morocco have won their opening group match and drawn the second.</li>
                            <!-- Tendance pour les performances dans les tournois récents -->
                            <li>A draw would mark the first time Morocco have had back-to-back group-stage draws.</li>
                            <!-- Possibilité d'un nouveau record statistique -->
                            <li>Morocco's record in final group matches stands at P5 W3 L2. Wins include 2-0 vs Senegal (1993), 1-0 vs Angola (2005), and 3-0 vs Tanzania (2021).</li>
                            <!-- Historique des performances lors des derniers matchs de groupes -->
                            <li>Historically, when Morocco have drawn their second group game, they've gone on to win the third (as in 2005 and 2021).</li>
                            <!-- Tendance statistique pour les troisièmes matchs après un nul -->
                            <li>If they avoid defeat here, Morocco will finish a group stage unbeaten for the fourth time (joining 1997, 2005, and 2021).</li>
                            <!-- Possibilité d'un accomplissement statistique -->
                            <li>Othmane Maamma has created five chances so far – more than any other Moroccan player in this tournament.</li>
                            <!-- Statistique individuelle sur un joueur clé -->
                            <li>The draw with Nigeria was the first time across the 2021 and current editions that Morocco failed to register a shot on target.</li>
                            <!-- Statistique offensive négative sur le dernier match -->
                            <li>Morocco boast five clean sheets in their last six games at the finals, with their only concession being in a 3-2 win over Kenya.</li>
                            <!-- Statistique défensive positive sur les clean sheets -->
                            <li>They have also kept clean sheets in their last group matches in 2005 (1-0 vs Angola), all three group games in 2021, and most recently vs Nigeria.</li>
                            <!-- Historique des performances défensives lors des derniers matchs -->
                        </ul>
                    </div>
                </div>
            `;
        case '2':
            // Retourne le contenu HTML pour l'article 2 (match Zambie vs Tanzanie)
            // Cette section contient le HTML pour l'article sur le match Zambie-Tanzanie
            return `
                <div class="article-featured-image mb-4">
                    <!-- Image principale avec marge inférieure -->
                    <img src="img/news/img2.webp" alt="Zambia vs Tanzania U20" class="img-fluid rounded" loading="lazy">
                    <!-- Image responsive avec coins arrondis et chargement différé -->
                </div>
                <h2 class="mb-3">Last gasp penalty sends Zambia past Tanzania in dramatic Group A Clash</h2>
                <!-- Titre principal de l'article avec marge inférieure -->
                <p class="lead">Zambia snatched a dramatic 1-0 victory over Tanzania in a tense TotalEnergies CAF U-20 Africa Cup of Nations Group A encounter on Tuesday evening thanks to a last-minute penalty converted by Joseph Sabobo deep into stoppage time in Ismailia.</p>
                <!-- Paragraphe d'introduction en gras/lead -->
                <p>The game looked destined for a draw after both sides battled in an intense, physical contest with few clear-cut chances, but Zambia kept pressing until the very end.</p>
                <!-- Description du déroulement général du match -->
                <p>The decisive moment arrived in the 11th minute of added time, after VAR awarded a penalty when Emmanuel Mutale was fouled in the box by Ismail Ally.</p>
                <!-- Détail sur le moment décisif du match -->
                <p>Sabobo stepped up and coolly slotted the spot kick into the bottom left corner, securing all three points for the Young Chipolopolo.</p>
                <!-- Description du penalty et de son importance -->
                <p>Tanzania had been the more threatening side in stretches of the match, registering multiple shots on target and forcing Zambia's backline into action.</p>
                <!-- Analyse de la performance de la Tanzanie -->
                <p>However, they were unable to break down a resilient Zambian defence and will rue their missed opportunities, particularly from Jammy Simba and Cyprian Kachwele.</p>
                <!-- Commentaire sur les occasions manquées par la Tanzanie -->
                <p>The match saw several stoppages for injuries and a flurry of yellow cards, reflecting the high stakes and physical nature of the encounter.</p>
                <!-- Description de l'atmosphère et de l'intensité du match -->
                <p>Zambia made three halftime substitutions to inject energy, a move that ultimately paid off as they gained momentum in the latter stages.</p>
                <!-- Information tactique sur les changements effectués par la Zambie -->
                <p>The result sees the Southern African nation moving to second place behind Sierra Leone who are in action against South Africa in a later fixture.</p>
                <!-- Implication du résultat sur le classement du groupe -->
                <p>Tanzania's hopes of advancing will be even slimmer as they remain rooted at the bottom of the group with zero points from their three matches.</p>
                <!-- Conséquence du résultat pour la Tanzanie -->
            `;
        case '3':
            // Retourne le contenu HTML pour l'article 3 (match Nigeria vs Kenya)
            // Cette section génère le HTML pour l'article sur le match Nigeria-Kenya
            return `
                <div class="article-featured-image mb-4">
                    <!-- Image principale de l'article -->
                    <img src="img/news/img3.webp" alt="Nigeria vs Kenya U20" class="img-fluid rounded" loading="lazy">
                    <!-- Image responsive avec coins arrondis et chargement différé -->
                </div>
                <h2 class="mb-3">MATCH FACTS: Nigeria face eliminated Kenya in final Group B game at TotalEnergies CAF U20 AFCON</h2>
                <!-- Titre principal avec marge inférieure -->
                <p class="lead">Nigeria and Kenya will face off at the TotalEnergies CAF Under-20 Africa Cup of Nations in their final Group B match at the 30 June Stadium in Cairo on Wednesday (kick-off time 18:00 local time / 15:00 GMT).</p>
                <!-- Paragraphe d'introduction avec mise en évidence -->
                <p>Nigeria needs just one point to progress and could top the group with a win – provided the other Group C match between Morocco and Tunisia ends in a draw or a Tunisia victory.</p>
                <!-- Information sur les enjeux pour le Nigeria -->
                <p>Nigeria's most recent encounter with East African opposition was a 1-0 win over Uganda in the 2023 quarter-finals. Kenya, meanwhile, will be facing West African opponents for the first time at this stage of the competition.</p>
                <!-- Contexte historique des confrontations régionales -->
                <p>Statistically, Nigeria has the lowest shot conversion rate in Group C at just 6.25%, while Kenya has a rate of 14.29% – the second highest in the group, behind Tunisia (17.65%).</p>
                <!-- Statistiques comparatives sur l'efficacité offensive -->
                <p>In terms of defensive stats, Nigeria have won 27 tackles, while Kenya leads the group with 34. Nigeria have kept two clean sheets – the most in the group – while Kenya conceded six goals, three in each of their first two matches.</p>
                <!-- Statistiques défensives comparatives -->
                <p>Kenya leads Group C in shots on target with 11, while Nigeria has managed just seven—tied for the fewest with Tunisia.</p>
                <!-- Statistiques sur les tirs cadrés -->
                <div class="row mt-4">
                    <!-- Conteneur pour organiser les statistiques en deux colonnes -->
                    <div class="col-md-6">
                        <!-- Colonne de gauche pour les statistiques du Nigeria -->
                        <h3>NIGERIA FACTS</h3>
                        <!-- Titre de la section Nigeria -->
                        <ul>
                            <!-- Liste des statistiques du Nigeria -->
                            <li>Nigeria began their campaign with a 1-0 win over Tunisia and followed it with a goalless draw against Morocco.</li>
                            <!-- Information sur les résultats précédents -->
                            <li>They are aiming to reach the knockout stages for the ninth consecutive tournament in which they have participated. Since 1993, when the tournament adopted a single-format structure, Nigeria has progressed beyond the group stage ten times and been eliminated just twice (1993 and 2001).</li>
                            <!-- Historique des qualifications du Nigeria -->
                            <li>Their record in final group matches since 1993 reads: Played 12, won 7, drew 2, lost 3. They have won their final group game in the last two editions they participated in and are unbeaten in their last six final group games (W5 D1). The only draw in this run came against Côte d'Ivoire in 2022.</li>
                            <!-- Statistiques détaillées sur les performances lors des derniers matchs de groupe -->
                            <li>Nigeria last lost their final group game in 2007, a 2-0 defeat to Cameroon. Despite the loss, they progressed as Group B runners-up behind Zambia.</li>
                            <!-- Détail sur la dernière défaite en dernier match de groupe -->
                            <li>If Nigeria draw 0-0 and qualify with only one goal scored, it would mark their lowest goal tally in the group stage since 2001 – though unlike that year, they would progress to the knockout stage.</li>
                            <!-- Scénario statistique possible pour cette édition -->
                            <li>If they avoid defeat, Nigeria will have completed the group stage unbeaten for the eighth time.</li>
                            <!-- Potentiel accomplissement statistique -->
                            <li>This is only the second time, after 2019, that Nigeria have kept clean sheets in both of their opening group games. In 2019, they also went through the entire group stage without conceding a goal.</li>
                            <!-- Statistique défensive notable -->
                            <li>Nigeria scored just one goal in their first two group matches. The last time they did this was in 2023, when they lost 1-0 to Senegal, beat Egypt 1-0, and then defeated Mozambique 2-0.</li>
                            <!-- Statistique offensive comparative avec les éditions précédentes -->
                            <li>They are currently the lowest-scoring team in their group.</li>
                            <!-- Position du Nigeria en termes de buts marqués -->
                            <li>Daniel Barneyi had 75 touches against Morocco – the most by any player in that match.</li>
                            <!-- Statistique individuelle sur un joueur influent -->
                            <li>Nigeria had three shots on target in the game against Morocco but failed to score.</li>
                            <!-- Statistique sur l'inefficacité offensive lors du dernier match -->
                            <li>Goalkeeper Ebenezer Harcourt has kept two clean sheets, making two saves (both in the opening match against Tunisia). He did not face a shot on target in the draw against Morocco.</li>
                            <!-- Statistiques sur le gardien de but -->
                            <li>Nigeria is one of only two teams yet to concede at the tournament, the other being Zambia, who have played one more game.</li>
                            <!-- Statistique défensive comparative avec les autres équipes -->
                        </ul>
                    </div>
                    <div class="col-md-6">
                        <!-- Colonne de droite pour les statistiques du Kenya -->
                        <h3>KENYA FACTS</h3>
                        <!-- Titre de la section Kenya -->
                        <ul>
                            <!-- Liste des statistiques du Kenya -->
                            <li>Kenya lost both of their group matches – 3-2 to Morocco and 3-1 to Tunisia. They scored first in both games but failed to secure a win.</li>
                            <!-- Information sur les résultats précédents -->
                            <li>In the match against Tunisia, Lawrence Ouma opened the scoring in the 38th minute. Kenya then conceded in first-half stoppage time and twice in the final 20 minutes to lose 3-1.</li>
                            <!-- Détails sur le déroulement du match contre la Tunisie -->
                            <li>Kenya conceded two goals in first-half stoppage time and three goals in the final 20 minutes across their two matches.</li>
                            <!-- Tendance défensive problématique -->
                            <li>Ouma scored in both group games and is the only player – prior to Tuesday's matches – to have scored in back-to-back games in this edition of the tournament. He is also the only player to have scored his team's first goal in two matches.</li>
                            <!-- Statistique individuelle sur un joueur performant -->
                            <li>Kenya have used two goalkeepers so far. Wyclifford Oduor started in the 3-1 loss to Tunisia, making three saves from five shots (save percentage: 40%). In the opening 3-2 loss to Morocco, Bernard Jairo was in goal and made six saves from nine shots (save percentage: 67%).</li>
                            <!-- Statistiques sur les gardiens de but utilisés -->
                        </ul>
                    </div>
                </div>
            `;
        case '4':
            // Retourne le contenu HTML pour l'article 4 (match RD Congo vs République Centrafricaine)
            // Cette section contient le HTML pour l'article sur le match RD Congo-RCA
            return `
                <div class="article-featured-image mb-4">
                    <!-- Image principale de l'article -->
                    <img src="img/news/img4.webp" alt="DR Congo vs Central African Republic U20" class="img-fluid rounded" loading="lazy">
                    <!-- Image responsive avec coins arrondis et chargement différé -->
                </div>
                <h2 class="mb-3">Makanza brace fires DR Congo to 3-1 triumph over Central African Republic</h2>
                <!-- Titre principal de l'article avec marge inférieure -->
                <p class="lead">The Democratic Republic of Congo secured a convincing 3-1 victory over the Central African Republic in Group C of the TotalEnergies CAF U20 Africa Cup of Nations on Monday to boost their hopes of reaching the knockout stage.</p>
                <!-- Paragraphe d'introduction en lead -->
                <p>Two goals from Noah Makanza and a late header by Samuel Ntanda handed the Junior Leopards all three points at the New Suez Stadium, lifting them to four points after their opening 1-1 draw with Ghana.</p>
                <!-- Résumé des buteurs et de l'impact sur le classement -->
                <p>CAR had taken an early lead through Raphael Nzabakomada in the 10th minute, but DR Congo responded with resilience and firepower.</p>
                <!-- Description du début de match et de la réaction de la RDC -->
                <p>After missing a first-half penalty, the Leopards equalised through Makanza just minutes later to go into the break at 1-1.</p>
                <!-- Information sur le penalty manqué et l'égalisation -->
                <p>DR Congo began the second half with intensity and were rewarded five minutes in, as Makanza added his second with a close-range finish to put his side ahead.</p>
                <!-- Description du début de seconde période et du deuxième but -->
                <p>Samuel Ntanda then sealed the victory in the 59th minute, nodding in a well-placed cross from Messy Manitu after a rapid counterattack.</p>
                <!-- Description du troisième but qui a scellé la victoire -->
                <blockquote class="article-quote">
                    <!-- Citation mise en avant dans un bloc spécial -->
                    "We must stay focused and concentrated," coach Guy Bukasa had urged his team ahead of the match. "The only way to overcome a strong team like Central African Republic is by staying compact, being aggressive in the right moments, and taking our chances."
                    <!-- Citation de l'entraîneur avec sa stratégie pour le match -->
                </blockquote>
                <p>His players clearly took that message to heart, delivering a composed and disciplined performance.</p>
                <!-- Commentaire sur l'application des consignes de l'entraîneur -->
                <p>While CAR pushed for a way back into the contest in the final moments—launching a series of shots blocked or saved by DR Congo's defence—they lacked the clinical edge to breach the Congolese rearguard.</p>
                <!-- Description des tentatives de la RCA en fin de match -->
                <p>The result leaves CAR with just one point after two matches, having held Senegal to a draw in their opener. Their hopes of qualification now hang on their final group game against Ghana in Ismailia on Thursday.</p>
                <!-- Implications du résultat pour la RCA et sa situation dans le groupe -->
                <p>DR Congo, meanwhile, sit in a strong position ahead of their final group fixture against defending champions Senegal at the same time in Suez.</p>
                <!-- Position de la RDC dans le groupe et information sur leur prochain match -->
                <p>The Congolese side are still unbeaten at the tournament and showed significant improvement in their attacking cohesion, recording more shots on target and dominating duels across the pitch.</p>
                <!-- Analyse de la performance globale de la RDC -->
            `;
        case '5':
            // Retourne le contenu HTML pour l'article 5 (match Ghana vs Sénégal)
            // Cette section génère le HTML pour l'article sur le match Ghana-Sénégal
            return `
                <div class="article-featured-image mb-4">
                    <!-- Image principale de l'article -->
                    <img src="img/news/img5.webp" alt="Ghana vs Senegal U20" class="img-fluid rounded" loading="lazy">
                    <!-- Image responsive avec coins arrondis et chargement différé -->
                </div>
                <h2 class="mb-3">TotalEnergies CAF U-20 AFCON: Ghana edge Senegal in tightly contested duel</h2>
                <!-- Titre principal avec marge inférieure -->
                <p class="lead">Ghana moved into second place in Group C of the TotalEnergies CAF U-20 Africa Cup of Nations on Monday after a narrow but crucial 1-0 victory over reigning champions Senegal thanks to an early strike from Emmanuel Mensah.</p>
                <!-- Paragraphe d'introduction en lead -->
                <p>The decisive moment came in the 15th minute when Mensah showed great composure inside the box, latching onto a low cross from Jerry Afriyie before coolly slotting a left-footed effort into the bottom right corner.</p>
                <!-- Description détaillée du but décisif -->
                <p>The early goal set the tone for a high-intensity match filled with drama, physicality and a flurry of goalmouth action.</p>
                <!-- Description de l'atmosphère et de l'intensité du match -->
                <p>Senegal responded with relentless attacking pressure, but Ghana's resolute defending and goalkeeping heroics kept their opponents at bay.</p>
                <!-- Information sur la réaction du Sénégal et la défense ghanéenne -->
                <p>Ibrahima Dieng was particularly lively for the Young Teranga Lions, registering multiple attempts on goal, including a close-range header in the 81st minute that was smartly saved.</p>
                <!-- Mention d'un joueur sénégalais particulièrement dangereux -->
                <p>The second half saw an increased urgency from Senegal, who introduced fresh legs with Omar Sarr and Norbert Gomis in an effort to break down Ghana's disciplined backline.</p>
                <!-- Description des changements tactiques du Sénégal en seconde période -->
                <p>Despite creating several chances—most notably from Clayton Diandy whose long-range shots tested the Ghanaian keeper—Senegal were unable to find an equaliser.</p>
                <!-- Information sur les occasions sénégalaises -->
                <p>The final minutes of the match were nervy, with seven minutes of time added on. Senegal pushed forward desperately but were denied by last-ditch defending and excellent goalkeeping with Diandy's shot in the 93rd minute being the closest they came to drawing level.</p>
                <!-- Description de la fin de match tendue -->
                <p>Ghana held firm to claim all three points, a result that places them in a strong position in the group and boosts confidence ahead of the next fixture against the Central African Republic in Ismailia on Thursday.</p>
                <!-- Conclusion sur la victoire ghanéenne et ses implications -->
                <p>Ghana moved to second position just behind DR Congo on goal difference with both on four points. The result sees the defending champions facing the danger of not qualifying for the knockout stages as they have only a single point.</p>
                <!-- Impact du résultat sur le classement du groupe -->
            `;
        case '6':
            // Retourne le contenu HTML pour l'article 6 (match Maroc vs Nigeria)
            // Cette section contient le HTML pour l'article sur le match Maroc-Nigeria
            return `
                <div class="article-featured-image mb-4">
                    <!-- Image principale de l'article -->
                    <img src="img/news/img6.webp" alt="Morocco vs Nigeria U20" class="img-fluid rounded" loading="lazy">
                    <!-- Image responsive avec coins arrondis et chargement différé -->
                </div>
                <h2 class="mb-3">Tightly contested Morocco-Nigeria duel ends goalless</h2>
                <!-- Titre principal avec marge inférieure -->
                <p class="lead">Morocco and Nigeria's U-20 teams played out a hard-fought 0-0 draw in a tense and tactical Group C clash at the 30 June Air Defence Stadium on Sunday, as part of the TotalEnergies CAF U-20 Africa Cup of Nations.</p>
                <!-- Paragraphe d'introduction en lead -->
                <p>Both sides showed flashes of attacking intent, but neither was able to find the breakthrough over the 90 minutes. The match, officiated by Ugandan referee Shamirah Nabadda, was characterized by numerous fouls, frequent stoppages, and missed opportunities on both ends.</p>
                <!-- Description générale du déroulement du match -->
                <p>Morocco came closest to scoring in the second half, with Fouad Zahouani and Ayman Arguigue both missing headed chances from close range. Nigeria responded with their own efforts, including a long-range shot from Israel Ayuma and a header by Emmanuel Chukwu, but neither troubled the Moroccan goalkeeper.</p>
                <!-- Détails sur les occasions manquées des deux équipes -->
                <p>The game's rhythm was disrupted by substitutions and injuries, especially late in the second half, with Morocco's Hossam Essadak and Nigeria's Divine Oliseh both forced off due to knocks.</p>
                <!-- Information sur les problèmes physiques qui ont affecté le rythme du jeu -->
                <p>With this result, both teams must wait for their final group matches to determine qualification for the knockout stage.</p>
                <!-- Implications du résultat sur la qualification -->
                <p>It was a match full of determination and resilience, but ultimately, neither Morocco nor Nigeria could find the decisive goal.</p>
                <!-- Résumé de l'état d'esprit des équipes et du résultat final -->
                <p>Morocco will next face Tunisia in a North African derby on Wednesday, while Nigeria will take on Kenya at the same time.</p>
                <!-- Information sur les prochains matchs des deux équipes -->
            `;
            case '7':
                // Retourne le contenu HTML pour l'article 7 (match Égypte vs Zambie)
                // Cette section génère le HTML pour l'article sur le match Égypte-Zambie
                return `
                    <div class="article-featured-image mb-4">
                        <!-- Conteneur pour l'image principale avec marge en bas -->
                        <img src="img/news/img7.webp" alt="Egypt vs Zambia U20" class="img-fluid rounded" loading="lazy">
                        <!-- Image avec chemin, texte alternatif, classes pour la rendre responsive, coins arrondis et chargement différé -->
                    </div>
                    <h2 class="mb-3">Egypt held by Zambia as Group A remains wide open at U20 AFCON</h2>
                    <!-- Titre principal de niveau 2 avec marge inférieure -->
                    <p class="lead">Hosts Egypt were left frustrated as they were held to a goalless draw by Zambia in their second Group A match at the TotalEnergies CAF U20 Africa Cup of Nations, Egypt 2025 on Saturday night in Ismailia.</p>
                    <!-- Paragraphe d'introduction mis en évidence avec la classe "lead" -->
                    <p>The result sees Egypt move to four points from two games, following their earlier win over South Africa and a heavy defeat to Sierra Leone. Zambia, meanwhile, have now played out consecutive goalless draws in the tournament, having also been held by Sierra Leone in their opener.</p>
                    <!-- Paragraphe contextualisant le résultat pour les deux équipes -->
                    <p>Despite the lack of goals, the match provided plenty of drama and attacking intent from both sides. Egypt came closest to breaking the deadlock in the 67th minute when Ahmed Kabaka rattled the crossbar with a fierce shot from range. Moments later, Mohamed Zaalouk fired just wide from close range, as the hosts ramped up the pressure.</p>
                    <!-- Paragraphe détaillant les temps forts du match malgré l'absence de buts -->
                    <p>Zambia, for their part, carved out chances of their own. David Simukonda and Joseph Sabobo were particularly threatening, with Simukonda skying a golden opportunity in stoppage time after being played through on goal.</p>
                    <!-- Paragraphe sur les occasions créées par l'équipe zambienne -->
                    <p>The first half had seen both teams go toe-to-toe, with Mohamed Abdallah of Egypt testing Zambia keeper Leevison Banda with a well-struck effort in the 11th minute. Joseph Sabobo responded for Zambia, dragging a shot just wide midway through the opening period.</p>
                    <!-- Paragraphe décrivant les actions de la première mi-temps -->
                    <p>Egypt, knowing victory would have sealed qualification, introduced fresh legs in the second half in a bid to find the breakthrough. But Zambia remained organised and resolute at the back, with Charles Buyoya and Happy Nsiku standing tall under mounting pressure.</p>
                    <!-- Paragraphe sur la stratégie égyptienne en seconde période et la résistance zambienne -->
                    <p>The result means Sierra Leone remain top of Group A with six points after their earlier 1-0 win over Tanzania, while Egypt sit second. Zambia stay in the hunt with two points and will go into their final group game needing a win to secure a knockout berth.</p>
                    <!-- Paragraphe expliquant les implications du résultat sur le classement du groupe -->
                    <p>Egypt, meanwhile, will have to avoid defeat in their final group match to progress and ease growing pressure from home supporters, who were hoping for a strong statement after the humiliating loss to debutants Sierra Leone.</p>
                    <!-- Paragraphe final sur la situation de l'Égypte pour leur prochain match -->
                `;
            case '8':
                // Retourne le contenu HTML pour l'article 8 (match Maroc vs Kenya)
                // Cette section génère le HTML pour l'article sur le match Maroc-Kenya
                return `
                    <div class="article-featured-image mb-4">
                        <!-- Conteneur pour l'image principale avec marge en bas -->
                        <img src="img/news/img8.webp" alt="Morocco vs Kenya U20" class="img-fluid rounded" loading="lazy">
                        <!-- Image avec chemin, texte alternatif, classes pour la rendre responsive et chargement différé -->
                    </div>
                    <h2 class="mb-3">Morocco fight back to claim dramatic victory over Kenya</h2>
                    <!-- Titre principal de niveau 2 avec marge inférieure -->
                    <p class="lead">Morocco got their TotalEnergies CAF U20 Africa Cup of Nations, Egypt 2025, campaign off to a winning start with a dramatic 3-2 victory over Kenya in Group B on Thursday night at the 30 June Stadium in Cairo.</p>
                    <!-- Paragraphe d'introduction mis en évidence avec la classe "lead" -->
                    <p>The North Africans had to come from behind twice before securing the win in a pulsating contest that swung from end to end and showcased the raw intensity of youth football on the continent.</p>
                    <!-- Paragraphe décrivant l'intensité et le caractère spectaculaire du match -->
                    <p>Kenya, making their first appearance at the U20 AFCON since 1979, began the match brightly and were rewarded in the 16th minute when Lawrence Ouma rose highest to head home Kevin Injehu's pinpoint free kick, sending the Kenyan bench into wild celebrations.</p>
                    <!-- Paragraphe sur le début du match et le premier but du Kenya -->
                    <p>However, Morocco struck back just before the break. A scramble in the box saw Yassir Zabiri pounce with a well-placed finish that was eventually confirmed by VAR after initial doubts over a potential infringement. The equaliser sent the teams into halftime level at 1-1.</p>
                    <!-- Paragraphe sur l'égalisation marocaine avant la mi-temps et l'intervention de la VAR -->
                    <p>The second half brought even more drama. Just ten minutes after the restart, Zabiri doubled his tally with a sharp header from close range to give Morocco the lead.</p>
                    <!-- Paragraphe sur le deuxième but marocain en début de seconde période -->
                    <p>But Kenya weren't done yet. Their vibrant forward play paid off in the 71st minute when Hassan Beja rifled in a shot from the centre of the box following clever link-up play with Aldrine Kibet, levelling the scores at 2-2.</p>
                    <!-- Paragraphe sur l'égalisation kényane à 2-2 -->
                    <p>Morocco, unfazed, kept pressing and reclaimed the lead in the 78th minute. Reda Laalaoui latched onto a clever pass from Saad El Haddad and slotted past the keeper with composure to make it 3-2.</p>
                    <!-- Paragraphe sur le but décisif du Maroc pour reprendre l'avantage -->
                    <p>There was late drama when Morocco were awarded a penalty in the 89th minute, but Othmane Maamma's effort was saved by Kenyan keeper Baron Ochieng to keep hopes alive.</p>
                    <!-- Paragraphe sur le penalty manqué par le Maroc en fin de match -->
                    <p>Kenya pushed for a third equaliser and came agonisingly close in stoppage time when Aldrine Kibet's header struck the post. But Morocco held on for three crucial points to go top of the group after Matchday 1.</p>
                    <!-- Paragraphe sur les derniers efforts du Kenya et la victoire finale du Maroc -->
                    <p>For Kenya, there were plenty of positives to take despite the defeat, particularly in attack where they showed fearlessness and creativity. Morocco, meanwhile, showed composure and experience in key moments and will be confident going into their next match.</p>
                    <!-- Paragraphe de conclusion sur les enseignements du match pour les deux équipes -->
                `;
            case '9':
                // Retourne le contenu HTML pour l'article 9 (infrastructures et villes hôtes)
                // Cette section génère le HTML pour l'article sur L'infrastructures et villes hôtes
                return `
                    <div class="article-featured-image mb-4">
                        <!-- Conteneur pour l'image principale avec marge en bas -->
                        <img src="img/news/img9.webp" alt="Infrastructures et Villes Hôtes AFCON 2025" class="img-fluid rounded" loading="lazy">
                        <!-- Image avec chemin, texte alternatif, classes pour la rendre responsive et chargement différé -->
                    </div>
                    <h2 class="mb-3">Infrastructures et Villes Hôtes</h2>
                    <!-- Titre principal de niveau 2 avec marge inférieure -->
                    <p class="lead">Le tournoi se déroulera dans 9 stades répartis sur 6 villes marocaines :</p>      
                    <!-- Paragraphe d'introduction mis en évidence avec la classe "lead" -->
                    <ul>                                     
                        <!-- Début de liste non ordonnée des stades et villes -->
                        <li><strong>Rabat</strong> : Complexe Sportif Prince Moulay Abdellah</li>                    
                        <!-- Élément de liste pour Rabat avec nom de stade en gras -->
                        <li><strong>Casablanca</strong> : Stade Mohammed V</li>                    
                        <!-- Élément de liste pour Casablanca avec nom de stade en gras -->
                        <li><strong>Marrakech</strong> : Grand Stade de Marrakech</li> 
                        <!-- Élément de liste pour Marrakech avec nom de stade en gras -->
                        <li><strong>Fès</strong> : Complexe Sportif de Fès</li>                    
                        <!-- Élément de liste pour Fès avec nom de stade en gras -->
                        <li><strong>Agadir</strong> : Grand Stade d'Agadir</li>                    
                        <!-- Élément de liste pour Agadir avec nom de stade en gras -->
                        <li><strong>Tanger</strong> : Grand Stade de Tanger</li>             
                        <!-- Élément de liste pour Tanger avec nom de stade en gras -->
                    </ul>            
                    <!-- Fin de la liste non ordonnée -->
                    <div class="row row-cols-1 row-cols-md-3 g-4 my-4">
                        <!-- Conteneur de grille responsive avec 1 colonne sur mobile, 3 sur tablette/PC, espacement 4 et marges verticales -->
                        <div class="col">
                            <!-- Première colonne de la grille -->
                            <div class="card h-100 d-flex align-items-center justify-content-center">
                                <!-- Carte avec hauteur 100%, flex pour centrer le contenu -->
                                <img src="img/news/STADE-abd.jpg" class="card-img-top mx-auto d-block" alt="Complexe Sportif Prince Moulay Abdellah - Rabat" loading="lazy" style="width: 260px; height: 180px; object-fit: cover;">
                                <!-- Image du stade avec styles inline pour dimensions et ajustement -->
                                <div class="card-body p-2">
                                    <!-- Corps de la carte avec padding réduit -->
                                    <p class="card-text text-center small mb-0"><strong>Rabat</strong> : Complexe Sportif Prince Moulay Abdellah</p>
                                    <!-- Texte centré, petit, sans marge basse, avec ville en gras -->
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <!-- Deuxième colonne de la grille -->
                            <div class="card h-100 d-flex align-items-center justify-content-center">
                                <!-- Carte avec hauteur 100%, flex pour centrer le contenu -->
                                <img src="img/news/STADE-casa.jpg" class="card-img-top mx-auto d-block" alt="Stade Mohammed V - Casablanca" loading="lazy" style="width: 260px; height: 180px; object-fit: cover;">
                                <!-- Image du stade avec styles inline pour dimensions et ajustement -->
                                <div class="card-body p-2">
                                    <!-- Corps de la carte avec padding réduit -->
                                    <p class="card-text text-center small mb-0"><strong>Casablanca</strong> : Stade Mohammed V</p>
                                    <!-- Texte centré, petit, sans marge basse, avec ville en gras -->
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <!-- Troisième colonne de la grille -->
                            <div class="card h-100 d-flex align-items-center justify-content-center">
                                <!-- Carte avec hauteur 100%, flex pour centrer le contenu -->
                                <img src="img/news/STADE-marrakech.jpg" class="card-img-top mx-auto d-block" alt="Grand Stade de Marrakech" loading="lazy" style="width: 260px; height: 180px; object-fit: cover;">
                                <!-- Image du stade avec styles inline pour dimensions et ajustement -->
                                <div class="card-body p-2">
                                    <!-- Corps de la carte avec padding réduit -->
                                    <p class="card-text text-center small mb-0"><strong>Marrakech</strong> : Grand Stade de Marrakech</p>
                                    <!-- Texte centré, petit, sans marge basse, avec ville en gras -->
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <!-- Quatrième colonne de la grille -->
                            <div class="card h-100 d-flex align-items-center justify-content-center">
                                <!-- Carte avec hauteur 100%, flex pour centrer le contenu -->
                                <img src="img/news/STADE-fes.webp" class="card-img-top mx-auto d-block" alt="Complexe Sportif de Fès" loading="lazy" style="width: 260px; height: 180px; object-fit: cover;">
                                <!-- Image du stade avec styles inline pour dimensions et ajustement -->
                                <div class="card-body p-2">
                                    <!-- Corps de la carte avec padding réduit -->
                                    <p class="card-text text-center small mb-0"><strong>Fès</strong> : Complexe Sportif de Fès</p>
                                    <!-- Texte centré, petit, sans marge basse, avec ville en gras -->
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <!-- Cinquième colonne de la grille -->
                            <div class="card h-100 d-flex align-items-center justify-content-center">
                                <!-- Carte avec hauteur 100%, flex pour centrer le contenu -->
                                <img src="img/news/STADE-agadir.jpg" class="card-img-top mx-auto d-block" alt="Grand Stade d'Agadir" loading="lazy" style="width: 260px; height: 180px; object-fit: cover;">
                                <!-- Image du stade avec styles inline pour dimensions et ajustement -->
                                <div class="card-body p-2">
                                    <!-- Corps de la carte avec padding réduit -->
                                    <p class="card-text text-center small mb-0"><strong>Agadir</strong> : Grand Stade d'Agadir</p>
                                    <!-- Texte centré, petit, sans marge basse, avec ville en gras -->
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <!-- Sixième colonne de la grille -->
                            <div class="card h-100 d-flex align-items-center justify-content-center">
                                <!-- Carte avec hauteur 100%, flex pour centrer le contenu -->
                                <img src="img/news/STADE-tanger.jpg" class="card-img-top mx-auto d-block" alt="Grand Stade de Tanger" loading="lazy" style="width: 260px; height: 180px; object-fit: cover;">
                                <!-- Image du stade avec styles inline pour dimensions et ajustement -->
                                <div class="card-body p-2">
                                    <!-- Corps de la carte avec padding réduit -->
                                    <p class="card-text text-center small mb-0"><strong>Tanger</strong> : Grand Stade de Tanger</p>
                                    <!-- Texte centré, petit, sans marge basse, avec ville en gras -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Fin du conteneur de grille -->
                    <p>Plus de 120 projets d'infrastructure sont en cours pour moderniser les installations sportives et logistiques en vue du tournoi.</p>
                    <!-- Paragraphe de conclusion sur les projets d'infrastructure -->
                `;
            case '10':
                // Retourne le contenu HTML pour l'article 10 (CAF Unveils Full Match Schedule for Morocco 2025 Africa Cup of Nations)
                // Cette section génère le HTML pour l'article 10
                return `
                    <div class="article-featured-image mb-4">
                        <!-- Conteneur pour l'image principale avec marge en bas -->
                        <img src="img/news/img10.jpg" alt="CAF Unveils Full Match Schedule for Morocco 2025 Africa Cup of Nations" class="img-fluid rounded" loading="lazy">
                        <!-- Image avec chemin, texte alternatif, classes pour la rendre responsive et chargement différé -->
                    </div>
                    <h2 class="mb-3">CAF Unveils Full Match Schedule for Morocco 2025 Africa Cup of Nations</h2>
                    <!-- Titre principal de niveau 2 avec marge inférieure -->
                    <p class="lead">The Confederation of African Football (CAF) on Friday released the full match schedule for the 2025 Africa Cup of Nations (CAN), set to take place in Morocco from December 21, 2025, to January 18, 2026.</p>
                    <!-- Paragraphe d'introduction mis en évidence avec la classe "lead" -->
                    <p>The tournament will kick off with host nation Morocco facing Comoros on December 21 in Rabat, part of Group A, CAF announced on its official website. The match will be played at the newly expanded Prince Moulay Abdellah Sports Complex, a 69,500-seat venue that will also host the tournament's final on January 18.</p>
                    <!-- Paragraphe détaillant le match d'ouverture et le lieu de la finale -->
                    <p>A total of 52 matches will be played over 29 days across six host cities and nine stadiums, showcasing the best of African football.</p>
                    <!-- Paragraphe concis sur le nombre total de matchs et la durée du tournoi -->
                    <p>The quarter-finals will be staged in Rabat, Tangier, Marrakech, and Agadir, while semi-final matches will take place in Rabat and Tangier. The third-place playoff will be held at Casablanca's Mohammed V Stadium.</p>
                    <!-- Paragraphe sur les lieux des matchs à élimination directe -->
                    <h3 class="mt-4">Full Match Schedule:</h3>
                    <!-- Sous-titre de niveau 3 avec marge supérieure -->
                    <h4 class="mt-3">Group Stage:</h4>
                    <!-- Sous-titre de niveau 4 pour la phase de groupes avec marge supérieure -->
                    <ul class="list-unstyled">
                        <!-- Liste non ordonnée sans puces (class Bootstrap) -->
                        <li><strong>December 21</strong><br>Morocco vs Comoros (Group A)</li>
                        <!-- Élément de liste pour les matchs du 21 décembre avec date en gras et saut de ligne -->
                        <li class="mt-2"><strong>December 22</strong><br>Mali vs Zambia (Group A)<br>Egypt vs Zimbabwe (Group B)<br>South Africa vs Angola (Group B)</li>
                        <!-- Élément de liste pour les matchs du 22 décembre avec marge supérieure, date en gras et sauts de ligne -->
                        <li class="mt-2"><strong>December 23</strong><br>Nigeria vs Tanzania (Group C)<br>Tunisia vs Uganda (Group C)<br>Senegal vs Botswana (Group D)<br>DR Congo vs Benin (Group D)</li>
                        <!-- Élément de liste pour les matchs du 23 décembre avec marge supérieure, date en gras et sauts de ligne -->
                        <li class="mt-2"><strong>December 24</strong><br>Algeria vs Sudan (Group E)<br>Burkina Faso vs Equatorial Guinea (Group E)<br>Côte d'Ivoire vs Mozambique (Group F)<br>Cameroon vs Gabon (Group F)</li>
                        <!-- Élément de liste pour les matchs du 24 décembre avec marge supérieure, date en gras et sauts de ligne -->
                        <li class="mt-2"><strong>December 26</strong><br>Morocco vs Mali (Group A)<br>Zambia vs Comoros (Group A)<br>Egypt vs South Africa (Group B)<br>Angola vs Zimbabwe (Group B)</li>
                        <!-- Élément de liste pour les matchs du 26 décembre avec marge supérieure, date en gras et sauts de ligne -->
                        <li class="mt-2"><strong>December 27</strong><br>Nigeria vs Tunisia (Group C)<br>Uganda vs Tanzania (Group C)<br>DR Congo vs Senegal (Group D)<br>Benin vs Botswana (Group D)</li>
                        <!-- Élément de liste pour les matchs du 27 décembre avec marge supérieure, date en gras et sauts de ligne -->
                        <li class="mt-2"><strong>December 28</strong><br>Algeria vs Burkina Faso (Group E)<br>Equatorial Guinea vs Sudan (Group E)<br>Cameroon vs Côte d'Ivoire (Group F)<br>Gabon vs Mozambique (Group F)</li>
                        <!-- Élément de liste pour les matchs du 28 décembre avec marge supérieure, date en gras et sauts de ligne -->
                        <li class="mt-2"><strong>December 29</strong><br>Morocco vs Zambia (Group A)<br>Comoros vs Mali (Group A)<br>Egypt vs Angola (Group B)<br>Zimbabwe vs South Africa (Group B)</li>
                        <!-- Élément de liste pour les matchs du 29 décembre avec marge supérieure, date en gras et sauts de ligne -->
                        <li class="mt-2"><strong>December 30</strong><br>Nigeria vs Uganda (Group C)<br>Tanzania vs Tunisia (Group C)<br>Botswana vs DR Congo (Group D)<br>Benin vs Senegal (Group D)</li>
                        <!-- Élément de liste pour les matchs du 30 décembre avec marge supérieure, date en gras et sauts de ligne -->
                        <li class="mt-2"><strong>December 31</strong><br>Equatorial Guinea vs Algeria (Group E)<br>Burkina Faso vs Sudan (Group E)<br>Cameroon vs Mozambique (Group F)<br>Côte d'Ivoire vs Gabon (Group F)</li>
                        <!-- Élément de liste pour les matchs du 31 décembre avec marge supérieure, date en gras et sauts de ligne -->
                    </ul>
                    <!-- Fin de la liste non ordonnée -->
                    <h4 class="mt-4">Knockout Stage Schedule</h4>
                    <!-- Sous-titre de niveau 4 pour la phase à élimination directe avec marge supérieure -->
                    <ul class="list-unstyled">
                        <!-- Liste non ordonnée sans puces (class Bootstrap) -->
                        <li><strong>Quarter-finals:</strong> January 9-10</li>
                        <!-- Élément de liste pour les quarts de finale avec intitulé en gras -->
                        <li><strong>Semi-finals:</strong> January 14</li>
                        <!-- Élément de liste pour les demi-finales avec intitulé en gras -->
                        <li><strong>Third-place playoff:</strong> January 17</li>
                        <!-- Élément de liste pour le match pour la 3e place avec intitulé en gras -->
                        <li><strong>Final:</strong> January 18</li>
                        <!-- Élément de liste pour la finale avec intitulé en gras -->
                    </ul>
                    <!-- Fin de la liste non ordonnée -->
                    <p class="mt-4">The 2025 Africa Cup of Nations promises a spectacular month of football, bringing together the continent's top talent in what CAF describes as "a grand celebration of African football."</p>
                    <!-- Paragraphe de conclusion avec marge supérieure -->
                `;
            default:
                // Cas par défaut si l'ID d'article ne correspond à aucun cas défini
                // Message si l'article n'est pas trouvé
                return `
                    <div class="alert alert-warning">
                        <!-- Alerte Bootstrap de type "warning" (jaune) -->
                        Article not found. Please return to the <a href="news.html">news page</a>.
                        <!-- Message d'erreur avec lien de retour vers la page d'actualités -->
                    </div>
                `;
        }
    }
    
// Fonction pour mettre à jour dynamiquement les articles connexes
// Cette fonction affiche des articles liés à l'article actuel
function updateRelatedArticles(currentId) {
    // Déclaration d'un tableau contenant les données des articles connexes
    // Chaque article est représenté par un objet avec ses propriétés
    const relatedArticles = [
        {
            id: "1",                // ID unique de l'article pour les liens
            title: "MATCH FACTS: Winner-takes-all battle between Tunisia and Morocco in Group B", // Titre complet de l'article
            category: "U20 AFCON Group B",     // Catégorie de l'article
            date: "May 6, 2025",              // Date de publication formatée
            author: "CAF Media",              // Auteur de l'article
            image: "img1.webp",               // Nom du fichier image (sans le chemin complet)
            description: "Tunisia and Morocco face off at the Suez Canal Stadium in a decisive Group B clash. The outcome could determine the group winner and qualification for the knockout stages."  // Description courte pour l'aperçu de l'article
        },
        {
            id: "8",                // ID unique du deuxième article connexe
            title: "Morocco fight back to claim dramatic victory over Kenya", // Titre du deuxième article
            category: "U20 AFCON Group B",     // Catégorie identique au premier article (même groupe)
            date: "May 1, 2025",              // Date de publication
            author: "CAF Media",              // Même auteur que le premier article
            image: "img8.webp",               // Nom du fichier image
            description: "Morocco came from behind twice to defeat Kenya 3-2 in a thrilling Group B opener, with goals from Zabiri (2) and Laalaoui."  // Description courte du deuxième article
        },
        {
            id: "10",               // ID unique du troisième article connexe
            title: "CAF Unveils Full Match Schedule for Morocco 2025 Africa Cup of Nations", // Titre du troisième article
            category: "Organisation",          // Catégorie différente des deux premiers articles
            date: "31 January 2025",          // Date de publication antérieure
            author: "CAF Media",              // Même auteur que les articles précédents
            image: "img10.jpg",               // Nom du fichier image (extension jpg et non webp)
            description: "CAF has released the full match schedule for the 2025 Africa Cup of Nations in Morocco, with 52 matches across six cities from December 21, 2025, to January 18, 2026."  // Description plus longue et détaillée pour ce troisième article
        }
    ];

    // Sélectionne le conteneur des articles connexes dans le DOM en utilisant le sélecteur CSS
    const relatedArticlesContainer = document.querySelector('.related-articles .row');
    // Vérifie si le conteneur a été trouvé dans le DOM pour éviter les erreurs
    if (relatedArticlesContainer) {
        // Génère dynamiquement le HTML pour chaque article connexe en utilisant la méthode map() sur le tableau
        relatedArticlesContainer.innerHTML = relatedArticles.map(article => `
            <div class="col-md-4">                                               <!-- Crée une colonne Bootstrap qui occupe 4 unités sur 12 pour un affichage sur 3 colonnes -->
                <div class="card h-100">                                         <!-- Utilise un composant card Bootstrap avec une hauteur à 100% pour aligner toutes les cartes -->
                    <img src="img/news/${article.image}" class="card-img-top" alt="${article.title}" loading="lazy">  <!-- Ajoute l'image de l'article avec chargement paresseux -->
                    <div class="card-body">                                      <!-- Conteneur pour le contenu textuel de la carte -->
                        <h5 class="card-title">${article.title}</h5>             <!-- Titre de l'article en tant qu'en-tête de niveau 5 -->
                        <p class="card-text">${article.description}</p>          <!-- Description de l'article dans un paragraphe -->
                        <a href="news-detail.html?id=${article.id}&title=${encodeURIComponent(article.title)}&category=${encodeURIComponent(article.category)}&date=${encodeURIComponent(article.date)}&author=${encodeURIComponent(article.author)}&image=${encodeURIComponent(article.image)}" class="btn btn-link p-0">Read More <i class="fas fa-arrow-right ms-1"></i></a>  
                        <!-- Lien vers la page détaillée avec tous les paramètres nécessaires encodés dans l'URL et une icône de flèche -->
                    </div>                                                       <!-- Fermeture du corps de la carte -->
                </div>                                                           <!-- Fermeture du composant carte -->
            </div>                                                               <!-- Fermeture de la colonne Bootstrap -->
        `).join('');  // Convertit le tableau de chaînes HTML en une seule chaîne en joignant les éléments sans séparateur
    }
}

// Fonctionnalité du bouton retour en haut de page
// Récupère l'élément du bouton "retour en haut" en utilisant son ID
const backToTopButton = document.getElementById('backToTop');
// Vérifie si l'élément existe dans le DOM avant d'ajouter des écouteurs d'événements
if (backToTopButton) {
    // Affiche ou masque le bouton selon la position de défilement
    window.addEventListener('scroll', () => {                          // Ajoute un écouteur d'événement au défilement de la fenêtre
        if (window.pageYOffset > 100) {                               // Vérifie si l'utilisateur a défilé de plus de 100 pixels
            backToTopButton.style.display = 'block';                  // Affiche le bouton si la condition est vraie
        } else {
            backToTopButton.style.display = 'none';                   // Cache le bouton si l'utilisateur est proche du haut
        }
    });

    // Fait défiler la page vers le haut en douceur au clic sur le bouton
    backToTopButton.addEventListener('click', () => {                  // Ajoute un écouteur d'événement au clic sur le bouton
        window.scrollTo({                                             // Utilise la méthode scrollTo pour faire défiler la page
            top: 0,                                                   // Définit la destination du défilement au tout début de la page
            behavior: 'smooth'                                        // Spécifie que le défilement doit être fluide et non instantané
        });
    });
}