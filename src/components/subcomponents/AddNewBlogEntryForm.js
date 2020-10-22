import React, {useState} from "react";

function AddNewBlogEntryForm({blogList, setBlogList, blogHeader, setBlogHeader, blogBody, setBlogBody, blogName, setBlogName}) {


    function addBlogEntry() {

        const newBlogArticle = {
            name: blogName,
            text: blogBody,
            header: blogHeader,
        }

        const newBlogList = [...blogList, newBlogArticle];
        setBlogList(newBlogList);

        setBlogName("");
        setBlogHeader("");
        setBlogBody("")
    }

    return <form>


        <input value={blogName} onChange={event => setBlogName(event.target.value)}/>
        <input value={blogHeader} onChange={event => setBlogHeader(event.target.value)}/>
        <input value={blogBody} onChange={event => setBlogBody(event.target.value)} className="inputText"/>

        <button disabled={blogHeader.length === 0 || blogBody.length === 0}
                type="button"
                onClick={addBlogEntry}>
            Add Blog Entry
        </button>
    </form >
}

export default AddNewBlogEntryForm;