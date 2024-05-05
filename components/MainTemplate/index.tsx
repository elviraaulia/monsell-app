import Home from "@/app/page"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}
const MainTemplate = (props: Props) => {
    return (
        <div className="w-full min-h-dvh">
            {/* navbar area */}
            <div className="w-full bg-gradient-to-r from-red-500 to-red-900 py-5 border-b-[10px] border-black">
                <div className="col-md-8 d-flex flex-wrap text-center py-3">
                    <strong className="text-white p-8 uppercase ">Home</strong>
                    <strong className="text-white p-8 uppercase ">Shop</strong>
                    <strong className="text-white p-8 uppercase ">Pokemon</strong>
                    <strong className="text-white p-8 uppercase ">Chart</strong>
                </div>
            </div>
            {/* end navbar */}

            {/* search bar */}
            {/* end search bar */}
            {props.children}
        </div>
    )
}
export default MainTemplate