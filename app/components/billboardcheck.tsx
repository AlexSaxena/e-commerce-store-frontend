import React from 'react'
import Billboard from './billboard';
import getBillboard from '../actions/get-billboard';


export default async function Billboardcheck() {
    const billboard = await getBillboard("e8e3cf67-a3f5-4010-85f8-bad5ab931eb7");
    
  return (
    <div>
        {billboard && (
           <div>
                <Billboard data={billboard}/>
           </div>       
        )}
    </div>
  )
}

