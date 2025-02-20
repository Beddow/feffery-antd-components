import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { message } from 'antd';
import 'antd/dist/antd.css';

// 定义全局提示部件AntdMessage，api参数参考https://ant.design/components/message-cn/
export default class AntdMessage extends Component {

    render() {
        // 取得必要属性或参数
        let {
            id,
            className,
            style,
            content,
            type,
            duration,
            loading_state,
            setProps
        } = this.props;

        let config = {
            className: className,
            style: style,
            content: content,
            duration: duration
        }

        if (type === 'default') {
            message.open(config)
        } else if (type === 'success') {
            message.success(config)
        } else if (type === 'error') {
            message.error(config)
        } else if (type === 'info') {
            message.info(config)
        } else if (type === 'warning') {
            message.warning(config)
        }


        return (
            <div
                id={id}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }
            ></div>
        );
    }
}

// 定义参数或属性
AntdMessage.propTypes = {
    // 部件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

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

    // 设置文字内容，必填
    content: PropTypes.string,

    // 设置通知类型，可选项有'default'、'success'、'error'、'info'、'warning'，默认为'default'
    type: PropTypes.string,

    // 设置通知从显示到自动消失的时长（秒），默认为3，当传入0时表示不会自动消失
    duration: PropTypes.number,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

// 设置默认参数
AntdMessage.defaultProps = {
    type: 'default'
}
