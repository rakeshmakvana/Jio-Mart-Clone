import offer1 from './offer-1.webp'
import offer2 from './offer-2.webp'
import './../AddsTop/AddsTop.css'

const AddsBottom = () => {

    return (
        <>
            <div className="container pb-5 pt-2">
                <div className="row">
                    <div className="of-img">
                        <img src={offer1} alt="ofr-img" />
                    </div>
                    <div className="of-img mt-5 mb-3">
                        <img src={offer2} alt="ofr-img" />
                    </div>
                </div>
            </div>

        </>
    )

}

export default AddsBottom