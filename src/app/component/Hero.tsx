import { Button } from '@nextui-org/button';

export default function HeroComponent() {
  return (
    <div className="w-full h-full flex items-center bg-cover bg-center" style={{ backgroundImage: 'url(/hero.jpg)' }}>
      <div className="flex flex-col ml-10 ">
        <h1 className="w-100 text-4xl font-bold">
          Dive into Details, Hear the Best.
          <br />
          AMBATUAUDIO
        </h1>
        <p>Listen to best audio here</p>
        <Button radius="full" className="w-40 mt-5 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
          Buy Now !!!
        </Button>
      </div>
    </div>
  );
}
