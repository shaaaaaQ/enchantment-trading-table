import { ReactNode } from "react";
import ReactModal from "react-modal"

const modalStyles = {
    content: {
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        margin: 'auto',
        width: "fit-content",
        height: "fit-content"
    },
};

function Modal({ isOpen, onRequestClose, children }: { isOpen: boolean, onRequestClose: () => void, children: ReactNode }) {
    return (
        <ReactModal
            isOpen={isOpen}
            style={modalStyles}
            onRequestClose={onRequestClose}
        >
            {children}
        </ReactModal>
    )
}

export default Modal