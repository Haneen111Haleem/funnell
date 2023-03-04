import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

function foot() {
    return (
      <>
        <div id="back" className='d-flex justify-content-center row'>
            <div className='ms-5 col-lg-3'>
                <img src='https://www.funnelll.com/assets/img/site/white-logo-sidebyside.png'
                height="30px"/>
                <p className='p-0 pt-4 fs-5 '>We are on a mission to make <br/> digital marketing accessible for<br/> anyone bold enough to start<br/></p>
                   <p className='fs-5'> Funnelll is a proud 500 Global,<br/> Flat6Labs, and Pioneer company<br/></p>
                   <p> © Copyright Funnelll<br/></p>
                   <p> Funnelll Inc.<br/>
                   251 Little Falls Drive, Wilmington, New <br/> Castle County, Delaware 19808, US</p>
            </div>
            <div className='col-lg-2'>
                <ul className='list'>
                    <h1 className='pb-3'>Apps & Integrations</h1>
                    <li className='mt-3'>Google Analytics</li>
                    <li className='mt-3'>Facebook Pixel &Ads</li>
                    <li className='mt-3'>Goofle Ads</li>
                    <li className='mt-3'>Google Search Console</li>
                    <li className='mt-3'>Slack</li>
                    <li className='mt-3'>Quora Ads</li>
                    <li className='mt-3'>Capterra PPC</li>
                    <li className='mt-3'>View All  </li>
                </ul>
            </div>
            <div className='col-lg-2'>
            <ul className='list'>
                    <h1 className=' pb-3'>Platforms</h1>
                    <li className='mt-3'>Shopify</li>
                    <li className='mt-3'>Wordpress</li>
                    <li className='mt-3'>ClickFunnels</li>
                    <li className='mt-3'>Squarespace</li>
                    <li className='mt-3'>Weblium</li>
                    <li className='mt-3'>Weebly</li>
                    <li className='mt-3'>Wix</li>
                    <li className='mt-3'>WooCommerce</li>
                </ul>
            </div>
            <div className='col-lg-2'>
            <ul className='list'>
                    <h1 className=' pb-3'>Company</h1>
                    <li className='mt-3'>About Us</li>
                    <li className='mt-3'>Job @ Funnell</li>
                    <li className='mt-3'>Blog</li>
                    <li className='mt-3'>Help Portal</li>
                    <li className='mt-3'>Road-map</li>
                </ul>
                <ul className='list'>
                    <h1 className='m-0 pb-3'>Policies</h1>
                    <li className='mt-3'>Privacy Policy</li>
                    <li className='mt-3'>Terms & Conditions</li>
                </ul>
            </div>
            <div className='col-lg-2'>
                <img src='https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=177607&theme=light' height="70" className=' pb-4'/>
                <p id='white'>For partnership enquiries contact</p>
                <a id='mail'className='text-center' href='#'>partnerships@funnelll.com</a>
            </div>
            

        </div>
      </>
    )
}
export default foot;
 