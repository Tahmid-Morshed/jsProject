let userScore = 0;
let compScore = 0;

const userMove = document.querySelectorAll(".img");

const rock = document.querySelector("#r");
const paper = document.querySelector("#p");
const scissor = document.querySelector("#s");

const msg = document.querySelector(".status");

const score = document.querySelector("#score");

const score2 = document.querySelector("#score2");

const plrC = document.querySelector(".pc");
const compC = document.querySelector(".cc");

// const move = (val, compMove) => {
//   compMove = compGan();
// if (val === "r") {
//   plrC.style.cssText =
//     "background-image:url(/rock_ppaper_scissor/image/rock.png);";
// } else if (val == "p") {
//   plrC.style.cssText =
//     "background-image:url(/rock_ppaper_scissor/image/paper.png);";
// } else {
//   plrC.style.cssText =
//     "background-image:url(/rock_ppaper_scissor/image/scissors.png);";
// }
//   if (compMove === "r") {
//     compC.style.cssText =
//       "background-image:url(/rock_ppaper_scissor/image/rock.png);";
//   } else if (compMove === "p") {
//     compC.style.cssText =
//       "background-image:url(/rock_ppaper_scissor/image/paper.png);";
//   } else {
//     compC.style.cssText =
//       "background-image:url(/rock_ppaper_scissor/image/scissors.png);";
//   }

const showWineer = (userWin) => {
  if (userWin) {
    userScore++;
    score.innerText = userScore;
    console.log("you Win");
    msg.innerText = `YOU WIN `;
  } else {
    console.log("you Lose");
    msg.innerText = "YOU LOSE";
    compScore++;
    score2.innerText = compScore;
  }
};

const drawGame = () => {
  console.log("draw");
  msg.innerText = "DRAW";
};

const compGan = () => {
  const option = ["r", "p", "s"];
  const inx = Math.floor(Math.random() * 3);
  return option[inx];
};

const playGame = (val) => {
  console.log(val);
  let compMove = compGan();
  console.log(compMove);

  if (val === compMove) {
    drawGame();
  } else {
    let user = true;
    if (val === "r") {
      userWin = compMove === "p" ? false : true;
    } else if (val === "p") {
      userWin = compMove === "s" ? false : true;
    } else {
      userWin = compMove === "r" ? false : true;
    }
    showWineer(userWin);
  }
  if (compMove === "r") {
    compC.style.cssText =
      "background-image:url(/rock_ppaper_scissor/image/rock.png);";
  } else if (compMove === "p") {
    compC.style.cssText =
      "background-image:url(/rock_ppaper_scissor/image/paper.png);";
  } else {
    compC.style.cssText =
      "background-image:url(/rock_ppaper_scissor/image/scissors.png);";
  }
  if (val === "r") {
    plrC.style.cssText =
      "background-image:url(/rock_ppaper_scissor/image/rock.png);";
  } else if (val == "p") {
    plrC.style.cssText =
      "background-image:url(/rock_ppaper_scissor/image/paper.png);";
  } else {
    plrC.style.cssText =
      "background-image:url(/rock_ppaper_scissor/image/scissors.png);";
  }
};

userMove.forEach((img) => {
  img.addEventListener("click", () => {
    const val = img.getAttribute("id");
    playGame(val);
  });
});
