import elem from "./library/createElement/index";
import container from "./layout/container/index";
import searchForm from "./components/search";
import mobileHeader from "./components/mobile-header";

export default function App() {
  return elem({
    name: "div",
    child: [searchForm(), mobileHeader()],
  });
}
