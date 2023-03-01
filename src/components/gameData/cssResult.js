import images from "../../assets/images"

export const cssResult = [
    {
        html:`
        <div class="app">
        <section class="pond">
            <div class="forefront">
                <div class="frog-container">
                    <div class="frog green">
                        
                    </div>
                </div>
                <div class="frog-container">
                    <div class="frog green">

                    </div>
                </div>
                <div class="frog-container">
                    <div class="frog green">

                    </div>
                </div>
                <div class="frog-container">
                    <div class="frog green">

                    </div>
                </div>
                <div class="frog-container">
                    <div class="frog green">

                    </div>
                </div>
                <div class="frog-container">
                    <div class="frog red">
                        
                    </div>
                </div>
                <div class="frog-container">
                    <div class="frog red">

                    </div>
                </div>
                <div class="frog-container">
                    <div class="frog red">

                    </div>
                </div>
                <div class="frog-container">
                    <div class="frog red">

                    </div>
                </div>
                <div class="frog-container">
                    <div class="frog red">

                    </div>
                </div>
                <div class="frog-container">
                    <div class="frog yellow">
                        
                    </div>
                </div>
                <div class="frog-container">
                    <div class="frog yellow">

                    </div>
                </div>
                <div class="frog-container">
                    <div class="frog yellow">

                    </div>
                </div>
                <div class="frog-container">
                    <div class="frog yellow">

                    </div>
                </div>
                <div class="frog-container">
                    <div class="frog yellow">

                    </div>
                </div>
            </div>
            <div class="background">
                <div class="lily-container">
                    <div class="lily green" style="transform: scale(0.88) rotate(322deg)">
                        
                    </div>
                </div>
                <div class="lily-container">
                    <div class="lily green" style="transform: scale(0.95) rotate(10deg)">

                    </div>
                </div>
                <div class="lily-container">
                    <div class="lily green" style="transform: scale(0.88) rotate(322deg)">

                    </div>
                </div>
                <div class="lily-container">
                    <div class="lily green" style="transform: scale(0.95) rotate(100deg)">

                    </div>
                </div>
                <div class="lily-container">
                    <div class="lily green">

                    </div>
                </div>
                <div class="lily-container">
                    <div class="lily red">

                    </div>
                </div>
                <div class="lily-container">
                    <div class="lily red">

                    </div>
                </div>
                <div class="lily-container">
                    <div class="lily red">

                    </div>
                </div>
                <div class="lily-container">
                    <div class="lily red">

                    </div>
                </div>
                <div class="lily-container">
                    <div class="lily red">

                    </div>
                </div>
                <div class="lily-container">
                    <div class="lily yellow">

                    </div>
                </div>
                <div class="lily-container">
                    <div class="lily yellow">

                    </div>
                </div>
                <div class="lily-container">
                    <div class="lily yellow">

                    </div>
                </div>
                <div class="lily-container">
                    <div class="lily yellow">

                    </div>
                </div>
                <div class="lily-container">
                    <div class="lily yellow">

                    </div>
                </div>
            </div>

    </div>
        `
    ,
    css:`  
    html{
        height: 100%;
        overflow: hidden;
    }
    app{
        width: 100%;
        height: 100%;
    }
    .pond {
        position: relative;
        background-color: rgba(31,87,104);
        border-radius: 30px;
        overflow: hidden;
        min-width: 300px;
        min-height: 400px;
    }
    .forefront{
        position: absolute;
        left: 0;
        top: 0;
        width: 95%;
        height: 95%;
        padding: 2.5%;
        display: flex;
        z-index: 1;
    }
    .background{
        position: absolute;
        left: 0;
        top: 0;
        width: 95%;
        height: 95%;
        padding: 2.5%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
    .lily-container, .frog-container{
        width: 20%;
        height: 20%;
    
    }
    .lily, .frog{
        width: 100%;
        height: 100%;
        background-position:center ;
        background-size: contain;
        background-repeat: no-repeat;
    }
    .lily.green{
        background-image: url(${images.item4});
    
    }
    .lily.red{
        background-image: url(${images.item5});
    
    }
    .lily.yellow{
        background-image: url(${images.item6});
    
    }
    .frog.green{
        background-image: url(${images.item1});
    
    }
    .frog.red{
        background-image: url(${images.item2});
    
    }
    .frog.yellow{
        background-image: url(${images.item3});
    
    }`
    }
]