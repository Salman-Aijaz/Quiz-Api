const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

const quizData = [
  {
    quest: "What is the capital of Pakistan",
    options: ["Islamabad", "Karachi", "Lahore", "Rawalpindi", "Bahawalpur"],
    optionSelect: "Radio",
  },
  {
    quest:
      "_________are words that a programming language has set aside for its own use ?",
    options: [
      "Control words ",
      "Control structures ",
      "Reserved words",
      "Reserved keys",
    ],
    optionSelect: "Radio",
  },
  {
    quest: "The basic computer processing cycle consists of _______ ?",
    options: ["systems", "input", "output", "hardware"],
    optionSelect: "Check-Box",
  },
  {
    quest: "Computer language used on the Internet is —— ?",
    options: ["BASIC", "COBOL", "JAVA", "PASCAL"],
    optionSelect: "Radio",
  },
  {
    quest: "Is Javascript Case Sensitive Language",
    options: ["True", "False"],
    optionSelect: "Radio",
  },
  {
    quest:
      "Special effect used to introduce slides in a presentation are called __________ ?",
    options: ["Effects", "Custom animation", "Animation", "Transition"],
    optionSelect: "Radio",
  },
  {
    quest: "Which of the following is NOT a famous operating system ?",
    options: [
      "Windows Vista",
      "MAC OS X",
      "Linux",
      "Kali Linux",
      "Virtual Box",
    ],
    optionSelect: "Radio",
  },
  {
    quest: "Javascript is an __ language",
    options: [
      "Object-Based",
      "OOP",
      "Procedural",
      "Object Oriented Programming",
    ],
    optionSelect: "Check-Box",
  },
  {
    quest:
      "Which of the following keywords is used to define a variable in Javascript?",
    options: ["const", "var", "let"],
    optionSelect: "Check-Box",
  },
  {
    quest: "Which of the following is not a software ?",
    options: ["Excel", "Mouse", "Keyboard", "Operating System"],
    optionSelect: "Check-Box",
  },
];

const quizApi = [
  {
    quest: "What is the capital of Pakistan",
    options: ["Islamabad", "Karachi", "Lahore", "Rawalpindi", "Bahawalpur"],
    correct: ["Islamabad"],
  },
  {
    quest:
      "_________are words that a programming language has set aside for its own use ?",
    options: [
      "Control words ",
      "Control structures ",
      "Reserved words",
      "Reserved keys",
    ],
    correct: ["Reserved words"],
  },
  {
    quest: "The basic computer processing cycle consists of _______ ?",
    options: ["systems", "input", "output", "hardware"],
    correct: ["input", "output"],
  },
  {
    quest: "Computer language used on the Internet is —— ?",
    options: ["BASIC", "COBOL", "JAVA", "PASCAL"],
    correct: ["JAVA"],
  },
  {
    quest: "Is Javascript Case Sensitive Language",
    options: ["True", "False"],
    correct: ["True"],
  },
  {
    quest:
      "Special effect used to introduce slides in a presentation are called __________ ?",
    options: ["Effects", "Custom animation", "Animation", "Transition"],
    correct: ["Transition"],
  },
  {
    quest: "Which of the following is NOT a famous operating system ?",
    options: [
      "Windows Vista",
      "MAC OS X",
      "Linux",
      "Kali Linux",
      "Virtual Box",
    ],
    correct: ["Virtual Box"],
  },
  {
    quest: "Javascript is an __ language",
    options: [
      "Object-Based",
      "OOP",
      "Procedural",
      "Object Oriented Programming",
    ],
    correct: ["OOP", "Object Oriented Programming"],
  },
  {
    quest:
      "Which of the following keywords is used to define a variable in Javascript?",
    options: ["const", "var", "let"],
    correct: ["const", "var", "let"],
  },
  {
    quest: "Which of the following is not a software ?",
    options: ["Excel", "Mouse", "Keyboard", "Operating System"],
    correct: ["Mouse", "Keyboard"],
  },
];

const addTask = async (url, data) => {
  const fetchTask = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  // const res= await fetchTask.json()
  revalidateTag("task");
  return "TASK ADD...";
};

let score = 0;
app.get("/", (req, resp) => {
  score=0
  resp.json(quizData);
});

app.post("/", (req, resp) => {
  const { answers, currentQuestIndex } = req.body;
  /* */

  const correctAnswers = quizApi[currentQuestIndex].correct;
  console.log(correctAnswers);

  const isCorrect = correctAnswers.every((ans) => answers.includes(ans));
  console.log(isCorrect);
  if (isCorrect) {
    score++;
    // console.log("SCORE==>",score)
  }


  /* */
  //   for (let i = 0; i< quizApi.length; i++) {
  //     const correctAns = quizApi[i].correct;
  //     const userAns = answers[i]
  //     if(Array.isArray(userAns)){
  //   const isCorrect = correctAns.every((ans) => userAns.includes(ans));
  //   if(isCorrect){
  // score++
  //   }
  //     }
  //   }

  
  /* */
  // let isCorrect = true;
  // correctAnswers.forEach((correctAns)=>{
  // if(!answers.includes(correctAns)){
  //  isCorrect=false
  // }
  // })
  // console.log(correctAnswers.length)
  // console.log("ANS==>",answers)

  /* */
  // quizApi.forEach((question, index) => {
  //   const submitAnswers = answers[index];
  //   console.log(submitAnswers);

  //     const isCorrect = question.correct.every((ans) =>
  //       submitAnswers.includes(ans)
  //     );

  //     if (isCorrect) {
  //       score++;
  //     }

  // });

  resp.json(score);
});


app.listen(5000, () => {
  console.log("OUR APP IS WORKING");
});
