export const circleImage = (imageCanvas: HTMLCanvasElement) => {
    const ctx = imageCanvas.getContext('2d');

    let cw, ch;

    cw = imageCanvas.width;
    ch = imageCanvas.height;

    ctx!.globalCompositeOperation = 'destination-in';
    ctx!.beginPath();
    ctx!.arc(cw / 2, ch / 2, ch / 2, 0, Math.PI * 2);
    ctx!.closePath();
    ctx!.fill();
};

export const getImageBlob = (canvasEl: HTMLCanvasElement): Promise<Blob> => {
    return new Promise((resolve) =>
        canvasEl.toBlob((image) => resolve(image as Blob))
    );
};
