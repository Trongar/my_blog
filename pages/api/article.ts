import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../database/connectaion";
import { Article } from "../../database/models/article";

export default async function getArticles(req: NextApiRequest, res: NextApiResponse) {
    try {
        await connectToDatabase()
        const articles = await Article.find()
        res.status(200).json(articles)
    } catch (err) {
        console.log(err)
        res.status(500).send("error")
    }

}