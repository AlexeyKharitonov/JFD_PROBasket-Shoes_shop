import { NavLink } from "react-router-dom";
import CardWrapper from "../../Common/Wrappers/CardWrapper";
import ContentWrapper from "../../Common/Wrappers/ContentWrapper";
import BackButton from "../../Common/Buttons/BackButton";

const EmptyCart = () => {
  return (
    <>
      <div className="ml-3.5">
        <BackButton />
      </div>
      <ContentWrapper>
        <CardWrapper>
          <div className="mt-12 text-center py-20 text-3xl  text-neutral-800">
            <div className="pb-3">В Корзине пока ничего нет.😔🏀</div>
            <span>
              Перейдите{" "}
              <NavLink to="/" className="text-[#0f6fd1] font-bold underline">
                на главную страницу,
              </NavLink>{" "}
              чтобы сделать заказ!😋
            </span>
          </div>
        </CardWrapper>
      </ContentWrapper>
    </>
  );
};

export default EmptyCart;
