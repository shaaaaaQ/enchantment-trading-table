import enchantmentsData from "..//data/enchantments.json"
import { useAtom, useAtomValue } from "jotai"
import { isOnlyMaxLevelAtom, pricesAtom } from "../atoms"

type Enchantment = {
    name: string
    level: number
    treasure: boolean
}

const cheapestPrices = [5, 8, 11, 14, 17]

const romanNumerals = ["I", "II", "III", "IV", "V"]

function Item({ enchantment }: { enchantment: Enchantment }) {
    const [prices, setPrices] = useAtom(pricesAtom)
    const { name, level } = enchantment
    const romanNumeral = romanNumerals[level - 1]
    const cheapest = cheapestPrices[level - 1] * (enchantment.treasure ? 2 : 1)
    const price = prices[name + romanNumeral] || 0
    return (
        <tr>
            <td>{name}</td>
            <td>{romanNumeral}</td>
            <td>
                {cheapest}
            </td>
            <td>
                <input type="number" value={price || ""} className="w-14 text-end" onInput={(e) => setPrices((draft) => {
                    const value = parseInt(e.currentTarget.value) || 0
                    if (value <= 64 && value >= 0) draft[name + romanNumeral] = value
                })}></input>
            </td>
            <td>
                {cheapest === price ? "理論値" : cheapest > price ? "" : `+${price - cheapest}`}
            </td>
        </tr>
    )
}

function TradeTable() {
    const isOnlyMaxLevel = useAtomValue(isOnlyMaxLevelAtom)
    const enchantments = enchantmentsData.flatMap(enchantmentData => {
        const res = []
        for (let i = 1; i <= enchantmentData.max; i++) {
            if (isOnlyMaxLevel && i !== enchantmentData.max) continue
            res.push({
                name: enchantmentData.name,
                level: i,
                treasure: enchantmentData.treasure
            })
        }
        return res
    })
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
                {enchantments.map(enchantment => <Item key={enchantment.name + enchantment.level} enchantment={enchantment} />)}
            </tbody>
        </table>
    )
}

export default TradeTable