import { Pupil } from "../pupil-list";
import Image from "next/image"

export default function Prize({ pupil }: { pupil: Pupil }) {
    const positionText = (position: number) => {
        if (position == 1) {
            return (
                <span>1<sup>st</sup> position</span>
            )
        }
        if (position == 2) {
            return (
                <span>2<sup>nd</sup> position</span>
            )
        }
        if (position == 3) {
            return (
                <span>3<sup>rd</sup> position</span>
            )
        }
    }

    const ageText = (group: string) => {
        return (
            <>
                <span>(</span>
                <span>{group}</span>
                <span>)</span>
            </>
        )
    }
    return (
        <div className="relative min-w-[1200px] min-h-[675px] overflow-clip">
            <Image src="/prize.png" width={1200} height={675} alt={pupil.name} />
            <div className="absolute top-[354px] left-1/4 text-[60px]">
                <h1>{pupil.name}</h1>
            </div>
            <div className="absolute top-[503px] left-[346px] text-[21px] text-yellow-200">
                <i>{positionText(pupil.position || 0)} {ageText(pupil.ageGroup || "")}</i>
            </div>
        </div>
    )
}