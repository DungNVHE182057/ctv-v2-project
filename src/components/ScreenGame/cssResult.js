import images from "../../assets/images/storeImage.js";
import {basicResultCss, itemAboveLevel1, itemBehindLevel1, itemAboveLevel2, itemBehindLevel2,
  itemAboveLevel3,itemBehindLevel3,itemAboveLevel4,itemBehindLevel4
} from "./StoreItem.js"
function renderItems(item) {
  return item
    .map((container, index) =>
      container.children.map(
        (child) =>
          `<div class="${container.container} character${index++}">\n  <div class="${child}">\n  </div>\n</div>`
      )
    )
    .join("\n")
    .replace(/,/g, "");
}
export const cssResult = [
  // LEVEL1
  {
    html: `
    <div class="app">
    <section class="pond">
        <div class="forefront">
            ${renderItems(itemAboveLevel1)}
        </div>
        <div class="background">
            ${renderItems(itemBehindLevel1)}
        </div>
        </section>
    </div>`,
    css: `  
    ${basicResultCss}

    body{
        background-image: url(${images.itemBackgroundFrog});
        background-position: bottom ;
    }   

    .background{
      flex-direction: column;
      flex-wrap: wrap;
    }
    .behind.green{
        background-image: url(${images.itemLilyGreen});
    
    }
    .behind.red{
        background-image: url(${images.itemLilyRed});
    
    }
    .behind.yellow{
        background-image: url(${images.itemLilyYellow});
    
    }
    .above.green{
        background-image: url(${images.itemFrogGreen});
    
    }
    .above.red{
        background-image: url(${images.itemFrogRed});
    
    }
    .above.yellow{
        background-image: url(${images.itemFrogYellow});  
    }`,
  },
  //LEVEL2 
  {
    html: `
    <div class="app">
    <section class="pond">
        <div class="forefront">
            ${renderItems(itemAboveLevel2)}
        </div>
        <div class="background">
            ${renderItems(itemBehindLevel2)}
        </div>
        </section>
    
    </div>`,
    css: `  
    ${basicResultCss}

    body{
        background-image: url(${images.itemWater});
        background-position:bottom ;
    } 

    .background{
      align-items: flex-end;
      justify-content: space-between;

    }
    .forefront{
      align-items: flex-center;
      justify-content: center;
      
    }
    .behind.green{
        background-image: url(${images.itemLilyGreen});    
    }
    .above.green{
        background-image: url(${images.itemLotus});   
    }
    `,
  },
    //LEVEL3 
    {
        html: `
        <div class="app">
        <section class="pond">
            <div class="forefront">
                ${renderItems(itemAboveLevel3)}
            </div>
            <div class="background">
                ${renderItems(itemBehindLevel3)}
            </div>
            </section>
        
        </div>`,
        css: `  
        ${basicResultCss}
        .forefront{
 
        }
        body{
            background-image: url(${images.itemBackgroundAdventure});
            background-position:center ;
        }
        .behind-container{
          width: 10%;
          height: 10%;    
        }
        .background{
          justify-content: space-evenly;
          align-items: center;
        }
        .forefront { 
          flex-direction: row-reverve;
          align-items: flex-end;

        }

        .behind.green{
            background-image: url(${images.itemApple});    
        }
        .behind.red{
            background-image: url(${images.itemCheese});    
        }
        .behind.yellow{
            background-image: url(${images.itemSalmon});    
        }
        .above.green{
            background-image: url(${images.itemRogueActive});   
        }
        .above.red{
            background-image: url(${images.itemMageActive});   
        }
        .above.yellow{
            background-image: url(${images.itemKnightActive});   
        }
        `,
      },
         //LEVEL4
    {
      html: `
      <div class="app">
      <section class="pond">
          <div class="forefront">
              ${renderItems(itemAboveLevel4)}
          </div>
          <div class="background">
              ${renderItems(itemBehindLevel4)}
          </div>
          </section>
      
      </div>`,
      css: `  
      ${basicResultCss}
      .forefront{
        display: flex;
      }
      body{
          background-image: url(${images.itemBackgroundForest});
          background-position:center ;
      }
      .background{
      }
      .behind-container.character0{
        align-self: flex-start;
        order:1;
      }
      .behind-container.character1{
        align-self: flex-end;
        order:2;
      }
      .behind-container.character2{
        align-self: center;
        // background-color: red;
        order:3;

      }
      .forefront { 
        flex-direction: row-reverve;
        align-items: flex-end;

      }

      .behind.green{
          background-image: url(${images.itemZZZ});    
      }
      .behind.red{
          background-image: url(${images.itemSnake});    
      }
      .behind.yellow{
          background-image: url(${images.itemSpider});    
      }
      .above.green{
          background-image: url(${images.itemRogueActive});   
      }
      .above.red{
          background-image: url(${images.itemMageActive});   
      }
      .above.yellow{
          background-image: url(${images.itemKnightActive});   
      }
      `,
    },
];


