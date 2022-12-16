import { RadioGroup } from "@headlessui/react";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import useCartStore from "../../store/shoppingCartStore";
// DUMMY DATA:
const itemDUMMY = {
    id: 1,
    href: "#",
    brand: "Harry Potterly",
    name: "Plant Pot 3000 - White - modern design dasdasdas",
    price: 39.99,
    description: "Nice pot yeee",
    rating: 4,
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
    sizes: [
        { name: "XXS", inStock: false },
        { name: "XS", inStock: true },
        { name: "S", inStock: true },
        { name: "M", inStock: true },
        { name: "L", inStock: true },
        { name: "XL", inStock: true },
        { name: "2XL", inStock: true },
        { name: "3XL", inStock: true },
    ],
};
const reviews = {
    average: 4,
    total: 117,
};
export default function ItemDetails() {
    const addItem = useCartStore((state) => state.addItem);
    const [item, setItem] = useState(itemDUMMY);
    const [selectedSize, setSelectedSize] = useState(
        item.sizes ? item.sizes[0] : null
    );

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

    function submitHandler(event) {
        event.preventDefault();
        console.log(event);
        const selectedItem = {
            ...item,
            selectedSize: selectedSize || null,
            selectedColor: selectedColor || null,
        };
        addItem(selectedItem);
    }

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
                    <div className="flex flex-row">
                        {[1, 2, 3, 4, 5].map((i) => {
                            if (i <= reviews.average) {
                                return (
                                    <AiFillStar key={i} className="text-2xl" />
                                );
                            }
                            return (
                                <AiOutlineStar key={i} className="text-2xl" />
                            );
                        })}
                    </div>
                    <Link to="/">
                        <p className="text-blazeCTA">{reviews.total} reviews</p>
                    </Link>
                </div>
                {/* Color */}
                <form onSubmit={submitHandler}>
                    <div className="">
                        <h2 className="text-xl">Color</h2>
                        <RadioGroup
                            value={selectedColor}
                            onChange={setSelectedColor}
                            className="mt-4"
                        >
                            <div className="flex items-center space-x-3">
                                {item.colors
                                    ? item.colors.map((color) => (
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
                                      ))
                                    : null}
                            </div>
                        </RadioGroup>
                    </div>

                    {/* Size */}
                    <div className="mb-6">
                        <div className="mt-10">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl  text-gray-900">Size</h3>
                                <Link
                                    to="/"
                                    className="text-sm font-medium text-blazeCTA hover:text-blazeCTA500"
                                >
                                    Size guide
                                </Link>
                            </div>

                            <RadioGroup
                                value={selectedSize}
                                onChange={setSelectedSize}
                                className="mt-4"
                            >
                                <RadioGroup.Label className="sr-only">
                                    {" "}
                                    Choose a size{" "}
                                </RadioGroup.Label>
                                <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                                    {item.sizes
                                        ? item.sizes.map((size) => (
                                              <RadioGroup.Option
                                                  key={size.name}
                                                  value={size}
                                                  disabled={!size.inStock}
                                                  className={({ active }) =>
                                                      classNames(
                                                          size.inStock
                                                              ? "bg-white shadow-sm text-gray-900 cursor-pointer"
                                                              : "bg-gray-50 text-gray-200 cursor-not-allowed",
                                                          active
                                                              ? "ring-2 ring-blazeCTA500"
                                                              : "",
                                                          "group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                                                      )
                                                  }
                                              >
                                                  {({ active, checked }) => (
                                                      <>
                                                          <RadioGroup.Label as="span">
                                                              {size.name}
                                                          </RadioGroup.Label>
                                                          {size.inStock ? (
                                                              <span
                                                                  className={classNames(
                                                                      active
                                                                          ? "border"
                                                                          : "border-2",
                                                                      checked
                                                                          ? "border-blazeCTA"
                                                                          : "border-transparent",
                                                                      "pointer-events-none absolute -inset-px rounded-md"
                                                                  )}
                                                                  aria-hidden="true"
                                                              />
                                                          ) : (
                                                              <span
                                                                  aria-hidden="true"
                                                                  className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                                              >
                                                                  <svg
                                                                      className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                                                      viewBox="0 0 100 100"
                                                                      preserveAspectRatio="none"
                                                                      stroke="currentColor"
                                                                  >
                                                                      <line
                                                                          x1={0}
                                                                          y1={
                                                                              100
                                                                          }
                                                                          x2={
                                                                              100
                                                                          }
                                                                          y2={0}
                                                                          vectorEffect="non-scaling-stroke"
                                                                      />
                                                                  </svg>
                                                              </span>
                                                          )}
                                                      </>
                                                  )}
                                              </RadioGroup.Option>
                                          ))
                                        : null}
                                </div>
                            </RadioGroup>
                        </div>
                    </div>
                    <div className="flex h-12 w-[100%] justify-center mb-6">
                        {/* <Button
                            type="submit"
                            className="w-[100%] h-[100%] text-white text-xl"
                        >
                            Add to bag
                        </Button> */}
                        <button
                            type="submit"
                            className="bg-blazeCTA text-center px-2 rounded-lg text-white w-full text-lg"
                        >
                            Add to bag
                        </button>
                    </div>
                </form>

                <div>
                    <p>{item.description}</p>
                </div>
            </div>
        </div>
    );
}
