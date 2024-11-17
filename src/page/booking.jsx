const booking= [
    {
        name: "John Doe",
        email: "johndoe@example.com",
        phone: "123-456-7890",
        startDate: "2024-01-01",
        endDate: "2024-01-05",
        roomType: "Deluxe Suite",
        notes: "Request for extra pillows"
    },
    {
        name: "Jane Smith",
        email: "janesmith@example.com",
        phone: "987-654-3210",
        startDate: "2024-02-10",
        endDate: "2024-02-15",
        roomType: "Standard Room",
        notes: "Vegetarian meals only"
    }
];


function Booking(){
    const token=localStorage.getItem("token");

    if(token == null){
        window.location.href = "/login"
    }


    return(
        <>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg my-10">
                    <thead>
                    <tr className="bg-fuchsia-900 text-white uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">Name</th>
                        <th className="py-3 px-6 text-left">Email</th>
                        <th className="py-3 px-6 text-left">Phone</th>
                        <th className="py-3 px-6 text-left">Start Date</th>
                        <th className="py-3 px-6 text-left">End Date</th>
                        <th className="py-3 px-6 text-left">Room Type</th>
                        <th className="py-3 px-6 text-left">Notes</th>
                    </tr>
                    </thead>
                    <tbody className="text-gray-700 text-sm font-light">

                    {booking.map((booking)=> (
                        <tr key={booking.email} className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-3 px-6 text-left whitespace-nowrap">{booking.name}</td>
                            <td className="py-3 px-6 text-left">{booking.email}</td>
                            <td className="py-3 px-6 text-left">{booking.phone}</td>
                            <td className="py-3 px-6 text-left">{booking.startDate}</td>
                            <td className="py-3 px-6 text-left">{booking.endDate}</td>
                            <td className="py-3 px-6 text-left">{booking.roomType}</td>
                            <td className="py-3 px-6 text-left">{booking.notes}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>


        </>
    )
}

export default Booking;