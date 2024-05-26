import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <div className="w-full bg-gradient-to-r from-pink-500 to-yellow-500 ">
        <div className="flex flex-row items-center mt-10">
          <div className="flex flex-col ml-10 w-1/2 ">
            <Image src="/logoreal.png" alt="Logo" width={200} height={70} className=" mt-10" />
            <p className="text-white mt-5 text-medium mb-5">
              Immerse yourself in a world of unparalleled audio with Ambatuphone headphones. Designed for discerning music lovers, Ambatuphone combines cutting-edge technology with meticulous craftsmanship to deliver an audio experience
              that transcends expectations.
            </p>
          </div>
          <div className="flex flex-col ml-10 w-1/3 ">
            <h1 className="text-2xl text-left text-white font-semibold">Contact Us</h1>
            <p className="text-white text-medium mt-2">Ambatuaudio HQ, Jln Haji Carlos, Ngawi, Ngawinesia</p>
            <p className="text-white text-medium mt-2">ambatuaudio@exp.com</p>
            <p className="text-white text-medium mt-2">12345676969</p>
          </div>
        </div>
      </div>
    </>
  );
}
