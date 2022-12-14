import { TypeContent } from "../enums";

export const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/luucasmorato.png",
      name: "Lucas Morato",
      role: "developer",
    },
    content: [
      {
        type: TypeContent.PARAGRAPH,
        content: "Fala galeraa π",
      },
      {
        type: TypeContent.PARAGRAPH,
        content:
          "Acabei de subir mais um projeto no meu portifa. Γ um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Γ© DoctorCare π",
      },
      {
        type: TypeContent.LINK,
        content: "jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2022-12-04 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/Rocketseat.png",
      name: "Rocketseat",
      role: "enterprise",
    },
    content: [
      {
        type: TypeContent.PARAGRAPH,
        content: "Opa π",
      },
      {
        type: TypeContent.PARAGRAPH,
        content: "Estou na Γ‘rea π",
      },
    ],
    publishedAt: new Date("2022-12-08 10:00:00"),
  },
];
