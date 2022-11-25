import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const BookingModal = ({ modalDetails }) => {
    const { user } = useContext(AuthContext)

    const handleBooking = (event) => {
        event.preventDefault()
        const form = event.target;
        const buyerName = form.buyerName.value;
        const buyerEmail = form.buyerEmail.value;
        const productPrice = form.productPrice.value;
        const productName = form.productName.value;
        const phone = form.phone.value;
        const meetLocation = form.meetLocation.value;

        const buyer = {
            buyerName,
            buyerEmail,
            productName,
            productPrice,
            phone,
            meetLocation,
            productID: modalDetails._id
        }

        fetch(`${process.env.REACT_APP_api_url}/buyers`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(buyer)
        })
            .then(res => res.json())
            .then(data => console.log(data))

    }




    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleBooking} className="card-body">
                        <div className="form-control mb-3">
                            <input name='buyerName' type="text" defaultValue={user?.displayName} className="input input-bordered" placeholder='Your name' required />
                        </div>
                        <div className="form-control mb-3">
                            <input name='buyerEmail' required type="email" placeholder="Full name" disabled defaultValue={user?.email} className="input input-bordered" />
                        </div>
                        <div className="form-control mb-3">
                            <input name='productName' disabled defaultValue={modalDetails?.carName}
                                required type="text" readOnly className="input input-bordered" />
                        </div>
                        <div className="form-control mb-3">
                            <input name='productPrice' disabled defaultValue={modalDetails?.resalePrice} required type="email" placeholder="Email address" className="input input-bordered" />
                        </div>
                        <div className="form-control mb-3">
                            <input name='phone' required type="number" placeholder="Phone" className="input input-bordered" />
                        </div>
                        <div className="form-control mb-3">
                            <input name='meetLocation' required type="text" placeholder="Meet location" className="input input-bordered" />
                        </div>
                        <div className="form-control mb-3 mt-6">
                            <button className="btn btn-accent uppercase">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;