const ButtonMain = ({ text, expIcon, toggleDropdown, onClick }) => {
    return (
        <div>
            <button
                onClick={(e) => {
                    if (onClick) onClick(e);
                    if (toggleDropdown) toggleDropdown(e);
                }}
                
                className={`navbtn-size  navbtn-border background-grad text-inverted px-5 py-2 cursor-pointer font-medium flex gap-2 items-center `}>
                {text}
                <img src={expIcon} alt="" />
            </button>
        </div>
    )
}

export default ButtonMain