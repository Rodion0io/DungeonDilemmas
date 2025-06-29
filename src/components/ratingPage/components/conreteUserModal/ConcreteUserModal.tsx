import styles from "./concreteUserModal.module.css"

import ModalWindow from "../../../modalWindow/ModalWindow.tsx";

import userIcon from "../../../../assets/free-icon-user-456283.png"

interface Props{
    // props: UserOtherModel;
    modalActive: boolean;
    setModalActive: (modalActive: boolean) => void;
}

const ConcreteUserModal = ({ modalActive, setModalActive }: Props) => {

    return (
        <>
            <ModalWindow modalActive={modalActive} setModalActive={setModalActive}>
                <div className="card-container">

                </div>
            </ModalWindow>
        </>
    )
};

export default ConcreteUserModal;