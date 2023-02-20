import elem from "../../library/createElement/index";
export default function container(child) {
  return elem({
    name: "div",
    className:
      "mx-auto p-4 border-b-1 shadow fixed top-0 w-full bg-white p-4 z-10 ",
    child: [child],
  });
}
