import BelowMainPage from "./componentes/belowmainpage/page";
import Tokenomics from "./componentes/tokenomics/page";
import GroupOfDogs from "./componentes/groupofdogs/page";
import Mainpage from "./componentes/mainpage/page";
import Roadmap from "./componentes/roadmap/page";
import Merchendice from "./componentes/merchendise/page";

export default function Home() {
  return (
    <div className="   h-auto w-screen  z-10   gap-16  font-[family-name:var(--font-geist-sans)] flex ">
      <div className="w-[92vw] h-auto  z-10 mx-[4vw] bg-white  overflow-hidden ">
      <Mainpage/>
      <BelowMainPage/>
      <GroupOfDogs/>
      <Roadmap/>
      <Tokenomics/>
      <Merchendice/>
      </div>
    </div>
  );
}
