import 'bootstrap/dist/css/bootstrap.min.css';
import './Hero.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function hero() {
    return (
      <>
        <div className='text-center pt-2 twoo'>
            <p id='p2'> Over 2,000 Founders and Marketers get Better Results with Funnell</p>
            <Container>
                <Row>
                    <Col xs={6} md={3} ><img src='https://www.funnelll.com/assets/img/site/500Startupslogo.png' className='images w-25 mb-4'/></Col>
                    <Col  xs={6} md={3} ><img src='https://www.funnelll.com/assets/img/site/saasmantra.png' className='images w-75 mt-4'/></Col>
                    <Col xs={6} md={3} ><img src='https://www.funnelll.com/assets/img/site/gameball.png' className='images w-75 mt-3'/></Col>
                    <Col xs={6} md={3} ><img src='https://www.funnelll.com/assets/img/site/vivelo.png' className='images w-50 mt-4'/></Col>
                </Row><br/>
                <Row>
                    <Col xs={6} md={3} ><img src='https://www.funnelll.com/assets/img/site/funding.png' className='images'/></Col>
                    <Col xs={6} md={3} ><img src='https://www.funnelll.com/assets/img/site/daveparker.png' className='images mt-3'/></Col>
                    <Col xs={6} md={3} ><img src='https://www.funnelll.com/assets/img/site/frozenlemon.png' className='images mt-3'/></Col>
                    <Col xs={6} md={3} ><img src='https://www.funnelll.com/assets/img/site/fundraisingforacause.png' className='images mt-3'/></Col>
                </Row>
            </Container>
        </div>
      </>
    )
}
export default hero;
  