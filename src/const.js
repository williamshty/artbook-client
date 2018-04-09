/* eslint-disable */
// export const baseUrl = "http://172.25.98.129:3000/"; // FSM
export const baseUrl = "http://172.25.99.151:3000/"; // YZB

export const artworks = [
  {
    $class: "org.acme.artbook.Artwork",
    artworkId: "ef58c8ca-19ca-4980-a21c-43fc54819f2b",
    title: "A dummy painting in const.js",
    artist: "Vincent van Gogh",
    createTime: "2018-10-2",
    location: "paris",
    description: "xxx",
    lost: false,
    onSale: false,
    pictures: [],
    owner: {
      $class: "org.acme.artbook.User",
      email: "fff@gmail.com",
      name: "Yu Zhibin",
      passport: "123",
      mobile: "456"
    }
  }
];

export const docs = [
  {
    id: 1,
    name: "Document 1",
    path:
      "https://ia.media-imdb.com/images/M/MV5BMzU1MjhlNmEtZGJlNS00ZWExLWJiNGYtMWZhMjY5OTQ4ZGZjXkEyXkFqcGdeQXRodW1ibmFpbC1pbml0aWFsaXplcg@@._V1_UX477_CR0,0,477,268_AL_.jpg"
  },
  {
    id: 2,
    name: "Document 2",
    path:
      "https://ia.media-imdb.com/images/M/MV5BMzU1MjhlNmEtZGJlNS00ZWExLWJiNGYtMWZhMjY5OTQ4ZGZjXkEyXkFqcGdeQXRodW1ibmFpbC1pbml0aWFsaXplcg@@._V1_UX477_CR0,0,477,268_AL_.jpg"
  }
];
