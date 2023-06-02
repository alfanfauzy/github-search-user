import { ResultQuery } from "../../common/BaseResponse";
import { UserRepoLists } from "../models";

export type GetUsersRepoListResult = ResultQuery<UserRepoLists | undefined>;
