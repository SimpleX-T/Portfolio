import SocialSection from "../UI/SocialSection";

function Contact() {
	return (
		<section className='section grid place-items-center'>
			<div className='container md:w-3/4'>
				<h2>Contact Me</h2>
				<div className='flex flex-col md:flex-row mt-16'>
					<div className='w-full md:w-1/2 mb-8 md:mb-0 p-4'>
						<h3 className='text-2xl font-semibold mb-4 text-[var(--text-black-700)]'>
							Get in Touch
						</h3>
						<p className='mb-4 text-[var(--text-black-900)]'>
							Feel free to reach out to me through any of these
							platforms:
						</p>
						<div className='w-full md:w-1/2 mx-auto'>
							<SocialSection color='var(--text-black-700)' />
						</div>
					</div>

					<div className='w-full md:w-1/2'>
						<h3 className='text-2xl font-semibold mb-4 text-[var(--text-black-900)]'>
							Send a Message
						</h3>
						<form>
							<div className='mb-4'>
								<input
									type='text'
									placeholder='Your Name'
									className='w-full p-2 bg-[var(--bg-black-100)] text-[var(--text-black-900)] rounded'
								/>
							</div>
							<div className='mb-4'>
								<input
									type='email'
									placeholder='Your Email'
									className='w-full p-2 bg-[var(--bg-black-100)] text-[var(--text-black-900)] rounded'
								/>
							</div>
							<div className='mb-4'>
								<textarea
									placeholder='Your Message'
									rows='4'
									className='w-full p-2 bg-[var(--bg-black-100)] text-[var(--text-black-900)] resize-none rounded'></textarea>
							</div>
							<button
								type='submit'
								className='bg-[var(--skin-color)] text-white py-2 px-4 rounded hover:bg-opacity-90 transition-colors'>
								Send Message
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
export default Contact;
