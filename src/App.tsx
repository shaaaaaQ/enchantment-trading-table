import { atom, useAtom } from "jotai"
import TradeTable from "./components/TradeTable.tsx"
import ExportModal from "./components/ExportModal.tsx"

const isExportModalOpenAtom = atom(false)

function App() {
    const [isExportModalOpen, setIsExportModalOpen] = useAtom(isExportModalOpenAtom)
    return (
        <>
            <TradeTable />
            <div>
                <button onClick={() => setIsExportModalOpen(true)}>Export</button>
                <ExportModal isOpen={isExportModalOpen} onRequestClose={() => setIsExportModalOpen(false)} />
            </div>
        </>
    )
}

export default App
