
const ButtonSecondary = ({downArrow,text, onClick}) => {
    return (
        <div>
            <button onClick={onClick} className="navbtn-size border border-grd text-main navbtn-border px-4 py-2 cursor-pointer font-medium flex items-center gap-1">
                {text}
                <img src={downArrow} alt="" />
            </button>
        </div>
    )
}

export default ButtonSecondary;