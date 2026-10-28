/* ==========================================================
   YOUR PSYCHOLOGICAL TESTS. Add a new test = copy one block below.
   id     : unique short name (no spaces)
   title  : name shown to the user
   intro  : one line shown above the questions
   opts   : answer choices, scored 0,1,2,3... in order
   qs     : the questions
   bands  : [minScore, maxScore, "label", "advice text"]
   Save the file and refresh the app. Nothing else to change.
   ========================================================== */
window.TESTS = [
  {
    id: "wb",
    title: "Quick wellbeing check",
    intro: "Over the last two weeks, how often have you…",
    opts: ["Not at all", "Some days", "More than half the days", "Nearly every day"],
    qs: [
      "felt down or low in energy?",
      "felt nervous or on edge?",
      "had trouble sleeping?",
      "found it hard to enjoy things?",
      "felt overwhelmed by daily tasks?"
    ],
    bands: [
      [0, 5, "Low distress", "Things look fairly steady. Keep the routines that help you."],
      [6, 10, "Moderate distress", "Consider extra rest and talking to someone you trust."],
      [11, 15, "High distress", "It may help to talk with a mental health professional soon."]
    ]
  },
  {
    id: "stress",
    title: "Daily stress snapshot",
    intro: "Today, how true is each statement?",
    opts: ["Not true", "A little", "Mostly", "Very true"],
    qs: [
      "My body feels tense.",
      "My thoughts are racing.",
      "I feel irritable.",
      "I can’t relax."
    ],
    bands: [
      [0, 4, "Calm", "You seem relatively relaxed today."],
      [5, 8, "Some stress", "Try a short walk, a breathing exercise or a break."],
      [9, 12, "High stress", "Slow down where you can and consider reaching out for support."]
    ]
  }
];
