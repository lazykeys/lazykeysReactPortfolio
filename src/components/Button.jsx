export function Button({ variant = "primary", ...props })
{
    return <button 
        {...props} 
        className={
            `${getVariantStyles(variant)} 
            text-2xl 
            text-lk-6 
            bg-lk-3 
            hover:bg-lk-4 
            rounded 
            transition-colors`
        }
    />
}

function getVariantStyles(variant)
{
    switch (variant) {
        case "primary":
            return "font-DigitalDiscoRegular h-16"
            break;
        case "tabular":
            return "w-1/3 px-2 py-1 font-DigitalDiscoThin"
            break;
    }
}