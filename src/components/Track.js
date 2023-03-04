import 'bootstrap/dist/css/bootstrap.min.css';
import './Track.css';
import Image from 'react-bootstrap/Image'

function track() {
    return (
      <>
        <div className='container '>
            <div className='row justify-content-center align-items-center p-0 pt-5 m-0 mt-5"'>
                <div className='col-sm-6 '>
                <p id='p15' className='p-0 mt-3 ml-5'>NO-CODE TRACKING</p>
                <p id='p16' className='p-0 ml-5'>Automatically Track Page Views,<br/> Clicks, and Scrolls or Set Up Your<br/> Custom Tracking Visually</p>
                <p id='p17' className='p-0 ml-5'>Add the Funnell code to your website to automatically track <br/> page views, clicks, and scrolls <br/>
                <ul>
                    <li className='pt-3'>Works Cross-domains</li>
                    <li className='pt-1'>Single Page Application ready</li>
                    <li className='pt-1'>Automatically symcs data with Google Analytics</li>
                </ul>
                </p>
                </div>
                <div className='col-sm-6'>
                    <Image src='https://ucarecdn.com/67bbea6c-de76-4160-a4ae-207bfe7b0c3d/track-actions.png' className='img-fluid rounded'/>
                </div>
            </div>
        </div>
      </>
    )
}
export default track;
  