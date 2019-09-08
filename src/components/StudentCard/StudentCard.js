import React from 'react';
import StudentField from './StudentField/StudentField';
import './StudentCard.css';

import { FaUserEdit } from "react-icons/fa";

function StudentCard(props) {
    return (
        <div className="card">
            <StudentField field={"email"} />
            <StudentField field={"gender"} />
            <StudentField field={"hobby"} />
            <StudentField field={"country"} />
            <button className="edit-button"><FaUserEdit size={28} /></button>
        </div>
    )
}

export default StudentCard;
