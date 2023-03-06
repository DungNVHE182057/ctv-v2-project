var dialogue = 1
let dialogues = {
    1: {
        initialize: () => {
            queue.push(() => {
                document.querySelector('#dialogueBox').innerHTML = " The justify-content property aligns the flexible container's items when the items do not use all available space on the main-axis (horizontally)." + '<br\>' + "Tip: Use the align-items property to align the items vertically"
            })
            
            queue.push(() => {
              document.querySelector('#dialogueBox').innerHTML = 'justify-content has 8 types in total:' 
              + '<ul style="display: grid; grid-template-columns: repeat(3,1fr)"><li>flex-start</li><li>flex-end<li>center</li><li>space-between</li><li>space-around</li><li>space-evenly</li><li>initial</li><li>inherit</li> </ul>'
                                                                                 
            })
            
            queue.push(() => {
              document.querySelector('#dialogueBox').innerHTML = 'flex-start, flex-end, center is pretty obvious; positioning items at the beginning, the end and the center of the container respectively'                                                 
            })
            
            queue.push(() => {
              document.querySelector('#dialogueBox').innerHTML = 'space-evenly and space-around, while may sound alike, function differently as items in the first one have space before, between and after them  ' 
                                                                  + '<br/>' + 'while items in space-evenly have equal space around them '                                                   
            })
            
            queue.push(() => {
              document.querySelector('#dialogueBox').innerHTML = 'initial keeps the original value of the property, and inherit items get its property from its parent'
            })
    
            queue.push(() => {
              document.querySelector('#dialogueBox').innerHTML = "That's all for justify-content. Try it yourself !"
            })
        }
    },

    2: {
        initialize: () => {
            queue.push(() => {
                document.querySelector('#dialogueBox').innerHTML = " The align-items property specifies the default alignment for items inside a flexbox or grid container." 
                + '<br/>' + 'In a flexbox container, the flexbox items are aligned on the cross axis, which is vertical by default (opposite of flex-direction).'
            })
            
            queue.push(() => {
              document.querySelector('#dialogueBox').innerHTML = ' align-items syntax is almost the same as justify-content, except that it has 3 more properties: normal, stretch and positional.' 
                                                                                 
            })
            
            queue.push(() => {
              document.querySelector('#dialogueBox').innerHTML = 'With stretch, items are stretched to fir the container, while center position items at the center of the container'                                                 
            })
            
            queue.push(() => {
              document.querySelector('#dialogueBox').innerHTML = "That's all for align-items. Try it yourself !"
            })
        }
    },

    3: {
        initialize: () => {
            queue.push(() => {
                document.querySelector('#dialogueBox').innerHTML = " The flex-direction property specifies the direction of the flexible items."
            })
            
            queue.push(() => {
              document.querySelector('#dialogueBox').innerHTML = 'flex-direction has 4 main following syntax:' + '<br/>' + '<ul style="display: grid; grid-template-columns: repeat(2,1fr)"><li>row</li><li>column</li><li>row-reverse</li><li>column-reverse</li></ul>'
                                                                                 
            })
            
            queue.push(() => {
              document.querySelector('#dialogueBox').innerHTML = "row and column display items vertically and horizontally, while row-reverse and column-reverse do the same thing, but the items' are reversed. "                                                 
            })
    
            queue.push(() => {
              document.querySelector('#dialogueBox').innerHTML = "that's all for flex-direction. Try it yourself!"
            })
        }
    },

    4: {
        initialize: () => {
            queue.push(() => {
                document.querySelector('#dialogueBox').innerHTML = " The flex-wrap property specifies whether the flexible items should wrap or not."
            })
            
            queue.push(() => {
              document.querySelector('#dialogueBox').innerHTML = " flex-wrap syntax are the following: " + '<br/>' + '<ul style="display: grid; grid-template-columns: repeat(3,1fr)"><li>nowrap</li><li>wrap</li><li>wrap-reverse</li></ul>'
                                                                                 
            })
            
            queue.push(() => {
              document.querySelector('#dialogueBox').innerHTML = "That's all for flex-wrap. Try it yourself !"
            })
        }
    },

    5: {
        initialize: () => {
            queue.push(() => {
                document.querySelector('#dialogueBox').innerHTML = " The align-self property specifies the default alignment for items inside a flexbox or grid container."
                + '<br/>' + 'In some way, this is similar to align-items, the only difference is that while align-items control the alignment of' + '<b> all items</b>'
                          + ', align-self control the alignment of an individual flex item on the cross axis'
            })
            
            queue.push(() => {
              document.querySelector('#dialogueBox').innerHTML = 'align-self has 8 types in total:' 
              + '<br/>' + '<ul style="display: grid; grid-template-columns: repeat(3,1fr)"><li>auto|</li><li>stretch<li>center</li><li>flex-start</li><li>flex-end</li><li>baseline</li></ul>'
                                                                                 
            })
            
            queue.push(() => {
              document.querySelector('#dialogueBox').innerHTML = 'stretch helps positioning element to fit the container, while center positions element to the center of the container'                                                 
            })
            
            queue.push(() => {
              document.querySelector('#dialogueBox').innerHTML = 'flex-start, flex-end and baseline position the element at the beginning, the baseline of the container respectively,'                                               
            })
            
    
            queue.push(() => {
              document.querySelector('#dialogueBox').innerHTML = "That's all for align-self. Try it yourself !"
            })
        }
    },

    6: {
        initialize: () => {
            queue.push(() => {
                document.querySelector('#dialogueBox').innerHTML = " The order property specifies the order of a flexible item relative to the rest of the flexible items inside the same container."
            })
            
            queue.push(() => {
              document.querySelector('#dialogueBox').innerHTML = 'The most usual syntax for this is order: number ' 
                                                                                 
            })

            
            queue.push(() => {
              document.querySelector('#dialogueBox').innerHTML = 'With the default value 0, it specifies the order for the flexible item'
            })
    
            queue.push(() => {
              document.querySelector('#dialogueBox').innerHTML = "That's all for order. Try it yourself !"
            })
        }
    }
}