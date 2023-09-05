import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import CardWrapper from "../components/Common/Wrappers/CardWrapper";
import ContentWrapper from "../components/Common/Wrappers/ContentWrapper";
import BackButton from "../components/Common/Buttons/BackButton";
import { Loader as Spinner } from "../components/Common/Loader";
import Badge from "../components/Common/Badge";
import {
  getAllFeedBack,
  getFeedbackLoadingStatus,
} from "../Redux/FeedBack/feedBackReducer";
import StarsRate from "../components/Common/StarsRate";
import Button from "../components/Common/Buttons/Button";
import ModalFeed from "../components/UI/Cart/Modal/ModalFeed";
import { IoArrowRedo } from "react-icons/io5";
import { getIsLoggedIn } from "../Redux/Users/usersReducer";

const FeedBack = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const feedBack = useSelector(getAllFeedBack());
  const loading = useSelector(getFeedbackLoadingStatus());

  useEffect(() => {
    toast.dismiss();
  }, []);
  const isLoggedIn = useSelector(getIsLoggedIn());

  const handleOpenModal = () => {
    if (!isLoggedIn) {
      toast.error("Пожалуйста, войдите, чтобы оставить свой отзыв!", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } else {
      setModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  if (loading) {
    return <Spinner />;
  } else if (feedBack && !loading) {
    return (
      <>
        <div className="ml-4">
          <BackButton />
        </div>
        <ContentWrapper>
          <CardWrapper>
            <div className="mx-auto text-gray-700 text-base md:text-2xl px-5 md:px-0 flex-col space-y-3 md:space-y-0 justify-center items-center md:flex md:flex-row text-center md:px-0 space-x-6 md:space-x-12 my-6 font-semibold max-w-screen-lg py-5">
              <div className="border-b-4 pb-1.5  pt-0.5 flex items-center opacity-90 border-[#0f6fd1] rounded-lg">
                Ниже представлены отзывы наших довольных покупателей!😎
              </div>
              <div className="flex items-center justify-center pr-10 md:pr-0">
                <IoArrowRedo
                  color="#0f6fd1"
                  className="mr-2 opacity-80"
                  size={30}
                />
                <Button
                  type="purple"
                  handleClick={handleOpenModal}
                  classes=" hover:scale-105"
                >
                  Оставить отзыв
                </Button>
                <ModalFeed isOpen={isModalOpen} onClose={handleCloseModal} />
              </div>
            </div>
          </CardWrapper>
          {feedBack.map((comment) => (
            <CardWrapper key={comment._id} w="w-3/4">
              <div className="pt-0 px-4 pr-8 mt-5 mb-8">
                <div className="flex flex-col md:flex-row items-center justify-center py-4 pb-9 max-w-screen-lg">
                  <div className="mb-6 md:mb-0 md:mr-8">
                    <div className="">
                      <img
                        src={comment.photo}
                        alt="ball"
                        className="hidden md:block rounded-lg min-w-[358px] min-h-[400px] opacity-80"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="text-xl text-center md:text-start md:text-3xl font-semibold mb-4 text-gray-700">
                      {comment.name_and_info}
                    </div>
                    <div className="text-gray-600 text-center md:text-start text-xs mb-8 opacity-80">
                      <Badge>{comment.order_date}</Badge>
                    </div>
                    <span className="mb-7 flex justify-center md:justify-start">
                      <StarsRate>{comment.rate}</StarsRate>
                    </span>
                    <div className="text-gray-600 text-center md:text-start pl-1.5 text-lg mb-2.5">
                      Отзыв:
                    </div>
                    <div className="text-gray-800 bg-[#DCDDE1] px-5 text-sm md:text-lg py-1.5 rounded-3xl opacity-95">
                      {comment.comment}
                    </div>
                  </div>
                </div>
              </div>
            </CardWrapper>
          ))}
        </ContentWrapper>
      </>
    );
  }
};

export default FeedBack;
