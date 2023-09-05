const express = require("express");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const tokenService = require("../services/token.service");
const router = express.Router({ mergeParams: true });

// /api/auth/signUp
// 1. get data from  req (email, password, phone)
// 2. check if users already exists
// 3. hash password
// 4. create user
// 5. generate tokens

//Регистрация
router.post("/signUp", [
  check("email", "Некорректный email").isEmail(),
  check("password", "Минимальная длина пароля 8 символов").isLength({ min: 8 }),
  check("login", "Некорректный login").isLength({ min: 4 }),
  check("phone", "Некорректный phone").matches(
    /^(?:\+7|8)[\s\-]?\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/
  ),

  async (req, res) => {
    try {
      const errors = validationResult(req);
      console.log(errors);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          error: {
            message: "INVALID_DATA",
            code: 400,
            // errors: errors.array(),
          },
        });
      }

      const { login, email, phone, password, isAdmin } = req.body;

      //проверка а есть ли пользователь с таким email
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({
          error: {
            message: "EMAIL_EXISTS",
            code: 400,
          },
        });
      }

      //проверка а есть ли пользователь с таким login
      const existingUserByLogin = await User.findOne({ login });
      if (existingUserByLogin) {
        return res.status(400).json({
          error: {
            message: "LOGIN_EXISTS",
            code: 400,
          },
        });
      }

      // Проверка на существующего пользователя с таким номером телефона
      const existingUserByPhone = await User.findOne({ phone });
      if (existingUserByPhone) {
        return res.status(400).json({
          error: {
            message: "PHONE_EXISTS",
            code: 400,
          },
        });
      }

      const hashedPassword = await bcrypt.hash(password, 12);

      const newUser = await User.create({
        ...req.body,
        password: hashedPassword,
      });

      const tokens = tokenService.generate({ _id: newUser._id });

      await tokenService.save(newUser._id, tokens.refreshToken);

      res
        .status(201)
        .send({ ...tokens, userId: newUser._id, isAdmin: newUser.isAdmin });
    } catch (error) {
      res.status(500).json({
        message: "На серевере произошла ошибка. Попробуйте позже",
      });
    }
  },
]);

//1. validate
//2. find user
//3. compare hash password
//4. generate token access refresh
//5. return data

//Вход
router.post(
  "/signInWithPassword",
  // check("email", "Email некорректный").normalizeEmail().isEmail(),
  check("login", "Некорректный login").isLength({ min: 4 }),
  check("password", "Пароль не может быть пустым").exists(),
  [
    async (req, res) => {
      try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({
            error: {
              message: "INVALID_DATA",
              code: 400,
            },
          });
        }

        const { login, password } = req.body;

        const existingUser = await User.findOne({ login });

        if (!existingUser) {
          return res.status(400).send({
            error: {
              message: "LOGIN_NOT_FOUND",
              code: 400,
            },
          });
        }

        const isPasswordEqual = await bcrypt.compare(
          password,
          existingUser.password
        );

        if (!isPasswordEqual) {
          return res.status(400).send({
            error: {
              message: "INVALID_PASSWORD",
              code: 400,
            },
          });
        }

        const tokens = tokenService.generate({ _id: existingUser._id });
        await tokenService.save(existingUser._id, tokens.refreshToken);

        res.status(200).send({
          ...tokens,
          userId: existingUser._id,
          isAdmin: existingUser.isAdmin,
        });
      } catch (error) {
        res.status(500).json({
          message: "На серевере произошла ошибка. Попробуйте позже",
        });
      }
    },
  ]
);

function isTokenInvalid(data, dbToken) {
  return !data || !dbToken || data._id !== dbToken?.user?.toString();
}

//refresh_token
router.post("/token", async (req, res) => {
  try {
    const { refresh_token: refreshToken } = req.body;
    const data = tokenService.validateRefresh(refreshToken);
    const dbToken = await tokenService.findToken(refreshToken);

    if (isTokenInvalid(data, dbToken)) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const tokens = await tokenService.generate({ id: data._id });

    await tokenService.save(data._id, tokens.refreshToken);

    res.status(200).send({ ...tokens, userId: data._id });
  } catch (error) {
    res.status(500).json({
      message: "На серевере произошла ошибка. Попробуйте позже",
    });
  }
});

module.exports = router;
