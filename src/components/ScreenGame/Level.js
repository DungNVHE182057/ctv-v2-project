import { cssData } from "./cssData"
import { cssResult } from "./cssResult"
export const Level = [
    //LEVEL3
    {
        html:`<h1>helloWorldAgain3</h1>`,
        image: [],
        desc: `<html>
        <body>${cssData[1].html}</body>
        <style>${cssData[1].css}</style>
        </html>`,
        css: `body {
            color: blue;
        }`,
        toEditor: 
        `/* task #3 */
body { 
    color: ;
}`,
        expect: [
            {
                id: 0,
                tagName: ``,
                atb: [
                    'color'
                ],
                val: [
                    'black'
                ]
            }
        ]

    },
    //LEVEL2
    {
        html:`${cssResult[1].html}`,
        image: [],
        desc: `<html>
        <body>${cssData[1].html}</body>
        <style>${cssData[1].css}</style>
        </html>`,
        css: `${cssResult[1].css}`,
        toEditor: 
        `/* task #2 */
.forefront { 

}`,
        expect: [
            {
                id: 0,
                tagName: ``,
                atb: [
                    'justify-content'
                ],
                val: [
                    'space-between'
                ]
            }
        ]

    },
    //LEVEL1
    {
        html:`${cssResult[0].html}
        `,
        image: [],
        desc: `<html>
        <body>${cssData[0].html}</body>
        <style>${cssData[0].css}</style>
        <script></script>
        </html>`,
        css: `${cssResult[0].css}`,
        toEditor: 
        `/* task #1 */
.forefront { 

}`,
        expect: [
            {
                id: 0,
                tagName: ``,
                atb: [
                    // 'flex-direction', 'flex-wrap'
                ],
                val: [
                    // 'column', 'wrap'
                ]
            }
        ]

    },


]