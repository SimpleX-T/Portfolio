import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
	const navigate = useNavigate();
	return (
		<section className='grid place-items-center h-[100vh]'>
			<div className='w-1/2 h-1/2 mx-auto text-center'>
				<h1 className='text-[12rem] font-bold'>404</h1>
				<p className='text-4xl mb-8'>Page not found</p>
				<button
					onClick={() => navigate("/")}
					className='flex items-center justify-center rounded-lg text-lg w-24 mx-auto p-2 bg-[#e8dfec]'>
					<FaArrowLeft className='mr-2' />
					Back
				</button>
			</div>
		</section>
	);
}
export default ErrorPage;
