import react from "react";
import img from "./image1.jpg"

function Mybootrap(){
 const a ='https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg';
    return(
        <div className="container">
            <div className="col-sm-12">
                <b>uhid</b>
                <input type="text" className="form-control" />
                <b>name</b>
                <input type="text" className="form-control" />
                <b>raju</b>
                <input type="text" className="form-control" />
                  <b>yerar</b>
                <input type="text" className="form-control" />
            </div>
            <br></br>
            <div>
                <img src={img} width="500px" alt="raju"/>
                <img src="./image 2.jpg" width={300}/>
                <img src={a} width={300}/>

            </div>
        </div>
    )
}
export default Mybootrap;