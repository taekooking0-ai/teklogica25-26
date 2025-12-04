angular.module('teklogicaApp', [])
.controller('MainCtrl', function($scope) {

    $scope.selectedDay = null;

    $scope.selectDay = function(day) {
        $scope.selectedDay = day;
        setTimeout(() => {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }, 100);
    };

    $scope.currentEvents = function() {
        return $scope.selectedDay === 1 ? $scope.day1Events : $scope.day2Events;
    };

    /* ================= GENERAL RULES ================= */
    $scope.generalRules = [
        "Participants should carry their college ID Cards.",
        "Registration fees is Rs.50/- per student for each event.",
        "Assessment parameters will include originality of ideas and presentation skill.",
        "The decision of the panel of judges will be final.",
        "Participants should be present at the venue 30 minutes before the event starts.",
        "Registration will be done on the day of the event.",
        "Participants will be awarded a digital certificate as a token of appreciation.",
        "Top 3 winners will be awarded certificates and exciting prizes.",
        "Sudoku, Rubik's Cube, RangAkaar is open to all (Juniors And UG-PG)"
    ];


    /* ================= DAY 1 ================= */
    $scope.day1Events = [
        {
            name: "StatDrift (Statistics Poster)",
            time: "10:00 AM - 11:00 AM",
            venue: "Room no. 307",
            rules: [
                "Topics: 1. AI vs Data Analysis | 2. Data: The Fuel of Artificial Intelligence",
                "Bring an attractive chart/flex on any ONE topic",
                "Short description about the poster is required",
                "Only 1 participant per poster",
                "Maximum size: 1m x 1m"
            ]
        },
        {
            name: "MathQuark (Mathematics Poster)",
            time: "10:00 AM - 11:00 AM",
            venue: "Room no. 305",
            rules: [
                "Topics: 1. Graphs & Networks: The Mathematics of Social Media | 2. Mathematics in Computer Science. | 3. The Magic of Fibonacci Sequence & Golden Ratio | 4. Symmetry in Mathematics and Nature | 5. The Hidden Language of Life: Mathematics in Biology",
                "Bring an attractive chart/flex on ONE topic",
                "Short description about the poster is required",
                "Only 1 participant per poster",
                "Maximum size: 1m x 1m"
            ]
        },
        {
            name: "MathIQX (Mathematics Aptitude)",
            time: "1:00 PM - 2:00 PM",
            venue: "Room no. 304",
            rules: [
                "25 questions related to aptitude",
                "Time limit: 30 minutes"
            ]
        },
        {
            name: "TagTornado (HTML Coding - For Juniors Only)",
            time: "11:30 AM - 12:30 PM",
            venue: "Room no. 306 (CS Lab)",
            rules: [
                "Individual participation only.",
                "Duration is 1 hour.",
                "Only HTML, CSS, and optional JS allowed.",
                "Use Windows or Linux systems only.",
                "Judging based on skills, quality, and creativity.",
                "Submit files on time.",
                "No plagiarism; follow all instructions.",
                "Judges decision is final."
            ]
        },
        {
            name: "VoltVision (Electronics Project & Poster)",
            time: "11:00 AM - 12:00 PM",
            venue: "Room no. 312 (Electronics Lab)",
            rules: [
                // POSTER
                "For Poster:",
                "Topics: 1. Semiconductor revolution | 2. Chip design careers | 3. AI & Neuromorphic chips",
                "Bring an attractive chart/flex on ONE topic",
                "Short description is required",
                "Only 1 participant per poster",
                "Maximum size: 1m x 1m",


                // PROJECT
                "For Project:",
                "Working project related to electronics",
                "Participants must bring their own system",
                "Maximum 2 members allowed",
                "Explanation of project is required"
            ]
        },

        { 
            name: "Rubix Cube", 
            time: "After 2:00 PM", 
            venue: "Room no. 307", 
            rules: [
                "3x3 one need to solve",
                "Fastest one will win.",
                "There can be another round depending on number of participant or if there is tie.",
                "Bring Rubik cube but your Rubik cube will be not be given to you to solve.",
                "Participants must bring their own Rubik’s Cube, but they will be given a different cube to solve during the competition."
            ] 
        },

        { 
            name: "RangAkaar (Rangoli)", 
            time: "After 2:00 PM", 
            rules: [
                "Theme: Three geometrical shapes will be declared and 10 minutes time will be given to think. (Mobile is not allowed)",
                "45 Minutes will be given to make Rangoli.",
                "No stencils or printed outlines are allowed.",
                "Only dry colours.",
                "All rangoli materials are to be arranged by the participants themselves.",
                "Size should be 2x ft.",
                "Stick to the given geometrical shapes only"
            ]
        },

        { name: "Sudoku", 
            time: "After 2:00 PM", 
            venue: "Room no. 305", 
            rules: [
                "A standard 9 × 9 Sudoku puzzle will be given and must be solved",
                "The participant who completes the puzzle correctly in the shortest time wins",
                "In case of a tie, a second round will be conducted to decide the winner"
            ] 
        }
    ];


    /* ================= DAY 2 ================= */
    $scope.day2Events = [
        {
            name: "Tech Talent Showcase (CS Project)",
            time: "10:00 AM - 11:30 AM",
            venue: "Room no. 305",
            rules: [
                "Working project related to Computer Science",
                "Participants must bring their own systems",
                "Maximum 2 members allowed",
                "Explanation of project is required"
            ]
        },

        { 
            name: "BugSmash Battle (Debugging)", 
            time: "11:30 AM - 12:30 PM", 
            venue: "Room no. 304", 
            rules: [
                "BugSmash is a debugging competition against time.",
                "Participants need to find and resolve errors within given amount of time.",
                "Coding Languages: C and Java.",
                "The Competition will be conducted in 2 rounds.",
                "The participants will be given simple questions on the spot based on the type of language they choose."
            ]
        },

        { name: "3-Minute Code Clash (3 Minutes Programming)", 
            time: "12:30 PM - 1:00 PM", 
            venue: "Room no. 306 (CS Lab)", 
            rules: [
                "Total time to solve the problem is 3 minutes.",
                "Participants must code strictly in C language.",
                "Internet access and external resources are not allowed.",
                "No pre-written code, templates, or copying is permitted.",
                "Problem statement will be given on the spot",
                "Code must compile and run within the time limit.",
                "Judging is based on correctness, logic, and output.",
                "Late submissions or changes after time are not accepted.",
                "Judges’ decision is final."
            ] 
        },

        { name: "CodeHunters Chase", 
            time: "2:00 PM", 
            venue: "3rd Floor", 
            rules: [
                "Teams must have maximum 3 members only.",
                "No electronic devices allowed. ",
                "Solve each clue, reach the location, and collect the next clue together.",
                "Maintain discipline and do not disturb other teams or restricted areas.",
                "Disqualification for using devices, splitting up, taking help, or damaging clues.",
                "Fastest team wins; tie-breaker puzzle if required.",
                "Show your decoded answer to the volunteer before getting the next clue.",
                "Do not fold, damage, write on, or take away clue sheets.",
                "Paper and pen will be provided for solving.",
                "No running in corridors; follow all instructions.",
                "Total time limit is 10 minutes."
            ]
        },

        { 
            name: "PromptCraft Challenge", 
            time: "1:00 PM - 2:00 PM", 
            venue: "Room no. 306 (CS Lab)", 
            rules: [
                "Participants are given a scenario (e.g., flyer, poster, profile card)",
                "Using the scenario, they must write a prompt to GPT to generate an HTML page.",
                "Copy the generated HTML code into VS Code and run it.",
                "Complete the task within 5 minutes.",
                "The HTML page must display correctly in the browser according to the scenario."
            ] 
        }
    ];

});
