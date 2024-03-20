import logo from "../img/logo.svg";

const title =
    "Хотите Шагнуть в Будущее Раньше Других?";
const footerButton = {
    href: "#",
    title: "Запросить ранний доступ"
}
const logoData = {
    alt: "logo",
    src: logo,
}
const locationData =
    "ул. Профессора Поздеева, 13, к.Г, Пермь, Пермский край, 614013. Все права защищены";
const cardsData = [
    {
        title: "Ссылки",
        links: [
            {
               content: "Овероны"
            },
            {
                content: "Соц. сети"
            },
            {
                content: "Счетчики"
            },
            {
                content: "Контакты"
            }
        ]
    },
    {
        title: "Компания",
        links: [
            {
                content: "Условия использования"
            },
            {
                content: "Перс. данные"
            },
            {
                content: "Конаткты"
            }
        ]
    },
    {
        title: "Контакты",
        links: [
            {
                content: "ул. Профессора Поздеева, 13, к.Г, Пермь"
            },
            {
                content: "+7 (342) 2-198-520"
            },
            {
                content: "info@pstu.ru"
            }
        ]
    }
]
export const footerData = {
    title,
    footerButton,
    logoData,
    locationData,
    cardsData
}