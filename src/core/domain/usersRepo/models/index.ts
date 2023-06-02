type UsersRepoListBased = {
    repoName: string;
    id: number;
    html_url: string;
    description: string;
    url: string;
    forks_count: number;
};

export type UserRepoLists = Array<UsersRepoListBased>;
export type UserRepoList = UsersRepoListBased;
