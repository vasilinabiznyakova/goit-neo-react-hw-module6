import { useDispatch } from "react-redux";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css";

const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.contact}>
      <div className={css.info}>
        <p className={css.row}>
          <FaUser className={css.icon} />
          <span>{name}</span>
        </p>

        <p className={css.row}>
          <FaPhoneAlt className={css.icon} />
          <span>{number}</span>
        </p>
      </div>

      <button
        type="button"
        className={css.button}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
