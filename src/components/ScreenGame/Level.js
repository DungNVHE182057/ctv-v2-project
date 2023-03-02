import { cssData } from "./cssData"
import { cssResult } from "./cssResult"


export const Level = [
        //LEVEL4
        {
            html:`${cssResult[3].html}`,
            image: [],
            desc: `<html>
            <body>${cssData[3].html}</body>
            <style>
                ${cssData[3].css}}
            </style>
            <script></script>
            </html>`,
            css: `${cssResult[3].css}`,
            toEditor: 
            `/* task #4 */
.forefront { 
    display: flex;
}
/*css this class*/
.above-container.character0{
    /*ninja*/

}
/*not css this class */
.above-container.character1{
    /*violet*/
    order: 2;  
}
/*css this class*/
.above-container.character2{
    /*knight*/
    
}
    `,
    // .forefront { 
    //     display: flex;
    // }
    // .above-container.character0{
    //     order: 3;
    //     align-self:center ;
    // }
    // .above-container.character1{
    //     order: 2;  
    // }
    // .above-container.character2{
    //     order: 1;
    //     align-self: flex-start;
    // }
        
            expect: [

                {
                    id: 1,
                    tagName: ``,
                    atb: [
                        'align-self','order'
                    ],
                    val: [
                        'center', '3'
                    ]  
                },
                
                {
                    id: 3,
                    tagName: ``,
                    atb: [
                        'order', 'align-self'
                    ],
                    val: [
                         '1', 'flex-start'
                    ]  
                }
            ]
    
        },
    //LEVEL3
    {
        html:`${cssResult[2].html}`,
        image: [],
        desc: `<html>
        <body>${cssData[2].html}</body>
        <style>
            ${cssData[2].css}}
        </style>
        <script></script>
        </html>`,
        css: `${cssResult[2].css}`,
        toEditor: 
        `/* task #3 */
.forefront { 

}
`,
        expect: [
            {
                id: 0,
                tagName: ``,
                atb: [
                    // 'justify-content','align-items','flex-direction'
                ],
                val: [
                    // 'space-evenly', 'center', 'row-reverse'
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

}
`,
        expect: [
            {
                id: 0,
                tagName: ``,
                atb: [
                    // 'justify-content', 'align-items'
                ],
                val: [
                    // 'space-between', 'flex-end'
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

}
`,
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