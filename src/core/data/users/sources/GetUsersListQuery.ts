import { AxiosError } from "axios";
import { useQuery, UseQueryOptions } from "react-query";
import { Get } from "../../../../api/get";
import { Response } from "src/core/domain/common/BaseResponse";

import { GetUsersListResponse } from "../type";

export const GetUsersList = async (
    valueSearch?: string
): Promise<Response<Array<GetUsersListResponse>>> => {
    try {
        const response = await Get({
            endpoint: `${
                import.meta.env.VITE_GITHUB_API_URL
            }/search/users?q=${valueSearch}`,
        });

        return response.data;
    } catch (error) {
        const err = error as AxiosError;
        throw err.response?.data;
    }
};

export const useGetUsersListQuery = (
    valueSearch?: string,
    options?: UseQueryOptions<Response<Array<GetUsersListResponse>>>
) =>
    useQuery<Response<Array<GetUsersListResponse>>>(
        ["users/list", JSON.stringify(valueSearch)],
        () => GetUsersList(valueSearch),
        {
            enabled: !!JSON.stringify(valueSearch),
            ...options,
        }
    );
