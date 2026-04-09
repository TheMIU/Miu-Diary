// ============================================================
//  ADD YOUR ENTRIES HERE
//
//  path  — relative to this HTML file
//  date  — "YYYY-MM-DD"
//  tags  — array of strings
//  notes — string (optional, leave "" if none)
//  links — array of URLs (optional, leave [] if none)
// ============================================================

/*     {
        path: "img/2026/03/2026_03_29_1.png",
        date: "2026-03-29",
        tags: [],
        notes: "",
        links: []
}, */

const tagGroups = {
    "Work": ["Miusoft", "Yoo Game Art", "Godot Sensei", "Freelance", "Marketing"],
    "Other": ["Life", "Tools", "Blender", "Godot", "Art", "Miu Plays", "M Entertainment", "Film"]
};

const entries = [
    {
        path: "img/2026/04/2026_04_08_1.png",
        date: "2026-04-08",
        tags: ["Game Dev", "Miusoft", "Prasino"],
        notes: "",
        links: []
    },
    {
        path: "img/2026/04/2026_04_07_8.png",
        date: "2026-04-07",
        tags: ["Game Dev", "Miu Plays", "Games"],
        notes: "",
        links: ["https://youtu.be/jU5ZZBMjXXs?si=EY9AcDr02F4ABOtE"]
    },
    {
        path: "img/2026/04/2026_04_07_4.png",
        date: "2026-04-07",
        tags: ["Game Dev", "Miusoft"],
        notes: "",
        links: []
    },
    {
        path: "img/2026/04/2026_04_07_3.png",
        date: "2026-04-07",
        tags: ["Game Dev", "Miu Plays", "Games"],
        notes: "",
        links: ["https://youtu.be/zGtrhxfF6aY?si=XBvZQquVCRtLSyO7"]
    },
    {
        path: "img/2026/04/2026_04_07_2.png",
        date: "2026-04-07",
        tags: ["M Entertainment"],
        notes: "",
        links: []
    },
    {
        path: "img/2026/04/2026_04_07_1.png",
        date: "2026-04-07",
        tags: ["Godot Sensei", "Godot"],
        notes: "",
        links: []
    },
    {
        path: "img/2026/04/2026_04_06_2.png",
        date: "2026-04-06",
        tags: ["Yoo Game Art", "Godot"],
        notes: "",
        links: []
    },
    {
        path: "img/2026/04/2026_04_06_1.png",
        date: "2026-04-06",
        tags: ["Yoo Game Art", "Miusoft"],
        notes: "",
        links: []
    },
    {
        path: "img/2026/04/2026_04_05_1.png",
        date: "2026-04-05",
        tags: ["Game Dev", "Yoo Game Art", "Miusoft"],
        notes: "",
        links: []
    },
    {
        path: "img/2026/04/2026_04_04_5.png",
        date: "2026-04-04",
        tags: ["Godot Sensei", "Life"],
        notes: "",
        links: []
    },
    {
        path: "img/2026/04/2026_04_04_4.png",
        date: "2026-04-04",
        tags: ["Miu Plays", "Games"],
        notes: "",
        links: []
    },
    {
        path: "img/2026/04/2026_04_04_3.png",
        date: "2026-04-04",
        tags: ["Miu Plays", "Games"],
        notes: "",
        links: ["https://www.youtube.com/watch?v=aZR9LFDu_Ow&lc=UgwsNxIk_iwqIe7p7454AaABAg"]
    },
    {
        path: "img/2026/04/2026_04_04_2.png",
        date: "2026-04-04",
        tags: ["Film", "Game Dev"],
        notes: "",
        links: []
    },
    {
        path: "img/2026/04/2026_04_04_1.png",
        date: "2026-04-04",
        tags: ["Film", "Game Dev"],
        notes: "",
        links: []
    },
    {
        path: "img/2026/04/2026_04_03_4.png",
        date: "2026-04-03",
        tags: ["Miusoft", "Marketing"],
        notes: "",
        links: []
    },
    {
        path: "img/2026/04/2026_04_03_3.png",
        date: "2026-04-03",
        tags: ["Tools"],
        notes: "",
        links: ["https://poly.pizza/"]
    },
    {
        path: "img/2026/04/2026_04_03_2.png",
        date: "2026-04-03",
        tags: ["Yoo Game Art", "Marketing"],
        notes: "",
        links: []
    },
    {
        path: "img/2026/04/2026_04_03_1.png",
        date: "2026-04-03",
        tags: ["Life"],
        notes: "",
        links: []
    },
    {
        path: "img/2026/04/2026_04_02_5.png",
        date: "2026-04-02",
        tags: ["Miu Plays"],
        notes: "",
        links: []
    },
    {
        path: "img/2026/04/2026_04_02_4.png",
        date: "2026-04-02",
        tags: ["Miusoft"],
        notes: "",
        links: ["https://www.youtube.com/playlist?list=PLWdY-EVyz634dRfJr1ACNHrHO90I1As2J"]
    },
    {
        path: "img/2026/04/2026_04_02_3.png",
        date: "2026-04-02",
        tags: ["Journal"],
        notes: "",
        links: []
    },
    {
        path: "img/2026/04/2026_04_02_2.png",
        date: "2026-04-02",
        tags: ["Game Dev", "Miusoft"],
        notes: "",
        links: ["https://games.needlesack.com/game-loader?gameName=ghost&orientation=portrait"]
    },
    {
        path: "img/2026/04/2026_04_02_1.png",
        date: "2026-04-02",
        tags: ["Journal"],
        notes: "",
        links: []
    },
    {
        path: "img/2026/04/2026_04_01_5.png",
        date: "2026-04-01",
        tags: ["Godot Sensei"],
        notes: "",
        links: []
    },
    {
        path: "img/2026/04/2026_04_01_4.png",
        date: "2026-04-01",
        tags: ["Miusoft", "Yoo Game Art"],
        notes: "",
        links: ["https://services.yoogameart.com/"]
    },
    {
        path: "img/2026/04/2026_04_01_3.png",
        date: "2026-04-01",
        tags: ["Miusoft", "Yoo Game Art"],
        notes: "",
        links: ["https://www.linkedin.com/posts/kasun-miuranga_godot-activity-7445019222998446080-ZsQ2?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADM6alUBTddY3HSzUytLibqK6lajxFZyPKM"]
    },
    {
        path: "img/2026/04/2026_04_01_2.png",
        date: "2026-04-01",
        tags: ["Life", "M Entertainment"],
        notes: "",
        links: ["https://www.youtube.com/watch?v=Zo37fdYyGfY"]
    },
    {
        path: "img/2026/04/2026_04_01_1.png",
        date: "2026-04-01",
        tags: ["Facebook", "Life"],
        notes: "",
        links: []
    },
    {
        path: "img/2026/03/2026_03_31_1.png",
        date: "2026-03-31",
        tags: ["Journal"],
        notes: "",
        links: []
    },
    {
        path: "img/2026/03/2026_03_30_3.png",
        date: "2026-03-30",
        tags: ["Blender", "Trees"],
        notes: "",
        links: ["https://www.youtube.com/watch?v=4Knlb0vohDk"]
    },
    {
        path: "img/2026/03/2026_03_30_2.png",
        date: "2026-03-30",
        tags: ["Yoo Game Art", "PhotoShop"],
        notes: "",
        links: []
    },
    {
        path: "img/2026/03/2026_03_30_1.png",
        date: "2026-03-30",
        tags: ["Godot", "Freelance"],
        notes: "",
        links: []
    },
    {
        path: "img/2026/03/2026_03_29_12.png",
        date: "2026-03-29",
        tags: ["Miusoft", "Godot"],
        notes: "",
        links: []
    },
    {
        path: "img/2026/03/2026_03_29_11.png",
        date: "2026-03-29",
        tags: ["Game Dev", "Godot Sensei"],
        notes: "",
        links: ["https://Godot-sinhala.miusoftgames.com/"]
    },
    {
        path: "img/2026/03/2026_03_29_10.png",
        date: "2026-03-29",
        tags: ["Yoo Game Art", "Game Dev"],
        notes: "",
        links: ["website: https://assets.dasca.studio/"]
    },
    {
        path: "img/2026/03/2026_03_29_9.png",
        date: "2026-03-29",
        tags: ["Films", "Bat Man"],
        notes: "",
        links: []
    },
    {
        path: "img/2026/03/2026_03_29_8.png",
        date: "2026-03-29",
        tags: ["Miu Plays", "Games"],
        notes: "",
        links: ["https://www.youtube.com/@MiuPlayGames"]
    },
    {
        path: "img/2026/03/2026_03_29_7.png",
        date: "2026-03-29",
        tags: ["Godot", "Godot Sensei"],
        notes: "කලින් post එක,",
        links: ["https://www.linkedin.com/posts/kasun-miuranga_Godot-Godotengine-Game Dev-activity-7438094661111664640-FPS2?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADM6alUBTddY3HSzUytLibqK6lajxFZyPKM"]
    },
    {
        path: "img/2026/03/2026_03_29_6.png",
        date: "2026-03-29",
        tags: ["Blender", "Trees", "Particles"],
        notes: "Tutorial link එක, timestamp: 3:46",
        links: ["https://www.youtube.com/watch?v=3owlx-NI1io"]
    },
    {
        path: "img/2026/03/2026_03_29_5.png",
        date: "2026-03-29",
        tags: ["Blender", "Trees", "Particles"],
        notes: "Tutorial link එක, මේකෙ අන්තිම ටිකේ ඇත්තෙ.",
        links: ["https://www.youtube.com/watch?v=o54gVHUPdCU"]
    },
    {
        path: "img/2026/03/2026_03_29_4.png",
        date: "2026-03-29",
        tags: ["Texturing", "Tools"],
        notes: "imagecompressor link එක,",
        links: ["https://imagecompressor.11zon.com/en/image-compressor/compress-image-without-losing-quality"]
    },
    {
        path: "img/2026/03/2026_03_29_3.png",
        date: "2026-03-29",
        tags: ["Blender", "Texturing"],
        notes: "",
        links: []
    },
    {
        path: "img/2026/03/2026_03_29_2.png",
        date: "2026-03-29",
        tags: ["Blender", "Trees"],
        notes: "Tutorial link එක,",
        links: ["https://www.youtube.com/watch?v=v4dvQBPCtBA"]
    },
    {
        path: "img/2026/03/2026_03_29_1.png",
        date: "2026-03-29",
        tags: ["Blender", "Rigging"],
        notes: "",
        links: []
    },
    {
        path: "img/2026/03/2026_03_28_5.png",
        date: "2026-03-28",
        tags: ["Film", "Bat Man", "M Entertainment"],
        notes: "පහළින් තියෙන්නෙ shorts playlist එකේ link එක",
        links: ["https://www.youtube.com/playlist?list=PLBFTR8otL-ZVHrO64UaeoBYgCn7Asruip"]
    },
    {
        path: "img/2026/03/2026_03_28_4.png",
        date: "2026-03-28",
        tags: ["Blender"],
        notes: "",
        links: []
    },
    {
        path: "img/2026/03/2026_03_28_3.png",
        date: "2026-03-28",
        tags: ["Film", "Game Dev", "Life"],
        notes: "FB post link එකයි, මං හදපු website link එකයි පහළ ඇති.",
        links: ["https://web.facebook.com/share/p/18hmFDRLdZ/", "https://themiu.github.io/Indie-Game-The-Movie-Sinhala-Sub"]
    },
    {
        path: "img/2026/03/2026_03_28_2.png",
        date: "2026-03-28",
        tags: ["Journal", "Life", "ChatGPT"],
        notes: "",
        links: []
    },
    {
        path: "img/2026/03/2026_03_28_1.png",
        date: "2026-03-28",
        tags: ["Life", "Journal", "Kleki"],
        notes: "kleki කියන්නේ web paint tool එකක්",
        links: ["https://kleki.com/"]
    },

];
