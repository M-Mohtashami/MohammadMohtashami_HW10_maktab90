import elem from "../../library/createElement/index";

const variants = {
  mobile:
    " bg-trancparent p-2 flex flex-col md:flex-row md:h-16 justify-center items-center gap-2",
  filter:
    "h-10 px-6 inline-flex justify-center items-center border border-gray-300 rounded-3xl",
  desktop: "h-10 inline-flex justify-center items-center gap-4",
  desktopFilter:
    " bg-trancparent p-2 flex gap-2 items-center hover:text-gray-700",
};

export default function button(text = "", icon, option, variant = "mobile") {
  if (icon) {
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
  } else {
    return elem({
      name: "button",
      className: `${variants[variant]} ${option}`,
      child: [text],
    });
  }
}
