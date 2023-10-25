import Editor from '@/components/Editor'
import React from 'react'

const Practica02Page = () => {
  return (
    <div className='my-12'>
         <section className='p-2 text-center'>
          <h2 className='font-semibold'>Instrucciones</h2>
          <p>Esta práctica lee un archivo de texto plano como resultadom solo muestra los caracteres letras: <b>[a-zA-Z]</b></p>
         </section>
         <section className='mt-5'>
          <Editor />
         </section>
    </div>
  )
}

export default Practica02Page