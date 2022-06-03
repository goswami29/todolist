import React, { useState } from 'react';
import SignUpInfo from './forms/SignUpInfo';
import PersonalInfo from './forms/PersonalInfo';
import OtherInfo from './forms/OtherInfo';

const DemoForm = () => {
    const FormTitle = ["Sign Up", "Personal Info", "Other Info"];
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        username: "",
        nationality: "",
        other: ""
    });

    const pageDisplay = () => {
        if (page === 0) {
            return <SignUpInfo formData={formData} setFormData={setFormData} />
        } else if (page === 1) {
            return <PersonalInfo formData={formData} setFormData={setFormData} />
        } else {
            return <OtherInfo formData={formData} setFormData={setFormData} />
        }
    }

    return (
        <div className="form">
            <div className="register form-container">
                <div className="header">
                    <h1>{FormTitle[page]}</h1>
                </div>
                <div className="body">{pageDisplay()}</div>
                <div className="footer-page">
                    <button
                        className='appButton'
                        disabled={page == 0}
                        onClick={() => { setPage(page - 1) }}> Previous
                    </button>

                    <button
                        className='appButton'
                        onClick={() => {
                            if (page === FormTitle.length - 1) {
                                alert("Form Submited");
                                console.log("Form Submited", formData);
                            } else {
                                setPage(page + 1)
                            }
                        }
                        }
                    > {page === FormTitle.length - 1 ? "Submit" : "Next"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DemoForm