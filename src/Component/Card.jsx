import React from 'react'
import { FaRegFileLines } from "react-icons/fa6";
import { MdFileDownload } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { motion } from "framer-motion"

const Card = ({data}) => {
  
  return (
    <motion.div drag whileDrag={{scale:1.2}} dragElastic={1} className=' h-60 w-52 bg-slate-900 z-30 rounded-3xl overflow-hidden shadow-lg py-8 text-white relative'>
    
          <FaRegFileLines className=' mx-6'/>
          <p className=' text-xs  mx-6 mt-4 tracking-tighter leading-tight font-medium'>{data.description}</p>
          <div className=' mx-6 flex items-center justify-between mt-10'>
          <h1 className=' text-base tracking-tighter leading-tight font-medium'>{data.size}</h1>
          {data.icon? <RxCross1 />:<MdFileDownload className=' text-2xl' /> }
          </div>
          <div className={`absolute bottom-0 w-full h-10 ${data.state? "bg-green-500 px-16": "bg-blue-500"} px-10 py-2 `}>{data.state? "Installing...":"Download Now"}</div>
  
      
    </motion.div>
  )
}

export default Card

{/* <MdFileDownload /> */}