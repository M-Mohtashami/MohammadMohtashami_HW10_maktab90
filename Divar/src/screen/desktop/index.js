import productSection from "../../layout/productSection/index";
import header from "../../components/header/index";
import sidebar from "../../layout/sidebar";
import elem from "../../library/createElement/index";

export default function desktop() {
  return [
    header(),
    elem({
      name: "div",
      className: "p-4 w-full mx-auto mt-16 flex gap-2 max-w-[1440px]",
      child: [
        sidebar(),
        productSection({
          container: "",
          loc: "text-left",
        }),
      ],
    }),
  ];
}
