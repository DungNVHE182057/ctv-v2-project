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
    justify-content: ;
    align-items: ;
    flex-direction: ;
    /* Please insert value to these attributes and please do not insert more attributes. Thank you and happy learning!! */
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
    userData: null,
    setUserData: (data) => {
      this.userData = data
    }
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
    justify-content: ;
    align-items: ;
  /* Please insert value to these attributes and please do not insert more attributes. Thank you and happy learning!! */
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
    userData: null,
    setUserData: (data) => {
      this.userData = data
    }
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
    flex-direction: ;
    flex-wrap: ;
  /* Please insert value to these attributes and please do not insert more attributes. Thank you and happy learning!! */
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
    userData: null,
    setUserData: (data) => {
      this.userData = data
    }
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
        display: ;
    }
    /*css this class*/
    .above-container.character0{
        /*ninja*/
        order: ;
        align-self: ;
        
    }
    /*not css this class */
    .above-container.character1{
        /*knight*/
        order: ;  
    }
    /*css this class*/
    .above-container.character2{
        /*mage*/
        order: ;
        align-self: ;
        
    }
    /* Please insert value to these attributes and please do not insert more attributes. Thank you and happy learning!! */
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
    userData: null,
    setUserData: (data) => {
      this.userData = data
    }
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
      display: ;
    }
    .row1.pinkArea{
      flex-grow: ;
    }
    .row1.blueArea{
      flex-grow: ;  
    }
    .row1.orangeArea{
      flex-grow: ;
    }
    .row2.pinkArea{
      flex: ;
    }
    .row3.pinkArea{
      flex-grow: ;
    }
    .row3.violetArea{
       flex-grow: ;
    }
    
    .row4.greenArea{
      flex-basis: ;
    }
    .row4.yellowArea{
      flex-basis: ;
    }
    .row5.biqueArea{
      flex: ;
    }
    .row5.greenArea{
      flex: ;
    }
    .row5.yellowArea{
      flex: ;
    }
    /* Please insert value to these attributes and please do not insert more attributes. Thank you and happy learning!! */
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
    userData: null,
    setUserData: (data) => {
      this.userData = data
    }
  },
  
];
