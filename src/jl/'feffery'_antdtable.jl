# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdtable

"""
    'feffery'_antdtable(;kwargs...)

An AntdTable component.

Keyword arguments:
- `id` (String; optional)
- `autoIgnorePagination` (Bool; optional)
- `bordered` (Bool; optional)
- `className` (String; optional)
- `clickedContent` (String; optional)
- `columns` (optional): . columns has the following type: Array of lists containing elements 'title', 'dataIndex', 'renderOptions', 'fixed', 'editable', 'align', 'width', 'ellipsis', 'sorter', 'render'.
Those elements have the following types:
  - `title` (String; required)
  - `dataIndex` (String; required)
  - `renderOptions` (optional): . renderOptions has the following type: lists containing elements 'renderType', 'renderLinkText', 'renderButtonPopConfirmProps'.
Those elements have the following types:
  - `renderType` (String; optional)
  - `renderLinkText` (String; optional)
  - `renderButtonPopConfirmProps` (optional): . renderButtonPopConfirmProps has the following type: lists containing elements 'title', 'okText', 'cancelText'.
Those elements have the following types:
  - `title` (String; required)
  - `okText` (String; optional)
  - `cancelText` (String; optional)
  - `fixed` (String; optional)
  - `editable` (Bool; optional)
  - `align` (String; optional)
  - `width` (Real | String; optional)
  - `ellipsis` (Bool | Real | String | Dict | Array; optional)
  - `sorter` (Bool | Real | String | Dict | Array; optional)
  - `render` (Bool | Real | String | Dict | Array; optional)s
- `currentData` (Array; optional)
- `data` (Array of Dicts; optional)
- `filter` (Dict; optional)
- `filterOptions` (Dict; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `maxHeight` (Real; optional)
- `mode` (String; optional)
- `nClicksButton` (Real; optional)
- `pagination` (optional): . pagination has the following type: Bool | lists containing elements 'position', 'pageSize', 'current', 'pageSizeOptions', 'showQuickJumper', 'showTotalPrefix', 'showTotalSuffix', 'total'.
Those elements have the following types:
  - `position` (String; optional)
  - `pageSize` (Real; optional)
  - `current` (Real; optional)
  - `pageSizeOptions` (Array of Reals; optional)
  - `showQuickJumper` (Bool; optional)
  - `showTotalPrefix` (String; optional)
  - `showTotalSuffix` (String; optional)
  - `total` (Real; optional)
- `popupContainerId` (String; optional)
- `recentlyButtonClickedRow` (Dict; optional)
- `recentlyChangedRow` (Dict; optional)
- `sortOptions` (optional): . sortOptions has the following type: lists containing elements 'sortDataIndexes', 'multiple'.
Those elements have the following types:
  - `sortDataIndexes` (Array of Strings; optional)
  - `multiple` (Bool; optional)
- `sorter` (optional): . sorter has the following type: lists containing elements 'columns', 'orders'.
Those elements have the following types:
  - `columns` (Array of Strings; optional)
  - `orders` (Array of Strings; optional)
- `style` (Dict; optional)
- `titlePopoverInfo` (Dict; optional)
"""
function 'feffery'_antdtable(; kwargs...)
        available_props = Symbol[:id, :autoIgnorePagination, :bordered, :className, :clickedContent, :columns, :currentData, :data, :filter, :filterOptions, :loading_state, :maxHeight, :mode, :nClicksButton, :pagination, :popupContainerId, :recentlyButtonClickedRow, :recentlyChangedRow, :sortOptions, :sorter, :style, :titlePopoverInfo]
        wild_props = Symbol[]
        return Component("'feffery'_antdtable", "AntdTable", "feffery_antd_components", available_props, wild_props; kwargs...)
end

