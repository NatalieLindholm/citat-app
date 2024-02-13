import { getData } from "@/utils/handledb";
import { FaPen } from "react-icons/fa";

export default async function Home() {

  function getRandomQuote(data:any){
    const randomId = Math.floor(Math.random()*data.length)
    return data[randomId]
  }

  const data = await getData()
  const randomQuote = getRandomQuote(data)
  console.log(data)

  return (
      <div className="flex">

    <nav>
      <button>
          <a href="/editor">
            <b>Editor</b>
         </a>
      </button>
      <button>
      <a href="/allquotes">
        <b>All Quotes</b>
        </a>
      </button>
    </nav>

        <div className="displayBox" key={randomQuote.id}>
            <i>{randomQuote.quote}</i>
            <b>{randomQuote.author}</b>
            <p>ID. {randomQuote.id}</p>
        </div>
    </div>
  );
}