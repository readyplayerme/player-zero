module.exports = {
	apps: [{
		name: "player-zero",
		script: "src/server/server.js",
		node_args: "--import jtsx-loader",
		watch: false,
		watch_delay: 1000,
    	ignore_watch : [".git", "node_modules", "public", "uploads"]
	}]
}