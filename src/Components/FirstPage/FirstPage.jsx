import React from 'react'
import Dice from "../../assets/DiceImages/dices-1.png"
import { Link } from 'react-router-dom'
import SecondPage from '../SecondPage/SecondPage'

function FirstPage() {
  return (
    <div className='container mx-auto w-full h-screen flex items-center justify-center'>
        <div className='w-[40%]'>
            <img src={Dice} alt="Dice-Image" className='w-96' />
        </div>
        <div className='w-[40%] flex items-center justify-end flex-col'>
            <h1 className='uppercase text-7xl font-bold'>dice game</h1>
            <Link to="/SecondPage">
                <button className='capitalize text-white bg-black px-3 py-2 mt-5'>play now</button>
            </Link>
        </div>
    </div>
  )
}

export default FirstPage
