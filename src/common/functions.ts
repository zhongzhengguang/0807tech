import { RefObject } from "react";

export function groupArr(array: any[], subGroupLength: number) {
    let index = 0;
    const newArray = [];
    while (index < array.length) {
        newArray.push(array.slice(index, (index += subGroupLength)));
    }
    return newArray;
}

export const scrollToRef = (
    ref: RefObject<HTMLDivElement>,
    customTop: number = 0
) => {
    if (ref.current) {
        window.scrollTo({
            top: ref.current.offsetTop - customTop,
            behavior: "smooth",
        });
    }
};
