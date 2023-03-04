import 'bootstrap/dist/css/bootstrap.min.css';
import './Data.css';
import Image from 'react-bootstrap/Image'

function data() {
    return (
      <>
        <div className='container big '>
            <div className='row justify-content-center align-items-center '>

              

                <div className='col-md-6 p-5 order-lg-2'>
                    <p id='p18' className='p-0 mt-3 '>DISTRIBUTE DATA</p>
                    <p id='p19' className='p-0 '>3 Clicks to Distribute Your <br/> Customers' Data And Events Across <br/> Your Marketing Stack</p>
                    <p id='p20' className='p-0 '>Set up once then copy your tracking across your marketing <br/> stack with 3 clicks, Send Events to: <br/>
                    <ul>
                        <li className='pt-3'>Facebook Pixel / Ads</li>
                        <li className='pt-1'>Google Ads</li>
                        <li className='pt-1'>Slack, Quora, Captera, and more ...</li>
                    </ul>
                    </p>
                </div>

                <div className='col-md-6 order-lg-1'>
                    <Image src='https://www.funnelll.com/assets/img/site/integrations.png' className='img-fluid rounded ' height="400" width="auto" />
                </div>
             
            </div>
        </div>
      </>
    )
}
export default data;
 