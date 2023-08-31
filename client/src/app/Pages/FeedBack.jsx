import { useEffect } from "react";
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

const FeedBack = () => {
  const feedBack = useSelector(getAllFeedBack());
  const loading = useSelector(getFeedbackLoadingStatus());

  useEffect(() => {
    toast.dismiss();
  }, []);

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
            <div className="mx-auto text-gray-700 justify-center text-base xl:text-2xl flex my-6 font-semibold max-w-screen-lg py-5">
              <div className="border-b-4 pb-1.5 opacity-90 border-[#0f6fd1] rounded-lg">
                Ниже представлены отзывы наших довольных покупателей!😎
              </div>
            </div>
          </CardWrapper>
          {feedBack.map((comment) => (
            <CardWrapper key={comment._id} w="w-3/4">
              <div className="pt-0 px-4 pr-8 mt-5 mb-8">
                <div className="flex flex-col xl:flex-row items-center justify-center py-4 pb-9 max-w-screen-lg">
                  <div className="mb-6 xl:mb-0 xl:mr-8">
                    <div className="">
                      <img
                        src={comment.photo}
                        alt="ball"
                        className="hidden xl:block rounded-lg min-w-[358px] min-h-[400px] opacity-80"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-semibold mb-4 text-gray-700">
                      {comment.name_and_info}
                    </div>
                    <div className="text-gray-600 text-base mb-8 opacity-80">
                      <Badge>{comment.order_date}</Badge>
                    </div>
                    <span className="mb-7 flex justify-center xl:justify-start">
                      <StarsRate>{comment.rate}</StarsRate>
                    </span>
                    <div className="text-gray-600 pl-1.5 text-lg mb-2.5">
                      Отзыв:
                    </div>
                    <div className="text-gray-800 bg-[#DCDDE1] px-5 py-1.5 rounded-3xl opacity-95">
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
