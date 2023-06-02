import { UseQueryOptions } from "react-query";
import { Response } from "src/core/domain/common/BaseResponse";
import { GetUsersListResult } from "src/core/domain/users/repositories/UsersRepositories";
import { mapToUsersModel } from "../mappers/userMapper";
import { useGetUsersListQuery } from "../sources/GetUsersListQuery";
import { GetUsersListResponse } from "../type";

export const useGetUsersListUsecase = (
    valueSearch: string,
    options?: UseQueryOptions<Response<Array<GetUsersListResponse>>>
): GetUsersListResult => {
    const { data, ...rest } = useGetUsersListQuery(valueSearch, options);

    if (data?.items) {
        const usersListMapper = mapToUsersModel(data.items);

        return {
            data: usersListMapper,
            ...rest,
        };
    }

    return {
        data: undefined,
        ...rest,
    };
};
