import { useState } from "react";

export default function BookingForm(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    emailconf: "",
    address: "",
    phone: "",
    people: "",
    comment: "",
  });

  function submitHandler(event) {
    event.preventDefault();
    console.log(event.target.people.value);
    const enteredName = event.target.name.value;
    const enteredEmail = event.target.email.value;
    const enteredEmailConf = event.target.emailconf.value;
    const enteredAddress = event.target.address.value;
    const enteredPhone = event.target.phone.value;
    const enteredPeople = event.target.people.value;
    const enteredComment = event.target.comment.value;

    const formData = {
      name: enteredName,
      email: enteredEmail,
      emailconf: enteredEmailConf,
      address: enteredAddress,
      phone: enteredPhone,
      people: enteredPeople,
      comment: enteredComment,
    };
    //props.onSubmitHandler(formData);
    props.addFormData(formData);
  }
  console.log("this is formData out", formData);

  return (
    <form method="POST" onSubmit={submitHandler}>
      <label htmlFor="name upper-space">Name</label>
      <input name="name" id="name" type="text" />
      <label htmlFor="email">Email</label>
      <input name="email" id="email" type="email" />
      <label htmlFor="emailconf">Confirm Email</label>
      <input name="emailconf email" id="emailconf" type="text" />
      <label htmlFor="address">Address</label>
      <input name="address" id="address" type="text" />
      <label htmlFor="phone">Phone</label>
      <input name="phone" id="phone" type="number" />
      <h4>CALENDAR HERE</h4>
      <label htmlFor="people">people</label>

      <select id="people" name="people">
        <option disabled={true}>how many people including you?</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <br />

      <label htmlFor="comment">Extra info</label>
      <textarea id="comment" name="comment" rows="4" cols="50"></textarea>
      <br />

      <button>Book</button>
    </form>
  );
}
