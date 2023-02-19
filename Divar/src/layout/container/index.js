import elem from "../../library/createElement/index";
export default function container(child) {
  return elem({
    name: "div",
    className: "fixed top-0 w-full bg-white mx-auto, p-4 ",
    child: [child],
  });
}
