import React from 'react'
import Hero from './Hero'
import Card from '../Card'
import ProjectCard from '../ProjectCard'
import Card2 from '../Card2'

const Home = () => {


  
  return (
    <>
     <Hero/>
     <section>
      <div className=' px-4 mx-auto lg:px-20 md:mt-12'>
        <div className='py-12 border-t border-gray-800 md:py-16'>
            <div className='max-w-3xl mx-auto text-center'>
              <h2 className='text-3xl lg:text-5xl font-semibold'>We provide full-cycle software development</h2>
              <p className='mt-4 text-lg md:text-xl max-w-[75ch] text-gray-400 '>We offer everything you need to make your software outshine, outlast, and outperform the competition.</p>
            </div>
        </div>
          <Card/>
      </div>
     </section>



     <section>
      <div className=' px-4 mx-auto lg:px-20 md:mt-12'>
        <div className='py-12 border-t border-gray-800 md:py-16'>
            <div className='max-w-3xl mx-auto text-center'>
              <h2 className='text-3xl lg:text-5xl font-semibold'>Success stories</h2>
              <p className='mt-4 text-lg md:text-xl max-w-[75ch] text-gray-400 '>See how our software solutions have helped businesses thrive.</p>
            </div>
        </div>
          <ProjectCard/>
      </div>
     </section>



     <section>
      <div className=' px-4 mb-5 mx-auto lg:px-20 md:mt-12 '>
        <div className='py-12 border-t border-gray-800 md:py-16'>
            <div className='max-w-3xl mx-auto text-center'>
              <h2 className='text-3xl lg:text-5xl font-semibold'>A partner that will make your idea better</h2>
              <p className='mt-4 text-lg md:text-xl max-w-[75ch] text-gray-400 '>The Lexis Solutions approach is different because we go above and beyond just taking directions. Our team immerses themselves in a project as if it is their own.</p>
            </div>
        </div>
        <div className='lg:flex lg:flex-wrap w-full justify-evenly '>
          <Card2/>
          <Card2/>
          <Card2/>
          <Card2/>
        </div>
      </div>
     </section>






    </>
  )
}

export default Home