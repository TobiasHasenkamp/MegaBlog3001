import React, {useState} from "react";
import './App.css';
import MegaHeaderTitle from "./components/subcomponents/MegaHeaderTitle";
import MegaFooter from "./components/subcomponents/MegaFooter";
import AddNewBlogEntryForm from "./components/subcomponents/AddNewBlogEntryForm";
import BlogEntry from "./components/subcomponents/BlogEntry";

function App() {

    const [blogList, setBlogList] = useState([]);
    const [blogHeader, setBlogHeader] = useState("");
    const [blogBody, setBlogBody] = useState("");
    const [blogName, setBlogName] = useState("");

  return (
    <div className="App">

        <header>
            <img src="./img/lake.jpg" alt="a Jaguar" width="100px" height="100px"/>
            <MegaHeaderTitle>MegaBlog 3001</MegaHeaderTitle>
        </header>

        <main>

            <div className="inputArea">

                <div className="labelColumn">
                    <label>Enter Name:</label>
                    <label>Enter Headline:</label>
                    <label>Enter Text:</label>
                </div>

                <div className="inputColumn">
                    <AddNewBlogEntryForm
                        blogList={blogList}
                        setBlogList={setBlogList}
                        blogHeader={blogHeader}
                        setBlogHeader={setBlogHeader}
                        blogBody={blogBody}
                        setBlogBody={setBlogBody}
                        blogName={blogName}
                        setBlogName={setBlogName}
                    />
                </div>



            </div>

        <div>

            {blogList.map(entry =>
            <BlogEntry key={entry.name + entry.header} headline={entry.header} name = {entry.name} text={entry.text}/>)}

        </div>
        </main>

        <footer>

            <MegaFooter>This Blog was created in 2020.</MegaFooter>

        </footer>

    </div>
  );
}

export default App;