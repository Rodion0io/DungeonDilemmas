import "./modalWindow.css"


interface ModalWindowProps {
    modalActive: boolean;
    setModalActive: (modalActive: boolean) => void;
    children: React.ReactNode;
}

const ModalWindow = ({ modalActive, setModalActive, children }: ModalWindowProps) => {

    return (
        <>
            <div className={modalActive ? "modal active" : "modal"} onClick={() => setModalActive(false)}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>{children}</div>
            </div>
        </>
    )
};

export default ModalWindow;