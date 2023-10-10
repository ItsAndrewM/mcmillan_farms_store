import Layout from "@/components/ui/layout/layout";
import layoutStyles from "@/components/ui/layout/layout.module.css";
import contactUsStyles from "@/styles/contactUs.module.css";
import utilStyles from "@/styles/utils.module.css";
import { useState, useEffect } from "react";
import Head from "next/head";

const Page = () => {
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = e.target.checkValidity();
    const form = e.target;
    const formData = new FormData(e.currentTarget);
    const validationMessages = Array.from(formData.keys()).reduce(
      (acc, key) => {
        acc[key] = form.elements[key].validationMessage;
        return acc;
      },
      {}
    );
    if (isValid) {
      // here you do what you need to do if is valid
      const data = Array.from(formData.keys()).reduce((acc, key) => {
        acc[key] = formData.get(key);
        return acc;
      }, {});
      try {
        const response = await fetch("/api/contact-us", {
          method: "post",
          body: new URLSearchParams(data),
        });
        if (!response.ok) {
          throw new Error(`Invalid response: ${response.status}`);
        }
        alert("Thanks for contacting us, we will get back to you soon!");
      } catch (err) {
        console.error(err);
        alert("We can't submit the form, try again later?");
      }
    } else {
      setErrors(validationMessages);
    }
  };

  const getError = (field) => errors[field];

  return (
    <Layout>
      <Head>
        <title>McMillan Farms | Contact us</title>
        <meta
          name="description"
          content="McMillan Farms | If you'd like to get in touch, please send us a message below or email us at information@mcmillanfarms.ca. Full Name. Email Address. Subject."
          key="desc"
        />
      </Head>
      <section className={layoutStyles.section}>
        <div className={contactUsStyles.wrapper}>
          <div className={contactUsStyles.textWrapper}>
            <h1>Get in touch</h1>
            <p>
              If youd like to get in touch, please send us a message below or
              email us at{" "}
              <span className={utilStyles.underline}>
                information@mcmillanfarms.com
              </span>
            </p>
          </div>
          <form
            className={`${contactUsStyles.container}`}
            onSubmit={handleSubmit}
            noValidate
          >
            <div className={`${contactUsStyles.row}`}>
              <div
                className={`${contactUsStyles.name} ${contactUsStyles.block}`}
              >
                <label htmlFor="frm-fullName">Full Name*</label>
                <input
                  id="frm-fullName"
                  type="text"
                  name="fullName"
                  autoComplete="given-name"
                  placeholder="Enter full name"
                  required
                  className={
                    getError("fullName") ? contactUsStyles.invalid : ""
                  }
                />
                <span className={contactUsStyles.error}>
                  {getError("fullName")}
                </span>
              </div>
              <div
                className={`${contactUsStyles.email} ${contactUsStyles.block}`}
              >
                <label htmlFor="frm-email">Email*</label>
                <input
                  id="frm-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Enter email address"
                  required
                  className={getError("email") ? contactUsStyles.invalid : ""}
                />
                <span className={contactUsStyles.error}>
                  {getError("email")}
                </span>
              </div>
            </div>
            <div className={`${contactUsStyles.row}`}>
              <div
                className={`${contactUsStyles.phone} ${contactUsStyles.block}`}
              >
                <label htmlFor="frm-phone">Phone*</label>
                <input
                  id="frm-phone"
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  placeholder="Enter phone number"
                  required
                  className={getError("phone") ? contactUsStyles.invalid : ""}
                />
                <span className={contactUsStyles.error}>
                  {getError("phone")}
                </span>
              </div>
              <div
                className={`${contactUsStyles.phone} ${contactUsStyles.block}`}
              >
                <label htmlFor="frm-subject">Subject*</label>
                <select
                  id="frm-subject"
                  name="subject"
                  required
                  defaultValue={"Select a subject"}
                  className={`${utilStyles.lightText} ${
                    getError("subject") ? contactUsStyles.invalid : ""
                  }`}
                >
                  <option
                    disabled={true}
                    value="Select a subject"
                    className={utilStyles.lightText}
                  >
                    Select a subject
                  </option>
                  <option value="general inquiry">General Inquiry</option>
                  <option value="school booking inquiry">School Booking</option>
                  <option value="donation inquiry">Donation Inquiry</option>
                  <option value="Feedback/suggestion">
                    Feedback or suggestion
                  </option>
                  <option value="problem/issue">
                    Report a problem or issue
                  </option>
                  <option value="collaboration/partnership">
                    Interest in collaboration or partnership
                  </option>
                  <option value="birthday">Birthday Party Inquiry</option>
                </select>
                <span className={contactUsStyles.error}>
                  {getError("subject")}
                </span>
              </div>
            </div>
            <div
              className={`${contactUsStyles.message} ${contactUsStyles.block}`}
            >
              <label htmlFor="frm-message">Message*</label>
              <textarea
                id="frm-message"
                rows="6"
                name="message"
                required
                className={getError("message") ? contactUsStyles.invalid : ""}
              ></textarea>
              <span className={contactUsStyles.error}>
                {getError("message")}
              </span>
            </div>
            <div
              className={`${contactUsStyles.button} ${contactUsStyles.block}`}
            >
              <button type="submit" className={contactUsStyles.buttonInput}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Page;
