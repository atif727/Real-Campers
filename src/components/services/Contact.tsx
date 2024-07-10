import "./contact.css";
const Contact = () => {
  return (
    <div className="flex justify-center items-center mt-20">
      <form className="w-2/3">
        <p className="text-4xl text-center mb-5">Contact Us</p>
        <input
          name="name"
          type="text"
          className="feedback-input"
          placeholder="Name"
        />
        <input
          name="email"
          type="text"
          className="feedback-input"
          placeholder="Email"
        />
        <textarea
          name="text"
          className="feedback-input"
          placeholder="Comment"
        ></textarea>
        <input type="submit" value="SUBMIT" />
      </form>
    </div>
  );
};

export default Contact;
