import { cssData } from "./cssData"
import { cssResult } from "./cssResult"
export const Level = [
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
                    'flex-direction', 'flex-wrap'
                ],
                val: [
                    'column', 'wrap'
                ]
            }
        ]

    },
    {
        html:`<h1>helloWorldAgain</h1>`,
        image: [],
        desc: `<html>
        <body>${cssData[1].html}</body>
        <style>${cssData[1].css}</style>
        </html>`,
        css: `body {
            color: blue;
        }`,
        toEditor: 
        `/* task #2 */
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
        `/* task #2 */
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

]