import { UseQueryOptions } from "react-query";
import { GetUsersRepoListResult } from "src/core/domain/usersRepo/repositories/UsersRepositories";
import { mapToUsersRepoModel } from "../mappers/userRepoMapper";
import { useGetUsersRepoListQuery } from "../sources/GetUsersRepoQuery";
import { GetUsersRepoListResponse } from "../type";

export const useGetUsersRepoListUsecase = (
    user: string,
    options?: UseQueryOptions<Array<GetUsersRepoListResponse>>
): GetUsersRepoListResult => {
    const { data, ...rest } = useGetUsersRepoListQuery(user, options);

    if (data) {
        const usersRepoListMapper = mapToUsersRepoModel(data);

        return {
            data: usersRepoListMapper,
            ...rest,
        };
    }

    return {
        data: undefined,
        ...rest,
    };
};
