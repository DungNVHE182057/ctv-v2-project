export const Level = [
    {
        html:`<h1>helloWorld</h1>`,
        image: [],
        desc: `<html>
        <body><h1>Description</h1></body>
        <style></style>
        <script></script>
        </html>`,
        css: `body {
    olor: red;
}`,
        toEditor: 
        `/* task #1 */
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
                    'green'
                ]
            }
        ]

    },
    {
        html:`<h1>helloWorldAgain</h1>`,
        image: [],
        desc: `<html>
        <body><h1>2nd Description</h1></body>
        <style></style>
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

    }
]