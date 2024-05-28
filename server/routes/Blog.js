import express from "express"
import Blog from "../models/Blog.js";
import verifyUser from "../utils/VerifyUser.js";

const router = express.Router();

router.post("/create", verifyUser, async (req, res, next) => {
    try {
        const { _id, name, role } = req.user;

        if (role == "user") return res.status(401).json({
            message: "UnAuthorized User!",
            status: false
        })

        const { title, content, summary, MainPoster, category } = req.body;

        if (!MainPoster) {
            console.log("IMG is missing!");
        }

        if (!title || !summary || !content || !MainPoster) return res.status(404).json({
            success: false,
            message: "Something is missing!",
        })

        const createBlog = await Blog.create({
            title,
            summary,
            description: content,
            auther: {
                id: _id,
                name
            },
            MainPoster,
        })
        res.status(201).json({
            success: true,
            message: `${createBlog.title} has been created!`,
            data: createBlog._id
        })

    } catch (error) {
        next(error);
    }
})

router.get("/get/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const blog = await Blog.findById(id);

        res.status(200).json({
            success: true,
            message: "Got The Blog",
            data: blog
        })

    } catch (error) {
        next(error);
    }
})

router.get("/all", async (req, res, next) => {
    try {

        const blog = await Blog.find();

        let data = [];

        blog.map(i => {
            data.push({
                _id: i._id,
                title: i.title,
                poster: i.MainPoster,
                summary: i.summary,
                auther: {
                    id: i.auther.id,
                    name: i.auther.name
                },
            })
        })

        res.status(200).json({
            message: "Got All Blog's",
            success: true,
            blog: data
        })

    } catch (error) {
        next(error);
    }
})

export default router