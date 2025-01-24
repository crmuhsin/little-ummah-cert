import { Pupil } from "../pupil-list";
import Image from "next/image"

export default function Active({ pupil }: { pupil: Pupil }) {

    return (
        <div className="relative min-w-[1200px] min-h-[675px] overflow-clip">
            <Image src="/active.png" width={1200} height={675} alt={pupil.name} />
            <div className="absolute top-[294px] left-1/4 text-[60px]">
                <h1 className="text-black">{pupil.name}</h1>
            </div>
        </div>
    )
}