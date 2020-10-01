import React from 'react';
import styles from './contact.module.css';


const Contact = () => (
    <><div className={styles.container}>
  <h1 className={styles.brand}><span>Phoenix Web Design</span></h1>
  <div className={styles.wrapper}>
    {/* COMPANY INFORMATION */}
    <div className={styles.companyinfo}>
      <h3>Phoenix Web Design</h3>
      <ul>
        <li><i className="fa fa-road" /> 44 Main Street</li>
        <li><i className="fa fa-phone" /> (555) 555-5555</li>
        <li><i className="fa fa-envelope" /> test@phoenix.com</li>
      </ul>
    </div>
    {/* End .company-info */}
    {/* CONTACT FORM */}
    <div className={styles.contact}>
      <h3>E-mail Us</h3>
      <form id="contact-form">
        <p>
          <label>Name</label>
          <input type="text" name="name" id="name" required />
        </p>
        <p>
          <label>Company</label>
          <input type="text" name="company" id="company" />
        </p>
        <p>
          <label>E-mail Address</label>
          <input type="email" name="email" id="email" required />
        </p>
        <p>
          <label>Phone Number</label>
          <input type="text" name="phone" id="phone" />
        </p>
        <p className={styles.full}>
          <label>Message</label>
          <textarea name="message" rows={5} id="message" defaultValue={""} />
        </p>
        <p className={styles.full}>
          <button type="submit">Submit</button>
        </p>
      </form>
      {/* End #contact-form */}
    </div>
    {/* End .contact */}
  </div>
  {/* End .wrapper */}
</div>
{/* End .container */}
</>
);

export default Contact;