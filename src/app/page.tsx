import Image from "next/image";
import Header from './components/header'; // Relative path if both are under 'app'


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 ">
      <Header("wadadwa")/>
    </div>
  );
}
