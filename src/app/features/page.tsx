import Image from 'next/image';

export default function FeatureComponent() {
  const content = [
    {
      title: 'Superior Sound Quality',
      description: 'Ambatuphone is renowned for delivering exceptional sound quality. With advanced technology and refined acoustic design, these headphones provide an immersive listening experience with clear details and powerful bass.',
      img: '/feature1.png',
    },
    {
      title: 'Superior Comfort',
      description:
        'The ergonomic design and high-quality materials make Ambatuphone headphones comfortable to wear for extended periods. Soft ear cushions and plush headbands reduce pressure on the ears and head, making them suitable for everyday use or long listening sessions',
      img: '/pikachu.png',
    },
    {
      title: 'Stylish and Durable Design',
      description:
        'Ambatuphone not only offers outstanding sound performance but also comes with an elegant and modern design. High-quality materials and sturdy construction make these headphones durable and suitable for various activities,whether at home, outdoors, or while traveling.',
      img: '/feature2.jpg',
    },
  ];
  return (
    <div className="w-full h-full ">
      <div className="flex flex-col ">
        <div className="mx-auto ">
          <h1 className="text-2xl  mt-10 text-center bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent bg-clip-text">Feature</h1>
          <p className="text-4xl font-bold ">Why Choose Ambatuaudio?</p>
        </div>
        <div className="flex flex-col items-center mt-10">
          {content.map((item, index) => (
            <>
              <div key={index} className="flex flex-row mt-10">
                <div className="w-200 h-200 ml-auto ">
                  <Image src={item.img} alt="feature" width={100} height={100} />
                </div>
                <div className="flex flex-col w-1/2 ml-5 mr-auto h-70">
                  <h1 className="text-3xl font-bold text-left bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent bg-clip-text">{item.title}</h1>
                  <p className="text-md text-left">{item.description}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
