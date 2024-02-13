import { getData, saveData, updateData, deleteData } from "@/utils/handledb";

export default async function Home() {

  const data = await getData()
  console.log(data)

  const deleteForm = async (FormData:FormData) => {
    'use server'
    const id = FormData.get("id") as string
    const data = await deleteData(id)
    console.log(data)
  }

  const create = async (FormData:FormData) => {
    'use server'
    const quote = FormData.get("quote") as string
    const author = FormData.get("author") as string
    const data = await saveData(quote, author)
    console.log(data)
  }

  const update = async (FormData:FormData) => {
    'use server'
    const quote = FormData.get("quote") as string
    const author = FormData.get("author") as string
    const id = FormData.get("id") as string
    const data = await updateData(id, author, quote)
    console.log(data)
  }

  return (
      <div className="flexEditor">

    <nav>
      <button>
        <a href="/allquotes">
        <b>All Quotes</b>
        </a>
      </button>
      <button>
      <a href="/">
        <b>Random Quote</b>
        </a>
      </button>
    </nav>

    <div className="box">
       <form className="formStyle" action={create}>
        <h1><b>Add Quote</b></h1>
        <input type="text" name="author" placeholder="Author"/>
        <input type="text" name="quote" placeholder="Quote"/>
        <button><b>Save Quote</b></button>
      </form>

      <form className="formStyle" action={update}>
        <h1><b>Update Quote</b></h1>
        <input type="text" name="id" placeholder="Id to update" />
        <input type="text" name="author" placeholder="Author"/>
        <input type="text" name="quote" placeholder="Quote"/>
        <button><b>Update Quote</b></button>
      </form>
    </div>

    </div>
  );
}