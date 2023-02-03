import Equillibrium from "/assets/nft-preview-card-component-main/images/image-equilibrium.jpg";
import avatar from "/assets/nft-preview-card-component-main/images/image-avatar.png";
import clockIcon from "/assets/nft-preview-card-component-main/images/icon-clock.svg";
import ethereumIcon from "/assets/nft-preview-card-component-main/images/icon-ethereum.svg";
import "./nft.css";
export default function Nft() {
  return (
      <div className="flex justify-center items-center   bg-[#0d1a2d] min-h-screen min-w-screen">
      <div
        className="flex flex-col w-2/3 lg:w-1/4 md:w-1/3 p-4 rounded-xl 
        bg-[#172b4d]
    shadow-2xl "
      >
        <img
          className="object-cover object-fit rounded-md shadow-lg"
          src={Equillibrium}
          alt='nft image'
        />
        <h3 className="text-white pt-4 "> Equilibrium #3429 </h3>
        <p className="font-normal text-gray-400 pt-3 text-xs ">
          {" "}
          Our Equilibrium collection promotes balance and calm.{" "}
        </p>
        <div className="flex justify-between pt-4 border-b border-gray-700 pb-4  ">
          <p className="flex items-center text-xs gap-1 text-[#00FFF8]">
            <img className="w-2" src={ethereumIcon}
              alt='ethereum icon'
            /> 0.041 ETH{" "}
          </p>
          <p className="flex items-center gap-1 text-xs text-gray-400 ">
            <img className="w-3.5"
              alt='clock icon'
              src={clockIcon} /> 3 days left{" "}
          </p>
        </div>
        <p className="text-xs font-medium text-gray-400 flex items-center pt-3 gap-1">
          <img className="w-5 border rounded-full mr-2" src={avatar} /> Creation
          of <a className="font-medium text-white"> Jules Wyvern </a>{" "}
        </p>
      </div>
    </div>
  );
}
