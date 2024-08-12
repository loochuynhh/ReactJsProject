import React from 'react'
import { Logo } from './Logo'

export const Header = () => {
  return (
    <header className='h-16 shadow-md'>
        <div className='h-full container mx-auto flex items-center px-4 justify-between'>
        
            <div className=''>
                <Logo w={100} h={60}></Logo>
            </div>
            <div>
                <input type='text' placeholder='Search product here...'></input>
            </div>
            <div>
                User Icon and Card
            </div>
        </div>
    </header>
  )
}
