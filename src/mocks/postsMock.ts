import { TypeContent } from "../enums";

export const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/luucasmorato.png",
      name: "Lucas Morato",
      role: "Web Developer",
    },
    content: [
      {
        type: TypeContent.PARAGRAPH,
        content: "Fala galeraa 👋",
      },
      {
        type: TypeContent.PARAGRAPH,
        content: "Acabei de subir mais um projeto no meu portifa. 🚀",
      },
      {
        type: TypeContent.LINK,
        content: "link.design/test",
      },
    ],
    publishedAt: new Date("2022-12-04 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/Rocketseat.png",
      name: "Rocketseat",
      role: "Enterprise",
    },
    content: [
      {
        type: TypeContent.PARAGRAPH,
        content: "Olá!",
      },
      {
        type: TypeContent.PARAGRAPH,
        content: "👋🚀",
      },
    ],
    publishedAt: new Date("2022-12-08 10:00:00"),
  },
];
