// ============================================
// ANIME BEWERTUNGS-APP
// ============================================

// Anime Daten (50 Animes mit MyAnimeList IDs)
const animeData = [
    { id: 1, malId: 16498, title: "Attack on Titan", cover: "https://cdn.myanimelist.net/images/anime/10/47347.jpg", trailer: "" },
    { id: 2, malId: 38000, title: "Demon Slayer", cover: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg", trailer: "" },
    { id: 3, malId: 31964, title: "My Hero Academia", cover: "https://cdn.myanimelist.net/images/anime/10/78745.jpg", trailer: "" },
    { id: 4, malId: 40748, title: "Jujutsu Kaisen", cover: "https://cdn.myanimelist.net/images/anime/1171/109222.jpg", trailer: "" },
    { id: 5, malId: 21, title: "One Piece", cover: "https://cdn.myanimelist.net/images/anime/6/73245.jpg", trailer: "" },
    { id: 6, malId: 20, title: "Naruto", cover: "https://cdn.myanimelist.net/images/anime/13/17405.jpg", trailer: "" },
    { id: 7, malId: 1535, title: "Death Note", cover: "https://cdn.myanimelist.net/images/anime/9/9453.jpg", trailer: "" },
    { id: 8, malId: 5114, title: "Fullmetal Alchemist: Brotherhood", cover: "https://cdn.myanimelist.net/images/anime/1208/94745.jpg", trailer: "" },
    { id: 9, malId: 813, title: "Dragon Ball Z", cover: "https://cdn.myanimelist.net/images/anime/6/20936.jpg", trailer: "" },
    { id: 10, malId: 11061, title: "Hunter x Hunter", cover: "https://cdn.myanimelist.net/images/anime/11/33657.jpg", trailer: "" },
    { id: 11, malId: 22319, title: "Tokyo Ghoul", cover: "https://cdn.myanimelist.net/images/anime/5/64449.jpg", trailer: "" },
    { id: 12, malId: 30276, title: "One Punch Man", cover: "https://cdn.myanimelist.net/images/anime/12/76049.jpg", trailer: "" },
    { id: 13, malId: 32182, title: "Mob Psycho 100", cover: "https://cdn.myanimelist.net/images/anime/8/80356.jpg", trailer: "" },
    { id: 14, malId: 44511, title: "Chainsaw Man", cover: "https://cdn.myanimelist.net/images/anime/1806/126216.jpg", trailer: "" },
    { id: 15, malId: 50265, title: "Spy x Family", cover: "https://cdn.myanimelist.net/images/anime/1441/122795.jpg", trailer: "" },
    { id: 16, malId: 269, title: "Bleach", cover: "https://cdn.myanimelist.net/images/anime/3/40451.jpg", trailer: "" },
    { id: 17, malId: 6702, title: "Fairy Tail", cover: "https://cdn.myanimelist.net/images/anime/5/18179.jpg", trailer: "" },
    { id: 18, malId: 34572, title: "Black Clover", cover: "https://cdn.myanimelist.net/images/anime/2/88336.jpg", trailer: "" },
    { id: 19, malId: 38691, title: "Dr. Stone", cover: "https://cdn.myanimelist.net/images/anime/1613/102576.jpg", trailer: "" },
    { id: 20, malId: 38671, title: "Fire Force", cover: "https://cdn.myanimelist.net/images/anime/1256/103175.jpg", trailer: "" },
    { id: 21, malId: 37779, title: "The Promised Neverland", cover: "https://cdn.myanimelist.net/images/anime/1279/109419.jpg", trailer: "" },
    { id: 22, malId: 37521, title: "Vinland Saga", cover: "https://cdn.myanimelist.net/images/anime/1500/103005.jpg", trailer: "" },
    { id: 23, malId: 34599, title: "Made in Abyss", cover: "https://cdn.myanimelist.net/images/anime/6/86733.jpg", trailer: "" },
    { id: 24, malId: 31240, title: "Re:Zero", cover: "https://cdn.myanimelist.net/images/anime/1429/95946.jpg", trailer: "" },
    { id: 25, malId: 29803, title: "Overlord", cover: "https://cdn.myanimelist.net/images/anime/7/88019.jpg", trailer: "" },
    { id: 26, malId: 37430, title: "That Time I Got Reincarnated as a Slime", cover: "https://cdn.myanimelist.net/images/anime/1694/90373.jpg", trailer: "" },
    { id: 27, malId: 11757, title: "Sword Art Online", cover: "https://cdn.myanimelist.net/images/anime/11/39717.jpg", trailer: "" },
    { id: 28, malId: 19815, title: "No Game No Life", cover: "https://cdn.myanimelist.net/images/anime/1074/111944.jpg", trailer: "" },
    { id: 29, malId: 30831, title: "Konosuba", cover: "https://cdn.myanimelist.net/images/anime/8/77831.jpg", trailer: "" },
    { id: 30, malId: 20583, title: "Haikyuu!!", cover: "https://cdn.myanimelist.net/images/anime/7/76014.jpg", trailer: "" },
    { id: 31, malId: 11771, title: "Kuroko's Basketball", cover: "https://cdn.myanimelist.net/images/anime/4/46803.jpg", trailer: "" },
    { id: 32, malId: 49596, title: "Blue Lock", cover: "https://cdn.myanimelist.net/images/anime/1448/128879.jpg", trailer: "" },
    { id: 33, malId: 32281, title: "Your Name", cover: "https://cdn.myanimelist.net/images/anime/5/87048.jpg", trailer: "" },
    { id: 34, malId: 38524, title: "Weathering With You", cover: "https://cdn.myanimelist.net/images/anime/1594/101608.jpg", trailer: "" },
    { id: 35, malId: 28851, title: "A Silent Voice", cover: "https://cdn.myanimelist.net/images/anime/1122/96435.jpg", trailer: "" },
    { id: 36, malId: 9253, title: "Steins;Gate", cover: "https://cdn.myanimelist.net/images/anime/1935/127974.jpg", trailer: "" },
    { id: 37, malId: 1575, title: "Code Geass", cover: "https://cdn.myanimelist.net/images/anime/5/50331.jpg", trailer: "" },
    { id: 38, malId: 13601, title: "Psycho-Pass", cover: "https://cdn.myanimelist.net/images/anime/1314/131420.jpg", trailer: "" },
    { id: 39, malId: 1, title: "Cowboy Bebop", cover: "https://cdn.myanimelist.net/images/anime/4/19644.jpg", trailer: "" },
    { id: 40, malId: 30, title: "Neon Genesis Evangelion", cover: "https://cdn.myanimelist.net/images/anime/1314/108941.jpg", trailer: "" },
    { id: 41, malId: 33, title: "Berserk", cover: "https://cdn.myanimelist.net/images/anime/10/79352.jpg", trailer: "" },
    { id: 42, malId: 14719, title: "JoJo's Bizarre Adventure", cover: "https://cdn.myanimelist.net/images/anime/3/40409.jpg", trailer: "" },
    { id: 43, malId: 30694, title: "Dragon Ball Super", cover: "https://cdn.myanimelist.net/images/anime/7/74606.jpg", trailer: "" },
    { id: 44, malId: 34566, title: "Boruto: Naruto Next Generations", cover: "https://cdn.myanimelist.net/images/anime/3/79335.jpg", trailer: "" },
    { id: 45, malId: 42249, title: "Tokyo Revengers", cover: "https://cdn.myanimelist.net/images/anime/1839/113176.jpg", trailer: "" },
    { id: 46, malId: 50346, title: "Hell's Paradise", cover: "https://cdn.myanimelist.net/images/anime/1988/133935.jpg", trailer: "" },
    { id: 47, malId: 51298, title: "Mashle: Magic and Muscles", cover: "https://cdn.myanimelist.net/images/anime/1335/134717.jpg", trailer: "" },
    { id: 48, malId: 51179, title: "Oshi no Ko", cover: "https://cdn.myanimelist.net/images/anime/1816/134437.jpg", trailer: "" },
    { id: 49, malId: 51009, title: "Zom 100: Bucket List of the Dead", cover: "https://cdn.myanimelist.net/images/anime/1608/135431.jpg", trailer: "" },
    { id: 50, malId: 52268, title: "Solo Leveling", cover: "https://cdn.myanimelist.net/images/anime/1015/135006.jpg", trailer: "" }
];

// ============================================
// STATE MANAGEMENT
// ============================================

let currentIndex = 0;
let ratings = {}; // Bewertungen nur im Arbeitsspeicher (werden nach Reload zurückgesetzt)
// Struktur: ratings[animeId] = { higherCellF: rating, ogAle: rating }

// ============================================
// RATING FUNCTIONS (nur im Arbeitsspeicher)
// ============================================

function getRatings() {
    return ratings;
}

function getAnimeRating(animeId, reviewer) {
    if (!ratings[animeId]) return null;
    return ratings[animeId][reviewer] || null;
}

function setAnimeRating(animeId, reviewer, rating) {
    if (!ratings[animeId]) {
        ratings[animeId] = {};
    }
    ratings[animeId][reviewer] = rating;
}

function isAnimeFullyRated(animeId) {
    if (!ratings[animeId]) return false;
    return ratings[animeId].higherCellF && ratings[animeId].ogAle;
}

function getRatingText(rating) {
    const texts = {
        1: "Schlecht",
        2: "Okay",
        3: "Gut",
        4: "Sehr gut",
        5: "Ausgezeichnet"
    };
    return texts[rating] || "Nicht bewertet";
}

// ============================================
// TRAILER API FUNCTIONS
// ============================================

async function fetchTrailerFromAniList(malId) {
    try {
        const query = `
            query ($id: Int, $type: MediaType) {
                Media(idMal: $id, type: $type) {
                    trailer {
                        id
                        site
                    }
                }
            }
        `;

        const response = await fetch('https://graphql.anilist.co', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: query,
                variables: { id: malId, type: 'ANIME' }
            })
        });

        if (!response.ok) return null;

        const data = await response.json();
        
        if (data.data?.Media?.trailer?.id && data.data.Media.trailer.site === 'youtube') {
            const videoId = String(data.data.Media.trailer.id).trim();
            // Validate YouTube video ID (11 characters)
            if (/^[a-zA-Z0-9_-]{11}$/.test(videoId)) {
                return `https://www.youtube.com/embed/${videoId}`;
            }
        }
        return null;
    } catch (error) {
        console.error('AniList API error:', error);
        return null;
    }
}

async function loadTrailerForAnime(anime) {
    if (!anime.malId || (anime.trailer && anime.trailer !== "")) {
        return;
    }

    const infoContainer = document.querySelector(`[data-anime-id="${anime.id}"] .anime-info`);
    if (!infoContainer) return;

    // Show loading state
    let loadingDiv = infoContainer.querySelector('.anime-trailer');
    if (!loadingDiv) {
        loadingDiv = document.createElement('div');
        loadingDiv.className = 'anime-trailer';
        loadingDiv.innerHTML = '<p>Lade Trailer...</p>';
        infoContainer.appendChild(loadingDiv);
    }

    // Fetch trailer
    await new Promise(resolve => setTimeout(resolve, 300));
    const trailerUrl = await fetchTrailerFromAniList(anime.malId);

    if (trailerUrl) {
        anime.trailer = trailerUrl;
        const videoId = trailerUrl.split('/').pop().split('?')[0];
        
        if (/^[a-zA-Z0-9_-]{11}$/.test(videoId)) {
            loadingDiv.classList.add('with-iframe');
            loadingDiv.innerHTML = `
                <iframe 
                    src="${trailerUrl}?rel=0&modestbranding=1&autoplay=0" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                    referrerpolicy="strict-origin-when-cross-origin"
                    title="Trailer für ${anime.title}">
                </iframe>
            `;
        } else {
            loadingDiv.innerHTML = '<p class="trailer-error">⚠️ Trailer nicht verfügbar. Bitte auf YouTube schauen.</p>';
            loadingDiv.classList.remove('with-iframe');
        }
    } else {
        loadingDiv.innerHTML = '<p class="trailer-error">⚠️ Trailer nicht verfügbar. Bitte auf YouTube schauen.</p>';
        loadingDiv.classList.remove('with-iframe');
    }
}

// ============================================
// UI FUNCTIONS
// ============================================

function createAnimeCard(anime) {
    const ratingHigherCellF = getAnimeRating(anime.id, 'higherCellF');
    const ratingOGAle = getAnimeRating(anime.id, 'ogAle');
    
    const card = document.createElement('div');
    card.className = 'anime-card';
    card.dataset.animeId = anime.id;
    
    card.innerHTML = `
        <div class="anime-content">
            <img src="${anime.cover}" alt="${anime.title}" class="anime-cover" 
                 onerror="this.src='https://via.placeholder.com/220x293/1a1f2e/7aa2ff?text=${encodeURIComponent(anime.title)}'">
            <div class="anime-info">
                <h2 class="anime-title">${anime.title}</h2>
                ${anime.trailer ? `
                <div class="anime-trailer with-iframe">
                    <iframe 
                        src="${anime.trailer}?rel=0&modestbranding=1&autoplay=0" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                        referrerpolicy="strict-origin-when-cross-origin"
                        title="Trailer für ${anime.title}">
                    </iframe>
                </div>
                ` : ''}
                <p class="trailer-hint">⚠️ Falls der Trailer nicht funktioniert, bitte auf YouTube schauen</p>
            </div>
        </div>
        <div class="rating-section-large">
            <div class="rating-group">
                <h3 class="rating-title">HigherCellF:</h3>
                <div class="stars-rating-large" data-reviewer="higherCellF">
                    <span class="star-large" data-rating="1">☆</span>
                    <span class="star-large" data-rating="2">☆</span>
                    <span class="star-large" data-rating="3">☆</span>
                    <span class="star-large" data-rating="4">☆</span>
                    <span class="star-large" data-rating="5">☆</span>
                </div>
                <p class="rating-text-large" id="rating-display-${anime.id}-higherCellF">
                    ${ratingHigherCellF ? `${ratingHigherCellF}/5` : ''}
                </p>
            </div>
            <div class="rating-group">
                <h3 class="rating-title">OGAle_:</h3>
                <div class="stars-rating-large" data-reviewer="ogAle">
                    <span class="star-large" data-rating="1">☆</span>
                    <span class="star-large" data-rating="2">☆</span>
                    <span class="star-large" data-rating="3">☆</span>
                    <span class="star-large" data-rating="4">☆</span>
                    <span class="star-large" data-rating="5">☆</span>
                </div>
                <p class="rating-text-large" id="rating-display-${anime.id}-ogAle">
                    ${ratingOGAle ? `${ratingOGAle}/5` : ''}
                </p>
            </div>
            ${isAnimeFullyRated(anime.id) ? `
                <div class="rating-saved-message">
                    ✓ Beide Bewertungen gespeichert! Du kannst jetzt weiter klicken.
                </div>
            ` : ''}
        </div>
    `;
    
    return card;
}

async function renderCurrentAnime() {
    const container = document.getElementById('anime-container');
    
    if (currentIndex >= animeData.length) {
        container.innerHTML = `
            <div class="anime-card finished">
                <div class="finished-message">
                    <h2>🎉 Alle Animes bewertet!</h2>
                    <p>Du hast alle ${animeData.length} Animes erfolgreich bewertet.</p>
                </div>
            </div>
        `;
        document.getElementById('load-more-btn').style.display = 'none';
        return;
    }
    
    const currentAnime = animeData[currentIndex];
    container.innerHTML = '';
    const card = createAnimeCard(currentAnime);
    container.appendChild(card);
    
    attachStarEvents();
    updateLoadMoreButton();
    
    // Load trailer asynchronously
    if (currentAnime.malId) {
        loadTrailerForAnime(currentAnime).catch(console.error);
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function attachStarEvents() {
    const card = document.querySelector('.anime-card');
    if (!card) return;
    
    const animeId = parseInt(card.dataset.animeId);
    const ratingGroups = card.querySelectorAll('.stars-rating-large');
    
    ratingGroups.forEach(group => {
        const reviewer = group.dataset.reviewer;
        const stars = group.querySelectorAll('.star-large');
        const existingRating = getAnimeRating(animeId, reviewer);
        
        // Set existing rating
        if (existingRating) {
            stars.forEach((star, index) => {
                star.classList.toggle('active', index + 1 <= existingRating);
            });
        }
        
        // Attach events
        stars.forEach(star => {
            const rating = parseInt(star.dataset.rating);
            
            star.addEventListener('mouseenter', () => {
                stars.forEach((s, i) => {
                    s.classList.toggle('active', i < rating);
                });
            });
            
            star.addEventListener('mouseleave', () => {
                if (existingRating) {
                    stars.forEach((s, i) => {
                        s.classList.toggle('active', i < existingRating);
                    });
                } else {
                    stars.forEach(s => s.classList.remove('active'));
                }
            });
            
            star.addEventListener('click', () => {
                setAnimeRating(animeId, reviewer, rating);
                
                // Update display
                stars.forEach((s, i) => {
                    s.classList.toggle('active', i < rating);
                });
                
                const ratingDisplay = document.getElementById(`rating-display-${animeId}-${reviewer}`);
                if (ratingDisplay) {
                    ratingDisplay.textContent = `${rating}/5`;
                }
                
                // Show saved message if both rated
                if (isAnimeFullyRated(animeId)) {
                    const ratingSection = card.querySelector('.rating-section-large');
                    let savedMsg = ratingSection.querySelector('.rating-saved-message');
                    if (!savedMsg) {
                        savedMsg = document.createElement('div');
                        savedMsg.className = 'rating-saved-message';
                        ratingSection.appendChild(savedMsg);
                    }
                    savedMsg.textContent = '✓ Beide Bewertungen gespeichert! Du kannst jetzt weiter klicken.';
                }
                
                updateLoadMoreButton();
            });
        });
    });
}

function updateLoadMoreButton() {
    const btn = document.getElementById('load-more-btn');
    if (!btn) return;
    
    if (currentIndex >= animeData.length) {
        btn.style.display = 'none';
        return;
    }
    
    const currentAnime = animeData[currentIndex];
    const fullyRated = isAnimeFullyRated(currentAnime.id);
    
    if (fullyRated) {
        btn.disabled = false;
        btn.querySelector('span').textContent = 'Weiter';
    } else {
        btn.disabled = true;
        btn.querySelector('span').textContent = 'Bitte beide Bewertungen abgeben';
    }
}

async function loadNextAnime() {
    if (currentIndex < animeData.length) {
        const currentAnime = animeData[currentIndex];
        const fullyRated = isAnimeFullyRated(currentAnime.id);
        
        if (!fullyRated) {
            alert('Bitte gib beide Bewertungen (HigherCellF und OGAle_) ab, bevor du weitermachst!');
            return;
        }
    }
    
    currentIndex++;
    await renderCurrentAnime();
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    currentIndex = 0;
    renderCurrentAnime();
    document.getElementById('load-more-btn').addEventListener('click', loadNextAnime);
});

