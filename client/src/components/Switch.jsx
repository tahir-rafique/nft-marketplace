import { useState } from "react"

import classNames from "classnames"
// class name is imported as classNames from npm, ya ek NPM ka package hai jo class name ko manage karne me help karta hai Condiction kee base pe class name add karne me help karta hai

const Switch = () => {
    const [isSelected, setisSelected] = useState(false)
    return (
        <div
            onClick={() => setisSelected(!isSelected)}
            className={classNames("cursor-pointer flex items-center bg-muted w-17 h-9 mt-2 rounded-full transition-all duration-500 drop-shadow-xs", { 'bg-slate-300': isSelected })}>

            <span className={classNames('bg-inverted h-8 w-8 rounded-full transition-all duration-500', {
                'ml-9': isSelected,
            })}
            />

        </div>
    )
}

export default Switch;