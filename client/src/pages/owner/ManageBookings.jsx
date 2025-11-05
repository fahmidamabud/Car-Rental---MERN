import React, { useEffect, useState } from 'react'
import { dummyMyBookingsData, assets } from '../../assets/assets';
import Title from '../../components/Title';

const ManageBookings = () => {

  const currency= import.meta.env.VITE_CURRENCY;
  const [bookings, setBookings] = useState([]);

  const fetchOwnerBookings= async ()=>{
    setBookings([dummyMyBookingsData]);
  }

  useEffect(() => {
    fetchOwnerBookings()
  }, [])

  return (
    <div className='px-4 pt-10 md:px-10 w-full'>
      <Title title="Manage Bookings" subTitle="Manage and view all your car rental bookings in one place.Remove and add new cars"/>
        <div className='max-w-3xl w-full rounded-md overflow-hidden border border-borderColor mt-6'>
          
          <table className='w-full border-collapse text-left text-sm text-gray-600'>
            <thead className=' text-gray-500'>
              <tr>
                 <th className='p-3 font-medium'>Car</th>
                 <th className='p-3 font-medium max-,d:hidden'>Date Range</th>
                 <th className='p-3 font-medium'>Total</th>
                 <th className='p-3 font-medium max-md:hidden'>Payment</th>
                 <th className='p-3 font-medium'>Actions</th>
              </tr>
              </thead>
              <tbody>
                {bookings.map((booking,index)=>(
                  <tr key={index} className='border-t border-borderColor text-gray-500'>
                    <td className=''>
                      <img src={booking.car.image} alt="" className='h-12 w-12 rounded-md aspect-square object-cover'/>
                      <p className='font-medium max-md:hidden'>{booking.car.brand} {booking.car.model}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
          </table>
        </div>
    </div>
  )
}

export default ManageBookings