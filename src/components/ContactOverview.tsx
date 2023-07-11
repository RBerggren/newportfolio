import { useRef, useState } from "react";
import "./ContactOverview.scss";
import Map from "./Map";
import React from "react";

const rootClassName = "contact-overview";

const ContactOverview = () => {
  const ref = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className={rootClassName}>
      <div className={`${rootClassName}--container`}>
        <div className={`${rootClassName}--container--left`}>
          <form
            className={`${rootClassName}--container--left--form`}
            ref={ref}
            onSubmit={handleSubmit}
          >
            <h1 className={`${rootClassName}--container--left--title`}>
              Contact Us
            </h1>
            <input
              className={`${rootClassName}--container--left--input`}
              placeholder="Name"
              name="name"
            />
            <input
              className={`${rootClassName}--container--left--input`}
              placeholder="Email"
              name="email"
            />
            <textarea
              className={`${rootClassName}--container--left--textArea`}
              placeholder="Write your message"
              name="message"
              rows={10}
            />
            <button type="submit">Send</button>
            {sent &&
              "Email service not implemented yet, but we will get back to you!"}
          </form>
        </div>
        <div className={`${rootClassName}--container--right`}>
          <Map />
        </div>
      </div>
    </div>
  );
};

export default ContactOverview;
