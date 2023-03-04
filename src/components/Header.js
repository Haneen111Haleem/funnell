
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function header() {
    return (
      <>
        <div id='one' className='m-0 mt-5 p-0 pt-3 text-center'>
            <h1 className=' mt pow'>Powerful Analytics,<br/> <span> Made Easy </span></h1> 
            <p id='ex' >Get the most out of your marketing budget. No coding or complex dashboards needed!</p>
            <div className='d-flex justify-content-center'>
                <Button id='btn1'>Get Started Free</Button>
                <Button id='btn2'>Get Demo</Button>
            </div>
            <p id='p1'>14 day free trial. No credit card needed</p>
            
               <div className="videoWrapper">
                <iframe className= 'rounded' width="560" height="315"
                src="https://www.youtube.com/embed/dEdbZ43R_p8?rel=0"
                title="video"
                allowFullScreen 
                ></iframe>
            </div>
        </div>

      </>
    )
}
export default header;
  