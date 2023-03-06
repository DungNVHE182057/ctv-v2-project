window.addEventListener("keydown", (event) => {
  if (player.preventInput) return;
  switch (event.key) {
    case "w":
      // for (let i = 0; i < doors.length; i++) {
      //   const door = doors[i]

      //   if (
      //     player.hitbox.position.x + player.hitbox.width <=
      //       door.position.x + door.width &&
      //     player.hitbox.position.x >= door.position.x &&
      //     player.hitbox.position.y + player.hitbox.height >= door.position.y &&
      //     player.hitbox.position.y <= door.position.y + door.height
      //   ) {
      //     player.velocity.x = 0
      //     player.velocity.y = 0
      //     player.preventInput = true
      //     player.switchSprite('enterDoor')
      //     door.play()
      //     return
      //   }
      // }
      if (player.velocity.y === 0) player.velocity.y = -25;

      break;
    case "a":
      // move player to the left
      keys.a.pressed = true;
      break;
    case "d":
      // move player to the right
      keys.d.pressed = true;
      break;
    case "e":
      for (let i = 0; i < doors.length; i++) {
        const door = doors[i];

        if (
          player.hitbox.position.x + player.hitbox.width <=
            door.position.x + door.width &&
          player.hitbox.position.x >= door.position.x &&
          player.hitbox.position.y + player.hitbox.height >= door.position.y &&
          player.hitbox.position.y <= door.position.y + door.height
        ) {
          player.velocity.x = 0;
          player.velocity.y = 0;
          player.preventInput = true;
          player.switchSprite("enterDoor");
          door.play();
          return;
        }
      }

      for (let i = 0; i < npcs.length; i++) {
        const npc = npcs[i];

        if (
          player.hitbox.position.x + player.hitbox.width <=
            npc.position.x + npc.width &&
          player.hitbox.position.x >= npc.position.x &&
          player.hitbox.position.y + player.hitbox.height >= npc.position.y &&
          player.hitbox.position.y <= npc.position.y + npc.height
        ) {
          document.querySelector("#dialogueBox").innerHTML =
            "Well let's have some talk, shall we ?";

          document.querySelector("#dialogueBox").style.display = "block";

          //   queue.push(() => {
          //     document.querySelector('#dialogueBox').innerHTML = " The justify-content property aligns the flexible container's items when the items do not use all available space on the main-axis (horizontally)." + '<br\>' + "Tip: Use the align-items property to align the items vertically"
          // })

          // queue.push(() => {
          //   document.querySelector('#dialogueBox').innerHTML = 'justify-content has 8 types in total: flex-start|flex-end|center|space-between|space-around|space-evenly|initial|inherit; '

          // })

          // queue.push(() => {
          //   document.querySelector('#dialogueBox').innerHTML = 'flex-start, flex-end, center is pretty obvious; positioning items at the beginning, the end and the center of the container respectively'
          // })

          // queue.push(() => {
          //   document.querySelector('#dialogueBox').innerHTML = 'space-evenly and space-around, while may sound alike, function differently as items in the first one have space before, between and after them  '
          //                                                       + '<br/>' + 'while items in space-evenly have equal space around them '
          // })

          // queue.push(() => {
          //   document.querySelector('#dialogueBox').innerHTML = 'initial keeps the original value of the property, and inherit items get its property from its parent'
          // })

          // queue.push(() => {
          //   document.querySelector('#dialogueBox').innerHTML = "That's all for justify-content. Try it yourself !"
          // })
          // if (
          //   (document.querySelector("#dialogueBox").style.display = "block" && queue.length > 0)
          // ) {
          //   queue[0]();
          //   queue.shift();
          // }
          // queue[0]()
          // queue.shift()

          

          player.velocity.x = 0;
          player.velocity.y = 0;
          player.preventInput = true;
          // if(dialogues[dialogue])
          dialogues[dialogue].initialize();
          
          player.switchSprite("idleRight.png");
          // player.switchSprite('enterDoor')
          // door.play()
          return;
        }
      }
  }
});

var queue = [];
let i = Math.floor(Math.random() * queue.length);

document.querySelector("#dialogueBox").addEventListener("click", (e) => {
  

  if (queue.length > 0) {
    queue[0]();
    queue.shift();
    console.log(queue.length);
    console.log(dialogue);
  } else {
    e.currentTarget.style.display = "none";
    dialogue = (dialogue + 1)%6 + 1;
    
    // dialogues[dialogue].initialize();
    // player.switchSprite('enterDoor')
    // door.play()
  }

  console.log("clicked successful");
  player.preventInput = false;
});

window.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "a":
      // move player to the left
      keys.a.pressed = false;

      break;
    case "d":
      // move player to the right
      keys.d.pressed = false;

      break;
  }
});

// function clear() {
//   this.container = [];
// }
