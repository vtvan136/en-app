import React, { useState } from 'react';
const Home = () => {
  let questions = [
    {
    numb: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language"
    ]
  },
    {
    numb: 2,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet"
    ]
  },
    {
    numb: 3,
    question: "What does PHP stand for?",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor"
    ]
  },
    {
    numb: 4,
    question: "What does SQL stand for?",
    answer: "Structured Query Language",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language"
    ]
  },
    {
    numb: 5,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language"
    ]
  },
  {
    numb: 6,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language"
    ]
  },
  {
    numb: 7,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language"
    ]
  },
  {
    numb: 8,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language"
    ]
  },{
    numb: 9,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language"
    ]
  },{
    numb: 10,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language"
    ]
  },
  ]
  const [question, setQuestion] = useState(1)
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
                <h1 className='my-4 text-green-600 text-2xl font-semibold text-center'>{questions[question-1].question}</h1>
                <div className='grid grid-rows-2 grid-flow-col gap-4 my-9 h-[200px]'>
                  <div className='border-2 flex justify-center items-center border-x-gray-300 rounded-xl'><h1 className='text-center'>{questions[question-1].options[0]}</h1></div>
                  <div className='border-2 flex justify-center items-center border-x-gray-300 rounded-xl'><h1 className='text-center'>{questions[question-1].options[1]}</h1></div>
                  <div className='border-2 flex justify-center items-center border-x-gray-300 rounded-xl'><h1 className='text-center'>{questions[question-1].options[2]}</h1></div>
                  <div className='border-2 flex justify-center items-center border-x-gray-300 rounded-xl'><h1 className='text-center'>{questions[question-1].options[3]}</h1></div>
                </div>
              </div>
            </div>
            <div className='flex justify-center items-center '>
               { question <= 9 &&  <button onClick={()=> setQuestion(question+1)} className='px-[24px] h-12 bg-[#2f89fc] text-white rounded-xl'>NEXT QUESTIONS</button>}
            </div>
        </div>
    </div>
  )
}

export default Home