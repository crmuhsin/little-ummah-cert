import { useRef, useEffect } from "react";
import { Pupil } from "../pupil-list";
import { downloadCanvas } from "./download";

export default function Active({ pupil }: { pupil: Pupil }) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        // Guard clause: Wait until pupil.name is defined
        if (!pupil.name || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        if (!ctx) return; // Ensure the context is available

        // Load the image
        const image = new Image();
        image.src = "/active.png"; // Replace with your image path
        image.onload = () => {
            // Set canvas dimensions to match the image
            canvas.width = 1200; // Match your Image component width
            canvas.height = 675; // Match your Image component height

            // Draw the image on the canvas
            ctx.drawImage(image, 0, 0);

            // Set text styles and position
            ctx.font = "60px Arial"; // Match text-[60px]
            ctx.fillStyle = "black"; // Match text-black
            ctx.textAlign = "center"; // Centers text horizontally
            ctx.textBaseline = "middle"; // Centers text vertically

            // Position text at top-[294px] and left-1/4
            const x = 600; // left-1/4
            const y = 344; // top-[294px]

            // Draw the text
            ctx.fillText(pupil.name, x, y);
        };
    }, [pupil.name]); // Re-run the effect when pupil.name changes

    return (
        <div className="flex flex-col justify-center items-center gap-2">
            <canvas ref={canvasRef} />
            <button
                onClick={() => downloadCanvas(canvasRef, pupil)}
                className="print:hidden w-full md:w-64 flex bg-lime-500 text-hc-black text-xl px-4 py-2 rounded-lg justify-center items-center hover:bg-lime-300 hover:text-slate-600"
            >
                <span>Download</span>
            </button>
        </div>
    );
}
