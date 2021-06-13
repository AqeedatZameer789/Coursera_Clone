
import Card from "./Cards";
import BegineerData from "./BegineerData";

const Begineer = () =>(
    <> 
  {
  BegineerData.map((val)=>{
  
    return (
      <Card
        key={val.id}
        imgsrc={val.imgsrc}
        heading={val.heading}
        paragraph={val.paragraph}
        btn={val.btn}
        span1={val.span1}
        span2={val.span2}
        span3={val.span3}
        span4={val.span4}
        imgsrc_span={val.imgsrc_span}
        level_img={val.level_img}
        level_text={val.level_text}
        imgstar1={val.imgstar1}
        imgstar2={val.imgstar2}
        imgstar3={val.imgstar3}
        imgstar4={val.imgstar4}
        imgstar5={val.imgstar5}
      />
    );
    })}
    </>
  );
  export default Begineer;
  