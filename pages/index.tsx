import { useRouter } from "next/dist/client/router"
import { useDispatch, useSelector } from "react-redux"
import { AppState } from "../src/redux/store"
import { decrement, increment } from "../src/redux/user/userSlice"

export default function Home() {
  const counter = useSelector((state: AppState ) => state.counter.value)
  const dispatch = useDispatch()
  const router = useRouter()
  return (
    <div >
      <h1>Counter</h1>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => router.push('/page2')}>Page2</button>
    </div>
  )
}
