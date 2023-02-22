import elem from "../../library/createElement/index";
import sidebarContent from "../../components/sidebarContent/index";

export default function sidebar() {
  return elem({
    name: "div",
    className: "",
    child: [sidebarContent()],
  });
}
