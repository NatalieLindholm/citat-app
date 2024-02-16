import Link from "next/link";
import Navbar from "../Navbar";
import { getData, deleteData } from "@/utils/handledb";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPen } from "react-icons/fa";

export default async function Home() {

  type PageByIdProps = {
    params: {
      id: number
    }
  }

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

<Navbar></Navbar>

<div className="fixing">
        {data.map(quote =>
        <div className="displayBox"  key={quote.id}>
               <i>"{quote.quote}"</i>                   
               <b>{quote.author}</b>
               <p>ID.{quote.id}</p>

        <div id="flex">
            <form action={deleteForm}>
              <button>
              <FaRegTrashAlt />
              </button>
              <input type="hidden" name="id" value={quote.id} />
            </form>

            
              <button>
              <Link href={"/quotes/" + quote.id} ><FaPen /></Link>
              </button>
            
        </div>

        </div>
      )}
      </div>

    </div>
  );
}