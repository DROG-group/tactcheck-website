import React from "react"

function Footer() {
  return (
    <footer className="-ml-7 lg:-ml-24 w-screen px-7 lg:px-24 border-t border-dashed border-primary bg-primary text-primary-content">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center">
            © {new Date().getFullYear()}{" "}
            <a href="https://drog.group/" className="hover:underline">
              DROG Group
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
