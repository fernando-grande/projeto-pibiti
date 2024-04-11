import ListImage from './images/list.png'
import closeImage from './images/close.png'
import { useState } from 'react'
import ReactDOM from 'react-dom'

export function Nav() {
    const [showInterface, setShowInterface] = useState(false)
    const [actualImage, setActualImage] = useState(ListImage)

    const changeImage = () => {
        if (actualImage === ListImage) {
            setActualImage(closeImage)
        } else {
            setActualImage(ListImage)
        }
    }

    const handleButtonClick = () => {
        setShowInterface(!showInterface)
    }

    const onClickChanges = () => {
        changeImage()
        handleButtonClick()
    }

    const showOverlay = showInterface && (
        ReactDOM.createPortal (
            <div className='md:hidden bg-sky-700 w-full h-96 flex flex-col items-center
                fixed top-[60px] left-0'>
                <button className='text-white text-3xl w-full border-b-[1px] my-3 pb-3'>ABOUT</button>
                <button className='text-white text-3xl w-full border-b-[1px] mb-3 pb-3'>DOCUMENTATION</button>
                <button className='text-white text-3xl w-full border-b-[1px] mb-3 pb-3'>REGISTER EXPERIMENT</button>
                <button className='text-white text-2xl w-56 border-[1px] mt-5 p-3 rounded-md
                    hover:bg-green-500 hover:text-black'>SIGN IN/REGISTER</button>
            </div>,
            document.body
        )
    )

    return (
        <>
            {showOverlay}
            <nav className="md:hidden block items-center mr-3 -mx-3">
                <button className="flex items-center"
                    onClick={onClickChanges}>
                    <img src={actualImage} alt="Image" className='h-8 w-12' />
                </button>
            </nav>
        </>
    )
}