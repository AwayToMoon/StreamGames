// ============================================
// ANIME BEWERTUNGS-APP
// ============================================

// Anime Daten (50 Animes mit MyAnimeList IDs)
// Cover-URLs werden automatisch über Jikan/AniList APIs geladen für korrekte Bilder
const animeData = [
    { id: 1, malId: 16498, title: "Attack on Titan", cover: "", trailer: "" },
    { id: 2, malId: 38000, title: "Demon Slayer: Kimetsu no Yaiba", cover: "", trailer: "" },
    { id: 3, malId: 31964, title: "My Hero Academia", cover: "", trailer: "" },
    { id: 4, malId: 40748, title: "Jujutsu Kaisen", cover: "", trailer: "" },
    { id: 5, malId: 21, title: "One Piece", cover: "", trailer: "" },
    { id: 6, malId: 20, title: "Naruto", cover: "", trailer: "" },
    { id: 7, malId: 1535, title: "Death Note", cover: "", trailer: "" },
    { id: 8, malId: 5114, title: "Fullmetal Alchemist: Brotherhood", cover: "", trailer: "" },
    { id: 9, malId: 813, title: "Dragon Ball Z", cover: "", trailer: "" },
    { id: 10, malId: 11061, title: "Hunter x Hunter (2011)", cover: "", trailer: "" },
    { id: 11, malId: 22319, title: "Tokyo Ghoul", cover: "", trailer: "" },
    { id: 12, malId: 30276, title: "One Punch Man", cover: "", trailer: "" },
    { id: 13, malId: 32182, title: "Mob Psycho 100", cover: "", trailer: "" },
    { id: 14, malId: 44511, title: "Chainsaw Man", cover: "", trailer: "" },
    { id: 15, malId: 50265, title: "Spy x Family", cover: "", trailer: "" },
    { id: 16, malId: 269, title: "Bleach", cover: "", trailer: "" },
    { id: 17, malId: 6702, title: "Fairy Tail", cover: "", trailer: "" },
    { id: 18, malId: 34572, title: "Black Clover", cover: "", trailer: "" },
    { id: 19, malId: 38691, title: "Dr. Stone", cover: "", trailer: "" },
    { id: 20, malId: 38671, title: "Fire Force", cover: "", trailer: "" },
    { id: 21, malId: 37779, title: "The Promised Neverland", cover: "", trailer: "" },
    { id: 22, malId: 37521, title: "Vinland Saga", cover: "", trailer: "" },
    { id: 23, malId: 34599, title: "Made in Abyss", cover: "", trailer: "" },
    { id: 24, malId: 31240, title: "Re:Zero - Starting Life in Another World", cover: "", trailer: "" },
    { id: 25, malId: 29803, title: "Overlord", cover: "", trailer: "" },
    { id: 26, malId: 37430, title: "That Time I Got Reincarnated as a Slime", cover: "", trailer: "" },
    { id: 27, malId: 11757, title: "Sword Art Online", cover: "", trailer: "" },
    { id: 28, malId: 19815, title: "No Game No Life", cover: "", trailer: "" },
    { id: 29, malId: 30831, title: "KonoSuba: God's Blessing on This Wonderful World!", cover: "", trailer: "" },
    { id: 30, malId: 20583, title: "Haikyuu!!", cover: "", trailer: "" },
    { id: 31, malId: 11771, title: "Kuroko's Basketball", cover: "", trailer: "" },
    { id: 32, malId: 49596, title: "Blue Lock", cover: "", trailer: "" },
    { id: 33, malId: 32281, title: "Your Name", cover: "", trailer: "" },
    { id: 34, malId: 38826, title: "Weathering With You", cover: "", trailer: "" },
    { id: 35, malId: 28851, title: "A Silent Voice", cover: "", trailer: "" },
    { id: 36, malId: 9253, title: "Steins;Gate", cover: "", trailer: "" },
    { id: 37, malId: 1575, title: "Code Geass: Lelouch of the Rebellion", cover: "", trailer: "" },
    { id: 38, malId: 13601, title: "Psycho-Pass", cover: "", trailer: "" },
    { id: 39, malId: 1, title: "Cowboy Bebop", cover: "", trailer: "" },
    { id: 40, malId: 30, title: "Neon Genesis Evangelion", cover: "", trailer: "" },
    { id: 41, malId: 33, title: "Berserk", cover: "", trailer: "" },
    { id: 42, malId: 14719, title: "JoJo's Bizarre Adventure", cover: "", trailer: "" },
    { id: 43, malId: 30694, title: "Dragon Ball Super", cover: "", trailer: "" },
    { id: 44, malId: 34566, title: "Boruto: Naruto Next Generations", cover: "", trailer: "" },
    { id: 45, malId: 42249, title: "Tokyo Revengers", cover: "", trailer: "" },
    { id: 46, malId: 50346, title: "Call of the Night", cover: "", trailer: "" },
    { id: 47, malId: 52211, title: "Mashle: Magic and Muscles", cover: "", trailer: "" },
    { id: 48, malId: 51179, title: "Mushoku Tensei: Jobless Reincarnation", cover: "", trailer: "" },
    { id: 49, malId: 52991, title: "Frieren – Nach dem Ende der Reise", cover: "", trailer: "" },
    { id: 50, malId: 52299, title: "Solo Leveling", cover: "", trailer: "" }
];

// ============================================
// STATE MANAGEMENT
// ============================================

let currentIndex = 0;
let ratings = {}; // Bewertungen nur im Arbeitsspeicher (werden nach Reload zurückgesetzt)
// Struktur: ratings[animeId] = { higherCellF: rating, ogAle: rating }
let appInitialized = false;

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
// COVER IMAGE API FUNCTIONS
// ============================================

// Fetch cover from Jikan API (MyAnimeList) - Most reliable and best quality
async function fetchCoverFromJikan(malId) {
    try {
        // Add delay to respect rate limits (3 requests per second)
        await new Promise(resolve => setTimeout(resolve, 350));
        
        const response = await fetch(`https://api.jikan.moe/v4/anime/${malId}/full`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        });

        if (!response.ok) {
            // If rate limited, try again after delay
            if (response.status === 429) {
                await new Promise(resolve => setTimeout(resolve, 1000));
                const retryResponse = await fetch(`https://api.jikan.moe/v4/anime/${malId}/full`, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                    }
                });
                if (!retryResponse.ok) return null;
                const retryData = await retryResponse.json();
                if (retryData.data?.images?.jpg?.large_image_url) {
                    return retryData.data.images.jpg.large_image_url;
                } else if (retryData.data?.images?.jpg?.image_url) {
                    return retryData.data.images.jpg.image_url;
                }
            }
            return null;
        }

        const data = await response.json();
        
        // Jikan API provides high-quality images - prefer large_image_url
        if (data.data?.images?.jpg?.large_image_url) {
            return data.data.images.jpg.large_image_url;
        } else if (data.data?.images?.jpg?.image_url) {
            return data.data.images.jpg.image_url;
        }
        return null;
    } catch (error) {
        console.error('Jikan API error (cover):', error);
        return null;
    }
}

// Fetch cover from AniList API - High quality backup option
async function fetchCoverFromAniList(malId) {
    try {
        const query = `
            query ($id: Int, $type: MediaType) {
                Media(idMal: $id, type: $type) {
                    coverImage {
                        extraLarge
                        large
                        medium
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
        
        // Try extraLarge first (best quality), then large, then medium
        if (data.data?.Media?.coverImage?.extraLarge) {
            return data.data.Media.coverImage.extraLarge;
        } else if (data.data?.Media?.coverImage?.large) {
            return data.data.Media.coverImage.large;
        } else if (data.data?.Media?.coverImage?.medium) {
            return data.data.Media.coverImage.medium;
        }
        return null;
    } catch (error) {
        console.error('AniList API error (cover):', error);
        return null;
    }
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

// Legacy function kept for compatibility, but loadCoverForAnime handles everything now
async function handleImageError(imgElement, animeId, malId, title) {
    const wrapper = imgElement.closest('.anime-cover-wrapper');
    if (!wrapper) return;
    
    const loadingDiv = wrapper.querySelector('.anime-cover-loading');
    if (loadingDiv) {
        loadingDiv.textContent = '🔄 Versuche alternatives Bild...';
    }
    
    // Try Jikan API first, then AniList API if we have a malId
    if (malId) {
        try {
            // Try Jikan API (best quality)
            let coverUrl = await fetchCoverFromJikan(malId);
            if (coverUrl) {
                const works = await testImageUrl(coverUrl);
                if (works) {
                    imgElement.src = coverUrl;
                    imgElement.onerror = () => {
                        showPlaceholderImage(imgElement, wrapper, title);
                    };
                    if (loadingDiv) loadingDiv.style.display = 'none';
                    return;
                }
            }
            
            // Try AniList API as backup
            coverUrl = await fetchCoverFromAniList(malId);
            if (coverUrl) {
                const works = await testImageUrl(coverUrl);
                if (works) {
                    imgElement.src = coverUrl;
                    imgElement.onerror = () => {
                        showPlaceholderImage(imgElement, wrapper, title);
                    };
                    if (loadingDiv) loadingDiv.style.display = 'none';
                    return;
                }
            }
        } catch (error) {
            console.error('Error fetching cover from APIs:', error);
        }
    }
    
    // Final fallback to placeholder
    showPlaceholderImage(imgElement, wrapper, title);
}

function showPlaceholderImage(imgElement, wrapper, title) {
    const loadingDiv = wrapper.querySelector('.anime-cover-loading');
    const placeholderUrl = `https://via.placeholder.com/250x395/1a1f2e/7aa2ff?text=${encodeURIComponent(title)}`;
    imgElement.src = placeholderUrl;
    imgElement.onerror = null; // Prevent infinite loop
    if (loadingDiv) loadingDiv.style.display = 'none';
}

async function testImageUrl(url) {
    return new Promise((resolve) => {
        if (!url) {
            resolve(false);
            return;
        }
        const img = new Image();
        let resolved = false;
        
        const cleanup = () => {
            if (!resolved) {
                resolved = true;
                img.onload = null;
                img.onerror = null;
            }
        };
        
        img.onload = () => {
            cleanup();
            resolve(true);
        };
        img.onerror = () => {
            cleanup();
            resolve(false);
        };
        
        // Add timeout
        setTimeout(() => {
            if (!resolved) {
                cleanup();
                resolve(false);
            }
        }, 5000); // Increased timeout to 5 seconds
        
        img.src = url;
    });
}

async function loadCoverForAnime(anime) {
    const card = document.querySelector(`[data-anime-id="${anime.id}"]`);
    if (!card) return;
    
    const img = card.querySelector('.anime-cover');
    const wrapper = card.querySelector('.anime-cover-wrapper');
    const loadingDiv = wrapper?.querySelector('.anime-cover-loading');
    
    if (!img || !wrapper || !anime.malId) {
        if (!anime.malId && loadingDiv) {
            loadingDiv.textContent = '⚠️ Keine MyAnimeList ID';
            showPlaceholderImage(img, wrapper, anime.title);
        }
        return;
    }
    
    // Store expected anime ID to prevent wrong images
    const expectedAnimeId = anime.id;
    const expectedMalId = anime.malId;
    
    // Verify card still matches this anime (prevent race conditions)
    if (parseInt(card.dataset.animeId) !== expectedAnimeId) {
        return; // Card changed, don't load image
    }
    
    if (loadingDiv) loadingDiv.textContent = '🖼️ Lade Bild...';
    
    // Try AniList API first (often faster and more reliable)
    let coverUrl = await fetchCoverFromAniList(anime.malId);
    
    // Verify card still matches
    if (parseInt(card.dataset.animeId) !== expectedAnimeId) {
        return; // Card changed, don't load image
    }
    
    // If AniList fails, try Jikan API (MyAnimeList official API)
    if (!coverUrl) {
        if (loadingDiv) loadingDiv.textContent = '🔄 Versuche Jikan API...';
        coverUrl = await fetchCoverFromJikan(anime.malId);
        
        // Verify card still matches
        if (parseInt(card.dataset.animeId) !== expectedAnimeId) {
            return; // Card changed, don't load image
        }
    }
    
    // If both APIs failed, try direct MyAnimeList URL patterns
    if (!coverUrl) {
        if (loadingDiv) loadingDiv.textContent = '🔄 Versuche alternatives Bild...';
        
        // Try different MyAnimeList CDN URL patterns
        const urlPatterns = [
            `https://cdn.myanimelist.net/images/anime/${Math.floor(anime.malId / 1000)}/${anime.malId}.jpg`,
            `https://cdn.myanimelist.net/images/anime/${Math.floor(anime.malId / 100)}/${anime.malId}.jpg`,
            `https://cdn.myanimelist.net/images/anime/${anime.malId}.jpg`
        ];
        
        for (const url of urlPatterns) {
            // Verify card still matches before each attempt
            if (parseInt(card.dataset.animeId) !== expectedAnimeId) {
                return; // Card changed, don't load image
            }
            
            const works = await testImageUrl(url);
            if (works) {
                coverUrl = url;
                break;
            }
        }
    }
    
    // Final verification before loading image
    if (parseInt(card.dataset.animeId) !== expectedAnimeId) {
        return; // Card changed, don't load image
    }
    
    // Set up load handler
    img.onload = () => {
        // Verify this is still the correct anime before hiding loading
        if (parseInt(card.dataset.animeId) === expectedAnimeId) {
            if (loadingDiv) loadingDiv.style.display = 'none';
        }
    };
    
    // Set up error handler - try placeholder if image fails
    img.onerror = () => {
        // Verify this is still the correct anime
        if (parseInt(card.dataset.animeId) === expectedAnimeId) {
            if (loadingDiv) loadingDiv.textContent = '⚠️ Bild konnte nicht geladen werden';
            setTimeout(() => {
                if (parseInt(card.dataset.animeId) === expectedAnimeId) {
                    showPlaceholderImage(img, wrapper, anime.title);
                }
            }, 1000);
        }
    };
    
    // Load the image
    if (coverUrl) {
        img.src = coverUrl;
        // Store malId in image data attribute for verification
        img.dataset.malId = expectedMalId;
    } else {
        // No cover found, show placeholder
        if (parseInt(card.dataset.animeId) === expectedAnimeId) {
            if (loadingDiv) loadingDiv.textContent = '⚠️ Kein Bild gefunden';
            showPlaceholderImage(img, wrapper, anime.title);
        }
    }
}

async function tryNextCoverSource(img, wrapper, loadingDiv, anime, attempt, isLoadedCallback) {
    if (isLoadedCallback && isLoadedCallback()) {
        return; // Already loaded
    }
    
    // Strategy based on attempt number:
    // Attempt 0: Try Jikan API
    // Attempt 1: Try AniList API  
    // Attempt 2: Try direct MyAnimeList URL (if not already tried)
    // Attempt 3+: Show placeholder
    
    if (attempt === 0 && anime.malId) {
        // Try Jikan API
        if (loadingDiv) loadingDiv.textContent = '🔄 Versuche Jikan API...';
        try {
            const coverUrl = await fetchCoverFromJikan(anime.malId);
            if (coverUrl) {
                const works = await testImageUrl(coverUrl);
                if (works) {
                    img.src = coverUrl;
                    await new Promise(resolve => setTimeout(resolve, 500));
                    if (img.complete && img.naturalHeight > 0) {
                        return; // Success!
                    }
                }
            }
        } catch (error) {
            console.error('Error fetching cover from Jikan:', error);
        }
    }
    
    if (attempt === 1 && anime.malId) {
        // Try AniList API
        if (loadingDiv) loadingDiv.textContent = '🔄 Versuche AniList API...';
        try {
            const coverUrl = await fetchCoverFromAniList(anime.malId);
            if (coverUrl) {
                const works = await testImageUrl(coverUrl);
                if (works) {
                    img.src = coverUrl;
                    await new Promise(resolve => setTimeout(resolve, 500));
                    if (img.complete && img.naturalHeight > 0) {
                        return; // Success!
                    }
                }
            }
        } catch (error) {
            console.error('Error fetching cover from AniList:', error);
        }
    }
    
    if (attempt === 2 && anime.cover) {
        // Try direct MyAnimeList URL as last resort
        if (loadingDiv) loadingDiv.textContent = '🔄 Versuche alternatives Bild...';
        const malUrlWorks = await testImageUrl(anime.cover);
        if (malUrlWorks) {
            img.src = anime.cover;
            await new Promise(resolve => setTimeout(resolve, 500));
            if (img.complete && img.naturalHeight > 0) {
                return; // Success!
            }
        }
    }
    
    // If all attempts failed and image still not loaded
    if (!isLoadedCallback || !isLoadedCallback()) {
        if (loadingDiv) loadingDiv.textContent = '⚠️ Bild konnte nicht geladen werden';
        setTimeout(() => {
            if (!isLoadedCallback || !isLoadedCallback()) {
                showPlaceholderImage(img, wrapper, anime.title);
            }
        }, 1000);
    }
}

// This function is no longer used, replaced by tryNextCoverSource
// Keeping for backwards compatibility
async function tryAniListFallback(img, wrapper, loadingDiv, anime, isLoadedCallback) {
    await tryNextCoverSource(img, wrapper, loadingDiv, anime, 0, isLoadedCallback || (() => false));
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
            loadingDiv.innerHTML = '<p class="trailer-error">⚠️ Trailer nicht verfügbar. Bitte auf YouTube schauen. ⚠️</p>';
            loadingDiv.classList.remove('with-iframe');
        }
    } else {
        loadingDiv.innerHTML = '<p class="trailer-error">⚠️ Trailer nicht verfügbar. Bitte auf YouTube schauen. ⚠️</p>';
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
            <div class="anime-cover-wrapper">
                <div class="anime-cover-loading">🖼️ Lade Bild...</div>
                <img src="" alt="${anime.title}" class="anime-cover" 
                     loading="lazy"
                     data-anime-id="${anime.id}"
                     data-mal-id="${anime.malId || ''}"
                     data-title="${anime.title.replace(/"/g, '&quot;')}">
            </div>
            <div class="anime-info">
                <h2 class="anime-title">${anime.title}</h2>
            </div>
        </div>
        <div class="rating-section-large">
            <div class="rating-group">
                <h3 class="rating-title">HigherCellF</h3>
                <div class="stars-rating-large" data-reviewer="higherCellF">
                    <span class="star-large" data-rating="1">☆</span>
                    <span class="star-large" data-rating="2">☆</span>
                    <span class="star-large" data-rating="3">☆</span>
                    <span class="star-large" data-rating="4">☆</span>
                    <span class="star-large" data-rating="5">☆</span>
                </div>
                <p class="rating-text-large" id="rating-display-${anime.id}-higherCellF">
                    ${ratingHigherCellF ? `${ratingHigherCellF}/5` : 'Wähle deine Bewertung'}
                </p>
            </div>
            
            <div class="progress-section-inline">
                <div class="progress-info-inline">
                    <span id="progress-text">0 / 50 bewertet</span>
                    <span id="progress-percentage">0%</span>
                </div>
                <div class="progress-bar" style="display: none;">
                    <div id="progress-fill"></div>
                </div>
            </div>
            
            <div class="rating-group">
                <h3 class="rating-title">OGAle_</h3>
                <div class="stars-rating-large" data-reviewer="ogAle">
                    <span class="star-large" data-rating="1">☆</span>
                    <span class="star-large" data-rating="2">☆</span>
                    <span class="star-large" data-rating="3">☆</span>
                    <span class="star-large" data-rating="4">☆</span>
                    <span class="star-large" data-rating="5">☆</span>
                </div>
                <p class="rating-text-large" id="rating-display-${anime.id}-ogAle">
                    ${ratingOGAle ? `${ratingOGAle}/5` : 'Wähle deine Bewertung'}
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
        const skipBtn = document.getElementById('skip-btn');
        if (skipBtn) skipBtn.style.display = 'none';
        updateProgressBar();
        return;
    }
    
    const currentAnime = animeData[currentIndex];
    container.innerHTML = '';
    const card = createAnimeCard(currentAnime);
    container.appendChild(card);
    
    attachStarEvents();
    updateLoadMoreButton();
    updateProgressBar();
    
    // Load cover asynchronously
    loadCoverForAnime(currentAnime).catch(console.error);
    
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
        
        // Helper function to get current rating dynamically
        const getCurrentRating = () => getAnimeRating(animeId, reviewer);
        
        // Set existing rating on load
        const existingRating = getCurrentRating();
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
                const currentRating = getCurrentRating();
                if (currentRating) {
                    stars.forEach((s, i) => {
                        s.classList.toggle('active', i < currentRating);
                    });
                } else {
                    stars.forEach(s => s.classList.remove('active'));
                }
            });
            
            star.addEventListener('click', () => {
                setAnimeRating(animeId, reviewer, rating);
                
                // Update display - set all stars up to rating as active
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
                updateProgressBar();
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

function updateProgressBar() {
    const progressText = document.getElementById('progress-text');
    const progressPercentage = document.getElementById('progress-percentage');
    const progressFill = document.getElementById('progress-fill');
    
    if (!progressText || !progressPercentage || !progressFill) return;
    
    const total = animeData.length;
    let completed = Math.min(currentIndex, total);
    
    if (currentIndex < total) {
        const currentAnime = animeData[currentIndex];
        if (currentAnime && isAnimeFullyRated(currentAnime.id)) {
            completed = Math.min(completed + 1, total);
        }
    }
    
    const percentage = total ? Math.round((completed / total) * 100) : 0;
    
    progressText.textContent = `${completed} / ${total} bewertet`;
    progressPercentage.textContent = `${percentage}%`;
    progressFill.style.width = `${percentage}%`;
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

async function skipAnime() {
    if (currentIndex >= animeData.length) {
        return;
    }
    
    // Skip to next anime without requiring ratings
    currentIndex++;
    await renderCurrentAnime();
}

// ============================================
// INITIALIZATION
// ============================================

function initializeApp() {
    if (appInitialized) return;
    appInitialized = true;
    
    renderCurrentAnime();
    
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (loadMoreBtn && !loadMoreBtn.dataset.bound) {
        loadMoreBtn.addEventListener('click', loadNextAnime);
        loadMoreBtn.dataset.bound = 'true';
    }
    
    const skipBtn = document.getElementById('skip-btn');
    if (skipBtn && !skipBtn.dataset.bound) {
        skipBtn.addEventListener('click', skipAnime);
        skipBtn.dataset.bound = 'true';
    }
}

function setupIntroModal() {
    const modal = document.getElementById('intro-modal');
    const confirmBtn = document.getElementById('intro-confirm-btn');
    
    if (!modal || !confirmBtn) {
        initializeApp();
        return;
    }
    
    modal.classList.add('visible');
    
    confirmBtn.addEventListener('click', () => {
        modal.classList.remove('visible');
        initializeApp();
    }, { once: true });
}

// Make handleImageError globally available for inline onerror handler
window.handleImageError = handleImageError;

document.addEventListener('DOMContentLoaded', () => {
    currentIndex = 0;
    setupIntroModal();
});


