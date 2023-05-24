import React, { useEffect, useState } from 'react';
const Home = () => {
  let data = [
    {question: "Go",
    answer: "Đi"},
    {question: "Home",
    answer: "Nhà"},
    {question: "School",
    answer: "Trường"},
    {question: "Car",
    answer: "Oto"},
    {question: "Pen",
    answer: "Bút"},
    {question: "Table",
    answer: "Bảng"},
    {question: "Content",
    answer: "Nội dung"},
    {question: "Title",
    answer: "Tiêu đề"},
    {question: "Stand",
    answer: "Đứng"},
    {question: "Sun",
    answer: "Mặt trời"},
  ]
  const [question, setQuestion] = useState(1)
  const arr = [];
  while (arr.length < 10) {
    let r = Math.floor(Math.random() * 10) + 1;
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  data.sort(function() { return Math.random() - 0.5 });
  const [answer, setAnswer] = useState([])
  const [questions, setQuestions] = useState()
  useEffect((()=>{
    
  }),[])
  console.log(data)
  return (
    <div className='text-base flex justify-center items-center h-screen '>
        <div className='h-[60%] w-[90%] mt-[-64px]'>
            <div className='my-9'>
                <h1 className='font-normal text-2xl'>English Test</h1>
                <div></div>
            </div>
            <div className='bg-amber-700 my-9'></div>
            <div className='my-9'>
              <div>
                <h1 className='my-4'>Question - {question}/10</h1>
                <h1 className='my-4'>Choose the correct meaning of the word</h1>
                <h1 className='my-4 text-green-600 text-2xl font-semibold text-center'>{data[question-1].question}</h1>
                <div className='grid grid-rows-2 grid-flow-col gap-4 my-9 h-[200px]'>
                {arr && arr.map((key,id)=>(
                  <h1>{key}</h1>
                ))}
                </div>
              </div>
            </div>
            <div className='flex justify-center items-center '>
               { question <= 9 &&  <button onClick={()=> {
                setQuestion(question+1)}} className='px-[24px] h-12 bg-[#2f89fc] text-white rounded-xl'>NEXT QUESTIONS</button>}
            </div>
        </div>
    </div>
  )
}

export default Home