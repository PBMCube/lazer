export default function TouchAction (canvas, value = 'none') {

    canvas.style.msTouchAction = value;
    canvas.style['ms-touch-action'] = value;
    canvas.style['touch-action'] = value;

    return canvas;

}
