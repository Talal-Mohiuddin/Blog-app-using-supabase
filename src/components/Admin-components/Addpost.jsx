import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../context/Context";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Addpost = () => {
  const { getcateogries, uploadBlog } = useAuth();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null); // State for image file
  const [errorMessage, setErrorMessage] = useState("");

  const {
    data: categories,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getcateogries(),
  });

  const handleSave = (e) => {
    e.preventDefault();
    if(!image || !title || !content || !category ){
      return;
    }

    let imagename = image.name.split(".")[0];
    uploadBlog(imagename, image, title, content, category);
    

   

    setTitle("");
    setCategory("");
    setContent("");
    setImage(null);
    setErrorMessage("");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
  ];

  return (
    <section className="w-[90%] ">
      <div className="bg-gray-700 opacity-50"></div>{" "}
      {/* Adjusted background color */}
      <div className="bg-white p-7 rounded-lg z-10">
        <form onSubmit={handleSave}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              autoFocus
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="category"
            >
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              required
            >
              <option value="">Select category...</option>
              {isLoading ? (
                <option>Loading...</option>
              ) : isError ? (
                <option>Error fetching categories</option>
              ) : (
                categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))
              )}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              required
            />
          </div>
          <div className="mb-8">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Content
            </label>
            <ReactQuill
              theme="snow"
              value={content}
              onChange={setContent}
              modules={modules}
              formats={formats}
              style={{ height: "180px" }}
              required
            />
          </div>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <div className="flex mt-20 justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Add Post
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Addpost;
