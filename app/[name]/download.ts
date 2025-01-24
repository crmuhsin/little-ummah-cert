import { Pupil } from "../pupil-list";

export const downloadCanvas = (canvasRef: React.RefObject<HTMLCanvasElement | null>, pupil: Pupil): void => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const dataUrl = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = `${pupil.name}.png`;
    link.click();
};