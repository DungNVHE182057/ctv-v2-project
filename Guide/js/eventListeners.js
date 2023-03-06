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

          queue.push(() => {
            document.querySelector('#dialogueBox').innerHTML = 'For lv1, use:' + "<br />" + 'justify-content: https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content'
                                                                               + "<br />" + 'align-items: https://developer.mozilla.org/en-US/docs/Web/CSS/align-items'
                                                                               + "<br />" + 'flex-direction: https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction'
        })
        
        queue.push(() => {
          document.querySelector('#dialogueBox').innerHTML = 'For lv2, use:' + "<br />" + 'justify-content: https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content'
                                                                             + "<br />" + 'align-items: https://developer.mozilla.org/en-US/docs/Web/CSS/align-items'
                                                                             
        })
        
        queue.push(() => {
          document.querySelector('#dialogueBox').innerHTML = 'For lv3, use:' + "<br />" + 'flex-direction: https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction'
                                                                             + "<br />" + 'flex-wrap: https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap'
                                                                             
        })
        
        queue.push(() => {
          document.querySelector('#dialogueBox').innerHTML = 'For lv4, use:' + "<br />" + 'Align-self: https://developer.mozilla.org/en-US/docs/Web/CSS/align-self'
                                                                             + "<br />" + 'Order: https://developer.mozilla.org/en-US/docs/Web/CSS/order'
                                                                             
        })
        
        queue.push(() => {
          document.querySelector('#dialogueBox').innerHTML = 'For lv5, use:' + "<br />" + 'flex-grow: https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow'
                                                                             + "<br />" + 'flex-basis: https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis'
                                                                             + "<br />" + 'flex: https://developer.mozilla.org/en-US/docs/Web/CSS/flex'
        })
        
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
          player.switchSprite("idleRight.png");
          // player.switchSprite('enterDoor')
          // door.play()
          return;
        }
      }
  }
});

var queue = [];
let i = Math.floor(Math.random() * queue.length)

document.querySelector("#dialogueBox").addEventListener("click", (e) => {
  




  if (queue.length > 0) {
    queue[0]();
    queue.shift();
    console.log(queue.length);
  } else {
    e.currentTarget.style.display = "none";
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
