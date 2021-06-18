import app = require("teem");

class Index {
	public async index(req: app.Request, res: app.Response) {
		res.sendFile(app.dir.views + "/index.html");
	}

	public async home(req: app.Request, res: app.Response) {
		res.sendFile(app.dir.views + "/home.html");
	}

	public async profile(req: app.Request, res: app.Response) {
		res.sendFile(app.dir.views + "/profile.html");
	}

	public async notifications(req: app.Request, res: app.Response) {
		res.sendFile(app.dir.views + "/notifications.html");
	}

	public async message(req: app.Request, res: app.Response) {
		res.sendFile(app.dir.views + "/message.html");
	}

	public async configuration(req: app.Request, res: app.Response) {
		res.sendFile(app.dir.views + "/configuration.html");
	}

	public async playermatch(req: app.Request, res: app.Response) {
		res.sendFile(app.dir.views + "/playermatch.html");
	}
}

export = Index;
