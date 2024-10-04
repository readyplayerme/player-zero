module.exports = {
	apps: [{
		name: "player-zero",
		script: "src/server/server.js",
		watch: false,
		watch_delay: 1000,
    	ignore_watch : [".git", "node_modules", "public", "uploads", ".git"],
	}]
}

