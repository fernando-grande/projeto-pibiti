import searchImage from "./images/search.png"
import { useNavigate } from "react-router-dom";
import { Nav } from "./Nav";

export function Header() {
    const navigate = useNavigate()
    return (
        <>
        <header className="h-full box-border bg-emerald-500
            flex flex-row justify-center items-center border-solid border-black border-b-[1px] border-opacity-30">
            <button className="border-collapse  border-black border-[1px] focus:border-black
                my-24 mx-3 md:mx-8 h-full w-20 md:w-60 flex justify-start items-center p-0
                text-white text-5xl font-bold"
                onClick={() => navigate('/')}>
                PSEE
            </button>
            <input type="text" placeholder="Search experiment..." className="justify-center h-9 w-full border-solid 
                border-b-[1px] border-l-[1px] border-t-[1px] rounded-l-sm border-opacity-30 p-2 md:w-full border-black
                focus:ring-black"/>
            <button className="h-9 border-solid border-black border-r-[1px] border-t-[1px] border-b-[1px] border-l-[1px] 
                rounded-r-sm border-opacity-30 mr-6 bg-slate-300 p-1 w-16 ">
                <img src={searchImage} alt="Search" />
            </button>
            <button className="hidden md:block h-full w-48 border-solid border-[1px] border-black"
                onClick={() => navigate('/about')}>
                ABOUT
            </button>
            <button className="hidden md:block h-full w-48 border-solid border-[1px] border-black">
                EXPERIMENTS
            </button>
            <button className="hidden md:block h-full w-48 border-solid border-[1px] border-black"
                onClick={() => navigate('/register-experiment')}>
                REGISTER EXPERIMENT
            </button>
            <button className="hidden md:block h-full w-48 mr-6 border-solid border-[1px] border-black"
                onClick={() => navigate('/sign-in')}>
                SIGN IN
            </button>
            <Nav/>
        </header>
        </>
    )
}