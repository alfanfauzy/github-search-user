import { ResultQuery } from "../../common/BaseResponse";
import { UserLists } from "../models";

export type GetUsersListResult = ResultQuery<UserLists | undefined>;
