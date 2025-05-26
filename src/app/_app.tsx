import Header from '@sections/Header'
import type { AppProps } from 'next/app'
import '../src/app/globals.css'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Header />
			<Component {...pageProps} />
		</>
	)
}
