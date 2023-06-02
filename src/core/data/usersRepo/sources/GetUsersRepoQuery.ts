import { AxiosError } from "axios";
import { useQuery, UseQueryOptions } from "react-query";
import { Get } from "../../../../api/get";

import { GetUsersRepoListResponse } from "../type";

export const GetUsersRepoList = async (
    user?: string
): Promise<Array<GetUsersRepoListResponse>> => {
    try {
        const response = await Get({
            endpoint: `${
                import.meta.env.VITE_GITHUB_API_URL
            }/users/${user}/repos`,
        });

        return response.data;
    } catch (error) {
        const err = error as AxiosError;
        throw err.response?.data;
    }
};

export const useGetUsersRepoListQuery = (
    user?: string,
    options?: UseQueryOptions<Array<GetUsersRepoListResponse>>
) =>
    useQuery<Array<GetUsersRepoListResponse>>(
        ["users-repo/list", JSON.stringify(user)],
        () => GetUsersRepoList(user),
        {
            enabled: !!JSON.stringify(user),
            ...options,
        }
    );
