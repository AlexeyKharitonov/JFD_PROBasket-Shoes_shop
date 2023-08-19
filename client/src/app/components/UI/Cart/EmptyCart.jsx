import CardWrapper from "../../Common/Wrappers/CardWrapper";
import ContentWrapper from "../../Common/Wrappers/ContentWrapper";

const EmptyCart = () => {
  return (
    <ContentWrapper>
      <CardWrapper>
        <div className="mt-12 text-center py-20 text-3xl  text-neutral-800">
          В Корзине пока ничего нет.&#x1F614;
        </div>
      </CardWrapper>
    </ContentWrapper>
  );
};

export default EmptyCart;
