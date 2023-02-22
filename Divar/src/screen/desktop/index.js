import productSection from "../../layout/productSection/index";
import header from "../../components/header/index";
import sidebar from "../../layout/sidebar";
import elem from "../../library/createElement/index";
import sidebarContent from "../../components/sidebarContent/index";

export default function desktop() {
  return [
    header(),
    elem({
      name: "div",
      className: " max-w-[1440px] min-w-[1000px] p-4 w-full mx-auto flex gap-2",
      child: [
        sidebarContent(),
        productSection({
          container: "mr-[255px] mt-16",
          loc: "text-left",
        }),
      ],
    }),
  ];
}
