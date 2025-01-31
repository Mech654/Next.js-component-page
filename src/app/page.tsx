import Image from "next/image";
import Header from './components/header'; // Relative path if both are under 'app'
import ThickText  from './components/ThickText';
import LoadingCircle from "./components/LoadingCircle";
import PulsingCircle from "./components/PulsingCircle";
import RotatingDots from "./components/RotatingDots";
import HamburgerMenu from "./components/HamburgerMenu";
import Accordion from "./components/Accordion";
import Button1 from "./components/Button1";
import Button2 from "./components/Button2";
import FloatingMenu from "./components/FloatingMenu";
import Form1 from "./components/Form1";

const components = [
   LoadingCircle, PulsingCircle, RotatingDots, HamburgerMenu,
  Accordion, Button1, Button2, FloatingMenu, Form1
];


export default function Home() {
  return (
    <body className="min-h-screen bg-gradient-to-r from-gray-900 to-black">
      <Header headertext="Username" />

      {components.map((Component, index) => (
        <div key={index} className="flex flex-col items-center justify-center p-10">
          <ThickText text={`Component ${index + 1}`} />
          <Component />
        </div>
      ))}

    </body>
  );
}


