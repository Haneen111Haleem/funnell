import 'bootstrap/dist/css/bootstrap.min.css';
import './Understand.css';
import Image from 'react-bootstrap/Image'

function understand() {
    return (
      <>
        <div className='container '>
            <div className='row justify-content-center align-items-center p-0 pt-5 m-0 mt-5"'>
                <div className='col-sm-6 '>
                <p id='p6' className='p-0 mt-3 ml-5'>UNDERSTAND</p>
                <p id='p7' className='p-0 ml-5'>Ask questions in plan English, get<br/> answers and insights</p>
                <p id='p8' className='p-0 ml-5'>Ask questions about your marketing performance in plain <br/>English with supporting data just a click away</p>
                <p id='pk' className='p-0 ml-5'> Funnell answers questions about:<br/>
                <ul>
                    <li className='pt-3'>Customer Journeys</li>
                    <li className='pt-1'>Channel and Campaign performance</li>
                    <li className='pt-1'>Location performance by Country and City</li>
                </ul>
                </p>
                </div>
                <div className='col-sm-6'>
                    <Image src='https://www.funnelll.com/assets/img/answers.png' className='img-fluid'/>
                </div>
            </div>
        </div>
      </>
    )
}
export default understand;
  