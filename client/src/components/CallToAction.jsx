import { Button } from 'flowbite-react'
import React from 'react'

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
     <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">
            Want to learn more about the Congo Projects?
        </h2>
        <p className="text-gray-500 my-2">
            Checkout these resources at the Software Engineering Facility ran by Henriquet KAPEMA
        </p>
        <Button gradientDuoTone='purpleToBlue' className="rounded-tl-xl rounded-bl-none"> 
            <a href="https://drc-gov-social-media.onrender.com" target="_blank" rel="noopener noreferrer">DRC Gov Social Media</a>
             
        </Button>
     </div>
     <div className="p-7 flex-1">
        <img src="https://furtherafrica.com/content-files/uploads/2020/08/drc_dam.jpg"/> 

     </div>
    </div>
  )
}
