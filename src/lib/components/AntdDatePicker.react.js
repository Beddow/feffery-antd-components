import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DatePicker, ConfigProvider } from 'antd';
import moment from 'moment';
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.css';

// 定义日期选择部件AntdDatePicker，api参数参考https://ant.design/components/date-picker-cn/
export default class AntdDatePicker extends Component {
    render() {
        // 取得必要属性或参数
        var { 
            id, 
            className, 
            style, 
            setProps, 
            picker, 
            showTime, 
            placeholder, 
            defaultPickerValue, 
            bordered,
            loading_state 
        } = this.props;

        function onChange(date, dateString) {
            if (typeof dateString == typeof '') {
                setProps({ selectedDate: dateString })
            }
        }

        // defaultPickerValue为空时默认定位到今日对应面板位置
        if (!defaultPickerValue){
            defaultPickerValue = {
                value: moment(new Date()).format('YYYY-MM-DD'),
                format: 'YYYY-MM-DD'
            }
        }

        // 返回定制化的前端部件
        return (
            <div>
                <ConfigProvider locale={zhCN}>
                    <DatePicker
                        id={id}
                        className={className}
                        style={style}
                        onChange={onChange}
                        picker={picker}
                        placeholder={placeholder}
                        bordered={bordered}
                        defaultPickerValue={moment(defaultPickerValue.value, defaultPickerValue.format)}
                        showTime={showTime}
                        data-dash-is-loading={
                            (loading_state && loading_state.is_loading) || undefined
                        }
                        getPopupContainer={(triggerNode) => triggerNode.parentNode}
                    />
                </ConfigProvider>
            </div>
        );
    }
}

// 定义参数或属性
AntdDatePicker.propTypes = {
    // 部件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 设置日期选择的粒度（date：精确到天，week：精确到周，month：精确到月，quarter：精确到季度，year：精确到年。默认为date）
    picker: PropTypes.string,

    // 对应用户选中的日期字符串
    selectedDate: PropTypes.string,

    // 设置是否显示时间选择界面，默认为false即不显示
    showTime: PropTypes.bool,

    // 设置是否显示输入框内容清除按钮，默认为true即不显示
    allowClear: PropTypes.bool,

    // 设置日期面板默认的时间位置
    defaultPickerValue: PropTypes.exact(
        {
            value: PropTypes.string,

            format: PropTypes.string
        }
    ),

    // 空白输入下的填充说明文字
    placeholder: PropTypes.string,

    // 用于设置是否显示边框，默认为true即显示边框
    bordered: PropTypes.bool,

    /**
    * Object that holds the loading state object coming from dash-renderer
    */
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
AntdDatePicker.defaultProps = {
    picker: 'date',
    showTime: false,
    allowClear: true,
    bordered: true,
    style: {
        width: 220
    }
}
