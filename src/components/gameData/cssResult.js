import images from "../../assets/images";
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
    flex-direction: column;
    flex-wrap: wrap;
}
.behind-container, .above-container{
    width: 20%;
    height: 20%;

}
.behind, .above{
    width: 100%;
    height: 100%;
    background-position:center ;
    background-size: contain;
    background-repeat: no-repeat;
}`;
const item1 = [
  {
    container: "above-container",
    children: [
      "above green",
      "above green",
      "above green",
      "above green",
      "above green",
      "above red",
      "above red",
      "above red",
      "above red",
      "above red",
      "above yellow",
      "above yellow",
      "above yellow",
      "above yellow",
      "above yellow",
    ],
  },
];
const item2 = [
  {
    container: "behind-container",
    children: [
      "behind green",
      "behind green",
      "behind green",
      "behind green",
      "behind green",
      "behind red",
      "behind red",
      "behind red",
      "behind red",
      "behind red",
      "behind yellow",
      "behind yellow",
      "behind yellow",
      "behind yellow",
      "behind yellow",
    ],
  },
];
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
  {
    html: `
        <div class="app">
        <section class="pond">
            <div class="forefront">
                ${renderItems(item1)}
            </div>
            <div class="background">
                ${renderItems(item2)}
            </div>

    </div>
        `,
    css: `  
    ${basicResultCss}
    .pond{
        background-color: rgba(31,87,104);

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
];
