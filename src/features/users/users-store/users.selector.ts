import type { RootState } from "@users-types/types";
import type { TypedUseSelectorHook } from "react-redux";

import { useSelector } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector