export default function debounce(
    callback: (...args: any) => void,
    wait: number,
) {
    let timeoutId: number | null = null;
    return (...args: any) => {
        if (timeoutId) window.clearTimeout(timeoutId);
        timeoutId = window.setTimeout(() => {
            callback(...args);
        }, wait);
    };
}
