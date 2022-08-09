import React from 'react'

function Home() {
  return (
    <>
    <div className=''>
{/*  navbar start*/}
    <div className=' flex items-center h-14 bg-gray-400 '>
    <div className=' flex gap-4 max-w-6xl mx-auto'>
    <h2>
        Home
      </h2>
      <h2>
        About Me
      </h2>
      <h2>
        Skills
      </h2>
      <h2>
        Resume
      </h2>
      <h2>
        conatact
      </h2>
    </div>
    </div>
   {/*  nav bar end */}


   {/* section 1 Start */}
   <div className=' '>
     <div id='section 1'>
        <div className='h-screen bg-black text-white'>
    <h2 >Hi there!!!</h2>
         <h1 >  Indushree M patil</h1>
      
      </div>
    </div>
    {/* section 1 end */}
   
   {/* Section 2 Start */}
    <div id='section 2'>
        <div className='h-screen'>
    <h2>
        section 2
      </h2>
      </div>
    </div>
    {/* section 2 end */}

  {/* section 3 start */}
    <div id='section 3'>
        <div className='h-screen '>
    <h2>
        Section 3
      </h2>
      </div>
    </div>
    {/* section 3 end */}

     {/* Section 4 Start */}
    <div id='section 4 '>
        <div className='h-screen'>
    <h2>
        Section 4
      </h2>
      </div>
    </div>
    {/* Sextion 4 end */}


    </div>
    {/* fotter start */}
    <div>
        <div className='h-52 max-w-6xl mx-auto'>
            
    <h2>
        Fotter
      </h2>
      </div>
    </div>
    {/* fotter end */}
    </div>
    </>
  )
}

export default Home
