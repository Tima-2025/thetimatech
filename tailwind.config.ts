import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// TIMA Theme Colors
				cyber: {
					bg: 'hsl(var(--cyber-bg))',
					'bg-secondary': 'hsl(var(--cyber-bg-secondary))',
					'neon-primary': 'hsl(var(--cyber-neon-primary))',
					'neon-secondary': 'hsl(var(--cyber-neon-secondary))',
					text: 'hsl(var(--cyber-text))',
					'text-muted': 'hsl(var(--cyber-text-muted))',
					accent: 'hsl(var(--cyber-accent))',
					grid: 'hsl(var(--cyber-grid))'
				},
				gaming: {
					bg: 'hsl(var(--gaming-bg))',
					'bg-secondary': 'hsl(var(--gaming-bg-secondary))',
					primary: 'hsl(var(--gaming-primary))',
					secondary: 'hsl(var(--gaming-secondary))',
					text: 'hsl(var(--gaming-text))',
					accent: 'hsl(var(--gaming-accent))',
					highlight: 'hsl(var(--gaming-highlight))'
				},
				eco: {
					bg: 'hsl(var(--eco-bg))',
					'bg-secondary': 'hsl(var(--eco-bg-secondary))',
					primary: 'hsl(var(--eco-primary))',
					secondary: 'hsl(var(--eco-secondary))',
					text: 'hsl(var(--eco-text))',
					'text-muted': 'hsl(var(--eco-text-muted))',
					accent: 'hsl(var(--eco-accent))',
					light: 'hsl(var(--eco-light))'
				},
				ecom: {
					bg: 'hsl(var(--ecom-bg))',
					'bg-secondary': 'hsl(var(--ecom-bg-secondary))',
					primary: 'hsl(var(--ecom-primary))',
					secondary: 'hsl(var(--ecom-secondary))',
					text: 'hsl(var(--ecom-text))',
					'text-muted': 'hsl(var(--ecom-text-muted))',
					accent: 'hsl(var(--ecom-accent))',
					card: 'hsl(var(--ecom-card))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
