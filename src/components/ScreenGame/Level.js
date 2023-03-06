import { cssData } from "./cssData";
import { cssResult } from "./cssResult";

export const Level = [
  //LEVEL3
  {
    html: `${cssResult[2].html}`,
    image: [],
    desc: `<html>
        <body>${cssData[2].html}</body>
        <style>
            ${cssData[2].css}}
        </style>
        <script></script>
        </html>`,
    css: `${cssResult[2].css}`,
    toEditor: `/* task #1 */
.sceneScreen { 
  display: flex;

}
`,
    expect: [
      {
        id: 0,
        tagName: ``,
        atb: ["justify-content", "align-items", "flex-direction"],
        val: ["space-evenly", "center", "row-reverse"],
      },
    ],
  },
  //LEVEL2
  {
    html: `${cssResult[1].html}`,
    image: [],
    desc: `<html>
        <body>${cssData[1].html}</body>
        <style>${cssData[1].css}</style>
        </html>`,
    css: `${cssResult[1].css}`,
    toEditor: `/* task #2 */
.sceneScreen { 
  display: flex;

}
`,
    expect: [
      {
        id: 0,
        tagName: ``,
        atb: ["justify-content", "align-items"],
        val: ["space-between", "flex-end"],
      },
    ],
  },
  //LEVEL1
  {
    html: `${cssResult[0].html}
        `,
    image: [],
    desc: `<html>
        <body>${cssData[0].html}</body>
        <style>${cssData[0].css}</style>
        <script></script>
        </html>`,
    css: `${cssResult[0].css}`,
    toEditor: `/* task #3 */
.sceneScreen { 
  display: flex;
  
}
`,
    expect: [
      {
        id: 0,
        tagName: ``,
        atb: ["flex-direction", "flex-wrap"],
        val: ["column", "wrap"],
      },
    ],
  },
  //LEVEL4
  {
    html: `${cssResult[3].html}`,
    image: [],
    desc: `<html>
              <body>${cssData[3].html}</body>
              <style>
                  ${cssData[3].css}}
              </style>
              <script></script>
              </html>`,
    css: `${cssResult[3].css}`,
    toEditor: `/* task #4 */
  .sceneScreen { 
      display: flex;
  }
  /*css this class*/
  .above-container.character0{
      /*ninja*/
      
  }
  /*not css this class */
  .above-container.character1{
      /*knight*/
      order: 2;  
  }
  /*css this class*/
  .above-container.character2{
      /*mage*/
      
  }
      `,

    expect: [
      {
        id: 1,
        tagName: ``,
        atb: ["align-self", "order"],
        val: ["center", "3"],
      },

      {
        id: 3,
        tagName: ``,
        atb: ["order", "align-self"],
        val: ["1", "flex-start"],
      },
    ],
  },
  //LEVEL5
  {
    html: `${cssResult[4].html}`,
    image: [],
    desc: `<html>
          <body>${cssData[4].html}</body>
          <style>${cssData[4].css}</style>
          </html>`,
    css: `${cssResult[4].css}`,
    toEditor: `/* task #5 */
  .row{
    display: flex;
  }
  .row1.pinkArea{
  
  }
  .row1.blueArea{
      
  }
  .row1.orangeArea{
      
  }
  
  .row2.pinkArea{
  
  }
  
  .row3.pinkArea{
  
  }
  
  .row3.violetArea{
  
  }
  
  .row4.greenArea{
  
  }
  .row4.yellowArea{
  
  }
  .row5.biqueArea{
  
  }
  .row5.greenArea{
  
  }
  .row5.yellowArea{
  
  }
  `,

    expect: [
      {
        id: 1,
        tagName: ``,
        atb: ["flex-grow"],
        val: ["2"],
      },
      {
        id: 2,
        tagName: ``,
        atb: ["flex-grow"],
        val: ["2"],
      },
      {
        id: 3,
        tagName: ``,
        atb: ["flex-grow"],
        val: ["1"],
      },
      {
        id: 4,
        tagName: ``,
        atb: ["flex-grow"],
        val: ["2"],
      },
      {
        id: 5,
        tagName: ``,
        atb: ["flex-grow"],
        val: ["2"],
      },
      {
        id: 6,
        tagName: ``,
        atb: ["flex-grow"],
        val: ["3"],
      },
      {
        id: 7,
        tagName: ``,
        atb: ["flex-basis"],
        val: ["20%"],
      },
      {
        id: 8,
        tagName: ``,
        atb: ["flex-basis"],
        val: ["80%"],
      },
      {
        id: 9,
        tagName: ``,
        atb: ["flex-basis"],
        val: ["20%"],
      },
      {
        id: 10,
        tagName: ``,
        atb: ["flex-basis"],
        val: ["20%"],
      },
      {
        id: 11,
        tagName: ``,
        atb: ["flex-basis"],
        val: ["60%"],
      },
    ],
  },
];
