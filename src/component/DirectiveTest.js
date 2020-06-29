/*
 * @Author: your name
 * @Date: 2020-05-31 15:43:50
 * @LastEditTime: 2020-06-01 07:20:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react\web\src\component\DirectiveTest.js
 */ 
import React, { Component } from 'react'

export default class DirectiveTest extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             source:[
                '主页面->测试用例生成页面->表达式输入->生成测试用例与卡诺图->子页面',
                '主页面->测试用例生成页面->模型选择',
                '主页面->测试用例生成页面->导出测试用例',
                '主页面->测试用例生成页面->主页面',
                '主页面->缺陷诊断页面->绘制卡诺图页面->子页面',
                '主页面->缺陷诊断页面->缺陷测试用例->缺陷测试用例界面->子页面',
                '主页面->缺陷诊断页面->缺陷操作记录页面->清除结果界面',
                '主页面->缺陷诊断页面->缺陷动画记录->清除结果界面',
                '主页面->缺陷诊断页面->缺陷动画记录->清除结果界面',
                '主页面->缺陷诊断页面->导出测试用例->导出测试用例结果页面',
                '主页面->变体生成页面->卡诺图页面->子页面',
                '主页面->变体生成页面->缺陷类型选择->变体列表->子页面',
                '主页面->层次关系展示页面->基本单缺陷类型->树状展示页面->子页面',
                '主页面->层次关系展示页面->同向双缺陷类型->展示页面->子页面',
                '主页面->层次关系展示页面->双向双缺陷类型->展示页面->子页面',
                '主页面->登录页面->登录->主页面',
                '主页面->登录页面->注册账号页面->登录页面',
                '主页面->登录页面->找回密码界面->登录页面',
                '主页面->历史记录选框->测试用例历史记录->测试用例生成页面',
                '主页面->历史记录选框->缺陷诊断历史记录->缺陷诊断生成页面',
                '主页面->历史记录选框->变体生成历史记录->变体生成生成页面',
                '主页面->个人信息页面'
              ]
        }
    }
    
    render() {
        let i=0;
        let date = 24
        
        return (
            this.state.source.map((path,index)=>{
                let k=0;
                date +=0.2;
                let subpath = path.split('->');
                let flag = subpath[subpath.length-1] =='子页面'?true:false;
                if(flag) subpath.pop();
                return (
                <div>
                <table id="score">
                    <tr>
                        <th colspan="4">测试用例1-{++i}</th>
                    </tr>
                    <tr>
                        <td>测试人员</td>
                        <td>刘勇琦</td>
                        <td>测试日期</td>
                        <td>2020/5/{parseInt(date)}</td>
                    </tr>
                    <tr>
                        <td>测试类型</td>
                        <td colspan = '3'>导航测试</td>
                    </tr>
                    <tr>
                        <td>测试路径</td>
                        <td colspan = '3'>{path}</td>
                    </tr>
                    <tr>
                        <td>测试操作</td>
                        <td colSpan = '3'>{subpath.map((e,index)=>{
                            return (<li style = {{ "list-style": 'decimal' }} >现在位于在页面{e},点击按钮或导航栏跳转向页面{subpath[index+1]}的按钮</li>
                            )
                        })}</td>
                    </tr>
                    <tr>
                        <td>测试用例复用</td>
                        <td colspan = '3'>{flag?(index>13?'将跳转到测试用例4-1-1 - 4-1-7继续进行测试':'将跳转到测试用例4-2-1 - 4-2-15继续进行测试'):'不存在测试用例复用'}</td>
                    </tr>
                    <tr>
                        <td>预期输出</td>
                        <td colspan = '3'>{`路径：${path}`}</td>
                    </tr>
                    <tr>
                        <td>实际输出</td>
                        <td colspan = '3'>{`路径：${path}`}</td>
                    </tr>
                    <tr>
                        <td>结论</td>
                        <td colspan = '3'>{`跳转路径一致，导航测试通过`}</td>
                    </tr>
                </table>
                <br></br>
            </div>
            )
            })
   
        )
    }
}
