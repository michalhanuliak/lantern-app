import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/react/solid';
import * as R from 'ramda';
import { useCallback, useState } from 'react';
import { Device } from '../types/Device.type';
import { SortByOptions, SortData, SortDirection } from '../types/Sort.type';

const useDeviceSort = () => {
  const [sortOptions, setSortOption] = useState<SortData>({
    sortBy: null,
    direction: null,
  });

  const handleSort = useCallback(
    (data: Device[]) => {
      const { sortBy: optionsSortBy, direction } = sortOptions;

      if (!optionsSortBy || direction === null) return data;

      const optionCompose = R.compose(
        R.toLower,
        R.prop<SortByOptions, string>(optionsSortBy),
      );

      const sortDirection =
        direction === SortDirection.DESC
          ? R.descend(optionCompose)
          : R.ascend(optionCompose);

      const sortByOption = R.sort(sortDirection);

      return sortByOption(data) as Device[];
    },
    [sortOptions],
  );

  const renderSortDirectionArrow = (headerKey: SortByOptions) => {
    if (sortOptions.direction === null || headerKey !== sortOptions.sortBy)
      return null;

    return sortOptions.direction === SortDirection.ASC ? (
      <ArrowSmDownIcon />
    ) : (
      <ArrowSmUpIcon />
    );
  };

  return { handleSort, setSortOption, renderSortDirectionArrow };
};

export default useDeviceSort;
