import elem from "../../library/createElement/index";
export default function container(child) {
  return elem({
    name: "div",
    className: "mx-auto, p-4 border-b-1 shadow",
    child: [child],
  });
}
