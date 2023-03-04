window.addEventListener('keydown', (event) => {
  if (player.preventInput) return
  switch (event.key) {
    case 'w':
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
      if (player.velocity.y === 0) player.velocity.y = -25

      break
    case 'a':
      // move player to the left
      keys.a.pressed = true
      break
    case 'd':
      // move player to the right
      keys.d.pressed = true
      break
    case 'e':
      for (let i = 0; i < doors.length; i++) {
        const door = doors[i]

        if (
          player.hitbox.position.x + player.hitbox.width <=
            door.position.x + door.width &&
          player.hitbox.position.x >= door.position.x &&
          player.hitbox.position.y + player.hitbox.height >= door.position.y &&
          player.hitbox.position.y <= door.position.y + door.height
        ) {
          player.velocity.x = 0
          player.velocity.y = 0
          player.preventInput = true
          player.switchSprite('enterDoor')
          door.play()
          return
        }
      }

      for (let i = 0; i < npcs.length; i++) {
        const npc = npcs[i]

        if (
          player.hitbox.position.x + player.hitbox.width <=
            npc.position.x + npc.width &&
          player.hitbox.position.x >= npc.position.x &&
          player.hitbox.position.y + player.hitbox.height >= npc.position.y &&
          player.hitbox.position.y <= npc.position.y + npc.height
        ) {
          queue[0]
          document.querySelector('#dialogueBox').style.display = 'block'
          queue.shift()
          
          player.velocity.x = 0
          player.velocity.y = 0
          player.preventInput = true
          player.switchSprite('idleRight.png')
          // player.switchSprite('enterDoor')
          // door.play()
          return
          
        }
      }
  }
})

const queue = [

]

document.querySelector('#dialogueBox').addEventListener('click', (e) =>{
  if(queue.length > 0 ){
    queue[0]()
    console.log(queue.length)
  }else {
    e.currentTarget.style.display = 'none'
    player.switchSprite('enterDoor')
    door.play()
  }
  
  console.log('clicked successful')
  player.preventInput = false
})

// document.querySelectorAll('#dialogueBox').forEach(dialogue, () => {
//   dialogue.addEventListener('click', (e) =>{
//   queue.push(() => {
//     document.querySelector('#dialogueBox').innerHTML = 'vdsrjvbrv'
//   })

//   queue.push(() => {
//     document.querySelector('#dialogueBox').innerHTML = 'knkjscn'
//   })

//   queue.push(() => {
//     document.querySelector('#dialogueBox').innerHTML = 'agv d he'
//   })
  
// })
// })



window.addEventListener('keyup', (event) => {
  switch (event.key) {
    case 'a':
      // move player to the left
      keys.a.pressed = false

      break
    case 'd':
      // move player to the right
      keys.d.pressed = false

      break
  }
})
