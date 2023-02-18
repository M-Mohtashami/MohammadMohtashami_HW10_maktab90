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
  },
  {
    text: "ثبت آگهی",
    src: "./src/assets/svg/add-circle.svg",
  },
  {
    text: "چت",
    src: "./src/assets/svg/chat-fill.svg",
  },
  {
    text: "دیوار من",
    src: "./src/assets/svg/person-fill.svg",
  },
];

export default function mobileHeader() {
  return elem({
    name: "div",
    className: "fixed bottom-0 shadow-sm w-full flex justify-center border-t-2",
    child: items.map((item) => button(item.text, item.src, item.class)),
  });
}
