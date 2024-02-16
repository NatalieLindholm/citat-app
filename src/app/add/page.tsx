import { getData, saveData, updateData, deleteData } from "@/utils/handledb";
import Navbar from "../Navbar";

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

    <Navbar></Navbar>

       <form className="formStyle" action={create}>
          <div className="box">
            <h1><b>Add Quote</b></h1>
            <input type="text" name="author" placeholder="Author"/>
            <input type="text" name="quote" placeholder="Quote"/>
            <button><b>Add Quote</b></button>
          </div>
      </form>

    </div>
  );
}