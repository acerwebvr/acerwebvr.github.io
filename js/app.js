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
        header_caption:"With your Acer Windows Mixed Reality Headset, you can experience VR in Acer Chromium Browser just by clicking a link.",
        header_btn1:"ABOUT ACER MIXED REALITY HEADSET",

        Category:"Category",
        Author:"Author",
        Framework:"Framework",
        view_vr_btn:"View VR Experience",
        
        The_British_Museum:"The British Museum",
        The_British_Museum_A:"The British Museum",
        The_British_Museum_C:"The full tour will give users an unparalleled digital experience using any computer or mobile device, and the chance to become fully immersed using a VR headset. High resolution 360-degree photography has been combined with layers of additional content, including expert audio commentary from our curators and interactive 3D models of highlight objects. Now the Museum will be at your fingertips from anywhere in the world!",

        National_Gallery:"National Gallery",
        National_Gallery_A:"The National Gallery",
        National_Gallery_C:"Enjoy over 270 paintings in virtual reality with a VR headset, or browse a 360 tour on your desktop or mobile. Immersive media company Matterport created a 3D virtual tour of the National Gallery's Sainsbury Wing. In this experience you can walk around the Gallery, get up-close to the paintings, and even view the rooms from above in 3D.",
        
        Lights:"Lights",
        Lights_A:"Mozilla VR",
        Lights_C:"A-Frame is an open-source web framework for building virtual reality (VR) experiences.[1] It is primarily maintained by Mozilla and the WebVR community. It is an entity component system framework for Three.js where developers can create 3D and WebVR scenes using HTML. HTML provides a familiar authoring tool for web developers and designers while incorporating a popular game development pattern used by engines such as Unity.",

        Jumanji:"Jumanji: Welcome to the Jungle",
        Jumanji_A:"Sony Pictures",
        Jumanji_C:"In a brand new Jumanji adventure, four high school kids discover an old video game console and are drawn into the game's jungle setting, literally becoming the adult avatars they chose.",

        USA_TODAY_Buffalo_Trace_Distillery:"USA TODAY: Buffalo Trace Distillery",
        USA_TODAY_Buffalo_Trace_Distillery_A:"USA TODAY",
        USA_TODAY_Buffalo_Trace_Distillery_C:"USA TODAY NETWORK takes you inside Kentucky’s 200-year-old Buffalo Trace Distillery to learn the ins and outs of bourbon production. You're guided by the master distiller and a tour guide through the warehouse and distilling room, as well as “Bourboun Pompeii” and “Warehouse X”—two spots that aren’t on the public tour. The interactive released earlier this year has been updated for better performance, and contains 360-degree photos layered with 2-D videos, text and spatial audio.",
        
        Oyster:"Oyster",
        Oyster_A:"Oyster",
        Oyster_C:"Owned by Trip Advisor and operated independently, Oyster.com sends investigators out to hotels and travel destinations around the world where they’ve captured thousands of unedited 360° photos. With React VR, they’ve built an interactive experience that lets travelers try before they fly.",

        Puzzle_Rain:"Puzzle Rain",
        Puzzle_Rain_A:"Mozilla VR",
        Puzzle_Rain_C:"Puzzle Rain is a musical journey in which you help awaken and guide mythical creatures back together into happy musical harmony with one another. Only their combined musical chorus can summon life-giving rain to revive the parched and desolate landscape. Though, there isn’t much time. Dangerous predators roam!",

        Up_There:"Up There",
        Up_There_A:"ngokevin",
        Up_There_C:"Planetarium of 100K real stars. Spot exoplanets, travel through time, hold the galaxy in your hands with the grip buttons.",
        
        Aurora:"Aurora",
        Aurora_A:"Gnometech",
        Aurora_C:"Catch the northern lights (aurora borealis) live in Yellowknife, Canada.",
        
        Slime_Freighter:"Slime Freighter",
        Slime_Freighter_A:"Algoraphics",
        Slime_Freighter_C:"This is a music video style VR experience made with A-Frame.",
        
        A_Saturday_Night:"A-Saturday-Night",
        A_Saturday_Night_A:"Mozilla VR",
        A_Saturday_Night_C:"On a-saturday-night, we wanted to create a fun experience around the idea of recording and reproducing tracking data. The mechanics are simple: Put your headset on, select an avatar, and dance. At the end of the countdown, and thanks to the magic of the Web, you will get a link like this one with the recorded dance that you can share instantly with anybody.",
        
        Anime_UI:"Anime UI",
        Anime_UI_A:"Mozilla VR",
        Anime_UI_C:"A-Frame is an open-source web framework for building virtual reality (VR) experiences.It is primarily maintained by Mozilla and the WebVR community. It is an entity component system framework for Three.js where developers can create 3D and WebVR scenes using HTML. HTML provides a familiar authoring tool for web developers and designers while incorporating a popular game development pattern used by engines such as Unity.",

        GBlock:"GBlock",
        GBlock_A:"archilogic-com",
        GBlock_C:"gBlock Component by 3d.io for A-Frame loading remixable models.",
        
        Falcon_Heavy:"Falcon Heavy",
        Falcon_Heavy_A:"Ottifox",
        Falcon_Heavy_C:"Playing with the effects component after export, a bit hard on performance, but does make it more fun to view.",
        
        Lazy_Sunday_Simulator:"Lazy Sunday Simulator",
        Lazy_Sunday_Simulator_A:"Anthony Prum",
        Lazy_Sunday_Simulator_C:"Lazy Sunday Simulator was made for a project in my production class with Karen Vanderborght for Integrated Digital Media. We were to create a portrait with no face in VR with an assigned VR creation tool. This project was a technical exercise to get us acquainted with working in a three dimensional space and how to direct a viewer through it.",
        
        Starman:"Starman",
        Starman_A:"aimeedotkim",
        Starman_C:"Starman by aimeedotkim.",
        
        Super_Finland:"Super Finland",
        Super_Finland_A:"Vizor",
        Super_Finland_C:"Vizor 360-create 360 tours, stories, sites and WebVR experiences as easy as drag and drop.",

        Weightless:"Weightless",
        Weightless_A:"Ningxia Zhang",
        Weightless_C:"A series of VR installations, with generative, minimal and geometric qualities.",
        
        National_Geographic:"National Geographic",
        National_Geographic_A:"National Geographic",
        National_Geographic_C:"Vizor 360-create 360 tours, stories, sites and WebVR experiences as easy as drag and drop.",
        
        WebVR_Lab:"WebVR Lab",
        WebVR_Lab_A:"PlayCanvas",
        WebVR_Lab_C:"A living project built by the PlayCanvas team to help developers learn about creating scalable and responsive WebVR applications for all devices.",
        
        Orange_Room:"Orange Room",
        Orange_Room_A:"PlayCanvas",
        Orange_Room_C:"Interactive interior visualisation with dynamic reflections and HDR lightmaps with WebVR.",
        
        Graf_3D_forest:"Graf’s 3D forest",
        Graf_3D_forest_A:"nikgraf",
        Graf_3D_forest_C:"React 360 is a framework for the creation of interactive 360 experiences that run in your web browser. It pairs modern APIs like WebGL and WebVR with the declarative power of React, producing applications that can be consumed through a variety of devices. Leveraging web technologies and the existing React ecosystem, React 360 aims to simplify the construction of cross-platform 360 experiences.",

        Netflix_Stranger_Things_Count_Down:"Netflix-Stranger Things Count Down",
        Netflix_Stranger_Things_Count_Down_A:"studiozeroco",
        Netflix_Stranger_Things_Count_Down_C:"How much longer do you have to wait until returning to The Upside Down? Stranger Things Season 2 coming soon to Netflix.",

        Witch_Brew:"Witch's Brew",
        Witch_Brew_A:"Andrew Fraticelli",
        Witch_Brew_C:"A-Frame is an open-source web framework for building virtual reality (VR) experiences.It is primarily maintained by Mozilla and the WebVR community. It is an entity component system framework for Three.js where developers can create 3D and WebVR scenes using HTML. HTML provides a familiar authoring tool for web developers and designers while incorporating a popular game development pattern used by engines such as Unity.",

        Mass_Migrations:"Mass Migrations",
        Mass_Migrations_A:"marpi",
        Mass_Migrations_C:"An experiment in mecha world creation. Create, adopt and set them free.",

        Under_Neon_Lights:"Under Neon Lights",
        Under_Neon_Lights_A:"WITHIN",
        Under_Neon_Lights_C:"An interactive, virtual reality music experience from Within, featuring the song “Under Neon Lights” by the Chemical Brothers and St. Vincent.",

        Ye_Olde_Puppetrilla:"Ye Olde Puppetrilla",
        Ye_Olde_Puppetrilla_A:"Jorge Fuentes",
        Ye_Olde_Puppetrilla_C:"Ye Olde Puppetrilla has arrived in town and everybody's here to enjoy your puppeteering skills.",

        Pokemon:"Pokemon",
        Pokemon_A:"ngokevin",
        Pokemon_C:"Pokemon in MagicaVoxel and A-Frame.",

        Shooting_Stars:"Shooting Stars",
        Shooting_Stars_A:"lazerGlazer_Viz",
        Shooting_Stars_C:"Experiment in Spontaneous Meditation.",
        
        Spider:"Spider",
        Spider_A:"Marpi",
        Spider_C:"Low Poly WebGL+WebVR Spider Study.",

        Resonate_Audio_Reactive:"Resonate: Audio Reactive",
        Resonate_Audio_Reactive_A:"Marpi",
        Resonate_Audio_Reactive_C:"Building generative VR worlds.",

        Eutow:"Eutow",
        Eutow_A:"Marpi x Archan Nair",
        Eutow_C:"WebVR experiment, explore worlds of Archan Nair.",
        
        Chordano:"Chordano",
        Chordano_A:"Michael Casebolt",
        Chordano_C:"A WebVR piano.",
        
        global_seed_vault:"Global Seed Vault",
        global_seed_vault_A:"Crop Trust",
        global_seed_vault_C:"Experience the visit of the Global Seed Vault in Svalbard.",
        
        babylon_js_Sponza_demo:"Babylon Sponza demo",
        babylon_js_Sponza_demo_A:"Microsoft",
        babylon_js_Sponza_demo_C:"Sponza by Babylon.js demo using WebGL, Web Audio, touch & gamepad on desktop, mobile & xbox one devices.",
        
        epic_medieval_battle:"Epic Medieval Battle",
        epic_medieval_battle_A:"Danilo Pasquariello",
        epic_medieval_battle_C:"An interactive WebVR experience.",
        
        elfland_glider:"Elfland Glider",
        elfland_glider_A:"P. Douglas Reeder",
        elfland_glider_C:"A tranquil action puzzle game for VR and mobile.",
        
        studio_venezia:"Studio Venezia",
        studio_venezia_A:"Studio Venezia",
        studio_venezia_C:"Xavier Veilhan's French pavilion.",
        
        ufomammoot:"Ufomammoot",
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
        
        networked_aframe:"Networked Aframe",
        networked_aframe_A:"networked-aframe",
        networked_aframe_C:"A web framework for building multi-user virtual reality experiences.",
        
        webvr_boilerplate:"WebVR Boilerplate",
        webvr_boilerplate_A:"borismus",
        webvr_boilerplate_C:"WebVR Boilerplate is a toolkit for WebVR creators to develop, build and deploy static WebVR experiences to the web.",
        
        cat_amari:"Cat-amari",
        cat_amari_A:"Cat-amari",
        cat_amari_C:"A WebVR experience.",
        
        visualizing_evolutionary_history_with_webvr:"Visualizing evolutionary history with WebVR",
        visualizing_evolutionary_history_with_webvr_A:"emilydolson",
        visualizing_evolutionary_history_with_webvr_C:"A WebVR experience.",
        
        a_vr_picnic:"A VR Picnic",
        a_vr_picnic_A:"dixpark",
        a_vr_picnic_C:"A VR Picnic.",
        
        lava:"Lava",
        lava_A:"felipenmoura",
        lava_C:"A WebVR experience.",
        
        vr_cube_tunnel:"VR Cube Tunnel",
        vr_cube_tunnel_A:"Caleb Miller",
        vr_cube_tunnel_C:"VR Cube Tunnel.",
        
        expedition_wilde_welten:"Expedition Wilde Welten",
        expedition_wilde_welten_A:"Kubikfoto",
        expedition_wilde_welten_C:"Support PC, Mobil, Google Cardboard oder Rift und Vive.",
        
        Photo_360:"360 Photo",
        Photo_360_A:"Mozilla VR",
        Photo_360_C:"Puy de Sancy, France.",
        
        the_national_museum_of_computing:"The National Museum of Computing",
        the_national_museum_of_computing_A:"venueview.co.uk",
        the_national_museum_of_computing_C:"A museum that brings to life the history and ongoing development of computing for inspiration, education, learning and enjoyment.",
        
        matterport:"Matterport",
        matterport_A:"Acme Realty",
        matterport_C:"This majestic looking home has wood flooring, crown molding, is a great family home. This tour was shot with the Matterport Pro2 3D camera.",
        
        a_painter:"A-Painter",
        a_painter_A:"FERNANDO SERRANO",
        a_painter_C:"To browse paintings, you just need a browser with WebGL, but to fulfill your artistic urges you need a system with hand-tracked controllers.",
        
        dark_haze:"Dark Haze",
        dark_haze_A:"christmasxp",
        dark_haze_C:"Music and shader experiment.",
        
        sketch_mars_one:"Sketch / Mars One",
        sketch_mars_one_A:"admone",
        sketch_mars_one_C:"Mars One is a young and growing organization with a team of eight. This team is supported by an impressive board of ambassadors and advisers from all over the world; including an astronaut, Nobel Prize laureate, and the former NASA Chief Technologist. Mars One receives donations from people in over 100 countries and over 200,000 applied for the first crew selection procedure.Mars One will soon announce a media deal with one of the world’s biggest production companies in order to create a show around selecting our crews. Big brands are showing interest in associating their corporate stories with Mankind’s Mission to Mars.Lockheed Martin and other major aerospace companies are ready to implement Mars One’s plan. Work on the first unmanned mission, scheduled for launch in 2020, has already started.",
        
        speak_to_go:"Speak to Go",
        speak_to_go_A:"Google Creative Lab & Jaume Sanchez",
        speak_to_go_C:"Explore the world with your voice.",
        
        a_way_to_go:"A Way to Go",
        a_way_to_go_A:"AATOAA",
        a_way_to_go_C:"Way to Go is an interactive experience for human beings between 5 and 105 years old.",
        
        space_disater:"Space Disater",
        space_disater_A:"Yuri Kovelenov",
        space_disater_C:"The game, of course, can be played without any headset too. If you are interested in how this all was done and/or want to create your own WebGL/WebVR game, check the source files both in the Blend4Web PRO and Community Edition distros.",
        
        finding_love:"Finding Love",
        finding_love_A:"Active Theory",
        finding_love_C:"Finding Love is a fully interactive, Virtual Reality story that transforms emotions into art. Moving through five distinct chapters, you experience the journey purely through visuals and sound.",
        
        gaze_timing_selection:"Gaze timing selection",
        gaze_selection_based_on_a_timing_approach_A:"None",
        gaze_selection_based_on_a_timing_approach_C:"Small sample to show how to implement a gaze timing selection approach on mobile for instance.",
        
        vr_experience_babylon:"VR Experience-Babylon",
        vr_experience_babylon_A:"None",
        vr_experience_babylon_C:"Simple VR sample to show interactions on GUI with the VRExperienceHelper.",
        
        vizor_360:"Vizor 360",
        vizor_360_A:"Vizor",
        vizor_360_C:"Build the Immersive Web with Vizor as easy as drag and drop.",
    
        tavern_king:"Tavern King",
        tavern_king_A:"Mozilla VR",
        tavern_king_C:"In the Tavern of the Wild Boar.",
        
        matterport_national_museum_of_iraq:"Matterport-National Museum of Iraq",
        matterport_national_museum_of_iraq_assyrian_hall_A:"The Associated Press",
        matterport_national_museum_of_iraq_assyrian_hall_C:"Featured by the Associated Press, the Iraq National Museum was established after World War I and features prized artifacts from the Mesopotamian civilization. Over the past few years, the Islamic State group has damaged ancient sites across Iraq and Syria, and so the museum's preservation of ancient artifacts is now more important than ever. The Assyrian Hall contains treasures from the Assyrian Empire including two towering deities known as Lamassu and a statue from the temple of Nabu.",
        
        matterport_european_museum_of_modern_art:"Matterport-European Museum of Modern Art",
        matterport_european_museum_of_modern_art_A:"Drone Projects",
        matterport_european_museum_of_modern_art_C:"The European Museum of Modern Art, also known as Museu Europeu d'Art Modern (MEAM), opened in 2011 inside the old Gomis Palace in Barcelona, Spain. Rebuilt in 1792, Gomis Palace was used by French commander Marshal Lecchi during the Napoleonic invasion. Today, it is home to many art exhibits such as this one featuring sculptor Grzegorz Gwiazda.",
        
        matterport_urban_brewing:"Matterport-Urban Brewing",
        matterport_urban_brewing_A:"Digisoft",
        matterport_urban_brewing_C:"Urban Brewing is a microbrewery, bar, and restaurant found in Dublin, Ireland's CHQ Building. While the main entrance appears wonderfully modern, guests will be welcomed to a 19th-century basement warehouse which offers a warm, intimate environment. Guests who want a more casual experience can enjoy tapas-style dishes at Urban Brewery's Taps+Tapas, while those looking for something more sizable can dine at its Stack A Restaurant.",
        
        pretend_city_childrens_museum:"Pretend City Children's Museum",
        pretend_city_childrens_museum_A:"ThreeDRealty.com",
        pretend_city_childrens_museum_C:"Pretend City is a children's museum found in Irvine, California. Designed to look like a miniature city, Pretend City's 17 interactive exhibits teach children foundational skills in math, reading, and science while fostering their creativity, critical thinking, and problem-solving skills. Pretend City's exhibits include a bank, dentist office, and grocery store.",
        
        chromatic:"Chromatic",
        chromatic_A:"Funktronic Labs",
        chromatic_C:"Experience a kaleidescope of iridescent prisms and meditative soundscapes.",
        
        vizor_stardrone:"Vizor-Stardrone",
        vizor_stardrone_A:"Vizor",
        vizor_stardrone_C:"Vizor is a platform for creating and sharing VR experiences.",
        
        vizor_camera_flying:"Vizor-Camera Flying",
        vizor_camera_flying_A:"Vizor",
        vizor_camera_flying_C:"Vizor is a platform for creating and sharing VR experiences.",
        
        polygon_shredder:"Polygon Shredder",
        polygon_shredder_A:"Jaume Sanchez",
        polygon_shredder_C:"The polygon shredder that takes many cubes and turns them into confetti.",
        
        sound_boxing:"Sound Boxing",
        sound_boxing_A:"soundboxing.co",
        sound_boxing_C:"Swing your arms to destroy incoming yellow and red orbs. Get more points for strength and accuracy—and get a low intensity workout while you’re at it!",
        
        gunters_of_oasis:"Gunters of OASIS",
        gunters_of_oasis_A:"supermedium",
        gunters_of_oasis_C:"A web framework for building virtual reality experiences. Make WebVR with HTML and Entity-Component. Works on Vive, Rift, desktop, mobile platforms.",
        
        van_gogh_room:"Van gogh Room",
        van_gogh_room_A:"ruslans3d",
        van_gogh_room_C:"Van gogh Room This model is featured in the official Sketchfab.",
        
        pirate_tower:"Pirate Tower",
        pirate_tower_A:"benlucas59",
        pirate_tower_C:"A cartoon 3D scene made in 2012 to learn ZBrush stylised sculpting. Based on the great concept art from Artyom Vlaskin.",
        
        mg_police_roadster:"MG Police Roadster",
        mg_police_roadster_A:"alankailei",
        mg_police_roadster_C:"Created this Snowberry White MGC for some Substance practice. I may possibly add the engine bay, trunk, and flesh out the under carriage in the future.",
        
        church_of_st_mary_at_mount_naranco:"Church of St Mary at Mount Naranco",
        church_of_st_mary_at_mount_naranco_A:"Raiz",
        church_of_st_mary_at_mount_naranco_C:"The church of St Mary at Mount Naranco.",
        
        west_loop_chicago_condo:"West Loop Chicago Condo",
        west_loop_chicago_condo_A:"John Smith",
        west_loop_chicago_condo_C:"This apartment boasts high ceilings, wood floors, and a modern touch. This virtual tour was captured with the Matterport Pro2 3D Camera.",
        
        b747_400_global_supertanker:"B747-400 Global SuperTanker",
        b747_400_global_supertanker_A:"Circular Worlds LLC",
        b747_400_global_supertanker_C:"The B747-400 Global SuperTanker is the largest capacity aerial firefighting tanker and can hold up to 20,000 gallons of fire retardant.",
        
        eastside_fire_rescue_station_83:"Eastside Fire & Rescue Station 83",
        eastside_fire_rescue_station_83_A:"Tosolini Productions",
        eastside_fire_rescue_station_83_C:"Eastside Fire & Rescue Station #83 is located in Sammamish, Washington, 13 miles from Seattle. This station houses three fire vehicles: E38 Emergency One Engine, A83 Ford E-450 Aid Car, and A83A Ford F-350 Aid Car. Eastside Fire & Rescue provides fire suppression, prevention, and emergency services to a growing population base of over 130,000 citizens, operating within a service area of approximately 190 square miles.",
        
        temple_dongjingyuan:"Temple Dongjingyuan",
        temple_dongjingyuan_A:"Tosolini Productions",
        temple_dongjingyuan_C:"Temple Dongjingyuan was once a former Qing dynasty Buddhist temple. Located in central Beijing, this heritage site was originally constructed in the 18th century and is now repurposed for several cultural events. In 2012, the temple was the honored recipient of the Award of Merit from the UNESCO Asia-Pacific Awards for Cultural Heritage Conservation.",
        
        planetarium_hamburg:"Planetarium Hamburg",
        planetarium_hamburg_A:"Claudia Berger",
        planetarium_hamburg_C:"The impressive Planetarium is the centrepiece of Hamburg’s Stadtpark. Built between 1912 and 1915, the 70 metres tall Planetarium was originally a water tower, designed to be a highly visible, representative landmark. After a 12-month transformation, the Planetarium opened its doors in 1930, making it one of the oldest observatories in the world.",
        
        oxford_museum_of_natural_history:"Oxford Museum of Natural History",
        oxford_museum_of_natural_history_A:"www.tourdimensional.com",
        oxford_museum_of_natural_history_C:"Strolling the aisles of the Oxford University Museum of Natural History, you’ll find diverse exhibits on our planet’s past. The neo-Gothic building, built in 1860, houses a growing collection of geological and zoological specimens, including reconstructed dinosaur skeletons, taxidermy, and ancient fossils. Take a look around for the 40-foot Tyrannosaurus Rex, Alice’s dodo, and meteorites!",
        
        microsoft_recruitment_center:"Microsoft Recruitment Center",
        microsoft_recruitment_center_A:"Tosolini Productions LLC",
        microsoft_recruitment_center_C:"The Microsoft Recruitment Center in Redmond, Washington is one of the first stops for many prospective Microsoft employees. Before meeting with their hiring teams, recruits and interns will need to check into this lobby filled with Microsoft products, designs, and information which gives a clearer picture of the tech giant's work culture. The Mattertags in this model help inform potential candidates about the company before they even step foot inside the building.",
        
        placa_de_video_gtx:"Placa de video - GTX",
        placa_de_video_gtx_A:"Sin Red",
        placa_de_video_gtx_C:"nVidia Placa de video - GTX 690.",
        
        going_merry:"Going Merry",
        going_merry_A:"JPrian94",
        going_merry_C:"Sketchfab One piece sample.",
        
        sogearch_roman_amphitheatre:"SoGEArch, Roman amphitheatre",
        sogearch_roman_amphitheatre_A:"SoGEArch S.r.l.s.",
        sogearch_roman_amphitheatre_C:"SoGEArch offers solutions applied in the field of Geology, Archaeology, Engineering and Topography, making use of the many years of experience in the field of its members and employees, supported by the most modern technologies.",
        
        arena_chapel_scrovegni_chapel:"Arena Chapel / Scrovegni Chapel",
        arena_chapel_scrovegni_chapel_A:"Matthew Brennan",
        arena_chapel_scrovegni_chapel_C:"The Scrovegni Chapel, also known as the Arena Chapel because of the nearby Ancient Roman arena. The chapel is known for its impressive cycle of frescoes painted by Giotto, a Florentine painter and architect.",
        
        tirano:"Tirano",
        tirano_A:"lucaoshrs",
        tirano_C:"This model was sculpted in ZBrush and rigged in Blender.",
        
        amx_30_french_army_main_battle_tank:"Amx-30 - French army Main Battle Tank",
        amx_30_french_army_main_battle_tank_A:"Drones Imaging",
        amx_30_french_army_main_battle_tank_C:"The AMX-30 is a main battle tank designed by Ateliers de construction d’Issy-les-Moulineaux (AMX, then GIAT) and first delivered to the French Army in 1966.",
        
        starry_night_diorama_tilt_brush:"Starry Night Diorama Tilt Brush",
        starry_night_diorama_tilt_brush_A:"george peaslee",
        starry_night_diorama_tilt_brush_C:"Vincent Van Gogh’s Starry Night Painting turned into a VR diorama. Exporting it as an fbx, the model lost all its original coarse brush strokes :/ original look here: https://www.youtube.com/watch?v=SKcCnEvSsKU&spfreload=10Made on Google Tilt Brush (VR).",
        
        coliseo_de_roma_roman_colosseum:"Coliseo de Roma / Roman Colosseum",
        coliseo_de_roma_roman_colosseum_A:"Néstor F. Marqués",
        coliseo_de_roma_roman_colosseum_C:"El anfiteatro flavio de Roma, conocido mundialmente como Coliseo fue construido entre el 24 de mayo del año 70 d.C. y el 29 de junio del año 80 d.C. bajo el mandato del emperador Vespasiano y posteriormente inaugurado por su hijo el emperador Tito.",
        
        pet_derpy_onyxs:"Pet derpy Onyx's",
        pet_derpy_onyxs_A:"Kevin Ngo",
        pet_derpy_onyxs_C:"Supermedium sample.",
        
        little_toy_islands:"Little toy islands",
        little_toy_islands_A:"supermedium",
        little_toy_islands_C:"Make your own little toy islands!",
        
        snowy_island:"Snowy-island",
        snowy_island_A:"Martin Splitt",
        snowy_island_C:"Christmas card with your 3D model from 2014.",
        
        santas_watching:"Santas-watching",
        santas_watching_A:"Eva Hoerth",
        santas_watching_C:"Merry Christmas and Happy Holidays.",
        
        physics_components:"Physics components",
        physics_components_A:"Álvaro Casado",
        physics_components_C:"simple physics componentss.",
        
        codevember_sapphire:"Codevember sapphire",
        codevember_sapphire_A:"Kieran Farr",
        codevember_sapphire_C:"codevember sapphire.",
        
        webvr_laser_harp:"WebVR Laser Harp",
        webvr_laser_harp_A:"None",
        webvr_laser_harp_C:"Fun experiment to play a Jean-Michel Jarre's like Laser Harp using the WebVR controllers.",
        
        webvr_demo:"WebVR Demo",
        webvr_demo_A:"None",
        webvr_demo_C:"View a basic mesh and interact with a gui in webVR.",
        
        cathedral_of_the_Immaculate_conception:"Cathedral of the Immaculate Conception",
        cathedral_of_the_Immaculate_conception_A:"MCWB Architects",
        cathedral_of_the_Immaculate_conception_C:"The Cathedral of Immaculate Conception in Albany, New York is full of rich history. Constructed in 1852, the cathedral was originally commissioned by Irish Bishop John McCloskey in order to serve his flock of Catholics who fled Ireland from the Potato Famine.",
        
        buffalo_botanical_gardens:"Buffalo Botanical Gardens",
        buffalo_botanical_gardens_A:"Erik Walczak",
        buffalo_botanical_gardens_C:"The Buffalo Botanical Gardens in Buffalo, NY was designed by Frederick Olmsted who famously designed Central Park in New York City. Certain elements of the garden, such as the tri-domed glass, were designed by Lord and Burnham who designed the Crystal Palace in England.",
        
        spirited_away_sea_railway:"Spirited Away - Sea Railway",
        spirited_away_sea_railway_A:"fongoose",
        spirited_away_sea_railway_C:"Here’s my final entry for the ‘Lights, Camera, Immersion’ contest. I chose to recreate the ‘Sea-Railway’ scene from ‘Spirited Away’ - A truly inspiring movie.s",
        
        apollo_11_vr_experience:"Apollo 11 VR Experience",
        apollo_11_vr_experience_A:"arck-project",
        apollo_11_vr_experience_C:"Americans Neil Armstrong and Buzz Aldrin landed on the moon July 20, 1969. Armstrong became the first to step onto the lunar surface six hours later on July 21 at 02:56:15 UTC; Aldrin joined him about 20 minutes later.",
        
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
        
        The_British_Museum:"The British Museum",
        The_British_Museum_A:"The British Museum",
        The_British_Museum_C:"The full tour will give users an unparalleled digital experience using any computer or mobile device, and the chance to become fully immersed using a VR headset. High resolution 360-degree photography has been combined with layers of additional content, including expert audio commentary from our curators and interactive 3D models of highlight objects. Now the Museum will be at your fingertips from anywhere in the world!",

        National_Gallery:"National Gallery",
        National_Gallery_A:"The National Gallery",
        National_Gallery_C:"Enjoy over 270 paintings in virtual reality with a VR headset, or browse a 360 tour on your desktop or mobile. Immersive media company Matterport created a 3D virtual tour of the National Gallery's Sainsbury Wing. In this experience you can walk around the Gallery, get up-close to the paintings, and even view the rooms from above in 3D.",
        
        Lights:"Lights",
        Lights_A:"Mozilla VR",
        Lights_C:"A-Frame is an open-source web framework for building virtual reality (VR) experiences.[1] It is primarily maintained by Mozilla and the WebVR community. It is an entity component system framework for Three.js where developers can create 3D and WebVR scenes using HTML. HTML provides a familiar authoring tool for web developers and designers while incorporating a popular game development pattern used by engines such as Unity.",

        Jumanji:"Jumanji: Welcome to the Jungle",
        Jumanji_A:"Sony Pictures",
        Jumanji_C:"In a brand new Jumanji adventure, four high school kids discover an old video game console and are drawn into the game's jungle setting, literally becoming the adult avatars they chose.",

        USA_TODAY_Buffalo_Trace_Distillery:"USA TODAY: Buffalo Trace Distillery",
        USA_TODAY_Buffalo_Trace_Distillery_A:"USA TODAY",
        USA_TODAY_Buffalo_Trace_Distillery_C:"USA TODAY NETWORK takes you inside Kentucky’s 200-year-old Buffalo Trace Distillery to learn the ins and outs of bourbon production. You're guided by the master distiller and a tour guide through the warehouse and distilling room, as well as “Bourboun Pompeii” and “Warehouse X”—two spots that aren’t on the public tour. The interactive released earlier this year has been updated for better performance, and contains 360-degree photos layered with 2-D videos, text and spatial audio.",
        
        Oyster:"Oyster",
        Oyster_A:"Oyster",
        Oyster_C:"Owned by Trip Advisor and operated independently, Oyster.com sends investigators out to hotels and travel destinations around the world where they’ve captured thousands of unedited 360° photos. With React VR, they’ve built an interactive experience that lets travelers try before they fly.",

        Puzzle_Rain:"Puzzle Rain",
        Puzzle_Rain_A:"Mozilla VR",
        Puzzle_Rain_C:"Puzzle Rain is a musical journey in which you help awaken and guide mythical creatures back together into happy musical harmony with one another. Only their combined musical chorus can summon life-giving rain to revive the parched and desolate landscape. Though, there isn’t much time. Dangerous predators roam!",

        Up_There:"Up There",
        Up_There_A:"ngokevin",
        Up_There_C:"Planetarium of 100K real stars. Spot exoplanets, travel through time, hold the galaxy in your hands with the grip buttons.",
        
        Aurora:"Aurora",
        Aurora_A:"Gnometech",
        Aurora_C:"Catch the northern lights (aurora borealis) live in Yellowknife, Canada.",
        
        Slime_Freighter:"Slime Freighter",
        Slime_Freighter_A:"Algoraphics",
        Slime_Freighter_C:"This is a music video style VR experience made with A-Frame.",
        
        A_Saturday_Night:"A-Saturday-Night",
        A_Saturday_Night_A:"Mozilla VR",
        A_Saturday_Night_C:"On a-saturday-night, we wanted to create a fun experience around the idea of recording and reproducing tracking data. The mechanics are simple: Put your headset on, select an avatar, and dance. At the end of the countdown, and thanks to the magic of the Web, you will get a link like this one with the recorded dance that you can share instantly with anybody.",
        
        Anime_UI:"Anime UI",
        Anime_UI_A:"Mozilla VR",
        Anime_UI_C:"A-Frame is an open-source web framework for building virtual reality (VR) experiences.It is primarily maintained by Mozilla and the WebVR community. It is an entity component system framework for Three.js where developers can create 3D and WebVR scenes using HTML. HTML provides a familiar authoring tool for web developers and designers while incorporating a popular game development pattern used by engines such as Unity.",

        GBlock:"GBlock",
        GBlock_A:"archilogic-com",
        GBlock_C:"gBlock Component by 3d.io for A-Frame loading remixable models.",
        
        Falcon_Heavy:"Falcon Heavy",
        Falcon_Heavy_A:"Ottifox",
        Falcon_Heavy_C:"Playing with the effects component after export, a bit hard on performance, but does make it more fun to view.",
        
        Lazy_Sunday_Simulator:"Lazy Sunday Simulator",
        Lazy_Sunday_Simulator_A:"Anthony Prum",
        Lazy_Sunday_Simulator_C:"Lazy Sunday Simulator was made for a project in my production class with Karen Vanderborght for Integrated Digital Media. We were to create a portrait with no face in VR with an assigned VR creation tool. This project was a technical exercise to get us acquainted with working in a three dimensional space and how to direct a viewer through it.",
        
        Starman:"Starman",
        Starman_A:"aimeedotkim",
        Starman_C:"Starman by aimeedotkim.",
        
        Super_Finland:"Super Finland",
        Super_Finland_A:"Vizor",
        Super_Finland_C:"Vizor 360-create 360 tours, stories, sites and WebVR experiences as easy as drag and drop.",

        Weightless:"Weightless",
        Weightless_A:"Ningxia Zhang",
        Weightless_C:"A series of VR installations, with generative, minimal and geometric qualities.",
        
        National_Geographic:"National Geographic",
        National_Geographic_A:"National Geographic",
        National_Geographic_C:"Vizor 360-create 360 tours, stories, sites and WebVR experiences as easy as drag and drop.",
        
        WebVR_Lab:"WebVR Lab",
        WebVR_Lab_A:"PlayCanvas",
        WebVR_Lab_C:"A living project built by the PlayCanvas team to help developers learn about creating scalable and responsive WebVR applications for all devices.",
        
        Orange_Room:"Orange Room",
        Orange_Room_A:"PlayCanvas",
        Orange_Room_C:"Interactive interior visualisation with dynamic reflections and HDR lightmaps with WebVR.",
        
        Graf_3D_forest:"Graf’s 3D forest",
        Graf_3D_forest_A:"nikgraf",
        Graf_3D_forest_C:"React 360 is a framework for the creation of interactive 360 experiences that run in your web browser. It pairs modern APIs like WebGL and WebVR with the declarative power of React, producing applications that can be consumed through a variety of devices. Leveraging web technologies and the existing React ecosystem, React 360 aims to simplify the construction of cross-platform 360 experiences.",

        Netflix_Stranger_Things_Count_Down:"Netflix-Stranger Things Count Down",
        Netflix_Stranger_Things_Count_Down_A:"studiozeroco",
        Netflix_Stranger_Things_Count_Down_C:"How much longer do you have to wait until returning to The Upside Down? Stranger Things Season 2 coming soon to Netflix.",

        Witch_Brew:"Witch's Brew",
        Witch_Brew_A:"Andrew Fraticelli",
        Witch_Brew_C:"A-Frame is an open-source web framework for building virtual reality (VR) experiences.It is primarily maintained by Mozilla and the WebVR community. It is an entity component system framework for Three.js where developers can create 3D and WebVR scenes using HTML. HTML provides a familiar authoring tool for web developers and designers while incorporating a popular game development pattern used by engines such as Unity.",

        Mass_Migrations:"Mass Migrations",
        Mass_Migrations_A:"marpi",
        Mass_Migrations_C:"An experiment in mecha world creation. Create, adopt and set them free.",

        Under_Neon_Lights:"Under Neon Lights",
        Under_Neon_Lights_A:"WITHIN",
        Under_Neon_Lights_C:"An interactive, virtual reality music experience from Within, featuring the song “Under Neon Lights” by the Chemical Brothers and St. Vincent.",

        Ye_Olde_Puppetrilla:"Ye Olde Puppetrilla",
        Ye_Olde_Puppetrilla_A:"Jorge Fuentes",
        Ye_Olde_Puppetrilla_C:"Ye Olde Puppetrilla has arrived in town and everybody's here to enjoy your puppeteering skills.",

        Pokemon:"Pokemon",
        Pokemon_A:"ngokevin",
        Pokemon_C:"Pokemon in MagicaVoxel and A-Frame.",

        Shooting_Stars:"Shooting Stars",
        Shooting_Stars_A:"lazerGlazer_Viz",
        Shooting_Stars_C:"Experiment in Spontaneous Meditation.",
        
        Spider:"Spider",
        Spider_A:"Marpi",
        Spider_C:"Low Poly WebGL+WebVR Spider Study.",

        Resonate_Audio_Reactive:"Resonate: Audio Reactive",
        Resonate_Audio_Reactive_A:"Marpi",
        Resonate_Audio_Reactive_C:"Building generative VR worlds.",

        Eutow:"Eutow",
        Eutow_A:"Marpi x Archan Nair",
        Eutow_C:"WebVR experiment, explore worlds of Archan Nair.",
        
        Chordano:"Chordano",
        Chordano_A:"Michael Casebolt",
        Chordano_C:"A WebVR piano.",
        
        global_seed_vault:"Global Seed Vault",
        global_seed_vault_A:"Crop Trust",
        global_seed_vault_C:"Experience the visit of the Global Seed Vault in Svalbard.",
        
        babylon_js_Sponza_demo:"Babylon.js-Sponza demo",
        babylon_js_Sponza_demo_A:"Microsoft",
        babylon_js_Sponza_demo_C:"Sponza by Babylon.js demo using WebGL, Web Audio, touch & gamepad on desktop, mobile & xbox one devices.",
        
        epic_medieval_battle:"Epic Medieval Battle",
        epic_medieval_battle_A:"Danilo Pasquariello",
        epic_medieval_battle_C:"An interactive WebVR experience.",
        
        elfland_glider:"Elfland Glider",
        elfland_glider_A:"P. Douglas Reeder",
        elfland_glider_C:"A tranquil action puzzle game for VR and mobile.",
        
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
        
        networked_aframe:"Networked Aframe",
        networked_aframe_A:"networked-aframe",
        networked_aframe_C:"A web framework for building multi-user virtual reality experiences.",
        
        webvr_boilerplate:"WebVR Boilerplate",
        webvr_boilerplate_A:"borismus",
        webvr_boilerplate_C:"WebVR Boilerplate is a toolkit for WebVR creators to develop, build and deploy static WebVR experiences to the web.",
        
        cat_amari:"Cat-amari",
        cat_amari_A:"Cat-amari",
        cat_amari_C:"A WebVR experience.",
        
        visualizing_evolutionary_history_with_webvr:"Visualizing evolutionary history with WebVR",
        visualizing_evolutionary_history_with_webvr_A:"emilydolson",
        visualizing_evolutionary_history_with_webvr_C:"A WebVR experience.",
        
        a_vr_picnic:"A VR Picnic",
        a_vr_picnic_A:"dixpark",
        a_vr_picnic_C:"A VR Picnic.",
        
        lava:"Lava",
        lava_A:"felipenmoura",
        lava_C:"A WebVR experience.",
        
        vr_cube_tunnel:"VR Cube Tunnel",
        vr_cube_tunnel_A:"Caleb Miller",
        vr_cube_tunnel_C:"VR Cube Tunnel.",
        
        expedition_wilde_welten:"Expedition Wilde Welten",
        expedition_wilde_welten_A:"Kubikfoto",
        expedition_wilde_welten_C:"Support PC, Mobil, Google Cardboard oder Rift und Vive.",
        
        Photo_360:"360 Photo",
        Photo_360_A:"Mozilla VR",
        Photo_360_C:"Puy de Sancy, France.",
        
        the_national_museum_of_computing:"The National Museum of Computing",
        the_national_museum_of_computing_A:"venueview.co.uk",
        the_national_museum_of_computing_C:"A museum that brings to life the history and ongoing development of computing for inspiration, education, learning and enjoyment.",
        
        matterport:"Matterport",
        matterport_A:"Acme Realty",
        matterport_C:"This majestic looking home has wood flooring, crown molding, is a great family home. This tour was shot with the Matterport Pro2 3D camera.",
        
        a_painter:"A-Painter",
        a_painter_A:"FERNANDO SERRANO",
        a_painter_C:"To browse paintings, you just need a browser with WebGL, but to fulfill your artistic urges you need a system with hand-tracked controllers.",
        
        dark_haze:"Dark Haze",
        dark_haze_A:"christmasxp",
        dark_haze_C:"Music and shader experiment.",
        
        sketch_mars_one:"Sketch / Mars One",
        sketch_mars_one_A:"admone",
        sketch_mars_one_C:"Mars One is a young and growing organization with a team of eight. This team is supported by an impressive board of ambassadors and advisers from all over the world; including an astronaut, Nobel Prize laureate, and the former NASA Chief Technologist. Mars One receives donations from people in over 100 countries and over 200,000 applied for the first crew selection procedure.Mars One will soon announce a media deal with one of the world’s biggest production companies in order to create a show around selecting our crews. Big brands are showing interest in associating their corporate stories with Mankind’s Mission to Mars.Lockheed Martin and other major aerospace companies are ready to implement Mars One’s plan. Work on the first unmanned mission, scheduled for launch in 2020, has already started.",
        
        speak_to_go:"Speak to Go",
        speak_to_go_A:"Google Creative Lab & Jaume Sanchez",
        speak_to_go_C:"Explore the world with your voice.",
        
        a_way_to_go:"A Way to Go",
        a_way_to_go_A:"AATOAA",
        a_way_to_go_C:"Way to Go is an interactive experience for human beings between 5 and 105 years old.",
        
        space_disater:"Space Disater",
        space_disater_A:"Yuri Kovelenov",
        space_disater_C:"The game, of course, can be played without any headset too. If you are interested in how this all was done and/or want to create your own WebGL/WebVR game, check the source files both in the Blend4Web PRO and Community Edition distros.",
        
        finding_love:"Finding Love",
        finding_love_A:"Active Theory",
        finding_love_C:"Finding Love is a fully interactive, Virtual Reality story that transforms emotions into art. Moving through five distinct chapters, you experience the journey purely through visuals and sound.",
        
        gaze_selection_based_on_a_timing_approach:"Gaze selection based on a timing approach",
        gaze_selection_based_on_a_timing_approach_A:"None",
        gaze_selection_based_on_a_timing_approach_C:"Small sample to show how to implement a gaze timing selection approach on mobile for instance.",
        
        vr_experience_babylon:"VR Experience-Babylon",
        vr_experience_babylon_A:"None",
        vr_experience_babylon_C:"Simple VR sample to show interactions on GUI with the VRExperienceHelper.",
        
        vizor_360:"Vizor 360",
        vizor_360_A:"Vizor",
        vizor_360_C:"Build the Immersive Web with Vizor as easy as drag and drop.",
      
        tavern_king:"Tavern King",
        tavern_king_A:"Mozilla VR",
        tavern_king_C:"In the Tavern of the Wild Boar.",
        
        matterport_national_museum_of_iraq_assyrian_hall:"Matterport-National Museum of Iraq (Assyrian Hall)",
        matterport_national_museum_of_iraq_assyrian_hall_A:"The Associated Press",
        matterport_national_museum_of_iraq_assyrian_hall_C:"Featured by the Associated Press, the Iraq National Museum was established after World War I and features prized artifacts from the Mesopotamian civilization. Over the past few years, the Islamic State group has damaged ancient sites across Iraq and Syria, and so the museum's preservation of ancient artifacts is now more important than ever. The Assyrian Hall contains treasures from the Assyrian Empire including two towering deities known as Lamassu and a statue from the temple of Nabu.",
        
        matterport_european_museum_of_modern_art:"Matterport-European Museum of Modern Art",
        matterport_european_museum_of_modern_art_A:"Drone Projects",
        matterport_european_museum_of_modern_art_C:"The European Museum of Modern Art, also known as Museu Europeu d'Art Modern (MEAM), opened in 2011 inside the old Gomis Palace in Barcelona, Spain. Rebuilt in 1792, Gomis Palace was used by French commander Marshal Lecchi during the Napoleonic invasion. Today, it is home to many art exhibits such as this one featuring sculptor Grzegorz Gwiazda.",
        
        matterport_urban_brewing:"Matterport-Urban Brewing",
        matterport_urban_brewing_A:"Digisoft",
        matterport_urban_brewing_C:"Urban Brewing is a microbrewery, bar, and restaurant found in Dublin, Ireland's CHQ Building. While the main entrance appears wonderfully modern, guests will be welcomed to a 19th-century basement warehouse which offers a warm, intimate environment. Guests who want a more casual experience can enjoy tapas-style dishes at Urban Brewery's Taps+Tapas, while those looking for something more sizable can dine at its Stack A Restaurant.",
        
        pretend_city_childrens_museum:"Pretend City Children's Museum",
        pretend_city_childrens_museum_A:"ThreeDRealty.com",
        pretend_city_childrens_museum_C:"Pretend City is a children's museum found in Irvine, California. Designed to look like a miniature city, Pretend City's 17 interactive exhibits teach children foundational skills in math, reading, and science while fostering their creativity, critical thinking, and problem-solving skills. Pretend City's exhibits include a bank, dentist office, and grocery store.",
        
        chromatic:"Chromatic",
        chromatic_A:"Funktronic Labs",
        chromatic_C:"Experience a kaleidescope of iridescent prisms and meditative soundscapes.",
        
        vizor_stardrone:"Vizor-Stardrone",
        vizor_stardrone_A:"Vizor",
        vizor_stardrone_C:"Vizor is a platform for creating and sharing VR experiences.",
        
        vizor_camera_flying:"Vizor-Camera Flying",
        vizor_camera_flying_A:"Vizor",
        vizor_camera_flying_C:"Vizor is a platform for creating and sharing VR experiences.",
        
        polygon_shredder:"Polygon Shredder",
        polygon_shredder_A:"Jaume Sanchez",
        polygon_shredder_C:"The polygon shredder that takes many cubes and turns them into confetti.",
        
        sound_boxing:"Sound Boxing",
        sound_boxing_A:"soundboxing.co",
        sound_boxing_C:"Swing your arms to destroy incoming yellow and red orbs. Get more points for strength and accuracy—and get a low intensity workout while you’re at it!",
        
        gunters_of_oasis:"Gunters of OASIS",
        gunters_of_oasis_A:"supermedium",
        gunters_of_oasis_C:"A web framework for building virtual reality experiences. Make WebVR with HTML and Entity-Component. Works on Vive, Rift, desktop, mobile platforms.",
        
        van_gogh_room:"Van gogh Room",
        van_gogh_room_A:"ruslans3d",
        van_gogh_room_C:"Van gogh Room This model is featured in the official Sketchfab.",
        
        pirate_tower:"Pirate Tower",
        pirate_tower_A:"benlucas59",
        pirate_tower_C:"A cartoon 3D scene made in 2012 to learn ZBrush stylised sculpting. Based on the great concept art from Artyom Vlaskin.",
        
        mg_police_roadster:"MG Police Roadster",
        mg_police_roadster_A:"alankailei",
        mg_police_roadster_C:"Created this Snowberry White MGC for some Substance practice. I may possibly add the engine bay, trunk, and flesh out the under carriage in the future.",
        
        church_of_st_mary_at_mount_naranco:"Church of St Mary at Mount Naranco",
        church_of_st_mary_at_mount_naranco_A:"Raiz",
        church_of_st_mary_at_mount_naranco_C:"The church of St Mary at Mount Naranco.",
            
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