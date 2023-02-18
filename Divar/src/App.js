import elem from "./library/createElement/index";
export default function App() {
  return elem({
    name: "h1",
    className: "text-3xl underline text-blue-500",
    innerText: "Hello world",
  });
}
