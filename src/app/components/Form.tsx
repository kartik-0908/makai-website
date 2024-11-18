import React, { ChangeEvent, FormEvent, useState } from "react";
import styles from "./form.module.css";
import axios from "axios";

interface FormData {
  name: string;
  email: string;
  message: string;
  phone: string;
  organisation: string;
  location: string;
}

interface FormErrors {
  email: string;
}

function Form() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    phone: "",
    organisation: "",
    location: ""
  });

  const [errors, setErrors] = useState<FormErrors>({
    email: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email: string): boolean => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const emailIsValid = validateEmail(formData.email);

    if (!emailIsValid) {
      setErrors({ email: "Please enter a valid email address" });
      return;
    }

    setErrors({ email: "" });

    const makeWebHookURL =
      "https://hook.eu2.make.com/i4qmjmvdpicbvna4up9stls8liwsey6k";

    try {
      const response = await axios.post(makeWebHookURL, formData);
      if (response.status === 200) {
        setFormData({
          name: "",
          email: "",
          message: "",
          phone: "",
          organisation: "",
          location: ""
        });

        console.log("Saved");
      }
    } catch (error) {
      console.error("Error submitting form data", error);
    }
  };

  return (
    <div className={styles.contactSection}>
      <form onSubmit={handleSubmit}>
        <div className={styles.contactSection_form_group}>
          <label htmlFor="name">Name :</label>
          <input
            type="text"
            placeholder="Enter your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.contactSection_form_group}>
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            placeholder="Enter yourEmail"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {errors.email && <p>{errors.email}</p>}

        <div className={styles.contactSection_form_group}>
          <label htmlFor="phone">Phone :</label>
          <input
            type="text"
            name="phone"
            placeholder="Enter your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.contactSection_form_group}>
          <label htmlFor="organisation">Organization :</label>
          <input
            type="text"
            name="organisation"
            placeholder="Enter your Organization Name"
            value={formData.organisation}
            onChange={handleChange}
          />
        </div>

        <div className={styles.contactSection_form_group}>
          <label htmlFor="location">Location :</label>
          <input
            type="text"
            name="location"
            placeholder="Enter your Location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.contactSection_form_group}>
          <label htmlFor="message">Message :</label>
          <textarea
            placeholder="Enter any Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Form;
