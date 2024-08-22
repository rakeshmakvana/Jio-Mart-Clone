import './Products.css'
import Slider from 'react-slick'
import gro1 from './gro-1.webp'
import gro2 from './gro-2.webp'
import gro3 from './gro-3.webp'
import gro4 from './gro-4.webp'
import gro5 from './gro-5.webp'
import gro6 from './gro-6.webp'
import gro7 from './gro-7.webp'
import gro8 from './gro-8.webp'
import gro9 from './gro-9.webp'
import foo1 from './foo-1.webp'
import foo2 from './foo-2.webp'
import foo3 from './foo-3.webp'
import foo4 from './foo-4.webp'
import foo5 from './foo-5.webp'
import foo6 from './foo-6.webp'
import foo7 from './foo-7.webp'
import foo8 from './foo-8.webp'
import foo9 from './foo-9.webp'
import mob1 from './mob-1.webp'
import mob2 from './mob-2.webp'
import mob3 from './mob-3.webp'
import mob4 from './mob-4.webp'
import mob5 from './mob-5.webp'
import mob6 from './mob-6.webp'
import mob7 from './mob-7.webp'
import mob8 from './mob-8.webp'
import mob9 from './mob-9.webp'
import ele1 from './ele-1.webp'
import ele2 from './ele-2.webp'
import ele3 from './ele-3.webp'
import ele4 from './ele-4.webp'
import ele5 from './ele-5.webp'
import ele6 from './ele-6.webp'
import ele7 from './ele-7.webp'
import ele8 from './ele-8.webp'
import ele9 from './ele-9.webp'
import mak1 from './mak-1.webp'
import mak2 from './mak-2.webp'
import mak3 from './mak-3.jpg'
import mak4 from './mak-4.webp'
import mak5 from './mak-5.webp'
import mak6 from './mak-6.webp'
import mak7 from './mak-7.webp'
import mak8 from './mak-8.webp'
import mak9 from './mak-9.webp'
import hel1 from './hel-1.webp'
import hel2 from './hel-2.webp'
import hel3 from './hel-3.webp'
import hel4 from './hel-4.webp'
import hel5 from './hel-5.webp'
import hel6 from './hel-6.webp'
import hel7 from './hel-7.webp'
import hel8 from './hel-8.webp'
import hel9 from './hel-9.webp'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { getAsync } from '../../services/Action/productAction'

const Products = () => {

    const { products } = useSelector(state => state.productReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let Cooking = products.filter((product) => {
        if (product.subcategory == 'Cooking') {
            return product
        }
    })

    let Food = products.filter((product) => {
        if (product.subcategory == 'Food') {
            return product
        }
    })

    let Mobile = products.filter((product) => {
        if (product.subcategory == 'Mobile') {
            return product
        }
    })

    let Tech = products.filter((product) => {
        if (product.subcategory == 'Tech') {
            return product
        }
    })

    let Makeup = products.filter((product) => {
        if (product.subcategory == 'Makeup') {
            return product
        }
    })

    let Health = products.filter((product) => {
        if (product.subcategory == 'Health') {
            return product
        }
    })

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    };

    const handleDetails = (id) => {
        navigate('/product-details', { state: { id } })
    }

    useEffect(() => {
        dispatch(getAsync());
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">

                    <div className='d-flex flex-wrap w-100 mb-2'>
                        <div className='pr-ct w-100 mb-3'>
                            <h1>
                                Cooking Essentials
                            </h1>
                        </div>
                        <div className='w-100 d-flex flex-wrap w-100 p-0 mb-3'>
                            <div className="col-2 pr-img px-2">
                                <img src={gro1} alt="gro1" />
                            </div>
                            <div className="col-2 pr-img px-2">
                                <img src={gro2} alt="gro2" />
                            </div>
                            <div className="col-2 pr-img px-2">
                                <img src={gro3} alt="gro3" />
                            </div>
                            <div className="col-2 pr-img px-2">
                                <img src={gro4} alt="gro4" />
                            </div>
                            <div className="col-2 pr-img px-2">
                                <img src={gro5} alt="gro5" />
                            </div>
                            <div className="col-2 pr-img px-2">
                                <img src={gro6} alt="gro6" />
                            </div>
                        </div>
                        <div className='pr-ct w-100 my-3'>
                            <h1>
                                Pantry Essentials
                            </h1>
                        </div>
                        <div className="w-100 p-0 my-3">
                            <div className="slider-container">
                                <Slider {...settings}>
                                    {Cooking.length > 0 ?
                                        Cooking.map((data) => {
                                            return (<div style={{ width: 200 }}>
                                                <button className='pr-btn' onClick={() => handleDetails(data.id)}>
                                                    <button>
                                                        <img src={data.imageUrl} alt="img" className='mb-3' />
                                                        <h4 className='mb-3'>{data.name}</h4>
                                                        <h3 className='mb-3'>
                                                            ₹{data.price}.00
                                                        </h3>
                                                    </button>
                                                    <button className='w-100 text-center px-2'>
                                                        <button>Add</button>
                                                    </button>
                                                </button>
                                            </div>)
                                        })
                                        :
                                        <div className='col-12 my-3 text-left'>
                                            <h2 className='text-danger '>
                                                No Product Available.
                                            </h2>
                                        </div>
                                    }
                                </Slider>
                            </div>
                        </div>
                        <div className='w-100 p-0 d-flex flex-wrap my-4'>
                            <div className="col-4 pr-img px-2">
                                <img src={gro7} alt="gro7" />
                            </div>
                            <div className="col-4 pr-img px-2">
                                <img src={gro8} alt="gro8" />
                            </div>
                            <div className="col-4 pr-img px-2">
                                <img src={gro9} alt="gro9" />
                            </div>
                        </div>
                    </div>

                    <div className='d-flex flex-wrap w-100 mt-3 mb-2'>
                        <div className='pr-ct w-100 mb-3'>
                            <h1>
                                Food & Beverages
                            </h1>
                        </div>
                        <div className='w-100 d-flex flex-wrap w-100 p-0 mb-3'>
                            <div className="col-2 pr-img px-2">
                                <img src={foo1} alt="foo1" />
                            </div>
                            <div className="col-2 pr-img px-2">
                                <img src={foo2} alt="foo2" />
                            </div>
                            <div className="col-2 pr-img px-2">
                                <img src={foo3} alt="foo3" />
                            </div>
                            <div className="col-2 pr-img px-2">
                                <img src={foo4} alt="foo4" />
                            </div>
                            <div className="col-2 pr-img px-2">
                                <img src={foo5} alt="foo5" />
                            </div>
                            <div className="col-2 pr-img px-2">
                                <img src={foo6} alt="foo6" />
                            </div>
                        </div>
                        <div className='pr-ct w-100 my-3'>
                            <h1>
                                Food Favourites
                            </h1>
                        </div>
                        <div className="w-100 p-0 my-3">
                            <div className="slider-container">
                                <Slider {...settings}>
                                    {Food.length > 0 ?
                                        Food.map((data) => {
                                            return (<div style={{ width: 200 }}>
                                                <button className='pr-btn' onClick={() => handleDetails(data.id)}>
                                                    <button>
                                                        <img src={data.imageUrl} alt="img" className='mb-3' />
                                                        <h4 className='mb-3'>{data.name}</h4>
                                                        <h3 className='mb-3'>
                                                            ₹{data.price}.00
                                                        </h3>
                                                    </button>
                                                    <button className='w-100 text-center px-2'>
                                                        <button>Add</button>
                                                    </button>
                                                </button>
                                            </div>)
                                        })
                                        :
                                        <div className='col-12 my-3 text-left'>
                                            <h2 className='text-danger '>
                                                No Product Available.
                                            </h2>
                                        </div>
                                    }
                                </Slider>
                            </div>
                        </div>
                        <div className='w-100 p-0 d-flex flex-wrap my-4'>
                            <div className="col-4 pr-img px-2">
                                <img src={foo7} alt="foo7" />
                            </div>
                            <div className="col-4 pr-img px-2">
                                <img src={foo8} alt="foo8" />
                            </div>
                            <div className="col-4 pr-img px-2">
                                <img src={foo9} alt="foo9" />
                            </div>
                        </div>
                    </div>

                    <div className='d-flex flex-wrap w-100 mt-3 mb-2'>
                        <div className='pr-ct w-100 mb-3'>
                            <h1>
                                Mobiles & Accessories
                            </h1>
                        </div>
                        <div className='w-100 d-flex flex-wrap w-100 p-0 mb-3'>
                            <div className="col-2 pr-img px-2">
                                <img src={mob1} alt="mob1" />
                            </div>
                            <div className="col-2 pr-img px-2">
                                <img src={mob2} alt="mob2" />
                            </div>
                            <div className="col-2 pr-img px-2">
                                <img src={mob3} alt="mob3" />
                            </div>
                            <div className="col-2 pr-img px-2">
                                <img src={mob4} alt="mob4" />
                            </div>
                            <div className="col-2 pr-img px-2">
                                <img src={mob5} alt="mob5" />
                            </div>
                            <div className="col-2 pr-img px-2">
                                <img src={mob6} alt="mob6" />
                            </div>
                        </div>
                        <div className='pr-ct w-100 my-3'>
                            <h1>
                                Trending Smartphones
                            </h1>
                        </div>
                        <div className="w-100 p-0 my-3">
                            <div className="slider-container">
                                <Slider {...settings}>
                                    {Mobile.length > 0 ?
                                        Mobile.map((data) => {
                                            return (<div style={{ width: 200 }}>
                                                <button className='pr-btn' onClick={() => handleDetails(data.id)}>
                                                    <button>
                                                        <img src={data.imageUrl} alt="img" className='mb-3' />
                                                        <h4 className='mb-3'>{data.name}</h4>
                                                        <h3 className='mb-3'>
                                                            ₹{data.price}.00
                                                        </h3>
                                                    </button>
                                                    <button className='w-100 text-center px-2'>
                                                        <button>Add</button>
                                                    </button>
                                                </button>
                                            </div>)
                                        })
                                        :
                                        <div className='col-12 my-3 text-left'>
                                            <h2 className='text-danger '>
                                                No Product Available.
                                            </h2>
                                        </div>
                                    }
                                </Slider>
                            </div>
                        </div>
                        <div className='w-100 p-0 d-flex flex-wrap my-4'>
                            <div className="col-4 pr-img px-2">
                                <img src={mob7} alt="mob7" />
                            </div>
                            <div className="col-4 pr-img px-2">
                                <img src={mob8} alt="mob8" />
                            </div>
                            <div className="col-4 pr-img px-2">
                                <img src={mob9} alt="mob9" />
                            </div>
                        </div>
                    </div>

                    <div className='d-flex flex-wrap w-100 mt-3 mb-2'>
                        <div className='pr-ct w-100 mb-3'>
                            <h1>
                                Electronics & Appliances
                            </h1>
                        </div>
                        <div className='w-100 d-flex flex-wrap w-100 p-0 mb-3'>
                            <div className="col-2 pr-img px-2">
                                <img src={ele1} alt="ele1" />
                            </div>
                            <div className="col-2 pr-img px-2">
                                <img src={ele2} alt="ele2" />
                            </div>
                            <div className="col-2 pr-img px-2">
                                <img src={ele3} alt="ele3" />
                            </div>
                            <div className="col-2 pr-img px-2">
                                <img src={ele4} alt="ele4" />
                            </div>
                            <div className="col-2 pr-img px-2">
                                <img src={ele5} alt="ele5" />
                            </div>
                            <div className="col-2 pr-img px-2">
                                <img src={ele6} alt="ele6" />
                            </div>
                        </div>
                        <div className='pr-ct w-100 my-3'>
                            <h1>
                                Tech Favourites
                            </h1>
                        </div>
                        <div className="w-100 p-0 my-3">
                            <div className="slider-container">
                                <Slider {...settings}>
                                    {Tech.length > 0 ?
                                        Tech.map((data) => {
                                            return (<div style={{ width: 200 }}>
                                                <button className='pr-btn' onClick={() => handleDetails(data.id)}>
                                                    <button>
                                                        <img src={data.imageUrl} alt="img" className='mb-3' />
                                                        <h4 className='mb-3'>{data.name}</h4>
                                                        <h3 className='mb-3'>
                                                            ₹{data.price}.00
                                                        </h3>
                                                    </button>
                                                    <button className='w-100 text-center px-2'>
                                                        <button>Add</button>
                                                    </button>
                                                </button>
                                            </div>)
                                        })
                                        :
                                        <div className='col-12 my-3 text-left'>
                                            <h2 className='text-danger '>
                                                No Product Available.
                                            </h2>
                                        </div>
                                    }
                                </Slider>
                            </div>
                        </div>
                        <div className='w-100 p-0 d-flex flex-wrap my-4'>
                            <div className="col-4 pr-img px-2">
                                <img src={ele7} alt="ele7" />
                            </div>
                            <div className="col-4 pr-img px-2">
                                <img src={ele8} alt="ele8" />
                            </div>
                            <div className="col-4 pr-img px-2">
                                <img src={ele9} alt="ele9" />
                            </div>
                        </div>
                    </div>

                    <div className='d-flex flex-wrap w-100 mt-3 mb-2'>
                        <div className='pr-ct w-100 mb-3'>
                            <h1>
                                Makeup & Beauty Essentials
                            </h1>
                        </div>
                        <div className='w-100 d-flex flex-wrap w-100 p-0 mb-3'>
                            <div className="col-2 pr-img px-2">
                                <img src={mak1} alt="mak1" />
                            </div>
                            <div className="col-2 pr-img px-2">
                                <img src={mak2} alt="mak2" />
                            </div>
                            <div className="col-2 pr-img px-2">
                                <img src={mak3} alt="mak3" />
                            </div>
                            <div className="col-2 pr-img px-2">
                                <img src={mak4} alt="mak4" />
                            </div>
                            <div className="col-2 pr-img px-2">
                                <img src={mak5} alt="mak5" />
                            </div>
                            <div className="col-2 pr-img px-2">
                                <img src={mak6} alt="mak6" />
                            </div>
                        </div>
                        <div className='pr-ct w-100 my-3'>
                            <h1>
                                Beauty & Personal Care
                            </h1>
                        </div>
                        <div className="w-100 p-0 my-3">
                            <div className="slider-container">
                                <Slider {...settings}>
                                    {Makeup.length > 0 ?
                                        Makeup.map((data) => {
                                            return (<div style={{ width: 200 }}>
                                                <button className='pr-btn' onClick={() => handleDetails(data.id)}>
                                                    <button>
                                                        <img src={data.imageUrl} alt="img" className='mb-3' />
                                                        <h4 className='mb-3'>{data.name}</h4>
                                                        <h3 className='mb-3'>
                                                            ₹{data.price}.00
                                                        </h3>
                                                    </button>
                                                    <button className='w-100 text-center px-2'>
                                                        <button>Add</button>
                                                    </button>
                                                </button>
                                            </div>)
                                        })
                                        :
                                        <div className='col-12 my-3 text-left'>
                                            <h2 className='text-danger '>
                                                No Product Available.
                                            </h2>
                                        </div>
                                    }
                                </Slider>
                            </div>
                        </div>
                        <div className='w-100 p-0 d-flex flex-wrap my-4'>
                            <div className="col-4 pr-img px-2">
                                <img src={mak7} alt="mak7" />
                            </div>
                            <div className="col-4 pr-img px-2">
                                <img src={mak8} alt="mak8" />
                            </div>
                            <div className="col-4 pr-img px-2">
                                <img src={mak9} alt="mak9" />
                            </div>
                        </div>
                    </div>

                    <div className='d-flex flex-wrap w-100 mt-3'>
                        <div className='pr-ct w-100 mb-3'>
                            <h1>
                                Health & Wellness
                            </h1>
                        </div>
                        <div className='w-100 d-flex flex-wrap w-100 p-0 mb-3'>
                            <div className="col-2 pr-img px-2">
                                <img src={hel1} alt="hel1" />
                            </div>
                            <div className="col-2 pr-img px-2">
                                <img src={hel2} alt="hel2" />
                            </div>
                            <div className="col-2 pr-img px-2">
                                <img src={hel3} alt="hel3" />
                            </div>
                            <div className="col-2 pr-img px-2">
                                <img src={hel4} alt="hel4" />
                            </div>
                            <div className="col-2 pr-img px-2">
                                <img src={hel5} alt="hel5" />
                            </div>
                            <div className="col-2 pr-img px-2">
                                <img src={hel6} alt="hel6" />
                            </div>
                        </div>
                        <div className='pr-ct w-100 my-3'>
                            <h1>
                                Health & Wellness Picks
                            </h1>
                        </div>
                        <div className="w-100 p-0 my-3">
                            <div className="slider-container">
                                <Slider {...settings}>
                                    {Health.length > 0 ?
                                        Health.map((data) => {
                                            return (<div style={{ width: 200 }}>
                                                <button className='pr-btn' onClick={() => handleDetails(data.id)}>
                                                    <button>
                                                        <img src={data.imageUrl} alt="img" className='mb-3' />
                                                        <h4 className='mb-3'>{data.name}</h4>
                                                        <h3 className='mb-3'>
                                                            ₹{data.price}.00
                                                        </h3>
                                                    </button>
                                                    <button className='w-100 text-center px-2'>
                                                        <button>Add</button>
                                                    </button>
                                                </button>
                                            </div>)
                                        })
                                        :
                                        <div className='col-12 my-3 text-left'>
                                            <h2 className='text-danger '>
                                                No Product Available.
                                            </h2>
                                        </div>
                                    }
                                </Slider>
                            </div>
                        </div>
                        <div className='w-100 p-0 d-flex flex-wrap my-4'>
                            <div className="col-4 pr-img px-2">
                                <img src={hel7} alt="hel7" />
                            </div>
                            <div className="col-4 pr-img px-2">
                                <img src={hel8} alt="hel8" />
                            </div>
                            <div className="col-4 pr-img px-2">
                                <img src={hel9} alt="hel9" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )

}

export default Products