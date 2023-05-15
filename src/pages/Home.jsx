import React from 'react'

const Home = () => {
  return (
    <div className='text-base flex justify-center items-center h-screen '>
        <div className='h-[60%] w-[80%] mt-[-64px]'>
            <div className='bg-orange-400'>
                <h1>English Test</h1>
                <div></div>
            </div>
            <div className='bg-amber-700'>Đồng hôd</div>
            <div className='bg-green-700'>Question</div>
            <div className='flex justify-center items-center '>
                <button className='px-[24px] h-12 bg-[#2f89fc] text-white rounded-md'>NEXT QUESTIONS</button>
            </div>
        </div>
    </div>
  )
}

export default Home