export const onloadImg = (img, fn) => {
    img.onload = () => fn;
};