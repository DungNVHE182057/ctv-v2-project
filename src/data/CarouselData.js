export const data = [
  {
    title: "Something",
    description: "Description",
    // image: "./assets/clients.jpg",
  },
  {
    title: "Something",
    description: "Description",
    // image: "./assets/clients.jpg",
  },
  {
    title: "Something",
    description: "Description",
    // image: "./assets/clients.jpg",
  },
  {
    title: "Something",
    description: "Description",
    // image: "./assets/clients.jpg",
  },

  // "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?cs=srgb&dl=pexels-manuel-geissinger-325229.jpg&fm=jpg",
];

export const sliderSettings = {
  arrows: false,
  slidesToShow: 3,
  focusOnselect: false,
  accessability: false,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
      },
    },

    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
