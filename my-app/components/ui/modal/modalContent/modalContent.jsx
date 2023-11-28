import Image from "next/image";
import styles from "../modal.module.css";
import image from "@/assets/images/assets/cam_hat.jpeg";
import swellConfig from "@/config/swell.config";
import swell from "swell-js";
import { useEffect, useRef, useState } from "react";
import LoadingDots from "@/components/loadingDots/loadingDots";

const ModalContent = ({ onClose, setShowModal }) => {
  const [value, setValue] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [buttonText, setButtonText] = useState("Confirm");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

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
      setLoading(true);
      // here you do what you need to do if is valid
      const data = Array.from(formData.keys()).reduce((acc, key) => {
        acc[key] = formData.get(key);
        return acc;
      }, {});
      try {
        // const id = localStorage.getItem("account-id");
        const id = await swell.account.get();
        if (!id) {
          await swell.init(swellConfig.storeId, swellConfig.publicKey);
          const response = await swell.account.create(data);
          // await localStorage.setItem("account-id", response.id);
          if (!response) {
            throw new Error(`Invalid response: ${response.status}`);
          } else {
            const sendEmail = await fetch("/api/coupon-code", {
              method: "post",
              body: new URLSearchParams(data),
            });
            if (sendEmail.status === 200) {
              setButtonText("Sent!");
              setLoading(false);
              setTimeout(() => {
                setButtonText("Confirm");
                setShowModal(false);
              }, 2000);
            }
          }
        } else {
          setLoading(false);
          setShowModal(false);
        }
      } catch (err) {
        console.error(err);
        alert(
          "We can't submit the form, please review your answers and try again."
        );
      }
    } else {
      setErrors(validationMessages);
    }
  };

  const handleClickOutside = (e) => {
    if (e.target.getAttribute("data-key")) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getError = (field) => errors[field];

  return (
    <div className={styles.container} data-key={"container"}>
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.close}>
          <span>+</span>
        </button>
        <div className={styles.wrapper}>
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <h1>Get 10% off your first order!</h1>
            <p>
              Add your email below to save 10% off your first order and be the
              first to hear about future savings and new merch
            </p>
            <div className={styles.formBox}>
              <div className={styles.row}>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    id="field_account.email"
                    required
                    placeholder="Email Address"
                    name="email"
                    onChange={handleChange}
                    className={styles.formField}
                    // value={""}
                  />
                  <label
                    htmlFor="field_account.email"
                    className={`${styles.formLabel} `}
                  >
                    Email Address
                  </label>
                  <span className={styles.error}>{getError("email")}</span>
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.formGroup}>
                  <button type="submit" className={styles.confirm}>
                    {loading ? <LoadingDots /> : buttonText}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className={styles.wrapper}>
          <Image src={image} width={400} height={480} alt="cam wearing hat" />
        </div>
      </div>
    </div>
  );
};

export default ModalContent;
