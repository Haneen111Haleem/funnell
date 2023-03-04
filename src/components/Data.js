import 'bootstrap/dist/css/bootstrap.min.css';
import './Data.css';
import Image from 'react-bootstrap/Image'

function data() {
    return (
      <>
        <div className='container big '>
            <div className='row justify-content-center align-items-center '>

              

                <div className='col-md-6 p-5 order-lg-2'>
                    <p id='p9' className='p-0 mt-3 '>BRING DATA TOGETHER</p>
                    <p id='p10' className='p-0 '>Visualize Your Customers' <br/> Journeys on Your Website</p>
                    <p id='p11' className='p-0 '>Analyze users across a series of actions. See how many <br/> people start or finish a sequence — and where they drop <br/> off. Get access to data about:<br/>
                    <ul>
                        <li className='pt-3'>Device Performance across stages</li>
                        <li className='pt-1'>Page performance by stage</li>
                        <li className='pt-1'>Marketing Performance by stage</li>
                    </ul>
                    <p>And More...</p>
                    </p>
                </div>

                <div className='col-md-6 order-lg-1'>
                    <Image src='https://www.funnelll.com/assets/img/funnel.png' className='img-fluid rounded ' height="400" width="auto" />
                </div>
             
            </div>
        </div>
      </>
    )
}
export default data;
  