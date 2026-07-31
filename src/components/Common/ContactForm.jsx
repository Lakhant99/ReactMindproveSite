import { useState } from 'react';

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");

    function handleChange(e) {
        e.preventDefault()
        setName(e.target.value);
        setEmail(e.target.value);
        setPhone(e.target.value);
        setSubject(e.target.value);
    }
    return (
        <form method="post" action="">
            <div className="row clearfix">
                <div className="form-group col-md-6 col-sm-6 col-xs-12">
                    <div className="field-inner">
                        <input type="text" name="form_name" value={name} onChange={handleChange} placeholder="Name" required="" />
                    </div>
                </div>
                <div className="form-group col-md-6 col-sm-6 col-xs-12">
                    <div className="field-inner">
                        <input type="email" name="form_email" value={email} onChange={handleChange}  placeholder="Email" required="" />
                    </div>
                </div>
                <div className="form-group col-md-6 col-sm-6 col-xs-12">
                    <div className="field-inner">
                        <input type="text" name="form_phone" value={phone} onChange={handleChange}  placeholder="Phone" />
                    </div>
                </div>
                <div className="form-group col-md-6 col-sm-6 col-xs-12">
                    <div className="field-inner">
                        <input type="text" name="form_subject" value={subject} onChange={handleChange}  placeholder="subject" />
                    </div>
                </div>
                <div className="form-group col-md-12 col-sm-12 col-xs-12">
                    <div className="field-inner">
                        <textarea name="form_message" placeholder="Message"></textarea>
                    </div>
                </div>
                <div className="form-group col-md-12 col-sm-12 col-xs-12">
                    <div className="field-inner theme-btn">
                        <button type="submit" className="thm-btn">Submit Now</button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default ContactForm;