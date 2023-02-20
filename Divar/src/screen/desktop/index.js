import productSection from "../../layout/productSection/index";
import header from "../../components/header/index";

export default function desktop() {
  return [
    header(),
    productSection({
      container: "mb-8 mt-16",
      loc: "text-left",
    }),
  ];
}
