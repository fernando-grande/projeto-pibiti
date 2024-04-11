// import Footer from "./Footer"
import { Header } from "../../components/Header"

export function MainLayout({children}: any) {
    return (
        <div className="grid grid-flow-row grid-rows-[60px_1fr] md:grid-rows-[120px_1fr]">
            <Header/>
            {children}
        </div>
    )
}