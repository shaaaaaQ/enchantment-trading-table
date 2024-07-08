import { atom, useAtom } from "jotai"
import TradeTable from "./components/TradeTable.tsx"
import ExportModal from "./components/ExportModal.tsx"
import ImportModal from "./components/ImportModal.tsx"
import Button from "./components/Button.tsx"
import { isOnlyMaxLevelAtom } from "./atoms.tsx"

const isImportModalOpenAtom = atom(false)
const isExportModalOpenAtom = atom(false)

function App() {
    const [isOnlyMaxLevel, setIsOnlyMaxLevel] = useAtom(isOnlyMaxLevelAtom)
    const [isImportModalOpen, setIsImportModalOpen] = useAtom(isImportModalOpenAtom)
    const [isExportModalOpen, setIsExportModalOpen] = useAtom(isExportModalOpenAtom)
    return (
        <div className="mx-auto w-fit p-4">
            <input type="checkbox" onChange={(e) => setIsOnlyMaxLevel(e.target.checked)} checked={isOnlyMaxLevel} />
            <TradeTable />
            <div className="flex gap-4 justify-end">
                <Button onClick={() => setIsImportModalOpen(true)}>Import</Button>
                <ImportModal isOpen={isImportModalOpen} onRequestClose={() => setIsImportModalOpen(false)} />
                <Button onClick={() => setIsExportModalOpen(true)}>Export</Button>
                <ExportModal isOpen={isExportModalOpen} onRequestClose={() => setIsExportModalOpen(false)} />
            </div>
        </div>
    )
}

export default App
