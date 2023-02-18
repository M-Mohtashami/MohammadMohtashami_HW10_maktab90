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
