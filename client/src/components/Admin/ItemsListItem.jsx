import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { deleteItem } from "../../util/http/items";
import Button from "../UI/General/Button";

export default function CategoriesListItem({ item, updateParent, categoryId }) {
    const [deleteConfirmIsOpen, setDeleteConfirmIsOpen] = useState(false);
    function confirmHandler() {
        setDeleteConfirmIsOpen(true);
    }

    function deleteHandler() {
        deleteItem(item._id);
        updateParent(item._id);
    }
    return (
        <>
            <div className="flex items-center bg-blazePimary text-white transition hover:text-blazeCTA hover:opacity-90 rounded-lg p-4">
                <Link to={`/admin-categories/${categoryId}/item/${item._id}`}>
                    <p className="mr-3">{item.brand}</p>
                    <p>{item.name}</p>
                </Link>
                <BsTrash
                    onClick={confirmHandler}
                    className=" ml-auto text-white transition hover:text-red-700"
                />
            </div>
            <div
                className={`${
                    deleteConfirmIsOpen ? "" : "hidden"
                } border-2 p-1 rounded-lg`}
            >
                <p>Are you sure you want to delete this category?</p>
                <div className="flex justify-center space-x-2">
                    <Button
                        className="bg-red-700 text-white"
                        onClick={deleteHandler}
                    >
                        Yes
                    </Button>
                    <Button
                        outline
                        className="border-2"
                        onClick={() => setDeleteConfirmIsOpen(false)}
                    >
                        Cancel
                    </Button>
                </div>
            </div>
        </>
    );
}
