import React from 'react'

const Inicio = () => {
    return (
        <div id='Home' className="grid lg:grid-cols-2  grid-cols-1">
            <div>
                <img className='w-full' src="../src/assets/Ilustration.png" alt="" />
            </div>
            <div className='bg-[#9B293A] p-8 lg:p-2'>
                <div className=' lg:absolute lg:inset-x-0 lg:bottom-20 '>
                    <p className='font-bold text-white text-right text-5xl lg:text-7xl lg:px-10'>LIZETH <br /> MARTINEZ</p>
                    <p className='font-light text-white text-right text-3xl lg:px-10'>MULTIMEDIA ENGINEER</p>
                    <p className='font-light text-white text-right text-2xl lg:px-10 py-10'>Multimedia Engineer, with knowledge in the
                        <br /> integration of visual media that contribute to
                        <br /> transforming the way of communication and
                        <br /> entertainment 📱🎥.</p>
                </div>
            </div>
        </div>
    )
}

export default Inicio
