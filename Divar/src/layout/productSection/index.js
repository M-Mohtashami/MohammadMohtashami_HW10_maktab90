import elem from "../../library/createElement/index";
import product from "../../components/product/index";

const dataset = [
  {
    title: "کامپیوتر خانگی و اداری نسل 4",
    desc: "نو",
    price: 7200000,
    detail: "استوک کالا در دانشگاه علم و صنعت",
    loc: "فروشگاه",
    src: "./src/assets/img/1.webp",
  },
  {
    title: "کامپیوتر گیمینگ حرفه ای با کیس RGB",
    desc: "نو",
    price: 19900000,
    detail: "استوک پی سی در دانشگاه علم و صنعت",
    loc: "فروشگاه",
    src: "./src/assets/img/2.webp",
  },
  {
    title: "کامپیوتر کیس آیمک اپل اداری حسابداری حرفه‌ای",
    desc: "در حد نو",
    price: 4700000,
    detail: "تهران سیستم در باغ خزانه",
    loc: "فروشگاه",
    src: "./src/assets/img/3.webp",
  },
  {
    title: "‌کامپیوتر کیس آیمک اپل i5نسل2/رم8/ssd256/گرافیک 4",
    desc: "در حد نو",
    price: 9300000,
    detail: "تهران سیستم در باغ خزانه",
    loc: "فروشگاه",
    src: "./src/assets/img/4.webp",
  },
  {
    title: "کامپیوتر کیس i77700/طراحی/گرافیکی با مانیتور برند",
    desc: "نو",
    price: 13800000,
    detail: "تهران سیستم در باغ خزانه",
    loc: "فروشگاه",
    src: "./src/assets/img/5.webp",
  },
  {
    title: "کارت گرافیک کیس کامپیوتر rx 580 xfx 8gig",
    desc: "در حد نو",
    price: 2600000,
    detail: "digital center در جمهوری",
    loc: "فروشگاه",
    src: "./src/assets/img/6.webp",
  },
];
export default function productSection() {
  return elem({
    name: "div",
    className: "grid grid-cols-1 md:grid-cols-2 gap-4 px-4 mb-20 mt-36",
    child: dataset.map((item) => product(item)),
  });
}
