import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { PostContext } from '../../context/PostContext';
import { BsFullscreenExit } from 'react-icons/bs';
import { formatDate } from '../../utils/Utils';
import Button from '../../layout/Button';
import { UserContext } from '../../context/UserContext';
import { CommentSkeleton } from '../../layout/Skeleton';
import { Spinner } from 'flowbite-react';

const CommentsModal = (props) => {
  const { commentsByPost, detailedPost, loading, loadingComments, handleComment, buttonComment } = useContext(PostContext);
  const { userData } = useContext(UserContext);
  const [comment, setComment] = useState('');

  const handleSubmitComment = (e) => {
    e.preventDefault();
    handleComment(comment);
    setComment('');
  };

  return (
    <div className="fixed h-screen w-full rounded-lg z-50 m-auto top-0 left-0 ">
      <button onClick={props.handleModalComment} className="fixed h-screen w-full bg-black opacity-10 top-0 left-0 -z-10"></button>
      <div className="flex bg-white h-[35rem] mt-8 max-w-2xl m-auto rounded-lg">
        <div className="flex flex-col w-full h-full">
          <div className="flex justify-end w-full p-5 border-b border-neutral-400 ">
            <button onClick={props.handleModalComment}>
              <BsFullscreenExit />
            </button>
          </div>
          {loading ? (
            <CommentSkeleton />
          ) : (
            <div className="flex flex-col gap-10 overflow-y-auto overflow-x-hidden overscroll-none z-50 py-10 px-10 h-full">
              <div className="flex gap-4">
                <div className="flex flex-col justify-center items-center h-full overflow-auto ">
                  <img
                    className="rounded-full h-10 object-cover z-10"
                    src={!detailedPost.User?.image ? 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg' : ''}
                    alt="img-profile"
                  />
                  <div className="h-full w-1 bg-neutral-400"></div>
                </div>

                <div className="flex flex-col h-full w-full overflow-auto">
                  <h1 className="font-bold py-2">
                    {detailedPost.User?.firstName} {detailedPost.User?.lastName} • <span className="font-medium">{formatDate(detailedPost.createdAt)}</span>
                  </h1>
                  <h1>{detailedPost.post}</h1>
                  <img className="w-72" src={detailedPost.image} alt="" />
                </div>
              </div>

              <div className="bg-neutral-100 p-5 rounded-lg">
                <div className="border-b border-neutral-800 pb-2 mb-2">Komentar</div>

                {loadingComments ? (
                  <div className="flex w-full justify-center">
                    <Spinner />
                  </div>
                ) : commentsByPost.length > 0 ? (
                  commentsByPost.map((item) => (
                    <div className="flex gap-2 mb-3" key={item.id}>
                      <div className="flex flex-col justify-center items-center h-full overflow-auto ">
                        <img
                          className="rounded-full w-10 object-cover z-10"
                          src={!item.User?.image ? 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg' : ''}
                          alt="img-profile"
                        />
                        <div className="h-full w-1 bg-neutral-400"></div>
                      </div>

                      <div className="flex flex-col h-full w-full overflow-auto ">
                        <h1 className="font-bold py-1">
                          {!item.User ? userData.firstName : item.User.firstName} {!item.User ? userData.lastName : item.User.lastName} • <span className="font-medium">{formatDate(item.createdAt)}</span>
                        </h1>
                        <p>{item.comment}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="flex justify-center text-neutral-500">Tidak ada komentar</p>
                )}
              </div>
            </div>
          )}
          <div className="flex items-center px-10 h-20 mt-auto gap-4 w-full">
            <img
              className="rounded-full h-10 object-cover z-10"
              src={!detailedPost.User?.image ? 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg' : ''}
              alt="img-profile"
            />
            <form className="w-full flex gap-3 items-center" onSubmit={handleSubmitComment}>
              <input className="rounded-lg h-full w-full" type="text" placeholder="Berikan komentar..." value={comment} onChange={(e) => setComment(e.target.value)} />
              <Button type="daftar" title="Kirim" disabled={buttonComment} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

CommentsModal.propTypes = {
  handleModalComment: PropTypes.func,
};

export default CommentsModal;
