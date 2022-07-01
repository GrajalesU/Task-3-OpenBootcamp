import PropTypes from "prop-types";
import Contact from "./Contact";

const ContactList = ({ contacts, set, remove }) => {
  return (
    <div >
      <table>
        <thead>
          <tr>
            <th className="name">Name</th>
            <th className="last-name">Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => {
            return (
              <Contact
                contact={contact}
                key={index}
                set={set}
                remove={remove}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  set: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default ContactList;
