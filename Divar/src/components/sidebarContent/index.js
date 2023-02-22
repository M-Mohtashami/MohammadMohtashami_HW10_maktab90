import elem from "../../library/createElement/index";
import button from "../button/index";

const items = [
  {
    text: "املاک",
    src: "./src/assets/svg/home-city.svg",
    class: "text-gray-400",
  },
  {
    text: "وسایل نقلیه",
    src: "./src/assets/svg/list-outline.svg",
    class: "text-gray-400",
  },
  {
    text: "کالای دیجیتال",
    src: "./src/assets/svg/cellphone-sound.svg",
    class: "text-gray-400",
  },
  {
    text: "خانه و آشپزخانه",
    src: "./src/assets/svg/home-city.svg",
    class: "text-gray-400",
  },
  {
    text: "خدمات",
    src: "./src/assets/svg/cellphone-sound.svg",
    class: "text-gray-400",
  },
  {
    text: "وسایل شخصی",
    src: "./src/assets/svg/cellphone-sound.svg",
    class: "text-gray-400",
  },
  {
    text: "سرگرمی و فراغت",
    src: "./src/assets/svg/gamepad-variant.svg",
    class: "text-gray-400",
  },
  {
    text: "اجتماعی",
    src: "./src/assets/svg/group.svg",
    class: "text-gray-400",
  },
  {
    text: "تجهیزات و صنعتی",
    src: "./src/assets/svg/gamepad-variant.svg",
    class: "text-gray-400",
  },
  {
    text: "استخدامی و کاریابی",
    src: "./src/assets/svg/home-city.svg",
    class: "text-gray-400",
  },
];
const accordions = [
  {
    text: "محل",
    src: "./src/assets/svg/arrow-down.svg",
    class: "text-gray-800 border-t w-full py-4 text-sm",
  },
  {
    text: "قیمت",
    src: "./src/assets/svg/arrow-down.svg",
    class: "text-gray-800 border-t w-full py-4 text-sm",
  },
  {
    text: "وضعیت آگهی",
    src: "./src/assets/svg/arrow-down.svg",
    class: "text-gray-800 border-t border-b w-full py-4 text-sm",
  },
];
const socials = [
  {
    text: "",
    href: "https://twitter.com",
    src: "./src/assets/svg/twitter.svg",
    class: "text-gray-400",
  },
  {
    text: "",
    href: "https://instagram.com",
    src: "./src/assets/svg/instagram.svg",
    class: "text-gray-400",
  },
  {
    text: "",
    href: "https://linkedin.com",
    src: "./src/assets/svg/linkedin.svg",
    class: "text-gray-400",
  },
  {
    text: "",
    href: "https://aparat.com",
    src: "./src/assets/svg/aparat.svg",
    class: "text-gray-400",
  },
];
const links = [
  {
    text: "درباره ما",
    href: "#about-us",
    class: "text-gray-400 text-xs",
  },
  {
    text: "دریافت برنامه",
    href: "#app",
    class: "text-gray-400 text-xs",
  },
  {
    text: "بلاگ دیوار",
    href: "#blog",
    class: "text-gray-400 text-xs",
  },
  {
    text: "کسب و کارها",
    href: "#jobs",
    class: "text-gray-400 text-xs",
  },
  {
    text: "پشتیبانی و قوانین",
    href: "#support",
    class: "text-gray-400 text-xs",
  },
];

export default function filter() {
  return elem({
    name: "div",
    className:
      "w-[250px] h-screen pb-16 pt-24 fixed flex flex-col justify-start items-start gap-2 overflow-y-scroll scrollbar-hide",
    child: [
      elem({
        name: "div",
        child: [
          "دسته‌ها",
          ...items.map((item) =>
            button(item.text, item.src, item.class, "desktopFilter")
          ),
        ],
      }),
      elem({
        name: "div",
        className: "my-4 w-full",
        child: [
          ...accordions.map((item) =>
            button(item.text, item.src, item.class, "desktopFilter")
          ),
        ],
      }),
      elem({
        name: "div",
        className: "mt-2 flex flex-wrap",
        child: [
          ...links.map((item) => {
            return elem({
              name: "a",
              href: item.href,
              className: "decoration-none",
              child: [button(item.text, "", item.class, "desktopFilter")],
            });
          }),
        ],
      }),
      elem({
        name: "div",
        className: "flex flex-wrap gap-4 justify-center w-full",
        child: [
          ...socials.map((item) => {
            return elem({
              name: "a",
              href: item.href,
              className: "decoration-none",
              child: [button(item.text, item.src, item.class, "desktopFilter")],
            });
          }),
        ],
      }),
      elem({
        name: "div",
        className: "grid grid-cols-3 mt-6 mb-8",
        child: [
          elem({
            name: "a",
            href: "https://enamad.ir",
            className: "decoration-none",
            child: [
              elem({
                name: "img",
                className: "",
                src: "./src/assets/img/enamad1.png",
                alt: "enamad",
                child: [""],
              }),
            ],
          }),
          elem({
            name: "a",
            href: "https://enamad.ir",
            className: "decoration-none",
            child: [
              elem({
                name: "img",
                className: "",
                src: "./src/assets/img/namad2.png",
                alt: "enamad",
                child: [""],
              }),
            ],
          }),
          elem({
            name: "a",
            href: "https://enamad.ir",
            className: "decoration-none",
            child: [
              elem({
                name: "img",
                className: "",
                src: "./src/assets/img/namad3.png",
                alt: "enamad",
                child: [""],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
