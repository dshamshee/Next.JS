'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useMemo, useState } from 'react';

export default function Skills() {
	const skillCategories = useMemo(
		() => [
			{
				title: 'Frontend',
				skills: [
					{ name: 'React.js', level: 90 },
					{ name: 'Next.js', level: 85 },
					{ name: 'JavaScript', level: 92 },
					{ name: 'TypeScript', level: 80 },
					{ name: 'HTML/CSS', level: 95 },
					{ name: 'Tailwind CSS', level: 88 }
				]
			},
			{
				title: 'Backend',
				skills: [
					{ name: 'Node.js', level: 87 },
					{ name: 'Express.js', level: 85 },
					{ name: 'MongoDB', level: 90 },
					{ name: 'Mongoose', level: 85 },
					{ name: 'REST APIs', level: 88 },
					{ name: 'Auth & JWT', level: 82 }
				]
			},
			{
				title: 'Tools',
				skills: [
					{ name: 'Git/GitHub', level: 90 },
					{ name: 'VS Code', level: 95 },
					{ name: 'Postman', level: 85 },
					{ name: 'Firebase', level: 75 },
					{ name: 'Vercel/Netlify', level: 80 },
					{ name: 'Docker', level: 70 }
				]
			}
		],
		[]
	);

	const [activeTab, setActiveTab] = useState(skillCategories[0].title);

	return (
		<section className="portfolio-section">
			<div className="portfolio-container">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
			>
					{/* Section Header */}
					<div className="section-header">
						<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
							My <span className="gradient-text">Skills</span>
						</h2>
						<p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
							A focused overview of my strongest capabilities across the MERN stack
						</p>
					</div>

					{/* Tabs */}
					<div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 element-spacing-lg">
						{skillCategories.map((cat) => {
							const isActive = cat.title === activeTab;
							return (
								<motion.button
									key={cat.title}
									onClick={() => setActiveTab(cat.title)}
									className={`px-4 md:px-5 py-2 rounded-xl border text-sm md:text-base transition-all duration-300 ${
										isActive
											? 'border-indigo-500/60 bg-indigo-500/10 text-indigo-300 shadow-[0_0_0_1px_rgba(99,102,241,.2)]'
											: 'border-gray-700 bg-gray-800/40 text-gray-300 hover:border-indigo-500/50 hover:text-white'
									}`}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.97 }}
								>
									{cat.title}
								</motion.button>
							);
						})}
					</div>

					{/* Panels */}
					<AnimatePresence mode="wait">
						{skillCategories
							.filter((c) => c.title === activeTab)
							.map((c) => (
								<motion.div
									key={c.title}
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -10 }}
									transition={{ duration: 0.3 }}
									className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
								>
									{c.skills.map((skill, idx) => (
										<motion.div
											key={skill.name}
											className="group relative bg-gray-800/40 border border-gray-700 rounded-2xl p-5 lg:p-6 flex items-center gap-4 hover:border-indigo-500/50 transition-all duration-300"
											whileHover={{ y: -4 }}
											transition={{ type: 'spring', stiffness: 260, damping: 20 }}
										>
											<SkillCircle level={skill.level} />
											<div className="flex-1 min-w-0">
												<div className="flex items-center justify-between">
													<h4 className="text-sm md:text-base font-semibold text-white truncate">
														{skill.name}
													</h4>
													<span className="text-xs md:text-sm text-indigo-300 font-medium">
														{skill.level}%
													</span>
												</div>
												<div className="mt-2 h-2 bg-gray-700/60 rounded-full overflow-hidden">
													<motion.div
														className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
														initial={{ width: 0 }}
														whileInView={{ width: `${skill.level}%` }}
														viewport={{ once: true }}
														transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: idx * 0.05 }}
													/>
												</div>
											<p className="mt-2 text-xs md:text-sm text-gray-400">
												Proficiency built from real project work and continuous learning
											</p>
										</div>
									</motion.div>
									))}
								</motion.div>
							))}
					</AnimatePresence>
				</motion.div>
			</div>
		</section>
	);
}

function SkillCircle({ level }: { level: number }) {
	const size = 68;
	const stroke = 6;
	const center = size / 2;
	const radius = center - stroke;
	const circumference = 2 * Math.PI * radius;
	const offset = circumference - (level / 100) * circumference;

	return (
		<div className="relative">
			<svg width={size} height={size} className="block">
				<circle cx={center} cy={center} r={radius} stroke="#374151" strokeWidth={stroke} fill="transparent" />
				<motion.circle
					cx={center}
					cy={center}
					r={radius}
					stroke="url(#grad)"
					strokeWidth={stroke}
					strokeLinecap="round"
					fill="transparent"
					strokeDasharray={circumference}
					strokeDashoffset={circumference}
					whileInView={{ strokeDashoffset: offset }}
					viewport={{ once: true }}
					transition={{ duration: 1.2, ease: 'easeInOut' }}
				/>
				<defs>
					<linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
						<stop offset="0%" stopColor="#6366f1" />
						<stop offset="100%" stopColor="#a855f7" />
					</linearGradient>
				</defs>
			</svg>
			<div className="absolute inset-0 flex items-center justify-center">
				<span className="text-xs text-gray-300 font-semibold">{level}%</span>
			</div>
		</div>
	);
}
