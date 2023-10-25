import Image from 'next/image'
import React from 'react'

import {BiLogoFacebookSquare} from 'react-icons/bi'
import {FaSquareXTwitter} from 'react-icons/fa6'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='grid grid-cols-1 space-y-3 sm:space-y-0 sm:grid-cols-4 gap-x-0 sm:gap-x-4 p-32 bg-[#f1f5f9]'>
        <div>            
            <Image
                src={'/img/logo-xenia-programing.png'}
                alt='logotipo'
                width={200}
                height={200}
            />            
        </div>
        <div className=''>Lenguajes y Autómatas I</div>
        <div>Tecnológico Nacional de México</div>
        <div className='flex flex-col'>
            <p>Sígueme en:</p>
            <div className='flex gap-x-3'>
                <BiLogoFacebookSquare/>
                <FaSquareXTwitter/>
                <BsInstagram/>
            </div>
        </div>
    </footer>
  )
}

export default Footer