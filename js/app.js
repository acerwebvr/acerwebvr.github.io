'use strict';
var app = angular.module('app', ['pascalprecht.translate']);
  app.config(function ($translateProvider) {
    $translateProvider.fallbackLanguage('en');
    $translateProvider.registerAvailableLanguageKeys(['en', 'es'],{
      'en_*':'en',
      'zh_*':'es'
    })
    $translateProvider.translations('en', {
        TOP:"TOP",
        All:"All",
        Education:"Education",
        Tourism:"Tourism",
        Entertainment:"Entertainment",
        Developer:"Developer",
        Download:"Download",
        SEARCH:"Search",
        None:"None",
        
        header_title:"Acer WebVR Start Page",
        header_caption:"With your Acer Windows Mixed Reality Headset, you can experience VR in Chrome browser just by clicking a link.",
        header_btn1:"ABOUT ACER MIXED REALITY HEADSET",

        
        Category:"Category",
        Author:"Author",
        Framework:"Framework",
        view_vr_btn:"View VR Experience",
        
        National_Geographic:"National Geographic",
        National_Geographic_A:"National Geographic",
        National_Geographic_C:"Vizor 360 - create 360 tours, stories, sites and WebVR experiences as easy as drag and drop.",
        
        The_British_Museum:"The British Museum",
        The_British_Museum_A:"The British Museum",
        The_British_Museum_C:"The full tour will give users an unparalleled digital experience using any computer or mobile device, and the chance to become fully immersed using a VR headset. High resolution 360-degree photography has been combined with layers of additional content, including expert audio commentary from our curators and interactive 3D models of highlight objects. Now the Museum will be at your fingertips from anywhere in the world!",
        
        National_Gallery:"National Gallery",
        National_Gallery_A:"The National Gallery",
        National_Gallery_C:"Enjoy over 270 paintings in virtual reality with a VR headset, or browse a 360 tour on your desktop or mobile. Immersive media company Matterport created a 3D virtual tour of the National Gallery's Sainsbury Wing. In this experience you can walk around the Gallery, get up-close to the paintings, and even view the rooms from above in 3D.",
        
        WITHIN:"WITHIN",
        WITHIN_A:"WITHIN",
        WITHIN_C:"Storytelling for Virtual Reality.",
        
        Song_Explorer:"Song Explorer",
        Song_Explorer_A:"Google Creative Lab",
        Song_Explorer_C:"What if you could step inside a song? This is a simple experiment that explores that idea. See and hear the individual layers of music all around you to get a closer look at how music is made.",
        
        Access_MARS:"Access MARS",
        Access_MARS_A:"Google Creative Lab",
        Access_MARS_C:"The Curiosity rover landed on Mars on August 5, 2012. Since then, it’s sent over 200,000 photographs back to Earth. JPL engineers transform these photos into a 3D model that scientists use to study the surface of Mars. They wanted to share this tool with everyone so they partnered with Google Creative Lab to create an immersive web experience called Access Mars. Access Mars features some of the most important locations from the mission, key points of interest, and narration from JPL Mission Scientist Katie Stack. Start exploring Mars today.",
        
        USA_TODAY_Buffalo_Trace_Distillery:"USA TODAY: Buffalo Trace Distillery",
        USA_TODAY_Buffalo_Trace_Distillery_A:"USA TODAY",
        USA_TODAY_Buffalo_Trace_Distillery_C:"USA TODAY NETWORK takes you inside Kentucky’s 200-year-old Buffalo Trace Distillery to learn the ins and outs of bourbon production. You're guided by the master distiller and a tour guide through the warehouse and distilling room, as well as “Bourboun Pompeii” and “Warehouse X”—two spots that aren’t on the public tour. The interactive released earlier this year has been updated for better performance, and contains 360-degree photos layered with 2-D videos, text and spatial audio.",
        
        Oyster:"Oyster",
        Oyster_C:"Owned by Trip Advisor and operated independently, Oyster.com sends investigators out to hotels and travel destinations around the world where they’ve captured thousands of unedited 360° photos. With React VR, they’ve built an interactive experience that lets travelers try before they fly.",

        Jumanji:"Jumanji: Welcome to the Jungle",
        Jumanji_A:"Sony Pictures",
        Jumanji_C:"In a brand new Jumanji adventure, four high school kids discover an old video game console and are drawn into the game's jungle setting, literally becoming the adult avatars they chose.",

        NORMAN:"NORMAN",
        NORMAN_A:"James Paterson",
        NORMAN_C:"Norman allows James to create and showcase his distinctive VR animations, and shows how artists can create their own VR tools to bring their creative visions to life, right on the web. Watch an animated short made entirely with Norman, view the experience (using cardboard, VR Headsets, or just in your browser), or dig into the code of the actual tool.",

        Puzzle_Rain:"Puzzle Rain",
        Puzzle_Rain_A:"Mozilla VR",
        Puzzle_Rain_C:"Puzzle Rain is a musical journey in which you help awaken and guide mythical creatures back together into happy musical harmony with one another. Only their combined musical chorus can summon life-giving rain to revive the parched and desolate landscape. Though, there isn’t much time. Dangerous predators roam!",

        Mass_Migrations:"Mass Migrations",
        Mass_Migrations_A:"marpi",
        Mass_Migrations_C:"An experiment in mecha world creation. Create, adopt and set them free.",

        Sonic_Umbrella:"Sonic Umbrella",
        Sonic_Umbrella_A:"Plan 8",
        Sonic_Umbrella_C:"Hear what it sounds like when the sky rains dog toys, ping pong balls, and more.",

        Under_Neon_Lights:"Under Neon Lights",
        Under_Neon_Lights_A:"WITHIN",
        Under_Neon_Lights_C:"An interactive, virtual reality music experience from Within, featuring the song “Under Neon Lights” by the Chemical Brothers and St. Vincent.",

        Up_There:"Up There",
        Up_There_A:"ngokevin",
        Up_There_C:"Planetarium of 100K real stars. Spot exoplanets, travel through time, hold the galaxy in your hands with the grip buttons.",

        Aurora:"Aurora",
        Aurora_A:"Gnometech",
        Aurora_C:"Catch the northern lights (aurora borealis) live in Yellowknife, Canada.",

        Slime_Freighter:"Slime Freighter",
        Slime_Freighter_A:"Algoraphics",
        Slime_Freighter_C:"This is a music video style VR experience made with A-Frame.",

        dayandnight:"Day ＆ Night",
        dayandnight_A:"Stewart Smith",
        dayandnight_C:"Has your child asked what makes day and night? How can it be morning on one side of Earth but evening on another? Show them. Day & Night is an educational virtual reality experience for children using WebVR to explore how sunshine creates our most basic unit of time. On this trip to outer-space your child will witness the sun bathe one hemisphere of our rotating Earth in day while the other twinkles with its own artificial lights of night.",

        mrnomnom:"Mr Nom Nom",
        mrnomnom_A:"Etter Studio",
        mrnomnom_C:"A small WebVR game about a tasty donut and his hungry friends. By collecting the balls of red yarn, Mr. Nom Nom extends the length of his fashionable scarf and uses it to prevent his delicious demise at the mouths of his munching friends.",

        A_Saturday_Night:"A-Saturday-Night",
        A_Saturday_Night_A:"Mozilla VR",
        A_Saturday_Night_C:"On a-saturday-night, we wanted to create a fun experience around the idea of recording and reproducing tracking data. The mechanics are simple: Put your headset on, select an avatar, and dance. At the end of the countdown, and thanks to the magic of the Web, you will get a link like this one with the recorded dance that you can share instantly with anybody.",

        Super_Finland:"Super Finland",
        Super_Finland_A:"Vizor",
        Super_Finland_C:"Vizor 360 - create 360 tours, stories, sites and WebVR experiences as easy as drag and drop.",

        USA_TODAY_You_be_the_ref:"USA TODAY: You be the ref",
        USA_TODAY_You_be_the_ref_A:"USA TODAY",
        USA_TODAY_You_be_the_ref_C:"Think you have what it takes to be a ref?",

        Netflix_Stranger_Things_Count_Down:"Netflix-Stranger Things Count Down",
        Netflix_Stranger_Things_Count_Down_A:"studiozeroco",
        Netflix_Stranger_Things_Count_Down_C:"How much longer do you have to wait until returning to The Upside Down? Stranger Things Season 2 coming soon to Netflix.",

        PanoMoments:"PanoMoments",
        PanoMoments_A:"PanoMoments",
        PanoMoments_C:"PanoMoments are a new creative VR format that couple time and space.",

        Witch_Brew:"Witch's Brew",
        Witch_Brew_A:"Andrew Fraticelli",
        Witch_Brew_C:"A-Frame is an open-source web framework for building virtual reality (VR) experiences.It is primarily maintained by Mozilla and the WebVR community. It is an entity component system framework for Three.js where developers can create 3D and WebVR scenes using HTML. HTML provides a familiar authoring tool for web developers and designers while incorporating a popular game development pattern used by engines such as Unity.",

        Night_Eye:"Night Eye",
        Night_Eye_A:"Christmas Experiments",
        Night_Eye_C:"Explore the night forest, manipulate the elements and frolic with the light creatures.",

        cru_ci_form:"cru ci form",
        cru_ci_form_A:"thespite + sejnulla",
        cru_ci_form_C:"A study in architectural visualisation.",

        GuriVR:"GuriVR",
        GuriVR_A:"GuriVR",
        GuriVR_C:"Describe your VR experience and the editor will do the rest.",

        Ye_Olde_Puppetrilla:"Ye Olde Puppetrilla",
        Ye_Olde_Puppetrilla_A:"Jorge Fuentes",
        Ye_Olde_Puppetrilla_C:"Ye Olde Puppetrilla has arrived in town and everybody's here to enjoy your puppeteering skills.",

        Vizor_3_Cubemaps:"Vizor: 3 Cubemaps",
        Vizor:"Vizor",
        Vizor_3_Cubemaps_C:"Vizor is a platform for creating and sharing VR experiences.",

        Vizor_Marimekko:"Vizor: Marimekko",
        Vizor_Marimekko_C:"Vizor is a platform for creating and sharing VR experiences.",

        Vizor_Sample_Capture:"Vizor: Sample Capture",
        Vizor_Sample_Capture_C:"Vizor is a platform for creating and sharing VR experiences.",

        Within_Giant:"Within: Giant",
        Within_Giant_C:"Trapped inside a war zone, two parents struggle to distract their young daughter by inventing a fantastical tale. Inspired by real events.",

        Within_Kinoscope:"Within: Kinoscope",
        Within_Kinoscope_C:"A colorful exploration of the the history of cinema-from Méliès to Tarantino-told by Oscar-winning production designer Dean Tavoularis.",
        
        Vimeo_Video:"Vimeo Video",
        Vimeo_A:"Vimeo",
        Vimeo_Video_C:"This demo shows you how you can stream regular and 360 videos from your own Vimeo account into a WebVR app. It's all built on top of A-frame & React and is powered by Glitch.",

        Vimeo_360_Video:"Vimeo 360 Video",
        Vimeo_360_Video_C:"This demo shows you how you can stream regular and 360 videos from your own Vimeo account into a WebVR app. It's all built on top of A-frame & React and is powered by Glitch.",

        Weightless:"Weightless",
        Weightless_A:"Ningxia Zhang",
        Weightless_C:"A series of VR installations, with generative, minimal and geometric qualities.",

        WebVR_Lab:"WebVR Lab",
        PlayCanvas:"PlayCanvas",
        WebVR_Lab_C:"A living project built by the PlayCanvas team to help developers learn about creating scalable and responsive WebVR applications for all devices.",

        Orange_Room:"Orange Room",
        Orange_Room_C:"Interactive interior visualisation with dynamic reflections and HDR lightmaps with WebVR.",

        WebVR_360:"WebVR 360",
        WebVR_360_C:"360 Video with WebVR support.",

        Graf_3D_forest:"Graf’s 3D forest",
        Graf_3D_forest_A:"nikgraf",
        Graf_3D_forest_C:"React 360 is a framework for the creation of interactive 360 experiences that run in your web browser. It pairs modern APIs like WebGL and WebVR with the declarative power of React, producing applications that can be consumed through a variety of devices. Leveraging web technologies and the existing React ecosystem, React 360 aims to simplify the construction of cross-platform 360 experiences.",

        Mystrock:"Mystrock",
        Mystrock_C:"Mystrock combines the classic Adventure Puzzle games, Myst and Riven, with strong RPG elements via the Legend of Grimrock 2 and The Elder Scrolls platforms.",

        Falcon_Heavy:"Falcon Heavy",
        Falcon_Heavy_A:"Ottifox",
        Falcon_Heavy_C:"Playing with the effects component after export, a bit hard on performance, but does make it more fun to view.",

        Lazy_Sunday_Simulator:"Lazy Sunday Simulator",
        Lazy_Sunday_Simulator_A:"Anthony Prum",
        Lazy_Sunday_Simulator_C:"Lazy Sunday Simulator was made for a project in my production class with Karen Vanderborght for Integrated Digital Media. We were to create a portrait with no face in VR with an assigned VR creation tool. This project was a technical exercise to get us acquainted with working in a three dimensional space and how to direct a viewer through it.",

        Starman:"Starman",
        Starman_A:"aimeedotkim",
        Starman_C:"Starman by aimeedotkim.",

        Lights:"Lights",
        Lights_A:"Mozilla VR",
        Lights_C:"A-Frame is an open-source web framework for building virtual reality (VR) experiences.[1] It is primarily maintained by Mozilla and the WebVR community. It is an entity component system framework for Three.js where developers can create 3D and WebVR scenes using HTML. HTML provides a familiar authoring tool for web developers and designers while incorporating a popular game development pattern used by engines such as Unity.",

        Museum:"Museum",
        Museum_A:"Mozilla VR",
        Museum_C:"Aframe-Museum is A 3D Virtual Museum built using A-Frame; A web framework that provides HTML components to make WebVR and build virtual reality experience.The museum is located somewhere in the space where nobody lives except a cute penguin that will guide you through your journey.",

        gBlock:"gBlock",
        gBlock_A:"Archilogic.com",
        gBlock_C:"gBlock Component by 3d.io for A-Frame loading remixable models.",

        Video360:"360° Video",
        Video360_A:"Mozilla VR",
        Video360_C:"A-Frame is an open-source web framework for building virtual reality (VR) experiences.It is primarily maintained by Mozilla and the WebVR community. It is an entity component system framework for Three.js where developers can create 3D and WebVR scenes using HTML. HTML provides a familiar authoring tool for web developers and designers while incorporating a popular game development pattern used by engines such as Unity.",

        Anime_UI:"Anime UI",
        Anime_UI_A:"Mozilla VR",
        Anime_UI_C:"A-Frame is an open-source web framework for building virtual reality (VR) experiences.It is primarily maintained by Mozilla and the WebVR community. It is an entity component system framework for Three.js where developers can create 3D and WebVR scenes using HTML. HTML provides a familiar authoring tool for web developers and designers while incorporating a popular game development pattern used by engines such as Unity.",

        Pokemon:"Pokemon",
        Pokemon_A:"ngokevin",
        Pokemon_C:"Pokemon in MagicaVoxel and A-Frame.",

        Shooting_Stars:"Shooting Stars",
        Shooting_Stars_A:"lazerGlazer_Viz",
        Shooting_Stars_C:"Experiment in Spontaneous Meditation.",

        Imagined_Reality:"Imagined Reality",
        Imagined_Reality_A:"bryik",
        Imagined_Reality_C:"Imagined Reality by Benjamin Aguillon.",

        Spider:"Spider",
        Spider_A:"Marpi",
        Spider_C:"Low Poly WebGL+WebVR Spider Study.",

        Float:"Float",
        Float_A:"ngokevin",
        Float_C:"Floating sky islands for WebVR.",

        Resonate_Audio_Reactive:"Resonate: Audio Reactive",
        Resonate_Audio_Reactive_A:"Marpi",
        Resonate_Audio_Reactive_C:"Building generative VR worlds.",

        Black_Rain:"Black Rain",
        Black_Rain_A:"Marpi x Archan Nair",
        Black_Rain_C:"A WebVR experiment, explore worlds of Archan Nair.",

        Eutow:"Eutow",
        // Eutow_A:"Marpi x Archan Nair",
        Eutow_C:"WebVR experiment, explore worlds of Archan Nair.",
        
        Chordano:"Chordano",
        Chordano_A:"Michael Casebolt",
        Chordano_C:"A WebVR piano.",

        babylon_js_Sponza_demo:"Babylon.js - Sponza demo",
        Microsoft:"Microsoft",
        Babylon:"Babylon",
        babylon_js_Sponza_demo_C:"A tranquil action puzzle game for VR and mobile.",

        epic_medieval_battle:"Epic Medieval Battle",
        epic_medieval_battle_A:"Danilo Pasquariello",
        epic_medieval_battle_C:"An interactive WebVR experience.",

        elfland_glider:"Elfland Glider",
        elfland_glider_A:"P. Douglas Reeder",
        elfland_glider_C:"A tranquil action puzzle game for VR and mobile.",

        global_seed_vault:"Global Seed Vault",
        global_seed_vault_A:"Crop Trust",
        global_seed_vault_C:"Experience the visit of the Global Seed Vault in Svalbard.",

        studio_venezia:"Studio Venezia",
        studio_venezia_A:"Studio Venezia",
        studio_venezia_C:"Xavier Veilhan's French pavilion.",
        
        ufomammoot:"ufomammoot",
        ufomammoot_A:"ufomammoot",
        ufomammoot_C:"We are an independent digital agency based in Berlin providing innovative & creative concepts for brands.",
        
        ocean_of_thought:"Ocean Of Thought",
        ocean_of_thought_A:"machinedrum",
        ocean_of_thought_C:"Vizor is a platform for creating and sharing VR experiences.",
        
        super_says:"Super Says",
        super_says_A:"supermedium",
        super_says_C:"Test your memory with this Simon minigame in WebVR.",
        
        trajectile_command:"Trajectile Command",
        trajectile_command_A:"AdamAlexandr",
        trajectile_command_C:"A free WebVR action game using @aframevr.",
        
        mathworld_vr:"Mathworld VR",
        mathworld_vr_A:"michaltakac",
        mathworld_vr_C:"I am convinced that the best learning takes place when the learner takes charge.",
        
        footer_statement:"All trademarks, images, product names and logos appearing on the site are the property of their respective owners.",
        footer_legal:"legal",
        Search:"Search",
        Language:"Language",
        BUTTON_LANG_EN:"English",
        BUTTON_LANG_ES:"Chinese"
    });
    $translateProvider.translations('es', {
        TOP:"置頂",
        All:"全部",
        Education:"教育",
        Tourism:"觀光",
        Entertainment:"娛樂",
        Developer:"開發者",
        Download:"下載",
        SEARCH:"搜尋",
        None:"無",
        
        header_title:"Acer WebVR Start Page",
        header_caption:"與您的Acer Windows Mixed Reality頭戴裝置一起進入WebVR的全新世界",
        header_btn1:"關於 ACER MIXED REALITY 頭戴裝置",

        Category:"分類",
        Author:"作者",
        Framework:"框架",
        view_vr_btn:"探索虛擬實境體驗",
        
        National_Geographic:"國家地理",
        National_Geographic_A:"國家地理",
        National_Geographic_C:"Vizor 360 - create 360 tours, stories, sites and WebVR experiences as easy as drag and drop.的中文",
        
        The_British_Museum:"大英博物館",
        The_British_Museum_A:"大英博物館",
        The_British_Museum_C:"The full tour will give users an unparalleled digital experience using any computer or mobile device, and the chance to become fully immersed using a VR headset. High resolution 360-degree photography has been combined with layers of additional content, including expert audio commentary from our curators and interactive 3D models of highlight objects. Now the Museum will be at your fingertips from anywhere in the world!的中文",
        
        National_Gallery:"National Gallery的中文",
        National_Gallery_A:"The National Gallery的中文",
        National_Gallery_C:"Enjoy over 270 paintings in virtual reality with a VR headset, or browse a 360 tour on your desktop or mobile. Immersive media company Matterport created a 3D virtual tour of the National Gallery's Sainsbury Wing. In this experience you can walk around the Gallery, get up-close to the paintings, and even view the rooms from above in 3D.的中文",

        WITHIN:"WITHIN的中文",
        WITHIN_A:"WITHIN的中文",
        WITHIN_C:"Storytelling for Virtual Reality.的中文",
        
        Song_Explorer:"Song Explorer的中文",
        Song_Explorer_A:"Google Creative Lab的中文",
        Song_Explorer_C:"What if you could step inside a song? This is a simple experiment that explores that idea. See and hear the individual layers of music all around you to get a closer look at how music is made.的中文",
        
        Access_MARS:"Access MARS的中文",
        Access_MARS_A:"Google Creative Lab的中文",
        Access_MARS_C:"The Curiosity rover landed on Mars on August 5, 2012. Since then, it’s sent over 200,000 photographs back to Earth. JPL engineers transform these photos into a 3D model that scientists use to study the surface of Mars. They wanted to share this tool with everyone so they partnered with Google Creative Lab to create an immersive web experience called Access Mars. Access Mars features some of the most important locations from the mission, key points of interest, and narration from JPL Mission Scientist Katie Stack. Start exploring Mars today.的中文",
        
        USA_TODAY_Buffalo_Trace_Distillery:"USA TODAY: Buffalo Trace Distillery的中文",
        USA_TODAY_Buffalo_Trace_Distillery_A:"USA TODAY的中文",
        USA_TODAY_Buffalo_Trace_Distillery_C:"USA TODAY NETWORK takes you inside Kentucky’s 200-year-old Buffalo Trace Distillery to learn the ins and outs of bourbon production. You're guided by the master distiller and a tour guide through the warehouse and distilling room, as well as “Bourboun Pompeii” and “Warehouse X”—two spots that aren’t on the public tour. The interactive released earlier this year has been updated for better performance, and contains 360-degree photos layered with 2-D videos, text and spatial audio.的中文",
        
        Oyster:"Oyster的中文",
        Oyster_C:"Owned by Trip Advisor and operated independently, Oyster.com sends investigators out to hotels and travel destinations around the world where they’ve captured thousands of unedited 360° photos. With React VR, they’ve built an interactive experience that lets travelers try before they fly.的中文",

        Jumanji:"Jumanji: Welcome to the Jungle",
        Jumanji_A:"Sony Pictures",
        Jumanji_C:"In a brand new Jumanji adventure, four high school kids discover an old video game console and are drawn into the game's jungle setting, literally becoming the adult avatars they chose.",

        NORMAN:"NORMAN",
        NORMAN_A:"James Paterson",
        NORMAN_C:"Norman allows James to create and showcase his distinctive VR animations, and shows how artists can create their own VR tools to bring their creative visions to life, right on the web. Watch an animated short made entirely with Norman, view the experience (using cardboard, VR Headsets, or just in your browser), or dig into the code of the actual tool.",

        Puzzle_Rain:"Puzzle Rain",
        Puzzle_Rain_A:"Mozilla VR",
        Puzzle_Rain_C:"Puzzle Rain is a musical journey in which you help awaken and guide mythical creatures back together into happy musical harmony with one another. Only their combined musical chorus can summon life-giving rain to revive the parched and desolate landscape. Though, there isn’t much time. Dangerous predators roam!",

        Mass_Migrations:"Mass Migrations",
        Mass_Migrations_A:"marpi",
        Mass_Migrations_C:"An experiment in mecha world creation. Create, adopt and set them free.",

        Sonic_Umbrella:"Sonic Umbrella",
        Sonic_Umbrella_A:"Plan 8",
        Sonic_Umbrella_C:"Hear what it sounds like when the sky rains dog toys, ping pong balls, and more.",

        Under_Neon_Lights:"Under Neon Lights",
        Under_Neon_Lights_A:"WITHIN",
        Under_Neon_Lights_C:"An interactive, virtual reality music experience from Within, featuring the song “Under Neon Lights” by the Chemical Brothers and St. Vincent.",

        Up_There:"Up There",
        Up_There_A:"ngokevin",
        Up_There_C:"Planetarium of 100K real stars. Spot exoplanets, travel through time, hold the galaxy in your hands with the grip buttons.",

        Aurora:"Aurora",
        Aurora_A:"Gnometech",
        Aurora_C:"Catch the northern lights (aurora borealis) live in Yellowknife, Canada.",

        Slime_Freighter:"Slime Freighter",
        Slime_Freighter_A:"Algoraphics",
        Slime_Freighter_C:"This is a music video style VR experience made with A-Frame.",

        dayandnight:"Day ＆ Night",
        dayandnight_A:"Stewart Smith",
        dayandnight_C:"Has your child asked what makes day and night? How can it be morning on one side of Earth but evening on another? Show them. Day & Night is an educational virtual reality experience for children using WebVR to explore how sunshine creates our most basic unit of time. On this trip to outer-space your child will witness the sun bathe one hemisphere of our rotating Earth in day while the other twinkles with its own artificial lights of night.",

        mrnomnom:"Mr Nom Nom",
        mrnomnom_A:"Etter Studio",
        mrnomnom_C:"A small WebVR game about a tasty donut and his hungry friends. By collecting the balls of red yarn, Mr. Nom Nom extends the length of his fashionable scarf and uses it to prevent his delicious demise at the mouths of his munching friends.",

        A_Saturday_Night:"A-Saturday-Night",
        A_Saturday_Night_A:"Mozilla VR",
        A_Saturday_Night_C:"On a-saturday-night, we wanted to create a fun experience around the idea of recording and reproducing tracking data. The mechanics are simple: Put your headset on, select an avatar, and dance. At the end of the countdown, and thanks to the magic of the Web, you will get a link like this one with the recorded dance that you can share instantly with anybody.",

        Super_Finland:"Super Finland",
        Super_Finland_A:"Vizor",
        Super_Finland_C:"Vizor 360 - create 360 tours, stories, sites and WebVR experiences as easy as drag and drop.",

        USA_TODAY_You_be_the_ref:"USA TODAY: You be the ref",
        USA_TODAY_You_be_the_ref_A:"USA TODAY",
        USA_TODAY_You_be_the_ref_C:"Think you have what it takes to be a ref?",

        Netflix_Stranger_Things_Count_Down:"Netflix-Stranger Things Count Down",
        Netflix_Stranger_Things_Count_Down_A:"studiozeroco",
        Netflix_Stranger_Things_Count_Down_C:"How much longer do you have to wait until returning to The Upside Down? Stranger Things Season 2 coming soon to Netflix.",

        PanoMoments:"PanoMoments",
        PanoMoments_A:"PanoMoments",
        PanoMoments_C:"PanoMoments are a new creative VR format that couple time and space.",

        Witch_Brew:"Witch's Brew",
        Witch_Brew_A:"Andrew Fraticelli",
        Witch_Brew_C:"A-Frame is an open-source web framework for building virtual reality (VR) experiences.It is primarily maintained by Mozilla and the WebVR community. It is an entity component system framework for Three.js where developers can create 3D and WebVR scenes using HTML. HTML provides a familiar authoring tool for web developers and designers while incorporating a popular game development pattern used by engines such as Unity.",

        Night_Eye:"Night Eye",
        Night_Eye_A:"Christmas Experiments",
        Night_Eye_C:"Explore the night forest, manipulate the elements and frolic with the light creatures.",

        /*
        cru_ci_form:"cru ci form",
        cru_ci_form_A:"thespite + sejnulla",
        cru_ci_form_C:"A study in architectural visualisation.",
        */

        GuriVR:"GuriVR",
        GuriVR_A:"GuriVR",
        GuriVR_C:"Describe your VR experience and the editor will do the rest.",

        Ye_Olde_Puppetrilla:"Ye Olde Puppetrilla",
        Ye_Olde_Puppetrilla_A:"Jorge Fuentes",
        Ye_Olde_Puppetrilla_C:"Ye Olde Puppetrilla has arrived in town and everybody's here to enjoy your puppeteering skills.",

        Vizor_3_Cubemaps:"Vizor: 3 Cubemaps",
        Vizor:"Vizor",
        Vizor_3_Cubemaps_C:"Vizor is a platform for creating and sharing VR experiences.",

        Vizor_Marimekko:"Vizor: Marimekko",
        Vizor_Marimekko_C:"Vizor is a platform for creating and sharing VR experiences.",

        Vizor_Sample_Capture:"Vizor: Sample Capture",
        Vizor_Sample_Capture_C:"Vizor is a platform for creating and sharing VR experiences.",

        Within_Giant:"Within: Giant",
        Within_Giant_C:"Trapped inside a war zone, two parents struggle to distract their young daughter by inventing a fantastical tale. Inspired by real events.",

        Within_Kinoscope:"Within: Kinoscope",
        Within_Kinoscope_C:"A colorful exploration of the the history of cinema-from Méliès to Tarantino-told by Oscar-winning production designer Dean Tavoularis.",
        
        Vimeo_Video:"Vimeo Video",
        Vimeo_A:"Vimeo",
        Vimeo_Video_C:"This demo shows you how you can stream regular and 360 videos from your own Vimeo account into a WebVR app. It's all built on top of A-frame & React and is powered by Glitch.",

        Vimeo_360_Video:"Vimeo 360 Video",
        Vimeo_360_Video_C:"This demo shows you how you can stream regular and 360 videos from your own Vimeo account into a WebVR app. It's all built on top of A-frame & React and is powered by Glitch.",

        Weightless:"Weightless",
        Weightless_A:"Ningxia Zhang",
        Weightless_C:"A series of VR installations, with generative, minimal and geometric qualities.",

        WebVR_Lab:"WebVR Lab",
        PlayCanvas:"PlayCanvas",
        WebVR_Lab_C:"A living project built by the PlayCanvas team to help developers learn about creating scalable and responsive WebVR applications for all devices.",

        Orange_Room:"Orange Room",
        Orange_Room_C:"Interactive interior visualisation with dynamic reflections and HDR lightmaps with WebVR.",

        WebVR_360:"WebVR 360",
        WebVR_360_C:"360 Video with WebVR support.",

        Graf_3D_forest:"Graf’s 3D forest",
        Graf_3D_forest_A:"nikgraf",
        Graf_3D_forest_C:"React 360 is a framework for the creation of interactive 360 experiences that run in your web browser. It pairs modern APIs like WebGL and WebVR with the declarative power of React, producing applications that can be consumed through a variety of devices. Leveraging web technologies and the existing React ecosystem, React 360 aims to simplify the construction of cross-platform 360 experiences.",

        Mystrock:"Mystrock",
        Mystrock_C:"Mystrock combines the classic Adventure Puzzle games, Myst and Riven, with strong RPG elements via the Legend of Grimrock 2 and The Elder Scrolls platforms.",

        Falcon_Heavy:"Falcon Heavy",
        Falcon_Heavy_A:"Ottifox",
        Falcon_Heavy_C:"Playing with the effects component after export, a bit hard on performance, but does make it more fun to view.",

        Lazy_Sunday_Simulator:"Lazy Sunday Simulator",
        Lazy_Sunday_Simulator_A:"Anthony Prum",
        Lazy_Sunday_Simulator_C:"Lazy Sunday Simulator was made for a project in my production class with Karen Vanderborght for Integrated Digital Media. We were to create a portrait with no face in VR with an assigned VR creation tool. This project was a technical exercise to get us acquainted with working in a three dimensional space and how to direct a viewer through it.",

        Starman:"Starman",
        Starman_A:"aimeedotkim",
        Starman_C:"Starman by aimeedotkim.",

        Lights:"Lights",
        Lights_A:"Mozilla VR",
        Lights_C:"A-Frame is an open-source web framework for building virtual reality (VR) experiences.[1] It is primarily maintained by Mozilla and the WebVR community. It is an entity component system framework for Three.js where developers can create 3D and WebVR scenes using HTML. HTML provides a familiar authoring tool for web developers and designers while incorporating a popular game development pattern used by engines such as Unity.",

        Museum:"Museum",
        Museum_A:"Mozilla VR",
        Museum_C:"Aframe-Museum is A 3D Virtual Museum built using A-Frame; A web framework that provides HTML components to make WebVR and build virtual reality experience.The museum is located somewhere in the space where nobody lives except a cute penguin that will guide you through your journey.",

        gBlock:"gBlock",
        gBlock_A:"Archilogic.com",
        gBlock_C:"gBlock Component by 3d.io for A-Frame loading remixable models.",

        Video360:"360° Video",
        Video360_A:"Mozilla VR",
        Video360_C:"A-Frame is an open-source web framework for building virtual reality (VR) experiences.It is primarily maintained by Mozilla and the WebVR community. It is an entity component system framework for Three.js where developers can create 3D and WebVR scenes using HTML. HTML provides a familiar authoring tool for web developers and designers while incorporating a popular game development pattern used by engines such as Unity.",

        Anime_UI:"Anime UI",
        Anime_UI_A:"Mozilla VR",
        Anime_UI_C:"A-Frame is an open-source web framework for building virtual reality (VR) experiences.It is primarily maintained by Mozilla and the WebVR community. It is an entity component system framework for Three.js where developers can create 3D and WebVR scenes using HTML. HTML provides a familiar authoring tool for web developers and designers while incorporating a popular game development pattern used by engines such as Unity.",

        Pokemon:"Pokemon",
        Pokemon_A:"ngokevin",
        Pokemon_C:"Pokemon in MagicaVoxel and A-Frame.",

        Shooting_Stars:"Shooting Stars",
        Shooting_Stars_A:"lazerGlazer_Viz",
        Shooting_Stars_C:"Experiment in Spontaneous Meditation.",

        Imagined_Reality:"Imagined Reality",
        Imagined_Reality_A:"bryik",
        Imagined_Reality_C:"Imagined Reality by Benjamin Aguillon.",

        Spider:"Spider",
        Spider_A:"Marpi",
        Spider_C:"Low Poly WebGL+WebVR Spider Study.",

        Float:"Float",
        Float_A:"ngokevin",
        Float_C:"Floating sky islands for WebVR.",

        Resonate_Audio_Reactive:"Resonate: Audio Reactive",
        Resonate_Audio_Reactive_A:"Marpi",
        Resonate_Audio_Reactive_C:"Building generative VR worlds.",

        Black_Rain:"Black Rain",
        Black_Rain_A:"Marpi x Archan Nair",
        Black_Rain_C:"A WebVR experiment, explore worlds of Archan Nair.",

        Eutow:"Eutow",
        // Eutow_A:"Marpi x Archan Nair",
        Eutow_C:"WebVR experiment, explore worlds of Archan Nair.",
        Chordano:"Chordano",
        Chordano_A:"Michael Casebolt",
        Chordano_C:"A WebVR piano.",

        babylon_js_Sponza_demo:"Babylon.js - Sponza demo",
        Microsoft:"微軟",
        Babylon:"Babylon",
        babylon_js_Sponza_demo_C:"A tranquil action puzzle game for VR and mobile.",

        epic_medieval_battle:"Epic Medieval Battle",
        epic_medieval_battle_A:"Danilo Pasquariello",
        epic_medieval_battle_C:"An interactive WebVR experience.",

        elfland_glider:"Elfland Glider",
        elfland_glider_A:"P. Douglas Reeder",
        elfland_glider_C:"A tranquil action puzzle game for VR and mobile.",

        global_seed_vault:"Global Seed Vault",
        global_seed_vault_A:"Crop Trust",
        global_seed_vault_C:"Experience the visit of the Global Seed Vault in Svalbard.",

        studio_venezia:"Studio Venezia",
        studio_venezia_A:"Studio Venezia",
        studio_venezia_C:"Xavier Veilhan's French pavilion.",
        
        ufomammoot:"ufomammoot",
        ufomammoot_A:"ufomammoot",
        ufomammoot_C:"We are an independent digital agency based in Berlin providing innovative & creative concepts for brands.",
        
        ocean_of_thought:"Ocean Of Thought",
        ocean_of_thought_A:"machinedrum",
        ocean_of_thought_C:"Vizor is a platform for creating and sharing VR experiences.",
        
        super_says:"Super Says",
        super_says_A:"supermedium",
        super_says_C:"Test your memory with this Simon minigame in WebVR.",
        
        trajectile_command:"Trajectile Command",
        trajectile_command_A:"AdamAlexandr",
        trajectile_command_C:"A free WebVR action game using @aframevr.",
        
        mathworld_vr:"Mathworld VR",
        mathworld_vr_A:"michaltakac",
        mathworld_vr_C:"I am convinced that the best learning takes place when the learner takes charge.",
        
        footer_statement:"本網站上出現的所有資料，包括商標、圖片、商標名、文字均為其所有者的財產，受到全球商標及著作權法的保護",
        footer_legal:"法律聲明",
        Search:"搜尋",
        Language:"語言",
        BUTTON_LANG_EN:"英文",
        BUTTON_LANG_ES:"中文"
    });
    $translateProvider.useSanitizeValueStrategy('escape');
    $translateProvider.preferredLanguage('en');
    
  });
  app.controller('Ctrl',['$scope', '$translate', function ($scope, $translate) {
    $scope.changeLanguage = function(key){
      $translate.use(key);
    };
  }]);