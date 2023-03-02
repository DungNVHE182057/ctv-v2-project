const levelNumber = [1,2,3,4,5,6,7,8,9,10,11,12,13]
const basicTextDescriptionCss = `p{
    // font-family: 'PT Sans', sans-serif;
    font-family: "Fredoka One", cursive;
    color:  rgba(255,255,255,0.9);
    line-height: 1.5;
}
.help{
    font-family: 'Source Code Pro', monospace;
    background-color: rgba(255,255,255,0.2);
    border-bottom:  rgba(255,255,255,0.8) solid #000;
    color: #fff;
    font-weight: bold;
}
b{
    color:  rgba(77,141,255,1);
}
`

export const cssData =[
    
{   
    css:
    `${basicTextDescriptionCss}`,
    html:
    `<b>Level ${levelNumber[0]}:</b>
    <p>Help this army of frogs form three orderly columns using a combination of 
        <span class="help">flex-direction</span>
        and <span class="help">flex-wrap</span>
    </p>`
},
{   
    css:`${basicTextDescriptionCss}`,
    html:
    `<b>Level ${levelNumber[1]}:</b>
    <p> Use the <span class="help">justify-content</span> to help the lotus float on the leaves
    </p>`
},
{   
    css:`${basicTextDescriptionCss}
    .hint{
        color: rgba(255,255,255,0.5);
        font-size: 1.2rem;
    }
    `,
    html:
    `<b>Level ${levelNumber[2]}:</b>
    <p> The master is hungry, you must move to the cheese and your friend to the salmon and get it for the master  <br/>
    Hint: use <span class="help">justify-content</span> to move the adventurer to the food </p></br>
    <p className = "hint">flex-start: Items align to the left side of the container.
    flex-end: Items align to the right side of the container.
    center: Items align at the center of the container.
    space-between: Items display with equal spacing between them.
    space-around: Items display with equal spacing around them.</p>
    
    `
},

]