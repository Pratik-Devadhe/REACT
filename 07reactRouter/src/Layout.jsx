import  { Header , Footer} from "./Componenets";
import  {Outlet} from "react-router-dom";

function Layout(){
    return (
        <>
           <Header />
           <Outlet />
           <Footer />

        </>
    )
}

export default Layout;