import styles from "@/styles/product.module.css";
import layoutStyles from "@/components/ui/layout/layout.module.css";
import utilStyles from "@/styles/utils.module.css";

const Loading = () => {
  return (
    <section className={`${layoutStyles.section} ${utilStyles.gap2}`}>
      <div className={styles.wrapper}>
        <div
          style={{
            minWidth: "475px",
            width: "100%",
            maxWidth: "575px",
            maxHeight: "575px",
            minHeight: "475px",
            backgroundColor: "lightgrey",
          }}
        ></div>
        <div style={{ minWidth: "529px", maxWidth: "529px" }}>
          <div
            className={styles.container}
            style={{
              borderBottom: "2px solid var(--cream)",
              paddingBottom: "1em",
            }}
          >
            <div
              className={utilStyles.uppercase}
              style={{
                minWidth: "100%",
                minHeight: "40px",
                borderRadius: "25px",
                backgroundColor: "lightgrey",
              }}
            ></div>
            <div
              className={utilStyles.uppercase}
              style={{
                minWidth: "33%",
                minHeight: "40px",
                borderRadius: "25px",
                backgroundColor: "lightgrey",
              }}
            ></div>
            <p
              style={{
                minWidth: "100px",
                minHeight: "30px",
                borderRadius: "25px",
                backgroundColor: "lightgrey",
              }}
            ></p>
            <small
              style={{
                minWidth: "225px",
                minHeight: "25px",
                borderRadius: "25px",
                backgroundColor: "lightgrey",
              }}
            ></small>
          </div>
          <div className={styles.container}>
            <small
              className={`${utilStyles.uppercase} ${utilStyles.bold}`}
              style={{
                minWidth: "75px",
                minHeight: "25px",
                borderRadius: "25px",
                backgroundColor: "lightgrey",
              }}
            ></small>
            <small
              className={`${utilStyles.uppercase} ${utilStyles.bold}`}
              style={{
                minWidth: "75px",
                minHeight: "25px",
                backgroundColor: "lightgrey",
              }}
            ></small>

            <small
              className={`${utilStyles.uppercase} ${utilStyles.bold}`}
              style={{
                minWidth: "150px",
                minHeight: "25px",
                borderRadius: "25px",
                backgroundColor: "lightgrey",
              }}
            ></small>
          </div>
          <div className={styles.container}>
            <button
              style={{
                minWidth: "100%",
                minHeight: "40px",
                borderRadius: "15px",
                backgroundColor: "lightgrey",
                border: "none",
              }}
            >
              {<span></span>}
            </button>
          </div>
          <div className={styles.container}></div>
          <div className={`${styles.container} `}>
            <p
              className={styles.headline}
              style={{
                minWidth: "110px",
                minHeight: "30px",
                borderRadius: "25px",
                backgroundColor: "lightgrey",
                border: "none",
              }}
            ></p>
            <div
              style={{
                minWidth: "100%",
                minHeight: "180px",
                borderRadius: "25px",
                backgroundColor: "lightgrey",
              }}
            ></div>
          </div>
          <div className={styles.container}>
            <div>
              <details className={`${styles.accordian}`}>
                <summary>
                  <div
                    style={{
                      minWidth: "175px",
                      maxWidth: "175px",
                      minHeight: "25px",
                      backgroundColor: "lightgrey",
                      borderRadius: "25px",
                      zIndex: "999",
                    }}
                  ></div>
                </summary>
              </details>
              <div className={styles.content}>
                <div className={styles.textWrapper}>
                  <div>
                    <p style={{ fontWeight: "bold" }}>Processing Time</p>
                    <p>Standard Shipping (Canada)</p>
                    <p>
                      You can pick up your order from our farm at #1 3690 Berard
                      Rd, Kelowna, BC V1W 4A91. Please select the local pickup
                      option at checkout and we will contact you to arrange a
                      convenient time. Canada Wide Shipping We ship across
                      Canada using Canada Post. Orders will likely be shipped
                      within 1-2 business days of ordering. All shipping times
                      are estimated to be 3-10 business days, depending on your
                      in Canada you&apos;re located.
                    </p>
                  </div>
                  <div>
                    <p style={{ fontWeight: "bold" }}>International Shipping</p>
                    <p>
                      Currently, we&apos;re only offering local pick up and
                      Canada wide shipping.
                    </p>
                  </div>
                  <div>
                    <p style={{ fontWeight: "bold" }}>Shipping rates</p>
                    <p>
                      Rates for many items are a flat rate depending on your
                      location in Canada.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loading;
