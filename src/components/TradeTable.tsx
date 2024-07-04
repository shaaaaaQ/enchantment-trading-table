import { atomWithStorage } from "jotai/utils"
import enchantments from "..//data/enchantments.json"
import { withImmer } from "jotai-immer"
import { useAtom } from "jotai"

type Enchantment = {
    item: string
    name: string
    max: number
    treasure: boolean
}

const cheapestPrices = [5, 8, 11, 14, 17]

const romanNumerals = ["I", "II", "III", "IV", "V"]

const pricesAtom = withImmer(atomWithStorage<Record<string, number>>("enchantment-trading-table::prices", {}))

function Item({ enchantment }: { enchantment: Enchantment }) {
    const [prices, setPrices] = useAtom(pricesAtom)
    const cheapest = cheapestPrices[enchantment.max - 1] * (enchantment.treasure ? 2 : 1)
    const price = prices[enchantment.name] || 0
    return (
        <tr>
            <td>{enchantment.name}</td>
            <td>{romanNumerals[enchantment.max - 1]}</td>
            <td>
                {cheapest}
            </td>
            <td>
                <input type="number" value={price || ""} className="w-14 text-end" onInput={(e) => setPrices((draft) => {
                    const value = parseInt(e.currentTarget.value) || 0
                    if (value <= 64 && value >= 0) draft[enchantment.name] = value
                })}></input>
            </td>
            <td>
                {cheapest === price ? "理論値" : cheapest > price ? "" : `+${price - cheapest}`}
            </td>
        </tr>
    )
}

function TradeTable() {
    return (
        <table className="mx-auto my-10 [&_td]:p-2 [&_td]:border-solid [&_td]:border-sky-200 [&_td]:border-2">
            <thead className="bg-sky-200 text-center">
                <tr>
                    <td>エンチャント名</td>
                    <td>レベル</td>
                    <td>最安値</td>
                    <td>価格</td>
                    <td>判定</td>
                </tr>
            </thead>
            <tbody className="bg-sky-100">
                {enchantments.map(enchantment => <Item key={enchantment.name} enchantment={enchantment} />)}
            </tbody>
        </table>
    )
}

export default TradeTable