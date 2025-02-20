# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdSteps(Component):
    """An AntdSteps component.


Keyword arguments:

- id (string; optional)

- className (string; optional)

- current (number; default 0)

- direction (string; default 'horizontal')

- labelPlacement (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- progressDot (boolean; default False)

- size (string; default 'default')

- status (string; default 'process')

- steps (list of dicts; optional)

    `steps` is a list of dicts with keys:

    - description (string; optional)

    - subTitle (string; optional)

    - title (string; required)

- style (dict; optional)

- type (string; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, loading_state=Component.UNDEFINED, current=Component.UNDEFINED, direction=Component.UNDEFINED, labelPlacement=Component.UNDEFINED, progressDot=Component.UNDEFINED, size=Component.UNDEFINED, status=Component.UNDEFINED, type=Component.UNDEFINED, steps=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'current', 'direction', 'labelPlacement', 'loading_state', 'progressDot', 'size', 'status', 'steps', 'style', 'type']
        self._type = 'AntdSteps'
        self._namespace = 'feffery_antd_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'current', 'direction', 'labelPlacement', 'loading_state', 'progressDot', 'size', 'status', 'steps', 'style', 'type']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdSteps, self).__init__(**args)
