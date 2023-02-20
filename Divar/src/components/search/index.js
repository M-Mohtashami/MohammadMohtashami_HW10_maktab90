import container from "../../layout/container";
import elem from "../../library/createElement/index";

export default function searchForm() {
  return container(
    elem({
      name: "form",
      className: "flex items-center",
      child: [
        elem({
          name: "label",
          className: "sr-only",
          for: "simple-search",
          child: ["search"],
        }),
        elem({
          name: "div",
          className: "relative w-[70%]",
          child: [
            elem({
              name: "input",
              type: "text",
              id: "search",
              className:
                "bg-gray-100 border-0 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
              placeholder: "جستجو در همه آگهی‌ها",
              child: [],
            }),
            elem({
              name: "div",
              className: "absolute inset-y-0 right-0 flex items-center pr-3",
              child: [
                elem({
                  name: "img",
                  className: "w-5 h-5 text-gray-500 dark:text-gray-400",
                  src: "./src/assets/svg/search.svg",
                  alt: "search",
                  child: [],
                }),
              ],
            }),
          ],
        }),
        elem({
          name: "button",
          type: "submit",
          className:
            "p-2.5 w-[30%] text-sm font-medium flex bg-gray-100 flex-row-reverse",
          child: [
            elem({
              name: "img",
              className: "w-5 h-5",
              alt: "location",
              src: "./src/assets/svg/geo-alt.svg",
              child: [],
            }),
            elem({
              name: "span",
              className: "text-gray-400 pl-2 border-r-2 border-gray-400 pr-2",
              child: ["تهران"],
            }),
          ],
        }),
      ],
    })
  );
}
export function search() {
  return elem({
    name: "form",
    className: "w-full flex items-center gap-4",
    child: [
      elem({
        name: "button",
        className:
          "p-2 text-gray-400 text-sm font-medium flex flex-row items-center hover:bg-gray-100 px-2 rounded-sm hover:text-gray-800",
        child: [
          elem({
            name: "img",
            className: "w-5 h-5",
            alt: "location",
            src: "./src/assets/svg/geo-alt.svg",
            child: [],
          }),
          elem({
            name: "span",
            className: "text-gray-400 pl-2 pr-2",
            child: ["تهران"],
          }),
        ],
      }),
      elem({
        name: "button",
        className:
          "text-gray-400 text-sm flex flex-row items-center gap-2 hover:bg-gray-100 p-2 rounded-sm hover:text-gray-800",
        child: [
          "دسته‌ها",
          elem({
            name: "img",
            className: "w-5 h-5 ml-2",
            alt: "down",
            src: "./src/assets/svg/arrow-down.svg",
            child: [],
          }),
        ],
      }),
      elem({
        name: "div",
        className: "relative w-2/3",
        child: [
          elem({
            name: "input",
            type: "text",
            id: "search",
            className:
              "bg-gray-100  rounded-md border-0 text-gray-900 text-sm block w-full pr-10 p-2.5 focus:outline-none focus:border-none",
            placeholder: "جستجو در همه آگهی‌ها",
            child: [],
          }),
          elem({
            name: "div",
            className: "absolute inset-y-0 right-0 flex items-center pr-3",
            child: [
              elem({
                name: "img",
                className: "w-5 h-5 text-gray-500 dark:text-gray-400",
                src: "./src/assets/svg/search.svg",
                alt: "search",
                child: [],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
