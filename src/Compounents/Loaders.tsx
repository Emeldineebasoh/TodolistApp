import React from 'react'

type Props = {}

 export function ListLoader({}: Props) {
  return (
   <div className="w-full flew flex-wrap gap-10 justify-center">

    ([1, 2, 3, 4, 5, 6, 7])
   </div>

  )
}


function singleTaskList (){
    return <div className="bg-gray-200 shadow rounded-md max-w-sm w-full">
<div className="animate-pulse flex flex-col">
    <div className="h-14 bg-gray-300 rounded-t-md"> </div>
    <div className="flex-1 space-y-3 p-10"></div>



</div>
<div className="absoulate animate-pulse -bottom-4 -left-4 bg-gray-300 h-10 w-10">

</div>

    </div>

}