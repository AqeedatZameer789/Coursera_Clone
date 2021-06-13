import "./Navbar.css";
function Navbar_bottom(params) {
    
    return(
        <div>
            <nav className="navbar_btm_style">
                <div className="navbar_btm_div">
                    <a  className="a1_styl" href="#">All</a>
                    <a className="a_styl" href="#">Guided Projects</a>
                    <a className="a_styl" href="#">Degree & Certificates </a>
                </div>
                <hr className= "hr_navstyle"/>
            </nav>
        </div>
    )
}
export default Navbar_bottom;