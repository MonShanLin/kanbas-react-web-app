import AssignmentControlButtons from "./AssignmentControlButtons";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControls from "./AssignmentControls";
import BannerControlButtons from "./BannerControlButtons";
import { LuFileSignature } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";
import './Assignments.css';

export default function Assignments() {
    return (
        <div id="wd-assignments">
            <div className="header-row">
                <div className="search-container">
                    <FaSearch className="search-icon" />
                    <input 
                        id="wd-search-assignment"
                        placeholder="Search..."
                        className="search-input"
                    />
                </div>
                <AssignmentControls />
            </div>

            <ul id="wd-assignment" className="list-group rounded-0">
                <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray green-border-left">
                    <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            <BsGripVertical className="me-2 fs-3" />
                            ASSIGNMENTS
                        </div>
                        <BannerControlButtons />
                    </div>

                    <ul className="wd-assignment list-group rounded-0">
                        <li className="wd-assignment list-group-item p-3 ps-1 d-flex align-items-center green-border-left">
                            <BsGripVertical className="me-2 fs-3" />
                            <LuFileSignature className="me-4 text-green" />
                            <div className="flex-grow-1">
                            <a className="wd-assignment-link text-black no-underline" href="#/Kanbas/Courses/1234/Assignments/123"><b>A1</b></a>
                                <br />
                                <span className="smaller-text">
                                <span className="text-red">Multiple Modules </span> 
                                | <b> Not available until</b> May 6 at 12:00am |
                                <br />
                                <b>Due</b> May 13 at 11:59pm | 100 pts
                                </span>
                            </div>
                            <AssignmentControlButtons />
                        </li>
                        <li className="wd-assignment list-group-item p-3 ps-1 d-flex align-items-center green-border-left">
                            <BsGripVertical className="me-2 fs-3" />
                            <LuFileSignature className="me-4 text-green" />
                            <div className="flex-grow-1">
                            <a className="wd-assignment-link text-black no-underline" href="#/Kanbas/Courses/1234/Assignments/123"><b>A2</b></a>
                                <br />
                                <span className="smaller-text">
                                <span className="text-red">Multiple Modules </span> 
                                | <b>Not available until</b> May 13 at 12:00am |
                                <br />
                                <b>Due</b> May 20 at 11:59pm | 100 pts
                                </span>
                            </div>
                            <AssignmentControlButtons />
                        </li>
                        <li className="wd-assignment list-group-item p-3 ps-1 d-flex align-items-center green-border-left">
                            <BsGripVertical className="me-2 fs-3" />
                            <LuFileSignature className="me-4 text-green" />
                            <div className="flex-grow-1">
                            <a className="wd-assignment-link text-black no-underline" href="#/Kanbas/Courses/1234/Assignments/123"><b>A3</b></a>
                                <br />
                                <span className="smaller-text">
                                <span className="text-red">Multiple Modules </span> 
                                | <b>Not available until</b> May 20 at 12:00am |
                                <br />
                                <b>Due</b> May 27 at 11:59pm | 100 pts
                                </span>
                            </div>
                            <AssignmentControlButtons />
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}