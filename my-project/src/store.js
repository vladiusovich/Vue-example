import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    productsList: [
      {
        name: "Lenovo Yoga Book",
        id: 1,
        imgSrc: "https://content2.onliner.by/catalog/device/header/61b1107591b9b1f15ddcb22e43e67003.jpeg",
        describe: "10.1 IPS (1920x1200), Windows 10, ОЗУ 4 ГБ, флэш-память 64 ГБ, цвет темно-серый/черный",
        cost: 1484,
        availabile: "Есть в наличии",
        isAdd: false
      },
      {
        name: "Samsung Galaxy Tab A (2016)",
        id: 2,
        imgSrc: "https://content2.onliner.by/catalog/device/header/a5957da85cd06bf4a4784762fa12460b.jpeg",
        describe: "10.1 (1920x1200), Android, ОЗУ 2 ГБ, флэш-память 16 ГБ, LTE, цвет белый",
        cost: 849,
        availabile: "Нет в наличии",
        isAdd: false
      },
      {
        name: "Prestigio MultiPad Visconte V 32GB",
        id: 3,
        imgSrc: "https://content2.onliner.by/catalog/device/header/5678700d1bd249c6ded3aeb59580c466.jpeg",
        describe: "10.1 IPS (1280x800), Windows 10, ОЗУ 2 ГБ, флэш-память 32 ГБ, док-станция, клавиатура, цвет коричневый",
        cost: 4049,
        availabile: "Есть в наличии",
        isAdd: false
      },
      {
        name: "Xiaomi Mi Pad 2 16GB",
        id: 4,
        imgSrc: "https://content2.onliner.by/catalog/device/header/fea38b894e1984be6369c541e5806ce4.jpg",
        describe: "7.9 IPS (2048x1536), Android, ОЗУ 2 ГБ, флэш-память 16 ГБ, цвет серый/черный",
        cost: 440,
        availabile: "Есть в наличии",
        isAdd: false
      },
      {
        name: "Samsung Galaxy Tab A ",
        id: 5,
        imgSrc: "https://content2.onliner.by/catalog/device/header/2bae677f8358c38b0af336067e696f7a.jpeg",
        describe: "10.1 (1920x1200), Android, ОЗУ 2 ГБ, флэш-память 16 ГБ, цвет черный",
        cost: 755,
        availabile: "Есть в наличии",
        isAdd: false
      },
      {
        name: "Lenovo Yoga Book",
        id: 1,
        imgSrc: "https://content2.onliner.by/catalog/device/header/61b1107591b9b1f15ddcb22e43e67003.jpeg",
        describe: "10.1 IPS (1920x1200), Windows 10, ОЗУ 4 ГБ, флэш-память 64 ГБ, цвет темно-серый/черный",
        cost: 1484,
        availabile: "Есть в наличии",
        isAdd: false
      },
      {
        name: "Samsung Galaxy Tab A (2016)",
        id: 2,
        imgSrc: "https://content2.onliner.by/catalog/device/header/a5957da85cd06bf4a4784762fa12460b.jpeg",
        describe: "10.1 (1920x1200), Android, ОЗУ 2 ГБ, флэш-память 16 ГБ, LTE, цвет белый",
        cost: 849,
        availabile: "Нет в наличии",
        isAdd: false
      },
      {
        name: "Prestigio MultiPad Visconte V 32GB",
        id: 3,
        imgSrc: "https://content2.onliner.by/catalog/device/header/5678700d1bd249c6ded3aeb59580c466.jpeg",
        describe: "10.1 IPS (1280x800), Windows 10, ОЗУ 2 ГБ, флэш-память 32 ГБ, док-станция, клавиатура, цвет коричневый",
        cost: 849,
        availabile: "Есть в наличии",
        isAdd: false
      },
      {
        name: "Xiaomi Mi Pad 2 16GB",
        id: 4,
        imgSrc: "https://content2.onliner.by/catalog/device/header/fea38b894e1984be6369c541e5806ce4.jpg",
        describe: "7.9 IPS (2048x1536), Android, ОЗУ 2 ГБ, флэш-память 16 ГБ, цвет серый/черный",
        cost: "440,00",
        availabile: "Есть в наличии",
        isAdd: false
      },
      {
        name: "Samsung Galaxy Tab A ",
        id: 5,
        imgSrc: "https://content2.onliner.by/catalog/device/header/2bae677f8358c38b0af336067e696f7a.jpeg",
        describe: "10.1 (1920x1200), Android, ОЗУ 2 ГБ, флэш-память 16 ГБ, цвет черный",
        cost:  755,
        availabile: "Есть в наличии",
        isAdd: false
      },
      {
        name: "Lenovo Yoga Book",
        id: 1,
        imgSrc: "https://content2.onliner.by/catalog/device/header/61b1107591b9b1f15ddcb22e43e67003.jpeg",
        describe: "10.1 IPS (1920x1200), Windows 10, ОЗУ 4 ГБ, флэш-память 64 ГБ, цвет темно-серый/черный",
        cost: 1484,
        availabile: "Есть в наличии",
        isAdd: false
      },
      {
        name: "Samsung Galaxy Tab A (2016)",
        id: 2,
        imgSrc: "https://content2.onliner.by/catalog/device/header/a5957da85cd06bf4a4784762fa12460b.jpeg",
        describe: "10.1 (1920x1200), Android, ОЗУ 2 ГБ, флэш-память 16 ГБ, LTE, цвет белый",
        cost: 569,
        availabile: "Нет в наличии",
        isAdd: false
      },
      {
        name: "Prestigio MultiPad Visconte V 32GB",
        id: 3,
        imgSrc: "https://content2.onliner.by/catalog/device/header/5678700d1bd249c6ded3aeb59580c466.jpeg",
        describe: "10.1 IPS (1280x800), Windows 10, ОЗУ 2 ГБ, флэш-память 32 ГБ, док-станция, клавиатура, цвет коричневый",
        cost: 5694,
        availabile: "Есть в наличии",
        isAdd: false
      },
      {
        name: "Xiaomi Mi Pad 2 16GB",
        id: 4,
        imgSrc: "https://content2.onliner.by/catalog/device/header/fea38b894e1984be6369c541e5806ce4.jpg",
        describe: "7.9 IPS (2048x1536), Android, ОЗУ 2 ГБ, флэш-память 16 ГБ, цвет серый/черный",
        cost: "440,00",
        availabile: "Есть в наличии",
        isAdd: false
      },
      {
        name: "Samsung Galaxy Tab A ",
        id: 5,
        imgSrc: "https://content2.onliner.by/catalog/device/header/2bae677f8358c38b0af336067e696f7a.jpeg",
        describe: "10.1 (1920x1200), Android, ОЗУ 2 ГБ, флэш-память 16 ГБ, цвет черный",
        cost: 491,
        availabile: "Есть в наличии",
        isAdd: false
      },
      {
        name: "Apple iPad Pro 9.7",
        id: 6,
        imgSrc: "https://content2.onliner.by/catalog/device/header/90de37227cbc9c7876a3be59aca944e9.jpg",
        describe: "9.7 IPS (2048x1536), iOS, флэш-память 32 ГБ, цвет золотистый",
        cost: 1719,
        availabile: "Есть в наличии",
        isAdd: false
      },
      {
        name: "Digma Citi 1802 64GB 3G",
        id: 7,
        imgSrc: "https://content2.onliner.by/catalog/device/header/65e3b8fbbe1bb82b4618e5ae77115eed.jpeg",
        describe: "10.1 IPS (1280x800), Windows 10, ОЗУ 4 ГБ, флэш-память 64 ГБ, 3G, док-станция, клавиатура, цвет темно-серый",
        cost: 477,
        availabile: "Нет в наличии",
        isAdd: false
      },
      {
        name: "Xiaomi Mi Pad 2 16GB",
        id: 4,
        imgSrc: "https://content2.onliner.by/catalog/device/header/fea38b894e1984be6369c541e5806ce4.jpg",
        describe: "7.9 IPS (2048x1536), Android, ОЗУ 2 ГБ, флэш-память 16 ГБ, цвет серый/черный",
        cost: 446,
        availabile: "Есть в наличии",
        isAdd: false
      }

    ],
    buyList: []
  }
});
