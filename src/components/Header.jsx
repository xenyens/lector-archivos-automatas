import React from 'react'

import {Lato,IBM_Plex_Sans} from 'next/font/google'

import Image from 'next/image'
import Link from 'next/link'

const lato = Lato({weight:'900', subsets:['latin']})
const imb = IBM_Plex_Sans({weight:'300', subsets:['latin']})

const Header = () => {

    const rutas = [
        {
            link: '/',
            name: 'INICIO'
        },
        {
            link: '/practica01',
            name: 'PRÁCTICA 01'
        },
    ]

  return (
    <header className={`mx-auto bg-slate-100 shadow-md`}>
        <nav className='bg-slate-50 px-5 my-2'>
            <div className='flex items-center justify-between mb-7'>
                <div>
                <Image
                    src={'/img/logo-xenia-programing.png'}
                    alt='logotipo'
                    width={80}
                    height={80}
                />                     
                </div>
                <ul className={`${imb.className} flex gap-x-6 justify-end`}>
                    {
                        rutas.map((ruta,index) => (
                            <li key={index} className='hover:border-b border-black'>
                                <Link href={ruta.link}>{ruta.name}</Link>
                            </li>
                        ))
                    }
                    
                </ul>
            </div>
        </nav>
        <div className='grid grid-cols-1 sm:grid-cols-2 px-10 justify-items-center'>
            <div className='flex flex-col justify-center'>
                <h1 className={`${lato.className} text-4xl text-cyan-600 font-semibold uppercase`}>
                    Lenguajes y Autómatas I
                </h1>
                <h3 className='text-gray-500 font-bold'>ME Xenia Padilla Madrid</h3>
                <h3 className='text-gray-500'>Ingeniería en Sistemas Computacionales</h3>
                <h3 className='text-gray-500'>Instituto Tecnológico de Ensenada</h3>
            </div>

            <div className='flex justify-center items-center'>
            <Image
                src={'/img/logo.png'}
                alt='logotipo'
                width={300}
                height={300}
            />
            </div>
            
        </div>
    </header>
  )
}

export default Header