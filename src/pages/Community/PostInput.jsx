import { useContext, useState } from 'react';
import { PostContext } from '../../context/PostContext';
import Button from '../../layout/Button';
import CloudinaryUploadWidget from '../../components/CloudinaryUploadWidget';

const PostInput = () => {
  const [post, setPost] = useState('');

  const { handlePost, buttonPost } = useContext(PostContext);

  const [fileUrl, setFileUrl] = useState('');

  const [publicId, setPublicId] = useState();
  // Replace with your own cloud name
  const [cloudName] = useState(import.meta.env.VITE_CLOUDINARY_NAME);
  // Replace with your own upload preset
  const [uploadPreset] = useState(import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);

  // Upload Widget Configuration
  // Remove the comments from the code below to add
  // additional functionality.
  // Note that these are only a few examples, to see
  // the full list of possible parameters that you
  // can add see:
  //   https://cloudinary.com/documentation/upload_widget_reference

  const [uwConfig] = useState({
    cloudName,
    uploadPreset,
    maxImageFileSize: 2000000, //restrict file size to less than 2MB
    // cropping: true, //add a cropping step
    // showAdvancedOptions: true,  //add advanced options (public_id and tag)
    // sources: [ "local", "url"], // restrict the upload sources to URL and local files
    // multiple: false,  //restrict upload to a single file
    // folder: "user_images", //upload files to the specified folder
    // tags: ["users", "profile"], //add the given tags to the uploaded files
    // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
    // clientAllowedFormats: ["images"], //restrict uploading to image files only
    // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
    // theme: "purple", //change to a purple theme
  });

  const handlePostSubmit = (e) => {
    e.preventDefault();
    handlePost(post, fileUrl);
    setFileUrl('');
    setPost('');
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
              className="w-full px-0 text-sm text-gray-900 bg-transparent border-0 focus:ring-0 "
              placeholder="Ceritakan kontribusimu terhadap lingkungan"
              required
            ></textarea>
          </div>

          <div className="mb-5 px-20 w-full h-[2px] bg-neutral-400 rounded-full"></div>

          <div className="flex items-center justify-between  border-t dark:border-gray-600">
            <Button type="daftar" title="Post" disabled={buttonPost} />

            <div className="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">
              <button type="button" className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 20">
                  <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6" />
                </svg>
                <span className="sr-only">Attach file</span>
              </button>
              <CloudinaryUploadWidget uwConfig={uwConfig} setPublicId={setPublicId} setFileUrl={setFileUrl} fileUrl={fileUrl} />
            </div>
          </div>
          {fileUrl && <img className="w-full h-48 bg-white mt-5 object-cover" src={fileUrl} />}
        </div>
      </form>
    </div>
  );
};

export default PostInput;
