'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

type NavLink = {
	href: string
	label: string
}

export default function DropdownMenu({ navLinks }: { navLinks: NavLink[] }) {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className='relative inline-flex md:hidden'>
			<span className='inline-flex divide-x divide-gray-300 overflow-hidden rounded border border-gray-300 bg-white shadow-sm dark:divide-gray-600 dark:border-gray-600 dark:bg-gray-800'>
				<button
					type='button'
					className='px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white'
					onClick={() => setIsOpen(!isOpen)}
				>
					Menu
				</button>
				<button
					type='button'
					className='px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white'
					aria-label='Toggle dropdown'
					onClick={() => setIsOpen(!isOpen)}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='currentColor'
						className='size-4'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='m19.5 8.25-7.5 7.5-7.5-7.5'
						/>
					</svg>
				</button>
			</span>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						role='menu'
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						className='absolute right-0 top-12 z-10 w-56 overflow-hidden rounded border border-gray-300 bg-white shadow-sm dark:border-gray-600 dark:bg-gray-800'
					>
						{navLinks.map(({ href, label }) => (
							<Link
								key={href}
								href={href}
								role='menuitem'
								className='block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white'
								onClick={() => setIsOpen(false)}
							>
								{label}
							</Link>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}
