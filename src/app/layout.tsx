import './globals.css'

export const metadata = {
	title: 'IVLanding',
	description: 'Personal landing page of IV',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	)
}
