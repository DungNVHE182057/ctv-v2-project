const levelNumber = [1,2,3,4,5,6,7,8,9,10,11,12,13]
const basicTextDescriptionCss = `p{
    font-family: 'PT Sans', sans-serif;
    color:  rgba(255,255,255,0.9);
    line-height: 1.5;
}
.help{
    font-family: 'Source Code Pro', monospace;
    background-color: rgba(255,255,255,0.2);
    border-bottom:  rgba(255,255,255,0.8) solid #000;
    color: #000;
}`
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
    css:`${basicTextDescriptionCss}`,
    html:
    `<b>Level ${levelNumber[2]}:</b>
    <p> Use the <span class="help">justify-content</span> to help the character
    </p>`
},

]