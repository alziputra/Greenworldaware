/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';

const CloudinaryScriptContext = createContext();

function CloudinaryUploadWidget({ uwConfig, setPublicId, setFileUrl }) {
  const [loaded, setLoaded] = useState(false);
  const [cloudinaryWidget, setCloudinaryWidget] = useState(null);

  useEffect(() => {
    // Check if the script is already loaded
    if (!loaded) {
      const uwScript = document.getElementById('uw');
      if (!uwScript) {
        // If not loaded, create and load the script
        const script = document.createElement('script');
        script.async = true;
        script.id = 'uw';
        script.src = 'https://upload-widget.cloudinary.com/global/all.js';
        script.addEventListener('load', () => setLoaded(true));
        document.body.appendChild(script);
      } else {
        // If already loaded, update the state
        setLoaded(true);
      }
    }

    return () => {
      // Cleanup function: destroy the Cloudinary widget when the component unmounts
      cloudinaryWidget?.destroy();
    };
  }, [loaded, cloudinaryWidget]);

  const initializeCloudinaryWidget = () => {
    if (loaded && !cloudinaryWidget) {
      const newWidget = window.cloudinary.createUploadWidget(uwConfig, (error, result) => {
        if (!error && result && result.event === 'success') {
          setPublicId(result.info.public_id);
          console.log(setPublicId(result.info.public_id));
          setFileUrl(result.info.secure_url);
        }
      });

      setCloudinaryWidget(newWidget);

      document.getElementById('upload_widget').addEventListener('click', () => {
        newWidget.open();
      });
    }
  };

  return (
    <CloudinaryScriptContext.Provider value={{ loaded }}>
      <div id="upload_widget" className="cursor-pointer w-full p-2 hover:bg-white" onClick={initializeCloudinaryWidget}>
        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
        <span className="sr-only">Upload image</span>
      </div>
    </CloudinaryScriptContext.Provider>
  );
}

export default CloudinaryUploadWidget;
export { CloudinaryScriptContext };
