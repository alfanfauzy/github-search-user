import { UseQueryOptions } from "react-query";
import { GetUsersRepoListResponse } from "src/core/data/usersRepo/type";
import { useGetUsersRepoListUsecase } from "../../../data/usersRepo/usecases/GetUsersRepoListUseCases";
import { GetUsersRepoListResult } from "src/core/domain/usersRepo/repositories/UsersRepositories";

export const useGetUsersRepoListViewModal = (
    user: string,
    options?: UseQueryOptions<Array<GetUsersRepoListResponse>>
): GetUsersRepoListResult => {
    const result = useGetUsersRepoListUsecase(user, options);

    return result;
};
