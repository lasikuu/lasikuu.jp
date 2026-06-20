import { writable } from 'svelte/store'

// Easter egg / debug: when set to a number in [0,1], every <Moon> on the page
// uses this phase instead of its own. null = off (moons use their own phase).
export const moonPhaseOverride = writable<number | null>(null)

// Whether the debug overlay panel is visible.
export const moonDebugOpen = writable(false)

// Human-readable name for a phase value, for the debug readout.
export function phaseName(phase: number): string {
	const p = ((phase % 1) + 1) % 1
	if (p < 0.03 || p > 0.97) return 'New moon'
	if (p < 0.22) return 'Waxing crescent'
	if (p < 0.28) return 'First quarter'
	if (p < 0.47) return 'Waxing gibbous'
	if (p < 0.53) return 'Full moon'
	if (p < 0.72) return 'Waning gibbous'
	if (p < 0.78) return 'Last quarter'
	return 'Waning crescent'
}
