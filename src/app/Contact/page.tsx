export default function Contact() {
    return (
      <section
        id="contact"
        style={{ backgroundColor: "#f0eeee", marginTop: "40px" }}
      >
        <div className="heading">
          <h1 style={{ marginTop: "20px" }}>Contact Us</h1>
        </div>
  
        <div className="container-form">
          <div className="contact-card">
            <h2>Contact Us</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button type="submit" id="form-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
