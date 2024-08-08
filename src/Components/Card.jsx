import React from 'react'

const Card = () => {


    const cardData = [
        {
          id: 1,
          title: 'Custom web solutions',
          description: 'Our web development services make use of React, Next.js, Gatsby, Vue, Angular for the front-end, and Node.js, .NET, PHP, and AWS services for the back-end.',
          image: 'https://ik.imagekit.io/itsaadi/lexis.solutions/image_8.png?updatedAt=1722916440438', 
        },
        {
          id: 2,
          title: 'Mobile Development',
          description: 'We offer mobile development services using React Native, Flutter, and native technologies to build high-performance apps.',
          image: 'https://ik.imagekit.io/itsaadi/lexis.solutions/image_34.png?updatedAt=1722916435210', 
        },
        {
            id: 2,
            title: 'Mobile Development',
            description: 'We offer mobile development services using React Native, Flutter, and native technologies to build high-performance apps.',
            image: 'https://ik.imagekit.io/itsaadi/lexis.solutions/image_7.png?updatedAt=1722916440323', 
          },
      ];

  return (
    <>
         <div className="container mx-auto p-4 flex flex-col items-center">
      {cardData.map((card, index) => (
        <div
          key={card.id}
          className={`flex flex-col lg:flex-row items-center justify-center my-8 ${
            index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
          }`}
        >
          <div className="lg:w-1/2 p-4 text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">{card.title}</h2>
            <p className="text-gray-400">{card.description}</p>
          </div>
          <div className="md:w-96 p-4">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      ))}
    </div>

    </>
  )
}

export default Card