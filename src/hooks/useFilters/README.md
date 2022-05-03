# useFilters hook

This hook has been designed for client side filtering.

## useFilters returned value

useFilters hook returns following structure:

    {
        state: // state of useReducer
        actions: // functions to execute actions of useReducer
    }

## useReducer state

Hook was built with the help of React hook _useReducer_. useReducer has the following state:

    {
        all: [],
        show: [],
        filters: {
            [FILTER_ID]: filterValue
        },
        sorters: {
            [SORTER_ID]: sorterValue
        }
    }

Meanings are the following:

-   **all**: initial entities;
-   **show**: sorted and filtered entities;
-   **filters**: object which contains values for filtering. For instance, value can store _id_, if we want to filter by id;
-   **sorters**: object which contains values for sortering. For instance, value can be boolean to indecate if we need to apply sorting or not.

## Filter and sort functions

useFilters hook has three parameters:

-   **initialState**: state for _useReducer_ hook;
-   **filtersFunc**: functions for filtering;
-   **sortersFunc**: functions for sortering;

Filter functions should have following structure:

    {
        [FILTER_ID]: (value) => (entity) => {
            <!-- code that returns **true** or **false** -->
        }
    }

Sort functions have the same structure:

    {
        [SORTER_ID]: (value) => (entity) => {
            <!-- code that returns either **1**, **0** or **-1** -->
        }
    }

> IMPORTANT: we need to make sure that, for instance, **FILTER_ID** key in the **_filters_** object in reducer state is the same as in filter functions object. Otherwise they wont match.

---

### NOTE:

**value** variable will have the same value as we have in reducer state. For example, if we have following state:

    {
        ...
        filters: {
            ['FILTER_BY_ID']: 1
        }
        ...
    }

Then function will be executed as following:

    {
        (value as 1) => (entity) => entity.id === value
    }

---

## useFilters Actions

There are three functions that are returned from useFilters hook in actions object:

### initializeFilters

This function is used to initialize state with entities and provide initial filters and sorters. Thus it has following parameters:

-   **entities**;
-   **filters**;
-   **sorters**.

### applyFiltersAndSort

This function is used to apply new filters and sorters. Parameters are following:

-   **filters**;
-   **sorters**.

### updateEntities

This function is used to set state with new entities without changing filters or sorters. Parameters are following:

-   **entities** - new entites.

# FiltersContext

**FiltersContext** is designed to avoid prop drilling.

This component is a HOC over two contexts. We need to apply props that come from **_useFilters_** hook.

Here is typical usage:

    <FiltersContext state={state} actions={actions}>
        <Component />
    </FiltersContext>

## useFiltersContext

**useFiltersContext** is hook, that was designed in order to simplify usage of context.

This hook returns value from context:

    {
        state: // state
        actions: // actions
    }
