const w = ["apple", "ant", "a", "an", "alt", "am", "a.m.", "art", "artist", "ammo", "amazing", "ace", "as", "at", "are", "ambient", "alert", "around", "apex", "among", "arm", "arms", "ate", "axe", "age", "ants", "apples", "alive", "amount", "apart", "along", "alone", "acknowledgement", "acknowledgements", "ai",
    "basic", "back", "bat", "born", "bit", "bad", "bow", "bread", "brave", "big", "beam", "beaf", "beat", "bet", "bag", "bags", "brought", "bought", "buy", "bin", "book", "best", "bug", "bugs", "books", "bring", "box", "boxes", "boxel", "boxels", "bones", "bone", "bell", "bells"
    "call", "came", "come", "comes", "can", "canned", "cat", "chat", "chime", "chest", "chestplate", "cent", "century", "cold", "calm", "carry", "carries", "car", "cars", "cinema", "cinematic", "cobweb", "cod", "cow", "child", "children", "corn", "chef", "chip", "chips",
    "duck", "dock", "desk", "doll", "desks", "dell", "dust", "daddy", "dad", "dang", "demon", "demons", "disc", "dog", "dogs", "dirt", "door", "dole", "dope", "dye", "doors", "dolls", "day", "days", "ding", "dings", "dangerous", "die", "died", "duplicate", "duplicating", "duplicated", "duplicator",
    "eat", "east", "em", "english", "elephant", "eats", "essay", "essays", "effect", "effects", "education", "educations", "edition", "either", "each",
    "fake", "felt", "feel", "fill", "feels", "fan", "fun", "famous", "full", "fart", "fall", "falls", "fail", "fails", "failure", "failed", "fast", "fruit", "funk", "fans", "fire", "fox", "foxes",
    "game", "games", "gem", "gems", "guy", "ghost", "gift", "got", "get", "gets", "german", "germany", "gang", "george", "goat", 
    "hit", "hits", "hop", "hopping", "hitting", "hippo", "hello", "hale", "hole", "host", "hostname", "hell", "hells", "hold", "holds", "hey", "hay", "he", "him", "his", "he's", "her", "hers",
    "i", "is", "if", "it", "it's", "israel", "i'm", "i've", "i'd", "its", "ingot", "ingots", "i'll", "ice", "ices", "iced", 
    "japan", "james", "jake", "jam", "jack", "jail", "joy", "job", "jobs", "june", "july", "just", 
    "kelp", "keep", "kit", "kine", "key", "keys", "koala", "kind", "kinda", "know", "kinds", "kick", "knowledge", "knowledges", "knowledgement",
    "lame", "lingo", "lesson", "lessons", "learn", "learns", "learned", "less", "long", "lost", "lose", "life", "lime", "live", "lives", "lie", "lies", "lock", "locked", "light",
    "mine", "my", "may", "maybe", "mask", "male", "mag", "mac", "mlit", "mesa", "met", "meet", "meat", "mice", "midnight",
    "nose", "none", "no", "neon", "nice", "neck", "nope", "nick", "nail", "night",
    "orange", "oranges", "one", "once", "ones", "only", "oscar", "oink", "online", "on", "off", "offline", "ok", "okay", 
    "pause", "paused", "pull", "push", "pass", "passport", "passes", "party", "partying", "parties", "per", "post", "posts", "paste", "pasted", "paper", "papers", "pane", "plane", "planes", "phone", "pill", "pong", "ping", "pig", "pigs", "pole", "pool", "poor", "pink", "p.m.", "physical", "physics", "pronounce", "pro", "perfect", "p.e.", "punk", "potion", "pickaxe", "pick",
    "quest",  "quests", "quit", "quote", "quotes", "quick", "quickly", "quake", "quality", "quart",
    "star", "stars", "start", "started", "starts", "steal", "stole", "stem", "stay", "stick", "starve", "stayed", "slain", "swap", "sword", "sang", "sand", "sing", "song", "summer", "sure", "sun", "sunny", "sunday", "saturday", "sync", "sine", "shine", "sink", "shrink", "shame", "ship", "ship", "sit", "shop", "shard", "sherd", "she", "she's", "sodium", "sulfur", "steak", "streak", "six", "sox", "sock", "socks", "stop"
    "task", "tasks", "tas", "time", "timed", "tube", "timing", "times", "tone", "talk", "told", "tell", "tall", "tempo", "tennis", "table", "template", "templates", "three", "tree", "tic", "tac", "toe", "to", "too", "two", "top", "toy", "thing", "think", "thinks", "thought", "thank", "thanked", "thanks", "theme", "the", "tale", "take", "took", "till", "test", "tame", "tamed", "thinking", "ticks", "tick", "timer", "themes", "tonight", "thick", "throw",
    "umbrella", "university", "universe", "unit", "usa", "us", "utilities", "unstopped", "undo", "undefined", "undefine", "until", "unless", "unexpected", "unlock",
    "version", "variable", "versions", "various", "vanish", "vanity", "vein", "vine", "vet", 
    "war", "were", "where", "who", "what", "when", "wait", "waiting", "west", "well", "wall", "warm", "warn", "ware", "worm", "wake", "woke", "why", "wax", "wet",
    "xylophone", "xenom",
    "yacht", "yellow", "yet", "yes", "yeah", "ye", "ya", "you", "y'all", "your", "yours", "young", "yup", "yep", "yield", "yummy",
    "zoo", "zack", "zone", "zero", "zeroes", "zones", "zoom", "zooms", "zoomed"];

const wc = w.length;
let tn = 600; let t = 60; let ti = 60;
var g = false;
let i = ""; var ip = ""; let posi = 0;
let b = false; let f = false;
const tmr = document.getElementById("tmr");
// ranbdominede " Math.floor(Math.random() * wc) - 1; "
addEventListener("keydown", y);

function y(e) {
    c = e.code;
    k = e.key;
    if (c === "Space" && g === false) {
        v();
    }
    if (g === true) {
        x();
    }
}

function v() {
    tn = 600;
    t = tn + 1;
    f = true;
    posi = 0;
    g = true;
    tf = setInterval(function (){
        tn -= 1;
        ti = tn / 10;
        tmr.textContent = `${ti}s`;
        if (tn <= 0) {
            clearInterval(iv);
            g = false;
            clearInterval(tf);
        }
    }, 100);
    iv = setInterval(function (){
        if (f === true) {
            j();
            posi = 0;
            i = st; ip = "";
            f = false;
        }
        if (i === ip) {
            f = true;
        }
    })
}

function j() {
    st = w[Math.floor(Math.random() * wc) - 1]
    document.getElementById("st").textContent = st;
}

function x() {
    if (i[posi] === k && g === true) {
        ip = `${ip}${k}`;
        iu = ip;
        posi += 1;
    } else {
        bx += 5 - Math.round(Math.random() * 10);
        by += 5 - Math.round(Math.random() * 10);
        s(s2, 0.1);
    }
}

function s(ty, v) {
    if (v !== 0) {
        ty.volume = v;
        ty.cloneNode(true).play();
    }
}