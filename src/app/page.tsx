import Image from "next/image";
import Header from './components/header'; // Relative path if both are under 'app'
import ThickText from './components/ThickText';
import LoadingCircle from "./components/LoadingCircle";
import RotatingDots from "./components/RotatingDots";
import HamburgerMenu from "./components/HamburgerMenu";
import Accordion from "./components/Accordion";
import Button1 from "./components/Button1";
import Button2 from "./components/Button2";
import FloatingMenu from "./components/FloatingMenu";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";

let url = "https://github.com/Mech654/Next.js-component-page/tree/master/src/app/components";

const components = [
  { name: "LoadingCircle", component: LoadingCircle },
  { name: "RotatingDots", component: RotatingDots },
  { name: "HamburgerMenu", component: HamburgerMenu },
  { name: "Accordion", component: Accordion },
  { name: "Button1", component: Button1 },
  { name: "Button2", component: Button2 },
  { name: "FloatingMenu", component: FloatingMenu },
  { name: "Form1", component: Form1 },
  { name: "Form2", component: Form2 }
];

export default function Home() {
  return (
    <div    className="min-h-screen bg-gradient-to-r from-purple-800 via-purple-820 to-black"
    //style={{ background: "linear-gradient(to right, black 0%, gray 40%, black 110%)" }}
    >

      <Header headertext="${user.name}" />
      {components.map(({ name, component: Component }, index) => (
        <div key={index} className="flex flex-col items-center justify-center p-10">
          <a href={`${url}/${name}.tsx`} target="_blank" rel="noopener noreferrer">
            <ThickText text={`Component ${index + 1}`} />
          </a>
          <Component />
        </div>
      ))}
    </div>
  );
}
