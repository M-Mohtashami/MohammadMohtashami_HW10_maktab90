import elem from "../../library/createElement/index";
import button from "../../components/button/index";

const items = [
  {
    text: "املاک",
    src: "./src/assets/svg/home-city.svg",
    class: "text-gray-400",
  },
  {
    text: "وسایل نقلیه",
    src: "./src/assets/svg/list-outline.svg",
    class: "text-gray-400",
  },
  {
    text: "کالای دیجیتال",
    src: "./src/assets/svg/cellphone-sound.svg",
    class: "text-gray-400",
  },
  {
    text: "خانه و آشپزخانه",
    src: "./src/assets/svg/home-city.svg",
    class: "text-gray-400",
  },
  {
    text: "خدمات",
    src: "./src/assets/svg/cellphone-sound.svg",
    class: "text-gray-400",
  },
  {
    text: "وسایل شخصی",
    src: "./src/assets/svg/cellphone-sound.svg",
    class: "text-gray-400",
  },
  {
    text: "سرگرمی و فراغت",
    src: "./src/assets/svg/gamepad-variant.svg",
    class: "text-gray-400",
  },
  {
    text: "اجتماعی",
    src: "./src/assets/svg/group.svg",
    class: "text-gray-400",
  },
  {
    text: "تجهیزات و صنعتی",
    src: "./src/assets/svg/gamepad-variant.svg",
    class: "text-gray-400",
  },
  {
    text: "استخدامی و کاریابی",
    src: "./src/assets/svg/home-city.svg",
    class: "text-gray-400",
  },
];

export default function filter() {
  return elem({
    name: "div",
    className:
      "fixed flex flex-col justify-start items-start gap-2 text-gray-700",
    child: [
      "دسته‌ها",
      ...items.map((item) =>
        button(item.text, item.src, item.class, "desktopFilter")
      ),
    ],
  });
}
