/** Contains the global config values which can be adjusted */
export const GridConfig = {
	/** core/Status.ts */
	status: {
		/** The xhr polling time interval used in core/Status.ts */
		xhrPollingIntervalMillis: 5000,
	},

	/** RingSystem.tsx */
	ringsystem: {
		defaultRingRadius: 100,
		defaultRingStroke: 10,
	},

	/** Server config */
	serverUri:
		process.env.NODE_ENV === "development"
			? "http://localhost:4444/graphql"
			: document.location.protocol + "//" + document.location.host + "/graphql",

	/** Keybinds config */
	globalKeybinds: {
		toggleKeybindsPage: "ctrl + /",
	},
  /* Look at console.keybinds.ts for keybinds for the console.tsx */
};
