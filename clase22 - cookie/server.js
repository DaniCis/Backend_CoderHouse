import express  from "express";
import viewsRoutes from './routers/views.routers.js'
import usersRoutes from './routers/users.routes.js'
import cookieParser from "cookie-parser";

const PORT = process.env.PORT || 8080;
const app = express();

// Middlewares
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(viewsRoutes);
app.use('/users', usersRoutes);
app.use(cookieParser());

// Listen
app.listen(PORT, () => {
  console.log('Ready on port ', PORT);
})