const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'5aebf215-0e93-4769-bf30-666e145c3dd4'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
