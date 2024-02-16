import React from 'react'

export default function Navbar() {
    return (
        <nav>
        <button>
            <a href="/add">
              <b>Add Quotes</b>
           </a>
        </button>
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
    )
}
