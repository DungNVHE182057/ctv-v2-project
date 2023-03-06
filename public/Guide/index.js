const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

// (function() {
  
//   function start() {
//      screen.addEventListener('resize', fitCanvas, false);
//      fitCanvas();    // initial canvas border
//   }
//   function resize() {
//      c.strokeStyle = 'red';
//      c.lineWidth = '10'
//      c.strokeRect(0, 0, screen.innerWidth, screen.innerHeight);
//   }
//   function fitCanvas() {
//      canvas.width = screen.innerWidth;
//      canvas.height = screen.innerHeight;
//      resize();
//   }
// })();


canvas.width = 64 * 16; // 1024
canvas.height = 64 * 9; // 576

let parsedCollisions;
let collisionBlocks;
let background;
let doors;
let npcs;
const player = new Player({
  imageSrc: "./img/king/idle.png",
  frameRate: 10,
  animations: {
    idleRight: {
      frameRate: 10,
      frameBuffer: 6,
      loop: true,
      imageSrc: "./img/king/idle.png",
    },
    idleLeft: {
      frameRate: 10,
      frameBuffer: 6,
      loop: true,
      imageSrc: "./img/king/idleLeft.png",
    },
    runRight: {
      frameRate: 8,
      frameBuffer: 8,
      loop: true,
      imageSrc: "./img/king/runRight.png",
    },
    runLeft: {
      frameRate: 8,
      frameBuffer: 8,
      loop: true,
      imageSrc: "./img/king/runLeft.png",
    },
    enterDoor: {
      frameRate: 10,
      frameBuffer: 6,
      loop: false,
      imageSrc: "./img/king/idle.png",
      onComplete: () => {
        console.log("completed animation");
        gsap.to(overlay, {
          opacity: 1,
          onComplete: () => {
            level++;
            
            
            if (level === 3) level = 1;
            levels[level].init();
            player.switchSprite("idleRight");
            player.preventInput = false;
            gsap.to(overlay, {
              opacity: 0,
            });
          },
        });
      },
    },
  },
});

let level = 2;
let levels = {
  1: {
    init: () => {
      parsedCollisions = collisionsLevel2.parse2D();
      collisionBlocks = parsedCollisions.createObjectsFrom2D();
      player.collisionBlocks = collisionBlocks;
      if (player.currentAnimation) player.currentAnimation.isActive = false;


      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: "./img/backgroundLevel1.png",
      });

      doors = [
        new Sprite({
          position: {
            x: 767,
            y: 275,
          },
          imageSrc: './img/doorOpen.png',
          frameRate: 5,
          frameBuffer: 5,
          loop: false,
          autoplay: false,
        }),
      ];

      npcs = [
        new Sprite({
          position: {
            x: 580,
            y: 270,
          },
          // imageSrc: "./img/npc/idleLeft.png",
          frameRate: 9,
          frameBuffer: 10,
          loop: true,
          autoplay: true,
        }),
      ];

  //       queue.push(() => {
  //       document.querySelector('#dialogueBox').innerHTML = 'Hello Traveler'
  //       // queue.shift()
  // })

  //       queue.push(() => {
  //       document.querySelector('#dialogueBox').innerHTML = 'Welcome to the House'
  //       // queue.shift()
  // })

  //       queue.push(() => {
  //       document.querySelector('#dialogueBox').innerHTML = 'Let me show you around'
  //       // queue.shift()
  // })

      
    },
  },
  2: {
    init: () => {
      parsedCollisions = collisionsLevel2.parse2D();
      collisionBlocks = parsedCollisions.createObjectsFrom2D();
      player.collisionBlocks = collisionBlocks;

      player.position.x = 200
      player.position.y = 200

      if (player.currentAnimation) player.currentAnimation.isActive = false;

      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: "./img/backgroundLevel1.png",
      });

      doors = [
        new Sprite({
          position: {
            x: 200,
            y: 275,
          },
          // imageSrc: "./img/doorOpen.png",
          frameRate: 5,
          frameBuffer: 5,
          loop: false,
          autoplay: false,
        }),
      ];

      npcs = [
        new Sprite({
          position: {
            x: 680,
            y: 270,
          },
          imageSrc: "./img/npc/idleLeft.png",
          frameRate: 9,
          frameBuffer: 10,
          loop: true,
          autoplay: true,
        }),
      ];

      

      
    },
  },
//   3: {
//     init: () => {
//       parsedCollisions = collisionsLevel3.parse2D();
//       collisionBlocks = parsedCollisions.createObjectsFrom2D();
//       player.collisionBlocks = collisionBlocks;
//       player.position.x = 80;
//       player.position.y = 40;
//       if (player.currentAnimation) player.currentAnimation.isActive = false;

//       background = new Sprite({
//         position: {
//           x: 0,
//           y: 0,
//         },
//         imageSrc: "./img/backgroundLevel2a.png",
//       });

//       doors = [
//         new Sprite({
//           position: {
//             x: 2000,
//             y: 2000,
//           },
//           imageSrc: "./img/doorOpen.png",
//           frameRate: 5,
//           frameBuffer: 5,
//           loop: false,
//           autoplay: false,
//         }),
//       ];

//       npcs = [
//         new Sprite({
//           position: {
//             x: 600,
//             y: 400,
//           },
//           imageSrc: "./img/npc/idleLeft.png",
//           frameRate: 9,
//           frameBuffer: 10,
//           loop: true,
//           autoplay: true,
//         }),
//       ];

//       if(queue.length != 0){
//         queue.shift()
//       }

//       queue.push(() => {
//         document.querySelector('#dialogueBox').innerHTML = 'Hello Traveler'
//   })

//         queue.push(() => {
//         document.querySelector('#dialogueBox').innerHTML = 'Welcome to the House'
//   })

//         queue.push(() => {
//         document.querySelector('#dialogueBox').innerHTML = 'This is the Dining Hall'
// })

//         queue.push(() => {
//         document.querySelector('#dialogueBox').innerHTML = 'Let me show you around'
//   })
//     },
//   },

//   4: {
//     init: () => {
//       parsedCollisions = collisionsLevel4.parse2D();
//       collisionBlocks = parsedCollisions.createObjectsFrom2D();
//       player.collisionBlocks = collisionBlocks;
//       if (player.currentAnimation) player.currentAnimation.isActive = false;

//       background = new Sprite({
//         position: {
//           x: 0,
//           y: 0,
//         },
//         imageSrc: "./img/backgroundLevel2.png",
//       });

//       doors = [
//         new Sprite({
//           position: {
//             x: 550,
//             y: 401,
//           },
//           imageSrc: "./img/doorOpen.png",
//           frameRate: 5,
//           frameBuffer: 5,
//           loop: false,
//           autoplay: false,
//         }),
//       ];

//       npcs = [
//         new Sprite({
//           position: {
//             x: 300,
//             y: 335,
//           },
//           imageSrc: "./img/npc/idleRight.png",
//           frameRate: 9,
//           frameBuffer: 10,
//           loop: true,
//           autoplay: true,
//         }),
//       ];
//     },
//   },

//   5: {
//     init: () => {
//       parsedCollisions = collisionsLevel5.parse2D();
//       collisionBlocks = parsedCollisions.createObjectsFrom2D();
//       player.collisionBlocks = collisionBlocks;
//       player.position.x = 750;
//       player.position.y = 230;
//       if (player.currentAnimation) player.currentAnimation.isActive = false;

//       background = new Sprite({
//         position: {
//           x: 0,
//           y: 0,
//         },
//         imageSrc: "./img/backgroundLevel3a.png",
//       });

//       doors = [
//         new Sprite({
//           position: {
//             x: 2000,
//             y: 2000,
//           },
//           imageSrc: "./img/doorOpen.png",
//           frameRate: 5,
//           frameBuffer: 5,
//           loop: false,
//           autoplay: false,
//         }),
//       ];

//       npcs = [
//         new Sprite({
//           position: {
//             x: 300,
//             y: 335,
//           },
//           imageSrc: "./img/npc/idleRight.png",
//           frameRate: 9,
//           frameBuffer: 10,
//           loop: true,
//           autoplay: true,
//         }),
//       ];

//       queue.push(() => {
//         document.querySelector('#dialogueBox').innerHTML = 'Hello Traveler'
//         // queue.shift()
//   })

//         queue.push(() => {
//         document.querySelector('#dialogueBox').innerHTML = 'Welcome to the House'
//         // queue.shift()
//   })

//         queue.push(() => {
//         document.querySelector('#dialogueBox').innerHTML = 'Let me show you around'
//         // queue.shift()
//   })
        
//     },
//   },

//   6: {
//     init: () => {
//       parsedCollisions = collisionsLevel6.parse2D();
//       collisionBlocks = parsedCollisions.createObjectsFrom2D();
//       player.collisionBlocks = collisionBlocks;
//       if (player.currentAnimation) player.currentAnimation.isActive = false;

//       background = new Sprite({
//         position: {
//           x: 0,
//           y: 0,
//         },
//         imageSrc: "./img/backgroundLevel3.png",
//       });

//       doors = [
//         new Sprite({
//           position: {
//             x: 176.0,
//             y: 335,
//           },
//           imageSrc: "./img/doorOpen.png",
//           frameRate: 5,
//           frameBuffer: 5,
//           loop: false,
//           autoplay: false,
//         }),
//       ];

//       npcs = [
//         new Sprite({
//           position: {
//             x: 300,
//             y: 335,
//           },
//           imageSrc: "./img/npc/idleRight.png",
//           frameRate: 9,
//           frameBuffer: 10,
//           loop: true,
//           autoplay: true,
//         }),
//       ];
//     },
  // },
};

const keys = {
  w: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
};

const overlay = {
  opacity: 0,
};

function animate() {
  window.requestAnimationFrame(animate);
  background.draw();
  // collisionBlocks.forEach((collisionBlock) => {
  //   collisionBlock.draw()
  // })

  doors.forEach((door) => {
    door.draw();
  });

  npcs.forEach((npc) => {
    npc.draw();
    
  });

  player.handleInput(keys);
  player.draw();
  player.update();

  c.save();
  c.globalAlpha = overlay.opacity;
  c.fillStyle = "black";
  c.fillRect(0, 0, canvas.width, canvas.height);
  c.restore();
}

levels[level].init();
animate();
