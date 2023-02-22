import elem from "../../library/createElement/index";
import button from "../button/index";
import { search } from "../search/index";

const items = [
  {
    text: "دیوار من",
    src: "./src/assets/svg/person.svg",
    class:
      "text-gray-400 text-sm hover:bg-gray-100 px-4 rounded-sm hover:text-gray-800",
  },
  {
    text: "چت",
    src: "./src/assets/svg/chat.svg",
    class:
      "text-gray-400 text-sm hover:bg-gray-100 px-4 rounded-sm hover:text-gray-800",
  },
  {
    text: "پشتیبانی",
    src: "",
    class:
      "text-gray-400 text-sm hover:bg-gray-100 px-4 rounded-sm hover:text-gray-800",
  },
  {
    text: "ثبت آگهی",
    src: "",
    class: "text-slate-100 bg-red-800 px-4 rounded-md text-sm p-0",
  },
];

export default function header() {
  return elem({
    name: "div",
    className: "fixed top-0 shadow-sm w-full border-b-1 bg-white z-10",
    child: [
      elem({
        name: "div",
        className: "max-w-[1440px] w-full mx-auto px-4 flex justify-between",
        child: [
          elem({
            name: "div",
            className: "p-2 pl-4",
            child: [
              elem({
                name: "img",
                src: "./src/assets/svg/divar.svg",
                alt: "divar",
                className: "w-12 h-12 inline",
                child: [""],
              }),
            ],
          }),
          elem({
            name: "div",
            className: "w-1 h-10 border-l border-gray-300 my-auto",
            child: [""],
          }),
          elem({
            name: "div",
            className: "flex justify-between p-2 text-left w-6/12",
            child: [search()],
          }),
          elem({
            name: "div",
            className: "flex justify-between gap-4 p-2 text-left",
            child: items.map((item) =>
              button(item.text, item.src, item.class, "desktop")
            ),
          }),
        ],
      }),
    ],
  });
}
