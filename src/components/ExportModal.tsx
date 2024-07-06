import { useAtomValue } from "jotai"
import { pricesAtom } from "../atoms"
import Modal from "./Modal"
import Button from "./Button"

function ExportModal({ isOpen, onRequestClose }: { isOpen: boolean, onRequestClose: () => void }) {
    const prices = useAtomValue(pricesAtom)
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
        >
            <div className="p-3 bg-green-300 font-bold text-2xl">
                Export
            </div>
            <div className="p-5 flex gap-3">
                <input
                    type="text"
                    className="border-2 border-solid border-gray-500 rounded-md p-2"
                    value={JSON.stringify(prices)}
                    onFocus={(e) => e.target.select()}
                    readOnly
                />
                <Button onClick={() => navigator.clipboard.writeText(JSON.stringify(prices))}>
                    Copy
                </Button>
            </div>
        </Modal>
    )
}

export default ExportModal