import { RecordKey } from '~/types/utility';

type KeyValueConfig = Record<RecordKey, unknown>;

export type FiltersKeyValueConfig = KeyValueConfig;
export type SortersKeyValueConfig = KeyValueConfig;

export type FiltersReducerAction =
    | 'INITIALIZE_FILTERS'
    | 'APPLY_FILTERS_AND_SORT'
    | 'UPDATE_ENTITIES'
    | 'RESET_FILTERS';

export type StateFilters<TFiltersConfig extends FiltersKeyValueConfig> =
    Partial<TFiltersConfig>;

export type StateSorters<TSortersConfig extends SortersKeyValueConfig> =
    Partial<TSortersConfig>;

export type FilterFunctions<
    TEntity,
    TFilterConfig extends FiltersKeyValueConfig
> = {
    [key in keyof TFilterConfig]: (
        arg?: TFilterConfig[key]
    ) => (a: TEntity) => boolean;
};

export type SorterFunctions<
    TEntity,
    TSorterConfig extends SortersKeyValueConfig
> = {
    [key in keyof TSorterConfig]: (
        arg?: TSorterConfig[key]
    ) => (a: TEntity, b: TEntity) => number;
};

type Action<
    TAction extends FiltersReducerAction,
    TEntity,
    TFilterConfig extends FiltersKeyValueConfig,
    TSorterConfig extends SortersKeyValueConfig
> = {
    type: TAction;
    meta: {
        filtersFunc?: FilterFunctions<TEntity, TFilterConfig>;
        sortersFunc?: SorterFunctions<TEntity, TSorterConfig>;
    };
};

export type InitializeDispatchAction<
    TEntity,
    TFilterConfig extends FiltersKeyValueConfig,
    TSorterConfig extends SortersKeyValueConfig
> = Action<'INITIALIZE_FILTERS', TEntity, TFilterConfig, TSorterConfig> & {
    payload: {
        entities: TEntity[];
        filters?: StateFilters<TFilterConfig>;
        sorters?: StateSorters<TSorterConfig>;
    };
};

export type UpdateEntitiesDispatchAction<
    TEntity,
    TFilterConfig extends FiltersKeyValueConfig,
    TSorterConfig extends SortersKeyValueConfig
> = Action<'UPDATE_ENTITIES', TEntity, TFilterConfig, TSorterConfig> & {
    payload: {
        entities: TEntity[];
    };
};

export type ApplyFiltersAndSortDispatchAction<
    TEntity,
    TFilterConfig extends FiltersKeyValueConfig,
    TSorterConfig extends SortersKeyValueConfig
> = Action<'APPLY_FILTERS_AND_SORT', TEntity, TFilterConfig, TSorterConfig> & {
    payload: {
        filters?: StateFilters<TFilterConfig>;
        sorters?: StateSorters<TSorterConfig>;
    };
};

export type ResetFiltersDispatchAction<
    TEntity,
    TFilterConfig extends FiltersKeyValueConfig,
    TSorterConfig extends SortersKeyValueConfig
> = Action<'RESET_FILTERS', TEntity, TFilterConfig, TSorterConfig> & {
    payload: {};
};

export type FiltersAction<
    TEntity,
    TFilterConfig extends FiltersKeyValueConfig,
    TSorterConfig extends SortersKeyValueConfig
> =
    | InitializeDispatchAction<TEntity, TFilterConfig, TSorterConfig>
    | UpdateEntitiesDispatchAction<TEntity, TFilterConfig, TSorterConfig>
    | ApplyFiltersAndSortDispatchAction<TEntity, TFilterConfig, TSorterConfig>
    | ResetFiltersDispatchAction<TEntity, TFilterConfig, TSorterConfig>;

export type InitializeFiltersAction<
    TEntity,
    TFilterConfig extends FiltersKeyValueConfig,
    TSorterConfig extends SortersKeyValueConfig
> = (
    entities: TEntity[],
    filters?: StateFilters<TFilterConfig>,
    sorters?: StateSorters<TSorterConfig>
) => void;

export type ApplyFiltersAndSortAction<
    TFilterConfig extends FiltersKeyValueConfig,
    TSorterConfig extends SortersKeyValueConfig
> = (
    filters?: StateFilters<TFilterConfig>,
    sorters?: StateSorters<TSorterConfig>
) => void;

export type UpdateEntitiesAction<TEntity> = (entities: TEntity[]) => void;

export type ResetFiltersAction = () => void;

export type UseFiltersState<
    TEntity,
    TFilterConfig extends FiltersKeyValueConfig,
    TSorterConfig extends SortersKeyValueConfig
> = {
    all: TEntity[];
    show: TEntity[];
    filters: StateFilters<TFilterConfig>;
    sorters: StateSorters<TSorterConfig>;
};

export type InitialFiltersState<
    TEntity,
    TFilterConfig extends FiltersKeyValueConfig,
    TSorterConfig extends SortersKeyValueConfig
> = {
    all: TEntity[];
    show: TEntity[];
    filters: StateFilters<TFilterConfig>;
    sorters: StateSorters<TSorterConfig>;
};

export type UseFiltersAction<
    TEntity,
    TFilterConfig extends FiltersKeyValueConfig,
    TSorterConfig extends SortersKeyValueConfig
> = {
    initializeFilters: InitializeFiltersAction<
        TEntity,
        TFilterConfig,
        TSorterConfig
    >;
    applyFiltersAndSort: ApplyFiltersAndSortAction<
        TFilterConfig,
        TSorterConfig
    >;
    updateEntities: UpdateEntitiesAction<TEntity>;
    resetFilters: ResetFiltersAction;
};
