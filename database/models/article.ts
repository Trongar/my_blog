import mongoose, { Document, model, Model, Schema } from "mongoose"

export interface IAticle extends Document {
    title: string,
    content: string,
    date: Date,
    image: string
}

const ArticleSchema: Schema = new Schema<IAticle>({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    image: {
        type: String,
        default: "default_image.png"
    }
})


export const Article: Model<IAticle> = mongoose.models.Articles || model("articles", ArticleSchema)