import elem from "../../library/createElement/index";

const variants = {
  mobile: " bg-trancparent p-2 flex flex-wrap justify-center",
};

export default function button(text, icon, option, variant = "mobile") {
  return elem({
    name: "button",
    className: `${variants[variant]} ${option}`,
    child: [
      elem({
        name: "img",
        className: "w-5 h-5",
        src: icon,
        alt: text,
        child: [],
      }),
      text,
    ],
  });
}
