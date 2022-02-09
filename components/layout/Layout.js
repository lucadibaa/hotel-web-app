import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = (props) => {
    // CFC291
    return (
        <>
            <Navbar noBanner={props.noBanner} />
            <div className="bg-snow overflow-x-hidden">
                {props.children}
            </div>
            {
                !props.woFooter &&
                <Footer />
            }
        </>
    )
}

export default Layout
