
import './App.css'
import apple from "./assets/apple.png";
import lemon from "./assets/lemon.png";
import lemonbg from "./assets/lemonbg.png";
import strawberry from "./assets/strawberry.png";
import orange from "./assets/orange.png";
import { FaAppleWhole } from "react-icons/fa6";
import { GiCutLemon } from "react-icons/gi";
import { GiStrawberry } from "react-icons/gi";
import { PiOrangeSliceLight } from "react-icons/pi";
import Card from "./components/Card.jsx";
import {useState} from "react";

export default function App() {
    const [selected, setSelected] = useState(0 );
    const handleClick = (key) => {
        console.log(key);
        setSelected(key);
    };

    const cards = [
        {
            index: 0,
            title: "APPLE",
            className: "bg-[#CC1918]",
            bgColor: "FF7070",
            textColor: "text-white",
            icon: <FaAppleWhole/>,
            img: apple,
            bgImg: apple,
        },
        {
            index: 1,
            title: "LEMON",
            className: "bg-[#FDFF8F]",
            bgColor: "FF7070",
            textColor: "text-white",
            icon: <GiCutLemon/>,
            img: lemon,
            bgImg: lemonbg,
        },
        {
            index: 2,
            title: "BERRY",
            className: "bg-[#FF2557]",
            bgColor: "FF7070",
            textColor: "text-white",
            icon: <GiStrawberry/>,
            img: strawberry,
            bgImg: strawberry,
        },
        {
            index: 3,
            title: "ORANGE",
            className: "bg-[#FFBA36]",
            bgColor: "FF7070",
            textColor: "text-white",
            icon: <PiOrangeSliceLight/>,
            img: orange,
            bgImg: orange,
        },
    ];

    return <div className="h-screen flex items-center justify-center">

        { cards.map((card, key) => {
        return (
            <div key={key} className= {` ${selected === key ? "w-[500px]" : "w-20" } h-96 cursor-pointer transition-all ease-out duration-[2000ms]` } onClick={()=>handleClick(key)}>
                <Card card = {card} index = {key} selected={selected}/>
        </div>
        )})}
    </div>
}
