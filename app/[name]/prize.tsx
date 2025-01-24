import { useRef, useEffect } from "react";
import { Pupil } from "../pupil-list";
import { downloadCanvas } from "./download";

export default function Prize({ pupil }: { pupil: Pupil }) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (!pupil.name || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        if (!ctx) return;

        // Helper functions for position and age text
        const positionText = (position: number) => {
            if (position === 1) return { main: "1", sup: "st" };
            if (position === 2) return { main: "2", sup: "nd" };
            if (position === 3) return { main: "3", sup: "rd" };
            return { main: "", sup: "" };
        };

        const ageText = (group: string) => (group ? `(${group})` : "");

        const renderSuperscript = (text: string, x: number, y: number, fontSize: number, color: string) => {
            ctx.font = `${fontSize}px Arial`;
            ctx.fillStyle = color;
            ctx.fillText(text, x, y);
        };

        // Load the image
        const image = new Image();
        image.src = "/prize.png";
        image.onload = () => {
            canvas.width = 1200;
            canvas.height = 675;

            ctx.drawImage(image, 0, 0);

            // Render pupil's name
            ctx.font = "60px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

            const nameX = 600;
            const nameY = 404;
            ctx.fillText(pupil.name, nameX, nameY);

            // Render position and age group text
            ctx.font = "italic 25px Arial";
            ctx.fillStyle = "yellow";
            ctx.textAlign = "left";

            const positionX = 406;
            const positionY = 523;

            const position = positionText(pupil.position || 0);
            const age = ageText(pupil.ageGroup || "");

            if (position.main) {
                // Render the main part of the position
                ctx.fillText(position.main, positionX, positionY);

                // Render the superscript part slightly smaller and above
                const supFontSize = 21; // Superscript font size
                const supOffsetX = ctx.measureText(position.main).width + 2; // Offset based on main text width
                const supOffsetY = positionY - 7; // Slightly above the baseline
                renderSuperscript(position.sup, positionX + supOffsetX, supOffsetY, supFontSize, "yellow");
            }

            // Render age group text after the position
            const positionTextWidth =
                ctx.measureText(`${position.main}${position.sup}`).width;

            ctx.font = "italic 21px Arial"; // Italic style for age group
            ctx.fillText(
                ` ${age}`,
                positionX + positionTextWidth + 10, // Offset by the width of the position text
                positionY
            );
        };
    }, [pupil.name, pupil.ageGroup, pupil.position]);

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
