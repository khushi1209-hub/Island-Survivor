const storyData = {

start: {
    text: "⚡ FLIGHT 927 CRASHED DURING A VIOLENT STORM.\n\nYou wake up on a tropical beach. Smoke rises from the wreckage. Screams can be heard nearby. The jungle stretches across the island.",

    background: "beach",

    choices: [
        {
            text: "🧍 Help the injured passenger",
            next: "injuredPassenger"
        },

        {
            text: "✈ Search the cockpit",
            next: "cockpit"
        },

        {
            text: "🎒 Loot scattered luggage",
            next: "luggageArea"
        },

        {
            text: "🌊 Explore the beach",
            next: "beachExplore"
        },

        {
            text: "🌴 Enter the jungle immediately",
            next: "jungle"
        }
    ]
},
injuredPassenger: {
    text: "A badly injured passenger calls for help. He looks terrified.",
    reputation: 10,
    choices: [
        {
            text: "🩹 Try to help him",
            next: "helpPassenger"
        },

        {
            text: "❓ Ask what happened",
            next: "questionPassenger"
        },

        {
            text: "💧 Search for water",
            next: "findWater"
        },

        {
            text: "😒 Ignore him",
            next: "wreckage"
        }
    ]
},

helpPassenger: {
    text: "You help stop the bleeding. The passenger thanks you and tells you there may be other survivors.",

    reputation: 10,

    choices: [
        {
            text: "👥 Search for survivors",
            next: "survivorSearch"
        },

        {
            text: "✈ Check the wreckage",
            next: "wreckage"
        }
    ]
},

questionPassenger: {
    text: "The passenger says he saw strange lights before the crash and warns you not to trust everyone on the island.",

    choices: [
        {
            text: "🤔 Investigate further",
            next: "survivorSearch"
        },

        {
            text: "✈ Search the wreckage",
            next: "wreckage"
        }
    ]
},

findWater: {
    text: "You find fresh water near some rocks and return.",

    reputation: 5,

    choices: [
        {
            text: "🩹 Help the passenger",
            next: "helpPassenger"
        },

        {
            text: "✈ Search wreckage",
            next: "wreckage"
        }
    ]
},

survivorSearch: {
    text: "You discover footprints leading away from the crash site.",

    choices: [
        {
            text: "👣 Follow footprints",
            next: "beachExplore"
        },

        {
            text: "🌴 Enter jungle",
            next: "jungle"
        }
    ]
},
cockpit: {
    text: "The cockpit is heavily damaged. Warning lights flicker while smoke fills the cabin.",

    choices: [
        {
            text: "📻 Take the emergency radio",
            next: "radioPickup"
        },

        {
            text: "🗺 Check the flight map",
            next: "flightMap"
        },

        {
            text: "🔒 Open the locked compartment",
            next: "lockedCompartment"
        },

        {
            text: "⚫ Search the black box",
            next: "blackBox"
        }
    ]
},

radioPickup: {
    text: "You recover the emergency radio. It may help contact rescuers later.",

    item: "📻 Emergency Radio",

    choices: [
        {
            text: "🔍 Continue searching cockpit",
            next: "cockpit"
        },

        {
            text: "🌴 Leave for jungle",
            next: "jungle"
        }
    ]
},

flightMap: {
    text: "The flight map shows the island doesn't appear on normal navigation charts.",

    choices: [
        {
            text: "🤨 Investigate further",
            next: "blackBox"
        },

        {
            text: "🌴 Leave cockpit",
            next: "jungle"
        }
    ]
},

lockedCompartment: {
    text: "Inside the compartment you discover an emergency flare gun.",

    item: "🚨 Flare Gun",

    choices: [
        {
            text: "📦 Search more",
            next: "cockpit"
        },

        {
            text: "🌊 Explore beach",
            next: "beachExplore"
        }
    ]
},

blackBox: {
    text: "The black box contains a strange recording. Someone says: 'Do not enter the underground facility.'",

    choices: [
        {
            text: "😨 That's creepy",
            next: "cockpit"
        },

        {
            text: "🌴 Head into jungle",
            next: "jungle"
        }
    ]
},
luggageArea: {
    text: "Scattered luggage lies across the beach. Some bags are torn open while others remain untouched.",

    choices: [
        {
            text: "🔴 Open the red suitcase",
            next: "redSuitcase"
        },

        {
            text: "🔵 Open the blue suitcase",
            next: "blueSuitcase"
        },

        {
            text: "🟢 Search the military backpack",
            next: "militaryBag"
        },

        {
            text: "🟨 Inspect the locked briefcase",
            next: "lockedBriefcase"
        },

        {
            text: "👣 Follow drag marks in the sand",
            next: "dragMarks"
        }
    ]
},

redSuitcase: {
    text: "You find snacks, water bottles and an energy drink.",

    item: "⚡ Energy Drink",

    choices: [
        {
            text: "🎒 Search more luggage",
            next: "luggageArea"
        },

        {
            text: "🌴 Enter jungle",
            next: "jungle"
        }
    ]
},

blueSuitcase: {
    text: "The suitcase belongs to a doctor. You find medical supplies.",

    item: "🩹 Medical Kit",

    choices: [
        {
            text: "🎒 Continue searching",
            next: "luggageArea"
        },

        {
            text: "🧍 Help survivors",
            next: "injuredPassenger"
        }
    ]
},

militaryBag: {
    text: "Inside the military backpack you discover a compass and survival tools.",

    item: "🧭 Compass",

    choices: [
        {
            text: "🎒 Search more luggage",
            next: "luggageArea"
        },

        {
            text: "🌊 Explore beach",
            next: "beachExplore"
        }
    ]
},

lockedBriefcase: {
    text: "The briefcase is locked with a keypad.",

    choices: [
        {
            text: "🔨 Force it open",
            next: "forceBriefcase"
        },

        {
            text: "🔍 Search for code",
            next: "searchCode"
        },

        {
            text: "🚶 Leave it alone",
            next: "luggageArea"
        }
    ]
},

forceBriefcase: {
    text: "You smash the lock open and find a flare gun.",

    item: "🚨 Flare Gun",

    choices: [
        {
            text: "🎒 Return to luggage area",
            next: "luggageArea"
        }
    ]
},

searchCode: {
    text: "A luggage tag contains the code. The briefcase opens safely.",

    item: "🔋 Battery Pack",

    choices: [
        {
            text: "🎒 Return to luggage area",
            next: "luggageArea"
        }
    ]
},

dragMarks: {
    text: "The drag marks lead to a blood-stained life raft hidden behind rocks.",

    choices: [
        {
            text: "🔍 Investigate raft",
            next: "lifeRaft"
        },

        {
            text: "😨 Back away",
            next: "luggageArea"
        }
    ]
},

lifeRaft: {
    text: "Inside the raft you find a survivor's journal. The last page mentions 'something living in the caves'.",

    item: "📖 Survivor Journal",

    choices: [
        {
            text: "🌴 Head into jungle",
            next: "jungle"
        },

        {
            text: "🎒 Return to luggage",
            next: "luggageArea"
        }
    ]
},
beachExplore: {
    text: "You walk along the shoreline and discover several points of interest.",

    choices: [
        {
            text: "👣 Follow strange footprints",
            next: "footprints"
        },

        {
            text: "⛺ Investigate abandoned camp",
            next: "abandonedCamp"
        },

        {
            text: "🚤 Inspect broken boat",
            next: "brokenBoat"
        },

        {
            text: "📦 Open floating crate",
            next: "floatingCrate"
        }
    ]
},

footprints: {
    text: "The footprints lead to a hidden cave entrance. Suddenly you hear someone whisper: 'Who's there?'",

    choices: [
        {
            text: "🧍 Approach the stranger",
            next: "mysterySurvivor"
        },

        {
            text: "🕳 Enter cave",
            next: "cave"
        },

        {
            text: "🏃 Run away",
            next: "beachExplore"
        }
    ]
},

mysterySurvivor: {
    text: "A survivor named Ethan emerges from the shadows. He claims there is a secret facility somewhere on the island.",

    item: "👤 Ethan's Trust",

    choices: [
        {
    text: "🤝 Team up with Ethan",
    next: "ethanJoins",
    requires: "👤 Ethan's Trust"
},

        {
            text: "❌ Don't trust him",
            next: "beachExplore"
        }
    ]
},
ethanJoins: {
    text: "Ethan decides to travel with you. He reveals that a hidden military facility exists somewhere on the island.",

    reputation: 10,

    choices: [
        {
            text: "🌴 Enter the jungle together",
            next: "jungle"
        },

        {
            text: "📻 Investigate the facility clue",
            next: "radioTower"
        }
    ]
},

abandonedCamp: {
    text: "An abandoned camp contains supplies and a strange radio message.",

    item: "📼 Radio Recording",

    choices: [
        {
            text: "📻 Listen carefully",
            next: "radioClue"
        },

        {
            text: "🌊 Return to beach",
            next: "beachExplore"
        }
    ]
},

radioClue: {
    text: "The recording repeats: 'Sector 7 is not safe. Do not enter the facility.'",

    choices: [
        {
            text: "😨 Return",
            next: "beachExplore"
        }
    ]
},

brokenBoat: {
    text: "Inside the broken boat you discover hidden supplies.",

    item: "🪢 Rope",

    choices: [
        {
            text: "🌊 Return to beach",
            next: "beachExplore"
        }
    ]
},

floatingCrate: {
    text: "A floating crate contains emergency rations and clean water.",

    health: 10,

    choices: [
        {
            text: "🌊 Return to beach",
            next: "beachExplore"
        }
    ]
},
wreckage: {
    text: "You search the wreckage and find a survival knife and some supplies. While searching, sharp metal cuts your arm.",
    background: "beach",
    health: -10,
    item: "🔪 Survival Knife",
    choices: [
        {
            text: "Enter the jungle",
            next: "jungle"
        },
        {
            text: "Follow the coastline",
            next: "coast"
        }
    ]
},

jungle: {
    text: "The jungle is dense and dangerous. You hear animals nearby and notice multiple paths.",
    background: "jungle",
    choices: [
    {
        text: "🐗 Fight the wild boar",
        next: "boarFight"
    },
    {
        text: "🐍 Follow the snake trail",
        next: "snakeAttack"
    },
    {
        text: "🕳 Enter the cave",
        next: "cave"
    },
    {
        text: "🌳 Climb the giant tree",
        next: "giantTree"
    },
    {
        text: "🦍 Investigate strange noise",
        next: "strangeNoise"
    },
    {
        text: "👣 Follow survivor tracks",
        next: "survivorTracks"
    }
]
},
giantTree: {
    text: "You climb a massive tree and spot smoke rising from a distant part of the island.",

    item: "🧭 Island Map",

    choices: [
        {
            text: "📍 Head toward the smoke",
            next: "radioTower"
        },
        {
            text: "🌴 Return to jungle",
            next: "jungle"
        }
    ]
},

strangeNoise: {
    text: "You discover an injured monkey trapped under a fallen branch.",

    reputation: 5,

    choices: [
        {
            text: "❤️ Free the monkey",
            next: "monkeyFriend"
        },
        {
            text: "🚶 Ignore it",
            next: "jungle"
        }
    ]
},

monkeyFriend: {
    text: "The monkey follows you and later leads you toward hidden paths.",

    item: "🐒 Monkey Friend",

    choices: [
        {
            text: "🌴 Continue",
            next: "jungle"
        }
    ]
},

survivorTracks: {
    text: "Fresh footprints lead deeper into the island. Someone else is alive here.",

    choices: [
        {
            text: "👤 Follow carefully",
            next: "mysterySurvivor"
        },
        {
            text: "↩ Return",
            next: "jungle"
        }
    ]
},
coast: {
    text: "You discover an old wooden boat washed ashore.",
    background: "beach",
    choices: [
        {
            text: "Inspect the boat",
            next: "boat"
        }
    ]
},

boat: {
    text: "The boat is damaged but contains a treasure map.",
    item: "🗺️ Treasure Map",
    background: "beach",
    choices: [
        {
            text: "Follow the map",
            next: "treasure"
        }
    ]
},

cave: {
    text: "You enter a massive cave system. The air feels cold. In front of you are four possible paths.",
    background: "cave",
    choices: [
        {
            text: "👂 Follow strange whispers",
            next: "whispers"
        },
        {
            text: "💎 Investigate a shiny object",
            next: "shinyObject"
        },
        {
            text: "🚪 Open the ancient stone door",
            next: "stoneDoor"
        },
        {
            text: "🌊 Follow the underground river",
            next: "undergroundRiver"
        }
    ]
},

waterfall: {
    text: "Behind the waterfall you discover a hidden path leading to ancient ruins.",
    health: -10,
    choices: [
        {
            text: "🏛 Explore the ruins",
            next: "ruins"
        },
        {
            text: "📻 Investigate strange radio signals",
            next: "radioTower"
        }
    ]
},

treasure: {
    text: "Following the map leads you to a hidden treasure chamber.",
    background: "treasure",
    choices: [
        {
            text: "Claim treasure",
            next: "treasureEnding"
        }
    ]
},


boarFight: {
    text: "A massive wild boar charges straight at you from the bushes.",

    choices: [
        {
            text: "⚔ Fight alone",
            next: "boarAlone"
        },

        {
            text: "👤 Ask Ethan for help",
            next: "boarWithEthan",
            requires: "👤 Ethan's Trust"
        }
    ]
},

boarAlone: {
    text: "You defeat the boar but suffer serious injuries.",

    health: -25,

    choices: [
        {
            text: "🌴 Continue through jungle",
            next: "waterfall"
        }
    ]
},

boarWithEthan: {
    text: "Ethan distracts the boar while you attack. Together you defeat it with minor injuries.",

    health: -10,

    choices: [
        {
            text: "🌴 Continue together",
            next: "waterfall"
        }
    ]
},
snakeAttack: {
    text: "A poisonous snake bites your leg while moving through the jungle.",
    health: -30,
    choices: [
        {
            text: "Search for medicinal plants",
            next: "medicine"
        },
        {
            text: "Keep moving",
            next: "waterfall"
        }
    ]
},

medicine: {
    text: "You find healing herbs and recover some strength.",
    health: 20,
    choices: [
        {
            text: "Continue exploring",
            next: "waterfall"
        }
    ]
},
ruins: {
    text: "Ancient stone ruins stand deep within the island. Strange symbols cover the walls.",
    choices: [
        {
            text: "🔎 Search the temple",
            next: "temple"
        },
        {
            text: "⚠ Enter underground tunnel",
            next: "tunnel"
        }
    ]
},

radioTower: {
    text: "You discover an abandoned military radio tower hidden by vegetation.",
    choices: [
        {
            text: "📡 Repair the transmitter",
            next: "repairTower"
        },
        {
            text: "📦 Search the storage room",
            next: "storageRoom"
        },{
    text: "🏭 Search for Sector 7 Facility",
    next: "facilityEntrance",
    requires: "👤 Ethan's Trust"
}
    ]
},
temple: {
    text: "Inside the temple you discover a golden idol and clues about a legendary treasure.",
    item: "🏆 Golden Idol",
    choices: [
        {
            text: "Follow treasure clues",
            next: "treasure"
        }
    ]
},

tunnel: {
    text: "The tunnel collapses. You barely survive.",
    health: -20,
    choices: [
        {
            text: "Keep moving",
            next: "radioTower"
        }
    ]
},

repairTower: {
    text: "The transmitter needs a power cell before it can send a signal.",
    choices: [
        {
            text: "Search for power cell",
            next: "powerCell"
        }
    ]
},

storageRoom: {
    text: "You find emergency supplies and a first aid kit.",
    health: 20,
    item: "🩹 First Aid Kit",
    choices: [
        {
            text: "Continue",
            next: "repairTower"
        }
    ]
},

powerCell: {
    text: "You find an old power cell and restore the radio tower.",
    item: "🔋 Power Cell",
    choices: [
        {
            text: "Send distress signal",
            next: "rescueEnding"
        }
    ]
},
whispers: {
    text: "The whispers become louder. You cannot tell if they are human or something else.",
    choices: [
        {
            text: "😨 Hide behind rocks",
            next: "hiddenPassage"
        },
        {
            text: "🚶 Move closer",
            next: "batAttack"
        }
    ]
},

hiddenPassage: {
    text: "While hiding, you discover a secret passage containing an old pirate journal.",
    item: "🏴 Pirate Journal",
    choices: [
        {
            text: "📖 Read the journal",
            next: "journalRoom"
        }
    ]
},

journalRoom: {
    text: "The journal reveals clues about a legendary treasure vault hidden deeper inside.",
    choices: [
        {
            text: "🗺 Follow the clues",
            next: "treasureVault"
        }
    ]
},

batAttack: {
    text: "Hundreds of bats swarm you as you move closer.",
    health: -15,
    choices: [
        {
            text: "🏃 Run away",
            next: "hiddenPassage"
        }
    ]
},

shinyObject: {
    text: "You find a golden chest covered in dust.",
    choices: [
        {
            text: "📦 Open immediately",
            next: "poisonTrap"
        },
        {
            text: "🔍 Check for traps",
            next: "goldenIdolRoom"
        }
    ]
},

poisonTrap: {
    text: "A poison dart shoots from the wall and hits you.",
    health: -25,
    choices: [
        {
            text: "😖 Continue deeper",
            next: "goldenIdolRoom"
        }
    ]
},

goldenIdolRoom: {
    text: "You safely disarm the trap and obtain a priceless Golden Idol.",
    item: "🏆 Golden Idol",
    choices: [
        {
            text: "🎒 Take the idol",
            next: "treasureVault"
        }
    ]
},

stoneDoor: {
    text: "Ancient symbols cover the stone door.",
    choices: [
        {
            text: "☀ Press Sun Symbol",
            next: "secretChamber"
        },
        {
            text: "🌙 Press Moon Symbol",
            next: "collapseRoom"
        },
        {
            text: "💀 Press Skull Symbol",
            next: "batAttack"
        }
    ]
},

secretChamber: {
    text: "A hidden chamber opens. Ancient treasure surrounds a massive golden throne.",

    item: "🔑 Ancient Key",

    choices: [
        {
            text: "👑 Enter Throne Room",
            next: "throneRoom",

            requires: "🏆 Golden Idol"
        },

        {
            text: "🔓 Continue Exploring",
            next: "treasureVault"
        }
    ]
},

collapseRoom: {
    text: "The ceiling collapses and rocks strike your shoulder.",
    health: -20,
    choices: [
        {
            text: "💪 Keep moving",
            next: "treasureVault"
        }
    ]
},

undergroundRiver: {
    text: "The underground river is fast and dangerous.",
    choices: [
        {
            text: "🏊 Swim across",
            next: "riverEscape"
        },
        {
            text: "🪢 Search for another route",
            next: "hiddenPassage"
        }
    ]
},

riverEscape: {
    text: "You barely survive the current but discover an entrance to a treasure vault.",
    health: -15,
    choices: [
        {
            text: "💎 Enter the vault",
            next: "treasureVault"
        }
    ]
},

treasureVault: {
    text: "After hours of exploration, you finally discover the legendary Pirate Treasure Vault.",
    item: "💎 Pirate Treasure",
    choices: [
        {
            text: "🏆 Take the treasure",
            next: "treasureEnding"
        },
        {
            text: "🚶 Leave it behind",
            next: "radioTower"
        }
    ]
},
darkChamber: {
    text: "Ancient carvings cover the walls. A strange mechanism blocks your path.",
    choices: [
        {
            text: "🔍 Solve the mechanism",
            next: "puzzleRoom"
        }
    ]
},

puzzleRoom: {
    text: "You solve the puzzle and uncover a hidden tunnel hidden behind a stone wall.",
    choices: [
        {
            text: "🚶 Enter the hidden tunnel",
            next: "pirateCamp"
        }
    ]
},

pirateCamp: {
    text: "You discover an abandoned pirate camp. Old journals reveal the location of a secret vault.",
    item: "🏴 Pirate Journal",
    choices: [
        {
            text: "🗺 Follow the clues",
            next: "treasureVault"
        }
    ]
},


treasureEnding: {
    text: "🏆 TREASURE HUNTER ENDING\n\nYou escaped the island rich beyond imagination.",
    ending: true
},
throneRoom: {
    text: "You discover an ancient throne room hidden deep beneath the island.",

    choices: [
        {
            text: "👑 Sit on the throne",
            next: "islandKingEnding"
        }
    ]
},

islandKingEnding: {
    text: "👑 ISLAND KING ENDING\n\nYou become ruler of the island's forgotten civilization.",

    ending: true
},
facilityEntrance: {
    text: "Following Ethan's clues, you locate a hidden bunker entrance concealed by vines.",

    choices: [
        {
            text: "🚪 Enter Facility",
            next: "facilityHall"
        },
        {
            text: "↩ Return",
            next: "radioTower"
        }
    ]
},

facilityHall: {
    text: "Emergency lights flicker. The abandoned facility seems deserted.",

    choices: [
        {
            text: "🧪 Enter Laboratory",
            next: "laboratory"
        },
        {
            text: "💻 Access Control Room",
            next: "controlRoom"
        }
    ]
},

laboratory: {
    text: "You discover evidence of strange biological experiments.",

    item: "🧬 Research Files",

    choices: [
        {
            text: "💻 Go to Control Room",
            next: "controlRoom"
        }
    ]
},

controlRoom: {
    text: "A computer terminal contains evacuation logs and a final emergency message.",

    choices: [
    {
        text: "📡 Broadcast truth to the world",
        next: "facilityEnding"
    },
    {
        text: "🔐 Access Restricted Files",
        next: "secretAI",
        requires: "🧬 Research Files"
    }
]
},

facilityEnding: {
    text: "🏭 FACILITY ENDING\n\nYou expose the island's secret experiments to the world.",

    ending: true
},
secretAI: {
    text: "Hidden files reveal an experimental AI system still running beneath the island.",

    choices: [
        {
            text: "🤖 Enter AI Core",
            next: "aiCore"
        }
    ]
},

aiCore: {
    text: "A powerful AI controls abandoned defense systems across the island.",

    choices: [
        {
            text: "💻 Shut down the AI",
            next: "heroEnding"
        },
        {
            text: "👑 Take control of the AI",
            next: "rulerEnding"
        }
    ]
},

heroEnding: {
    text: "🦸 HERO ENDING\n\nYou shut down the AI and make the island safe forever.",

    ending: true
},

rulerEnding: {
    text: "👑 RULER ENDING\n\nYou take control of the AI and become the ruler of the island.",

    ending: true
},
rescueEnding: {
    text: "🚁 RESCUE ENDING\n\nA helicopter detects your beacon and rescues you.",
    ending: true
}

};