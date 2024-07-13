import { Outlet } from "react-router-dom"
import HeaderTop from "../HeaderTop"
import Navbar from "../Navbar"
import Footer from "../ui/Footer"

const MainLayout = () => {
    return (
        <>
            <HeaderTop />
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />

        </>
    )
}

export default MainLayout