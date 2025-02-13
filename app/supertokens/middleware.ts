import express from "express"; // express is installed, unsure why error is raised
import { verifySession } from "supertokens-node/recipe/session/framework/express";
import { SessionRequest } from "supertokens-node/framework/express";

let app = express();

app.post("/like-comment", verifySession(), (req: SessionRequest, res) => {
	let userId = req.session!.getUserId();
	//....
});