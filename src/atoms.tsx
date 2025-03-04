import { withImmer } from "jotai-immer";
import { atomWithStorage } from "jotai/utils";

export const pricesAtom = withImmer(atomWithStorage<Record<string, number>>("enchantment-trading-table::prices", {}))