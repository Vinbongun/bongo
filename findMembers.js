const deleteDublicateJson = require("./module/deleteDublicateJson");
const getHtml = require("./module/getHtml");
const getTopModels = require("./module/getTopModels");
const getUsername = require("./module/getUsername");
const saveJson = require("./module/saveJson");

const url = "https://rt.bongacams26.com";

const cookies = [
  {
    domain: ".bongacams26.com",
    expirationDate: 1681639787.597005,
    hostOnly: false,
    httpOnly: false,
    name: "__dbuh",
    path: "/",
    sameSite: "no_restriction",
    secure: true,
    session: false,
    storeId: "0",
    value:
      "eyJoIjoiYTA0ZDkxNzkwMzdlOGU1YTFlYjE0NjRlMzA3ZGEwZWMiLCJkIjoidmluYm9uZ3VuIiwibCI6IjIwMjItMDQtMTYgMTM6MDk6NTAifQ==",
    id: 1,
  },
  {
    domain: ".bongacams26.com",
    expirationDate: 1681639787.596988,
    hostOnly: false,
    httpOnly: false,
    name: "__dbuhf",
    path: "/",
    sameSite: "no_restriction",
    secure: true,
    session: false,
    storeId: "0",
    value: "2022-04-16",
    id: 2,
  },
  {
    domain: ".bongacams26.com",
    expirationDate: 1661685699.690751,
    hostOnly: false,
    httpOnly: true,
    name: "BONGA_REF",
    path: "/",
    sameSite: "unspecified",
    secure: false,
    session: false,
    storeId: "0",
    value: "https%3A%2F%2Fnl.bongacams.com%2F",
    id: 3,
  },
  {
    domain: ".bongacams26.com",
    hostOnly: false,
    httpOnly: true,
    name: "bonga20120608",
    path: "/",
    sameSite: "no_restriction",
    secure: true,
    session: true,
    storeId: "0",
    value: "a7a74be47ae657e12ee402818287a7fd",
    id: 4,
  },
  {
    domain: ".bongacams26.com",
    expirationDate: 1677757863.140891,
    hostOnly: false,
    httpOnly: false,
    name: "csi_v1",
    path: "/",
    sameSite: "unspecified",
    secure: false,
    session: false,
    storeId: "0",
    value: "2",
    id: 5,
  },
  {
    domain: ".bongacams26.com",
    expirationDate: 1677565643.863614,
    hostOnly: false,
    httpOnly: false,
    name: "fv",
    path: "/",
    sameSite: "unspecified",
    secure: false,
    session: false,
    storeId: "0",
    value: "ZmD2BGVjAwD2ZD==",
    id: 6,
  },
  {
    domain: ".bongacams26.com",
    hostOnly: false,
    httpOnly: false,
    name: "itpl",
    path: "/",
    sameSite: "unspecified",
    secure: false,
    session: true,
    storeId: "0",
    value: "0",
    id: 7,
  },
  {
    domain: ".bongacams26.com",
    expirationDate: 1681673629,
    hostOnly: false,
    httpOnly: false,
    name: "ls01",
    path: "/",
    sameSite: "unspecified",
    secure: false,
    session: false,
    storeId: "0",
    value:
      "%7B%22sorting%22%3A%22popular%22%2C%22display%22%3A%22medium%22%2C%22th_type%22%3A%22live%22%2C%22pager_limit%22%3A56%7D",
    id: 8,
  },
  {
    domain: ".bongacams26.com",
    expirationDate: 1677565643.863656,
    hostOnly: false,
    httpOnly: false,
    name: "reg_ver2",
    path: "/",
    sameSite: "unspecified",
    secure: false,
    session: false,
    storeId: "0",
    value: "3",
    id: 9,
  },
  {
    domain: ".bongacams26.com",
    hostOnly: false,
    httpOnly: false,
    name: "s83axhts7s",
    path: "/",
    sameSite: "unspecified",
    secure: false,
    session: true,
    storeId: "0",
    value: "1762719688",
    id: 10,
  },
  {
    domain: ".bongacams26.com",
    expirationDate: 1677565643.863676,
    hostOnly: false,
    httpOnly: false,
    name: "sg",
    path: "/",
    sameSite: "no_restriction",
    secure: true,
    session: false,
    storeId: "0",
    value: "243",
    id: 11,
  },
  {
    domain: ".bongacams26.com",
    expirationDate: 1665745228.046475,
    hostOnly: false,
    httpOnly: false,
    name: "sip",
    path: "/",
    sameSite: "unspecified",
    secure: false,
    session: false,
    storeId: "0",
    value:
      "%5B%22vinbongun%22%2C%22vinbongun%22%2C%22%5C%2F%5C%2Fi.bcicdn.com%5C%2Fimages%5C%2Favatars_special%5C%2Feaster_2022%5C%2F17%5C%2Favatarb.jpg%22%2C1650254400%2C%22%5C%2F%5C%2Fi.bcicdn.com%5C%2Fimages%5C%2Favatars%5C%2F17%5C%2Favatarb.jpg%22%5D",
    id: 12,
  },
  {
    domain: ".bongacams26.com",
    expirationDate: 1681730519.958049,
    hostOnly: false,
    httpOnly: false,
    name: "ts_type2",
    path: "/",
    sameSite: "unspecified",
    secure: false,
    session: false,
    storeId: "0",
    value: "1",
    id: 13,
  },
  {
    domain: ".bongacams26.com",
    expirationDate: 1677565643.863634,
    hostOnly: false,
    httpOnly: false,
    name: "uh",
    path: "/",
    sameSite: "unspecified",
    secure: false,
    session: false,
    storeId: "0",
    value: "oacOA2SmHx1yMKqhFx1VMQqcnRD5FN==",
    id: 14,
  },
  {
    domain: ".bongacams26.com",
    expirationDate: 1677565643.863697,
    hostOnly: false,
    httpOnly: false,
    name: "warning18",
    path: "/",
    sameSite: "no_restriction",
    secure: true,
    session: false,
    storeId: "0",
    value: "%5B%22ru_RU%22%5D",
    id: 15,
  },
  {
    domain: "rt.bongacams26.com",
    expirationDate: 1650708598,
    hostOnly: true,
    httpOnly: false,
    name: "a10t",
    path: "/",
    sameSite: "unspecified",
    secure: false,
    session: false,
    storeId: "0",
    value: "1",
    id: 16,
  },
  {
    domain: "rt.bongacams26.com",
    expirationDate: 1653998281,
    hostOnly: true,
    httpOnly: false,
    name: "pnd",
    path: "/",
    sameSite: "unspecified",
    secure: false,
    session: false,
    storeId: "0",
    value: "1",
    id: 17,
  },
  {
    domain: "rt.bongacams26.com",
    expirationDate: 1650269185,
    hostOnly: true,
    httpOnly: false,
    name: "spoof",
    path: "/",
    sameSite: "unspecified",
    secure: false,
    session: false,
    storeId: "0",
    value: "%7B%22index%22%3A%22THIRD%22%2C%22time%22%3A1650182785145%7D",
    id: 18,
  },
];

// Список мембров на стриме
// getHtml("https://rt.bongacams26.com/-Ange1ok-/", true, true).then(content => {
//     return getUsername(content)
//     }).then(result => {
//         console.log(result)
// })

// Ссылки на стримы с первой страницы
// getHtml(url, true, false, false).then(content => {
//             return getTopModels(content, url)
//         }).then(result => {
//             console.log(result)
// })

const start = async function () {
  const allMembers = [];
  const mainPageHtml = await getHtml(url, cookies, false, false, false); //Получить html главной страницы сайта

  const streamUrls = await getTopModels(mainPageHtml, url); //Список ссылок на топ трансляций
  console.log("Получены ссылки на топ стримы");
  const streamUrlsBULK = [
    { href: "https://rt.bongacams26.com/XKimoraX" },
    { href: "https://rt.bongacams26.com/-ANN-" },
  ];

  for (const [i, value] of streamUrlsBULK.entries()) {
    const streamPageHtml = await getHtml(
      value.href,
      cookies,
      false,
      true,
      false
    ); //Получить html страницы трансляции
    const members = await getUsername(streamPageHtml); // Список пользователей на трянсляции
    allMembers.push(members);
    console.log(
      "Обработана страница № " + (i + 1) + " из " + streamUrlsBULK.length
    );
  }

  //Объединить всех пользователей в один массив
  const allMembersConcat = [].concat(...allMembers);

  //Удалить дубли пользователей в массиве
  const result = await deleteDublicateJson(allMembersConcat);

  //Сохранить список пользователей в username.json
  saveJson(result, "username");

  console.log(result);
};

// Вызвать асинхронную функцию
start();
