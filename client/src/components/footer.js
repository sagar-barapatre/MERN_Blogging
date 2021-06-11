import React from 'react';
import { DiMongodb, DiNodejsSmall, DiReact, DiHeroku } from 'react-icons/di';
export default function Footer() {
    return (
      <footer className=" container-fluid  text-white p-3 text-center footer">
        {/* 2020 &copy; Sagar Barapatre<br></br> */}
        <div className="d-flex mx-auto justify-content-center align-items-center mt-4">
          Made with
          <DiMongodb className="mongo mr-1" />
          <DiNodejsSmall className="nodejs mr-1" />
          <DiReact className="react mr-1" />
          <DiHeroku className="heroku" />, for{"  "}
          <a
            href="https://sagarbarapatre.netlify.app/"
            className="ml-1 d-inline-block"
          >
            {" "}
            Sagar Barapatre
          </a>
        </div>
      </footer>
    );
}