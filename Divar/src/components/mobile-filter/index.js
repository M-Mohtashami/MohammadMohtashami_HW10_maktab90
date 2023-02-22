import container from "../../layout/container";
import elem from "../../library/createElement/index";
import button from "../button/index";

const items = [
  {
    text: "فیلتر‌ها",
    src: "./src/assets/svg/tune.svg",
    class: "text-gray-400",
  },
  {
    text: "دسته‌ها",
    src: "./src/assets/svg/list-outline.svg",
    class: "text-gray-400",
  },
  {
    text: "خودرو‌ سواری",
    src: "",
    class: "text-gray-400",
  },
  {
    text: "فروش‌ آپارتمان",
    src: "",
    class: "text-gray-400",
  },
  {
    text: "اجاره‌ آپارتمان",
    src: "",
    class: "text-gray-400",
  },
  {
    text: "موبایل",
    src: "",
    class: "text-gray-400",
  },
  {
    text: "صندلی‌ و‌ نیمکت",
    src: "",
    class: "text-gray-400",
  },
  {
    text: "حیوانات",
    src: "",
    class: "text-gray-400",
  },
  {
    text: "وسایل‌ شخصی",
    src: "",
    class: "text-gray-400",
  },
  {
    text: "خدمات",
    src: "",
    class: "text-gray-400",
  },
  {
    text: "استخدام",
    src: "",
    class: "text-gray-400",
  },
  {
    text: "تلویزیون",
    src: "",
    class: "text-gray-400",
  },
];

export default function mobileFilter() {
  return elem({
    name: "div",
    className:
      "fixed top-16 bg-white bg-opacity-95 shadow w-full flex justify-between border-b-1 py-4 px-16 gap-2 overflow-x-auto scrollbar-hide",
    child: [
      elem({
        name: "div",
        className: "fixed left-0 w-24 h-14 bg-gradient-to-r from-white",
        child: [" "],
      }),
      ...items.map((item) => button(item.text, item.src, item.class, "filter")),
      elem({
        name: "div",
        className: "fixed right-0 w-20 h-14 bg-gradient-to-l from-white",
        child: [" "],
      }),
    ],
  });
}
