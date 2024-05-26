'use client';
import React from 'react';
import { Button, Card, CardBody, CardFooter, Image } from '@nextui-org/react';

export default function Product() {
  const list = [
    {
      title: 'White Pend',
      img: '/card1.jpg',
      price: '$5.50',
    },
    {
      title: 'Gaming Black',
      img: '/card2.jpg',
      price: '$3.00',
    },
    {
      title: 'Black Matte',
      img: '/card3.jpg',
      price: '$10.00',
    },
    {
      title: 'Soft Green',
      img: '/card4.jpg',
      price: '$5.30',
    },
  ];
  return (
    <div className="w-full h-full ">
      <div className="flex flex-col mx-auto">
        <h1 className="text-5xl font-bold mt-10 text-left ml-10 bg-gradient-to-t from-pink-500 to-yellow-500 text-transparent bg-clip-text">Our Product</h1>
        <div className="mt-10 gap-4 grid grid-cols-4 sm:grid-cols-4 mx-10">
          {list.map((item, index) => (
            <Card shadow="sm" key={index}>
              <CardBody className="overflow-visible p-0">
                <Image shadow="sm" radius="lg" width="100%" alt={item.title} className="w-full object-cover h-[300px]" src={item.img} />
              </CardBody>
              <CardFooter className="text-medium flex flex-col items-start">
                <b>{item.title}</b>
                <p className="text-default-500">{item.price}</p>
              </CardFooter>
              <Button className=" mt-5 w-full bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">Add To Cart</Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
