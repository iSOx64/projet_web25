document.addEventListener('DOMContentLoaded', function() {
    // Initialize all slideshows
    initSlideshows();
    
 
    
    // Smooth scrolling for navigation
    initSmoothScrolling();
});

function initSlideshows() {
    const slideshowContainers = document.querySelectorAll('.slideshow-container, .sponsors-slideshow');
    
    slideshowContainers.forEach(container => {
        const track = container.querySelector('.slideshow-track, .sponsors-track');
        const slides = container.querySelectorAll('.slide, .sponsor-slide');
        const prevBtn = container.querySelector('.prev');
        const nextBtn = container.querySelector('.next');
        const dotsContainer = container.querySelector('.dots');
        let currentIndex = 0;
        let slideInterval;
        
        // Create dots if container exists
        if (dotsContainer) {
            slides.forEach((_, index) => {
                const dot = document.createElement('div');
                dot.classList.add('dot');
                if (index === 0) dot.classList.add('active');
                dot.addEventListener('click', () => goToSlide(index));
                dotsContainer.appendChild(dot);
            });
        }
        
        const dots = container.querySelectorAll('.dot');
        
        // Start auto-scrolling
        startSlideshow();
        
        // Function to go to specific slide
        function goToSlide(index) {
            // Reset all slides and dots
            slides.forEach(slide => slide.classList.remove('active'));
            if (dots.length > 0) {
                dots.forEach(dot => dot.classList.remove('active'));
            }
            
            // Set new active slide and dot
            currentSlide = index;
            slides[currentSlide].classList.add('active');
            if (dots.length > 0) {
                dots[currentSlide].classList.add('active');
            }
            
            // Update track position
            track.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            // Reset timer
            resetSlideshow();
        }
        
        // Function to go to next slide
        function nextSlide() {
            const nextIndex = (currentSlide + 1) % slides.length;
            goToSlide(nextIndex);
        }
        
        // Function to start auto-scrolling
        function startSlideshow() {
            slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
        }
        
        // Function to reset timer
        function resetSlideshow() {
            clearInterval(slideInterval);
            startSlideshow();
        }
        
        // Event listeners for buttons
        if (nextBtn) nextBtn.addEventListener('click', nextSlide);
        if (prevBtn) prevBtn.addEventListener('click', () => {
            const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
            goToSlide(prevIndex);
        });
        
        // Pause on hover (optional)
        container.addEventListener('mouseenter', () => clearInterval(slideInterval));
        container.addEventListener('mouseleave', startSlideshow);
    });
}

function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Calculate header height for offset
                const headerHeight = document.querySelector('.main-header').offsetHeight;
                
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
}
// Donnees des equipes pour les 24 equipes participantes (avec infos precises pour AFCON 2025)
const teams = [
    {
        "id": "morocco", // Identifiant unique pour l'equipe
        "name": "Morocco", // Nom de l'equipe
        "subtitle": "Morocco, known as the Atlas Lions, is one of Africa's most prominent football teams, boasting a rich history and a passionate fan base.",  // Sous-titre descriptif
        "flag": "img/flags/morocco.png", // Chemin vers le drapeau
        "background": "img/teams/morocco.jpg",  // Image de fond
        "video": "https://youtu.be/ikGoQkUqZcg?si=nt9DqWwZSF12y17k", // Lien video YouTube
        "link": "https://en.wikipedia.org/wiki/Morocco_national_football_team",// Lien Wikipedia
       "history": "The Moroccan national team, nicknamed the <span style='color:#05b360;'>Atlas Lions</span>, has been a formidable force in African football. They made history in the <span style='color:#05b360;'>2022 FIFA World Cup</span> by becoming the first <span style='color:#05b360;'>African and Arab</span> nation to reach the <span style='color:#05b360;'>semi-finals</span>, showcasing their tactical prowess and resilience. Morocco's only <span style='color:#05b360;'>AFCON</span> title came in <span style='color:#05b360;'>1976</span>, but they have consistently been strong contenders in the tournament. The team has produced legendary players like <span style='color:#05b360;'>Ahmed Faras</span> and <span style='color:#05b360;'>Noureddine Naybet</span>, and currently boasts stars such as <span style='color:#05b360;'>Achraf Hakimi</span> and <span style='color:#05b360;'>Hakim Ziyech</span>. Hosting the <span style='color:#05b360;'>2025 AFCON</span>, Morocco aims to leverage home advantage to clinch their second continental title.",
 // Histoire de l'equipe (HTML)
       "stats": {// Statistiques de l'equipe
          "appearances": 20, // Nombre de participations
          "firstParticipation": 1972, // Premiere participation
          "bestResult": "Champions (1976)", // Meilleur resultat
          "lastParticipation": "2023"  // Derniere participation
        }
      },
        // ... (autres equipes avec la meme structure)
    {
        id: 'egypt',
        name: 'Egypt',
        subtitle: 'Egypt, known as the Pharaohs, is one of the most successful teams in AFCON history, with a record 7 titles. They are renowned for their passionate fan base and have produced legendary players like Mohamed Salah. Egypt will be looking to reclaim their title in Morocco.',
        flag: 'img/flags/egypt.png',
        background: 'img/teams/egypt.jpg',
        video: 'https://youtu.be/36EMFz8C4Ho?si=lRYcONaCpGrJ90yS',
        link: "https://en.wikipedia.org/wiki/Egypt_national_football_team",

       "history": "The <span style='color:#05b360;'>Egyptian national team</span>, nicknamed the <span style='color:#05b360;'>Pharaohs</span>, is Africa's oldest football team and a historic powerhouse on the continent. Egypt has won the <span style='color:#05b360;'>Africa Cup of Nations</span> a record <span style='color:#05b360;'>seven times</span>, showcasing their long-standing dominance. They were the <span style='color:#05b360;'>first African and Middle Eastern</span> team to appear at the <span style='color:#05b360;'>FIFA World Cup</span>, debuting in <span style='color:#05b360;'>1934</span>. Legendary player <span style='color:#05b360;'>Abdulrahman Fawzi</span> scored Egypt’s first World Cup goals in that tournament. The team has also qualified for the <span style='color:#05b360;'>1990</span> and <span style='color:#05b360;'>2018</span> World Cups, with <span style='color:#05b360;'>Essam El Hadary</span> becoming the oldest player to feature in a World Cup match. Egypt won their first <span style='color:#05b360;'>AFCON</span> title in <span style='color:#05b360;'>1957</span> and defended it in <span style='color:#05b360;'>1959</span>. Throughout the decades, Egypt has produced iconic players and has remained a major contender on the African football scene, consistently demonstrating its talent and experience on the international stage."

       , stats: {
            appearances: 26,
            firstParticipation: 1957,
            bestResult: "Champions 7 times",
            lastParticipation: "2023"
        }
    },
    {
        id: 'burkinafaso',
        name: 'Burkina Faso',
       "subtitle": "Burkina Faso, known as the Stallions, is a rising force in African football, admired for their resilience, unity, and recent deep AFCON runs. They are determined to make history by capturing their first title in Morocco."

        ,flag: 'img/flags/burkinafaso.png',
        background: 'img/teams/burkinafaso.jpg',
        video: 'https://youtu.be/7ILBRHLdaVY?si=tbBol12WtBWm-6KO',

        link: "https://en.wikipedia.org/wiki/Burkina_Faso_national_football_team",
        
       "history": "The Burkina Faso national team, formerly known as Upper Volta, has grown into one of Africa’s most respected sides. After debuting in AFCON 1978, they rose to prominence by finishing fourth as hosts in 1998 and reaching the final in 2013. With consistent AFCON appearances and a strong showing in 2017 (3rd place), the Stallions have proven their resilience. Despite never qualifying for a World Cup, they came agonizingly close in 2014, falling to Algeria on away goals. Known for their unity and fighting spirit, Burkina Faso continues to challenge Africa’s elite."

        ,stats: {
            appearances: 14 ,
            firstParticipation: 1978,
            bestResult: "Runners-up (2013)",
            lastParticipation: "2023"
        }
    },
    {
        id: 'cameroon',
        name: 'Cameroon',
        "history": "Cameroon, the Indomitable Lions, have long stood among Africa's most iconic teams. Debuting in AFCON 1970, they rose to continental dominance with five titles (1984, 1988, 2000, 2002, 2017). On the world stage, they made history in 1990 by becoming the first African team to reach a World Cup quarter-final, led by legendary Roger Milla. Despite mixed results in later tournaments, Cameroon boasts a record 8 World Cup appearances, remarkable victories over Brazil in 2003 and 2022, and legends like Samuel Eto’o who helped define an era of African football excellence."

        ,flag: 'img/flags/cameroon.png',
        background: 'img/teams/cameroon.jpg',
        video: 'https://youtu.be/2YuEkIoZE2Y?si=-dIYwbxqw9I8KK0c',
        link:"https://en.wikipedia.org/wiki/Cameroon_national_football_team",

      "history": "Cameroon, the Indomitable Lions, have long stood among Africa's most iconic teams. Debuting in AFCON 1970, they rose to continental dominance with five titles (1984, 1988, 2000, 2002, 2017). On the world stage, they made history in 1990 by becoming the first African team to reach a World Cup quarter-final, led by legendary Roger Milla. Despite mixed results in later tournaments, Cameroon boasts a record 8 World Cup appearances, remarkable victories over Brazil in 2003 and 2022, and legends like Samuel Eto’o who helped define an era of African football excellence."

        ,stats: {
            appearances: 22,
            firstParticipation: 1970,
            bestResult: "Champions (1984, 1988, 2000, 2002, 2017)",
            lastParticipation: "2023"
        }
    },
    {
        id: 'algeria',
        name: 'Algeria',
        "subtitle": " Algeria, the Desert Warriors, are two-time AFCON champions and World Cup veterans, known for their fierce spirit, iconic 1982 victory over West Germany, and a golden generation that redefined North African football."
,
        flag: 'img/flags/algeria.png',
        background: 'img/teams/algeria.jpg',
        video: 'https://www.youtube.com/embed/example1',
        link:"https://en.wikipedia.org/wiki/Algeria_national_football_team",
        "history": "Algeria's national team, known as the <span style='color:#05b360'>Desert Warriors</span>, emerged from a revolutionary spirit, with roots in the <span style='color:#05b360'>FLN team</span> that symbolized anti-colonial resistance before independence. Officially joining <span style='color:#05b360'>FIFA</span> in <span style='color:#05b360'>1964</span>, Algeria rose to continental prominence with their first <span style='color:#05b360'>Africa Cup of Nations</span> title in <span style='color:#05b360'>1990</span> as hosts, and again in <span style='color:#05b360'>2019</span> in a dominant campaign. The team stunned the world by defeating <span style='color:#05b360'>West Germany</span> in the <span style='color:#05b360'>1982 World Cup</span>, a match etched in football history. Their best <span style='color:#05b360'>World Cup</span> performance came in <span style='color:#05b360'>2014</span>, reaching the <span style='color:#05b360'>Round of 16</span> and pushing eventual champions <span style='color:#05b360'>Germany</span> to extra time. With technical flair, passionate supporters, and legends like <span style='color:#05b360'>Rabah Madjer</span>, <span style='color:#05b360'>Lakhdar Belloumi</span>, and <span style='color:#05b360'>Riyad Mahrez</span>, Algeria remains a formidable force in African football."
        ,stats: {
            appearances: 21,
            firstParticipation: 1968,
            bestResult: "Champions (1990, 2019)",
            lastParticipation: "2023"
        }
    },
    {
        id: 'drcongo',
        name: 'DR Congo',
        "subtitle": " DR Congo, known as The Leopards, are two-time AFCON champions and pioneers of Sub-Saharan football, with a storied past marked by 1974 World Cup participation and bold continental triumphs."
,
        flag: 'img/flags/drcongo.png',
        background: 'img/teams/drcongo.jpg',
        video: 'https://youtu.be/WgN4kJU0sR8?si=NSDZLwwRc4L6PQqV',
        link:"https://en.wikipedia.org/wiki/DR_Congo_national_football_team",
        "history": "The DR Congo national football team, known as <span style='color:#05b360'>Les Léopards</span>, has a rich legacy that traces back to the <span style='color:#05b360'>Belgian Congo</span> era, playing their first match in <span style='color:#05b360'>1948</span>. After joining <span style='color:#05b360'>FIFA</span> in <span style='color:#05b360'>1962</span> and <span style='color:#05b360'>CAF</span> in <span style='color:#05b360'>1963</span>, they made their <span style='color:#05b360'>Africa Cup of Nations</span> debut in <span style='color:#05b360'>1965</span>. The nation's golden era began with AFCON glory in <span style='color:#05b360'>1968</span> and again in <span style='color:#05b360'>1974</span> under the name <span style='color:#05b360'>Zaïre</span>. That same year, they became the first <span style='color:#05b360'>Sub-Saharan African</span> team to qualify for a <span style='color:#05b360'>FIFA World Cup</span>. Despite a disappointing tournament, moments like <span style='color:#05b360'>Mwepu Ilunga</span>'s infamous free-kick incident against <span style='color:#05b360'>Brazil</span> became symbolic. The team also triumphed in the <span style='color:#05b360'>African Nations Championship</span>, winning in <span style='color:#05b360'>2009</span> and <span style='color:#05b360'>2016</span>. With resilience and flair, DR Congo remains a historic and formidable side in African football.",
        stats: {
            appearances: 21,
            firstParticipation: 1965,
            bestResult: "Champions (1968, 1974)",
            lastParticipation: "2023"
        }
    },
    {
        id: 'senegal',
        name: 'Senegal',
        "subtitle": " Senegal, the Lions of Teranga, are AFCON 2021 champions, having reached the 2002 World Cup quarter-finals and created history with their remarkable consistency in African football."
,
        flag: 'img/flags/senegal.png',
        background: 'img/teams/senegal.jpg',
        video: 'https://youtu.be/iO2BlDk3c1Q?si=sfJMiBfKrF08Uqui',
        link:"https://en.wikipedia.org/wiki/Senegal_national_football_team",
       "history": "The <span style='color:#05b360'>Senegal national football team</span>, nicknamed <span style='color:#05b360'>Les Lions de la Teranga</span> (The Lions of Teranga), represents <span style='color:#05b360'>Senegal</span> in international football. Founded in <span style='color:#05b360'>1960</span> after gaining independence from France, Senegal first played a match in <span style='color:#05b360'>1961</span> against <span style='color:#05b360'>Dahomey</span> (now Benin). The team joined <span style='color:#05b360'>FIFA</span> in <span style='color:#05b360'>1962</span> and became a member of the <span style='color:#05b360'>CAF</span> in <span style='color:#05b360'>1963</span>. Senegal’s first major appearance came at the <span style='color:#05b360'>1965 Africa Cup of Nations</span> where they finished in fourth place. After a series of ups and downs, the team made their mark by reaching the <span style='color:#05b360'>2002 FIFA World Cup</span> quarter-finals, upsetting defending champions <span style='color:#05b360'>France</span> in their opener. That same year, they reached the <span style='color:#05b360'>AFCON final</span>, but lost to <span style='color:#05b360'>Cameroon</span> on penalties. The team also gained recognition for their <span style='color:#05b360'>AFCON 2021</span> victory, defeating <span style='color:#05b360'>Egypt</span> on penalties to win their first continental title. Despite challenges, such as failing to qualify for the <span style='color:#05b360'>2010 FIFA World Cup</span> and their elimination from the <span style='color:#05b360'>2018 FIFA World Cup</span> at the group stage, Senegal has remained a consistent powerhouse in African football."
,
        stats: {
            appearances: 18 ,
            firstParticipation: 1965,
            bestResult: "	Champions (2021)",
            lastParticipation: "2023"
        }
    },
    {
        id: 'angola',
        name: 'Angola',
        "subtitle": " Angola, the Palancas Negras, qualified for the 2006 World Cup, and they've made multiple appearances in the Africa Cup of Nations, including a quarter-finals finish in 2023."
,
        flag: 'img/flags/angola.png',
        background: 'img/teams/angola.jpg',
        link:"https://en.wikipedia.org/wiki/Angola_national_football_team",
        video: 'https://youtu.be/5Ar0EKNaV6E?si=vLxtAMX0CyjdYskd',
        "history": "The <span style='color:#05b360'>Angola national football team</span>, known as <span style='color:#05b360'>Palancas Negras</span> (Black Sable antelopes), represents <span style='color:#05b360'>Angola</span> in men's international football and is controlled by the <span style='color:#05b360'>Angolan Football Federation</span>. Their highest <span style='color:#05b360'>FIFA ranking</span> was 45th in <span style='color:#05b360'>July 2000</span>. Angola’s most notable achievement came in <span style='color:#05b360'>2006</span> when they qualified for their only <span style='color:#05b360'>FIFA World Cup</span>, reaching the group stage. Angola made their first appearance in the <span style='color:#05b360'>Africa Cup of Nations</span> in <span style='color:#05b360'>1996</span> but did not progress past the group stage. The team's best AFCON finish came in <span style='color:#05b360'>2008</span> when they reached the <span style='color:#05b360'>quarter-finals</span>, and again in <span style='color:#05b360'>2010</span>. Angola also won the <span style='color:#05b360'>COSAFA Cup</span> in <span style='color:#05b360'>1999, 2001, 2004</span>, and <span style='color:#05b360'>2024</span>. Despite setbacks, including failing to qualify for the <span style='color:#05b360'>2010 World Cup</span> after a promising start, Angola has remained a competitive force in African football."
,
        stats: {
            appearances: 10,
            firstParticipation: 1996,
            bestResult: "Quarter-finals (2008, 2010, 2023)",
            lastParticipation: "2023"
        }
    },
    {
        id: 'Equatorial Guinea',
        name: 'Equatorial Guinea',
        "subtitle": " Equatorial Guinea, known as Nzalang Nacional, has qualified for the Africa Cup of Nations five times, reaching fourth place in 2015 and the quarter-finals in 2012 and 2021."
,
        flag: 'img/flags/equatorialguinea.png',
        background: 'img/teams/equatorialguinea.jpg',
        link:"https://en.wikipedia.org/wiki/Equatorial_Guinea_national_football_team",
        video: 'https://youtu.be/oRQTHN6Ceus?si=PlRKFyRInOAEtxXI',
       "history": "The <span style='color:#05b360'>Equatorial Guinea national football team</span>, known as <span style='color:#05b360'>Nzalang Nacional</span> (National Thunder), represents <span style='color:#05b360'>Equatorial Guinea</span> in men's international football and is controlled by the <span style='color:#05b360'>Equatoguinean Football Federation</span>, a member of the Confederation of African Football (<span style='color:#05b360'>CAF</span>). The team has never qualified for the <span style='color:#05b360'>FIFA World Cup</span>, but has participated in the <span style='color:#05b360'>Africa Cup of Nations</span> five times, the first two as hosts in <span style='color:#05b360'>2012</span> and <span style='color:#05b360'>2015</span>, where they reached the <span style='color:#05b360'>quarter-finals</span> and finished <span style='color:#05b360'>fourth</span> in <span style='color:#05b360'>2015</span>. Their historic win over <span style='color:#05b360'>Libya</span> in the opening match of the <span style='color:#05b360'>2012 Africa Cup of Nations</span> marked their first major tournament victory. The team continued to impress, qualifying for the <span style='color:#05b360'>2021 Africa Cup of Nations</span> after a dramatic comeback in the qualifiers, defeating <span style='color:#05b360'>Libya</span> in both home and away matches. Their best international performance remains <span style='color:#05b360'>fourth place</span> at the <span style='color:#05b360'>2015 Africa Cup of Nations</span>."
,
        stats: {
            appearances: 5,
            firstParticipation: 2012,
            bestResult: "	Fourth place (2015)",
            lastParticipation: "2023"
        }
    },
    {
        id: 'Ivory Coast',
        name: 'Ivory Coast',
        "subtitle": " Ivory Coast, also known as Les Éléphants, has won the Africa Cup of Nations three times (1992, 2015, and 2024) and qualified for the FIFA World Cup three times (2006, 2010, and 2014)."
,
        flag: 'img/flags/ivorycoast.png',
        link:"https://en.wikipedia.org/wiki/Ivory_Coast_national_football_team",
        background: 'img/teams/ivorycoast.jpg',
        video: 'https://youtu.be/_S9sFlf3zXU?si=C0CkALt3TQ_4p2Pe',
        "history": "The <span style='color:#05b360'>Ivory Coast national football team</span> (French: <span style='color:#05b360'>Équipe de football de Côte d'Ivoire</span>) represents <span style='color:#05b360'>Ivory Coast</span> in men's international football. Nicknamed the <span style='color:#05b360'>Elephants</span>, the team is managed by the <span style='color:#05b360'>Ivorian Football Federation</span> (<span style='color:#05b360'>FIF</span>). The team has won the <span style='color:#05b360'>Africa Cup of Nations</span> three times: <span style='color:#05b360'>1992</span>, <span style='color:#05b360'>2015</span>, and <span style='color:#05b360'>2024</span>, and has qualified for the <span style='color:#05b360'>FIFA World Cup</span> three times: <span style='color:#05b360'>2006</span>, <span style='color:#05b360'>2010</span>, and <span style='color:#05b360'>2014</span>. The team's home colours are orange, and since <span style='color:#05b360'>2020</span>, their home games have been played at <span style='color:#05b360'>Alassane Ouattara Stadium</span> in Abidjan. The nation's top scorer is <span style='color:#05b360'>Didier Drogba</span>, with 65 goals in 105 appearances. <span style='color:#05b360'>Didier Zokora</span> holds the record for the most caps, with 123. The team's first international match was a 3–2 victory over Dahomey (now <span style='color:#05b360'>Benin</span>) in <span style='color:#05b360'>1960</span>. Their most significant victory came in <span style='color:#05b360'>1961</span> when they beat the Central African Republic 11–0. The team won the <span style='color:#05b360'>1992 Africa Cup of Nations</span> in a dramatic penalty shootout against Ghana, triumphing 11–10 in what was, at the time, the highest-scoring penalty shootout in international football history. The team also participated in the <span style='color:#05b360'>2015 Africa Cup of Nations</span>, where they won another penalty shootout, defeating Ghana 9–8 in a 22-shot shootout to secure their second title."
,
        stats: {
            appearances: 26,
            firstParticipation: 1965,
            bestResult: "Champions (1992, 2015, 2023)",
            lastParticipation: "2023"
        }
    },
    {
        id: 'Gabon',
        name: 'Gabon',
        "subtitle": " Gabon, known as Les Panthères, has qualified for the Africa Cup of Nations 8 times and reached the quarter-finals twice, in 1996 and 2012."
,
        flag: 'img/flags/gabon.png',
        background: 'img/teams/gabon.jpg',
        video: 'https://youtu.be/T9ZWJwieBY8?si=ZW86qEyBCeHkr_-1',
        link:"https://en.wikipedia.org/wiki/Gabon_national_football_team",
       "history": "The <span style='color:#05b360'>Gabon national football team</span> represents <span style='color:#05b360'>Gabon</span> in men's international football. The team was originally known as <span style='color:#05b360'>Azingo</span> until <span style='color:#05b360'>2000</span>, when they were renamed <span style='color:#05b360'>Les Panthères</span>. The team played its first international match against <span style='color:#05b360'>Haute-Volta</span> (now <span style='color:#05b360'>Burkina Faso</span>) in <span style='color:#05b360'>1960</span>, losing 5–4. Gabon won its first international title in <span style='color:#05b360'>1985</span>, beating Congo 3–0 in the final of the <span style='color:#05b360'>UDEAC Cup</span>. The team's first appearance in the <span style='color:#05b360'>Africa Cup of Nations</span> came in <span style='color:#05b360'>1994</span>, and they reached the quarter-finals in <span style='color:#05b360'>1996</span> and <span style='color:#05b360'>2012</span>. In <span style='color:#05b360'>2012</span>, Gabon finished top of their group in the Africa Cup of Nations but was eliminated in the quarter-finals by Mali after a penalty shootout. In the following years, Gabon struggled to achieve significant success, failing to progress past the first round in <span style='color:#05b360'>2013</span>, <span style='color:#05b360'>2015</span>, and <span style='color:#05b360'>2017</span>. However, they qualified for the <span style='color:#05b360'>2021 Africa Cup of Nations</span>, finishing second in their group before being eliminated by Burkina Faso in the round of 16. Despite these achievements, Gabon has never qualified for the <span style='color:#05b360'>FIFA World Cup</span>."
,
        stats: {
            appearances: 9,
            firstParticipation: 1994,
            bestResult: "	Quarter-finals, 1996 and 2012",
            lastParticipation: "2021"
        }
    },
    {
        id: 'South Africa',
        name: 'South Africa',
        subtitle: "South Africa, known as Bafana Bafana, has qualified for the Africa Cup of Nations 12 times, winning the tournament in 1996.",
        flag: 'img/flags/southafrica.png',
        background: 'img/teams/southafrica.jpg',
        link:"https://en.wikipedia.org/wiki/South_Africa_national_soccer_team",
        video: 'https://youtu.be/8uXG6NwfUzE?si=ylp6_zzBMl-64Epp',
        history: "The <span style='color:#05b360'>South Africa national football team</span> represents <span style='color:#05b360'>South Africa</span> in men's international football. The team, nicknamed <span style='color:#05b360'>Bafana Bafana</span> (The Boys), played its first international match against <span style='color:#05b360'>Argentina</span> in <span style='color:#05b360'>1906</span>, losing 1–0. South Africa's most significant achievement came in <span style='color:#05b360'>1996</span> when they hosted and won the <span style='color:#05b360'>Africa Cup of Nations</span>. The team qualified for the <span style='color:#05b360'>FIFA World Cup</span> three times: in <span style='color:#05b360'>1998</span>, <span style='color:#05b360'>2002</span>, and <span style='color:#05b360'>2010</span>, the latter of which they hosted, becoming the first African nation to do so. Despite defeating France 2–1 in their final group game in 2010, they did not progress past the group stage. South Africa also reached the final of the <span style='color:#05b360'>Africa Cup of Nations</span> again in <span style='color:#05b360'>1998</span>, but were defeated by Egypt.",
        stats: {
            appearances: 12,
            firstParticipation: 1996,
            bestResult: "Champions (1996)",
            lastParticipation: "2023"
        }
    },
    {
        id: ' Tunisia',
        name: ' Tunisia',
        subtitle: "Tunisia, known as the Eagles of Carthage, has qualified for the Africa Cup of Nations 22 times, with their best result being champions in 2004.",
        flag: 'img/flags/tunisia.png',
        background: 'img/teams/tunisia.jpg',
        link:"https://en.wikipedia.org/wiki/Tunisia_national_football_team",
        video: 'https://youtu.be/vCxrFV0kVHw?si=CAR1cYHW8QR0s9-O',
        history: "The <span style='color:#05b360'>Tunisia national football team</span> represents <span style='color:#05b360'>Tunisia</span> in men's international football, controlled by the <span style='color:#05b360'>Tunisian Football Federation</span> (TFF). The team is also affiliated with the <span style='color:#05b360'>Confederation of African Football</span> (CAF) and <span style='color:#05b360'>FIFA</span>, and is a member of the <span style='color:#05b360'>Union of North African Football</span> (UNAF) and the <span style='color:#05b360'>Union of Arab Football Associations</span> (UAFA). The team is widely known as the <span style='color:#05b360'>Eagles of Carthage</span>. Tunisia's first international match after independence was against <span style='color:#05b360'>Libya</span> in <span style='color:#05b360'>1957</span>, which they won 4–2. Tunisia has qualified for the <span style='color:#05b360'>FIFA World Cup</span> six times, making its debut in <span style='color:#05b360'>1978</span>, and becoming the first African and Arab team to win a World Cup match by beating <span style='color:#05b360'>Mexico</span> 3–1 in their opening game. The team has never advanced beyond the group stage in the World Cup. Tunisia has participated in the <span style='color:#05b360'>Africa Cup of Nations</span> 22 times, winning the title in <span style='color:#05b360'>2004</span> when they hosted the competition. They also qualified for the <span style='color:#05b360'>FIFA Confederations Cup</span> in <span style='color:#05b360'>2005</span>, where they were eliminated in the group stage. The team won the <span style='color:#05b360'>African Nations Championship</span> in <span style='color:#05b360'>2011</span> and triumphed in the inaugural <span style='color:#05b360'>Arab Cup</span> in <span style='color:#05b360'>1963</span>. Tunisia's highest FIFA ranking was <span style='color:#05b360'>14th</span> in <span style='color:#05b360'>2018</span>, and their all-time top scorer is <span style='color:#05b360'>Issam Jemâa</span> with 36 goals. Tunisia holds the record for the most consecutive Africa Cup of Nations appearances, having participated in 17 straight tournaments from 1994 to 2025.",
        stats: {
            appearances: 22,
            firstParticipation: 1962,
            bestResult: "Champions (2004)",
            lastParticipation: "2023"
        }
    },
    {
        id: ' Nigeria',
        name: ' Nigeria',
        subtitle: "Nigeria, known as the Super Eagles, has qualified for the Africa Cup of Nations 21 times, winning the title in 1980, 1994, and 2013.",
        history: "The <span style='color:#05b360'>Nigeria national football team</span> represents <span style='color:#05b360'>Nigeria</span> in men's international football and is governed by the <span style='color:#05b360'>Nigeria Football Federation</span> (NFF). They are members of <span style='color:#05b360'>FIFA</span> and the <span style='color:#05b360'>Confederation of African Football</span> (CAF), and compete in the <span style='color:#05b360'>West African Football Union</span> (WAFU). Nicknamed the <span style='color:#05b360'>Super Eagles</span>, Nigeria made its international debut in <span style='color:#05b360'>1949</span> and played its first official match in October of that year against <span style='color:#05b360'>Sierra Leone</span>. Nigeria has qualified for the <span style='color:#05b360'>FIFA World Cup</span> six times since its debut in <span style='color:#05b360'>1994</span>, reaching the Round of 16 in <span style='color:#05b360'>1994</span>, <span style='color:#05b360'>1998</span>, and <span style='color:#05b360'>2014</span>. In the <span style='color:#05b360'>Africa Cup of Nations</span>, Nigeria has participated 21 times and won the tournament three times — in <span style='color:#05b360'>1980</span>, <span style='color:#05b360'>1994</span>, and <span style='color:#05b360'>2013</span>. The team also won the <span style='color:#05b360'>Olympic gold medal</span> in <span style='color:#05b360'>1996</span> and were runners-up in <span style='color:#05b360'>2008</span>. Nigeria’s greatest World Cup win was a 3–2 victory over <span style='color:#05b360'>Spain</span> in <span style='color:#05b360'>1998</span>, and their biggest-ever win came in a 10–0 thrashing of <span style='color:#05b360'>São Tomé and Príncipe</span> in <span style='color:#05b360'>2022</span>. Nigeria’s all-time top scorer is <span style='color:#05b360'>Rashidi Yekini</span> with 37 goals, and the most capped player is <span style='color:#05b360'>Ahmed Musa</span> with 109 appearances. Their highest FIFA ranking was <span style='color:#05b360'>5th</span> in <span style='color:#05b360'>1994</span>.",
        flag: 'img/flags/nigeria.png',
        background: 'img/teams/nigeria.jpg',
        video: 'https://youtu.be/_S9sFlf3zXU?si=cHO-Y0QZ1YgiBSBN',
        link:"https://en.wikipedia.org/wiki/Nigeria_national_football_team",
      stats: {
            appearances: 21,
            firstParticipation: 1963,
            bestResult: "Champions (1980, 1994, 2013)",
            lastParticipation: "2023"
        }
    },
    {
        id: ' Mali',
        name: ' Mali',
        subtitle: "Mali, also known as Les Aigles, has qualified for the Africa Cup of Nations 14 times, with their best result as runners-up in 1972.",
  history: "The <span style='color:#05b360'>Mali national football team</span> represents <span style='color:#05b360'>Mali</span> in men's international football, governed by the <span style='color:#05b360'>Malian Football Federation</span>. Known as <span style='color:#05b360'>Les Aigles</span> (The Eagles), the team has reached the <span style='color:#05b360'>Africa Cup of Nations</span> 14 times, with their best result being runners-up in <span style='color:#05b360'>1972</span>. They have never qualified for the <span style='color:#05b360'>FIFA World Cup</span>, but have been a strong force in African youth football. Mali has finished as semi-finalists in several tournaments, including in <span style='color:#05b360'>1994</span>, <span style='color:#05b360'>2002</span>, and <span style='color:#05b360'>2013</span>. Their highest FIFA ranking was <span style='color:#05b360'>23rd</span> in <span style='color:#05b360'>2013</span>, and their all-time top scorer is <span style='color:#05b360'>Seydou Keita</span>."

        ,link:"https://en.wikipedia.org/wiki/Mali_national_football_team",

        flag: 'img/flags/mali.png',
        background: 'img/teams/mali.jpg',
        video: 'https://youtu.be/ARx-5z292N4?si=OUtciE3lg9IwJS2L',
       stats: {
            appearances: 14,
            firstParticipation: 1972,
            bestResult: "	Runners-up (1972)",
            lastParticipation: "2023"
        }
    },
    {
        id: '  Zambia',
        name: '  Zambia',
        link:"https://en.wikipedia.org/wiki/Zambia_national_football_team",
        flag: 'img/flags/zambia.png',
        background: 'img/teams/zambia.jpg',
        video: 'https://youtu.be/L27fx2qIS74?si=4sgqxBNAQ2qdN6CJ',
        subtitle: "Zambia, known as Chipolopolo (The Copper Bullets), has won the Africa Cup of Nations once in 2012 and has been the most successful team in the COSAFA Cup.",
        history: "The <span style='color:#05b360'>Zambia national football team</span> represents <span style='color:#05b360'>Zambia</span> in men's international football, governed by the <span style='color:#05b360'>Football Association of Zambia</span>. Known as <span style='color:#05b360'>Chipolopolo</span> (The Copper Bullets), Zambia won their only <span style='color:#05b360'>Africa Cup of Nations</span> title in <span style='color:#05b360'>2012</span> and has been highly successful in the <span style='color:#05b360'>COSAFA Cup</span>, winning multiple times. The team faced a tragic loss in 1993 when a plane crash killed 18 players. Despite setbacks, they have regularly qualified for the Africa Cup of Nations and were finalists in <span style='color:#05b360'>1994</span>. Their highest FIFA ranking was <span style='color:#05b360'>15th</span> in <span style='color:#05b360'>1996</span>, and their all-time top scorer is <span style='color:#05b360'>Godfrey Chitalu</span>."
      ,
        stats: {
            appearances: 19,
            firstParticipation: 1974,
            bestResult: "Champions (2012)",
            lastParticipation: "2023"
        }
    },
    {
        id: 'Zimbabwe',
        name: 'Zimbabwe',
        link:"https://en.wikipedia.org/wiki/Zimbabwe_national_football_team",
        flag: 'img/flags/zimbabwe.png',
        background: 'img/teams/zimbabwe.jpg',
        video: 'https://youtu.be/tDEb7I20tkI?si=CSFE0tWiJiou0uXS',
        subtitle: "Zimbabwe's national football team, known as The Warriors, has qualified for the Africa Cup of Nations six times, but never for the FIFA World Cup.",
        history: "The <span style='color:#05b360'>Zimbabwe national football team</span>, also known as <span style='color:#05b360'>The Warriors</span>, has participated in the <span style='color:#05b360'>Africa Cup of Nations</span> six times, with their best result being the group stage. They are also six-time winners of the <span style='color:#05b360'>COSAFA Cup</span>. Notable players include <span style='color:#05b360'>Peter Ndlovu</span> (top scorer and most capped), <span style='color:#05b360'>Bruce Grobbelaar</span>, and <span style='color:#05b360'>Khama Billiat</span>. Despite their rich football history, Zimbabwe has never qualified for a FIFA World Cup."
      ,stats: {
            appearances: 6,
            firstParticipation: 2004,
            bestResult: "Group stage (2004, 2006, 2017, 2019, 2021)",
            lastParticipation: "2021"
        }
    },
    {
        id: 'Comoros',
        name: 'Comoros',
        video:"https://youtu.be/9EeA4jLUQMg?si=384Vlu7FjplhxfJZ",
        flag: 'img/flags/comoros.png',
        background: 'img/teams/comoros.jpg',
        link: 'https://en.wikipedia.org/wiki/Comoros_national_football_team',
        subtitle: "Comoros' national football team, also known as Les Coelacantes, has seen a rise in success in recent years, qualifying for their first Africa Cup of Nations in 2021.",
        history: "The <span style='color:#05b360'>Comoros national football team</span> represents <span style='color:#05b360'>Comoros</span> in international football and is governed by the <span style='color:#05b360'>Comoros Football Federation</span>. They qualified for their first major tournament in <span style='color:#05b360'>2021</span>, reaching the Round of 16 in the <span style='color:#05b360'>Africa Cup of Nations</span>. Their best result in the tournament was a shock 3–2 win over Ghana. The team's most capped player is <span style='color:#05b360'>Youssouf M'Changama</span>, and their top scorer is <span style='color:#05b360'>Ben Nabouhane</span>."
      
        ,stats: {
            appearances: 2,
            firstParticipation: 2021,
            bestResult: "Round of 16 (2021)",
            lastParticipation: "2023"
        }
    },
    {
        id: 'Sudan',
        name: 'Sudan',
        link : "https://en.wikipedia.org/wiki/Sudan_national_football_team",
        flag: 'img/flags/sudan.png',
        background: 'img/teams/sudan.jpg',
        video: 'https://youtu.be/MJjV7j5Fd-E?si=ni3ggALs1heUNOg4',
        subtitle: "Sudan's national football team, known as the Falcons of Jediane, has a rich history with an Africa Cup of Nations victory in 1970, but has struggled in recent years.",
        history: "The <span style='color:#05b360'>Sudan national football team</span> represents <span style='color:#05b360'>Sudan</span> in international football and is governed by the <span style='color:#05b360'>Sudan Football Association</span>. Their greatest achievement came in <span style='color:#05b360'>1970</span> when they won the <span style='color:#05b360'>Africa Cup of Nations</span> as hosts. However, the team's performance has declined in recent decades, and they have failed to qualify for the <span style='color:#05b360'>FIFA World Cup</span>. Their highest FIFA ranking was <span style='color:#05b360'>74th</span> in <span style='color:#05b360'>1996</span>. The team's most capped player is <span style='color:#05b360'>Haitham Mustafa</span> with 98 appearances, and their top scorer is <span style='color:#05b360'>Nasr Eddin Abbas</span> with 27 goals."
      
        ,stats: {
            appearances: 10,
            firstParticipation: 1957,
            bestResult: "Champions (1970)",
            lastParticipation: "2021"
        }
    },
    {
        id: 'Benin',
        name: 'Benin',
        link:"https://en.wikipedia.org/wiki/Benin_national_football_team",
        flag: 'img/flags/benin.png',
        background: 'img/teams/benin.jpg',
        video: 'https://youtu.be/XGAHOexmSAg?si=1_aKORPcp1WyWfkg',
        subtitle: "Benin's national football team, known as Les Guépards (The Cheetahs), has made notable strides in African football, with a remarkable quarter-final finish at the 2019 Africa Cup of Nations.",
  history: "The <span style='color:#05b360'>Benin national football team</span> represents <span style='color:#05b360'>Benin</span> in men's international football, governed by the <span style='color:#05b360'>Benin Football Federation</span>. Nicknamed <span style='color:#05b360'>Les Guépards</span>, the team has appeared in the <span style='color:#05b360'>Africa Cup of Nations</span> five times, with their best result being a quarter-final finish in <span style='color:#05b360'>2019</span>. They have yet to qualify for the <span style='color:#05b360'>FIFA World Cup</span>, and their highest FIFA ranking was <span style='color:#05b360'>59th</span> in <span style='color:#05b360'>2009</span>. The top scorer is <span style='color:#05b360'>Stéphane Sessègnon</span> with 24 goals."
,
        stats: {
            appearances: 5,
            firstParticipation: 2004,
            bestResult: "Quarter-finals (2019)",
            lastParticipation: "2019"
        }
    },
    {
        id: 'Tanzania',
        name: 'Tanzania',
        link:"https://en.wikipedia.org/wiki/Tanzania_national_football_team",
        subtitle: "Tanzania, also known as Taifa Stars, has made history by qualifying for the Africa Cup of Nations multiple times, with their most recent qualification in 2025.",
  history: "The <span style='color:#05b360'>Tanzania national football team</span> represents <span style='color:#05b360'>Tanzania</span> in men's international football, governed by the <span style='color:#05b360'>Tanzania Football Federation</span> (TFF). Nicknamed <span style='color:#05b360'>Taifa Stars</span>, Tanzania has participated in the <span style='color:#05b360'>Africa Cup of Nations</span> four times, with their best result being a group-stage finish in 1980, 2019, and 2023. They recently qualified for the <span style='color:#05b360'>2025</span> Africa Cup of Nations, marking their fourth appearance. Tanzania's highest FIFA ranking was <span style='color:#05b360'>65th</span> in <span style='color:#05b360'>1995</span>, and the top scorer is <span style='color:#05b360'>Mrisho Ngasa</span> with 25 goals."
,
        flag: 'img/flags/tanzania.png',
        background: 'img/teams/tanzania.jpg',
        video: 'https://youtu.be/87IzT8PazGw?si=ib1sTRkTaiqc2bEV',
        stats: {
            appearances: 4,
            firstParticipation: 1980,
            bestResult: "Group stage (1980, 2019, 2023)",
            lastParticipation: "2023"
        }
    },
    {
        id: 'Botswana',
        name: 'Botswana',
        link:"https://en.wikipedia.org/wiki/Botswana_national_football_team",
        subtitle: "Botswana, known as Dipitse (The Zebras), has qualified for two Africa Cup of Nations and is striving to improve its international performance.",
        history: "The <span style='color:#05b360'>Botswana national football team</span> represents <span style='color:#05b360'>Botswana</span> in international football, governed by the <span style='color:#05b360'>Botswana Football Association (BFA)</span>. Known as <span style='color:#05b360'>Dipitse</span> (The Zebras), the team has qualified for two <span style='color:#05b360'>Africa Cup of Nations</span>, with their best performance in the group stage in 2012. The team’s highest FIFA ranking was <span style='color:#05b360'>53rd</span> in <span style='color:#05b360'>2010</span>, and their top scorer is <span style='color:#05b360'>Jerome Ramatlhakwane</span> with 24 goals. Despite challenges, Botswana qualified for the <span style='color:#05b360'>2025</span> Africa Cup of Nations."
      ,
        flag: 'img/flags/botswana.png',
        background: 'img/teams/botswana.jpg',
        video: 'https://youtu.be/EfJuHUljWjA?si=m8M396uU43GCfbrA',
        stats: {
            appearances: 2,
            firstParticipation: 2012,
            bestResult: "Group stage (2012)",
            lastParticipation: "2012"
        }
    },
    {
        id: 'Mozambique',
        name: 'Mozambique',
        link:"https://en.wikipedia.org/wiki/Mozambique_national_football_team",
        flag: 'img/flags/mozambique.png',
        background: 'img/teams/mozambique.jpg',
        video: 'https://youtu.be/XGAHOexmSAg?si=GDwTizprY0dm7_PQ',
        subtitle: "Mozambique, known as Os Mambas (The Mambas), has qualified for six Africa Cup of Nations and is yet to qualify for a FIFA World Cup.",
        history: "The <span style='color:#05b360'>Mozambique national football team</span> represents <span style='color:#05b360'>Mozambique</span> in international football, governed by the <span style='color:#05b360'>Mozambican Football Federation</span>. Known as <span style='color:#05b360'>Os Mambas</span> (The Mambas), they have appeared in six <span style='color:#05b360'>Africa Cup of Nations</span>, with their best performance being the group stage. The team has never qualified for the FIFA World Cup but has participated in World Cup qualifiers. Their highest FIFA ranking was <span style='color:#05b360'>66th</span> in <span style='color:#05b360'>1997</span>, and the all-time top scorer is <span style='color:#05b360'>Tico-Tico</span> with 30 goals."
      ,
        stats: {
            appearances: 6,
            firstParticipation: 1986,
            bestResult: "Group stage (1986, 1996, 1998, 2010, 2023)",
            lastParticipation: "2023"
        }
    },

];
// Initialisation quand le DOM est chargé
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.team-slideshow')) {
         // Initialise le diaporama principal
        initSlideshow();
          // Initialise les sections pour chaque equipe
        initTeamSections();
    }
        // Initialise le bouton "retour en haut"
    initBackToTop();
        // Initialise les boutons de defilement
    initScrollButtons();
});
// Fonction pour initialiser le diaporama principal
function initSlideshow() {
        // Selectionne le conteneur du diaporama
    const slideshow = document.querySelector('.team-slideshow');
      // Cree un conteneur pour la navigation
    const navContainer = document.createElement('div');
    navContainer.className = 'slide-nav';
    
    teams.forEach((team, index) => {
           // Pour chaque equipe dans la liste des equipes
        const slide = document.createElement('div');
        slide.className = `team-slide ${index === 0 ? 'active' : ''}`;
           // Cree l'image de fond du slide
        const img = document.createElement('img');
        img.className = 'team-slide-image';
        img.src = team.background;
        img.alt = `${team.name} Team`;
        img.loading = 'lazy'; // Optimisation du chargement
        // Cree l'overlay avec le contenu
        const overlay = document.createElement('div');
        overlay.className = 'slide-overlay';
        overlay.innerHTML = `
            <h2 class="slide-title">${team.name}</h2>
            <p>${team.subtitle}</p>
            <a href="#${team.id}" class="btn btn-primary mt-3">Read More</a>
        `;
          // Ajoute l'image et l'overlay au slide
        slide.appendChild(img);
        slide.appendChild(overlay);
            // Ajoute le slide au diaporama
        slideshow.appendChild(slide);
          // Cree un bouton de navigation
        const navBtn = document.createElement('button');
        navBtn.className = `slide-nav-btn ${index === 0 ? 'active' : ''}`;
        navBtn.dataset.slide = index;
        navContainer.appendChild(navBtn);
    });
       // Ajoute la navigation au diaporama
    slideshow.appendChild(navContainer);
     // Selectionne tous les slides et boutons de nav
    const slides = document.querySelectorAll('.team-slide');
    const navButtons = document.querySelectorAll('.slide-nav-btn');
    let currentSlide = 0;
        // Fonction pour afficher un slide specifique
    function showSlide(index) {
        // Retire la classe active de tous les slides et boutons
        slides.forEach(slide => slide.classList.remove('active'));
        navButtons.forEach(btn => btn.classList.remove('active'));
          // Ajoute la classe active au slide et bouton correspondants
        slides[index].classList.add('active');
        navButtons[index].classList.add('active');
        currentSlide = index;
    }
     // Ajoute un ecouteur d'evenement aux boutons de nav
    navButtons.forEach((button, index) => {
        button.addEventListener('click', () => showSlide(index));
    });
    // Definit un intervalle pour le defilement automatique

    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 5000);  // Change de slide toutes les 5 secondes
}

// Initialisation des sections d'équipe
function initTeamSections() {
      // Selectionne le conteneur des equipes
    const container = document.getElementById('teams-container');
    
    teams.forEach(team => {
        // Pour chaque equipe dans la liste
        const section = document.createElement('section');  // Cree une section pour l'equipe
        section.className = 'team-section';
        section.id = team.id; // ID correspondant a l'ancre
         // HTML de la section equipe
        section.innerHTML = `
            <div class="container">
                <div class="team-header">
                    <img src="${team.flag}" alt="${team.name} Flag" class="team-flag">
                    <h2 class="team-name">${team.name}</h2>
                    <p class="team-subtitle">${team.subtitle}</p>
                </div>
                
                <div class="team-content">
                    <div class="team-history">
                        <p>${team.history}</p>
                    </div>
                    
                    <div class="team-stats">
                        <div class="stat-item">
                            <div class="stat-number">${team.stats.appearances}</div>
                            <div class="stat-label">Appearances</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">${team.stats.firstParticipation}</div>
                            <div class="stat-label">First Participation</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">${team.stats.bestResult}</div>
                            <div class="stat-label">Best Result</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">${team.stats.lastParticipation}</div>
                            <div class="stat-label">Last Participation</div>
                        </div>
                    </div>
                    
                    <div class="video-container">
                        <iframe src="https://www.youtube.com/embed/${extractYouTubeId(team.video)}" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                        </iframe>
                    </div>
                    
                    <div class="discover-more">
                        <a href="${team.link}" target="_blank" class="btn btn-outline-primary">
                            Discover More About ${team.name}
                        </a>
                    </div>
                </div>
            </div>
        `;
        
        container.appendChild(section);
    });
}

// Extraction de l'ID YouTube
function extractYouTubeId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}

// Bouton retour en haut
function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
    
    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Boutons de défilement
function initScrollButtons() {
    const backToTopBtn = document.getElementById('backToTopBtn');
    const scrollToBottomBtn = document.getElementById('scrollToBottomBtn');
    
    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    scrollToBottomBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = 'flex';
        } else {
            backToTopBtn.style.display = 'none';
        }
        
        if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 100) {
            scrollToBottomBtn.style.display = 'none';
        } else {
            scrollToBottomBtn.style.display = 'flex';
        }
    });
}