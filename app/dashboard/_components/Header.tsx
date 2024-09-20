

import { Search } from 'lucide-react'
import React from 'react'


function Header() {
  return (
    <div className='p-9 flex justify-between items-center border-b-2'>
        <div className='flex gap-2 max-w-xl items-center'>
            <Search />
            <input type="text" placeholder="Search items..." className='outline-none border rounded-md p-1' />
        </div>
        <div className='bg-purple-700 p-2 rounded-xl'>
         <p className='text-white text-xs font-semibold'>Get more offers with discount 9.99$</p>
        </div>

    </div>
  )
}

export default Header