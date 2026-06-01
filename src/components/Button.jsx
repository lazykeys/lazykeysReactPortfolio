export function Button({ variant = "primary", ...props })
{
    return <button {...props} className={`${getVariantStyles(variant)}`}/>
}

function getVariantStyles(variant)
{
    switch (variant) {
        case "primary":
            return "text-xl text-lk-6 bg-lk-3 hover:bg-lk-4 w-full font-DigitalDiscoRegular h-16 rounded transition-colors"
            break;
        case "tabular":
            return "text-2xl text-lk-6 bg-lk-3 hover:bg-lk-4 w-1/3 px-2 py-1 font-DigitalDiscoThin rounded transition-colors"
            break;
        case "svg":
            return "fill-lk-3 hover:fill-lk-4 transition-colors"
            break;
    }
}