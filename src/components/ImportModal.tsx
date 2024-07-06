import { atom, useAtom, useSetAtom } from "jotai"
import { pricesAtom } from "../atoms"
import Modal from "./Modal"
import Button from "./Button"

const valueAtom = atom('')

function ImportModal({ isOpen, onRequestClose }: { isOpen: boolean, onRequestClose: () => void }) {
    const setPrices = useSetAtom(pricesAtom)
    const [value, setValue] = useAtom(valueAtom)
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
        >
            <div className="p-3 bg-green-300 font-bold text-2xl">
                Import
            </div>
            <div className="p-5 flex gap-3">
                <input
                    type="text"
                    className="border-2 border-solid border-gray-500 rounded-md p-2"
                    value={value}
                    onChange={(e) => setValue(e.currentTarget.value)}
                    onFocus={(e) => e.target.select()}
                    placeholder='ここに貼り付け'
                />
                <Button onClick={() => {
                    setPrices(JSON.parse(value))
                    onRequestClose()
                }}>Import</Button>
            </div>
        </Modal>
    )
}

export default ImportModal