/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
const Aside = ({ popUpSwitchOn }) => {
  return (
    <aside className="aside">
      <div class="aside-content">
        <h2>Todo list</h2>
      <button onClick={popUpSwitchOn} type="button">
        Add a Task
      </button>
      <nav>
        <ul>
          <li>
            <Link to="/">All Tasks</Link>
            </li>
            <li>
            <Link to="/important">Important Tasks</Link>
            </li>
            <li>
            <Link to="/completed">Completed Tasks</Link>
          </li>
        </ul>
      </nav>
      </div>
    </aside>
  );
};

export default Aside;
