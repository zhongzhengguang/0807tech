import { useState } from "react";

export function useHeader() {
    const [showList, setShowList] = useState("");
    return {
        showList,
        setShowList,
    };
}
