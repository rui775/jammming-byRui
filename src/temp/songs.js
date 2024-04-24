const songs = [
    {
        id: 1,
        name: "Shape of You",
        artist: "Ed Sheeran",
        album: "÷ (Divide)"
    },
    {
        id: 2,
        name: "Someone Like You",
        artist: "Adele",
        album: "21"
    },
    {
        id: 3,
        name: "Closer",
        artist: "The Chainsmokers ft. Halsey",
        album: "Collage"
    },
    {
        id: 4,
        name: "Uptown Funk",
        artist: "Mark Ronson ft. Bruno Mars",
        album: "Uptown Special"
    },
    {
        id: 5,
        name: "Blinding Lights",
        artist: "The Weeknd",
        album: "After Hours"
    },
    {
        id: 6,
        name: "Happy",
        artist: "Pharrell Williams",
        album: "Despicable Me 2: Original Motion Picture Soundtrack"
    },
    {
        id: 7,
        name: "Bad Romance",
        artist: "Lady Gaga",
        album: "The Fame Monster"
    },
    {
        id: 8,
        name: "Rolling in the Deep",
        artist: "Adele",
        album: "21"
    },
    {
        id: 9,
        name: "Despacito",
        artist: "Luis Fonsi ft. Daddy Yankee",
        album: "Vida"
    },
    {
        id: 10,
        name: "Sorry",
        artist: "Justin Bieber",
        album: "Purpose"
    },
    {
        id: 11,
        name: "Hello",
        artist: "Adele",
        album: "25"
    },
    {
        id: 12,
        name: "All of Me",
        artist: "John Legend",
        album: "Love in the Future"
    },
    {
        id: 13,
        name: "Rockstar",
        artist: "Post Malone ft. 21 Savage",
        album: "Beerbongs & Bentleys"
    },
    {
        id: 14,
        name: "God's Plan",
        artist: "Drake",
        album: "Scorpion"
    },
    {
        id: 15,
        name: "We Found Love",
        artist: "Rihanna ft. Calvin Harris",
        album: "Talk That Talk"
    },
    {
        id: 16,
        name: "Radioactive",
        artist: "Imagine Dragons",
        album: "Night Visions"
    },
    {
        id: 17,
        name: "Havana",
        artist: "Camila Cabello ft. Young Thug",
        album: "Camila"
    },
    {
        id: 18,
        name: "Love Yourself",
        artist: "Justin Bieber",
        album: "Purpose"
    },
    {
        id: 19,
        name: "Shake It Off",
        artist: "Taylor Swift",
        album: "1989"
    },
    {
        id: 20,
        name: "Rude",
        artist: "Magic!",
        album: "Don't Kill the Magic"
    },
    {
        id: 21,
        name: "Thinking Out Loud",
        artist: "Ed Sheeran",
        album: "÷ (Divide)"
    },
    {
        id: 22,
        name: "Counting Stars",
        artist: "OneRepublic",
        album: "Native"
    },
    {
        id: 23,
        name: "Somebody That I Used to Know",
        artist: "Gotye ft. Kimbra",
        album: "Making Mirrors"
    },
    {
        id: 24,
        name: "Love Me Like You Do",
        artist: "Ellie Goulding",
        album: "Fifty Shades of Grey: Original Motion Picture Soundtrack"
    },
    {
        id: 25,
        name: "Cheap Thrills",
        artist: "Sia ft. Sean Paul",
        album: "This Is Acting"
    },
    {
        id: 26,
        name: "Can't Feel My Face",
        artist: "The Weeknd",
        album: "Beauty Behind the Madness"
    },
    {
        id: 27,
        name: "Firework",
        artist: "Katy Perry",
        album: "Teenage Dream"
    },
    {
        id: 28,
        name: "Don't Let Me Down",
        artist: "The Chainsmokers ft. Daya",
        album: "Collage"
    },
    {
        id: 29,
        name: "Cheap Thrills",
        artist: "Sia ft. Sean Paul",
        album: "This Is Acting"
    },
    {
        id: 30,
        name: "Roar",
        artist: "Katy Perry",
        album: "Prism"
    },
    {
        id: 31,
        name: "Dark Horse",
        artist: "Katy Perry ft. Juicy J",
        album: "Prism"
    },
    {
        id: 32,
        name: "Hotline Bling",
        artist: "Drake",
        album: "Views"
    },
    {
        id: 33,
        name: "Lean On",
        artist: "Major Lazer & DJ Snake ft. MØ",
        album: "Peace Is the Mission"
    },
    {
        id: 34,
        name: "Happier",
        artist: "Marshmello ft. Bastille",
        album: "Happier"
    },
    {
        id: 35,
        name: "Love Story",
        artist: "Taylor Swift",
        album: "Fearless"
    },
    {
        id: 36,
        name: "Gangnam Style",
        artist: "PSY",
        album: "Psy 6 (Six Rules), Part 1"
    },
    {
        id: 37,
        name: "Thinking Out Loud",
        artist: "Ed Sheeran",
        album: "÷ (Divide)"
    },
    {
        id: 38,
        name: "Radioactive",
        artist: "Imagine Dragons",
        album: "Night Visions"
    },
    {
        id: 39,
        name: "See You Again",
        artist: "Wiz Khalifa ft. Charlie Puth",
        album: "Furious 7: Original Motion Picture Soundtrack"
    },
    {
        id: 40,
        name: "I Gotta Feeling",
        artist: "The Black Eyed Peas",
        album: "The E.N.D."
    },
    {
        id: 41,
        name: "Hello",
        artist: "Adele",
        album: "25"
    },
    {
        id: 42,
        name: "All of Me",
        artist: "John Legend",
        album: "Love in the Future"
    },
    {
        id: 43,
        name: "Rockstar",
        artist: "Post Malone ft. 21 Savage",
        album: "Beerbongs & Bentleys"
    },
    {
        id: 44,
        name: "God's Plan",
        artist: "Drake",
        album: "Scorpion"
    },
    {
        id: 45,
        name: "We Found Love",
        artist: "Rihanna ft. Calvin Harris",
        album: "Talk That Talk"
    },
    {
        id: 46,
        name: "Radioactive",
        artist: "Imagine Dragons",
        album: "Night Visions"
    },
    {
        id: 47,
        name: "Havana",
        artist: "Camila Cabello ft. Young Thug",
        album: "Camila"
    },
    {
        id: 48,
        name: "Love Yourself",
        artist: "Justin Bieber",
        album: "Purpose"
    },
    {
        id: 49,
        name: "Shake It Off",
        artist: "Taylor Swift",
        album: "1989"
    },
    {
        id: 50,
        name: "Rude",
        artist: "Magic!",
        album: "Don't Kill the Magic"
    }
];

export default songs;