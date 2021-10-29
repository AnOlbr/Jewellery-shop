export const initialState = {
  products: {
    data: [
      {
        id: 1,
        title: 'Amethyst pendant',
        price: 15,
        image: 'https://i.imgur.com/hB1JfQv.jpeg',
      },
      {
        id: 2,
        title: 'Antlers ring',
        price: 20,
        image: 'https://i.imgur.com/oaZIH4n.jpeg',
      },
      {
        id: 3,
        title: 'Geometric watch',
        price: 18,
        image: 'https://i.imgur.com/QMVvheH.jpg',
      },
      {
        id: 4,
        title: 'Pearl earrings',
        price: 35,
        image: 'https://i.imgur.com/FqDJ0OB.jpg',
      },
      {
        id: 5,
        title: 'Pendant with scorpio',
        price: 30,
        image: 'https://i.imgur.com/7cr4c0B.jpg',
      },
      {
        id: 6,
        title: 'Triple bracelet',
        price: 20,
        image: 'https://i.imgur.com/TsmNzlh.jpg',
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
};
