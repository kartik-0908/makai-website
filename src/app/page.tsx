"use client";

import styles from "./page.module.css";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import { useRef } from "react";
import Form from "./components/Form";

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.par}>
      <Navbar scrollToContact={scrollToContact} />
      <div className={styles.page}>
        <section>
          <div className={styles.sec1_container}>
            <div className={styles.sec1_container_t}>
              <h2>
                Intelligence That Cares - <br />
                Early Intervention, Better Outcomes
              </h2>
              <button onClick={scrollToContact}>Request a Demo &gt; </button>
              <img src="./logo1.png" alt="logo" />
            </div>
            <div className={styles.sec1_video}>
              <video
                preload="metadata"
                title="Health-AI"
                loop
                playsInline
                muted
                autoPlay
                style={{
                  width: "100%",
                  maxWidth: "100%",
                  height: "auto",
                  maxHeight: "60vh",
                  objectFit: "cover",
                }}
              >
                <source type="video/mp4" src="./videos/MakaiCareVideo.mp4" />
              </video>
            </div>
          </div>
        </section>
      </div>
      <section className={styles.sec3}>
        <div className={styles.sec3_container}>
          <div className={styles.sec3_header_wrapper}>
            <h1>Automate Workflow for Faster Patient Care</h1>
            <p>
              Reduce clinical burnout, increase patient satisfaction, and ensure
              best practices in patient care
            </p>
          </div>
          <div className={styles.sec3_features}>
            <div className={styles.sec3_features_tab}>
              <div className={styles.sec3_features_tab_button_wrapper}>
                <div className={styles.sec3_features_tab_single}>
                  <div className={styles.tab_button_icon_left}>
                    <img
                      src="./feature1_left_icon.svg"
                      alt="icon"
                      className={styles.tab_icon_left}
                    />
                  </div>
                  <div className={styles.tab_button_content}>
                    <h2>
                      Facilitate early detection and escalation of cases to
                      providers.
                    </h2>
                    <p>
                      Deploy a clinical assistant on patient’s smartphone to
                      have a constant oversight on their health.
                    </p>
                  </div>
                  <div className={styles.tab_button_icon_right}>
                    <img
                      src="./feature1_right_icon.svg"
                      alt="icon"
                      className={styles.tab_icon_right}
                    />
                  </div>
                </div>
                <div className={styles.sec3_features_tab_single}>
                  <div className={styles.tab_button_icon_left}>
                    <img
                      src="./feature2_left_icon.svg"
                      alt="icon"
                      className={styles.tab_icon_left}
                    />
                  </div>
                  <div className={styles.tab_button_content}>
                    <h2>
                      Create weekly health summaries for chronic disease
                      patients.
                    </h2>
                    <p>
                      These weekly summaries help the system learn about
                      patient’s health and hyperpersonalize the responses for
                      them.
                    </p>
                  </div>
                  <div className={styles.tab_button_icon_right}>
                    <img
                      src="./feature1_right_icon.svg"
                      alt="icon"
                      className={styles.tab_icon_right}
                    />
                  </div>
                </div>
                <div className={styles.sec3_features_tab_single}>
                  <div className={styles.tab_button_icon_left}>
                    <img
                      src="./feature3_left_icon.svg"
                      alt="icon"
                      className={styles.tab_icon_left}
                    />
                  </div>
                  <div className={styles.tab_button_content}>
                    <h2>
                      Reduce readmissions, complications and ER visits like
                      never before.
                    </h2>
                    <p>
                      Early detection by the clinical assistant leads to early
                      course- correction of the treatment plan.
                    </p>
                  </div>
                  <div className={styles.tab_button_icon_right}>
                    <img
                      src="./feature1_right_icon.svg"
                      alt="icon"
                      className={styles.tab_icon_right}
                    />
                  </div>
                </div>
                <div className={styles.sec3_features_tab_single}>
                  <div className={styles.tab_button_icon_left}>
                    <img
                      src="./feature4_left_icon.svg"
                      alt="icon"
                      className={styles.tab_icon_left}
                    />
                  </div>
                  <div className={styles.tab_button_content}>
                    <h2>
                      Multilingual Support for Complex Clinical Encounters
                    </h2>
                    <p>
                      Understand accents, jargon, and contextual conversations.
                    </p>
                  </div>
                  <div className={styles.tab_button_icon_right}>
                    <img
                      src="./feature1_right_icon.svg"
                      alt="icon"
                      className={styles.tab_icon_right}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.sec3_features_tab_content_wrapper}>
                <div
                  className={styles.sec3_features_tab_content_wrapper_single}
                >
                  <img
                    src="./features_tab_content_img.png"
                    alt="Health AI"
                    className={styles.features_tab_image}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sec3_button}>
          <button onClick={scrollToContact}>Schedule a demo</button>
        </div>
      </section>
      <section ref={contactRef} className={styles.contactSection}>
        <h2>Contact Us</h2>
        <Form />
      </section>
      <Footer />
    </div>
  );
}
