import Router from "express";

import { academicEducationRoutes } from "./academicEdu.routes.js";
import { usersRoutes } from "./user.routes.js";
import { interestSubjectsRoutes } from "./interestSubjects.routes.js";

const api = Router();

// http://localhost:4242/api/user ....

api.use("/user", usersRoutes);

api.use("/academicEdu", academicEducationRoutes);

api.use("/interestSubjects", interestSubjectsRoutes);

export { api };
