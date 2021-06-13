
import Card from "./Cards";
import EnglishData from "./EnglishData";

const English = () =>(
    <> 
  {
  EnglishData.map((val)=>{
  
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
      />
    );
    })}
    </>
  );
  export default English;
  