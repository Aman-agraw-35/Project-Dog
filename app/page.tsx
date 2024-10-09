import BelowMainPage from "./componentes/belowmainpage/page";
import Mainpage from "./componentes/mainpage/page";
export default function Home() {
  return (
    <div className="   h-auto w-screen     gap-16  font-[family-name:var(--font-geist-sans)] flex ">
      <div className="w-[92vw] h-auto mx-[4vw] bg-white  overflow-hidden ">
      <Mainpage/>
      <BelowMainPage/>
      </div>
    </div>
  );
}
