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
                "Topics: 1. Graphs & Networks: The Mathematics of Social Media | 2. Mathematics in Computer Science | 3. Fibonacci & Golden Ratio | 4. Symmetry in Nature | 5. Mathematics in Biology",
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
                "For Poster:",
                "Topics: Semiconductor revolution | Chip design careers | AI & Neuromorphic chips",
                "Bring an attractive chart/flex on ONE topic",
                "Short description is required",
                "Only 1 participant per poster",
                "Maximum size: 1m x 1m",

                "For Project:",
                "Working project related to electronics",
                "Participants must bring their own system",
                "Maximum 2 members allowed",
                "Explanation of project is required"
            ]
        },

        { 
            name: "Rubik's Cube", 
            time: "After 2:00 PM", 
            venue: "Room no. 307", 
            rules: [
                "3x3 cube needs to be solved",
                "Fastest one will win",
                "Another round may be conducted if there is a tie",
                "Participants must bring their own Rubik’s Cube",
                "A different cube will be given during the competition"
            ] 
        },

        { 
            name: "RangAkaar (Rangoli)", 
            time: "After 2:00 PM",
            venue: "Open Area", 
            rules: [
                "Theme: Three geometrical shapes will be declared (mobile not allowed)",
                "10 minutes will be given to think",
                "45 minutes to create Rangoli",
                "No stencils or printed outlines allowed",
                "Only dry colours permitted",
                "All materials must be brought by participants",
                "Size should be 2x2 ft",
                "Stick to given geometrical shapes only"
            ]
        },

        { 
            name: "Sudoku", 
            time: "After 2:00 PM", 
            venue: "Room no. 305", 
            rules: [
                "A 9x9 Sudoku will be given",
                "Fastest correct solution wins",
                "Tie-breaker round if required"
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
                "Working CS project required",
                "Participants must bring their system",
                "Maximum 2 members",
                "Explanation is mandatory"
            ]
        },

        { 
            name: "BugSmash Battle (Debugging)", 
            time: "11:30 AM - 12:30 PM", 
            venue: "Room no. 304", 
            rules: [
                "Debugging challenge against time",
                "Languages: C and Java",
                "Two rounds will be conducted",
                "Problems given on the spot"
            ]
        },

        { 
            name: "3-Minute Code Clash", 
            time: "12:30 PM - 1:00 PM", 
            venue: "Room no. 306", 
            rules: [
                "Strictly C language only",
                "No internet or templates allowed",
                "Problem given on the spot",
                "Must compile and run",
                "Judged on correctness & output"
            ] 
        },

        { 
            name: "CodeHunters Chase", 
            time: "2:00 PM", 
            venue: "3rd Floor", 
            rules: [
                "Max 3 per team",
                "No electronic devices",
                "Solve clues to advance",
                "No cheating or damage",
                "10-minute time limit"
            ]
        },

        { 
            name: "PromptCraft Challenge", 
            time: "1:00 PM - 2:00 PM", 
            venue: "Room no. 306", 
            rules: [
                "Write GPT prompts based on scenario",
                "Generate HTML code",
                "Run in VS Code",
                "Finish in 5 minutes"
            ] 
        }

    ];

});
