import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Radio } from 'antd';
import 'antd/dist/antd.css';

// 定义单选框部件AntdRadio，api参数参考https://ant.design/components/radio-cn/
export default class AntdRadioGroup extends Component {

    constructor(props) {
        super(props)
        if (!props.value) {
            props.setProps({ value: props.defaultValue })
        }
    }

    render() {
        // 取得必要属性或参数
        let {
            id,
            style,
            className,
            options,
            defaultValue,
            optionType,
            buttonStyle,
            disabled,
            size,
            setProps,
            loading_state
        } = this.props;

        const onSelect = (e) => {
            setProps({ value: e.target.value })
        }

        // 返回定制化的前端部件
        return (
            <Radio.Group
                id={id}
                className={className}
                style={style}
                options={options}
                defaultValue={defaultValue}
                optionType={optionType}
                buttonStyle={buttonStyle}
                disabled={disabled}
                size={size}
                onChange={onSelect}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }
            />
        );

    }
}

// 定义参数或属性
AntdRadioGroup.propTypes = {
    // 部件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 设置选项参数数组
    options: PropTypes.arrayOf(
        PropTypes.exact({
            // 设置选项的标题内容
            label: PropTypes.string.isRequired,

            // 设置选项的对应值
            value: PropTypes.string.isRequired,

            // 设置是否禁用当前选项
            disabled: PropTypes.bool
        })
    ),

    // 对应当前已选中的值
    value: PropTypes.string,

    // 设置初始化状态下被选中的值
    defaultValue: PropTypes.string,

    // 设置选项的渲染方式，可选的有'default'和'button'，默认为'default'
    optionType: PropTypes.string,

    // 当optionType为'button'时，用于设置按钮的显示样式，
    // 可选的有'outline'和'solid'，默认为'outline'
    buttonStyle: PropTypes.string,

    // 设置是否禁用整体组件
    disabled: PropTypes.bool,

    // 当optionType为'button'时，用于设置按钮的大小规格
    // 可选的有'large'、'middle'和'small'，默认为'middle'
    size: PropTypes.string,

    loading_state: PropTypes.shape({
        /**
         * Determines if the component is loading or not
         */
        is_loading: PropTypes.bool,
        /**
         * Holds which property is loading
         */
        prop_name: PropTypes.string,
        /**
         * Holds the name of the component that is loading
         */
        component_name: PropTypes.string
    }),

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

// 设置默认参数
AntdRadioGroup.defaultProps = {}
