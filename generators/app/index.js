const Generator = require("yeoman-generator");

module.exports = class extends Generator {
	welcome() {
		this.log("Welcome to the Tomy react-native Generator!");
	}

	writing() {
		this.fs.copy(this.templatePath("__tests__"), this.destinationPath("__tests__"));
		this.fs.copy(this.templatePath(".bundle"), this.destinationPath(".bundle"));
		this.fs.copy(this.templatePath("android"), this.destinationPath("android"));
		this.fs.copy(this.templatePath("ios"), this.destinationPath("ios"));
		this.fs.copy(this.templatePath(".eslintrc.js"), this.destinationPath(".eslintrc.js"));
		this.fs.copy(this.templatePath("_gitignore"), this.destinationPath(".gitignore"));
		this.fs.copy(this.templatePath(".node-version"), this.destinationPath(".node-version"));
		this.fs.copy(this.templatePath(".prettierrc.js"), this.destinationPath(".prettierrc.js"));
		this.fs.copy(this.templatePath(".ruby-version"), this.destinationPath(".ruby-version"));
		this.fs.copy(this.templatePath(".watchmanconfig"), this.destinationPath(".watchmanconfig"));
		this.fs.copy(this.templatePath("app.json"), this.destinationPath("app.json"));
		this.fs.copy(this.templatePath("App.tsx"), this.destinationPath("App.tsx"));
		this.fs.copy(this.templatePath("babel.config.js"), this.destinationPath("babel.config.js"));
		this.fs.copy(this.templatePath("Gemfile"), this.destinationPath("Gemfile"));
		this.fs.copy(this.templatePath("Gemfile.lock"), this.destinationPath("Gemfile.lock"));
		this.fs.copy(this.templatePath("index.js"), this.destinationPath("index.js"));
		this.fs.copy(this.templatePath("metro.config.js"), this.destinationPath("metro.config.js"));
		this.fs.copy(this.templatePath("package-lock.json"), this.destinationPath("package-lock.json"));
		this.fs.copy(this.templatePath("package.json"), this.destinationPath("package.json"));
		this.fs.copy(this.templatePath("README.md"), this.destinationPath("README.md"));
		this.fs.copy(this.templatePath("tsconfig.json"), this.destinationPath("tsconfig.json"));
		this.fs.copy(this.templatePath("yarn.lock"), this.destinationPath("yarn.lock"));
	}

	install() {
		this.spawnCommand("yarn");
	}

	end() {
		this.log("🎉🎉🎉🎉");
	}
};
