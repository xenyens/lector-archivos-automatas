'use client'
import React,{useState} from 'react'
import { FiTrash2 } from "react-icons/fi";
import {BiCodeAlt} from 'react-icons/bi'

const Editor = () => {
    const [file, setFile] = useState()
    const [previewText, setPreviewText] = useState([])
    
    const handleFile =  (e) => {
        e.preventDefault()
        const fr = new FileReader()
        fr.readAsText(file)
        fr.addEventListener('load',()=>{
            const data = fr.result.replace(/[ 0-9áéíóúÁÉÍÓÚüÜ!"#$%&/()={}\.\n]+/g,'')
            const dataArray = data.split('')
            setPreviewText(dataArray)
        })
    }

    const limpiar = (e) => {
        e.preventDefault()
        setPreviewText('')
        
    }

  return (
    <div className='flex flex-col w-2/3 mx-auto'>
        <nav className='p-2 bg-[#283138]'>
            <form 
                onSubmit={handleFile} 
                className='grid sm:grid-cols-2 gap-5 items-center p-3'
            >
                <input 
                    type="file"
                    onChange={e=>setFile(e.target.files?.[0])}
                    className='bg-[#eb5c65] rounded-md p-2 overflow-auto'
                />
                <div className='flex flex-col sm:flex-row justify-end gap-x-4 space-y-2 sm:space-y-0'>
                    <button
                        type="submit"
                        className='flex flex-col items-center justify-center w-full sm:w-20 px-5 py-2 bg-cyan-200 rounded-md cursor-pointer hover:bg-cyan-400'
                    >
                        <BiCodeAlt size={25}/>
                        <p>Ejecutar</p>
                    </button>
                    <button 
                        onClick={limpiar}
                        className='flex flex-col items-center justify-center w-full sm:w-20 px-5 py-2 bg-cyan-200 rounded-md cursor-pointer hover:bg-cyan-400'
                    >
                        <FiTrash2 size={25}/>
                        <p>Limpiar</p>
                    </button>
                </div>
            </form>            
        </nav>
        <div className='flex flex-col'>
            <textarea 
                name="editor" id="editor"
                className='border-[2px] border-gray-500 min-h-[300px] overflow-y-scroll p-4 bg-[#e3e8f4]'
                value={previewText}
                onChange={e=>setPreviewText(e.target.value)}
            >

            </textarea>
            <div className=''>
                <p className='text-end text-gray-400 text-xl'>
                    <span className='font-bold text-[#615e5f] mr-2'>{previewText.length}</span>
                    caracteres encontrados
                </p>
            </div>
        </div>

        
    </div>
  )
}

export default Editor