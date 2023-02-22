import elem from "../../library/createElement/index";

export default function product(obj) {
  return elem({
    name: "div",
    className: "p-4 border rounded-md flex items-center justify-between gap-4",
    child: [
      elem({
        name: "div",
        className: "flex flex-col justify-between",
        child: [
          elem({
            name: "div",
            className: "mb-10",
            child: [
              elem({
                name: "h3",
                className: "text-gray-900 text-lg",
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
                className: "text-gray-400 text-xs",
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
        className: "rounded-md overflow-hidden w-40 h-36",
        child: [
          elem({
            name: "img",
            src: obj.src,
            alt: obj.title,
            className: "w-full h-full object-fill",
            child: [],
          }),
        ],
      }),
    ],
  });
}
