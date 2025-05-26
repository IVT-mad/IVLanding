'use client'
import DropdownMenu from '@components/DropdownMenu'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const navLinks = [
	{ href: '#about', label: 'About' },
	{ href: '#features', label: 'Features' },
	{ href: '#pricing', label: 'Pricing' },
	{ href: '#faq', label: 'FAQ' },
	{ href: '#contact', label: 'Contact' },
	{ href: 'https://github.com/IVT-mad', label: 'GitHub' },
]

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false)
	const pathname = usePathname()

	useEffect(() => {
		const hour = new Date().getHours()
		const isNight = hour >= 20 || hour < 7
		document.documentElement.classList.toggle('dark', isNight)
	}, [])

	return (
		<header className='fixed top-0 left-0 w-full z-50 border-b border-prussian-blue bg-papaya-whip/90 dark:border-licorice dark:bg-licorice/90 backdrop-blur'>
			<div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
				<div className='flex h-16 items-center justify-between'>
					{/* Logo */}
					<Link
						href='/'
						className='text-xl font-bold text-barn-red dark:text-orange-web'
					>
						IVLanding
					</Link>

					{/* Desktop nav */}
					<nav className='hidden md:flex gap-6 text-sm font-medium'>
						{navLinks.map(link => (
							<Link
								key={link.href}
								href={link.href}
								className={`transition-colors hover:text-air-superiority-blue dark:hover:text-orange-web ${
									pathname === link.href
										? 'text-fire-brick dark:text-rust'
										: 'text-prussian-blue dark:text-papaya-whip'
								}`}
							>
								{link.label}
							</Link>
						))}
					</nav>

					{/* Visual test block */}
					<div className='bg-barnRed text-papayaWhip p-4 rounded'>
						🔥 This should be red bg with light text
					</div>
					<div className='bg-red-500 text-white p-4'>Test</div>

					{/* Avatar */}
					<div className='hidden md:block relative'>
						<button className='overflow-hidden rounded-full border border-prussian-blue dark:border-orange-web shadow-inner'>
							<img
								src='https://avatars.githubusercontent.com/u/125467624?v=4'
								alt='User avatar'
								className='w-10 h-10 object-cover'
							/>
						</button>
					</div>

					{/* Mobile Menu */}
					<DropdownMenu navLinks={navLinks} />
				</div>

				{/* Legacy fallback menu */}
				{menuOpen && (
					<div className='md:hidden mt-2 space-y-2'>
						{navLinks.map(link => (
							<Link
								key={link.href}
								href={link.href}
								className='block px-4 py-2 rounded-md text-sm bg-papaya-whip text-prussian-blue dark:bg-licorice dark:text-papaya-whip'
								onClick={() => setMenuOpen(false)}
							>
								{link.label}
							</Link>
						))}
					</div>
				)}
			</div>
		</header>
	)
}
