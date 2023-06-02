import React from "react";
import { AiFillStar } from "react-icons/ai";
import { UserRepoList } from "src/core/domain/usersRepo/models";

type ListRepoMoleculesProps = {
    dataRepositories: UserRepoList;
};

const ListRepoMolecules = ({ dataRepositories }: ListRepoMoleculesProps) => {
    return (
        <div className="flex flex-row justify-between items-start bg-slate-300 p-3 gap-3">
            <div className="flex flex-col">
                <a
                    className="font-bold text-blue-500 hover:underline hover:text-blue-700"
                    href={dataRepositories.html_url}
                    target="_blank"
                >
                    {dataRepositories.repoName}
                </a>
                <p>{dataRepositories.description}</p>
            </div>
            <div className="flex gap-2 items-center justify-start">
                <AiFillStar />
                <p>{dataRepositories.forks_count}</p>
            </div>
        </div>
    );
};

export default ListRepoMolecules;
