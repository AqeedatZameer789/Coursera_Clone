import "./Navbar.css";
function Navbar(params) {
    return(
        <div >
            <nav className="navdiv" >
                <div className="div_topa_1">
                    <div className="div_topb_1">
                    <a href="#"> <img src="img1.svg" className="img_1" /></a>
                    <button className="btn_1"> Explore  <i class="i_1"></i></button>
                        <div className="div_mida_1">
                        <input  type="text" placeholder=" What do you want to learn?" className="input_1"></input>
                      <button className="btn_search_1" >
                      <img src="search.png"/></button>
                        </div>
                    </div>
                    <div className="div_bottom2_1">
          <a  href=""className="div_bottom_1">For Enterprise </a>
          <a  href=""className="div_bottom_1">For Students </a>
        
          <a className="a2_1"> Log in</a>
          <button className="btn2_1">Join For Free</button>
        </div>

                </div>
            </nav>
        </div>
    )
}
export default Navbar;