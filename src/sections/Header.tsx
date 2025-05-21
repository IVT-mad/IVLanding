'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

const navLinks = [
	{ href: '/', label: 'Home' },
	{ href: '/about', label: 'About' },
	{ href: '/projects', label: 'Projects' },
	{ href: '/contact', label: 'Contact' },
]

export default function Header() {
	const [isOpen, setIsOpen] = useState(false)
	const router = useRouter()

	return (
		<header className='fixed top-0 left-0 w-full z-50 bg-white shadow-md'>
			<div className='max-w-6xl mx-auto px-4 py-3 flex items-center justify-between'>
				<Link href='/' className='text-xl font-bold'>
					IVLanding
				</Link>

				<nav className='hidden md:flex gap-6'>
					{navLinks.map(link => (
						<Link
							key={link.href}
							href={link.href}
							className={`transition-colors duration-300 font-medium ${
								router.pathname === link.href ? 'text-blue-600' : ''
							} hover:text-blue-500`}
						>
							{link.label}
						</Link>
					))}
				</nav>

				<button
					aria-label='Toggle navigation'
					aria-expanded={isOpen}
					onClick={() => setIsOpen(prev => !prev)}
					className='md:hidden text-2xl'
				>
					☰
				</button>
			</div>

			<AnimatePresence>
				{isOpen && (
					<motion.nav
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						className='md:hidden bg-white shadow-md px-4 pb-4 flex flex-col gap-3'
					>
						{navLinks.map(link => (
							<Link
								key={link.href}
								href={link.href}
								className='hover:text-blue-500 transition-colors duration-300'
								onClick={() => setIsOpen(false)}
							>
								{link.label}
							</Link>
						))}
					</motion.nav>
				)}
			</AnimatePresence>
		</header>
	)
}
