import { useDispatch } from "react-redux";
import type { AppDispatch } from "../interfaces";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
type DispatchFunc = () => AppDispatch;

export const useAppDispatch: DispatchFunc = useDispatch;
