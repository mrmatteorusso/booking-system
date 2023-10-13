import { MongoClient } from "mongodb";
export default function AdminDashboard(props) {
  console.log("this is props", props);
  const test = ["apple", "pear", "banana"];
  console.log(test);
  const percentage = props.bookings.reduce(
    (acc, curr) => acc + +curr.people,
    0
  );

  function deleteHandler(id) {
    console.log(id);
  }

  return (
    <>
      <h1>Admin Dashboard</h1>
      <div>
        <h4>How many so far</h4>
      </div>

      <div className="w-36 h-36 relative">
        <div className="w-full h-full rounded-full border-8 border-gray-300 absolute"></div>
        <div
          className="w-full h-full rounded-full border-8 border-green-400 absolute"
          style={{
            clipPath: `polygon(0 0, 100% 0, 100% 100%, 0 100%)`,
            transform: `rotate(${
              percentage < 1
                ? 0
                : percentage <= 15
                ? (percentage / 15) * 360
                : 360
            }deg)`,
          }}
        ></div>
        <div className="flex items-center justify-center h-full relative z-10">
          {percentage <= 15 ? `${percentage}/15` : "15/15"}
        </div>
      </div>

      <div>
        <div className="p-4">
          <h4 className="text-lg font-semibold">
            TOTAL bookings = {props.bookings.length}
            TOTAL booked places ={" "}
            {
              //loop through the objects and from each object grab people and sum it up to the previous
              props.bookings.reduce((acc, curr) => acc + +curr.people, 0)
            }
          </h4>
          <table className="min-w-full table-auto mt-4">
            <thead>
              <tr>
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Phone</th>
                <th className="px-4 py-2">Address</th>
                <th className="px-4 py-2">People</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Comment</th>
                <th className="px-4 py-2"></th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {props.bookings
                ? props.bookings.map((customer, key) => (
                    <tr key={key} className="odd:bg-gray-100 even:bg-white">
                      <td className="px-4 py-2">{key + 1}</td>
                      <td className="px-4 py-2">{customer.name}</td>
                      <td className="px-4 py-2">{customer.email}</td>
                      <td className="px-4 py-2">{customer.phone}</td>
                      <td className="px-4 py-2">{customer.address}</td>
                      <td className="px-4 py-2">{customer.people}</td>
                      <td className="px-4 py-2">DATE</td>
                      <td className="px-4 py-2">{customer.comment}</td>
                      <td className="px-4 py-2">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                          EDIT
                        </button>
                        <button
                          onClick={() => deleteHandler(customer.id)}
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        >
                          DELETE
                        </button>
                      </td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://mrmatteorusso:pass@cluster0.fzf4mee.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp"
  );
  const db = client.db();
  const bookingCollection = db.collection("bookings");
  const bookings = await bookingCollection.find({}).toArray();
  client.close();

  return {
    props: {
      bookings: bookings.map((booking) => ({
        name: booking.name,
        email: booking.email,
        phone: booking.phone,
        address: booking.address,
        people: booking.people,
        comment: booking.comment ? booking.comment : "",
        id: booking._id.toString(),
      })),
    },
    //revalidate: 10, //seconds
  };
}
