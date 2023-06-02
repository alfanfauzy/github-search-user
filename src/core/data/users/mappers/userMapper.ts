import { UserLists } from "src/core/domain/users/models";
import { GetUsersListResponse } from "../type";

export const mapToUsersModel = (
    datas: Array<GetUsersListResponse>
): UserLists =>
    datas.map((user) => ({
        name: user.login,
        avatar_url: user.avatar_url,
        gravatar_id: user.gravatar_id,
        id: user.id,
        url: user.url,
    }));
