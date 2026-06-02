import { useState } from "react";
import { twMerge } from "tailwind-merge";

export function RadioButton({ id, group, value, active, data, setActiveRadioButton, ...props }) {

    const [checked, setChecked] = useState(active);

    function handleCheck() {
        if (checked) return;
        else setChecked(true);
        setActiveRadioButton(id);
    }
    
    return (
        <div className="flex justify-center items-center w-1/3">
            <input
                className="hidden"
                type="radio"
                id={id}
                name={group}
                value={value}
                checked={active}
                onChange={handleCheck}
            />
            <label
                {...props} 
                htmlFor={id}
                className={twMerge(
                "bg-lk-3 text-2xl text-lk-6 w-full font-DigitalDiscoThin rounded-lg text-center",
                toggleCheckedStyling(checked)
                )}
            />
        </div>
    )
}

function toggleCheckedStyling(checked) {
    if (checked) return "bg-lk-1 font-DigitalDiscoRegular"
    else return "hover:bg-lk-4 transition-colors text-2xl font-DigitalDiscoThin";
}