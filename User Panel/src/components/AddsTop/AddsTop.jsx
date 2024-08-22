import { Carousel } from "react-bootstrap";
import add1 from './add-1.webp';
import add2 from './add-2.jpg';
import add3 from './add-3.webp';
import add4 from './add-4.webp';
import add5 from './add-5.webp';
import add6 from './add-6.webp';
import add7 from './add-7.webp';
import add8 from './add-8.webp';
import add9 from './add-9.webp';
import add10 from './add-10.webp';
import add11 from './add-11.jpg';
import add12 from './add-12.jpg';
import offer from './offer.webp'
import './AddsTop.css'

const AddsTop = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <Carousel fade className="mb-4">
                    <Carousel.Item interval={2000}>
                        <div className="row">
                            <div className="col-4">
                                <img
                                    className="d-block w-100 cr-img"
                                    src={add1}
                                    alt="First slide"
                                />
                            </div>
                            <div className="col-4">
                                <img
                                    className="d-block w-100"
                                    src={add2}
                                    alt="Second slide"
                                />
                            </div>
                            <div className="col-4">
                                <img
                                    className="d-block w-100"
                                    src={add3}
                                    alt="Third slide"
                                />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <div className="row">
                            <div className="col-4">
                                <img
                                    className="d-block w-100"
                                    src={add4}
                                    alt="Fourth slide"
                                />
                            </div>
                            <div className="col-4">
                                <img
                                    className="d-block w-100"
                                    src={add5}
                                    alt="Fifth slide"
                                />
                            </div>
                            <div className="col-4">
                                <img
                                    className="d-block w-100"
                                    src={add6}
                                    alt="Sixth slide"
                                />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <div className="row">
                            <div className="col-4">
                                <img
                                    className="d-block w-100"
                                    src={add7}
                                    alt="Seventh slide"
                                />
                            </div>
                            <div className="col-4">
                                <img
                                    className="d-block w-100"
                                    src={add8}
                                    alt="Eighth slide"
                                />
                            </div>
                            <div className="col-4">
                                <img
                                    className="d-block w-100"
                                    src={add9}
                                    alt="Ninth slide"
                                />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <div className="row">
                            <div className="col-4">
                                <img
                                    className="d-block w-100"
                                    src={add10}
                                    alt="Tenth slide"
                                />
                            </div>
                            <div className="col-4">
                                <img
                                    className="d-block w-100"
                                    src={add11}
                                    alt="Eleventh slide"
                                />
                            </div>
                            <div className="col-4">
                                <img
                                    className="d-block w-100"
                                    src={add12}
                                    alt="Twelfth slide"
                                />
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
                <div className="of-img mt-5">
                    <img src={offer} alt="ofr-img" />
                </div>
            </div>
        </div>
    );
}

export default AddsTop;
