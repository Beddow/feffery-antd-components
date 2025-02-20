# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdlayout

"""
    'feffery'_antdlayout(;kwargs...)
    'feffery'_antdlayout(children::Any;kwargs...)
    'feffery'_antdlayout(children_maker::Function;kwargs...)


An AntdLayout component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The content of the tab - will only be displayed if this tab is selected
- `id` (String; optional)
- `className` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `style` (Dict; optional)
"""
function 'feffery'_antdlayout(; kwargs...)
        available_props = Symbol[:children, :id, :className, :loading_state, :style]
        wild_props = Symbol[]
        return Component("'feffery'_antdlayout", "AntdLayout", "feffery_antd_components", available_props, wild_props; kwargs...)
end

'feffery'_antdlayout(children::Any; kwargs...) = 'feffery'_antdlayout(;kwargs..., children = children)
'feffery'_antdlayout(children_maker::Function; kwargs...) = 'feffery'_antdlayout(children_maker(); kwargs...)

