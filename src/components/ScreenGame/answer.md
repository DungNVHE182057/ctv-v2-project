# LEVEL 1
/* task #1 */
.sceneScreen { 
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row-reverse;
}
# LEVEL 2
/* task #2 */
.sceneScreen { 
    justify-content: space-between;
    align-items: flex-end;
}
# LEVEL 3
/* task #3 */
.sceneScreen { 
    flex-direction: column;
    flex-wrap: wrap;
}

# LEVEL 4
/* task #4 */
  .sceneScreen { 
      display: flex;
  }
  /*css this class*/
  .above-container.character0{
      /*ninja*/
      order: 3;
      align-self: center;
      
  }
  /*not css this class */
  .above-container.character1{
      /*knight*/
      order: 2;  
  }
  /*css this class*/
  .above-container.character2{
      /*mage*/
      order: 1;
      align-self: flex-start;
      
  }
      
# LEVEL 5 
/* task #5 */
.row{
  display: flex;
}
.row1.pinkArea{
  flex-grow: 2;
}
.row1.blueArea{
  flex-grow: 2;  
}
.row1.orangeArea{
  flex-grow: 1;
    
}
.row2.pinkArea{
  flex: 2;
}
.row3.pinkArea{
  flex-grow: 2;
}
.row3.violetArea{
   flex-grow: 3;
}

.row4.greenArea{
  flex-basis: 20%;
}
.row4.yellowArea{
  flex-basis: 80%;
}
.row5.biqueArea{
  flex: 20%;
}
.row5.greenArea{
  flex: 20%;
}
.row5.yellowArea{
  flex: 60%;
}