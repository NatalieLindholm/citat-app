import { db } from "@/utils/db"

type PageByIdProps = {
  params: {
    id: number
  }
}

export default function PageById({params}: PageByIdProps) {

  const onSubmit = async (data: FormData) => {
    "use server"
    db.query('UPDATE quotes SET author=$1, quote=$2 WHERE id=$3', [data.get('author'), data.get('quote'), params.id])
  }

  return (
    <div className="flexEditor">

      <form className="formStyle" action={onSubmit}>
        <div className="box">
            <h1><b>Update Quote</b></h1>
            <input type="text" name="author" placeholder="Author"/>
            <input type="text" name="quote" placeholder="Quote"/>
            <button><b>Save</b></button>
        </div>
      </form>

      <button className="back">
        <a href="/allquotes">
          <b>Back</b>
        </a>
        </button>
    </div>
  );
}