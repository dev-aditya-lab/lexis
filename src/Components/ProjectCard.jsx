import React from "react";
import Btn from './Btn';

const ProjectCard = () => {
  const data = [
    {
      title: "Onno Plus achieves 3X sales by tailor-made CRM and e-commerce checkout",
      buttonText: "Read",
      imageUrl: "https://ik.imagekit.io/itsaadi/lexis.solutions/image_41.png?updatedAt=1722916439198",
      bgImageUrl: "https://ik.imagekit.io/itsaadi/lexis.solutions/b6d593da-de5d-4d66-b210-5cd7d2d8794f.svg?updatedAt=1722916423790",
    },
    {
      title: "Boost Your Sales with Our New Marketing Tools",
      description: "Discover the latest tools to enhance your marketing efforts.",
      buttonText: "Learn More",
      imageUrl: "https://ik.imagekit.io/itsaadi/lexis.solutions/image_36.png?updatedAt=1722916438271",
      bgImageUrl: "https://ik.imagekit.io/itsaadi/lexis.solutions/a9c32b3f-7329-4525-a219-d77ef0cc3e64.svg?updatedAt=1722916423816",
    },
    {
      title: "Revolutionize Your Workflow with Our Software",
      description: "Streamline your processes and improve productivity.",
      buttonText: "Get Started",
      imageUrl: "https://ik.imagekit.io/itsaadi/lexis.solutions/image_35.png?updatedAt=1722916435759",
      bgImageUrl: "https://ik.imagekit.io/itsaadi/lexis.solutions/544805e7-9adc-4dee-9abe-c5c0d780cf0f.svg?updatedAt=1722916421149",
    },
  ];

  return (
    <>
      <div>
      {
        data.map((item, index)=>{
          return(
            <div className="relative bg-gray-800 text-white  rounded-lg shadow-lg overflow-hidden hover:border mb-5  ">
      {/* Background Image */}
      <img
        src={item.bgImageUrl}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 p-8">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4">
            {item.title}
          </h2>
         
          <Btn text={`${item.buttonText} ➜`}/>
        </div>
        <div className="-z-10 hidden lg:block lg:mt-0 lg:w-1/2 absolute lg:static">
          <img
            src={item.imageUrl}
            alt="Main"
            className="w-full rounded-lg "
          />
        </div>
      </div>
    </div>
          )
        })
      }
      </div>
    </>
  );
};

export default ProjectCard;
