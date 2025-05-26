import Header from '@sections/Header'
import Hero from '@sections/Hero'
import './globals.css'

export default function HomePage() {
	return (
		<>
			<Header />
			<main className='pt-16'>
				<Hero />
				{/* TODO: Add Features, Pricing, etc. */}
			</main>
		</>
	)
}
