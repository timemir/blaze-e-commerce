import { RadioGroup } from "@headlessui/react";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import Button from "../UI/General/Button";

// DUMMY DATA:
const itemDUMMY = {
    id: 1,
    href: "#",
    brand: "Harry Potterly",
    name: "Plant Pot 3000 - White - modern design dasdasdas",
    price: 39.99,
    description: "Nice pot yeee",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80",
    imageAlt: "White and green ceramic plant pot with drainage holes.",
    sale: true,
    colors: [
        {
            name: "White",
            class: "bg-white",
            selectedClass: "ring-gray-400",
        },
        {
            name: "Gray",
            class: "bg-gray-200",
            selectedClass: "ring-gray-400",
        },
        {
            name: "Black",
            class: "bg-gray-900",
            selectedClass: "ring-gray-900",
        },
    ],
};
export default function ItemDetails() {
    const [item, setItem] = useState(itemDUMMY);

    const [selectedColor, setSelectedColor] = useState(item.colors[0]);

    useEffect(() => {
        // TODO: fetch item details from server by itemId
        // setItem({
        //     id: 1,
        //     href: "#",
        //     brand: "Harry Potterly",
        //     name: "Plant Pot 3000 - White - modern design dasdasdas",
        //     price: 39.99,
        //     description: "Nice pot yeee",
        //     image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80",
        //     imageAlt: "White and green ceramic plant pot with drainage holes.",
        //     sale: true,
        //     colors: [
        //         {
        //             name: "White",
        //             class: "bg-white",
        //             selectedClass: "ring-gray-400",
        //         },
        //         {
        //             name: "Gray",
        //             class: "bg-gray-200",
        //             selectedClass: "ring-gray-400",
        //         },
        //         {
        //             name: "Black",
        //             class: "bg-gray-900",
        //             selectedClass: "ring-gray-900",
        //         },
        //     ],
        // });
        //
    }, []);

    return (
        <div className="flex flex-col m-4 text-blazePimary">
            {/* Breadcrumbs */}
            <div className="flex truncate mb-4">
                <p className="text-blazePimary">
                    {item.brand} \ {"  "}
                    <span className="text-blazePrimary500">{item.name}</span>
                </p>
            </div>
            {/* Pictures */}
            <div className="-mx-4 mb-8">
                <img src={item.image} alt={item.imageAlt} />
            </div>
            {/* Details */}
            <div>
                {/* Title */}
                <div className="mb-4">
                    <h1 className="font-bold text-2xl ">{item.name}</h1>
                </div>
                {/* Price */}
                <div className="mb-4">
                    <p className="text-4xl font-light">{`$${item.price}`}</p>
                </div>
                {/* Ratings */}
                <div className="flex flex-row space-x-4 mb-8">
                    <p>ratings in stars</p>
                    <p className="text-blazeCTA">117 reviews</p>
                </div>
                {/* Color */}
                <form>
                    <div className="">
                        <h2 className="text-xl">Color</h2>
                        <RadioGroup
                            value={selectedColor}
                            onChange={setSelectedColor}
                            className="mt-4"
                        >
                            <div className="flex items-center space-x-3">
                                {item.colors.map((color) => (
                                    <RadioGroup.Option
                                        key={color.name}
                                        value={color}
                                        className={classNames(
                                            color.selectedClass,
                                            "ui-active:ring ui-active:ring-offset-1 ui-checked:ring-2",
                                            "-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
                                        )}
                                    >
                                        <RadioGroup.Label
                                            as="span"
                                            className="sr-only"
                                        >
                                            {" "}
                                            {color.name}{" "}
                                        </RadioGroup.Label>

                                        <span
                                            aria-hidden="true"
                                            className={classNames(
                                                color.class,
                                                "h-8 w-8 border border-black border-opacity-10 rounded-full"
                                            )}
                                        />
                                    </RadioGroup.Option>
                                ))}
                            </div>
                        </RadioGroup>
                    </div>
                </form>
                {/* Size */}
                <div className="mb-6">
                    <div className="flex justify-between">
                        <h2 className="text-xl">Size</h2>
                        <p className="text-blazeCTA">Size guide</p>
                    </div>
                    <div>
                        <p>Size buttons</p>
                    </div>
                </div>
                <div className="flex h-12 mb-6">
                    <Button className="w-[100%] h-[100%] text-white text-xl">
                        Add to bag
                    </Button>
                </div>
                <div>
                    <p>{item.description}</p>
                </div>
            </div>
        </div>
    );
}
