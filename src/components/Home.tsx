import Markdown from "react-markdown";

const markdownText = `
# Home
## Para1
- list1
- list2
- list3
## Para2
- list1
- list2
- list3
## Para3
- list1
- list2
- list3
- [link to google](https://www.google.com)
`

import imgSrc from "../assets/img/249-200x300.jpg"

function Home() {
  return (
    <div className="home">
      <div className="home_title">
        <Markdown>{markdownText}</Markdown>
        <img src={imgSrc} alt="sample img" />
      </div>
    </div>
  );
}

export default Home;