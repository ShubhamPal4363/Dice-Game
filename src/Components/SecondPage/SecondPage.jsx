import React, { useState } from 'react'
import Dice1 from "../../assets/DiceImages/dice_1.png"
import Dice2 from "../../assets/DiceImages/dice_2.png"
import Dice3 from "../../assets/DiceImages/dice_3.png"
import Dice4 from "../../assets/DiceImages/dice_4.png"
import Dice5 from "../../assets/DiceImages/dice_5.png"
import Dice6 from "../../assets/DiceImages/dice_6.png"

function SecondPage() {

    const [dices, setDices] = useState(0);
    const numberValue = (value) => {
        setDices(value);
        setcheckValue(false);
        setstyleDice(true);
        // console.log(value);
    }

    const [checkValue, setcheckValue] = useState(false);

    const [Number, setNumber] = useState(0);
    const dice = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6]
    const [diceValue, setdiceValue] = useState(Dice1);
    const rollDice = () => {

        if(dices === 0){
            setcheckValue(true);
            // console.log(checkValue);
        }
        else
        {
            const a = Math.floor(Math.random() * 6);
            setdiceValue(dice[a]);

            if (dices === a + 1) { // Adjust for zero-based index
                setNumber(Number + 3);
            } else {
                setNumber(Number - 3);
            }
        }

    }

    // for reset the score 
    const resetScore = () => {
        setNumber(0);
    }

    // For Show Rules 
    const [Rules, setRules] = useState(false);

    const showRules = () => {
        setRules(!Rules);
    }

  return (
    <>

    <div className='container mx-auto'>
        {/* this is for score */}
        <div className='flex justify-between items-center my-5'>
            <div className='flex flex-col'>
                <h2 className='text-5xl text-center'>{Number}</h2>
                <p className='capitalize text-lg'>total score</p>
            </div>
            <div className='flex flex-col'>
                <div className='flex justify-end'>
                    {
                        checkValue ? <p className='text-red-600'>You have not selected any number</p> : ""
                    }
                </div>
                <div className='my-2'>
                    <ul className='flex gap-5 cursor-pointer' onClick={() => numberValue(event.target.value)}>
                        <li className='px-4 py-2 border-2 border-black hover:text-white hover:bg-black text-lg font-semibold' value={1}>1</li>
                        <li className='px-4 py-2 border-2 border-black hover:text-white hover:bg-black text-lg font-semibold' value={2}>2</li>
                        <li className='px-4 py-2 border-2 border-black hover:text-white hover:bg-black text-lg font-semibold' value={3}>3</li>
                        <li className='px-4 py-2 border-2 border-black hover:text-white hover:bg-black text-lg font-semibold' value={4}>4</li>
                        <li className='px-4 py-2 border-2 border-black hover:text-white hover:bg-black text-lg font-semibold' value={5}>5</li>
                        <li className='px-4 py-2 border-2 border-black hover:text-white hover:bg-black text-lg font-semibold' value={6}>6</li>
                    </ul>
                </div>
                <div className='flex justify-end'>
                    <p className='capitalize text-black'>select number: {dices}</p>
                </div>
            </div>
        </div>

        {/* this is for main content */}
        <div className='flex flex-col gap-5 items-center justify-center my-10'>
            <img src={diceValue} alt="RollDice" className='w-40 cursor-pointer' onClick={() => rollDice()} />
            <h3 className='capitalize text-lg font-semibold'>click on dice to roll</h3>
            <button className='capitalize border-2 py-1 px-9' onClick={() => resetScore()}>reset score</button>
            <button className='capitalize border-2 bg-black text-white py-1 px-9' onClick={() => showRules()}>show rules</button>
        </div>

        {
            Rules ? <div className='flex flex-col justify-center items-center my-10'>
            <div className='p-4 bg-red-200 rounded-lg'>
                <div className='my-3'>
                    <h3>How to play dice game</h3>
                </div>
                <div className='my-4'>
                    <p>Select any number</p>
                    <p>Click on dice image</p>
                    <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
                    <p>if you get wrong guess then  2 point will be dedcuted </p>
                </div>
            </div>
        </div> : "" 
        }
    </div>

    </>
  )
}

export default SecondPage
