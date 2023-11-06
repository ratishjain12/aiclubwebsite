"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { createPost } from "../../../db/createPost";
import { useEffect } from "react";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File

const SunEditor = dynamic(() => import("../../components/Suneditor"), {
  ssr: false,
});

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content] = useState("");
  const [imgfile, setImgFile] = useState<File | null>(null);
  const [status, setStatus] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("admin")) {
      router.push("/admin");
    } else {
      setStatus(true);
    }
  }, [status]);

  function createNewPost(e: any) {
    e.preventDefault();
    createPost(title, summary, content, imgfile!);
  }
  const logOut = () => {
    localStorage.removeItem("admin");
    setStatus(false);
  };

  return (
    <div className="">
      <button
        className="mt-2 mx-6 bg-gray-600 p-2 text-white mb-2 rounded-md"
        onClick={logOut}
      >
        Log out
      </button>
      <form onSubmit={createNewPost} className="flex flex-col mx-6 mt-4 gap-2">
        <input
          type="title"
          placeholder="title"
          className="p-2 outline-none bg-gray-500/10 text-gray placeholder:text-gra rounded-lg"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="summary"
          placeholder="summary"
          className="p-2 outline-none bg-gray-500/10 text-gray placeholder:text-gray rounded-lg"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />

        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              {imgfile ? (
                <>
                  <p className="text-gray-500 dark:text-gray-400">
                    Uploaded {imgfile.name}
                  </p>
                </>
              ) : (
                <>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">upload a banner image</span>{" "}
                    or drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    PNG, JPG
                  </p>
                </>
              )}
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={(e) => setImgFile(e.target.files![0])}
            />
          </label>
        </div>

        <SunEditor />

        <button
          className="mt-2 bg-gray-600 p-2 text-white mb-2"
          onClick={createNewPost}
        >
          Create Post
        </button>
      </form>
    </div>
  );
};
export default CreatePost;
