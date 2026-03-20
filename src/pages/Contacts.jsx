import { useState } from "react";
import classes from "./Contacts.module.css";
import { ImFacebook2, ImLinkedin, ImGithub, ImProfile } from "react-icons/im";
import { FiCopy, FiCheck } from "react-icons/fi";

const EMAIL = "patrick.gelera1@gmail.com";

const Contacts = () => {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
      `Portfolio: ${form.subject}`
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div id="contacts-page">
      <div className={classes["contact-details"]}>

        {/* ── INFO ── */}
        <section className="division">
          <p>
            E-mail:{" "}
            <span>{EMAIL}</span>
            <button
              className={classes.copyBtn}
              onClick={copyEmail}
              title="Copy email"
            >
              {copied ? <FiCheck /> : <FiCopy />}
              <span className={classes.copyTooltip}>
                {copied ? "Copied!" : "Copy"}
              </span>
            </button>
          </p>
          <p>
            Phone: <span>09215350099</span>
          </p>
          <p>
            Location: <span>Santa Maria, Bulacan 🇵🇭</span>
          </p>

          <div className={classes.links}>
            <a href="https://www.facebook.com/patrickngsv/" target="_blank" rel="noreferrer" title="Facebook">
              <ImFacebook2 />
            </a>
            <a href="https://www.linkedin.com/in/john-patrick-gelera-32884415a/" target="_blank" rel="noreferrer" title="LinkedIn">
              <ImLinkedin />
            </a>
            <a href="https://github.com/patrickgelera" target="_blank" rel="noreferrer" title="GitHub">
              <ImGithub />
            </a>
            <a href="https://drive.google.com/file/d/1-I--GfNxFyDVJ9fSMT-1LVCmyE8rQ5qu/view?usp=sharing" target="_blank" rel="noreferrer" title="Resume">
              <ImProfile />
            </a>
          </div>
        </section>

        {/* ── FORM ── */}
        <section className={`division ${classes.formSection}`}>
          <h3 className={classes.formTitle}>Send a Message</h3>

          {submitted && (
            <div className={classes.successMsg}>
              ✓ Opening your email client…
            </div>
          )}

          <form onSubmit={handleSubmit} className={classes.contactForm}>
            <div className={classes.formRow}>
              <div className={classes.formGroup}>
                <label className={classes.formLabel}>Name</label>
                <input
                  className={classes.formInput}
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={classes.formGroup}>
                <label className={classes.formLabel}>Email</label>
                <input
                  className={classes.formInput}
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={classes.formGroup}>
              <label className={classes.formLabel}>Subject</label>
              <input
                className={classes.formInput}
                type="text"
                name="subject"
                placeholder="What's this about?"
                value={form.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className={classes.formGroup}>
              <label className={classes.formLabel}>Message</label>
              <textarea
                className={classes.formTextarea}
                name="message"
                rows={5}
                placeholder="Write your message here…"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className={classes.formSubmit}>
              Send Message →
            </button>
          </form>
        </section>

      </div>
    </div>
  );
};

export default Contacts;
