export const basicResultCss = `
html{
    height: 100%;
    overflow: hidden;
}
body{
  background-repeat: no-repeat;
  background-size: cover;

}
app{
    width: 100%;
    height: 100%;
}
.pond {
    position: relative;
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

}
.behind-container, .above-container{
  width: 20%;
  height: 20%;

}
.behind, .above{
    width: 100%;
    height: 100%;
    background-position:center ;
    background-size: contain;
    background-repeat: no-repeat;

}
`;

//LEVEL1
export const itemAboveLevel1 = [
    {
      container: "above-container",
      children: [
        "above green",
        "above green",
        "above green",
        "above green",
        "above green",
        "above red",
        "above red",
        "above red",
        "above red",
        "above red",
        "above yellow",
        "above yellow",
        "above yellow",
        "above yellow",
        "above yellow",
      ],
    },
  ];
  export const itemBehindLevel1 = [
    {
      container: "behind-container",
      children: [
        "behind green",
        "behind green",
        "behind green",
        "behind green",
        "behind green",
        "behind red",
        "behind red",
        "behind red",
        "behind red",
        "behind red",
        "behind yellow",
        "behind yellow",
        "behind yellow",
        "behind yellow",
        "behind yellow",
      ],
    },
  ];
//LEVEL2
export const itemAboveLevel2 = [
    {
      container: "above-container",
      children: [
        "above green",
        "above green",
      ],
    },
  ];
  export const itemBehindLevel2 = [
    {
      container: "behind-container",
      children: [
        "behind green",
        "behind green",
      ],
    },
  ];
//LEVEL3
export const itemAboveLevel3 = [
  {
    container: "above-container",
    children: [
      "above green",
      "above red",
      "above yellow",
    ],
  },
];
export const itemBehindLevel3 = [
  {
    container: "behind-container",
    children: [
      "behind green",
      "behind red",
      "behind yellow",
    ],
  },
];