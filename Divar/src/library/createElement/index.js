export default function createElement({ name, child, ...attributes }) {
  const elem = document.createElement(name);
  for (let attribute in attributes) {
    elem[attribute] = attributes[attribute];
  }
  for (let ch of child) {
    elem.append(ch);
  }
  return elem;
}
