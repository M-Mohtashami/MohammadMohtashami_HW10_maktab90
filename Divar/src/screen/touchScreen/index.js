import searchForm from "../../components/search";
import mobileHeader from "../../components/mobile-header";
import mobileFilter from "../../components/mobile-filter";
import productSection from "../../layout/productSection/index";

export default function touchScreen() {
  return [
    searchForm(),
    mobileHeader(),
    mobileFilter(),
    productSection({
      container: "mb-20 mt-36",
      loc: "text-right",
    }),
  ];
}
