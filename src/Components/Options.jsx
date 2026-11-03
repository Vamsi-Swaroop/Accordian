import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What is React?",
    answer: "React is a JavaScript library used to build interactive user interfaces."
  },
  {
    id: 2,
    question: "What is JavaScript?",
    answer: "JavaScript is a programming language that makes websites interactive."
  },
  {
    id: 3,
    question: "What is Tailwind CSS?",
    answer: "Tailwind CSS is a utility-first CSS framework used to style websites."
  },
  {
    id: 4,
    question: "What is Vite?",
    answer: "Vite is a frontend build tool that provides a fast development environment."
  },
  {
    id: 5,
    question: "What is React Router?",
    answer: "React Router is a library used to handle navigation between pages in React applications."
  }
];


const Options = () => {

    const[option,setOption] = useState(-1)

    const handleOption=(index)=>{
        if(option === index) setOption(-1)
        else setOption(index)
    }

  return (
    <>
        <div className="flex flex-col mt-10 items-center justify-center gap-2">
            <p className="font-bold underline mb-8">Click on any option to expand</p>
            {faqs.map((faq,index)=>(
                <>
                    <div className="border border-amber-200 hover:cursor-pointer h-14 w-[90%] py-2 px-2 ">
                        <div onClick={()=>handleOption(index)} id={faq.id} key={faq.id} >{faq.question}</div>
                        {(option === index) && <p>{faq.answer}</p>}
                    </div>
                </>
            ))}
        </div>
    </>
  )
}

export default Options