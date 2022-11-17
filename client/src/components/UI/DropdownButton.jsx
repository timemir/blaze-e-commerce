import React from "react";
import { Link } from "react-router-dom";

export default function DropdownButton({ label, linkTo }) {
    // TODO: Implement dropdown menu logic
    return (
        <div>
            <Link to={linkTo}>{label}</Link>
        </div>
    );
}
