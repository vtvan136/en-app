import React from 'react'

const Home = () => {
  return (
    <div className='text-base flex justify-center items-center h-screen '>
        <div className='h-[80%] w-[80%] flex-col flex justify-between'>
            <div className='bg-orange-400'>
                <h1>English Test</h1>
                <div></div>
            </div>
            <div className='bg-amber-700 mt-[-30px]'>Đồng hôd</div>
            <div className='bg-green-700'>Question</div>
            <div className='flex justify-center items-center '>
                <button className='px-[24px] h-8 bg-[#2f89fc] text-white rounded-md'>NEXT QUESTIONS</button>
            </div>
        </div>
    </div>
  )
}

export default Home