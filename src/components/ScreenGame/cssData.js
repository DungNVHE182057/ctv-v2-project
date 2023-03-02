import images from "../../assets/images/storeImage"

const levelNumber = [1,2,3,4,5,6,7,8,9,10,11,12,13]
const basicTextDescriptionCss = `p{
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
    font-family: "Fredoka One", cursive;

}
/* width */
::-webkit-scrollbar {
    width: 5px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
  }
   
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #46155c; 
    border-radius: 10px;
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #478dff; 
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
    <p> Use the <span class="help">justify-content</span> and <span class="help">align-items</span> to help the lotus float on the leaves
    </p>`
},
{   
    css:`${basicTextDescriptionCss}
    .hint{
        color: rgba(255,255,255,0.7);
        font-size: 0.8rem;
    }
    img.c{
        width: 13%;
        height:13%
    }
    `,
    html:
    `<b>Level ${levelNumber[2]}:</b>
    <p> The master is hungry, you must move the adventurers to the 
    right food and get it for the master.
    The goal is:</p>
    <img class = 'c' src="${images.itemKnight}" /> 
    <img src="${images.itemApple}" /><br>
    <img class = 'c' src="${images.itemMage}" /> 
    <img src="${images.itemCheese}" /><br>
    <img class = 'c' src="${images.itemRogue}" /> 
    <img  src="${images.itemSalmon}" />
    `
},

]