// const userName = prompt("What is your name?"); // Asks for users name in a prompt. Will change later to where there is no prompt and user just types name on the page.
// eightBall = "";

const magic8Answers = [
  "Ask again, drama queen.",
  "Outlook hazy, grab snacks.",
  "Absolutely… in another lifetime.",
  "Not even slightly likely.",
  "You wish, dreamer.",
  "Sure, if pigs fly.",
  "Maybe try Google first.",
  "Signs point to nope.",
  "Yes, but you’ll regret it.",
  "Nope, not your day.",
  "Ask your mom, maybe.",
  "Chill, it’s just life.",
  "Definitely… but who cares?",
  "Do you even manifest?",
  "Yup, and chaos follows.",
  "Not in this timeline.",
  "Try again after coffee.",
  "You already know, don’t you?",
  "That’s a hard maybe.",
  "LOL no, absolutely not.",
  "Don’t bet your rent.",
  "Yes, but only ironically.",
  "Unclear, check your Wi-Fi.",
  "Ask again tomorrow-ish.",
  "Outlook good… for someone else.",
  "Better not tell you now.",
  "Highly doubtful, but nice try.",
  "Sure, if you believe.",
  "Dream big, fail bigger.",
  "Yes, but keep receipts.",
  "That’s a bold assumption.",
  "100% maybe, probably not.",
  "Try again after therapy.",
  "No clue, ask a cat.",
  "Looks grim, wear black.",
  "Can confirm: total disaster.",
  "Absolutely, but you’ll cry.",
  "Yes, but it’s weird.",
  "You won’t like the answer.",
  "Sure, if you insist.",
  "LMAO, that’s adorable.",
  "Proceed with snacks and fear.",
  "Ask Siri, I’m tired.",
  "No, but nice confidence.",
  "Could happen, statistically unlikely.",
  "Try bribing fate first.",
  "Why would you even ask?",
  "Yes! Wait… no. Maybe.",
  "Your vibe says otherwise.",
  "Unlikely, but plot twist!",
  "Nah, destiny’s on break."
];



function askButton () {
    // Gets the values for name/question 
    const userName = document.getElementById("usersName").value.trim();
    const userQuestion = document.getElementById("usersQuestion").value.trim();

    if (!userName){
        alert("You forgot a name");
        return;
    }

    if (!userQuestion){
        alert("You forgot a question")
        return;
    }

    const randomIndex = Math.floor(Math.random()* magic8Answers.length);

    const randomAnswer = magic8Answers[randomIndex];
    document.getElementById("answer").textContent = `${userName}, ${randomAnswer}`;
};