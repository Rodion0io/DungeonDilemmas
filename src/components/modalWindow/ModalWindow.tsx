import styles from "./modalWindow.module.css"

import type {ModalWindowProps} from "../../@types/types.ts"

interface Props{
    props: ModalWindowProps;
}

const ModalWindow = ({ props }: Props) => {

    return (
        <>
            <div className={props.modalActive ? `${styles.modal} ${styles.active}}` : `${styles.modal}`} onClick={() => props.setModalActive(false)}>
                <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>{props.children}</div>
            </div>
        </>
    )
};

export default ModalWindow;