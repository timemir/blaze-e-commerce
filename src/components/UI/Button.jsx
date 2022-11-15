import React from "react";

export default function Button({ outline = false, label }) {
	return (
		<button
			className={`w-28 h-8 text-center  rounded-lg hover:opacity-80 ${
				outline
					? "bg-transparent transition hover:text-blazeCTA"
					: "bg-blazeCTA"
			}`}
		>
			{label}
		</button>
	);
}
