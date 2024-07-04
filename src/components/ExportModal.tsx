import Modal from "./Modal"

function ExportModal({ isOpen, onRequestClose }: { isOpen: boolean, onRequestClose: () => void }) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
        >
            yoo
        </Modal>
    )
}

export default ExportModal