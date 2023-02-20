import elem from "../../library/createElement/index";
import filter from "../../components/filter/index";

export default function sidebar() {
  return elem({
    name: "div",
    className:
      "p-4 border-b-1 w-[400px] h-screen bg-blue overflow-auto scrollbar-hide ",
    child: [filter()],
  });
}
