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
    text: "خودرو‌سواری",
    src: "",
    class: "text-gray-400",
  },
  {
    text: "فروش‌آپارتمان",
    src: "",
    class: "text-gray-400",
  },
  {
    text: "اجاره‌آپارتمان",
    src: "",
    class: "text-gray-400",
  },
  {
    text: "موبایل",
    src: "",
    class: "text-gray-400",
  },
  {
    text: "صندلی‌و‌نیمکت",
    src: "",
    class: "text-gray-400",
  },
  {
    text: "حیوانات",
    src: "",
    class: "text-gray-400",
  },
  {
    text: "وسایل‌شخصی",
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
      "fixed top-16 bg-white bg-opacity-95 shadow w-full flex justify-between border-b-1 py-4 px-4 gap-2 overflow-x-auto scrollbar-hide",
    child: items.map((item) =>
      button(item.text, item.src, item.class, "filter")
    ),
  });
}
