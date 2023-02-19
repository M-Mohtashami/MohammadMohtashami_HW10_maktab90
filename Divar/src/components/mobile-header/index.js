import container from "../../layout/container";
import elem from "../../library/createElement/index";
import button from "../button/index";

const items = [
  {
    text: "آگهی‌ها",
    src: "./src/assets/svg/divar.svg",
    class: "text-red-800",
  },
  {
    text: "دسته‌ها",
    src: "./src/assets/svg/list-outline.svg",
    class: "text-gray-800",
  },
  {
    text: "ثبت آگهی",
    src: "./src/assets/svg/plus-circle.svg",
    class: "text-gray-800",
  },
  {
    text: "چت",
    src: "./src/assets/svg/chat-fill.svg",
    class: "text-gray-800",
  },
  {
    text: "دیوار من",
    src: "./src/assets/svg/person-fill.svg",
    class: "text-gray-800",
  },
];

export default function mobileHeader() {
  return elem({
    name: "div",
    className:
      "fixed bottom-0 bg-white shadow-sm w-full flex justify-between border-t-2",
    child: items.map((item) => button(item.text, item.src, item.class)),
  });
}
