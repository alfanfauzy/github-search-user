import { UseMutationResult, UseQueryResult } from "react-query";

export type Response<TData = unknown> = {
    total_count: number;
    incomplete_results: boolean;
    items: TData;
};

export type ResultQuery<TData = unknown, TError = unknown> = Omit<
    UseQueryResult<unknown, TError>,
    "data"
> & {
    data: TData;
};

export type ResultMutation<
    TData = unknown,
    TError = unknown,
    TVariables = unknown
> = Omit<
    UseMutationResult<unknown, TError, TVariables>,
    "data" | "mutate" | "mutateAsync"
> & {
    data: TData;
};
