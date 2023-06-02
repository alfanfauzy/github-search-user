import { UseQueryOptions } from "react-query";
import { GetUsersListResponse } from "src/core/data/users/type";
import { useGetUsersListUsecase } from "../../../data/users/usecases/GetUsersListUseCases";
import { Response } from "src/core/domain/common/BaseResponse";
import { GetUsersListResult } from "src/core/domain/users/repositories/UsersRepositories";

export const useGetUsersListViewModal = (
    valueSearch: string,
    options?: UseQueryOptions<Response<Array<GetUsersListResponse>>>
): GetUsersListResult => {
    const result = useGetUsersListUsecase(valueSearch, options);

    return result;
};
