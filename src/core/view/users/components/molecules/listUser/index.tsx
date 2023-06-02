import React from "react";
import { Collapse } from "antd";
import AtomsLoading from "../../../../components/atoms/loading";
import ListRepoMolecules from "../listRepo";
import { UserLists } from "src/core/domain/users/models";
import { UserRepoLists } from "src/core/domain/usersRepo/models";

type ListUserMoleculesProps = {
    handleSelectPanel: (key: string | string[]) => void;
    dataUser: UserLists;
    dataRepo: UserRepoLists | undefined;
    isLoadingRepo: boolean;
};

const { Panel } = Collapse;

const ListUserMolecules = ({
    handleSelectPanel,
    dataUser,
    dataRepo,
    isLoadingRepo,
}: ListUserMoleculesProps) => {
    return (
        <div>
            <div className="w-full h-[500px] overflow-auto border-2 rounded-lg ">
                <Collapse onChange={handleSelectPanel} accordion>
                    {dataUser.map((user) => (
                        <Panel
                            header={
                                <h1 className="text-base font-bold">
                                    {user.name}
                                </h1>
                            }
                            key={user.name}
                        >
                            {isLoadingRepo && <AtomsLoading />}

                            {dataRepo && (
                                <div className="flex flex-col gap-3">
                                    {dataRepo.map((repo) => (
                                        <ListRepoMolecules
                                            dataRepositories={repo}
                                        />
                                    ))}
                                </div>
                            )}
                        </Panel>
                    ))}
                </Collapse>
            </div>
            <p className="text-sm mt-2 text-left">
                Total found :{" "}
                <span className="font-bold">{dataUser.length} data</span>
            </p>
        </div>
    );
};

export default ListUserMolecules;
