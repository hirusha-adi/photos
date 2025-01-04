import { useEffect } from "react";
import { Gallery } from "./components/Gallery";

const All = () => {

	useEffect(() => {
		document.title = `All Photos`
	})

	return (
		<>
			<div className="flex flex-col lg:flex-row mt-6 mb-20 lg:mb-7">
				{/* Left (Desktop) / Top (Mobile) */}
				<div className="px-2 lg:mx-2 mb-2 w-full lg:w-auto">
					<div className="bg-base-200 rounded-box w-full lg:w-64 overflow-y-auto overflow-x-hidden lg:h-[87vh] lg:max-h-[87vh] lg:min-h-[87vh] h-[35vh] max-h-[35vh] min-h-[35vh]">
						<ul className="menu">
							<>
								<div className="flex justify-center items-center h-[75vh]">
									<span className="loading loading-spinner text-error"></span>
								</div>
							</>
						</ul>
					</div>
				</div>

				{/* Right (Desktop) / Bottom (Mobile) */}
				<div className="bg-base-100 p-4 rounded-box flex-1 px-5 h-[87vh] max-h-[87vh] min-h-[87vh] relative">
					<div className="">
						<div className="flex justify-center items-center h-[84vh] overflow-y-scroll">
							<Gallery />
						</div>
					</div>
				</div>
			</div >
		</>
	);
};

export { All }