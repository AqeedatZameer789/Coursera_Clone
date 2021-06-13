import "./MiddlePortion.css"
function Searches (params) {
    return(
        <div className="upr_search_div"> 
            <h4 className="h4_heading">Searches related to web development</h4>
       
        <div className="outer_searches_div">
            <div className="inner_search_div1">
                <a  href="#" className="a_search"> <span className="WD">web development</span> in python</a>
                <a  href="#" className="a_search"><span className="WD">web development</span> course </a>
                <a href="#" className="a_search"><span className="WD">web development</span>  with java spring framework</a>
                <a href="#" className="a_search">front-end <span className="WD">web development</span> </a>
            </div>
            <div href="#" className="inner_search_div1">
                <a href="#" className="a_search">full stack <span className="WD">web development</span> </a>
                <a href="#" className="a_search">full stack <span className="WD">web development</span> with angular</a>
                <a href="#" className="a_search">full stack <span className="WD">web development</span> with react</a>
                <a href="#" className="a_search">introduction to <span className="WD">web development</span></a>
            </div>
        </div>
        </div>
    )
}
export default Searches;