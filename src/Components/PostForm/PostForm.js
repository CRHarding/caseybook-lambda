import React, { useState } from 'react';

const initialFormValues = {
    title: "",
    content: ""
}

function PostForm(props) {
    const [formValues, setFormValues] = useState(initialFormValues)

    const onChange = (evt) => {
        const { name, value } = evt.target;
        setFormValues({ ...formValues, [name]: value })
    }

    return (
        <div className="post-form">
            <form onSubmit={(evt) => props.onSubmit(evt, formValues)}>
                <label>Title
                    <input 
                        type="text"
                        name="title"
                        value={formValues.title}
                        onChange={onChange}
                        placeholder="Add ya title here ya chump"
                    />
                </label>
                <label>Content
                    <input
                        type="text"
                        name="content"
                        value={formValues.content}
                        onChange={onChange}
                        placeholder="Content here"
                    />
                </label>
                <input type="submit" value="Submit it" />
            </form>
        </div>
    )
}

export default PostForm;