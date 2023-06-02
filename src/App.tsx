import React, { useState } from "react";
import AtomsLoading from "./core/view/components/atoms/loading";
import SearchBox from "./core/view/users/components/molecules/searchBox";
import { useGetUsersListViewModal } from "./core/view/users/view-models/GetUsersListsViewModel";
import { useGetUsersRepoListViewModal } from "./core/view/usersRepo/view-models/GetUsersRepoListsViewModel";
import ListUserMolecules from "./core/view/users/components/molecules/listUser";

function App() {
    const [inputValue, setInputValue] = useState("");
    const [searchValue, setSearchValue] = useState("");
    const [selectedUser, setSelectedUser] = useState("");

    const { data: ListUser, isLoading } = useGetUsersListViewModal(
        searchValue,
        {
            enabled: searchValue !== "",
        }
    );

    const {
        data: ListRepo,
        refetch,
        isLoading: isLoadingListRepo,
    } = useGetUsersRepoListViewModal(selectedUser, {
        enabled: selectedUser.length !== 0,
    });

    const handleSelectedUser = (key: string | string[]) => {
        setSelectedUser(key as string);

        if (selectedUser.length !== 0) {
            refetch();
        }
    };

    const isEmptyInput = inputValue === "";
    const isEmptySearch = searchValue === "";

    return (
        <div className="bg-slate-200 h-screen w-screen text-black">
            <div className="pt-10 m-auto w-[500px] border border-neutral-700mx-auto min-h-screen shadow-md bg-white px-5">
                <h2 className="font-bold text-xl py-3 text-center">
                    Search Github User
                </h2>

                <SearchBox
                    searchValue={searchValue}
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    setSearchValue={setSearchValue}
                />

                {isLoading && <AtomsLoading />}

                {!isEmptyInput && !isEmptySearch && ListUser && (
                    <ListUserMolecules
                        handleSelectPanel={handleSelectedUser}
                        dataUser={ListUser}
                        dataRepo={ListRepo}
                        isLoadingRepo={isLoadingListRepo}
                    />
                )}
            </div>
        </div>
    );
}

export default App;
