import { ChangeEvent, useState } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";
import AdminNav from "../../components/nav/AdminNav";
import toast from "react-hot-toast";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { ImageDB } from "../../Firebase";
import { v4 } from "uuid";

const modules = {
  toolbar: [
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    // [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }],
    // ['link', 'image'],                  // text direction

    // [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"],
  ],
};

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [Img, setImg] = useState<File>();
  const [pec, setPec] = useState<number>(0);
  const [ImageUrl, setURL] = useState<string>("");

  const navigate = useNavigate();

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];

    if (e.target.files != null) {
      setImg(file);
    } else {
      toast.error("Can't upload img");
    }
  };

  const createNewpost: React.FormEventHandler<HTMLFormElement> = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!ImageUrl.startsWith("h"))
      return toast.error("Poster is not uploaded!");

    console.log("log after image upload");

    const response = await fetch("/api/blog/create", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        summary,
        content,
        MainPoster: ImageUrl,
      }),
    });

    console.log("log success");

    const { success, message, data: id } = await response.json();

    if (success === true) {
      toast.success(message);
      navigate(`/blog/${id}`);
    } else {
      toast.error(message);
    }
  };

  if (Img !== undefined) {
    console.log(Img.size);
  }

  const upload = () => {
    if (Img === undefined) return toast.error("Please Select Image");

    if (Img !== undefined) {
      if (title.length <= 0) return toast.error("Title is Missing!");
      if (summary.length <= 0) return toast.error("Summary is Missing!");

      if (ImageUrl.startsWith("h"))
        return toast.success("Image has Already Uploaded");

      toast.success("Uploading is Started");

      const imgRef = ref(ImageDB, `files/${v4()}`);
      const upload = uploadBytesResumable(imgRef, Img);

      console.log("log before image upload");

      upload.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setPec(Math.round(progress));
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(upload.snapshot.ref).then((downloadUrl) => {
            setURL(downloadUrl);
            console.log(downloadUrl);
            setPec(0);
          });
        }
      );
    }
  };

  return (
    <>
      <AdminNav />
      <section className="flex flex-col gap-7 w-screen items-center mt-6">
        <h1 className="text-2xl portrait:text-xl font-semibold">
          Create New Blog
        </h1>
        <form
          onSubmit={createNewpost}
          className="w-[650px] portrait:w-[95%] portrait:text-xs m-auto flex flex-col p-3 border rounded py-5 gap-4"
        >
          <input
            className="p-4 border border-black rounded"
            type="text"
            placeholder="Title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className="p-4 border h-32 border-black rounded"
            placeholder="Summary"
            required
            onChange={(e) => setSummary(e.target.value)}
            value={summary}
          />
          <div className="flex flex-col gap-2">
            <input
              type="file"
              accept="image/*"
              required
              multiple={false}
              className="p-4 border border-black rounded"
              onChange={handleFile}
            />

            <button
              onClick={upload}
              type="button"
              disabled={pec > 1 ? true : false}
              className="bg-green-500 border py-4 sm:text-base rounded-lg font-semibold hover:shadow-[0px_1px_15px_0px_#2f855a] hover:scale-95 border-gray-300 duration-500 text-white px-5"
            >
              {pec > 1 ? `Uploading is at ${pec}` : "Upload Poster"}
            </button>
          </div>

          <ReactQuill
            modules={modules}
            value={content}
            className="rounded mb-20 h-72"
            onChange={(newValue) => setContent(newValue)}
          />

          <button
            type="submit"
            className="bg-black text-white p-3 rounded hover:scale-95 hover:shadow-[0px_1px_15px_0px_#000] duration-500"
            style={{ marginTop: "10px" }}
            disabled={pec > 1 ? true : false}
          >
            {"Create Post"}
          </button>
        </form>
      </section>
    </>
  );
};

export default CreatePost;
