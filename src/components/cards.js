import React from 'react'



const Cards  = (props)=>{


const card  =   props.data.map(el=>{

      

return <div className="max-w-sm rounded overflow-hidden shadow-lg" key={el.id}>


<img src={el.largeImageURL} alt="hello" className="w-full"/>

  <div className="px-6 py-4">
     <div className=".font-bold text-purple-500 text-xl mb-2">

      {el.user}


     </div>

     <ul>
         <li><strong>Views:</strong>
         {el.views}</li>
         <li><strong>Downloads:</strong>
{el.downloads}</li>
         <li><strong>Likes:</strong>
{el.likes}</li>
     </ul>
    <div className="px-6 py-4">

  <span className="inliene-block bg-gray-200 round-full px-3 py-1 text-sm font-semibolt text-gray-700 mr-2">
       
       #tag1



  </span>
  <span className="inliene-block bg-gray-200 round-full px-3 py-1 text-sm font-semibolt text-gray-700 mr-2">
       
       #tag2



  </span>
  


    </div>


  </div>


</div>


     })

     







    return(<div className="container mx-auto" >
     <div className="grid grid-cols-3 gap-4">   
     
      {card}
     
     </div>
     </div>)



}





export default Cards;

