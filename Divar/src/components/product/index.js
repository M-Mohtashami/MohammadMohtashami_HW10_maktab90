import elem from "../../library/createElement/index";

export default function product(obj) {
  return elem({
    name: "div",
    className: "p-4 border rounded-md flex items-center justify-between gap-4",
    child: [
      elem({
        name: "div",
        className: "flex flex-col justify-between gap-2 w-6/12 ",
        child: [
          elem({
            name: "div",
            className: "",
            child: [
              elem({
                name: "h3",
                className:
                  "text-gray-900 text-md truncate overflow-ellipsis overflow-hidden",
                child: [obj.title],
              }),
            ],
          }),
          elem({
            name: "div",
            className: "flex flex-col gap-2",
            child: [
              elem({
                name: "p",
                className: "text-gray-400 text-sm",
                child: [obj.desc],
              }),
              elem({
                name: "p",
                className: "text-gray-400 text-sm",
                child: [obj.price + " تومان"],
              }),
              elem({
                name: "p",
                className:
                  "text-gray-400 text-xs truncate overflow-ellipsis overflow-hidden",
                child: [
                  elem({
                    name: "span",
                    className: "text-red-800 text-sm",
                    child: [obj.loc],
                  }),
                  " " + obj.detail,
                ],
              }),
            ],
          }),
        ],
      }),
      elem({
        name: "div",
        className: "self-end w-1/12",
        child: [
          elem({
            name: "img",
            src: "./src/assets/svg/chat.svg",
            alt: "chat",
            className: "",
            child: [],
          }),
        ],
      }),
      elem({
        name: "div",
        className: "w-5/12 self-end justify-self-end ",
        child: [
          elem({
            name: "img",
            src: obj.src,
            alt: obj.title,
            className: " rounded-md",
            child: [],
          }),
        ],
      }),
    ],
  });
}
