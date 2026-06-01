import { Button } from "./Button"

export function Experience() {
    return (
        <div className="flex flex-col gap-3">
            <Tabs/>
            <section className="border-5 border-lk-3 rounded-xl w-full h-128">
            </section>
        </div>
    )
}

function Tabs() {
    return (
        <div className="flex w-full justify-around items-center px-1 border-7 border-lk-3 rounded-xl bg-lk-3">
            <Button variant="tabular">Work</Button>
            <Button variant="tabular">Education</Button>
            <Button variant="tabular">Projects</Button>
        </div>
    )
}