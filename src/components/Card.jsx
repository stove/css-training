

function Card( { card }) {
    return (
        <div className={"h-full relative"}>

            <div className={`h-full rounded-xl flex items-center justify-center ${card.className}`}>
                {/* eslint-disable-next-line react/prop-types */}
                <span className="text-white text-[1.5rem] absolute top-5 left-4">{card.icon}</span>
                {/* eslint-disable-next-line react/prop-types */}
                <h1 className={`${card.textColor} font-bold text-[2rem] rotate-90`}>{card.title}</h1>
            </div>

        </div>
    );
}

export default Card;
