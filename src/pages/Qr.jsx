import ImageQrCode from "/assets/qr/images/image-qr-code.png";

export default function Qr() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#d5e1ef]">
      <div className="flex flex-col items-center justify-center shadow-2xl px-4 w-96 py-6 rounded-[2rem] pb-16 bg-white">
        <img src={ImageQrCode} alt="QR code to frontendmentor.io"
          className="h-96 w-96 rounded-lg" />
        <h1 className="text-2xl font-bold text-gray-800 mt-6 px-4 text-center">
          Improve your front-end skills by building projects{" "}
        </h1>
        <p className="text-sm text-gray-500 mt-3 text-center w-[14rem]">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}
