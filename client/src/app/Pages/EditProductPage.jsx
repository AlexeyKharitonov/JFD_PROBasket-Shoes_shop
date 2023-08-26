import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import Rose_2 from "/Rose_2.jpg";
import lebron_kobe from "/lebron_kobe.jpg";

import { Loader as Spinner } from "../components/Common/Loader";
//ПОТОМ ЛОАДИНГ ДОБАВЬ!!!!!!!!!!
import TextField from "../components/Common/Inputs/TextField";
import Button from "../components/Common/Buttons/Button";
import {
  currentProductById,
  getProductsLoadingStatus,
  updatedProduct,
} from "../Redux/Products/productsReducer";
import SelectField from "../components/Common/Inputs/SelectField";
import BackButton from "../components/Common/Buttons/BackButton";
import TextArea from "../components/Common/Inputs/TextArea";
import localStorageService from "../Services/localStorage.service";

const EditProductPage = () => {
  const [selectedPlayingThem, setSelectedPlayingThem] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const isAdmin = localStorageService.getIsAdmin();

  const handlePlayingThemChange = (selectedValues) => {
    // console.log("PlayingThem:", selectedValues);
    setSelectedPlayingThem(selectedValues);
  };

  const handleSizesChange = (selectedValues) => {
    setSelectedSizes(selectedValues);
  };

  // useEffect(() => {}, [selectedPlayingThem]);

  const { id } = useParams();
  const product = useSelector(currentProductById(id));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loadingCurrentProductStatus = useSelector(getProductsLoadingStatus());
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
    // reset,
  } = useForm({
    mode: "onChange",
  });

  //Если не админ, то сразу редирект на главную
  useEffect(() => {
    if (!isAdmin) {
      navigate("/");
    }
  }, []);

  const onSubmit = (data, event) => {
    event.preventDefault();
    dispatch(
      updatedProduct(
        {
          ...data,
          playingThem:
            selectedPlayingThem.length > 0 ? selectedPlayingThem : undefined,
          sizes: selectedSizes.length > 0 ? selectedSizes : undefined,
        },
        id
      )
    );
    navigate("/");
  };

  useEffect(() => {
    if (product) {
      setSelectedPlayingThem(product.playingThem || []);
      setSelectedSizes(product.sizes || []);
    }
  }, [product]);

  useEffect(() => {
    if (product) {
      setValue("name", product.name);
      setValue("title", product.title);
      setValue("price", product.price);
      setValue("description", product.description);
      setValue("sizes", product.sizes);
      setValue("playingThem", product.playingThem);
    }
  }, [product, setValue]);

  const formStyles = {
    maxHeight: "70vh",
    overflowY: "auto",
    paddingRight: "15px",
  };

  // const description = watch("description", product.description);

  if (!loadingCurrentProductStatus && product) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full">
        <div className="hidden sm:block relative h-screen">
          <img
            src={lebron_kobe}
            alt="lebron_kobe"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-80 rounded-sm blurry-shadow"
          />
        </div>

        <div className=" flex flex-col justify-start my-16">
          <div className="ml-3.5">
            <BackButton />
          </div>
          <form
            className="max-w-[450px] w-full mx-auto bg-[#EEEEEE] p-8 rounded-xl shadow-2xl "
            onSubmit={handleSubmit(onSubmit)}
          >
            <div style={formStyles}>
              <h2 className="text-5xl font-semibold text-left py-2">
                Редактировать
              </h2>
              <TextField
                name="name"
                label="Имя"
                placeholder="Имя"
                register={register}
                rules={{
                  required: "Имя обязательно",
                  minLength: {
                    value: 7,
                    message: "Цена должна содержать минимум 7 букв",
                  },
                  maxLength: {
                    value: 26,
                    message: "Цена не должна превышать 26 букв",
                  },
                }}
                error={errors.name}
              />
              <TextField
                name="title"
                label="Категория"
                placeholder="Категория"
                register={register}
                rules={{
                  required: "Категория обязательна",
                  minLength: {
                    value: 4,
                    message: "Категория должна содержать минимум 4 символа",
                  },
                }}
                error={errors.title}
              />
              <TextField
                name="price"
                label="Цена"
                placeholder="Цена"
                type="text"
                register={register}
                rules={{
                  required: "Цена обязательна",
                  minLength: {
                    value: 4,
                    message: "Цена должна содержать минимум 4 цифры",
                  },
                  maxLength: {
                    value: 6,
                    message: "Цена не должна превышать 6 цифр",
                  },
                }}
                error={errors.price}
              />
              <SelectField
                name="sizes"
                label="Размеры"
                opts={product.sizes}
                // initialValue={product.sizes} //ВРЕМЕННО
                value={selectedSizes}
                setValue={setValue}
                placeholder="Размеры"
                register={register}
                onChange={handleSizesChange}
                error={errors.sizes}

                // control={control}
                // rules={{
                //   required: "Теги обязательны",
                // }}
              />
              <SelectField
                name="playingThem"
                label="Кто в них играет в НБА?"
                // initialValue={product.playingThem} //ВРЕМЕННО
                opts={product.playingThem}
                value={selectedPlayingThem}
                setValue={setValue}
                placeholder="Кто в них играет в НБА?"
                onChange={handlePlayingThemChange}
                // control={control}
                register={register}
                error={errors.playingThem}

                // rules={{
                //   required: "Данное поле обязательно",
                // }}
              />
              <TextArea
                name="description"
                label="Описание"
                // value={product.description}
                register={register}
                // ref={register(rules)}
                rules={{
                  required: "Данное поле обязательно",
                }}
                onChange={(e) => null}
                placeholder="Описание"
                error={errors.description}
              />
              <Button
                classes={
                  "border w-full mt-4 mb-3 bg-[#0f6fd1] hover:bg-[#0b5eb3] text-white hover:text-gray-300"
                }
                size="btnMedium"
              >
                Редактировать
              </Button>
              {/* {currentError && (
                <p className="text-red-600 text-sm my-2 px-1.5">{currentError}</p>
              )} */}
            </div>
          </form>
        </div>
      </div>
    );
  } else if (loadingCurrentProductStatus) {
    return <Spinner />;
  }
};

export default EditProductPage;
