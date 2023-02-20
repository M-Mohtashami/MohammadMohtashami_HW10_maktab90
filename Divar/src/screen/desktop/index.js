import searchForm from "../../components/search";
import productSection from "../../layout/productSection/index";

export default function desktop() {
  return [
    productSection({
      container: "mb-8 mt-16",
      loc: "text-left",
    }),
  ];
}
