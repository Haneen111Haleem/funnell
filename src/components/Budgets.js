import 'bootstrap/dist/css/bootstrap.min.css';
import './Budgets.css';
import { Button } from 'react-bootstrap';

function budget() {
    return (
      <>
        <div className='text-center m-0 mt-5 p-0 pt-5'>
            <p id='p21'>Say Goodbye to wasted<br/> marketing budgets</p>
            <div className='d-flex justify-content-center'>
                <div>
                    <p className='hi col m-4 mt-0'><i class="fa-regular fa-circle-check m-2 "></i> Measure what matters</p>
                </div>
                <div>
                    <p className='hi col m-4 mt-0'><i class="fa-regular fa-circle-check m-2"></i>Visualize customer journeys</p>
                </div>
                <div>
                    <p className='hi col m-4 mt-0'><i class="fa-regular fa-circle-check m-2"></i>Answer your questions</p>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <Button id='btn1'>Get Started Free</Button>
                <Button id='btn2'>Get Demo</Button>
            </div>
            <div>
                <p id='p22' className='p-0 pt-3'>14 day free trial. No credit card needed.</p>
            </div>
        </div>
      </>
    )
}
export default budget;
