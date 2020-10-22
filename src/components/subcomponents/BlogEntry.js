import React from 'react';
import './BlogEntry.css';

function BlogEntry({headline, name, text}) {

    return (
        <article>

            <div className="newBlogEntry">

                <h2>{headline}</h2>
                <h4>written by {name}</h4>
                <p>{text}</p>

            </div>

        </article>
    );
}

export default BlogEntry;