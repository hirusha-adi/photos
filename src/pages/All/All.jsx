import { useEffect } from "react";

const All = () => {

	useEffect(() => {
		document.title = `All Photos`
	})

	return (
		<>
			<div className="text-4xl font-bold lg:hidden text-center my-5">
				All Photos
			</div>
			<div className="flex flex-col lg:flex-row">
				{/* Sidebar */}
				<div className="mb-2 lg:mb-0 w-full lg:w-auto px-3 lg:px-0 ">
					<div className="bg-base-200 w-full lg:w-72 rounded-box lg:rounded-none mt-3 lg:mt-0 overflow-y-auto overflow-x-hidden lg:h-screen lg:max-h-screen lg:min-h-screen h-[35vh] max-h-[35vh] min-h-[35vh]">
						<ul className="menu">
							<>
								<div className="flex justify-center items-center h-[75vh]">
									<span className="loading loading-spinner text-error"></span>
								</div>
							</>
						</ul>
					</div>
				</div>
				{/* Body */}
				<div className="bg-base-100 rounded-box flex-1 h-screen max-h-screen min-h-screen relative">
					<div className="">
						<div className="flex justify-between items-center my-5 mx-10">
							<div className="text-4xl font-bold">All Photos</div>
							<div className="text-1xl font-bold">&copy; Hirusha Adikari</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export { All }