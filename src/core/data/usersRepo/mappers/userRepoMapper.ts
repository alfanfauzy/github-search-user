import { UserRepoLists } from "src/core/domain/usersRepo/models";
import { GetUsersRepoListResponse } from "../type";

export const mapToUsersRepoModel = (
    datas: Array<GetUsersRepoListResponse>
): UserRepoLists =>
    datas.map((repo) => ({
        repoName: repo.name,
        description: repo.description,
        forks_count: repo.forks_count,
        html_url: repo.html_url,
        id: repo.id,
        url: repo.url,
    }));
