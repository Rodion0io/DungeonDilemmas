import {useState} from "react";

export const useModal = () => {
    const [modalActive, setModalActive] = useState<boolean>(false);

    const handleActive = (): void => {
        setModalActive((prev) => prev ? false: true);
    }

    return { modalActive, handleActive };
}