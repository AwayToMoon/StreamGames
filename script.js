// Anime Characters Data
const characters = [
    // Boys
    { id: 1, name: "Naruto Uzumaki", series: "Naruto", gender: "boy", emoji: "🍜" },
    { id: 2, name: "Goku", series: "Dragon Ball Z", gender: "boy", emoji: "🐉" },
    { id: 3, name: "Luffy", series: "One Piece", gender: "boy", emoji: "🏴‍☠️" },
    { id: 4, name: "Ichigo Kurosaki", series: "Bleach", gender: "boy", emoji: "⚔️" },
    { id: 5, name: "Eren Yeager", series: "Attack on Titan", gender: "boy", emoji: "🗡️" },
    { id: 6, name: "Levi Ackerman", series: "Attack on Titan", gender: "boy", emoji: "⚡" },
    { id: 7, name: "Tanjiro Kamado", series: "Demon Slayer", gender: "boy", emoji: "🔥" },
    { id: 8, name: "Zenitsu Agatsuma", series: "Demon Slayer", gender: "boy", emoji: "⚡" },
    { id: 9, name: "Yuji Itadori", series: "Jujutsu Kaisen", gender: "boy", emoji: "👊" },
    { id: 10, name: "Gojo Satoru", series: "Jujutsu Kaisen", gender: "boy", emoji: "😎" },
    { id: 11, name: "Deku", series: "My Hero Academia", gender: "boy", emoji: "💪" },
    { id: 12, name: "Kakashi Hatake", series: "Naruto", gender: "boy", emoji: "📖" },
    { id: 13, name: "Sasuke Uchiha", series: "Naruto", gender: "boy", emoji: "👁️" },
    { id: 14, name: "Light Yagami", series: "Death Note", gender: "boy", emoji: "📓" },
    { id: 15, name: "L Lawliet", series: "Death Note", gender: "boy", emoji: "🍰" },
    { id: 16, name: "Edward Elric", series: "Fullmetal Alchemist", gender: "boy", emoji: "⚙️" },
    { id: 17, name: "Spike Spiegel", series: "Cowboy Bebop", gender: "boy", emoji: "🚀" },
    { id: 18, name: "Killua Zoldyck", series: "Hunter x Hunter", gender: "boy", emoji: "⚡" },
    { id: 19, name: "Gon Freecss", series: "Hunter x Hunter", gender: "boy", emoji: "🎣" },
    { id: 20, name: "Saitama", series: "One Punch Man", gender: "boy", emoji: "👊" },
    
    // Girls
    { id: 21, name: "Sakura Haruno", series: "Naruto", gender: "girl", emoji: "🌸" },
    { id: 22, name: "Hinata Hyuga", series: "Naruto", gender: "girl", emoji: "👁️" },
    { id: 23, name: "Nezuko Kamado", series: "Demon Slayer", gender: "girl", emoji: "👹" },
    { id: 24, name: "Mikasa Ackerman", series: "Attack on Titan", gender: "girl", emoji: "🔪" },
    { id: 25, name: "Nobara Kugisaki", series: "Jujutsu Kaisen", gender: "girl", emoji: "🔨" },
    { id: 26, name: "Uraraka Ochaco", series: "My Hero Academia", gender: "girl", emoji: "✨" },
    { id: 27, name: "Asuna", series: "Sword Art Online", gender: "girl", emoji: "⚔️" },
    { id: 28, name: "Erza Scarlet", series: "Fairy Tail", gender: "girl", emoji: "🗡️" },
    { id: 29, name: "Lucy Heartfilia", series: "Fairy Tail", gender: "girl", emoji: "⭐" },
    { id: 30, name: "Winry Rockbell", series: "Fullmetal Alchemist", gender: "girl", emoji: "🔧" },
    
    // More Boys
    { id: 31, name: "Vegeta", series: "Dragon Ball Z", gender: "boy", emoji: "👑" },
    { id: 32, name: "Zoro", series: "One Piece", gender: "boy", emoji: "🗡️" },
    { id: 33, name: "Sanji", series: "One Piece", gender: "boy", emoji: "👨‍🍳" },
    { id: 34, name: "Ace", series: "One Piece", gender: "boy", emoji: "🔥" },
    { id: 35, name: "Itachi Uchiha", series: "Naruto", gender: "boy", emoji: "👁️" },
    { id: 36, name: "Shikamaru Nara", series: "Naruto", gender: "boy", emoji: "☁️" },
    { id: 37, name: "Armin Arlert", series: "Attack on Titan", gender: "boy", emoji: "🧠" },
    { id: 38, name: "Inosuke Hashibira", series: "Demon Slayer", gender: "boy", emoji: "🐗" },
    { id: 39, name: "Megumi Fushiguro", series: "Jujutsu Kaisen", gender: "boy", emoji: "🐕" },
    { id: 40, name: "Sukuna", series: "Jujutsu Kaisen", gender: "boy", emoji: "👹" },
    { id: 41, name: "Bakugo", series: "My Hero Academia", gender: "boy", emoji: "💥" },
    { id: 42, name: "Todoroki", series: "My Hero Academia", gender: "boy", emoji: "❄️" },
    { id: 43, name: "All Might", series: "My Hero Academia", gender: "boy", emoji: "💪" },
    { id: 44, name: "Roy Mustang", series: "Fullmetal Alchemist", gender: "boy", emoji: "🔥" },
    { id: 45, name: "Alphonse Elric", series: "Fullmetal Alchemist", gender: "boy", emoji: "🛡️" },
    { id: 46, name: "Hisoka", series: "Hunter x Hunter", gender: "boy", emoji: "🃏" },
    { id: 47, name: "Kurapika", series: "Hunter x Hunter", gender: "boy", emoji: "👁️" },
    { id: 48, name: "Genos", series: "One Punch Man", gender: "boy", emoji: "🤖" },
    { id: 49, name: "Kirito", series: "Sword Art Online", gender: "boy", emoji: "⚔️" },
    { id: 50, name: "Lelouch", series: "Code Geass", gender: "boy", emoji: "👑" },
    { id: 51, name: "Roronoa Zoro", series: "One Piece", gender: "boy", emoji: "🗡️" },
    { id: 53, name: "Asta", series: "Black Clover", gender: "boy", emoji: "⚔️" },
    { id: 54, name: "Yami Sukehiro", series: "Black Clover", gender: "boy", emoji: "🌑" },
    { id: 55, name: "Meliodas", series: "Seven Deadly Sins", gender: "boy", emoji: "😈" },
    { id: 56, name: "Ban", series: "Seven Deadly Sins", gender: "boy", emoji: "🍺" },
    { id: 57, name: "Escanor", series: "Seven Deadly Sins", gender: "boy", emoji: "☀️" },
    { id: 58, name: "Rimuru Tempest", series: "That Time I Got Reincarnated", gender: "boy", emoji: "💧" },
    { id: 59, name: "Subaru", series: "Re:Zero", gender: "boy", emoji: "🔄" },
    { id: 60, name: "Kazuma", series: "Konosuba", gender: "boy", emoji: "💸" },
    
    // More Girls
    { id: 61, name: "Zero Two", series: "Darling in the Franxx", gender: "girl", emoji: "🌸" },
    { id: 62, name: "Rem", series: "Re:Zero", gender: "girl", emoji: "💙" },
    { id: 63, name: "Emilia", series: "Re:Zero", gender: "girl", emoji: "💜" },
    { id: 64, name: "Aqua", series: "Konosuba", gender: "girl", emoji: "💧" },
    { id: 65, name: "Megumin", series: "Konosuba", gender: "girl", emoji: "💥" },
    { id: 66, name: "Darkness", series: "Konosuba", gender: "girl", emoji: "🛡️" },
    { id: 67, name: "Yor Forger", series: "Spy x Family", gender: "girl", emoji: "🗡️" },
    { id: 68, name: "Anya Forger", series: "Spy x Family", gender: "girl", emoji: "🥜" },
    { id: 69, name: "Power", series: "Chainsaw Man", gender: "girl", emoji: "👹" },
    { id: 70, name: "Makima", series: "Chainsaw Man", gender: "girl", emoji: "👁️" },
    { id: 71, name: "Kobeni", series: "Chainsaw Man", gender: "girl", emoji: "😰" },
    { id: 72, name: "Maki Zenin", series: "Jujutsu Kaisen", gender: "girl", emoji: "⚔️" },
    { id: 73, name: "Yuki Tsukumo", series: "Jujutsu Kaisen", gender: "girl", emoji: "⭐" },
    { id: 74, name: "Momo Yaoyorozu", series: "My Hero Academia", gender: "girl", emoji: "✨" },
    { id: 75, name: "Toga Himiko", series: "My Hero Academia", gender: "girl", emoji: "🔪" },
    { id: 76, name: "Mitsuri Kanroji", series: "Demon Slayer", gender: "girl", emoji: "💕" },
    { id: 77, name: "Shinobu Kocho", series: "Demon Slayer", gender: "girl", emoji: "🦋" },
    { id: 78, name: "Kanao Tsuyuri", series: "Demon Slayer", gender: "girl", emoji: "🌸" },
    { id: 79, name: "Historia Reiss", series: "Attack on Titan", gender: "girl", emoji: "👑" },
    { id: 80, name: "Annie Leonhart", series: "Attack on Titan", gender: "girl", emoji: "🥊" },
    { id: 81, name: "Yoruichi", series: "Bleach", gender: "girl", emoji: "🐱" },
    { id: 82, name: "Rukia Kuchiki", series: "Bleach", gender: "girl", emoji: "❄️" },
    { id: 83, name: "Orihime Inoue", series: "Bleach", gender: "girl", emoji: "🍊" },
    { id: 84, name: "Nami", series: "One Piece", gender: "girl", emoji: "🍊" },
    { id: 85, name: "Robin", series: "One Piece", gender: "girl", emoji: "🌺" },
    { id: 86, name: "Boa Hancock", series: "One Piece", gender: "girl", emoji: "💋" },
    { id: 87, name: "Tsunade", series: "Naruto", gender: "girl", emoji: "💎" },
    { id: 88, name: "Temari", series: "Naruto", gender: "girl", emoji: "🌪️" },
    { id: 89, name: "Mei Terumi", series: "Naruto", gender: "girl", emoji: "💧" },
    { id: 90, name: "Raphtalia", series: "The Rising of the Shield Hero", gender: "girl", emoji: "🦝" },
];

// Rankings: unranked, s-tier, a-tier, b-tier, c-tier, d-tier
let rankings = {
    'unranked': [],
    's-tier': [],
    'a-tier': [],
    'b-tier': [],
    'c-tier': [],
    'd-tier': []
};

let isDragging = false;

// DOM Elements
const rankingView = document.getElementById('ranking-view');

// Update connection status
function updateConnectionStatus(connected, isRealtime = false) {
    const statusEl = document.getElementById('connection-status');
    const textEl = document.getElementById('connection-text');
    
    if (!statusEl || !textEl) return;
    
    if (connected) {
        statusEl.className = 'connection-status connected';
        textEl.textContent = isRealtime ? '🔴 Live' : 'Verbunden';
    } else {
        statusEl.className = 'connection-status disconnected';
        textEl.textContent = 'Offline';
    }
}

// Load rankings from Firebase with real-time updates
function loadRankings() {
    // Check if Firebase is available
    if (typeof db === 'undefined' || !db) {
        console.warn('Firebase not available, using localStorage fallback');
        updateConnectionStatus(false);
        loadRankingsFromLocalStorage();
        return;
    }
    
    updateConnectionStatus(true, false);
    const rankingsRef = db.collection('anime-rankings').doc('main');
    let isFirstLoad = true;
    
    // Real-time listener - aktualisiert automatisch bei Änderungen von anderen Benutzern
    rankingsRef.onSnapshot((doc) => {
        updateConnectionStatus(true, true);
        
        if (doc.exists()) {
            const data = doc.data();
            const oldRankings = JSON.parse(JSON.stringify(rankings));
            
            // Migrate old data if needed
            rankings = {
                'unranked': data.unranked || [],
                's-tier': data.op || data['s-tier'] || [],
                'a-tier': data.stark || data['a-tier'] || [],
                'b-tier': data.mittel || data['b-tier'] || [],
                'c-tier': data.schwach || data['c-tier'] || [],
                'd-tier': data.unnoetig || data['sehr-schwach'] || data['d-tier'] || []
            };
            
            // Ensure all tiers exist
            if (!rankings['s-tier']) rankings['s-tier'] = [];
            if (!rankings['a-tier']) rankings['a-tier'] = [];
            if (!rankings['b-tier']) rankings['b-tier'] = [];
            if (!rankings['c-tier']) rankings['c-tier'] = [];
            if (!rankings['d-tier']) rankings['d-tier'] = [];
            
            // Ensure all characters are in a category (add missing ones to unranked)
            const allRankedIds = [
                ...rankings.unranked,
                ...rankings['s-tier'],
                ...rankings['a-tier'],
                ...rankings['b-tier'],
                ...rankings['c-tier'],
                ...rankings['d-tier']
            ];
            
            const allCharacterIds = characters.map(c => c.id);
            const missingIds = allCharacterIds.filter(id => !allRankedIds.includes(id));
            
            if (missingIds.length > 0) {
                rankings.unranked = [...rankings.unranked, ...missingIds];
                saveRankings();
            }
            
            // Show notification if update came from another user (not first load)
            if (!isFirstLoad && JSON.stringify(oldRankings) !== JSON.stringify(rankings)) {
                showUpdateNotification();
            }
            
            isFirstLoad = false;
            renderRankings();
        } else {
            // Firebase document doesn't exist - check if we have localStorage data to migrate
            const saved = localStorage.getItem('anime-rankings');
            const version = localStorage.getItem('anime-rankings-version');
            
            if (saved) {
                // Migrate from localStorage to Firebase (even if version is different)
                try {
                    rankings = JSON.parse(saved);
                    
                    // Migrate old tier names to new ones if needed
                    if (rankings.op) {
                        rankings['s-tier'] = rankings.op;
                        delete rankings.op;
                    }
                    if (rankings.stark) {
                        rankings['a-tier'] = rankings.stark;
                        delete rankings.stark;
                    }
                    if (rankings.mittel) {
                        rankings['b-tier'] = rankings.mittel;
                        delete rankings.mittel;
                    }
                    if (rankings.schwach) {
                        rankings['c-tier'] = rankings.schwach;
                        delete rankings.schwach;
                    }
                    if (rankings.unnoetig || rankings['sehr-schwach']) {
                        rankings['d-tier'] = rankings.unnoetig || rankings['sehr-schwach'] || [];
                        delete rankings.unnoetig;
                        delete rankings['sehr-schwach'];
                    }
                    
                    // Ensure all tiers exist
                    if (!rankings.unranked) rankings.unranked = [];
                    if (!rankings['s-tier']) rankings['s-tier'] = [];
                    if (!rankings['a-tier']) rankings['a-tier'] = [];
                    if (!rankings['b-tier']) rankings['b-tier'] = [];
                    if (!rankings['c-tier']) rankings['c-tier'] = [];
                    if (!rankings['d-tier']) rankings['d-tier'] = [];
                    
                    // Ensure all characters are in a category
                    const allRankedIds = [
                        ...rankings.unranked,
                        ...rankings['s-tier'],
                        ...rankings['a-tier'],
                        ...rankings['b-tier'],
                        ...rankings['c-tier'],
                        ...rankings['d-tier']
                    ];
                    
                    const allCharacterIds = characters.map(c => c.id);
                    const missingIds = allCharacterIds.filter(id => !allRankedIds.includes(id));
                    
                    if (missingIds.length > 0) {
                        rankings.unranked = [...rankings.unranked, ...missingIds];
                    }
                    
                    // Save migrated data to Firebase
                    saveRankings();
                    renderRankings();
                } catch (e) {
                    console.error('Error migrating localStorage data:', e);
                    // If migration fails, start fresh
                    rankings = {
                        'unranked': characters.map(c => c.id),
                        's-tier': [],
                        'a-tier': [],
                        'b-tier': [],
                        'c-tier': [],
                        'd-tier': []
                    };
                    saveRankings();
                    renderRankings();
                }
            } else {
                // First time - initialize with all characters in unranked
                rankings = {
                    'unranked': characters.map(c => c.id),
                    's-tier': [],
                    'a-tier': [],
                    'b-tier': [],
                    'c-tier': [],
                    'd-tier': []
                };
                saveRankings();
                renderRankings();
            }
            isFirstLoad = false;
        }
    }, (error) => {
        console.error('Error loading rankings from Firebase:', error);
        updateConnectionStatus(false);
        // Fallback to localStorage if Firebase fails
        loadRankingsFromLocalStorage();
    });
}

// Show notification when rankings are updated by another user
function showUpdateNotification() {
    // Create a temporary notification
    const notification = document.createElement('div');
    notification.className = 'update-notification';
    notification.innerHTML = '<i class="fas fa-sync-alt"></i> Rankings wurden aktualisiert!';
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Fallback: Load from localStorage if Firebase is not available
function loadRankingsFromLocalStorage() {
    const saved = localStorage.getItem('anime-rankings');
    const version = localStorage.getItem('anime-rankings-version');
    
    if (saved && version === '3.0') {
        rankings = JSON.parse(saved);
    } else {
        // Reset all characters to unranked (first load)
        rankings = {
            'unranked': characters.map(c => c.id),
            's-tier': [],
            'a-tier': [],
            'b-tier': [],
            'c-tier': [],
            'd-tier': []
        };
        localStorage.setItem('anime-rankings-version', '3.0');
        saveRankings();
    }
    
    // Ensure all tiers exist
    if (!rankings['s-tier']) rankings['s-tier'] = [];
    if (!rankings['a-tier']) rankings['a-tier'] = [];
    if (!rankings['b-tier']) rankings['b-tier'] = [];
    if (!rankings['c-tier']) rankings['c-tier'] = [];
    if (!rankings['d-tier']) rankings['d-tier'] = [];
    
    renderRankings();
}

// Save rankings to Firebase (and localStorage as backup)
function saveRankings() {
    updateCounts();
    
    // Save to Firebase if available
    if (typeof db !== 'undefined' && db) {
        const rankingsRef = db.collection('anime-rankings').doc('main');
        
        rankingsRef.set({
            unranked: rankings.unranked,
            's-tier': rankings['s-tier'],
            'a-tier': rankings['a-tier'],
            'b-tier': rankings['b-tier'],
            'c-tier': rankings['c-tier'],
            'd-tier': rankings['d-tier'],
            lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true })
        .catch((error) => {
            console.error('Error saving rankings to Firebase:', error);
            // Fallback to localStorage
            localStorage.setItem('anime-rankings', JSON.stringify(rankings));
        });
    } else {
        // Fallback to localStorage if Firebase is not available
        localStorage.setItem('anime-rankings', JSON.stringify(rankings));
    }
}

// Update count badges
function updateCounts() {
    document.getElementById('count-unranked').textContent = rankings.unranked.length;
    document.getElementById('count-s-tier').textContent = rankings['s-tier'].length;
    document.getElementById('count-a-tier').textContent = rankings['a-tier'].length;
    document.getElementById('count-b-tier').textContent = rankings['b-tier'].length;
    document.getElementById('count-c-tier').textContent = rankings['c-tier'].length;
    document.getElementById('count-d-tier').textContent = rankings['d-tier'].length;
}

// Render Rankings
function renderRankings() {
    const rankTypes = ['unranked', 's-tier', 'a-tier', 'b-tier', 'c-tier', 'd-tier'];
    
    rankTypes.forEach(rank => {
        const list = document.getElementById(`list-${rank}`);
        if (list) {
            list.innerHTML = '';
            
            rankings[rank].forEach(charId => {
                const char = characters.find(c => c.id === charId);
                if (char) {
                    const card = createRankingCard(char, rank);
                    list.appendChild(card);
                }
            });
        }
    });
    
    updateCounts();
}

// Open Google image search for character
function searchCharacter(char) {
    const searchQuery = encodeURIComponent(`${char.name} ${char.series} anime`);
    window.open(`https://www.google.com/search?tbm=isch&q=${searchQuery}`, '_blank');
}

// Create ranking card
function createRankingCard(char, rank) {
    const card = document.createElement('div');
    card.className = 'ranking-card';
    card.draggable = true;
    card.dataset.charId = char.id;
    card.dataset.currentRank = rank;
    
    card.innerHTML = `
        <div class="ranking-card-emoji">${char.emoji}</div>
        <div class="ranking-card-info">
            <div class="ranking-card-name">${char.name}</div>
            <div class="ranking-card-series">${char.series}</div>
        </div>
    `;
    
    card.addEventListener('dragstart', drag);
    card.addEventListener('dragend', dragEnd);
    
    // Add click handler for Google search
    card.addEventListener('click', (e) => {
        // Don't trigger if dragging
        if (!isDragging) {
            searchCharacter(char);
        }
    });
    
    // Add cursor pointer style
    card.style.cursor = 'pointer';
    
    return card;
}

// Drag and Drop Functions
function allowDrop(ev) {
    ev.preventDefault();
    ev.currentTarget.classList.add('drag-over');
}

function drag(ev) {
    isDragging = true;
    ev.dataTransfer.setData("text", ev.target.dataset.charId);
    ev.target.classList.add('dragging');
}

function dragEnd(ev) {
    ev.target.classList.remove('dragging');
    document.querySelectorAll('.ranking-list').forEach(list => {
        list.classList.remove('drag-over');
    });
    // Reset dragging flag after a short delay to prevent click event
    setTimeout(() => {
        isDragging = false;
    }, 100);
}

function drop(ev) {
    ev.preventDefault();
    ev.currentTarget.classList.remove('drag-over');
    
    const charId = parseInt(ev.dataTransfer.getData("text"));
    const newRank = ev.currentTarget.parentElement.dataset.rank;
    
    // Remove from old rank
    Object.keys(rankings).forEach(rank => {
        rankings[rank] = rankings[rank].filter(id => id !== charId);
    });
    
    // Add to new rank
    rankings[newRank].push(charId);
    
    saveRankings();
    renderRankings();
}

// Setup Event Listeners
function setupEventListeners() {
    // Welcome modal event listeners
    setupWelcomeModal();
}

// Welcome Modal Functions
function setupWelcomeModal() {
    const welcomeModal = document.getElementById('welcome-modal');
    const closeBtn = document.getElementById('close-welcome-modal');
    const understoodBtn = document.getElementById('welcome-understood');
    const dontShowAgain = document.getElementById('dont-show-again');
    
    // Check if user has seen the welcome modal
    const hasSeenWelcome = localStorage.getItem('has-seen-welcome');
    
    if (!hasSeenWelcome) {
        // Show modal after a short delay
        setTimeout(() => {
            welcomeModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }, 500);
    }
    
    // Understood button - only way to close the modal
    if (understoodBtn) {
        understoodBtn.addEventListener('click', () => {
            closeWelcomeModal(dontShowAgain.checked);
        });
    }
    
    // Hide close button (X) - user must click "Verstanden!"
    if (closeBtn) {
        closeBtn.style.display = 'none';
    }
}

function closeWelcomeModal(dontShowAgain) {
    const welcomeModal = document.getElementById('welcome-modal');
    welcomeModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    if (dontShowAgain) {
        localStorage.setItem('has-seen-welcome', 'true');
    }
}

// Initialize
function init() {
    // Wait a bit for Firebase to initialize
    if (typeof firebase === 'undefined' || typeof db === 'undefined') {
        setTimeout(init, 100);
        return;
    }
    loadRankings();
    setupEventListeners();
}

// Initialize on load
document.addEventListener('DOMContentLoaded', init);
