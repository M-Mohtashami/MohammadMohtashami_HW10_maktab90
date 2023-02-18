export default function createElement({ name, ...attributes }) {
  const elem = document.createElement(name);
  for (let attribute in attributes) {
    elem[attribute] = attributes[attribute];
  }
  return elem;
}
