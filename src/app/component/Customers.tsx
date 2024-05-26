'use client';
import React from 'react';
import { Image } from '@nextui-org/react';

export default function CustomersTest() {
  const testimonial = [
    {
      img: '/customer.jpg',
      name: 'Mas Rusdi',
      description:
        'Saya sangat terkesan dengan kualitas suara yang ditawarkan oleh headphone Ambatuphone. Detail suara yang jernih dan bass yang kuat membuat pengalaman mendengarkan musik menjadi sangat memuaskan. Bahkan saat mendengarkan genre musik yang berbeda, headphone ini tetap menghasilkan performa suara yang luar biasa.',
    },
    {
      img: '/customer2.jpg',
      name: 'Mr Irony',
      description:
        'Saya telah menggunakan headphone Ambatuphone untuk berjam-jam tanpa merasa lelah atau tidak nyaman. Desain ergonomisnya memastikan bahwa tekanan pada telinga dan kepala diminimalkan, sementara bahan-bahan berkualitas tinggi memberikan sensasi lembut dan nyaman saat dipakai. Ini membuatnya menjadi pilihan sempurna untuk penggunaan sehari-hari atau maraton mendengarkan musik.',
    },
    {
      img: '/logonew.png',
      name: 'Pak Amba',
      description:
        'Selain kinerja suara yang luar biasa, desain headphone Ambatuphone juga patut diacungi jempol. Tampilan yang elegan dan modern membuatnya cocok untuk berbagai kesempatan, baik di rumah, di luar ruangan, atau saat bepergian. Selain itu, konstruksi yang kokoh menjamin bahwa headphone ini dapat bertahan lama meskipun digunakan secara intensif. Overall, I am thoroughly impressed with Ambatuphone headphones and would highly recommend them to anyone in search of premium sound and comfort.',
    },
  ];
  return (
    <div className="w-full h-full ">
      <div className="flex flex-col items-center">
        <h3 className="text-2xl text-left bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent bg-clip-text">Testimonial</h3>
        <h1 className="text-4xl font-bold ">What Our Customers Are Saying</h1>
        <div className="flex flex-row mt-10">
          {testimonial.map((item, index) => (
            <>
              <div className="flex flex-col w-80 mx-5 rounded-large border-2 border-pink-500 ">
                <div key={index} className="flex flex-col mt-10 items-center">
                  <Image src={item.img} height={70} width={70} alt="Dummy Image" className="mt-5 rounded-full aspect-square object-cover" />
                  <h1 className="text-white mt-5 text-3xl font-bold text-center">{item.name}</h1>
                  <p className="text-white mt-5 text-justify mx-5 mb-5">{item.description}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
