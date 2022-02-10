export function add(a: number, b: number){
    return Math.floor(a + b);
}

export function subtract(a: number, b: number){
    return `${a} - ${b}`;
}

export function lerp(min: number, max: number, t: number){
    const lerpVal = min + (max - min) * t
    const factor = Math.random() > 0.5 ? 1 : -1;
    if(0.3 < lerpVal && lerpVal < 0.35) return lerpVal + (factor * 0.13);
    return lerpVal;
}