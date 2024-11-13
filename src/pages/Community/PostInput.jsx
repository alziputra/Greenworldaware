import { useContext, useState } from "react";
import { PostContext } from "../../context/PostContext";
import Button from "../../layout/Button";

const PostInput = () => {
  const [post, setPost] = useState("");
  const [file, setFile] = useState(null);
  const { handlePost, buttonPost } = useContext(PostContext);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handlePostSubmit = async (e) => {
    e.preventDefault();

    // Convert file to form data to include file in the request
    const formData = new FormData();
    formData.append("post", post);
    if (file) {
      formData.append("image", file);
    }

    // Call the handlePost function and pass form data
    await handlePost(formData);
    setPost("");
    setFile(null); // Reset the file input after submitting
  };

  return (
    <div className="bg-neutral-200 px-4 py-1 rounded-lg">
      <form onSubmit={handlePostSubmit}>
        <div className="w-full mb-4 border border-gray-200 rounded-lg">
          <div className="px-4 py-2 bg-transparent rounded-t-lg">
            <label className="sr-only">Post</label>
            <textarea
              value={post}
              onChange={(e) => setPost(e.target.value)}
              id="comment"
              rows="4"
              className="w-full px-0 text-sm text-gray-900 bg-transparent border-0 focus:ring-0"
              placeholder="Ceritakan kontribusimu terhadap lingkungan"
              required
            ></textarea>
          </div>

          <div className="mb-5 px-20 w-full h-[2px] bg-neutral-400 rounded-full"></div>

          <div className="flex items-center justify-between border-t dark:border-gray-600">
            <Button type="submit" title="Post" disabled={buttonPost} />

            <div className="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">
              <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" id="file-upload" />
              <label htmlFor="file-upload" className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 20">
                  <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6" />
                </svg>
                <span className="sr-only">Attach file</span>
              </label>
            </div>
          </div>
          {file && <img className="w-full h-48 bg-white mt-5 object-cover" src={URL.createObjectURL(file)} alt="Preview" />}
        </div>
      </form>
    </div>
  );
};

export default PostInput;
