import PropTypes from "prop-types";
import { Contact as ContactModel } from "../models/contact.class";

const Contact = ({ contact, remove, set }) => {
  return (
    <tr>
      <td className="name">{contact.name}</td>
      <td className="last-name">{contact.lastName}</td>
      <td>{contact.email}</td>
      <td>
        {contact.isConnected ? (
          <div onClick={() => set(contact)} className="connected" />
        ) : (
          <div onClick={() => set(contact)} className="disconnected" />
        )}
      </td>
      <td onClick={() => remove(contact)} className="trash">
        🗑️
      </td>
    </tr>
  );
};

Contact.propTypes = {
  contact: PropTypes.instanceOf(ContactModel),
  set: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default Contact;
