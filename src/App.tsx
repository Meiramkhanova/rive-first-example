import Simple from "./components/Simple";
import VersionFour from "./components/VersionFour";
import VersionThree from "./components/VersionThree";
import VersionTwo from "./components/VersionTwo";
import "./index.css";

export default function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Simple />
      {/* 
      <VersionTwo />

      <VersionThree />

      <VersionFour /> */}
    </div>
  );
}
