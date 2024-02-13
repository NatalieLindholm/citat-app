import { getData, deleteData } from "@/utils/handledb";
import { FaRegTrashAlt } from "react-icons/fa";

export default async function Home() {

  const data = await getData()
  console.log(data)

  const deleteForm = async (FormData:FormData) => {
    'use server'
    const id = FormData.get("id") as string
    const data = await deleteData(id)
    console.log(data)
  }

  return (
      <div className="flex">

    <nav>
      <button>
        <a href="/editor">
        <b>Editor</b>
        </a>
      </button>
      <button>
        <a href="/">
        <b>Random Quote</b>
        </a>
      </button>
    </nav>

<div className="fixing">
        {data.map(quote =>
        <div className="displayBox"  key={quote.id}>
               <i>{quote.quote}</i>                   
               <b>{quote.author}</b>
               <p>ID.{quote.id}</p>

            <form action={deleteForm}>
              <button>
              <FaRegTrashAlt />
              </button>
              <input type="hidden" name="id" value={quote.id} />
            </form>
        </div>
      )}
      </div>

    </div>
  );
}