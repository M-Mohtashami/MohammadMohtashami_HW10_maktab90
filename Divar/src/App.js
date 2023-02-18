import elem from "./library/createElement/index";
import container from "./layout/container/index";

export default function App() {
  return container(
    elem({
      name: "h1",
      className: "text-3xl underline text-blue-500",
      child: ["Hello world"],
    })
  );
}
