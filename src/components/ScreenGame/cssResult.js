import images from "../../assets/images";
import {itemAboveLevel1, itemBehindLevel1, itemAboveLevel2, itemBehindLevel2} from "./StoreItem.js"
console.log(images.itemKnight);
const basicResultCss = `
    html{
    height: 100%;
    overflow: hidden;
}
app{
    width: 100%;
    height: 100%;
}
.pond {
    position: relative;
    border-radius: 30px;
    overflow: hidden;
    min-width: 300px;
    min-height: 400px;
}
.forefront{
    position: absolute;
    left: 0;
    top: 0;
    width: 95%;
    height: 95%;
    padding: 2.5%;
    display: flex;
    z-index: 1;
}
.background{
    position: absolute;
    left: 0;
    top: 0;
    width: 95%;
    height: 95%;
    padding: 2.5%;
    display: flex;

}

.behind, .above{
    width: 100%;
    height: 100%;
    background-position:center ;
    background-size: contain;
    background-repeat: no-repeat;

}`;

function renderItems(item) {
  return item
    .map((container) =>
      container.children.map(
        (child) =>
          `<div class="${container.container}">\n  <div class="${child}">\n  </div>\n</div>`
      )
    )
    .join("\n")
    .replace(/,/g, "");
}
export const cssResult = [
  // LEVEL1
  {

    css: `  
    ${basicResultCss}

    .pond{
        background-color: rgba(31,87,104);

    }
    .background{
      flex-direction: column;
      flex-wrap: wrap;
    }
    .behind-container, .above-container{
      width: 20%;
      height: 20%;
  
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
    
    </div>`,
    css: `  
    ${basicResultCss}
    .pond{
        background-color: rgba(31,87,104);

    }
    .behind-container, .above-container{
      width: 25%;
      height: 25%;
  
    }
    .background{
      align-items: center;
      justify-content: space-between;

    }
    .forefront{
      align-items: center;
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
                ${renderItems(itemAboveLevel2)}
            </div>
            <div class="background">
                ${renderItems(itemBehindLevel2)}
            </div>
        
        </div>`,
        css: `  
        ${basicResultCss}
        .forefront{
 
            background-color: #fff;
        }
        .pond{
            background-color: rgba(31,87,104);
    
        }
        .behind-container, .above-container{
          width: 25%;
          height: 25%;
      
        }
        .background{
          align-items: center;
          justify-content: space-between;
    
        }
        .forefront{
          align-items: center;
          justify-content: center;
          
        }
        .behind.green{
            background-image: url(${images.itemKnight});    
        }
        .above.green{
            background-image: url(${images.itemKnight});   
        }
        `,
      },
];


