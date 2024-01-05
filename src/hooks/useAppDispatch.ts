import { useDispatch } from "react-redux";
import type { AppDispatch } from "../app/store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
type DispatchFunc = () => AppDispatch;

const useAppDispatch: DispatchFunc = useDispatch;

export default useAppDispatch;
