import elem from "../../library/createElement/index";
import button from "../../components/button/index";

const items = [
  {
    text: "املاک",
    src: "./src/assets/svg/tune.svg",
    class: "text-gray-400",
  },
  {
    text: "وسایل نقلیه",
    src: "./src/assets/svg/list-outline.svg",
    class: "text-gray-400",
  },
  {
    text: "کالای دیجیتال",
    src: "",
    class: "text-gray-400",
  },
  {
    text: "خانه و آشپزخانه",
    src: "",
    class: "text-gray-400",
  },
  {
    text: "خدمات",
    src: "",
    class: "text-gray-400",
  },
  {
    text: "وسایل شخصی",
    src: "",
    class: "text-gray-400",
  },
  {
    text: "سرگرمی و فراغت",
    src: "",
    class: "text-gray-400",
  },
  {
    text: "اجتماعی",
    src: "",
    class: "text-gray-400",
  },
  {
    text: "تجهیزات و صنعتی",
    src: "",
    class: "text-gray-400",
  },
  {
    text: "استخدامی و کاریابی",
    src: "",
    class: "text-gray-400",
  },
];

export default function filter() {
  return elem({
    name: "div",
    className: " flex flex-col justify-start items-start gap-2",
    child: [
      "دسته‌ها",
      ...items.map((item) =>
        button(item.text, item.src, item.class, "desktopFilter")
      ),
    ],
  });
}
