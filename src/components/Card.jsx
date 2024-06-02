

function Card( { card, index, selected}) {
    return (
        <div className={"h-full relative"}>

            <div className={`h-full rounded-xl flex items-center justify-center ${card.className}`}>

                <span className="text-white text-[1.5rem] absolute top-5 left-4">{card.icon}</span>

                <h1 className={`${card.textColor} ${selected === index ? "rotate-0 text-[8rem]"  : "rotate-90 text-[2rem]"} font-bold text-[2rem] transition-all ease-in-out duration-[300ms]`}>{card.title}</h1>
            </div>

        </div>
    );
}

export default Card;
