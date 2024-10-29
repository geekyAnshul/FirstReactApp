import React from 'react'
import Card from './Card'

const Background = () => {
  
  const data=[
    {description: "Added 1 package, and audited 366 packages in 15s  run `npm fund` for details", size:"1GB", icon:true, state:true},
    {description: "126 packages are looking for fundin run `npm fund` for details", size:".5Mb", icon:false, state:false},
    {description: "Added 1  for details PS C:neDrive Desktop firstproject", size:"3Gb", icon:true, state:true},
    {description: "Added 1 package,run `npm fund` for details  for details", size:"5.6Mb", icon:false, state:false},
    {description: "Added 1 package, and audited 366 packages in 15s  run `npm fund` for details", size:"18Mb", icon:false, state:false},
    {description: "Added 1  for details PS C:neDrive Desktop firstproject", size:"3Gb", icon:true, state:true},
   
];
    
  return (

    <div className='h-screen w-full z-20 fixed p-16 flex justify-center gap-10 flex-wrap '>
     {data.map((item,index)=>(
      <Card data={item}  />
     ))} 
    </div>
    
  )
}

export default Background